import React from 'react';
import AppFooterPoweredBy from './AppFooterPoweredBy';
class AppFooter extends React.Component {
  render() {
    return (
      <div>

        <footer className="page-footer font-small mdb-color pt-4 mt-4">


          <div className="container text-center text-md-left">


            <div className="row text-center text-md-left mt-3 pb-3">


              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="mb-4 font-weight-bold">CloudHandsOn</h6>
                <p>Our mission is to bring clarity in understanding AWS Services & Concepts</p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="font-weight-bold">Resources & Trainings</h6>
                <p><a href="#!">Udemy</a></p>
                <p><a href="#!">Blogs</a></p>
                <p><a href="#!">Youtube</a></p>
                <p><a href="#!">Demos</a></p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="font-weight-bold">Useful links</h6>
                <p><a href="https://aws.amazon.com/new/">What's new @AWS</a></p>
                <p><a href="https://principlesofchaos.org/">Chaos Engineering Principle</a></p>
                <p><a href="https://www.reactivemanifesto.org/">Reactive Manifesto</a></p>
              </div>


              <hr className="w-100 clearfix d-md-none" />


              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="font-weight-bold">Contact</h6>
                <p><i className="glyphicon glyphicon-envelope"></i>contact@cloudhandson.com</p>
              </div>


            </div>


            <hr />

            <div>
            <AppFooterPoweredBy />
            </div>

          </div>


        </footer>

      </div>
    );
  }
}
export default AppFooter;