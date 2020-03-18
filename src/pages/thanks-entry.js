import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const EntryThanksPage = () => (
  <Layout>
    <h1>エントリーを受け付けました。</h1>
    <p>
        後日、記載メールアドレス宛に詳細をご連絡いたしますので、今しばらくお待ちください。
    </p>
    <h2>送信元情報</h2>
    <p>
      送信元：Dimension P3<br />
      メールアドレス：dimensionp3.game@gmail.com<br />
      件名：ゲーム合宿開催情報のお知らせ
    </p>
    <Link to="/">トップページへ</Link>
  </Layout>
)

export default EntryThanksPage