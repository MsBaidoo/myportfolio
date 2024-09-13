import tasker from "../../../assets/images/tasker.jpg";
import port from "../../../assets/images/port.jpg";
import event from "../../../assets/images/event.png";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-semibold mb-6">Projects</h1>
      <div className="text-center text-gray-700 mb-8">
        <p>Take a look at some of the projects I have worked on.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Task Manager Platform Card */}
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={tasker} alt="Task Manager Platform" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Built a Task Manager Platform</h2>
            <p className="text-gray-600 mb-4">
              A platform that connects users to professionals like Painters, Carpenters, Cleaners, etc.
            </p>
            <a
              href="https://taskerhubbb.netlify.app/"
              className="text-blue-500 hover:underline block mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded-full">React</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">JavaScript</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">Tailwind CSS</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">Netlify</button>
            </div>
          </div>
        </div>

        {/* Online Portfolio Platform Card */}
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={port} alt="Online Portfolio Platform" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">An Online Portfolio Platform</h2>
            <p className="text-gray-600 mb-4">
              A digital space where professionals can showcase their skills, projects, and accomplishments.
            </p>
            <a
              href="https://portfohub.netlify.app/"
              className="text-blue-500 hover:underline block mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded-full">JavaScript</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">React</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">Tailwind CSS</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">Netlify</button>
            </div>
          </div>
        </div>

        {/* Event Platform Card */}
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img src={event} alt="Event Platform" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">An Event Platform</h2>
            <p className="text-gray-600 mb-4">
              A platform designed to facilitate the planning, management, and execution of various events.
            </p>
            <a
              href="https://eventppro.netlify.app/"
              className="text-blue-500 hover:underline block mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded-full">JavaScript</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">React</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">Tailwind CSS</button>
              <button className="px-3 py-1 bg-gray-200 rounded-full">Netlify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
