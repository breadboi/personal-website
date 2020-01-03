class HelloWorld extends React.Component
{
  render()
  {
    return (
      <div className="container">
        <div className="row text-center">
          <img src="assets/me.png" alt="Avatar" className="circular" />
        </div>

        <div className="row text-center">
          <div className="col">
            <h1>Brett Carney</h1>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <h2>Software Developer</h2>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <a href="assets/resume-samples.pdf" class="btn btn-lg" title="View Resumé">
              <i class="zmdi zmdi-file"></i> View CV
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));