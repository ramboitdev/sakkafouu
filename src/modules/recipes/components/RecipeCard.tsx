import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe } : { recipe: any }){
  return (
    <article className="border rounded p-4 bg-white shadow-sm">
      <h3 className="font-semibold text-lg">{recipe.title}</h3>
      <p className="text-sm mt-2">{recipe.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <Link to={`/recipes/${recipe.id}`} className="text-sm underline">Voir</Link>
        <span className="text-xs text-gray-500">{recipe.duration} min</span>
      </div>
    </article>
  )
}
