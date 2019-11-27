import { Link } from "gatsby"
import React from "react"
import "./header.css"

class Header extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 5) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  render () {
    return (
      <header className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div>
          <h1 style={{ margin: 0 }}>
            <Link className={this.state.hasScrolled ? 'linkScrolled' : 'link'} to="/">
              Title
            </Link>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header