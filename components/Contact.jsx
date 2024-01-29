"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useFormState } from "react-dom";
import { handleFormSubmit } from "@/app/Actions/formAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ }) => {
  const formRef = useRef(null);

  const [state, formAction] = useFormState(handleFormSubmit, {
    message: null,
  });

  
  useEffect(() => {

    // case1: when message of success only shows when status true means email send
    if (state.status) {
      window.scrollTo(0, 0);
      formRef.current.reset();
      toast.success(state.message);
    }
    // case2: when message of error show when status false means email not send
    else{
      window.scrollTo(0, 0);
      formRef.current.reset();
      toast.error(state.message);
    }
  }, [state]);

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        className="Container grid grid-cols-12 mx-auto py-10 md:pb-20 
    lg:place-items-center "
      >
        <div className="col-span-12 lg:col-span-6 p-4 md:p-0">
          <div
            className="max-container md:block md:px-16 md:text-center md:items-center md:content-center
             xl:ml-[100px] max-w-full "
            id="contact"
          >
            <Image src="/woman.png" alt="logo" width={629} height={629} />
          </div>
        </div>

        <div
          className="rounded-lg   col-span-12 
           mb-[70px] md:mx-[64px] 
          md:w-[629px] lg:w-auto
          bg-white  lg:mt-[4rem] xl:mt-[4rem]
      md:order-last  lg:col-span-6 lg:order-last"
        >
          <div
            className="w-full  rounded-lg
        p-4  text-black bg-white gap-8"
          >
            {/* {state.message && <h1>result is :{state.message}</h1>} */}
            <h2
              className=" flex-shrink-0
           text-[#2C3131] font-rubik font-bold  leading-[42.87px] 
           text-dark-hard  text-4xl "
            >
              Contact Us
            </h2>
            <p className="text-[#959ead] mb-4 xl:mb-8">
              We want to hear from you
            </p>
            <section className="container ">
             
                {/* formRef for create reference and then formAction is the argument 
                of useFormState */}
                <form ref={formRef} action={formAction}>
                  <div className="flex flex-col w-full pb-4 xl:pb-8">
                    <input
                      required={true}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className=" placeholder:text-[#A9A9A9] 
                  text-dark-hard mt-3 lg:mt-1  rounded-3xl px-5 py-4 font-semibold block
                  outline-none border  bg-slate-50"
                    ></input>
                  </div>
                  <div className=" flex flex-col w-full pb-4 xl:pb-8">
                    <input
                      required={true}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className=" placeholder:text-[#A9A9A9] 
                  text-dark-hard mt-3 lg:mt-1 rounded-3xl px-5  py-4 font-semibold block
                  outline-none border border-[$c3cad9] bg-slate-50"
                    ></input>
                  </div>
                  <div className=" flex flex-col w-full lg:w-96 lg:h-20 xl:h-60 ">
                    <textarea
                      required={true}
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Please type your message here..."
                      className=" placeholder:text-[#A9A9A9]  
                  text-dark-hard mt-3 rounded-3xl px-5 py-4  font-semibold 
                  outline-none border border-[$c3cad9] h-44 bg-slate-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    enabled="true"
                    className="submitButton bg-orange-50 text-white font-bold 
                 p-5 justify-center items-center content-center
                   rounded-5xl w-full
                mt-4 lg:mt-[2.75rem] xl:mt-0 "
                  >
                    Send message
                  </button>
                </form>
            
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
