import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { BaseOverlay } from "../../ui/BaseOverlay";
import { DropdownController } from "../../ui/DropdownController";
import { SettingsIcon } from "../../ui/SettingsIcon";
import makeUrls, { CalendarEvent } from "./makeUrls";

const useAutoFocus = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const previous = document.activeElement;
        const element = elementRef.current;

        if (element) {
            element.focus();
        }

        if (previous instanceof HTMLElement) {
            return () => previous.focus();
        }

        return undefined;
    }, []);

    return elementRef;
};

const useOpenState = (initialOpen) => {
    const [open, setOpen] = useState(initialOpen);
    const onToggle = () => setOpen((current) => !current);

    useEffect(() => {
        if (open) {
            const onClose = () => setOpen(false);
            document.addEventListener("click", onClose);

            return () => document.removeEventListener("click", onClose);
        }

        return undefined;
    }, [open, setOpen]);

    return [open, onToggle];
};

const Calendar = React.forwardRef(
    ({ children, filename = false, href }, ref) => (
        <a
            ref={ref}
            download={filename}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
);

Calendar.displayName = "Calendar";

const Dropdown = ({ filename, onToggle, urls }) => {
    const ref = useAutoFocus();
    const onKeyDown = (event) => {
        if (event.key === "Escape") {
            onToggle();
        }
    };

    return (
        <BaseOverlay onKeyDown={onKeyDown} role="presentation">
            <SettingsIcon
                onClick={onToggle}
                a={{
                    href: urls.ics,
                    download: filename,
                    ref,
                }}
                label="Apple Calendar"
            />
            <SettingsIcon
                onClick={onToggle}
                a={{ href: urls.google }}
                label="Google"
            />
            <SettingsIcon
                onClick={onToggle}
                a={{ href: urls.ics, download: filename }}
                label="Outlook"
            />
            <SettingsIcon
                onClick={onToggle}
                a={{ href: urls.outlook }}
                label="Outlook Web App"
            />
            <SettingsIcon
                onClick={onToggle}
                a={{ href: urls.yahoo }}
                label="Yahoo"
            />
        </BaseOverlay>
    );
};

export const AddToCalendar = ({
    children,
    event,
    filename = "download",
    open: initialOpen = false,
}) => {
    const [_, onToggle] = useOpenState(initialOpen);
    const urls = useMemo(() => makeUrls(event), [event]);

    return (
        <div className="relative" title="Add to Calendar">
            <DropdownController
                portal={false}
                overlay={(close) => (
                    <Dropdown
                        filename={filename}
                        onToggle={close}
                        urls={urls}
                    />
                )}
            >
                {children(onToggle)}
            </DropdownController>
        </div>
    );
};
