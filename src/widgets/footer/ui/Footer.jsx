import { Layout } from "antd";
import { footerStyle } from "./styles.js";

const { Footer: AntFooter } = Layout;

export const Footer = ()=>{
    return(
        <AntFooter style={footerStyle}>
            Footer
        </AntFooter>
    )
}