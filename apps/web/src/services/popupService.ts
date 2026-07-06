import type { CreateChatPopupHandle } from "@components/HomePage/CreateChatPopup";
import React from "react";
import { setIsAppBlurred } from "./appControlService";

export const createChatPopupRef = React.createRef<CreateChatPopupHandle>();

let isCreateChatPopupOpen = false;
const createChatPopupListeners = new Set<() => void>();

export const subscribeToCreateChatPopup = (listener: () => void) => {
    createChatPopupListeners.add(listener);
    return () => createChatPopupListeners.delete(listener);
};

const notifyCreateChatPopupListeners = () => {
    createChatPopupListeners.forEach(listener => listener());
};

export const isCreateChatPopupVisible = () => isCreateChatPopupOpen;

export const openCreateChatPopup = () => {
    setIsAppBlurred(true);
    isCreateChatPopupOpen = true;
    notifyCreateChatPopupListeners();
    createChatPopupRef.current?.open();
};

export const closeCreateChatPopup = () => {
    setIsAppBlurred(false);
    isCreateChatPopupOpen = false;
    notifyCreateChatPopupListeners();
    createChatPopupRef.current?.close();
};
