import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Bienvenue sur Sakkaffou</h1>
      <p className="mt-2">Application de recettes intelligente (squelette).</p>
      <div className="mt-6">
        <Link to="/recipes" className="px-4 py-2 bg-sky-600 text-white rounded">Voir les recettes</Link>
      </div>
    </div>
  )
}
