import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

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
    </div>
    <Footer />
    </>
  )
}
