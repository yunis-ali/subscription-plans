import React from 'react';
import './subscription-plans.module.css';
import styles from './subscription-plans.module.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  var btnDefault = styles.storybookButton;
  var btnMode = primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary;
  var btnSize = size == 'small' ? styles.storybookButtonSmall : size == 'medium' ? styles.storybookButtonMedium : styles.storybookButtonLarge;
  return (
    <button
      type="button"
      className={[btnDefault, btnSize, btnMode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
