const ValidateSchema = require(".");

const data = {
  username: "",
  password: "1256!4",
  phone: "+27812383898",
  email: "rppieterser@gmail.com",
};

const user = new ValidateSchema({
  username: {
    required: false,
  },
  email: {
    required: true,
    type: "email",
  },
  phone: {
    type: "phone",
  },
  password: {
    required: true,
    min: 6,
    custom: (val) => {
      return val?.includes("!");
    },
  },
});

console.log(user.validate(data));
