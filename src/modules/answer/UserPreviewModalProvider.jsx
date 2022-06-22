import React, { useMemo, useState } from "react";

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
