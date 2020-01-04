class Skills extends React.Component
{
    render()
    {
        return (
            <div className="skills-section">
                <div className="gird grid-pad">

                    <div className="row text-center">
                        <div className="col">
                            <h3>Highlighted Skills</h3>
                        </div>
                    </div>

                    <div className="row skills-row">
                        <ul className="col zmdi-hc-ul">
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>C#</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Golang</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>PHP</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Java</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Python</li>
                        </ul>

                        <ul className="col zmdi-hc-ul">
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>React</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Jquery</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>ASP.NET</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Gin</li>
                        </ul>

                        <ul className="col zmdi-hc-ul">
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Linux</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Windows</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Visual Studio/Code</li>
                            <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Agile Development</li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Skills />, document.getElementById("skills"));