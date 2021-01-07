import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="container fof">
        <div className="fof-main">
            <h1>Error 404</h1>
            <h4>UH OH! You're lost.</h4>
            <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
            <Link to="/"> Go Home </Link>
        </div>
    </div>

);

export default NotFound;