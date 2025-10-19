import Select from "react-select";

export function Filter({ columns, onChange }: { columns: { value: any; label: string }[]; onChange: (selectedOptions: any) => void }) {
    const options = columns.map((column) => ({
        value: column.value,
        label: column.label,
    }));

    return (
        <div className="flex flex-col items-center mt-4">
            <h1 className="text-3xl font-bold mb-4">Filtrar Propiedades</h1>
            <Select
                options={options}
                isMulti
                className="w-full max-w-md"
                placeholder="Agregar filtros..."
                onChange={onChange}
            />
        </div>
    );
}