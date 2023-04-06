import {useFormik} from "formik";
import React from "react";

function FormikSamples() {
    const { handleSubmit, handleChange, values }
        = useFormik({
            initialValues: {
                firstName: "Melih",
                lastName: "Dural",
                email: "duralmelih@gmail.com",
                gender: "Male",
                hobbies: ['Football', 'Photography'],
                country: "Turkey"
            },
            onSubmit: (values) => {
                console.log(values);
            }
        });


    return(
        <div>
            <h1>Sign Up</h1>
            {/*<FormikBasics*/}
            {/*    initialValues={{*/}
            {/*        firstName: 'Melih',*/}
            {/*        lastName: 'Dural',*/}
            {/*        email: 'duralmelih@gmail.com',*/}
            {/*        gender: 'Male',*/}
            {/*        hobbies: ['Football', 'Photography'],*/}
            {/*        country: 'England'*/}
            {/*    }}*/}
            {/*    onSubmit={(values) => {*/}
            {/*        console.log(values)*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {*/}
            {/*        ( {handleSubmit, handleChange, values}) =>*/}
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input name={"firstName"} value={values.firstName} onChange={handleChange}/>

                <br/>
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input name={"lastName"} value={values.lastName} onChange={handleChange}/>

                <br/>
                <br/>

                <label htmlFor="email">E-mail</label>
                <input name={"email"} value={values.email} onChange={handleChange}/>

                <br/>
                <br/>

                <input
                    type={"radio"}
                    name={"gender"}
                    onChange={handleChange}
                    value={`Male`}
                    checked={values.gender === "Male"}
                />
                <span>Male</span>

                <input
                    type={"radio"}
                    name={"gender"}
                    onChange={handleChange}
                    value={`Female`}
                    checked={values.gender === "Female"}
                />
                <span>Female</span>

                <br/>
                <br/>

                <input
                    type={"checkbox"}
                    name={"hobbies"}
                    onChange={handleChange}
                    value={`Football`}
                    checked={values.hobbies.includes("Football")}/>
                <span>Football</span>

                <input
                    type={"checkbox"}
                    name={"hobbies"}
                    onChange={handleChange}
                    value={`Cinema`}
                    checked={values.hobbies.includes("Cinema")}/>
                <span>Cinema</span>

                <input
                    type={"checkbox"}
                    name={"hobbies"}
                    onChange={handleChange}
                    value={`Photography`}
                    checked={values.hobbies.includes("Photography")}/>
                <span>Photography</span>

                <br/>
                <br/>

                <select
                    name={"country"}
                    value={[values.country]}
                    onChange={handleChange}
                >
                    <option aria-multiselectable={true} value="Turkey" aria-checked={values.country === "Turkey"}>Turkey</option>
                    <option aria-multiselectable={true} value="England" aria-checked={values.country === "England"}>England</option>
                    <option aria-multiselectable={true} value="Usa" aria-checked={values.country === "Usa"}>Usa</option>
                </select>

                <br/>
                <br/>

                <code>{JSON.stringify(values)}</code>

                <br/>
                <br/>

                <button type="submit">Submit</button>
            </form>
            {/*}*/}

            {/*<Form>*/}
            {/*    <label htmlFor="firstName">First Name</label>*/}
            {/*    <Field name="firstName" placeholder="Jane" />*/}

            {/*    <br/>*/}
            {/*    <br/>*/}

            {/*    <label htmlFor="lastName">Last Name</label>*/}
            {/*    <Field name="lastName" placeholder="Doe" />*/}

            {/*    <br/>*/}
            {/*    <br/>*/}

            {/*    <label htmlFor="email">Email</label>*/}
            {/*    <Field*/}
            {/*        name="email"*/}
            {/*        placeholder="jane@acme.com"*/}
            {/*        type="email"*/}
            {/*    />*/}
            {/*    <button type="submit">Submit</button>*/}
            {/*</Form>*/}
            {/*</FormikBasics>*/}
        </div>
    );
}

export default FormikSamples