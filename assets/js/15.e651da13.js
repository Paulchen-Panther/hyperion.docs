(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{408:function(e,t,r){"use strict";r.r(t);var n=r(30),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hyperion-entdecken"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-entdecken"}},[e._v("#")]),e._v(" Hyperion entdecken")]),e._v(" "),r("p",[e._v("Hyperion meldet seine Dienste im Netzwerk, über ZeroConf und SSDP.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#ssdp"}},[e._v("SSDP")]),r("ul",[r("li",[r("a",{attrs:{href:"#ssdp-client-bibliothek"}},[e._v("SSDP-Client-Bibliothek")])]),r("li",[r("a",{attrs:{href:"#nutzung"}},[e._v("Nutzung")])])])]),r("li",[r("a",{attrs:{href:"#zeroconf"}},[e._v("Zeroconf")]),r("ul",[r("li",[r("a",{attrs:{href:"#txt-record"}},[e._v("TXT RECORD")])]),r("li",[r("a",{attrs:{href:"#test-clients"}},[e._v("Test Clients")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"ssdp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdp"}},[e._v("#")]),e._v(" SSDP")]),e._v(" "),r("p",[r("strong",[e._v("S")]),e._v("imple"),r("strong",[e._v("S")]),e._v("ervice"),r("strong",[e._v("D")]),e._v("iscovery"),r("strong",[e._v("P")]),e._v("rotocol\n("),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDP"),r("OutboundLink")],1),e._v(") SSDP ist die Discovery-Untergruppe von UPnP. Die Implementierung ist leichter als ZeroConf, da sie nur einen\nUDP-Socket ohne weitere Abhängigkeiten benötigt.")]),e._v(" "),r("h3",{attrs:{id:"ssdp-client-bibliothek"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdp-client-bibliothek"}},[e._v("#")]),e._v(" SSDP-Client-Bibliothek")]),e._v(" "),r("p",[e._v("Hier sind einige Beispiel-Client-Bibliotheken für verschiedene Programmiersprachen (viele weitere sind verfügbar):")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/diversario/node-ssdp#usage---client",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/resourcepool/ssdp-client#jarpic-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"nutzung"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nutzung"}},[e._v("#")]),e._v(" Nutzung")]),e._v(" "),r("p",[e._v("Mit einer gegebenen SSDP-Client-Bibliothek kann man den folgenden USN- / Diensttyp verwenden:")]),e._v(" "),r("p",[r("code",[e._v("urn:hyperion-project.org:device:basic:1")])]),e._v(" "),r("p",[e._v("Einige Header der Antwort enthalten:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Location")]),e._v(": Die URL des Webservers")]),e._v(" "),r("li",[r("strong",[e._v("USN")]),e._v(": Die eindeutige ID für diese Hyperion-Instanz, sie bleibt auch nach Systemneustarts oder Hyperion-Updates erhalten")]),e._v(" "),r("li",[r("strong",[e._v("HYPERION-FBS-PORT")]),e._v(": Der Port des Flatbufferservers")]),e._v(" "),r("li",[r("strong",[e._v("HYPERION-JSS-PORT")]),e._v(": Der Port des JsonServers")]),e._v(" "),r("li",[r("strong",[e._v("HYPERION-NAME")]),e._v(": Der benutzerdefinierte Name für diesen Server")])]),e._v(" "),r("p",[e._v("Wenn sich die Werte ändern (z. B. Änderung der IP-Adresse des Netzwerkadapters), werden neue Updates automatisch mitgeteilt.")]),e._v(" "),r("h2",{attrs:{id:"zeroconf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zeroconf"}},[e._v("#")]),e._v(" Zeroconf")]),e._v(" "),r("p",[e._v("Auch bekannt als "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bonjour_(Software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Bonjour"),r("OutboundLink")],1),e._v(" oder "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Avahi_(Software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avahi"),r("OutboundLink")],1),e._v(". Hyperion ist über zeroconf auffindbar.")]),e._v(" "),r("p",[r("strong",[e._v("Hyperion publishes the following informations:")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("_hyperiond-http._tcp")]),e._v(": Hyperion Webserver (HTTP+Websocket)")]),e._v(" "),r("li",[r("strong",[e._v("_hyperiond-json._tcp")]),e._v(": Hyperion JSON Server (TcpSocket)")]),e._v(" "),r("li",[r("strong",[e._v("_hyperiond-flatbuf._tcp")]),e._v(": Hyperion Flatbuffers Server (Google Flatbuffers)")])]),e._v(" "),r("p",[e._v("Man erhält die IP-Adresse, den Hostnamen, den Port und den Namen der Hyperion-Instanz (vor dem @ für den vollständigen Namen). Da dies in Echtzeit funktioniert, kann man immer eine aktuelle Liste der verfügbaren Hyperion-Server erhalten.")]),e._v(" "),r("h3",{attrs:{id:"txt-record"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#txt-record"}},[e._v("#")]),e._v(" TXT RECORD")]),e._v(" "),r("p",[e._v("Jeder veröffentlichte Eintrag enthält mindestens die folgenden Daten im txt-Feld:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("id")]),e._v(": Eine statische, eindeutige ID zur Identifizierung einer Hyperion-Instanz.")]),e._v(" "),r("li",[r("strong",[e._v("version")]),e._v(": Hyperion Version.")])]),e._v(" "),r("h3",{attrs:{id:"test-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-clients"}},[e._v("#")]),e._v(" Test Clients")]),e._v(" "),r("p",[e._v("Es stehen verschiedene Clients zum Testen zur Verfügung, wie z. B. der\n"),r("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("avahi-browse"),r("OutboundLink")],1),e._v(" ein Kommandozeilen-Tool für Ubuntu/Debian. Beispiel-Befehl")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" avahi-browse "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" avahi-browse -r _hyperiond-http._tcp\n")])])]),r("ImageWrap",{attrs:{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion Server with Avahi cli"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);