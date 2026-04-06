import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { TerminalSquare } from 'lucide-react';

// skill-icons CDN: https://skillicons.dev/icons?i=<id>
const skills = [
    { label: "C++",            icon: "https://skillicons.dev/icons?i=cpp" },
    { label: "Python",         icon: "https://skillicons.dev/icons?i=py" },
    { label: "JavaScript",     icon: "https://skillicons.dev/icons?i=js" },
    { label: "TypeScript",     icon: "https://skillicons.dev/icons?i=ts" },
    { label: "C",              icon: "https://skillicons.dev/icons?i=c" },
    { label: "FastAPI",        icon: "https://skillicons.dev/icons?i=fastapi" },
    { label: "Node.js",        icon: "https://skillicons.dev/icons?i=nodejs" },
    { label: "Express",        icon: "https://skillicons.dev/icons?i=express" },
    { label: "React",          icon: "https://skillicons.dev/icons?i=react" },
    { label: "Tailwind CSS",   icon: "https://skillicons.dev/icons?i=tailwind" },
    { label: "PostgreSQL",     icon: "https://skillicons.dev/icons?i=postgres" },
    { label: "MongoDB",        icon: "https://skillicons.dev/icons?i=mongodb" },
    { label: "AWS",            icon: "https://skillicons.dev/icons?i=aws" },
    { label: "Docker",         icon: "https://skillicons.dev/icons?i=docker" },
    { label: "Git",            icon: "https://skillicons.dev/icons?i=git" },
    { label: "GitHub",         icon: "https://skillicons.dev/icons?i=github" },
    { label: "Figma",          icon: "https://skillicons.dev/icons?i=figma" },
    { label: "LangChain",      icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { label: "HTML",           icon: "https://skillicons.dev/icons?i=html" },
    { label: "CSS",            icon: "https://skillicons.dev/icons?i=css" },
];

// Split into two rows for the two marquee tracks
const row1 = skills.slice(0, Math.ceil(skills.length / 2));
const row2 = skills.slice(Math.ceil(skills.length / 2));

const SkillCard = ({ label, icon }) => (
    <div className="flex flex-col items-center gap-1.5 mx-3 group cursor-default">
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center p-2.5 group-hover:border-purple-400 dark:group-hover:border-purple-500 group-hover:shadow-purple-100 dark:group-hover:shadow-purple-900/30 group-hover:shadow-md transition-all duration-200 group-hover:-translate-y-1">
            <img
                src={icon}
                alt={label}
                className="w-full h-full object-contain"
                loading="lazy"
            />
        </div>
        <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-200 whitespace-nowrap">
            {label}
        </span>
    </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 35 }) => {
    // Duplicate items to create seamless loop
    const doubled = [...items, ...items];
    const animProps = direction === 'left'
        ? { x: ['0%', '-50%'] }
        : { x: ['-50%', '0%'] };

    return (
        <div className="relative w-full overflow-hidden py-2">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10" />

            <motion.div
                className="flex"
                animate={animProps}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: speed,
                    ease: 'linear',
                }}
                style={{ willChange: 'transform' }}
            >
                {doubled.map((skill, idx) => (
                    <SkillCard key={`${skill.label}-${idx}`} {...skill} />
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="w-full flex flex-col mb-12"
        >
            <div className="flex items-center gap-3 mb-6">
                <TerminalSquare className="text-gray-800 dark:text-gray-200" size={28} />
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 dark:text-white">
                    Technical Skills
                </h2>
            </div>

            <div className="flex flex-col gap-4 w-full -mx-4 px-0">
                <MarqueeRow items={row1} direction="left"  speed={40} />
                <MarqueeRow items={row2} direction="right" speed={35} />
            </div>
        </motion.section>
    );
};

export default Skills;