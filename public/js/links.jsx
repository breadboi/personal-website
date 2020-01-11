class Links extends React.Component
{
    render()
    {
        return (
            <div className="links-section">
                <div className="gird grid-pad">

                    <div class="link-container text-center row">
                        <a href="https://github.com/breadboi" target="_blank" class="col links-section-a" onDragStart={(e) => { e.preventDefault() }}><i class="link-section-icon shadow-lg zmdi zmdi-github-box" onDragStart={(e) => { e.preventDefault() }}></i></a>

                        <a href="https://github.com/breadboi" target="_blank" class="col links-section-a" onDragStart={(e) => { e.preventDefault() }}><i class="link-section-icon shadow-lg zmdi zmdi-email"></i></a>

                        <a href="https://github.com/breadboi" target="_blank" class="col links-section-a" onDragStart={(e) => { e.preventDefault() }}><i class="link-section-icon shadow-lg zmdi zmdi-linkedin-box"></i></a>
                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Links />, document.getElementById("links"));