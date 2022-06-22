import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { useDeafStore } from "../../global-stores/useDeafStore";
import { useMuteStore } from "../../global-stores/useMuteStore";
import { SolidPlus } from "../../icons";
import { useConn } from "../../shared-hooks/useConn";
import { useCurrentAnsInfo } from "../../shared-hooks/useCurrentAnsInfo";
import { useScreenType } from "../../shared-hooks/useScreenType";
import { useSetDeaf } from "../../shared-hooks/useSetDeaf";
import { useSetMute } from "../../shared-hooks/useSetMute";
import { useTypeSafeMutation } from "../../shared-hooks/useTypeSafeMutation";
import { useTypeSafePrefetch } from "../../shared-hooks/useTypeSafePrefetch";
import { AnsPanelIconBar } from "../../ui/AnsPanelIconBar";
import { AnsChatInput } from "./chat/AnsChatInput";
import { AnsChatList } from "./chat/AnsChatList";
import { AnsChatMentions } from "./chat/AnsChatMentions";
import AnsOverlay from "./mobile/AnsOverlay";
import { AnsSettingsModal } from "./AnsSettingModal";

export const AnsPanelIconBarController = ({ users, room }) => {
    const { muted } = useMuteStore();
    const setMute = useSetMute();
    const { deafened } = useDeafStore();
    const conn = useConn();
    const setDeaf = useSetDeaf();
    const { canSpeak, isCreator, canIAskToSpeak } = useCurrentAnsInfo();
    const { push } = useRouter();
    const prefetch = useTypeSafePrefetch();
    const { mutateAsync: setListener } = useTypeSafeMutation("setListener");
    const { currentAnsId } = useCurrentAnsIdStore();
    const [roomId, setAnsId] = useState("");
    const screenType = useScreenType();
    const userMap = useMemo(() => {
        const map = {};
        users.forEach((u) => {
            map[u.id] = u;
        });
        return map;
    }, [users]);

    return (
        <div className="flex flex-col w-full">
            <AnsSettingsModal
                open={!!roomId}
                onRequestClose={() => setAnsId("")}
            />
            {screenType === "fullscreen" ? (
                <AnsOverlay
                    mute={
                        canSpeak
                            ? { isMuted: muted, onMute: () => setMute(!muted) }
                            : undefined
                    }
                    canSpeak={canSpeak}
                    deaf={{
                        isDeaf: deafened,
                        onDeaf: () => setDeaf(!deafened),
                    }}
                    onInvitePeopleToAns={() => {
                        push(`/q/[id]/invite`, `/q/${currentAnsId}/invite`);
                    }}
                    onAnsSettings={
                        isCreator
                            ? () => {
                                  prefetch(["getBlockedFromAnsUsers", 0]);
                                  setAnsId(currentAnsId);
                              }
                            : undefined
                    }
                    askToSpeak={
                        canIAskToSpeak
                            ? () => wrap(conn).mutation.askToSpeak()
                            : undefined
                    }
                    setListener={() => setListener([conn.user.id])}
                />
            ) : (
                <AnsPanelIconBar
                    mute={
                        canSpeak
                            ? { isMuted: muted, onMute: () => setMute(!muted) }
                            : undefined
                    }
                    deaf={{
                        isDeaf: deafened,
                        onDeaf: () => setDeaf(!deafened),
                    }}
                    onLeaveAns={() => {
                        push("/");
                    }}
                    onInvitePeopleToAns={() => {
                        push(`/q/[id]/invite`, `/q/${currentAnsId}/invite`);
                    }}
                    onAnsSettings={
                        isCreator
                            ? () => {
                                  prefetch(["getBlockedFromAnsUsers", 0]);
                                  setAnsId(currentAnsId);
                              }
                            : undefined
                    }
                />
            )}
            {screenType === "1-cols"
                ? createPortal(
                      <div
                          className={`flex absolute flex-col w-full z-30 bg-primary-800 h-full rounded-8`}
                      >
                          <button className="flex justify-between items-center w-full text-primary-100 p-4 text-2xl">
                              <span>{"title"}</span>
                              {/* Just a temporary solution to make close chat ux better, until we have the design in figma */}
                              <SolidPlus className={`transform rotate-45`} />
                          </button>
                          <div className="flex overflow-y-auto flex-1">
                              <div
                                  className={`flex flex-1 w-full flex-col mt-4`}
                              >
                                  <AnsChatList room={room} userMap={userMap} />
                                  <AnsChatMentions users={users} />
                                  <AnsChatInput users={users} />
                              </div>
                          </div>
                      </div>,
                      document.querySelector("#__next")
                  )
                : null}
        </div>
    );
};
