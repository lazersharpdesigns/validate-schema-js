const ValidateSchema = require(".");

// return failed
const dataWithRequiredField = {
  username: "",
};
const dataWithBooleanField = {
  accept: false,
};
const dataWithTypeField = {
  select: 123,
};
const dataWithEmailField = {
  email: "rppieterser@gmail",
};

const dataWithPhoneField = {
  phone: "812 83898",
};

const dataWithMinField = {
  password: "12",
};

const dataWithMaxField = {
  password: "1256!",
};

const dataWithCustomField = {
  password: "1256444",
};

// return success
const dataWithRequiredField2 = {
  username: "dfv",
};

const dataWithEmailField2 = {
  email: "rppieterser@gmail.com",
};

const dataWithPhoneField2 = {
  phone: "0812383898",
};

const dataWithMinField2 = {
  password: "12dascear",
};

const dataWithMaxField2 = {
  password: "1!",
};

const dataWithCustomField2 = {
  password: "12564!44",
};

const dataWithBooleanField2 = {
  accept: true,
};
const dataWithTypeField2 = {
  select: "hello",
};

// schemas
const validateRequired = new ValidateSchema({
  username: {
    required: true,
  },
});
const validateBoolean = new ValidateSchema({
  accept: {
    shouldBeTrue: true,
  },
});
const validateType = new ValidateSchema({
  select: {
    isType: "string",
  },
});

const validateEmail = new ValidateSchema({
  email: {
    type: "email",
  },
});

const validatePhone = new ValidateSchema({
  phone: {
    type: "phone",
  },
});

const validateMin = new ValidateSchema({
  password: {
    min: 6,
  },
});

const validateMax = new ValidateSchema({
  password: {
    max: 3,
  },
});

const validateCustom = new ValidateSchema({
  password: {
    custom: (val) => {
      return val?.includes("!");
    },
  },
});

test("Field is required fail", () => {
  const test = validateRequired.validate(dataWithRequiredField);
  expect(test.success).toBe(false);
});

test("Field is email fail", () => {
  const test = validateEmail.validate(dataWithEmailField);
  expect(test.success).toBe(false);
});

test("Field is phone fail", () => {
  const test = validatePhone.validate(dataWithPhoneField);
  expect(test.success).toBe(false);
});

test("Field is min fail", () => {
  const test = validateMin.validate(dataWithMinField);
  expect(test.success).toBe(false);
});

test("Field is max fail", () => {
  const test = validateMax.validate(dataWithMaxField);
  expect(test.success).toBe(false);
});

test("Field is custom fail", () => {
  const test = validateCustom.validate(dataWithCustomField);
  expect(test.success).toBe(false);
});

test("Field is true fail", () => {
  const test = validateBoolean.validate(dataWithBooleanField);
  expect(test.success).toBe(false);
});

test("Field is string fail", () => {
  const test = validateType.validate(dataWithTypeField);
  expect(test.success).toBe(false);
});

test("Field is required pass", () => {
  const test = validateRequired.validate(dataWithRequiredField2);
  expect(test.success).toBe(true);
});

test("Field is email pass", () => {
  const test = validateEmail.validate(dataWithEmailField2);
  expect(test.success).toBe(true);
});

test("Field is phone pass", () => {
  const test = validatePhone.validate(dataWithPhoneField2);
  expect(test.success).toBe(true);
});

test("Field is min pass", () => {
  const test = validateMin.validate(dataWithMinField2);
  expect(test.success).toBe(true);
});

test("Field is max pass", () => {
  const test = validateMax.validate(dataWithMaxField2);
  expect(test.success).toBe(true);
});

test("Field is custom pass", () => {
  const test = validateCustom.validate(dataWithCustomField2);
  expect(test.success).toBe(true);
});

test("Field is true pass", () => {
  const test = validateBoolean.validate(dataWithBooleanField2);
  expect(test.success).toBe(true);
});

test("Field is string pass", () => {
  const test = validateType.validate(dataWithTypeField2);
  expect(test.success).toBe(true);
});
