import {Layout, Typography} from 'antd';
import {chatStyles, dateStyles} from "./styles.js";
import {BotMessage, UserMessage} from "../../../shared/ui";
import {formatDate, getLocalData, saveLocalData} from "../../../shared/lib";
import {useChatStore} from "../../../shared/zustand";
import {USER_ROLE} from "../../../shared/consts";
import {useEffect, useRef} from "react";

const {Content} = Layout;

export const Chat = () => {
    const {chats, setMessages} = useChatStore();
    const chatEndRef = useRef(null);
    const date = new Date();
    const todayDate = formatDate(date);
    const localData = getLocalData()

    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current?.lastElementChild?.scrollIntoView({behavior: 'smooth'});
        }
    };

    useEffect(() => {
        scrollToBottom()
        saveLocalData(chats)
    }, [chats])

    useEffect(() => {
        if (localData) {
            setMessages(localData)
        }
        //eslint-disable-next-line
    }, [])

    return (
        <Content style={chatStyles} ref={chatEndRef}>
            <Typography style={dateStyles} variant="body2" component="p">
                {todayDate}
            </Typography>
            {chats?.length > 0 && chats.map(({id, role, ...props}) => (
                role === USER_ROLE ?
                    (<UserMessage key={id} id={id}  {...props} />) :
                    (<BotMessage key={id} id={id}  {...props} />)
            ))}
        </Content>
    )
}