import type { CreateChatPopupHandle } from "@components/HomePage/CreateChatPopup";
import React from "react";
import { setIsAppBlurred } from "./appControlService";

export const createChatPopupRef = React.createRef<CreateChatPopupHandle>();

export const openCreateChatPopup = () => {
    setIsAppBlurred(true);
    createChatPopupRef.current?.open();
};

export const closeCreateChatPopup = () => {
    setIsAppBlurred(false);
    createChatPopupRef.current?.close();
};
