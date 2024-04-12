import{_ as t,c as r,I as a,ac as i,D as s,o}from"./chunks/framework.C8XGpFQ0.js";const k=JSON.parse('{"title":"Detect Hyperion","description":"","frontmatter":{},"headers":[],"relativePath":"api/Detect.md","filePath":"api/Detect.md","lastUpdated":1712923772000}'),n={name:"api/Detect.md"},l=i('<h1 id="detect-hyperion" tabindex="-1">Detect Hyperion <a class="header-anchor" href="#detect-hyperion" aria-label="Permalink to &quot;Detect Hyperion&quot;">​</a></h1><p>Hyperion announces its services on the network, via mDNS and SSDP.</p><h2 id="ssdp" tabindex="-1">SSDP <a class="header-anchor" href="#ssdp" aria-label="Permalink to &quot;SSDP&quot;">​</a></h2><p><strong>S</strong>imple<strong>S</strong>ervice<strong>D</strong>iscovery<strong>P</strong>rotocol (<a href="https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol" target="_blank" rel="noreferrer">SSDP</a>) is the discovery subset of UPnP. The implementation is lighter than mDNS as it just needs a UDP Socket without any further dependencies.</p><h3 id="ssdp-client-library" tabindex="-1">SSDP-Client Library <a class="header-anchor" href="#ssdp-client-library" aria-label="Permalink to &quot;SSDP-Client Library&quot;">​</a></h3><p>Here are some example client libraries for different programming languages (many others available):</p><ul><li><a href="https://github.com/diversario/node-ssdp#usage---client" target="_blank" rel="noreferrer">NodeJS</a></li><li><a href="https://github.com/resourcepool/ssdp-client#jarpic-client" target="_blank" rel="noreferrer">Java</a></li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><p>With a given SSDP-client library, you can use the following USN / service type:</p><p><code>urn:hyperion-project.org:device:basic:1</code></p><p>Some headers from the response will include:</p><ul><li><strong>Location</strong>: The URL of the webserver</li><li><strong>USN</strong>: The unique id for this Hyperion instance, it will remain the same after system restarts or Hyperion updates</li><li><strong>HYPERION-FBS-PORT</strong>: The port of the FlatBuffer server</li><li><strong>HYPERION-JSS-PORT</strong>: The port of the JSON-API server</li><li><strong>HYPERION-NAME</strong>: The user defined name for this server</li></ul><p>As the data changes (e.g. network adapter IP address change), new updates will be automatically announced.</p><h2 id="multicast-dns-mdns" tabindex="-1">Multicast DNS (mDNS) <a class="header-anchor" href="#multicast-dns-mdns" aria-label="Permalink to &quot;Multicast DNS (mDNS)&quot;">​</a></h2><p>Hyperion services are detectable through mDNS.</p><p>mDNS is also known as <a href="https://de.wikipedia.org/wiki/Zeroconf" target="_blank" rel="noreferrer">Zeroconf</a>, <a href="https://en.wikipedia.org/wiki/Bonjour_(software)" target="_blank" rel="noreferrer">Apple Bonjour</a> or <a href="https://en.wikipedia.org/wiki/Avahi_(software)" target="_blank" rel="noreferrer">Avahi</a>.</p><p><strong>Hyperion publishes the following services:</strong></p><ul><li><strong>_http._tcp</strong>: Hyperion Webserver (HTTP + Websocket)</li><li><strong>_https._tcp</strong>: Hyperion Webserver (HTTPS + Websocket Secure)</li><li><strong>_hyperiond-json._tcp</strong>: Hyperion JSON-API Server (TcpSocket)</li><li><strong>_hyperiond-flatbuf._tcp</strong>: Hyperion FlatBuffers Server (Google FlatBuffers)</li><li><strong>_hyperiond-protobuf._tcp</strong>: Hyperion Protocol Buffers Server (Google Protocol Buffers)</li></ul><p>You get the mDNS service name, IP address and service port. As this works realtime, i.e. you can always have an up to date list of available Hyperion servers.</p><p><strong>Service - TXT RECORD</strong></p><p>Each published entry contains at least the following data in the txt field:</p><ul><li><strong>id</strong>: A static, unique id to identify a Hyperion instance.</li><li><strong>version</strong>: Hyperion&#39;s version.</li></ul><h3 id="test-clients" tabindex="-1">Test Clients <a class="header-anchor" href="#test-clients" aria-label="Permalink to &quot;Test Clients&quot;">​</a></h3><p>There are several clients available for testing like the <a href="https://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html" target="_blank" rel="noreferrer">avahi-browse</a> a commandline tool for Ubuntu/Debian. Example command</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi-untils</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">avahi-browse</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _hyperiond-json._tcp</span></span></code></pre></div>',25);function p(h,c,d,g,u,f){const e=s("ImageWrap");return o(),r("div",null,[l,a(e,{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion JSON-API Server with Avahi cli"})])}const b=t(n,[["render",p]]);export{k as __pageData,b as default};
