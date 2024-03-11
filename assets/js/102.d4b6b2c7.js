(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{415:function(t,e,s){"use strict";s.r(e);var a=s(12),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"json-rpc-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-introduction"}},[t._v("#")]),t._v(" JSON RPC Introduction")]),t._v(" "),e("p",[t._v("The JSON-RPC interfaces provides many ways to interact with Hyperion. You can retrieve\ninformation about your server, your instances and take actions (such as setting a\npriority input).")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#what-is-json"}},[t._v("What is JSON?")]),e("ul",[e("li",[e("a",{attrs:{href:"#sending-json"}},[t._v("Sending JSON")])]),e("li",[e("a",{attrs:{href:"#response"}},[t._v("Response")])])])]),e("li",[e("a",{attrs:{href:"#connect"}},[t._v("Connect")]),e("ul",[e("li",[e("a",{attrs:{href:"#tcp-socket"}},[t._v("TCP Socket")])]),e("li",[e("a",{attrs:{href:"#websocket"}},[t._v("WebSocket")])]),e("li",[e("a",{attrs:{href:"#http-s-json"}},[t._v("HTTP/S Json")])])])]),e("li",[e("a",{attrs:{href:"#api"}},[t._v("API")]),e("ul",[e("li",[e("a",{attrs:{href:"#server-info"}},[t._v("Server Info")])]),e("li",[e("a",{attrs:{href:"#control"}},[t._v("Control")])]),e("li",[e("a",{attrs:{href:"#authentication"}},[t._v("Authentication")])]),e("li",[e("a",{attrs:{href:"#subscribe"}},[t._v("Subscribe")])])])]),e("li",[e("a",{attrs:{href:"#_3rd-party-libraries"}},[t._v("3rd Party Libraries")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"what-is-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-json"}},[t._v("#")]),t._v(" What is JSON?")]),t._v(" "),e("p",[t._v("JSON is a standardized message format (see "),e("a",{attrs:{href:"http://www.json.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON.org"),e("OutboundLink")],1),t._v(") and is supported\nby most programming languages. It is human readable which makes for easier debugging.")]),t._v(" "),e("h3",{attrs:{id:"sending-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-json"}},[t._v("#")]),t._v(" Sending JSON")]),t._v(" "),e("p",[t._v("Hyperion requires a specially formatted JSON message. A "),e("code",[t._v("command")]),t._v(" argument is always\nrequired. A "),e("code",[t._v("tan")]),t._v(" argument is optional. This is an integer you can freely choose -- it is\npart of the response you will receive to allow you to filter the response from other server\nmessages (this functionality is likely necessary for advanced usecases only).")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourCommand"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tan"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Depending on the command, there might be an additional subcommand required:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourCommand"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subcommand"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourSubCommand"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tan"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("p",[t._v("Most messages you send will trigger a response of the following format:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourCommand"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"info"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ...DATA... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"instance"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tan"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[e("strong",[t._v("command")]),t._v(": The command you requested.")]),t._v(" "),e("li",[e("strong",[t._v("tan")]),t._v(": The tan you provided (If not, it will default to 0 in the response).")]),t._v(" "),e("li",[e("strong",[t._v("instance")]),t._v(": Instance# sent the update")]),t._v(" "),e("li",[e("strong",[t._v("success")]),t._v(": true or false. If false, an "),e("strong",[t._v("error")]),t._v(" argument will contain details of the issue.")]),t._v(" "),e("li",[e("strong",[t._v("info")]),t._v(": The data you requested (if any).")])]),t._v(" "),e("h2",{attrs:{id:"connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[t._v("#")]),t._v(" Connect")]),t._v(" "),e("p",[t._v('Hyperion currently supports multiple connection mechanisms: TCP Socket ("Json Server"), WebSocket and HTTP/S.')]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You can automatically discover Hyperion servers! See "),e("RouterLink",{attrs:{to:"/en/api/detect.html"}},[t._v("Detect Hyperion")])],1)]),t._v(" "),e("h3",{attrs:{id:"tcp-socket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-socket"}},[t._v("#")]),t._v(" TCP Socket")]),t._v(" "),e("p",[t._v('This is a "raw" connection, you can send and receive line-separated json from the server\n(default port: 19444). This is also known as the "Json Server".')]),t._v(" "),e("h3",{attrs:{id:"websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),e("p",[t._v("This is part of the Hyperion webserver (default port: 8090). You send and receive json\ncommands. WSS is also supported on port 8092. Only TEXT mode is supported. Read more\nabout websockets at "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebSocket%7C",target:"_blank",rel:"noopener noreferrer"}},[t._v("Websocket"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"http-s-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-s-json"}},[t._v("#")]),t._v(" HTTP/S Json")]),t._v(" "),e("p",[t._v("HTTP requests can also be sent to the webserver (default port: 8090, for HTTPS: 8092). Send a HTTP/S POST request along with a properly formatted json message in the body to the (example) url: "),e("code",[t._v("http://IpOfDevice:WebserverPort/json-rpc")])]),t._v(" "),e("ImageWrap",{attrs:{src:"/images/en/http_jsonrpc.jpg",alt:"Control Hyperion with HTTP JSON RPC"}},[e("p",[t._v("Example picture with a "),e("a",{attrs:{href:"https://addons.mozilla.org/de/firefox/addon/restclient/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firefox"),e("OutboundLink")],1),t._v("/"),e("a",{attrs:{href:"https://chrome.google.com/webstore/detail/yet-another-rest-client/ehafadccdcdedbhcbddihehiodgcddpl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome"),e("OutboundLink")],1),t._v(" Addon to send HTTP JSON messages")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v('If you get a "No Authorization" response, you need to create an '),e("RouterLink",{attrs:{to:"/en/json/Authorization.html#token-system"}},[t._v("Authorization Token")])],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("HTTP/S Restrictions")]),t._v(" "),e("p",[t._v("Please note that the HTTP JSON-RPC lacks of the following functions due to technical limitations.")]),t._v(" "),e("ul",[e("li",[t._v("Image streams, led color streams, logging streams, subscriptions")])])]),t._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),e("h3",{attrs:{id:"server-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-info"}},[t._v("#")]),t._v(" Server Info")]),t._v(" "),e("p",[t._v("A large variety of data is available from the server: "),e("RouterLink",{attrs:{to:"/en/json/ServerInfo.html"}},[t._v("Server Info")])],1),t._v(" "),e("h3",{attrs:{id:"control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[t._v("#")]),t._v(" Control")]),t._v(" "),e("p",[t._v("Control your Hyperion server: "),e("RouterLink",{attrs:{to:"/en/json/Control.html"}},[t._v("Control")])],1),t._v(" "),e("h3",{attrs:{id:"authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),e("p",[t._v("Authentication mechanisms: "),e("RouterLink",{attrs:{to:"/en/json/Authentication.html"}},[t._v("Authentication")])],1),t._v(" "),e("h3",{attrs:{id:"subscribe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[t._v("#")]),t._v(" Subscribe")]),t._v(" "),e("p",[t._v("Data subscriptions: "),e("RouterLink",{attrs:{to:"/en/json/Subscribe.html"}},[t._v("Subscribe")])],1),t._v(" "),e("h2",{attrs:{id:"_3rd-party-libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-party-libraries"}},[t._v("#")]),t._v(" 3rd Party Libraries")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/dermotduffy/hyperion-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyperion-py"),e("OutboundLink")],1),t._v(" is a 3rd-party Python\nlibrary for communication with Hyperion-NG. It uses the API described here as the\nunderlying communication mechanism and presents it in a user-friendly way. As a 3rd\nparty library, it is not supported by the Hyperion development team.")])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);