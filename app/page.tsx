import CardData from "@/components/Cards/CardData";
import { cardTypes } from "types";
import Card from "@/components/Cards/Card"
import CardList from "@/components/Cards/CardList";
export default function Home() {
  const { Pizzas, Drinks } = CardData
  const { classics, vegan } = Pizzas
  const { shakes, drinks } = Drinks

  return (
    <main className="container">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vitae placeat explicabo sapiente reiciendis, autem accusamus! Quis dolorem itaque ipsa voluptas, iure, optio distinctio laborum dolor vel hic cupiditate, cumque vitae! Ratione non corporis nam vitae repellendus, molestias voluptas asperiores corrupti, expedita culpa tenetur, accusamus eligendi pariatur natus veritatis illo.<br/>
      
      <CardList>
        <h2>classics</h2>
        {classics.map((card: cardTypes, i: number) => {
          return (
            <Card key={i} info={card.info} price={card.price} item={card.item} src={card.src} />
          )
        })}
      </CardList>
      <CardList>Vegan
      {vegan.map((card: cardTypes, i: number) => {
        return (
          <Card key={i} info={card.info} price={card.price} item={card.item} src={card.src} />
        )
      })}</CardList>
      
    </main>
  )
}