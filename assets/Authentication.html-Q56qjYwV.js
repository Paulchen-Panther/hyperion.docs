import{_ as n,c as s,d as e,h as a}from"./app-SNb-n1nX.js";const t={},o=a(`<h1 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h1><p>Hyperion has an authentication system allowing users to login via password, and applications to authenticate via tokens. The user can configure how strong or weak the Hyperion API should be protected from the <code>Configuration</code> -&gt; <code>Network Services</code> panel on the Web UI.</p><h3 id="token-system" tabindex="-1"><a class="header-anchor" href="#token-system"><span>Token System</span></a></h3><p>Tokens are a simple way to authenticate an App for API access. They can be created in the UI on the <code>Configuration</code> -&gt; <code>Network Services</code> panel (the panel appears when <code>API Authentication</code> options is checked). Your application can also <a href="#request-a-token">request a token</a> via the API.</p><h3 id="authentication-check" tabindex="-1"><a class="header-anchor" href="#authentication-check"><span>Authentication Check</span></a></h3><p>Callers can check whether authentication is required to work with the API, by sending:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subcommand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;tokenRequired&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the property <code>required</code> is true, authentication is required. An example response:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize-tokenRequired&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;info&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;required&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="login-with-token" tabindex="-1"><a class="header-anchor" href="#login-with-token"><span>Login with Token</span></a></h3><p>Login with a token as follows -- the caller will receive a <a href="#login-response">Login response</a>.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subcommand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;YourPrivateTokenHere&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="login-with-token-over-http-s" tabindex="-1"><a class="header-anchor" href="#login-with-token-over-http-s"><span>Login with Token over HTTP/S</span></a></h3><p>Add the HTTP Authorization header to every request. On error, the user will get a failed <a href="#login-response">Login response</a>.</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>  Authorization : token YourPrivateTokenHere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="login-response" tabindex="-1"><a class="header-anchor" href="#login-response"><span>Login response</span></a></h4><p>A successful login response:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize-login&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A failed login response:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize-login&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;No Authorization&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logout" tabindex="-1"><a class="header-anchor" href="#logout"><span>Logout</span></a></h3><p>Users can also logout. Hyperion doesn&#39;t verify the login state, this call will always return a success.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subcommand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;logout&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize-logout&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tan&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Logging out will stop all streaming data services and subscriptions</p></div><h3 id="request-a-token" tabindex="-1"><a class="header-anchor" href="#request-a-token"><span>Request a Token</span></a></h3><p>Here is the recommended workflow for your application to authenticate:</p><ul><li>Ask Hyperion for a token along with a comment (a short meaningful string that identifies the caller is the most useful, e.g. includes an application name and device) and a short randomly created <code>id</code> (numbers/letters).</li><li>Wait for the response. The user will need to accept the token request from the Web UI.</li><li>On success: The call will return a UUID token that can be repeatedly used. Note that access could be revoked by the user at any time, but will continue to last for currently connected sessions in this case.</li><li>On error: The call won&#39;t get a token, which means the user either denied the request or it timed out (180s).</li></ul><p>Request a token using the follow command, being sure to add a comment that is descriptive enough for the Web UI user to make a decision as to whether to grant or deny the request. The <code>id</code> field has 5 random chars created by the caller, which will appear in the Web UI as the user considers granting their approval.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subcommand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;requestToken&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;comment&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;OpenHab 2 Binding&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;T3c91&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the call, a popup will appear in the Web UI to accept/reject the token request. The calling application should show the comment and the id so that the user can confirm the origin properly in the Hyperion UI. After 180 seconds without a user action, the request is automatically rejected, and the caller will get a failure response (see below).</p><h4 id="success-response" tabindex="-1"><a class="header-anchor" href="#success-response"><span>Success response</span></a></h4><p>If the user accepted the token request the caller will get the following response:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize-requestToken&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;comment&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;OpenHab2 Binding&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;T3c91&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;token&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;YourPrivateTokenHere&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Save the token somewhere for further use. The token does not expire.</li><li>Be aware that a user can revoke the token. It will continue to function for currently connected sessions.</li></ul><h4 id="failed-response" tabindex="-1"><a class="header-anchor" href="#failed-response"><span>Failed response</span></a></h4><p>A request will fail when either:</p><ul><li>It times out (i.e. user neither approves nor rejects for 180 seconds after the request is sent).</li><li>User rejects the request.</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize-requestToken&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;error&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Token request timeout or denied&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="request-abort" tabindex="-1"><a class="header-anchor" href="#request-abort"><span>Request abort</span></a></h4><p>You can abort the token request by adding an &quot;accept&quot; property to the original request. The request will be deleted:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;command&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subcommand&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;requestToken&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;comment&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;OpenHab 2 Binding&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;T3c91&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accept&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),i=[o];function p(l,r){return s(),e("div",null,i)}const u=n(t,[["render",p],["__file","Authentication.html.vue"]]),d=JSON.parse('{"path":"/json/Authentication.html","title":"Authentication","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Token System","slug":"token-system","link":"#token-system","children":[]},{"level":3,"title":"Authentication Check","slug":"authentication-check","link":"#authentication-check","children":[]},{"level":3,"title":"Login with Token","slug":"login-with-token","link":"#login-with-token","children":[]},{"level":3,"title":"Login with Token over HTTP/S","slug":"login-with-token-over-http-s","link":"#login-with-token-over-http-s","children":[]},{"level":3,"title":"Logout","slug":"logout","link":"#logout","children":[]},{"level":3,"title":"Request a Token","slug":"request-a-token","link":"#request-a-token","children":[]}],"git":{"updatedTime":1710444694000},"filePathRelative":"json/Authentication.md"}');export{u as comp,d as data};
