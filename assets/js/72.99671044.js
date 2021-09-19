(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{463:function(e,t,r){"use strict";r.r(t);var a=r(30),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"detect-hyperion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#detect-hyperion"}},[e._v("#")]),e._v(" Detect Hyperion")]),e._v(" "),r("p",[e._v("Hyperion announces it's services on the network, via ZeroConf and SSDP.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#ssdp"}},[e._v("SSDP")]),r("ul",[r("li",[r("a",{attrs:{href:"#ssdp-client-library"}},[e._v("SSDP-Client Library")])]),r("li",[r("a",{attrs:{href:"#usage"}},[e._v("Usage")])])])]),r("li",[r("a",{attrs:{href:"#zeroconf"}},[e._v("Zeroconf")]),r("ul",[r("li",[r("a",{attrs:{href:"#txt-record"}},[e._v("TXT RECORD")])]),r("li",[r("a",{attrs:{href:"#test-clients"}},[e._v("Test Clients")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"ssdp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdp"}},[e._v("#")]),e._v(" SSDP")]),e._v(" "),r("p",[r("strong",[e._v("S")]),e._v("imple"),r("strong",[e._v("S")]),e._v("ervice"),r("strong",[e._v("D")]),e._v("iscovery"),r("strong",[e._v("P")]),e._v("rotocol\n("),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDP"),r("OutboundLink")],1),e._v(") is the\ndiscovery subset of UPnP. The implementation is lighter than ZeroConf as it just needs a\nUDP Socket without any further dependencies.")]),e._v(" "),r("h3",{attrs:{id:"ssdp-client-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdp-client-library"}},[e._v("#")]),e._v(" SSDP-Client Library")]),e._v(" "),r("p",[e._v("Here are some example client libraries for different programming languages (many others available):")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/diversario/node-ssdp#usage---client",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/resourcepool/ssdp-client#jarpic-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("p",[e._v("With a given SSDP-client library, you can use the following USN / service type:")]),e._v(" "),r("p",[r("code",[e._v("urn:hyperion-project.org:device:basic:1")])]),e._v(" "),r("p",[e._v("Some headers from the response will include:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Location")]),e._v(": The URL of the webserver")]),e._v(" "),r("li",[r("strong",[e._v("USN")]),e._v(": The unique id for this Hyperion instance, it will remain the same after system restarts or Hyperion updates")]),e._v(" "),r("li",[r("strong",[e._v("HYPERION-FBS-PORT")]),e._v(": The port of the flatbuffers server")]),e._v(" "),r("li",[r("strong",[e._v("HYPERION-JSS-PORT")]),e._v(": The port of the JsonServer")]),e._v(" "),r("li",[r("strong",[e._v("HYPERION-NAME")]),e._v(": The user defined name for this server")])]),e._v(" "),r("p",[e._v("As the data changes (e.g. network adapter IP address change), new updates will be automatically announced.")]),e._v(" "),r("h2",{attrs:{id:"zeroconf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zeroconf"}},[e._v("#")]),e._v(" Zeroconf")]),e._v(" "),r("p",[e._v("Also known as "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bonjour_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Bonjour"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Avahi_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avahi"),r("OutboundLink")],1),e._v(". Hyperion is detectable through zeroconf.")]),e._v(" "),r("p",[r("strong",[e._v("Hyperion publishes the following informations:")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("_hyperiond-http._tcp")]),e._v(": Hyperion Webserver (HTTP+Websocket)")]),e._v(" "),r("li",[r("strong",[e._v("_hyperiond-json._tcp")]),e._v(": Hyperion JSON Server (TcpSocket)")]),e._v(" "),r("li",[r("strong",[e._v("_hyperiond-flatbuf._tcp")]),e._v(": Hyperion Flatbuffers server (Google Flatbuffers)")])]),e._v(" "),r("p",[e._v("You get the IP address, hostname, port and the Hyperion instance name (before the @ for\nthe full name). As this works realtime you can always have an up to date list of available\nHyperion servers.")]),e._v(" "),r("h3",{attrs:{id:"txt-record"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#txt-record"}},[e._v("#")]),e._v(" TXT RECORD")]),e._v(" "),r("p",[e._v("Each published entry contains at least the following data in the txt field:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("id")]),e._v(": A static unique id to identify an Hyperion instance.")]),e._v(" "),r("li",[r("strong",[e._v("version")]),e._v(": Hyperion version.")])]),e._v(" "),r("h3",{attrs:{id:"test-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-clients"}},[e._v("#")]),e._v(" Test Clients")]),e._v(" "),r("p",[e._v("There are several clients available for testing like the\n"),r("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("avahi-browse"),r("OutboundLink")],1),e._v(" a\ncommandline tool for Ubuntu/Debian. Example command")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" avahi-browse "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" avahi-browse -r _hyperiond-http._tcp\n")])])]),r("ImageWrap",{attrs:{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion Server with Avahi cli"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);