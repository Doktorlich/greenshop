import React from "react";

import styled from "./AuthModal.module.scss";
import Form from "./../../07-shared/UI/elementsForm/Form/Form";
import Input from "./../../07-shared/UI/elementsForm/Input/Input";
import showPassIcon from "../../07-shared/assets/images/show-pass.svg";

import Button from "./../../07-shared/UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setShowPass} from "../../04-widgets/Header/provider/headerSlice";
// import { setValueMail, setValuePassword } from "./provider/authSlice";
import {useInput} from "../../07-shared/lib/useInput";

const AuthModal = () => {
	const {showPass} = useSelector(state => state.headerSlice);
	const email = useInput("", {isEmpty: true, minLength: 5, isMail: true});
	const password = useInput("", {isEmpty: true, minLength: 5});
	const dispatch = useDispatch();

	return (
		<Form className={styled["form"]}>
			<p className={styled["form__desc"]}>Enter your username and password to login.</p>
			{email.isDirty && email.isEmpty && (<p style={{color: "red", margin: 0}}>емайл не может быть пустым</p>)}
			{email.isDirty && email.emailError && (<p style={{color: "red", margin: 0}}>Тип емайла не верный</p>)}
			{email.isDirty && email.minLengthError && (<p style={{color: "red", margin: 0}}>емайл маленький</p>)}
			<Input
				type="mail"
				placeholder="almamun_uxui@outlook.com"
				className={[styled["form__input"]].join(" ")}
				value={email.value}
				onChange={e => email.onChange(e)}
				onBlur={e => email.onBlur(e)}
			/>
			{password.isDirty && password.isEmpty && (
				<p style={{color: "red", margin: 0}}>Пароль не может быть пустым</p>)}

			{password.isDirty && password.minLengthError && (<p style={{color: "red", margin: 0}}>Пароль маленький</p>)}
			<div className={styled["input-wrapper"]}>
				<Input
					type={!showPass ? "password" : "text"}
					placeholder="password"
					className={[styled["form__input"], styled["form__input-pass"]].join(" ")}
					value={password.value}
					onChange={e => password.onChange(e)}
					onBlur={e => password.onBlur(e)}
				/>
				<img
					src={`${showPassIcon}`}
					alt=""
					className={[
						styled["icon-hide-pass"],
						showPass ? styled["icon-hide-pass--active"] : "",
					].join(" ")}
					onClick={() => dispatch(setShowPass(!showPass))}
				/>
			</div>

			<Button
				classNameProp={styled["form__btn-forgot"]}
				onClick={e => {
					e.preventDefault();
				}}
			>
				Forgot Password?
			</Button>
			<Input
				type={"submit"}
				value="Login"
				onClick={e => {
					e.preventDefault();
					console.log(email.value, password.value);
				}}
				className={styled["form__button"]}
			/>
		</Form>
	);
};

export default AuthModal;
