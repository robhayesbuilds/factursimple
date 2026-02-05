"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { IconMail, IconArrowRight, IconCheck, IconLoader2 } from "@tabler/icons-react"

const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Veuillez entrer un email valide"),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

interface SubmitState {
  status: "idle" | "success" | "already-exists" | "error"
  message?: string
}

export function WaitlistForm({ source = "landing-page" }: { source?: string }) {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, source }),
      })

      const result = await response.json()

      if (!response.ok) {
        setSubmitState({ status: "error", message: result.error || "Une erreur est survenue" })
        return
      }

      if (result.alreadyExists) {
        setSubmitState({ status: "already-exists" })
      } else {
        setSubmitState({ status: "success" })
        reset()
      }
    } catch {
      setSubmitState({ status: "error", message: "Erreur de connexion. Réessayez." })
    }
  }

  if (submitState.status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-green-50 px-5 py-4 text-green-700 dark:bg-green-900/30 dark:text-green-200">
        <IconCheck className="h-5 w-5 flex-shrink-0" />
        <span>Merci ! Vous serez prévenu dès le lancement.</span>
      </div>
    )
  }

  if (submitState.status === "already-exists") {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-5 py-4 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200">
        <IconMail className="h-5 w-5 flex-shrink-0" />
        <span>Vous êtes déjà inscrit ! On vous contacte bientôt.</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3"
    >
      <div className="flex gap-2">
        <div className="relative flex-1">
          <IconMail className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Votre adresse email"
            className="h-12 pl-11 text-base"
            {...register("email")}
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          disabled={isSubmitting}
          className="h-12 gap-2 px-6"
        >
          {isSubmitting ? (
            <>
              <IconLoader2 className="h-4 w-4 animate-spin" />
              <span className="hidden sm:inline">Envoi...</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Rejoindre</span>
              <IconArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      {errors.email && (
        <p className="text-sm text-destructive">
          {errors.email.message}
        </p>
      )}
      {submitState.status === "error" && (
        <p className="text-sm text-destructive">
          {submitState.message}
        </p>
      )}
    </form>
  )
}
