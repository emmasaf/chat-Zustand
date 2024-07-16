import {create} from 'zustand';

export const useChatStore = create((set) => ({
    chats: [],
    editProps:null,

    addMessage: (newMessage) => set((state) => ({
        chats: [...state.chats, newMessage],
    })),
    setEditProps:(newProps) => set(() => ({
        editProps:newProps,
    })),
    setMessages:(data) => set(() => ({
        chats:data,
    })),
    updateMessage: (id, updatedMessage) => set((state) => ({
        chats: state.chats.map((message) =>
            message.id === id ? { ...message,message:updatedMessage ,editStatus:true} : message
        ),
    })),

    deleteMessage: (id) => set((state) => ({
        chats: state.chats.filter((message) => +message.id !== +id),
    })),
}));

