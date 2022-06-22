import React from "react";
import { MessageElement, MessageElementProps } from "./MessageElement";
import { BaseOverlay } from "./BaseOverlay";

export const MessagesDropdown = ({ messageList = [] }) => {
    return (
        <BaseOverlay
            title={".messagesDropdown.title"}
            actionButton={
                messageList.length ? ".messagesDropdown.showMore" : ""
            }
        >
            {messageList.length > 0 ? (
                messageList.map((message, idx) => (
                    <MessageElement {...message} key={idx} />
                ))
            ) : (
                <div className="py-5 px-4" data-testid="empty-state-msg">
                    {".messagesDropdown.noMessages"}
                </div>
            )}
        </BaseOverlay>
    );
};
