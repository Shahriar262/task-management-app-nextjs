import React from "react";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-[97%] gap-4">

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Total Tasks</p>
        <h2 className="text-2xl font-bold mt-2">12</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Pending</p>
        <h2 className="text-2xl font-bold mt-2">4</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">In Progress</p>
        <h2 className="text-2xl font-bold mt-2">3</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Completed</p>
        <h2 className="text-2xl font-bold mt-2">3</h2>
      </div>

      <div className="bg-white border rounded-lg p-4">
        <p className="text-sm text-gray-500">Hold</p>
        <h2 className="text-2xl font-bold mt-2">2</h2>
      </div>

    </div>
  );
}
