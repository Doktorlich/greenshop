import React from "react";
import styled from "./BillingAddress.module.scss";
import Form from "../../07-shared/UI/elementsForm/Form/Form.jsx";
import Label from "../../07-shared/UI/elementsForm/Label/Label.jsx";
import Input from "../../07-shared/UI/elementsForm/Input/Input.jsx";
import { useInput } from "../../07-shared/lib/useInput.js";
import Select from "../../07-shared/UI/elementsForm/Select/Select.jsx";
import { COUNTRIES_LIST } from "./data/countries.js";
import Option from "../../07-shared/UI/elementsForm/Option/Option.jsx";
import Textarea from "../../07-shared/UI/elementsForm/Textarea/Textarea.jsx";

const BillingAddress = () => {
    const firstName = useInput("");
    const lastName = useInput("");
    const country = useInput("");
    const town = useInput("");
    const street = useInput("");
    const apartment = useInput("");
    const state = useInput("");
    const zip = useInput("");
    const email = useInput("");
    const phone = useInput("");
    const selectPhone = useInput("");
    const differentAddress = useInput("");
    const textarea = useInput("");

    return (
        <Form>
            <ul className={styled["billing-address__list"]}>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>First Name <span>*</span></Label>
                    <Input className={styled["billing-address__input"]}
                           type={"text"}
                           {...firstName}
                    />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Last Name <span>*</span></Label>
                    <Input className={styled["billing-address__input"]}
                           type={"text"}
                           {...lastName} />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Country / Region <span>*</span></Label>
                    <Select className={styled["billing-address__select"]} {...country}>
                        <Option value={""}
                                disabled={true}
                                defaultValue={true}
                                hidden={true}
                                className={[styled["billing-address__option"], styled["billing-address__placeholder"]].join(" ")}
                        >Select a country /
                            region</Option>
                        {COUNTRIES_LIST.map((item, index) => {
                            return <Option key={index}
                                           value={item}
                                           className={styled["billing-address__option"]}
                            >
                                {item}
                            </Option>;
                        })}
                    </Select>
                </li>

                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Town / City <span>*</span></Label>
                    <Input className={styled["billing-address__input"]}
                           type={"text"}
                           value={town.value}
                           onChange={e => town.onChange(e)} />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Street Address <span>*</span></Label>
                    <Input className={styled["billing-address__input"]} type={"text"}
                           placeholder={"House number and street name"}
                           {...street} />

                </li>
                <li className={styled["billing-address__item"]}>

                    <Input className={styled["billing-address__input"]} type={"text"}
                           placeholder={"Apartment, suite, unit, etc. (optional)"}
                           value={apartment.value}
                           onChange={e => apartment.onChange(e)}
                    />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>State <span>*</span></Label>
                    <Input className={styled["billing-address__input"]}
                           type={"text"}
                           placeholder={"Select a state"}
                           {...state}
                    />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Zip <span>*</span></Label>
                    <Input className={styled["billing-address__input"]}
                           type={"number"}
                           {...zip}
                    />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Email address <span>*</span></Label>
                    <Input className={styled["billing-address__input"]}
                           type={"text"}
                           {...email} />
                </li>
                <li className={styled["billing-address__item"]}>
                    <Label className={styled["billing-address__label"]}>Phone Number <span>*</span></Label>
                    <div className={styled["billing-address__fields-phone"]}>
                        <Select
                            className={[styled["billing-address__select"], styled["billing-address__select-field-left"]].join(" ")}
                            {...selectPhone}
                        >
                            <Option className={styled["billing-address__option"]}>966</Option>
                            <Option className={styled["billing-address__option"]}>999</Option>
                            <Option className={styled["billing-address__option"]}>852</Option>
                        </Select>

                        <Input
                            className={[styled["billing-address__input"], styled["billing-address__input--field-right"]].join(" ")}
                            type={"number"}
                            {...phone}
                        />
                    </div>
                </li>
                <li className={[styled["billing-address__item"], styled["billing-address__item-checkbox"]].join(" ")}>
                    <Input id={"different-address"} className={styled["billing-address__input"]}
                           type={"checkbox"}
                           value={differentAddress.isCheck}
                           onChange={e => {
                               differentAddress.onChange(e);
                               console.log(differentAddress.isCheck);
                           }} />
                    <Label htmlFor={"different-address"}
                           className={[styled["billing-address__label"], styled["billing-address__label-checkbox"]].join(" ")}>
                        Ship to a different address?</Label>
                </li>
            </ul>
            <div className={styled["billing-address__textarea-block"]}>
                <Label className={styled["billing-address__label-textarea"]}>Order notes (optional)</Label>
                <Textarea className={styled["billing-address__input-textarea"]}
                          type={"textarea"}
                          value={textarea.value}
                          onChange={e => textarea.onChange(e)}
                />

            </div>
        </Form>
    );
};

BillingAddress.propTypes = {};

export default BillingAddress;