import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length <= validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case "maxLength":
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);

                    break;
                case "isMail":
                    if (re.test(value)) {
                        setEmailError(false);
                    } else {
                        setEmailError(true);
                    }

                    break;
            }
        }


    }, [value, emailError]);
    return { isEmpty, minLengthError, maxLengthError, emailError };
};
