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
/*
    var StartYear = 1990;
    var LastYear = 2000;

    function Uru(Year){
      var uru =
      ( Year%400 === 0 ) ? true :
      ( Year%100 === 0 ) ? false :
      ( Year%4 === 0 ) ? true : false;
      return uru;
    }

    function setSelectYear(){
      for(var y=StartYear; y<LastYear; y++){
        var select = document.entry.selectYear;
        var option = select.appendChild( document.createElement('option') );
        option.value = y;
        option.text = y;
      }
      setSelectMonth();
    }
    setSelectYear();

    function setSelectMonth(){
      var select = document.entry.selectMonth;
      while( select.options.length ){
        select.removeChild( select.options[0] );
      }
      for(var m=1; m<=12; m++){
        var option = select.appendChild( document.createElement('option') );
        option.value = m;
        option.text = m;
      }
      setSelectDate();
    }

    function setSelectDate(){
      var Year =
      document.entry.selectYear.options[
      document.entry.selectYear.selectedIndex
      ].value;
      var Month =
      document.entry.selectMonth.options[
      document.entry.selectMonth.selectedIndex
      ].value;
      var days =
      [31,( Uru(Year) ? 29 : 28 ),31,30,31,30,31,31,30,31,30,31];
      var select = document.entry.selectDate;
      while( select.options.length ){
      select.removeChild( select.options[0] );
      }
      for(var d=1; d<=days[Month-1]; d++){
      var option = select.appendChild( document.createElement('option') );
      option.value = d;
      option.text = d;
      }
    }
*/

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
          20人規模のゲーム合宿をしたいので、一緒に遊んでくれる仲間を探しています。<br />
          私たちのちょっとした野心にお付き合いくださると、とても嬉しいです。
          </p>
          <p>
            「大人になった今のほうが自由なはずなのに、泊まり込みで遊び倒すみたいな体験が小学生の時より少ない。」
            という呟きから、本企画が動き出しました。<br />
            合宿所を貸し切って、友達と、またそこでできた新たな友達と、好きなゲームで盛り上がる。<br />
            そして、それを定期開催する。<br />
            ゲームの種類に制限はありません。<br />
            【TVゲーム】でも【ボードゲーム】でも【TRPG】でも、なんでもOKです。<br />
            各々が「やりたい！」と思ったものを提案でき、参加することができます。<br />
            私たちはこれを「DimensionP3（ディメンジョンピースリー）」というグループとして、緩いつながりで長く続けていきたいと考えています。
          </p>
          <p>
            そこでお願いがあります。<br />
            泊まり込みで遊び、楽しみ、盛り上がるプレイヤーになりませんか？
          </p>
          <p>
            わたくしNaga（Twitter：<a href="https://twitter.com/NagaYaorochi">@NagaYaorochi</a>）に加え、
            過去に十数人規模のTRPG合宿を個人で企画した実績のあるちゃこ氏（Twitter：<a href="https://twitter.com/moco56">@moco56</a>）
            との共同主催という形で、より多くのつながりができることを保証いたします。<br />
            「どんな人が参加するかわからなくて不安...」という方もご安心ください。<br />
            初回の参加条件は以下のようにしてあります。<br /><br />
            <ul>
              <li>主催者いずれかの知人</li>
              <li>高専もしくは技大の在籍経験者</li>
              <li>主催者と共通の知人がいる人（友達の友達）</li>
            </ul>
            要するに、共通の属性をお持ちの方ということになります。
          </p>
          <p>
            定期開催イベントにおける初回メンバーはとても重要な存在です。<br />
            次回以降の雰囲気を大きく決める要素になりますし、初回ならではの「はじめまして」感を体験できることでしょう。<br />
            それは後々強いつながりを生むことになるかもしれません。
          </p>
          <p>
            参加希望の方はEntryページの参加フォームをご記入の上、「ENTRY」ボタンより送信をお願いいたします。<br />
            ぜひぜひご参加ください！<br />
          </p>
          <p>
            Welcome to "DimensionP3" !<br />
            Get Ready !
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
              <select name="selectYear" id="selectYear"></select><div align="right">年</div>
            </div>
            <div className="field third second">
              <label htmlFor="birth"><abbr title="required">*</abbr></label>
              <select name="selectMonth" id="selectMonth"></select><div align="right">月</div>
            </div>
            <div className="field third">
              <label htmlFor="birth"><abbr title="required">*</abbr></label>
              <select name="selectDate" id="selectDate"></select><div align="right">日</div>
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
