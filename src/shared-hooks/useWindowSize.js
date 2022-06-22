import { debounce } from "lodash";
import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        const debounced = debounce(handleResize, 300);

        window.addEventListener("resize", debounced);

        handleResize();

        return () => {
            debounced.cancel();
            window.removeEventListener("resize", debounced);
        };
    }, []);

    return windowSize;
};

export default useWindowSize;
