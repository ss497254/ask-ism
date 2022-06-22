import React from "react";

export const AnsCardHeading = ({ icon, text }) => {
    return (
        <div className="flex text-primary-100 font-bold leading-5 truncate w-full mxWid[500]">
            {icon ? <span className="mr-2 align-middle">{icon}</span> : null}
            <span className="text-wrap">{text}</span>
        </div>
    );
};
