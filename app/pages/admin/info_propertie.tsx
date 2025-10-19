export function InfoPropertie() {
    const propertie = {
        id_propertie: 1,
        fk_id_owner: 2,
        state: 1,
        type: 1,
        name: "Propiedad 1",
        country: "Ciudad 1",
        region: "Región 1",
        city: "Ciudad 1",
        address: "Calle Falsa 123",
        socioeconomic_bg: 3
    };

    return (
        <>
            <div className="shadow-md rounded-lg p-6 w-full mb-6">
                <h1 className="text-2xl font-semibold mb-4">Información de la propiedad</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 ">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Nombre de la Propiedad:</label>
                        <input
                            type="text"
                            value={propertie.name}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Estado de la propiedad:</label>
                        <input
                            type="text"
                            value={propertie.state === 1 ? "Activa" : "Inactiva"}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Tipo de propiedad:</label>
                        <input
                            type="text"
                            value={
                                propertie.type === 1
                                    ? "Propiedad de vivienda"
                                    : propertie.type === 2
                                        ? "Renta Fija"
                                        : "Renta Variable"
                            }
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Estrato Socioeconómico:</label>
                        <input
                            type="text"
                            value={propertie.socioeconomic_bg}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-lg p-6 w-full">
                <h1 className="text-2xl font-semibold mb-4">Información de la ubicación</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">País:</label>
                        <input
                            type="text"
                            value={propertie.country}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Región:</label>
                        <input
                            type="text"
                            value={propertie.region}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Ciudad:</label>
                        <input
                            type="text"
                            value={propertie.city}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Dirección:</label>
                        <input
                            type="text"
                            value={propertie.address}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    );
}