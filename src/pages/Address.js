import LocationIcon from '../img/Location.svg'
import Footer from '../components/Footer'
import EditIcon from '../img/Edit.svg'
import { Link } from 'react-router-dom'

export default function Address() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Complete your profile</h2>
        <p>
          Please continue to add your phone contact number.
        </p>
      </section>
      <section className='address-content'>
        <div className='address-card'>
          <div className='heading-label'>
            <h4>
              <span>
                <img src={LocationIcon} alt='' />
              </span>
              <span className='text'>My Address</span>
            </h4>
            <span>
              <img src={EditIcon} alt='' />
            </span>
          </div>
          <div className='address-space'>
            <p>Katende Trading Centre, Masaka - Kampala Road</p>
          </div>
        </div>
        <div className='btn-holder'>
          <Link to='/my-contact'>
            <button type='' className='next-btn'>
              Next
            </button>
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}
