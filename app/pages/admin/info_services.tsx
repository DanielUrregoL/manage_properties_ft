import { Button } from "~/components/button";
import { FormComponent } from "~/components/form_component";
import {
    CheckBadgeIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";


const services = [
    {
        id_service: 1,
        fk_id_propertie: 1,
        name: "Servicio 1",
        description: "Descripción del servicio 1",
        company: "Empresa A",
        contract_number: "ABC123",
        payment_date: "2023-10-01",
        generation_date: "2023-09-25",
        state: 2, // 0=late, 1=paid, 2=pending
        arrears_days: 5
    },
    {
        id_service: 2,
        fk_id_propertie: 1,
        name: "Servicio 2",
        description: "Descripción del servicio 2",
        company: "Empresa B",
        contract_number: "DEF456",
        payment_date: "2023-10-02",
        generation_date: "2023-09-26",
        state: 1,
        arrears_days: 0
    },
    {
        id_service: 3,
        fk_id_propertie: 1,
        name: "Servicio 3",
        description: "",
        company: "Empresa C",
        contract_number: "GHI789",
        payment_date: "2023-10-03",
        generation_date: "2023-09-27",
        state: 3,
        arrears_days: 10
    }
];


export function InfoServices() {

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
                {services.map((service) => {
                    const status = getStatusProps(service.state);
                    return (
                        <div key={service.id_service} className="p-4 border rounded mb-4">
                            <h1 className="flex text-2xl font-semibold">{service.name} {status.icon}</h1>
                            <p className="text-lg flex items-center">
                                Estado de pago: {status.text} {status.icon}
                            </p>
                            <p className="text-lg">Empresa: {service.company}</p>
                            <p className="text-lg">Número de contrato: {service.contract_number}</p>
                            <p className="text-lg">Fecha de generacion: {service.generation_date}</p>
                            <p className="text-lg">Fecha maxima de pago: {service.payment_date}</p>
                            <p className="text-lg">Dias de atraso: {service.arrears_days}</p>
                            {service.description != "" ? <p className="text-lg">Descripción: {service.description}</p> : null}
                            <Button
                                label={<div className="flex text-xl justify-center">
                                    <h1>Ir a pagar</h1>
                                    {status.icon}
                                </div>}
                                className={`mt-2 w-100 ${status.color} text-white `}
                                onClick={() => {
                                    //Navigate({service.url});
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export function FormServices({ type }: { type: string }) {
    const fields = [
        { name: "Nombre del servicio", key: "name", type: "text" },
        { name: "Empresa", key: "company", type: "text" },
        { name: "Número de contrato", key: "contract_number", type: "text" },
        { name: "Fecha de generación del ultimo recibo", key: "generation_date", type: "date" },
        { name: "Fecha máxima de pago del ultimo recibo", key: "payment_date", type: "date" },
        { name: "Descripcion", key: "description", type: "text" },
    ];
    return <FormComponent obj={fields} data={services} type={type} />
}