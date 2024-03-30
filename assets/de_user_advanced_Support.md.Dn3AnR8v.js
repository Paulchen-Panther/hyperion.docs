import{_ as e,c as n,o as a,a4 as s}from"./chunks/framework.Cv2fJP76.js";const g=JSON.parse('{"title":"Supportanfrage","description":"","frontmatter":{},"headers":[],"relativePath":"de/user/advanced/Support.md","filePath":"de/user/advanced/Support.md","lastUpdated":1711812050000}'),i={name:"de/user/advanced/Support.md"},t=s(`<h1 id="supportanfrage" tabindex="-1">Supportanfrage <a class="header-anchor" href="#supportanfrage" aria-label="Permalink to &quot;Supportanfrage&quot;">​</a></h1><p>Falls du Support brauchst oder einen Fehler gefunden hast, ist es wichtig, dass du die Informationen lieferst, die wir brauchen.</p><h2 id="gewohnliche-anfrage" tabindex="-1">Gewöhnliche Anfrage <a class="header-anchor" href="#gewohnliche-anfrage" aria-label="Permalink to &quot;Gewöhnliche Anfrage&quot;">​</a></h2><p>Um ein Protokoll bereitzustellen, geh bitte in der WebUI zu System -&gt; Log und kopiere das Protokoll. Erstellt dann ein Paste bei <a href="https://pastebin.com" target="_blank" rel="noreferrer">Pastebin.com</a> mit dem kopierten Protokoll. Sobald du den Pastebin-Link hast, öffne bitte ein Issue auf <a href="https://github.com/hyperion-project/hyperion.ng/issues/new/choose" target="_blank" rel="noreferrer">Github</a>, fülle die Vorlage aus und gib den Pastebin-Link an.</p><h2 id="segmentierungsfehler" tabindex="-1">Segmentierungsfehler <a class="header-anchor" href="#segmentierungsfehler" aria-label="Permalink to &quot;Segmentierungsfehler&quot;">​</a></h2><p>Das Debuggen von Segmentierungsfehlern erfordert einen größeren Aufwand, wenn wir deine Hardware nicht besitzen (idr eines dieser vielen ARM-Systeme) oder den Segmentierungsfehler nicht rekonstruieren können, benötigen wir ein Backtrace-Protokoll von dir. Um ein solches zu erstellen, ist folgende Vorgehensweise erforderlich.</p><ul><li>Du brauchst eine &quot;Debug&quot;-Version von Hyperion, lade sie herunter und installiere sie über deine bestehende Installation.</li><li>Installiere &quot;GDB&quot;, gdb ist ein Tool, das oft zum Debuggen verwendet wird. Hole es aus dem Software-Repository deiner Distribution (Debian z.B. <code>sudo apt-get install gdb</code>)</li></ul><h3 id="ausfuhrungsschritte" tabindex="-1">Ausführungsschritte <a class="header-anchor" href="#ausfuhrungsschritte" aria-label="Permalink to &quot;Ausführungsschritte&quot;">​</a></h3><ul><li>Öffne ein Terminal</li><li>Stelle sicher, dass Hyperion NICHT läuft. Gib dazu <code>sudo service hyperiond stop</code> in das Terminal ein und drücke die Eingabetaste</li><li>Gib <code>gdb</code> ein und drücke die Eingabetaste. Du siehst nun die gdb-Begrüßungsinformationen und ein &quot;(gdb)&quot; vor deinem Cursor</li><li>Teilt gdb mit, wo sich &quot;hyperiond&quot; befindet, normalerweise unter /usr/share/hyperion/bin/hyperiond. Stellt dem Pfad &quot;file&quot; voran. Gib also im Terminal folgendes ein und drücke Enter: <code>Datei /usr/share/hyperion/bin/hyperiond</code></li><li>gdb sollte nun anzeigen, dass das Binary mit seinen Symbolen usw. geladen wurde</li><li>Gib nun <code>run</code> ein und drücke die Eingabetaste, dies wird Hyperion starten. Jetzt können wir Hyperion wie gewohnt verwenden, wir wiederholen die Schritte, die wir zum Erstellen eines Segmentierungsfehlers durchgeführt haben.</li><li>Ein Segmentation Fault ist aufgetreten, wenn Hyperion nicht mehr antwortet und du als letzte Meldung am Terminal etwas wie folgt siehst: <code>Thread 1 &quot;hyperiond&quot; received signal SIGSEGV, Segmentation fault.</code></li><li>Gib nun <code>backtrace</code> ein und drücke die Eingabetaste, füge den Backtrace zu deinem Supportanfrage-Thread in unserem Forum hinzu. <a href="https://hyperion-project.org/forum" target="_blank" rel="noreferrer">Hyperion Project Forum</a></li><li>Um gdb zu beenden, drücke die Eingabetaste und gibt <code>quit</code> ein. Du kannst Hyperion wieder mit <code>sudo service hyperiond start</code> starten. Es wird nicht empfohlen, &quot;Debug&quot;-Hyperion-Builds in der produktiven Umgebung zu verwenden, installiere einfach wieder die &quot;Release&quot;-Version.</li></ul><h3 id="beispiel-backtrace-protokoll" tabindex="-1">Beispiel Backtrace-Protokoll <a class="header-anchor" href="#beispiel-backtrace-protokoll" aria-label="Permalink to &quot;Beispiel Backtrace-Protokoll&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  (gdb) backtrace</span></span>
<span class="line"><span>  #0  0x0000000000000000 in ?? ()</span></span>
<span class="line"><span>  #1  0x00000000006173f2 in LinearColorSmoothing::queueColors (this=0xfdfa70, </span></span>
<span class="line"><span>      ledColors=std::vector of length 34, capacity 34 = {...})</span></span>
<span class="line"><span>      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:153</span></span>
<span class="line"><span>  #2  0x0000000000617374 in LinearColorSmoothing::updateLeds (this=0xfdfa70)</span></span>
<span class="line"><span>      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:143</span></span>
<span class="line"><span>  #3  0x0000000000609652 in LinearColorSmoothing::qt_static_metacall (</span></span>
<span class="line"><span>      _o=0xfdfa70, _c=QMetaObject::InvokeMetaMethod, _id=1, _a=0x7fffffffd190)</span></span>
<span class="line"><span>      at /home/hyperion/Dokumente/hyperion.ngBeta/build/libsrc/hyperion/moc_LinearColorSmoothing.cpp:85</span></span>
<span class="line"><span>  #4  0x00007ffff59abd2a in QMetaObject::activate(QObject*, int, int, void**) ()</span></span>
<span class="line"><span>     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #5  0x00007ffff59b85c8 in QTimer::timerEvent(QTimerEvent*) ()</span></span>
<span class="line"><span>     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #6  0x00007ffff59acbb3 in QObject::event(QEvent*) ()</span></span>
<span class="line"><span>     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #7  0x00007ffff78a505c in QApplicationPrivate::notify_helper(QObject*, QEvent*)</span></span>
<span class="line"><span>     () from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5</span></span>
<span class="line"><span>  #8  0x00007ffff78aa516 in QApplication::notify(QObject*, QEvent*) ()</span></span>
<span class="line"><span>     from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5</span></span>
<span class="line"><span>  #9  0x00007ffff597d38b in QCoreApplication::notifyInternal(QObject*, QEvent*)</span></span>
<span class="line"><span>  ---Type &lt;return&gt; to continue, or q &lt;return&gt; to quit---</span></span>
<span class="line"><span>      () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #10 0x00007ffff59d25ed in QTimerInfoList::activateTimers() ()</span></span>
<span class="line"><span>     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #11 0x00007ffff59d2af1 in ?? () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #12 0x00007ffff4572127 in g_main_context_dispatch ()</span></span>
<span class="line"><span>     from /lib/x86_64-linux-gnu/libglib-2.0.so.0</span></span>
<span class="line"><span>  #13 0x00007ffff4572380 in ?? () from /lib/x86_64-linux-gnu/libglib-2.0.so.0</span></span>
<span class="line"><span>  #14 0x00007ffff457242c in g_main_context_iteration ()</span></span>
<span class="line"><span>     from /lib/x86_64-linux-gnu/libglib-2.0.so.0</span></span>
<span class="line"><span>  #15 0x00007ffff59d37cf in QEventDispatcherGlib::processEvents(QFlags&lt;QEventLoop::ProcessEventsFlag&gt;) () from /usr/lib/x86_64-linux-</span></span>
<span class="line"><span>  gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #16 0x00007ffff597ab4a in QEventLoop::exec(QFlags&lt;QEventLoop::ProcessEventsFlag&gt;) () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #17 0x00007ffff5982bec in QCoreApplication::exec() ()</span></span>
<span class="line"><span>     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5</span></span>
<span class="line"><span>  #18 0x00000000005d9279 in main (argc=1, argv=0x7fffffffde08)</span></span>
<span class="line"><span>      at /home/hyperion/Dokumente/hyperion.ngBeta/src/hyperiond/main.cpp:337</span></span></code></pre></div>`,11),r=[t];function o(l,p,d,u,c,f){return a(),n("div",null,r)}const b=e(i,[["render",o]]);export{g as __pageData,b as default};
