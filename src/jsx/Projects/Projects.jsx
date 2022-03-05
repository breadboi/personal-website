/**
 * @file projects.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Contains two classes that handle the dynamic population of bootstrap
 * cards onto the project section of the main landing page.
 * 
 * @version 1.0
 * @date 2020-02-19
 * 
 */

import React from "react";

export default function Header({ }) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        () => {
            fetch('/api/github')
                .then(resp => resp.json)
                .then(data => setProjects());
        };
    });

    return (
        <div className="projects-section">
            <div className="grid grid-pad">

                <div className="row text-center projects-header">
                    <div className="col-12 section-header">
                        <h2>Recent Work</h2>
                    </div>
                </div>

                <div className="row">
                    {projects.map(function (project, i) {
                        return <Project key={i} project={project} />;
                    })}
                </div>

            </div>
        </div>
    );
}


/**
 * @brief Represents the entire projects section and
 * utilizes the map function to display the most recent
 * projects. The github info is obtained from our api.
 */
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };

        this.serverRequest = this.serverRequest.bind(this);
    }

    componentDidMount() {
        this.serverRequest();
    }
}



/**
 * @brief Represents a single project in the projects section and
 * utilizes the map function to display the most recent
 * projects.
 */
const Project = props => {
    return <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="card project-card shadow">
            <div className="card-body">
                <h4 className="card-title">{this.props.project.Name}</h4>
                <p className="card-text">{this.props.project.Description}</p>
            </div>
            <a href={"https://github.com/" + this.props.project.FullName} target="_blank" className="btn stretched-link">See Source</a>
        </div>
    </div>;
};

ReactDOM.render(<Projects />, document.getElementById("projects"));