import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactThanksPage = () => (
  <Layout>
    <h1>送信が完了しました。</h1>
    <p>
      お問い合わせありがとうございます。<br />
      お問い合わせ内容について確認後、記載メールアドレス宛にご連絡いたしますので、今しばらくお待ちください。
    </p>
    <h2>送信元情報</h2>
    <p>
      送信元：DimensionP3<br />
      メールアドレス：dimensionp3@gmail.com<br />
      件名：お問い合わせへのご回答
    </p>
    <Link to="/">トップページへ</Link>
  </Layout>
)

export default ContactThanksPage