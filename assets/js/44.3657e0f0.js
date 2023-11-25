(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{353:function(e,t,n){"use strict";n.r(t);var r=n(12),i=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hyperbian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperbian"}},[e._v("#")]),e._v(" HyperBian")]),e._v(" "),t("p",[e._v('Ein fertiges (Ready-to-use) System für deinen Raspberry Pi, basierend auf dem originalen "Raspberry Pi OS Lite" Betriebssystem. Hyperion ist natürlich vorinstalliert. Einfacher geht es nicht.')]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://github.com/Hyperion-Project/HyperBian/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Herunterladen"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Das Image auf die SD-Karte/SSD/HDD/USB-Stick etc. schreiben")]),e._v(" "),t("li",[e._v("Raspberry Pi einschalten")]),e._v(" "),t("li",[e._v("Zum Konfigurieren mit Deinem Browser die Adresse "),t("code",[e._v("http://IpAdresseDeinesRPi:8090")]),e._v(" aufrufen")])]),e._v(" "),t("h2",{attrs:{id:"anforderung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anforderung"}},[e._v("#")]),e._v(" Anforderung")]),e._v(" "),t("ul",[t("li",[e._v("SD-Karte/SSD/HDD/USB-Stick etc. mit mindestens 2 GB")]),e._v(" "),t("li",[e._v("Raspberry Pi (Zero/1/2/3/4)")]),e._v(" "),t("li",[e._v("Linux/Mac/Windows + SD Kartenleser/-schreiber")])]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ul",[t("li",[e._v("HyperBian "),t("a",{attrs:{href:"https://github.com/Hyperion-Project/HyperBian/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("herunterladen"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Die Datei HyperBian.zip entpacken")]),e._v(" "),t("li",[e._v("Die entpackte HyperBian-****.img auf Deine SD Karte/ SSD etc. schreiben "),t("br"),e._v("\nWie das funktioniert findest Du hier:\n"),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images/windows.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images/mac.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac OS"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images/linux.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Solltest Du vorhaben Deinen Raspberry Pi über WLAN zu betreiben, kannst Du Deine SD-Karte/SSD etc. schon vorbereiten bevor Du sie in/an Deinen RPi steckst. Siehe "),t("a",{attrs:{href:"#wlan"}},[e._v("WLAN")])]),e._v(" "),t("li",[e._v("Optional: Aktiviere "),t("a",{attrs:{href:"#ssh"}},[e._v("SSH")])])]),e._v(" "),t("h3",{attrs:{id:"wlan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wlan"}},[e._v("#")]),e._v(" WLAN")]),e._v(" "),t("p",[e._v("Wenn Du Deinen Raspberry Pi über WLAN betreiben möchtest, kannst Du die WLAN-SSID und das Passwort von Deinem Router schon vor dem ersten Start Deines Raspberry Pis auf die SD-Karte/SSD/HDD/USB-Stick etc. schreiben. "),t("br"),e._v('\nÖffne über den Datei-Explorer die SD-Karte/SSD/HDD/USB-Stick etc mit dem Namen "'),t("strong",[e._v("boot")]),e._v('".')]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Erstelle eine neue Textdatei\n"),t("ImageWrap",{attrs:{src:"/images/de/user_hyperbian_new_text_file.png",alt:"Neue Textdatei"}})],1)]),e._v(" "),t("li",[t("p",[e._v('Benenne sie in "wpa_supplicant.conf" um\n'),t("ImageWrap",{attrs:{src:"/images/de/user_hyperbian_rename_to_wpa_supplicant.png",alt:"Umbenannt in wpa_supplicant.conf"}})],1)]),e._v(" "),t("li",[t("p",[e._v("Füge Deine WLAN-Anmeldeinformationen hinzu. "),t("br"),e._v("\nErsetze "),t("strong",[e._v("SSID")]),e._v(" und "),t("strong",[e._v("PASSWORT")]),e._v(" durch Deine Werte.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\ncountry=DE\n\nnetwork={\n   ssid="SSID"\n   psk="PASSWORT"\n   key_mgmt=WPA-PSK\n}\n')])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Hinweis:")]),e._v(" "),t("p",[e._v("Ersetze ggf. 'DE' durch den ISO-Code Deines Landes.\nSiehe Wikipedia für eine Liste der Ländercodes.")])]),e._v(" "),t("ul",[t("li",[e._v("Jetzt noch abspeichern! Du bist fertig und das WLAN wird beim nächsten Booten des Raspberry Pis konfiguriert.")])]),e._v(" "),t("h3",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[e._v("#")]),e._v(" SSH")]),e._v(" "),t("p",[e._v("Eigentlich solltest Du den Zugang nicht benötigen, aber wir erklären es trotzdem. "),t("br"),e._v('\nZum aktivieren von SSH, öffne über den Datei-Explorer die SD-Karte/SSD/HDD/USB-Stick etc. mit dem Namen "'),t("strong",[e._v("boot")]),e._v('". Erstelle eine neue Textdatei und benenne die Datei in '),t("code",[e._v("ssh")]),e._v(" um (ohne Dateierweiterung). Der SSH Zugang sollte danach aktiviert sein.")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/de/user_hyperbian_ssh_file.png",alt:"SSH aktivieren"}}),e._v(" "),t("h4",{attrs:{id:"ssh-login"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-login"}},[e._v("#")]),e._v(" SSH LOGIN")]),e._v(" "),t("ul",[t("li",[e._v("Benutzername: "),t("code",[e._v("hyperion")])]),e._v(" "),t("li",[e._v("Passwort: "),t("code",[e._v("ambientlight")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("HyperBian wird mit einer englischen Tastatur-Konfiguration ausgeliefert. Dort sind die Zeichen 'y' und 'z' vertauscht. Für den Benutzernamen musst Du also zuerstmal "),t("code",[e._v("hzperion")]),e._v(" tippen; danach kannst Du das Tataturlayout per "),t("code",[e._v("sudo raspi-config")]),e._v(" ändern.")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);