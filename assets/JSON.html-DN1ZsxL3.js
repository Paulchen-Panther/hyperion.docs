import{_ as d,r,o as c,c as u,a as e,d as n,b as t,w as s,e as o}from"./app-BAe5RfCN.js";const p={},h=e("h1",{id:"json-rpc-einfuhrung",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#json-rpc-einfuhrung"},[e("span",null,"JSON-RPC Einführung")])],-1),m=e("p",null,"Die JSON-RPC-Schnittstellen bieten viele Möglichkeiten zur Interaktion mit Hyperion. Man kann Informationen über den Server und die Instanzen abrufen und Aktionen ausführen (z. B. einen Prioritätseingang setzen).",-1),g=e("h2",{id:"was-ist-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#was-ist-json"},[e("span",null,"Was ist JSON?")])],-1),b={href:"https://www.json.org/",target:"_blank",rel:"noopener noreferrer"},k=o(`<h3 id="senden-von-json" tabindex="-1"><a class="header-anchor" href="#senden-von-json"><span>Senden von JSON</span></a></h3><p>Hyperion benötigt eine speziell formatierte JSON-Nachricht. Ein Argument <code>command</code> ist immer erforderlich. Ein Argument &quot;tan&quot; ist optional. Dies ist eine Ganzzahl, die man frei wählen kann - sie ist Teil der Antwort, die man erhält, um die Antwort von anderen Server-Nachrichten zu filtern (diese Funktionalität ist wahrscheinlich nur für fortgeschrittene Anwendungsfälle notwendig).</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;YourCommand&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Je nach Befehl kann ein zusätzlicher Subbefehl erforderlich sein:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;YourCommand&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;subcommand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;YourSubCommand&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ruckantwort" tabindex="-1"><a class="header-anchor" href="#ruckantwort"><span>Rückantwort</span></a></h3><p>Die meisten Nachrichten, die du sendest, lösen eine Antwort des folgenden Formats aus:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;YourCommand&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;info&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> ...DATA... <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;instance&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>command</strong>: Der angeforderte Befehl.</li><li><strong>tan</strong>: Die von dir angegebene tan (Wenn nicht, wird sie in der Antwort standardmäßig auf 0 gesetzt).</li><li><strong>instance</strong>: Instanz, welche das Update gesendet hat</li><li><strong>success</strong>: true oder false. Wenn es falsch ist, enthält ein <strong>Fehler</strong>-Argument Details zu dem Problem.</li><li><strong>info</strong>: Die von dir angeforderten Daten (falls vorhanden).</li></ul><h2 id="verbindung" tabindex="-1"><a class="header-anchor" href="#verbindung"><span>Verbindung</span></a></h2><p>Hyperion unterstützt derzeit mehrere Verbindungsmechanismen: TCP Socket (&quot;Json Server&quot;), WebSocket und HTTP/S.</p>`,11),v={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),_=e("h3",{id:"tcp-socket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tcp-socket"},[e("span",null,"TCP-Socket")])],-1),S=e("p",null,'Dies ist eine "rohe" Verbindung, du kannst zeilengetrenntes json vom Server senden und empfangen (Standardport: 19444). Dies wird auch als "Json-Server" bezeichnet.',-1),w=e("h3",{id:"websocket",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#websocket"},[e("span",null,"WebSocket")])],-1),j={href:"https://de.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"},z=e("h3",{id:"http-s-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-s-json"},[e("span",null,"HTTP/S Json")])],-1),T=e("p",null,[n("HTTP-Anfragen können auch an den Webserver gesendet werden (Standardport: 8090, für HTTPS: 8092). Sende eine HTTP/S POST-Anfrage zusammen mit einer korrekt formatierten Json-Nachricht im Body an die (Beispiel-)URL: "),e("code",null,"http://Ip:WebserverPort/json-rpc")],-1),q={href:"https://addons.mozilla.org/de/firefox/addon/restclient/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://chrome.google.com/webstore/detail/yet-another-rest-client/ehafadccdcdedbhcbddihehiodgcddpl",target:"_blank",rel:"noopener noreferrer"},P={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),N=o('<div class="custom-container warning"><p class="custom-container-title">HTTP/S-Einschränkungen</p><p>Bitte beachtet, dass dem HTTP-JSON-RPC aufgrund von technischen Einschränkungen folgende Funktionen fehlen.</p><ul><li>Bild-Streams, Led-Farb-Streams, Logging-Streams, Abonnements</li></ul></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><h3 id="server-infos" tabindex="-1"><a class="header-anchor" href="#server-infos"><span>Server-Infos</span></a></h3>',3),x=e("h3",{id:"steuerung",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#steuerung"},[e("span",null,"Steuerung")])],-1),J=e("h3",{id:"authentifizierung",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#authentifizierung"},[e("span",null,"Authentifizierung")])],-1),D=e("h3",{id:"abonnieren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abonnieren"},[e("span",null,"Abonnieren")])],-1),H=e("h2",{id:"drittanbieter-bibliotheken",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drittanbieter-bibliotheken"},[e("span",null,"Drittanbieter-Bibliotheken")])],-1),O={href:"https://github.com/dermotduffy/hyperion-py",target:"_blank",rel:"noopener noreferrer"};function I(W,B){const i=r("ExternalLinkIcon"),a=r("RouteLink"),l=r("ImageWrap");return c(),u("div",null,[h,m,g,e("p",null,[n("JSON ist ein standardisiertes Nachrichtenformat (siehe "),e("a",b,[n("JSON.org"),t(i)]),n(") und wird von den meisten Programmiersprachen unterstützt. Es ist für Menschen lesbar, was die Fehlersuche erleichtert.")]),k,e("div",v,[f,e("p",null,[n("Du kannst Hyperion-Server automatisch erkennen! Siehe "),t(a,{to:"/de/api/Detect.html"},{default:s(()=>[n("Hyperion erkennen")]),_:1})])]),_,S,w,e("p",null,[n("Dies ist Teil des Hyperion-Webservers (Standard-Port: 8090). Man sendet und empfängt json-Befehle. WSS wird auch auf Port 8092 unterstützt. Es wird nur der TEXT-Modus unterstützt. Lese mehr über Websockets unter "),e("a",j,[n("Websocket"),t(i)]),n(".")]),z,T,t(l,{src:"/images/de/http_jsonrpc.jpg",alt:"Hyperion mit HTTP JSON RPC steuern"},{default:s(()=>[e("p",null,[n("Beispielbild mit "),e("a",q,[n("Firefox"),t(i)]),n("/"),e("a",A,[n("Chrome"),t(i)]),n(" Addon zum Senden von HTTP-JSON-Nachrichten")])]),_:1}),e("div",P,[y,e("p",null,[n('Wenn du eine "Keine Autorisierung"-Antwort erhältst, musst du ein '),t(a,{to:"/de/json/Authentication.html#token-system"},{default:s(()=>[n("Autorisierungs-Token")]),_:1}),n(" erstellen")])]),N,e("p",null,[n("Eine Vielzahl von Daten ist vom Server verfügbar: "),t(a,{to:"/de/json/ServerInfo.html"},{default:s(()=>[n("Server Info")]),_:1})]),x,e("p",null,[n("Steuer deinen Hyperion Server: "),t(a,{to:"/de/json/Control.html"},{default:s(()=>[n("Steuerung")]),_:1})]),J,e("p",null,[n("Authentifizierungsmechanismen: "),t(a,{to:"/de/json/Authentication.html"},{default:s(()=>[n("Authentifizierung")]),_:1})]),D,e("p",null,[n("Daten-Abonnements: "),t(a,{to:"/de/json/Subscribe.html"},{default:s(()=>[n("Abonnieren")]),_:1})]),H,e("ul",null,[e("li",null,[e("a",O,[n("Hyperion-py"),t(i)]),n(" ist ein Drittanbieter-Bibliotheken Python-Bibliothek für die Kommunikation mit Hyperion-NG. Sie verwendet die hier beschriebene API als zugrundeliegenden Kommunikationsmechanismus und stellt diesen in einer benutzerfreundlichen Weise dar. Als Drittanbieter-Bibliotheken wird sie nicht vom Hyperion-Entwicklungsteam unterstützt.")])])])}const E=d(p,[["render",I],["__file","JSON.html.vue"]]),R=JSON.parse('{"path":"/de/json/JSON.html","title":"JSON-RPC Einführung","lang":"de-DE","frontmatter":{},"headers":[{"level":2,"title":"Was ist JSON?","slug":"was-ist-json","link":"#was-ist-json","children":[{"level":3,"title":"Senden von JSON","slug":"senden-von-json","link":"#senden-von-json","children":[]},{"level":3,"title":"Rückantwort","slug":"ruckantwort","link":"#ruckantwort","children":[]}]},{"level":2,"title":"Verbindung","slug":"verbindung","link":"#verbindung","children":[{"level":3,"title":"TCP-Socket","slug":"tcp-socket","link":"#tcp-socket","children":[]},{"level":3,"title":"WebSocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"HTTP/S Json","slug":"http-s-json","link":"#http-s-json","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Server-Infos","slug":"server-infos","link":"#server-infos","children":[]},{"level":3,"title":"Steuerung","slug":"steuerung","link":"#steuerung","children":[]},{"level":3,"title":"Authentifizierung","slug":"authentifizierung","link":"#authentifizierung","children":[]},{"level":3,"title":"Abonnieren","slug":"abonnieren","link":"#abonnieren","children":[]}]},{"level":2,"title":"Drittanbieter-Bibliotheken","slug":"drittanbieter-bibliotheken","link":"#drittanbieter-bibliotheken","children":[]}],"git":{"updatedTime":1710797925000},"filePathRelative":"de/json/JSON.md"}');export{E as comp,R as data};
