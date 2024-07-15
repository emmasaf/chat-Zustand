import {buttonStyles} from "./styles.js";

export const SendButton = ({active = false, isDisabled = true}) => {
    const handleClick = () => {
        alert('hi')
    }
    const imgSrc = active ? '/images/send-icon-active.png' : ' /images/send-icon-disabled.png'
    return (
        <button disabled={isDisabled} style={buttonStyles} onClick={handleClick}>
            <img src={imgSrc} alt='send-icon'/>
        </button>
    )
}