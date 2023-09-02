"use client"

import { useState } from "react"
import { headers } from "../../../../next.config"

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  })

  const createTask = async () => {
    const res = await fetch('/api/tasks', {
      method: "POST",
      body: JSON.stringify({
        "title": newTask.title[0],
        "description": newTask.description[0]
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createTask()
  }

  const handleChange = (e) => setNewTask({ ...newTask, [e.target.name]: [e.target.value] })

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center px-10 md:px-20">
      <div className="flex items-start w-full">
        <h1 className="text-lime-600 text-4xl font-bold text-start">Create a new task</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input onChange={handleChange} type="text" name="title" placeholder="Title"
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4" />
        <textarea onChange={handleChange} name="description" placeholder="Description" rows={3}
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4"></textarea>
        <button className="bg-lime-600 py-2 px-4 font-semibold text-neutral-300 rounded-lg">
          Save
        </button>
      </form>
    </div>
  )
}

export default FormPage