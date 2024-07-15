import {Layout} from "antd";
import {MoreOutlined} from "@ant-design/icons";
import {Subtitle, Title} from "../../../shared/ui";
import {headerStyle, iconStyles, textBoxStyle} from "./styles.js";

const { Header: AntHeader } = Layout;

export const Header = ()=>{
    return(
        <AntHeader style={headerStyle}>
            <img src="/images/avatar-group.png" alt="avatar-group"/>
             <div style={textBoxStyle} >
                 <Title text='🦄 Team Unicorns'/>
                 <Subtitle text='last seen 45 minutes ago'/>
             </div>
            <MoreOutlined style={iconStyles}/>
        </AntHeader>
    )
}