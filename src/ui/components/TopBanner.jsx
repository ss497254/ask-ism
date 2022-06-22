import * as React from "react";
import { SolidPlus } from "../../icons";
import { useShowTopBanner } from "../../global-stores/useShowTopBanner";

// message;
// button?: React.ReactNode;
// duration?: BannerDurations;
// onClose?: () => void;

export const TopBanner = ({ button, duration = "default" }) => {
    const { set: setShowTopBanner, showTopBanner } = useShowTopBanner((s) => s);

    let message = "You are such a lovely person. 😍";
    const onCloseRef = React.useRef(setShowTopBanner);
    onCloseRef.current = setShowTopBanner;

    React.useEffect(() => {
        if (duration === "sticky") {
            return;
        }

        const timer = setTimeout(() => {
            onCloseRef.current?.();
        }, 7000);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);

    const handleClick = () => {
        setShowTopBanner({ showTopBanner: !showTopBanner });
    };

    if (!showTopBanner) return null;

    return (
        <div
            className={`flex relative p-1 h-5 w-full items-center justify-center text-button transition-transform duration-300 bg-emerald-500`}
        >
            {setShowTopBanner ? (
                <div
                    className={`flex absolute cursor-pointer text-white right-0 md:right-5 stroke-white px-4`}
                    style={{ height: 18 }}
                    onClick={handleClick}
                >
                    <SolidPlus style={{ transform: "rotate(45deg)" }} />
                </div>
            ) : null}
            <div className={`flex space-x-4 items-center text-white font-bold`}>
                <div className={`bold`}>{message}</div>
                {button}
            </div>
        </div>
    );
};
