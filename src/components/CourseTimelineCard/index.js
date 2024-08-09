// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="background-container">
      <div className="container-heading">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="para">{description}</p>
      <ul className="tag-list-container">
        {tagsList.map(each => (
          <li key={each.id} className="btn">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
