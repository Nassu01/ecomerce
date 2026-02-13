export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Ecomerce</div>
            <p className="footer-text">
              Simple shop, clean UI. Black & white style.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Shop</h4>
              <a href="/categories">Categories</a>
              <a href="/">New arrivals</a>
              <a href="/">Best sellers</a>
            </div>

            <div className="footer-col">
              <h4>Help</h4>
              <a href="/">Support</a>
              <a href="/">Shipping</a>
              <a href="/">Returns</a>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Privacy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ecomerce</span>
          <span className="footer-dot">•</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
