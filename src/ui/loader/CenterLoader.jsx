import React from "react";
import { Spinner } from "../components/Spinner";

export const CenterLoader = ({}) => {
    return (
        <div className={`flex w-full h-full items-center justify-center`}>
            <Spinner />
        </div>
    );
};
