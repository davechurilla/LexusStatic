// TODO: Make these overwritable
const breakpoints = {
  mobile: 640,
  tablet: 1200,
  desktop: 1800,
}

export default (point, direction) => {
  let min = null;
  let max = null;
  if (point === 'tablet') {
    min = breakpoints.mobile + 1;
    max = breakpoints.tablet;
  } else if (point === 'desktop') {
    min = breakpoints.tablet + 1;
    max = breakpoints.desktop;
  } else if (point === 'xldesktop') {
    min = breakpoints.deskop + 1;
  } else {
    max = breakpoints.mobile;
  }

  const query = [];
  if (min && direction !== 'down') {
    query.push(`(min-width: ${min}px)`);
  }
  if (max && direction !== 'up') {
    query.push(`(max-width: ${max}px)`);
  }

  if(query.length === 0) {
    return '@media ';
  }

  return `@media ${query.join(' and ')}`;
}