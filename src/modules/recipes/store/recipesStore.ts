import create from 'zustand'

type State = {
  favorites: string[]
  toggleFavorite: (id: string) => void
}

export const useRecipesStore = create<State>((set) => ({
  favorites: [],
  toggleFavorite: (id) =>
    set((s) => ({
      favorites: s.favorites.includes(id) ? s.favorites.filter(x => x !== id) : [...s.favorites, id]
    })),
}))
