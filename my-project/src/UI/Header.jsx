import { NavLink } from "react-router-dom";
import headerIcon from "../assets/header-icon.svg";

export default function Header() {
    const normalStyle = 'tracking-wide pr-1'
    const activeStyle = 'tracking-wide pr-1 border-b-4 py-[35px]'

    return (
        <header className="header flex flex-row align-center justify-between  pt-10 pl-16  tracking-wide text-base text-white font-Barlow">
            <img src={headerIcon} className="w-12 h-12 self-center" />
            <span className=" w-[38.25rem] h-[1px] bg-white/20 absolute top-[5.5rem] left-[11.5rem] z-50 hidden lg:block"></span>
            <nav className="header-nav flex gap-20 w-[59rem] h-24 backdrop-blur-[40px] pl-[8rem]	bg-white/5 items-center">
                <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/'>
                    <span className="tracking-wide pr-1 font-extrabold">00</span> HOME
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/destination'>
                    <span className="font-bold tracking-wide pr-1">01</span> DESTINATION
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/crew' >
                    <span className="font-bold tracking-wide  pr-1">02</span> CREW
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? activeStyle : normalStyle)} to='/technology'>
                    <span className="font-bold tracking-wide pr-1">03</span> TECHNOLOGY
                </NavLink>
            </nav>
        </header>
    );
}
