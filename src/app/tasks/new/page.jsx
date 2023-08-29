function FormPage() {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" placeholder="Description" ></textarea>
        <button>
          Save
        </button>
      </form>
    </div>
  )
}

export default FormPage