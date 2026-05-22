import { NavItem } from '../NavItem';
import './NavGroup.scss'
import type { NavGroupData } from '../../types'

export interface NavGroupProps {
  data: NavGroupData
  isExpanded: boolean
  onToggle: () => void
}

export function NavGroup({ data, isExpanded, onToggle }: NavGroupProps) {
  return (
    <li className="nav-group">
      <button
        className={`nav-group__trigger${isExpanded ? ' nav-group__trigger--expanded' : ''}`}
        onClick={onToggle}
        type="button"
      >
        <span
          className={`nav-group__dot nav-group__dot--${isExpanded ? 'purple' : 'gray'}`}
        />
        <span className="nav-group__label">{data.label}</span>
        {data.subItems.length > 0 && (
          <svg
            className="nav-group__chevron"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {data.subItems.length > 0 && (
        <ul
          className={`nav-group__items${!isExpanded ? ' nav-group__items--collapsed' : ''}`}
        >
          {data.subItems.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              href={item.href}
              isActive={item.isActive}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
