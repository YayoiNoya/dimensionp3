import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThanksPage = () => (
  <Layout>
    <h1>送信が完了しました！</h1>
    <p>お問い合わせありがとうございます！</p>
    <Link to="/">トップページへ</Link>
  </Layout>
)

export default ThanksPage