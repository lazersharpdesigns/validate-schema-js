# Object Validator Javacript

This library will validate javascript objects according to your specific requirements.
You can use built in validations or a custom validation function.

## Installation

Install validate-object-js with npm or yarn

```bash
  npm install validate-schema-js
  --or--
  yarn add validate-schema-js
```

## Documentation

Fields available are:
` required, type, min, max, isType, shouldBeTrue, custom`

### Important

1. Important: keys of validation schema and keys of object should match
2. Fields are required by defualt unless otherwise specified
3. Custom validation fields should always return true/false
4. isType field can be equal to any type and should be in a string format ex. `'string', 'undefined', 'boolean'`

## Demo

    const ValidateSchema = require("validate-schema-js");

    const data = {
      username: "sd",
      password: "1256!4",
      phone: "+12 111 1111",
      email: "test@test.test",
    };

    const user = new ValidateSchema({
      username: {
        required: false,
      },
      email: {
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

## Authors

- [@lazersharpdesigns](https://www.github.com/lazersharpdesigns)
