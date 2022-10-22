import { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const Header = (props) => {
    const modal = useRef();
    const triggerModal = () => {
        if (modal.current.style.height === "7rem") {
            modal.current.style.height = "0rem";
            modal.current.style.opacity = 0;
        }
        else {
            modal.current.style.height = "7rem";
            modal.current.style.opacity = 1;
        } 
    };

    return (
        <div className="w-full h-16 flex items-center justify-between p-2 mb-2">
            <div className="bg-text-primary p-4 rounded-full mr-3 flex items-center justify-center relative">
                <FaUserAlt className="text-text-box scale-110" />
                <div className={`${props.status === "active" ? "bg-green-500" : "bg-yellow-500"} w-3 h-3 rounded-full absolute right-0 bottom-0 border-2 border-white`}></div>
            </div>
            <div className="flex flex-col justify-between items-end relative">
                <button onClick={triggerModal} className="z-50">
                    <FiMoreHorizontal className="scale-150 text-text-normal" />
                </button>
                <div className="bg-white w-32 rounded-lg absolute top-5 right-0 transition-all ease-in-out flex flex-col justify-around py-2 shadow-2xl z-20" style={{ height: "0rem", opacity: 0 }} ref={modal}>
                    <div className="text-center h-1/2 flex items-center justify-center text-text-primary hover:bg-text-box cursor-pointer">Settings</div>
                    <div className="text-center h-1/2 flex items-center justify-center text-text-primary hover:bg-text-box cursor-pointer">Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Header
