/* eslint-disable react/no-unescaped-entities */
import React, {
  Component
} from 'react';
import {
  Container
} from 'reactstrap';
import Section from '../../sections/Section';
import Work from '../../components/Work';
import Svgs from '../../theme/Svgs';

class Different extends Component {
  render() {
    return (
      <Section className="section-different" id="different">
        <Container>
          <h2 className="title-underline text-primary text-center h3 h2-md">
            What's different
          </h2>
          <div className="expand-row">
            <div className="col-item">
              <Work
                img={Svgs.money}
                title="Omni-Channel"
                content="<p>Yabbr combines ALL of your business communication channels into one unified screen. Web-chat, SMS, Inbound voice-call routing, Email & Social Media</p>"
              />
            </div>
            <div className="col-item">
              <Work
                img={Svgs.user}
                title="Platform management"
                content="<p>Scalable, multiple staff and teams, skill based routing, surveys, detailed reports, custom and quick replies, live monitoring, and more</p>"
              />
            </div>
            <div className="col-item">
              <Work
                img={Svgs.coins}
                title="Price superiority"
                content="<p>Setup hundreds of Agents, but only be charged for those that login. Yabbr also extends their whole scale Tier-1 SMS gateway to Clients for a <strong>guaranteed </strong> industry low rate.</p>"
              />
            </div>
            <div className="col-item">
              <Work
                img={Svgs.phones}
                title="Inbound / Outbound"
                content="<p>Yabbr enables you to not only receive inbound communications, but also to send outbound communications via SMS, Email and Social Media.</p>"
              />
            </div>
            <div className="col-item">
              <Work
                img={Svgs.phone}
                title="No more 13/1300/1800 numbers"
                content="<p>These numbers are so 2018, invest in mobile number synonymous with your brand that your Customers can BOTH call or SMS.</p>"
              />
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Different;
