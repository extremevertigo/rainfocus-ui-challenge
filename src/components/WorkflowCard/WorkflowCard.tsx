import './WorkflowCard.scss'
import type { WorkflowCardData } from '../../types'
import logicURL from '../../assets/icons/logic-arrow.svg';
import computerURL from '../../assets/icons/computer.svg';

export interface WorkflowCardProps {
  data: WorkflowCardData
}

function WorkflowIcon({ type }: { type?: string }) {
  if (type === 'workflow') {
    return (
      <img src={logicURL} alt=""/>
    )
  }
  if (type === 'portal') {
    return (
      <img src={computerURL} alt=""/>
    )
  }
}

export function WorkflowCard({ data }: WorkflowCardProps) {
  if (data.variant === 'add') {
    return (
      <article className="workflow-card workflow-card--add">
        <button
          className='workflow-card__add-btn'
          type="button"
        >
          <span className='workflow-card__add-icon'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className='workflow-card__add-label'>{data.addLabel ?? 'Add Workflow'}</span>
        </button>
      </article>
    )
  }

  const isSingleColumn = !data.columns || data.columns.length <= 1

  return (
    <article className='workflow-card'>
      {data.iconType && (
        <div className='workflow-card__header'>
          <span className='workflow-card__icon-wrap'>
            <WorkflowIcon type={data.iconType} />
          </span>
          <span className='workflow-card__title'>{data.title}</span>
        </div>
      )}

      {data.columns && data.columns.length > 0 && (
        <div
          className={`workflow-card__columns${isSingleColumn ? ' workflow-card__columns--single' : ''}`}
        >
          {data.columns.map((col, i) => (
            <div
              key={col.id}
              className={`workflow-card__col${i < data.columns!.length - 1 ? ' workflow-card__col--divided' : ''}`}
            >
              <p className='workflow-card__col-title'>{col.title}</p>
              <p className='workflow-card__col-desc'>{col.description}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
