(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{420:function(t,e,a){"use strict";a.r(e);var s=a(12),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"command-line-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface"}},[t._v("#")]),t._v(" Command Line Interface")]),t._v(" "),e("p",[t._v("All executables shipped with Hyperion have some command line arguments/options")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#hyperiond"}},[t._v("hyperiond")])]),e("li",[e("a",{attrs:{href:"#hyperion-remote"}},[t._v("hyperion-remote")])]),e("li",[e("a",{attrs:{href:"#hyperion-capture"}},[t._v("hyperion-capture")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"hyperiond"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hyperiond"}},[t._v("#")]),t._v(" hyperiond")]),t._v(" "),e("p",[t._v("The heart of Hyperion")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Show the version/build date/commit of Hyperion ")]),t._v("\nhyperiond "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Reset current adminstration password back to 'hyperion'")]),t._v("\nhyperiond "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--resetPassword")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Overwrite the path for user data (which defaults to your home directory)")]),t._v("\nhyperiond "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--userdata")]),t._v(" /temp/anotherDir\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Overwrite log level temporarily: hyperiond -s for silent -v for verbose and -d for debug")]),t._v("\nhyperiond "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Export effects to directory")]),t._v("\nhyperiond --export-effects /tmp\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run Hyperion in desktop mode")]),t._v("\nhyperiond "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--desktop")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If a path name contains spaces, surround it with "),e("code",[t._v("“")]),t._v(" . "),e("br"),t._v(" "),e("code",[t._v('hyperiond --userdata "/temp/another Dir"')])])]),t._v(" "),e("h2",{attrs:{id:"hyperion-remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-remote"}},[t._v("#")]),t._v(" hyperion-remote")]),t._v(" "),e("p",[t._v("hyperion-remote is a command line tool which translates given arguments to JSON commands and sends them to the Hyperion JSON-RPC. Easy to use for scripts. It supports nearly all commands that Hyperion provides.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get a list of all available commands")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set a color by using HTML color names")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" aqua\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set color with hex value")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" FF7F50\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set color with a duration of 5 seconds instead endless ")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" FF7F50 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start an effect")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainbow swirl"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# with a duration of 8 seconds instead endless")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainbow swirl"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Target a specific instance")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ATTENTION: Hyperion instances will synchronize with the Instance Syncing feature by default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can configure the behaviour for each instance")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My cool instance name"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--instance")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My cool instance name"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example set effect for instance")]),t._v("\nhyperion-remote "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--instance")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My cool instance name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainbow swirl"')]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Hyperion remote will search for a Hyperion server automatically. So you can even use that on another device in your local network without providing a IP/port")])]),t._v(" "),e("h2",{attrs:{id:"hyperion-capture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-capture"}},[t._v("#")]),t._v(" hyperion-capture")]),t._v(" "),e("p",[t._v("We deliver also stand alone capture apps right in your Hyperion directory:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Executable")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Source")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-aml")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Amlogic screen capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-dispmanx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DispManX Raspberry Pi screen capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-framebuffer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Linux FrameBuffer screen capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-osx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("macOS screen capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-qt")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Qt multi platform screen capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-v4l2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("USB capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-x11")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("X11 screen capture")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("hyperion-xcb")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("XCB screen capture")])])])]),t._v(" "),e("p",[t._v("Depending on your platform you have more or less")]),t._v(" "),e("p",[t._v("All these application can be started independent from Hyperion and all of these have slightly different options. They communicate with the flatbuffer interface of Hyperion.\nEach module will search a Hyperion server automatically, if the "),e("code",[t._v("--address")]),t._v(" option is not used.")]),t._v(" "),e("p",[t._v("Below you find the output of Qt capture executable for illustration.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("hyperion-qt "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("\nhyperion-qt:\n\tVersion   "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(".16 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("HEAD detached at "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Paulchen"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Panther"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cb85d2d"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a93d79b"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1705568419")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),t._v("\n\tbuild time: Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v(" 09:15:43\nUsage: ./bin/hyperion-qt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nQt interface capture application "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Hyperion. Will automatically search a Hyperion server "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v(" option isn"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t used. Please note that if you have more than one server running it'")]),t._v("s "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" or "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" random "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" one will be used.\n\nOptions:\n  -d, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--display")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("display"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                Set the display to capture "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default:\n                                         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  -f, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--framerate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("framerate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("            Capture frame rate. Range "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-30fps\n                                         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  -s, --size-decimator "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("size-decimator"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  Decimation factor "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the output image\n                                         size "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --crop-left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-left"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                Number of pixels to crop from the left\n                                         of the picture before decimation\n  --crop-right "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-right"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              Number of pixels to crop from the\n                                         right of the picture before decimation\n  --crop-top "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-top"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                  Number of pixels to crop from the "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n                                         of the picture before decimation\n  --crop-bottom "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("crop-bottom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("            Number of pixels to crop from the\n                                         bottom of the picture before decimation\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--3DSBS")]),t._v("                                Interpret the incoming video stream as\n                                         3D side-by-side\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--3DTAB")]),t._v("                                Interpret the incoming video stream as\n                                         3D top-and-bottom\n  -a, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--address")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("                The "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" or IP-address "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IPv4 or\n                                         IPv6"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" of the hyperion server.\n                                         Default host: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1, port: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("19400")]),t._v(".\n                                         Sample addresses:\n                                         Host "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" hyperion.fritz.box\n                                         IPv4 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:19400\n                                         IPv6 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2001")]),t._v(":1:2:3:4:5:6:7"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  -p, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--priority")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("priority"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              Use the provided priority channel\n                                         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("suggested "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("-199"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --skip-reply                           Do not receive and check reply\n                                         messages from Hyperion\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--screenshot")]),t._v("                           Take a single screenshot, save it to\n                                         "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" and quit\n  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--debug")]),t._v("                                Enable debug logging\n  -h, "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--help")]),t._v("                             Show this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n")])])]),e("p",[t._v("Sample with a capture interval of 15 frames per second (fps)")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hyperion-qt -f 15\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);