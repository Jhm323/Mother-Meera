document.documentElement.classList.remove("no-js");

import { LINKS, PROFILE, SITE } from "./constants.js";

// Platform map
const PLATFORM_CONFIG = {
  youtube: {
    icon: "fa-youtube",
    brand: "youtube",
  },
  facebook: {
    icon: "fa-facebook-f",
    brand: "facebook",
  },
  instagram: {
    icon: "fa-instagram",
    brand: "instagram",
  },
  twitter: {
    icon: "fa-x-twitter",
    brand: "twitter",
  },
  spotify: {
    icon: "fa-spotify",
    brand: "spotify",
  },
};

// Cache DOM elements
const avatar = document.getElementById("profile-avatar");
const avatarFallback = document.querySelector(".avatar-fallback");
const name = document.getElementById("profile-name");
const tagline = document.getElementById("profile-tagline");
const linkList = document.getElementById("link-list");
const copyrightName = document.getElementById("copyright-name");
const year = document.getElementById("year");

// Set profile information
avatar.src = PROFILE.avatarUrl;
avatar.alt = PROFILE.avatarAlt;

avatar.addEventListener("error", () => {
  avatar.style.display = "none";
  avatarFallback.style.display = "flex";
});

name.textContent = PROFILE.name;

tagline.innerHTML = PROFILE.tagline.replace(/·/g, "&nbsp;·&nbsp;");

copyrightName.textContent = SITE.copyrightName;

// Set page title and meta description
document.title = SITE.title;

document
  .querySelector('meta[name="description"]')
  .setAttribute("content", SITE.description);

function detectPlatform(url) {
  const lower = url.toLowerCase();

  if (lower.includes("youtube")) return PLATFORM_CONFIG.youtube;
  if (lower.includes("facebook")) return PLATFORM_CONFIG.facebook;
  if (lower.includes("instagram")) return PLATFORM_CONFIG.instagram;
  if (lower.includes("twitter") || lower.includes("x.com"))
    return PLATFORM_CONFIG.twitter;
  if (lower.includes("spotify")) return PLATFORM_CONFIG.spotify;

  return {
    icon: "fa-globe",
    brand: "website",
  };
}

// Render links
function createLinkTemplate(link, index) {
  const delay = index * 0.07;
  const { icon, brand } = detectPlatform(link.url);

  return `
    <li>
      <a
        class="link-btn link-btn--${brand}"
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
                style="animation-delay: ${delay}s"
                  data-link-label="${link.label}"


      >
        <span class="link-btn__icon">
          <i class="fa-solid ${icon}"></i>
        </span>

        <span class="link-btn__label">
          ${link.label}
        </span>

        <span class="link-btn__arrow">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </a>
    </li>
  `;
}

// Clear fallback links before rendering dynamic links
linkList.innerHTML = "";

// Render animated links
linkList.innerHTML = LINKS.map((link, index) =>
  createLinkTemplate(link, index),
).join("");

// Set current year
year.textContent = new Date().getFullYear();

// Click Listener
linkList.addEventListener("click", (event) => {
  const link = event.target.closest("a");

  if (!link) return;

  const label = link.dataset.linkLabel;

  if (window.plausible) {
    plausible("Social Link Click", {
      props: {
        link: label,
      },
    });
  }
});
