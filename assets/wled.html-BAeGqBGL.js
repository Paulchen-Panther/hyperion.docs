import{_ as d,b as r,c,d as l,e,g as t,f as s,w as i,h as o}from"./app-CSVhZymi.js";const h={},p=e("h1",{id:"wled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wled"},[e("span",null,"WLED")])],-1),u={href:"https://kno.wled.ge/",target:"_blank",rel:"noopener noreferrer"},g=o('<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><h3 id="connectivity" tabindex="-1"><a class="header-anchor" href="#connectivity"><span>Connectivity</span></a></h3><p>WLED devices are discovered automatically by Hyperion.</p><p>In case no device was discovered, you can restart the discovery process by refreshing the browser&#39;s page (F5).</p><p>The device will store the respective mDNS service name, i.e. no static IP-adresses are required to be configured in your router. Use WLED&#39;s WIFI setup to configure a service name (<code>mDNS address</code>) of your choice.</p><div class="custom-container tip"><p class="custom-container-title">Custom hostname configuration</p><p>You can still configure a custom Hostname, an IPv4- or IPv6-address of your WLED device.</p></div>',6),m={class:"custom-container details"},f=e("summary",null,"Streaming protocol",-1),v=e("p",null,"Per Hyperion 2.0.13, the Hyperion-WLED device makes use of the Distributed Display Protocol (Requires WLED v0.11.0+).",-1),b=o('<h3 id="specific-settings" tabindex="-1"><a class="header-anchor" href="#specific-settings"><span>Specific Settings</span></a></h3><h4 id="devices-discovered" tabindex="-1"><a class="header-anchor" href="#devices-discovered"><span>Devices Discovered</span></a></h4><p>Select your WLED LED-Device discovered or provide a custome configuration (see Hostname/IP-address).</p><h4 id="hostname-ip-address" tabindex="-1"><a class="header-anchor" href="#hostname-ip-address"><span>Hostname/IP-address</span></a></h4><p>Define the WLED device&#39;s Hostname (DNS/mDNS) or IP-address (IPv4) you would like streaming to.</p><h4 id="wled-segment-streaming" tabindex="-1"><a class="header-anchor" href="#wled-segment-streaming"><span>WLED Segment streaming</span></a></h4><p>By default Hyperion streams to all WLED LEDs independent from segment setup in WLED. Hyperion allows streaming to one WLED segment, if segment streaming is activated (requires WLED 0.13.3+).<br> To allow segment streaming, enable &quot;Realtime - Use main segment only&quot; in WLED&#39;s Sync Interfaces setup screen.</p><p>In Hyperion you can then select the individual segment to be streamed to.<br> You can define, if Hyperion will switch off the other segments while streaming or not.</p><h4 id="restore-lights-state" tabindex="-1"><a class="header-anchor" href="#restore-lights-state"><span>Restore lights&#39; state</span></a></h4><p>The state of the WLED device (including the current on/off state) is saved before streaming. When streaming stops, the output state is restored.</p><h4 id="stay-on-after-streaming" tabindex="-1"><a class="header-anchor" href="#stay-on-after-streaming"><span>Stay on after streaming</span></a></h4><p>Allow to keep WLED powered on after streaming and restoring state.</p><h3 id="advanced-expert-settings" tabindex="-1"><a class="header-anchor" href="#advanced-expert-settings"><span>Advanced/Expert Settings</span></a></h3><h4 id="streaming-protocol" tabindex="-1"><a class="header-anchor" href="#streaming-protocol"><span>Streaming protocol</span></a></h4>',14),_=e("h4",{id:"disable-synchronisation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disable-synchronisation"},[e("span",null,"Disable synchronisation")])],-1),D={href:"https://kno.wled.ge/interfaces/udp-notifier/",target:"_blank",rel:"noopener noreferrer"},w=e("h4",{id:"overwrite-brightness",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overwrite-brightness"},[e("span",null,"Overwrite brightness")])],-1),y=e("p",null,"Hyperion uses the brightness set in WLED, i.e. if the brightness in WLED is set to 10%, the LEDs will shine with maximum 10% brightness. You can override the default brightness of WLED during streaming by defining the brightness.",-1),E=e("h4",{id:"brightness",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#brightness"},[e("span",null,"Brightness")])],-1),L=e("p",null,'The brightness level used when "Overwrite brightness" is enabled.',-1);function x(W,k){const a=r("ExternalLinkIcon"),n=r("RouteLink");return c(),l("div",null,[p,e("p",null,[e("a",u,[t("WLED"),s(a)]),t(" allows to address various LED types via WIFI, Ethernet or Serial connectivity leveraging ESP8266/ESP32 devices. The device actively controls WLED (switch on/off), as well as allows to store/restore the devices state before streaming LED updates.")]),g,e("details",m,[f,v,e("p",null,[t("As a fall-back option the UDP-Raw protocol ("),s(n,{to:"/user/leddevices/network/udpraw.html"},{default:i(()=>[t("limitations")]),_:1}),t(") is still supported, too.")])]),b,e("ul",null,[e("li",null,[s(n,{to:"/user/leddevices/network/udpddp.html"},{default:i(()=>[t("UDP DDP")]),_:1})]),e("li",null,[s(n,{to:"/user/leddevices/network/udpraw.html"},{default:i(()=>[t("UDP RAW")]),_:1})])]),_,e("p",null,[t("Disable "),e("a",D,[t("WLED's synchronisation"),s(a)]),t(" with other WLED devices before streaming starts. Synchronisation is restored when streaming stops.")]),w,y,E,L])}const I=d(h,[["render",x],["__file","wled.html.vue"]]),P=JSON.parse('{"path":"/user/leddevices/network/wled.html","title":"WLED","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Connectivity","slug":"connectivity","link":"#connectivity","children":[]},{"level":3,"title":"Specific Settings","slug":"specific-settings","link":"#specific-settings","children":[]},{"level":3,"title":"Advanced/Expert Settings","slug":"advanced-expert-settings","link":"#advanced-expert-settings","children":[]}]}],"git":{"updatedTime":1710520912000},"filePathRelative":"user/leddevices/network/wled.md"}');export{I as comp,P as data};
