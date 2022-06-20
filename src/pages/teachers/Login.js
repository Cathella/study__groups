import UserIcon from '../../img/User.svg'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Login() {
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
          <Link to="/teachers/signup">Please register here</Link>
        </div>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={UserIcon} alt='' />
              </span>
              <span className='text'>Teacher Login</span>
            </h4>
            <div className='form-field'>
              <label>Email Address</label>
              <input type='text' />
            </div>
            <div className='form-field'>
              <label>Password</label>
              <input type='text' />
            </div>
            <button type='submit'>
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
    <Footer />
    </>
  )
}
