const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");
const credential = new azureIdentity.DefaultAzureCredential();
const client = new appConfig.AppConfigurationClient(
    "https://demo-app-conf.azconfig.io",
    credential
);

async function getConfiguration() {
    let retrievedSetting = await client.getConfigurationSetting({
        key: "feature-flag"
    });
    console.log("Retrieved value:", retrievedSetting.value);

    return retrievedSetting.value.trim()
}

module.exports = {
    getConfiguration
}
