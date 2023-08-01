import './index.css'

const HistoryItem = props => {
  const {eachItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list-container">
      <p className="time one">{timeAccessed}</p>
      <div className="history-con">
        <div className="history">
          <img src={logoUrl} className="image" alt="domain logo" />
          <div className="cont">
            <p className="time two">{title}</p>
            <p className="time domain">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-logo"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
