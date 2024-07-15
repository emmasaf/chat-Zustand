import {buttonStyles} from "./styles.js";

export const UploadButton = () => {
    const handleClick = () => {
        alert('hi')
    }
    return (
        <button style={buttonStyles} onClick={handleClick}>
            <img src='/images/file-Icon.png' alt='file-icon'/>
        </button>
    )
}