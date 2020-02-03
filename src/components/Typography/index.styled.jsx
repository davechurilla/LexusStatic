import styled from 'styled-components';
import { mapValues } from 'lodash';
import './fonts.css';

const trackingToLetterSpacing = (spacing) => `${spacing/1000}em`;

const Typography = {
  heading1: styled.h1`
    font-family: 'nobel-book';
    font-size: 50px;
    line-height: 60px;
    margin: 0;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(40)};
  `,
  heading2: styled.h2`
    font-family: 'nobel-bold';
    font-size: 36px;
    line-height: 48px;
    margin: 0;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(40)};
  `,
  heading3: styled.h3`
    font-family: 'nobel-book';
    font-size: 24px;
    line-height: 30px;
    margin: 0;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(100)};
 `,
  heading4: styled.h4`
    font-family: 'nobel-book';
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(100)};
  `,
  heading5: styled.h5`
    font-family: 'nobel-book';
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(100)};
  `,
  heading6: styled.h6`
    font-family: 'nobel-regular';
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(100)};
  `,
  body: styled.div`
    font-family: 'nobel-book';
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(40)};
  `,
  bodyBold: styled.div`
    font-family: 'nobel-bold';
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(40)};
  `,
  bodyAlternate: styled.div`
    font-family: 'Palatino';
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(40)};
  `,
  button: styled.span`
    font-family: 'nobel-bold';
    font-size: 13px;
    line-height: 18px;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(100)};
  `,
  disclaimer: styled.span`
    font-family: 'Palatino';
    font-size: 10px;
    line-height: 12px;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(40)};
  `,
  pricing: styled.span`
    font-family: 'pakt';
    font-size: 60px;
    line-height: 72px;
    font-weight: normal;
    letter-spacing: ${trackingToLetterSpacing(100)};
  `,
};

export const StyledType = mapValues(Typography, (index) => (component) => styled(index).attrs({as: component}));

export default Typography;
