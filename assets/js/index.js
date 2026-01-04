document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".app-section");
  function showSection(id) {
    sections.forEach((s) => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
  }
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) =>
        l.classList.remove("bg-blue-500/10", "text-blue-400")
      );
      link.classList.add("bg-blue-500/10", "text-blue-400");
      const sectionId = link.dataset.section;
      showSection(sectionId);

      if (sectionId === "today-in-space") getTodaySpace();
      if (sectionId === "launches") getLaunches();
      if (sectionId === "planets") getPlanets();
    });
  });

  showSection("today-in-space");
  getTodaySpace();

  const res = "";
  const data = "";

  async function getTodaySpace() {
    res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    data = await res.json();
    document.getElementById("apod-title").textContent = data.title;
    document.getElementById("apod-date").textContent = data.date;
    document.getElementById("apod-explanation").textContent = data.explanation;
    document.getElementById("apod-image").src = data.url;
  }

  async function getLaunches() {
    try {
      const res = await fetch(
        "https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10"
      );
      const data = await res.json();

      const grid = document.getElementById("launches-grid");
      grid.innerHTML = "";
      data.results.forEach((l) => {
        const image =
          l.image && l.image.length > 0
            ? l.image
            : "./assets/images/launch-placeholder.png";

        const statusColor =
          l.status?.abbrev === "Go"
            ? "bg-green-500/90"
            : l.status?.abbrev === "TBD"
            ? "bg-blue-500/90"
            : "bg-yellow-500/90";
        grid.innerHTML += `
        <div
          class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer"
        >
          <!-- IMAGE -->
          <div class="relative h-48 bg-slate-900/50 overflow-hidden">
            <img
              src="${image}"
              alt="${l.name}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div class="absolute top-3 right-3">
              <span
                class="px-3 py-1 ${statusColor} text-white backdrop-blur-sm rounded-full text-xs font-semibold"
              >
                ${l.status?.abbrev ?? "TBD"}
              </span>
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-5">
            <div class="mb-3">
              <h4
                class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors"
              >
                ${l.name}
              </h4>
              <p class="text-sm text-slate-400 flex items-center gap-2">
                <i class="fas fa-building text-xs"></i>
                ${l.launch_service_provider?.name ?? "Unknown"}
              </p>
            </div>

            <div class="space-y-2 mb-4 text-sm">
              <div class="flex items-center gap-2">
                <i class="fas fa-calendar text-slate-500 w-4"></i>
                <span class="text-slate-300">
                  ${new Date(l.net).toDateString()}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-clock text-slate-500 w-4"></i>
                <span class="text-slate-300">
                  ${new Date(l.net).toUTCString().slice(17, 22)} UTC
                </span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-rocket text-slate-500 w-4"></i>
                <span class="text-slate-300">
                  ${l.rocket?.configuration?.name ?? "N/A"}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fas fa-map-marker-alt text-slate-500 w-4"></i>
                <span class="text-slate-300 line-clamp-1">
                  ${l.pad?.name ?? "Unknown Location"}
                </span>
              </div>
            </div>

            <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
              <button
                class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold"
              >
                Details
              </button>
              <button
                class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      });
      document.getElementById(
        "launches-count"
      ).textContent = `${data.results.length} Launches`;
      document.getElementById("launches-count-mobile").textContent =
        data.results.length;
    } catch (err) {
      console.error("Launches Error:", err);
    }
  }

  async function getPlanets() {
    res = await fetch("https://api.le-systeme-solaire.net/rest/bodies/");
    data = await res.json();
    const planets = data.bodies.filter((b) => b.isPlanet);
    document.querySelectorAll(".planet-card").forEach((card) => {
      const planet = planets.find(
        (p) => p.englishName.toLowerCase() === card.dataset.planetId
      );
      if (!planet) return;
      card.onclick = () => {
        document.getElementById("planet-detail-name").textContent =
          planet.englishName;
        document.getElementById("planet-radius").textContent =
          planet.meanRadius + " km";
        document.getElementById("planet-gravity").textContent = planet.gravity;
        document.getElementById("planet-moons").textContent =
          planet.moons?.length || 0;
      };
    });
  }
});
