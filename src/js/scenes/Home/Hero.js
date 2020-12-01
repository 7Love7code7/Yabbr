/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Section from '../../sections/Section';
import Videos from '../../theme/Videos';
import Bitmaps from '../../theme/Bitmaps';
import Icon from '../../components/Icon';
import Icons from '../../theme/Icons';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  handleVideoPlay() {
    const video = this.videoRef.current;
    video.currentTime = 5.5;
    video.play();
  }

  render() {
    return (
      <Section className="section-hero">
        <div className="hero-spacer">
          <div className="hero-content">
            <Container>
              <Row>
                <Col lg={6}>
                  <h1 className="title-underline h3 h1-md text-white">
                    Unified communication
                    <span className="text-info"> platform</span>
                  </h1>
                  <div className="hero-text">
                    Aggregating all of your companies Web, SMS, Email, Voice and Social chat streams into a single screen for one or many staff.
                  </div>
                  <Button
                    className="btn"
                    tag={NavLink}
                    smooth
                    to="/#different"
                    color="light"
                  >
                    What's different?
                  </Button>
                  <div className="d-block d-lg-none text-center">
                    <NavLink to="/#different" smooth>
                      <Icon source={Icons.iconChevron} color="white" />
                    </NavLink>
                  </div>
                </Col>
                <Col lg={6}>
                  <img className="hero-image" src={Bitmaps.heroImage} alt="hero-image" />
                </Col>
              </Row>
            </Container>
          </div>
          <video playsInline autoPlay muted ref={this.videoRef} onEnded={this.handleVideoPlay.bind(this)}>
            <source src={Videos.heroVideoMp4} type="video/mp4" />
            <source src={Videos.heroVideoWebm} type="video/webm" />
          </video>
        </div>
      </Section>
    );
  }
}

export default Hero;
