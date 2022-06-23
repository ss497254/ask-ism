import React, { useState } from "react";
// import { ScheduledAnsCard } from "../modules/scheduled-rooms/ScheduledAnsCard";
// import { Button } from "../components/Button";
// import { CenterLoader } from "../components/CenterLoader";
// import { EditScheduleAnsModalController } from "../../modules/scheduled-rooms/EditScheduleAnsModalController";

// const List = ({
//     onLoadMore,
//     cursor,
//     isLastPage,
//     isOnlyPage,
//     userId,
//     onEdit,
// }) => {

//     // if (isLoading) {
//     //     return <CenterLoader />;
//     // }

//     if (isOnlyPage && data.rooms.length === 0) {
//         return (
//             <div
//                 className={`mt-2 bg-primary-800 p-4 rounded-8 w-full leading-8 text-primary-100`}
//             >
//                 {"scheduledAnswers.noneFound"}
//             </div>
//         );
//     }

//     return <div className={`${isLastPage ? "mb-24" : ""}`}></div>;
// };

export const ProfileScheduled = ({ user, className = "" }) => {
    return (
        <div className={`mt-2 rounded-8 w-full leading-8 ${className}`}>
            {/* <EditScheduleAnsModalController
                onScheduledAns={(editInfo, data, _resp) => {}}
            ></EditScheduleAnsModalController> */}
        </div>
    );
};
