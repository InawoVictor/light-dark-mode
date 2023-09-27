import './Footer.scss'

const Footer = ({myMode}) => {
  return (
    <footer className='--flex-center' data-theme = {myMode}>
      <p>Copyright &copy; 2023</p>
    </footer>
  )
}

export default Footer
