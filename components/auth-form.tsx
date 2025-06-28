"use client"

import {useActionState} from "react";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/actions/auth-actions"


export function AuthForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {

    const [formState, formAction, pending] = useActionState(signup, {})

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Ingresa a tu cuenta</CardTitle>
                    <CardDescription>
                        Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Nombre</Label>
                                <Input
                                    name="name"
                                    id="name"
                                    type="name"
                                    placeholder="Tu nombre"
                                    required
                                />
                                {formState?.errors?.name && <p>{formState.errors.name}</p>}
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="email">Correo Electrónico</Label>
                                <Input
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                                {formState?.errors?.email && <p>{formState.errors.email}</p>}
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Olvidaste tu contraseña?
                                    </a>
                                </div>
                                <Input name="password" id="password" type="password" required />
                                {formState?.errors?.password && <p>{formState.errors.password}</p>}
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button disabled={pending} type="submit" className="w-full">
                                    {pending ? "Enviando..." : "Ingresar"}
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Ingresar con Google
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            No tienes una cuenta?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Registrarse
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}