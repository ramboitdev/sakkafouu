import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { sampleRecipes } from '../samples/sampleData'

export default function RecipesPage(){
  return (
    <div>
      <h2 className="text-xl font-semibold">Recettes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sampleRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  )
}
