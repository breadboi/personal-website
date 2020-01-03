class HelloWorld extends React.Component {
    render() {
      return (
        <div className="container">
          <div className="row text-center">
            <img src="assets/me.jpg" alt="Avatar" className="circular"/> 
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<HelloWorld />, document.getElementById("app"));