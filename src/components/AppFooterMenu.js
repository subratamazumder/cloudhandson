import React from 'react';
class AppFooterMenu extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link disabled" href="">About Us</a>
                    <a className="nav-item nav-link disabled" href="">Trainigs</a>
                    <a className="nav-item nav-link disabled" href="">Blogs</a>
                    <a className="nav-item nav-link disabled" href="">Demos</a>
                </div>
            </div>
        );
    }
}
export default AppFooterMenu;