export const customEmojis = [
    {
        name: "heart",
        short_names: ["heart", "<3"],
        keywords: ["heart", "<3"],
        imageUrl: "/emotes/heart.png",
    },
    {
        name: "doughdoge",
        short_names: ["doughdoge"],
        keywords: ["dough", "doge", "pizza"],
        imageUrl: "/emotes/doughdoge.png",
    },
];

export const emoteMap = {};

customEmojis.forEach((e) => {
    emoteMap[e.name] = e.imageUrl;
});
