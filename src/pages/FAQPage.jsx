import React from "react";
import FormDrop from "../components/forms/formDropdow";

const faqPage = () => {
    return (
        <div>
            <h1>FAQ Page</h1>
            <ul>
                <li>
                    <h2>What is your name?</h2>
                    <p>My name is John Doe.</p>
                </li>
                <li>
                    <h2>What is your favorite color?</h2>
                    <p>My favorite color is blue.</p>
                </li>
            </ul>
            <FormDrop/>
        </div>
    );
}

export default faqPage;