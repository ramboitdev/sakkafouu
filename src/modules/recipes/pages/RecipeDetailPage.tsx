import React from 'react'
import { useParams } from 'react-router-dom'
import { sampleRecipes } from '../samples/sampleData'

export default function RecipeDetailPage(){
  const { id } = useParams()
  const r = sampleRecipes.find(s => s.id === id)
  if (!r) return <div>Recette introuvable</div>
  return (
    <div>
      <h2 className="text-2xl font-bold">{r.title}</h2>
      <p className="mt-2">{r.description}</p>
      <h3 className="mt-4 font-semibold">Ingrédients</h3>
      <ul className="list-disc pl-6">
        {r.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
      <h3 className="mt-4 font-semibold">Étapes</h3>
      <ol className="list-decimal pl-6">
        {r.steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>
    </div>
  )
}
