import { useState, useEffect} from "react";

function Projects(props) {
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch(props.URL);
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        console.log(getProjectsData)
    });

    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{projects.name}</h1>
                <img src={projects.image} />
                <a href={projects.git}>
                    <button>Github</button>
                </a>
                <a href={projects.live}>
                    <button>live site</button>
                </a>
            </div>
        ))
    };

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;