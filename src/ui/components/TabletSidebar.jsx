import React, { useState } from "react";
import Link from "next/link";
// import { useConn } from "../shared-hooks/useConn";
// import { useQuery } from "react-query";
import { SingleUser } from "./UserAvatar/SingleUser";

export const TabletSidebar = ({}) => {
    // const [cursors, setCursors] = useState([0, 1]);
    // const conn = useConn();

    // if (!conn) {
    //     return null;
    // }
    let u = {
        id: 3535,
        username: "jasd3234",
        avatarUrl: "/img/female-8.png",
        online: true,
        currentAns: { id: 23, name: "hello" },
    };

    return (
        <div className="pb-5 w-full flex flex-col flex-1 overflow-y-auto">
            <div className="flex flex-col mt-3 overflow-y-auto scrollbar-thin scrollbar-thumb-primary-700 overflow-x-hidden">
                <div className="flex py-3 w-full justify-center">
                    <SingleUser
                        size="xmd"
                        src={u.avatarUrl}
                        username={u.username}
                    />
                </div>
                <div className="flex py-3 w-full justify-center">
                    <SingleUser
                        size="xmd"
                        src={u.avatarUrl}
                        username={u.username}
                    />
                </div>
                <div className="flex py-3 w-full justify-center">
                    <SingleUser
                        size="xmd"
                        src={u.avatarUrl}
                        username={u.username}
                    />
                </div>
                <div className="flex py-3 w-full justify-center">
                    <SingleUser
                        size="xmd"
                        src={u.avatarUrl}
                        username={u.username}
                    />
                </div>
            </div>
        </div>
    );
};
