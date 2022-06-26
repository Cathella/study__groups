import Footer from '../components/Footer'
import BookIcon from '../img/Book.svg'
import UserIcon from '../img/User.svg'

export default function Group() {
  return (
    <>
      <div className='dashboard-container'>
        <section className='dashboard-content'>
          <div className='group-card'>
            <div className='dash-heading'>
              <h4>
                <span>
                  <img src={UserIcon} alt='' />
                </span>
                <span className='text'>Group</span>
              </h4>
            </div>
            <p>The Intellectuals</p>
          </div>
          <div className='group-card'>
            <div className='dash-heading'>
              <h4>
                <span>
                  <img src={UserIcon} alt='' />
                </span>
                <span className='text'>Teacher</span>
              </h4>
            </div>
            <p>Jane Doe</p>
          </div>
          <div className='group-card'>
            <div className='dash-heading'>
              <h4>
                <span>
                  <img src={BookIcon} alt='' />
                </span>
                <span className='text'>Subject</span>
              </h4>
            </div>
            <p>Mathematics</p>
          </div>
        </section>
        <section>
          <div className='dash-groups'>
            <div className='dash-heading'>
              <h4>
                <span>
                  <img src={UserIcon} alt='' />
                </span>
                <span className='text'>Group Members</span>
              </h4>
            </div>
            <p>No members yet.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
