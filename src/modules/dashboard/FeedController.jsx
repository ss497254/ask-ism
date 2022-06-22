import React, {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { useScreenType } from "../../shared-hooks/useScreenType";
import useWindowSize from "../../shared-hooks/useWindowSize";
import { Button } from "../../ui/components/Button";
import { Card } from "../../ui/components/Card";
import { FeedHeader } from "../../ui/components/FeedHeader";
import { CenterLoader } from "../../ui/loader/CenterLoader";
// import { EditScheduleAnsModalController } from "../scheduled-rooms/EditScheduleAnsModalController";
// import { ScheduledAnsCard } from "../scheduled-rooms/ScheduledAnsCard";
import { AuthContext } from "../auth/AuthProvider";
import { MiddlePanel } from "../layouts/GridPanels";
import { CreateAnsModal } from "./CreateAnsModal";

const Bar = () => {
    const { width: trigger } = useWindowSize();
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setWidth(width / 100);
    }, [trigger]);

    // useEffect(() => {
    //     const container = document.getElementById("scroll-horizontal");
    //     container.addEventListener("wheel", function (e) {
    //         if (e.deltaY > 0) {
    //             container.scrollLeft += 50;
    //             e.preventDefault();
    //         } else {
    //             container.scrollLeft -= 50;
    //             e.preventDefault();
    //         }
    //     });
    // }, []);

    const List = ["asdf", "alkjlk", "adsfaf", "ajfiouaoifu", "asdf", "alkjlk"];

    const handleClick = (index) => () => setActive(index);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    });

    return (
        <div className="w-full" ref={ref}>
            <div
                id="scroll-horizontal"
                className="scrollremove flex flex-row h-6.5 overflow-x-scroll gap-2 py-2 border-b border-gray-300 dark:border-zinc-800 px-2 xl:-mt-4"
                style={{ width }}
            >
                {List.map((title, index) => (
                    <span
                        key={index}
                        onClick={handleClick(index)}
                        className={`flex items-center border rounded-lg text-sm font-medium px-3 ${
                            active === index
                                ? "bg-indigo-200 border-indigo-300 text-indigo-800 dark:bg-indigo-300 dark:text-indigo-900"
                                : "border-gray-200 dark:border-zinc-800 dark:text-gray-300"
                        }`}
                    >
                        {title}
                    </span>
                    // <div
                    //     key={index}
                    //     onClick={handleClick(index)}
                    //     className={
                    //         "flex flex-col h-full justify-center rounded-lg px-4 outline lg:outline-1 outline-gray-300 xl:cursor-pointer " +
                    //         (Active === index
                    //             ? "bg-blue-500 outline-blue-500 text-white lg:outline-[1.5px]"
                    //             : "bg-gray-100 dark:bg-zinc-900 dark:outline-zinc-800 dark:text-white")
                    //     }
                    // >
                    //     {title}
                    // </div>
                ))}
            </div>
        </div>
    );
};

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
        <div>
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
                    listeners={question.numOfAnswers}
                    tags={question.tags}
                    like={question.like}
                />
            ))}
            {/* {isLastPage && data.nextCursor ? ( */}
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
        </div>
    );
};

export const Feed = ({}) => {
    const [cursors, setCursors] = useState([0]);
    const { conn } = useContext(AuthContext);
    const [roomModal, setAnsModal] = useState(false);
    const screenType = useScreenType();
    const { currentAnsId } = useCurrentAnsIdStore;

    let mb = "mb-3";
    if (screenType === "fullscreen") {
        if (currentAnsId) {
            mb = "mb-6";
        } else {
            mb = "mb-4";
        }
    }

    return (
        <MiddlePanel stickyChildren={<Bar />}>
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
        </MiddlePanel>
    );
};

// <div className={`flex flex-1 flex-col ${mb}`}>
//     <div className="flex flex-col space-y-4">
//         {/* {data?.scheduledAnswers?.map((sr) => (
//             <EditScheduleAnsModalController
//                 key={sr.id}
//                 onScheduledAns={(_, editedAnsData) => {
//                     updater(
//                         "getMyScheduledAnswersAboutToStart",
//                         (x) => {
//                             return !x
//                                 ? x
//                                 : {
//                                       scheduledAnswers:
//                                           x.scheduledAnswers.map(
//                                               (y) =>
//                                                   y.id === sr.id
//                                                       ? {
//                                                             ...sr,
//                                                             statement:
//                                                                 editedAnsData.name,
//                                                             description:
//                                                                 editedAnsData.description,
//                                                             scheduledFor:
//                                                                 editedAnsData.scheduledFor.toISOString(),
//                                                         }
//                                                       : y
//                                           ),
//                                   };
//                         }
//                     );
//                 }}
//             >
//                 {({ onEdit }) => (
//                     <ScheduledAnsCard
//                         info={sr}
//                         onDeleteComplete={() =>
//                             updater(
//                                 "getMyScheduledAnswersAboutToStart",
//                                 (x) =>
//                                     !x
//                                         ? x
//                                         : {
//                                               scheduledAnswers:
//                                                   x.scheduledAnswers.filter(
//                                                       (y) =>
//                                                           y.id !==
//                                                           sr.id
//                                                   ),
//                                           }
//                             )
//                         }
//                         onEdit={() =>
//                             onEdit({
//                                 cursor: "",
//                                 scheduleAnsToEdit: sr,
//                             })
//                         }
//                         noCopyLinkButton
//                     />
//                 )}
//             </EditScheduleAnsModalController>
//         ))}
//         {cursors.map((cursor, i) => (
//             <Page
//                 key={cursor}
//                 cursor={cursor}
//                 isOnlyPage={cursors.length === 1}
//                 onLoadMore={(c) => setCursors([...cursors, c])}
//                 isLastPage={i === cursors.length - 1}
//             />
//         ))} */}
//     </div>
// </div>
