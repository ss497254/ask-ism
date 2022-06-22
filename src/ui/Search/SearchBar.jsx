import React from "react";
import { SolidSearch } from "../../icons";
import { Input } from "../components/Input";
import { Spinner } from "../components/Spinner";

export const SearchBar = ({
    className = "",
    inputClassName = "",
    isLoading = false,
    mobile = false,
    ...props
}) => {
    return (
        <div
            className={`items-center flex w-full bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-white transition duration-200 ease-in-out focus-within:text-black rounded-lg ${
                mobile ? "px-4" : ""
            } ${className}`}
        >
            {!mobile && (
                <div className="h-full mx-4 flex items-center pointer-events-none">
                    <SolidSearch />
                </div>
            )}
            <Input autoFocus className={`${inputClassName} pl-0`} {...props} />
            {isLoading && (
                <div
                    className={`h-full flex items-center pointer-events-none ${
                        !mobile && "mx-4"
                    }`}
                >
                    <Spinner />
                </div>
            )}
        </div>
    );
};
