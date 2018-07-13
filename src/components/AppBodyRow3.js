import React from 'react';
import logo from '../images/aws-handson-logo_final2.png';
class AppBodyRow2 extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <img src={logo} className="img-thumbnail rounded-circle w-25 h-25" width="50" height="50" alt="Cloud Hands On" />
                </div>
                <div className="text-center">
                    <img src={logo} className="img-thumbnail rounded-circle w-25 h-25" width="50" height="50" alt="Cloud Hands On" />
                </div>
                <div className="text-center">
                    <img src={logo} className="img-thumbnail rounded-circle w-25 h-25" width="50" height="50" alt="Cloud Hands On" />
                </div>
            </div>
        );
    }
}
export default AppBodyRow2