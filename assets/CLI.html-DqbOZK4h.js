import{_ as e,c as n,d as a,h as s}from"./app-BU6vTvYp.js";const t={},i=s(`<h1 id="command-line-interface" tabindex="-1"><a class="header-anchor" href="#command-line-interface"><span>Command Line Interface</span></a></h1><p>All executables shipped with Hyperion have some command line arguments/options</p><h2 id="hyperiond" tabindex="-1"><a class="header-anchor" href="#hyperiond"><span>hyperiond</span></a></h2><p>The heart of Hyperion</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Show the version/build date/commit of Hyperion </span>
hyperiond <span class="token parameter variable">--version</span>

<span class="token comment"># Reset current adminstration password back to &#39;hyperion&#39;</span>
hyperiond <span class="token parameter variable">--resetPassword</span>

<span class="token comment"># Overwrite the path for user data (which defaults to your home directory)</span>
hyperiond <span class="token parameter variable">--userdata</span> /temp/anotherDir

<span class="token comment"># Overwrite log level temporarily: hyperiond -s for silent -v for verbose and -d for debug</span>
hyperiond <span class="token parameter variable">-d</span>

<span class="token comment"># Export effects to directory</span>
hyperiond --export-effects /tmp

<span class="token comment"># Run Hyperion in desktop mode</span>
hyperiond <span class="token parameter variable">--desktop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If a path name contains spaces, surround it with <code>“</code> . <br><code>hyperiond --userdata &quot;/temp/another Dir&quot;</code></p></div><h2 id="hyperion-remote" tabindex="-1"><a class="header-anchor" href="#hyperion-remote"><span>hyperion-remote</span></a></h2><p>hyperion-remote is a command line tool which translates given arguments to JSON commands and sends them to the Hyperion JSON-RPC. Easy to use for scripts. It supports nearly all commands that Hyperion provides.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Get a list of all available commands</span>
hyperion-remote <span class="token parameter variable">-h</span>

<span class="token comment"># Set a color by using HTML color names</span>
hyperion-remote <span class="token parameter variable">-c</span> aqua

<span class="token comment"># Set color with hex value</span>
hyperion-remote <span class="token parameter variable">-c</span> FF7F50

<span class="token comment"># Set color with a duration of 5 seconds instead endless </span>
hyperion-remote <span class="token parameter variable">-c</span> FF7F50 <span class="token parameter variable">-d</span> <span class="token number">5000</span>

<span class="token comment"># Start an effect</span>
hyperion-remote <span class="token parameter variable">-e</span> <span class="token string">&quot;Rainbow swirl&quot;</span>

<span class="token comment"># with a duration of 8 seconds instead endless</span>
hyperion-remote <span class="token parameter variable">-e</span> <span class="token string">&quot;Rainbow swirl&quot;</span> <span class="token parameter variable">-d</span> <span class="token number">8000</span>

<span class="token comment"># Target a specific instance</span>
<span class="token comment"># ATTENTION: Hyperion instances will synchronize with the Instance Syncing feature by default</span>
<span class="token comment"># You can configure the behaviour for each instance</span>
hyperion-remote <span class="token parameter variable">-I</span> <span class="token string">&quot;My cool instance name&quot;</span>
<span class="token comment"># Or</span>
hyperion-remote <span class="token parameter variable">--instance</span> <span class="token string">&quot;My cool instance name&quot;</span>
<span class="token comment"># Example set effect for instance</span>
hyperion-remote <span class="token parameter variable">--instance</span> <span class="token string">&quot;My cool instance name&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Rainbow swirl&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Hyperion remote will search for a Hyperion server automatically. So you can even use that on another device in your local network without providing a IP/port</p></div><h2 id="hyperion-capture" tabindex="-1"><a class="header-anchor" href="#hyperion-capture"><span>hyperion-capture</span></a></h2><p>We deliver also stand alone capture apps right in your Hyperion directory:</p><table><thead><tr><th style="text-align:left;">Executable</th><th style="text-align:left;">Source</th></tr></thead><tbody><tr><td style="text-align:left;">hyperion-aml</td><td style="text-align:left;">Amlogic screen capture</td></tr><tr><td style="text-align:left;">hyperion-dispmanx</td><td style="text-align:left;">DispManX Raspberry Pi screen capture</td></tr><tr><td style="text-align:left;">hyperion-framebuffer</td><td style="text-align:left;">Linux FrameBuffer screen capture</td></tr><tr><td style="text-align:left;">hyperion-osx</td><td style="text-align:left;">macOS screen capture</td></tr><tr><td style="text-align:left;">hyperion-qt</td><td style="text-align:left;">Qt multi platform screen capture</td></tr><tr><td style="text-align:left;">hyperion-v4l2</td><td style="text-align:left;">USB capture</td></tr><tr><td style="text-align:left;">hyperion-x11</td><td style="text-align:left;">X11 screen capture</td></tr><tr><td style="text-align:left;">hyperion-xcb</td><td style="text-align:left;">XCB screen capture</td></tr></tbody></table><p>Depending on your platform you have more or less</p><p>All these application can be started independent from Hyperion and all of these have slightly different options. They communicate with the flatbuffer interface of Hyperion. Each module will search a Hyperion server automatically, if the <code>--address</code> option is not used.</p><p>Below you find the output of Qt capture executable for illustration.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hyperion-qt <span class="token parameter variable">--help</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sample with a capture interval of 15 frames per second (fps)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>hyperion-qt <span class="token parameter variable">-f</span> <span class="token number">15</span>
</code></pre></div>`,19),r=[i];function o(l,p){return n(),a("div",null,r)}const d=e(t,[["render",o],["__file","CLI.html.vue"]]),m=JSON.parse('{"path":"/user/advanced/CLI.html","title":"Command Line Interface","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"hyperiond","slug":"hyperiond","link":"#hyperiond","children":[]},{"level":2,"title":"hyperion-remote","slug":"hyperion-remote","link":"#hyperion-remote","children":[]},{"level":2,"title":"hyperion-capture","slug":"hyperion-capture","link":"#hyperion-capture","children":[]}],"git":{"updatedTime":1710706483000},"filePathRelative":"user/advanced/CLI.md"}');export{d as comp,m as data};
