import Header from '../layout/header'
import Input from '../components/input'
import { FiSearch } from "react-icons/fi"
import Button from '../components/button'
import Card from '../components/card'
import { useRef, useState } from 'react'

const SideBar = () => {
    const [filter, setFilter] = useState(0);
    const lineBorder = useRef();
    const changeFilterHandler = (filter) => {
        setFilter(filter);
        if (filter === 0) lineBorder.current.style.left = "2rem"; 
        if (filter === 1) lineBorder.current.style.left = "8.5rem"; 
        if (filter === 2) lineBorder.current.style.left = "15.25rem"; 
    };

    return (
        <div className="w-1/4 h-full bg-background">
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
                    <div className="bg-secondary w-16 h-1 absolute bottom-1 rounded-lg transition-all ease-in-out" style={{ left: "15.25rem" }} ref={lineBorder}></div>
                </div>
                <hr className='bg-text-box w-11/12 absolute bottom-1' />
            </div>
            <div className="h-96">
                <div className="flex items-center justify-center h-full">
                    <div className="w-11/12 overflow-y-auto h-full">
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                        <Card name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
