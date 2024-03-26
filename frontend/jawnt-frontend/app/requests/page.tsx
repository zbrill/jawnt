import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { RequestsList } from "./components/RequestsList";

export default function RequestsPage() {
    return (
        <div>
        <Banner bannerText="Requests"/>
        <Navbar/>
        <RequestsList/>
        </div>
    );
}