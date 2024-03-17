import{_ as i,b as r,c as l,d as o,e,f as s,w as a,h as p,g as t}from"./app-DDa5geYI.js";const d={},c=e("h1",{id:"befehlszeile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#befehlszeile"},[e("span",null,"Befehlszeile")])],-1),u=e("p",null,"Alle mit Hyperion ausgelieferten ausführbaren Dateien haben einige Befehlszeilenargumente/Optionen",-1),m={class:"table-of-contents"},v=p(`<h2 id="hyperiond" tabindex="-1"><a class="header-anchor" href="#hyperiond"><span>hyperiond</span></a></h2><p>Das Herzstück von Hyperion</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Zeigt die Version/Build-Datum/Commit von Hyperion an </span>
hyperiond <span class="token parameter variable">--version</span>

<span class="token comment"># Aktuelles Administrations-Passwort wieder auf &#39;hyperion&#39; zurücksetzen</span>
hyperiond <span class="token parameter variable">--resetPassword</span>

<span class="token comment"># Überschreibe den Pfad für die Benutzerdaten (der standardmäßig auf dein Home-Verzeichnis eingestellt ist)</span>
hyperiond <span class="token parameter variable">--userdata</span> /temp/anotherDir

<span class="token comment"># Log-Level temporär überschreiben: hyperiond -s für silent -v für verbose und -d für debug</span>
hyperiond <span class="token parameter variable">-d</span>

<span class="token comment"># Effekte in ein Verzeichnis exportieren</span>
hyperiond --export-effects /tmp

<span class="token comment"># Hyperion im Desktop-Modus ausführen</span>
hyperiond <span class="token parameter variable">--desktop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Wenn ein Pfadname Leerzeichen enthält, dann umschließe ihn mit <code>&quot;</code> . <br><code>hyperiond --userdata &quot;/temp/another Dir&quot;</code></p></div><h2 id="hyperion-remote" tabindex="-1"><a class="header-anchor" href="#hyperion-remote"><span>hyperion-remote</span></a></h2><p>hyperion-remote ist ein Kommandozeilen-Tool, das vorgegebene Argumente in JSON-Befehle übersetzt und diese an den Hyperion JSON-RPC sendet. Es ist ideal für Skripte geeignet. Es unterstützt fast alle Befehle, die Hyperion zur Verfügung stellt.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Eine Liste aller verfügbaren Befehle abrufen</span>
hyperion-remote <span class="token parameter variable">-h</span>

<span class="token comment"># Einstellen einer Farbe mit Hilfe von HTML-Farbnamen</span>
hyperion-remote <span class="token parameter variable">-c</span> aqua

<span class="token comment">#  Einstellen einer Farbe mit Hilfe von Hex-Werten</span>
hyperion-remote <span class="token parameter variable">-c</span> FF7F50

<span class="token comment"># Farbe mit einer Dauer von 5 Sekunden statt endlos einstellen </span>
hyperion-remote <span class="token parameter variable">-c</span> FF7F50 <span class="token parameter variable">-d</span> <span class="token number">5000</span>

<span class="token comment"># Einen Effekt starten</span>
hyperion-remote <span class="token parameter variable">-e</span> <span class="token string">&quot;Rainbow swirl&quot;</span>

<span class="token comment"># mit einer Dauer von 8 Sekunden statt endlos</span>
hyperion-remote <span class="token parameter variable">-e</span> <span class="token string">&quot;Rainbow swirl&quot;</span> <span class="token parameter variable">-d</span> <span class="token number">8000</span>

<span class="token comment"># Bestimmte Instanz ansteuern</span>
<span class="token comment"># ACHTUNG: Hyperion-Instanzen werden standardmäßig mit der Funktion &quot;Instance Syncing&quot; synchronisiert</span>
<span class="token comment"># Du kannst das Verhalten für jede Instanz konfigurieren</span>
hyperion-remote <span class="token parameter variable">-I</span> <span class="token string">&quot;Mein cooler Instanzname&quot;</span>
<span class="token comment"># Oder</span>
hyperion-remote <span class="token parameter variable">--instance</span> <span class="token string">&quot;Mein cooler Instanzname&quot;</span>
<span class="token comment"># Beispiel um ein Effekt für eine Instanz zu setzen</span>
hyperion-remote <span class="token parameter variable">--instance</span> <span class="token string">&quot;Mein cooler Instanzname&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Rainbow swirl&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Hyperion-Remote wird automatisch nach einem Hyperion-Server suchen. So kannst du das sogar auf einem anderen Gerät in deinem lokalen Netzwerk verwenden, ohne eine IP/Port anzugeben.</p></div><h2 id="hyperion-capture" tabindex="-1"><a class="header-anchor" href="#hyperion-capture"><span>hyperion-capture</span></a></h2><p>Wir stellen auch auch unabhängige Capture-Apps direkt in deinem Hyperion-Verzeichnis bereit:</p><table><thead><tr><th style="text-align:left;">App</th><th style="text-align:left;">Quelle</th></tr></thead><tbody><tr><td style="text-align:left;">hyperion-aml</td><td style="text-align:left;">Amlogic Bildschirmerfassung</td></tr><tr><td style="text-align:left;">hyperion-dispmanx</td><td style="text-align:left;">DispManX Raspberry Pi Bildschirmerfassung</td></tr><tr><td style="text-align:left;">hyperion-framebuffer</td><td style="text-align:left;">Linux FrameBuffer Bildschirmerfassung</td></tr><tr><td style="text-align:left;">hyperion-osx</td><td style="text-align:left;">macOS Bildschirmerfassung</td></tr><tr><td style="text-align:left;">hyperion-qt</td><td style="text-align:left;">Qt Multi Platform Bildschirmerfassung</td></tr><tr><td style="text-align:left;">hyperion-v4l2</td><td style="text-align:left;">USB Erfassung</td></tr><tr><td style="text-align:left;">hyperion-x11</td><td style="text-align:left;">X11 Bildschirmerfassung</td></tr><tr><td style="text-align:left;">hyperion-xcb</td><td style="text-align:left;">XCB Bildschirmerfassung</td></tr></tbody></table><p>Abhängig von deiner Plattform sind es mehr oder weniger Apps.</p><p>Alle diese Anwendungen können unabhängig von Hyperion gestartet werden und alle haben leicht unterschiedliche Optionen. Sie kommunizieren mit der Flatbuffer-Schnittstelle von Hyperion. Jedes Modul sucht automatisch nach einem Hyperion-Server, wenn die Option <code>--address</code> nicht verwendet wird.</p><p>Nachfolgend findest du zur Veranschaulichung die Ausgabe von der Qt Bildschirmerfassungsapp.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hyperion-qt <span class="token parameter variable">--help</span>
hyperion-qt:
	Version   <span class="token builtin class-name">:</span> <span class="token number">2.0</span>.16 <span class="token variable"><span class="token punctuation">((</span>HEAD detached at <span class="token number">2.0</span><span class="token number">.16</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Paulchen<span class="token operator">-</span>Panther<span class="token operator">-</span>cb85d2d<span class="token operator">/</span>a93d79b<span class="token operator">-</span><span class="token number">1705568419</span><span class="token punctuation">))</span></span>
	build time: Jan <span class="token number">18</span> <span class="token number">2024</span> 09:15:43
Usage: ./bin/hyperion-qt <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
Qt interface capture application <span class="token keyword">for</span> Hyperion. Will automatically search a Hyperion server <span class="token keyword">if</span> <span class="token parameter variable">-a</span> option isn<span class="token string">&#39;t used. Please note that if you have more than one server running it&#39;</span>s <span class="token function">more</span> or <span class="token function">less</span> random <span class="token function">which</span> one will be used.

Options:
  -d, <span class="token parameter variable">--display</span> <span class="token operator">&lt;</span>display<span class="token operator">&gt;</span>                Set the display to capture <span class="token punctuation">[</span>default:
                                         <span class="token number">0</span><span class="token punctuation">]</span>
  -f, <span class="token parameter variable">--framerate</span> <span class="token operator">&lt;</span>framerate<span class="token operator">&gt;</span>            Capture frame rate. Range <span class="token number">1</span>-30fps
                                         <span class="token punctuation">[</span>default: <span class="token number">25</span><span class="token punctuation">]</span>
  -s, --size-decimator <span class="token operator">&lt;</span>size-decimator<span class="token operator">&gt;</span>  Decimation factor <span class="token keyword">for</span> the output image
                                         size <span class="token punctuation">[</span>default<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">]</span>
  --crop-left <span class="token operator">&lt;</span>crop-left<span class="token operator">&gt;</span>                Number of pixels to crop from the left
                                         of the picture before decimation
  --crop-right <span class="token operator">&lt;</span>crop-right<span class="token operator">&gt;</span>              Number of pixels to crop from the
                                         right of the picture before decimation
  --crop-top <span class="token operator">&lt;</span>crop-top<span class="token operator">&gt;</span>                  Number of pixels to crop from the <span class="token function">top</span>
                                         of the picture before decimation
  --crop-bottom <span class="token operator">&lt;</span>crop-bottom<span class="token operator">&gt;</span>            Number of pixels to crop from the
                                         bottom of the picture before decimation
  <span class="token parameter variable">--3DSBS</span>                                Interpret the incoming video stream as
                                         3D side-by-side
  <span class="token parameter variable">--3DTAB</span>                                Interpret the incoming video stream as
                                         3D top-and-bottom
  -a, <span class="token parameter variable">--address</span> <span class="token operator">&lt;</span>address<span class="token operator">&gt;</span>                The <span class="token function">hostname</span> or IP-address <span class="token punctuation">(</span>IPv4 or
                                         IPv6<span class="token punctuation">)</span> of the hyperion server.
                                         Default host: <span class="token number">127.0</span>.0.1, port: <span class="token number">19400</span>.
                                         Sample addresses:
                                         Host <span class="token builtin class-name">:</span> hyperion.fritz.box
                                         IPv4 <span class="token builtin class-name">:</span> <span class="token number">127.0</span>.0.1:19400
                                         IPv6 <span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token number">2001</span>:1:2:3:4:5:6:7<span class="token punctuation">]</span>
  -p, <span class="token parameter variable">--priority</span> <span class="token operator">&lt;</span>priority<span class="token operator">&gt;</span>              Use the provided priority channel
                                         <span class="token punctuation">(</span>suggested <span class="token number">100</span>-199<span class="token punctuation">)</span> <span class="token punctuation">[</span>default: <span class="token number">150</span><span class="token punctuation">]</span>
  --skip-reply                           Do not receive and check reply
                                         messages from Hyperion
  <span class="token parameter variable">--screenshot</span>                           Take a single screenshot, save it to
                                         <span class="token function">file</span> and quit
  <span class="token parameter variable">--debug</span>                                Enable debug logging
  -h, <span class="token parameter variable">--help</span>                             Show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Beispiel mit einem Aufnahmeintervall von 15 Bildern pro Sekunde (fps)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hyperion-qt -f 15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17);function b(h,k){const n=r("router-link");return l(),o("div",null,[c,u,e("nav",m,[e("ul",null,[e("li",null,[s(n,{to:"#hyperiond"},{default:a(()=>[t("hyperiond")]),_:1})]),e("li",null,[s(n,{to:"#hyperion-remote"},{default:a(()=>[t("hyperion-remote")]),_:1})]),e("li",null,[s(n,{to:"#hyperion-capture"},{default:a(()=>[t("hyperion-capture")]),_:1})])])]),v])}const g=i(d,[["render",b],["__file","CLI.html.vue"]]),y=JSON.parse('{"path":"/de/user/advanced/CLI.html","title":"Befehlszeile","lang":"de-DE","frontmatter":{},"headers":[{"level":2,"title":"hyperiond","slug":"hyperiond","link":"#hyperiond","children":[]},{"level":2,"title":"hyperion-remote","slug":"hyperion-remote","link":"#hyperion-remote","children":[]},{"level":2,"title":"hyperion-capture","slug":"hyperion-capture","link":"#hyperion-capture","children":[]}],"git":{"updatedTime":1710682155000},"filePathRelative":"de/user/advanced/CLI.md"}');export{g as comp,y as data};
