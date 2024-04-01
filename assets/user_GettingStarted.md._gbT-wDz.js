import{_ as e,c as a,o as s,a5 as t}from"./chunks/framework.C7p0y4oj.js";const k=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"user/GettingStarted.md","filePath":"user/GettingStarted.md","lastUpdated":1711970644000}'),i={name:"user/GettingStarted.md"},r=t('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>Hyperion supports various platforms for installation, via package or portable .zip. The configuration and control of Hyperion is done through a web interface.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><table><thead><tr><th>Supported Systems <span style="color:var(--vp-custom-block-warning-text);">*</span></th><th>Supported Browsers</th></tr></thead><tbody><tr><td>Raspberry Pi (see also <a href="/user/HyperBian.html">HyperBian</a>)<br>Debian 10, Ubuntu 20.04, Fedora 37 or higher<br>Mac OS<br>Windows 10</td><td>Chrome 47+<br>Firefox 43+<br>Opera 34+<br>Safari 9.1+<br>Microsoft Edge 14+</td></tr><tr><td colspan="2" style="background-color:var(--vp-c-bg);font-size:8pt;color:var(--vp-custom-block-warning-text);">*Please note that some arm devices have limited support in terms of screen capturing</td></tr></tbody></table><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><h3 id="ubuntu-debian-and-friends-fedora-libreelec-macos-windows" tabindex="-1">Ubuntu, Debian and friends, Fedora, LibreELEC, macOS, Windows <a class="header-anchor" href="#ubuntu-debian-and-friends-fedora-libreelec-macos-windows" aria-label="Permalink to &quot;Ubuntu, Debian and friends, Fedora, LibreELEC, macOS, Windows&quot;">​</a></h3><p>Hyperion&#39;s project <a href="https://releases.hyperion-project.org/" target="_blank" rel="noreferrer">package repository page</a> provides you with installation instructions at your finger tip.</p><div class="tip custom-block"><p class="custom-block-title">A ready made installation image is available for Raspberry Pi users</p><p>Install <a href="/hyperion.docs/user/HyperBian.html">HyperBian</a> to get a complete system out of the box.</p></div><details class="details custom-block"><summary>Other distributions based on Ubuntu or Debian</summary><p>The same easy installation script can be used, but the underlying distribution codename needs to be provided by an additional option</p><p><code>--ubuntu</code> <em>codebase name</em> or <code>--debian</code> <em>codebase name</em></p><p>Sample for Pop!_OS 22.04 LTS or Mint 21.2 Victoria (which are based on Ubuntu &#39;jammy&#39;)</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://releases.hyperion-project.org/install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ubuntu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;jammy&#39;</span></span></code></pre></div></details><h2 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;Update&quot;">​</a></h2><p>In case Hyperion was installed from the package repository page or an deb/rpm standalone package, follow the standard operating system procedures to update the system.</p><h3 id="ubuntu-debian-and-friends-hyperbian" tabindex="-1">Ubuntu, Debian and friends + HyperBian <a class="header-anchor" href="#ubuntu-debian-and-friends-hyperbian" aria-label="Permalink to &quot;Ubuntu, Debian and friends + HyperBian&quot;">​</a></h3><p>Open a terminal or ssh into a remote system and execute</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hyperion</span></span></code></pre></div><h3 id="fedora" tabindex="-1">Fedora <a class="header-anchor" href="#fedora" aria-label="Permalink to &quot;Fedora&quot;">​</a></h3><p>Open a terminal and execute</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hyperion</span></span></code></pre></div><h3 id="libreelec" tabindex="-1">LibreELEC <a class="header-anchor" href="#libreelec" aria-label="Permalink to &quot;LibreELEC&quot;">​</a></h3><p>See <a href="https://hyperion-project.org/forum/index.php?thread/13754-install-update-hyperion-ng-on-libreelec/&amp;pageNo=1" target="_blank" rel="noreferrer">here</a>.</p><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-label="Permalink to &quot;Uninstall&quot;">​</a></h2><h3 id="ubuntu-debian-and-friends-libreelec-fedora-macos-windows" tabindex="-1">Ubuntu, Debian and friends, LibreELEC, Fedora, macOS, Windows <a class="header-anchor" href="#ubuntu-debian-and-friends-libreelec-fedora-macos-windows" aria-label="Permalink to &quot;Ubuntu, Debian and friends, LibreELEC, Fedora, macOS, Windows&quot;">​</a></h3><p>Hyperion&#39;s project <a href="https://releases.hyperion-project.org/" target="_blank" rel="noreferrer">package repository page</a> provides you with the respective removal instructions</p><h2 id="hyperion-user-data" tabindex="-1">Hyperion User Data <a class="header-anchor" href="#hyperion-user-data" aria-label="Permalink to &quot;Hyperion User Data&quot;">​</a></h2><p>Hyperion stores user configuration data and customised effects inside the executing user&#39;s home directory (folder <code>.hyperion</code>).</p><p>Alternatively, you can check the &quot;About Hyperion&quot; page. The <code>Config path:</code> entry specifies the location where user data is stored currently.</p><h2 id="hyperion-linux-service" tabindex="-1">Hyperion Linux Service <a class="header-anchor" href="#hyperion-linux-service" aria-label="Permalink to &quot;Hyperion Linux Service&quot;">​</a></h2><p>On non-interactive (headless) environments, a Hyperion service is installed running under the current user. In same cases, e.g. using ws281x LEDs, Hyperion must run under <code>root</code>. Hyperion provides a command-line utility which allows switching the user running the service.</p><h3 id="change-the-service-user-to-root" tabindex="-1">Change the service user to &#39;root&#39; <a class="header-anchor" href="#change-the-service-user-to-root" aria-label="Permalink to &quot;Change the service user to &#39;root&#39;&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> updateHyperionUser</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span></span></code></pre></div><h3 id="change-the-service-user-to-the-current-user" tabindex="-1">Change the service user to the current user <a class="header-anchor" href="#change-the-service-user-to-the-current-user" aria-label="Permalink to &quot;Change the service user to the current user&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> updateHyperionUser</span></span></code></pre></div>',31),n=[r];function o(h,l,d,p,c,u){return s(),a("div",null,n)}const g=e(i,[["render",o]]);export{k as __pageData,g as default};
