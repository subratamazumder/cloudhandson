import React from 'react';
import subrata from '../images/linkedIn_2.jpg';
import pepa from '../images/pepa_linkedIn_1.jpg';
class AppBodyRow2 extends React.Component {
    render() {
        return (
            <div>
                <div className="row bg-dark">
                    <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <div className="card text-white bg-dark mb-3" style={{width : '18rem'}}>
                            <img className="card-img-top rounded-circle w-25 h-25" src={subrata} alt="hi"/>
                                <div className="card-body">
                                    <h5 class="card-title">Founder</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 ">
                        <div className="card text-white bg-dark mb-3" style={{width : '18rem'}}>
                            <img className="card-img-top rounded-circle w-25 h-25" src={pepa} alt="hi"/>
                                <div className="card-body">
                                    <h5 class="card-title">Co-Founder</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                );
    }
}
export default AppBodyRow2