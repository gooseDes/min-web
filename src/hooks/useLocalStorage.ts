import type { UserData } from "@min/api-client";
import { useState, type Dispatch, type SetStateAction } from "react";

interface localStorageMap {
    user: UserData;
}

const initialValues: localStorageMap = {
    user: { id: -1, username: "unknown", avatar: "" },
};

function useLocalStorage<K extends keyof localStorageMap>(
    key: K,
): [localStorageMap[K], Dispatch<SetStateAction<localStorageMap[K]>>, () => void] {
    const [storedValue, setStoredValue] = useState<localStorageMap[K]>(() => {
        const initialValue = initialValues[key];
        if (typeof window === "undefined") return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading localStorage key", key, error);
            return initialValue;
        }
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
