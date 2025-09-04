import {  useNavigate } from "react-router"

export default function Join() {
    const navigate = useNavigate()
  const  handleContect = ()=>{
        navigate("/contect")
    }

    return(
        <div className="text-center bg-[#27194C] w-[90%] ml-17 mb-17 h-90 rounded-2xl pt-25">
            <h1 className="text-5xl font-extrabold text-[#EDEBF1]">Wanna join with me?</h1>
            <h3 className="text-[#EDEBF1] mt-5 font-bold ">It is a long established fact will be distracted.</h3>
             <button
            className="rounded-lg bg-[#743fdd] text-[#EDEBF1] p-3 w-50 mt-6"
            onClick={handleContect}
            >
            Contact me
          </button>
        </div>
    )
}