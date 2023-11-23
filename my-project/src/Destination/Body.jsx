import { NavLink, Outlet, useParams } from "react-router-dom"
import Moon from "../assets/destination/image-moon.png"
import Mars from "../assets/destination/image-mars.png"
import Europa from "../assets/destination/image-europa.png"
import Titan from "../assets/destination/image-titan.png"
import data from "../data.json"

export default function Body() {
    const { name } = useParams();
    const normalStyle = 'tracking-wide pr-1'
    const activeStyle = 'tracking-wide pr-1 border-b-4 pb-[12px]'
    const destinationsData = data.destinations
    function getImage() {
        switch (name) {
            case "Moon":
                return Moon;
            case "Mars":
                return Mars;
            case "Europa":
                return Europa;
            case "Titan":
                return Titan;
            default:
                return Moon;
        }
    }
    return (
        <div className="text-white font-Barlow">
            <h1 className="text-heading5 flex gap-7 tracking-heading5Space pl-[10.625rem] pt-[4.375rem]">
                <span className="text-slate-700 font-extrabold ">01</span>
                PICK YOUR DESTINATION
            </h1>

            <div className="body-content flex flex-row items-center  gap-[20rem] w-[28.125rem] h-[29.688rem] ">
                <img src={getImage()} alt="Moon Image" className="w-[31.25rem] h-[31.25rem] ml-[14.375rem] mt-[6.25rem]" />
                <div className="body-text flex flex-col ">
                    <div className="nav-container flex flex-row gap gap-[2.188rem] self-start tracking-navSpace font-Barlow">
                        {destinationsData.map((data) => <NavLink
                            key={data.name}
                            to={`/destination/${data.name}`}
                            className={({ isActive }) =>
                                (isActive ? activeStyle : normalStyle)}>
                            {data.name}
                        </NavLink>)}
                    </div>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
