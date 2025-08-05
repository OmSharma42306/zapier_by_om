interface ModalProps {
  index: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ index, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Editing Zap #{index}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">✖</button>
        </div>

        <div className="mt-4 text-gray-700">
          This is a modal for Zap item at index {index}.
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
