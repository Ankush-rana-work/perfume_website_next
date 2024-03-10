'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { signInSchema } from '../../../../validation/signInSchema';
import Link from 'next/link';

const SignInForm = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        setDisable(false);
    }, []);

    const handleSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={handleSubmit}

        >
            {({ errors, touched, resetForm }) => (
                <Form className="text-start lg:py-20 py-8">
                    <div className="grid grid-cols-1">
                        <div className="mb-4">
                            <label className="font-semibold" htmlFor="LoginEmail">
                                Email Address:
                            </label>
                            <Field
                                name="email"
                                type="text"
                                className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Name"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="font-semibold" htmlFor="LoginPassword">
                                Password:
                            </label>
                            <Field
                                name="password"
                                type="password"
                                className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="flex justify-between mb-4">
                            <div className="flex items-center mb-0">
                                <input
                                    className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                    type="checkbox"
                                    defaultValue=""
                                    id="RememberMe"
                                />
                                <label
                                    className="form-checkbox-label text-slate-400"
                                    htmlFor="RememberMe"
                                >
                                    Remember me
                                </label>
                            </div>
                            <p className="text-slate-400 mb-0">
                                <a href="forgot-password.html" className="text-slate-400">
                                    Forgot password ?
                                </a>
                            </p>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                id="submit"
                                name="send"
                                className={`py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center text-white rounded-md mt-2 ${disable ? 'bg-gray-300' : 'bg-orange-500'}`}
                                disabled={disable}
                            >
                                {`${disable ? 'Loading...' : 'Send Message'}`}
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="text-slate-400 me-2">
                                Don't have an account ?
                            </span>{" "}
                            <Link
                                className="text-black dark:text-white font-bold inline-block"
                                href="/signup">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </Form>
            )
            }
        </Formik >
    )
}

export default SignInForm