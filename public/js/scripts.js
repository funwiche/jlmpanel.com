window.onload = () => {
  const allItems = document.querySelectorAll(".grid-item");
  allItems.forEach((item) => {
    const rowHeight = 10; // Same as grid-auto-rows
    const rowGap = 16; // Match grid gap if any
    const contentHeight = item
      .querySelector("img")
      .getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan}`;
  });
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      const error = document.querySelector("#error-alert");
      const success = document.querySelector("#success-alert");
      const loading = document.querySelector("#loading-elt");

      const to = "geral@jlmpanel.com";
      const url = "https://xtremnet.vercel.app/mailer";

      const formData = new FormData(this);

      // Convert FormData to JSON
      const data = Object.fromEntries(formData.entries());
      loading.classList.remove("hidden");
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, ...data }),
      })
        .then((res) => {
          if (res.ok) success.classList.remove("hidden");
          else error.classList.remove("hidden");
        })
        .catch(() => error.classList.remove("hidden"))
        .finally(() => {
          loading.classList.add("hidden");
          setTimeout(() => {
            error.classList.add("hidden");
            success.classList.add("hidden");
          }, 6000);
        });
    });
};
