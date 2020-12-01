/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import {
  Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert, ButtonGroup
} from 'reactstrap';
import Section from '../../sections/Section';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      when: 'asap',
      how: 'phone',
      contact: '',
      name: '',
      submitted: false,
      buttonType: 'sms'
    };
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(values) {
    values.preventDefault();
    const vals = {
      when: this.state.when,
      how: this.state.how,
      contact: this.state.contact,
      name: this.state.name
    };

    fetch('https://n7lv3wfjne.execute-api.ap-southeast-2.amazonaws.com/contact/submit', {
      method: 'post',
      body: JSON.stringify(vals)
    }).then(res => res.json()).then(() => {
      this.setState({ submitted: true });
    });
  }

  handleFormType(type) {
    if (type === 'sms') {
      this.setState({
        buttonType: 'sms'
      });
    } else {
      this.setState({
        buttonType: 'contact'
      });
    }
  }

  showErrorMessage() {
    return (
      <Alert color="error">Sorry, there was an issue processing your request.</Alert>
    );
  }

  render() {
    const { submitted, buttonType } = this.state;
    return (
      <Section className="section-contact" id="contact">
        <Container>
          <Row>
            <Col lg={6}>
              <h1 className="title-underline text-white h3 h1-md">
                Get in touch
              </h1>
              <div className="contact-text text-white font-weight-light font-size-lg">
                <p>The yabbr platform provides a personalised & scalable direct marketing channel that optimises conversions.</p>
                <p>It uses the economic scalability of mass communications with the efficacy of personalised conversations.</p>
              </div>
            </Col>
            <Col lg={6}>
              <ButtonGroup>
                <Button
                  type="button"
                  color="info"
                  size="lg"
                  className={buttonType !== 'sms' ? 'disable' : ''}
                  onClick={this.handleFormType.bind(this, 'sms')}
                >
                  Call or SMS us
                </Button>
                <Button
                  type="button"
                  color="info"
                  size="lg"
                  className={buttonType !== 'contact' ? 'disable' : ''}
                  onClick={this.handleFormType.bind(this, 'contact')}
                >
                  We'll contact you
                </Button>
              </ButtonGroup>
              { submitted ? (<Alert color="success">Your request was submitted successfully.</Alert>) : ('')}
              {
                buttonType === 'contact' && (
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label>When can we give you a call?</Label>
                      <select
                        className="custom-select form-control"
                        name="when"
                        value={this.state.when}
                        onChange={this.handleChange}
                      >
                        <option value="asap">ASAP</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="whenever">Whenever</option>
                      </select>
                    </FormGroup>
                    <FormGroup>
                      <Label>What’s the best way for us to chat?</Label>
                      <Row>
                        <Col xs={6} className="mb-4 mb-md-0">
                          <select
                            className="custom-select form-control"
                            name="how"
                            value={this.state.how}
                            onChange={this.handleChange}

                          >
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                          </select>
                        </Col>
                        <Col xs={6}>
                          <Input
                            type="text"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.handleChange}

                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Label>What's your name?</Label>
                      <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Button
                        type="submit"
                        color="light"
                        className="btn-block"
                        disabled={submitted}
                      >
                        We'll talk soon!
                      </Button>
                    </FormGroup>
                  </Form>
                )
              }
              {
                buttonType === 'sms' && (
                  <div className="sms-body text-center">
                    <div className="content text-white">
                      We're leading the charge and pledging no more 13/1300/1800 numbers - including our own contact number!
                    </div>
                    <div className="call-sms">
                      <h1 className="title text-white h3 h1-sm">
                        0480 0 YABBR
                      </h1>
                      <div className="number text-gray">
                        92227
                      </div>
                    </div>
                  </div>
                )
              }
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Contact;
