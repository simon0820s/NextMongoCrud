"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  })

  const router = useRouter()
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])

  const createTask = async () => {

    try {

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
      router.push('/')
      router.refresh()

    } catch (error) {
      console.log(error)
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createTask()
  }

  const handleChange = (e) => setNewTask({ ...newTask, [e.target.name]: [e.target.value] })

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center px-10 md:px-20">
      <div className="flex items-start w-full">
        <h1 className="text-lime-600 text-4xl font-bold text-start">
          {
            !params.id ? "Create Task" : "Update Task"
          }
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input onChange={handleChange} type="text" name="title" placeholder="Title"
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4" />
        <textarea onChange={handleChange} name="description" placeholder="Description" rows={3}
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4"></textarea>
        <div className="flex">
          <button className="bg-lime-600 py-2 px-4 font-semibold text-neutral-300 rounded-lg">
            Save
          </button>
          <button
            onClick={() => {
              console.log("deleting")
            }}
          >
            Delete
          </button>
        </div>

      </form>
    </div>
  )
}

export default FormPage