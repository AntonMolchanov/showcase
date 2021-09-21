const date = new Date().getFullYear()

const Footer = () => (
  <footer className="footer">
    <div className="copyright">
      Copyright © {date} BITL. All rights reserved
    </div>

    <ul className="terms">
      <li>
        <a href="#">Privacy Policy</a>
      </li>
      <li>
        <a href="#">Terms of Use</a>
      </li>
    </ul>
  </footer>
)

export default Footer