interface Project {
    title: string;
    description: string;
    link: string;
}

const projectList: Project[] = [
    {
        title: "Quote Workspace (Salesforce)",
        description: "Tool to manage Quotes and Opportunities in a single view.",
        link: "https://github.com/yourusername/quote-workspace"
    },
    {
        title: "Chrome Extension: Week Tracker",
        description: "Displays current week number and day info on your browser.",
        link: "https://github.com/yourusername/week-tracker"
    }
];

const Projects = () => {
    return (
        <section className="p-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul>
                {projectList.map((proj) => (
                    <li key={proj.title} className="mb-4">
                        <h3 className="text-xl font-semibold">{proj.title}</h3>
                        <p>{proj.description}</p>
                        <a className="text-blue-600 underline" href={proj.link} target="_blank" rel="noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
