import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout"

const Index = ({ data }) => (
	<Layout>
		<div className="home-welcome-container">
			<div className="home-welcome-container-text">
				<div className="large-header">Hi I'm Ellodev</div>
				<p>I code little Applications in my Free Time</p>
			</div>
			<div className="home-welcome-container-img">
				<img width="500" src="/welcome.png"></img>
			</div>
		</div>
		<div className="home-project-container">
			{data.projects.map(project => (
				<div id={project.id} href={project.link} className="project-card">
					<h1>{project.name}</h1>
					<p>{project.description}</p>
					<p>{project.url}</p>
				</div>
			))}
		</div>
	</Layout>
);

Index.getInitialProps = async function () {
	const res = await fetch("https://my-json-server.typicode.com/Ellodev/ellodev_api/db");
	const data = await res.json();

	console.log(data)

	return {
		data
	};
};

export default Index;
