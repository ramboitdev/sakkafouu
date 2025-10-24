import api from '../../infrastructure/api/apiClient'

export async function fetchRecipes(){
  const res = await api.get('/recipes')
  return res.data
}
