import{_ as e,c as a,d as t,h as s}from"./app-CA0NuOq4.js";const i={},n=s('<h1 id="atmoorb" tabindex="-1"><a class="header-anchor" href="#atmoorb"><span>AtmoOrb</span></a></h1><p>The device streams a set of RGB values to one or many AtmoOrb devices (aka Orbs) over UDP multicast.</p><p><strong>The device is not able to be detected, if the remote device is not available or failed.</strong></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><h3 id="specific-settings" tabindex="-1"><a class="header-anchor" href="#specific-settings"><span>Specific Settings</span></a></h3><h4 id="orb-ids" tabindex="-1"><a class="header-anchor" href="#orb-ids"><span>Orb-IDs</span></a></h4><p>Comma separated list of all your Orbs, in example we only use a single id</p><h4 id="use-orb-smoothing" tabindex="-1"><a class="header-anchor" href="#use-orb-smoothing"><span>Use Orb Smoothing</span></a></h4><p>Use Orbs own (external) smoothing algorithm when true, disable Hyperion smoothing to avoid double smoothing once set.</p><h4 id="multicast-group" tabindex="-1"><a class="header-anchor" href="#multicast-group"><span>Multicast group</span></a></h4><p>Your Orb multicast group IP address, should match that of your Orb</p><h4 id="port" tabindex="-1"><a class="header-anchor" href="#port"><span>Port</span></a></h4><p>Default multicast port, should match that of your Orb</p><h3 id="advanced-expert-settings" tabindex="-1"><a class="header-anchor" href="#advanced-expert-settings"><span>Advanced/Expert Settings</span></a></h3><h4 id="latch-time" tabindex="-1"><a class="header-anchor" href="#latch-time"><span>Latch time</span></a></h4><p>Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.</p>',16),r=[n];function o(c,d){return a(),t("div",null,r)}const l=e(i,[["render",o],["__file","atmoorb.html.vue"]]),p=JSON.parse('{"path":"/user/leddevices/network/atmoorb.html","title":"AtmoOrb","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Specific Settings","slug":"specific-settings","link":"#specific-settings","children":[]},{"level":3,"title":"Advanced/Expert Settings","slug":"advanced-expert-settings","link":"#advanced-expert-settings","children":[]}]}],"git":{"updatedTime":1710708004000},"filePathRelative":"user/leddevices/network/atmoorb.md"}');export{l as comp,p as data};
