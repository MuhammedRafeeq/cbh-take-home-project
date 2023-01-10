const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const getPartitionKey = (param) => {
  if (typeof param === "string") {
    return param;
  }

  if (typeof param?.partitionKey === "string") {
    return param.partitionKey;
  }

  if (typeof param?.partitionKey === "object") {
    return JSON.stringify(param.partitionKey);
  }

  return JSON.stringify(param);
};

exports.deterministicPartitionKey = (event) => {
  if (event === undefined) {
    return TRIVIAL_PARTITION_KEY;
  }

  if(event?.partitionKey?.length <= MAX_PARTITION_KEY_LENGTH){
    return event.partitionKey;
  }

  let partitionKey = getPartitionKey(event);
  return crypto.createHash("sha3-512").update(partitionKey).digest("hex");
};
