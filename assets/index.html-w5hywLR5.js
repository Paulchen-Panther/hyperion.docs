import{_ as l,b as o,c as d,d as c,e,g as t,f as i,w as r,h as s}from"./app-SNb-n1nX.js";const h={},p=s('<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h1><p>Hyperion supports many different controllers and LED devices. Also network communication is possible, therefore we also support Philips Hue, WLED and more.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In case your LED device is not working or shows as being disabled in the Dashboard or Remote Control, check Hyperion&#39;s log for errors first!</p><p>The error might already provide you a good indication what went wrong. The log can be found under the &quot;System&quot; menu entry or you follow the link at the device&#39;s configuration page.</p></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>',4),u={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),v=e("p",null,"By default, not all configuration items are displayed to allow quick and easy setup.",-1),g=s('<h3 id="general-settings" tabindex="-1"><a class="header-anchor" href="#general-settings"><span>General Settings</span></a></h3><p>General settings you will find at every LED device type.</p><h4 id="hardware-led-count" tabindex="-1"><a class="header-anchor" href="#hardware-led-count"><span>Hardware LED Count</span></a></h4><p>The number of physical LEDs the device allows to be addressed.</p><details class="custom-container details"><summary>In case the Hardware LED Count is disabled</summary><p>For some devices the input element is disabled as the number of LEDs is resolved automatically.</p><p>Failing to get a device&#39;s properties result in an error message provided to you. Check the configuration done or refresh the page.</p></details><h3 id="advanced-expert-settings" tabindex="-1"><a class="header-anchor" href="#advanced-expert-settings"><span>Advanced/Expert Settings</span></a></h3><h4 id="rgb-byte-order" tabindex="-1"><a class="header-anchor" href="#rgb-byte-order"><span>RGB Byte Order</span></a></h4><p>The RGB byte order is configurable per LED device type. If you want to check or modify this value, use the &quot;RGB Byte Order wizard&quot; (Magic Wand).</p><h4 id="autostart" tabindex="-1"><a class="header-anchor" href="#autostart"><span>Autostart</span></a></h4><p>An LED device is started when Hyperion is brought up per default. In case autostart is disabled, the device is to be switched on later manually or via API.</p><h4 id="connection-attempts" tabindex="-1"><a class="header-anchor" href="#connection-attempts"><span>Connection attempts</span></a></h4><p>Each LED device provides a retry to open capability. If the number of connection attempts is exceeded the LED device will get in error state.</p><h4 id="retry-interval" tabindex="-1"><a class="header-anchor" href="#retry-interval"><span>Retry interval</span></a></h4><p>The number of seconds to be passed until the next retry attempt for connection is done.</p><h3 id="specific-settings" tabindex="-1"><a class="header-anchor" href="#specific-settings"><span>Specific Settings</span></a></h3><p>Each LED device supports additional, device specific settings. Some settings are common across the different device categories.</p><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>Actions</span></a></h3><h4 id="save-settings" tabindex="-1"><a class="header-anchor" href="#save-settings"><span>Save settings</span></a></h4>',18),m=s('<h4 id="identify" tabindex="-1"><a class="header-anchor" href="#identify"><span>Identify</span></a></h4><p>For some LED device types you can test the technical settings before saving or let the LEDs of the device light up for identification.</p><p>The button &quot;Identify&quot; is only activated, if the current configuration is valid.</p><h2 id="controller-types" tabindex="-1"><a class="header-anchor" href="#controller-types"><span>Controller Types</span></a></h2><p>Hyperion supports multiple different LED devices which fall into four main categories:</p><h3 id="spi-pwm" tabindex="-1"><a class="header-anchor" href="#spi-pwm"><span>SPI/PWM</span></a></h3><p>Are 3 or 4 wire LEDs which can be powered via SPI (Serial Peripheral Interface) or PWM (Pulse Width Modulation) of a Raspberry Pi or an Arduino (which is USB connected to your computer/HTPC/Pi).</p><ul><li><a href="/user/leddevices/spi_pwm/apa102">APA102</a></li><li><a href="/user/leddevices/spi_pwm/apa104">APA104</a></li><li><a href="/user/leddevices/spi_pwm/lpd6803">LPD6803</a></li><li><a href="/user/leddevices/spi_pwm/lpd8806">LPD8806</a></li><li><a href="/user/leddevices/spi_pwm/p9813">P9813</a></li><li><a href="/user/leddevices/spi_pwm/SK6812">SK6812</a></li><li><a href="/user/leddevices/spi_pwm/SK9822">SK9822</a></li><li><a href="/user/leddevices/spi_pwm/ws2801">WS2801</a></li><li><a href="/user/leddevices/spi_pwm/ws2812">WS2812</a></li><li><a href="/user/leddevices/spi_pwm/piblaster">pi-blaster</a></li></ul><h4 id="pwm-prerequisites-controller-type-rpi-pwm-ws281x" tabindex="-1"><a class="header-anchor" href="#pwm-prerequisites-controller-type-rpi-pwm-ws281x"><span>PWM Prerequisites (Controller type RPi PWM/ws281x)</span></a></h4>',9),y=e("code",null,"root",-1),b=e("br",null,null,-1),w=e("h4",{id:"spi-prerequisites-controller-type-group-rpi-spi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spi-prerequisites-controller-type-group-rpi-spi"},[e("span",null,"SPI Prerequisites (Controller type group RPi SPI)")])],-1),_=e("p",null,"On most systems the SPI (Serial Peripheral Interface) is not enabled per default and requires to be activated.",-1),k={class:"custom-container details"},P=e("summary",null,"Activate SPI",-1),x=e("p",null,"For non RPi-devices, please check your device's documentation.",-1),S=e("p",null,"SPI activation for Raspberry Pi devices is dependend on the Operating System you run:",-1),E=e("ul",null,[e("li",null,[e("strong",null,"Raspberry Pi OS")])],-1),L=e("p",null,[e("code",null,"sudo raspi-config nonint do_spi 0")],-1),D=e("ul",null,[e("li",null,[e("strong",null,"LibreELEC")])],-1),I=e("code",null,"dtparam=spi=on",-1),C={href:"https://wiki.libreelec.tv/configuration/config_txt",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,[e("strong",null,"CoreELEC / OSMC")])],-1),R=e("p",null,"You can activate SPI via the Hardware tab under Settings",-1),T=e("ul",null,[e("li",null,[e("strong",null,"Other")])],-1),q=e("p",null,"Please check the system documentation.",-1),B=e("p",null,"In case you run more than 250 LEDs you need to increase the SPI buffer size",-1),M={class:"custom-container details"},O=s("<summary>Increase SPI Buffer</summary><p>Add <code>spidev.bufsize=1024000</code> to the cmdline.txt.</p><p>Configuration on Raspberry Pi devices is dependend on the Operating System you run:</p><ul><li><strong>Raspberry Pi OS</strong></li></ul><p>Edit the cmdline.txt file in the boot partition located at <code>/boot/firmware/</code>.</p><p><strong>Note</strong>: Prior to the Bookworm version, it was located at <code>/boot/</code>.</p><ul><li><strong>LibreELEC</strong></li></ul>",7),H={href:"https://wiki.libreelec.tv/configuration/config_txt",target:"_blank",rel:"noopener noreferrer"},W=s('<h3 id="usb-serial" tabindex="-1"><a class="header-anchor" href="#usb-serial"><span>USB/Serial</span></a></h3><p>Plug and play. The following controllers are supported.</p><ul><li><a href="/user/leddevices/usb/adalight">Adalight</a></li><li><a href="/user/leddevices/usb/atmo">Atmo</a></li><li><a href="/user/leddevices/usb/dmx">DMX</a></li><li><a href="/user/leddevices/usb/hyperion-usbasp">Hyperion-USBasp</a></li><li><a href="/user/leddevices/usb/karate">Karate</a></li><li><a href="/user/leddevices/usb/lightpack">Lightpack</a></li><li><a href="/user/leddevices/usb/multilightpack">Multi-Lightpack</a></li><li><a href="/user/leddevices/usb/paintpack">Paintpack</a></li><li><a href="/user/leddevices/usb/rawhid">RawHID</a></li><li><a href="/user/leddevices/usb/sedu">SEDU</a></li><li><a href="/user/leddevices/usb/tpm2">TPM2</a></li></ul><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network"><span>Network</span></a></h3><p>Everything that is reachable over network.</p><ul><li><a href="/user/leddevices/network/atmoorb">AtmoOrb</a></li><li><a href="/user/leddevices/network/cololight">Cololight</a></li><li><a href="/user/leddevices/network/fadecandy">FadeCandy</a></li><li><a href="/user/leddevices/network/nanoleaf">Nanoleaf</a></li><li><a href="/user/leddevices/network/philipshue">Philips Hue</a></li><li><a href="/user/leddevices/network/razer">Razer Chroma</a></li><li><a href="/user/leddevices/network/tinkerforge">Tinkerforge</a></li><li><a href="/user/leddevices/network/tpm2net">TPM2.NET</a></li><li><a href="/user/leddevices/network/udpartnet">UDP ArtNet</a></li><li><a href="/user/leddevices/network/udpddp">UDP DDP</a></li><li><a href="/user/leddevices/network/udpe131">UDP E1.31</a></li><li><a href="/user/leddevices/network/udpraw">UDP Raw</a></li><li><a href="/user/leddevices/network/wled">WLED</a></li><li><a href="/user/leddevices/network/yeelight">Yeelight</a></li></ul><h3 id="others" tabindex="-1"><a class="header-anchor" href="#others"><span>Others</span></a></h3><p>All other devices that do not fit into any categories.</p><ul><li><a href="/user/leddevices/others/debug">File</a></li></ul>',9);function N(U,F){const a=o("RouteLink"),n=o("ExternalLinkIcon");return d(),c("div",null,[p,e("div",u,[f,v,e("p",null,[t("To display additional configuration items, change the "),i(a,{to:"/user/Configuration.html#settings-level"},{default:r(()=>[t("settings-level")]),_:1}),t(".")])]),g,e("p",null,[t("Allows to save the settings if the configuration is valid. In case you have not configured an "),i(a,{to:"/user/advanced/Advanced.html#led-layout"},{default:r(()=>[t("LED-Layout")]),_:1}),t(" yet, you have the option creating a default one and refine it later. If the LEDs configured by the layout exceed the number of the hardware LED count, check and refine the configuration or the layout.")]),m,e("p",null,[t("PWM (Pulse Width Modulation) requires that Hyperion run under the "),y,t(" user."),b,t(" In case you run Hyperion as a service: "),i(a,{to:"/user/Installation.html#change-the-service-user-to-root"},{default:r(()=>[t("Change the service user to 'root'")]),_:1})]),w,_,e("details",k,[P,x,S,E,L,D,e("p",null,[t("Add "),I,t("to config.txt per "),e("a",C,[t("LibreELEC Wiki instructions"),i(n)])]),A,R,T,q]),B,e("details",M,[O,e("p",null,[t("Edit the cmdline.txt file the same way as "),e("a",H,[t("config.txt"),i(n)])])]),W])}const z=l(h,[["render",N],["__file","index.html.vue"]]),K=JSON.parse('{"path":"/user/leddevices/","title":"Overview","lang":"en-US","frontmatter":{"prev":false,"next":false,"sidebarDepth":0},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"General Settings","slug":"general-settings","link":"#general-settings","children":[]},{"level":3,"title":"Advanced/Expert Settings","slug":"advanced-expert-settings","link":"#advanced-expert-settings","children":[]},{"level":3,"title":"Specific Settings","slug":"specific-settings","link":"#specific-settings","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]},{"level":2,"title":"Controller Types","slug":"controller-types","link":"#controller-types","children":[{"level":3,"title":"SPI/PWM","slug":"spi-pwm","link":"#spi-pwm","children":[]},{"level":3,"title":"USB/Serial","slug":"usb-serial","link":"#usb-serial","children":[]},{"level":3,"title":"Network","slug":"network","link":"#network","children":[]},{"level":3,"title":"Others","slug":"others","link":"#others","children":[]}]}],"git":{"updatedTime":1710444694000},"filePathRelative":"user/leddevices/README.md"}');export{z as comp,K as data};
