// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavGroupData {
  id: string;
  label: string;
  dotColor: 'purple' | 'gray';
  isExpanded: boolean;
  subItems: NavSubItem[];
}

export interface SidebarData {
  navGroups: NavGroupData[];
  userInitials: string;
}

// ─── Event ────────────────────────────────────────────────────────────────────

export interface EventInfo {
  logoUrl: string;
  logoAlt: string;
  title: string;
  date: string;
  location: string;
}

// ─── Setup Guide ──────────────────────────────────────────────────────────────

export interface CardColumn {
  id: string;
  title: string;
  description: string;
}

export type WorkflowCardVariant = 'default' | 'add';

export interface WorkflowCardData {
  id: string;
  variant: WorkflowCardVariant;
  title?: string;
  iconType?: string;
  columns?: CardColumn[];
  addLabel?: string;
}

export interface SetupSectionData {
  id: string;
  stepNumber: number;
  stepLabel: string;
  cards: WorkflowCardData[];
}

export interface SetupGuideData {
  heading: string;
  subtitle: string;
  sectionLabel: string;
  sections: SetupSectionData[];
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export interface AppData {
  sidebar: SidebarData;
  event: EventInfo;
  setupGuide: SetupGuideData;
}
