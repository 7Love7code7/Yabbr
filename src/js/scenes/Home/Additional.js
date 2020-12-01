/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';
import Feature from '../../components/Additional-feature';
import { features } from '../../data';

class Additional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false
    };
  }

  handleReadMore() {
    this.setState({
      readMore: true
    });
  }

  render() {
    const { readMore } = this.state;
    return (
      <Section className="section-additional" id="additional">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="title-underline text-primary underline-md-center h3 h2-md">
                Additional key features
              </h2>
              <div className="additional-features d-none d-lg-block">
                {
                  features && features.length > 0 && (
                    features.map((item, index) => (
                      <Feature
                        key={index}
                        status={item.status}
                        text={item.text}
                      />
                    ))
                  )
                }
              </div>
              <div className="additional-features d-block d-lg-none">
                {
                  readMore ? (
                    features && features.length > 0 && (
                      features.map((item, index) => (
                        <Feature
                          key={index}
                          status={item.status}
                          text={item.text}
                        />
                      ))
                    )
                  ) : (
                    features && features.length > 0 && (
                      features.map((item, index) => (
                        index < 9 && (
                          <Feature
                            key={index}
                            status={item.status}
                            text={item.text}
                          />
                        )
                      ))
                    )
                  )
                }
                <div className="text-center">
                  {
                    !readMore && (
                      <Button
                        type="button"
                        color="info"
                        onClick={this.handleReadMore.bind(this)}
                      >
                        See&nbsp;
                        {
                          features && features.length > 0 && (
                            features.length - 9
                          )
                        }
                        &nbsp;more
                      </Button>
                    )
                  }
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="phone-image d-none d-lg-block">
                <img src={Bitmaps.phone} alt="phone-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Additional;
