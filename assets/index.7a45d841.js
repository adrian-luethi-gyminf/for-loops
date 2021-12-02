var O=Object.defineProperty,P=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var x=(a,e,t)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,h=(a,e)=>{for(var t in e||(e={}))T.call(e,t)&&x(a,t,e[t]);if(b)for(var t of b(e))L.call(e,t)&&x(a,t,e[t]);return a},y=(a,e)=>P(a,F(e));var C=(a,e)=>{var t={};for(var i in a)T.call(a,i)&&e.indexOf(i)<0&&(t[i]=a[i]);if(a!=null&&b)for(var i of b(a))e.indexOf(i)<0&&L.call(a,i)&&(t[i]=a[i]);return t};var l=(a,e,t)=>(x(a,typeof e!="symbol"?e+"":e,t),t);import{j as z,R as k,a as V}from"./vendor.f992a0a9.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};j();const M=window.ace;console.assert(!!M,"Ace must be loaded as global script");class D{constructor(e){l(this,"aceconfig");l(this,"aceEditor");l(this,"pythonCodeCheckWorker");l(this,"pythonCodeCheckWorkerBusy");l(this,"parserTimeout");this.aceconfig=Object.assign({aceElement:document.getElementById("editor")||document.createElement("div"),mode:"javascript",theme:"monokai",fontSize:18,code:"",readOnly:!1,disableSelect:!1,showLineNumbers:!["html","css","svg"].includes(e.mode||""),minLines:4,maxLines:20,showGutter:!0},e);const{code:t,aceElement:i,minLines:s,maxLines:n,theme:o,mode:d,showGutter:u,showLineNumbers:f,readOnly:p,fontSize:m}=this.aceconfig;this.aceconfig.code=t||(i.querySelector("code")||i).textContent||"",this.aceEditor=M.edit(i);const g=this.aceEditor;g.setTheme("ace/theme/"+o),g.session.setMode("ace/mode/"+d),g.setOptions({showInvisibles:!1,showGutter:u,showPrintMargin:!1,maxLines:n,minLines:s,highlightActiveLine:!1,showLineNumbers:f,readOnly:p,scrollPastEnd:.05}),g.resize(),g.setFontSize(m+"px"),g.getSession().setOptions({tabSize:4,useSoftTabs:!1}),g.getSession().setValue(t),this.setRules(),g.$blockScrolling=1/0,d==="python"&&this.addPythonCodeCheckWorker(),this.aceconfig.disableSelect&&g.getSession().selection.on("changeSelection",function(){g.getSession().selection.clearSelection()}),g.commands.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Cmd-S"},exec:function(){i.dispatchEvent(new CustomEvent("my-save",{bubbles:!0,detail:""}))}})}addPythonCodeCheckWorker(){let e="";if(typeof window.Worker!="undefined"){this.pythonCodeCheckWorker=this.pythonCodeCheckWorker||new Worker("/external_libraries/pythonSkulptHelpers/tigerjython-parser-worker.js"),this.pythonCodeCheckWorker.onmessage=s=>{this.pythonCodeCheckWorkerBusy=!1;let n=s.data;const o=n.map(d=>d.text).join("-");o!=e&&(e=o,this.aceEditor.getSession().setAnnotations(n))};const t=()=>{clearTimeout(this.parserTimeout),this.parserTimeout=setTimeout(i,200)},i=()=>{var n;this.pythonCodeCheckWorkerBusy&&t();const s=this.aceEditor.getSession().getValue();(n=this.pythonCodeCheckWorker)==null||n.postMessage(s),this.pythonCodeCheckWorkerBusy=!0};this.aceEditor.getSession().on("change",t)}}setRules(){let e=[/doctype first\. Expected/,/Unexpected End of file\. Expected/,/'-' after '--' found in comment/,/Unexpected character in comment found/];this.aceEditor.getSession().on("changeAnnotation",()=>{const t=this.getAnnotations()||[],i=t.filter(s=>!e.some(n=>n.test(s.text)));t.length>i.length&&this.aceEditor.session.setAnnotations(i)}),this.aceconfig.mode==="javascript"&&this.changeOptionsJS()}changeOptionsJS(){const e=this.aceEditor.session.$worker;return e?e.send("changeOptions",[{asi:!0}]):setTimeout(()=>this.changeOptionsJS(),100)}resize(){return this.aceEditor.resize()}setValue(e){return this.aceEditor.getSession().setValue(e)}getValue(){return this.aceEditor.getSession().getValue()}undo(){return this.aceEditor.undo()}redo(){return this.aceEditor.redo()}getAnnotations(){return this.aceEditor.getSession().getAnnotations()}sizeup(){this.setFontSize(this.aceconfig.fontSize+1)}sizedown(){this.setFontSize(this.aceconfig.fontSize-1)}setFontSize(e){return this.aceconfig.fontSize=e,this.aceEditor.setFontSize(e+"px")}}class I extends D{constructor(e){const n=e,{element:t=document.createElement("div")}=n,i=C(n,["element"]);t.innerHTML="<div class='editor ace'></div>";const s=t.querySelector(".ace");super(y(h({},i),{aceElement:s}));l(this,"element");l(this,"worker");this.element=t,t.addEventListener("my-resize",o=>this.aceEditor.resize())}closeWorker(){this.worker&&(this.worker.dispatchEvent(new CustomEvent("terminate")),console.log("closeWorker"),this.worker.terminate())}}const $=`
<div class="buttonrow">
  <button class='loadsave' data-action="save" title='Speichern'><img src='/img/menu/icon-save.png' alt="save"/></button>
  <button class='loadsave' data-action="showOpener" title='Gespeicherte Version laden'><img src='/img/menu/icon-open.png' alt="open"/></button>
  <button data-action="loadTemplate" title='Vorlage neu laden'><img src='/img/menu/icon-clear.png' alt="loadTemplate"/></button>
  <button data-action="toggleSolution" title="L\xF6sungsbeispiel anzeigen"><img src="/img/menu/icon-solution.png"></button>
  <button data-action="undo" title='R\xFCckg\xE4ngig'><img src='/img/menu/icon-undo.png' alt="undo"/></button>
  <button data-action="redo" title='Wiederherstellen'><img src='/img/menu/icon-redo.png' alt="redo"/></button>
  <!--button data-action="beautify" title='Code formatieren'>:-)</button-->
  <button data-action="sizeup" title='Schrift vergr\xF6ssern'><img src='/img/menu/font-increase.png' alt="font up"/></button>
  <button data-action="sizedown" title='Schrift verkleinern'><img src='/img/menu/font-decrease.png' alt="font down"/></button>
  <!--<button data-action='ok'><img src='/img/menu/icon-ok.png'/></button>-->
  <button data-action="run" class="pressed" title="Code laufen lassen"><img src="/img/menu/icon-forward.png"></button>
</div>
`;let _=document.createElement("template");_.innerHTML=$;class q{constructor(e){l(this,"_elem");l(this,"master");const t=e.menuElement||document.getElementById("menu");this.master=e.master,t.appendChild(_.content.cloneNode(!0)),this._elem=t,e.onlyLoadSave&&this._elem.querySelectorAll("button:not(.loadsave)").forEach(i=>{var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this.master.taskConfig.solution||this._elem.querySelectorAll("button[data-action=toggleSolution]").forEach(i=>{var s;return(s=i.parentNode)==null?void 0:s.removeChild(i)}),this._elem.addEventListener("click",i=>{var o;let s=(o=i==null?void 0:i.target)==null?void 0:o.closest("button"),n=s&&!s.disabled&&s.dataset.action;n&&this.master[n](i)})}}async function H(a){const e=a.code,t=a.show,i=a.workerHooks||{};let s=new Worker("../src/js-worker/skulpt.worker.js"),n=a.outputElement;n.innerHTML="";function o(d){d.dispatchEvent(new CustomEvent("terminate")),d.terminate()}return s.onmessage=function(d){let{type:u,payload:f}=JSON.parse(d.data);if(u==="exit"&&o(s),u==="log"&&f.split(`
`).slice(0,-1).forEach(p=>{let m=document.createElement("div");m.classList.add("log"),m.textContent=p,n&&n.append(m)}),u==="show"&&t(f),u==="error"){let p=(e==null?void 0:e.split(`
`).length)||1,m=f.match(/SyntaxError: bad input on line (\d+)/);m&&m.length?+m[1]>=p&&(n.innerHTML+='<div class="warn">Unexpected end of code.</div>'):n.innerHTML+=`<div class="warn">${f}</div>`,o(s)}},a.addLib&&s.postMessage({type:"addLib",addLib:await a.addLib()}),i.sendReadySignal=(d,u)=>{s.postMessage({type:"readysignal",readysignal:d,payload:u})},setTimeout(()=>s.postMessage({type:"run",code:e}),10),window.addEventListener("keydown",d=>{s.postMessage({type:"event",name:"keydown",key:d.key})}),window.addEventListener("keyup",d=>{s.postMessage({type:"event",name:"keyup",key:d.key})}),s}class B{constructor(e){l(this,"prefix");this.prefix=e}async loadItem(e){return JSON.parse(localStorage[this.prefix+"-"+e])}async loadAll(e){const t=[];for(var i=0;i<localStorage.length;i++){const s=localStorage.key(i);if(s==null?void 0:s.startsWith(`${this.prefix}-${e}`)){const n=Number(s.slice(s.lastIndexOf("-")+1)),o=JSON.parse(localStorage.getItem(s)||"");t.push(y(h({},o),{date:n}))}}return t}async saveItem(e,t){let i=new Date;console.log(e);const s=`${this.prefix}-${e}-${i.getTime()}`;return localStorage[s]=JSON.stringify(t),{ok:!0,date:i.getTime()}}async updateItem(e,t){const i=await this.loadItem(e);await this.saveItem(e,h(h({},i),t))}async markSolved(e,t,i){return this.updateItem(e,{solvedstate:i})}}let U="isTestMode"in window?window.isTestMode:a=>!1;function W(a){return a}class J{constructor(e){l(this,"config");l(this,"versions");l(this,"storage");this.config=Object.assign({listeners:[],taskname:"",template:"",opener:document.createElement("div"),validator:s=>{}},e),this.storage=new B("gymsat");const{opener:t}=this.config;this.findInOpener(".version_suggestions").addEventListener("click",async s=>{var o,d;let n=(d=(o=W(W(s.target).closest(".version_suggestion")))==null?void 0:o.dataset)==null?void 0:d.version;await this.triggerLoading(this.versions.find(u=>u.date===Number(n)))}),this.findInOpener(".toggle_autosaved").addEventListener("change",s=>{t.classList.toggle("show_autosaved",s.target.checked)}),this.findInOpener(".toggle_autosaved").addEventListener("click",s=>s.stopPropagation()),this.versions=[],this.init().then(s=>this.triggerInitDone())}findInOpener(e){return this.config.opener.querySelector(e)}setValidator(e){this.config.validator=e}async init(){this.versions=await this.getVersions();let e=this.versions.find(t=>t.solvedstate)||this.versions[0];return e?(await this.triggerLoading(e),e):(console.log(`no versions found for ${this.getTaskname()}, will load template...`),await this.loadTemplate())}async isSolved(){return(this.versions||await this.getVersions()).some(t=>t.solvedstate)}async isSolvedByCurrent(){let e=this.versions||await this.getVersions();return e[0]&&e[0].solvedstate}async isCurrentVersionSaved(){let e=this.versions||await this.getVersions();return e[0]&&!e[0].autosave}async saveOrAutoSave(e,t="save"){let i=t!=="save"?Object.assign({},e,{autosave:t}):e,s=this.versions[0]||{code:this.config.template||""};if(t!=="save"&&Object.keys(e).every(o=>s[o]===e[o]))return;let n=await this.storage.saveItem(this.getTaskname(),i);await this.validateAndSaveResult(y(h({},i),{date:n.date})),await this.getVersions()}async validateAndSaveResult(e){let t=await this.config.validator(e);return(t===!0||t===!1)&&await this.storage.markSolved(this.getTaskname(),e.date,t?1:0),t}async showOpener(){this.config.opener.classList.toggle("open")&&window.addEventListener("click",e=>this.config.opener.classList.remove("open"),{once:!0})}async loadTemplate(){return await this.triggerLoading({code:this.config.template,date:0})}async getVersions(){let e=await this.storage.loadAll(this.getTaskname());return e.sort((t,i)=>i.date-t.date),this.versions=e,await this.displayVersions(e),await this.versionsMayHaveChanged(),await this.triggerVersionChange(e),e}async displayVersions(e){let t=i=>String(i).padStart(2,"0");this.findInOpener(".version_suggestions").innerHTML="";for(let i=0;i<e.length;i++){let s=e[i],n=new Date(s.date),o=e.findIndex(S=>!S.autosave),d=o===-1||i<o?"newerThanLastSave":"",f=(K(n)?"heute, ":!1)||t(n.getDate())+"."+t(n.getMonth()+1)+".",p=s.solvedstate===1?!0:s.solvedstate===0?!1:await this.validateAndSaveResult(s),m=!U()&&p?"correct":p?"":"wrong",g=s.autosave==="quit"?"leave.png":s.autosave==="run"?"play-small.png":"save-small.png";this.findInOpener(".version_suggestions").innerHTML+=`<div class='version_suggestion ${s.autosave||"save"} ${m} ${d}' data-version='${s.date}'>
        <img src='/img/menu/${g}'>${f} ${new Date(s.date).toLocaleTimeString()}
      </div>`}}async triggerLoading(e){this.config.listeners.forEach(t=>{e&&t.loadVersion&&t.loadVersion(e)})}async triggerVersionChange(e){this.config.listeners.forEach(t=>{t.versionChange&&t.versionChange(e)})}async triggerInitDone(){this.config.listeners.forEach(e=>{e.initDone&&e.initDone(this.versions,this.config.template)})}async versionsMayHaveChanged(){this.config.opener.dispatchEvent(new CustomEvent("version-change",{detail:this.versions,bubbles:!0}))}getTaskname(){return this.config.taskname}}function K(a){const e=new Date;return a.getDate()===e.getDate()&&a.getMonth()===e.getMonth()&&a.getFullYear()===e.getFullYear()}const G=`
<div class="task">
  <div>
    <div class="menu"></div>
    <div class="version_opener"><div><label class="toggle_autosaved"><input type="checkbox">show autosaved</label><h4>Open version:</h4></div>
      <div class="version_suggestions"></div>
    </div>
  </div>
  <div class="ediwrap"></div>
  <div class="output"></div>
</div>
`;let R=document.createElement("template");R.innerHTML=G;class Z{constructor(e){l(this,"taskConfig");l(this,"outputElement");l(this,"menu");l(this,"worker");l(this,"versionManager");l(this,"editor");const S=e,{solution:t="",template:i="",taskname:s="testtask",runonload:n=!1,element:o=document.createElement("div"),mode:d="python",fullHeight:u=!1,runConfig:f}=S,p=C(S,["solution","template","taskname","runonload","element","mode","fullHeight","runConfig"]);o.innerHTML="",o.appendChild(R.content.cloneNode(!0)),this.editor=new I(y(h({},p),{mode:d,element:o.querySelector(".ediwrap")})),this.taskConfig={element:o,template:i,solution:t,taskname:s,runonload:n,mode:d,runConfig:f,fullHeight:u};const m=o.querySelector(".menu"),g=o.querySelector(".version_opener");this.outputElement=o.querySelector(".output"),this.menu=new q({menuElement:m,master:this}),window.addEventListener("beforeunload",async he=>this&&await this.saveOrAutoSave("quit")),this.versionManager=new J({listeners:[this],opener:g,taskname:this.taskConfig.taskname,template:i}),t&&this.addSolution(o,p)}async showOpener(e){return e.stopPropagation(),this.versionManager.showOpener()}async save(){return this.saveOrAutoSave("save")}async loadTemplate(){await this.versionManager.loadTemplate()}addSolution(e,t){var s;e.style.position="relative",e.insertAdjacentHTML("beforeend",`
	    <div class="solution wrap hidden"><button class="closeSolution">Close</button><div class="solution ace"></div></div>
	  `),(s=e.querySelector(".closeSolution"))==null||s.addEventListener("click",()=>this.toggleSolution());const i=e.querySelector(".solution.ace");new I(y(h({element:i,code:this.taskConfig.solution},t),{fontSize:13,readOnly:!0,showGutter:!1,showLineNumbers:!1}))}async toggleSolution(){const e=this.taskConfig.element.querySelector(".solution.wrap");e==null||e.classList.toggle("hidden")}async saveOrAutoSave(e){let i={code:this.editor.getValue()};return await this.versionManager.saveOrAutoSave(i,e)}async loadVersion(e){this.editor.setValue(e.code),this.taskConfig.runonload&&this.run().catch(console.warn)}getTaskname(){return this.taskConfig.taskname}async run(){this.saveOrAutoSave("run").catch(console.warn),this.triggerRunEvent(this.editor.getValue()),this.taskConfig.mode==="python"&&(this.closeWorker(),this.worker=await H(h({code:this.editor.getValue(),outputElement:this.outputElement,show:e=>{console.log(e)}},this.taskConfig.runConfig)))}closeWorker(){this.worker&&(this.worker.dispatchEvent(new CustomEvent("terminate")),console.log("closeWorker"),this.worker.terminate())}sizeup(){this.editor.sizeup()}sizedown(){this.editor.sizedown()}undo(){this.editor.undo()}redo(){this.editor.redo()}destroy(){this.closeWorker()}initDone(e,t){let i=new CustomEvent("init-done",{detail:{versions:e,template:t},bubbles:!0});this.taskConfig.element.dispatchEvent(i)}triggerRunEvent(e){let t=new CustomEvent("run-code",{detail:{code:e},bubbles:!0});this.taskConfig.element.dispatchEvent(t)}}const v=5,E={x:50,y:50,heading:0,lineCap:"round",lineJoin:"round",lineWidth:5,color:"#ffffcc",ispendown:!0,speed:500,turningSpeed:25,isFading:!0,isActive:!1};class Q{constructor(e,t){l(this,"startconfig");l(this,"config");l(this,"ctx");l(this,"W");l(this,"H");l(this,"pulse");l(this,"animFrameIds");l(this,"turtleimg");console.log({createTurtle:t}),this.startconfig=h(h({},t),E),this.config=h(h({},t),E);let i=e.querySelector("canvas")||document.createElement("canvas");this.ctx=i.getContext("2d"),this.W=i.width,this.H=i.height,this.pulse=0,this.startconfig=Object.assign({},E,t),this.animFrameIds={},this.turtleimg=e.querySelector(".turtleimg")||document.createElement("img"),Object.assign(this.ctx,{strokeStyle:this.config.color,lineWidth:this.config.lineWidth}),this.clear()}async clear(){this.cancelAnimFrames(),this.config=h({},this.startconfig),this.resetContext(),this.config.isFading&&(this.animFrameIds.fade=window.requestAnimationFrame(e=>this.fade(1))),this.renderImage()}cancelAnimFrames(){let e;for(e in this.animFrameIds)cancelAnimationFrame(this.animFrameIds[e]||0),delete this.animFrameIds[e]}resetContext(){this.ctx.clearRect(0,0,this.W,this.H);let{lineWidth:e,lineJoin:t,lineCap:i,color:s}=this.startconfig,n={lineWidth:e*v,lineJoin:t,lineCap:i,strokeStyle:s};Object.assign(this.ctx,n)}fade(e){let t=3;if(this.config.isActive){let i=!1,s=e*4,n=this.ctx.getImageData(0,0,this.W,this.H);for(let o=3+s;o<n.data.length;o+=4*t)!i&&n.data[o]&&(i=!0),n.data[o]-=Math.ceil(n.data[o]/(10/+this.config.isFading));this.ctx.putImageData(n,0,0),this.config.isActive=i}this.pulse++,window.cancelAnimationFrame(this.animFrameIds.fade||0),this.animFrameIds.fade=window.requestAnimationFrame(i=>this.fade((e+1)%t))}penUp(){this.config.ispendown=!1}penDown(){this.config.ispendown=!0}setSpeed(e){this.config.speed=e}setTurningSpeed(e){this.config.turningSpeed=e}setHeading(e){return this.config.heading=e,this.renderImage()}jumpTo([e,t]){return this.config.x=e,this.config.y=t,this.renderImage()}async moveTo([e,t]){return this.config.isActive=!0,await this.step(e,t)}async setColor([e,t,i]){this.config.color=typeof e=="string"?e:`rgb(${e}, ${t}, ${i})`,this.ctx.strokeStyle=this.config.color}async setLineWidth(e){this.config.lineWidth=e,this.ctx.lineWidth=this.config.lineWidth*v}async forward(e){this.config.isActive=!0;let t=this.config.x+Math.cos(Math.PI/180*this.config.heading)*e,i=this.config.y+Math.sin(Math.PI/180*this.config.heading)*e;return await this.step(t,i)}async left(e){return await this.turnstep(this.config.heading-e)}async right(e){return await this.turnstep(this.config.heading+e)}renderImage(){!this.turtleimg||(this.turtleimg.style.top=`${this.config.y}%`,this.turtleimg.style.left=`${this.config.x}%`,this.turtleimg.style.transform=`translate(-50%, -50%) rotate(${this.config.heading}deg)`)}async turnstep(e){let t=e-this.config.heading;if(Math.abs(t)>this.config.turningSpeed)return this.config.heading+=Math.sign(t)*this.config.turningSpeed,this.renderImage(),await new Promise((i,s)=>{this.animFrameIds.turn=window.requestAnimationFrame(async n=>{await this.turnstep(e),i()})});this.config.heading=e,this.renderImage()}async step(e,t){this.ctx.beginPath(),this.ctx.moveTo(this.config.x*v,this.config.y*v);let i=e-this.config.x,s=t-this.config.y,n=Math.hypot(i,s),o=this.config.speed/60,d=()=>{this.config.ispendown?(this.ctx.lineTo(this.config.x*v,this.config.y*v),this.ctx.stroke()):this.ctx.moveTo(this.config.x*v,this.config.y*v),this.renderImage()};if(n>o)return this.config.x+=i/n*o,this.config.y+=s/n*o,d(),await new Promise((u,f)=>{this.animFrameIds.step=window.requestAnimationFrame(async p=>{await this.step(e,t),u()})});this.config.x=e,this.config.y=t,d()}}const Y={"src/lib/simpleturtle.py":`
from time import sleep, clock

"""
create a decorator to add functions as methods
with this decorators all functions are usable global
and as Turtle method
"""
def add_method(cls):
    def decorator(func):
        def wrapper(self, *args, **kwargs): 
            return func(*args, **kwargs)
        setattr(cls, func.__name__, wrapper)
        # Note we are not binding func, but wrapper which accepts self but does exactly the same as func
        return func # returning func means func can still be used normally
    return decorator

id = 0
class Turtle:
    def __init__(self):
        global id
        self.id = id
        id = id + 1
    def getId(self):
        return self.id

@add_method(Turtle)
def turtleWaitFor(signal):
    while(not waitfor(signal)):
        sleep(0.001)
        
@add_method(Turtle)
def runCommand(command, value):
    signal = 'turtle'+command+str(round(clock()*1e6))
    show({'command': command, 'value': value, 'readysignal': signal})
    turtleWaitFor(signal)
    
@add_method(Turtle)
def forward(steps):
    runCommand('forward', steps)
    
@add_method(Turtle)
def left(degree):
    runCommand('left', degree)
    
@add_method(Turtle)
def right(degree):
    runCommand('right', degree)
    
@add_method(Turtle)
def clear():
    runCommand('clear', [])
    
@add_method(Turtle)
def penUp():
    runCommand('penUp', [])
    
@add_method(Turtle)
def penDown():
    runCommand('penDown', [])
    
@add_method(Turtle)
def setSpeed(speed):
    runCommand('setSpeed', speed)
    
@add_method(Turtle)
def setTurningSpeed(turningSpeed):
    runCommand('setTurningSpeed', turningSpeed)

@add_method(Turtle)
def setHeading(heading):
    runCommand('setHeading', heading)

@add_method(Turtle)
def jumpTo(x, y):
    runCommand('jumpTo', [x, y])

@add_method(Turtle)
def moveTo(x, y):
    runCommand('moveTo', [x, y])

@add_method(Turtle)
def setColor(val1, val2=None, val3=None):
    runCommand('setColor', [val1, val2, val3])

@add_method(Turtle)
def setLineWidth(pixel):
    runCommand('setLineWidth', pixel)

clear()

`},X={"src/lib/keyboard.py":`
def isPressed(key):
  return key in getworkerstate('pressed_keys')
def is_pressed(key):
  return key in getworkerstate('pressed_keys')
def getPressedKeys():
  return getworkerstate('pressed_keys')
`};function ee(){return{"src/lib/threading.js":`
    var $builtinmodule = function (name) {
      var mod = {};
      mod.parallel = new Sk.builtin.func(function(pyfns) {
            var susp = new Sk.misceval.Suspension();
            susp.resume = function (n) {
                if (susp.data["error"]) {
                    throw new Sk.builtin.IOError(susp.data["error"].message);
                }
                return Sk.ffi.remapToPy(susp.data.result);
            }
            susp.data = {
                type: "Sk.promise",
                promise: Promise.all(pyfns.v.map(pyfn => {
                      return Sk.misceval.callsimAsync(null, pyfn)
                    }))
            };
            return susp;
      });
      mod.add = new Sk.builtin.func(function(pyfn, ...args) {
            var susp = new Sk.misceval.Suspension();
            let done = false;
            let result = Sk.ffi.remapToPy("undefined");
            let thread = {
              isDone: function() {return done},
              getResult: function() {return result}
            }
            susp.resume = function (n) {
                Sk.misceval.callsimAsync(null, pyfn, ...args).then(x=>{
                    result = Sk.ffi.remapToPy(x);
                    done = true;
                })
                if (susp.data["error"]) {
                    throw new Sk.builtin.IOError(susp.data["error"].message);
                }
                return Sk.ffi.remapToPy(susp.data.result);
            }
            susp.data = {
                type: "Sk.promise",
                promise: Promise.resolve(thread)
            };
            return susp;
      });
      mod.wait = new Sk.builtin.func(function(pymillis) {
            var susp = new Sk.misceval.Suspension();
            let millis = Sk.ffi.remapToJs(pymillis);
            susp.resume = function (n) {
                return Sk.ffi.remapToPy(susp.data.result);
            }
            susp.data = {
                type: "Sk.promise",
                promise: new Promise((resolve, reject) => setTimeout(_=>resolve(millis), millis))
            };
            return susp;
      });
      return mod;
    }
    `}}const r=z.exports.jsx,c=z.exports.jsxs;class te extends k.Component{constructor(e){super(e);l(this,"layoutwrapper");l(this,"state");l(this,"props");this.state={isResizing:!1,wleft:e.fracLeft*window.innerWidth},this.resize=this.resize.bind(this),this.stopResizing=this.stopResizing.bind(this),this.startResizing=this.startResizing.bind(this),this.layoutwrapper=k.createRef(),this.props=e}componentDidMount(){window.addEventListener("resize",e=>this.setState({wleft:this.props.fracLeft*window.innerWidth}))}startResizing(){this.setState({isResizing:!0})}stopResizing(){this.setState({isResizing:!1})}resize(e){if(this.state.isResizing){if(e.pointerType==="mouse"&&e.buttons!==1||!this.layoutwrapper.current)return this.stopResizing();var t=this.layoutwrapper.current.getBoundingClientRect();let i=e.clientX-t.left-5;i=Math.min(i,t.width-10),i=Math.max(i,100),this.setState({wleft:i}),this.resizeKids()}}resizeKids(){var t,i;let e=new CustomEvent("my-resize",{detail:""});(i=(t=this.layoutwrapper)==null?void 0:t.current)==null||i.querySelectorAll("*").forEach(s=>s.dispatchEvent(e))}render(){const e={"--gtcsplitter":`${this.state.wleft}px 2em 1fr`};return c("div",{className:"tasksplitwrapper",ref:this.layoutwrapper,style:e,onPointerMove:this.resize,onPointerUp:this.stopResizing,onPointerLeave:this.stopResizing,children:[r("div",{className:"taskleftcolumn",children:this.props.left}),r("div",{className:"splitbar",draggable:"false",onPointerDown:this.startResizing}),r("div",{className:"taskrightcolumn "+(this.state.isResizing?"ignorePointerEvents":""),children:this.props.right})]})}}const ie=()=>h(h(h({},ee()),Y),X),A={sendReadySignal:console.log},N={backgroundColor:"#f8f8ff",backgroundImg:"skala.svg",img:"turtle.png",color:"black",speed:15,lineWidth:1,turningSpeed:3,isFading:!1,x:50,y:50,heading:0};class w extends k.Component{constructor(e){super(e);l(this,"elementRef");l(this,"resultRef");l(this,"taskManager");l(this,"initprops");l(this,"turtle");l(this,"state");this.initprops=h(h({},N),e.config),this.elementRef=k.createRef(),this.resultRef=k.createRef(),this.state={coordviewer:null}}componentDidMount(){this.taskManager=new Z(h({element:this.elementRef.current||document.createElement("div"),runConfig:{addLib:ie,workerHooks:A,show:this.show.bind(this)}},this.props));const e=h(h({},N),this.initprops);this.turtle=new Q(this.resultRef.current||document.createElement("div"),e)}async show({show:e}){let{command:t,value:i,readysignal:s}=e;await(this==null?void 0:this.turtle[t](i)),A.sendReadySignal(s)}componentWillUnmount(){this.taskManager&&this.taskManager.destroy(),this.turtle&&this.turtle.cancelAnimFrames()}showPixels(e){const t=this.resultRef.current||document.createElement("div"),{top:i,left:s,width:n}=t.getBoundingClientRect(),o=100,d=t.offsetWidth/o,u=e.clientX-s,f=e.clientY-i,p=Math.floor(u/d),m=Math.floor(f/d);this.setState({coordviewer:{px:u,py:f,x:p,y:m,w:n}})}hidePixels(){this.setState({coordviewer:null})}coords(){if(this.state.coordviewer){const{x:e,y:t,px:i,py:s,w:n}=this.state.coordviewer,o={position:"absolute",backgroundColor:"white",[i<n/2?"left":"right"]:(i<n/2?i:n-i)+"px",top:s+10+"px",padding:"0.2em"};return r("div",{className:"pixelviewer",style:o,children:c("div",{children:[e," | ",t]})})}else return}render(){return r("div",{children:r(te,{fracLeft:.6,left:r("div",{className:"reactEditor",ref:this.elementRef}),right:c("div",{className:"result canvas_wrapper",ref:this.resultRef,style:{fontWeight:"bold",backgroundImage:`url(/img/turtle/${this.initprops.backgroundImg}`,backgroundColor:this.initprops.backgroundColor},onMouseMove:e=>this.showPixels(e),onMouseLeave:e=>this.hidePixels(),children:[r("canvas",{className:"t231a",width:"500",height:"500"}),r("img",{src:`/img/turtle/${this.initprops.img}`,className:"turtleimg",alt:"turtle"}),this.coords()]})})})}}const se=`from simpleturtle import *

for i in range(4):
	left(90)
	forward(10)
	right(90)
	forward(10)

`,ne=`from simpleturtle import *

setColor(200, 200, 200)
forward(70)
left(162)
setColor(50, 250, 250)
forward(36.8)
left(36)
forward(36.8)
left(162)
`,re=`from simpleturtle import *

right(90)

for i in range(2):
	jumpTo(20, 50)
	forward(30)
	jumpTo(80, 50)
	forward(30)
	jumpTo(50, 62)
	forward(10)
`,oe=`from simpleturtle import *

# draw your square here...
`,ae=`from simpleturtle import *

setSpeed(40)

for i in range(100):
	forward(10)
	left(90)
`,le=`from simpleturtle import *



for i in range(4):
	forward(100/4)
	left(360/4)

	
`,de=`from simpleturtle import *


	
`;function ce(){return r("div",{className:"App",children:c("div",{className:"main",children:[c("div",{className:"explanation",children:[r("h1",{children:"Wiederholungen mittels Schleifen"}),r("p",{children:"Die bisherigen Beispiele enthielten viele sich wiederholenden Elemente. Dies m\xF6chte man m\xF6glichst vermeiden, um den Code leichter ver\xE4ndern zu k\xF6nnen und um weniger Fehlerquellen und Aufwand zu haben."}),c("div",{children:[c("h3",{className:"tasktitle",children:["Treppen zeichnen mit einer ",r("dfn",{children:"for"}),"-Schleife"]}),r("p",{children:"Lassen Sie den Code laufen und sehen Sie sich an, wie mit der for-Schleife mehrere Treppen Stufen gezeichnet werden. Erstellen Sie eine zweite for-Schleife, so dass die Treppe auf der anderen Seite wieder abw\xE4rts f\xFChrt."}),c("details",{children:[r("summary",{children:"So sollte es am Ende aussehen..."}),r("div",{children:r("img",{src:"./img/turtle/loops_stairs.png"})})]})]})]}),r(w,{config:{template:se,taskname:"stairs",lineWidth:2,speed:30,color:"#289",x:10,y:70,backgroundImg:"skala.png"}}),r("div",{className:"explanation",children:c("div",{children:[c("h3",{className:"tasktitle",children:["Mehrere Uml\xE4ufe mit einer ",r("dfn",{children:"for"}),"-Schleife"]}),r("p",{children:"Mit dem folgenden Code uml\xE4uft der Laser das Dach einmal. Versuchen Sie zu erreichen, dass der Laser f\xFCnf Uml\xE4ufe macht."})]})}),r(w,{config:{template:ne,taskname:"bhroof",lineWidth:2,speed:120,color:"#289",x:15,y:45.5,turningSpeed:3e8,img:"none.svg",backgroundImg:"bundeshaus_square.png"}}),r("div",{className:"explanation",children:c("div",{children:[r("h3",{className:"tasktitle",children:"Was genau soll wiederholt werden?"}),c("p",{children:["Mit dem folgenden Code zeichnet der Laser zweimal die Abfolge:",r("br",{}),"Linke S\xE4ule (L), rechte S\xE4ule (R), mittlere S\xE4ule (M).",r("br",{}),"Also kurz gefasst: L-R-M-L-R-M.",r("br",{}),"Versuchen Sie zu erreichen, dass dia Abfolge stattdessen so lautet:",r("br",{}),"L-L-R-R-M."]})]})}),r(w,{config:{template:re,taskname:"bhcolumns",lineWidth:3,speed:40,color:"#8888ff",x:50,y:50,turningSpeed:3e8,mode:"python",backgroundImg:"bundeshaus_square.png",img:"none.svg",isFading:!0}}),r("div",{className:"explanation",children:c("div",{children:[r("h3",{className:"tasktitle",children:"Quadrat"}),r("p",{children:"Zeichnen Sie ein Quadrat (Seitenl\xE4nge 20 Einheiten) mit Hilfe einer for-Schleife."})]})}),r(w,{config:{template:oe,taskname:"square",lineWidth:3,x:40,y:60,color:"#000",backgroundImg:"birke.jpg",img:"glowRedPointer.svg"}}),r("div",{className:"explanation",children:c("div",{children:[c("h3",{className:"tasktitle",children:["Was bedeutet das ",r("dfn",{children:"i"})," in der for-Schleife?"]}),c("ul",{children:[c("li",{children:["Lassen Sie sich das ",r("dfn",{children:"i"})," bei jedem Durchlauf der Schleife mittels ",r("dfn",{children:"print(i)"})," anzeigen."]}),c("li",{children:["\xC4ndern Sie den forward-Befehl so ab, dass er um ",r("dfn",{children:"i"})," vorw\xE4rts geht statt um 10."]})]})]})}),r(w,{config:{template:ae,taskname:"spiral",x:50,y:50,color:"#ace",lineWidth:1,backgroundColor:"#333",backgroundImg:"none.svg",turningSpeed:3e8}}),r("div",{className:"explanation",children:c("div",{children:[r("h3",{className:"tasktitle",children:"Vielecke zeichnen"}),c("ul",{children:[r("li",{children:"Lassen Sie den Code laufen."}),r("li",{children:"\xDCberlegen Sie, was passiert, wenn Sie alle Vorkommen der Zahl 4 durch eine 5 ersetzen. Probieren Sie es dann aus."}),c("li",{children:["Definieren Sie nun auf Zeile 3 eine Variable ",r("dfn",{children:"N = 5"}),", und ersetzen Sie unten alle 5 duch N."]}),r("li",{children:"Probieren Sie verschiedene Werte f\xFCr N aus (z.B. 3, 6 und 8)."})]})]})}),r(w,{config:{template:le,taskname:"polygon",x:50,y:50,color:"#8ff",lineWidth:2,backgroundColor:"#333",backgroundImg:"none.svg",turningSpeed:3e8}}),r("div",{className:"explanation",children:c("div",{children:[r("h3",{className:"tasktitle",children:"Kreis zeichnen"}),r("p",{children:"Versuchen sie mit Hilfe einer for-Schleife einen Krais zu zeichnen (oder zumindest etwas, was m\xF6glichst \xE4hnlich wie ein Kreis aussieht)."})]})}),r(w,{config:{template:de,taskname:"circle",lineWidth:3,x:50,y:50,color:"#000",backgroundImg:"birke.jpg",img:"glowRedPointer.svg",turningSpeed:3e8}}),c("div",{className:"explanation",children:[r("h1",{children:"Let's Led"}),r("div",{children:"uhwui eui dfwe ihdf weu duiwe fui ehr fuhr"})]})]})})}V.render(r(k.StrictMode,{children:r(ce,{})}),document.getElementById("root"));
