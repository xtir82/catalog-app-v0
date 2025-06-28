"use server"

import {FormState, SignupFormSchema} from "@/lib/login-validations";
import {hashUserPassword} from "@/lib/hash";
import dbConnect from "@/lib/db";
import User from "@/models/user";

export const signup = async (formState:FormState, formData:FormData):Promise<FormState> => {
    //Validate Fields
    const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if(!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
        }
    }
    const { name, email, password } = validationResult.data

    const hashedPassword = hashUserPassword(password)
    await dbConnect();

    const user = new User ({
        name,
        email,
        password: hashedPassword,
    })

    try {
        await user.save();

    } catch (error) {
        console.error("Error saving user:", error);
        return { success: false, message: "User registration failed." };
    }


}

