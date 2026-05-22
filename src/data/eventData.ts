import type { AppData } from "../types";


export const appData: AppData = {
  sidebar: {
    userInitials: 'FL',
    navGroups: [
      {
        id: 'guide',
        label: 'Guide',
        dotColor: 'gray',
        isExpanded: false,
        subItems: [
          { id: 'guide-overview', label: 'Overview', href: '#overview' },
          { id: 'guide-getting-started', label: 'Getting started', href: '#getting-started' },
          { id: 'guide-faqs', label: 'FAQs', href: '#faqs' },
          { id: 'guide-resources', label: 'Resources', href: '#resources' },
        ],
      },
      {
        id: 'attendees',
        label: 'Attendees',
        dotColor: 'gray',
        isExpanded: false,
        subItems: [
          { id: 'attendees-list', label: 'Attendees', href: '#attendees', isActive: true },
          { id: 'attendee-types', label: 'Attendee types', href: '#attendee-types' },
          { id: 'packages', label: 'Packages', href: '#packages' },
          { id: 'reg-codes', label: 'Reg codes', href: '#reg-codes' },
          { id: 'discounts', label: 'Discounts', href: '#discounts' },
        ],
      },
      {
        id: 'content',
        label: 'Content',
        dotColor: 'gray',
        isExpanded: false,
        subItems: [
          { id: 'content-sessions', label: 'Sessions', href: '#sessions' },
          { id: 'content-speakers', label: 'Speakers', href: '#speakers' },
          { id: 'content-agenda', label: 'Agenda', href: '#agenda' },
          { id: 'content-tracks', label: 'Tracks', href: '#tracks' },
        ],
      },
      {
        id: 'exhibitors',
        label: 'Exhibitors',
        dotColor: 'gray',
        isExpanded: false,
        subItems: [
          { id: 'exhibitors-list', label: 'Exhibitor list', href: '#exhibitor-list' },
          { id: 'exhibitors-booth', label: 'Booth management', href: '#booth-management' },
          { id: 'exhibitors-floor', label: 'Floor plan', href: '#floor-plan' },
          { id: 'exhibitors-sponsorships', label: 'Sponsorships', href: '#sponsorships' },
        ],
      },
    ],
  },

  event: {
    logoUrl: '/event-logo.png',
    logoAlt: 'RainFocus Summit logo',
    title: 'RainFocus Summit',
    date: 'December 15th',
    location: 'Lehi, Utah',
  },

  setupGuide: {
    heading: 'Event setup guide',
    subtitle: 'See the available list of modules below. We suggest that you start with the attendee module.',
    sectionLabel: 'Attendee',
    sections: [
      {
        id: 'step-1',
        stepNumber: 1,
        stepLabel: 'Base settings.',
        cards: [
          {
            id: 'general-settings',
            variant: 'default',
            title: 'General',
            iconType: '',
            columns: [
              {
                id: 'col-general',
                title: 'General',
                description: "Define Attendee types & attributes",
              },
              {
                id: 'col-title-1',
                title: 'Title',
                description: 'Description that explains the value goes here. Description that explains the value goes here.',
              },
              {
                id: 'col-title-2',
                title: 'Title',
                description: 'Description that explains the value goes here. Description that explains the value goes here.',
              },
            ],
          },
        ],
      },
      {
        id: 'step-2',
        stepNumber: 2,
        stepLabel: 'Build registration workflows.',
        cards: [
          {
            id: 'reg-workflow-1',
            variant: 'default',
            title: 'Attendee Registration',
            iconType: 'workflow',
            columns: [
              {
                id: 'col-reg-1',
                title: 'Attendee Registration',
                description: 'Start by creating a general registration workflow',
              },
            ],
          },
          {
            id: 'reg-workflow-2',
            variant: 'default',
            title: 'Attendee Registration',
            iconType: 'workflow',
            columns: [
              {
                id: 'col-reg-2',
                title: 'Attendee Registration',
                description: 'Start by creating a general registration workflow',
              },
            ],
          },
          {
            id: 'reg-workflow-3',
            variant: 'default',
            title: 'Attendee Registration',
            iconType: 'workflow',
            columns: [
              {
                id: 'col-reg-3',
                title: 'Attendee Registration',
                description: 'Start by creating a general registration workflow',
              },
            ],
          },
          {
            id: 'add-workflow',
            variant: 'add',
            addLabel: 'Add Registration Workflow',
          },
        ],
      },
      {
        id: 'step-3',
        stepNumber: 3,
        stepLabel: 'Design post-registration experiences.',
        cards: [
          {
            id: 'attendee-portal',
            variant: 'default',
            title: 'Attendee Portal',
            iconType: 'portal',
            columns: [
              {
                id: 'col-portal',
                title: 'Attendee Portal',
                description: "Manage the portal that attendees will see after they've registered for your event.",
              },
            ],
          },
        ],
      },
    ],
  },
};
