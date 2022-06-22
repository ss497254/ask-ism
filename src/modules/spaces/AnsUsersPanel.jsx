import React, { useEffect, useContext } from "react";
import { AnsSectionHeader } from "../../ui/AnsSectionHeader";
import { useSplitUsersIntoSections } from "./useSplitUsersIntoSections";
import { AuthContext } from "../auth/AuthProvider";
import { useScreenType } from "../../shared-hooks/useScreenType";
import { useMediaQuery } from "react-responsive";

export const AnsUsersPanel = (props) => {
    const { askingToSpeak, listeners, speakers, canIAskToSpeak } =
        useSplitUsersIntoSections(props);
    const me = useContext(AuthContext).conn?.user;

    let gridTemplateColumns = "repeat(5, minmax(0, 1fr))";
    const screenType = useScreenType();
    const isBigFullscreen = useMediaQuery({ minWidth: 640 });

    if (isBigFullscreen && screenType === "fullscreen") {
        gridTemplateColumns = "repeat(4, minmax(0, 1fr))";
    } else if (screenType === "fullscreen") {
        gridTemplateColumns = "repeat(3, minmax(0, 1fr))";
    }

    return (
        <div
            className={`flex pt-4 px-4 flex-1 ${
                screenType !== "fullscreen"
                    ? "bg-primary-800"
                    : "bg-primary-900"
            }`}
            id={props.room.isPrivate ? "private-room" : "public-room"}
            style={{ top: "0px" }}
        >
            <div className="w-full block">
                <div
                    style={{
                        gridTemplateColumns,
                    }}
                    className={`w-full grid gap-5`}
                >
                    <AnsSectionHeader
                        title={".room.speakers"}
                        tagText={
                            "" +
                            (canIAskToSpeak
                                ? speakers.length - 1
                                : speakers.length)
                        }
                    />
                    {speakers}
                    {askingToSpeak.length ? (
                        <AnsSectionHeader
                            title={".room.requestingToSpeak"}
                            tagText={"" + askingToSpeak.length}
                        />
                    ) : null}
                    {askingToSpeak}
                    {listeners.length ? (
                        <AnsSectionHeader
                            title={".room.listeners"}
                            tagText={"" + listeners.length}
                        />
                    ) : null}
                    {listeners}
                    <div className={`flex h-3 w-full col-span-full`}></div>
                </div>
            </div>
        </div>
    );
};
