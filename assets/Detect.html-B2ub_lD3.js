import{_ as c,r as a,o as p,c as h,a as e,b as n,w as o,d as t,e as i}from"./app-BAe5RfCN.js";const d={},u=e("h1",{id:"detect-hyperion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#detect-hyperion"},[e("span",null,"Detect Hyperion")])],-1),g=e("p",null,"Hyperion announces its services on the network, via mDNS and SSDP.",-1),_={class:"table-of-contents"},f=e("h2",{id:"ssdp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssdp"},[e("span",null,"SSDP")])],-1),m=e("strong",null,"S",-1),v=e("strong",null,"S",-1),S=e("strong",null,"D",-1),b=e("strong",null,"P",-1),y={href:"https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"ssdp-client-library",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssdp-client-library"},[e("span",null,"SSDP-Client Library")])],-1),w=e("p",null,"Here are some example client libraries for different programming languages (many others available):",-1),D={href:"https://github.com/diversario/node-ssdp#usage---client",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/resourcepool/ssdp-client#jarpic-client",target:"_blank",rel:"noopener noreferrer"},N=i('<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>With a given SSDP-client library, you can use the following USN / service type:</p><p><code>urn:hyperion-project.org:device:basic:1</code></p><p>Some headers from the response will include:</p><ul><li><strong>Location</strong>: The URL of the webserver</li><li><strong>USN</strong>: The unique id for this Hyperion instance, it will remain the same after system restarts or Hyperion updates</li><li><strong>HYPERION-FBS-PORT</strong>: The port of the FlatBuffer server</li><li><strong>HYPERION-JSS-PORT</strong>: The port of the JSON-API server</li><li><strong>HYPERION-NAME</strong>: The user defined name for this server</li></ul><p>As the data changes (e.g. network adapter IP address change), new updates will be automatically announced.</p><h2 id="multicast-dns-mdns" tabindex="-1"><a class="header-anchor" href="#multicast-dns-mdns"><span>Multicast DNS (mDNS)</span></a></h2><p>Hyperion services are detectable through mDNS.</p>',8),H={href:"https://de.wikipedia.org/wiki/Zeroconf",target:"_blank",rel:"noopener noreferrer"},T={href:"https://en.wikipedia.org/wiki/Bonjour_(software)",target:"_blank",rel:"noopener noreferrer"},x={href:"https://en.wikipedia.org/wiki/Avahi_(software)",target:"_blank",rel:"noopener noreferrer"},I=i('<p><strong>Hyperion publishes the following services:</strong></p><ul><li><strong>_http._tcp</strong>: Hyperion Webserver (HTTP + Websocket)</li><li><strong>_https._tcp</strong>: Hyperion Webserver (HTTPS + Websocket Secure)</li><li><strong>_hyperiond-json._tcp</strong>: Hyperion JSON-API Server (TcpSocket)</li><li><strong>_hyperiond-flatbuf._tcp</strong>: Hyperion FlatBuffers Server (Google FlatBuffers)</li><li><strong>_hyperiond-protobuf._tcp</strong>: Hyperion Protocol Buffers Server (Google Protocol Buffers)</li></ul><p>You get the mDNS service name, IP address and service port. As this works realtime, i.e. you can always have an up to date list of available Hyperion servers.</p><p><strong>Service - TXT RECORD</strong></p><p>Each published entry contains at least the following data in the txt field:</p><ul><li><strong>id</strong>: A static, unique id to identify a Hyperion instance.</li><li><strong>version</strong>: Hyperion&#39;s version.</li></ul><h3 id="test-clients" tabindex="-1"><a class="header-anchor" href="#test-clients"><span>Test Clients</span></a></h3>',7),A={href:"https://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html",target:"_blank",rel:"noopener noreferrer"},B=i(`<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> avahi-untils <span class="token operator">&amp;&amp;</span> avahi-browse <span class="token parameter variable">-r</span> _hyperiond-json._tcp
</code></pre></div>`,1);function E(O,U){const r=a("router-link"),s=a("ExternalLinkIcon"),l=a("ImageWrap");return p(),h("div",null,[u,g,e("nav",_,[e("ul",null,[e("li",null,[n(r,{to:"#ssdp"},{default:o(()=>[t("SSDP")]),_:1}),e("ul",null,[e("li",null,[n(r,{to:"#ssdp-client-library"},{default:o(()=>[t("SSDP-Client Library")]),_:1})]),e("li",null,[n(r,{to:"#usage"},{default:o(()=>[t("Usage")]),_:1})])])]),e("li",null,[n(r,{to:"#multicast-dns-mdns"},{default:o(()=>[t("Multicast DNS (mDNS)")]),_:1}),e("ul",null,[e("li",null,[n(r,{to:"#test-clients"},{default:o(()=>[t("Test Clients")]),_:1})])])])])]),f,e("p",null,[m,t("imple"),v,t("ervice"),S,t("iscovery"),b,t("rotocol ("),e("a",y,[t("SSDP"),n(s)]),t(") is the discovery subset of UPnP. The implementation is lighter than mDNS as it just needs a UDP Socket without any further dependencies.")]),k,w,e("ul",null,[e("li",null,[e("a",D,[t("NodeJS"),n(s)])]),e("li",null,[e("a",P,[t("Java"),n(s)])])]),N,e("p",null,[t("mDNS is also known as "),e("a",H,[t("Zeroconf"),n(s)]),t(", "),e("a",T,[t("Apple Bonjour"),n(s)]),t(" or "),e("a",x,[t("Avahi"),n(s)]),t(".")]),I,e("p",null,[t("There are several clients available for testing like the "),e("a",A,[t("avahi-browse"),n(s)]),t(" a commandline tool for Ubuntu/Debian. Example command")]),B,n(l,{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion JSON-API Server with Avahi cli"})])}const R=c(d,[["render",E],["__file","Detect.html.vue"]]),j=JSON.parse('{"path":"/api/Detect.html","title":"Detect Hyperion","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"SSDP","slug":"ssdp","link":"#ssdp","children":[{"level":3,"title":"SSDP-Client Library","slug":"ssdp-client-library","link":"#ssdp-client-library","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]}]},{"level":2,"title":"Multicast DNS (mDNS)","slug":"multicast-dns-mdns","link":"#multicast-dns-mdns","children":[{"level":3,"title":"Test Clients","slug":"test-clients","link":"#test-clients","children":[]}]}],"git":{"updatedTime":1710797925000},"filePathRelative":"api/Detect.md"}');export{R as comp,j as data};
