import React from 'react';
import Icon from './Icon';
import Icons from '../theme/Icons';

const Feature = (props) => {
  const {
    className, status, text, ...rest
  } = props;
  return (
    <div className="additional-feature" {...rest}>
      {
        status ? (
          <Icon
            source={Icons.iconCheck}
            color="success"
          />
        ) : (
          <Icon
            source={Icons.iconClose}
            color="danger"
          />
        )
      }
      <div className="feature-text">
        {text}
      </div>
    </div>
  );
};

Feature.defaultProps = {
  status: true,
  text: ''
};

export default Feature;
