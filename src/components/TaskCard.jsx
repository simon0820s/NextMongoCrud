import Link from "next/link"

export default function TaskCard({ task }) {
  return (
    <Link href={`/tasks/${task._id}`} className="shadow-lg shadow-zinc-950 hover:shadow-green-800 transition-all ease-in-out duration-200">
      <article className="bg-zinc-700 p-4 rounded-md hover:cursor-pointer hover:bg-zinc-800 transition-all ease-in-out duration-200">
        <h3 className="text-lg font-bold text-neutral-200">{task.title}</h3>
        <p className="text-neutral-400 font-medium">{task.description}</p>
      </article>
    </Link>
  )
}
