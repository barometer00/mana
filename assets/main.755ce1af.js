import{_ as m,u as p}from"./index.a8e80855.js";const C=""+new URL("logo.03d6d6da.png",import.meta.url).href;const f={setup(){const o=u=>new URL(Object.assign({"../assets/logo.png":C})[`../assets/${u}.png`],self.location).href,l=p(),r=()=>{l.updataIsCollapse()},e=VueRouter.useRouter();return{getImgSrc:o,handleCollapse:r,handleLoginOut:()=>{l.cleanMenu(),l.cleanToken(),l.cleanCurrentMenu(),l.cleanTabs(),e.push({name:"login"})},store:l}}},v={class:"container"},k={class:"l-content"},x=Vue.createTextVNode("\u9996\u9875"),w={class:"r-content"},b={class:"el-dropdown-link"},g=["src"],N=Vue.createTextVNode("\u4FEE\u6539\u5BC6\u7801"),B=Vue.createTextVNode("\u9000\u51FA");function y(o,l,r,e,_,u){const n=Vue.resolveComponent("Menu"),c=Vue.resolveComponent("el-icon"),a=Vue.resolveComponent("el-button"),t=Vue.resolveComponent("el-breadcrumb-item"),s=Vue.resolveComponent("el-breadcrumb"),d=Vue.resolveComponent("el-dropdown-item"),V=Vue.resolveComponent("el-dropdown-menu"),i=Vue.resolveComponent("el-dropdown");return Vue.openBlock(),Vue.createElementBlock("div",v,[Vue.createElementVNode("div",k,[Vue.createVNode(a,{size:"small",plain:"",onClick:e.handleCollapse},{default:Vue.withCtx(()=>[Vue.createVNode(c,{size:"20"},{default:Vue.withCtx(()=>[Vue.createVNode(n)]),_:1})]),_:1},8,["onClick"]),Vue.createVNode(s,{separator:"/",class:"bread"},{default:Vue.withCtx(()=>[Vue.createVNode(t,{to:{path:"/home"}},{default:Vue.withCtx(()=>[x]),_:1}),e.store.currentMenu?(Vue.openBlock(),Vue.createBlock(t,{key:0,to:e.store.currentMenu.path},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.store.currentMenu.label),1)]),_:1},8,["to"])):Vue.createCommentVNode("",!0)]),_:1})]),Vue.createElementVNode("div",w,[Vue.createVNode(i,null,{dropdown:Vue.withCtx(()=>[Vue.createVNode(V,null,{default:Vue.withCtx(()=>[Vue.createVNode(d,null,{default:Vue.withCtx(()=>[N]),_:1}),Vue.createVNode(d,{onClick:e.handleLoginOut},{default:Vue.withCtx(()=>[B]),_:1},8,["onClick"])]),_:1})]),default:Vue.withCtx(()=>[Vue.createElementVNode("span",b,[Vue.createElementVNode("img",{class:"img",src:e.getImgSrc("logo"),alt:""},null,8,g)])]),_:1})])])}const E=m(f,[["render",y],["__scopeId","data-v-66b2e6e5"]]);const R={setup(){const o=p(),l=o.menu;VueRouter.useRouter();const r=VueRouter.useRoute();return{noChildren:()=>l.filter(n=>!n.children),hasChildren:()=>l.filter(n=>n.children),store:o,handlerRoute:n=>{o.selectMenu(n)},route:r}}};function L(o,l,r,e,_,u){const n=Vue.resolveComponent("el-menu-item"),c=Vue.resolveComponent("el-sub-menu"),a=Vue.resolveComponent("el-menu");return Vue.openBlock(),Vue.createBlock(a,{class:"el-menu","background-color":"#545c64","text-color":"#fff",collapse:!e.store.isCollapse,"collapse-transition":!1,"default-active":e.route.fullPath,router:!0},{default:Vue.withCtx(()=>[Vue.withDirectives(Vue.createElementVNode("h3",null,"\u540E\u53F0\u7BA1\u7406",512),[[Vue.vShow,e.store.isCollapse]]),Vue.withDirectives(Vue.createElementVNode("h3",null,"\u540E\u53F0",512),[[Vue.vShow,!e.store.isCollapse]]),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.noChildren(),t=>(Vue.openBlock(),Vue.createBlock(n,{key:t.path,index:t.path,onClick:s=>e.handlerRoute(t)},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(t.icon),{class:"icons"})),Vue.createElementVNode("span",null,Vue.toDisplayString(t.label),1)]),_:2},1032,["index","onClick"]))),128)),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.hasChildren(),t=>(Vue.openBlock(),Vue.createBlock(c,{key:t.path,index:t.label},{title:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(t.icon),{class:"icons"})),Vue.createElementVNode("span",null,Vue.toDisplayString(t.label),1)]),default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.children,(s,d)=>(Vue.openBlock(),Vue.createBlock(n,{key:d,index:s.path,onClick:V=>e.handlerRoute(s)},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(s.icon),{class:"icons"})),Vue.createElementVNode("span",null,Vue.toDisplayString(s.label),1)]),_:2},1032,["index","onClick"]))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["collapse","default-active"])}const $=m(R,[["render",L],["__scopeId","data-v-60c39c69"]]);const M={setup(){const o=p(),l=VueRouter.useRouter(),r=VueRouter.useRoute();return{changeMenu:u=>{l.push({name:u.name}),o.selectMenu(u)},handleClose:(u,n)=>{let c=o.tabsList.length-1;o.closeTab(u),u.name===r.name&&(n===c?l.push({name:o.tabsList[n-1].name}):l.push({name:o.tabsList[n].name}))},store:o}}},T={class:"tags"};function D(o,l,r,e,_,u){const n=Vue.resolveComponent("el-tag");return Vue.openBlock(),Vue.createElementBlock("div",T,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.store.tabsList,(c,a)=>(Vue.openBlock(),Vue.createBlock(n,{key:c.path,closable:c.name!="home","disable-transitions":!1,effect:o.$route.name===c.name?"dark":"plain",onClick:t=>e.changeMenu(c),onClose:t=>e.handleClose(c,a)},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(c.label),1)]),_:2},1032,["closable","effect","onClick","onClose"]))),128))])}const h=m(M,[["render",D],["__scopeId","data-v-18a61146"]]);const S=Vue.defineComponent({components:{commonHeader:E,commonAside:$,commonTab:h,CommonTab:h},setup(){return{store:p()}}}),I={class:"common-layout"};function F(o,l,r,e,_,u){const n=Vue.resolveComponent("common-aside"),c=Vue.resolveComponent("el-aside"),a=Vue.resolveComponent("common-header"),t=Vue.resolveComponent("el-header"),s=Vue.resolveComponent("common-tab"),d=Vue.resolveComponent("router-view"),V=Vue.resolveComponent("el-main"),i=Vue.resolveComponent("el-container");return Vue.openBlock(),Vue.createElementBlock("div",I,[Vue.createVNode(i,null,{default:Vue.withCtx(()=>[Vue.createVNode(c,{width:o.store.isCollapse?"180px":"64px"},{default:Vue.withCtx(()=>[Vue.createVNode(n)]),_:1},8,["width"]),Vue.createVNode(i,null,{default:Vue.withCtx(()=>[Vue.createVNode(t,null,{default:Vue.withCtx(()=>[Vue.createVNode(a)]),_:1}),Vue.createVNode(V,null,{default:Vue.withCtx(()=>[Vue.createVNode(s),Vue.createVNode(d)]),_:1})]),_:1})]),_:1})])}const z=m(S,[["render",F],["__scopeId","data-v-46fa54c0"]]);export{z as default};
