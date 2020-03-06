import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const EntryThanksPage = () => (
  <Layout>
    <h1>エントリーを受け付けました。</h1>
    <p>
        詳細は後日連絡いたします。
    </p>
    <Link to="/">トップページへ</Link>
  </Layout>
)

export default EntryThanksPage