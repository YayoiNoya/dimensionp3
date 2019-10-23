import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            What's "DimensionP3"
          </p>
          {close}
        </article>

        <article
          id="schedule"
          className={`${this.props.article === 'schedule' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Schedule</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            開催日：
          </p>
          <p>
            開催場所：
          </p>
          {close}
        </article>

        <article
          id="history"
          className={`${this.props.article === 'history' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">History</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            開催企画一覧
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true" action="/">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name<abbr title="required">*</abbr></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email<abbr title="required">*</abbr></label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message<abbr title="required">*</abbr></label>
              <textarea name="message" id="message" rows="5" required></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/NagaYaorochi"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/YayoiNoya/dimensionp3"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="entry"
          className={`${this.props.article === 'entry' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Entry</h2>
          <form name="entry" method="post" data-netlify-honeypot="bot-field" data-netlify="true" action="/">
          <input type="hidden" name="form-name" value="entry" />
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name<abbr title="required">*</abbr></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email<abbr title="required">*</abbr></label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="note">Note</label>
              <textarea name="note" id="note" rows="3"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Entry" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
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
