import UserIcon from '../../img/User.svg'
import Footer from '../../components/Footer'

export default function NewGroup() {
  return (
    <>
    <div className='home-container'>
      <section className='signup-details'>
        <h2>Create a Study Group</h2>
        <p>
          Coach students online or in-person. 
          Create a study group and invite students to join.
        </p>
      </section>
      <section className='signup-form'>
        <form>
          <div className='form-content'>
            <h4>
              <span>
                <img src={UserIcon} alt='' />
              </span>
              <span className='text'>New Study Group</span>
            </h4>
            <div className='form-field'>
              <label>Group Name</label>
              <input type='text' />
            </div>
            <div className='form-field'>
              <label>Subject</label>
              <input type='text' />
            </div>
            <div className='form-field'>
              <label>Grade</label>
              <input type='text' />
            </div>
            <button type='submit'>
              Create Group
            </button>
          </div>
        </form>
      </section>
    </div>
    <Footer />
    </>
  )
}
