import Header from '../layout/header'
import Input from '../components/input'
import { FiSearch, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import Button from '../components/button'
import Card from '../components/card'
import { useRef, useState } from 'react'

const SideBar = () => {
    const [filter, setFilter] = useState(0);
    const [friendList, setFriendList] = useState([
        { name: "Hamza", message: "Hello world!", time: "7:39 am", unseen: 3, isActive: true, status: "online" },
        { name: "Alex", message: "Hello Javascript! Long time no see buddy", time: "10:11 am", unseen: 5, isActive: false, status: "away" },
        { name: "Jason", message: "Sometimes, we have to do what is right!", time: "12:01 am", isActive: false, status: "offline" },
        { name: "Usman", message: "I have a very big butt :D", time: "3:32 pm", isActive: false, status: "online" },
        { name: "John", message: "Something is coming ... you can feel it, can you?", time: "1:24 pm", unseen: 1, isActive: false, status: "away" },
    ]);
    const lineBorder = useRef();
    const sidebar = useRef();
    const icon = useRef();
    const changeFilterHandler = (filter) => {
        setFilter(filter);
        if (filter === 0) {
            lineBorder.current.style.left = "2rem";
        }
        if (filter === 1) {
            lineBorder.current.style.left = "8.5rem";
            const newArr = [];
            newArr.unshift(...friendList.filter(value => !value.unseen));
            newArr.unshift(...friendList.filter(value => value.unseen));
            setFriendList(newArr);
        }
        if (filter === 2) {
            lineBorder.current.style.left = "15.25rem";
        }
    };
    const changeActiveHandler = (index) => setFriendList(friendList.map((value, i) => {
        if (index === i) value.isActive = true;
        else value.isActive = false;
        return value;
    }));
    const showSidebarHandler = () => {
        icon.current.childNodes.forEach(value => {
            const indexOfBlock = [...value.classList].indexOf("block");
            if (indexOfBlock > -1) {
                value.classList.remove("block");
                value.classList.add("hidden");
            } else {
                value.classList.remove("hidden");
                value.classList.add("block");
            }
        });

        const width = sidebar.current.classList;
        console.log(width);
    };

    return (
        <>
            <div className="lg:w-1/4 md:w-1/3 w-1/2 h-full bg-background relative transition-all ease-in-out" ref={sidebar}>
                <Header status="active" />
                <div className="flex items-center justify-center relative mb-5">
                    <FiSearch className='text-text-normal absolute left-5' />
                    <div className="w-11/12">
                        <Input placeholder="Find people and conversations" style={{ paddingLeft: "2rem" }} />
                    </div>
                    <Button shape="circle" text="+" className="absolute right-5 -bottom-3 font-bold" />
                </div>
                <div className="w-full flex items-center justify-center flex-col relative mb-5">
                    <div className="w-11/12 h-16 flex items-center justify-around">
                        <div className={`cursor-pointer ${filter === 0 ? "text-secondary" : "text-text-primary hover:text-secondary"}`} onClick={() => changeFilterHandler(0)}>Recent</div>
                        <div className={`${filter === 1 ? "text-secondary" : "text-text-primary hover:text-secondary"} cursor-pointer`} onClick={() => changeFilterHandler(1)}>Unread</div>
                        <div className={`${filter === 2 ? "text-secondary" : "text-text-primary hover:text-secondary"} cursor-pointer`} onClick={() => changeFilterHandler(2)}>Groups</div>
                        <div className="bg-secondary w-16 h-1 absolute bottom-1 rounded-lg transition-all ease-in-out" style={{ left: "2rem" }} ref={lineBorder}></div>
                    </div>
                    <hr className='bg-text-box w-11/12 absolute bottom-1' />
                </div>
                <div className="h-96">
                    <div className="flex items-center justify-center h-96">
                        <div className="w-11/12 overflow-y-auto h-96">
                            {friendList.map((value, i) => <Card name={value.name} message={value.message} time={value.time} status={value.status} unseen={(value.unseen ? value.unseen : false)} isActive={value.isActive} index={i} changeActive={changeActiveHandler} key={i} />)}
                        </div>
                    </div>
                </div>
                <div className="absolute p-4 bg-background rounded-full top-1/2 -right-8 cursor-pointer md:hidden" onClick={showSidebarHandler} ref={icon}>
                    <FiChevronRight className='text-white font-bold scale-150 block' />
                    <FiChevronLeft className='text-white font-bold scale-150 hidden' />
                </div>
            </div>
        </>
    )
}

export default SideBar
