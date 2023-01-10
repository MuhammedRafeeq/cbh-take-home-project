const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the the string when given partion key as a string", () => {
    const trivialKey = deterministicPartitionKey("ABC")
    expect(trivialKey.length).toBeLessThan(250);
  });

  it("Returns string length should be in 1, 250 rangewhen given partion key as a string length is greater than 250", () => {
    const trivialKey = deterministicPartitionKey("5f3303a62550d29fb4df0987c9dc4f02124683638ec4c7ee10133681855c168aef1713586c5c74ebeb483f7c48082378356eb78e06ae1809279f253a68b3f8275f3303a62550d29fb4df0987c9dc4f02124683638ec4c7ee10133681855c168aef1713586c5c74ebeb483f7c48082378356eb78e06ae1809279f253a68b3f8275f3303a62550d29fb4df0987c9dc4f02124683638ec4c7ee10133681855c168aef1713586c5c74ebeb483f7c48082378356eb78e06ae1809279f253a68b3f827")
    expect(trivialKey.length).toBeLessThan(250);
  });

  it("Returns the the string when given partitionKey key as an object", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "5ae8f97"})
    expect(trivialKey).toBe("5ae8f97");
  });

  it("Returns the the string when given partitionKey key as an object without partitionKey property", () => {
    const trivialKey = deterministicPartitionKey({other: "5ae8f97"})
    expect(trivialKey.length).toBeLessThan(250);
  });

  it("Returns string length should be in 1, 250 range when given partion key as an object length is greater than 250", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "5f3303a62550d29fb4df0987c9dc4f02124683638ec4c7ee10133681855c168aef1713586c5c74ebeb483f7c48082378356eb78e06ae1809279f253a68b3f8275f3303a62550d29fb4df0987c9dc4f02124683638ec4c7ee10133681855c168aef1713586c5c74ebeb483f7c48082378356eb78e06ae1809279f253a68b3f8275f3303a62550d29fb4df0987c9dc4f02124683638ec4c7ee10133681855c168aef1713586c5c74ebeb483f7c48082378356eb78e06ae1809279f253a68b3f827"})
    expect(trivialKey.length).toBeLessThan(250);
  });
});
