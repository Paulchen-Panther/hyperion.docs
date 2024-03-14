import{_ as i,b as p,c as l,d as u,e as n,g as s,f as a,w as r,h as o}from"./app-DPCgG5Y_.js";const d={},k=n("h1",{id:"our-first-effect",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#our-first-effect"},[n("span",null,"Our first Effect")])],-1),h=n("p",null,[s("Let's create together our first effect! "),n("br"),s(" Target of this effect is to show the general structure of an effect, make you confident with the API and workflow.")],-1),m=n("h2",{id:"requirements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requirements"},[n("span",null,"Requirements")])],-1),f=n("li",null,"An installed and running Hyperion. You need access to the filesystem where Hyperion has been installed.",-1),v={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,'Navigate to the "custom-effects" folder of your Hyperion installation (Inside .hyperion folder of your home directory)',-1),w=n("li",null,[n("strong",null,'Configure a led matrix layout at "LED Hardware"-section at the web configuration to 10x10 LEDs')],-1),g=n("h3",{id:"start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#start"},[n("span",null,"Start")])],-1),y=n("code",null,"neweffect.py",-1),_=n("code",null,"custom-effects",-1),x=n("br",null,null,-1),q=n("code",null,"hyperion",-1),H=n("code",null,"time",-1),C={href:"https://docs.python.org/3.5/library/",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"hyperion",-1),E=o(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Let&#39;s import our modules, so we can use them</span>
<span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time

<span class="token comment"># Create a loop, this loop runs until the user stops the effect</span>
<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># Here we are inside the loop, let&#39;s do something</span>
  <span class="token comment"># According to the documentation of hyperion.imageDrawPoint()</span>
  <span class="token comment"># The position of this point is 2 at x-axis and 5 at the y-axis with a thickness of 1 pixel and color red </span>
  hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment"># Now we need to tell Hyperion that we want to send the image we painted</span>
  hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment"># As we are still in our loop let&#39;s have a break to slow down the execution. We should never waste CPU power :)</span>
  <span class="token comment"># Sleep a second until the loop starts from the beginning</span>
  time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Recap:</strong>: First effect finished! We printed a red dot with a size of one pixel on an empty image and sent that to Hyperion.</p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><p>Let&#39;s test our neweffect.py. Create a new file called <code>neweffect.json</code>. And place the following code inside</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;My first own effect!&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;script&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;neweffect.py&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;args&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let&#39;s talk about what we have done here</p><ul><li>The <code>neweffect.json</code> contains the configuration for our effect.</li><li>The <code>name</code> property is the effect name which is displayed at the effect list and could be freely defined.</li><li>The <code>script</code> property points to the python file it should start.</li><li>The <code>args</code> property contains options and their values, for example a color, speed and so on. We leave this empty for the moment.</li></ul><p><strong>After you added this file to your custom-effects folder, you need to restart Hyperion once</strong></p><p>Now you should see the &quot;My first own effect!&quot; effect at the remote page effect list. Start the effect, you should see something like this at led visualization.</p>`,9),W={href:"https://doc.qt.io/qt-5/coordsys.html#rendering",target:"_blank",rel:"noopener noreferrer"},S=o(`<h3 id="add-color-option" tabindex="-1"><a class="header-anchor" href="#add-color-option"><span>Add color option</span></a></h3><p>Now we want to make the color of the dot configurable. <br> Let&#39;s edit the neweffect.py.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time

<span class="token comment"># Let&#39;s get the value of option custom-color, values will be saved in the color variable</span>
color <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;custom-color&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># Get the color information from the variable color</span>
  hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
  time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>With <code>hyperion.args.get()</code> we grab the values from the neweffect.json that starts this python file (from the <code>args</code> property of the neweffect.json, which is currently empty.).</li><li>The color array at the end of <code>hyperion.args.get(&#39;custom-color&#39;, (0,255,200))</code> is a fallback value as we don&#39;t deliver a <code>custom-color</code> property inside the args of the neweffect.json. This ensures always a working effect, choose these default values wisely.</li><li>As you see the <code>hyperion.imageDrawPoint(...)</code> got also a modification, as we write the <code>custom-color</code> into the variable <code>color</code> we access the values with <code>color[0]</code> which is 0, <code>color[1]</code> which is 255 and <code>color[2]</code> which is 200.</li></ul><p><strong>Save the neweffect.py and restart the effect, a restart of Hyperion is not required</strong> <br> It should now look like this</p>`,5),P=o(`<h3 id="more-dots" tabindex="-1"><a class="header-anchor" href="#more-dots"><span>More dots!</span></a></h3><p>Now we have a single dot, and we prepared the color for the dot to be configurable. Now we want more of them! <br> Again we edit the neweffect.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time<span class="token punctuation">,</span> random

color   <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>args<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;custom-color&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
iWidth  <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>imageWidth<span class="token punctuation">(</span><span class="token punctuation">)</span>
iHeight <span class="token operator">=</span> hyperion<span class="token punctuation">.</span>imageHeight<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> hyperion<span class="token punctuation">.</span>abort<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    hyperion<span class="token punctuation">.</span>imageDrawPoint<span class="token punctuation">(</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>iWidth<span class="token punctuation">)</span><span class="token punctuation">,</span>random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>iHeight<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>color<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    hyperion<span class="token punctuation">.</span>imageShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),A=n("code",null,"hyperion.imageWidth()",-1),I=n("code",null,"hyperion.imageHeight()",-1),L={href:"https://docs.python.org/3.5/library/random.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"random.randint()",-1),N=n("li",null,"Keep in mind that the user setup has always a different width, height and even the ratio between them is dynamic based on the led layout.",-1),D=n("li",null,[n("strong",null,"Never use fixed positions, thickness,... calculate them always!")],-1),F=n("p",null,"So this is the image when we run the effect again.",-1),O=o(`<p>Each second (remember the <code>sleep.time(1)</code>) it paints at a random position a new dot, endless. It doesn&#39;t check if there is already a dot, it just overwrites the old dot.</p><h3 id="more-color" tabindex="-1"><a class="header-anchor" href="#more-color"><span>More color</span></a></h3><p>Let&#39;s add an option which force the effect to paint optional a random color for each dot instead always the same. <br> Again we edit the neweffect.py</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> hyperion<span class="token punctuation">,</span> time<span class="token punctuation">,</span> random
<span class="token comment"># a helper function to convert HSV to RGB space</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R=n("li",null,[s("To generate bright colors we write our own function: "),n("code",null,"def hsv_to_rgb(h, s, v): ...")],-1),M=n("code",null,"randomColor",-1),V=n("code",null,"bool(...)",-1),B={href:"https://docs.python.org/3.5/library/stdtypes.html",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"while not hyperion.abort():",-1),G=n("code",null,"if randomColor:",-1),U=n("code",null,"color",-1),Y=n("code",null,"hsv_to_rgb(h,s,v)",-1),J=n("code",null,"hsv_to_rgb(random.uniform(0,1), 1, 1)",-1),K={href:"https://www.w3schools.com/colors/colors_hsl.asp",target:"_blank",rel:"noopener noreferrer"},Q=n("p",null,[n("strong",null,"Save the file and restart the effect")],-1),X=n("h3",{id:"clear-the-image",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#clear-the-image"},[n("span",null,"Clear the image")])],-1),Z=n("p",null,"Let's add a option to set the image to black on a configurable interval in seconds. This overwrites all dots with black.",-1),$=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"I am sorry, more will come soon")],-1);function nn(sn,an){const t=p("ExternalLinkIcon"),c=p("RouteLink"),e=p("ImageWrap");return l(),u("div",null,[k,h,m,n("ul",null,[f,n("li",null,[s("Text editor (of your liking, i would recommend "),n("a",v,[s("Visual Studio Code"),a(t)]),s(")")]),b,w]),g,n("p",null,[s("First, we start with the python file. Create a new file called "),y,s(" in your "),_,s(" folder. "),x,s(" We need to import some modules, "),q,s(" and "),H,s(" is always required. The time module comes from Python, if you want to know, what methods such a module has, visit the "),n("a",C,[s("Python documentation"),a(t)]),s(". What "),T,s(" can do, is already explained at "),a(c,{to:"/effects/API.html"},{default:r(()=>[s("Effect Engine API")]),_:1}),s(".")]),E,a(e,{src:"/images/en/owneff_1.jpg",alt:"Custom Hyperion Effect"}),n("p",null,[s("According to the "),n("a",W,[s("coordinate system"),a(t)]),s(", we are at 2 at the x-axis and 5 at the y-axis like written before. Perfect!")]),S,a(e,{src:"/images/en/owneff_2.jpg",alt:"Custom Hyperion Effect with cyan color"}),P,n("ul",null,[n("li",null,[s("We grab now the width ("),A,s(") and height ("),I,s(") of the image to make sure that we can fill the entire image with dots. For the required randomness we "),n("a",L,[s("import random"),a(t)]),s(" and use "),j,s(" with a minimum value of 0 and a maximum value of our width and height. This creates random integer numbers.")]),N,D]),F,a(e,{src:"/images/en/owneff_3.gif",alt:"Custom Hyperion Effect with random dots"}),O,n("ul",null,[R,n("li",null,[s("So we add also a new option "),M,s(" which is True, we parse True/False values always as "),V,s(" to make sure they are really bool, and not a string. If you don't know what's the difference between a bool, string, int and float is, do a short browse at the "),n("a",B,[s("python documentation"),a(t)]),s(".")]),n("li",null,[s("Inside our "),z,s(" loop we check with "),G,s(" if randomColor is true or not, if it is true (enabled) we overwrite our variable "),U,s(" with a random color that is generated with "),Y,s(". We just randomize h for Hue with our random function "),J,s(", the h accepts values between 0 and 1. What is hue? Play around with hue at "),n("a",K,[s("this"),a(t)]),s(" colorpicker. You see why this is a easy way to generate bright colors with a simple random function.")])]),Q,a(e,{src:"/images/en/owneff_4.gif",alt:"Custom Hyperion Effect with random dots and color"}),X,Z,$])}const en=i(d,[["render",nn],["__file","OurFirstEffect.html.vue"]]),on=JSON.parse('{"path":"/effects/OurFirstEffect.html","title":"Our first Effect","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[{"level":3,"title":"Start","slug":"start","link":"#start","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Add color option","slug":"add-color-option","link":"#add-color-option","children":[]},{"level":3,"title":"More dots!","slug":"more-dots","link":"#more-dots","children":[]},{"level":3,"title":"More color","slug":"more-color","link":"#more-color","children":[]},{"level":3,"title":"Clear the image","slug":"clear-the-image","link":"#clear-the-image","children":[]}]}],"git":{"updatedTime":1710445488000},"filePathRelative":"effects/OurFirstEffect.md"}');export{en as comp,on as data};