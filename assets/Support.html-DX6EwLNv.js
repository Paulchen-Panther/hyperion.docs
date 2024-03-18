import{_ as r,r as o,o as l,c as s,a as e,d as n,b as t,e as a}from"./app-BBsieB-t.js";const d={},u=e("h1",{id:"supportanfrage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#supportanfrage"},[e("span",null,"Supportanfrage")])],-1),c=e("p",null,"Falls du Support brauchst oder einen Fehler gefunden hast, ist es wichtig, dass du die Informationen lieferst, die wir brauchen.",-1),f=e("h2",{id:"gewohnliche-anfrage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gewohnliche-anfrage"},[e("span",null,"Gewöhnliche Anfrage")])],-1),h={href:"https://pastebin.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/hyperion-project/hyperion.ng/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"segmentierungsfehler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#segmentierungsfehler"},[e("span",null,"Segmentierungsfehler")])],-1),p=e("p",null,"Das Debuggen von Segmentierungsfehlern erfordert einen größeren Aufwand, wenn wir deine Hardware nicht besitzen (idr eines dieser vielen ARM-Systeme) oder den Segmentierungsfehler nicht rekonstruieren können, benötigen wir ein Backtrace-Protokoll von dir. Um ein solches zu erstellen, ist folgende Vorgehensweise erforderlich.",-1),m=e("ul",null,[e("li",null,'Du brauchst eine "Debug"-Version von Hyperion, lade sie herunter und installiere sie über deine bestehende Installation.'),e("li",null,[n('Installiere "GDB", gdb ist ein Tool, das oft zum Debuggen verwendet wird. Hole es aus dem Software-Repository deiner Distribution (Debian z.B. '),e("code",null,"sudo apt-get install gdb"),n(")")])],-1),_=e("h3",{id:"ausfuhrungsschritte",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ausfuhrungsschritte"},[e("span",null,"Ausführungsschritte")])],-1),x=a("<li>Öffne ein Terminal</li><li>Stelle sicher, dass Hyperion NICHT läuft. Gib dazu <code>sudo service hyperiond stop</code> in das Terminal ein und drücke die Eingabetaste</li><li>Gib <code>gdb</code> ein und drücke die Eingabetaste. Du siehst nun die gdb-Begrüßungsinformationen und ein &quot;(gdb)&quot; vor deinem Cursor</li><li>Teilt gdb mit, wo sich &quot;hyperiond&quot; befindet, normalerweise unter /usr/share/hyperion/bin/hyperiond. Stellt dem Pfad &quot;file&quot; voran. Gib also im Terminal folgendes ein und drücke Enter: <code>Datei /usr/share/hyperion/bin/hyperiond</code></li><li>gdb sollte nun anzeigen, dass das Binary mit seinen Symbolen usw. geladen wurde</li><li>Gib nun <code>run</code> ein und drücke die Eingabetaste, dies wird Hyperion starten. Jetzt können wir Hyperion wie gewohnt verwenden, wir wiederholen die Schritte, die wir zum Erstellen eines Segmentierungsfehlers durchgeführt haben.</li><li>Ein Segmentation Fault ist aufgetreten, wenn Hyperion nicht mehr antwortet und du als letzte Meldung am Terminal etwas wie folgt siehst: <code>Thread 1 &quot;hyperiond&quot; received signal SIGSEGV, Segmentation fault.</code></li>",7),k=e("code",null,"backtrace",-1),v={href:"https://hyperion-project.org/forum",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,[n("Um gdb zu beenden, drücke die Eingabetaste und gibt "),e("code",null,"quit"),n(" ein. Du kannst Hyperion wieder mit "),e("code",null,"sudo service hyperiond start"),n(' starten. Es wird nicht empfohlen, "Debug"-Hyperion-Builds in der produktiven Umgebung zu verwenden, installiere einfach wieder die "Release"-Version.')],-1),w=e("h3",{id:"beispiel-backtrace-protokoll",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#beispiel-backtrace-protokoll"},[e("span",null,"Beispiel Backtrace-Protokoll")])],-1),Q=e("div",{class:"language-gdb","data-ext":"gdb","data-title":"gdb"},[e("pre",{class:"language-gdb"},[e("code",null,`  (gdb) backtrace
  #0  0x0000000000000000 in ?? ()
  #1  0x00000000006173f2 in LinearColorSmoothing::queueColors (this=0xfdfa70, 
      ledColors=std::vector of length 34, capacity 34 = {...})
      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:153
  #2  0x0000000000617374 in LinearColorSmoothing::updateLeds (this=0xfdfa70)
      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:143
  #3  0x0000000000609652 in LinearColorSmoothing::qt_static_metacall (
      _o=0xfdfa70, _c=QMetaObject::InvokeMetaMethod, _id=1, _a=0x7fffffffd190)
      at /home/hyperion/Dokumente/hyperion.ngBeta/build/libsrc/hyperion/moc_LinearColorSmoothing.cpp:85
  #4  0x00007ffff59abd2a in QMetaObject::activate(QObject*, int, int, void**) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #5  0x00007ffff59b85c8 in QTimer::timerEvent(QTimerEvent*) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #6  0x00007ffff59acbb3 in QObject::event(QEvent*) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #7  0x00007ffff78a505c in QApplicationPrivate::notify_helper(QObject*, QEvent*)
     () from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5
  #8  0x00007ffff78aa516 in QApplication::notify(QObject*, QEvent*) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5
  #9  0x00007ffff597d38b in QCoreApplication::notifyInternal(QObject*, QEvent*)
  ---Type <return> to continue, or q <return> to quit---
      () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #10 0x00007ffff59d25ed in QTimerInfoList::activateTimers() ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #11 0x00007ffff59d2af1 in ?? () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #12 0x00007ffff4572127 in g_main_context_dispatch ()
     from /lib/x86_64-linux-gnu/libglib-2.0.so.0
  #13 0x00007ffff4572380 in ?? () from /lib/x86_64-linux-gnu/libglib-2.0.so.0
  #14 0x00007ffff457242c in g_main_context_iteration ()
     from /lib/x86_64-linux-gnu/libglib-2.0.so.0
  #15 0x00007ffff59d37cf in QEventDispatcherGlib::processEvents(QFlags<QEventLoop::ProcessEventsFlag>) () from /usr/lib/x86_64-linux-
  gnu/libQt5Core.so.5
  #16 0x00007ffff597ab4a in QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>) () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #17 0x00007ffff5982bec in QCoreApplication::exec() ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #18 0x00000000005d9279 in main (argc=1, argv=0x7fffffffde08)
      at /home/hyperion/Dokumente/hyperion.ngBeta/src/hyperiond/main.cpp:337
`)])],-1);function S(E,C){const i=o("ExternalLinkIcon");return l(),s("div",null,[u,c,f,e("p",null,[n("Um ein Protokoll bereitzustellen, geh bitte in der WebUI zu System -> Log und kopiere das Protokoll. Erstellt dann ein Paste bei "),e("a",h,[n("Pastebin.com"),t(i)]),n(" mit dem kopierten Protokoll. Sobald du den Pastebin-Link hast, öffne bitte ein Issue auf "),e("a",g,[n("Github"),t(i)]),n(", fülle die Vorlage aus und gib den Pastebin-Link an.")]),b,p,m,_,e("ul",null,[x,e("li",null,[n("Gib nun "),k,n(" ein und drücke die Eingabetaste, füge den Backtrace zu deinem Supportanfrage-Thread in unserem Forum hinzu. "),e("a",v,[n("Hyperion Project Forum"),t(i)])]),y]),w,Q])}const D=r(d,[["render",S],["__file","Support.html.vue"]]),L=JSON.parse('{"path":"/de/user/advanced/Support.html","title":"Supportanfrage","lang":"de-DE","frontmatter":{},"headers":[{"level":2,"title":"Gewöhnliche Anfrage","slug":"gewohnliche-anfrage","link":"#gewohnliche-anfrage","children":[]},{"level":2,"title":"Segmentierungsfehler","slug":"segmentierungsfehler","link":"#segmentierungsfehler","children":[{"level":3,"title":"Ausführungsschritte","slug":"ausfuhrungsschritte","link":"#ausfuhrungsschritte","children":[]},{"level":3,"title":"Beispiel Backtrace-Protokoll","slug":"beispiel-backtrace-protokoll","link":"#beispiel-backtrace-protokoll","children":[]}]}],"git":{"updatedTime":1710799842000},"filePathRelative":"de/user/advanced/Support.md"}');export{D as comp,L as data};
