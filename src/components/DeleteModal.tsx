import React from "react";

type DeleteModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};


export default function DeleteModal({onCancel, onConfirm} : DeleteModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3">
      <div className="bg-white rounded-lg p-5 sm:p-6 w-full max-w-sm">

        <h2 className="text-lg font-semibold">
          Delete Task?
        </h2>

        <p className="text-gray-600 text-sm my-4">
          Are you sure you want to delete this task?
          This action cannot be undone.
        </p>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button className="border rounded-md px-4 py-2" onClick={onCancel}>
            Cancel
          </button>

          <button className="bg-red-600 text-white rounded-md px-4 py-2" onClick={onConfirm}>
            Confirm Delete
          </button>
        </div>

      </div>
    </div>
  );
}
