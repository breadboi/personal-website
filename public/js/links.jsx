class Links extends React.Component
{
    render()
    {
        return (
            <div className="links-section">
                <div className="gird grid-pad">

                    <div class="link-container text-center row">

                        <div class="col">
                            <a href="https://github.com/breadboi" target="_blank" class="links-section-a" onDragStart={(e) => { e.preventDefault() }}><i class="link-section-icon shadow-lg zmdi zmdi-github-box" onDragStart={(e) => { e.preventDefault() }}></i></a>
                        </div>

                        <div class="col">
                            <a href="mailto:bcarney1@niu.edu" target="_blank" class="links-section-a" onDragStart={(e) => { e.preventDefault() }}><i class="link-section-icon shadow-lg zmdi zmdi-email"></i></a>
                        </div>

                        <div class="col">
                            <a href="https://www.linkedin.com/" target="_blank" class="links-section-a" onDragStart={(e) => { e.preventDefault() }}><i class="link-section-icon shadow-lg zmdi zmdi-linkedin-box"></i></a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Links />, document.getElementById("links"));