import React from 'react'
import Card from './Card'
import { useCartContext } from './Context/CardContext'
import Model from './Model'

function CardSection() 
{
    const  { invoice, setInvoice, service, setservice } = useCartContext()
    console.log("invoice is", invoice,service)
    const dataBase = [
    {
        Service:"Painting",
        Price: 1250
    },
    {
        Service:"Denting",
        Price: 1550
    }, {
        Service:"Washing",
        Price: 2340
    }
    
]


  return (
  <>
  <div className='flex-cl'>
  {
    dataBase.map(card=>(
        <Card Service={card.Service}
        Price={card.Price}
        GenerateInvoice={()=>{
            setInvoice(prev=>[...prev,card.Price])
            setservice(prev=>[...prev,card.Service])
        }}
        />
    ))
  }
  {/* {
    total.map((note)=>(
        <Model 
    ))
  } */}
  
   
</div>
  </>
  )
}

export default CardSection