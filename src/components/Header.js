import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>DimensionP3</h1>
                <p>ボードゲームだって、TRPGだって、遊び倒せ。<br />
                さあ、オフラインだけの遊びを。</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('schedule')}}>Schedule</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('history')}}>History</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
            <ul className="entrybtn">
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Entry</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header