import React from 'react';
import classnames from 'classnames';

const Icon = (props) => {
  const {
    type, color, className, size, spin, circle, ...rest
  } = props;

  const classNameMap = {
    icon: true,
    'icon-svg': type === 'svg',
    'icon-img': type === 'img',
    'icon-spin': spin,
    'icon-circle': circle,
    [`icon-${size}`]: true
  };

  if (props.color) {
    classNameMap[`icon-${props.color}`] = true;
  }

  if (className) {
    classNameMap[className] = true;
  }

  const properties = props.type === 'svg'
    ? { dangerouslySetInnerHTML: { __html: props.source } }
    : { children: <img source={props.source} alt={props.alt} /> };

  return (
    <span className={classnames(classNameMap)} {...properties} {...rest} />
  );
};

Icon.defaultProps = {
  type: 'svg',
  source: null,
  size: 'base',
  circle: false,
  spin: false
};

export default Icon;
