import {avatarBoxStyles, avatarImageStyles, avatarStatusStyles} from "./styles.js";

export const UserIcon = () => (
    <div style={avatarBoxStyles}>
        <img style={avatarImageStyles} src='/images/avatar-with-online-indicator.png' alt='user-icon'/>
         <img style={avatarStatusStyles} src="/images/online-indicator.png" alt="user-status"/>
    </div>
)