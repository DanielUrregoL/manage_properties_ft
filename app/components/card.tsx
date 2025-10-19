
import { PlusCircleIcon } from "@heroicons/react/24/outline"

interface Card {
  name: string,
  description: string,
  image: string
}

export function Card({ name, description, image }: Card) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 card">
      <img src={image} alt={name} className="w-full h-60 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2 mb-1">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export function AdditionalCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 card" onClick={onClick}>
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center h-60">
        <PlusCircleIcon className="w-40 text-gray-900 h-40 mx-auto my-auto" />
        <h1 className="text-center text-gray-900 text-lg font-bold mb-8">Haz clic aquí para agregar una nueva propiedad.</h1>
      </div>
      <h2 className="text-xl font-bold mt-2 mb-1">Nombre aqui</h2>
      <p>Description aqui</p>
    </div>
  );
};