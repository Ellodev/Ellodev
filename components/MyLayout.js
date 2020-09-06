import Header from './Header';
import Webhead from './webhead'

const Layout = props => {
	return (
		<div>
			<Webhead />
			<Header />
			<div className="layout">
				{props.children}
				<div className="legal">
					<a href="legal">Legal/Impressum</a>
					<p>Jeremy Nelson All Rights Reserved</p>
				</div>
			</div>
		</div>
	)
}

export default Layout;