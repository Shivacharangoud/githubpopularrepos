import './index.css'

const LanguageFilterItem = props => {
  const {detail, changeTriggered, isActive} = props
  const {id, language} = detail
  const classNameNew = isActive ? 'button-on-click' : ''
  const buttonTriggered = () => {
    changeTriggered(id)
  }

  return (
    <li className="list-item">
      <button
        onClick={buttonTriggered}
        className={`buttonn ${classNameNew}`}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
