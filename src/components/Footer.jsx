import Databiz from '../images/client-databiz.svg'
import Audiophile from '../images/client-audiophile.svg'
import Maker from '../images/client-maker.svg'
import Meet from '../images/client-meet.svg'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer-items"><img src={Databiz} alt="" /></div>
        <div className="footer-items"><img src={Audiophile} alt="" /></div>
        <div className="footer-items"><img src={Maker} alt="" /></div>
        <div className="footer-items"><img src={Meet} alt="" /></div>
      </div>
    </>
  )
}