export default function Resume() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-800">
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-6">Resume</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">University Name</h4>
            <p className="text-gray-600">Degree, Field of Study</p>
            <p className="text-gray-600">Graduation Year</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
            <h4 className="text-xl font-bold">Company Name</h4>
            <p className="text-gray-600">Job Title</p>
            <p className="text-gray-600">Dates of Employment</p>
            <p className="text-gray-600">
              Brief description of job responsibilities and achievements.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold">Another Company</h4>
            <p className="text-gray-600">Job Title</p>
            <p className="text-gray-600">Dates of Employment</p>
            <p className="text-gray-600">
              Brief description of job responsibilities and achievements.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="list-disc list-inside">
            <li className="text-gray-600">React.js</li>
            <li className="text-gray-600">TailwindCSS</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </section>
  )
}
