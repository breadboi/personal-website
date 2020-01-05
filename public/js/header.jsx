class Header extends React.Component {
  render() {
    return (
      <div className="grid grid-pad">

        <div className="row text-center">
          <img src="assets/ProfPhoto300x300.png" alt="Avatar" className="circular" />
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
            <a href="assets/Resume_BrettCarney.PDF" target="_blank" class="btn btn-lg" title="View Resumé">
              <i class="zmdi zmdi-file"></i> Resumé
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));