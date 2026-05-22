import './SetupSection.scss';
import { WorkflowCard } from '../WorkflowCard'
import type { SetupSectionData } from '../../types'

export interface SetupSectionProps {
  data: SetupSectionData
}

export function SetupSection({ data }: SetupSectionProps) {
  return (
    <div className={'setup-section'}>
      <p className={'setup-section__step-label'}>
        <strong>Step {data.stepNumber}:</strong> {data.stepLabel}
      </p>

      <div className={'setup-section__cards'}>
        {data.cards.map((card) => (
          <WorkflowCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  )
}
