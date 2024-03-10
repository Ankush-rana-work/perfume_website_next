import React from 'react'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import contactImg from '../../../../../public/images/contact.svg';
import Image from 'next/image';
import ContactUs from '@/components/front/forms/ContactUs';

const contactUsPage = () => {
    return (
        <>
           <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            className="w-full h-[500px]"
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <div className="lg:col-span-7 md:col-span-6">
                            <Image src={contactImg} alt="" />
                        </div>
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-semibold">
                                        Get in touch !
                                    </h3>
                                    <ContactUs/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end container*/}
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-orange-500/5 text-orange-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <IoCallOutline />
                                </div>
                            </div>
                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-semibold">Phone</h5>
                                <p className="text-slate-400 mt-3">
                                    The phrasal sequence of the is now so that many campaign and
                                    benefit
                                </p>
                                <div className="mt-5">
                                    <a
                                        href="tel:+152534-468-854"
                                        className="text-orange-500 font-medium"
                                    >
                                        +152 534-468-854
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-orange-500/5 text-orange-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <MdOutlineEmail />
                                </div>
                            </div>
                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-semibold">Email</h5>
                                <p className="text-slate-400 mt-3">
                                    The phrasal sequence of the is now so that many campaign and
                                    benefit
                                </p>
                                <div className="mt-5">
                                    <a
                                        href="mailto:contact@example.com"
                                        className="text-orange-500 font-medium"
                                    >
                                        contact@example.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-20 bg-orange-500/5 text-orange-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                    <IoLocationOutline />
                                </div>
                            </div>
                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-semibold">Location</h5>
                                <p className="text-slate-400 mt-3">
                                    C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485
                                </p>
                                <div className="mt-5">
                                    <a
                                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        data-type="iframe"
                                        className="video-play-icon read-more lightbox text-orange-500 font-medium"
                                    >
                                        View on Google map
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
            </section>
            {/*end section*/}
            {/* End Section*/}
        </>

    )
}

export default contactUsPage