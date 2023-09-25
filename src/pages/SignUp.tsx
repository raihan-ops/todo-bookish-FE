import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";
import {Input} from "../components/ui/Input";
import { Link } from "react-router-dom";

type FormData = {
    fullname: string;
    email: string;
    password: string;
};

const SignUp = () => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = handleSubmit((data) => console.log(data));

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
                            <p className="font-inter text-xl font-semibold">Create your account</p>
                            <p className="font-inter mt-[12px]">It’s free and easy</p>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="flex flex-col gap-1 mt-[54px]">
                                <Label>Full name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                    {...register("fullname")}
                                />
                            </div>
                            <div className="flex flex-col gap-1 mt-[30px]">
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
                                <Button type="submit">Sign Up</Button>
                            </div>
                        </form>
                        <p className="text-center mt-[50px] font-inter text-[14px] font-semibold text-label-color-gray1">{`Aldready have an account?`} <span className="text-black"><Link to="/login">Sign In</Link></span></p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;