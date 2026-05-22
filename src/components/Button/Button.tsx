import type { ButtonHTMLAttributes } from 'react'
import './Button.scss'


type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--${size}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </button>
  )
}
