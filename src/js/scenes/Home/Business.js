import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Section from '../../sections/Section';
import { businesses } from '../../data';

class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Section className="section-business">
        <Container>
          <Row>
            <Col lg={4}>
              <h1 className="title-underline text-white underline-md-center h3 h1-xl">
                Trusted by businesses big and small
              </h1>
            </Col>
            <Col lg={8}>
              <Row>
                {
                  businesses && businesses.length > 0 && (
                    businesses.map((business, index) => (
                      <Col lg={3} xs={6} key={index} className="text-center">
                        <div className="business-model">
                          <div dangerouslySetInnerHTML={{__html: business.image }} />
                          <p>
                            {business.title}
                          </p>
                        </div>
                      </Col>
                    ))
                  )
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Business;
