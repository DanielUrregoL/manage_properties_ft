import { useState } from "react";

interface Field {
  name: string;
  key: string;
  type: string;
}

interface FormComponentProps {
  obj: Field[];
  data: any[];
  type: string;
}

export function FormComponent({ obj, data, type }: FormComponentProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(parseInt(e.target.value));
  };

  const selectedItem = data[selectedIndex] || {};

  if (type === "create") {
    return (
      <form className="flex flex-col gap-4">
        {obj.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-lg font-semibold">{field.name}</label>
            <input type={field.type} className="border rounded p-2" />
          </div>
        ))}
      </form>
    );
  }

  if (type === "update") {
    return (
      <form className="flex flex-col gap-4">
        <label className="text-xl font-semibold">Selecciona un elemento</label>
        <select
          onChange={handleChange}
          className="border rounded p-2 mb-4"
          value={selectedIndex}
        >
          {data.map((item, index) => (
            <option key={index} value={index}>
              {item.name || `Item ${index + 1}`}
            </option>
          ))}
        </select>

        {obj.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-lg font-semibold">{field.name}</label>
            <input
              type={field.type}
              className="border rounded p-2"
              value={selectedItem[field.key] || ""}
              onChange={() => {}} // Add handling as needed
            />
          </div>
        ))}
      </form>
    );
  }

  if (type === "delete") {
    return (
      <form className="flex flex-col gap-4 items-center border rounded p-4 mb-5">
        <label className="text-3xl font-semibold mb-2">Selecciona para eliminar</label>
        <select
          onChange={handleChange}
          className="border rounded p-2"
          value={selectedIndex}
        >
          {data.map((item, index) => (
            <option key={index} value={index}>
              {item.name || `Item ${index + 1}`}
            </option>
          ))}
        </select>
      </form>
    );
  }

  return null;
}
