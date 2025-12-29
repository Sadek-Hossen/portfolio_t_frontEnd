
"use client";
import { projectsData } from "@/datas/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter as useRouterClient } from "next/navigation";

export default async function CardPage({ params }) {
  const { id } = await params;
  const projectId = Number(id);

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <h1 className="text-white">Project not found</h1>;
  }

  return (
    <div className="px-6 py-10 text-white max-w-4xl mx-auto">
      {/* Back Button using client component */}
      <BackButton />

      {/* Project Title */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {/* Project Image */}
      <div className="w-full h-[400px] relative rounded-xl overflow-hidden mb-6">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Live Demo Button */}
      <Link href={project.liveDemo} target="_blank">
        <button className="px-6 py-3 cursor-pointer bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-all font-bold">
          Live Demo
        </button>
      </Link>
    </div>
  );
}




function BackButton() {
  const router = useRouterClient();
  return (
    <button
      onClick={() => router.back()}
      className="mb-6 px-4 py-2 cursor-pointer bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
    >
      ← Back
    </button>
  );
}
