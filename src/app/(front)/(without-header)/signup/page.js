import React from 'react'
import singupImage from "../../../../../public/images/signup.jpg";
import logoDark from '../../../../../public/images/logo-dark.png';
import logoLight from '../../../../../public/images/logo-light.png';
import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from '@/components/front/forms/SignUpForm';
const SignUp = () => {
  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-orange-500/10 dark:bg-orange-500/20 bg-center bg-no-repeat bg-cover">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="relative md:shrink-0 h-full">
                  <Image
                    className="w-full h-full object-cover md:h-[44rem]"
                    src={singupImage}
                    alt=""
                    layout="fill"
                  />
                </div>
                <div className="p-8 lg:px-20">
                  <div className="text-center">
                    <a href="index.html">
                      <img
                        src={logoDark}
                        className="mx-auto block dark:hidden"
                        alt=""
                      />
                      <img
                        src={logoLight}
                        className="mx-auto hidden dark:block"
                        alt=""
                      />
                    </a>
                  </div>
                  <SignUpForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default SignUp