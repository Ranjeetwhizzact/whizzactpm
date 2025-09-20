export default function PriceScheduler({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col gap-[20px] bg-white rounded-lg w-[700px]  shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg">
        <h2 className="font-bold text-[18px] ">Price Base Schedule</h2>
        <button onClick={onClose}>✕</button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4 px-[30px] py-[20px]">
        <div className="flex flex-row gap-[76px] w-full items-center px-[10px] py-[5px]">
          <label className="block text-[16px] font-medium">Price Type</label>
          <div className="flex flex-row gap-[10px] align-right">
            <select className="gap border rounded-[10px] w-[220px] px-[20px] py-[10px] mt-1">
              <option>LTP</option>
              <option>ATP</option>
            </select>
            <input
              type="numbe"
              placeholder="Trigger Price"
              className="border rounded px-2 py-2 mt-1"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm">Comparison</label>
          <select className="border rounded w-full p-2">
            <option>Comparison</option>
            <option>Greater</option>
            <option>Less</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Set Price"
          className="border rounded w-full p-2"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="bg-blue-500 text-white px-6 py-2 rounded">
          Set
        </button>
      </div>
    </div>
  );
}
