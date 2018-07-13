import React from 'react';
import apigateway from '../images/aws/aws-api-gateway.svg';
import coudformation from '../images/aws/aws-cloudformation.svg';
import iam from '../images/aws/aws-iam.svg';
import ec2 from '../images/aws/aws-ec2.svg';
import cloudfront from '../images/aws/aws-cloudfront.svg';
import kinesis from '../images/aws/aws-kinesis.svg';
import lambda from '../images/aws/aws-lambda.svg';
import rds from '../images/aws/aws-rds.svg';
import dynamodb from '../images/aws/aws-dynamodb.svg';
import s3 from '../images/aws/aws-s3.svg';
import route53 from '../images/aws/aws-route53.svg';

class AppBodyRow2 extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 ">
                        <div className="card text-white bg-dark mb-3 ml-3 mr-3" >
                            <img className="card-img-top" height="100" width="100" src={iam} alt="IAM"/>
                                <div className="card-body">
                                    <h5 class="card-title">IAM</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 ">
                        <div className="card text-white bg-dark mb-3 ml-3 mr-3" >
                            <img className="card-img-top" height="100" width="100" src={ec2} alt="EC2"/>
                                <div className="card-body">
                                    <h5 class="card-title">EC2</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                        <div className="card text-white bg-dark mb-3 ml-3 mr-3" >
                            <img className="card-img-top" height="100" width="100" src={rds} alt="RDS"/>
                                <div className="card-body">
                                    <h5 class="card-title">RDS</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-white bg-dark mb-3 ml-3 mr-3" >
                            <img className="card-img-top" height="100" width="100" src={cloudfront} alt="RDS"/>
                                <div className="card-body">
                                    <h5 class="card-title">CloudFront</h5>
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