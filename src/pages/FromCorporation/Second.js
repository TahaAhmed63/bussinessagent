import React from 'react';
import "./Second.css"

const Second = () => {
    return (
        <>
            <div class="bg-image">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">My Website</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col">
                            <h1>Welcome to My Bootstrap Website!</h1>
                            <p>This is a single-page application built with Bootstrap.</p>
                            <button class="btn btn-primary">Click Me</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Second