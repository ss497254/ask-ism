import React, { useState } from "react";
import { div } from "react-router-dom";

export default function Notification() {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (index) => () => setActiveTab(index);
    const Tabs = ["Notification", "Mentions"];
    const notifations = [
        {
            title: "Say goodbye to paper receipts!",
            body: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            date: "Feb 9, 2021",
        },
        {
            title: "Say goodbye to paper receipts!",
            body: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            date: "Feb 9, 2021",
        },
        {
            title: "Say goodbye to paper receipts!",
            body: "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
            date: "Feb 9, 2021",
        },
    ];

    return (
        <div className="font-medium text-md h-full text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 md:px-2">
            <ul className="flex w-full -mb-px">
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
                {notifations.map((data, index) => (
                    <li
                        className="border-b border-slate-200 dark:border-dark-600"
                        key={index}
                    >
                        <div className="block py-3 xl:py-4 px-4 text-tiny text-gray-700 md:text-base dark:text-cool-gray-300 hover:bg-blue-100 dark:hover:bg-dark-700">
                            <span className="block mb-2 text-justify">
                                📣{" "}
                                <span className="font-semibold text-slate-800 dark:text-white">
                                    {data.title}
                                </span>{" "}
                                {data.body}
                            </span>
                            <div className="block mt-4 text-xs text-start font-medium text-slate-500 dark:text-gray-300 ">
                                {data.date}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
