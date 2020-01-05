class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            projects: []
        };

        this.serverRequest = this.serverRequest.bind(this);
    }

    serverRequest()
    {
        $.get("http://localhost:8080/api/github", res =>
        {
            this.setState({
                projects: res
            });
        });
    }

    componentDidMount()
    {
        this.serverRequest();
    }

    render()
    {
        return (
            <div className="container">
                <br />
                <h2>Projects</h2>
                <p>Here are my most recent projects.</p>
                <div className="row">
                    <div className="grid grid-pad">
                        {this.state.projects.map(function (project, i)
                        {
                            return <Project key={i} project={project} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

class Project extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="col">
                <div className="card project-card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.project.FullName}</h4>
                        <p className="card-text">{this.props.project.Description}</p>
                        <a href={"https://github.com/" + this.props.project.FullName} className="btn btn-primary">See Source</a>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Projects />, document.getElementById("projects"));