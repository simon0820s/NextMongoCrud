import { connectDB } from "@/utils/mongoose"
import Task from "@/models/Task"

async function loadTasks() {
  connectDB()
  const tasks = await Task.find()
  return tasks
}

async function HomePage() {
  const tasks = await loadTasks()
  return (
    <div>{
        JSON.stringify(tasks)
      }</div>
  )
}

export default HomePage