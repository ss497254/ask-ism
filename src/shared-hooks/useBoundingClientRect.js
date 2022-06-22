import { MutableRefObject, useState, useEffect, useCallback } from "react";

function getBoundingClientRect(element) {
    return element.getBoundingClientRect();
}

function useBoundingClientRect(ref) {
    const [value, setValue] = useState(null);

    const update = useCallback(() => {
        setValue(ref.current ? getBoundingClientRect(ref.current) : null);
    }, [ref]);

    useEffect(() => {
        update();
    }, [update]);

    return value;
}

export { useBoundingClientRect };
