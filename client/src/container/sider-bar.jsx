import Header from '../layout/header'
import Input from '../components/input'
import { FiSearch } from "react-icons/fi"
import Button from '../components/button'

const SideBar = () => {
    return (
        <div className="w-1/4 h-full bg-background">
            <Header status="active" />
            <div className="flex items-center justify-center relative">
                <FiSearch className='text-text-normal absolute left-5' />
                <div className="w-11/12">
                    <Input placeholder="Find people and conversations" style={{paddingLeft: "2rem"}} />
                </div>
                <Button shape="circle" text="+" className="absolute right-5 -bottom-3 font-bold" />
            </div>
        </div>
    )
}

export default SideBar
