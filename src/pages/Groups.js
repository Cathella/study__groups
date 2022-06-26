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
        <div className='selection'>
          <label><b>Choose education level</b></label>
          <select>
            <option value='Pre-school'>Pre-school</option>
            <option value='Primary'>Primary</option>
            <option value='Secondary'>Secondary</option>
            <option value='University'>University</option>
          </select>
        </div>
        <div>
          <div><b>Grades / Class</b></div>
          <section className='grades'>
            <div>
              <input type='checkbox' /> Baby class
            </div>
            <div>
              <input type='checkbox' /> Middle class
            </div>
            <div>
              <input type='checkbox' /> Top class
            </div>
          </section>
        </div>
        <div>
          <div><b>Subjects / Topics</b></div>
          <section className='subjects'>
            <div>
              <input type='checkbox' /> English
            </div>
            <div>
              <input type='checkbox' /> Mathematics
            </div>
            <div>
              <input type='checkbox' /> Science
            </div>
            <div>
              <input type='checkbox' /> Literacy
            </div>
            <div>
              <input type='checkbox' /> Social studies
            </div>
            <div>
              <input type='checkbox' /> Others
            </div>
          </section>
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
          <div className='empty-groups'>
            <p>We don't have any groups yet.</p>
          </div>
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