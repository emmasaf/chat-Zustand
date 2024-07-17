import {buttonStyles} from "./styles.js";
import {createRef} from "react";
import {useChatStore} from "../../../shared/zustand";
import {Message} from "../../../shared/models";
import {MESSAGE_TYPE_IMAGE, MESSAGE_TYPE_TEXT} from "../../../shared/consts";

export const UploadButton = () => {
    const fileInputRef = createRef();
    const {addMessage, editProps, updateMessage, setEditProps} = useChatStore()
    const isDisabled = editProps?.type === MESSAGE_TYPE_TEXT || false

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file)
        const message = new Message(false, url, 'user', MESSAGE_TYPE_IMAGE)

        if (editProps?.id) {
            updateMessage(editProps.id, url)
            setEditProps(null)
        } else {
            addMessage(message);
            setTimeout(() => {
                const botMessage = new Message(false, 'Hello World', 'bot')
                addMessage(botMessage);
            }, 2000);
        }
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileChange}
                accept="image/*"
            />
            <button type='button' style={buttonStyles} onClick={handleButtonClick} disabled={isDisabled}>
                <img src='/images/file-Icon.png' alt='file-icon'/>
            </button>
        </div>
    );
};