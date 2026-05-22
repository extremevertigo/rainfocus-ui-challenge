import './Sidebar.scss';
import { Avatar } from '../Avatar';
import { SearchInput } from '../SearchInput';
import { NavGroup } from '../NavGroup';
import type { SidebarData, EventInfo } from '../../types';
import { useState } from 'react';

import rfLogoURL from '../../assets/icons/small.svg';
import eventLogoURL from '../../assets/icons/icon.svg';

export interface SidebarProps {
  data: SidebarData
  event: EventInfo
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ data, event, isOpen = true, onClose }: SidebarProps) {
    const [expandedGroup, setExpandedGroup] = useState<string | null>(
        () => data.navGroups.find((g) => g.isExpanded)?.id ?? null
    )

    function toggleGroup(id: string) {
        setExpandedGroup((prev) => prev === id ? null : id)
    }
    return (
        <>
        <nav className="sidebar" data-open={isOpen}>
            <div className="sidebar__left">
                <img src={rfLogoURL} alt="" className="sidebar__logo" />
                <img src={eventLogoURL} alt="" className="sidebar__logo" />
                <div className="sidebar__footer">
                    <Avatar initials={data.userInitials} />
                </div>
            </div>
            <div className="sidebar__right">
                    <header className='sidebar__header'>{event.title}</header>
                    <span className="sidebar__meta">{event.location} &bull; {event.date}</span>
                    <SearchInput/>
                    <ul className='sidebar__nav'>
                {data.navGroups.map((group) => (
                    <NavGroup
                    key={group.id}
                    data={group}
                    isExpanded={expandedGroup === group.id}
                    onToggle={() => toggleGroup(group.id)}
                    />
                ))}
                </ul>
            </div>
        </nav>
        {isOpen && (
            <div className="sidebar__backdrop" onClick={onClose} />
        )}
        </>
    )
}
