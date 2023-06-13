import { Link } from "react-router-dom";
import footerLogo from "../../../assets/images/chef-logo.png";
const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-400 to-indigo-400 font-semibold">
      <footer className="footer p-10 text-white">
        <div>
          <img className="h-10 w-10 rounded-full" src={footerLogo} alt="" />
          <p>
            Kitchen Genius
            <br />
            Established in 1990
          </p>
        </div>
        <div>
          <span className="footer-title">Restaurant Address</span>
          <a className="link link-hover">Level-6, 34, Mirpur, Dhaka</a>
          <a className="link link-hover">Support: kitchengenius.com</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">
            (Available : Sat - Thu, 5:00 AM to 10:00 PM)
          </a>
        </div>
        <div>
          <span className="footer-title">UseFul Links</span>
          <Link to="/blog" className="link link-hover">
            Blogs
          </Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
