import React, { useMemo, useState } from "react";
import { AnsChatMessage } from "./chat/useAnsChatStore";

// data?: Data | null;
// setData: (x: Data | null) => void;

export const UserPreviewModalContext = React.createContext({
    setData: () => {},
});

export const UserPreviewModalProvider = ({ children }) => {
    const [data, setData] = useState(null);
    return (
        <UserPreviewModalContext.Provider
            value={useMemo(() => ({ data, setData }), [data, setData])}
        >
            {children}
        </UserPreviewModalContext.Provider>
    );
};
