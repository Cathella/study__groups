import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import UserIcon from '../../img/User.svg'
import './Signup.css'

export default function Signup() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Students to regain confidence in academics.</h2>
        <p>
          We care about you improving (almost) as much 
          as you do. You don't need to solve this problem alone.
        </p>
        <div>
          <Link to="/students/login">Please login here</Link>
        </div>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={UserIcon} alt='' />
              </span>
              <span className='text'>Student Registration</span>
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
