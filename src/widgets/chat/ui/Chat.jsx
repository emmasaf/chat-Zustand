import {Layout, Typography} from 'antd';
import {chatStyles, dateStyles} from "./styles.js";
import {BotMessage, UserMessage} from "../../../shared/ui";
import {formatDate} from "../../../shared/lib";
import {useChatStore} from "../../../shared/zustand";
import {USER_ROLE} from "../../../shared/consts";
import {useEffect, useRef} from "react";

const {Content} = Layout;

export const Chat = () => {
    const {chats} = useChatStore();
    const chatEndRef = useRef(null);

    const date = new Date();
    const todayDate = formatDate(date);

    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(()=>{
        scrollToBottom()
    },[chats])

    return (
        <Content style={chatStyles} ref={chatEndRef}>
            <Typography style={dateStyles} variant="body2" component="p">
                {todayDate}
            </Typography>
            {chats?.length > 0 && chats.map(({id, role, ...props}) => {
                return role === USER_ROLE ?
                    (<UserMessage key={id} id={id} {...props} />) :
                    (<BotMessage key={id} id={id} {...props} />)
            })}
        </Content>
    )
}