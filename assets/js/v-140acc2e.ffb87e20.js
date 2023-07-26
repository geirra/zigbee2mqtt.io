"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52656],{634488:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-140acc2e","path":"/devices/ZNCLDJ12LM.html","title":"Xiaomi ZNCLDJ12LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi ZNCLDJ12LM control via MQTT","description":"Integrate your Xiaomi ZNCLDJ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-11-09T18:37:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]},{"level":3,"title":"Configuration of device attributes","slug":"configuration-of-device-attributes","link":"#configuration-of-device-attributes","children":[]},{"level":3,"title":"Lost configuration on long power outage","slug":"lost-configuration-on-long-power-outage","link":"#lost-configuration-on-long-power-outage","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Running (binary)","slug":"running-binary","link":"#running-binary","children":[]},{"level":3,"title":"Motor_state (enum)","slug":"motor-state-enum","link":"#motor-state-enum","children":[]},{"level":3,"title":"Power_outage_count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690307198000},"filePathRelative":"devices/ZNCLDJ12LM.md"}')},349904:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var o=n(166252);const a=(0,o._)("h1",{id:"xiaomi-zncldj12lm",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-zncldj12lm","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi ZNCLDJ12LM")],-1),i=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZNCLDJ12LM")],-1),r=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Aqara B1 curtain motor")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"cover (state, position), battery, running, motor_state, power_outage_count, linkquality")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCLDJ12LM.jpg",alt:"Xiaomi ZNCLDJ12LM"})])],-1),d=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),p=(0,o._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,o.Uk)(" Adapter firmware")],-1),h=(0,o._)("p",null,"In order for this device to work (fully), at least the following firmware is required on your adapter:",-1),m={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},g=(0,o._)("code",null,"20211115",-1),v={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},k=(0,o._)("code",null,"20211114",-1),b={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},f=(0,o._)("code",null,"20211222",-1),_={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},y=(0,o._)("code",null,"0x26720700",-1),w=(0,o.uE)('<p><em>Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.</em></p><h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes" aria-hidden="true">#</a> Configuration of device attributes</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;options&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token property">&quot;reverse_direction&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;hand_open&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;reset_limits&quot;</span><span class="token operator">:</span> xxx\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>reverse_direction</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Device can be configured to act in an opposite direction.</li><li><strong>hand_open</strong>: (<code>true</code>/<code>false</code>, default: <code>true</code>). By default motor starts rotating when you pull the curtain by hand. You can disable this behaviour.</li><li><strong>reset_limits</strong>: (<code>true</code>/<code>false</code>, default: <code>false</code>). Reset the motor. When a path was cleared from obstacles.</li></ul><p>You can send a subset of options, all options that won&#39;t be specified will be revered to default.</p><p>After changing <code>reverse_direction</code> you will need to fully open and fully close the curtain so the motor will re-detect edges. <code>reverse_direction</code> will get new state only after this recalibration.</p><h3 id="lost-configuration-on-long-power-outage" tabindex="-1"><a class="header-anchor" href="#lost-configuration-on-long-power-outage" aria-hidden="true">#</a> Lost configuration on long power outage</h3><p>If motor is used without battery it may lose configuration after long power outage. In that case you need to perform end stops calibration again publishing the following command sequence with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><ol><li><code>{ &quot;options&quot;: { &quot;reset_limits&quot;: true } }</code></li><li><code>{ &quot;state&quot;: &quot;close&quot; }</code></li><li>Wait here for curtain closure.</li><li><code>{ &quot;state&quot;: &quot;open&quot; }</code></li></ol><p>Home Assistant automation example:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">alias</span><span class="token punctuation">:</span> Calibrate curtain\n  <span class="token key atrule">trigger</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> homeassistant\n    <span class="token key atrule">event</span><span class="token punctuation">:</span> start\n  <span class="token key atrule">action</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish\n    <span class="token key atrule">data</span><span class="token punctuation">:</span>\n      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set\n      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&quot;{ &#39;options&#39;: { &#39;reset_limits&#39;: true } }&quot;</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> cover.close_cover\n    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> cover.&lt;COVER_ID<span class="token punctuation">&gt;</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">delay</span><span class="token punctuation">:</span>\n      <span class="token key atrule">seconds</span><span class="token punctuation">:</span> <span class="token number">13</span> <span class="token comment">#wait for closure complete</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> cover.open_cover\n    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> cover.&lt;COVER_ID<span class="token punctuation">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Motor leaves calibration mode automatically after it reaches the both open and close curtain position limits. Calibration is mandatory for proper position reporting and ability to set intermediate positions.</p>',13),q=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),N=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),x=(0,o.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="running-binary" tabindex="-1"><a class="header-anchor" href="#running-binary" aria-hidden="true">#</a> Running (binary)</h3><p>Whether the motor is moving or not. Value can be found in the published state on the <code>running</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> running is ON, if <code>false</code> OFF.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum" aria-hidden="true">#</a> Motor_state (enum)</h3><p>The current state of the motor.. Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>closing</code>, <code>opening</code>, <code>stop</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power_outage_count (numeric)</h3><p>Number of power outages (since last pairing). Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),C={},L=(0,n(983744).Z)(C,[["render",function(e,t){const n=(0,o.up)("RouterLink"),C=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[i,(0,o._)("tbody",null,[s,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(n,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),l,c,u])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),d,p,h,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("CC2530/CC2531: "),(0,o._)("a",m,[g,(0,o.Wm)(C)])]),(0,o._)("li",null,[(0,o.Uk)("CC1352/CC2652: "),(0,o._)("a",v,[k,(0,o.Wm)(C)])]),(0,o._)("li",null,[(0,o.Uk)("CC2538: "),(0,o._)("a",b,[f,(0,o.Wm)(C)])]),(0,o._)("li",null,[(0,o.Uk)("Conbee II: "),(0,o._)("a",_,[y,(0,o.Wm)(C)])])]),w,(0,o.kq)(" Notes END: Do not edit below this line "),q,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),N,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),x])}]])}}]);