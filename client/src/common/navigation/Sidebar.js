import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (


			<ul id="sidebar-nav">

				<li>
					<Link className="link" to={`${this.props.sideprops.match.url}/home`}>

						<i className="fa fa-object-group fa-lg" aria-hidden="true" />
						<span className="sidebar-title">Dashboard</span>
					</Link>
				</li>

				<li>
					<Link className="link" to={`${this.props.sideprops.match.url}/lessons`}>
						<i className="fa fa-graduation-cap fa-lg" aria-hidden="true" />
						<span className="sidebar-title">Lessons</span>
						<i className="fa fa-chevron-right" />
					</Link>
				</li>

				<li>
					<Link className="link" to={`${this.props.sideprops.match.url}/lesson`}>
						<i className="fa fa-calendar-check-o fa-lg" aria-hidden="true" />
						<span className="sidebar-title">Calender</span>
					</Link>
				</li>
				<li><i className="fa fa-wpforms fa-lg" aria-hidden="true" /><span className="sidebar-title">Forms</span></li>
			</ul>


		)
	}
}
export default Sidebar;