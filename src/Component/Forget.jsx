import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import * as Yup from "yup";
function Forget() {
    function sendData() {
        console.log( "send data is running");
        console.log("forget data", formik.values.email);
    }
    const schema = Yup.object().shape({
        email: Yup.string().required("Please fill your email"),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: schema,
        onSubmit: sendData,
    })
    return (
        <div className="flex bg-gray-100 w-screen h-screen justify-center items-center">


            <form
                onSubmit={formik.handleSubmit} className="flex flex-col  flex  flex-col bg-white w-96   px-4 py-2 self-center rounded-xl shadow-md gap-4">

                <h1 className="self-center text-gray-600 text-3xl">Speed Cart</h1>
                <h2 className="text-2xl bold">Forgot Password</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        onBlur={formik.handleBlur}
                        id="email"
                        onChange={formik.handleChange}
                        type="email"
                        name="email"
                        value={formik.values.email}
                        className="w-full py-1 border border-gray-600 rounded-md"
                        placeholder="Enter your email" />
                    {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                </div>
                <div className=" flex-col flex ">
                    <h1>ReSet password</h1>
                    <button type="submit" className="mb-6 border rounded-md bg-blue-600 text-white text-xl py-2 disabled:bg-blue-300" disabled={!formik.isValid} >Send Link</button>
                    
                </div>
                <Link className="self-center text-blue-600" to="/login"><button className="px-2 border rounded-md bg-blue-400 text-white text-lg ">Back</button></Link>
            </form>

        </div>

    )
}
export default Forget;