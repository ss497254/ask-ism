import React, { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../../global-stores/useDarkMode";
import {
    DeveloperIcon,
    SolidBug,
    SolidHelp,
    SolidLogOut,
    SolidMoon,
    SolidSettings,
} from "../../icons";
import Transition from "../../ui/components/Transition";

function ProfileDropdown({ size, className, children }) {
    const { toggleDarkMode } = useDarkMode();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentOverlay, setCurrentOverlay] = useState(null);
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    const trigger = useRef(null);
    const dropdown = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative inline-flex">
            <button
                ref={trigger}
                className={`${className}`}
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                {children}
            </button>

            <Transition
                className="origin-top-right z-100 absolute top-full right-0 mr-1 bg-white dark:bg-dark-800 dark:text-white border border-slate-200 dark:border-gray-800 rounded-xl drop-shadow-xl overflow-hidden mt-1"
                show={dropdownOpen}
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
            >
                <div
                    ref={dropdown}
                    className="flex flex-col w-[230px] whitespace-nowrap overflow-ellipsis p-[8px] gap-2"
                    onClick={() => {}}
                >
                    <div className="flex flex-row gap-3 items-center px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">
                        <SolidSettings />
                        <span>Settings</span>
                    </div>
                    <div
                        className="flex flex-row gap-3 items-center px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer"
                        onClick={toggleDarkMode}
                    >
                        <SolidMoon />
                        <span>Dark Mode</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">
                        <SolidHelp />
                        <span>Help</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">
                        <SolidBug />
                        <span>Report a bug</span>
                    </div>

                    <div className="flex flex-row gap-3 items-center px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">
                        <DeveloperIcon />
                        <span>Developer Settings</span>
                    </div>
                    <div className="flex flex-row gap-3 items-center px-3 py-2 rounded-md text-white bg-accent hover:bg-accent-hover cursor-pointer">
                        <SolidLogOut />
                        <span>Logout</span>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default ProfileDropdown;
