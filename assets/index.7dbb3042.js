import{_ as u}from"./index.c247c6ee.js";const d=Vue.defineComponent({props:{data:{type:Object,required:!0,default:()=>({title:"",tags:[],options:[]})}},setup(){return{colorInit:Vue.computed(()=>n=>{const s=[{color:"#57c05d",tag:"\u65B0\u589E"},{color:"#c00000",tag:"\u7D27\u6025"}].find(l=>l.tag===n);return s&&s.tag?s.color:"#67a4dc"})}}}),i={class:"item"},p={class:"title"},_={class:"tags"},V={class:"options"};function m(e,n,o,s,l,a){return Vue.openBlock(),Vue.createElementBlock("div",i,[Vue.createElementVNode("div",p,[Vue.createElementVNode("div",_,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.data.tags,(t,c)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"tag",key:c,style:Vue.normalizeStyle({background:e.colorInit(t)})},Vue.toDisplayString(t),5))),128))]),Vue.createTextVNode(" "+Vue.toDisplayString(e.data.name),1)]),Vue.createElementVNode("div",V,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.data.options,(t,c)=>(Vue.openBlock(),Vue.createElementBlock("p",{key:c},Vue.toDisplayString(t),1))),128))])])}const k=u(d,[["render",m],["__scopeId","data-v-6b713016"]]);const g=Vue.defineComponent({components:{Item:k},props:{data:{type:Object,default:()=>({name:"",children:[]})}},setup(e){const n=Vue.ref({});return Vue.onMounted(()=>{n.value.list=e.data,new Sortable(n.value,{group:"shared",animation:150,ghostClass:"blue-background-class",onEnd:function(o){const s=o.pullMode,l=o.oldIndex,a=o.newIndex;let t=o.target.list.children,c=o.to.list.children;if(s)c.splice(a,0,t[l]),t.splice(l,1);else{const r=t[l];t[l]=t[a],t[a]=r,console.log(t[0])}}})}),{dom:n}}}),f={class:"block"},B={class:"header"},y={class:"num"},$={class:"list",ref:"dom"};function h(e,n,o,s,l,a){var c;const t=Vue.resolveComponent("Item");return Vue.openBlock(),Vue.createElementBlock("div",f,[Vue.createElementVNode("div",B,[Vue.createElementVNode("span",y,Vue.toDisplayString((c=e.data.children)==null?void 0:c.length),1),Vue.createElementVNode("div",null,Vue.toDisplayString(e.data.name),1)]),Vue.createElementVNode("div",$,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.data.children,r=>(Vue.openBlock(),Vue.createBlock(t,{key:r.id,data:r},null,8,["data"]))),128))],512)])}const v=u(g,[["render",h],["__scopeId","data-v-b89664af"]]);const E=Vue.defineComponent({components:{Block:v},setup(){let e=Vue.ref([]);const{proxy:n}=Vue.getCurrentInstance();return(async()=>{let s=await n.$api.getWorkList();e.value=s.list})(),{list:e}}}),b={class:"layout-container-table"},I={class:"list"};function L(e,n,o,s,l,a){const t=Vue.resolveComponent("Block");return Vue.openBlock(),Vue.createElementBlock("div",b,[Vue.createElementVNode("div",I,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.list,(c,r)=>(Vue.openBlock(),Vue.createBlock(t,{key:r,data:c},null,8,["data"]))),128))])])}const x=u(E,[["render",L],["__scopeId","data-v-da3bf6f5"]]);export{x as default};
