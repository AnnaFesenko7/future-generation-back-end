const getCurrent = async (req, res) => {
  const { email, name, language } = req.user;

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      email,
      name,
      language,
    },
  });
};
module.exports = getCurrent;
