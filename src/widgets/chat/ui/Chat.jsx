import {Layout, Typography} from 'antd';
import {chatStyles, dateStyles} from "./styles.js";
import {BotMessage, UserMessage} from "../../../shared/ui";
import {formatDate} from "../../../shared/lib";

const {Content} = Layout;

export const Chat = () => {
    const date = new Date();
    const todayDate = formatDate(date);
    return (
        <Content style={chatStyles}>
            <Typography style={dateStyles} variant="body2" component="p" >
                {todayDate}
            </Typography>
            <UserMessage date={date} message='Hi team 👋' isFirst/>
            <BotMessage date={date} message='I’m down! Any ideas??' isFirst/>
        </Content>
    )
}