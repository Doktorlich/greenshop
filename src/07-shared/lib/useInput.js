import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isCheck, setIsCheck] = useState(true);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
        setIsCheck(e.target.checked);
    };
    const onChangeCheck = (e) => {
        setIsCheck(e.target.checked);
    };

    const onBlur = () => {
        setIsDirty(true);
    };
    const onFocus = () => {
        setIsDirty(false);
    };
    return { value, isDirty, isCheck, onChange, onChangeCheck, onBlur, onFocus, ...valid };
};
