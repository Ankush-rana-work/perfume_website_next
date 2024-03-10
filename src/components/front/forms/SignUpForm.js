'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { signUpSchema } from '../../../../validation/signUpSchema';
import Link from 'next/link';

const SignUpForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        termsAndConditions: '',
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
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, resetForm }) => (
                <Form className="text-start lg:py-20 py-8">
                    <div className="grid grid-cols-1">
                        <div className="mb-4">
                            <label className="font-semibold" htmlFor="RegisterName">
                                Your Name:
                            </label>
                            <Field
                                name="name"
                                type="text"
                                className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="font-semibold" htmlFor="LoginEmail">
                                Email Address:
                            </label>
                            <Field
                                name="email"
                                type="email"
                                className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Email"
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
                                placeholder="password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center w-full mb-0">
                                <div className="flex items-center">
                                    <Field
                                        type="checkbox"
                                        name="termsAndConditions"
                                        id="AcceptT&C" // Provide an id for the 'for' attribute in the label
                                        className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                                    />
                                    <label
                                        className="form-check-label text-slate-400"
                                        htmlFor="AcceptT&C"
                                    >
                                        I Accept{" "}
                                        <a href="#" className="text-orange-500">
                                            Terms And Condition
                                        </a>
                                    </label>
                                </div>
                                <div className="ml-2"> {/* Add margin for separation */}
                                    <ErrorMessage
                                        name="termsAndConditions"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                            </div>

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
                                Already have an account ?{" "}
                            </span>{" "}
                            <Link
                                className="text-black dark:text-white font-bold inline-block"
                                href="/signin">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SignUpForm