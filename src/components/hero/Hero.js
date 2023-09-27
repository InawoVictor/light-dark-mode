
import phone from '../../assets/phone.svg'
import './Hero.scss'

const Hero = ({myMode}) => {
  

  return (
    <section className='hero' data-theme = {myMode}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Vila shop landing page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            perferendis eveniet animi in, voluptas cumque iste eius recusandae
            illo incidunt?
          </p>
          <div className='--flex-start'>
            <button className='--btn btn-p'>Learn</button>
            <button className='--btn --btn-danger'>Sign up</button>
          </div>
        </div>
        <div className=" --text-center">
          <img src={phone} alt="phone" width={200}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
