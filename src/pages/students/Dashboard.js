import Footer from '../../components/Footer'
import LocationIcon from '../../img/Location.svg'
import PhoneIcon from '../../img/Phone.svg'
import EditIcon from '../../img/Edit.svg'
import PlusIcon from '../../img/Plus.svg'
import UserIcon from '../../img/User.svg'
import { Link } from 'react-router-dom'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <>
      <div className='dashboard-container'>
        <section className='dashboard-content'>
          <div className='dash-address'>
            <div className='dash-heading'>
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
            <p>Katende Trading Centre, Masaka - Kampala Road</p>
          </div>
          <div className='dash-contact'>
            <div className='dash-heading'>
              <h4>
                <span>
                  <img src={PhoneIcon} alt='' />
                </span>
                <span className='text'>My Contact</span>
              </h4>
              <span>
                <img src={EditIcon} alt='' />
              </span>
            </div>
            <p>+256750123456</p>
          </div>
          <div className='dash-link'>
            <Link to='/groups'>
              <img src={PlusIcon} alt='' />
              <p>Join Study Group</p>
            </Link>
          </div>
        </section>
        <section>
          <div className='dash-groups'>
            <div className='dash-heading'>
              <h4>
                <span>
                  <img src={UserIcon} alt='' />
                </span>
                <span className='text'>My Groups</span>
              </h4>
            </div>
            <p>You are not yet a member of any group</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
