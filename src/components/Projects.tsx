import ProjectCard from "./ProjectCard";
export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center bg-black-900 border-t border-gray-700 pt-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-lg">Here are some of the projects I have worked on...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ProjectCard
              title="Workout Tracker"
              description="A React Native workout tracker that helps users log workouts and track progress."
              imageUrl="https://placehold.co/600x400"
              githubUrl="https://github.com/ishan494a/workout-tracker"
              liveUrl="https://www.youtube.com/shorts/fvI57J8qrq8"
              deployedUrl="https://workout-tracker-frontend.vercel.app/"
            />
            <ProjectCard
              title="Healthcare App"
              description="A mobile-based healthcare app designed to streamline patient registration and data collection during healthcare camps."
              imageUrl="https://placehold.co/600x400"
              githubUrl="https://github.com/ShaimaaAliECE/group-project-se3350-group18"
              liveUrl=""
              deployedUrl="http://34.172.112.160:8081/"
            />
            <ProjectCard
              title="Logistics Web App"
              description="A web application for logistics management, built with React and Node.js."
              imageUrl="https://placehold.co/600x400"
              githubUrl="https://github.com/ishan494a/LogisticsWebApp"
              liveUrl=""
              deployedUrl="https://www.gmscs.ca"
            />
            <ProjectCard
              title="Stranded - 3D Game"
              description="A 3D game developed using Unity, where players navigate through a mysterious island."
              imageUrl="https://placehold.co/600x400"
              githubUrl=""
              liveUrl="https://www.youtube.com/watch?v=3VmpwZWpmxg"
              deployedUrl=""
            />
            <ProjectCard
              title="SkillSync AI - Resume Review"
              description="An GPT powered resume review tool that provides feedback and suggestions for improvement."
              imageUrl="https://placehold.co/600x400"
              githubUrl="http://github.com/ishan494a/skillsyncAI"
              liveUrl=""
              deployedUrl=""
            />
            <ProjectCard
              title="Whack-a-Mole"
              description="A fun and interactive Whack-a-Mole game built with Java and JavaFX using software design principles."
              imageUrl="https://placehold.co/600x400"
              githubUrl="https://github.com/ishan494a/Whack-A-Mole"
              liveUrl=""
              deployedUrl=""
            />
            </div>
        </div>
      </section>
    );
  }