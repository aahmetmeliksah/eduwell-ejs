const indexPage = async (req, res) => {
  console.log(req.session.userID);
  res.status(200).render("index");
};

const aboutPage = async (req, res) => {
  res.status(200).render("about");
};

const ourServicesPage = async (req, res) => {
  res.status(200).render("our-services");
};

const loginPage = async (req, res) => {
  res.status(200).render("login");
};

const registerPage = async (req, res) => {
  res.status(200).render("register");
};

module.exports = {
  indexPage,
  aboutPage,
  ourServicesPage,
  loginPage,
  registerPage,
};
