import React from 'react';

const Work = (props) => {
  const {
    className, img, title, content, ...rest
  } = props;

  return (
    <div className="work-model text-center" {...rest}>
      <div className="work-image">
        <div dangerouslySetInnerHTML={{__html: img }} />
      </div>
      <div className="work-title text-info">
        {title}
      </div>
      <div className="work-content text-center">
        <div dangerouslySetInnerHTML={{__html: content }} />
      </div>
    </div>
  );
};

Work.defaultProps = {
  img: '',
  title: '',
  content: ''
};

export default Work;
