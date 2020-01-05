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
                    <div className="container">
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
            <div className="col-xs-4">
                <div className="panel panel-default">
                    <div className="panel-heading">#{this.props.project.FullName}</div>
                    <div className="panel-body">
                        {this.props.project.Description}
                    </div>
                    <div className="panel-footer">
                        {this.props.project.StargazersCount} Stars &nbsp;
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Projects />, document.getElementById("projects"));