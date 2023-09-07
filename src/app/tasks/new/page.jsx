"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: ""
  })

  const router = useRouter()
  const params = useParams()

  const getTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`)
    const taskData = await res.json()
    setNewTask({
      title: [taskData.message.title],
      description: [taskData.message.description]
    })
  }

  const createTask = async () => {
    console.log("creating task")
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
  console.log(newTask)

  const updateTask = async () => {
    try {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({
          "title": newTask.title[0],
          "description": newTask.description[0]
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const taskData = await res.json()
      console.log(taskData)
      router.push('/')
      router.refresh()
    } catch (e) {
      console.log(e)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!params.id) {
      await createTask()
    } else {
      updateTask()
    }
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task ?")) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "DELETE"
      })
    }
    router.push('/')
    router.refresh()
  }

  const handleChange = (e) => setNewTask({ ...newTask, [e.target.name]: [e.target.value] })

  useEffect(() => {
    if (params.id) {
      getTask()
    }
  }, [])

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center px-10 md:px-20">
      <div className="flex items-start w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-green-700 text-4xl font-bold text-start">
            {
              !params.id ? "Create Task" : "Update Task"
            }
          </h1>
          {
            params.id ? <p className="text-xs text-neutral-700">TaskId: {params.id}</p> : ""
          }
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <input onChange={handleChange} type="text" value={newTask.title} name="title" placeholder="Title"
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4" />
        <textarea onChange={handleChange} value={newTask.description} name="description" placeholder="Description" rows={3}
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4"></textarea>
      </form>
      <div className="flex gap-2 w-full">
        <button onClick={handleSubmit} className="bg-green-700 py-2 px-4 font-semibold text-neutral-300 rounded-lg">
          {
            !params.id ? "Create" : "Update "
          }
        </button>
        {
          params.id ? <button
            type="button"
            className="py-2 px-4 bg-red-700 font-semibold text-neutral-300 rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button> : ""
        }

      </div>
    </div>
  )
}

export default FormPage