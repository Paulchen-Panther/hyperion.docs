(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{421:function(e,n,t){"use strict";t.r(n);var s=t(30),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fortgeschritten"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fortgeschritten"}},[e._v("#")]),e._v(" Fortgeschritten")]),e._v(" "),t("p",[e._v("Spezifische Themen mit Details")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#led-layout"}},[e._v("LED Layout")]),t("ul",[t("li",[t("a",{attrs:{href:"#weitere-eigenschaften"}},[e._v("Weitere Eigenschaften")])]),t("li",[t("a",{attrs:{href:"#editieren-mit-der-webkonfiguration"}},[e._v("Editieren mit der Webkonfiguration")])])])]),t("li",[t("a",{attrs:{href:"#schwarzbalken-erkennung"}},[e._v("Schwarzbalken-Erkennung")])]),t("li",[t("a",{attrs:{href:"#gamma-kurve"}},[e._v("Gamma Kurve")])]),t("li",[t("a",{attrs:{href:"#cli"}},[e._v("CLI")]),t("ul",[t("li",[t("a",{attrs:{href:"#hyperiond"}},[e._v("hyperiond")])]),t("li",[t("a",{attrs:{href:"#hyperion-remote"}},[e._v("hyperion-remote")])]),t("li",[t("a",{attrs:{href:"#hyperion-capture"}},[e._v("hyperion-capture")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"led-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#led-layout"}},[e._v("#")]),e._v(" LED Layout")]),e._v(" "),t("p",[e._v("Hyperion weist jeder einzelnen Led eine bestimmte Position im Bild zu. Diese Positionen sind Quadrate und um ein Quadrat zu erzeugen, benötigen Sie 4 Werte (obere Kante, untere Kante, linke Kante, rechte Kante). Diese Kanten spiegeln sich in "),t("code",[e._v("hmin")]),e._v(", "),t("code",[e._v("hmax")]),e._v(" für horizontal und "),t("code",[e._v("vmin")]),e._v(", "),t("code",[e._v("vmax")]),e._v(" für vertikal wider. Sie haben einen Wertebereich von "),t("code",[e._v("0.0")]),e._v(" bis "),t("code",[e._v("1.0")]),e._v(".")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_ledlayout.jpg",alt:"Hyperion Led Layout"}},[t("p",[e._v("Zuordnung der LED-Kanten")])]),e._v(" "),t("p",[e._v("Schauen wir uns das also genauer an. Nach einer einzelnen LED Definition:")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Lass uns das obige Beispiel visualisieren!")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_ledlayout1.jpg",alt:"Hyperion Led Layout"}},[t("p",[e._v("Eine einzelnen LED Definition")])]),e._v(" "),t("p",[e._v("Fügen wir also 2 weitere Leds hinzu, um es deutlicher zu machen "),t("br"),e._v(" "),t("strong",[e._v("Die Reihenfolge ist wichtig! Der erste Eintrag ist die erste LED, der zweite die zweite LED, ...")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ImageWrap",{attrs:{src:"/images/en/user_ledlayout2.jpg",alt:"Hyperion Led Layout"}},[t("p",[e._v("Jetzt mit drei LEDs")])]),e._v(" "),t("h3",{attrs:{id:"weitere-eigenschaften"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weitere-eigenschaften"}},[e._v("#")]),e._v(" Weitere Eigenschaften")]),e._v(" "),t("p",[e._v("Du kannst verschiedene LED-Streifenladungen mit unterschiedlichen RGB-Byte-Reihenfolgen verbinden. Du kannst die globale RGB-Byte-Reihenfolge überschreiben, indem du eine "),t("code",[e._v("colorOrder")]),e._v("-Eigenschaft zu allen LEDs hinzufügst, welche eine andere benötigen.")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"colorOrder"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gbr"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("In diesem Beispiel wird die erste LED "),t("code",[e._v("gbr")]),e._v(" sein, die anderen LEDs werden der globalen RGB-Reihenfolge zugewiesen, die im Abschnitt LED-Hardware definiert wurde.")]),e._v(" "),t("h3",{attrs:{id:"editieren-mit-der-webkonfiguration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editieren-mit-der-webkonfiguration"}},[e._v("#")]),e._v(" Editieren mit der Webkonfiguration")]),e._v(" "),t("p",[e._v("Während das Bearbeiten dieser Einstellungen in einem lokalen Texteditor etwas ungewohnt ist, kann man die Werte in der Web-Konfiguration bearbeiten!")]),e._v(" "),t("ul",[t("li",[e._v("Stelle sicher, dass die "),t("RouterLink",{attrs:{to:"/de/user/Konfiguration.html#Einstellungsstufen"}},[e._v("Hyperion-Einstellungsstufe")]),e._v(" auf "),t("strong",[e._v("Fortgeschritten")]),e._v(" gestellt ist.")],1),e._v(" "),t("li",[e._v("Navigiere zu Konfiguration -> LED-Hardware und wechsele auf die Registerkarte LED-Layout. Du wirst einen neuen Abschnitt "),t("strong",[e._v("Generierte/aktuelle LED-Konfiguration")]),e._v(" sehen.")])]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/de/user_ledlayout3.jpg",alt:"Hyperion Led Layout"}}),e._v(" "),t("p",[e._v("Du kannst die Werte frei bearbeiten, eine Vorschau auf der rechten Seite anzeigen, indem du auf "),t("strong",[e._v("Aktualisiere Vorschau")]),e._v(" klickst. Wenn du mit den Änderungen zufrieden bist, vergiss nicht zu speichern.")]),e._v(" "),t("h2",{attrs:{id:"schwarzbalken-erkennung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schwarzbalken-erkennung"}},[e._v("#")]),e._v(" Schwarzbalken-Erkennung")]),e._v(" "),t("p",[e._v("Der Unterschied zwischen den verfügbaren Modi für die Schwarzbalkenerkennung wird hier dargestellt.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Default:")]),e._v(" 3 Scan-Linien in jeder Richtung (X Y) - schnellste Erkennung")]),e._v(" "),t("li",[t("strong",[e._v("Classic:")]),e._v(" Die ursprünglichen Implementierungen - geringere CPU-Zeit (Legacy für RPi 1) scannen nur das obere Drittel des Bildes, was zu einer langsamen Erkennung und Problemen mit dem TV-Senderlogo führt.")]),e._v(" "),t("li",[t("strong",[e._v("OSD:")]),e._v(" Basierend auf dem Default-Modus - nicht sehr effektiv, verhindert aber Randumschaltungen, die durch OSD-Einblendungen (Programminfos und Lautstärkeleiste) verursacht werden können.")]),e._v(" "),t("li",[t("strong",[e._v("Letterbox:")]),e._v(" Basierend auf dem Default-Modus - berücksichtigt nur Schwarzbalken am oberen und unteren Rand des Bildes, ignoriert die Seiten.")])]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_bbmodes.jpg",alt:"Hyperion Blackbar detection modes"}}),e._v(" "),t("h2",{attrs:{id:"gamma-kurve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gamma-kurve"}},[e._v("#")]),e._v(" Gamma Kurve")]),e._v(" "),t("p",[e._v("Gammawerte in einer Grafik. Wie du siehst, ist 1,0 neutral. Niedriger als 1,0 erhöht die Farbe, höher reduziert die Farbe.")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_gammacurve.png",alt:"Hyperion Gamma Curve"}}),e._v(" "),t("h2",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),t("p",[e._v("Alle mit Hyperion ausgelieferten ausführbaren Dateien haben einige Befehlszeilenargumente/Optionen")]),e._v(" "),t("h3",{attrs:{id:"hyperiond"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperiond"}},[e._v("#")]),e._v(" hyperiond")]),e._v(" "),t("p",[e._v("Das Herzstück von Hyperion")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Zeigt die Version/Build-Datum/Commit von Hyperion an ")]),e._v("\nhyperiond --version\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Aktuelles Administrations-Passwort wieder auf 'hyperion' zurücksetzen")]),e._v("\nhyperiond --resetPassword\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Überschreibe den Pfad für die Benutzerdaten (der standardmäßig auf dein Home-Verzeichnis eingestellt ist)")]),e._v("\nhyperiond --userdata /temp/anotherDir\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Log-Level temporär überschreiben: hyperiond -s für silent -v für verbose und -d für debug")]),e._v("\nhyperiond -d\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Effekte in ein Verzeichnis exportieren")]),e._v("\nhyperiond --export-effects /tmp\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Hyperion im Desktop-Modus ausführen")]),e._v("\nhyperiond --desktop\n")])])]),t("p",[e._v("::: Tipp\nWenn ein Pfadname Leerzeichen enthält, dann umschließe ihn mit "),t("code",[e._v('"')]),e._v(" . "),t("br"),e._v(" "),t("code",[e._v('hyperiond --userdata "/temp/another Dir"')]),e._v("\n:::")]),e._v(" "),t("h3",{attrs:{id:"hyperion-remote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-remote"}},[e._v("#")]),e._v(" hyperion-remote")]),e._v(" "),t("p",[e._v("hyperion-remote ist ein Kommandozeilen-Tool, das vorgegebene Argumente in JSON-Befehle übersetzt und diese an den Hyperion JSON-RPC sendet. Es ist ideal für Skripte geeignet. Es unterstützt fast alle Befehle, die Hyperion zur Verfügung stellt.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Eine Liste aller verfügbaren Befehle abrufen")]),e._v("\nhyperion-remote -h\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Einstellen einer Farbe mit Hilfe von HTML-Farbnamen")]),e._v("\nhyperion-remote -c aqua\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  Einstellen einer Farbe mit Hilfe von Hex-Werten")]),e._v("\nhyperion-remote -c FF7F50\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Farbe mit einer Dauer von 5 Sekunden statt endlos einstellen ")]),e._v("\nhyperion-remote -c FF7F50 -d "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5000")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Einen Effekt starten")]),e._v("\nhyperion-remote -e "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Rainbow swirl"')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# mit einer Dauer von 8 Sekunden statt endlos")]),e._v("\nhyperion-remote -e "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Rainbow swirl"')]),e._v(" -d "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Bestimmte Instanz ansteuern")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# ACHTUNG: Hyperion-Instanzen werden standardmäßig mit der Funktion "Instance Syncing" synchronisiert')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Du kannst das Verhalten für jede Instanz konfigurieren")]),e._v("\nhyperion-remote -I "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Mein cooler Instanzname"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Oder")]),e._v("\nhyperion-remote --instance "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Mein cooler Instanzname"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Beispiel um ein Effekt für eine Instanz zu setzen")]),e._v("\nhyperion-remote --instance "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Mein cooler Instanzname"')]),e._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Rainbow swirl"')]),e._v("\n")])])]),t("p",[e._v("::: Tipp\nHyperion-Remote wird automatisch nach einem Hyperion-Server suchen. So kannst du das sogar auf einem anderen Gerät in deinem lokalen Netzwerk verwenden, ohne eine IP/Port anzugeben.\n:::")]),e._v(" "),t("h3",{attrs:{id:"hyperion-capture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-capture"}},[e._v("#")]),e._v(" hyperion-capture")]),e._v(" "),t("p",[e._v("Wir liefern auch unabhängige Capture-Apps direkt in deinem Hyperion-Verzeichnis. Sie lauten hyperion-dispmanx, hyperion-osx, hyperion-x11, hyperion-amlogic, hyperion-framebuffer, hyperion-qt. Abhängig von der verwendeten Plattform hat man mehr oder weniger.")]),e._v(" "),t("p",[e._v("Alle diese Anwendungen können unabhängig von Hyperion gestartet werden und haben alle leicht unterschiedliche Optionen. Sie kommunizieren mit der Flatbuffer-Schnittstelle von Hyperion. Dann lassen wir uns eine von ihnen starten! In diesem Beispiel verwende ich dispmanx für Raspberry Pi, also lasst uns die verfügbaren Optionen ansehen.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("hyperion-dispmanx -h\n  -f, --framerate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("framerate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  Bildrate für die Bildübertragung "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Standard: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  --width "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("width"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("              Breite des aufgenommenen Bildes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Standard: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  --height "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("height"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("            Höhe des aufgenommenen Bildes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Standard: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  --screenshot                 Macht einen einzelnen Screenshot, speichert ihn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" einer Datei und beendet ihn\n  -a, --address "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("      Setzt die Adresse des Hyperion-Servers "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Standard: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1:19445"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -p, --priority "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("priority"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("    Benutzt den vorgesehenen Prioritätskanal "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("vorgeschlagen "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("-199"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Standard: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("150")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  --skip-reply                 Keine Rückmeldung von Hyperion empfangen und prüfen\n  -h, --help                   Diese Hilfemeldung anzeigen und beenden\n  --crop-left "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("crop-left"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("      zu entfernende Pixel auf der linken Seite nach dem Erfassen\n  --crop-right "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("crop-right"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("    zu entfernende Pixel auf der rechten Seite nach dem Erfassen\n  --crop-top "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("crop-top"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        Pixel zum Entfernen an der Oberseite nach dem Erfassen\n  --crop-bottom "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("crop-bottom"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  Pixel zum Entfernen an der Unterseite nach dem Erfassen\n  --3DSBS                      Interpretiert den eingehenden Videostrom als 3D-Side-by-Side\n  --3DTAB                      Interpretiert den eingehenden Videostrom als 3D-Oben-und-Unten\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Beginnen wir mit einem Aufnahmeintervall von 15, einer Breite von 100 und einer Höhe von 100")]),e._v("\nhyperion-dispmanx -a "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.20:19445 -f "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" --width "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" --height "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);