import './SearchInput.scss'

export interface SearchInputProps {
  placeholder?: string
  onSearch?: (value: string) => void
}

export function SearchInput({ placeholder = 'Search', onSearch }: SearchInputProps) {
  return (
    <div className='search-input'>
      <div className='search-input__wrapper'>
        <svg
          className='search-input__icon'
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14 14L10.0667 10.0667M11.3333 6.66667C11.3333 9.24399 9.24399 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.24399 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.24399 2 11.3333 4.08934 11.3333 6.66667Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="search"
          className='search-input__field'
          placeholder={placeholder}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  )
}
