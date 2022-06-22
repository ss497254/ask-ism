import React, { ReactNode } from "react";

export const SettingsWrapper = ({ children, ...props }) => {
    return (
        <div className="bg-primary-800 rounded-8 p-4" {...props}>
            {children}
        </div>
    );
};
