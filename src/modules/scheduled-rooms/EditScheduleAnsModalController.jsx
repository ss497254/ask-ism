import React, { useState } from "react";
import {
    CreateScheduleAnsModal,
    ScheduleAnsFormData,
} from "./CreateScheduledAnsModal";

export const EditScheduleAnsModalController = ({
    onScheduledAns,
    children,
}) => {
    const [editInfo, setScheduleAnsToEdit] = useState(null);

    return (
        <>
            {editInfo ? (
                <CreateScheduleAnsModal
                    editInfo={{
                        id: editInfo.scheduleAnsToEdit.id,
                        intialValues: {
                            cohosts: [],
                            description: editInfo.scheduleAnsToEdit.description,
                            name: editInfo.scheduleAnsToEdit.name,
                            scheduledFor: new Date(
                                editInfo.scheduleAnsToEdit.scheduledFor
                            ),
                        },
                    }}
                    onScheduledAns={(...vals) =>
                        onScheduledAns(editInfo, ...vals)
                    }
                    onRequestClose={() => setScheduleAnsToEdit(null)}
                />
            ) : null}
            {children({ onEdit: setScheduleAnsToEdit })}
        </>
    );
};
