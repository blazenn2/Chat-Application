import { FaUserAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const Card = (props) => {
    return (
        <div className={`flex items-center justify-start ${props.isActive ? "bg-text-box" : ""} p-4 rounded-lg w-[95%] my-1 cursor-pointer hover:bg-text-box`} onClick={()=>props.changeActive(props.index)}>
            <div className="bg-text-primary p-4 rounded-full relative mr-3">
                <FaUserAlt className="text-text-box scale-110" />
                {props.unseen && <div className="bg-secondary w-5 h-5 rounded-full absolute top-0 left-0 text-xs text-white flex items-center justify-center"><p>{props.unseen}</p></div>}
                {props.status?.toLowerCase() !== "offline" && <div className={`${props.status?.toLowerCase() === "online" ? "bg-green-500" : "bg-yellow-500"} w-3 h-3 rounded-full absolute right-0 animate-ping`}></div>}
                <div className={`${props.status?.toLowerCase() === "online" ? "bg-green-500" : props.status?.toLowerCase() === "away" ? "bg-yellow-500" : "bg-offline"} w-3 h-3 rounded-full absolute right-0`}></div>
            </div>
            <div className="w-full flex justify-between">
                <div className="w-1/2 flex flex-col justify-between items-start">
                    <p className="text-text-normal">{props.name}</p>
                    <p className={`truncate lg:w-28 w-20 text-xs ${props.unseen ? "font-bold text-text-normal" : "text-text-primary"}`}>{props.message}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button><FiMoreHorizontal className="scale-150 text-text-normal" /></button>
                    <p className="uppercase text-text-primary text-xs">{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
