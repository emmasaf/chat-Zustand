import {buttonStyles} from "./styles.js";
import {EditOutlined} from "@ant-design/icons";

export const EditButton = () => {
    return(
        <button style={buttonStyles}>
            <EditOutlined />
        </button>
    )
}