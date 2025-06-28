import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
        .trim(),
    email: z.string().email({ message: 'Por favor ingresa un email valido.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Debe tener al menos una longitud de 8 caracteres.' })
        .regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra.' })
        .regex(/[0-9]/, { message: 'Debe contener al menos un numero.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Debe contener al menos un caracter especial.',
        })
        .trim(),
});

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Por favor ingresa un email valido.' }),
    password: z.string().min(1, { message: 'El campo contrasena no debe estar vacio.' }),
});

export type FormState =
    | {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string;
    //Temporary success state
    success?: boolean;
    user?: {
        name: string;
        email: string;
    };
    //End of temporary success state
}
    | undefined;

export type SessionPayload = {
    userId: string | number;
    expiresAt: Date;
};