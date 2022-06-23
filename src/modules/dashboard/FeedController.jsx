import React, {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import NavigationBar from "./NavigationBar";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { useScreenType } from "../../shared-hooks/useScreenType";
import useWindowSize from "../../shared-hooks/useWindowSize";
import { Button } from "../../ui/components/Button";
import { Card } from "../../ui/components/Card";
import { FeedHeader } from "../../ui/components/FeedHeader";
import { CenterLoader } from "../../ui/loader/CenterLoader";
import { AuthContext } from "../auth/AuthProvider";
import { CreateAnsModal } from "./CreateAnsModal";

const Page = ({ cursor, isOnlyPage, isLastPage, onLoadMore }) => {
    const screenType = useScreenType();
    const { currentAnsId } = useCurrentAnsIdStore();

    let isLoading = false;

    if (isLoading) {
        return <CenterLoader />;
    }

    const data = [
        {
            id: 134,
            like: -1,
            statement:
                "The textarea component is a multi-line text field input that can be used to receive longer chuncks of text from the user in the form of a comment box, description field, and more.",
            numOfAnswers: 12,
            tags: ["adsf", "343", "hadg"],
            User: { displayName: "adsf", avatarUrl: "/img/male-1b.jpg" },
        },
        {
            id: 23,
            statement:
                "Admin One is a free tailwind CSS admin dashboard template. Tailwind CSS is a utility-first CSS framework for speedy UI development that may significantly improve your work in a short amount of time.",
            tags: ["adsf", "343", "hadg"],
            User: { displayName: "adsf", avatarUrl: "/img/male-1b.jpg" },
        },
        {
            id: 34,
            like: 1,
            statement:
                "This dashboard template is easy to use, adapts nicely to different display sizes for responsiveness, and is compatible with all modern browsers. It has a design that is both bright with all modern browsers. It has a design that is both brightwith all modern browsers. It has a design that is both brightwith all modern browsers. It has a design that is both brightwith all modern browsers. It has a design that is both brightwith all modern browsers. It has a design that is both bright and dark in tone, as well as essential features. To get started with a project using the Tailwind CSS framework, this simplistic template is the ideal choice?",
            numOfAnswers: 3,
            tags: ["sdfgsdfg", "343", "hadg"],
            User: { displayName: "adsf", avatarUrl: "/img/female-1a.jpg" },
        },
        {
            id: 223,
            like: 1,
            statement:
                "To get started with a project using the Tailwind CSS framework, this simplistic template is the ideal choice.",
            tags: ["adsf", "asdf", "234"],
            User: {
                displayName: "adasdoifuaiosa faksjsf 3kjhkahd",
                avatarUrl: "/img/male-1a.jpg",
            },
        },
        {
            id: 523,
            statement:
                "To get started with a project using the Tailwind CSS framework, this simplistic template is the ideal choice.",
            User: { displayName: "adsf", avatarUrl: "/img/female-1b.jpg" },
            tags: ["a3dsf", "343", "hadg"],
        },
    ];

    if (isOnlyPage && data.length === 0) {
        return (
            <Button variant="small" onClick={() => {}}>
                {"refresh"}
            </Button>
        );
    }

    return (
        <>
            {data.map((question) => (
                <Card
                    onClick={() => {}}
                    key={question.id}
                    text={question.statement}
                    subtitle={
                        "User" in question ? question.User.displayName : ""
                    }
                    avatarUrl={
                        "User" in question ? question.User.avatarUrl : null
                    }
                    answers={question.numOfAnswers}
                    tags={question.tags}
                    like={question.like}
                />
            ))}
            <div className={`flex justify-center py-5`}>
                <Button
                    btn="light"
                    onClick={() => {
                        onLoadMore(data.nextCursor);
                    }}
                >
                    {"Load More"}
                </Button>
            </div>
        </>
    );
};

export const Feed = ({}) => {
    const [cursors, setCursors] = useState([0]);
    const { conn } = useContext(AuthContext);
    const [roomModal, setAnsModal] = useState(false);
    const screenType = useScreenType();

    return (
        <>
            {(screenType === "tablet" || screenType === "mobile") && (
                <NavigationBar />
            )}
            <div className={`px-2`}>
                <FeedHeader
                    className="px-1"
                    actionTitle={"Create Question"}
                    onActionClicked={() => {
                        setAnsModal(true);
                    }}
                    title={"Your Feed"}
                />
                <Page />
                {roomModal && (
                    <CreateAnsModal onRequestClose={() => setAnsModal(false)} />
                )}
            </div>
        </>
    );
};
