const checkUserId = (req, res, next) => {
  // {id: 2}
  const { id } = req.params;
  if (isNaN(id)) {
    res
      .status(409)
      .send({ type: "error", msg: "El id tiene que ser un número entero" });
  } else {
    next();
  }
};

module.exports = {
  checkUserId,
};
