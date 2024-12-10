import React from "react";
import { Link } from "react-router-dom";
 const FormsPage = (() =>{
    return(
        <>
            <header className="form-header">
                <h1>Forms</h1>
            </header>
            <main className="form-main-content">
                <Link className="form-container" to="/forms/1">
                    <form action="POST">
                        <label for="name">Name</label>
                        <input type="text" name="name" disabled/>
                        <label for="exa-1">Example</label>
                        <input type="text" name="exa-1" disabled/>
                        <label for="exa-2">Example</label>
                        <input type="text" name="exa-2" disabled/>
                        <div>
                            <label htmlFor="exa-3">Example</label>
                            <input type="checkbox" name="exa-3" id="exa-3" disabled/>
                        </div>
                    </form>
                </Link>     
                <div className="form-container">
                    <form action="POST">
                        <label for="name">Name</label>
                        <input type="text" name="name" disabled/>
                        <label for="exa-1">Example</label>
                        <input type="text" name="exa-1" disabled/>
                        <label for="exa-2">Example</label>
                        <input type="text" name="exa-2" disabled/>
                        <div>
                            <label htmlFor="exa-3">Example</label>
                            <input type="checkbox" name="exa-3" id="exa-3" disabled/>
                        </div>
                    </form>
                </div> 
                <div className="form-container">
                    <form action="POST">
                        <label for="name">Name</label>
                        <input type="text" name="name" disabled/>
                        <label for="exa-1">Example</label>
                        <input type="text" name="exa-1" disabled/>
                        <label for="exa-2">Example</label>
                        <input type="text" name="exa-2" disabled/>
                        <div>
                            <label htmlFor="exa-3">Example</label>
                            <input type="checkbox" name="exa-3" id="exa-3" disabled/>
                        </div>
                    </form>
                </div> 
                <div className="form-container">
                    <form action="POST">
                        <label for="name">Name</label>
                        <input type="text" name="name" disabled/>
                        <label for="exa-1">Example</label>
                        <input type="text" name="exa-1" disabled/>
                        <label for="exa-2">Example</label>
                        <input type="email" name="exa-2" disabled/>
                        <div>
                            <label htmlFor="exa-3">Example</label>
                            <input type="checkbox" name="exa-3" id="exa-3" disabled/>
                        </div>
                        <div>
                            <label htmlFor="exa-3">Example</label>
                            <input type="datetime-local" name="exa-3" id="exa-3" disabled/>
                        </div>
                    </form>
                </div> 
            </main>
        </>
    )
})

export default FormsPage