const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Set Handlebars as the view engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Static files (CSS, JS, etc.)
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("home", { path: "/", title: "Excellence in Wood" });
});
app.get("/about-us", (req, res) => {
  res.render("about-us", { path: "/about-us", title: "About Us" });
});
app.get("/contacts", (req, res) => {
  res.render("contacts", { path: "/contacts", title: "Contacts" });
});
app.get("/our-services", (req, res) => {
  res.render("our-services", { path: "/our-services", title: "Our Services" });
});
app.get("/certification", (req, res) => {
  res.render("certification", {
    path: "/certification",
    title: "Certification",
  });
});
app.get("/quality-policy", (req, res) => {
  res.render("quality-policy", {
    path: "/quality-policy",
    title: "Quality Policy",
  });
});
app.get("/environmental-sustainability", (req, res) => {
  res.render("environmental-sustainability", {
    path: "/environmental-sustainability",
    title: "Environmental sustainability",
  });
});
app.get("/partners", (req, res) => {
  res.render("partners", {
    path: "/brands",
    title: "Brands",
  });
});
app.get("/news", (req, res) => {
  res.render("news", {
    path: "/news",
    title: "News",
    items: require("./resources/news.json"),
  });
});
app.get("/news/eudr_en", (req, res) => {
  res.render("news/eudr_en", {
    path: "/news/eudr_en",
    title: "EU Regulation 2023/1115 (EUDR)",
  });
});
app.get("/news/lets-celebrate-30-years", (req, res) => {
  res.render("news/lets-celebrate-30-years", {
    path: "/news/lets-celebrate-30-years",
    title: "LET’S CELEBRATE – 30 YEARS",
  });
});
app.get("/news/resultados_2023en", (req, res) => {
  res.render("news/resultados_2023en", {
    path: "/news/resultados_2023en",
    title: "Analyzing the past to strengthen the future",
  });
});
app.get("/news/mobis23-2", (req, res) => {
  res.render("news/mobis23-2", {
    path: "/news/mobis23-2",
    title: "XIV Gala do Prémio Mobis",
  });
});
app.get("/news/pff2023-2", (req, res) => {
  res.render("news/pff2023-2", {
    path: "/news/pff2023-2",
    title: "Pioneering the Future of Furniture",
  });
});
app.get("/news/dubaiwoodshow23en", (req, res) => {
  res.render("news/dubaiwoodshow23en", {
    path: "/news/dubaiwoodshow23en",
    title: "We were present at the DUBAI WOOD SHOW 23",
  });
});
app.get("/news/merit_medal-2-2", (req, res) => {
  res.render("news/merit_medal-2-2", {
    path: "/news/merit_medal-2-2",
    title: "DUBAI WOOD SHOW 7 – 9 MAR 2023",
  });
});
app.get("/news/merit_medal-2", (req, res) => {
  res.render("news/merit_medal-2", {
    path: "/news/merit_medal-2",
    title: "FIMAP 2022",
  });
});
app.get("/news/merit_medal", (req, res) => {
  res.render("news/merit_medal", {
    path: "/news/merit_medal",
    title: "Recognition with a Municipal Merit Medal",
  });
});
app.get("/news/installation_kiln_dry-2", (req, res) => {
  res.render("news/installation_kiln_dry-2", {
    path: "/news/installation_kiln_dry-2",
    title:
      "What distinguishes us from companies in the same industry? The quality of our organization in terms of production and services.",
  });
});
app.get("/alder", (req, res) => {
  res.render("products/alder", {
    layout: false,
    path: "/alder",
    title: "Alder",
  });
});
app.get("/american-cherry-wood", (req, res) => {
  res.render("products/american-cherry-wood", {
    layout: false,
    path: "/american-cherry-wood",
    title: "American cherry wood",
  });
});
app.get("/nogueira-americana-2", (req, res) => {
  res.render("products/nogueira-americana-2", {
    layout: false,
    path: "/nogueira-americana-2",
    title: "American Walnut",
  });
});
app.get("/ash", (req, res) => {
  res.render("products/ash", { layout: false, path: "/ash", title: "Ash" });
});
app.get("/beechwood", (req, res) => {
  res.render("products/beechwood", {
    layout: false,
    path: "/beechwood",
    title: "Beechwood",
  });
});
app.get("/birch-wood", (req, res) => {
  res.render("products/birch-wood", {
    layout: false,
    path: "/birch-wood",
    title: "Birchwood",
  });
});
app.get("/brown", (req, res) => {
  res.render("products/brown", {
    layout: false,
    path: "/brown",
    title: "Chestnut",
  });
});
app.get("/european-oak", (req, res) => {
  res.render("products/european-oak", {
    layout: false,
    path: "/european-oak",
    title: "European Oak",
  });
});
app.get("/european-cherry-wood", (req, res) => {
  res.render("products/european-cherry-wood", {
    layout: false,
    path: "/european-cherry-wood",
    title: "European cherry wood",
  });
});
app.get("/hornbeam", (req, res) => {
  res.render("products/hornbeam", {
    layout: false,
    path: "/hornbeam",
    title: "Hornbeam",
  });
});
app.get("/linden-tree", (req, res) => {
  res.render("products/linden-tree", {
    layout: false,
    path: "/linden-tree",
    title: "Linden",
  });
});
app.get("/sycamore", (req, res) => {
  res.render("products/sycamore", {
    layout: false,
    path: "/sycamore",
    title: "Sycamore",
  });
});
app.get("/tulip-tree", (req, res) => {
  res.render("products/tulip-tree", {
    layout: false,
    path: "/tulip-tree",
    title: "Tulipwood",
  });
});
app.get("/edge_glued_panels", (req, res) => {
  res.render("products/edge_glued_panels", {
    layout: false,
    path: "/edge_glued_panels",
    title: "Cherry Triply three-layer panels",
    desc: "Cherry Triply three-layer panels & worktops are available in a wide range of constructions, sizes & thicknesses.",
  });
});
app.get("**", async (req, res) => {
  res.render("404", { path: "", title: "Page not found" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`http://localhost:${port}`));

// nutrivegagricola.com
// francealigrain.com
// melkgeit.com
// pioneerglobalgmbh.com
