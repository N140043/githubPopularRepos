import './index.css'

const LanguageFilterItem = props => {
  const {
    activeLanguage,
    details: {language},
    changeActiveLanguage,
  } = props

  const btnStyle = activeLanguage === language ? 'active-btn' : ''

  const changeLan = () => {
    changeActiveLanguage(language)
  }

  return (
    <li>
      <button type="button" className={`btn ${btnStyle}`} onClick={changeLan}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
