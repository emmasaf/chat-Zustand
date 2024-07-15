import {Header,Footer,Chat} from "../../../widgets";
import { Layout} from "antd";
import {layoutStyle} from "./styles";

export const HomePage = () => {
    return(
            <Layout style={layoutStyle}>
                <Header/>
                <Chat/>
                <Footer/>
            </Layout>
    )
}