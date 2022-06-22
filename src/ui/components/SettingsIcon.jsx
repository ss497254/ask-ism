// import React, { LegacyRef, ReactElement } from "react";

// export const SettingsIcon = ({
//     a,
//     icon,
//     label,
//     trailingIcon,
//     classes = "",
//     transition,
//     onClick,
//     last,
// }) => {
//     const cn = `
//       flex w-full items-center px-4 py-3 md:py-3 cursor-pointer md:hover:bg-blue-100
//        md:border-none ${last ? "" : "border-b"} border-smoke-500 ${
//         transition ? `transition duration-200 ease-out` : ``
//     } ${classes}`;

//     if (a) {
//         return (
//             <a
//                 ref={a.ref}
//                 href={a.href}
//                 download={a.download}
//                 onClick={onClick}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${cn}`}
//             >
//                 {label}
//             </a>
//         );
//     }

//     return (
//         <button onClick={onClick} className={cn}>
//             {icon}
//             <span className="text-lg md:text-base flex md:ml-2 ml-4 flex-1">
//                 {label}
//             </span>
//             {trailingIcon ? trailingIcon : null}
//         </button>
//     );
// };
