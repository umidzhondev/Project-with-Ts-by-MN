import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode;
} 

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
} 

export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
    
    const [isOPen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]> (
        "shopping-cart",
        []
    )
    
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    
    function getItemQuantity(id: number) {
       return cartItems.find(item => item.id ===id) ?.qunatity || 0
    }
    
    
    return (
        <ShoppingCartContext.Provider 
        value={{
            openCart,
            closeCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}