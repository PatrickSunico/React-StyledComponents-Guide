import React from 'react';
import classNames from 'classnames';

import { Container, Body, Text, Title, Image, Button } from './Card.styles.js';

export const Card = ({ classes, children, ...restProps }) => {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      <Body className={classNames('card__body', classes)} {...restProps}></Body>
    </Container>
  );
};
