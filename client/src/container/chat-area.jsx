import React from 'react'
import PingCircle from '../components/ping-circle'

const ChatArea = (props) => {
    return (
        <div>
            <div className="">
                <div className="relative w-20">
                    <p className='text-text-primary'>{props.friendList.filter(value=> value.isActive)[0].name}</p>
                    <PingCircle status={props.friendList.filter(value=> value.isActive)[0].status} className="right-0 top-1/2" />
                </div>
            </div>
        </div>
    )
}

export default ChatArea
