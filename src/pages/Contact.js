import PhoneIcon from '../img/Phone.svg'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Complete your profile</h2>
        <p>
          Add a phone number to your profile as means of contact.
        </p>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={PhoneIcon} alt='' />
              </span>
              <span className='text'>How can you be contacted?</span>
            </h4>
            <div className='form-field'>
              <label>Phone Number</label>
              <input type='text' />
            </div>
            <button type='submit'>
              Add Contact
            </button>
          </div>
        </form>
      </section>
    </div>
    <Footer />
    </>
  )
}
