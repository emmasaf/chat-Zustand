import {buttonStyles} from "./styles.js";
import  {createRef} from "react";
import {useChatStore} from "../../../shared/zustand";
import {Message} from "../../../shared/models";
import {MESSAGE_TYPE_IMAGE, MESSAGE_TYPE_TEXT} from "../../../shared/consts";

export const UploadButton = () => {
    const fileInputRef = createRef();
    const {addMessage,editProps,updateMessage} = useChatStore()
    const isDisabled = editProps?.type === MESSAGE_TYPE_TEXT || false

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file)
            const message = new Message(false,url,'user',MESSAGE_TYPE_IMAGE)

            if(editProps?.id){
                updateMessage(editProps.id,url)
            }else{
                addMessage(message)
            }

        } else {
            alert('Please select an image file.');
        }
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*"
            />
            <button style={buttonStyles} onClick={handleButtonClick} disabled={isDisabled}>
                <img src='/images/file-Icon.png' alt='file-icon'  />
            </button>
        </div>
    );
};