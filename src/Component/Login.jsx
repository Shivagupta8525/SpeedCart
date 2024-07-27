import { Formik,Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "./Input";

function Login() {

    function callLogApi(values) {
        console.log("callLogApi is called");
        console.log("sending data", values.email, values.password);
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required("Please Enter Email"),
        password: Yup.string().required("Please Enter password").min(8)
    });



    const initialValues = {
        email: "",
        password: "",
    }


    return (
        <div className="flex bg-gray-100 w-screen h-screen justify-center items-center">
            <Formik
                initialVaules={initialValues}
                onSubmit={callLogApi}
                validationSchema={schema}
                valiadationOnMount

            >

                <Form
                   
                    className=" flex  flex-col bg-white w-96   px-4 py-2 self-center rounded-xl shadow-md gap-4   ">
                    <h1 className="self-center my-5 text-2xl text-gray-500 font-bold"> SpeedCart</h1>
                    <h2 className="text-2xl blod"> Sign In</h2>

                    <div>
                        <Input lable="Email or username"
                            type="email"
                            name="email"
                            placeholder="Enter Username or email"
                            id="email"
                            autoComplete="email"
                            required={true}
                            />
                    </div>
                    <div>
                        <Input
                            type="password"
                            name="password"
                            lable="Password"
                            placeholder=" Enter your password"
                            id="password"
                            autoComplete="password"
                             />
                        <Link className="text-blue-600 my-2 " to="/forget">Forget Password</Link>
                    </div>

                    <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300"  >Log in</button>
                    <p className="self-center ">New Customer?<Link className="text-blue-600" to="/Signup">Signup</Link></p>



                </Form>
            </Formik>
        </div>

    );

}

export default Login;