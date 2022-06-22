import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../ui/components/Transition";
import { SolidMegaphone } from "../../icons";

function Announcements({ size, className }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                className={`flex items-center justify-center transition duration-150 rounded-full ${className} dark:bg-zinc-700 dark:text-gray-300`}
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
            >
                <SolidMegaphone width={size} height={size} />
                <div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full"></div>
            </button>

            <Transition
                className="origin-top-right z-100 absolute top-full right-0 mr-1 w-24 bg-white dark:bg-dark-800 dark:text-cool-gray-400 border border-slate-400
                dark:border-slate-800 rounded-lg shadow-xl overflow-hidden mt-1"
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
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                >
                    <div className="font-semibold dark:text-white uppercase py-2.5 px-4">
                        Announcements
                    </div>
                    <ul>
                        <li className="border-t border-slate-200 dark:border-gray-700 last:border-b">
                            <Link
                                className="block py-2 px-4 hover:bg-blue-100"
                                to="#0"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className="block text-base mb-2 text-justify">
                                    📣{" "}
                                    <span className="font-medium text-slate-800 dark:text-white">
                                        Edit your information in a swipe
                                    </span>{" "}
                                    Sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim.
                                </span>
                                <span className="block text-xs font-medium text-slate-500">
                                    Feb 12, 2021
                                </span>
                            </Link>
                        </li>
                        <li className="border-t border-slate-200 dark:border-gray-700 last:border-b">
                            <Link
                                className="block py-2 px-4 hover:bg-blue-100"
                                to="#0"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className="block text-md mb-2 text-justify">
                                    📣{" "}
                                    <span className="font-medium text-slate-800 dark:text-white">
                                        Edit your information in a swipe
                                    </span>{" "}
                                    Sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim.
                                </span>
                                <span className="block text-xs font-medium text-slate-500">
                                    Feb 9, 2021
                                </span>
                            </Link>
                        </li>
                        <li className="border-t border-slate-200 dark:border-gray-700 last:border-b">
                            <Link
                                className="block py-2 px-4 hover:bg-blue-100"
                                to="#0"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <span className="block text-md mb-2 text-justify">
                                    🚀
                                    <span className="font-medium text-slate-800 dark:text-white">
                                        Say goodbye to paper receipts!
                                    </span>{" "}
                                    Sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim.
                                </span>
                                <span className="block text-xs font-medium text-slate-500">
                                    Jan 24, 2020
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="font-semibold text-blue-700 py-2 px-4">
                        <Link
                            to="/Announcements"
                            onClick={() => {
                                setDropdownOpen(!dropdownOpen);
                            }}
                        >
                            See More
                        </Link>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default Announcements;
