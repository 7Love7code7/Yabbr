import React from 'react';
import Icon from './Icon';
import Icons from '../theme/Icons';

const CompareData = (props) => {
  const {
    className, check_warning, status_yabbr, status_relay, status_hustle, title, ...rest
  } = props;
  return (
    <tr {...rest}>
      <td>{title}</td>
      {
        status_yabbr !== 'disable' && (
          <td>
            {
              status_yabbr ? (
                !check_warning ? (
                  <Icon source={Icons.iconCheck} color="success" />
                ) : (
                  <Icon source={Icons.iconCheckWarning} color="orange" />
                )
              ) : (
                <Icon source={Icons.iconClose} color="danger" />
              )
            }
          </td>
        )
      }
      {
        status_relay !== 'disable' && (
          <td>
            {
              status_relay ? (
                !check_warning ? (
                  <Icon source={Icons.iconCheck} color="success" />
                ) : (
                  <Icon source={Icons.iconCheckWarning} color="orange" />
                )
              ) : (
                <Icon source={Icons.iconClose} color="danger" />
              )
            }
          </td>
        )
      }
      {
        status_hustle !== 'disable' && (
          <td>
            {
              status_hustle ? (
                !check_warning ? (
                  <Icon source={Icons.iconCheck} color="success" />
                ) : (
                  <Icon source={Icons.iconCheckWarning} color="orange" />
                )
              ) : (
                <Icon source={Icons.iconClose} color="danger" />
              )
            }
          </td>
        )
      }
    </tr>
  );
};

CompareData.defaultProps = {
  status_yabbr: true,
  status_relay: true,
  status_hustle: true,
  check_warning: false,
  title: ''
};

export default CompareData;
