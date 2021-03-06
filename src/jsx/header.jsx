/**
 * @file header.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Header for the main landing page
 * @version 1.0
 * @date 2020-02-19
 * 
 */

class Header extends React.Component {
  render() {
    return (
      <div className="grid grid-pad">

        <div className="row text-center">
          <img src="assets/ProfPhoto300x300.png" alt="Avatar" className="circular shadow-lg" />
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