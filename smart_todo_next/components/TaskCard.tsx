import { useState } from "react";

export default function TaskCard({
  id,
  title: initialTitle,
  description: initialDescription,
  category: initialCategory,
  priority: initialPriority,
  deadline: initialDeadline,
  status: initialStatus,
  created_at,
  updated_at,
  onUpdate, // function to call when updating task
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [category, setCategory] = useState(initialCategory?.name || "");
  const [priority, setPriority] = useState(initialPriority);
  const [deadline, setDeadline] = useState(initialDeadline ? initialDeadline.slice(0,16) : "");
  const [status, setStatus] = useState(initialStatus);

  const handleSave = () => {
    const updatedTask = {
      id,
      title,
      description,
      category,
      priority,
      deadline,
      status,
    };
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 mb-4 w-[600px]">
      {isEditing ? (
        <div className="space-y-2 text-gray-500">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Description"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Category"
          />
          <input
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Priority"
          />
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Deadline"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="listed">Listed</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
          </select>
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <span className={`text-xs font-medium px-2 py-1 rounded ${status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {status}
            </span>
          </div>

          {category && (
            <p className="text-sm text-indigo-600 mb-2">
              Category: {category}
            </p>
          )}

          {description && (
            <p className="text-gray-600 mb-4">{description}</p>
          )}

          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <div>
              <p>Priority: <span className="font-medium">{priority}</span></p>
              {deadline && (
                <p>Deadline: {new Date(deadline).toLocaleString()}</p>
              )}
            </div>
            <div className="text-right">
              <p>Created: {new Date(created_at).toLocaleDateString()}</p>
              <p>Updated: {new Date(updated_at).toLocaleDateString()}</p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-indigo-600 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
