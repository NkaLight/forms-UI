import React from "react";
import { Link } from "react-router-dom";

const Home  = (() =>{
    return(
        <div>
            <header>
                Welcome this is where I host all of my UI form components
            </header>
            <main>
                <p>Explore my UI forms</p>
                <Link to="/Forms" className="to-forms-link">Forms</Link>
            </main>
        </div>
    )
})

export default Home