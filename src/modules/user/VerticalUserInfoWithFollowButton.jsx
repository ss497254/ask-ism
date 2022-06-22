import React from "react";
import { SolidFriends, SolidFriendsAdd } from "../../icons";
import { useConn } from "../../shared-hooks/useConn";
import { useTypeSafeMutation } from "../../shared-hooks/useTypeSafeMutation";
import { useUpdateQuery } from "../../shared-hooks/useUpdateQuery";
import { Button } from "../../ui/Button";
import { VerticalUserInfo } from "../../ui/VerticalUserInfo";

export const VerticalUserInfoWithFollowButton = ({
    idOrUsernameUsedForQuery,
    user,
}) => {
    const { mutateAsync, isLoading: followLoading } =
        useTypeSafeMutation("follow");
    const conn = useConn();
    const updater = useUpdateQuery();

    return (
        <>
            <VerticalUserInfo user={user} />
            <div className={`flex mb-5 items-center w-full justify-center`}>
                {/* @todo add real icon */}
                {user.id !== conn.user.id ? (
                    <Button
                        loading={followLoading}
                        onClick={async () => {
                            await mutateAsync([user.id, !user.youAreFollowing]);
                            updater(
                                ["getUserProfile", idOrUsernameUsedForQuery],
                                (u) =>
                                    !u
                                        ? u
                                        : {
                                              ...u,
                                              numFollowers:
                                                  u.numFollowers +
                                                  (user.youAreFollowing
                                                      ? -1
                                                      : 1),
                                              youAreFollowing:
                                                  !user.youAreFollowing,
                                          }
                            );
                        }}
                        size="small"
                        color={user.youAreFollowing ? "secondary" : "primary"}
                        icon={user.youAreFollowing ? null : <SolidFriendsAdd />}
                    >
                        {user.youAreFollowing
                            ? ".viewUser.unfollow"
                            : ".viewUser.followHim"}
                    </Button>
                ) : null}
            </div>
        </>
    );
};
