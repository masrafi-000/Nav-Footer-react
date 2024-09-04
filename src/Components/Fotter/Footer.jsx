import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="line"></div>
        <div className="up-side">
          <div className="footer-card">
            <h2>Resources</h2>
            <p>Gift Cards</p>
            <p>Find a Store</p>
            <p>Membership</p>
            <p>Nike x NBA</p>
            <p>Nike Journal</p>
            <p>Site Feedback</p>
          </div>
          <div className="footer-card">
            <h2>Help</h2>
            <p>Get Help</p>
            <p>Order Status</p>
            <p>Shipping and Delivery</p>
            <p>Returns</p>
            <p>Order Cancellation</p>
            <p>Payment Options</p>
            <p>Gift Card Balance</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-card">
            <h2>Company</h2>
            <p>About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Purpose</p>
            <p>Sustainability</p>
          </div>
          <div className="footer-card">
            <h2>Promotions & Discounts</h2>
            <p>Student</p>
            <p>Military</p>
            <p>Teacher</p>
            <p>Nike x NBA</p>
            <p>First Responders & Medical Professionals</p>
            <p>Birthday</p>
          </div>
        </div>
        <div className="down-line">
          <span>&copy; 2024 Nike, Inc. All Rights Reserved</span>
          <span>Guides</span>
          <span>Terms of Sale</span>
          <span>Terms of Use</span>
          <span>Nike Privacy Policy</span>
          <span>Your Privacy Choices</span>
          <span>CA Supply Chains Act</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
