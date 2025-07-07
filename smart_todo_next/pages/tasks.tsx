import { PlusIcon } from '@heroicons/react/24/solid'; // import Plus icon

export default function TaskPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 relative">
      <h1 className="text-2xl font-bold p-4">Tasks</h1>

      <button
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </div>
  );
}