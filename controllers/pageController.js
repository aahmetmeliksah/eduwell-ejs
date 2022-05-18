const indexPage = async (req, res) => {
  res.status(200).render("index");
};

const aboutPage = async (req, res) => {
  res.status(200).render("about");
};

const ourServicesPage = async (req, res) => {
  res.status(200).render("our-services");
};

module.exports = { indexPage, aboutPage, ourServicesPage };
