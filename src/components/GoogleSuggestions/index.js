import {Component} from 'react'
import './index.css'
import GoogleSuggestion from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  showSuggestion = suggestion => {
    // const {suggestionsList} = this.props
    // const filteredList = suggestionsList.filter(eachSug => eachSug.id === id)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    // console.log(searchInput)

    const searchResults = suggestionsList.filter(eachEl =>
      eachEl.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main-container">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
        />
        <div className="search-container">
          <div className="inner-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchResults.map(eachSug => (
              <GoogleSuggestion
                key={eachSug.id}
                suggestionDetails={eachSug}
                showSuggestion={this.showSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
