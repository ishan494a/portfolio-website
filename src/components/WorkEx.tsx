"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Zynga",
        role: "Software Engineering Intern",
        duration: "May 2025 - Aug 2025",
        description: "Incoming 2025 Summer Intern.",
    }
];

export default function WorkEx() {
    return (
        <section id="workex" className="min-h-screen flex flex-col items-center justify-center bg-black-900 border-t border-gray-700 pt-10">
            <h2 className="text-4xl font-bold text-white mb-6">Work Experience</h2>
            <motion.div 
                className="w-full max-w-4xl overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div 
                    className="flex space-x-6 cursor-grab"
                    drag="x"
                    dragConstraints={{ left: -600, right: 0 }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index} 
                            className="min-w-[300px] p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-600 text-white"
                        >
                            <h3 className="text-2xl font-semibold">{exp.company}</h3>
                            <p className="text-sm text-gray-400">{exp.duration}</p>
                            <p className="mt-2">{exp.role}</p>
                            <p className="mt-2 text-gray-300">{exp.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
