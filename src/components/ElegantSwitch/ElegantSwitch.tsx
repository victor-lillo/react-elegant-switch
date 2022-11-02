import React, { useId } from 'react'
import classnames from 'classnames-creator'
import styles from './ElegantSwitch.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  barWidth?: string
  barHeight?: string
  leverSize?: string

  barOnColor?: string
  barOffColor?: string
  leverOnColor?: string
  leverOffColor?: string

  barOnShadow?: string
  barOffShadow?: string
  leverOnShadow?: string
  leverOffShadow?: string

  barHoverShadow?: string
  barFocusedShadow?: string
  barActiveShadow?: string

  leverHoverShadow?: string
  leverFocusedShadow?: string
  leverActiveShadow?: string

  borderRadius?: string
  checked: boolean
  className?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Component names: bar and lever
export default function ElegantSwitch({
  barWidth = '3rem',
  barHeight = '1rem',
  leverSize = '1.6rem',

  barOnColor = '#ac7dee',
  leverOnColor = '#730fff',
  barOffColor = '#808080',
  leverOffColor = 'white',

  barOnShadow,
  leverOnShadow,
  barOffShadow,
  leverOffShadow = '0 0 10px 1px #b7b9b5',

  barHoverShadow,
  barFocusedShadow,
  barActiveShadow,

  leverHoverShadow = '0 0 0 10px #9a61e946',
  leverFocusedShadow,
  leverActiveShadow = '0 0 0 10px #9a61e98b',

  borderRadius = '10rem',
  checked,
  className,
  onChange,
  ...rest
}: Props): JSX.Element {
  const name = useId()
  const cssVariables = {
    '--switch-bar-width': barWidth,
    '--switch-bar-height': barHeight,
    '--switch-button-size': leverSize,

    '--switch-bar-on-background-color': barOnColor,
    '--switch-bar-off-background-color': barOffColor,
    '--switch-lever-on-background-color': leverOnColor,
    '--switch-lever-off-background-color': leverOffColor,

    '--switch-bar-on-shadow': barOnShadow,
    '--switch-bar-off-shadow': barOffShadow,
    '--switch-lever-on-shadow': leverOnShadow,
    '--switch-lever-off-shadow': leverOffShadow,

    '--switch-bar-hover-shadow': barHoverShadow,
    '--switch-bar-focused-shadow': barFocusedShadow,
    '--switch-bar-active-shadow': barActiveShadow,

    '--switch-lever-hover-shadow': leverHoverShadow,
    '--switch-lever-focused-shadow': leverFocusedShadow,
    '--switch-lever-active-shadow': leverActiveShadow,

    '--border-radius': borderRadius,
  }

  const mainClass = classnames(styles.switch, className)

  return (
    <div className={mainClass} style={cssVariables as React.CSSProperties}>
      <input
        className={styles.switch__input}
        checked={checked}
        id={name}
        name={name}
        onChange={onChange}
        role='switch-lever'
        aria-checked={checked}
        type='checkbox'
        {...rest}
      />
      <label className={styles.switch__label} htmlFor={name} role='switch-bar'></label>
    </div>
  )
}
