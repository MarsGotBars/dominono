import SubNav from "@/layout/SubNav"
import { PageWrapper } from "pagewrapper/Pagewrapper"
export default function Home() {
  return (
    <>
      <SubNav />
      <PageWrapper>
        <div>
          <h2>Select Store</h2>
          <ul>
            <li><a href="/pizza"><h3>Rotterdam West</h3><p>3022 ML</p></a></li>
          </ul>
        </div>
      </PageWrapper>
    </>
  )
}