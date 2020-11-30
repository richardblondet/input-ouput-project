import { rgba } from 'polished';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  textStyle,
  typography,
  shadow,
  display,
  system,
  Config,
  border,
  layout,
  flex,
  position,
  variant,
} from 'styled-system';
import { BoxProps, ButtonPrimitiveProps, ColType, ProtectedRouteProps, TextPrimitiveProps } from '../store/types';

/**
 * Private Route Handler
 * @param props ProtectedRouteProps
 * @see {@link https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4-a}
 */
export const PrivateRoute: React.FC<ProtectedRouteProps> = props => {
  /** extract */
  const { 
    isAuthenticated,
    isAllowed = true,
    unautheticatedPath = '/auth',
    unauthorizedPath = '/403',
    component, 
    path,
    ...rest
  } = props;
  
  /** if you are not in by any means then  */
  if (!isAuthenticated) {
    return <Redirect to={unautheticatedPath} />;
  }
  
  /** if you are in but not allowed then  */
  if (isAuthenticated && !isAllowed) {
    return <Redirect to={unauthorizedPath} />;
  }

  /** it */
  return <Route path={path} component={component} {...rest} />;
};

/**
 * A WhiteSpace prop
 */
const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace'
  }
} as Config);

/**
 * Common Component types
 */
export const common = compose(
  space,
  color,
  display
);

/**
 * Border Component types
 */
export const borderType = compose(
  border,
  shadow
);

/**
 * Text Component type
 */
export const text = compose(
  common,
  typography,
  whiteSpace,
  shadow,
  size,
  textStyle
);


/**
 * Text Primitive
 * 
 * Primitive component to create text based components from
 */
export const TextPrimitive = styled('div')<TextPrimitiveProps>`
  ${text}
`;
TextPrimitive.displayName = 'TextPrimitive';

/**
 * Box Primitive
 * 
 * Primitive component to create components from
 */
export const Box = styled('div')<BoxProps>`
  ${common}
  ${position}
  ${layout}
  ${flex}
`;
Box.displayName = 'Box';

/** Temp development */
export const Wrapper = styled('div')`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const SideBar = styled('div')`
  width: 260px;
  z-index: 10;
  background: linear-gradient(135deg,#8f75da 0,#727cf5 60%);
  bottom: 0;
  position: fixed;
  transition: all .2s ease-out;
  top: 0;
  padding-top: 85px;
  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  background: #313a46;
`;

export const SideBarLogo = styled(Box).attrs({
  lineHeight: '70px',
  width: '260px',
  position: 'fixed',
  top: 0,
  padding: '.5rem 0',
})`
  text-align: center;
`;

export const SideBarContent: BoxProps = {
  width: 'auto'
};

export const Menu = styled('ul')`
  padding: 0;
`;

export const ListTitle = styled('li')`
  list-style: none;
  padding: 12px 30px;
  letter-spacing: .05em;
  pointer-events: none;
  cursor: default;
  font-size: .6875rem;
  text-transform: uppercase;
  color: #8391a2;
  font-weight: 700;
`;

export const ListItem = styled('li')<{ selected?: boolean }>`
  display: block;
  padding: 10px 30px;
  font-size: .9375rem;
  position: relative;
  transition: all .4s;

  a {
    text-decoration: none;
    > div {
      color: ${(props) => props.selected ? '#fff' : '#8391a2'} !important;
    }
    &:hover {
      > div {
        color:#fff !important;
      }
    }
  }
`;

export const ListItemIcon = styled('i')`
  display: inline-block;
  line-height: 1.0625rem;
  margin: 0 10px 0 0;
  font-size: 1.1rem;
  vertical-align: middle;
  width: 20px;
`;

export const Content = styled('div')`
  margin-left: 260px;
  overflow: hidden;
  padding: 85px 0px 65px;
  min-height: 100vh;
`;

export const Navbar = styled(Box).attrs({
  backgroundColor: 'primary-tints.100',
  position: 'relative',
  zIndex: 1001,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem 1rem',
})`
  box-shadow: 0 0 35px 0 ${({ theme }) => rgba(theme.colors['secondary-tints']['100'], 0.5)};
`;

export const DashboardNavbar = styled(Navbar).attrs({
  position: 'fixed',
  width: '100%',
  top: 0
})``;

export const Container = styled(Box).attrs({
  width: '100%',
  mx: 'auto'
})`
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1220px) {
    max-width: 1140px;
  }
`;

export const Row = styled(Box)`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const getWidthProperty = (span:number) => {
  let width = span / 12 * 100;
  return `width: ${width}%;`;
}
export const Col = styled(Box)<ColType>`
  float: left;
  ${({ xs }) => xs ? getWidthProperty(xs) : "width: 100%;"}

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthProperty(sm)}
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthProperty(md)}
  }
  @media only screen and (min-width: 1220px) {
    ${({ lg }) => lg && getWidthProperty(lg)}
  }
`;

/** Button Variants */
export const buttonVariants = variant({
  scale: 'buttons',
  prop: 'type',
  variants: {
    primary: {
      bg: 'primary',
      color: 'secondary-tints.100'
    },
    secondary: {
      bg: 'secondary',
      color: 'secondary-tints.100'
    },
    success: {
      bg: 'green',
      color: 'secondary-tints.100'
    },
    danger: {
      bg: 'red',
      color: 'secondary-tints.100'
    },
    warning: {
      bg: 'yellow',
      color: 'secondary-tints.100'
    },
    info: {
      bg: 'blue',
      color: 'secondary-tints.100'
    },
  }
});

/**
 * Button Primitive
 */
export const ButtonPrimitive = styled('button')<ButtonPrimitiveProps>`
  ${text}
  ${borderType}
  ${buttonVariants}
`;
/** Bare Button */
export const Button = styled(ButtonPrimitive).attrs({
  position: 'relative',
  minWidth: '250px',
  maxWidth: '100%',
  display: 'inline-block',
})<ButtonPrimitiveProps>`
  border: none;
  outline: none;
  cursor: pointer;
  max-width: 100%;
`;
// This allows us to override
Button.defaultProps = {
  py: 's',
  px: 'm',
  bg: 'secondary-tints.100',
  color: 'secondary-shades.100',
  fontSize: 1,
  borderRadius: '.25rem'
}

  /* display: inline-block;
  border: none;
  outline: none;
  font: inherit;
  position: relative;
  min-width: 250px;
  max-width: 100%;
  font-size: ${props => props.theme.text.button.fontSize};
  font-weight: ${props => props.theme.text.button.fontWeight};
  padding: 10px 20px;
  ${buttonTextDecoration}
  ${color}
  ${space}
  ${buttonVariants} */
