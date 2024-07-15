import {buttonStyles} from "./styles.js";
import {DeleteOutlined} from "@ant-design/icons";

export const DeleteButton = () => {
    return(
        <button style={buttonStyles}>
            <DeleteOutlined />
        </button>
    )
}