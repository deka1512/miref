import Aura from '@primevue/themes/aura'
export default defineNuxtConfig({
 compatibilityDate:'2025-09-01', devtools:{enabled:true}, srcDir:'app/',
 modules:['@primevue/nuxt-module','@pinia/nuxt'],
 css:['primeicons/primeicons.css','~/assets/css/main.css'],
 vite:{plugins:[(await import('@tailwindcss/vite')).default()]},
 primevue:{options:{ripple:true,theme:{preset:Aura,options:{prefix:'p',darkModeSelector:'.dark'}}}},
 runtimeConfig:{directusToken:'',public:{directusUrl:'',siteUrl:'https://miref.org'}},
 app:{head:{htmlAttrs:{lang:'fr'},title:'MIREF — Église Miref RDC',titleTemplate:'%s | MIREF',meta:[{name:'description',content:'MIREF, une communauté de foi, d’amour et de transformation en République démocratique du Congo.'},{name:'theme-color',content:'#21142f'}],link:[{rel:'preconnect',href:'https://images.unsplash.com'},{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap'}]}},
 nitro:{preset:'node-server'},typescript:{strict:true}
})