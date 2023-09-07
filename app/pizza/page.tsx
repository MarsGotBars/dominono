'use client'
import CardData from "@/components/Cards/CardData";
import { cardTypes } from "types";
import Card from "@/components/Cards/Card"
import CardList from "@/components/Cards/CardList";
import { PageWrapper } from "pagewrapper/Pagewrapper";

export default function Pizza() {
    const { Pizzas } = CardData
    console.log(Object.entries(Pizzas));

    return (
        <PageWrapper>
            {Object.entries(Pizzas).map((item, key: number) => {
                console.log(item, key);
                const category = item[0].charAt(0).toUpperCase() + item[0].slice(1);
                return (
                    <div key={key}>
                        <CardList id={category}>
                            <h2>{category}</h2>
                            {item[1].map((card, id) => {
                                return (
                                    <Card key={id} info={card.info} price={card.price} item={card.item} src={card.src} />
                                )
                            })}
                        </CardList>
                    </div>
                )
            })}
        </PageWrapper>
    )
}