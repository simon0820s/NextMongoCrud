import Link from "next/link"

function NavBar() {
  return (
    <nav className="bg-zinc-950 py-4 w-screen text-neutral-200 shadow-md shadow-zinc-950">
      <div className="flex justify-between items-center px-8 w-full">
        <Link href={'/'}><h1 className="text-2xl font-bold">Next Mongo Crud</h1></Link>
        <ul>
          <li>
            <Link className="font-semibold" href={'/tasks/new'}>Create Task</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar