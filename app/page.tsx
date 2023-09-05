import CardData from "@/components/Cards/CardData";
import { cardTypes } from "types";
import Card from "@/components/Cards/Card"
import CardList from "@/components/Cards/CardList";
export default function Home() {
  const { Pizzas, Drinks } = CardData
  const { classics, vegan } = Pizzas
  const { shakes, drinks } = Drinks

  return (
    <main className="container mt-20">
      <CardList>
        <h2>Classics</h2>
        {classics.map((card: cardTypes, i: number) => {
          return (
            <Card key={i} info={card.info} price={card.price} item={card.item} src={card.src} />
          )
        })}
      </CardList>
      <CardList>
        <h2>Vegan</h2>
        {vegan.map((card: cardTypes, i: number) => {
          return (
            <Card key={i} info={card.info} price={card.price} item={card.item} src={card.src} />
          )
        })}
      </CardList>
      
    </main>
  )
}