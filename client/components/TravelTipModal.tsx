import { X } from "lucide-react";

interface TravelTipModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export function TravelTipModal({
  isOpen,
  title,
  description,
  onClose,
}: TravelTipModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-travel-700">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full bg-travel-500 hover:bg-travel-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
