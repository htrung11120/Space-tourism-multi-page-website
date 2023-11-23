
export default function Body() {
    return (
        <div className="text-white flex  items-center font-Barlow pl-[9.25rem] pt-[9.375rem] gap-[35rem]" >

            <div className="body-content  flex flex-col gap-[24px] w-[30rem] ">
                <span className="block text-heading5 tracking-[0.3rem]">
                    So, you want to travel to
                </span>
                <span className="block text-[9.375rem] font-Bellefair">SPACE</span>

                <span className="block font-Barlow text-base  tracking-[.17rem]">
                    Let’s face it; if you want to go to space,
                    you might as well genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you a truly out of
                    this world experience!
                </span>
            </div>
            <div className="explore-btn  hover:bg-white/20 duration-200 w-[450px] h-[450px] flex justify-center items-center rounded-full cursor-pointer">
                <button className=" font-Bellefair text-heading4 w-[274px] h-[274px] bg-white text-black rounded-full text-center " >
                    EXPLORE
                </button></div>

        </div>
    )
}
