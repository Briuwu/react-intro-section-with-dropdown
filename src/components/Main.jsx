import HeroMobile from '../images/image-hero-mobile.png'
import HeroDesktop from '../images/image-hero-desktop.png'
import Footer from './Footer'

export default function Main() {
  return (
    <main className="main">
      <div className="main-hero">
        <img className='main-hero-mobile' src={HeroMobile} alt="" />
        <img className='main-hero-desktop' src={HeroDesktop} alt="" />
      </div>
      <div className="main-description">
        <h1 className="main-title"><span>Make</span> remote work</h1>
        <p className="main-paragraph">Get your team in sync. no matter your location. Streamline processes. create team rituals. and watch productivity soar.</p>
        <button className='main-btn'>Learn more</button>
      </div>
      <footer><Footer /></footer>
    </main>
  )
}