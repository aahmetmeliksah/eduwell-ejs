const indexPage = async (req, res) => {
  res.status(200).render("index");
};

const aboutPage = async (req, res) => {
  res.status(200).render("about");
};

module.exports = { indexPage, aboutPage };
