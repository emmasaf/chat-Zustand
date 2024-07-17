import './animation.css';
import {emojiPickerStyles, emojiStyle} from "./styles.js";

const emojis = [
    '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
    '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩'
];
export const EmojiPicker = ({onSelect}) => {
    return (
        <div style={emojiPickerStyles} className='emojiPicker'>
            {emojis.map((emoji, index) => (
                <span
                    key={index}
                    style={emojiStyle}
                    onClick={() => onSelect(emoji)}
                >
                    {emoji}
                </span>
            ))}
        </div>
    )
}