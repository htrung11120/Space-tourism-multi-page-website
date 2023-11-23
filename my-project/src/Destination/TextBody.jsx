import { useParams } from "react-router-dom";
import data from "../data.json";
import { useState, useEffect } from "react";

export default function TextBody() {
    const { name } = useParams();
    const destinationsData = data.destinations;

    const [planetData, setPlanetData] = useState(destinationsData[0]);
    useEffect(() => {
        const Planet = destinationsData.filter((planet) => planet.name === name);
        if (Planet.length > 0) {
            setPlanetData(Planet[0]);
        }
    }, [name, destinationsData]);



    return (
        <div>
            <span className="planet-name text-heading2 font-Bellefair uppercase">
                {name}
            </span>
            <p className="w-[29.375rem] font-base tracking-navSpace border-white/20 border-b-[1px] pb-[3.375rem] ">{planetData.description}</p>
            <div className=" flex flex-row gap-[5rem] font-Bellefair uppercase">
                <div className="mt-[1.75rem] flex flex-col gap-3 ">
                    <span className="text-sm text-[#d0d6f981]">AVG. DISTANCE</span>
                    <span className="text-subHeading">{planetData.distance}</span>
                </div>
                <div className="mt-[1.75rem] flex flex-col gap-3 ">
                    <span className="text-sm  text-[#d0d6f981] uppercase">Est. travel time</span>
                    <span className="text-subHeading">{planetData.travel}</span>
                </div>
            </div>
        </div>
    );
}
