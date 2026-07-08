import type { UserData } from "@min/api-client";
import { useState, type Dispatch, type SetStateAction } from "react";

interface localStorageMap {
    user: UserData;
    appState: string;
}

const initialValues: localStorageMap = {
    user: { id: -1, username: "unknown", avatar: "" },
    appState: "normal",
};

export function getItem<K extends keyof localStorageMap>(key: K): localStorageMap[K] {
    if (typeof window === "undefined") return initialValues[key];
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValues[key];
    } catch (error) {
        console.error("Error reading localStorage key", key, error);
        return initialValues[key];
    }
}

export function setItem<K extends keyof localStorageMap>(key: K, value: localStorageMap[K]): void {
    try {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        console.error("Error setting localStorage key", key, error);
    }
}

function useLocalStorage<K extends keyof localStorageMap>(
    key: K,
): [localStorageMap[K], Dispatch<SetStateAction<localStorageMap[K]>>, () => void] {
    const [storedValue, setStoredValue] = useState<localStorageMap[K]>(() => {
        return getItem<K>(key);
    });

    const setValue: Dispatch<SetStateAction<localStorageMap[K]>> = value => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error("Error setting localStorage key", key, error);
        }
    };

    const removeValue = () => {
        try {
            if (typeof window !== "undefined") {
                window.localStorage.removeItem(key);
            }
            setStoredValue(initialValues[key]);
        } catch (error) {
            console.error("Error removing localStorage key", key, error);
        }
    };

    return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
