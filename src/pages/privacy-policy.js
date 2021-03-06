import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const PrivacyPolicy = () => (
	<Layout>
    <Link to="/">トップページへ</Link>
    <br /><br />

    <h1>プライバシーポリシー</h1>
    <p>
      DimensionP3（以下、当団体）における個人情報について、以下のように個人情報の保護に努め、
      推進しますことを、プライバシーポリシーとして定めます。
    </p>

    <h2>個人情報・プライバシー管理について</h2>
    <p>
      当団体の個人情報・プライバシーとは、個人情報保護法における「個人情報」を指します。<br />
      生存する個人の情報を指し、氏名・生年月日・住所・各種連絡先・その他個人を認識できる情報が該当情報になります。
    </p>
    <p>
      当団体では、参加者・ユーザーの個人情報を適切に管理いたします。
    </p>
    <p>
      参加者・ユーザーからお預かりした個人情報は、
      当団体および主催者からの連絡・告知にのみ使用することとし、
      その他の目的では使用いたしません。
    </p>

    <h2>第三者への提供について</h2>
    <p>
      当団体では、以下の場合を除いて、参加者・ユーザーの同意を得ることなく第三者へ個人情報を提供することはございません。
      <ul>
        <li>法令に基づく提供・開示が必要な場合</li>
        <li>本人の同意を得ることが困難な状況で、人命・財産の保護に個人情報が必要である場合</li>
      </ul>
    </p>

    <h2>お問い合わせについて</h2>
    <p>
      本ポリシーについてのお問い合わせは、
      トップページの【Contact】もしくは以下の連絡先にてお願いいたします。
      <ul>
        <li>代表：Naga</li>
        <li>Email：dimensionp3.game@gmail.com</li>
        <li>Twitter：<a href="https://twitter.com/leanbody12">@leanbody12</a></li>
      </ul>
    </p>

    <p>制定日：2020年4月1日</p>
    <Link to="/">トップページへ</Link>
  </Layout>
)

export default PrivacyPolicy