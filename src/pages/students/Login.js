import UserIcon from '../../img/User.svg'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Login() {
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
          <Link to="/students/signup">Please register here</Link>
        </div>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={UserIcon} alt='' />
              </span>
              <span className='text'>Student Login</span>
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
