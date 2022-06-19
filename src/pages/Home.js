import HeaderImg from '../img/header-img.svg'
import ArrowYellow from '../img/arrow-yellow.svg'
import SearchIcon from '../img/Search.svg'
import UserIcon from '../img/User.svg'
import ArrowBlack from '../img/arrow-black.svg'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <div className='home-container'>
      <section className='desc-section'>
        <div className='heading'>
          <h1>A space for Students to join Study Groups near them.</h1>
          <img src={ArrowYellow} alt='' />
        </div>
        <div>
          <ul>
            <li><a href='#li1'>As a parent watch your child’s confidence build step by step.</a></li>
            <li><a href='#li2'>Students will learn how to learn, not just how to write exams</a></li>
            <li><a href='#li3'>Celebrate life-changing results & happy students.</a></li>
          </ul>
        </div>
        <div className='home-search-section'>
          <div className='home-form'>
            <form>
              <label>
                <span>
                  <img src={UserIcon} alt='' />
                </span>
                <span className='text'>Search for Groups</span>
              </label>
              <div className='group-search'>
                <input type='text' placeholder='Search for Subject, Grade or Location' />
                <button type='submit'>
                  <img src={SearchIcon} alt='' />
                </button>
              </div>
            </form>
          </div>
          <img src={ArrowBlack} alt='' className='arrow' />
        </div>
      </section>
      <section className='header-img'>
        <img src={HeaderImg} alt='' />
      </section>
    </div>
    <Footer />
    </>
  )
}
