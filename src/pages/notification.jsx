import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MiddlePanel } from "../modules/layouts/GridPanels";

export default function Notification() {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (index) => () => setActiveTab(index);
    const Tabs = ["Notification", "Mentions"];

    return (
        <MiddlePanel>
            <div class="font-medium text-md text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex w-full -mb-px">
                    {Tabs.map((tab, index) => (
                        <li
                            key={index}
                            className={`flex-grow cursor-pointer inline-block p-3 rounded-t-lg border-b-[2.5px] border-transparent " ${
                                activeTab === index
                                    ? "text-blue-600 dark:text-blue-500 dark:border-blue-500 border-blue-600 active"
                                    : ""
                            }`}
                            onClick={handleClick(index)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-base mb-2 text-justify">
                                📣{" "}
                                <span className="font-medium text-slate-800">
                                    Edit your information in a swipe
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs text-start font-medium text-slate-500">
                                Feb 12, 2021
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                📣{" "}
                                <span className="font-medium text-slate-800">
                                    Edit your information in a swipe
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Feb 9, 2021
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                    <li className="border-t border-slate-200 last:border-b">
                        <Link
                            className="block py-3 xl:py-4 px-4 hover:bg-blue-100"
                            to="#0"
                        >
                            <span className="block text-md mb-2 text-justify">
                                🚀
                                <span className="font-medium text-slate-800">
                                    Say goodbye to paper receipts!
                                </span>{" "}
                                Sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim.
                            </span>
                            <span className="block text-xs  text-start font-medium text-slate-500">
                                Jan 24, 2020
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </MiddlePanel>
    );
}
