export const roomToCurrentAns = (r) =>
    r
        ? {
              ...r,
              muteMap: {},
              deafMap: {},
              users: [],
              activeSpeakerMap: {},
              autoSpeaker: false,
          }
        : r;
