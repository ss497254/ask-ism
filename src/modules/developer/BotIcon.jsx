import React, { useState } from "react";

export const BotIcon = ({ username, src, onClick }) => {
    const [isError, setError] = useState(false);
    return (
        <div
            className="mb-2 grid"
            style={{ width: 120, height: 120 }}
            data-testid="single-user-avatar"
        >
            <img
                alt={`${username ?? ""}-s-avatar`}
                className={"rounded-full w-full h-full object-cover relative"}
                style={{ gridColumn: 1, gridRow: 1 }}
                onError={() => setError(true)}
                src={
                    isError
                        ? `https://ui-avatars.com/api/${
                              username ? `&name=${username}` : "&name"
                          }&rounded=true&background=B23439&bold=true&color=FFFFFF`
                        : src
                }
            />
        </div>
    );
};
