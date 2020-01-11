class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };

        this.serverRequest = this.serverRequest.bind(this);
    }

    serverRequest() {
        $.get("/api/github", res => {
            this.setState({
                projects: res
            });
        });
    }

    componentDidMount() {
        this.serverRequest();
    }

    render() {
        return (
            <div className="projects-section">
                <div className="grid grid-pad">

                    <div className="row text-center projects-header">
                        <div className="col-12 section-header">
                            <h2>Recent Work</h2>
                        </div>
                    </div>

                    <div className="row">
                        {this.state.projects.map(function (project, i) {
                            return <Project key={i} project={project} />;
                        })}
                    </div>

                </div>
            </div>

        );
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card project-card shadow">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.project.FullName}</h4>
                        <p className="card-text">{this.props.project.Description}</p>
                    </div>
                    <a href={"https://github.com/" + this.props.project.FullName} target="_blank" className="btn stretched-link">See Source</a>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Projects />, document.getElementById("projects"));