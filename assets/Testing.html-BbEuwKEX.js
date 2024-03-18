import{_ as r,r as a,o as l,c as o,a as e,d as n,b as i,e as t}from"./app-BAe5RfCN.js";const u={},d=t('<h1 id="testen" tabindex="-1"><a class="header-anchor" href="#testen"><span>Testen</span></a></h1><h2 id="pull-requests" tabindex="-1"><a class="header-anchor" href="#pull-requests"><span>Pull Requests</span></a></h2><p>Falls Du eine in Entwicklung befindliche Version testen möchtest oder darum gebeten wurdest.</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><p>Pull Requests (PRs) können in sich geschlossen getestet werden, ohne eine aktuelle Hyperion-Installation zu beeinträchtigen.</p>',5),c={start:"0"},h=e("li",null,[e("p",null,"Erstelle einen GitHub-Benutzer, falls Du noch keine hast und fahre dann mit dem nächsten Schritt fort")],-1),p=e("p",null,"Erstelle einen persönlichen Zugangs-Token für Deinen GitHub-Benutzer.",-1),m={href:"https://github.com/settings/tokens?type=beta",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"a. Gib dem Token einen Namen",-1),f=e("p",null,'b. Wähle "All Repositories".',-1),k=e("p",null,'c. Definiere unter "Permissions/Repository permissions", den Read-Only Access für "Actions"',-1),_=e("p",null,'d. Wähle "Generate token"',-1),b=t("<li><p>Kopiere das neu generierte Token in die Zwischenablage</p></li><li><p>Melde Dich auf Deinem Linux-System an, z.B. per ssh an HyperBian auf Deinem Raspberry Pi</p></li><li><p>Führe das install_pr Skript aus und ersetze dabei <em>Zugangstoken</em> durch das in 2. kopierte Token und <em>PRID</em> durch die PR-Nummer</p><p><code>wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t Zugangstoken PRID</code></p></li><li><p>Starte das erzeugte Ausführungsskript, um Hyperion unter dem aktuellen Benutzer zu starten; ersetze <em>PRID</em> durch die PR-Nummer</p><p><code>./hyperion_prPRID/PRID_.sh</code></p></li><li><p>Teste den Inhalt des Pull Request und gibt Feedback zum PR.</p></li><li><p>Entfernen die installierte Version für den angegebenen PR</p></li>",6),w=t('<p><em><strong>Anmerkung</strong></em> Das Skript wird den aktuellen Hyperion-Dienst vor der Ausführung anhalten. Nachdem Du Deine Tests ausgeführt hast, solltest Du den Dienst erneut starten oder einfach neu booten, um den Dienst automatisch zu starten. Ersetze <em>USER</em> durch den Benutzernamen, mit dem Hyperion läuft.</p><p><code>systemctl start hyperion@USER.service</code></p><div class="custom-container tip"><p class="custom-container-title">Teste einen PR mit der aktuellen Konfiguration</p><p>Falls Du mit einer aktuellen Konfiguration testen möchtest, gibt den Speicherort der Konfiguration mit der Option <code>-c</code> an. Die Konfiguration wird kopiert, um Nebenwirkungen auf Dein aktuelles Setup zu vermeiden, d.h. alle Aktualisierungen der Konfiguration beim Testen des PR werden auch nicht in der aktuellen Konfiguration berücksichtigt.</p></div><h4 id="beispiel" tabindex="-1"><a class="header-anchor" href="#beispiel"><span>Beispiel</span></a></h4><p>Aktueller Benutzer, Pull Request #1649 und Verwendung der aktuellen Konfiguration</p><p><code>wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t Zugangstoken -c ~/.hyperion 1649</code></p><h3 id="windows-macos" tabindex="-1"><a class="header-anchor" href="#windows-macos"><span>Windows, macOS</span></a></h3><p>Lade ein Windows- oder macOS-Installationspaket herunter, das mit dem letzten PR-Build erstellt wurde. Die Artefakte können unter dem Pull Request selbst gefunden werden.</p><h2 id="nachtliche-builds" tabindex="-1"><a class="header-anchor" href="#nachtliche-builds"><span>Nächtliche Builds</span></a></h2>',9),R={href:"https://releases.hyperion-project.org/",target:"_blank",rel:"noopener noreferrer"},D=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"Bitte beachten"),e("p",null,"Du musst zuerst eine bestehende Installation deinstallieren.")],-1);function P(y,x){const s=a("ExternalLinkIcon");return l(),o("div",null,[d,e("ol",c,[h,e("li",null,[p,e("p",null,[n("Gehe zur "),e("a",m,[n("Fine-grained personal access tokens site"),i(s)]),n(' und führe ein "Generate new token" aus:')]),g,f,k,_]),b]),w,e("p",null,[n("Die Hyperion Projekt "),e("a",R,[n("Repository Seite"),i(s)]),n(' bietet Installationsanweisungen auf Knopfdruck. Wähle einfach "Nightly Builds", um die entsprechenden Installationsanweisungen zu erhalten.')]),D])}const v=r(u,[["render",P],["__file","Testing.html.vue"]]),B=JSON.parse('{"path":"/de/user/advanced/Testing.html","title":"Testen","lang":"de-DE","frontmatter":{},"headers":[{"level":2,"title":"Pull Requests","slug":"pull-requests","link":"#pull-requests","children":[{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]},{"level":3,"title":"Windows, macOS","slug":"windows-macos","link":"#windows-macos","children":[]}]},{"level":2,"title":"Nächtliche Builds","slug":"nachtliche-builds","link":"#nachtliche-builds","children":[]}],"git":{"updatedTime":1710797925000},"filePathRelative":"de/user/advanced/Testing.md"}');export{v as comp,B as data};
