import {Layout} from "antd";
import {MoreOutlined} from "@ant-design/icons";
import {Text} from "../../../shared/ui";
import {headerStyle, iconStyles, textBoxStyle} from "./styles.js";

const { Header: AntHeader } = Layout;

export const Header = ()=>{
    return(
        <AntHeader style={headerStyle}>
            <img src="/images/avatar-group.png" alt="avatar-group"/>
             <div style={textBoxStyle} >
                 <Text isTitle text='🦄 Team Unicorns'/>
                 <Text color='#666668' text='last seen 45 minutes ago'/>
             </div>
            <MoreOutlined style={iconStyles}/>
        </AntHeader>
    )
}