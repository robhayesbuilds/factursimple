import {
  IconShieldCheck,
  IconLock,
  IconServer,
  IconCertificate,
} from "@tabler/icons-react"

const badges = [
  {
    icon: IconShieldCheck,
    text: "Conforme réforme 2026",
  },
  {
    icon: IconLock,
    text: "Données chiffrées",
  },
  {
    icon: IconServer,
    text: "Hébergé en France",
  },
  {
    icon: IconCertificate,
    text: "Factur-X certifié",
  },
]

export function TrustBadges() {
  return (
    <div className="border-y border-border/50 bg-muted/20 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2.5 text-sm"
            >
              <badge.icon className="h-5 w-5 text-primary" stroke={1.5} />
              <span className="font-medium text-muted-foreground">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
