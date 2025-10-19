import { CheckBadgeIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function InfoPayments() {

    const payments = [
        {
            id_payment: 1,
            fk_id_contract: 1,
            fk_id_tenant: 1,
            amount: 1200.00,
            payment_date: "2024-05-01",
            payment_method: "Transferencia Bancaria",
            reference: "TRX123456",
            status: 1, // paid
            notes: "Pago realizado a tiempo.",
            arrears_days: 0
        },
        {
            id_payment: 2,
            fk_id_contract: 1,
            fk_id_tenant: 1,
            amount: 1200.00,
            payment_date: "2024-04-10",
            payment_method: "Efectivo",
            reference: "EF789012",
            status: 3, // late
            notes: "Pago con 5 días de retraso.",
            arrears_days: 5
        },
        {
            id_payment: 3,
            fk_id_contract: 2,
            fk_id_tenant: 2,
            amount: 950.50,
            payment_date: "2024-05-15",
            payment_method: "Tarjeta de Crédito",
            reference: "CC345678",
            status: 2, // pending
            notes: "Pendiente de confirmación.",
            arrears_days: 2
        }
    ];

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
        <div className="flex flex-col justify-center p-6">
            <h1 className="text-2xl font-bold mb-4">Información de los pagos</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {payments.map((payment) => {
                    const status = getStatusProps(payment.status);
                    return (
                        <div
                            key={payment.id_payment}
                            className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full max-w-md flex flex-col mx-0 md:mx-4"
                        >
                            <h2 className="flex text-xl font-semibold mb-4">Detalles del pago {status.icon}</h2>
                            <span className={`flex py-1 text-xl text-white rounded-lg w-full ${status.color} mb-4`}>
                                {status.icon}
                                {status.text}
                            </span>
                            <label className="block text-gray-700 font-bold mt-4 mb-2">Método de pago: </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={payment.payment_method}
                                readOnly
                            />
                            <label className="block text-gray-700 font-bold mt-4 mb-2">Monto:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={`$ ${payment.amount} COP`}
                                readOnly
                            />
                            <label className="block text-gray-700 font-bold mt-4 mb-2">Fecha limite de pago:</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={payment.payment_date}
                                readOnly
                            />
                            <label className="block text-gray-700 font-bold mt-4 mb-2">Fecha de pago:</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={payment.payment_date}
                                readOnly
                            />
                            <label className="block text-gray-700 font-bold mt-4 mb-2">Días de atraso:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded p-2 w-full"
                                value={payment.arrears_days}
                                readOnly
                            />
                            <label className="block text-gray-700 font-bold mt-4 mb-2">Notas:</label>
                            <textarea
                                className="border border-gray-300 rounded p-2 w-full"
                                rows={4}
                                value={payment.notes}
                                readOnly
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};