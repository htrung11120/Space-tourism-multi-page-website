import { Link } from "react-router-dom";
import headerIcon from "../assets/header-icon.svg";

export default function Header() {
    return (
        <header className="header flex flex-row align-center justify-between  pt-10 pl-16  tracking-wide text-base text-white font-Barlow">
            <img src={headerIcon} className="w-12 h-12 self-center" />
            <span className=" w-[38.25rem] h-[1px] bg-white/10 absolute top-[5.5rem] left-[11.5rem] z-50 hidden lg:block"></span>
            <nav className="header-nav flex gap-20 w-[58.875rem] h-24 backdrop-blur-[40px] pl-[8rem]	bg-white/5 items-center">
                <Link className="home tracking-wide " to='/'>
                    <span className="font-bold tracking-wide pr-1">00</span> HOME
                </Link>
                <Link className="destination tracking-wide">
                    <span className="font-bold tracking-wide pr-1">01</span> DESTINATION
                </Link>
                <Link className="crew tracking-wide">
                    <span className="font-bold tracking-wide  pr-1">02</span> CREW
                </Link>
                <Link className="technology tracking-wide">
                    <span className="font-bold tracking-wide pr-1">03</span> TECHNOLOGY
                </Link>
            </nav>
        </header>
    );
}
