import { circleStyle, regularStyle } from './element-styles'

const Button = (props) => {
    return (
        <button onClick={props.onClick} type={props.type} disabled={props.disabled} className={props.shape === "circle" ? circleStyle(props.className) : regularStyle(props.className)}>
            {props.text}
        </button>
    )
}

export default Button
