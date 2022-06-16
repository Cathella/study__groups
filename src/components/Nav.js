import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/" className='logo'>StudyGroups</Link>
          <Link to="/">Preschool</Link>
        </div>
        <div className='nav-links'>
          <Link to="teachers/signup">Teachers</Link>
          <Link to="students/signup" className='stud-link'>Students</Link>
        </div>
      </nav>
    </header>
  )
}
