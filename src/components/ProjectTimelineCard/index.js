// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="TimeLine-Container">
      <img className="img" src={imageUrl} alt="project" />
      <div className="heading-content">
        <h1 className="heading">{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar size={15} />
          <p className="time">{duration}</p>
        </div>
      </div>
      <div>
        <p className="description">{description}</p>
        <a href={projectUrl} className="visit">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
