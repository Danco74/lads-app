import React, { Component } from 'react';


function Sidebar(props) {
	return (
		<div>
			<div id="sidebarBox">
				<ul id="sidebar-nav">
					<li><i className="fa fa-graduation-cap fa-lg" aria-hidden="true" /><span className="sidebar-title">Lessons</span><i className="fa fa-chevron-right" /></li>
					<li><i className="fa fa-object-group fa-lg" aria-hidden="true" /><span className="sidebar-title">Dashboard</span></li>
					<li><i className="fa fa-calendar-check-o fa-lg" aria-hidden="true" /><span className="sidebar-title">Calender</span></li>
					<li><i className="fa fa-wpforms fa-lg" aria-hidden="true" /><span className="sidebar-title">Forms</span></li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar;