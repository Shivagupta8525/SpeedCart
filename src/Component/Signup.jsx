import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

function Signup() {

    function handleCreateAccount() {
        console.log(values.name, values.username, values.email, values.password, values.confirm_password);
    }
    const schema = Yup.object().shape({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().required("Please fill your email"),
        username: Yup.string().required("Please Enter username"),
        password: Yup.string().required("Please Enter password").min(8, "password must be 8 chracters"),
        confirm_password: Yup.string().required("Please confirm your pssword").min(8),


    })

    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    }

    return (
        <div className="flex bg-gray-100 w-screen h-screen justify-center items-center">
            <Formik
                initialVaules={initialValues}
                onSubmit={handleCreateAccount}
                validationSchema={schema}
                valiadationOnMount
            >
                <Form

                    className=" flex  flex-col bg-white w-96   px-4 py-2 self-center rounded-xl shadow-md gap-2 ">

                    <h1 className="self-center my-5 text-2xl text-gray-500 font-bold"> SpeedCart</h1>
                    <h2 className="text-2xl bold">Create Account</h2>
                    <div>

                        <Input

                            id="name"
                            lable="Name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            autocomplete="name"
                        />
                    </div>
                    <div>
                        <Input 
                            lable="Email  "
                            type="email"
                            name="email"
                            placeholder="Enter  "
                            id="email"
                            autoComplete="email"
                            required={true}
                        />
                    </div>
                    <div>
                        <Input

                            id="Username"
                            lable="Username"
                            type="text"
                            name="username"
                             
                            placeholder="Enter your Username"
                             
                        />
                    </div>
                    <div>
                        <Input
                            
                            type="password"
                            name="password"
                            lable="Password"
                            placeholder=" Enter  password"
                            id="password"
                            autocomplete="password"
                              />

                    </div>
                    <div>
                        <Input
                          
                            type="password"
                            name="confirm_password"
                            placeholder=" Reenter password"
                            id="confirm_password"
                            lable="Confirm Password" />


                    </div>
                    <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300"   >Create Account</button>
                    <p className="self-center ">New Customer?<Link className="text-blue-600" to="/Login">Login</Link></p>



                </Form >
            </Formik>
        </div>

    );
}

export default Signup;