(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{10:function(e,A,t){e.exports={menu:"styles_menu__187-e",profileImage:"styles_profileImage__3GMSM",profile:"styles_profile__26WC3",settings:"styles_settings__1JY56",nav:"styles_nav__3cBGm",navList:"styles_navList__2GFGc",navItem:"styles_navItem__2LzdE",navLink:"styles_navLink__3TCDp"}},14:function(e,A,t){e.exports={container:"styles_container__3U06u",products:"styles_products__2k94p"}},27:function(e,A,t){e.exports={main:"styles_main__2Mj8z",routes:"styles_routes__1lb0d"}},29:function(e){e.exports=JSON.parse('[{"id":1,"title":"Order 1","date":"2017-06-29 12:09:33","description":"desc","products":[{"id":1,"serialNumber":1234,"isNew":1,"photo":"pathToFile.jpg","title":"Product 1","type":"Monitors","specification":"Specification 1","guarantee":{"start":"2017-06-29 12:09:33","end":"2017-06-29 12:09:33"},"price":[{"value":100,"symbol":"USD","isDefault":0},{"value":2600,"symbol":"UAH","isDefault":1}],"order":1,"date":"2017-06-29 12:09:33"}]},{"id":2,"title":"Order 2","date":"2017-06-29 12:09:33","description":"desc","products":[{"id":2,"serialNumber":1234,"isNew":1,"photo":"pathToFile.jpg","title":"Product 1","type":"Monitors","specification":"Specification 1","guarantee":{"start":"2017-06-29 12:09:33","end":"2017-06-29 12:09:33"},"price":[{"value":100,"symbol":"USD","isDefault":0},{"value":2600,"symbol":"UAH","isDefault":1}],"order":2,"date":"2017-06-29 12:09:33"}]}]')},34:function(e,A,t){},35:function(e,A,t){},37:function(e,A,t){"use strict";t.r(A);var s=t(0),a=t.n(s),c=t(28),n=t.n(c),i=(t(34),t(35),t(15)),r=t(2),l=t(4),o=t(7),d=t.n(o),j=function(e){var A=new Date(e),t=String(A.getDate()).padStart(2,"0"),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][A.getMonth()],a=A.getFullYear();return"".concat(t," ").concat(s,", ").concat(a)},m=function(e){var A=new Date(e),t=String(A.getHours()).padStart(2,"0"),s=String(A.getMinutes()).padStart(2,"0");return"".concat(t,":").concat(s)},g=t(3),u=function(){var e=Object(s.useState)(""),A=Object(l.a)(e,2),t=A[0],a=A[1];return Object(s.useEffect)((function(){var e=Date.now();a(e)}),[]),Object(g.jsx)("header",{className:d.a.header,children:Object(g.jsxs)("div",{className:d.a.header__container,children:[Object(g.jsxs)("div",{className:d.a.logo_search,children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)("img",{className:d.a.logo,src:"data:image/jpeg;base64,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+UzRYYPSrIEdUr9OV0lOxiOarHMLeuv6A022FlFROyZXENuLldonyCLrGkELeNCbKD2zbwi9wToQZuiYV2UqYMKodQT5BF1YTdM0VTeoKk4cqp4hqwQASFYQQt24EEJ+iuIv6AxZ/EbBVyQo5ZOMT+Nu8ma79jIRY7mNliuOy5ohgt5XEZ2Brfi5UC3ZN4zq/wC5w1olxUm7z89mqZZypdkpZ/al13nn2jjbMKWupHhe6Ua/qaqGNgffv//EACcQAQACAgIBAwQCAwAAAAAAAAEAESExEEFRUGFxIDBgsaHBgZHR/9oACAEBAAE/IfyABao945LgxWo1cDuJi5tpBss16NROmc8FQwaX5jVTGFY4AKYWsEol4i7TrgcOeyvQxPRykjvo9ghD/I9GOjBxtLqXc/sPRTqxwuSjYS/huAqhTNShx+w9FN3HQ8tQcrPfaZi4WHXnjbj9h9KVGEh4CMFgs90+JYxVYkuDxu5diDBWBeI9dnPB7lnCXLSpFph0llJ6mU/wgnm0ITamAO9Q3nvuC6nw7iV5bxXuLE8yYce0hUve/YPqdw/1hiG6TRHS5ZhyP2H0/wAlxRd41InXsEuaIeJD59qKlFl0y3jBloR8HYwK5EKz8ggAGkJDDRHRcQwvlQYnovPcfSDB9k3U2mcqHmFRB4ZoiuQZS8HSQd8fsPp/mJ8gAIShL7JnE+QhSkj4ZUa0EXD1cCIK+CDqkq6lzd8o0dJusQaSBHyoJUUXgTtFQwwD70dkHVrqJSw1gmF4LxL/ANmE6BcUFF5H2KnSOBqi75jeBXjRw/LDqK3FouX2Fq8fVQSglcVcqblPBKrqUeOKCb5o8SpQ9cUeOKr7AKg2YuNgO6uPAkZ/RGU2jrbMipVZ28V+Z0PiGQAdHoldH3kdo7MPO3PXmBPf2vD29G0H33qLDpO+nkUNs9pu+ph1tP8AnpCQh1XPiWhCf9URXR1TUeGbNH57/9oADAMBAAIAAwAAABDzzzzzzzzzzzzzzzzzzzzzzzz/AGBfit888888888888888885jRQ1b88888888888888888qULTar888gOWMKEkCLsa888qNEGXr88HxWR7IxIa8RN888z4mbMZ88sMMMscM8sccc8888HCQq88888888888888888888d+88888888888888888888888888888888888888888//8QAHxEBAQEAAgIDAQEAAAAAAAAAAQARITEgQBBBUFFh/9oACAEDAQE/EPYXO5Dt+MDuEsP5YmyxOPFQOQE2OYTm/ihVLpuRx1v9E4cCw4xpzyN2vqePB6YRhDiwaojrb7CKN42LCwMA5jgfDJlyPMDItG29Nvyd3I4/CQBh6g9oL6j8n//EACURAQACAQMEAQUBAAAAAAAAAAEAETEhUbEQQEGhgSBQYXGRwf/aAAgBAgEBPxDuALVTOQ7Q/LM0/KUItMRoHsgOrc5gB0q4m8IoN+Oy5DmG8ZC6DPTe0k5nHUKHVv1BgYjIrC4iEwuOguG+kJOYTUK3609w0JH5g3qBvKG1raoIKtH1AUmPo5DmXL0NGFozmgk5nHX1n/IZ/kH9WxAc0lKHgxyL3t44m1RfyagN0EnhT/IwyvqAO9vnSJA82/MNI5S36CaUoXJCK0MuzC3VRLx4MdnjOu0dG2YoFsS003TwI7TA5VmqACj7T//EACkQAQACAgAFAwQDAQEAAAAAAAEAESExEEFRYXFQgaEgMJHwYLHB8dH/2gAIAQEAAT8Q/kCchbVREEZLFp8y85QwdHOo08I009rgEgrSejDDZQ6Jj/3gFFQIMnWOI6Bo8wBS67tx6JQhToNTFkeFV3uOKbGUIh/7zpot2vQybQ9k7B+OOzSVlMEeCXhPZn/KiFQDpdj0VtbZ1RFXbcFFg1hmm747/qweitXozbmd4qQJpBOTMXsHkwVCcZ3/AFYPRG5MsWGR8r8moRClfMTAZYzAk6vQ5QbIkRfDf9WD6XDsETliMzMA0RZ5oPLcSHSjHaskdsVrunpLJX0OxLLIBTIRG1Nlw7L8m5Xe/YmTVbPRqEFjjCrNaNmI9NVOdRqYgB3gjcxbcCC2JNiEDD2SkbYsI2oNxckvE/IaI248rNUpQjJ9hnaIizzmCdQ/MGkoAjPiwSVVBBQPTib/AKsH0/qOk+diC+QZZNHqvRA0BEmLa6iZjBSw7PFEoiSq9k3KmipqHK+0utoVYlqdnh/c+Fi2sDLUDAAYqFCFVVupkHTftKMOlCmLiUCJSQqrZDpLQuyZplY+w22CncTbSpTV+IQrHdge0+PL0B0DiZ3FkF478Rv+rB9JUQV0HiFbq6KmPyBU1DnlM4RtJaweyqwpgmosgtZTGpQ1FipKC1gHTMOa1PIJOngZvlL13RRyl6gisVxhTjFzAhog2OyOhWQh4/oJbjuc28GBEslF85W6gKVcboR2qTzCpol0G2I7cYqd/YZ3UxbvnwrxOHqQoICgOXD4cIMI2DbADTSqS7XIuJh5BXp+oBgDxDIAO4RCZB8kACgDxEDIMAaA9ogKQSf8aA0B4Jkul9alCZhoAe0QFIMACjh2v4gDQHgjsB88AGwD2IglMAKADt9hNKlBi+UY4eWmZyqsTGM30uILVlWxGhqDpB7UhekYhg+Npwf64M4b5hAywFB6IVFAs5RAEWh5PDlUeBb+eK0W114AqJkMh/x6L2hGupzB46xnTKsV4II5ETrHjASgO7GwgFqLPa+sc0Ne0H+npC6bkNS7iuqVX1lwp8CUAaU+LHAZYMX/AD3/2Q==",alt:""})}),Object(g.jsx)("input",{className:d.a.search,type:"search",placeholder:"Search"})]}),Object(g.jsxs)("div",{className:d.a.date__container,children:[Object(g.jsx)("p",{className:d.a.day__name,children:"Today"}),Object(g.jsxs)("div",{className:d.a.timeContainer,children:[Object(g.jsx)("p",{className:d.a.dayTime,children:j(t)}),Object(g.jsx)("img",{src:"",alt:""}),Object(g.jsx)("p",{className:d.a.dayTime,children:m(t)})]})]})]})})},h=t(10),O=t.n(h),Q=t.p+"static/media/profile.6caeb1ca.jpeg",p=t.p+"static/media/settings.e8935cc6.png",b=function(e){return e.COMING="/pages/coming/",e.GROUPS="/pages/groups/",e.PRODUCTS="/pages/products/",e.USERS="/pages/users/",e.SETTINGS="/settings/",e}({}),E=function(){var e=[{id:1,title:"\u041f\u0440\u0438\u0445\u0456\u0434",link:b.COMING},{id:2,title:"\u0413\u0440\u0443\u043f\u0438",link:b.GROUPS},{id:3,title:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0438",link:b.PRODUCTS},{id:4,title:"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456",link:b.USERS},{id:5,title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",link:b.SETTINGS}];return Object(g.jsxs)("div",{className:O.a.menu,children:[Object(g.jsxs)("div",{className:O.a.profileImage,children:[Object(g.jsx)("img",{className:O.a.profile,src:Q,alt:"Profile"}),Object(g.jsx)("img",{className:O.a.settings,src:p,alt:"Settings"})]}),Object(g.jsx)("nav",{className:O.a.nav,children:Object(g.jsx)("ul",{className:O.a.navList,children:e.map((function(e){return Object(g.jsx)("li",{className:O.a.navItem,children:Object(g.jsx)(i.b,{className:O.a.navLink,to:e.link,children:e.title})},e.id)}))})})]})},x=t(27),C=t.n(x),N=t(5),B=t(8),R=t.n(B),I=t(29),S=t(14),w=t.n(S),D=function(e){var A=e.orders,t=A.date,s=A.description,a=A.id,c=A.products,n=A.title;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:w.a.container,children:[Object(g.jsx)("h2",{className:w.a.title,children:n}),Object(g.jsxs)("div",{className:w.a.products,children:[Object(g.jsx)("p",{className:w.a.products__count,children:c.length}),Object(g.jsx)("p",{className:w.a.products__name,children:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"})]}),Object(g.jsx)("div",{className:w.a.date,children:t}),Object(g.jsxs)("div",{children:[s," ",a]})]})})},U=function(){var e=Object(s.useState)([I]),A=Object(l.a)(e,2),t=A[0],a=A[1];return Object(s.useEffect)((function(){return a((function(){return Object(N.a)(t)}))}),[]),Object(g.jsxs)("div",{className:R.a.container,children:["Coming Page",t&&t.map((function(e){return e.map((function(e){return Object(g.jsx)(D,{orders:e},e.id)}))}))]})},f=function(){return Object(g.jsx)("div",{className:R.a.container,children:"Groups Page"})},M=function(){return Object(g.jsx)("div",{className:R.a.container,children:"Products Page"})},L=function(){return Object(g.jsx)("div",{className:R.a.container,children:"Settings Page"})},v=function(){return Object(g.jsx)("div",{className:R.a.container,children:"Users Page"})},y=function(){return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(u,{}),Object(g.jsxs)("div",{className:C.a.main,children:[Object(g.jsx)(E,{}),Object(g.jsx)("div",{className:C.a.routes,children:Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{path:b.COMING,element:Object(g.jsx)(U,{})}),Object(g.jsx)(r.a,{path:b.GROUPS,element:Object(g.jsx)(f,{})}),Object(g.jsx)(r.a,{path:b.PRODUCTS,element:Object(g.jsx)(M,{})}),Object(g.jsx)(r.a,{path:b.SETTINGS,element:Object(g.jsx)(L,{})}),Object(g.jsx)(r.a,{path:b.USERS,element:Object(g.jsx)(v,{})})]})})]})]})},G=function(){return Object(g.jsx)("div",{className:"starter",children:Object(g.jsx)(y,{})})};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root"))},7:function(e,A,t){e.exports={header:"styles_header__2ky9S",header__container:"styles_header__container__1Tddj",logo_search:"styles_logo_search__2zNFX",logo:"styles_logo__2MBNh",search:"styles_search__3BBy-",date__container:"styles_date__container__3fsT-",day__name:"styles_day__name__1XTsb",timeContainer:"styles_timeContainer__1Nfjx",dayTime:"styles_dayTime__bwrTd"}},8:function(e,A,t){e.exports={container:"pages_container__2GfHc"}}},[[37,1,2]]]);
//# sourceMappingURL=main.80090529.chunk.js.map