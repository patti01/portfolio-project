import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <div className="HeaderBrand">
            <Link to="/"><img src={require('../images/logo-bauhaus-black.png')} width="30"/></Link>
          </div>
          <div className="HeaderNav">
            <Link to="/works" className="menu-item"><div className="bouncingLetter"><span>W</span><span>o</span><span>r</span><span>k</span><span>s</span></div></Link>
            <Link to="/playground" className="menu-item"><div className="bouncingLetter"><span>P</span><span>l</span><span>a</span><span>y</span><span>g</span><span>r</span><span>o</span><span>u</span><span>n</span><span>d</span></div></Link>
            <Link to="/contact"><button>Contact</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
