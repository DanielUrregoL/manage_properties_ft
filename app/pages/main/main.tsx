import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, AdditionalCard } from "~/components/card";
import { Filter } from "~/components/filter";
import { PopupCreate } from '~/pop-ups/popup_create';
import { FormComponent } from "~/components/form_component";

export function Main() {
  const navigate = useNavigate();
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const properties = [
    { id_propertie: 1, type: 1, name: "Propiedad 1", description: "Descripción de la propiedad 1", city: "Ciudad 1", image: "images/house.webp" },
    { id_propertie: 2, type: 2, name: "Propiedad 2", description: "Descripción de la propiedad 2", city: "Ciudad 1", image: "images/house.webp" },
    { id_propertie: 3, type: 3, name: "Propiedad 3", description: "Descripción de la propiedad 3", city: "Ciudad 1", image: "images/house.webp" },
    { id_propertie: 4, type: 1, name: "Propiedad 4", description: "Descripción de la propiedad 4", city: "Ciudad 2", image: "images/house.webp" },
    { id_propertie: 5, type: 1, name: "Propiedad 5", description: "Descripción de la propiedad 5", city: "Ciudad 2", image: "images/house.webp" },
    { id_propertie: 6, type: 2, name: "Propiedad 6", description: "Descripción de la propiedad 6", city: "Ciudad 3", image: "images/house.webp" },
  ];

  const filterOptions = [
    { value: 1, label: "Propiedades de vivienda" },
    { value: 2, label: "Propiedades de renta fija" },
    { value: 3, label: "Propiedades de renta variable" },
    ...properties.map((property) => ({ value: property.name, label: `Nombre: ${property.name}` })),
    ...Array.from(new Set(properties.map((property) => property.city))).map((city) => ({ value: city, label: `Ciudad: ${city}` })),
  ];

  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);

  const handleFilterChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setSelectedFilters(selectedValues);
  };

  const handleCardClick = (id_propertie: number) => {
    navigate(`/admin/${id_propertie}`);
  };

  const filteredLifeProperties = properties.filter(
    (property) =>
      property.type === 1 &&
      (selectedFilters.length === 0 ||
        selectedFilters.includes(property.type) ||
        selectedFilters.includes(property.name) ||
        selectedFilters.includes(property.city))
  );

  const filteredRentalProperties = properties.filter(
    (property) =>
      property.type === 2 &&
      (selectedFilters.length === 0 ||
        selectedFilters.includes(property.type) ||
        selectedFilters.includes(property.name) ||
        selectedFilters.includes(property.city))
  );

  const filteredRentalPlatformProperties = properties.filter(
    (property) =>
      property.type === 3 &&
      (selectedFilters.length === 0 ||
        selectedFilters.includes(property.type) ||
        selectedFilters.includes(property.name) ||
        selectedFilters.includes(property.city))
  );

  const section = (tittle: string, filterReferences: typeof properties) => {
    return (
      <>
        {filterReferences.length > 0 && (
          <>
            <h1 className="text-3xl font-bold mt-10 mb-4">{tittle}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterReferences.map((property) => (
                <div key={property.name} onClick={() => handleCardClick(property.id_propertie)}>
                  <Card name={property.name} description={property.description} image={property.image} />
                </div>
              ))}
              <AdditionalCard onClick={() => setShowCreatePopup(true)} />
            </div>
          </>
        )}
      </>
    )
  };

  return (
    <>
      <Filter columns={filterOptions} onChange={handleFilterChange} />
      {section("Propiedades de vivienda", filteredLifeProperties)}
      {section("Propiedades de renta fija", filteredRentalProperties)}
      {section("Propiedades de renta variable", filteredRentalPlatformProperties)}
      {showCreatePopup && (
        <PopupCreate
          category="Propiedades"
          onClose={() => setShowCreatePopup(false)}
          onCreate={() => {
            // Optional: handle new property creation logic here
            console.log("Created:");
            setShowCreatePopup(false);
          }}
          form={
            <FormPropertie type="create" />
          }
        />
      )}
    </>
  );
}


export function FormPropertie({ type }: { type: string }) {
    const fields = [
        { name: "Nombre de la propiedad", key: "name", type: "text" },
        { name: "Estado de la propiedad", key: "last_name", type: "text" },
        { name: "Tipo de propidad", key: "gender", type: "text" },
        { name: "Estrato Socioeconomico", key: "age", type: "number" },
        { name: "Pais", key: "email", type: "text" },
        { name: "Region", key: "cellphone", type: "text" },
        { name: "Ciudad", key: "second_cellphone", type: "text" },
        { name: "Direccion", key: "job", type: "text" }
    ];
    return <FormComponent obj={fields} data={[]} type={type} />
}