# WiFi Configuration Tool

This tool helps you generate a WiFi configuration file for your HyperBian installation. Simply enter your network details below and click "Generate Config" to create a customized configuration file.

<WifiConfigGenerator />

## How to Use

1. **Enter your network details:**
   - **SSID**: Your WiFi network name
   - **Password**: Your WiFi password
   - **Country**: Your two-letter country code (e.g., DE, US, GB, FR)

2. **Click "Generate Config"** to create your customized configuration file.

3. **Copy the generated configuration** by clicking the "Copy to Clipboard" button.

4. **Save the configuration:**
   - Create a file named `network-config` (without any extension)
   - Paste the copied configuration into this file
   - Save the file to the boot partition of your HyperBian SD card

## What is the network-config file?

The `network-config` file is used by HyperBian during the first boot to configure your Raspberry Pi's WiFi connection. By placing this file in the boot partition before the first startup, your device will automatically connect to your WiFi network.

## Manual Configuration

If you prefer to manually edit the configuration file, you can use the following template:

```yaml
####################################################################################
## Configure your initial HyperBian Wifi connectivity to your needs below.
## Uncomment and edit the relevant sections as needed.
##
## If you have additional needs refer to the cloud-init documentation 
## and the netplan reference for full details:
##
## https://netplan.io/reference
## https://cloudinit.readthedocs.io/en/latest/topics/network-config.html
## https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html
####################################################################################

network:
  version: 2 
  wifis:
    wlan0:
      dhcp4: true
      optional: true
      access-points:
        "YOUR_SSID":
          password: "YOUR_PASSWORD"
      regulatory-domain: YOUR_COUNTRY_CODE
```

Replace `YOUR_SSID`, `YOUR_PASSWORD`, and `YOUR_COUNTRY_CODE` with your actual values.

::: tip
For a list of country codes, refer to the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
:::
