document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("menu-ready");

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (header && menuToggle && navigation) {
    const setMenu = (isOpen) => {
      header.classList.toggle("nav-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    };

    menuToggle.addEventListener("click", () => {
      setMenu(!header.classList.contains("nav-open"));
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenu(false);
        menuToggle.focus();
      }
    });

    const desktopMenu = window.matchMedia("(min-width: 981px)");
    desktopMenu.addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });
  }

  const search = document.querySelector("#method-search");
  const cards = Array.from(document.querySelectorAll("[data-method-card]"));
  const filters = Array.from(document.querySelectorAll("[data-filter]"));
  const resultCount = document.querySelector("[data-result-count]");
  const noResults = document.querySelector("[data-no-results]");

  if (search && cards.length > 0) {
    let activeFilter = "all";

    const normalize = (value) => value
      .toLocaleLowerCase("pl")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const updateCatalog = () => {
      const query = normalize(search.value.trim());
      let visible = 0;

      cards.forEach((card) => {
        const categories = card.dataset.categories.split(" ");
        const matchesFilter = activeFilter === "all" || categories.includes(activeFilter);
        const matchesSearch = !query || normalize(card.dataset.search).includes(query);
        const show = matchesFilter && matchesSearch;
        card.hidden = !show;
        if (show) visible += 1;
      });

      resultCount.textContent = String(visible);
      noResults.hidden = visible !== 0;
    };

    search.addEventListener("input", updateCatalog);

    filters.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        filters.forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        updateCatalog();
      });
    });
  }
});
