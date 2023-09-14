'use client'
import { PageWrapper } from "pagewrapper/Pagewrapper";
import SubNav from "@/layout/SubNav";
import CardData from "@/components/Cards/CardData";
export default function Sides() {
    const { Sides } = CardData
    return (
        <>
            <SubNav subItem={Sides} />
            <PageWrapper>
                <div>
                    Sides
                </div>
            </PageWrapper>
        </>
    );
}