function FormPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form>
        <input type="text" name="title" placeholder="Title"
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4" />
        <textarea name="description" placeholder="Description"
          className="bg-zinc-800 border-2 border-zinc-700 w-full p-4 rounded-lg my-4"
        ></textarea>
        <button>
          Save
        </button>
      </form>
    </div>
  )
}

export default FormPage