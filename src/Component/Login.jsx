import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import {Link} from "react-router-dom"

function Login() {

    function callLogApi(values) {
        console.log("callLogApi is called");
        console.log("sending data", values.email, values.password);
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required("Please Enter Email"),
        password: Yup.string().required("Please Enter password").min(8)
    });
    const formik = useFormik(
        {
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit: callLogApi,
            validationSchema: schema,
        });
    console.log("email");





    return (
        <div className="flex bg-gray-100 w-screen h-screen justify-center items-center">


            <form
                onSubmit={formik.handleSubmit}
                className=" flex  flex-col bg-white w-96   px-4 py-2 self-center rounded-xl shadow-md gap-4   ">
                <h1 className="self-center my-5 text-2xl text-gray-500 font-bold"> SpeedCart</h1>
                <h2 className="text-2xl blod"> Sign In</h2>


                <div>
                    <label htmlFor="email" className=" ">Email or Username  

                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Username or email"
                        id="email"
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="  w-full rounded-md  border border-gray-500 pt-1  placeholder-gray-500   "
                        autoComplete="email"
                    />
                    {formik.errors.email && formik.touched.email && <div className="text-red-300">{formik.errors.email}</div>}

                </div>
                <div>
                    <label htmlFor="password" className="mt-4 ">Password</label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        name="password"
                        placeholder=" Enter your password"
                        id="password"
                        className="w-full rounded-md  border border-gray-500   py-1 text-black placeholder-gray-500" />
                        <div className="">
                    {formik.errors.password && formik.touched.password && <div className="text-red-400">{formik.errors.password}</div>}
                    <Link className="text-blue-600 my-2 " to="/forget">Forget Password</Link>
                    </div>
                </div>
                <button type="submit" className="my-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300" disabled={!formik.isValid} >Log in</button>
                <p className="self-center ">New Customer?<Link className="text-blue-600" to="/Signup">Signup</Link></p>



            </form>
        </div>
 
    );

}

export default Login;