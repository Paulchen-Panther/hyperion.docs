import{_ as i,c as t,J as r,a5 as n,o as a,E as s}from"./chunks/framework.C7p0y4oj.js";const k=JSON.parse('{"title":"Hyperion finden","description":"","frontmatter":{},"headers":[],"relativePath":"de/api/Detect.md","filePath":"de/api/Detect.md","lastUpdated":1711921244000}'),o={name:"de/api/Detect.md"},l=n('<h1 id="hyperion-finden" tabindex="-1">Hyperion finden <a class="header-anchor" href="#hyperion-finden" aria-label="Permalink to &quot;Hyperion finden&quot;">​</a></h1><p>Hyperion publiziert seine Dienste im Netzwerk, über mDNS und SSDP.</p><nav class="table-of-contents"><ul><li><a href="#ssdp">SSDP</a><ul><li><a href="#ssdp-client-bibliothek">SSDP-Client-Bibliothek</a></li><li><a href="#nutzung">Nutzung</a></li></ul></li><li><a href="#multicast-dns-mdns">Multicast DNS (mDNS)</a><ul><li><a href="#txt-record">TXT RECORD</a></li><li><a href="#test-clients">Test Clients</a></li></ul></li></ul></nav><h2 id="ssdp" tabindex="-1">SSDP <a class="header-anchor" href="#ssdp" aria-label="Permalink to &quot;SSDP&quot;">​</a></h2><p><strong>S</strong>imple<strong>S</strong>ervice<strong>D</strong>iscovery<strong>P</strong>rotocol (<a href="https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol" target="_blank" rel="noreferrer">SSDP</a>) SSDP ist die Discovery-Untergruppe von UPnP. Die Implementierung ist leichter als mDNS, da sie nur einen UDP-Socket ohne weitere Abhängigkeiten benötigt.</p><h3 id="ssdp-client-bibliothek" tabindex="-1">SSDP-Client-Bibliothek <a class="header-anchor" href="#ssdp-client-bibliothek" aria-label="Permalink to &quot;SSDP-Client-Bibliothek&quot;">​</a></h3><p>Hier sind einige Beispiel-Client-Bibliotheken für verschiedene Programmiersprachen (viele weitere sind verfügbar):</p><ul><li><a href="https://github.com/diversario/node-ssdp#usage---client" target="_blank" rel="noreferrer">NodeJS</a></li><li><a href="https://github.com/resourcepool/ssdp-client#jarpic-client" target="_blank" rel="noreferrer">Java</a></li></ul><h3 id="nutzung" tabindex="-1">Nutzung <a class="header-anchor" href="#nutzung" aria-label="Permalink to &quot;Nutzung&quot;">​</a></h3><p>Mit einer gegebenen SSDP-Client-Bibliothek kann man den folgenden USN- / Diensttyp verwenden:</p><p><code>urn:hyperion-project.org:device:basic:1</code></p><p>Einige Header der Antwort enthalten:</p><ul><li><strong>Location</strong>: Die URL des Webservers</li><li><strong>USN</strong>: Die eindeutige ID für diese Hyperion-Instanz, sie bleibt auch nach Systemneustarts oder Hyperion-Updates erhalten</li><li><strong>HYPERION-FBS-PORT</strong>: Der Port des FlatBuffer Servers</li><li><strong>HYPERION-JSS-PORT</strong>: Der Port des JSON-API Servers</li><li><strong>HYPERION-NAME</strong>: Der benutzerdefinierte Name für diesen Server</li></ul><p>Wenn sich die Werte ändern (z. B. Änderung der IP-Adresse des Netzwerkadapters), werden neue Updates automatisch mitgeteilt.</p><h2 id="multicast-dns-mdns" tabindex="-1">Multicast DNS (mDNS) <a class="header-anchor" href="#multicast-dns-mdns" aria-label="Permalink to &quot;Multicast DNS (mDNS)&quot;">​</a></h2><p>Hyperions Dienste können über mDNS gefunden werden.</p><p>mDNS is auch bekannt als <a href="https://de.wikipedia.org/wiki/Zeroconf" target="_blank" rel="noreferrer">Zeroconf</a>, <a href="https://en.wikipedia.org/wiki/Bonjour_(Software)" target="_blank" rel="noreferrer">Apple Bonjour</a> oder <a href="https://en.wikipedia.org/wiki/Avahi_(Software)" target="_blank" rel="noreferrer">Avahi</a>.</p><p><strong>Hyperion publiziert folgende Dienste:</strong></p><ul><li><strong>_http._tcp</strong>: Hyperion Webserver (HTTP + Websocket)</li><li><strong>_https._tcp</strong>: Hyperion Webserver (HTTPS + Websocket Secure)</li><li><strong>_hyperiond-json._tcp</strong>: Hyperion JSON-API Server (TcpSocket)</li><li><strong>_hyperiond-flatbuf._tcp</strong>: Hyperion FlatBuffers Server (Google FlatBuffers)</li><li><strong>_hyperiond-protobuf._tcp</strong>: Hyperion Protocol Buffers Server (Google Protocol Buffers)</li></ul><p>Du erhältst den mDNS Dienstnamen, die IP-Adresse und den Port über den der Dienst angeboten wird.</p><h3 id="txt-record" tabindex="-1">TXT RECORD <a class="header-anchor" href="#txt-record" aria-label="Permalink to &quot;TXT RECORD&quot;">​</a></h3><p>Jeder veröffentlichte Eintrag enthält mindestens die folgenden Daten im txt-Feld:</p><ul><li><strong>id</strong>: Eine statische, eindeutige ID zur Identifizierung einer Hyperion-Instanz.</li><li><strong>version</strong>: Hyperion Version.</li></ul><h3 id="test-clients" tabindex="-1">Test Clients <a class="header-anchor" href="#test-clients" aria-label="Permalink to &quot;Test Clients&quot;">​</a></h3><p>Es stehen verschiedene Clients zum Testen zur Verfügung, wie z. B. der <a href="https://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html" target="_blank" rel="noreferrer">avahi-browse</a> ein Kommandozeilen-Tool für Ubuntu/Debian. Beispiel-Befehl</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi-untils</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">avahi-browse</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _hyperiond-json._tcp</span></span></code></pre></div>',26);function p(d,h,c,g,u,f){const e=s("ImageWrap");return a(),t("div",null,[l,r(e,{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion JSON-API Server with Avahi cli"})])}const m=i(o,[["render",p]]);export{k as __pageData,m as default};
