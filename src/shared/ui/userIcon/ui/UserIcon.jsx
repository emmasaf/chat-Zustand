import {avatarBoxStyles, avatarImageStyles, avatarStatusStyles} from "./styles.js";

export const UserIcon = (props) => (
    <div style={avatarBoxStyles}>
        <img style={avatarImageStyles} src={props.image} alt='user-icon'/>
        {props.status && <img style={avatarStatusStyles} src="/images/online-indicator.png" alt="user-status"/>}
    </div>
)