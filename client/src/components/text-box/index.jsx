import { sendBoxStyles, recieveBoxStyles, timeStyles } from './element-styles';

const TextBox = (props) => {
    return (
        <div className={`flex flex-col ${props.type === "send" ? "items-end" :"items-start"}`}>
            <div>
                <div className={timeStyles(props.timeClassName)}>{props.time}</div>
                <div className={props.type === "send" ? sendBoxStyles(props.className) : recieveBoxStyles(props.className)} {...props}>{props.text}</div>
            </div>
        </div>
    )
}

export default TextBox