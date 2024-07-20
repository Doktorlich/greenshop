import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);


    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const reUserName = /^[a-z][a-z0-9-]*$/i;
    const rePassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length <= validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                case "maxLength":
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false);
                    break;
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case "isMail":
                    if (re.test(value)) {
                        setEmailError(false);
                    } else {
                        setEmailError(true);
                    }
                    break;
                case "isUserName":
                    if (reUserName.test(value)) {
                        setUserNameError(false);
                    } else {
                        setUserNameError(true);
                    }
                    break;
                case "isPassword":
                    if (rePassword.test(value)) {
                        setPasswordError(false);
                    } else {
                        setPasswordError(true);
                    }
                    break;

            }
        }

    }, [value, emailError]);
    return {
        isEmpty, minLengthError, maxLengthError, emailError, userNameError, passwordError,
    };
};
