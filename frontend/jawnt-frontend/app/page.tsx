import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div>
    <Banner bannerText="Welcome to Screener!"/>
    <Navbar/>
    </div>
  );
}
