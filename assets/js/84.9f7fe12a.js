(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{475:function(e,a,r){"use strict";r.r(a);var t=r(30),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hyperbian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperbian"}},[e._v("#")]),e._v(" HyperBian")]),e._v(" "),r("p",[e._v('Is a ready to use image for your Raspberry Pi. Based on the original Raspberry Pi Foundation image "Raspbian lite". Hyperion is already pre installed. So simply')]),e._v(" "),r("ol",[r("li",[e._v("Download")]),e._v(" "),r("li",[e._v("Burn image on SD")]),e._v(" "),r("li",[e._v("Power on your Pi")]),e._v(" "),r("li",[e._v("Visit with your Browser "),r("code",[e._v("http://IpOfYourPi:8090")]),e._v(" for configuration")])]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("ul",[r("li",[e._v("SD card with at least 2GB size")]),e._v(" "),r("li",[e._v("Raspberry Pi")]),e._v(" "),r("li",[e._v("Linux/Mac/Windows + SD card read/writer")])]),e._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("ul",[r("li",[e._v("Download the image here: "),r("a",{attrs:{href:"https://github.com/Hyperion-Project/HyperBian/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("HyperBian Download"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Extract HyperBian-XXXX.img out of the HyperBian.zip")]),e._v(" "),r("li",[e._v("Burn the extracted HyperBian-XXXX.img to your SD card. Below 3 instructions for the specific system")]),e._v(" "),r("li",[e._v("On Windows: "),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images/windows.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("INSTALLING OPERATING SYSTEM IMAGES USING WINDOWS"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("On Mac: "),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images/mac.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("INSTALLING OPERATING SYSTEM IMAGES ON MAC OS"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("On Linux: "),r("a",{attrs:{href:"https://www.raspberrypi.org/documentation/installation/installing-images/linux.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("INSTALLING OPERATING SYSTEM IMAGES ON LINUX"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("In case your Raspberry Pi has WLAN or you want to use a WLAN stick, you could pre-configure the WLAN SSID and password before you plugin the SD in your Pi. See "),r("a",{attrs:{href:"#hyperbian-wlan"}},[e._v("HyperBian WLAN")])]),e._v(" "),r("li",[e._v("Optional: Enable SSH "),r("a",{attrs:{href:"#HyperBian-SSH"}},[e._v("HyperBian SSH")])])]),e._v(" "),r("h3",{attrs:{id:"hyperbian-wlan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperbian-wlan"}},[e._v("#")]),e._v(" HyperBian WLAN")]),e._v(" "),r("p",[e._v('In case you want to use WLAN with your Raspberry Pi, you can include the WLAN SSID and password after you burned the HyperBian-XXXX.img to your SD card for auto configuration on first boot.\nOpen the SD card with a file explorer. It\'s called "boot".')]),e._v(" "),r("ul",[r("li",[e._v("Create a new  text file\n"),r("ImageWrap",{attrs:{src:"/images/en/user_hyperbian_wpa_suppli1.jpg",alt:"Create a new textfile"}})],1),e._v(" "),r("li",[e._v('Rename it to "wpa_supplicant.conf"\n'),r("ImageWrap",{attrs:{src:"/images/en/user_hyperbian_wpa_suppli2.jpg",alt:"Rename to wpa_supplicant.conf"}})],1),e._v(" "),r("li",[e._v("Add your WLAN credentials, replace "),r("strong",[e._v("YOUR_SSID")]),e._v(" and "),r("strong",[e._v("YOUR_PASSWORD")]),e._v(" with your values")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\ncountry=GB\n\n  network={\n    ssid="YOUR_SSID"\n    psk="YOUR_PASSWORD"\n    key_mgmt=WPA-PSK\n  }\n')])])]),r("ImageWrap",{attrs:{src:"/images/en/user_hyperbian_wpa_suppli3.jpg",alt:"Add your WLAN config"}}),e._v(" "),r("ul",[r("li",[e._v("Save it! You are done, the WLAN will be configured during next boot")])]),e._v(" "),r("h3",{attrs:{id:"hyperbian-ssh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperbian-ssh"}},[e._v("#")]),e._v(" HyperBian SSH")]),e._v(" "),r("p",[e._v('You should never need it for daily usage, but for completion: To enable SSH access, plugin your sd card with HyperBian already installed into your computer, and open the "boot" partition with a file explorer. Create a empty file named '),r("code",[e._v("ssh")]),e._v(" in the root directory (without file extension). SSH will be enabled now on next boot. "),r("br"),e._v(" "),r("strong",[e._v("SSH LOGIN")])]),e._v(" "),r("ul",[r("li",[e._v("User: pi")]),e._v(" "),r("li",[e._v("Password: raspberry\n"),r("ImageWrap",{attrs:{src:"/images/en/user_hyperbian_ssh.jpg",alt:"Enable SSH"}})],1)])],1)}),[],!1,null,null,null);a.default=n.exports}}]);