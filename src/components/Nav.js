import { Link } from 'react-router-dom'
import MenuIcon from '../img/Menu.svg';

export default function Nav() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/" className='logo'>StudyGroups</Link>
        </div>
        <div className='nav-links'>
          <button>
            <img src={MenuIcon} alt='' />
          </button>
          <div className='hide'>
            <Link to="teachers/signup">Teachers</Link>
            <Link to="students/signup" className='stud-link'>Students</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
