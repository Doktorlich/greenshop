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
    const textarea = useInput("");

    return (
        <div>
            <h2 className={styled["billing-address__title"]}>Billing Address</h2>
            <Form>
                <ul className={styled["billing-address__list"]}>
                    <li className={styled["billing-address__item"]}>
                        <Label className={styled["billing-address__label"]}>First Name <span>*</span></Label>
                        <Input className={styled["billing-address__input"]}
                               type={"text"}
                               required={true}
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
                        <div className={styled["select-wrapper"]}>
                            <Select className={styled["billing-address__select"]} {...country}>
                                <Option value={""}
                                        disabled={true}
                                        selected={true}
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
                        </div>
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
                            <div className={styled["select-wrapper"]}>
                                <Select id={styled["select-custom-arrow"]}
                                        className={[styled["billing-address__select"], styled["billing-address__select-field-left"]].join(" ")}
                                        {...selectPhone}
                                >
                                    <Option className={styled["billing-address__option"]}>+966</Option>
                                    <Option className={styled["billing-address__option"]}>+999</Option>
                                    <Option className={styled["billing-address__option"]}>+852</Option>
                                </Select>
                            </div>
                            <Input
                                className={[styled["billing-address__input"], styled["billing-address__input--field-right"]].join(" ")}
                                type={"number"}
                                {...phone}
                            />
                        </div>
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
        </div>
    );
};
BillingAddress.propTypes = {};
export default BillingAddress;