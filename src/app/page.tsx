'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Erreur lors de l\'inscription. Veuillez réessayer.')
      }
    } catch {
      alert('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600">
            FacturSimple
          </div>
          <div className="hidden md:flex space-x-8 text-sm text-slate-600 dark:text-slate-300">
            <a href="#fonctionnalites" className="hover:text-primary-600">Fonctionnalités</a>
            <a href="#tarifs" className="hover:text-primary-600">Tarifs</a>
            <a href="#faq" className="hover:text-primary-600">FAQ</a>
            <a href="/blog" className="hover:text-primary-600">Blog</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="animate-pulse">⚡</span>
            Obligatoire dès septembre 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            La facturation électronique
            <span className="text-primary-600"> enfin simple</span>
            <br />pour les micro-entrepreneurs
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Soyez conforme à la réforme 2026 sans vous ruiner. 
            Créez des factures Factur-X en quelques clics, à partir de <strong>9€/mois</strong>.
          </p>

          {/* Email Signup */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Envoi...' : 'Rejoindre la liste d\'attente'}
              </button>
            </form>
          ) : (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-6 py-4 rounded-lg max-w-md mx-auto mb-8">
              ✓ Merci ! Vous serez prévenu dès le lancement.
            </div>
          )}

          <p className="text-sm text-slate-500">
            Rejoignez +500 micro-entrepreneurs qui préparent déjà leur conformité
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-100 dark:bg-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              La réforme arrive. Êtes-vous prêt ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <div className="text-red-500 text-2xl mb-4">❌</div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  Ce qui ne marchera plus
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li>• Factures PDF faites sous Word ou Excel</li>
                  <li>• Envoi de factures par simple email</li>
                  <li>• Logiciels non certifiés</li>
                  <li>• Pas de transmission à l'administration fiscale</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
                <div className="text-green-500 text-2xl mb-4">✓</div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  Ce qu'exige la loi
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li>• Format structuré (Factur-X, UBL, CII)</li>
                  <li>• Transmission via plateforme agréée</li>
                  <li>• E-reporting des transactions B2C</li>
                  <li>• Stockage conforme pendant 10 ans</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 dark:text-slate-400">
                Pennylane coûte <strong className="text-red-500">99€/mois</strong>. 
                Trop cher pour vos besoins simples ?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">
            Tout ce dont vous avez besoin. Rien de plus.
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
            Pas de fonctions inutiles. Juste la conformité, simplement.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Factures Factur-X
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Créez des factures conformes en quelques clics. PDF lisible + données structurées.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                E-reporting automatique
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Vos données transmises automatiquement à l'administration. Zéro action requise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Mobile-first
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Créez et envoyez vos factures depuis votre téléphone, où que vous soyez.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Réception incluse
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Recevez les factures électroniques de vos fournisseurs dès sept 2026.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Stockage sécurisé
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Vos factures archivées 10 ans conformément à la loi. Hébergement en France.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Sans comptable
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Interface simple pour gérer seul. Pas besoin de formation ni d'expert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="bg-slate-100 dark:bg-slate-800/50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">
              Un prix juste pour les micro-entrepreneurs
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Pas de frais cachés. Pas de prix qui explose avec la croissance.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Solo Plan */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border-2 border-transparent hover:border-primary-500 transition-colors">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Solo</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Pour les auto-entrepreneurs</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">9€</span>
                  <span className="text-slate-500">/mois</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Jusqu'à 30 factures/mois
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Format Factur-X conforme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    E-reporting automatique
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Réception illimitée
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Support par email
                  </li>
                </ul>
                <button className="w-full py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                  Bientôt disponible
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-primary-600 rounded-2xl p-8 shadow-lg relative">
                <div className="absolute -top-3 right-6 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  POPULAIRE
                </div>
                <h3 className="font-semibold text-white mb-2">Pro</h3>
                <p className="text-sm text-primary-100 mb-4">Pour les micro-entreprises actives</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">19€</span>
                  <span className="text-primary-100">/mois</span>
                </div>
                <ul className="space-y-3 text-sm text-primary-50 mb-8">
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Factures illimitées
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Tout du plan Solo
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Devis et avoirs
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Suivi des paiements
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span>
                    Support prioritaire
                  </li>
                </ul>
                <button className="w-full py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                  Rejoindre la liste d'attente
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
              Comparez : Pennylane = 99€/mois • Tiime = 39€/mois • FacturSimple = <strong>9€/mois</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Suis-je concerné par la réforme même en franchise de TVA ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Oui ! Toutes les entreprises assujetties à la TVA sont concernées, même celles en franchise en base. 
                "Assujetti" signifie potentiellement redevable — donc vous êtes impacté.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Quand dois-je être prêt ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                <strong>1er septembre 2026 :</strong> vous devez pouvoir recevoir des factures électroniques.<br/>
                <strong>1er septembre 2027 :</strong> vous devez émettre vos factures au format électronique.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Qu'est-ce que le format Factur-X ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                C'est un format hybride : un PDF lisible par l'humain + des données structurées (XML) 
                lisibles par les logiciels. C'est le standard français pour la facturation électronique.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                Puis-je continuer à utiliser Excel ou Word ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Non. À partir de 2027, les factures PDF simples envoyées par email ne seront plus conformes. 
                Vous devez utiliser une plateforme agréée et un format structuré.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                FacturSimple sera-t-il une plateforme agréée ?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Nous travaillons à obtenir l'agrément PDP (Plateforme de Dématérialisation Partenaire) 
                avant septembre 2026. En attendant, nous passerons par des partenaires agréés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à simplifier votre conformité ?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Rejoignez la liste d'attente et soyez parmi les premiers à accéder à FacturSimple 
            avant la date limite de septembre 2026.
          </p>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Rejoindre la liste d'attente →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold text-white mb-4 md:mb-0">
              FacturSimple
            </div>
            <div className="text-sm">
              © 2026 FacturSimple. Conçu en France 🇫🇷
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
