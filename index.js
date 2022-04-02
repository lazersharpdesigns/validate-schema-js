class ValidateSchema {
  constructor(schema) {
    this.schema = schema;
  }

  validate(obj) {
    const errors = [];

    // keys from schema
    const keysToValidate = Object.keys(this.schema);

    for (const key of keysToValidate) {
      // object with rules
      const rule = {
        required: true,
        type: "text",
        min: -1,
        max: -1,
        isType: -1,
        shouldBeTrue: -1,
        custom: () => true,
        ...this.schema[key],
      };
      // object to validate
      const value = obj[key];

      // validate required field
      if (rule.required && !value?.toString()?.trim()) {
        errors.push({ code: 4, message: `Please provide a ${key}` });
      } else {
        // validate type field
        if (rule.isType !== -1 && typeof value !== rule.isType) {
          errors.push({
            code: 2,
            message: `${key} is not of type ${rule.isType.toString()}`,
          });
        }

        // validate boolean
        if (rule.shouldBeTrue !== -1 && value !== rule.shouldBeTrue) {
          errors.push({
            code: 1,
            message: `${key} is not ${rule.shouldBeTrue.toString()}`,
          });
        }

        // validate email field
        if (rule.type === "email") {
          if (
            !String(value)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          ) {
            errors.push({
              code: 5,
              message: `Please provide a valid email address`,
            });
          }
        }

        // validate phone number
        if (rule.type === "phone") {
          if (
            !String(value)
              .toLowerCase()
              .match(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
              )
          ) {
            errors.push({
              code: 6,
              message: `Please provide a valid phone number`,
            });
          }
        }

        // validate custom function
        if (!rule.custom(value?.toString())) {
          errors.push({
            code: 7,
            message: `Custom validation for ${key} failed`,
          });
        }

        // validate min characters or objects
        if (rule.min > -1 && value.length < rule.min) {
          errors.push({
            code: 3,
            message: `Less than minimum allowed`,
          });
        }

        // validate min characters or objects
        if (rule.max > -1 && value.length > rule.max) {
          errors.push({
            code: 8,
            message: `More than maximum allowed`,
          });
        }
      }
    }

    return { success: errors.length < 1, errors };
  }
}

module.exports = ValidateSchema;
