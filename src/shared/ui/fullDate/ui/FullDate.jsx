import {Typography} from "antd";
import {formatDate} from "../../../lib";
import {dateStyles} from "./styles.js";

export const FullDate  = ({date})=>{
    const formattedDate = formatDate(date);

    return(
        <Typography style={dateStyles} variant="body2" component="p" >
            {formattedDate}
        </Typography>
    )
}