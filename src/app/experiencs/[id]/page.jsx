export default async function Page({ params }) {
  const { id } = await params

  return (
    <div className="text-white">
      <h1>This is id : {id}</h1>
    </div>
  )
}
