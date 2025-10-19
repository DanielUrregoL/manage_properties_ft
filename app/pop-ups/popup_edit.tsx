import { PopupTemplate } from "../components/pop-up";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/button";

interface PopupEditProps {
  onClose: () => void;
  onEdit: () => void;
  category: string;
  form: React.ReactNode;
}

export function PopupEdit({ onClose, onEdit, category, form }: PopupEditProps) {
  return (
    <PopupTemplate
      title={`Editar ${category}`}
      icon={<PencilSquareIcon className="w-10 h-10" />}
      content={
        <div className="flex flex-col gap-6">
          {form}
          <div className="flex justify-center gap-4">
            <Button
              label="Cancelar"
              onClick={onClose}
              className="bg-gray-500 text-white hover:bg-gray-700"
            />
            <Button
              label="Guardar"
              onClick={() => {
                onEdit();
                onClose();
              }}
              className="bg-yellow-600 text-white hover:bg-yellow-800"
            />
          </div>
        </div>
      }
      onClose={onClose}
    />
  );
}
