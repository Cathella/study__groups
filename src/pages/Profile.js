import LocationIcon from '../img/Location.svg'
import Footer from '../components/Footer'

export default function Profile() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Complete your profile</h2>
        <p>
          Let's start by adding your address.
        </p>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={LocationIcon} alt='' />
              </span>
              <span className='text'>Where do you live?</span>
            </h4>
            <div className='form-field'>
              <label>My Address</label>
              <input type='text' />
            </div>
            <button type='submit'>
              Add Address
            </button>
          </div>
        </form>
      </section>
    </div>
    <Footer />
    </>
  )
}
