import { useForm } from "react-hook-form";
import { useState } from "react";
import { Template } from "~/components/pop-up";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Button } from "~/components/button";
import { FormInput } from "~/components/form_input";



interface RecoverPasswordForm {
    email: string;
    token: string;
    newPassword: string;
    confirmPassword: string;
}

export function RecoverPassword() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [step, setStep] = useState(1);
    const [isTokenSent, setIsTokenSent] = useState(false);

    const handleVerifyToken = () => {
        setStep(2);
        reset(); 
    };

    const handleSendToken = () => {
        setIsTokenSent(true);
        reset({ email: "" }); // 🔥 Limpia el campo inmediatamente
    };

    const handleSubmitNewPassword = (data: any) => {
        console.log("Contraseña actualizada con:", data);
        alert("Contraseña actualizada exitosamente");
        setStep(1);
        reset(); 
    };

const isInline = false;


    return (
        <Template
            title="Recuperar Contraseña"
            icon={<LockClosedIcon className="w-10 h-10" />}
            content={
                step === 1 ? (
                    <>
                      <form className="flex flex-col gap-4 text-left">
                            <FormInput
                                name="Correo"
                                id="email"
                                type="text"
                                register={register}
                                errors={errors}
                                inline={isInline}
                            />
                        </form>
                        <form className="flex flex-col gap-4 text-left">
                            <FormInput
                                name="Token de seguridad"
                                id="token"
                                type="text"
                                register={register}
                                errors={errors}
                                inline={isInline}
                            />
                        </form>
                        <div className="flex justify-center gap-4 mt-8">
                            <Button
                                label="Enviar Token"
                                onClick={handleSendToken}
                                className="bg-blue-500 text-white hover:bg-blue-600"
                            />
                            <Button
                                label="Verificar"
                                onClick={handleVerifyToken}
                                className="bg-green-500 text-white hover:bg-green-600"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSubmitNewPassword)}>
                            <FormInput
                                name="Nueva Contraseña"
                                id="newPassword"
                                type="password"
                                register={register}
                                errors={errors}
                            />
                            <FormInput
                                name="Repetir Contraseña"
                                id="confirmPassword"
                                type="password"
                                register={register}
                                errors={errors}
                            />
                            <div className="flex justify-center gap-4 mt-8">
                                <Button
                                    label="Enviar"
                                    type="submit"
                                    className="bg-blue-500 text-white hover:bg-blue-600"
                                />
                            </div>
                        </form>
                    </>
                )
            }
        />
    );
}

