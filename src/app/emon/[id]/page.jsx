import { use } from "react";

export default function Page({ params }) {
  const { id } = use(params);

  return (
    <div className="text-white">
      <h1>This is id : {id}</h1>
    </div>
  );
}
