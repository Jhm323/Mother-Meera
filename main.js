import { LINKS, PROFILE, SITE } from "./constants.js";

// Set profile information
document.getElementById("profile-avatar").src = PROFILE.avatarUrl;
document.getElementById("profile-avatar").alt = PROFILE.avatarAlt;
document.getElementById("profile-name").textContent = PROFILE.name;
document.getElementById("profile-tagline").innerHTML = PROFILE.tagline.replace(
  /·/g,
  "&nbsp;·&nbsp;",
);
document.getElementById("copyright-name").textContent = SITE.copyrightName;

// Set page title and meta description
document.title = SITE.title;

document
  .querySelector('meta[name="description"]')
  .setAttribute("content", SITE.description);

// Render links
const linkList = document.getElementById("link-list");

LINKS.forEach((link) => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.className = `link-btn link-btn--${link.brand}`;
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";

  anchor.innerHTML = `
    <span class="link-btn__icon">
      <i class="fa-solid ${link.icon}"></i>
    </span>
    <span class="link-btn__label">${link.label}</span>
    <span class="link-btn__arrow">
      <i class="fa-solid fa-chevron-right"></i>
    </span>
  `;

  listItem.appendChild(anchor);
  linkList.appendChild(listItem);
});

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();
