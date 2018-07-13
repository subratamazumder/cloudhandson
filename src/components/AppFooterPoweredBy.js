import React from 'react';
import logoreact from '../images/react.svg';
import logoaws from '../images/aws/aws-logo.svg';
import logobootstrap from '../images/bootstrap-4.svg';
import logonodejs from '../images/Node.js_logo.svg';
class AppFooterPoweredBy extends React.Component {
    render() {
        return (
            <div>
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-4 text-center text-md-center ">
                    <p><strong>Powered By</strong></p>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2 text-center">
                <a className="" href="https://aws.amazon.com/"><img src={logoaws} width="40" height="40" alt="AWS" /></a>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2 text-center">
                <a className="" href="https://reactjs.org/"><img src={logoreact} width="40" height="40" alt="React JS" /></a>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2 text-center">
                <a className="" href="https://nodejs.org/en/"><img src={logonodejs} width="40" height="40" alt="Node JS" /></a>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-2 text-center">
                <a className="" href="https://getbootstrap.com/"><img src={logobootstrap} width="40" height="40" alt="Bootstrap" /></a>
                </div>
            </div>
            <div className="row d-flex align-items-center">
                <div className="text-center col-sm-12 col-md-12 col-lg-12">
                    <p>© 2018 Copyright: <a href="https://cloudhandson.com"><strong>CloudHandsOn</strong></a></p>
                </div>
            </div>

            </div>

        );
    }
}
export default AppFooterPoweredBy;