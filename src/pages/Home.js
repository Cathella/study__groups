import React from 'react'
import HeaderImg from '../img/header-img.svg'
import ArrowYellow from '../img/arrow-yellow.svg'
import SearchIcon from '../img/Search.svg'
import UserIcon from '../img/User.svg'
import ArrowBlack from '../img/arrow-black.svg'

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
            <li>As a parent watch your child’s confidence build step by step.</li>
            <li>Students will learn how to learn, not just how to write exams</li>
            <li>Celebrate life-changing results & happy students.</li>
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
    <footer>
      <span>&copy; 2022 Study Groups &middot; Nakitto Creations</span>
    </footer>
    </>
  )
}
