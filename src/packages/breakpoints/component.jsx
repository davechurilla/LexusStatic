import React from 'react';
import Responsive, { useMediaQuery } from 'react-responsive';

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1200,
  desktop: 1800,
};

export const useBreakpoint = ({ 
  up = false, 
  down = false,
  minWidth,
  maxWidth,
}) => useMediaQuery({
  minWidth: down ? undefined : minWidth,
  maxWidth: up ? undefined : maxWidth,
});

export const useMobileBreakpoint = (props) => useBreakpoint({ maxWidth: BREAKPOINTS.mobile, ...props});
export const useTabletBreakpoint = (props) => useBreakpoint({ minWidth: BREAKPOINTS.mobile + 1, maxWidth: BREAKPOINTS.tablet, ...props});
export const useDesktopBreakpoint = (props) => useBreakpoint({ minWidth: BREAKPOINTS.tablet + 1, maxWidth: BREAKPOINTS.desktop, ...props});
export const useXLDesktopBreakpoint = (props) => useBreakpoint({ minWidth: BREAKPOINTS.desktop + 1, ...props});

export const Breakpoint = ({
  up = false,
  down = false,
  minWidth,
  maxWidth,
  ...props
}) =>
  <Responsive {...props} maxWidth={up ? undefined : maxWidth} minWidth={down ? undefined : minWidth} />;

export const MobileBreakpoint = (props) => <Breakpoint maxWidth={BREAKPOINTS.mobile} {...props} />;
export const TabletBreakpoint = (props) => <Breakpoint minWidth={BREAKPOINTS.mobile + 1} maxWidth={BREAKPOINTS.tablet} {...props} />;
export const DesktopBreakpoint = (props) => <Breakpoint minWidth={BREAKPOINTS.tablet + 1} maxWidth={BREAKPOINTS.desktop} {...props} />;
export const XLDesktopBreakpoint = (props) => <Breakpoint minWidth={BREAKPOINTS.desktop + 1} {...props} />;

export default {};
