import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";

const Index = ({ data }) => (
	<Layout>
		<div className="container">
			<div className="home-welcome-container">
				<div className="home-welcome-container-text">
					<div className="large-header">Hi I'm Ellodev</div>
					<p>I code little Applications in my Free Time</p>
				</div>
				<div className="home-welcome-container-img">
					<img width="500" src="/welcome.png"></img>
				</div>
			</div>
			<div className="home-project-text"></div>
			<h1>Projects</h1>
			<div className="home-project-container">
				{data.projects.map((project) => (
					<a href={project.link} id={project.id}>
						<div id={project.id} href={project.link} className="project-card">
							<h1>{project.name}</h1>
							<p>{project.description}</p>
							<p className="url">{project.url}</p>
						</div>
					</a>
				))}
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h1>About</h1>
			<div className="home-info-text-container">
				<p>Hello! My Name is Ellodev and I code little Web Applications. 
					<br></br>
					I do projects alone and with my Friend Sl0wly edits.
					<br></br>
					I also have a Youtube Channel. My Name is Ellosounds on the Yt Channel.
					<br></br>
					I have Videos of me playing Video Games and i also have Recipies.
				</p>
				<img className="info-img" width="600" src="/info.png"></img>
			</div>
			<div className="Blog">
				<h1>Blog</h1>
				<div className="home-post-container">
				{data.posts.map((posts) => (
					<a id={posts.id}>
						<div id={posts.id} href={posts.link} className="post-card">
							<h1>{posts.title}</h1>
							<p>{posts.description}</p>
							<p className="url">{posts.url}</p>
						</div>
					</a>
				))}
			</div>
			</div>
		</div>
	</Layout>
);

Index.getInitialProps = async function () {
	const res = await fetch(
		"https://my-json-server.typicode.com/Ellodev/ellodev_api/db"
	);
	const data = await res.json();

	return {
		data,
	};
};

export default Index;
