import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LgLogo, LogoIcon } from "../../icons";
import { useScreenType } from "../../shared-hooks/useScreenType";

const LeftHeader = ({}) => {
    const [screenType, setScreenType] = useState("desktop");
    const x = useScreenType();
    useEffect(() => setScreenType(x), [x]);

    return (
        <Link to="/">
            <div className="w-full px-2">
                {screenType.includes("desktop") ? (
                    <LgLogo />
                ) : (
                    <div className="flex justify-center w-full">
                        <LogoIcon width={40} height={40} color="#EFE7DC" />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default LeftHeader;
