import Footer from '../components/Footer';
import UserIcon from '../img/User.svg'
import SearchIcon from '../img/Search.svg'
import FilterIcon from '../img/Filter.svg'
import './Groups.css'

function Groups() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Join a study group.</h2>
        <form>
          <div className='group-search' id='search-form'>
            <input type='text' placeholder='Search for Subject, Grade or Location' />
            <button type='submit'>
              <img src={SearchIcon} alt='' />
            </button>
          </div>
        </form>
        <div className='dash-heading' id='filter-heading'>
          <h4>
            <span>
              <img src={FilterIcon} alt='' />
            </span>
            <span className='text'>Filter Results</span>
          </h4>
        </div>
      </section>
      <section className='signup-form'>
        <div className='form-content'>
          <h4>
            <span>
              <img src={UserIcon} alt='' />
            </span>
            <span className='text'>Groups near you</span>
          </h4>
          <button type='submit'>
            Next
          </button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Groups