import React from 'react';
import logo from '../images/aws-handson-logo_final2.png';
import AppHeaderMenu from './AppHeaderMenu';
class AppHeader extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="">
                        <img src={logo} width="75" height="75" alt="Cloud Hands On" /><span class="small">Bring Clarity to Comprehend</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <AppHeaderMenu />
                </nav>
            </div>
        );
    }
}
export default AppHeader;