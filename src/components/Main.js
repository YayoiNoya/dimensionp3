import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
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
          id="access"
          className={`${this.props.article === 'access' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Access</h2>
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
          <form name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true"  action="thanks">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">氏名<abbr title="required">*</abbr></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="ruby">よみがな<abbr title="required">*</abbr></label>
              <input type="text" name="ruby" id="ruby" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email<abbr title="required">*</abbr></label>
              <input type="text" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">お問い合わせ内容<abbr title="required">*</abbr></label>
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
              <a href="#!" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#!" className="icon fa-instagram">
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
          <form name="entry" method="post" data-netlify-honeypot="bot-field" data-netlify="true"  action="thanks">
          <input type="hidden" name="form-name" value="entry" />
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">氏名<abbr title="required">*</abbr></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="ruby">よみがな<abbr title="required">*</abbr></label>
              <input type="text" name="ruby" id="ruby" required />
            </div>

            <div className="field half first">
              <label htmlFor="hn">ハンドルネーム<abbr title="required">*</abbr></label>
              <input type="text" name="hn" id="hn" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email<abbr title="required">*</abbr></label>
              <input type="text" name="email" id="email" required />
            </div>

            <div className="field third first">
              <label htmlFor="year">生年月日<abbr title="required">*</abbr></label>
              <select name="year" id="select_year"></select><div align="right">年</div>
            </div>
            <div className="field third second">
              <label htmlFor="birth"><abbr title="required">*</abbr></label>
              <select name="month" id="select_month"></select><div align="right">月</div>
            </div>
            <div className="field third">
              <label htmlFor="birth"><abbr title="required">*</abbr></label>
              <select name="day" id="select_day"></select><div align="right">日</div>
            </div>

            <div className="field">
              <label htmlFor="sex">性別<abbr title="required">*</abbr></label>
              <input type="radio" name="sex" id="male" value="male" required />
              <label htmlFor="male">男</label>
              <input type="radio" name="sex" id="female" value="female" required />
              <label htmlFor="female">女</label>
            </div>

            <div className="field">
              <label htmlFor="requirement">該当する参加条件にチェックを入れてください。<abbr title="required">*</abbr></label>
              <input type="radio" name="requirement" id="requirement1" value="1" required />
              <label htmlFor="requirement1">主催者いずれかの知人</label><br />
              <input type="radio" name="requirement" id="requirement2" value="2" required />
              <label htmlFor="requirement2">高専もしくは技大での在籍経験あり</label><br />
              <input type="radio" name="requirement" id="requirement3" value="3" required />
              <label htmlFor="requirement3">主催者と共通の知人が参加予定（所謂、友達の友達）</label><br />
            </div>

            <div className="field">
              <label htmlFor="event">合宿中にやりたいこと（ゲーム名など）があれば自由にお書きください。</label>
              <input type="text" name="event" id="event" />
            </div>

            <div className="field">
              <label htmlFor="note">備考</label>
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
