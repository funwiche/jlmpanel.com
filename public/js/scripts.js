window.onload = () => {
  const form = document.querySelector("#contact-form");
  const _success = document.querySelector("#error-success");
  const _error = document.querySelector("#error-alert");
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
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/mailer";
    // const url = "https://xtremnet.vercel.app/mailer";

    const fd = new FormData(e.target);
    const data = {
      to: "geral@jlmpanel.com",
    };
    fd.forEach((value, key) => {
      data[key] = value;
    });
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .catch((res) => {
        if (res.ok) alert("Message sent successfully!");
        else alert("An error occured. Please try again!");
      })
      .catch(() => {
        alert("An error occured. Please try again!");
      });

    console.log(data);
  });
};
