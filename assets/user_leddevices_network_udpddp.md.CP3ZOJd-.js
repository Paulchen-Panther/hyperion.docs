import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.Cv2fJP76.js";const P=JSON.parse('{"title":"UDP DDP","description":"","frontmatter":{},"headers":[],"relativePath":"user/leddevices/network/udpddp.md","filePath":"user/leddevices/network/udpddp.md","lastUpdated":1711812050000}'),r={name:"user/leddevices/network/udpddp.md"},d=s('<h1 id="udp-ddp" tabindex="-1">UDP DDP <a class="header-anchor" href="#udp-ddp" aria-label="Permalink to &quot;UDP DDP&quot;">​</a></h1><p>The device streams RGB values using the Distributed Display Protocol (<a href="https://www.3waylabs.com/ddp/#Data%20Types" target="_blank" rel="noreferrer">DDP</a>) on top of the UDP network protocol.</p><p><strong>The device is not able to detect, if the remote device is not available or failed.</strong></p><div class="warning custom-block"><p class="custom-block-title">Note:</p><p>The Distributed Display Protocol issues a subsequent UDP-package per 480 LEDs.</p></div><h3 id="specific-settings" tabindex="-1">Specific Settings <a class="header-anchor" href="#specific-settings" aria-label="Permalink to &quot;Specific Settings&quot;">​</a></h3><h5 id="hostname-ip-address" tabindex="-1">Hostname/IP-address <a class="header-anchor" href="#hostname-ip-address" aria-label="Permalink to &quot;Hostname/IP-address&quot;">​</a></h5><p>Define the device&#39;s Hostname (DNS/mDNS) or IP-address (IPv4 or IPv6) you would like streaming to.</p><h5 id="port" tabindex="-1">Port <a class="header-anchor" href="#port" aria-label="Permalink to &quot;Port&quot;">​</a></h5><p>UDP port streamed to.</p><h4 id="advanced-expert-settings" tabindex="-1">Advanced/Expert Settings <a class="header-anchor" href="#advanced-expert-settings" aria-label="Permalink to &quot;Advanced/Expert Settings&quot;">​</a></h4><h5 id="latch-time" tabindex="-1">Latch time <a class="header-anchor" href="#latch-time" aria-label="Permalink to &quot;Latch time&quot;">​</a></h5><p>Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.</p>',12),i=[d];function o(n,c,p,l,h,u){return a(),t("div",null,i)}const _=e(r,[["render",o]]);export{P as __pageData,_ as default};
