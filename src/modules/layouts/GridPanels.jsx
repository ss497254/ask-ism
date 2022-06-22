import React, { useContext } from "react";
// import { useHostStore } from "../../global-stores/useHostStore";
import { useScreenType } from "../../shared-hooks/useScreenType";
import { FixedGridPanel, GridPanel } from "../../ui/layout/GridPanel";
import LeftHeader from "../../ui/header/LeftHeader";
import { MiddleHeader } from "../../ui/header/MiddleHeader";
import RightHeader from "../../ui/header/RightHeader";
import { Link } from "react-router-dom";
// import { AuthContext } from "../auth/AuthProvider";
// // import { useConn } from "../shared-hooks/useConn";
import {
    SolidHome,
    SolidNotification,
    SolidPlus,
    SolidUser,
    SolidCompass,
} from "../../icons";

const Icon = ({ className, icon }) => {
    return (
        <div
            className={`relative inline-block ${className}`}
            style={{
                width: 40,
                height: 40,
            }}
        >
            <div
                className={
                    "rounded-full w-full h-full object-cover border bg-smoke-200 dark:bg-dark-600 border-slate-300 dark:border-none flex justify-center items-center text-xxl text-button"
                }
            >
                {icon}
            </div>
        </div>
    );
};

const Tabs = ({ tabTitle, icon, onClick, isTablet, to }) => {
    return (
        <Link
            to={to}
            className="flex my-1 p-2 rounded-8 w-full hover:bg-gray-200 text-black dark:text-white dark:hover:bg-dark-700"
            onClick={onClick}
        >
            <Icon icon={icon} />
            {!isTablet && (
                <div className="flex ml-3 flex-col justify-center my-auto">
                    <h5 className="font-semibold text-lg">{tabTitle}</h5>
                </div>
            )}
        </Link>
    );
};

const HeaderWrapper = ({ children, className }) => {
    const screenType = useScreenType();

    return (
        <div
            className={`flex items-center ${className} ${
                screenType.includes("xl")
                    ? "py-5"
                    : screenType.includes("desktop")
                    ? "py-3"
                    : "py-2"
            }`}
        >
            {children}
        </div>
    );
};

export const LeftPanel = ({ tablet }) => {
    console.count("i'm left panel being rendered");

    return (
        <FixedGridPanel
            className={`px-${tablet ? 2 : 3} relative ${
                tablet ? "border-r border-gray-200 dark:border-gray-800" : ""
            }`}
        >
            <HeaderWrapper className={`absolute ${tablet ? "top-2" : "top-3"}`}>
                <LeftHeader />
            </HeaderWrapper>
            <div className="my-auto flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 overflow-x-hidden dark:text-white">
                <Tabs
                    tabTitle={"Home"}
                    isTablet={tablet}
                    to="/"
                    icon={<SolidHome />}
                />
                <Tabs
                    tabTitle={"Explore"}
                    isTablet={tablet}
                    icon={<SolidCompass />}
                    to="/"
                />
                <Tabs
                    tabTitle={"Create"}
                    isTablet={tablet}
                    icon={<SolidPlus />}
                    to="/create"
                />
                <Tabs
                    tabTitle={"Notifications"}
                    isTablet={tablet}
                    icon={<SolidNotification />}
                    to="/notifications"
                />
                <Tabs
                    tabTitle={"Profile"}
                    isTablet={tablet}
                    icon={<SolidUser />}
                    to="/profile"
                />
            </div>
        </FixedGridPanel>
    );
};

export const MiddlePanel = ({ stickyChildren, children, className }) => {
    const screenType = useScreenType();
    return (
        <GridPanel className={className}>
            <div
                className={
                    !(screenType === "mobile" || !stickyChildren)
                        ? `flex w-full flex-col z-1 top-0 pt-1`
                        : ""
                }
            >
                {screenType !== "mobile" ? (
                    screenType === "tablet" ? (
                        <>
                            <HeaderWrapper>
                                <MiddleHeader />
                            </HeaderWrapper>
                            {stickyChildren}
                        </>
                    ) : (
                        <HeaderWrapper>
                            <MiddleHeader />
                        </HeaderWrapper>
                    )
                ) : (
                    stickyChildren
                )}
            </div>
            {children}
        </GridPanel>
    );
};

export const RightPanel = ({ children }) => {
    const screenType = useScreenType();
    // const { conn } = useContext(AuthContext);
    return (
        <FixedGridPanel
            className={`${screenType.includes("xl") ? "px-4" : "pl-2 pr-4"}`}
        >
            <HeaderWrapper>{true ? <RightHeader /> : null}</HeaderWrapper>
            {children}
        </FixedGridPanel>
    );
};

// // import { ApiPreloadLink } from "../shared-components/ApiPreloadLink";

//  const LeftPanel = ({ isTablet }) => {
//     // const { push } = useRouter();

//     // const [cursors, setCursors] = useState([0, 1]);
//     // const conn = useConn();

// };
