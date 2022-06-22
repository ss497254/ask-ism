import React from "react";
import { SolidSearch } from "../../icons";
import { Input } from "../Input";
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
            className={`items-center flex w-full  border-[1px] border-gray-300 
            dark:border-none dark:bg-dark-700 text-black dark:text-white transition duration-200 ease-in-out focus-within:text-gray-900 rounded-lg ${
                mobile ? "px-4" : ""
            } ${className}`}
        >
            {!mobile && (
                <div className="h-full mx-4 flex items-center pointer-events-none">
                    <SolidSearch />
                </div>
            )}
            <input
                type="text"
                className="w-full h-6 outline-none text-lg bg-transparent"
            />
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
        // <div
        //     className={`items-center flex w-full outline outline-2 lg:outline-1 outline-smoke-500 shadow-outlineLg text-gray-300 transition duration-200 ease-in-out focus-within:text-gray-100 rounded-lg ${
        //         mobile ? "px-4" : ""
        //     } ${className}`}
        // >
        //     {!mobile && (
        //         <div className="h-full px-4.5 flex items-center pointer-events-none bg-smoke-200 rounded-l-5">
        //             <SolidSearch />
        //         </div>
        //     )}
        //     <Input
        //         autoFocus
        //         className={`${inputClassName} pl-0`}
        //         {...props}
        //         transparent
        //     />
        //     {isLoading && (
        //         <div
        //             className={`h-full flex items-center pointer-events-none ${
        //                 !mobile && "mx-4"
        //             }`}
        //         >
        //             <Spinner />
        //         </div>
        //     )}
        // </div>
    );
};
