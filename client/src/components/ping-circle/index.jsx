import { animatePing, normalPing } from "./element-styles";

const PingCircle = (props) => {
    return (
        <>
            {props.status?.toLowerCase() !== "offline" && <div className={animatePing((props.status?.toLowerCase() === "online" ? `bg-green-500 ${props.className}` : `bg-yellow-500 ${props.className}`))} ></div>}
            <div className={normalPing((props.status?.toLowerCase() === "online" ? `bg-green-500 ${props.className}` : props.status?.toLowerCase() === "away" ? `bg-yellow-500 ${props.className}` : `bg-offline ${props.className}`))}></div>
        </>
    )
}

export default PingCircle
