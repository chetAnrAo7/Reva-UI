import { useNavigate } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import "../Css/Home.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <main className="reva-landing">
      {/* Full-screen cinematic background */}
      <video
        className="reva-cover-video"
        src="https://res.cloudinary.com/dcwmbpzst/video/upload/v1791730730/Reva_Home_Page_g3codp.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Contrast overlays */}
      <div className="reva-video-overlay" />

      {/* Main content */}
      <section className="reva-hero">
        <div className="reva-brand-mark" aria-label="REVA">
          <span className="reva-letter reva-r">R</span>
          <span className="reva-letter reva-e">E</span>
          <span className="reva-letter reva-v">V</span>
          <span className="reva-letter reva-a">A</span>
        </div>

        <div className="reva-intro">
          <span className="reva-eyebrow">
            <Leaf size={15} />
            A WORLD WORTH REVISITING
          </span>

          <h1>Revisiting Earth's Visual Art</h1>

          <p className="reva-tagline">
            See the world differently.
          </p>

          <p className="reva-description">
            Discover the beauty of nature, the magic of places,
            and the moments that make our world extraordinary.
          </p>
        </div>

        <button
          className="reva-get-started"
          onClick={() => navigate("/about")}
        >
          <span>Get Started</span>
          <ArrowRight size={19} />
        </button>

        <p className="reva-footer-note">
          YOUR WORLD. A DIFFERENT PERSPECTIVE.
        </p>
      </section>
    </main>
  );
}

export default Homepage;