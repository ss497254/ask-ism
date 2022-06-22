import { Router } from "next/router";
import * as React from "react";
import create from "zustand";
import { combine } from "zustand/middleware";
import { useSoundEffectStore } from "../modules/sound-effects/useSoundEffectStore";
import { Button } from "../ui/Button";
import { ButtonLink } from "../ui/ButtonLink";
import { Modal } from "../ui/Modal";
import { SingleUser } from "../ui/UserAvatar";

const useConfirmModalStore = create(
  combine(
    {
      options: null,
    },
    (set) => ({
      close: () => set({ options: null }),
      set,
    })
  )
);

export const invitedToSpaceConfirm = (options, push) => {
  useSoundEffectStore.getState().playSoundEffect("spaceInvite");
  useConfirmModalStore.getState().set({
    options: {
      ...options,
      onConfirm: () => {
        push(`/space/[id]`, `/space/${options.spaceId}`);
      },
    },
  });
};

export const InvitedToJoinSpaceModal = () => {
  const { options, close } = useConfirmModalStore();
  return (
    <Modal isOpen={!!options} onRequestClose={() => close()}>
      <div className="flex flex-col">
        {options ? (
          <div className="flex flex-col text-primary-100">
            <h1 className={`text-2xl mb-2`}>
              {options.type === "someone_you_follow_created_a_room"
                ? "New Space Created"
                : "Space Invite From"}
            </h1>
            <div className={`flex items-center`}>
              <SingleUser size="md" src={options.avatarUrl} />
              <div className={`flex ml-2 flex-col`}>
                <div className={`flex font-bold`}>{options.displayName}</div>
                <div className={`flex my-1`}>
                  <div className="flex">@{options.username}</div>
                </div>
              </div>
            </div>
            <div className={`mt-4`}>
              {options.type === "someone_you_follow_created_a_room"
                ? "justStarted"
                : "componentsinviteReceived"}
              <span className={`font-semibold ml-1`}>{options.roomName}</span>
              {"likeToJoin"}
            </div>
          </div>
        ) : null}
        <div className={`flex mt-4 items-center`}>
          <Button
            onClick={() => {
              close();
              options?.onConfirm();
            }}
            type="submit"
          >
            {"yes"}
          </Button>
          <ButtonLink
            type="button"
            onClick={close}
            className={`ml-4`}
            color="secondary"
          >
            {"Cancel"}
          </ButtonLink>
        </div>
      </div>
    </Modal>
  );
};
