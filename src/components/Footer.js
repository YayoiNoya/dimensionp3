import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">
            <a href="/privacy-policy">プライバシーポリシー</a>｜
            <a href="https://github.com/YayoiNoya/dimensionp3/">GitHub</a><br />
            &copy;2019 DimensionP3. Design: <a href="https://html5up.net/">HTML5 UP</a>.
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
