import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface SidebarNavItem {
    name: string;
    component?: React.ReactNode;
    href?: string;
    icon: IconType;
}

interface SidebarProps {
    navItems: SidebarNavItem[];
    onSelect: (component: React.ReactNode, navItem: { name: string; icon: IconType }) => void;
}

export function Sidebar({ navItems, onSelect }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {/* Toggle Button */}
            <button
                className="md:hidden fixed top-2 left-2 z-50 py-2 ps-3 bg-gray-800 text-white rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
            </button>

            {/* Sidebar */}
            <div className={`
                ${isOpen ? "fixed inset-0 z-40" : "hidden"}
                md:flex md:relative md:w-64
                flex-col bg-gray-800 text-white h-full-screen
            `}>
                {/* Sidebar Header for md+ */}
                <div className="hidden md:flex justify-center py-5 bg-gray-900">
                    <Bars3Icon className="icon" /> <span className="text-lg font-semibold">Menú</span>
                </div>

                {/* Navigation */}
                <nav className={`${isOpen ? "mt-20" : "mt-4"}`}>
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="flex p-4 w-full items-center gap-2"
                            onClick={() => {
                                if (item.href) {
                                    navigate(item.href);
                                }
                                if (item.component) {
                                    onSelect(item.component, { name: item.name, icon: item.icon });
                                }
                                setIsOpen(false); // Close the sidebar after selection
                            }}
                        >
                            {/* Render the icon with your desired className */}
                            <item.icon className="w-7 h-7 mr-3" />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>
            </div>

            {/* Overlay for small screens */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}