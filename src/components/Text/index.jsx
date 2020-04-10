import { configureHtmlText } from '../../packages/HtmlText';
import Link from '../Link';
import { Disclaimer } from '../Disclaimer';

export const configureText = (props = {}) => configureHtmlText({
  a: Link,
  disclaimer: Disclaimer,
  ...props,
});

const Text = configureText();

export default Text;
