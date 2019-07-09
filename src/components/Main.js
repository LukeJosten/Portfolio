import React from 'react'
import PropTypes from 'prop-types'

import computer_coffee from '../images/computer_coffee.jpg'
import raytheon_logo from '../images/raytheon_logo.jpg'
import pic01 from '../images/pic01.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={computer_coffee} alt="" /></span>
          <p>
            Welcome to my portfolio website! I created this site to brush up on my web development skills and to have a place show some of my side projects.
            I hope you will learn more about me and to learn something new and interesting along the way!
            If you would like to learn how this site was made, you may checkout my public <a href="https://github.com/LukeJosten/Portfolio">GitHub repository</a> and explore the code.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={raytheon_logo} alt="Raytheon Logo" /></span>
          <p>
            I am a Computer Science graduate from Taylor University with a passion of learning. 
            I have more than 2 years of professional software development experience in various 
            roles. I am currently employed at Raytheon, a major U.S. defense contractor. I interned 
            at Eli Lilly where I developed automation scripts in JavaScript, and I also worked at 
            a startup company for a year as a full stack web developer. Cyber security is a major 
            area of interest of mine, and I spent a year researching and analyzing malware during 
            college. I love solving problems and want to continue to grow as a software developer.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/lukejosten@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/luke-josten-655563111" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a></li>
            <li><a href="https://github.com/LukeJosten" className="icon fa-github">
              <span className="label">GitHub</span>
            </a></li>
          </ul>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>
            Under Construction
          </p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main