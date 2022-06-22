import React, { forwardRef } from "react";

export const Input = forwardRef(
    ({ className, textarea, error, transparent, ...props }, ref) => {
        const bg = transparent ? `bg-transparent` : `bg-gray-100`;
        const ring = error ? `ring-1 ring-secondary` : "";
        const cn = `w-full py-2 px-2 text-gray-900 placeholder-gray-300 focus:outline-none ${bg} ${ring} ${className} `;

        return textarea ? (
            <textarea ref={ref} className={cn} {...props} />
        ) : (
            <input ref={ref} className={cn} {...props} />
        );
    }
);

Input.displayName = "Input";
