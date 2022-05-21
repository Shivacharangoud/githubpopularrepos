import './index.css'

const RepositoryItem = props => {
  const {detail} = props
  const formattedData = {
    avatarUrl: detail.avatar_url,
    forksCount: detail.forks_count,
    id: detail.id,
    name: detail.name,
    starsCount: detail.stars_count,
    issuesCount: detail.issues_count,
  }
  const {name, avatarUrl, starsCount, forksCount, issuesCount} = formattedData
  return (
    <li className="repo-item">
      <img className="avatar-url" src={avatarUrl} alt={name} />
      <h1 className="name">{name}</h1>
      <div className="icon-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="icon-text-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="icon-text-container">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
