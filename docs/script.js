const campaignData = [
  {
    title: "Library Resource Drive",
    description: "Raise funds for books, shelves, and reading materials for upper primary.",
    status: "Active",
  },
  {
    title: "Sports Equipment Fund",
    description: "Support inter-school sports by replacing worn-out training gear.",
    status: "Upcoming",
  },
  {
    title: "Term 1 Uniform Support",
    description: "Delivered uniforms and basic supplies to students in need.",
    status: "Completed",
  },
];

const eventData = [
  {
    title: "Alumni Homecoming",
    description: "School grounds meetup and fundraising launch.",
    date: "19 July 2026",
    status: "Upcoming",
  },
  {
    title: "Community Walkathon",
    description: "Sponsored walk to support classroom repairs.",
    date: "2 August 2026",
    status: "Upcoming",
  },
  {
    title: "Fundraising Dinner",
    description: "Tickets sold through alumni chapter representatives.",
    date: "15 May 2026",
    status: "Completed",
  },
];

const projectData = [
  {
    title: "Classroom Roofing",
    description: "Phase 1 complete. Two classrooms received repaired roofing sheets.",
    status: "Completed",
  },
  {
    title: "Computer Lab Refresh",
    description: "Procurement started for eight refurbished desktop units.",
    status: "Active",
  },
  {
    title: "Sanitation Upgrade",
    description: "Awaiting contractor scheduling after fundraising target is reached.",
    status: "Upcoming",
  },
];

const statusClass = {
  active: "active",
  upcoming: "upcoming",
  completed: "completed",
};

function renderCards(listId, items, mapItem) {
  const container = document.getElementById(listId);
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const payload = mapItem(item);
      const status = String(payload.status || "").toLowerCase();

      return `
        <article class="card">
          <h3>${payload.title}</h3>
          <p>${payload.description}</p>
          ${payload.meta ? `<p><strong>${payload.meta}</strong></p>` : ""}
          <span class="status ${statusClass[status] || ""}">${payload.status}</span>
        </article>
      `;
    })
    .join("");
}

function attachSimpleForm(formId, successMessage) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const message = form.querySelector(".form-message");
    if (!message) return;

    message.textContent = successMessage;
    message.classList.remove("error");
    message.classList.add("success");
    form.reset();
  });
}

function setupMenuToggle() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

renderCards("campaign-list", campaignData, (item) => item);
renderCards("event-list", eventData, (item) => ({
  title: item.title,
  description: item.description,
  meta: `Date: ${item.date}`,
  status: item.status,
}));
renderCards("project-list", projectData, (item) => item);
attachSimpleForm("donation-form", "Thank you. Your pledge has been recorded for backend processing.");
attachSimpleForm("contact-form", "Thank you for reaching out. The alumni team will contact you soon.");
setupMenuToggle();
