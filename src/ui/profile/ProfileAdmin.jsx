import React, { useEffect, useState } from "react";
import { useConn } from "../../shared-hooks/useConn";
import { Button } from "../components/Button";

export const ProfileAdmin = ({ user, className = "" }) => {
    const conn = useConn();
    const wrapper = conn;
    const [contributions, setContributions] = useState(0);
    const [isStaff, setIsStaff] = useState(false);
    useEffect(() => {
        setContributions(user.contributions);
        setIsStaff(user.staff);
    }, [user]);
    return (
        <div
            className={`block mt-2 bg-gray-800 p-4 rounded-8 w-full leading-8 ${className}`}
        >
            <div>
                <label className="flex mb-4">
                    <div className={`text-gray-100`}>{"Contributions"}:</div>
                    {/* <input
                        type="number"
                        className="px-2 ml-2 text-gray-100 placeholder-gray-300 focus:outline-none bg-gray-700"
                        value={contributions}
                        onChange={(e) =>
                            setContributions(Number(e.target.value))
                        }
                    /> */}
                    <Button size="tiny" className="ml-4">
                        {"Save"}
                    </Button>
                </label>
            </div>
            <div>
                <label className="inline-flex mb-4">
                    <div className={`text-gray-100`}>{"Staff"}</div>
                    <input
                        type="checkbox"
                        className="ml-2 mt-1"
                        checked={isStaff}
                        onChange={(e) => setIsStaff(e.target.checked)}
                    />
                    <Button className="ml-4">{"Save"}</Button>
                </label>
            </div>
        </div>
    );
};
