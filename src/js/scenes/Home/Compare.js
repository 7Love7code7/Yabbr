import React, {
  Component, Fragment
} from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';
import { compares } from '../../data';
import CompareData from '../../components/Compare-Item';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabCompare: 1
    };
  }

  handleChangeTab(value) {
    this.setState({
      tabCompare: value
    });
  }


  goSignUp() {
    window.location.href = '/sign-up';
  }

  render() {
    const { tabCompare } = this.state;
    return (
      <Section className="section-compare" id="compare">
        <Container>
          <h2 className="title-underline text-primary text-center h3 h2-md">
            Peer-2-Peer: How we compare
          </h2>
          <div className="compare-text text-center">
            Yabbr provides a more powerful and sophisticated feature set than even the biggest US-based players.
          </div>
          <Row>
            <Col md={10} className="offset-md-1">
              <div className="compare-table d-none d-md-block">
                <table>
                  <thead>
                    <tr>
                      <th />
                      <th>
                        <img src={Bitmaps.yabbr} alt="yabbr" />
                      </th>
                      <th>
                        <img src={Bitmaps.relay} alt="relay" />
                      </th>
                      <th>
                        <img src={Bitmaps.hustle} alt="hustle" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      compares && compares.length > 0 && (
                        compares.map((item, index) => (
                          <CompareData
                            key={index}
                            title={item.title}
                            status_yabbr={item.status_yabbr}
                            status_relay={item.status_relay}
                            status_hustle={item.status_hustle}
                            check_warning={item.check_warning}
                          />
                        ))
                      )
                    }
                    <tr>
                      <td>Cost per SMS</td>
                      <td className="text-primary font-weight-semibold">Less!</td>
                      <td className="text-primary font-weight-semibold">18c</td>
                      <td className="text-primary font-weight-semibold">22c</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="compare-action d-none d-md-flex">
                <h5 className="title">How did we compare?</h5>
                <a className="btn btn-info" href="#" onClick={this.goSignUp}>
                  Sign up now
                </a>
              </div>
              <div className="d-flex justify-content-between d-md-none">
                <Button
                  color="info"
                  type="button"
                  className={tabCompare !== 1 ? 'btn-sm disable' : 'btn-sm'}
                  onClick={this.handleChangeTab.bind(this, 1)}
                >
                  yabbr
                </Button>
                <Button
                  color="info"
                  type="button"
                  className={tabCompare !== 2 ? 'btn-sm disable' : 'btn-sm'}
                  onClick={this.handleChangeTab.bind(this, 2)}
                >
                  relay
                </Button>
                <Button
                  color="info"
                  type="button"
                  className={tabCompare !== 3 ? 'btn-sm disable' : 'btn-sm'}
                  onClick={this.handleChangeTab.bind(this, 3)}
                >
                  hustle
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="compare-table d-block d-md-none">
          <table>
            <thead>
              <tr>
                <th />
                <th>
                  {
                    tabCompare === 1 && (<img src={Bitmaps.yabbr} alt="yabbr" />)
                  }
                  {
                    tabCompare === 2 && (<img src={Bitmaps.relay} alt="relay" />)
                  }
                  {
                    tabCompare === 3 && (<img src={Bitmaps.hustle} alt="hustle" />)
                  }
                </th>
              </tr>
            </thead>
            <tbody>
              {
                compares && compares.length > 0 && (
                  compares.map((item, index) => (
                    <CompareData
                      key={index}
                      title={item.title}
                      status_yabbr={tabCompare === 1 ? item.status_yabbr : 'disable'}
                      status_relay={tabCompare === 2 ? item.status_relay : 'disable'}
                      status_hustle={tabCompare === 3 ? item.status_hustle : 'disable'}
                      check_warning={item.check_warning}
                    />
                  ))
                )
              }
              <tr>
                {
                  tabCompare === 1
                  && (
                    <Fragment>
                      <td>Cost per SMS</td>
                      <td className="text-primary font-weight-semibold">Less!</td>
                    </Fragment>
                  )
                }
                {
                  tabCompare === 2
                  && (
                    <Fragment>
                      <td>Cost per SMS</td>
                      <td className="text-primary font-weight-semibold">18c</td>
                    </Fragment>
                  )
                }
                {
                  tabCompare === 3
                  && (
                    <Fragment>
                      <td>Cost per SMS</td>
                      <td className="text-primary font-weight-semibold">22c</td>
                    </Fragment>
                  )
                }
              </tr>
            </tbody>
          </table>
        </div>
        <div className="compare-action d-flex d-md-none">
          <h5 className="title">How did we compare?</h5>
          <a className="btn btn-info" href="#" onClick={this.goSignUp}>
            Sign up now
          </a>
        </div>
      </Section>
    );
  }
}

export default Compare;
