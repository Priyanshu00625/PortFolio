
export default function Testimonial({image , Name ,address, thought}) {
    return(
        <div className=" border p-3 rounded-2xl bg-white w-100 h-70 block pb-0 ">
            <div className="flex h-40 w-full p-2 gap-5 mb-0 ">
                <img src={image} alt="people image" className="h-19 rounded-[50px] mt-4 ml-10"/>
                <div>
                <p className="text-2xl font-bold text-[rgb(39,23,76)]  pt-6 block">{Name}</p>
                <p className="pt-3 font-extrabold ">{address}</p>
                </div>
            </div>
            <div className="flex p-2 pt-0 text-center justify-center mt-0 opacity-80 ">{thought}</div>
        </div>
    )
} 