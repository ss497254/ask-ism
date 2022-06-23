import React from "react";
import { Spinner } from "./Spinner";

//  Button = ({
//     children,
//     size = "big",
//     color = "primary",
//     disabled,
//     loading,
//     icon,
//     className = "",
//     transition,
//     ...props
// }) => {
//     return (
//         <button
//             disabled={disabled || loading}
//             className={`flex w-full outline-none  focus:ring-[3px] ${
//                 transition ? `transition duration-200 ease-in-out` : ``
//             } ${
//                 colorClassnames[color]
//             } font-bold flex items-center justify-center ${className}`}
//             {...props}
//         >
//             <span className={loading ? "opacity-0" : `flex items-center`}>
//                 {icon ? (
//                     <span className={`mr-2 items-center`}>{icon}</span>
//                 ) : null}
//                 {children}
//             </span>
//             {loading ? (
//                 <span className={`absolute`}>
//                     <Spinner
//                         className=""
//                         size={size === "small" ? "2" : "4"}
//                     />
//                 </span>
//             ) : null}
//         </button>
//     );
// };

const btnType = {
    default:
        "text-white bg-blue-600 hover:bg-blue-700 focus:ring-[3px] focus:ring-blue-300 font-medium dark:bg-sky-600 focus:outline-none dark:focus:ring-blue-300",

    accent: "text-white bg-accent transition rounded-md duration-200 ease-in-out hover:bg-accent-hover  focus:ring-[3px] focus:ring-blue-400 dark:focus:ring-blue-600 disabled:text-accent-disabled disabled:bg-accent-hover",

    light: "text-black dark:text-white bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-[3px] focus:ring-gray-200 dark:bg-gray-800 dark: dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
};

export const Button = ({
    children,
    btn = "default",
    disabled,
    loading,
    className = "",
    ...props
}) => {
    return (
        <button
            type="button"
            disabled={disabled}
            className={`w-full text-base transition duration-200 ease-in-out font-semibold flex items-center justify-center py-2 rounded-lg ${btnType[btn]} ${className}`}
            {...props}
        >
            {loading ? <Spinner /> : children}
        </button>
    );
};
