import React from "react";
import {useFormik} from "formik";
import validations from "./validations";
import {Alert} from "react-bootstrap";
function Signup() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched}
        = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: validations
    })

    return(
        <div className={"position-absolute top-50 start-50 translate-middle"}>
            <form className={"align-self-auto"} onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <br/>
                <input name={"email"} value={values.firstName} onChange={handleChange} onBlur={handleBlur} className={"p-1 mt-1"}/>

                {errors.email && touched.email && <Alert variant={"danger"} className={"d-flex align-items-center mt-3 h-25"}>
                    {
                        errors.email
                    }
                </Alert>}

                <br/>

                <label htmlFor="password">Password</label>
                <br />
                <input name={"password"} value={values.firstName} onChange={handleChange} onBlur={handleBlur} className={"p-1 mt-1"}/>

                {errors.password && touched.password && <Alert variant={"danger"} className={"d-flex align-items-center mt-3 h-25"}>
                    {
                        errors.password
                    }
                </Alert>}

                <br />

                <label htmlFor="passwordConfirm">Confirm Password</label>
                <br/>
                <input name={"passwordConfirm"} value={values.firstName} onChange={handleChange} onBlur={handleBlur} className={"p-1 mt-1"}/>

                {errors.passwordConfirm && touched.passwordConfirm && <Alert variant={"danger"} className={"d-flex align-items-center mt-3 h-25"}>
                    {
                        errors.passwordConfirm
                    }
                </Alert>}

                <br/>

                <button className={"btn btn-success mt-5 ms-5"} type={"submit"}>Submit</button>
            </form>
        </div>
    );
}

export default Signup