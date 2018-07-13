import React from 'react';
class AppHeaderMenu extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Trainings
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">IAM</a>
                            <a className="dropdown-item" href="#">EC2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Reactive Java</a>
                            <a className="dropdown-item" href="#">Reactive Spring</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default AppHeaderMenu;