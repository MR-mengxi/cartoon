import React, { useState, useEffect } from 'react'
import Card from '../Card'
import { getCards } from '../../services/card'

export default function CardContainer() {
   const [cards, setCards] = useState([]);
   useEffect(() => {
      (async function () {
         const resp = await getCards();
         setCards(resp)
      })()
   }, [])
   return (
      <Card cards={cards} />
   )
}
