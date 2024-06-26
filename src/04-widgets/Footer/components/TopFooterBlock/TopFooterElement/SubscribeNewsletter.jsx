import React, { useState } from "react";

import Input from "../../../../../07-shared/UI/elementsForm/Input/Input";
import Form from "../../../../../07-shared/UI/elementsForm/Form/Form";
import styled from "./SubscribeNewsletter.module.scss";
const SubscribeNewsletter = () => {
    const [valueInput, setValueInput] = useState("");
    const valueChangeHandler = (e) => {
        setValueInput(e.target.value);
    };
    return (
        <li className={styled["subscribe"]}>
            <h3 className={styled["subscribe__title"]}><b>Would you like to join newsletters?</b></h3>
            <Form className={styled["subscribe-form"]}>
                <Input className={styled["subscribe-form__email"]} type="email" value={valueInput} onChange={valueChangeHandler} placeholder="enter your email address..." />
                <Input className={styled["subscribe-form__submit"]} type="submit" value="Join" />
            </Form>
            <p className={styled["subscribe__description"]}>
                We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our
                (green)house to yours!
            </p>
        </li>
    );
};

export default SubscribeNewsletter;
