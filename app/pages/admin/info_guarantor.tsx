import { FormComponent } from "~/components/form_component";


const guarantors = [
    {
        id_guarantor: 1,
        name: "Ana",
        last_name: "Fernández",
        age: 50,
        gender: "F",
        cellphone: "+57 312 456 7890",
        email: "ana.fernandez@example.com",
        job: "Contadora",
        company: "Finanzas Globales",
    },
    {
        id_guarantor: 2,
        name: "Luis",
        last_name: "Martínez",
        age: 55,
        gender: "M",
        cellphone: "+57 311 123 4567",
        email: "luis.martinez@example.com",
        job: "Contadora",
        company: "Finanzas Globales",
    }
];

export function InfoGuarantor() {

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl ms-5">
            <h2 className="text-2xl font-bold mb-4">Información de Fiadores</h2>

            {guarantors.map((guarantor, index) => (
                <div key={guarantor.id_guarantor} className="border rounded-lg p-4 mb-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Fiador #{index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Nombre" value={guarantor.name} />
                        <Field label="Apellido" value={guarantor.last_name} />
                        <Field label="Género" value={guarantor.gender === "M" ? "Masculino" : guarantor.gender === "F" ? "Femenino" : "Otro"} />
                        <Field label="Edad" value={guarantor.age} />
                        <Field label="Email" value={guarantor.email} />
                        <Field label="Teléfono" value={guarantor.cellphone} />
                        <Field label="Profesión" value={guarantor.job} />
                        <Field label="Empresa" value={guarantor.company} />
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

export function FormGuarantor({ type }: { type: string }) {
    const fields = [
        { name: "Nombre", key: "name", type: "text" },
        { name: "Apellido", key: "last_name", type: "text" },
        { name: "Género", key: "gender", type: "text" },
        { name: "Edad", key: "age", type: "number" },
        { name: "Email", key: "email", type: "email" },
        { name: "Teléfono", key: "cellphone", type: "text" },
        { name: "Profesión", key: "job", type: "text" },
        { name: "Empresa", key: "company", type: "text" }
    ];
    return (
        <FormComponent type={type} data={guarantors} obj={fields} />
    );
}