import { sendBoxStyles, recieveBoxStyles } from './element-styles';

const TextBox = (props) => {
    return (
        <div className={props.type === "send" ? sendBoxStyles(props.className) : recieveBoxStyles(props.className)} {...props}>{props.text}</div>
    )
}

export default TextBox