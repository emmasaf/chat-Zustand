import {Layout} from 'antd';
import {chatStyles} from "./styles.js";
import {BotMessage, FullDate, UserMessage} from "../../../shared/ui";

const {Content} = Layout;

export const Chat = () => {
    const todayDate = new Date();
    return (
        <Content style={chatStyles}>
            <FullDate date={todayDate}/>
            <UserMessage date={todayDate} message='Hi team 👋' isFirst/>
            <BotMessage date={todayDate} message='I’m down! Any ideas??' isFirst/>
        </Content>
    )
}