import { FormComponent } from "~/components/form_component";

const tenants = [
    {
        id_tenant: 2,
        name: "Carlos",
        last_name: "Ramírez",
        gender: "M",
        age: 45,
        cellphone: "+57 310 987 6543",
        second_cellphone: null,
        email: "carlos.ramirez@example.com",
        job: "Ingeniero Civil",
        company: "Constructora Andina",
    },
    {
        id_tenant: 3,
        name: "María",
        last_name: "Gómez",
        gender: "F",
        age: 38,
        cellphone: "+57 312 345 6789",
        second_cellphone: "+57 300 123 4567",
        email: "maria.gomez@example.com",
        job: "Contadora",
        company: "Finanzas Globales",
    }
];

export function InfoTenant() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl ms-5">
            <h2 className="text-2xl font-bold mb-4">Información de Inquilinos</h2>
            {tenants.map((tenant, index) => (
                <div key={tenant.id_tenant} className="border rounded-lg p-4 mb-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Inquilino #{index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nombre" value={tenant.name} />
                        <Field label="Apellido" value={tenant.last_name} />
                        <Field label="Género" value={tenant.gender === "M" ? "Masculino" : tenant.gender === "F" ? "Femenino" : "Otro"} />
                        <Field label="Edad" value={tenant.age} />
                        <Field label="Email" value={tenant.email} />
                        <Field label="Teléfono" value={tenant.cellphone} />
                        {tenant.second_cellphone && <Field label="Teléfono adicional" value={tenant.second_cellphone} />}
                        <Field label="Profesión" value={tenant.job} />
                        <Field label="Empresa" value={tenant.company} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function Field({ label, value }: { label: string; value: string | number }) {
    return (
        <div>
            <label className="block text-gray-500 text-sm mb-1">{label}</label>
            <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
                type="text"
                readOnly
                value={value}
            />
        </div>
    );
}


export function FormTenant({ type }: { type: string }) {
    const fields = [
        { name: "Nombre", key: "name", type: "text" },
        { name: "Apellido", key: "last_name", type: "text" },
        { name: "Género", key: "gender", type: "text" },
        { name: "Edad", key: "age", type: "text" },
        { name: "Email", key: "email", type: "text" },
        { name: "Celular", key: "cellphone", type: "date" },
        { name: "Segundo Celular", key: "second_cellphone", type: "date" },
        { name: "Profesión", key: "job", type: "text" },
        { name: "Empresa", key: "company", type: "text" },
    ];
    return <FormComponent obj={fields} data={tenants} type={type} />
}