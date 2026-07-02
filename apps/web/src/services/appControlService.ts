import type { RootLayoutHandle } from "@/App";
import type { ChatsContainerHandle } from "@components/HomePage/ChatsContainer";
import type { ChatData } from "@min/api-client";
import React from "react";

// RootLayout
export const rootLayoutRef = React.createRef<RootLayoutHandle>();

export function setIsAppBlurred(isBlurred: boolean) {
    rootLayoutRef.current?.setIsBlurred(isBlurred);
}

// ChatsContainer
export const chatsContainerRef = React.createRef<ChatsContainerHandle>();

export function setChatsInContainer(chats: ChatData[]) {
    chatsContainerRef.current?.setChats(chats);
}

export function addChatToContainer(chat: ChatData) {
    chatsContainerRef.current?.addChat(chat);
}
