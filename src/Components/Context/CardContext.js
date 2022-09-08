import React, { useContext,createContext, useState } from 'react'

const CartContext= createContext() ;
const useCartContext = ()=>useContext(CartContext);

function CartProvider({children}){
    const [invoice, setInvoice] = useState([0])
    const [service, setservice] = useState([])
    const [isOpen,setisOpen]    = useState(false)
    const total = invoice.reduce((acc,curr)=>acc+curr)
console.log("totall",total)
    return(
        <CartContext.Provider value={{invoice, setInvoice, service,total, setservice}}>
            {children}
        </CartContext.Provider>
    )
}

 
  
  


export  {useCartContext, CartProvider}