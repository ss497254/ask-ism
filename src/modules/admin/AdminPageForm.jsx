import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { showErrorToast } from "../../lib/showErrorToast";
import { useConn } from "../../shared-hooks/useConn";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { MiddlePanel } from "../layouts/GridPanels";

export const AdminPageForm = ({}) => {
    const conn = useConn();
    const [username, setUsername] = useState("");
    const [reason, setReason] = useState("");
    const [contributions, setContributions] = useState(0);
    const [isStaff, setIsStaff] = useState(false);
    const { replace } = useRouter();
    const wrapper = conn;

    useEffect(() => {
        if (conn.user.username !== "benawad") {
            showErrorToast("nice try");
            replace("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (conn.user.username !== "benawad") {
        return <MiddlePanel />;
    }

    return (
        <MiddlePanel>
            <h3 className="text-primary-100">{".admin.username"}</h3>
            <div className="flex">
                <Input
                    autoFocus
                    placeholder={".admin.usernamePlaceholder"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mt-6">
                <h3 className="text-primary-100">{".admin.ban"}</h3>
                <Input
                    className={`mb-4`}
                    autoFocus
                    placeholder={".admin.reason"}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
                <Button
                    onClick={() => {
                        if (username && reason) {
                            wrapper.mutation.ban(username, reason);
                        }
                    }}
                >
                    {".admin.ban"}
                </Button>
            </div>
        </MiddlePanel>
    );
};
