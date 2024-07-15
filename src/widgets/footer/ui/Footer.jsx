import  { useState } from 'react';
import { Layout } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { SendButton, UploadButton } from '../../../features';
import { emojiIconStyles,inputStyles, footerStyle } from './styles.js';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [value, setValue] = useState('');
    const isActive = isInputFocused && value.trim()
    const isDisabled = !value.trim()

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

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
            <SendButton active={isActive} isDisabled={isDisabled}/>
        </AntFooter>
    );
};
