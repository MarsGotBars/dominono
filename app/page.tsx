import CardData from "@/components/Cards/CardData";
import { cardTypes } from "types";
import Card from "@/components/Cards/Card"
import CardList from "@/components/Cards/CardList";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function Home() {
  const { Pizzas, Drinks } = CardData
  const { classics, vegan } = Pizzas
  const { shakes, drinks } = Drinks
  
  return (
    <>
    <Header subItem={Pizzas}/>
    <main className="container mt-20">
      <CardList id="Classics">
        <h2>Classics</h2>
        {classics.map((card: cardTypes, i: number) => {
          return (
            <Card key={i} info={card.info} price={card.price} item={card.item} src={card.src} />
          )
        })}
      </CardList>
      <CardList id="Vegan">
        <h2>Vegan</h2>
        {vegan.map((card: cardTypes, i: number) => {
          return (
            <Card key={i} info={card.info} price={card.price} item={card.item} src={card.src} />
          )
        })}
      </CardList>
    </main>
    <Footer/>
    </>
  )
}