import React from 'react';
import {Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {useFormik} from "formik";
import validationSchema from "./validations"
import {fetchRegister} from "../../../api";
import {useAuth} from "../../../context/AuthContext";
function Signup() {
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                    const registerResponse = await fetchRegister({
                    email: values.email,
                    password: values.password,
                });

                login(registerResponse);
            } catch (e) {
                bag.setErrors({ general: e.response.data.message });
            }
        }
    });

    return (
        <div className={"content"}>
            <Flex align={"center"} width={"full"} justifyContent={"center"}>
                <Box pt={"10"}>
                    <Box textAlign={"center"}>
                        <Heading>Sign Up</Heading>
                    </Box>
                    <Box my={"5"}>
                        {
                            formik.errors.general && (
                             <Alert status={"error"}>
                                 {formik.errors.general}
                             </Alert>
                            )
                        }
                    </Box>
                    <Box my={5} textAlign={"left"}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl mt={"4"}>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    name={"email"}
                                    type={"email"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                />
                            </FormControl>
                            <FormControl mt={"4"}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name={"password"}
                                    type={"password"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                />
                            </FormControl>
                            <FormControl mt={"4"}>
                                <FormLabel>Password Confirm</FormLabel>
                                <Input
                                    name={"passwordConfirm"}
                                    type={"password"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordConfirm}
                                    isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                                />
                            </FormControl>
                            <Button mt={"4"} width={"full"} type={"submit"}>
                                Sign up
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

export default Signup;