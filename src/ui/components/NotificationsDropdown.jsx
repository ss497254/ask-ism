import React from "react";
import { BaseOverlay } from "./BaseOverlay";
import {
    FollowNotification,
    GenericNotification,
    LiveNotification,
    NewAnsNotification,
} from "./NotificationElement";

const parseNotification = (props) => {
    switch (props.type) {
        case "follow": {
            return (
                <FollowNotification
                    userAvatarSrc={props.userAvatarSrc}
                    username={props.username}
                    time={props.time}
                />
            );
        }
        case "generic": {
            return (
                <GenericNotification
                    notificationMsg={props.notificationMsg}
                    time={props.time}
                />
            );
        }
        case "live": {
            return (
                <LiveNotification username={props.username} time={props.time} />
            );
        }
        case "newroom": {
            return (
                <NewAnsNotification
                    username={props.username}
                    time={props.time}
                />
            );
        }
    }
};

export const NotificationsDropdown = (props) => {
    return (
        <div className="flex" style={{ width: 444 }}>
            <BaseOverlay title={"Notifications"}>
                {props.data.map((p, i) => (
                    <div className={"py-3 px-4"} key={i}>
                        {parseNotification(p)}
                    </div>
                ))}
            </BaseOverlay>
        </div>
    );
};
