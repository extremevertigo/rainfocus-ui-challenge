import './EventHeader.scss';
import logoURL from '../../assets/icons/logo.svg';
import { Button } from '../Button';
import type { EventInfo } from '../../types';

export interface EventHeaderProps {
  data: EventInfo
}

export function EventHeader({ data }: EventHeaderProps) {

  return (
    <header className='event-header'>
        <div className='event-header__identity'>
            <div className='event-header__logo-wrap'>
                <img src={logoURL} alt="" className="event-header__logo" />
            </div>
            <div className='event-header__meta'>
                <h1 className='event-header__title'>{data.title}</h1>
                <p className='event-header__details'>
                    <time className='event-header__date'>{data.date}</time>
                    <span className='event-header__location'>{data.location}</span>
                </p>
                </div>
        </div>
        <div className='event-header__actions'>
            <Button variant="primary" size="md">
                Edit event
            </Button>
      </div>
    </header>
  )
}
