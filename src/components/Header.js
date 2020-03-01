import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-cubes"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>DimensionP3</h1>
                <p>
                ゲーム合宿企画<br />
                Let's play something !
                </p>
            </div>
        </div>
        <nav>
            <ul className="navbtn">
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('access')}}>Access</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('history')}}>History</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
            <ul className="entrybtn">
                {//<li><a href="javascript:void(0)">Coming Soon</a></li>
                }
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('entry')}}>Entry</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
