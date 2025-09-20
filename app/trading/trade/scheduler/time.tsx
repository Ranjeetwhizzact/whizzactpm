export default function TimeScheduler({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg w-[400px] shadow-lg">
      <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2 rounded-t-lg">
        <h2 className="font-bold">Time Base Schedule</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm">Frequency</label>
          <input
            type="text"
            placeholder="Frequency in minutes"
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block text-sm">No. of Orders</label>
          <input
            type="text"
            placeholder="No. of Orders"
            className="border rounded w-full p-2"
          />
        </div>
        <div>
          <label className="block text-sm">Validity</label>
          <select className="border rounded w-full p-2">
            <option>Validity Type</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end p-4">
        <button onClick={onClose} className="bg-blue-500 text-white px-6 py-2 rounded">
          Set
        </button>
      </div>
    </div>
  );
}
