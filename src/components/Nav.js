import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">StudyGroups</Link>
        <Link to="/">Preschool</Link>
        <Link to="teachers/signup">Teachers</Link>
        <Link to="teachers/signup">Students</Link>
      </nav>
    </header>
  )
}
