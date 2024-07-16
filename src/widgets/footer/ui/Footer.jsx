import {useEffect, useState} from 'react';
import {Layout} from 'antd';
import {SmileOutlined} from '@ant-design/icons';
import {SendButton, UploadButton} from '../../../features';
import {emojiIconStyles, inputStyles, footerStyle} from './styles.js';
import {useChatStore} from "../../../shared/zustand";
import {MESSAGE_TYPE_TEXT} from "../../../shared/consts/index.js";

const {Footer: AntFooter} = Layout;

export const Footer = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [value, setValue] = useState('');
    const {editProps,chats}  = useChatStore()

    const isActive = isInputFocused && value.trim()
    const isDisabled = !value.trim()

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }
    const handleClear = ()=>{
        setValue('')
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
            <SmileOutlined style={emojiIconStyles}/>
            <input
                value={value}
                onChange={handleChangeValue}
                style={inputStyles}
                type="text"
                placeholder="Start typing..."
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            <UploadButton/>
            <SendButton active={isActive}
                        isDisabled={isDisabled}
                        messageText={value}
            />
        </AntFooter>
    );
};
