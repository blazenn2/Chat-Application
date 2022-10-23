import { FaUserAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const Card = (props) => {
    return (
        <div className={`flex ${props.unseen ? "bg-text-box" : null} p-4 rounded-lg w-full`}>
            <div className="bg-text-primary p-4 rounded-full relative mr-3">
                <FaUserAlt className="text-text-box scale-110" />
                {props.unseen && <div className="bg-secondary w-5 h-5 rounded-full absolute top-0 left-0 text-xs text-white flex items-center justify-center"><p>{props.unseen}</p></div>}
                {props.ping && (<>
                    <div className="bg-green-500 w-3 h-3 rounded-full absolute right-0 animate-ping"></div>
                    <div className="bg-green-500 w-3 h-3 rounded-full absolute right-0"></div>
                </>)}
            </div>
            <div className="w-full flex justify-between">
                <div className="w-1/2 flex flex-col justify-between items-start">
                    <p className="text-text-normal">{props.name}</p>
                    <p className={` truncate text-sm ${props.unseen ? "font-bold text-text-normal" : "text-text-primary"}`}>{props.message}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button>
                        <FiMoreHorizontal className="scale-150 text-text-normal" />
                    </button>
                    <p className="uppercase text-text-primary text-sm">{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
