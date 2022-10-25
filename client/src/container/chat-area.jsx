import React from 'react'
import PingCircle from '../components/ping-circle'
import TextBox from '../components/text-box'
import Input from '../components/input'
import { FiSend } from 'react-icons/fi'

const ChatArea = (props) => {
    return (
        <div className='flex flex-col justify-start items-center w-3/4 h-full'>
            <div className="w-full h-16 flex items-center justify-between border-b border-text-box">
                <div className="relative w-36 px-4">
                    <p className='text-text-primary text-xl'>{props.friendList.filter(value => value.isActive)[0].name}</p>
                    <PingCircle status={props.friendList.filter(value => value.isActive)[0].status} className="right-0 bottom-1/4" />
                </div>
            </div>
            <div className="flex flex-col grow w-full p-5 overflow-y-auto">
                    <TextBox type="recieve" text="I thought this would be an awesome way to interact with the interface." time="Yesterday, 8:19 am" />
                    <TextBox type="send" text="I agree! It definitely produces a better user experience." time="Yesterday, 8:21 am" />
                    <TextBox type="recieve" text="Did you attend yesterday's conference?" time="Today, 10:15 am" />
                    <TextBox type="send" text="Yes, it was amazing!" time="Today, 10:15 am" />
                    <TextBox type="recieve" text="Tell me everything!!!!" time="Today, 10:16 am" />
                    <TextBox type="send" text="Will but let me finish my breakfast buddy :/" time="Today, 10:16 am" />
                    
            </div>
            <div className="h-24 p-5 border-t border-text-box w-full relative">
                <Input placeholder="Message someone ..." />
                <FiSend className='absolute top-1/2 right-10 -translate-y-3/4 scale-150 text-text-primary cursor-pointer'  />
            </div>
        </div>
    )
}

export default ChatArea
