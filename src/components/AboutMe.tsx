import { FaJava, FaPython, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaAws, FaGoogle } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiJenkins, SiSpringboot, SiExpress } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

export default function AboutMe() {
    /* eslint-disable react/no-unescaped-entities */
    const aboutText = `Hey there! 👋 I love to code 💻—whether it's solving problems or making cool stuff, I'm all in! Sometimes things break, and I yell at my computer (don't judge 😅), but I always figure it out. Learning and coding every day! 🚀`;
    /* eslint-enable react/no-unescaped-entities */
    return ( 
        <section id="about" className="min-h-screen flex items-center justify-center bg-black-900 border-t border-gray-700 pt-10">
        <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-white mb-6">{aboutText}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
            {/* Programming Languages */}
            <div className="flex flex-col items-center">
                <FaHtml5 size={40} style={{ color: '#E34F26' }} />
                <span className="text-white mt-2">HTML</span>
            </div>
            <div className="flex flex-col items-center">
                <FaCss3Alt size={40} style={{ color: '#1572B6' }} />
                <span className="text-white mt-2">CSS</span>
            </div>
            <div className="flex flex-col items-center">
                <FaJava size={40} style={{ color: '#007396' }} />
                <span className="text-white mt-2">Java</span>
            </div>
            <div className="flex flex-col items-center">
                <FaPython size={40} style={{ color: '#306998' }} />
                <span className="text-white mt-2">Python</span>
            </div>
            <div className="flex flex-col items-center">
                <DiJavascript1 size={40} style={{ color: '#F7DF1E' }} />
                <span className="text-white mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                    alt="TypeScript" 
                    className="w-10 h-10 bg-gray-200 rounded-full p-1" 
                />
                <span className="text-white mt-2">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg" 
                    alt="C#" 
                    className="w-10 h-10 bg-gray-200 rounded-full p-1" 
                />
                <span className="text-white mt-2">C#</span>
            </div>
            <div className="flex flex-col items-center">
                <FaNodeJs size={40} style={{ color: '#68A063' }} />
                <span className="text-white mt-2">Node.js</span>
            </div>

            {/* Frameworks & Libraries */}
            <div className="flex flex-col items-center">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/Unity_Black_icon.svg" 
                alt="Unity" 
                className="w-10 h-10 bg-gray-200 rounded-full p-1" 
                />
                <span className="text-white mt-2">Unity</span>
            </div>
            <div className="flex flex-col items-center">
                <SiSpringboot size={40} style={{ color: '#6DB33F' }} />
                <span className="text-white mt-2">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center">
                <SiExpress size={40} style={{ color: '#ffffff' }} />
                <span className="text-white mt-2">Express</span>
            </div>
            <div className="flex flex-col items-center">
                <FaReact size={40} style={{ color: '#61DBFB' }} />
                <span className="text-white mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
                <FaReact size={40} style={{ color: '#61DBFB' }} />
                <span className="text-white mt-2">React Native</span>
            </div>
            <div className="flex flex-col items-center">
                <SiPostgresql size={40} style={{ color: '#336791' }} />
                <span className="text-white mt-2">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
                <SiMongodb size={40} style={{ color: '#47A248' }} />
                <span className="text-white mt-2">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
                <SiRedis size={40} style={{ color: '#DC382D' }} />
                <span className="text-white mt-2">Redis</span>
            </div>
            <div className="flex flex-col items-center">
                <SiGraphql size={40} style={{ color: '#E10098' }} />
                <span className="text-white mt-2">GraphQL</span>
            </div>
            <div className="flex flex-col items-center">
                <FaDocker size={40} style={{ color: '#2496ED' }} />
                <span className="text-white mt-2">Docker</span>
            </div>
            <div className="flex flex-col items-center">
                <FaGitAlt size={40} style={{ color: '#F05032' }} />
                <span className="text-white mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
                <SiJenkins size={40} style={{ color: '#D24939' }} />
                <span className="text-white mt-2">Jenkins</span>
            </div>
            <div className="flex flex-col items-center">
                <FaAws size={40} style={{ color: '#FF9900' }} />
                <span className="text-white mt-2">AWS</span>
            </div>
            <div className="flex flex-col items-center">
                <FaGoogle size={40} style={{ color: '#4285F4' }} />
                <span className="text-white mt-2">GCP</span>
            </div>
            </div>
        </div>
        </section>
    );
}
