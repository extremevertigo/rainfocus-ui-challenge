import './AppShell.scss';
import { appData } from '../../data'
import { Sidebar } from '../Sidebar';
import { EventHeader } from '../EventHeader';
import { SetupGuide } from '../SetupGuide'
import { useState } from 'react';
export function AppShell() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    return (
        <div className='app-shell'>
            <Sidebar
            data={appData.sidebar}
            event={appData.event}
            isOpen={isMobileNavOpen}
            onClose={() => setIsMobileNavOpen(false)}
        />
            <div className='app-shell__main-wrap'>
                <div className='app-shell__topbar'>
                    <button
                        className='app-shell__menu-btn'
                        type="button"
                        onClick={() => setIsMobileNavOpen(true)}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <span className='app-shell__topbar-title'>{appData.event.title}</span>
                </div>
                <main className='app-shell__main' id='main-content'>
                    <EventHeader data={appData.event} />
                    <SetupGuide data={appData.setupGuide} />
                    
                </main>
            </div>
            
        </div>
    )
}
