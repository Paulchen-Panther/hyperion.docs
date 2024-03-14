import{_ as e,c as a,d as t,h as s}from"./app-SNb-n1nX.js";const n={},i=s('<h1 id="udp-raw" tabindex="-1"><a class="header-anchor" href="#udp-raw"><span>UDP Raw</span></a></h1><p>The device streams a set of RGB values using the UDP network protocol.</p><p><strong>The devices is not able to detect, if the remote device is not available or failed.</strong></p><div class="custom-container warning"><p class="custom-container-title">Note:</p><p>The maximum number of LEDs supported is 490. The current UDP-raw protocol cannot handle the loss of fragmented packets. Therefore the number of LEDs is limited to have only one package per update.</p></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><h3 id="specific-settings" tabindex="-1"><a class="header-anchor" href="#specific-settings"><span>Specific Settings</span></a></h3><h4 id="hostname-ip-address" tabindex="-1"><a class="header-anchor" href="#hostname-ip-address"><span>Hostname/IP-address</span></a></h4><p>Define the WLED device&#39;s Hostname (DNS/mDNS) or IP-address (IPv4 or IPv6) you would like streaming to.</p><h4 id="port" tabindex="-1"><a class="header-anchor" href="#port"><span>Port</span></a></h4><p>UDP port streamed to.</p><h3 id="advanced-expert-settings" tabindex="-1"><a class="header-anchor" href="#advanced-expert-settings"><span>Advanced/Expert Settings</span></a></h3><h4 id="latch-time" tabindex="-1"><a class="header-anchor" href="#latch-time"><span>Latch time</span></a></h4><p>Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.</p>',13),r=[i];function d(o,c){return a(),t("div",null,r)}const h=e(n,[["render",d],["__file","udpraw.html.vue"]]),l=JSON.parse('{"path":"/user/leddevices/network/udpraw.html","title":"UDP Raw","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Specific Settings","slug":"specific-settings","link":"#specific-settings","children":[]},{"level":3,"title":"Advanced/Expert Settings","slug":"advanced-expert-settings","link":"#advanced-expert-settings","children":[]}]}],"git":{"updatedTime":1710444694000},"filePathRelative":"user/leddevices/network/udpraw.md"}');export{h as comp,l as data};
