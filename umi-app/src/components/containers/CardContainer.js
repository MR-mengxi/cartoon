import React, { useState, useEffect } from 'react'
import Card from '../Card'
// import { getCards } from '../../services/card'
import src1 from '@/assets/img/1.png';
import src2 from '@/assets/img/2.png';
import src3 from '@/assets/img/3.png';
import src4 from '@/assets/img/4.png';

export default function CardContainer() {
   // const [cards, setCards] = useState([]);
   // useEffect(() => {
   //    (async function () {
   //       const resp = await getCards();
   //       setCards(resp)
   //    })()
   // }, [])
   const cards = [
      { id: 1, src: src1 },
      { id: 2, src: src2 },
      { id: 3, src: src3 },
      { id: 4, src: src4 },
   ];
   return (
      <Card cards={cards} />
   )
}
