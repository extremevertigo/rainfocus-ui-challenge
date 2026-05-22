import './NavItem.scss'

export interface NavItemProps {
  label: string
  href: string
  isActive?: boolean
  onClick?: () => void
}

export function NavItem({ label, href, isActive = false, onClick }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className={`nav-item${isActive ? ' nav-item--active' : ''}`}
onClick={(e) => {
          e.preventDefault()
          onClick?.()
        }}
      >
        {label}
      </a>
    </li>
  )
}
