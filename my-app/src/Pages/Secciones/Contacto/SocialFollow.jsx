import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow'

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.facebook.com/futurodigitalecuador/"
        className="facebook social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/FuturoDigital6" 
      target="_blank" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/futurodigital6/?hl=es-la"
        target="_blank"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/futuro-digital-4603a4189/"
        target="_blank"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}
