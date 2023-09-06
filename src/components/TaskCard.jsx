import Link from "next/link"

export default function TaskCard({ task }) {
  return (
    <Link href={`/tasks/${task._id}`}>
      <article className="bg-zinc-700 p-4 rounded-md hover:cursor-pointer hover:bg-zinc-800 transition-all ease-in-out duration-200">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </article>
    </Link>
  )
}
