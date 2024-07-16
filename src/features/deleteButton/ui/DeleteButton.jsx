import {buttonStyles} from "./styles.js";
import {DeleteOutlined} from "@ant-design/icons";
import {useChatStore} from "../../../shared/zustand";

export const DeleteButton = ({id}) => {
    const {deleteMessage} = useChatStore()

    const handleClick = ()=>{
        deleteMessage(id);
    }
    return(
        <button style={buttonStyles} onClick={handleClick}>
            <DeleteOutlined />
        </button>
    )
}