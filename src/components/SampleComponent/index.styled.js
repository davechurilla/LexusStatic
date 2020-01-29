import styled from 'styled-components';

export default {
  SampleComponent: styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    padding: 10px;
    border: 1px solid black;
    display: inline-block;
  `,
};

// import styled from 'styled-components'

const padding = '3em'

const Section = styled.section`
  color: red;

  /* Pass variables as inputs */
  padding: ${padding};

  /* Adjust the background from the properties */
  background: ${props => props.background};
`
