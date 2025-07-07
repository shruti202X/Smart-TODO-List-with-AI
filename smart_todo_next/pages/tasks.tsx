import { PlusIcon, BarsArrowDownIcon } from '@heroicons/react/24/solid'; // import Plus icon
import { uptime } from 'process';
import { Component } from 'react';
import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function TaskPage() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish AI integration",
      description: "Integrate OpenAI API for task suggestions",
      category: { name: "Development" },
      priority: 8.5,
      deadline: "2025-07-07T23:59:00Z",
      status: "listed",
      created_at: "2025-07-05T12:00:00Z",
      updated_at: "2025-07-06T09:30:00Z",
    },{
      id: 1,
      title: "Finish AI integration",
      description: "Integrate OpenAI API for task suggestions",
      category: { name: "Development" },
      priority: 8.5,
      deadline: "2025-07-07T23:59:00Z",
      status: "listed",
      created_at: "2025-07-05T12:00:00Z",
      updated_at: "2025-07-06T09:30:00Z",
    },{
      id: 1,
      title: "Finish AI integration",
      description: "Integrate OpenAI API for task suggestions",
      category: { name: "Development" },
      priority: 8.5,
      deadline: "2025-07-07T23:59:00Z",
      status: "listed",
      created_at: "2025-07-05T12:00:00Z",
      updated_at: "2025-07-06T09:30:00Z",
    }
  ]);

  const handleUpdateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
    console.log("Updated Task:", updatedTask);
  };

  return (
    <div className={`${geistSans.className} ${geistMono.className} grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full`}>
      <Navbar />

      <button className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
        <PlusIcon className="h-6 w-6" />
      </button>

      <button
      className="fixed bottom-24 right-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <BarsArrowDownIcon className="h-6 w-6" />
    </button>

      <div className="p-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} onUpdate={handleUpdateTask} />
      ))}
      </div>

    </div>
  );
}