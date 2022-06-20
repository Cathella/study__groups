import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import UserIcon from '../../img/User.svg'

export default function Signup() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Our job is to empower Great teachers.</h2>
        <p>
          Coach students online or in-person. 
          Create a study group and invite students to join.
        </p>
        <div>
          <Link to="/teachers/login">Please login here</Link>
        </div>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={UserIcon} alt='' />
              </span>
              <span className='text'>Teacher Registration</span>
            </h4>
            <div className='form-field'>
              <label>Full Name</label>
              <input type='text' />
            </div>
            <div className='form-field'>
              <label>Email Address</label>
              <input type='text' />
            </div>
            <div className='form-field'>
              <label>Password</label>
              <input type='text' />
            </div>
            <div className='form-field'>
              <label>Confirm Password</label>
              <input type='text' />
            </div>
            <button type='submit'>
              Sign up
            </button>
          </div>
        </form>
      </section>
    </div>
    <Footer />
    </>
  )
}
