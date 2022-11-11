const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");
const credential = new azureIdentity.DefaultAzureCredential();
const client = new appConfig.AppConfigurationClient(
    process.env.APP_CONFIG_URL,
    credential
);

async function getConfiguration() {
    let retrievedSetting = await client.getConfigurationSetting({
        key: process.env.KEY_NAME
    });
    console.log("Retrieved value:", retrievedSetting.value);

    return retrievedSetting.value.trim()
}

module.exports = {
    getConfiguration
}
