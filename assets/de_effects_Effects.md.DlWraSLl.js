import{_ as e,c as t,o as a,a5 as n}from"./chunks/framework.C7p0y4oj.js";const _=JSON.parse('{"title":"Effekt-Erstellung","description":"","frontmatter":{},"headers":[],"relativePath":"de/effects/Effects.md","filePath":"de/effects/Effects.md","lastUpdated":1712091540000}'),r={name:"de/effects/Effects.md"},f=n('<h1 id="effekt-erstellung" tabindex="-1">Effekt-Erstellung <a class="header-anchor" href="#effekt-erstellung" aria-label="Permalink to &quot;Effekt-Erstellung&quot;">​</a></h1><p>Hyperion bietet eine leistungsfähige API, um eigene Effekte zu erstellen, zusammen mit den möglichen Optionen und der Benutzeroberfläche, um diese anzupassen.</p><h2 id="effekt-dateien" tabindex="-1">Effekt-Dateien <a class="header-anchor" href="#effekt-dateien" aria-label="Permalink to &quot;Effekt-Dateien&quot;">​</a></h2><p>Ein Effekt hat 3 verschiedene Dateien.</p><table><thead><tr><th style="text-align:left;">Datei</th><th style="text-align:left;">Sprache</th><th style="text-align:left;">Bemerkung</th></tr></thead><tbody><tr><td style="text-align:left;">neweffect.py</td><td style="text-align:left;"><a href="https://www.python.org" target="_blank" rel="noreferrer">Python</a></td><td style="text-align:left;">Das Herzstück des Effekts</td></tr><tr><td style="text-align:left;">neweffect.json</td><td style="text-align:left;"><a href="https://www.json.org" target="_blank" rel="noreferrer">JSON</a></td><td style="text-align:left;">Enthält Optionen für die Python-Datei, die dafür sorgen, dass sie konfigurierbar ist.</td></tr><tr><td style="text-align:left;">neweffect.schema.json</td><td style="text-align:left;"><a href="https://json-schema.org" target="_blank" rel="noreferrer">JSON Schema</a></td><td style="text-align:left;">Erzeugt die Bedienoberfläche für die Optionen und wird zur Überprüfung von Benutzereingaben verwendet. <a href="/hyperion.docs/de/api/Ui.html">Read more</a></td></tr></tbody></table>',5),l=[f];function s(i,d,o,h,c,g){return a(),t("div",null,l)}const u=e(r,[["render",s]]);export{_ as __pageData,u as default};