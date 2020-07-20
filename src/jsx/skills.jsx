/**
 * @file skills.jsx
 * @author Brett Carney (brettcarney.com)
 * @brief Represents the skills section of the main landing page
 * 
 * @version 1.0
 * @date 2020-02-19
 * 
 */

class Skills extends React.Component
{
    render()
    {
        return (
            <div className="skills-section">
                <div className="gird grid-pad">

                    <div className="row text-center">
                        <div className="col section-header">
                            <h2>Highlighted Skills</h2>
                        </div>
                    </div>

                    <div className="row skills-row">

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card project-card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Languages</h4>
                                    <ul className="col card-text zmdi-hc-ul">
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>C#</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Golang</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>PHP</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Java</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>C++</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Python</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card project-card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Frameworks and Libraries</h4>
                                    <ul className="col zmdi-hc-ul">
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>React</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Jquery</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>ASP.NET</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Gin</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="card project-card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Other Technologies and Skills</h4>
                                    <ul className="col zmdi-hc-ul">
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Git</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Github and TFVC</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Agile Development</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Visual Studio 2019</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>VS Code</li>
                                        <li><i class="zmdi-hc-li zmdi zmdi-dot-circle-alt"></i>Linux Varients</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Skills />, document.getElementById("skills"));