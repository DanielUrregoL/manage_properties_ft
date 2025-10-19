import type { ReactNode } from "react";

interface ButtonProps {
    label: ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}
/*
    This component is used to render a button with a label.
    It can receive a custom class name for styling.

    Props:
    - label: The label of the button.
    - onClick: The function to be executed when the button is clicked.
    - className: The custom class name for styling the button.
*/
export function Button({ label, onClick, className, type }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-2 rounded-lg text-xl ${className}`}
        >
            {label}
        </button>
    );
}

