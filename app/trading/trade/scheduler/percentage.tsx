export default function PercentageScheduler({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg w-[400px] shadow-lg">
      <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg">
        <h2 className="font-bold">Percentage Base Schedule</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="p-4 space-y-4">
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
          placeholder="Percentage"
          className="border rounded w-full p-2"
        />
        <input
          type="text"
          placeholder="Set Price"
          className="border rounded w-full p-2"
        />
      </div>

      <div className="flex justify-end p-4">
        <button onClick={onClose} className="bg-blue-500 text-white px-6 py-2 rounded">
          Set
        </button>
      </div>
    </div>
  );
}
