import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>DimensionP3</h1>
                <p>
                ゲーム合宿企画<br />
                Let's Play a Game!<br />
                </p>
            </div>
        </div>
        <nav>
            <ul className="navbtn">
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('about')}}><b>About</b></a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('access')}}><b>Access</b></a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('history')}}><b>History</b></a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('contact')}}><b>Contact</b></a></li>
            </ul>
            <ul className="entrybtn">
            {
                //<li><a href="javascript:void(0)">Coming Soon</a></li>
                <li><a href="javascript:void(0)" onClick={() => {props.onOpenArticle('entry')}}>Entry</a></li>
            }
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
