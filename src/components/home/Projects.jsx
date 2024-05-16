import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Weather Forecast',
    description: 'A simple weather forecast built with React',
    link: '/weather-forecast',
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={project.link}
                className="text-blue-500 hover:underline"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
