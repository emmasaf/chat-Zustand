import {useEffect, useState} from 'react';
import {Layout} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import {EmojiPicker, SendButton, UploadButton} from '../../../features';
import {emojiIconStyles, inputStyles, footerStyle, formStyles} from './styles.js';
import {useChatStore} from "../../../shared/zustand";
import {MESSAGE_TYPE_TEXT} from "../../../shared/consts";

const {Footer: AntFooter} = Layout;

export const Footer = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [value, setValue] = useState('');
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

    const {editProps,chats}  = useChatStore()

    const isActive = isInputFocused && value.trim()
    const isDisabled = !value.trim()

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }
    const handleClear = ()=>{
        setValue('')
    }

    const handleEmojiSelect = (emoji) => {
        setValue(value + emoji);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
        if(editProps?.id){
               setValue(
                   editProps.type === MESSAGE_TYPE_TEXT ? editProps.message : 'Choose new file -->')
        }
    },[editProps])

    useEffect(()=>{
        handleClear()
    },[chats])

    return (
        <AntFooter style={footerStyle}>
            <form onSubmit={handleSubmit} style={formStyles}>
                <div  onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}>
                    <SmileOutlined style={emojiIconStyles}/>
                </div>
                {isEmojiPickerVisible && (
                    <EmojiPicker onSelect={handleEmojiSelect} />
                )}
                <input
                    value={value}
                    onChange={handleChangeValue}
                    style={inputStyles}
                    type="text"
                    placeholder="Start typing..."
                    onFocus={() => {
                        setIsInputFocused(true)
                        setIsEmojiPickerVisible(false)
                    }}
                    onBlur={() => setIsInputFocused(false)}
                />
                <UploadButton/>
                <SendButton active={isActive}
                            isDisabled={isDisabled}
                            messageText={value}
                />
            </form>

        </AntFooter>
    );
};
