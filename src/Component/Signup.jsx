import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { withAlert, withUser } from "./withProvider";



function handleCreateAccount(values, bag) {
    // console.log("values", values);
    // console.log("create acc is called");
    console.log(values.name, values.username, values.email, values.password, values.confirm_password);
    axios.post("https://myeasykart.codeyogi.io/signup",
        {
            fullName: values.username,
            email: values.email,
            password: values.password,
        }
    ).then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        console.log("user", user);
        bag.props.setUser(user);
        

        bag.props.setAlert({ type: "success", message: "Welcome "+ "!" })
    }).catch(() => {
        bag.props.setAlert({ type: "error", message: "Email is already exist!" })
    })
}
// console.log(values.email);
    const schema = Yup.object().shape({

        email: Yup.string().required("Please fill your email"),
        username: Yup.string().required("Please Enter username"),
        password: Yup.string().required("Please Enter password").min(8, "password must be 8 chracters"),
        confirm_password: Yup.string().required("Please confirm your pssword").min(8),


    })

    const initialValues = {

        username: "",
        email: "",
        password: "",
        confirm_password: "",
    }
  export  function Signup({ handleSubmit, handleChange, handleBlur, touched, errors, values }) {



        return (
            <div className="flex bg-gray-100 w-screen h-screen justify-center items-center">

                <form onSubmit={handleSubmit}

                    className=" flex  flex-col bg-white w-96   px-4 py-2 self-center rounded-xl shadow-md gap-2 ">

                    <h1 className="self-center my-5 text-2xl text-gray-500 font-bold"> SpeedCart</h1>
                    <h2 className="text-2xl bold">Create Account</h2>
                    <div>

                        <Input
                            values={values.name}
                            error={errors.name}
                            touched={touched.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="name"
                            lable="Name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="name"
                        />
                    </div>
                    <div>
                        <Input
                            values={values.email}
                            error={errors.email}
                            touched={touched.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            lable="Email  "
                            type="email"
                            name="email"
                            placeholder="Enter  "
                            id="email"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            values={values.username}
                            error={errors.username}
                            touched={touched.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="Username"
                            lable="Username"
                            type="text"
                            name="username"

                            placeholder="Enter your Username"

                        />
                    </div>
                    <div>
                        <Input
                            values={values.password}
                            error={errors.password}
                            touched={touched.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            name="password"
                            lable="Password"
                            placeholder=" Enter  password"
                            id="password"
                            autoComplete="password"
                        />

                    </div>
                    <div>
                        <Input
                            values={values.confirm_password}
                            error={errors.confirm_password}
                            touched={touched.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="password"
                            autoComplete="password"
                            name="confirm_password"
                            placeholder=" Reenter password"
                            id="confirm_password"
                            lable="Confirm Password" />


                    </div>
                    <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300"   >Create Account</button>
                    <p className="self-center ">New Customer?<Link className="text-blue-600 hover:font-bold underline" to="/Login">Login</Link></p>



                </form >

            </div>

        );
    }

    const myHOC = withFormik({
        initialValues: {  username: "",
            email: "",
            password: "",
            confirm_password: "",},
        validationSchema: schema,
        handleSubmit: handleCreateAccount,
    })


    
const mysignup=myHOC(Signup);
    export default  withUser(withAlert(mysignup));