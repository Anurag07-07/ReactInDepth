import { MdOutlineVerified } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { LuBookmarkPlus } from "react-icons/lu";

const Card = ({image,name,description,followers,save}) => {
  return (
    <div className=' border-8 border-white shadow-2xl w-96 h-[80vh] rounded-4xl relative'>
      <div className=' absolute  w-full h-full  bg-gradient-to-b from-white/20 to-black/80 rounded-4xl '></div>
      <img src={image}  className=' absolute w-full h-full object-cover -z-10  rounded-3xl'></img>
      <div className=' absolute w-full h-[50%] bottom-0 px-10 py-20 gap-y-4 flex flex-col text-white'>
        <div className=' flex justify-start items-center gap-x-2'>
          <div className=' text-3xl font-semibold '>{name}</div>
          <MdOutlineVerified size={30} color='lightgreen'></MdOutlineVerified>
        </div>
        <div className=' text-xl font-extralight'>{description}</div>
        <div className=' flex items-center justify-around '>
          <div className=" flex justify-center items-center gap-x-1"><HiUsers></HiUsers>{followers}</div>
          <div className=" flex justify-center items-center gap-x-1"><LuBookmarkPlus></LuBookmarkPlus>{save}</div>
          <button className=' flex justify-center items-center rounded-4xl bg-white text-black/35 px-4 py-2 '>Follow<FaPlus /></button>
        </div>
      </div>
    </div>
  )
}

export default Card
