const User = require("../models/auth-model");

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body.user,
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Successfully saved.");
    }
  );
};
