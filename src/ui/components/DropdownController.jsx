import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";

export const DropdownController = ({
    children,
    className,
    innerClassName,
    overlay,
    portal = true,
    zIndex,
}) => {
    const [visible, setVisibility] = useState(false);
    const [mainDiv, setmainDiv] = useState(document.querySelector("#__next"));

    const referenceRef = useRef(null);
    const popperRef = useRef(null);

    const { styles, attributes } = usePopper(
        referenceRef.current,
        popperRef.current,
        {
            modifiers: [{ name: "eventListeners", enabled: visible }],
            placement: "left",
        }
    );

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (
                referenceRef.current?.contains(event.target) ||
                popperRef.current?.contains(event.target)
            ) {
                return;
            }
            setVisibility(false);
        };
        // listen for clicks and close dropdown on body
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, []);

    const body = (
        <div
            className={`absolute ${className}`}
            ref={popperRef}
            {...attributes.popper}
            style={{ zIndex: zIndex || 5 }}
        >
            <div
                style={styles.offset}
                className={`${visible ? "" : "hidden"} ${innerClassName}`}
            >
                {visible ? overlay(() => setVisibility(false)) : null}
            </div>
        </div>
    );

    useLayoutEffect(() => {
        setmainDiv(document.querySelector("#dropdown"));
    }, []);

    return (
        <div id="dropdown">
            <button
                className="flex focus:outline-no-chrome"
                ref={referenceRef}
                onClick={() => setVisibility(!visible)}
            >
                {children}
            </button>
            {portal ? createPortal(body, mainDiv) : body}
        </div>
    );
};
