import Header from '../layout/header'
import Input from '../components/input'
import { FiSearch, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import Button from '../components/button'
import Card from '../components/card'
import { useRef } from 'react'

const SideBar = (props) => {
    const lineBorder = useRef();
    const sidebar = useRef();
    const icon = useRef();
    const changeFilterHandler = (filter) => {
        props.setFilter(filter);
        if (filter === 0) {
            lineBorder.current.style.left = "2rem";
        }
        if (filter === 1) {
            lineBorder.current.style.left = "8.5rem";
            const newArr = [];
            newArr.unshift(...props.friendList.filter(value => !value.unseen));
            newArr.unshift(...props.friendList.filter(value => value.unseen));
            props.setFriendList(newArr);
        }
        if (filter === 2) {
            lineBorder.current.style.left = "15.25rem";
        }
    };
    const changeActiveHandler = (index) => props.setFriendList([...props.friendList].map((value, i) => {
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
        if ([...width].includes("w-1/2")) {
            width.remove("w-1/2");
            width.add("w-0");
        } else {
            width.remove("w-0");
            width.add("w-1/2");
        }
    };

    return (
        <div className="lg:w-1/4 md:w-1/3 w-1/2 h-full bg-background relative transition-all ease-in-out duration-700" ref={sidebar}>
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
                    <div className={`cursor-pointer ${props.filter === 0 ? "text-secondary" : "text-text-primary hover:text-secondary"}`} onClick={() => changeFilterHandler(0)}>Recent</div>
                    <div className={`${props.filter === 1 ? "text-secondary" : "text-text-primary hover:text-secondary"} cursor-pointer`} onClick={() => changeFilterHandler(1)}>Unread</div>
                    <div className={`${props.filter === 2 ? "text-secondary" : "text-text-primary hover:text-secondary"} cursor-pointer`} onClick={() => changeFilterHandler(2)}>Groups</div>
                    <div className="bg-secondary w-16 h-1 absolute bottom-1 rounded-lg transition-all ease-in-out" style={{ left: "2rem" }} ref={lineBorder}></div>
                </div>
                <hr className='bg-text-box w-11/12 absolute bottom-1' />
            </div>
            <div className="h-96">
                <div className="flex items-center justify-center h-96">
                    <div className="w-11/12 overflow-y-auto h-96">
                        {props.friendList.map((value, i) => <Card name={value.name} message={value.message} time={value.time} status={value.status} unseen={(value.unseen ? value.unseen : false)} isActive={value.isActive} index={i} changeActive={changeActiveHandler} key={i} />)}
                    </div>
                </div>
            </div>
            <div className="absolute p-4 bg-background rounded-full top-1/2 -right-9 cursor-pointer md:hidden" onClick={showSidebarHandler} ref={icon}>
                <FiChevronRight className='text-white font-bold scale-150 block' />
                <FiChevronLeft className='text-white font-bold scale-150 hidden' />
            </div>
        </div>
    )
}

export default SideBar
