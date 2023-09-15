import Catousel_Main from "./Catousel_Main";
import Community_sec from "./Community_sec";
import Hero_Sec from "./Hero_Sec";
import MorePro_sec from "./MorePro_sec";
import Product_sec from "./Product_sec";
import Sayaan from "./sayaan";

export default function Home() {
  return (
    <main>
      <Sayaan />
      {/* <Hero_Sec /> */}
      <Product_sec />
      <Community_sec />
      <MorePro_sec />
      <Catousel_Main />
    </main>
  )
}
