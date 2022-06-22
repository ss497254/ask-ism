import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../../form-fields/InputField";
import { showErrorToast } from "../../lib/showErrorToast";
import { useWrappedConn } from "../../shared-hooks/useConn";
import { Button } from "../../ui/Button";
import { ButtonLink } from "../../ui/ButtonLink";
import { InputErrorMsg } from "../../ui/InputErrorMsg";
import { Modal } from "../../ui/Modal";

const colors = {
    p100: "#dee3ea",
    p200: "#b2bdcd",
    p300: "#5d7290",
    p600: "#323d4d",
    p700: "#242c37",
    p800: "#151a21",
    p900: "#0b0e11",
    accent: "#fd4d4d",
    accentHover: "#fd6868",
    white: "#FFF",
};

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: colors.accent,
        },
        secondary: {
            main: colors.accent,
        },
    },
    overrides: {
        MuiPickersDay: {
            day: {
                "&:hover": {
                    backgroundColor: colors.p700,
                },
                color: colors.p100,
            },
            current: {
                "&:hover": {
                    backgroundColor: colors.p700,
                },
                color: colors.p100,
            },
            daySelected: {
                "&:hover": {
                    backgroundColor: colors.accentHover,
                },
                backgroundColor: colors.accent,
                color: colors.white,
            },
            dayDisabled: {
                backgroundColor: colors.p800,
                color: colors.p600,
            },
        },
        MuiPickerDTHeader: {
            separator: {},
            toolbar: {},
        },
        MuiPickerDTTabs: {
            tabs: {
                backgroundColor: colors.p900,
            },
        },
        MuiPickersCalendar: {
            week: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            progressContainer: {},
            transitionContainer: {
                backgroundColor: colors.p800,
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            transitionContainer: {
                backgroundColor: colors.p800,
            },
            iconButton: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            daysHeader: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            dayLabel: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
        },
        MuiPickersSlideTransition: {
            transitionContainer: {},
        },
        MuiPickersYearSelectionStyles: {
            container: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
        },
        MuiPickersYear: {
            root: {
                backgroundColor: colors.p800,
                color: colors.p300,
            },
            yearSelected: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            yearDisabled: {
                backgroundColor: colors.p800,
                color: colors.p600,
            },
        },
        MuiPickersMonthSelection: {
            container: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
        },
        MuiPickersMonth: {
            root: {
                backgroundColor: colors.p800,
                color: colors.p300,
            },
            monthSelected: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            monthDisabled: {
                backgroundColor: colors.p800,
                color: colors.p600,
            },
        },
        MuiPickersTimePickerToolbar: {
            separator: {},
            toolbarLandscape: {},
            hourMinuteLabel: {},
            ampmLabel: {},
        },
        MuiPickersClock: {
            container: {
                backgroundColor: colors.p800,
                color: colors.p100,
            },
            clock: {
                backgroundColor: colors.p900,
                color: colors.accent,
            },
            pin: {
                backgroundColor: colors.accent,
            },
        },
        MuiPickersClockNumber: {
            clockNumber: {
                color: colors.p200,
            },
            clockNumberSelected: {
                color: colors.white,
            },
        },
        MuiPickersClockPointer: {
            animateTransform: {},
            pointer: {
                backgroundColor: colors.accent,
            },
            thumb: {
                backgroundColor: colors.accent,
                borderColor: colors.accent,
            },
            noPoint: {
                backgroundColor: colors.accent,
            },
        },
        MuiPickersModal: {
            dialog: {
                backgroundColor: colors.p800,
            },
            dialogRoot: {
                backgroundColor: colors.p800,
            },
            dialogRootWider: {
                backgroundColor: colors.p800,
            },
            withAdditionalAction: {
                backgroundColor: colors.p800,
            },
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: colors.p900,
                color: colors.p100,
            },
        },
        MuiPickersToolbarButton: {
            toolbarBtn: {
                color: colors.p100,
            },
        },
    },
});

export const CreateScheduleAnsModal = ({
    onScheduledAns,
    onRequestClose,
    editInfo,
}) => {
    const conn = useWrappedConn();
    return (
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider>
                <Modal isOpen onRequestClose={onRequestClose}>
                    {/* <Formik
                        initialValues={
                            editInfo?.intialValues || {
                                name: "",
                                description: "",
                                cohosts: [],
                                scheduledFor: add(new Date(), { days: 1 }),
                            }
                        }
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={({ name, scheduledFor }) => {
                            const errors = {};

                            if (name.length < 2) {
                                return {
                                    name: "minLength",
                                };
                            }

                            if (scheduledFor.getTime() < new Date().getTime()) {
                                return {
                                    scheduledFor: "needsFuture",
                                };
                            }

                            return errors;
                        }}
                        onSubmit={async (allData) => {
                            const { name, scheduledFor, ...data } = allData;
                            const scheduledForISO = scheduledFor.toISOString();
                            const resp = await (editInfo
                                ? conn.mutation.editScheduledAns(editInfo.id, {
                                      name,
                                      scheduledFor: scheduledForISO,
                                      ...data,
                                  })
                                : conn.mutation.createScheduledAns({
                                      name,
                                      scheduledFor: scheduledForISO,
                                      ...data,
                                  }));

                            if ("error" in resp && resp.error) {
                                showErrorToast(resp.error);
                                return;
                            } else {
                                onScheduledAns(allData, resp);
                            }
                            onRequestClose();
                        }}
                    >
                        {({ setFieldValue, values, errors, isSubmitting }) => (
                            <Form className="flex-col w-full">
                                <InputField
                                    name="name"
                                    maxLength={60}
                                    placeholder={"roomName"}
                                    autoFocus
                                />
                                <div className={`flex mt-4 w-full flex-col`}>
                                    <DateTimePicker
                                        value={values.scheduledFor}
                                        minDate={new Date()}
                                        maxDate={add(new Date(), { months: 6 })}
                                        onChange={(x) => {
                                            if (x) {
                                                setFieldValue(
                                                    "scheduledFor",
                                                    x
                                                );
                                            }
                                        }}
                                    />
                                    {errors.scheduledFor ? (
                                        <div className={`flex mt-1`}>
                                            <InputErrorMsg>
                                                {errors.scheduledFor}
                                            </InputErrorMsg>
                                        </div>
                                    ) : null}
                                    <div className={`flex mt-4`}>
                                        <InputField
                                            textarea
                                            placeholder={
                                                "modules.roomDescription"
                                            }
                                            name="description"
                                            maxLength={200}
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`flex pt-4 space-x-3 col-span-full items-center`}
                                >
                                    <Button
                                        loading={isSubmitting}
                                        type="submit"
                                        className={`mr-3`}
                                    >
                                        {"Ok"}
                                    </Button>
                                    <ButtonLink
                                        type="button"
                                        onClick={onRequestClose}
                                    >
                                        {"Cancel"}
                                    </ButtonLink>
                                </div>
                            </Form>
                        )}
                    </Formik> */}
                </Modal>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};
