import Header from "../UI/Header";
import bg from "../assets/destination/background-destination-desktop.jpg";
import Body from "./Body";
export default function Destination() {



    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <Body />
        </div>
    );
}
