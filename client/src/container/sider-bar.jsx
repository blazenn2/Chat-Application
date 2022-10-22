import Header from '../layout/header'
import Input from '../components/input'
import { FiSearch } from "react-icons/fi"
import Button from '../components/button'
import Card from '../components/card'
import { useState } from 'react'

const SideBar = () => {
    const [filter, setFilter] = useState(0);
    

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
            <div className="w-full flex items-center justify-center flex-col relative">
                <div className="w-11/12 h-16 flex items-center justify-around">
                    <div className="text-secondary">Recent</div>
                    <div className="text-text-primary hover:text-secondary cursor-pointer">Unread</div>
                    <div className="text-text-primary hover:text-secondary cursor-pointer">Groups</div>
                    <div className="bg-secondary w-16 h-1 absolute left-50 bottom-1 rounded-lg"></div> 
                    {/* 8  50 */}
                    {/* right 8 */}
                </div>
                <hr className='bg-text-box w-11/12 absolute bottom-1' />
            </div>
            {/* <div className="overflow-y-auto">
                <div className="flex items-center justify-center">
                    <div className="w-11/12">
                        <Card isActive={true} name="Hamza" message="Hello world" time="7:39 am" ping={true} />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default SideBar
