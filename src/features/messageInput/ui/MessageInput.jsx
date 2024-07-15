import { inputStyles } from './styles.js';

export const MessageInput = ({ value, onChange, onFocus, onBlur }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            style={inputStyles}
            type="text"
            placeholder="Start typing..."
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};
