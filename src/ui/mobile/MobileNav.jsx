import React from "react";
import {
    SolidHome,
    SolidSearch,
    SolidNotification,
    SolidPlus,
    SolidUser,
} from "../../icons";
import { Link, useLocation } from "react-router-dom";

export const MobileNavContainer = ({ className, children }) => {
    return (
        <div
            className={`flex fixed bottom-0 left-0 right-0 h-6.5 bg-gray-100 dark:bg-zinc-900 border-t border-gray-300 dark:border-slate-800 ${className}`}
        >
            {children}
        </div>
    );
};

export const MobileNavItem = ({ children, targetPath }) => {
    const { pathname } = useLocation();
    let isActive = pathname === targetPath,
        special = isActive;

    return (
        <Link
            to={targetPath}
            className="h-full w-full flex flex-col justify-center items-center"
        >
            {children &&
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        className: isActive
                            ? "h-4 w-4 fill-indigo-600"
                            : "h-4 w-4 dark:fill-white",
                    });
                })}
            {special && (
                <span
                    className="relative bg-accent rounded-full"
                    style={{
                        width: "4px",
                        height: "4px",
                        right: 0,
                        left: 0,
                        bottom: "-2px",
                    }}
                ></span>
            )}
        </Link>
    );
};

export const MobileNav = () => {
    const items = [
        { icon: <SolidHome />, targetPath: "/" },
        { icon: <SolidSearch />, targetPath: "/search" },
        { icon: <SolidPlus />, targetPath: "/plus" },
        {
            icon: <SolidNotification />,
            targetPath: `/notifications`,
        },
        {
            icon: <SolidUser />,
            targetPath: `/profile`,
        },
    ];
    return (
        <MobileNavContainer>
            {items.map((item) => {
                return (
                    <MobileNavItem
                        key={item.targetPath}
                        targetPath={item.targetPath}
                    >
                        {item.icon}
                    </MobileNavItem>
                );
            })}
        </MobileNavContainer>
    );
};
