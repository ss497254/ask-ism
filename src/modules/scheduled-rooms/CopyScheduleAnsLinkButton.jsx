import React, { useState } from "react";
import { Link, Link2 } from "react-feather";
import { BoxedIcon } from "../../ui/BoxedIcon";
import { copyTextToClipboard } from "./copyToClipboard";

export const CopyScheduleAnsLinkButton = ({ text }) => {
    const [copied, setCopied] = useState(false);
    return (
        <BoxedIcon
            onClick={() => {
                if (copyTextToClipboard(text)) {
                    setCopied(true);
                }
            }}
        >
            <Link2 size={18} />
        </BoxedIcon>
    );
};
