import fetch from "isomorphic-unfetch";

import Layout from "/layout";

const Recepie = ({ recepie }) => {
    return (
        <Layout>
            <h1>{posts.title}</h1>
            <p>{posts.date}</p>
            <h2>Steps</h2>
            <lu>
                {recepie.instructions.map(instruction => (
                    <div>
                        <li>Step {instruction.nr}</li>
                        <ul>
                            <li>{instruction.step}</li>
                        </ul>
                    </div>
                ))}
            </lu>
            
        </Layout>
    )
}

Recepie.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://my-json-server.typicode.com/eLLosounds/eat4ever-api/recepies/${id}`);
    const recepie = await res.json();

    return { recepie };
};

export default Recepie;