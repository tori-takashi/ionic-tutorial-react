"use strict";(self.webpackChunkphoto_gallery=self.webpackChunkphoto_gallery||[]).push([[2081],{2081:function(e,t,r){r.r(t),r.d(t,{FilesystemWeb:function(){return l}});var n=r(7762),a=r(2982),i=r(5861),s=r(5671),c=r(3144),o=r(136),u=r(9388),h=r(7757),p=r.n(h);function d(e){var t=e.split("/").filter((function(e){return"."!==e})),r=[];return t.forEach((function(e){".."===e&&r.length>0&&".."!==r[r.length-1]?r.pop():r.push(e)})),r.join("/")}function f(e,t){e=d(e),t=d(t);var r=e.split("/"),n=t.split("/");return e!==t&&r.every((function(e,t){return e===n[t]}))}var l=function(e){(0,o.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).DB_VERSION=1,e.DB_NAME="Disc",e._writeCmds=["add","put","delete"],e}return(0,c.Z)(r,[{key:"initDb",value:function(){var e=(0,i.Z)(p().mark((function e(){var t=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this._db){e.next=2;break}return e.abrupt("return",this._db);case 2:if("indexedDB"in window){e.next=4;break}throw this.unavailable("This browser doesn't support IndexedDB");case 4:return e.abrupt("return",new Promise((function(e,n){var a=indexedDB.open(t.DB_NAME,t.DB_VERSION);a.onupgradeneeded=r.doUpgrade,a.onsuccess=function(){t._db=a.result,e(a.result)},a.onerror=function(){return n(a.error)},a.onblocked=function(){console.warn("db blocked")}})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dbRequest",value:function(){var e=(0,i.Z)(p().mark((function e(t,r){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(i,s){var c=e.transaction(["FileStorage"],n).objectStore("FileStorage"),o=c[t].apply(c,(0,a.Z)(r));o.onsuccess=function(){return i(o.result)},o.onerror=function(){return s(o.error)}}))})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"dbIndexRequest",value:function(){var e=(0,i.Z)(p().mark((function e(t,r,n){var i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=-1!==this._writeCmds.indexOf(r)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(s,c){var o=e.transaction(["FileStorage"],i).objectStore("FileStorage").index(t),u=o[r].apply(o,(0,a.Z)(n));u.onsuccess=function(){return s(u.result)},u.onerror=function(){return c(u.error)}}))})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getPath",value:function(e,t){var r=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",n="";return void 0!==e&&(n+="/"+e),""!==t&&(n+="/"+r),n}},{key:"clear",value:function(){var e=(0,i.Z)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:t=e.sent,r=t.transaction(["FileStorage"],"readwrite"),r.objectStore("FileStorage").clear();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"readFile",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=6;break}throw Error("File does not exist.");case 6:return e.abrupt("return",{data:n.content?n.content:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeFile",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n,a,i,s,c,o,u,h,d;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=t.recursive,e.next=5,this.dbRequest("get",[r]);case 5:if(!(i=e.sent)||"directory"!==i.type){e.next=8;break}throw Error("The supplied path is a directory.");case 8:return s=t.encoding,c=r.substr(0,r.lastIndexOf("/")),e.next=12,this.dbRequest("get",[c]);case 12:if(void 0!==e.sent){e.next=19;break}if(-1===(o=c.indexOf("/",1))){e.next=19;break}return u=c.substr(o),e.next=19,this.mkdir({path:u,directory:t.directory,recursive:a});case 19:return h=Date.now(),d={path:r,folder:c,type:"file",size:n.length,ctime:h,mtime:h,content:!s&&n.indexOf(",")>=0?n.split(",")[1]:n},e.next=23,this.dbRequest("put",[d]);case 23:return e.abrupt("return",{uri:d.path});case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"appendFile",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n,a,i,s,c,o,u,h;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=r.substr(0,r.lastIndexOf("/")),i=Date.now(),s=i,e.next=7,this.dbRequest("get",[r]);case 7:if(!(c=e.sent)||"directory"!==c.type){e.next=10;break}throw Error("The supplied path is a directory.");case 10:return e.next=12,this.dbRequest("get",[a]);case 12:if(void 0!==e.sent){e.next=19;break}if(-1===(o=a.indexOf("/",1))){e.next=19;break}return u=a.substr(o),e.next=19,this.mkdir({path:u,directory:t.directory,recursive:!0});case 19:return void 0!==c&&(n=c.content+n,s=c.ctime),h={path:r,folder:a,type:"file",size:n.length,ctime:s,mtime:i,content:n},e.next=23,this.dbRequest("put",[h]);case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteFile",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==e.sent){e.next=6;break}throw Error("File does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:if(0===e.sent.length){e.next=11;break}throw Error("Folder is not empty.");case 11:return e.next=13,this.dbRequest("delete",[r]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mkdir",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n,a,i,s,c,o,u,h;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.recursive,a=r.substr(0,r.lastIndexOf("/")),i=(r.match(/\//g)||[]).length,e.next=6,this.dbRequest("get",[a]);case 6:return s=e.sent,e.next=9,this.dbRequest("get",[r]);case 9:if(c=e.sent,1!==i){e.next=12;break}throw Error("Cannot create Root directory");case 12:if(void 0===c){e.next=14;break}throw Error("Current directory does already exist.");case 14:if(n||2===i||void 0!==s){e.next=16;break}throw Error("Parent directory must exist");case 16:if(!n||2===i||void 0!==s){e.next=20;break}return o=a.substr(a.indexOf("/",1)),e.next=20,this.mkdir({path:o,directory:t.directory,recursive:n});case 20:return u=Date.now(),h={path:r,folder:a,type:"directory",size:0,ctime:u,mtime:u},e.next=24,this.dbRequest("put",[h]);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rmdir",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,a,i,s,c,o,u,h,d,f;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=t.directory,i=t.recursive,s=this.getPath(a,r),e.next=4,this.dbRequest("get",[s]);case 4:if(void 0!==(c=e.sent)){e.next=7;break}throw Error("Folder does not exist.");case 7:if("directory"===c.type){e.next=9;break}throw Error("Requested path is not a directory");case 9:return e.next=11,this.readdir({path:r,directory:a});case 11:if(0===(o=e.sent).files.length||i){e.next=14;break}throw Error("Folder is not empty");case 14:u=(0,n.Z)(o.files),e.prev=15,u.s();case 17:if((h=u.n()).done){e.next=32;break}return d=h.value,f="".concat(r,"/").concat(d),e.next=22,this.stat({path:f,directory:a});case 22:if("file"!==e.sent.type){e.next=28;break}return e.next=26,this.deleteFile({path:f,directory:a});case 26:e.next=30;break;case 28:return e.next=30,this.rmdir({path:f,directory:a,recursive:i});case 30:e.next=17;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(15),u.e(e.t0);case 37:return e.prev=37,u.f(),e.finish(37);case 40:return e.next=42,this.dbRequest("delete",[s]);case 42:case"end":return e.stop()}}),e,this,[[15,34,37,40]])})));return function(t){return e.apply(this,arguments)}}()},{key:"readdir",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n,a,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(n=e.sent,""===t.path||void 0!==n){e.next=6;break}throw Error("Folder does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:return a=e.sent,i=a.map((function(e){return e.substring(r.length+1)})),e.abrupt("return",{files:i});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUri",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=8;break}return e.next=7,this.dbRequest("get",[r+"/"]);case 7:n=e.sent;case 8:return e.abrupt("return",{uri:(null===n||void 0===n?void 0:n.path)||r});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stat",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=8;break}return e.next=7,this.dbRequest("get",[r+"/"]);case 7:n=e.sent;case 8:if(void 0!==n){e.next=10;break}throw Error("Entry does not exist.");case 10:return e.abrupt("return",{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rename",value:function(){var e=(0,i.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!0));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"copy",value:function(){var e=(0,i.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!1));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestPermissions",value:function(){var e=(0,i.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"checkPermissions",value:function(){var e=(0,i.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_copy",value:function(){var e=(0,i.Z)(p().mark((function e(t){var r,a,s,c,o,u,h,d,l,x,v,y,b,k,w,m,g,R,q=this,Z=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Z.length>1&&void 0!==Z[1]&&Z[1],a=t.toDirectory,s=t.to,c=t.from,o=t.directory,s&&c){e.next=5;break}throw Error("Both to and from must be provided");case 5:if(a||(a=o),u=this.getPath(o,c),h=this.getPath(a,s),u!==h){e.next=10;break}return e.abrupt("return");case 10:if(!f(u,h)){e.next=12;break}throw Error("To path cannot contain the from path");case 12:return e.prev=12,e.next=15,this.stat({path:s,directory:a});case 15:d=e.sent,e.next=29;break;case 18:if(e.prev=18,e.t0=e.catch(12),(l=s.split("/")).pop(),x=l.join("/"),!(l.length>0)){e.next=29;break}return e.next=26,this.stat({path:x,directory:a});case 26:if("directory"===e.sent.type){e.next=29;break}throw new Error("Parent directory of the to path is a file");case 29:if(!d||"directory"!==d.type){e.next=31;break}throw new Error("Cannot overwrite a directory with a file");case 31:return e.next=33,this.stat({path:c,directory:o});case 33:v=e.sent,y=function(){var e=(0,i.Z)(p().mark((function e(t,r,n){var i,s;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=q.getPath(a,t),e.next=3,q.dbRequest("get",[i]);case 3:return(s=e.sent).ctime=r,s.mtime=n,e.next=8,q.dbRequest("put",[s]);case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),b=v.ctime?v.ctime:Date.now(),e.t1=v.type,e.next="file"===e.t1?39:"directory"===e.t1?51:86;break;case 39:return e.next=41,this.readFile({path:c,directory:o});case 41:if(k=e.sent,!r){e.next=45;break}return e.next=45,this.deleteFile({path:c,directory:o});case 45:return e.next=47,this.writeFile({path:s,directory:a,data:k.data});case 47:if(!r){e.next=50;break}return e.next=50,y(s,b,v.mtime);case 50:return e.abrupt("return");case 51:if(!d){e.next=53;break}throw Error("Cannot move a directory over an existing object");case 53:return e.prev=53,e.next=56,this.mkdir({path:s,directory:a,recursive:!1});case 56:if(!r){e.next=59;break}return e.next=59,y(s,b,v.mtime);case 59:e.next=63;break;case 61:e.prev=61,e.t2=e.catch(53);case 63:return e.next=65,this.readdir({path:c,directory:o});case 65:w=e.sent.files,m=(0,n.Z)(w),e.prev=67,m.s();case 69:if((g=m.n()).done){e.next=75;break}return R=g.value,e.next=73,this._copy({from:"".concat(c,"/").concat(R),to:"".concat(s,"/").concat(R),directory:o,toDirectory:a},r);case 73:e.next=69;break;case 75:e.next=80;break;case 77:e.prev=77,e.t3=e.catch(67),m.e(e.t3);case 80:return e.prev=80,m.f(),e.finish(80);case 83:if(!r){e.next=86;break}return e.next=86,this.rmdir({path:c,directory:o});case 86:case"end":return e.stop()}}),e,this,[[12,18],[53,61],[67,77,80,83]])})));return function(t){return e.apply(this,arguments)}}()}],[{key:"doUpgrade",value:function(e){var t=e.target.result;e.oldVersion,t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}]),r}(r(7991).Uw);l._debug=!0}}]);
//# sourceMappingURL=2081.6a8dfa0f.chunk.js.map