import type { ReactNode } from "react";
import { Button } from "~/components/button";

interface TemplateProps {
    title: string;
    icon: ReactNode;
    content: ReactNode;
    onClose?: () => void;
}
/*
    This component is used to render a pop-up template.
    It contains a title, an icon, and content.

    Props:
    - title: The title of the pop-up.
    - icon: The icon of the pop-up.
    - content: The content of the pop-up.
    - onClose: The function to be executed when the pop-up is closed.
*/
export function PopupTemplate({ title, icon, content, onClose }: TemplateProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xs z-50">
            {/* Pop-up Container */}
            <div className="relative flex flex-col gap-8 bg-white border border-gray-300 rounded-lg p-15 shadow-lg max-w-2xl w-full max-h-[95vh] overflow-y-auto">
                {/* Close Button */}
                {onClose && (
                    <Button
                        label="X"
                        onClick={onClose}
                        className="absolute top-3 right-0.5 text-gray hover:text-red-600"
                    />
                )}
                {/* Pop-up Title */}
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-center">{title}</h1>
                    {icon && <span>{icon}</span>}
                </div>
                {/* Pop-up Content */}
                <div className="text-2xl text-center mt-4">
                    {content}
                </div>
            </div>
        </div>
    );
}