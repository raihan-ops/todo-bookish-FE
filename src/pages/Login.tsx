/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import {Input} from "../components/ui/Input";
import { Link } from "react-router-dom";

type FormData = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit((data) => console.log(data));

    // useEffect(() => {
    //     // Set initial values for your form fields using setValue
    //     setValue("email", ""); // Set initial value for email field
    //     setValue("password", ""); // Set initial value for password field
    // }, [setValue]);

    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                <div className="bg-GrayBg container flex flex-col justify-center ">
                    <p className="text-white font-DM font text-4xl font-bold ">
                        Welcome to Bookish!
                    </p>
                    <p className="text-white font-inter font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ut
                        laoreet velit ma.
                    </p>
                </div>
                <div className="container flex justify-center items-center">
                    <div className="w-[425px]">
                        <div>
                            <p className="font-inter text-xl font-semibold">Welcome back!</p>
                            <p className="font-inter mt-[12px]">Meet the good book today</p>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col gap-1 mt-[54px]">
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    placeholder="Type your e-mail"
                                    {...register("email")}
                                />
                            </div>
                            <div className="flex flex-col gap-1 mt-[30px]">
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Type your password"
                                    {...register("password")}
                                />
                            </div>


                            <div className="mt-[45px]">
                                <Button type="submit">Sign In</Button>
                            </div>
                        </form>
                        <p className="text-center mt-[50px] font-inter text-[14px] font-semibold text-label-color-gray1">{`Don’t have an account?`} <span className="text-black"><Link to="/signup">Sign Up</Link></span></p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;