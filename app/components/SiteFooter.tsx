export default function SiteFooter() {
  return (
    <footer id="footer" className="site-footer">
      <p>THANKS FOR WATCHING</p>
      <p className="footer-invitation">LET&apos;S CREATE SOMETHING NEW.</p>
      <div>
        <span>ZANE / 武子尧</span>
        <span>AIGC PERSONAL PORTFOLIO</span>
      </div>
      <small>© {new Date().getFullYear()} ZANE. All rights reserved.</small>
    </footer>
  );
}
