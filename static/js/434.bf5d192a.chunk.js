"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[434],{3434:(s,e,r)=>{r.r(e),r.d(e,{default:()=>W});var o=r(4420),a=r(2791);const l="User_wrapper__iAd3t",n="User_leftside__vedO0",t="User_avatar__hYqdU",i="User_button__xMnbB",g="User_rightside__ms0an",c="User_leftsideWrapper__RK0R2",p="User_rightsideWrapper__vyyAt",u="User_fullname__IMr8t",h="User_city__rgFSd",d="User_country__lQsEq",_="User_status__suuo8";var P=r(7297),f=r(1087),m=r(184);const w=s=>{let{id:e,avatar:r,followed:o,unfollow:a,followingInProgress:w,follow:U,name:x,status:j,country:C,city:v}=s;return(0,m.jsxs)("div",{className:l,children:[(0,m.jsxs)("div",{className:n,children:[(0,m.jsx)(f.OL,{to:"/Profile/"+e,children:(0,m.jsx)("img",{src:null!=r?r:P,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:t})}),(0,m.jsx)("div",{children:o?(0,m.jsx)("button",{disabled:w.some((s=>s===s)),className:i,onClick:()=>{a(e)},children:"Unfollow"}):(0,m.jsx)("button",{disabled:w.some((s=>s===s)),className:i,onClick:()=>{U(e)},children:"Follow"})})]}),(0,m.jsxs)("div",{className:g,children:[(0,m.jsxs)("div",{className:c,children:[(0,m.jsx)("span",{className:u,children:x}),(0,m.jsx)("span",{className:_,children:j})]}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("span",{className:d,children:C}),(0,m.jsx)("span",{className:h,children:v})]})]})]})},U="Users_wrapper__hQ7ch",x="Users_title__zeF-0",j="Users_usersWrapper__9ERnG",C="Users_button__Bfn0t";var v=r(5521);const N="Paginator_paginator__X3yEB",F="Paginator_selectedPage__2h51I";const S=s=>{let{totalUsersCount:e,pageSize:r,onPageChange:o,currentPage:a}=s,l=Math.ceil(e/r),n=[];for(let t=1;t<=l;t++)n.push(t);return(0,m.jsx)("div",{className:N,children:n.map((s=>1===s||s===l||s>=a-2&&s<=a+2?(0,m.jsx)("span",{className:a===s&&F,onClick:()=>{o(s)},children:s},s):s===a-3||s===a+3?(0,m.jsx)("div",{children:"... "},s):null))})};const b=s=>{let{totalUsersCount:e,pageSize:r,onPageChange:o,currentPage:a,isFetching:l,users:n,follow:t,unfollow:i,followingInProgress:g,toggleFollowingProgress:c}=s;return(0,m.jsxs)("div",{className:U,children:[(0,m.jsx)("h3",{className:x,children:"Users"}),(0,m.jsx)(S,{totalUsersCount:e,pageSize:r,onPageChange:o,currentPage:a}),l?(0,m.jsx)(v.Z,{}):null,(0,m.jsx)("div",{className:j,children:n.map((s=>(0,m.jsx)(w,{follow:t,unfollow:i,id:s.id,avatar:s.photos.small,followed:s.followed,name:s.name,status:s.status,followingInProgress:g,toggleFollowingProgress:c},s.id)))}),(0,m.jsx)("button",{className:C,children:"Show more"})]})};var z=r(2338),I=r(1154);const k=s=>s.usersPage.users,y=s=>s.usersPage.totalUsersCount,R=s=>s.usersPage.pageSize,M=s=>s.usersPage.currentPage,q=s=>s.usersPage.isFetching,B=s=>s.usersPage.followingInProgress;class E extends a.Component{constructor(){super(...arguments),this.onPageChange=s=>{this.props.getUsersCurrentPage(s,this.props.pageSize)}}componentDidMount(){this.props.getUsersFirstRrender(this.props.currentPage,this.props.pageSize)}render(){return(0,m.jsx)(b,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress})}}const W=(0,I.qC)((0,o.$j)((s=>({users:k(s),totalUsersCount:y(s),pageSize:R(s),currentPage:M(s),isFetching:q(s),followingInProgress:B(s)})),{follow:z.ZN,unfollow:z.fv,toggleFollowingProgress:z.ZH,getUsersFirstRrender:z.HV,getUsersCurrentPage:z.ad}))(E)}}]);
//# sourceMappingURL=434.bf5d192a.chunk.js.map