import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props);
		return (


			<ul id="sidebar-nav">

				<li>
					<Link to={`${this.props.sideprops.match.url}/home`}>
						{/* <Link to={`${this.props.path}/home`}> */}
						<i className="fa fa-object-group fa-lg" aria-hidden="true" />
						<span className="sidebar-title">Dashboard</span>
					</Link>
				</li>
				{/* <li><Link to={`${this.props.path}/lessons`}> */}
				<li><Link to={`${this.props.sideprops.match.url}/lessons`}>
					<i className="fa fa-graduation-cap fa-lg" aria-hidden="true" />
					<span className="sidebar-title">Lessons</span>
					<i className="fa fa-chevron-right" />
				</Link>
				</li>

				<li><i className="fa fa-calendar-check-o fa-lg" aria-hidden="true" /><span className="sidebar-title">Calender</span></li>
				<li><i className="fa fa-wpforms fa-lg" aria-hidden="true" /><span className="sidebar-title">Forms</span></li>
			</ul>


		)
	}
}
export default Sidebar;