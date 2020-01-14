import PropTypes from 'prop-types'
import React from 'react'
//import pic02 from '../images/pic02.jpg'
//import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUru: false,
      startYear: 1990,
      endYear: 1999,
      selectMonth: 1,
    };
  }

  uru(year) {
    const u =
      ( year.target.value%400 === 0 ) ? true :
      ( year.target.value%100 === 0 ) ? false :
      ( year.target.value%4 === 0 ) ? true : false;
    this.setState({
      isUru: u,
    });
  }

  setSelectMonth(month) {
    this.setState({
      selectMonth: month.target.value,
    });
  }

  render() {
    let close = (
      <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    );

    const yearsOption = [];
    for (let y = this.state.startYear; y <= this.state.endYear; y++) {
      yearsOption.push(<option value={y}>{y}</option>);
    }

    const monthsOption = [];
    for (let m = 1; m <= 12; m++) {
      monthsOption.push(<option value={m}>{m}</option>);
    }

    const days = [31,(this.state.isUru?29:28),31,30,31,30,31,31,30,31,30,31];
    const dateOption = [];
    for (let d = 1; d <= days[this.state.selectMonth-1]; d++) {
      dateOption.push(<option value={d}>{d}</option>);
    }

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
          <h1 className="major">About</h1>
          <p>
          10～20人規模のゲーム合宿をしたいので、一緒に遊んでくれる仲間を探しています。<br />
          私たちのちょっとした野心にお付き合いくださると、とても嬉しいです。
          </p>
          <p>
            「大人になった今のほうが自由なはずなのに、泊まり込みで遊び倒すみたいな体験が小学生の時より少ない。」
            という呟きから、本企画が動き出しました。<br />
            合宿所を貸し切って、友達と、またそこでできた新たな友達と、好きなゲームで盛り上がる。<br />
            そして、それを定期開催する。<br />
            ゲームの種類に制限はありません。<br />
            TVゲームでも、ボードゲームでも、TRPGでも、なんでもOKです。<br />
            各々が「やりたい！」と思ったものを提案でき、参加することができます。<br />
            私たちはこれを「DimensionP3（ディメンジョンピースリー）」というグループとして、緩いつながりで長く続けていきたいと考えています。
          </p>
          <p>
            そこでお願いがあります。<br />
            泊まり込みで遊び、楽しみ、盛り上がるプレイヤーになりませんか？
          </p>
          <p>
            わたくしNaga（<a href="https://twitter.com/NagaYayoi">@NagaYayoi</a>）に加え、
            過去に十数人規模のTRPG合宿を個人で企画した実績のあるちゃこ氏（<a href="https://twitter.com/moco56">@moco56</a>）
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
            エントリー受付は【2020年5月1日】から行います。<br />
            その間に何で遊びたいか考えておくと、ワクワクするかもしれまんせん。<br />
            続報をお待ちください。
            {/*
            参加希望の方はEntryページの参加フォームをご記入の上、「ENTRY」ボタンより送信をお願いいたします。<br />
            ぜひぜひご参加ください！<br />
            */
            }
          </p>
          <p>
            Coming Soon...
            {/*
            Welcome to "DimensionP3" !<br />
            Get Ready !
            */
            }
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
          <h1 className="major">Access</h1>
          {/*
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          */}
          <p>
            開催日：2020年9月19日(土)～22日(火)のうちの二泊三日
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
          <h1 className="major">History</h1>
          {/*
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          */}
          <p>
            開催企画一覧
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/NagaYayoi"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Contact</h1>
          <form name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true"  action="thanks-contact">
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
          {close}
        </article>

        <article
          id="entry"
          className={`${this.props.article === 'entry' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Entry</h1>
          <form name="entry" method="post" data-netlify-honeypot="bot-field" data-netlify="true"  action="thanks-entry">
          <input type="hidden" name="form-name" value="entry" />
          <p>
            <abbr title="required">*</abbr> は必須項目です。<br />
            必須項目をご記入の上、一番下の「<b>ENTRY</b>」ボタンを押してください。
          </p>
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">【氏名】<abbr title="required">*</abbr></label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="ruby">【よみがな】<abbr title="required">*</abbr></label>
              <input type="text" name="ruby" id="ruby" required />
            </div>

            <div className="field half first">
              <label htmlFor="hn">【ハンドルネーム】<abbr title="required">*</abbr></label>
              <input type="text" name="hn" id="hn" required />
            </div>
            <div className="field half">
              <label htmlFor="email">【<b>Email</b>】<abbr title="required">*</abbr></label>
              <input type="text" name="email" id="email" required />
            </div>

            <div className="field third first">
              <label htmlFor="birth">【生年月日】<abbr title="required">*</abbr></label>
              <select name="selectYear" id="selectYear" onChange={(event) => {this.uru(event)}}>
                {yearsOption}
              </select><div align="right">年</div>
            </div>
            <div className="field third second">
              <label htmlFor="birth"><abbr title="required">*</abbr></label>
              <select name="selectMonth" id="selectMonth" onChange={(event) => {this.setSelectMonth(event)}}>
                {monthsOption}
              </select><div align="right">月</div>
            </div>
            <div className="field third">
              <label htmlFor="birth"><abbr title="required">*</abbr></label>
              <select name="selectDate" id="selectDate">
                {dateOption}
              </select><div align="right">日</div>
            </div>

            <div className="field">
              <label htmlFor="sex">【性別】<abbr title="required">*</abbr></label>
              <input type="radio" name="sex" id="male" value="male" required />
              <label htmlFor="male">男</label>
              <input type="radio" name="sex" id="female" value="female" required />
              <label htmlFor="female">女</label>
            </div>
            <br />

            <div className="field">
              <label htmlFor="requirement">【該当する参加条件にチェックを入れてください。】<abbr title="required">*</abbr></label>
              <input type="radio" name="requirement" id="requirement1" value="1" required />
              <label htmlFor="requirement1">主催者いずれかの知人</label><br />
              <input type="radio" name="requirement" id="requirement2" value="2" required />
              <label htmlFor="requirement2">高専もしくは技大での在籍経験あり</label><br />
              <input type="radio" name="requirement" id="requirement3" value="3" required />
              <label htmlFor="requirement3">主催者と共通の知人が参加予定（所謂、友達の友達）</label><br />
            </div>
            <br />

            <div className="field">
              <label htmlFor="event">【合宿中にやりたいこと（ゲーム名など）があればご自由にお書きください。】</label>
              <input type="text" name="event" id="event" />
            </div>
            <br />

            <div className="field">
              <label htmlFor="note">【備考】</label>
              <textarea name="note" id="note" rows="3"></textarea>
            </div>
            <br />

          <div className="field">
            <label htmlFor="agreement">【以下の禁止行為・持込禁止物をお読みください。】<abbr title="required">*</abbr></label>
            <p>
              ◆禁止行為◆<br />
              　本ゲーム合宿では、以下の行為を禁止します。違反した場合は次回からの参加をお断りする場合があります。
              <ol>
                <li>他の参加者や近隣に迷惑のかかる行為
                  <ul>
                    <li>会場施設を乱暴に扱うこと</li>
                    <li>著しい騒音を出すこと</li>
                    <li>コスプレをすること</li>
                    <li>飲酒すること　など</li>
                  </ul>
                </li>
                <li>法令に違反する行為
                  <ul>
                    <li>会場近隣で路上駐車すること　など</li>
                  </ul>
                </li>
                <li>悪質な勧誘行為</li><br />
                <li>その他、主催者・警察署・消防署の指示に従わない行為</li>
              </ol>
              ◆持込禁止物◆<br />
              　本ゲーム合宿では、以下の物品の持ち込みを禁止します。違反した場合は次回からの参加をお断りする場合があります。
            <ol>
              <li>法令で所持・携帯が禁止、あるいは犯罪として摘発される可能性が高いもの
                <ul>
                  <li>消防法での危険物とされるもの（燃料・火薬・発火物など）</li>
                  <li>銃刀法での規制対象となっている銃砲・刀剣類（模造品を含む）　など</li>
                </ul>
              </li>
              <li>動物・ペット</li><br />
              <li>その他、主催者・警察署・消防署が危険と判断したもの</li>
            </ol>
            以上をご理解の上、下の「同意する」にチェックをお願いします。
            </p>
            <input type="checkbox" name="agreement" id="agreement_check" value="check" required />
            <label htmlFor="agreement_check">同意する</label>
          </div>
          <br />

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
  onOpenArticle: PropTypes.func,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
