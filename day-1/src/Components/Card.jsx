import { MdOutlineVerified } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { LuBookmarkPlus } from "react-icons/lu";
import { useState } from "react";
import { RiUserFollowLine } from "react-icons/ri";

const Card = ({image,name,description,followers,save}) => {
  const [follow,setFollows] = useState(followers)
  const [toogle,setToogle] = useState(false)

  function IncreaseHandler(){
    setToogle((prev)=>!prev)
    setFollows((prev)=>prev+1)
  }

  function DecreaseHandler(){
    setToogle((prev)=>!prev)
    setFollows((prev)=>prev-1)
  }

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
          <div className=" flex justify-center items-center gap-x-1"><HiUsers></HiUsers>{follow}</div>
          <div className=" flex justify-center items-center gap-x-1"><LuBookmarkPlus></LuBookmarkPlus>{save}</div>
          <button>{toogle ? (<div onClick={IncreaseHandler}  className=" flex justify-center items-center gap-x-1 bg-white/45 px-3 py-1 rounded-3xl">Follow<FaPlus /></div>) : (<div onClick={DecreaseHandler} className=" flex justify-center items-center gap-x-1 bg-white/45 px-3 py-1 rounded-3xl">Followed<RiUserFollowLine /></div>)}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
