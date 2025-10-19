import { Button } from "~/components/button";
import {
    CheckBadgeIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { FormComponent } from "~/components/form_component";


const taxes = [
    {
        id_tax: 1,
        fk_id_propertie: 1,
        name: "Predial 2024",
        description: "Impuesto predial anual correspondiente al año 2024.",
        payment_date: "2024-03-31",
        generation_date: "2024-01-01",
        state: 2, // 0=late, 1=paid, 2=pending
        arrears_days: 15
    },
    {
        id_tax: 2,
        fk_id_propertie: 1,
        name: "Impuesto de Aseo",
        description: "Impuesto mensual de aseo para la propiedad.",
        payment_date: "2024-05-10",
        generation_date: "2024-05-01",
        state: 1,
        arrears_days: 0
    },
    {
        id_tax: 3,
        fk_id_propertie: 1,
        name: "Impuesto de Alumbrado Público",
        description: "",
        payment_date: "2024-04-15",
        generation_date: "2024-04-01",
        state: 3,
        arrears_days: 20
    }
];


export function InfoTaxes() {

    const getStatusProps = (status: number) => {
        switch (status) {
            case 1:
                return {
                    text: "Al dia",
                    icon: <CheckBadgeIcon className="icon ms-2" />,
                    color: "bg-green-700"
                };
            case 2:
                return {
                    text: "Pendiente",
                    icon: <ExclamationTriangleIcon className="icon ms-2" />,
                    color: "bg-yellow-700"
                };
            case 3:
                return {
                    text: "Vencido",
                    icon: <ExclamationCircleIcon className="icon ms-3" />,
                    color: "bg-red-700"
                };
            default:
                return {
                    text: "",
                    icon: null,
                    color: ""
                };
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full p-4">
                {taxes.map((tax) => {
                    const status = getStatusProps(tax.state);
                    return (
                        <div key={tax.id_tax} className="p-4 border rounded mb-4">
                            <h1 className="flex text-2xl font-semibold">{tax.name} {status.icon}</h1>
                            <p className="text-lg flex items-center">
                                Estado de pago: {status.text} {status.icon}
                            </p>
                            <p className="text-lg">Fecha de generacion: {tax.generation_date}</p>
                            <p className="text-lg">Fecha maxima de pago: {tax.payment_date}</p>
                            <p className="text-lg">Dias de atraso: {tax.arrears_days}</p>
                            {tax.description != "" ? <p className="text-lg">Descripción: {tax.description}</p> : null}
                            <Button
                                label={<div className="flex text-xl justify-center">
                                    <h1>Ir a pagar</h1>
                                    {status.icon}
                                </div>}
                                className={`mt-2 w-100 ${status.color} text-white `}
                                onClick={() => {
                                    //Navigate({tax.url});
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function FormTaxes({ type }: { type: string }) {
    const fields = [
        { name: "Nombre del impuesto", key: "name", type: "text" },
        { name: "Fecha de generación del ultimo recibo", key: "generation_date", type: "date" },
        { name: "Fecha máxima de pago del ultimo recibo", key: "payment_date", type: "date" },
        { name: "Descripcion", key: "description", type: "text" },
    ];
    return <FormComponent obj={fields} data={taxes} type={type} />
}