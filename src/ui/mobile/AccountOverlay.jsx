import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { a, config, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import { useAccountOverlay } from "../../global-stores/useAccountOverlay";
import { useDarkMode } from "../../global-stores/useDarkMode";
import {
    SolidBug,
    SolidHelp,
    SolidLogOut,
    SolidMoon,
    SolidSettings,
    SolidUser,
} from "../../icons";

const height = 420 + 40;

const Tab = ({ children, onClick }) => {
    return (
        <div
            className="flex w-full text-lg py-3 px-4 items-center gap-4 border-b border-zinc-300 dark:border-dark-600"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export const AccountOverlay = ({}) => {
    const { isOpen, set: setOpen } = useAccountOverlay((s) => s);
    const { darkMode, toggleDarkMode } = useDarkMode();
    const darkModeToggle = useRef(null);

    console.count("im account overlay");

    const handleClickDarkMode = (e) => {
        if (darkModeToggle.current.contains(e.target)) return;
        toggleDarkMode();
    };

    // const conn = useConn();
    const [{ y }, set] = useSpring(() => ({ y: height }));

    const open = useCallback(() => {
        set({
            y: 0,
            immediate: false,
            config: { mass: 1, tension: 200, friction: 25 },
        });
    }, [set]);

    const close = (velocity = 0) => {
        set({
            y: height,
            immediate: false,
            config: { ...config.stiff, velocity },
        });
        setOpen({ isOpen: false });
    };

    const bind = useDrag(
        ({ last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || vy > 0.5) close(vy);
                else open();
            } else {
                set({ y: my, immediate: true });
            }
        },
        {
            initial: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        }
    );

    const display = y.to((py) => (py < height ? "block" : "none"));

    const bgStyle = {
        opacity: y.to([0, height], [0.8, 0], "clamp"),
    };

    useEffect(() => {
        if (isOpen) {
            open();
        }
    }, [isOpen, open]);

    return createPortal(
        <a.div className="absolute w-screen h-full z-[100]" style={{ display }}>
            <a.div
                className="w-screen h-screen absolute left-0 right-0 z-10 bg-black"
                onClick={() => close()}
                style={bgStyle}
            ></a.div>
            <a.div
                className="bg-white dark:bg-dark-800 dark:text-white w-full h-full rounded-t-20 relative"
                {...bind()}
                style={{
                    bottom: `calc(-100% + ${height - 100}px)`,
                    y,
                    zIndex: 11,
                    touchAction: "none",
                }}
            >
                <div onClick={() => close()} className="relative w-full h-5">
                    <span className="bg-gray-600 rounded-full w-6 h-1 absolute top-3 left-2/4 transform -translate-x-1/2"></span>
                </div>
                <div>
                    <Tab>
                        <SolidUser width="20" height="20" />
                        Profile
                    </Tab>
                    <Tab onClick={handleClickDarkMode}>
                        <SolidMoon width="20" height="20" />
                        <div className="flex justify-between w-full items-center">
                            Dark Mode
                            <label
                                htmlFor="darkmode-toggle"
                                className="inline-flex relative items-center cursor-pointer"
                                ref={darkModeToggle}
                            >
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                    id="darkmode-toggle"
                                    className="sr-only peer"
                                />
                                <div className="w-[50px] h-[21px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[29px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:left-[1.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </Tab>
                    <Tab>
                        <SolidSettings width="20" height="20" />
                        Settings
                    </Tab>
                    <Tab>
                        <SolidHelp width="20" height="20" />
                        Help
                    </Tab>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Tab>
                            <SolidBug width="20" height="20" />
                            Report a bug
                        </Tab>
                    </a>
                    <Tab>
                        <SolidLogOut width="20" height="20" />
                        Logout
                    </Tab>
                </div>
            </a.div>
        </a.div>,
        document.querySelector("#root")
    );
};
