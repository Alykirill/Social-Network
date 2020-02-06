import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import style from "../common/FormsControls/FormsControls.module.css";

const AddLoginForm = ({handleSubmit,error}) =>{
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(AddLoginForm)