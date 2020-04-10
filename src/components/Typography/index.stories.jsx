import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Typopgraphy from './index.styled';

const TypeDescription = styled.div`
  font-family: 'nobel-book';
  font-size: 10px;
  font-weight: normal;
  opacity: 0.8;
`;

const TypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

const TypeListing = styled.div`
  width: 50%;
  margin-bottom: 35px;
`;

storiesOf('Typography', module)
  .add(
    'Default', () =>
    (
      <TypeList>
        <TypeListing>
          <Typopgraphy.heading1>HEADER 1</Typopgraphy.heading1>
          <TypeDescription>Nobel Book / Font Size 50px / Line Height 60px / Letterspacing 40</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.heading2>HEADER 2</Typopgraphy.heading2>
          <TypeDescription>Nobel Bold / Font Size 36px / Line Height 48px / Letterspacing 40</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.heading3>HEADER 3</Typopgraphy.heading3>
          <TypeDescription>Nobel Book / Font Size 24px / Line Height 30px / Letterspacing 100</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.heading4>HEADER 4</Typopgraphy.heading4>
          <TypeDescription>Nobel Book / Font Size 20px / Line Height 28px / Letterspacing 100</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.heading5>HEADER 5</Typopgraphy.heading5>
          <TypeDescription>Nobel Book / Font Size 18px / Line Height 26px / Letterspacing 100</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.heading6>HEADER 6</Typopgraphy.heading6>
          <TypeDescription>Nobel Regular / Font Size 16px / Line Height 24px / Letterspacing 100</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.body>
            <p>Body Copy</p>
          </Typopgraphy.body>
          <TypeDescription>Nobel Regular / Font Size 14px / Line Height 20px / Letter Spacing 40</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.bodyBold>
            <p>Body Bold</p>
          </Typopgraphy.bodyBold>
          <TypeDescription>Nobel Bold / Font Size 14px / Line Height 20px / Letter Spacing 40</TypeDescription>
        </TypeListing>
        <TypeListing>
          <Typopgraphy.bodyAlternate>
            <p>Body Copy Alternate</p>
          </Typopgraphy.bodyAlternate>
          <TypeDescription>Palatino / Font Size 14px / Line Height 20px / Letter Spacing 40</TypeDescription>
        </TypeListing>
        <TypeListing>
          <div>
            <Typopgraphy.button>BUTTON COPY</Typopgraphy.button>
          </div>
          <TypeDescription>Nobel Bold / Font Size 13px / Line Height 18px / Letterspacing 100</TypeDescription>
        </TypeListing>
        <TypeListing>
          <div>
            <Typopgraphy.disclaimer>Disclaimer Copy</Typopgraphy.disclaimer>
          </div>
          <TypeDescription>Palatino Regular / Font Size 10px / Line Height 12px / Letterspacing 40</TypeDescription>
        </TypeListing>
        <TypeListing>
          <div>
            <Typopgraphy.pricing>1234567890</Typopgraphy.pricing>
          </div>
          <TypeDescription>Pakt / Font Size 60px / Line Height 72px / Letterspacing 100</TypeDescription>
        </TypeListing>
      </TypeList>
    ),
  );