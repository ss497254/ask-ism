import React from "react";

export const BaseOverlay = ({
    children,
    title,
    actionButton,
    overlay,
    onActionButtonClicked,
    onActionButtonClassname,
    ...props
}) => {
    return (
        <div
            className="flex flex-col w-full rounded-8 bg-white border overflow-hidden relative"
            {...props}
        >
            {overlay ? overlay : ""}
            {title && (
                <div className="px-4 py-$ border-b border-gray-600 flex items-center">
                    <h4 className="text-gray-100">{title}</h4>
                </div>
            )}

            <div className="flex flex-col text-gray-100">{children}</div>

            {actionButton && (
                <button
                    className={
                        "flex pt-2 pb-3 hover:bg-accent hover:text-button bg-button text-primary-900 font-bold justify-center " +
                        onActionButtonClassname
                    }
                    onClick={onActionButtonClicked}
                >
                    {actionButton}
                </button>
            )}
        </div>
    );
};
