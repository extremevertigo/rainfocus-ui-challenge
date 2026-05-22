import './SetupGuide.scss';
import attendURL from '../../assets/icons/person-portal.svg';
import type { SetupGuideData } from '../../types';
import { SetupSection } from '../SetupSection';

export interface SetupGuideProps {
  data: SetupGuideData
}

export function SetupGuide({ data }: SetupGuideProps) {

  return (
    <section className='setup-guide'>
      <div className='setup-guide__intro'>
        <h2 id="setup-guide-heading" className='setup-guide__heading'>
          {data.heading}
        </h2>
        <p className='setup-guide__subtitle'>{data.subtitle}</p>
      </div>

      <hr className='setup-guide__divider'/>

      <div className='setup-guide__section-label'>
        <span className='setup-guide__section-icon'>
          <img src={attendURL} alt="" />
        </span>
        <h3 className='setup-guide__section-name'>{data.sectionLabel}</h3>
      </div>

      <div className='setup-guide__steps'>
        {data.sections.map((section) => (
          <SetupSection key={section.id} data={section} />
        ))}
      </div>
    </section>
  )
}
