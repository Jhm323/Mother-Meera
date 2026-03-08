import { LINKS, PROFILE, SITE } from "./constants.js";

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

// Render links
function createLinkTemplate(link) {
  return `
    <li>
      <a
        class="link-btn link-btn--${link.brand}"
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-btn__icon">
          <i class="fa-solid ${link.icon}"></i>
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

linkList.innerHTML = LINKS.map(createLinkTemplate).join("");

// Set current year
year.textContent = new Date().getFullYear();
