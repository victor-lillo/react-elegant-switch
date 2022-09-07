import classnames from 'classnames-creator'

import s from './ToggleSwitch.module.scss'
// Workaround for Vite build not injecting css/scss modules https://github.com/vitejs/vite/issues/6907 - Not working
// import './ToggleSwitch.module.scss'

import React, { useId } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    barWidth?: string,
    barHeight?: string,
    leverSize?: string,

    barOnColor?: string,
    barOffColor?: string,
    leverOnColor?: string,
    leverOffColor?: string,

    barOnShadow?: string,
    barOffShadow?: string,
    leverOnShadow?: string,
    leverOffShadow?: string,

    barHoverShadow?: string,
    barFocusedShadow?: string,
    barActiveShadow?: string,

    leverHoverShadow?: string,
    leverFocusedShadow?: string,
    leverActiveShadow?: string,

    borderRadious?: string,
    checked: boolean,
    className?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

// Component names: bar and lever
export default function ToggleSwitch({
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

    borderRadious = '10rem',
    checked,
    className,
    onChange,
    ...rest

}: Props): JSX.Element {

    // New native hook for unique ID
    const name = useId()
    console.log('styles', s)

    const cssVariables = {
        "--switch-bar-width": barWidth,
        "--switch-bar-height": barHeight,
        "--switch-button-size": leverSize,

        "--switch-bar-on-background-color": barOnColor,
        "--switch-bar-off-background-color": barOffColor,
        "--switch-lever-on-background-color": leverOnColor,
        "--switch-lever-off-background-color": leverOffColor,

        "--switch-bar-on-shadow": barOnShadow,
        "--switch-bar-off-shadow": barOffShadow,
        "--switch-lever-on-shadow": leverOnShadow,
        "--switch-lever-off-shadow": leverOffShadow,

        "--switch-bar-hover-shadow": barHoverShadow,
        "--switch-bar-focused-shadow": barFocusedShadow,
        "--switch-bar-active-shadow": barActiveShadow,

        "--switch-lever-hover-shadow": leverHoverShadow,
        "--switch-lever-focused-shadow": leverFocusedShadow,
        "--switch-lever-active-shadow": leverActiveShadow,

        "--border-radious": borderRadious,
    }

    const mainClass = classnames(
        s.switch,
        className
    )

    return (
        <div
            className={mainClass}
            style={cssVariables as React.CSSProperties}
        >
            <input
                className={s.switch__input}
                checked={checked}
                id={name}
                name={name}
                onChange={onChange}
                type="checkbox"
                {...rest}
            />
            <label
                className={s.switch__label}
                htmlFor={name}></label>
        </div>
    )
}