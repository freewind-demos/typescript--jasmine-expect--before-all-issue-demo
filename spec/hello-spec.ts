import 'jasmine-expect';

beforeAll(() => {
  expect('hello').toBeSameLengthAs("abcde");
});

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect('hello').toBeSameLengthAs("abcde");
  });
});
