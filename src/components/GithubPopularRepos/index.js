import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {filterQuery: languageFiltersData[0].id, data: '', isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: true})
    const {filterQuery} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${filterQuery}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    this.setState({data: data.popular_repos, isLoading: false})
  }

  renderRepoView = () => {
    const {data} = this.state
    return (
      <ul className="unorder-list-2">
        {data.map(each => (
          <RepositoryItem detail={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  changeTriggered = idd => {
    this.setState({filterQuery: idd}, this.getData)
  }

  render() {
    const {isLoading, filterQuery} = this.state
    return (
      <div className="main-container">
        <h1>Popular</h1>
        <ul className="unorder-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              isActive={each.id === filterQuery}
              changeTriggered={this.changeTriggered}
              detail={each}
              key={each.id}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoadingView() : this.renderRepoView()}
      </div>
    )
  }
}

export default GithubPopularRepos
