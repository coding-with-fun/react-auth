import React from "react";
import "./App.css";
import {
    googleProvider,
    githubProvider,
    facebookProvider,
} from "./config/authMethods";
import socialMediaAuth from "./service/auth";

const App = () => {
    const handleAuth = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };

    return (
        <div>
            <button onClick={() => handleAuth(facebookProvider)}>
                Facebook
            </button>
            <button onClick={() => handleAuth(googleProvider)}>Google</button>
            <button onClick={() => handleAuth(githubProvider)}>Github</button>
        </div>
    );
};

export default App;
