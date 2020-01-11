class Links extends React.Component
{
    render()
    {
        return (
            <div className="links-section">
                <div className="gird grid-pad">

                    <div class="link-container text-center row">
                        <a href="https://github.com/breadboi" target="_blank" class="col"><i class="link-section-icon zmdi zmdi-github-box"></i></a>

                        <a href="https://github.com/breadboi" target="_blank" class="col"><i class="link-section-icon zmdi zmdi-email"></i></a>

                        <a href="https://github.com/breadboi" target="_blank" class="col"><i class="link-section-icon zmdi zmdi-linkedin-box"></i></a>
                    </div>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Links />, document.getElementById("links"));