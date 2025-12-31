<template>
  <div class="wifi-config-generator">
    <h2>WiFi Configuration Generator</h2>
    <p>Generate a customized WiFi configuration for your HyperBian system.</p>
    
    <form @submit.prevent="generateConfig" class="config-form">
      <div class="form-group">
        <label for="ssid">SSID (Network Name):</label>
        <input 
          type="text" 
          id="ssid" 
          v-model="ssid" 
          placeholder="Enter your WiFi network name"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Enter your WiFi password"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="country">Country Code:</label>
        <input 
          type="text" 
          id="country" 
          v-model="country" 
          placeholder="e.g., DE, US, GB"
          pattern="[A-Z]{2}"
          title="Two uppercase letters (e.g., DE, US, GB)"
          maxlength="2"
          required
        />
      </div>
      
      <button type="submit" class="generate-btn">Generate Config</button>
    </form>
    
    <div v-if="generatedConfig" class="config-output">
      <h3>Generated Configuration</h3>
      <p class="instruction">Copy the configuration below and save it as <code>network-config</code> in the boot partition of your SD card.</p>
      <div class="config-content">
        <pre><code>{{ generatedConfig }}</code></pre>
      </div>
      <button @click="copyToClipboard" class="copy-btn">{{ copyButtonText }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ssid = ref('')
const password = ref('')
const country = ref('DE')
const generatedConfig = ref('')
const copyButtonText = ref('Copy to Clipboard')

const configTemplate = `####################################################################################
## Configure your initial HyperBian WiFi connectivity to your needs below.
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
        "SSID":
          password: "PASSWORD"
      regulatory-domain: COUNTRY`

const generateConfig = () => {
  let config = configTemplate
  
  // Escape special characters for YAML
  const escapeYamlString = (str) => {
    // If the string contains special characters, we need to escape quotes
    // For YAML double-quoted strings, we need to escape backslashes and double quotes
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
  }
  
  // Replace placeholders with user input (escaped for YAML)
  config = config.replace('"SSID"', `"${escapeYamlString(ssid.value)}"`)
  config = config.replace('"PASSWORD"', `"${escapeYamlString(password.value)}"`)
  config = config.replace('COUNTRY', country.value.toUpperCase())
  
  generatedConfig.value = config
  copyButtonText.value = 'Copy to Clipboard'
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedConfig.value)
    copyButtonText.value = 'Copied!'
    setTimeout(() => {
      copyButtonText.value = 'Copy to Clipboard'
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
    copyButtonText.value = 'Failed to copy'
  }
}
</script>

<style scoped>
.wifi-config-generator {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.wifi-config-generator h2 {
  margin-bottom: 10px;
}

.wifi-config-generator p {
  margin-bottom: 20px;
  color: var(--vp-c-text-2);
}

.config-form {
  background: var(--vp-c-bg-soft);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.generate-btn {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.generate-btn:hover {
  background: var(--vp-c-brand-2);
}

.config-output {
  margin-top: 30px;
}

.config-output h3 {
  margin-bottom: 10px;
}

.instruction {
  margin-bottom: 15px;
  padding: 10px;
  background: var(--vp-c-tip-soft);
  border-left: 4px solid var(--vp-c-tip-1);
  border-radius: 4px;
}

.instruction code {
  background: var(--vp-c-bg);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: var(--vp-font-family-mono);
}

.config-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
  margin-bottom: 15px;
}

.config-content pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  background: transparent;
}

.config-content code {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.copy-btn {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
}
</style>
