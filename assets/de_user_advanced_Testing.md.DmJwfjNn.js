import{_ as e,c as s,o as i,a5 as t}from"./chunks/framework.C7p0y4oj.js";const g=JSON.parse('{"title":"Testen","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"de/user/advanced/Testing.md","filePath":"de/user/advanced/Testing.md","lastUpdated":1712165332000}'),n={name:"de/user/advanced/Testing.md"},a=t('<h1 id="testen" tabindex="-1">Testen <a class="header-anchor" href="#testen" aria-label="Permalink to &quot;Testen&quot;">​</a></h1><h2 id="pull-requests" tabindex="-1">Pull Requests <a class="header-anchor" href="#pull-requests" aria-label="Permalink to &quot;Pull Requests&quot;">​</a></h2><p>Falls Du eine in Entwicklung befindliche Version testen möchtest oder darum gebeten wurdest.</p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>Pull Requests (PRs) können in sich geschlossen getestet werden, ohne eine aktuelle Hyperion-Installation zu beeinträchtigen.</p><ol start="0"><li><p>Erstelle einen GitHub-Benutzer, falls Du noch keine hast und fahre dann mit dem nächsten Schritt fort</p></li><li><p>Erstelle einen persönlichen Zugangs-Token für Deinen GitHub-Benutzer.</p><p>Gehe zur <a href="https://github.com/settings/tokens?type=beta" target="_blank" rel="noreferrer">Fine-grained personal access tokens site</a> und führe ein &quot;Generate new token&quot; aus:</p><p>a. Gib dem Token einen Namen</p><p>b. Wähle &quot;All Repositories&quot;.</p><p>c. Definiere unter &quot;Permissions/Repository permissions&quot;, den Read-Only Access für &quot;Actions&quot;</p><p>d. Wähle &quot;Generate token&quot;</p></li><li><p>Kopiere das neu generierte Token in die Zwischenablage</p></li><li><p>Melde Dich auf Deinem Linux-System an, z.B. per ssh an HyperBian auf Deinem Raspberry Pi</p></li><li><p>Führe das install_pr Skript aus und ersetze dabei <em>Zugangstoken</em> durch das in 2. kopierte Token und <em>PRID</em> durch die PR-Nummer</p></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Zugangstoken</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PRID</span></span></code></pre></div><ol start="5"><li>Starte das erzeugte Ausführungsskript, um Hyperion unter dem aktuellen Benutzer zu starten; ersetze <em>PRID</em> durch die PR-Nummer</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./hyperion_prPRID/PRID_.sh</span></span></code></pre></div><ol start="6"><li><p>Teste den Inhalt des Pull Request und gibt Feedback zum PR.</p></li><li><p>Entfernen die installierte Version für den angegebenen PR</p></li></ol><p><em><strong>Anmerkung</strong></em> Das Skript wird den aktuellen Hyperion-Dienst vor der Ausführung anhalten. Nachdem Du Deine Tests ausgeführt hast, solltest Du den Dienst erneut starten oder einfach neu booten, um den Dienst automatisch zu starten. Ersetze <em>USER</em> durch den Benutzernamen, mit dem Hyperion läuft.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hyperion@USER.service</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Teste einen PR mit der aktuellen Konfiguration</p><p>Falls Du mit einer aktuellen Konfiguration testen möchtest, gibt den Speicherort der Konfiguration mit der Option <code>-c</code> an. Die Konfiguration wird kopiert, um Nebenwirkungen auf Dein aktuelles Setup zu vermeiden, d.h. alle Aktualisierungen der Konfiguration beim Testen des PR werden auch nicht in der aktuellen Konfiguration berücksichtigt.</p></div><h4 id="beispiel" tabindex="-1">Beispiel <a class="header-anchor" href="#beispiel" aria-label="Permalink to &quot;Beispiel&quot;">​</a></h4><p>Aktueller Benutzer, Pull Request #1649 und Verwendung der aktuellen Konfiguration</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Zugangstoken</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.hyperion</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1649</span></span></code></pre></div><h3 id="windows-macos" tabindex="-1">Windows, macOS <a class="header-anchor" href="#windows-macos" aria-label="Permalink to &quot;Windows, macOS&quot;">​</a></h3><p>Lade ein Windows- oder macOS-Installationspaket herunter, das mit dem letzten PR-Build erstellt wurde. Die Artefakte können unter dem Pull Request selbst gefunden werden.</p><h2 id="nachtliche-builds" tabindex="-1">Nächtliche Builds <a class="header-anchor" href="#nachtliche-builds" aria-label="Permalink to &quot;Nächtliche Builds&quot;">​</a></h2><p>Die Hyperion Projekt <a href="https://releases.hyperion-project.org/" target="_blank" rel="noreferrer">Repository Seite</a> bietet Installationsanweisungen auf Knopfdruck. Wähle einfach &quot;Nightly Builds&quot;, um die entsprechenden Installationsanweisungen zu erhalten.</p><div class="warning custom-block"><p class="custom-block-title">Bitte beachten</p><p>Du musst zuerst eine bestehende Installation deinstallieren.</p></div>',21),l=[a];function r(h,p,o,d,u,c){return i(),s("div",null,l)}const m=e(n,[["render",r]]);export{g as __pageData,m as default};