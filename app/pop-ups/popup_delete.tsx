import { PopupTemplate } from "../components/pop-up";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/button";


interface PopupDeleteProps {
  onClose: () => void;
  onDelete: () => void;
  category: string;
  form?: React.ReactNode;
}

export function PopupDelete({ onClose, onDelete, category, form }: PopupDeleteProps) {
  return (
    <PopupTemplate
      title={`Eliminar ${category}`}
      icon={<TrashIcon className="w-10 h-10" />}
      content={
        <>
          {form ? (
            <div className="mb-4">
              {form}
              <p className="text-3xl text-center">
                ¿Estás seguro de que deseas eliminar <strong>  {category}</strong>?
              </p>
            </div>
          ) :
            <p className="text-3xl text-center">
              ¿Estás seguro de que deseas eliminar <strong>{category}</strong>?
            </p>
          }
          <div className="flex justify-center gap-4 mt-8">
            <Button
              label="Cancelar"
              onClick={onClose}
              className="bg-gray-500 text-white hover:bg-gray-700"
            />
            <Button
              label="Eliminar"
              onClick={() => {
                onDelete();
                onClose();
              }}
              className="bg-red-600 text-white hover:bg-red-800"
            />
          </div>
        </>
      }
      onClose={onClose}
    />
  );
}
