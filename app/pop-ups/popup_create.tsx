import { PopupTemplate } from "../components/pop-up";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "../components/button";

interface PopupCreateProps {
  onClose: () => void;
  onCreate: () => void;
  category: string;
  form: React.ReactNode;
}

export function PopupCreate({ onClose, onCreate, category, form }: PopupCreateProps) {
  return (
    <PopupTemplate
      title={`Añadir ${category}`}
      icon={<PlusCircleIcon className="w-10 h-10" />}
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
              label="Crear"
              onClick={() => {
                onCreate();
                onClose();
              }}
              className="bg-green-600 text-white hover:bg-green-800"
            />
          </div>
        </div>
      }
      onClose={onClose}
    />
  );
}
