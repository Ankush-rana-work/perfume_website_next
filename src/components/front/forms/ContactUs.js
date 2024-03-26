"use client";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { contactUsSchema } from '../../../../validation/contactUsSchema';
import { loginActions } from '../../../../lib/serverActions/homeActions';
import useSWR from 'swr'
import { useListQuery } from '../../../../lib/rtk/api/productApi';

const ContactUs = () => {
    const [pageNo, setPageNo] = useState(1);
    const initialValues = {
        name: '',
        email: '',
        subject: '',
        comment: ''
    };
    const { data: blogList, error: blogError, isLoading: blogisLoading } = useListQuery({
        pageNo: pageNo,
    });

    console.log(blogList);
    const handleSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
    }


    useListQuery
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={contactUsSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, resetForm }) => (
                <Form className="text-start lg:py-20 py-8">
                    <p className="mb-0" id="error-msg" />
                    <div id="simple-msg" />
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                        <div className="lg:col-span-6">
                            <label htmlFor="name" className="font-semibold">
                                Your Name:
                            </label>
                            <Field
                                name="name"
                                type="text"
                                className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="lg:col-span-6">
                            <label htmlFor="email" className="font-semibold">
                                Your Email:
                            </label>
                            <Field
                                name="email"
                                type="email"
                                className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="lg:col-span-12">
                            <label htmlFor="subject" className="font-semibold">
                                Your Question:
                            </label>
                            <Field
                                name="subject"
                                type="text"
                                className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Subject"
                            />
                            <ErrorMessage
                                name="subject"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="lg:col-span-12">
                            <label htmlFor="comments" className="font-semibold">
                                Your Comment:
                            </label>
                            <Field
                                name="comment"
                                as="textarea"
                                rows="4"
                                cols="50"
                                className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                                placeholder="Message"
                            />
                            <ErrorMessage
                                name="comment"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        id="submit"
                        name="send"
                        className={`py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center text-white rounded-md mt-2 ${blogisLoading ? 'bg-gray-300' : 'bg-orange-500'}`}
                        disabled={blogisLoading}
                    >
                        {`${blogisLoading ? 'Loading...' : 'Send Message'}`}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactUs