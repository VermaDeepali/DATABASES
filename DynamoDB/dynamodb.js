const DynamoDBClient = require("@aws-sdk/client-dynamodb");
const { REGION, ENV, DYNAMODB_ENDPOINT, ACCESS_KEY_ID, SECRET_ACCESS_KEY } = process.env;

const LOCAL_DYNAMODB_CONFIG = {
    endpoint: DYNAMODB_ENDPOINT,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
    },
};


export async function createDynamoDBClient() {
    const commonOptions = {
        region: REGION,
    };

    const options =
        ENV === "local"
            ? { ...commonOptions, ...LOCAL_DYNAMODB_CONFIG }
            : commonOptions;
    return new DynamoDBClient(options);
}

