import React, { FC } from 'react';
import { css, cx } from 'emotion';
// import { useTheme } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/grafana_icon.svg" alt="Turuu" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  // const theme = useTheme();
  const background = css`
    background: url(public/img/login_background.svg);
    background-size: cover;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/grafana_icon.svg" alt="Turuu" />;
};

const LoginBoxBackground = () => {
  // const theme = useTheme();
  return css`
    background: rgba(78, 78, 78, 1);
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'Turuu';
  static LoginTitle = 'Turuu';
  static GetLoginSubTitle = () => {
    const slogans = ['Your portal to fleet- and maintenance-management'];
    const count = slogans.length;
    return slogans[Math.floor(Math.random() * count)];
  };
}
