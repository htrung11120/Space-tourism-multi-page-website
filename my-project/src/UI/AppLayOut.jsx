import Header from "./Header";
import desktopBg from "../assets/home/background-home-desktop.jpg";
import Body from "./Body";
export default function AppLayout() {
    return (
        <>
            <div className="min-h-screen bg-cover" style={{ backgroundImage: `url(${desktopBg})` }} >
                <Header />
                <Body />
            </div >
        </>
    );
}
