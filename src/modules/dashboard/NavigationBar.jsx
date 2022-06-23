import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "../../shared-hooks/useWindowSize";

export default function NavigationBar() {
    const { width: trigger } = useWindowSize();
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setWidth(width / 100);
    }, [trigger]);

    // useEffect(() => {
    //     const container = document.getElementById("scroll-horizontal");
    //     container.addEventListener("wheel", function (e) {
    //         if (e.deltaY > 0) {
    //             container.scrollLeft += 50;
    //             e.preventDefault();
    //         } else {
    //             container.scrollLeft -= 50;
    //             e.preventDefault();
    //         }
    //     });
    // }, []);
    const List = ["asdf", "alkjlk", "adsfaf", "ajfiouaoifu", "asdf", "alkjlk"];

    const handleClick = (index) => () => setActive(index);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    });

    return (
        <div className="w-full" ref={ref}>
            <div
                id="scroll-horizontal"
                className="scrollremove flex flex-row h-6.5 overflow-x-scroll gap-2 py-2 border-b border-gray-300 dark:border-zinc-800 px-2 xl:-mt-4"
                style={{ width }}
            >
                {List.map((title, index) => (
                    <span
                        key={index}
                        onClick={handleClick(index)}
                        className={`flex items-center border rounded-lg text-sm font-medium px-3 ${
                            active === index
                                ? "bg-indigo-200 border-indigo-300 text-indigo-800 dark:bg-indigo-300 dark:text-indigo-900"
                                : "border-gray-200 dark:border-zinc-800 dark:text-gray-300"
                        }`}
                    >
                        {title}
                    </span>
                ))}
            </div>
        </div>
    );
}
