import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({

      geciciSep: {cartItems: [], totalPrice: 0, totalQty: 0, totalTax: 0, totalWithoutTax: 0},
      miniCartOpen: false,
      // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      // removeAllBears: () => set({ bears: 0 }),
      updateGeciciSep: (newSep) => set({ geciciSep: newSep }),
      
      // switchMiniCartOpen: ( status ) => set((state) => ({ miniCartOpen: status })),
      closeMiniCart: () => set((state) => ({ miniCartOpen: false })),
      openMiniCart: () => set((state) => ({ miniCartOpen: true })),
      
    }),
    {
      name: 'geciciSepLocal',
      partialize: (state) => ({ geciciSep: state.geciciSep }), // Only persist bears state
    }
  )
)