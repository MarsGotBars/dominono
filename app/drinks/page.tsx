'use client'
import { PageWrapper } from "pagewrapper/Pagewrapper";
import SubNav from "@/layout/SubNav";
import CardData from "@/components/Cards/CardData";
export default function Drinks() {
    const {Drinks} = CardData
    return (
        <>
            <SubNav subItem={Drinks} />
            <PageWrapper>
                <div>
                    Sides
                </div>
            </PageWrapper>
        </>
    );
}