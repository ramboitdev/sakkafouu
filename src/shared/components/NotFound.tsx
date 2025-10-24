import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">404 — Page non trouvée</h1>
      <p className="mt-4">Désolé, la page que vous cherchez n'existe pas.</p>
      <Link to="/" className="mt-6 inline-block underline">Retour à l'accueil</Link>
    </div>
  )
}
