import './index.css'

const GoogleSuggestion = props => {
  const {suggestionDetails, showSuggestion} = props
  const {suggestion} = suggestionDetails

  const onArrowClick = () => {
    showSuggestion(suggestion)
  }

  return (
    <div className="container">
      <li className="list-container">
        <p className="suggestion">
          {suggestion}
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
            alt="arrow"
            className="arrow"
            onClick={onArrowClick}
          />
        </p>
      </li>
    </div>
  )
}

export default GoogleSuggestion
