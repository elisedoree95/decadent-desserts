import { createContext, ReactNode, useContext, useState } from "react";
import Cart from "../components/Cart/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

type CartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeItem: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}

const CartContex = createContext({} as CartContext)

export const useCart = () => useContext(CartContex)

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('dd-cart', [])
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const openCart = () => setCartIsOpen(true)
    const closeCart = () => setCartIsOpen(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const getItemQuantity = (id: number) => cartItems.find(i => i.id === id)?.quantity || 0

    const increaseItemQuantity = (id: number) => {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id) == null) {
                return [...prevItems, { id, quantity: 1 }]
            } else {
                return prevItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity + 1 }
                    else return item
                })
            }
        })
    }

    const decreaseItemQuantity = (id: number) => {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id)?.quantity == 1) {
                return prevItems.filter(item => item.id !== id)
            } else {
                return prevItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity - 1 }
                    else return item
                })
            }
        })
    }

    const removeItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const value = {
        openCart,
        closeCart,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        cartQuantity,
        cartItems
    }
    return (
        <CartContex.Provider value={value}>
            {children}
            <Cart isOpen={cartIsOpen}/>
        </CartContex.Provider>
    )
}
