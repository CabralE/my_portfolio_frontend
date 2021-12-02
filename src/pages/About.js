import { useState, useEffect } from "react";

    

function About(props) {
    
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        console.log(props)
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
        console.log(data)
    };

    useEffect(() => {
        console.log(getAboutData)
    });

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1>Loading...</h1>;
};

export default About;