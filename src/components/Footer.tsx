import { FaLinkedin, FaEnvelope, FaGithub, FaFile } from 'react-icons/fa';

export default function Footer() {
  return (
    <section id="footer" className="min-h-[13vh] flex flex-col items-center border-t border-gray-700 justify-center bg-black text-white">
      <div className="flex space-x-6 text-2xl">
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
        <a
          href="https://drive.google.com/file/d/10xn7I_P9ZYunY-Gir148wi9QqMR0AHnK/view?usp=sharing"
          className="hover:text-green-400 transition-colors duration-300"
        >
        <FaFile />
        </a>
      </div>
      <p className='text-xs py-2'>&copy; 2025 Ishan Jain. All Rights Reserved.</p>
    </section>
  );
}
