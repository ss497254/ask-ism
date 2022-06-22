import React, { ReactNode } from "react";

export const BaseSettingsItem = ({ children, className = "", ...props }) => {
    return (
        <div className={`bg-primary-900 rounded-8 ${className}`} {...props}>
            {children}
        </div>
    );
};
