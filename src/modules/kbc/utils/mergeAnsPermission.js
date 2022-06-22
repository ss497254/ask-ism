export const mergeAnsPermission = (currentAnsPermission, newAnsPermissions) => {
    return {
        ...(currentAnsPermission || {
            askedToSpeak: false,
            isMod: false,
            isSpeaker: false,
        }),
        ...newAnsPermissions,
    };
};
