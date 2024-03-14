import{_ as c,b as p,c as l,d as u,e as n,g as s,f as a,w as r,h as o}from"./app-SNb-n1nX.js";const d={},k=n("h1",{id:"unser-erster-effekt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#unser-erster-effekt"},[n("span",null,"Unser erster Effekt")])],-1),m=n("p",null,[s("Lass uns gemeinsam unseren ersten Effekt erstellen! "),n("br"),s(" Ziel dieses Effekts ist es, den allgemeinen Aufbau eines Effekts zu zeigen und dich mit der API und dem Workflow vertraut zu machen.")],-1),h=n("h2",{id:"anforderungen",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#anforderungen"},[n("span",null,"Anforderungen")])],-1),b=n("li",null,"Ein installiertes und laufendes Hyperion. Du brauchst Zugriff auf das Dateisystem, auf dem Hyperion installiert wurde.",-1),f={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,'Gehe zum Ordner "custom-effects" der Hyperion-Installation (innerhalb des Ordners .hyperion im Home-Verzeichnis).',-1),g=n("li",null,[n("strong",null,'Lege in der Web-Konfiguration im Abschnitt "LED-Hardware" ein LED-Matrix-Layout für 10x10 LEDs fest.')],-1),w=n("h3",{id:"start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#start"},[n("span",null,"Start")])],-1),y=n("code",null,"neweffect.py",-1),_=n("code",null,"custom-effects",-1),z=n("br",null,null,-1),E=n("code",null,"hyperion",-1),D=n("code",null,"time",-1),P={href:"https://docs.python.org/3.5/library/",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"hyperion",-1),x=o(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Lass uns unsere Module importieren, damit wir sie verwenden können</span>
<span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time

<span class="token comment"># Erstelle eine Schleife, diese Schleife läuft, bis der Benutzer den Effekt stoppt</span>
<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># Hier befinden wir uns innerhalb der Schleife, lass uns irgendwas machen</span>
  <span class="token comment"># Entsprechend der Dokumentation von hyperion.imageDrawPoint()</span>
  <span class="token comment"># Die Position dieses Punktes ist 2 auf der x-Achse und 5 auf der y-Achse mit einer Breite von 1 Pixel und der Farbe Rot </span>
  hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment"># Nun müssen wir Hyperion mitteilen, dass wir das erstellte Bild übertragen wollen</span>
  hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment"># Da wir uns noch in unserer Schleife befinden, sollten wir eine Pause einlegen, um die Ausführung zu verlangsamen. Wir sollten niemals CPU-Leistung verschwenden :)</span>
  <span class="token comment"># Eine Sekunde pausieren, bis die Schleife von vorne beginnt</span>
  time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Zusammenfassung</strong>: Erster Effekt fertig! Wir haben einen roten Punkt mit einer Breite von einem Pixel auf ein leeres Bild gesetzt und diesen an Hyperion gesendet.</p><h3 id="konfiguration" tabindex="-1"><a class="header-anchor" href="#konfiguration"><span>Konfiguration</span></a></h3><p>Nun wollen wir unsere neweffect.py testen. Erstelle dazu eine neue Datei namens <code>neweffect.json</code>. Und platziere den folgenden Code darin</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Mein erster eigener Effekt!&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;neweffect.py&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;args&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lass uns darüber sprechen, was wir hier getan haben</p><ul><li>Die <code>neweffect.json</code> enthält die Konfiguration für unseren Effekt.</li><li>Die <code>name</code> Eigenschaft ist der Effektname, der in der Effektliste angezeigt wird und frei definiert werden kann.</li><li>Die <code>script</code> Eigenschaft zeigt auf die Python-Datei, die gestartet werden soll.</li><li>Die <code>args</code> Eigenschaft enthält Optionen und deren Werte, z. B. eine Farbe, Geschwindigkeit und so weiter. Wir lassen dies vorerst leer.</li></ul><p><strong>Nachdem du diese Datei in deinen Ordner custom-effects hinzugefügt hast, musst du Hyperion einmal neu starten</strong></p><p>Jetzt solltest du den Effekt &quot;Mein erster eigener Effekt!&quot; in der Effektliste der Remote-Seite sehen. Startet man den Effekt, sollte man bei der Visualisierung so etwas sehen.</p>`,9),S={href:"https://doc.qt.io/qt-5/coordsys.html#rendering",target:"_blank",rel:"noopener noreferrer"},H=o(`<h3 id="farboption-hinzufugen" tabindex="-1"><a class="header-anchor" href="#farboption-hinzufugen"><span>Farboption hinzufügen</span></a></h3><p>Jetzt wollen wir die Farbe des Punktes konfigurierbar machen. <br> Bearbeiten wir die Datei neweffect.py.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time

<span class="token comment"># Lass uns den Wert der Option custom-color abrufen, die Werte werden in der Variablen color gespeichert</span>
color <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;custom-color&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># Hol die Farbinformationen aus der Variablen color</span>
  hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
  time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mit <code>hyperion.args.get()</code> holen wir uns die Werte aus der neweffect.json, die diese Python-Datei startet (aus der Eigenschaft <code>args</code> der neweffect.json, die momentan leer ist).</li><li>TDas Farb-Array am Ende von <code>hyperion.args.get(&#39;custom-color&#39;, (0,255,200))</code> ist ein Fallback-Wert, da wir in den Variablen der neweffect.json keine Eigenschaft <code>custom-color</code> liefern. Dies gewährleistet immer einen funktionierenden Effekt, wähl diese Standardwerte mit Bedacht.</li><li>Wie du siehst, hat <code>hyperion.imageDrawPoint(...)</code> auch eine Änderung erhalten, da wir die <code>custom-color</code> in die Variable <code>color</code> schreiben, greifen wir auf die Werte mit <code>color[0]</code> was 0 ist, <code>color[1]</code> was 255 ist und <code>color[2]</code> was 200 ist.</li></ul><p><strong>Speicher die neweffect.py und starte den Effekt neu, ein Neustart von Hyperion ist nicht erforderlich</strong> <br> Es sollte nun wie folgt aussehen</p>`,5),B=o(`<h3 id="mehr-punkte" tabindex="-1"><a class="header-anchor" href="#mehr-punkte"><span>Mehr Punkte!</span></a></h3><p>Jetzt haben wir einen einzelnen Punkt, und wir haben die Farbe für den Punkt vorbereitet, um diesen konfigurierbar zu machen. Jetzt wollen wir mehr davon! <br> Wieder editieren wir die neweffect.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time<span class="token punctuation">,</span> random

color   <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;custom-color&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
iWidth  <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>imageWidth<span class="token punctuation">(</span><span class="token punctuation">)</span>
iHeight <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>imageHeight<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>iWidth<span class="token punctuation">)</span><span class="token punctuation">,</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>iHeight<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),F=n("code",null,"hyperion.imageWidth()",-1),q=n("code",null,"hyperion.imageHeight()",-1),L={href:"https://docs.python.org/3.5/library/random.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"random.randint()",-1),A=n("li",null,"Bedenke, dass das Benutzer-Setup immer eine unterschiedliche Breite und Höhe hat und sogar das Verhältnis zwischen ihnen dynamisch ist, basierend auf dem LED-Layout.",-1),C=n("li",null,[n("strong",null,"Benutze niemals feste Positionen, Breiten,... berechne sie immer!")],-1),O=n("p",null,"Dies ist also das Bild, nachdem wir den Effekt erneut gestartet haben.",-1),V=o(`<p>Jede Sekunde ( beachte die <code>sleep.time(1)</code>) malt es an einer zufälligen Position einen neuen Punkt, endlos. Er prüft nicht, ob bereits ein Punkt vorhanden ist, er überschreibt einfach den vorherigen Punkt.</p><h3 id="mehr-farbe" tabindex="-1"><a class="header-anchor" href="#mehr-farbe"><span>Mehr Farbe</span></a></h3><p>Fügen wir eine Option hinzu, die den Effekt veranlasst, optional eine zufällige Farbe für jeden Punkt zu verwenden, anstatt immer die gleiche. <br> Dazu editieren wir wieder die neweffect.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time<span class="token punctuation">,</span> random
<span class="token comment"># eine Hilfsfunktion zur Konvertierung von HSV in den RGB-Raum</span>
<span class="token keyword">def</span> <span class="token function">hsv_to_rgb</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> s<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token number">0.0</span><span class="token punctuation">:</span> v<span class="token operator">*=</span><span class="token number">255</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>v<span class="token punctuation">,</span> v<span class="token punctuation">,</span> v<span class="token punctuation">]</span>
  i <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>h<span class="token operator">*</span><span class="token number">6.</span><span class="token punctuation">)</span>
  f <span class="token operator">=</span> <span class="token punctuation">(</span>h<span class="token operator">*</span><span class="token number">6.</span><span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token punctuation">;</span> p<span class="token punctuation">,</span>q<span class="token punctuation">,</span>t <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token operator">*</span><span class="token punctuation">(</span>v<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1.</span><span class="token operator">-</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token operator">*</span><span class="token punctuation">(</span>v<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1.</span><span class="token operator">-</span>s<span class="token operator">*</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token operator">*</span><span class="token punctuation">(</span>v<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1.</span><span class="token operator">-</span>s<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1.</span><span class="token operator">-</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> v<span class="token operator">*=</span><span class="token number">255</span><span class="token punctuation">;</span> i<span class="token operator">%=</span><span class="token number">6</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>v<span class="token punctuation">,</span> t<span class="token punctuation">,</span> p<span class="token punctuation">]</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>q<span class="token punctuation">,</span> v<span class="token punctuation">,</span> p<span class="token punctuation">]</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>p<span class="token punctuation">,</span> v<span class="token punctuation">,</span> t<span class="token punctuation">]</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>p<span class="token punctuation">,</span> q<span class="token punctuation">,</span> v<span class="token punctuation">]</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>t<span class="token punctuation">,</span> p<span class="token punctuation">,</span> v<span class="token punctuation">]</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>v<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">]</span>

color       <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;custom-color&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
randomColor <span class="token operator">=</span> <span class="token builtin">bool</span><span class="token punctuation">(</span>hyperion<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;random-color&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
iWidth      <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>imageWidth<span class="token punctuation">(</span><span class="token punctuation">)</span>
iHeight     <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>imageHeight<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

  <span class="token keyword">if</span> randomColor<span class="token punctuation">:</span>
    color <span class="token operator">=</span> hsv_to_rgb<span class="token punctuation">(</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

  hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>iWidth<span class="token punctuation">)</span><span class="token punctuation">,</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>iHeight<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
  time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),j=n("li",null,[s("Um helle Farben zu erzeugen, schreiben wir eine eigene Funktion: "),n("code",null,"def hsv_to_rgb(h, s, v): ...")],-1),I=n("code",null,"randomColor",-1),N=n("code",null,"bool(...)",-1),Z={href:"https://docs.python.org/3.5/library/stdtypes.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"while not hyperion.abort():",-1),R=n("code",null,"if randomColor:",-1),J=n("code",null,"color",-1),K=n("code",null,"hsv_to_rgb(h,s,v)",-1),U=n("code",null,"hsv_to_rgb(random.uniform(0,1), 1, 1)",-1),G={href:"https://www.w3schools.com/colors/colors_hsl.asp",target:"_blank",rel:"noopener noreferrer"},Q=n("p",null,[n("strong",null,"Speichere die Datei und starte den Effekt neu")],-1),X=n("h3",{id:"das-bild-leeren",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#das-bild-leeren"},[n("span",null,"Das Bild leeren")])],-1),Y=n("p",null,"Fügen wir eine Option hinzu, die das Bild in einem konfigurierbaren Intervall in Sekunden auf Schwarz setzt. Dadurch werden alle Punkte mit Schwarz überschrieben.",-1),$=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"Mehr wird bald kommen")],-1);function nn(sn,an){const e=p("ExternalLinkIcon"),i=p("RouteLink"),t=p("ImageWrap");return l(),u("div",null,[k,m,h,n("ul",null,[b,n("li",null,[s("Texteditor (nach deinem Belieben, ich würde "),n("a",f,[s("Visual Studio Code"),a(e)]),s(" empfehlen.)")]),v,g]),w,n("p",null,[s("Zuerst beginnen wir mit der Python-Datei. Erstelle eine neue Datei mit dem Namen "),y,s(" in deinem "),_,s("-Ordner. "),z,s(" Wir müssen einige Module importieren, "),E,s(" und "),D,s(" wird immer benötigt. Das Zeitmodul kommt aus Python, wenn du wissen willst, welche Methoden so ein Modul hat, besuche die "),n("a",P,[s("Python-Dokumentation"),a(e)]),s(". Was "),W,s(" kann, ist bereits unter "),a(i,{to:"/de/effects/API.html"},{default:r(()=>[s("Effect Engine API")]),_:1}),s(" erklärt.")]),x,a(t,{src:"/images/en/owneff_1.jpg",alt:"Custom Hyperion Effect"}),n("p",null,[s("Laut dem "),n("a",S,[s("Koordinatensystem"),a(e)]),s(" sind wir bei 2 auf der x-Achse und 5 auf der y-Achse, wie zuvor beschrieben. Perfekt!")]),H,a(t,{src:"/images/en/owneff_2.jpg",alt:"Custom Hyperion Effect with cyan color"}),B,n("ul",null,[n("li",null,[s("Wir erfassen nun die Breite ("),F,s(") und Höhe ("),q,s(") des Bildes, um sicherzustellen, dass wir das gesamte Bild mit Punkten füllen können. Für die erforderliche Zufallszahl verwenden wir "),n("a",L,[s("import random"),a(e)]),s(" und "),M,s(" mit einem Minimalwert von 0 und einem Maximalwert unserer Breite und Höhe. Dies erzeugt zufällige Integer-Zahlen.")]),A,C]),O,a(t,{src:"/images/en/owneff_3.gif",alt:"Custom Hyperion Effect with random dots"}),V,n("ul",null,[j,n("li",null,[s("Also fügen wir außerdem eine neue Option "),I,s(" hinzu, die True ist. Wir parsen True/False-Werte immer als "),N,s(", um sicherzustellen, dass sie wirklich bool sind und nicht ein string. Wenn du nicht weißt, was der Unterschied zwischen bool, string, int und float ist, schau mal kurz in der "),n("a",Z,[s("python Dokumentation"),a(e)]),s(" nach.")]),n("li",null,[s("Innerhalb unserer "),T,s(" Schleife prüfen wir mit "),R,s(" ob randomColor true ist oder nicht, wenn es true (aktiviert) ist, überschreiben wir unsere Variable "),J,s(" mit einer zufälligen Farbe, die mit "),K,s(" erzeugt wird. Wir randomisieren einfach h für den Farbton mit unserer Zufallsfunktion "),U,s(", das h akzeptiert Werte zwischen 0 und 1. Was ist hue? Spiel' mal mit hue bei "),n("a",G,[s("this"),a(e)]),s(" colorpicker herum. Du siehst, warum dies ein einfacher Weg ist, um mit einer einfachen Zufallsfunktion leuchtende Farben zu erzeugen.")])]),Q,a(t,{src:"/images/en/owneff_4.gif",alt:"Custom Hyperion Effect with random dots and color"}),X,Y,$])}const tn=c(d,[["render",nn],["__file","OurFirstEffect.html.vue"]]),on=JSON.parse('{"path":"/de/effects/OurFirstEffect.html","title":"Unser erster Effekt","lang":"de-DE","frontmatter":{},"headers":[{"level":2,"title":"Anforderungen","slug":"anforderungen","link":"#anforderungen","children":[{"level":3,"title":"Start","slug":"start","link":"#start","children":[]},{"level":3,"title":"Konfiguration","slug":"konfiguration","link":"#konfiguration","children":[]},{"level":3,"title":"Farboption hinzufügen","slug":"farboption-hinzufugen","link":"#farboption-hinzufugen","children":[]},{"level":3,"title":"Mehr Punkte!","slug":"mehr-punkte","link":"#mehr-punkte","children":[]},{"level":3,"title":"Mehr Farbe","slug":"mehr-farbe","link":"#mehr-farbe","children":[]},{"level":3,"title":"Das Bild leeren","slug":"das-bild-leeren","link":"#das-bild-leeren","children":[]}]}],"git":{"updatedTime":1710444694000},"filePathRelative":"de/effects/OurFirstEffect.md"}');export{tn as comp,on as data};
