const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");
const credential = new azureIdentity.DefaultAzureCredential();
const client = new appConfig.AppConfigurationClient(
    "Endpoint=https://demo-app-conf.azconfig.io;Id=4YPx-l0-s0:I82NKQ00OZ/II7GCX0YA;Secret=MoiPcB4WuvxqOWNBPuAy/VLQpY/nzRMmUz3NnTZo+Nw="
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
