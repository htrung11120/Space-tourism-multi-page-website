import { Link } from "react-router-dom";
import headerIcon from "../assets/header-icon.svg";

export default function Header() {
    return (
        <header className="header flex flex-row align-center justify-between  pt-14 pl-10  tracking-wide text-base text-white ">
            <img src={headerIcon} className="w-12 h-12 self-center" />
            <span className=" w-[460px] h-[1px] bg-white/10 absolute top-[6.5rem] left-[10.25rem] z-50 hidden lg:block"></span>
            <nav className="header-nav flex gap-16 w-7/12 h-24 backdrop-blur pl-20	bg-white/5 items-center">
                <Link className="home tracking-wide " to='/'>
                    <span className="font-bold tracking-wide pl-0.5">00</span> HOME
                </Link>
                <Link className="destination tracking-wide">
                    <span className="font-bold tracking-wide">01</span> DESTINATION
                </Link>
                <Link className="crew tracking-wide">
                    <span className="font-bold tracking-wide ">02</span> CREW
                </Link>
                <Link className="technology tracking-wide">
                    <span className="font-bold tracking-wide">03</span> TECHNOLOGY
                </Link>
            </nav>
        </header>
    );
}
