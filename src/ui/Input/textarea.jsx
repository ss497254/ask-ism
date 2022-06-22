import React from "react";

export default function Textarea({
    label,
    placeholder,
    required,
    className,
    inputClassName,
}) {
    const id = Math.ceil(Math.random() * 10000);
    return (
        <div className={className}>
            <label
                htmlFor={id}
                className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300"
            >
                {label}
            </label>
            <textarea
                id={id}
                className={
                    "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-2 focus:outline-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline " +
                    inputClassName
                }
                placeholder={placeholder}
                required={required}
            />
            <p className="text-sm text-gray-500 dark:text-gray-300 p-1">
                Enter your registered email
            </p>
        </div>
    );
}
