import { Struct } from "superstruct";

export const validateStruct = (struct) => (values) => {
    const errors = {};
    const [result] = struct.validate(values);
    for (const failure of result?.failures() || []) {
        errors[failure.path[0]] = failure.message;
    }
    return errors;
};
