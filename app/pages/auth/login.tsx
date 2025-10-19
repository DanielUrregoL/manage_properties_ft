import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon, UserIcon } from "@heroicons/react/24/solid";
import { AiFillGoogleCircle, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FormInput } from "~/components/form_input";
import { Button } from "~/components/button";

interface LoginFormProps {
    email: string;
    password: string;
}

const isInline = false;

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>();
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = (data: LoginFormProps) => {
        console.log("Datos del login:", data);
    };

    return (
        <div className="flex h-screen w-full bg-gray-100">
            {/* Sección izquierda - Formulario */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 shadow-lg">
                <h2 className="text-4xl font-bold mb-2">Bienvenido de nuevo</h2>
                <p className="text-gray-500 mb-6">Ingresa tus credenciales para Iniciar Sesion</p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 flex flex-col gap-4">
                    {/* Campo de Correo */}
                    <FormInput 
                        name="Correo" 
                        id="email" 
                        type="email" 
                        register={register} 
                        errors={errors} 
                        inline={isInline}
                    />

                    {/* Campo de Contraseña con botón para mostrar/ocultar */}
                    <div className="relative w-full">
                        <FormInput 
                            name="Contraseña" 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            register={register} 
                            errors={errors} 
                            inline={isInline}
                        />
                        <Button
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                            className="px-8 py-2 rounded absolute right-3 top-0 bottom-0 flex items-center text-gray-600  pt-[25px]"
                            label={showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        />
                    </div>

                    <a href="#" className="text-blue-500 text-sm text-left">Recuperar contraseña</a>

                    {/* Botón de Iniciar Sesión */}
                    <Button 
                        type="submit" 
                        className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
                        label="Iniciar Sesión"
                    />

                    {/* Botón de Iniciar con Google */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <Button
                            onClick={() => console.log("Inicio de sesión con Google")}
                            className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                            label={
                                <>
                                    <AiFillGoogleCircle /> Iniciar con Google
                                </>
                            }
                        />
                    </div>
                </form>
            </div>

            {/* Sección derecha - Branding */}
            <div className="w-1/2 flex flex-col justify-between items-center bg-blue-600 text-white p-10 relative">
                <div className="absolute top-5 right-5 flex items-center gap-2">
                    <UserIcon className="w-6 h-6" />
                    <span className="text-lg font-semibold">Iniciar Sesión</span>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <div className="w-64 h-64 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                        <span className="text-lg">Imagen Representativa</span>
                    </div>
                </div>

                {/* Iconos de redes sociales */}
                <div className="flex gap-4">
                    <Button 
                        onClick={() => console.log("Facebook")} 
                        className="text-white hover:text-gray-200"
                        label={<AiFillFacebook className="w-6 h-6 cursor-pointer" />} 
                    />
                    <Button 
                        onClick={() => console.log("Twitter")} 
                        className="text-white hover:text-gray-200"
                        label={<AiFillTwitterCircle className="w-6 h-6 cursor-pointer" />} 
                    />
                    <Button 
                        onClick={() => console.log("Instagram")} 
                        className="text-white hover:text-gray-200"
                        label={<AiFillInstagram className="w-6 h-6 cursor-pointer" />} 
                    />
                </div>
            </div>
        </div>
    );
}

