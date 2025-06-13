import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Importing LinkedIn and Gmail icons

export default function ProfileCard() {
    return (
        <div className="w-96 px-6 py-6 text-center rounded-lg lg:mt-0 xl:px-10 border-2 border-gray-700 transition-transform transform hover:scale-101"
        style={{ backgroundColor: 'rgb(15, 15, 15)', color: '#ffffff' }}>
            <div className="space-y-4 xl:space-y-6">
                <img className="mx-auto rounded-full h-36 w-36" src="/images/ProfilePic.jpeg" alt="author avatar" />
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
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
