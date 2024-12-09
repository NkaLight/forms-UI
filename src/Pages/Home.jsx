import React from "react";
import { Link } from "react-router-dom";

const Home  = (() =>{
    return(
        <>
            <header>
                Welcome this is where I host all of my UI form components
            </header>
            <main>
                <p>Explore my UI forms</p>
                <Link to="/Forms" className="to-forms-link">Forms</Link>
            </main>
        </>
    )
})

export default Home