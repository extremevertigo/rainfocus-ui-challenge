import './Avatar.scss';

export interface AvatarProps {
  initials: string
}

export function Avatar({
  initials,
}: AvatarProps) {
  return (
    <div className='avatar'>
      <span>{initials}</span>
    </div>
  )
}
