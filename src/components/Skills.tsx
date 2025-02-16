import { motion } from "framer-motion";
import style from "../assets/styles/_skills.module.scss";
import { TechStackType } from "../types";
import { SkillsCard } from "./skills/SkillsCard";

export const Skills = () => {
  const techStack: TechStackType[] = [
    {
      title: "React JS",
      img_url: "/tech-stack/reactjs.png",
      details: [
        "React Lifecycle Methods",
        "Hooks in React",
        "React Router",
        "React Context API",
        "React Redux",
      ],
    },
    {
      title: "Vite",
      img_url: "/tech-stack/vite.png",
      details: [
        "Adding CSS and Assets",
        "Installing and Using Vite with React",
        "Building and Deploying a Vite App",
      ],
    },
    {
      title: "TypeScript",
      img_url: "/tech-stack/typescript.png",
      details: [
        "Installing TypeScript",
        "Basic TypeScript Features",
        "Using TypeScript with React (Vite + TypeScript)",
        "RCompiling TypeScript to JavaScript",
      ],
    },
    {
      title: "Tailwind",
      img_url: "/tech-stack/tailwind.png",
      details: [
        "Installing Tailwind CSS in a React (Vite) Project",
        "Basic Tailwind Usage",
        "Responsive Design in Tailwind",
        "Dark Mode in Tailwind",
        "RAnimations & Transitions in Tailwind",
      ],
    },
    {
      title: "Sass",
      img_url: "/tech-stack/sass.png",
      details: [
        "Installing Sass in a Project",
        "Basic Sass Features",
        "RMixins (Reusable Code with Parameters)",
        "Extend (Inheritance & Reusability)",
        "Partials & Imports (Modular CSS)",
      ],
    },
    {
      title: "JQuery",
      img_url: "/tech-stack/jquery.png",
      details: [
        "Installing jQuery",
        "Basic jQuery Features",
        "Handling Events",
        "Animations and Effects",
        "AJAX Requests (Fetch Data Without Reloading)",
        "Adding & Removing Elements",
      ],
    },
    {
      title: "JavaScript",
      img_url: "/tech-stack/js.png",
      details: [
        "Basic JavaScript Features",
        "Functions & Arrow Functions",
        "Conditional Statements",
        "Loops (for, while, forEach, map)",
        "Objects & JSON (JavaScript Object Notation)",
        "ES6+ Features (Modern JavaScript)",
        "Asynchronous JavaScript (Promises & Async/Await)",
        "DOM Manipulation (Interacting with HTML & CSS)",
      ],
    },
    {
      title: "Bootstrap",
      img_url: "/tech-stack/bootstrap.png",
      details: [
        "Installing Bootstrap",
        "Bootstrap Grid System (Responsive Layouts)",
        "Bootstrap Components",
        "Bootstrap Forms",
        "Bootstrap Utilities (Quick Styling Classes)",
      ],
    },
    {
      title: "CSS",
      img_url: "/tech-stack/css.png",
      details: [
        "Ways to Apply CSS",
        "CSS Selectors",
        "CSS Box Model (Spacing & Layouts)",
        "CSS Positioning & Layouts",
        "Flexbox (For Responsive Layouts)",
        "Responsive Design (Media Queries)",
      ],
    },
    {
      title: "Laravel",
      img_url: "/tech-stack/laravel.png",
      details: [
        "Installing Laravel",
        "Routing in Laravel",
        "Laravel Controllers",
        "Laravel Models & Database",
        "Database Queries",
        "Blade Templating (Views in Laravel)",
      ],
    },
    {
      title: "PHP",
      img_url: "/tech-stack/php.png",
      details: [
        "PHP Control Structures",
        "PHP Functions",
        "Working with Forms in PHP",
        "PHP & MySQL (Database Interaction)",
        "PHP Sessions & Cookies",
        "PHP Security Best Practices",
      ],
    },
    {
      title: "MySQL",
      img_url: "/tech-stack/mysql.png",
      details: [
        "Installing MySQL",
        "MySQL Basic Commands",
        "MySQL Tables & Data Types",
        "Inserting Data in MySQL",
        "Retrieving Data (SELECT Queries)",
        "MySQL Joins (Combining Data from Multiple Tables)",
        "MySQL User Management & Security",
      ],
    },
    {
      title: "WordPress",
      img_url: "/tech-stack/wordpress.png",
      details: [
        "WordPress Installation Methods",
        "WordPress Dashboard Overview",
        "WordPress Plugins (Extend Functionality)",
        "Creating Blog Posts & Pages",
        "WordPress SEO Optimization",
        "WordPress eCommerce (WooCommerce)",
        "WordPress Security Best Practices",
        "WordPress Performance Optimization",
      ],
    },
    {
      title: "Elementor",
      img_url: "/tech-stack/elementor.png",
      details: [
        "Installing Elementor",
        "Install Elementor Pro (Premium Features)",
        "Elementor Key Features",
        "Elementor Speed & Performance Optimization",
      ],
    },
    {
      title: "Photoshop",
      img_url: "/tech-stack/photoshop.png",
      details: [
        "Essential Photoshop Tools & Features",
        "How to Remove a Background in Photoshop",
        "Selection & Cropping Tools",
        "Text & Typography",
        "Filters & Effects",
      ],
    },
    {
      title: "Webflow",
      img_url: "/tech-stack/webflow.png",
      details: [
        "Responsive Design Controls",
        "Webflow Interactions & Animations",
        "Webflow SEO & Performance",
        "Webflow Code Export",
      ],
    },
    {
      title: "Figma",
      img_url: "/tech-stack/figma.png",
      details: ["Figma Core Features", "Components & Variants"],
    },
    {
      title: "Microsoft Office",
      img_url: "/tech-stack/microsoft-office.png",
      details: [
        "Microsoft Word (Word Processing)",
        "Microsoft Excel (Spreadsheets & Data Analysis)",
        "Microsoft PowerPoint (Presentations & Slideshows)",
        "Microsoft Teams (Collaboration & Communication)",
        "Microsoft Access (Database Management)",
      ],
    },
  ];

  return (
    <div className="background">
      <div className={`content-width ${style["content-width"]}`}>
        <h2 className="text">Tech Stack</h2>
        <div className={style["content"]}>
          {techStack.map((tech: TechStackType, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SkillsCard tech={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
