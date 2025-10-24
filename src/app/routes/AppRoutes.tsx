import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from '../../modules/home/pages/HomePage'
import RecipesPage from '../../modules/recipes/pages/RecipesPage'
import RecipeDetailPage from '../../modules/recipes/pages/RecipeDetailPage'
import NotFound from '../../shared/components/NotFound'

export default function AppRoutes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-4 py-3">
        <div className="container mx-auto flex gap-4">
          <Link to="/" className="font-semibold">Sakkaffou</Link>
          <Link to="/recipes" className="text-sm">Recettes</Link>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
