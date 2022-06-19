import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
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
    </div>
    <Footer />
    </>
  )
}
