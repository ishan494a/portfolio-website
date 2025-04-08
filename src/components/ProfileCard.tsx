import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Importing LinkedIn and Gmail icons

export default function ProfileCard() {
    return (
        <div className="w-96 px-6 py-6 text-center rounded-lg lg:mt-0 xl:px-10 border-2 border-gray-700"
        style={{ backgroundColor: 'rgb(15, 15, 15)', color: '#ffffff' }}>
            <div className="space-y-4 xl:space-y-6">
                <img className="mx-auto rounded-full h-36 w-36" src="https://media.licdn.com/dms/image/v2/D4E03AQF-U8bSpJYl7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728510359001?e=1749081600&v=beta&t=Z1RAzL7--BCQXaYbGtBDx7XlD0EKJrfNSZBHXWElyy8" alt="author avatar" />
                <div className="space-y-2">
                    <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                        <h3 className="text-white">Ishan Jain</h3>
                        <p className="text-indigo-300">Software Engineer</p>
                        <div className="flex justify-center mt-5 space-x-10">
                            <a
                                href="https://www.linkedin.com/in/ishanjain2000/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:ishanjain2000@gmail.com"
                                className="hover:text-red-500 transition-colors duration-300"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="https://github.com/ishan494a"
                                className="hover:text-violet-400 transition-colors duration-300"
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <button
                            type="button"
                            className="text-xl bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                            onClick={() => window.open('https://drive.google.com/file/d/10xn7I_P9ZYunY-Gir148wi9QqMR0AHnK/view?usp=sharing', '_blank')}
                        >
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
