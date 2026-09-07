import { Link } from "react-router";
import Header from "./components/Header";
import "./NotFoundPage.css";
function NotFoundPage() {
  return (
    <>
      <Header />

      <div class="not-found-page">
        <div class="not-found-content">
          <div class="not-found-code">404</div>

          <h1 class="not-found-title">Page Not Found</h1>

          <p class="not-found-message">
            Sorry, we couldn't find the page you're looking for. It may have
            been moved, deleted, or the URL may be incorrect.
          </p>

          <div class="not-found-actions">
            <Link to="/" class="home-button">
              Back to Home
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
export default NotFoundPage;
