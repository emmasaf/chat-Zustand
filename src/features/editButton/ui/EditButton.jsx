import {buttonStyles} from "./styles.js";
import {EditOutlined} from "@ant-design/icons";
import {useChatStore} from "../../../shared/zustand";

export const EditButton = (props) => {
    const {setEditProps} = useChatStore()

    const handleClick = ()=>{
        setEditProps(props)
    }

    return(
        <button style={buttonStyles} onClick={handleClick}>
            <EditOutlined />
        </button>
    )
}