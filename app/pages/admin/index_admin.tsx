import { InfoPropertie } from "./info_propertie";
import { InfoServices, FormServices } from "./info_services";
import { InfoTaxes, FormTaxes } from "./info_taxes";
import { InfoPayments } from "./info_payments";
import { InfoTenant, FormTenant } from "./info_tenant";
import { InfoGuarantor, FormGuarantor } from "./info_guarantor";
import { InfoContract } from "./info_contract";
import React, { useState } from "react";
import { Sidebar } from "~/components/sidebar";
import { useParams } from "react-router-dom";
import { Button } from "~/components/button";
import { PopupDelete } from '~/pop-ups/popup_delete';
import { PopupEdit } from '~/pop-ups/popup_edit';
import { PopupCreate } from '~/pop-ups/popup_create';
import {
    CheckBadgeIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    LightBulbIcon,
    HomeModernIcon,
    BanknotesIcon,
    UserCircleIcon,
    NewspaperIcon,
    BriefcaseIcon,
    PlusCircleIcon,
    PencilSquareIcon,
    TrashIcon,
    ScaleIcon
} from "@heroicons/react/24/outline";
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;


export function IndexAdmin() {
    const { id_propertie } = useParams<{ id_propertie: string }>();
    const [selectedNav, setSelectedNav] = useState<{ name: string; icon: IconType }>({
        name: "Información General",
        icon: ExclamationCircleIcon,
    });
    const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(
        <InfoPropertie />
    );

    const [showDeletePopupPropertie, setShowDeletePopupPropertie] = useState(false);
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleAddClick = () => {
        setShowCreatePopup(true);
    };

    const handleEditClick = () => {
        setShowEditPopup(true);
    };

    const handleDeleteClick = () => {
        setShowDeletePopup(true);
    };

    const propertie = {
        id: id_propertie,
        type: "1",
        name: "Propiedad 1",
        description: "Descripción de la propiedad 1",
        country: "País 1",
        region: "Región 1",
        city: "Ciudad 1",
        adress: "Dirección 1",
        image: "../images/house.webp",
    };

    const taxes = { id: 1, name: "Impuesto 1", description: "Desc", amount: 100, date: "2023-10-01", status: 1 };
    const services = { id: 1, name: "Servicio 1", description: "Desc", amount: 50, date: "2023-10-01", status: 2 };
    const payments = { id: 1, name: "Pago 1", description: "Desc", amount: 150, date: "2023-10-01", status: 3 };

    const getStatusProps = (status: number) => {
        switch (status) {
            case 1:
                return { icon: <><CheckBadgeIcon className="icon ms-20" />| Al día</>, color: "bg-green-700" };
            case 2:
                return { icon: <><ExclamationTriangleIcon className="icon ms-23" />| Pendiente</>, color: "bg-yellow-700" };
            case 3:
                return { icon: <><ExclamationCircleIcon className="icon ms-30" />| Vencido</>, color: "bg-red-700" };
            default:
                return { icon: null, color: "" };
        }
    };

    const handleSidebarSelect = (component: React.ReactNode, navItem: { name: string; icon: IconType }) => {
        console.log(`Selected nav item: ${navItem.name}`);
        if (navItem.name == "Eliminar Propiedad") {
            setShowDeletePopupPropertie(true);
            console.log(`Deleting property ${propertie.id}`);
            return;
        } else if (component) {
            setSelectedComponent(component);
        }
        setSelectedNav({ name: navItem.name, icon: navItem.icon });
    };


    function getFormByCategory(category: string, type: string) {
        switch (category.toLowerCase()) {
            case "servicios":
                return <FormServices type={type}/>;
            case "impuestos":
                return <FormTaxes type={type} />;
            case "inquilino":
                return <FormTenant type={type} />;
            case "fiador":
                return <FormTenant type={type} />; 
            default:
                return <div>Formulario no disponible</div>;
        }
    }



    const navItems = [
        { name: "Información General", icon: ExclamationCircleIcon, component: <InfoPropertie /> },
        { name: "Servicios", icon: LightBulbIcon, component: <InfoServices /> },
        { name: "Impuestos", icon: NewspaperIcon, component: <InfoTaxes /> },
        { name: "Pagos", icon: BanknotesIcon, component: <InfoPayments /> },
        { name: "Inquilino", icon: UserCircleIcon, component: <InfoTenant /> },
        { name: "Fiador", icon: BriefcaseIcon, component: <InfoGuarantor /> },
        { name: "Contrato", icon: ScaleIcon, component: <InfoContract file={`~/home/don_putas/Downloads`} /> },
        { name: "Eliminar Propiedad", icon: TrashIcon, component: <InfoGuarantor /> },
        { name: "Propiedades", icon: HomeModernIcon, href: "/" }
    ];

    const taxesStatus = getStatusProps(taxes.status);
    const servicesStatus = getStatusProps(services.status);
    const paymentsStatus = getStatusProps(payments.status);

    return (
        <div className="flex">
            <Sidebar
                navItems={navItems}
                onSelect={(component: React.ReactNode, navItem: any) => handleSidebarSelect(component, navItem)}
            />
            <div className="flex-1 p-4 ">
                <header className="flex flex-col md:flex-row items-center gap-6 mb-10 shadow-md rounded-lg p-4 bg-white">
                    <img src={propertie.image} alt="Propiedad" className="sm:w-full h-30 lg:w-200 h-120 rounded" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold">{propertie.name}</h2>
                        <p className="text-xl">{propertie.country} / {propertie.region} / {propertie.city}</p>
                        <p className="text-xl">{propertie.adress}</p>
                        <Button
                            label={<div className="flex"><span>Impuestos :</span>{taxesStatus.icon}</div>}
                            onClick={() => setSelectedComponent(<InfoTaxes />)}
                            className={`flex items-center gap-2 p-4 text-white text-xl w-100 rounded ${taxesStatus.color}`}
                        />
                        <Button
                            label={<div className="flex"><span>Servicios :</span>{servicesStatus.icon}</div>}
                            onClick={() => setSelectedComponent(<InfoServices />)}
                            className={`flex items-center gap-2 p-4 text-white text-xl w-100 rounded ${servicesStatus.color}`}
                        />
                        <Button
                            label={<div className="flex"><span>Pagos :</span>{paymentsStatus.icon}</div>}
                            onClick={() => setSelectedComponent(<InfoPayments />)}
                            className={`flex items-center gap-2 p-4 text-white text-xl w-100 rounded ${paymentsStatus.color}`}
                        />
                    </div>
                </header>
                <h1 className="flex text-4xl font-bold mb-4">
                    <selectedNav.icon className="w-10 h-10 ms-6 me-2" /> {selectedNav.name}
                </h1>
                <Button
                    label={<div className="flex justify-center py-1"><span className="text-xl mt-1">Habilitar Edición</span><PencilSquareIcon className="w-8 h-8 ms-2" /></div>}
                    className="mb-4 ms-5 w-105 bg-gray-700 text-white font-bold"
                    onClick={handleEditClick}
                />
                <Button
                    label={<div className="flex justify-center"><span className="text-xl mt-2">Añadir {selectedNav.name}</span><PlusCircleIcon className="w-10 h-10 ms-2 " /></div>}
                    className="mb-4 ms-5 w-105 bg-gray-700 text-white font-bold"
                    onClick={handleAddClick}
                />
                <Button
                    label={<div className="flex justify-center py-1"><span className="text-xl mt-1">Eliminar {selectedNav.name}</span><TrashIcon className="w-8 h-8 ms-2" /></div>}
                    className="mb-4 ms-5 w-105 bg-gray-700 text-white font-bold"
                    onClick={handleDeleteClick}
                />
                {selectedComponent}

                {showCreatePopup && (
                    <PopupCreate
                        category={selectedNav.name}
                        onClose={() => setShowCreatePopup(false)}
                        onCreate={() => {
                            console.log("Creating");
                            setShowCreatePopup(false);
                        }}
                        form={getFormByCategory(selectedNav.name, "create")}
                    />
                )}

                {showEditPopup && (
                    <PopupEdit
                        category={selectedNav.name}
                        onClose={() => setShowEditPopup(false)}
                        onEdit={() => {
                            console.log("Editing:");
                            setShowEditPopup(false);
                        }}
                        form={getFormByCategory(selectedNav.name, "update")}
                    />
                )}

                {showDeletePopup && (
                    <PopupDelete
                        category={selectedNav.name}
                        onClose={() => setShowDeletePopup(false)}
                        onDelete={() => {
                            console.log(`Deleting ${selectedNav.name}`);
                            setShowDeletePopup(false);
                        }}
                        form={getFormByCategory(selectedNav.name, "delete")}
                    />
                )}



                {showDeletePopupPropertie && (
                    <PopupDelete
                        category={`${propertie.name}`}
                        onClose={() => setShowDeletePopupPropertie(false)}
                        onDelete={() => {
                            console.log(`Deleting property ${propertie.id}`);
                            setShowDeletePopupPropertie(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
};
