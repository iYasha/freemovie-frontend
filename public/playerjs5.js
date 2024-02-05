//	Playerjs.com 19.6.1
//	03.02.2024 11:43:46
//	API - https://playerjs.com/docs/q=api


function mapQualityStream(streams) {
    return streams.map((stream) => {
        return '[' + stream.quality + ']' + stream.streams.hls;
    }).join(',');
}

function getStreamUrl(
    movie_id,
    tv_series_id,
    translator_hash,
    host,
    authToken,
    season = 1,
    episode = 1,
) {
    let requestUrl = null;
    if (movie_id !== null) {
        requestUrl = host + '/api/v1/movies/' + movie_id + '/stream/?translator_hash=' + translator_hash;
    }
    if (tv_series_id !== null) {
        requestUrl = host + '/api/v1/tv-series/' + tv_series_id + '/stream/?translator_hash=' + translator_hash + '&season_no=' + season + '&episode_no=' + episode;
    }
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', authToken);
        xhr.send();
        const resp_json = JSON.parse(xhr.responseText);
        const player = window.player;
        let subtitles = resp_json.data.subtitles;
        if (player) {
            player.api('subtitle', subtitles);
        }
        const stream = resp_json.data.streams;
        return mapQualityStream(stream);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}


eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('if(!1V.5j){B 5j=[];B eU}if(1V[\'Ju\']){1G(Ju,1)};E F1(2W){B o={1E:P,mC:[],ub:[],kD:\'LO\',NA:Aj,Oe:Ai,8J:\'19.6.1\',g1:[\'8Y\',\'\'],kN:\'\',2e:P,8l:P,as:P,Oc:P,dQ:P,6e:P,9K:P,9n:P,u:\'#Ob#O9#O8#O7#O1#O0#NZ#NY#NP#KJ#MC#Nc#N0#N1#N2#N4#N7#N8#Ng#Nh#Nj#Nk#N9#MU#KJ#MT#Mw#Mx#My#MF#MK#ML#MN#MR#NX#O6#O4#Nq\',u2:\'\',u3:\'\',u4:\'\',u5:\'\',u6:\'\',u7:\'\',u8:\'\',u9:\'\',Nr:\'\',y:\'xx??x?=xx????=\',p:\'\',Ns:-1,yh:"Kg",ht:"//Kg.8e",7n:[],dt:H,pr:H,ga:P,ab:P,iM:[],Nt:P,dT:\'//.9s//\',rd:0,2G:[],7u:[],a0:[],3k:[],q5:[],9Z:0,8Q:[],nq:0,tH:P,6m:P,1A:P,v7:P,8E:P,ni:\'<Kn>\',iH:\'</Kn>\',9j:1V.c8.17<2p&&1V.c8.1d<2p,yG:[],NJ:[],5G:{\'1Q\':1,\'LI\':1,\'dW\':1,\'iy\':1,\'sK\':0},aq:[],rn:0,dR:0,5Q:P,5k:P,fr:P,pZ:P,LT:[],bx:P,cQ:0,kG:P,uH:1N,kl:1N,qV:P,Ax:E(x){B a;J a},Ly:0,qs:4w,4W:P,eE:P,yQ:22.yQ,d:8y.xo,hO:8y.xo,9y:8y.9y,cr:8y.9y.I("cr")==0,Og:{},vE:\'Mp-Aw.8e/Aw.js\',fd:["Ax","AK"],6i:[],M2:[],M8:[],hT:1,np:[],AK:E(x,y,z){B a;J a},1b:0,n8:0,5o:P,dk:-1,aj:3,Mn:0,t6:0,a9:0,3N:{x:1,y:1,x0:1,y0:1},de:["kW","kY","kU","os","oj","oe","rK","op","eB","e4","rP","rQ"],mR:["LC","LK","LQ","NM"],dH:0,NF:0,tJ:0,Ei:0,dA:0,F3:[],cM:[\'7x\',\'dy\',\'nP\',\'6N\'],NE:[],nS:H,sZ:[],qC:0,ws:"w"+"s",pf:P,nf:[P,P,P]};B gh={V:{w:20,h:20,1i:"-",Od:"-",a:1,7l:-1,1t:"3E",1J:"",1Q:1,f5:-1,b8:0,2B:1,1r:"",1F:"",3O:"O2",es:12,l9:0,1m:"S",2M:"0 3 0 3",ar:"0 0 0 0",2x:1,hv:"0 0 0 0",NV:0,kO:1,bg:0,ql:0,H2:0,4u:1,8X:-1,4k:"46",aF:-1,gR:"0 0 0 0",kQ:-1,kP:"3E",aN:-1,my:-1,6h:"1S",3Z:"v5",2B:0,ke:"46",jA:0.7,xQ:0,yr:"3E",jU:"3 5 3 5",MV:"0 0 0 0",MQ:1,yx:"na-n9",yA:11,xN:0,2V:"",B3:5,B6:0,3c:0,MG:2,MA:2,Kh:0.2,Kd:0,K6:0.1,eF:0,Jy:"Ne",oP:1,Jr:5,JT:"46",Kp:"3E",J8:"3E",JY:1,GS:1,ya:1,6P:0,3J:0,fi:20,eu:"<2g 17=\'20\' 1d=\'20\'><g><e0 ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 5h=\'#eH\'/></g></2g>",wz:1,pL:-1,kk:0,pJ:1,yv:-1,N5:0.1,ho:0,3m:"",HN:0,HW:"v5",3h:"",HA:oy,Hv:oy,Jc:0,6c:0,5R:"3E",KR:0,KQ:"46",Js:9,zd:"0 0 10 0",y5:"0 0 0 0",KX:0}};E ED(){J H;o.EC=H}E cN(s){if(s.I(\'.\')==-1){s=s.1n(1);s2=\'\';W(i=0;i<s.U;i+=3){s2+=\'%u0\'+s.6Y(i,i+3)}s=MZ(s2)}J s};E DL(){if(o.u!=\'\'){v=9W(v,5u.7c(eR(o.u)))}if(2W.I("#"+v.an)==0){3o{2W=5u.7c(o[o.fd[0]](2W))}2U(e){}}F{if(2W.I("#"+v.cF)==0){3o{2W=5u.7c(o[o.fd[1]](2W))}2U(e){}}}}E 7L(x,y){}E oW(y,1h){}B yt=E(){B 9e=1O("1X");o.1U.1M(9e);O(9e,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1d\':30,\'2i-1t\':v.Cb,\'1B\':v.BU,\'2k\':\'1S\'});B x=1O("1X");o.1U.1M(x);O(x,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1t\':v.Ca,\'3O-3P\':v.BT,\'2Q\':(v.C0+\'px \'+v.BW+\'px\'),\'2k\':\'1S\'});G.9s=E(1F,n){x.1R=1F;5K(x);O(9e,{\'1d\':x.2S,\'2k\':\'4n\'});9e.C.4S="MX";W(B i=0;i<x.a3(\'a\').U;i++){x.a3(\'a\')[i].C.1t=\'#eH\'}if(n){1G(G.n2,2p*n)}x.C.4S="MY"};G.n2=E(){3i(x);3i(9e)}};2n(E(w,i,s,e){B ap=0;B 9I=0;B h7=0;B eD=[];B dn=[];nw(H){if(ap<5)dn.2L(w.6L(ap));F if(ap<w.U)eD.2L(w.6L(ap));ap++;if(9I<5)dn.2L(i.6L(9I));F if(9I<i.U)eD.2L(i.6L(9I));9I++;if(h7<5)dn.2L(s.6L(h7));F if(h7<s.U)eD.2L(s.6L(h7));h7++;if(w.U+i.U+s.U+e.U==eD.U+dn.U+e.U)1k}B E3=eD.x7(\'\');B Ef=dn.x7(\'\');9I=0;B xf=[];W(ap=0;ap<eD.U;ap+=2){B vD=-1;if(Ef.bF(9I)%2)vD=1;xf.2L(6t.uB(2N(E3.1n(ap,2),36)-vD));9I++;if(9I>=dn.U)9I=0}J xf.x7(\'\')}(\'ME\',\'MI\',\'MM\',\'NW\'));B v={1v:0,uE:0,n5:"#46",2R:0,yK:1,8q:"#46",4k:"#3E",6P:0,e6:1,oq:1,3p:0,tN:1,eX:0,aB:1,1w:{Oa:0,1t:"46",a:"0.4",h:34,l6:1,1p:1,jm:1,dN:0,jc:3,9C:0,rV:3,6h:"1S",1m:"2J",2M:"0 0 0 0",6P:0,hD:0,7X:\'\'},1W:{on:1,f:1,r:1,m:1,4f:5,wB:"4f",96:1,xd:"1L",ot:0,FT:0,tn:1,hX:0.2},Y:{4k:"46",aF:"o9",4u:0.9,8X:-1,1m:"1c",2M:"0 0 0 0",2Q:"7 15 7 15",1t:"3E",3O:"CP, E2, na-n9",es:12,5E:10,l9:0,5R:"CY",rG:1,8q:"Of",a:1,7l:-1,NH:0,NI:100,Nn:177,LU:1,hy:1,qY:"Mh",oE:"46",hQ:-1,M9:-1,qU:0,7a:3,hm:16,IQ:"M5",6P:0,iB:1,lL:1,lq:"3E",zm:0,zj:"46",ID:1,IC:0,Hx:"o9",lK:0,i5:4w,dv:0,8f:0,Hs:0,Hq:0,gA:1,3H:0,hE:50,sr:0,lw:1,dF:170,qe:0,xU:"o9",ys:"0 0 0 0",jT:30,8q:"Dx"},1j:{4k:"46",aF:"LA",4u:0.7,8X:-1,3O:"CP, E2, na-n9",1m:"2J-2l",2M:"0 0 0 0",2Q:"7 10 7 15",1t:"3E",es:12,hm:16,5E:10,l9:0,SQ:"3E",5R:"CY",a:1,1Q:5,7l:-1,sF:1,7a:3,iB:1,lL:1,lq:"3E",lK:0,i5:4w,6P:0,SM:1,SL:"5v",4V:1,SK:"8c",SF:1,T0:"28",Te:0,Tp:"7f",Tj:0,Ti:"5q",jT:30,8q:"Dx"},L5:{1m:"2J-2l",2M:"0 10 50 0"},1L:0.8,zo:1,pu:1,9f:0,5U:0,Cv:1,5B:0,4R:0,J9:0,Jm:0,3n:0,uk:1,m9:0,wE:0,wI:0,kh:\',\',hI:\';\',dr:\'//\',Jf:1,jn:\'[\',eK:\']\',gP:\'5h\',lm:1,lz:-1,uJ:0,Th:\'20 0 0 20\',Tg:\'1f-1c\',Tf:100,T9:100,T5:-1,uR:0,AW:1,Cb:"qi",Ca:"3E",C0:5,BW:10,BU:1,BT:10,nq:0,z9:1,uM:1,fY:1,5f:\'S2\',wK:0,i1:\'7b\',hG:1,JA:0,Ls:0,GQ:0,9r:1,cA:1,GF:5,8M:0,BR:1,s0:0,tc:5,S1:0,RZ:0,RM:0,qc:1,AN:1,GT:0,F6:0,S9:0,w6:1,oZ:0,3b:"AI",RY:H6,ob:\'100%\',ga:0,H3:{8F:1,2r:0,nX:0,4v:0,1E:1,uY:0,v6:0,v8:0,Sa:0,So:0,Sy:0},Kw:{8F:1,2r:0,nX:0,4v:0,1E:1,uY:0,v6:0,v8:0},Su:100,DA:1,fA:1,pk:14,kW:\'100%\',Kk:1,pc:20,Ll:1,oj:0.7,K9:2,sM:3,eB:10,kY:"3E",kU:"G2",os:"46",oe:0,rK:0,op:cs,xW:1,e4:0,qS:1,9J:1,Ss:1,Sm:0.3,Sl:3,Sj:4,Si:5,Sh:0,Sg:Tr,UC:AL,CI:0,Ce:1,tu:1,hu:1,DZ:1,z2:0,A0:160,zt:90,zR:0,zM:1,zH:"o9",zT:0,zK:1,an:\'2\',cF:\'3\',UB:10,Uu:1,Ut:1,Uo:-1,UZ:1,V9:1,V7:-1,V2:0,V1:1,V0:0,UN:1,UX:0,UW:1,UV:0,UU:1,UT:0,US:1,UQ:0,UP:1,UO:0,tM:1,UM:0,Uj:0,TS:1,Ui:0,TP:1,TN:"#3E",TM:"#46",TL:"#46",TK:"#3E",TJ:"#46",TG:"#3E",Tt:"#46",TA:"#3E",Oh:"#46",Uh:"#3E",Ug:"#46",Uf:"#3E",Ue:1,Ud:0,Ua:1,U8:0.5,U3:"#3E",U2:"#46",U1:1,TX:1,TU:1,Ts:1,RK:1,Q4:10,RJ:-1,Pz:1,Py:1,Pm:0,nL:0,Pj:"or",Q1:"or",PZ:"or",PX:"or",PW:"50%",PU:-1,PT:0,PS:-1,PQ:0,PO:0,D6:1,D5:0,Dh:30,PM:2,Bx:10,CD:0,PL:30,GC:1,Gt:1,6z:0,2h:{on:0,4k:"46",2R:0,ak:2,8q:"46",1m:"1c",2M:"20 0 0 20",17:150,1p:0}};v.cE="ru";B 7R=E(is){B i;B C=[];B f=[];B ae=[];B PK=[];B 6l=[];B 8V=[];B 1Y=[];B f2=[];B gN=[];B PJ=[];B 5d=[];B 5H=[];B 62=[];B dD=[];B eb=P;B 2C;B cm=-1;B 5a=H;B 1e=is;B 6x=is=="1j";B Y;B 5U=[];B dp=[];B mV;B 3a=\'\';B dG=\'\';B 6j=-1;B fG=P;B PI=P;B mF=P;B m8=P;B hk=P;B iw=P;B lr;B za;B lV;B jc;B tj;B l7=[];B 5S=[];B mP=0;B aJ=0;B 6y;B 6C="2x";B aX=(o.1l.2m?"hb":"fF");B aR=(o.1l.2m?"h9":"fE");C=9W(C,v[is]);C=4z(v[is],\'2M\',\'2M\');C=4z(v[is],\'ar\',\'ar\');C=4z(v[is],\'aV\',\'aV\');if(C.qe==0){C.ys="0 0 0 0"}C=4z(v[is],\'gR\',\'ys\');C=4z(v[is],\'2Q\',\'2Q\');C.mE=0;B iK="<2g C=\'2M-1f:cv\' 17=\'"+C.7a*2+"\' 1d=\'"+(C.7a*2>C.5E?(C.7a*2):C.5E)+"\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'><g><e0 ry=\'"+(C.7a)+"\' rx=\'"+C.7a+"\' cy=\'"+(C.7a*2>C.5E?(C.7a):(C.5E/2))+"\' cx=\'"+C.7a+"\' 5h=\'#"+C.5R+"\'/></g></2g>";B GZ="<2g 17=\'"+C.7a*2+"\' 1d=\'"+C.5E+"\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\' ><g><e0 ry=\'"+(C.7a-1)+"\' rx=\'"+(C.7a-1)+"\' cy=\'"+(C.5E/2+2)+"\' cx=\'"+C.7a+"\' 3F=\'#"+C.5R+"\' 3F=\'1\' 5h-1B=\'0\'/></g></2g>";B xx=4;B IJ="<4Q C=\'2k:bN-4n;\'><2g 17=\'"+(xx+2)+"\' 1d=\'"+(C.5E)+"\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'><g><2E x1=\'1\' y1=\'"+(C.5E/2-xx)+"\' x2=\'"+xx+"\' y2=\'"+(C.5E/2)+"\' 3F=\'#"+C.1t+"\' 3F-17=\'1\' 3F-cH=\'4a\'/><2E x1=\'"+xx+"\' y1=\'"+(C.5E/2)+"\' x2=\'1\' y2=\'"+(C.5E/2+xx)+"\' 3F=\'#"+C.1t+"\' 3F-17=\'1\' 3F-cH=\'4a\'/></g></2g></4Q>";B hL="<4Q C=\'2k:bN-4n;\'><2g 17=\'"+(xx+10)+"\' 1d=\'"+(C.5E+1)+"\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\' C=\'io:1c\'><g><2E x1=\'1\' y1=\'"+(C.5E/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.5E/2-xx+2)+"\' 3F=\'#"+C.1t+"\' 3F-17=\'1\' 3F-cH=\'4a\' /><2E x1=\'1\' y1=\'"+(C.5E/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.5E/2+xx+2)+"\' 3F=\'#"+C.1t+"\' 3F-17=\'1\' 3F-cH=\'4a\'/></g></2g></4Q>";B 8q=4E(2q(C.8q,\'3E\'),2q(C.IP,1));B 1K=1O("1X");o.1U.1M(1K);O(1K,{\'5l\':\'3c\',\'2k\':\'4n\',\'1B\':0,\'2R-6M\':C.6P});if(C.kQ==1){O(1K,{"2R":"41 6E "+3A(2q(C.kP,\'3E\'))})}B kB={};W(B i in o.5G){if(o.5G.2u(i)){kB[o.5G[i]]=-1}}if(6x){1K.C.4S=Pb}F{1K.C.4S=99}B 1a=1O("1X");if(o.9j){C.KI>0?C.es=C.KI:\'\';C.KK>0?C.dF=C.KK:\'\';C.Lv>0?C.hE=C.Lv:\'\'}O(1a,{\'1m\':\'eP\',\'1f\':0,\'1c\':0,\'2k\':\'4n\',\'17\':\'100%\',\'2Q-1f\':C.9X,\'2Q-2l\':C.7j+(6x&&C.3H==1?0:20),\'2Q-2J\':C.a4,\'2Q-1c\':C.7z,\'1t\':C.1t,\'3O-3P\':C.es*2q(v.7w,1),\'3O-dz\':eQ(C.3O),\'kd-eZ\':C.l9+\'px\'});if(o.1l.7g){O(1a,{\'9L-17\':JK})}if(is!=="Y"){O(1a,{\'5l-y\':(6x&&C.3H==1?\'3c\':\'6O\')})}1K.1M(1a);if(C.3H!=1){B 7d=1O("1X");O(7d,{\'2k\':\'4n\',\'5l\':\'3c\',\'2R-6M\':C.6P});if(C.3H!=1){if(o.1l.7g){O(7d,{\'9L-17\':JK})}}1a.1M(7d)}4i(1a,{id:(v.id+"4B"+is)});if(is=="Y"){if(C.3H==1){O(1a,{\'17\':\'100%\',\'2Q-2l\':C.7j,\'2Q-2J\':C.a4+20,\'5l-x\':\'6O\',\'5l-y\':\'3c\',\'bv-96\':\'dI\'});O(1K,{\'17\':o.2Y-C.4o-C.4s,\'1d\':C.hE+C.9X+C.a4})}F{O(1a,{\'5l-y\':\'6O\',\'5l-x\':\'3c\'});if(C.Ht==1){mG()}}if(C.qe==1){O(1K,{\'2i-1t\':C.xU})}if(v.Y.3e==1){3i(1K)}}if(C.iB==1){B 5N=1O("1X");B aS=4E(C.qe==1?C.xU:C.4k);if(C.3H==1){hU(5N,\'to 2l, 5p(\'+aS+\',\'+(C.4u*1+0.3)+\'), 5p(\'+aS+\',0)\',\'1c\',12,5,7,10,7,10,12,15);5N.1z(6C,Hh)}F{hU(5N,\'to 2J, 5p(\'+aS+\',\'+(C.4u*1+0.3)+\'), 5p(\'+aS+\',0)\',\'1f\',5,12,10,7,10,7,15,12);5N.1z(6C,Hm)}B 5V=1O("1X");if(C.3H==1){hU(5V,\'to 1c, 5p(\'+aS+\',\'+(C.4u*1+0.3)+\'), 5p(\'+aS+\',0)\',\'2l\',8,5,13,10,13,10,8,15);5V.1z(6C,Hl)}F{hU(5V,\'to 2J, 5p(\'+aS+\',0), 5p(\'+aS+\',\'+(C.4u*1+0.3)+\')\',\'2J\',5,8,10,13,10,13,15,8);5V.1z(6C,Hn)}5N.1z("fF",ia);5N.1z("fE",ia);5V.1z("fF",ia);5V.1z("fE",ia);1a.1z("kZ",Jp);5N.1z("a5",aT);5V.1z("a5",aT);1K.1M(5N);1K.1M(5V);3R(za);za=7e(He,2p)}1a.1z(aX,JX);1a.1z(aR,wi);if(v.Y.6y>0&&!6y&&is=="Y"){if(1P oN!=="1N"){6y=1y oN()}}if(6x){W(B i=1;i<11;i++){if(K(v["ai"+is][is+i])){v.1j[is+i]=v["ai"+is][is+i];if(K(v["ai"+is][is+i+"1I"])){v.1j[is+i+"1I"]=v["ai"+is][is+i+"1I"]}if(K(v["ai"+is][is+i+"1i"])){v.1j[is+i+"1i"]=v["ai"+is][is+i+"1i"]}}if(K(v.1j[is+i])){if(v.1j[is+i]==1){cn(\'f\',i);ce(f[i],ae[i],6l[i],8V[i],i);if(!K(v.1j[is+i+"1i"])){v.1j[is+i+"1i"]="5q"}6l[i].1R=2T(v.1j[is+i+"1i"]);if(K(v.1j[is+i+"1I"])){if(v.1j[is+i+"1I"]!=\'\'){6l[i].1R=v.1j[is+i+"1I"]}}if(v.1j[is+i+"1i"]=="2Z"){o.gs=H}1Y[i]=v.1j[is+i+"1i"];8T(i);if(1Y[i]==\'wP\'){!o.fw?o.fw=1y Oz():\'\';if(K(1V.qT)){6l[i].1R=o.fw.Oy();o.fw.Ch()}}if(1Y[i]in o.5G){kB[1Y[i]]=i}f[i].1z(aX,5Y);f[i].1z(aR,5r);f[i].1z(6C,8m);f[i].1z("a5",aT);if(v.1j[is+i+"1p"]==1){O(f[i],{"1d":0})}}}}}E Jp(x){if(is=="Y"&&C.3H==1&&x){if(x.ts==0&&x.bK!=0){1a.bm-=x.bK;x.9R()}}3R(lV);lV=7e(wi,j2);b4()}E JX(){o.3M=H}E wi(){if(C.fk==1){2P(o.fm);o.fm=1G(E(){if(!o.3M&&!o.mH){av()}},(v.1j.gl>0?v.1j.gl*2p:(o.1l.tv?4g:2p)))}o.3M=P}E 5Y(1h){if(o.2e){o.5y?o.X.5y(P):\'\'}B i=1h.3Z.6w(\'mD\');B x;if(i){x=\'f\'}F{if(1h.3Z.6w(\'aO\')){i=1h.3Z.6w(\'aO\');x=\'f2\'}}if(i){i=2N(i);B fD=P;if(K(2n(x)[i])){if(C.8X>-1){O(2n(x+\'bg\')[i],{\'1B\':C.8X})}if(2F(C.ao)){O(2n(x+\'bg\')[i],{\'6p\':\'dW(\'+C.ao+\')\'})}if(C.7l>-1){O(2n(x+\'1I\')[i],{\'1B\':C.7l});O(2n(x+\'6c\')[i],{\'1B\':C.7l})}if(is=="Y"){if(1Y[i].I("Y")==0){B id=1Y[i].1n(8);if(3a==id||dG==id){O(2n(x+\'1I\')[i],{\'1t\':C.5R});O(2n(x+\'6c\')[i],{\'1t\':C.5R});fD=H}F{O(2n(x+\'1I\')[i],{\'1t\':C.1t})}}}if(C.he==1&&K(C.cg)&&fD){}F{O(2n(x+\'bg\')[i],{\'7p\':C.aF})}}}};E 5r(1h){if(o.2e){o.5y?o.X.5y(H):\'\'}B i=1h.3Z.6w(\'mD\');B x;B fD=P;3R(ij);b4();if(i){x=\'f\'}F{if(1h.3Z.6w(\'aO\')){i=1h.3Z.6w(\'aO\');x=\'f2\'}}if(i){if(K(2n(x)[i])){if(C.8X>-1){O(2n(x+\'bg\')[i],{\'1B\':C.4u})}if(2F(C.ao)){O(2n(x+\'bg\')[i],{\'6p\':\'dW(1)\'})}if(C.7l>-1){O(2n(x+\'1I\')[i],{\'1B\':C.a});O(2n(x+\'6c\')[i],{\'1B\':C.a})}if(is=="Y"){if(1Y[i].I("Y")==0){B id=1Y[i].1n(8);if(3a==id||dG==id){O(2n(x+\'1I\')[i],{\'1t\':C.5R});O(2n(x+\'6c\')[i],{\'1t\':C.5R});fD=H}F{if(K(o.8Q[id])){kL(i)}F{O(2n(x+\'1I\')[i],{\'1t\':C.1t})}}}}if(C.he==1&&K(C.cg)&&fD){}F{O(2n(x+\'bg\')[i],{\'7p\':o.8Q[id]?C.oE:C.4k})}}}}E 8m(1h){if(!hk){B d=1y 6T();o.9x=d.8D();B i=1h.3Z.6w(\'mD\');if(i){if(K(f[i])){if(K(1Y[i])){if(is=="Y"){o.2f=1N}5e(i,0)}}}i6()}}B vY;B ij;E FE(1h){if(!hk){B i=1h.3Z.6w(\'aO\');if(i){if(K(62[i])){if(2C in o.5G){vY=i;ij=7e(JM,4w)}}}}}E JM(){yw(vY)}E aT(1h){3R(ij);1h.6H=H;b4()}E wU(1h){3R(ij);if(!hk){B d=1y 6T();o.9x=d.8D();B i=1h.3Z.6w(\'aO\');if(i){if(i==0){if(62[0]==\'1t\'){ci();5e(mP)}F{eL()}}F{if(K(62[i])){yw(i)}}}}}E mm(1h){B x=1h.3Z.6w(\'GK\');if(x){wH(x)}}E Ie(1h){b4();B i=1h.3Z.6w(\'aO\');if(K(62[i])){if(7Y("=",i)>0){B x=62[i].1n(0,7Y("=",i));B y=62[i].1n(7Y("=",i)+1);B z=2C+\'Fq\';if(!v[z]){v[z]=[]}if(!K(v[z][x])){v[z][x]=v[x]+\'\'}xB(x,y)}}};E xB(x,y){v[x]=y;if(o.5z&&v.xW==1&&x!="e4"){3d.7J("po"+x,y)}if(o.5o&&o.4x){o.4x.a8()}o.X.jQ();wH(x)}E Il(1h){B i=1h.3Z.6w(\'aO\');B x=62[i];if(K(x)){if(x.I("=")>0){B z=x.1n(0,x.I("="));B y=x.1n(x.I("=")+1);v[z]=y;tx();8T(o[2C+\'wJ\']);if(2C=="oI"){7L("HS")}}}}E 8T(i){if(K(1Y[i])){B bb=P;B 8W=P;B 6b=\'\';if(6x){if(1Y[i]=="5v"){6b=o.R.qf()}if(1Y[i]=="8c"){6b=o.R.uo()}if(1Y[i]=="2Z"){6b=\' \';8W=H}if(1Y[i]=="e9"){if(o.8g){6b=o.q5[o.P1]}}if(1Y[i]=="8c"||1Y[i]=="e9"||1Y[i]=="5v"){if(o[\'eh\'+1Y[i]].U==0){bb=H}F{if(o[\'eh\'+1Y[i]].U==1&&(C.Gx!=1||o[\'eh\'+1Y[i]][0]==1)){bb=H}F{8W=H}}}if(1Y[i]=="6e"){if(!o.6e){bb=H}F{8W=H}}if(1Y[i]=="7f"){if(o.2t!=\'cp\'&&!v.7f){bb=H}F{8W=H}}if(1Y[i]=="28"){if(K(o.2c)){8W=H;if(o.5k||v.9J==1){if(o.3D){6b=o.3k[!o.5k?o.3D.7H():o.3w]}}F{6b=\'\'}B ic=0;W(B s=0;s<o.2c.U;s++){if(o.2c[s]!=\'\'){ic++}}if(ic==1&&o.kq==1){ic=0}if(v.pM==1&&v.ra==1){}F{if(ic==0){bb=H;8W=P}}}F{bb=H}}if(1Y[i]=="5q"){6b=o.6i[o.aj];6b==1&&C.ew!=1?6b=2T(\'h1\'):\'\';8W=H;if(o.2t=="aD"||(o.R.5A()&&C.OY!=1)){bb=H;8W=P}}if(1Y[i]in o.5G){6b=kK(1Y[i]);8W=H}if(1Y[i].I("8G")>0){B x=\' \';B y=[\'Gc\',\'G6\',\'G5\'];W(B z=0;z<y.U;z++){if(K(v[1Y[i]+y[z]])){if(v[1Y[i]+y[z]]!==\' \'){x+=(x!==\' \'?\':\':\'\')+v[1Y[i]+y[z]]}}}6b=x!=\' 0:0\'&&x.I(":")>-1?x:\' \';o[1Y[i]+\'8h\']=6b;8W=H}}8V[i].1R=6b+(6b!=\'\'&&C.Ra!=1?\' &dK;<2g 17="k7" 1d="K8" xX="-1 -1 5 8" 8J="1.1" 4j="3L://4h.w3.47/4g/2g" 4j:4d="3L://4h.w3.47/7D/4d"><pG 3F="#\'+C.5R+\'" 3F-17="1" 5h="1S" 2v="0 0 3 3 0 6"></pG></2g>\':\'\');B L8=6x&&cm!=-1;if(bb){1p(f[i]);if(6x){dD[i]?2P(dD[i]):\'\';if(o.S){o.S.kI(i,P,6b)}F{dD[i]=1G(E(){o.S.kI(i,P,6b)},4w)}}O(f[i],{\'1m\':\'2o\',\'2l\':0,\'1f\':-100})}if(8W){if(L8){}F{if(C.3H==1){O(f[i],{\'2k\':\'bN-4n\'})}F{1u(f[i])}}if(6x){dD[i]?2P(dD[i]):\'\';if(o.S){o.S.kI(i,H,6b)}F{dD[i]=1G(E(){o.S.kI(i,H,6b)},42)}}O(f[i],{\'1m\':\'eP\',\'2l\':0,\'1f\':0})}2A()}W(B j=1;j<f.U;j++){if(f[j]){if(5D(f[j])){B 4P=P;5a?4P=H:\'\';5a=P;4P&&o.S?o.S.4P():\'\'}}}};B yF=0;E 5e(i,GB,fa){fa?1Y[i]=fa:\'\';if(K(1Y[i])){o.mH=H;b4();B x=sV();if(6x){cm==-1?yF=x[0]:x[0]=yF}if(2C!=1Y[i]){2C=1Y[i];if(2C==\'5v\'||2C==\'8c\'||2C==\'28\'||2C==\'5q\'||2C==\'e9\'||2C in o.5G||2C.I("8G")>0||2C==\'2Z\'||2C==\'1t\'){cm=i;B z=n1(o[\'eh\'+2C]);if(2C=="rW"){if(C.yp==1){z=7L("Rr")}F{z=7L("Rn")}}if(2C=="oI"){z=7L("Qu")}if(2C=="2Z"&&o.2Z){z=[];W(B j=1;j<=16;j++){if(K(v["2Z"+j])){z.2L(2T(v["2Z"+j]));l7[z.U]=v["2Z"+j]}}}if(2C=="1t"&&o.4W){z=[];mP=i;W(B j=0;j<o.mR.U;j++){B co=o.mR[j].1n(4);z.2L(2T(co));5S[z.U]=co}}B hg=o[\'QS\'+2C];B H8=o[\'Qq\'+2C];W(B j=1;j<f.U;j++){if(f[j]){f[j].C.2k="1S"}}f2=[];cn(\'f2\',0);ce(f2[0],gN[0],5d[0],5H[0],0);O(f2[0],{"2R-2J":"41 6E "+(C.xA==1?8q:"5p(100,100,100,0.7)")});aJ=GB;B mW=P;5d[0].1R=(x[0]<2||aJ==1||C.z8==1?\'\':hL)+(v.1j[is+i+"1I"]&&v.1j[is+i+"1I"]!=\'\'?v.1j[is+i+"1I"]:2T(v.1j[is+i+"1i"]))+(o[1Y[i]+\'8h\']?o[1Y[i]+\'8h\']:\'\');if(2C==\'28\'&&!o.su){B ik=1O("1X");ik.1R=2T("2W");O(ik,{\'1t\':C.1t,\'9t\':\'2y\',\'6K\':\'4l\'});5H[0].1M(ik);ik.1z(6C,IY);mW=H}if(2C==\'28\'&&v.pM==1&&!o.1l.tv&&K(1V.qT)){B uf=1O("1X");!o.3D?o.3D=1y kn():\'\';uf.1R="<w1 1J=\'3G\' id=\'"+v.id+"Gm\' Qp=\'.ro,.qM,.iT\' C=\'2k:1S\'/>"+2T(\'wP\');O(uf,{\'1t\':C.1t,\'9t\':\'2y\',\'6K\':\'4l\',\'2M-1c\':(mW?\'ds\':0)});5H[0].1M(uf);o.f4=22.8S(v.id+"Gm");o.f4.Qo=o.3D.qW;uf.1z(6C,o.3D.qW)}if(mW){if(fG){if(aJ==2){z=[];3i(f2[0])}W(j=0;j<o.de.U;j++){if(v.pi==0&&o.de[j]=="kU"){}F{z.2L("Qn"+o.de[j])}}}}O(5d[0],{\'3O-3P\':C.hm*2q(v.7w,1)});62[0]="Qm";if(2C in o.5G){v9(2C);if(mP>0&&o.mR.I(\'Ql\'+2C)>-1){5d[0].1R=hL+2T(2C);62[0]="1t";5H[0].1R=kK(2C)}O(5H[0],{\'17\':C.5E*2.5,\'1F-8N\':\'2l\'})}if(aJ!=1&&x[0]>1){f2[0].1z(aX,5Y);f2[0].1z(aR,5r);f2[0].1z(6C,wU);f2[0].1z("a5",aT)}F{O(f2[0],{"6K":\'8b\'})}if(C.rE==1){3i(f2[0])}if(K(z)){B zz=\'\';W(j=0;j<z.U;j++){B y=j+1;B ei=0;B 6Z=P;if(z[j]&&4D(z[j])!=\'\'){if(2C==\'5v\'){if(z[j]==2T("2y")){ei=1}if(o.2t=="1H"&&v.Qk==1){B iz=5n(z[j]);if(iz&&iz<zz){ei=2}zz=5n(z[j])}}cn(\'f2\',y,ei);ce(f2[y],gN[y],5d[y],5H[y],1Y[i],i);if(2C==\'5q\'){z[j]==1&&C.ew!=1?z[j]=2T(\'h1\'):\'\'}if(1P(z[j])==\'59\'){if(z[j].I("<<<")==0){z[j]=z[j].1T(\'<<<\',\'\');6Z=H}if(z[j].I(\'8G\')>0){o[2C+\'wJ\']=i}if(z[j].I("xt")==0){B 1C=z[j];if(1C.I("8G")>0){5d[y].1R=2T(z[j].1n(1C.I("8G")+5))}F{5d[y].1R=2T(z[j].1n(7))}if(z[j]==\'Qj\'){mV=f2[y];O(f2[y],{"2R-1f":"41 6E "+(C.xA==1?8q:"5p(100,100,100,0.7)")})}}F{5d[y].1R=z[j]}}F{5d[y].1R=z[j]}62[y]=2C+j;if(hg==j||H8==j){5H[y].1R=hg==j?iK:GZ;if(hg==j){md(y)}}if(1P(z[j])==\'59\'){if(z[j].I("xt")==0){B t=z[j].1n(7);if(t.I("1t")>0){5H[y].1R="<1X C=\'"+(v[t]=="46"?\'2R:41 6E #jW;1d:aI;17:aI;\':\'1d:ds;17:ds;\')+";2i-1t:"+(v[t].I("#")==-1?\'#\':\'\')+v[t]+";2R-6M:ds;\'></1X>"}F{if(K(v[z[j].1n(7)])){5H[y].1R=v[z[j].1n(7)]}}}if(2C=="2Z"){if(K(l7[y])&&o.2Z){5H[y].1R=o.2Z.1r(l7[y],0.7,3A(C.5R))}}if(2C=="1t"){if(K(5S[y])&&o.4W){5H[y].1R=kK(5S[y])}}if(2C==\'5v\'){if(z[j]==2T("2y")&&o.R.hz()){md(y)}if(2F(v.cP)){B fq=v.cP.2z(",");W(B k=0;k<fq.U;k++){if(z[j].I(fq[k])>-1){3i(f2[y])}}}}}B x6="";if(1P(z[j])==\'59\'){if(z[j].I("xt")==0){4i(f2[y],{\'Qi\':i,\'GK\':z[j].1n(7)});x6="mm"}}if(!6Z){f2[y].1z(aX,5Y);f2[y].1z(aR,5r);if(x6=="mm"){f2[y].1z(6C,mm)}F{f2[y].1z(6C,wU)}f2[y].1z("a5",aT);f2[y].1z("Bb",FE)}F{O(f2[y],{"6K":"8b"})}}}}2A()}if(1Y[i]==\'7f\'){o.X.kH();2C=-1}if(1Y[i]==\'wP\'&&K(o.fw)){o.fw.3j();2C=-1}if(1Y[i].I(\'Y\')>-1){B id=1Y[i].1n(8);if(K(o.1D[id])){B fl=o.1D[id][\'3G\'];if(K(fl)){if(fl.I(\'4f:\')==0){if(id.I(\'x\'+dG)!=0){o.2f=fl.1n(5);bO(id.1n(0,id.pz(\'-\'))+\'-0\');J}if(!o.1A){o.2f=fl.1n(5)}if(!o.1E){o.X.2H()}3x(\'4f\',fl.1n(5));av();J}eT(i);wc(id);7L("CO");if(K(o.1D[id][\'7k\'])&&v.7k==1&&v.Qg==1){7k(o.1D[id][\'7k\'])}F{mv(id);o.X.eO(fl,(v.Y.jE==1?1:1N));v.Y.8f==0&&v.Y.gA==1?1G(av,4w):\'\';mF=P;m8=P;mz(id);js("Q5")}}F{if(K(o.1D[id][\'5b\'])){6v(id);if(mF){6j==-1?5e(0,0):\'\'}F if(m8){6j==-1?5e(2N(f.U)-2,0):\'\'}}}}if(o.3e){o.3e.8B()}}if(1Y[i]==\'6e\'){o.R.fh()}}}};G.In=E(x){8T(o[x+\'wJ\'])};E wH(x){if(x=="rQ"){Ih();J}if(x=="rP"){B z=2C+\'Fq\';if(v[z]){W(B y in v[z]){if(v[z].2u(y)){xB(y,v[z][y])}}g6()}J}b4();W(B i=0;i<f2.U;i++){if(f2[i]){f2[i].C.2k="1S"}}f2=[];cn(\'f2\',0);ce(f2[0],gN[0],5d[0],5H[0],0);O(f2[0],{"2R-2J":"41 6E "+(C.xA==1?8q:"5p(100,100,100,0.7)")});if(x.I("8G")>0){f2[0].1z(6C,tx);5d[0].1R=2T(x.1n(x.I("8G")+5))}F{f2[0].1z(6C,g6);5d[0].1R=(C.z8!=1?hL:\'\')+2T(x)}O(5d[0],{\'3O-3P\':C.hm*2q(v.7w,1)});f2[0].1z(aX,5Y);f2[0].1z(aR,5r);f2[0].1z("a5",aT);B 4G=[];B mO=P;if(x.I("3P")>0){4G=[\'50%\',\'75%\',\'100%\',\'125%\',\'150%\',\'175%\',\'4w%\',\'Qe%\',\'dO%\',\'cs%\']}if(x.I("4u")>0){4G=[\'0\',\'0.2\',\'0.3\',\'0.4\',\'0.5\',\'0.6\',\'0.7\',\'0.8\',\'0.9\',\'1\']}if(x.I("kJ")>0){W(B i=-5;i<5.5;i+=0.5){4G.2L(2I.4a(i*100)/100)}}if(x.I("ez")>0){4G=[4w,cs,hq]}if(x.I("2J")>0){W(i=0;i<21;i++){4G[i]=i*10}}if(x.I("Gc")>0){W(i=0;i<24;i++){4G[i]=i}}if(x.I("G6")>0||x.I("G5")>0){W(i=0;i<60;i++){4G[i]=i}}if(x.I("ak")>0){mO=H;4G=[0,1]}if(x.I("3F")>0){mO=H;4G=[0,1]}if(x.I("1t")>0){4G=[\'3E\',\'G2\',\'Qd\',\'Qc\',\'Qb\',\'Qa\',\'Q9\',\'Q8\',\'Q7\',\'Q6\',\'Qs\',\'Qh\',\'Qt\',\'QH\',\'QR\',\'QQ\',\'QP\',\'46\'];B vx=v[x].1T("#","");if(4G.I(vx)==-1){4G[8]=vx}}W(y=1;y<=4G.U;y++){cn(\'f2\',y,0);ce(f2[y],gN[y],5d[y],5H[y],y);O(5H[y],{\'2Q-1c\':0});if(x.I("1t")>0||x.I("2J")>0||x.I("8G")>0||x.I("kJ")>0){y%3!=0?O(f2[y],{\'io\':\'1c\'}):\'\';O(f2[y],{\'17\':\'33.3%\'});if(x.I("1t")>0){4G[y-1]=2q(v["QO"+(y-1)],4G[y-1]);5d[y].1R="<1X C=\'"+(4G[y-1]=="46"?\'2R:41 6E #jW;1d:Iv;17:Iv;\':\'1d:fx;17:fx;\')+";2i-1t:"+3A(4G[y-1])+";2R-6M:fx;\'></1X>";O(f2[y],{\'2E-1d\':1})}F{5d[y].1R=4G[y-1]}}F{if(x.I("ez")>0){5d[y].1R=4G[y-1]}F{y%2!=0?O(f2[y],{\'io\':\'1c\'}):\'\';O(f2[y],{\'17\':\'50%\'});if(mO){5d[y].1R=2T(4G[y-1]+\'8h\')}F{5d[y].1R=4G[y-1]}}}62[y]=x+\'=\'+4G[y-1];if((4G[y-1]==v[x]&&6t(v[x])!=" ")||v[x]==\'#\'+4G[y-1]){5H[y].1R=iK;md(y)}f2[y].1z(aX,5Y);f2[y].1z(aR,5r);if(x.I("8G")>0){f2[y].1z(6C,Il)}F{f2[y].1z(6C,Ie)}f2[y].1z("a5",aT)}2A()}E md(x){f2[x].gI.8v(\'6J-\'+v.id+\'-cZ-Es\');O(5d[x],{\'1t\':C.5R});lU(gN[x])}E mv(id){if(K(o.1D[id][\'2j\'])){v.2j=o.1D[id][\'2j\'];K(v.2j)?o.R.a7(v.2j):\'\'}if(K(o.1D[id][\'1I\'])){o.cX=o.1D[id][\'1I\']}vf()}E mz(id){B t=o.1D[id][\'1I\'];if(K(t)){if(v.m9==1){if(o.X.oO(o.1D[id])){}F{v.1I=(v.wI==1&&K(o.wY)?o.wY+(v.wE==1?\'<br>\':\' \'):\'\')+t}o.X.aC(\'1I\')}}if(v.eF==1){if(K(o.1D[id][\'2v\'])){v.2v=o.1D[id][\'2v\']}F{v.2v=[]}o.S.jL()}B xv=[\'6r\',\'n6\',\'7f\',\'7r\',\'18\',\'jV\',\'D9\',\'ne\',\'vp\',\'4v\',\'4O\',\'ki\',\'CX\',\'7P\',\'cl\',\'gK\',\'9A\',\'jz\'];W(B i=0;i<xv.U;i++){B lA=o.1D[id][xv[i]];if(K(lA)){v[xv[i]]=lA;if(i==16){v.Y.dv=lA}}F{i<4?v[xv[i]]=1N:\'\'}}wc(id);B 9g=o.1D[id];if(K(9g[\'2D\'])){9g[\'28\']=9g[\'2D\']}if(K(9g[\'28\'])){o.X.f0(9g[\'28\'])}if(K(9g[\'9A\'])){o.S.xO()}o.X.jJ(o.1D[id]);if(o.j0){o.S.xI(o.j0)}if(K(9g[\'dL\'])){3x(\'dL\',9g[\'dL\'])}if(K(9g.1L)){o.X.4c(9g.1L)}}E wc(id){B x=o.1D[id][\'1A\'];if(K(x)){if(x=="3y"){if(2W.28&&!o.1D[id][\'28\']){o.1D[id][\'28\']=2W.28}if(o.R.1b()>0){v.1A=o.2f=o.R.1b()}F{2W.1A&&!o.2f?o.2f=2W.1A:v.1A=0}}F{v.1A=o.2f=x}}F{v.1A=0}}E eT(x){if(6j==0&&!o.1A){O(6l[6j],{\'1t\':C.1t});O(ae[6j],{\'7p\':C.4k});8V[6j].1R=\'\';f[6j].gI.6r(\'6J-\'+v.id+\'-cZ-pl\')}F{o.9U=x;if(6j>-1){kL(6j)}if(3a!=\'\'){if(!o.8Q[3a]&&K(o.1D[3a])){o.rd+=2q(o.1D[3a].1o,0)}o.8Q[3a]=H;5U=uy(5U,3a)}}if(1Y[x]){B id=1Y[x].1n(8);8V[x].1R=iK;f[x].gI.8v(\'6J-\'+v.id+\'-cZ-pl\');O(6l[x],{\'1t\':C.5R,\'1F-oF\':\'1S\',\'1B\':C.a});lU(ae[x]);if(C.he==1&&K(C.cg)){O(ae[x],{\'7p\':C.cg})}6j=x;3a=id;o.3a=3a;v.4T=3a;o.p5=6l[x].1R;o.9U=3a;dG=o.1D[id][\'7A\'];if(o.S){o.S.hY()}if(6y){6y.QJ()}}}E 6v(id){B x=id==0?o.Y:o.1D[id];o.9U=id;W(B i=0;i<f.U;i++){if(f[i]){if(C.3H==1){1a.3q(f[i])}F{7d.3q(f[i])}f[i]=1Z}}f=[];6j=-1;if(K(x[\'5b\'])){B y=7o.6n(x[\'5b\']).U;cn(\'f\',y);1Y[y]="Fy";ce(f[y],ae[y],6l[y],8V[y],y);if(C.3H==1){O(f[y],{"17":(C.lw==1?C.dF:"2y"),"1d":C.hE})}if(C.rG==1){B z7="41 6E "+4E(C.IQ,2q(C.IP,1));if(C.3H==1){O(f[y],{"QI":z7})}F{O(f[y],{"QG":z7})}}B 1C=x.1I;if(C.z8!=1){1C=hL+1C}6l[y].1R=1C;O(6l[y],{\'3O-3P\':C.hm*2q(v.7w,1)});B p=x[\'7A\'];f[y].1z(aX,5Y);f[y].1z(aR,5r);f[y].1z(6C,E(){HY(p)});x=x[\'5b\']}B y=7o.6n(x).U;5U=[];dp=[];if(6y&&C.3H!=1){6y.6r(7d);if(y>v.Y.6y){6y.8v(C,7d)}}W(B i=0;i<y;i++){cn(\'f\',i);1Y[i]="Y"+x[i].id;if(!K(o.8Q[x[i].id])&&!K(x[i].5b)){5U[x[i].id]=i;dp[x[i].id]=i}ce(f[i],ae[i],6l[i],8V[i],i);if(C.3H==1){if(C.7a==0){O(6l[i],{\'17\':C.dF-C.rJ-C.jI});3i(8V[i])}O(f[i],{"17":(C.lw==1?C.dF:"2y"),"1d":C.hE})}6l[i].1R=x[i].1I?x[i].1I:\'&dK;\';if(v.cL==1&&v.7U==1&&x[i].id){if(o.r9){if(o.r9.I(x[i].id)>-1){x[i].eq=1}}}if(K(x[i].eq)){if(x[i].eq==1){o.8Q[x[i].id]=H;kL(i)}}if(K(x[i].5b)){8V[i].1R=IJ;O(8V[i],{"1t":C.1t})}f[i].1z(aX,5Y);f[i].1z(aR,5r);f[i].1z(6C,8m);f[i].1z("a5",aT);if(K(o.8Q[x[i].id])){kL(i)}if(3a==x[i].id){eT(i)}if(dG==x[i].id){O(6l[i],{\'1t\':C.5R});O(8V[i],{\'1t\':C.5R});lU(ae[i])}}2A();5a=P;o.S?o.S.4P():\'\'}E lU(x){if(2F(C.oJ)&&x){O(x,{"2i-7X":"3f-4L(5p(0, 0, 0, "+(1-C.oJ*1)+") 0 0)"})}}E hU(x,y,z,x1,y1,x2,y2,x3,y3,x4,y4){B ww=(C.3H==1?\'IG\':\'100%\');B hh=(C.3H==1?\'100%\':\'IG\');O(x,{\'1m\':\'2o\',\'2k\':\'bN-4n\',\'17\':ww,\'1d\':hh,\'1F-8N\':\'8P\'});if(C.ID==1){O(x,{\'2i\':\'-pn-3f-4L(\'+y+\')\',\'2i\':\'-3Q-3f-4L(\'+y+\')\',\'2i\':\'-ms-3f-4L(\'+y+\')\',\'2i\':\'-o-3f-4L(\'+y+\')\',\'2i\':\'3f-4L(\'+y+\')\',})}if(C.3H==1||o.1l.2m){O(x,{\'6K\':\'4l\'})}F{O(x,{\'4l-3b\':\'1S\'})}if(C.lK==1){O(x,{\'5W-17\':C.i5+\'px!6k\'})}if(z=="1f"){O(x,{\'1f\':-1,\'1c\':0})}if(z=="2J"){O(x,{\'2J\':-1,\'1c\':0})}if(z=="1c"){O(x,{\'1f\':0,\'1c\':0})}if(z=="2l"){O(x,{\'1f\':0,\'2l\':0})}if(z=="2l"||z=="1c"){O(x,{\'1F-8N\':\'1c\',\'2Q-1f\':1K.2S/2-10})}x.1R="<8P><1X "+(C.IC==1?"Qv=\'G.C.7p=\\"#"+C.Hx+"\\"\' QF=\'"+(C.zm==1?"G.C.7p=\\"#"+C.zj:"G.C.2i=\\"1S")+"\\"\'":"")+" C=\'4l-3b:2y;6K:4l;17:fx;1d:fx;2R-6M:fx;"+(C.zm==1?"2i-1t:#"+C.zj+";":"")+(z=="1f"?"2M-1f:ds;":"")+(z=="2J"?"2M-1f:ds;":"")+(z=="2l"?"2M-1c:fN;":"")+(z=="1c"?"2M-2l:fN;":"")+"\'><2g 17=\'20\' 1d=\'20\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'><g><2E x1=\'"+x1+"\' y1=\'"+y1+"\' x2=\'"+x2+"\' y2=\'"+y2+"\' 3F=\'#"+C.lq+"\' 3F-17=\'"+C.lL+"\' 3F-cH=\'4a\'/><2E x1=\'"+x3+"\' y1=\'"+y3+"\' x2=\'"+x4+"\' y2=\'"+y4+"\' 3F=\'#"+C.lq+"\' 3F-17=\'"+C.lL+"\' 3F-cH=\'4a\'/></g></2g></1X></8P>"}G.a2=E(){if(C.iB==1){a2()}};E He(){if(eb){a2()}}E a2(e){if(C.iB==1&&!iw){if(C.3H==1){B h=1a.QD;B m=1K.29+C.7z+C.7j+20;B t=1a.bm}F{B h=1a.oG;B m=1K.2S;B t=1a.er}if(h>m){if(t>0){if(!5D(5N)){1u(5N);B m1=1y 5T({"mc":5N,"1J":"8A","to":1,"1b":0.3,"me":"5N"})}}F{if(5D(5N)){B m2=1y 5T({"mc":5N,"1J":"8A","to":0,"1b":0.3,"me":"5N","1p":H})}if(e){e.bK<0?e.9R():\'\'}}if(t<h-m-10){if(!5D(5V)){1u(5V);B m3=1y 5T({"mc":5V,"1J":"8A","to":1,"1b":0.3,"me":"5V"})}}F{if(5D(5V)){B m4=1y 5T({"mc":5V,"1J":"8A","to":0,"1b":0.3,"me":"5V","1p":H})}if(e){e.bK>0?e.9R():\'\'}}}F{1p(5N);1p(5V)}}}E Hn(){B x=1a.er+1K.2S-60;B m=1y 5T({"mc":1a,"1J":"6O","to":x,"1b":0.3,"me":"FA","5g":"ca"});1G(a2,2p)}E Hm(){B x=1a.er-1K.2S+60;B m=1y 5T({"mc":1a,"1J":"6O","to":x,"1b":0.3,"me":"QC","5g":"ca"});1G(a2,2p)}E ia(1h){2P(o.fm);1h.bB()}E Hl(){B x=1a.bm+(1K.29+C.7z+C.7j)-60;B m=1y 5T({"mc":1a,"1J":"iL","to":x,"1b":0.3,"me":"QB","5g":"ca"});1G(a2,2p)}E Hh(){B x=1a.bm-(1K.29+C.7z+C.7j)+60;B m=1y 5T({"mc":1a,"1J":"iL","to":x,"1b":0.3,"me":"Fz","5g":"ca"});1G(a2,2p)}E HY(x){if(x==\'\'){6v(0)}F{if(K(o.1D[x])){6v(x)}}2C=\'\'}E kL(x){8V[x].1R=\'\';O(6l[x],{\'1t\':C.qY});if(C.qU==1){O(6l[x],{\'1F-oF\':\'2E-H9\'})}if(C.hy>-1){O(6l[x],{\'1B\':C.hy})}f[x].gI.6r(\'6J-\'+v.id+\'-cZ-pl\');O(ae[x],{\'7p\':C.oE});if(C.hQ>-1){O(ae[x],{\'1B\':C.hQ})}}E yw(i){if(K(62[i])){b4();if(7Y("5v",i)==0){o.X.6g(62[i].1n(7))}if(7Y("8c",i)==0){o.X.dX(62[i].1n(10))}if(7Y("28",i)==0){!o.3D?o.3D=1y kn():\'\';o.3D.9b(62[i].1n(8))}if(7Y("e9",i)==0&&v.8g==1){o.8g.Ac(62[i].1n(7))}if(7Y("2Z",i)==0){o.2Z?o.2Z.3z(l7[i]):\'\';av()}if(7Y("1t",i)==0){ci();5e(0,0,5S[i])}W(B p in o.5G){if(o.5G.2u(p)){if(7Y(p,i)==0){o.R.K3(p,i)}}}if(7Y("8G",i)>0){if(5d[i].1R==2T(\'6Z\')){7L(2C+\'0\');8T(cm);if(2C=="oI"){7L("HS")}eL()}F{if(2C=="rW"&&C.yp==1){7L(\'yp\',i);8T(cm);eL()}}}if(7Y("5q",i)==0){o.X.9H(62[i].1n(5));hK();1G(av,4w)}}};G.hK=E(){hK()};G.Io=E(x){W(B i=0;i<1Y.U;i++){if(1Y[i]==x){J H}}J P};E hK(){W(B i=0;i<1Y.U;i++){if(1Y[i]=="5q"){8T(i);if(2C==\'5q\'){ci();5e(i,0)}}}}E cn(x,i,ei){if(K(2n(x))){2n(x)[i]=1O("1X");if(i<2||x=="f"||2C!=\'5v\'||ei==1){if(C.3H==1){1a.1M(2n(x)[i])}F{7d.1M(2n(x)[i])}}F{if(C.3H==1){1a.ur(2n(x)[i],2n(x)[i-1])}F{7d.ur(2n(x)[i],2n(x)[ei==2?i-2:i-1])}}if(x==\'f\'){4i(2n(x)[i],{\'mD\':i})}if(x==\'f2\'){4i(2n(x)[i],{\'aO\':i})}2n(x+\'bg\')[i]=1O("1X");B lo=1O("1X");2n(x)[i].1M(lo);lo.1M(2n(x+\'bg\')[i]);gE(lo);2n(x+\'4m\')[i]=1O("1X");2n(x)[i].1M(2n(x+\'4m\')[i]);eC(2n(x+\'4m\')[i]);gE(2n(x+\'4m\')[i]);2n(x+\'1I\')[i]=1O("1X");2n(x)[i].1M(2n(x+\'1I\')[i]);2n(x+\'6c\')[i]=1O("1X");2n(x)[i].1M(2n(x+\'6c\')[i]);if(i>0&&x=="f2"&&6x&&C.sF==0){3i(2n(x+\'6c\')[i])}}};E ce(x,9e,iF,sn,QY,ii){O(x,{\'1m\':\'eP\',\'2l\':0,\'1f\':0,\'6K\':\'4l\',\'1d\':\'2y\',\'17\':\'100%\',\'5l\':\'3c\',\'2k\':\'4n\',\'2E-1d\':\'1.Tz\'});if(6x){if(C.3H==1){O(x,{\'17\':\'2y\'})}}if(C.sr&&C.3H==1){O(x,{\'Qw\':C.sr})}if(C.3H==1&&(!6x||ii>0||C.rE==1)){O(x,{\'2k\':\'bN-4n\',\'b6-8N\':\'1f\',\'bv-96\':\'h1\'})}O(9e,{\'2i\':(C.vG==1?"3f-4L(to 1c,"+3A(C.so)+", "+3A(C.4k)+")":3A(C.4k)),\'1B\':C.4u,\'9t\':\'1S\',\'4F\':\'1B 0.2s 5g-4r,2i .2s 5g-4r,6p .2s 5g-4r\'});eC(9e);eC(9e.3W);if(C.aa==1){O(9e.3W,{\'kw-6p\':\'aa(aI)\'})}if(C.Qx==1){x.C[C.3H==1?"2R-2l":"2R-2J"]="41 6E "+4E(2q(C.Qy,\'3E\'),2q(C.Qz,0.2))}O(iF,{\'1m\':\'eP\',\'2l\':0,\'1f\':0,\'io\':(C.8N?C.8N:\'1c\'),\'1t\':C.1t,\'2Q-1f\':C.l5,\'2Q-2l\':C.jI,\'2Q-2J\':C.QA,\'2Q-1c\':C.rJ,\'9t\':\'1S\',\'1B\':C.a,\'4F\':\'1B 0.2s 3f,1t 0.2s 3f\',});O(sn,{\'1m\':\'eP\',\'2l\':0,\'1f\':0,\'io\':(C.Hk?C.Hk:\'2l\'),\'2Q-1f\':C.l5,\'2Q-2l\':C.jI,\'2Q-1c\':C.rJ,\'9t\':\'1S\',\'3O-3P\':C.5E*2q(v.7w,1),\'1B\':C.a,\'1t\':C.5R,\'4F\':\'1B 0.2s 3f,1t 0.2s 3f\'});if(C.lK==1){O(x,{\'5W-17\':C.i5+\'px!6k\'});O(iF,{\'5W-17\':(C.i5-70)+\'px!6k\'})}F{if(C.3H==1){if(C.lw==1){O(x,{\'17\':C.dF});O(iF,{\'17\':C.dF-70})}}F{O(iF,{\'bv-96\':\'dI\'});O(sn,{\'bv-96\':\'dI\'})}}}E eL(){W(B i=1;i<f.U;i++){if(K(f[i])){if(C.3H==1){f[i].C.2k="bN-4n"}F{f[i].C.2k="4n"}}}b4();ci();2A();2C=\'\';cm=-1};E ci(){W(B j=0;j<f2.U;j++){if(f2[j]){if(C.3H==1){1a.3q(f2[j])}F{7d.3q(f2[j])}f2[j]=1Z}}f2=[];2C=\'\'}E H4(){J 1a.29};G.k6=E(){mG()};E mG(){if(is=="Y"){if(C.3H==1||C.Ht==1){B x=o.2Y-C.4o-C.4s;O(1K,{\'17\':x});O(1a,{\'17\':x});7d?O(7d,{\'17\':x}):\'\'}o.3e?o.3e.2A():\'\'}}E 2A(){if(!iw){if(6x){o.S?o.S.mw():\'\';B x=C.rE==1&&f.U>1?f[1]:f[0]}if(is=="Y"){mG();o.S?o.S.k6():\'\';B x=f[0];if(v.xe==1){og()}}f.U>1&&!x?(f[1]?x=f[1]:\'\'):\'\';f.U>2&&!x?(f[2]?x=f[2]:\'\'):\'\';if(x){x.29==0&&f2.U>0?x=f2[0]:\'\'}if(1a.29-1a.uQ>0&&x&&C.3H!=1){if(K(5N)){O(5N,{"17":7d.29})}if(K(5V)){O(5V,{"17":7d.29})}C.mE=(1a.29-x.29)-(1a.uQ-x.uQ)}F{C.mE=0}}};E sV(){B x=0;B y=0;B z=\'\';W(B i=1;i<f.U;i++){if(K(f[i])){if(f[i].C.5Z!="3c"&&f[i].C.2k!="1S"){x++;y=i;z=1Y[i]}}}J[x,y,z]}G.vJ=E(){fG=H;G.1u();aJ=2;g6()};E IY(x){fG=H;g6(x);if(fG&&mV){1a.QK(0,mV.u1)}}E Ih(x){fG=P;g6(x)}E g6(){eL();W(B i=0;i<1Y.U;i++){if(1Y[i]=="28"){5e(i,aJ)}}}E b4(){2P(tj);tj=1G(E(){o.mH=P},4g)}E tx(){B x=2C;eL();W(B i=0;i<1Y.U;i++){if(1Y[i]==x){5e(i,0)}}}G.tb=E(){J v.1j.8f==1&&v.1j.1w==1};E av(x){if((!6x&&v.Y.Hi==1)||(6x&&v.1j.8f==1&&x!=2)){J}if(is==\'Y\'&&v.Y.3e==1&&v.Y.QL!=1){if(v.Y.8f==1&&x==1){J}o.3e?o.3e.vv():\'\';eb=P}F{if((x!=1||(C.QM==1&&C.8f==1))&&!o.1l.tv){B m=1y 5T({"mc":1K,"1J":"8A","to":0,"1b":0.1,"me":is,"5g":"IL"});jc=1G(E(){O(1K,{"5Z":"3c","1B":0,"1f":-4g});eb=P},4w)}F{O(1K,{"5Z":"3c","1B":0,"1f":-4g});eb=P}}if(is==\'Y\'){if(v.Y.Ha==1&&o.S){o.S.qN("1i","Y",H)}}3R(lV)};G.c=E(){J 1K};G.co=E(){if(1K.QN(1a)){J 1a}};G.s=E(1e){if(1e=="4s"||1e=="4o"){B k2=1e.1T("2M","ar");B k3=1e.1T("2M","aV");if(2F(C[k3])&&o.9j){J o.2Y*C[k3]/100}if(2F(C[k2])){J o.2Y*C[k2]/100}}J C[1e]};G.ss=E(1e){J C};G.1u=E(){eL();2P(jc);eb=H;if(is==\'Y\'&&v.Y.3e==1){o.3e?o.3e.kr():\'\'}F{O(1K,{"5Z":"4C","1B":1,"4F":"1B 0.2s 3f"});B x=sV();if(x[0]==1){if(x[2]=="5v"||x[2]=="8c"||x[2]=="28"||x[2]=="5q"||x[2]in o.5G||x[2].I("8G")>0){5e(x[1],0)}}}if(o.S){is==\'1j\'?o.S.mw():\'\';if(is==\'Y\'){o.S.k6();if(v.Y.Ha==1){o.S.qN("1i","Y",P)}}}if(o.1l.7g){O(1a,{\'9L-17\':\'2y\'});if(C.3H!=1){O(7d,{\'9L-17\':\'2y\'})}}hk=H;3R(lr);lr=7e(FS,100)};E FS(){3R(lr);hk=P}G.3j=E(i){5e(i,1)};G.1p=E(x){av(x)};G.HX=E(){if(o.3e){o.3e.aw()}};G.6g=E(){W(B i=0;i<1Y.U;i++){if(1Y[i]=="5v"){8T(i);if(o.2G.U>1){1u(f[i])}if(2C==\'5v\'){ci();5e(i,aJ)}}}};G.fh=E(){W(B i=0;i<1Y.U;i++){if(1Y[i]=="6e"){8T(i)}}};G.jD=E(x){W(B i=0;i<1Y.U;i++){if(1Y[i]==x){8T(i);if(o[\'eh\'+x]){if(o[\'eh\'+x].U>1){1u(f[i])}}if(2C==x){ci();5e(i,aJ)}}}};G.9b=E(){W(B i=0;i<1Y.U;i++){if(1Y[i]=="28"){8T(i);if(o.3k){if(o.3k.U>0){B x=P;if(o.2c){W(B y=0;y<o.2c.U;y++){if(o.2c[y]!=\'\'){x=H;1k}}}F{x=H}x?1u(f[i]):\'\'}}if(2C==\'28\'){ci();5e(i,0)}}}};G.wj=E(x){o.Y=x;6v(0);if(K(v.4T)){if(v.4T.I("x-")!=0){W(B y in o.1D){if(o.1D.2u(y)){if(o.1D[y].dh==v.4T){v.4T=y}}}}if(K(o.1D[v.4T])){fP(o.1D[v.4T]);B y=o.1D[v.4T][\'c9\'];eT(y);if(v.Y.ma==1&&C.3e!=1){6v(0);1G(E(){2A()},42)}F{1G(E(){dV(y);2A()},42)}v.4T=1N}F{eT(0)}}F{eT(0)}if(C.3e==1){if(!K(o.3e)){o.3e=1y Ln()}}};G.bO=E(x){bO(x)};E bO(x){if(K(o.1D[x])){fP(o.1D[x]);5e(o.1D[x][\'c9\'],0);dV(o.1D[x][\'c9\'])}};G.mx=E(x){if(K(o.1D[x])){fP(o.1D[x]);if(o.1D[x]["3G"]){o.2f=1N;eT(o.1D[x][\'c9\']);mv(x);o.X.eO(o.1D[x]["3G"],1);mz(x);dV(o.1D[x][\'c9\']);if(o.3e){o.3e.8B()}}F if(o.1D[x]["5b"]){6v(x)}}};E Gf(x){if(K(o.1D[x])){dG=\'\';6v(0);fP(o.1D[x]);mv(x);5e(o.1D[x][\'c9\'],0);mz(x)}};G.bn=E(){mF=H;B x=2N(6j)+1;if(3a!=\'\'){o.8Q[3a]=H;5U=uy(5U,3a)}if(v.5U==1){x=vd(5U);if(x==1Z){if(v.Qf==1||v.Y.dv==1){dp.Hp(E(a,b){J 2I.5M()-0.5});W(B x in dp){if(dp.2u(x)){5U[x]=dp[x]}}x=vd(5U)}F{o.X.zN()}}}F{if((1Y[x]=="Fy"||6j==-1)&&3a!=\'\'){B y=7i().I(3a);if(y<7i().U){B z=o.1D[7i()[y+1]];if(z){if(K(z.5b)){z=o.1D[7i()[y+2]]}G.mx(z.id);x=-1;o.X.2H()}}}}if(x>-1){o.2f=1N;5e(x,0);dV(x)}};E dV(x){if(f[x]&&!iw){if(C.3H==1){B to=f[x].lf-20;B m=1y 5T({"mc":1a,"1J":"iL","to":to,"1b":0.3,"me":"Fz","5g":"ca"})}F{B to=f[x].u1-1K.2S/2+20;B m=1y 5T({"mc":1a,"1J":"6O","to":to,"1b":0.3,"me":"FA","5g":"ca"})}1G(a2,2p)}}E vd(4I){B 6n=7o.6n(4I);B x;W(B i=0;i<6n.U;i++){x=4I[6n[6n.U*2I.5M()<<0]];if(x){1k}}J x};G.5G=E(x){v9(x)};E v9(x){kB[x]>-1?8T(kB[x]):\'\';if(5H[0]){if(2C==\'1Q\'){5H[0].1R=2I.4a(o.3N.x*100)+\'%\'}F{5H[0].1R=kK(2C)}}};E kK(x){if(x=="1Q"){J 2I.4a(o.3N.x*100)+\'%\'}F{J 2I.4a(2q(o.aq[x],o.5G[x])*100)+\'%\'}}G.cD=E(){J sN()};E sN(){if(v.5U==1){J 7o.6n(5U).U>0}B x=P;if(o.1D){x=7i().I(3a)<7i().U-1}J x};G.lB=E(){if(K(o.jY)){Gf(o.jY)}};G.gO=E(){B x=6j>0;if(o.1D){B z=7i().I(3a);x=z>0;if(z==1){if(K(o.1D[7i()[0]].5b)){x=P}}}J x};G.gT=E(){J K(o.1D)};G.dC=E(){m8=H;if(G.gO()){B x=2N(6j)-1;if(x<0){B y=7i().I(3a);if(y>0){B z=o.1D[7i()[y-1]];if(z){if(K(z.5b)){z=o.1D[7i()[y-2]]}if(z){G.mx(z.id);o.X.2H()}}}}F{o.2f=1N;5e(x,0);dV(x)}}};G.ly=E(){if(6j>0){dV(6j)}};E 7Y(x,i){J 62[i].I(x)};E fP(x){if(x[\'tB\']!=-1){fP(o.1D[x[\'7A\']]);6v(x[\'7A\'])}F{6v(0)}};G.g=E(x){cw(x){1q"17":J H4();1k;1q"1d":J 1K.2S;1k;1q"1f":J C.8C;1k;1q"J7":J 1a.oG;1k;1q"Jd":J C.dM;1k;1q"x":J 5n(1K.C.1c);1k;1q"y":J 5n(1K.C.1f);1k;1q"1B":J 1K.C.1B;1k;1q"1u":J eb;1k;1q"3j":J cm;1k;1q"1e":J 1e;1k;1q"aP":J 1e+aP;1k;1q"5a":J 5a;1k;1q"Y":J is=="Y";1k;1q"eq":J o.8Q[3a];1k;1q"sF":J iK;1k;1q"aL":J o.1D[o.aL]?o.1D[o.aL].1I:\'\';1q"cl":J v.cl?v.cl:\'\';1q"JS":J sN()?o.1D[7i()[7i().I(3a)+1]].1I:\'\'}};E 7i(){J 7o.6n(o.1D)};G.Iq=E(){3a=\'\';v.4T=\'\'};G.5a=E(){if(6x){B x=0;W(B i=1;i<11;i++){if(1Y[i]=="5v"){B y=o.2G.U;if(K(v.cP)){B z=v.cP.2z(",");W(B j=0;j<z.U;j++){if(o.2G.I(z[j])>-1){y--}}}if(y>0){if(y>1||(y==1&&o.2G!=1&&C.Gx==1)){x++}}}if(1Y[i]=="6e"){if(o.6e){x++}}if(1Y[i]=="7f"){if(o.2t==\'cp\'||v.7f){x++}}if(1Y[i]=="8c"){if(o.7u.U>1){x++}}if(1Y[i]=="e9"&&v.8g==1){if(o.q5.U>0){x++}}if(1Y[i]=="28"){if(K(o.2c)){W(B s=0;s<o.2c.U;s++){if(o.2c[s]!=\'\'){x++;1k}}}if(x==1&&o.kq==1){x=0}if(v.pM==1&&v.ra==1){x++}}if(1Y[i]=="5q"){if(o.2t!="aD"){x++}}if(1Y[i]in o.5G||1Y[i]=="2Z"||1Y[i]=="1t"){x++}if(1Y[i]){if(1Y[i].I("8G")>0){x++}}if(v.1j[is+i+\'1p\']==1){x--}}J x<=0}F if(is=="Y"){J f.U==0}F{J 5a}};G.4q=E(){if(1K.3W==o.1U){1K.3q(1a);o.1U.3q(1K);o.3e?o.3e.4q():\'\';1K=1Z;1a=1Z;iw=H}}};E Qr(){G.2Z=E(){J(o.1l.2m?"cr://wa.me/?":"cr://QT.Rk.8e/b5?")+"1F="};G.1r=E(5S){J"<9z d=\'Rm.Lg,5.Lh fS.Ro,4.Rp 11.Rq,3.Rs 10.Rt,3.L2 C6.Ru,3.L2 4.Rv,6.Rl 4.Rw,9.Ry C4.Rz,10.RA 4.RB,11.RC 4.RD,12.RE L4.RF,15.RG L7.RH,14.RI C8.Rx,15.Rj 9.R7,15.Ri 10.QW,15.A1 fS.QX,15.A1 15.QZ,12.R0 15.R1,9.R2 R3.R4,7.R5 15.QV,6.R6 14.Lg,5.Lh Z R8.zE,11.zZ vq.R9,11.Rb 12.Rc,12.Rd 11.Re,12.Rf n7.Rg,12.Rh 11.QU,12.Q3 10.Pc,11.Q2 C8.OM,11.ON 7.OO,9.OP 7.OQ,9.OT C7.OU,9.OV 6.sa,8.OW 6.sa,8.OX C6.sa,7.OL 7.P0,7.P2 7.P3,6.P4 C7.P5,6.P6 7.P7,6.pO 7.P8,6.pO C7.P9,6.pO 8.OZ,6.pO 8.OI,6.Ow C8.OH,6.Ok 8.Ol,6.Om 8.Oo,6.Op C8.Oq,7.Or 8.Jq,8.Os 8.Ot,8.Ou C9.Oj,8.Ov 9.Ox,8.OA 8.OB,8.OC C8.Jq,8.OD 8.OE,8.OF 8.OG,8.Pa C8.OJ,8.PC 8.PE,8.PF 8.PG,8.PH C8.PN,8.PD 8.PR,9.PV 8.PY,9.PP C8.PB,9.Pp 8.PA,9.Pe 9.Pf,10.Pg C9.Ph,10.Pi 10.Pk,10.Pl 10.Pn,10.Pd Al.Po,11.Pq 10.Pr,11.Ps 10.Pt,10.zY Al.Pu,10.AU 11.Pv,10.Pw 11.Px,10.TW n7.TY,10.TZ 11.U0,10.U4 11.TT,10.U5 n7.U7,10.U9 12.Ub,10.Uc 12.U6,10.TR vq.TF,10.AU 12.TQ,10.Tu 13.Tv,10.zY fS.zy,10.Tw 13.zy,11.Tx 12.zE,11.zZ Z\' 5h=\'"+5S+"\' 5h-nO=\'D0\'></9z>"}};E Ty(){G.2Z=E(){J"cr://t.me/2Z/18?18="};G.1r=E(5S){J"<9z d=\'TB.D3,4.D1 nv.TC,4.TD 15.TE,4.TH 14.E5,4.El TI.E5,4.El vo.TO,4.UR 11.UY,5.V3 8.V4,6.V5 C6.V6,7.V8 4.Va,8.UL 4.Uy,8.UK C4.EY,8.Um 3.Up,9.Uq 3.Ur,9.Us C3.Uv,9.Uw 3.Ul,10.Ux 4.EY,10.Uz C4.UD,10.UE 6.UF,11.UG 6.UH,11.UI C6.UJ,11.Uk 13.SB,6.Tq 13.Dl,6.Sd fS.Se,7.Sf 8.Sk,11.Sc 8.Sn,11.Sp C8.Sq,11.Sr 7.St,14.Sv 8.Sw,14.Sx C8.RN,14.RO 8.RP,14.RQ 8.RR,14.Dp C8.RS,14.RT 8.RU,14.Ci 8.RV,14.Ci C9.RW,14.RX 9.S0,13.S3 10.S4,13.S5 n7.S6,14.S7 12.S8,15.Sz 12.Sb,15.SA T1.T3,15.T4 vq.T6,15.T7 13.T8,15.vw 13.Ta,15.vw fS.Tb,15.vw 13.Tc,15.T2 13.Dl,15.Td fS.Tk,15.Tl 13.Tm,15.Tn 14.Da,14.Dp vo.Da,14.To 14.SO,14.SZ 14.SD,14.SE vo.SG,12.SH 14.SI,10.SJ 15.SC,9.SN nv.SP,7.SR 15.SS,6.ST 15.SU,5.SV nv.SW,5.SX 15.SY,5.RL 15.Oi,5.LW nv.LE,5.Mr 15.Mo,4.Mm 15.D3,4.D1 Z\' 5h=\'"+5S+"\' 5h-nO=\'D0\'></9z>"}};B rz=E(18,jK){B 6X=P;if(18.I(\'6X\')==0){6X=H;18=18.1n(5)}B ng=qa(18);B 2r;B 3p;B jP=P;B 4e=P;B oY=P;B p7=P;B 2y=H;B uS=[];B cj=1;B kj=P;B uu;B dJ=0;B nB=0;B p6=P;B nu=\'CZ\'+v.id+(6X?\'6X\':\'\');fJ("#CZ"+v.id+"{17:100%!6k;1d:100%!6k;5W-17:1S!6k;5W-1d:1S!6k}");B 1K=1O(\'1X\');B nh=0;1K.6o(\'id\',nu);jK.1M(1K);o.6e=P;!6X?o.X.iW():\'\';if(o.1l.2m){v.4R=1}if(v.CQ!=1){B 8t=1O(\'1X\');jK.1M(8t);O(8t,{1m:"2o",1f:0,1c:0,"2i-1t":"#qi",1d:"100%",17:"100%","1B":0});8t.1z("A4",E(1h){1h.6H=H});if(o.1l.2m){8t.1z("hb",E(1h){1h.6H=H});8t.1z("2x",E(1h){1h.6H=H});8t.1z("h9",E(1h){1h.6H=H;gz(1h);if(v.e6==1){1G(CW,100);1G(nt,2p)}})}F{8t.1z("xj",E(1h){B x=H;if(v.2a==1){if(K(v.7x)&&!oY){x=P}if(K(v.n3)&&aK()=="8o"&&1b()>0){x=P}}if(x&&v.e6==1&&v.CL!=1){3i(G);1G(nt,4g)}})}v.e6==1&&v.M7!=1?3i(8t):\'\'}E nt(){5K(8t)}E CW(){if(v.CL!=1){3i(8t)}}if(v.4R==1&&v.3n==0){9M()}if(!1V[\'YT\']){1V.Mf=E(){nk();W(B i=0;i<5j.U;i++){if(5j[i]){if(5j[i].3z("id")!=v.id){if(5j[i].3z(\'B8\')){5j[i].3z(\'B9\')}}}}};B uW=vM("4U.8e/CU","4U.8e/CU","LF");if(uW){uW.tX=E(e){o.X.dx();if(v.Cr!=1){2r=\'KC LX ih\';o.R.5O()}}}}F{nk()}E nk(){if(v.4R==1||6X){!jP?jl():\'\'}F{o.X.dx()}}E jl(){if("YT"in 1V){if(K(YT.nT)&&!jP){1v("Dr g0");B uF=0;if(v.CQ==1){uF=1}o.2f>0?dJ=2N(o.2f):\'\';3p=1y YT.nT(nu,{1d:o.91,17:o.9a,M4:ng,M3:{Md:1,LY:nu,Lw:1,LV:1,gA:1,kc:((v.DA==0||(v.Lx!=1&&o.1l.7Q))&&o.1l.2m?0:1),LD:3,S:uF,Ms:0,Mj:1,F5:0,3n:6X||v.3n==1?1:0,9f:0},3b:{\'Me\':uC,\'LL\':Df,\'5O\':5O,\'LR\':Co}});if(o.2f>0){o.2f=1N}2A();jP=H}F{1G(jl,42)}}F{1G(jl,42)}}B jG;E uC(){if(o.R){1v("Dr fW");4e=H;2P(uu);o.X.7W();if(6X){if(o.1l.sC){o.X.5m()}3p.nj();o.2a.Lz()}F{if(v.3n==1&&o.1l.sC&&!o.pf){o.X.5m();if(o.1l.2m){3R(jG);jG=7e(Dg,dO)}}if(v.4R==0){3p.nj()}F{o.X.dx()}nh=3p.uG();o.R.ah();if(cj!=1){9H(cj)}df();2A();if(v.Mg==1){3o{if(3p.uV()){if(K(3p.uV().1I)){v.1I=3p.uV().1I;o.X.aC(\'1I\')}}}2U(e){}}}}}E Dg(){B x=3p.EO();if(x==2||x==-1){o.S.3l();o.S.7W();3R(jG)}if(x==1){3R(jG)}}E Df(1h){if(v.Mb==1){1v(\'YT\',1h.2b)}if(6X){if(1h.2b==YT.dP.C2){o.2a.Mc()}if(1h.2b==YT.dP.De){}}F{if(1h.2b==YT.dP.De){if(nB==1){nB=0;uC()}if(!o.1E){o.X.2H()}if(dJ>0){3p.DW(dJ,H);dJ=0;o.2f=1N}nt();oY=H;4e=H;if(p7){3p.uT()}F{o.R.aG();o.R.d6()}Cn();if(K(v.56)){W(B i=0;i<o.2G.U;i++){if(v.56==o.2G[i]){6g(i)}}v.56=1Z}F{if(K(o.56)){W(B i=0;i<o.2G.U;i++){if(o.56==o.2G[i]){6g(i)}}o.56=1Z}}kj=P}if(1h.2b==-1&&kj&&o.1E){o.X.7W();kj=P;e7()}if(1h.2b==YT.dP.M1){}if(1h.2b==YT.dP.C2){8O()}if(1h.2b==YT.dP.Mu){if(!o.1E){}if(o.1E){kj=H;9M()}}if(1h.2b==YT.dP.NG){}}}E 5O(1h){if(6X){o.2a.ND()}F{if(1h.2b==2){2r="Gs 4U id"}if(1h.2b==5){2r="sj 5a"}if(1h.2b==101||1h.2b==150||1h.2b==100){2r="G gy is NC"}if(v.Nu==1){K(v.Cu)?2r=v.Cu:\'\'}if(v.Cr!=1){o.R.5O()}F{1p(o.2j)}}}E 8O(){v.1A>0?dJ=v.1A:\'\';o.R.8O();o.R.ah()}E e7(){if(!o.Gn&&o.1E){o.X.3l()}}E d6(){o.R.d6()}E df(){o.R.df();o.X.qL()}E ah(){o.R.ah()}E e1(){o.R.e1()}E 9M(){if(o.R){o.R.9M()}F{uu=1G(9M,100)}}E Co(1h){ut(1h.2b)}E Cn(){if(!p6){B x=3p.NN()+\'\';if(x!=\'\'&&x!=1N){o.2G=x.2z(\',\');o.2G=o.2G.Du();if(v.uM==0){B y=o.2G.I(\'2y\');if(y>-1){o.2G.tS(y,1)}}W(B i=0;i<o.2G.U;i++){o.2G[i]=kF(o.2G[i])}p6=H;ut(3p.NO())}}}E ut(x){o.3v=o.2G.I(kF(x+\'\'));o.S.vF(o.3v)}G.3P=E(){J{"17":0,"1d":0}};G.3h=E(x){ng=qa(x);if(o.2f>0){dJ=2N(o.2f)}bO(ng)};E aK(){B 7B=-1;if(4e){7B=3p.EO()}B x=\'\';if(7B==-1){x="8o"}if(7B==1||7B==3){x="7T"}if(7B==2){x="8o";if(o.1E){o.X.3l()}}if(7B==5){x="8o"}if(7B==0){x="7y"}J x}E 2A(){3o{if(K(3p)){3p.O3(o.2Y,o.4p)}}2U(e){1v(e)}}E kF(x){B y=x;if(x=="NR"){y="v0"}if(x=="9j"){y="q0"}if(x=="Nm"){y="q3"}if(x=="Nl"){y="qg"}if(x=="MS"){y="qq"}if(x=="MP"){y="qp"}if(v.F6==1){y=2T(y)}if(x=="2y"){y=2T("2y")}uS[y]=x;J y}E 1b(){B x=4e?3p.MO():0;if(x>0&&v.iv>0){v.4O=x-v.iv;v.iv=-1}J x};E 9H(x){3o{3p?3p.MJ(x):\'\';cj=x}2U(e){}};G.pI=E(){nk()};G.2H=E(){if(4e){3p.nj()}F{if(!jP){jl()}F{}}};G.3l=E(){if(4e){3p.uT()}};G.8k=E(){if(4e){aK()==\'7T\'?3p.uT():3p.nj()}};G.43=E(x){if(4e){3p.DW(x,H);js("4f",x)}};G.aH=E(){J P};G.5m=E(){4e?3p.5B():\'\'};G.6F=E(){4e?3p.MB():\'\'};G.4c=E(x){4e?3p.BA(x*100):\'\'};G.mu=E(){J aK()==\'7T\'};G.5A=E(){J P};G.tm=E(x){6g(x)};E 6g(x){if(4e){if(K(o.2G[x])){B y=uS[o.2G[x]];2y=y==\'2y\';B z=1b();3p.Mz(y)}}}G.ge=E(x){9H(x)};G.4e=E(){J 4e};G.6W=E(){J aK()};G.1b=E(){J 1b()};G.1o=E(){B x=4e?3p.uG():0;if(x!=nh){nh=x;o.R.ah()}if(K(v.4v)){if(7F([v.4v],\'-\')){x=x+v.4v*1}F{x=v.4v}}J x};G.af=E(){B x=0;if(4e){x=3p.MH()*3p.uG()}J x};G.4Y=E(){2A()};G.jF=E(){J 2r};G.2y=E(){J v.uM==1?2y:P};G.Bl=E(x){bO(x)};E bO(x){18=x;if(3p){nB=1;3p.Ni(x,0)}}G.lT=E(){if(o.1l.2m&&o.1l.aU){G.2H();p7=H}F{if(aK()=="7T"){G.3l()}}};G.gc=E(){p7=P};G.sO=E(){J H};G.4q=E(){4e?3p.au():\'\';4e=P;p6=P;3o{if(1K){jK.3q(1K)}jK.3q(8t)}2U(e){}}};B Ed=E(){B x=\'\';B t=0;B d=0;if(o.5z){if(v.Nd!=1){if(3d.4y("ek"+v.id+o.9N)!=1Z){x=3d.4y("ek"+v.id+o.9N)}if(v.7U==1&&3d.4y("l2"+v.id+o.9N)!=1Z){o.7U=3d.4y("l2"+v.id+o.9N)}if(K(v.7I)){if(3d.4y("ek"+o.d+v.7I)!=1Z){x=3d.4y("ek"+o.d+v.7I)}if(v.7U==1&&3d.4y("l2"+o.d+v.7I)!=1Z){o.7U=3d.4y("l2"+o.d+v.7I)}}if(o.7U&&v.7U==1){o.r9=o.7U.2z(",")}if(x.I("{")==0){if(v.Er==1){o.aL=x.1n(1,x.I("}")-1)}F{o.tD=v.4T=x.1n(1,x.I("}")-1)}x=x.1n(x.I("}")+1);v.Nb==1?v.Y.ma=0:\'\'}eI(x)}};E eI(x){if(x){if(x.I("--")>0){B y=x.2z("--");t=3T(y[0]);if(v.Na==1&&t>0&&v.3n==1){v.3n=0}if(v.Er==1){o.rv=t}F{d=3T(y[1]);o.2f=t}}}}G.Bs=E(){if(K(v.7I)){if(3d.4y("ek"+o.d+v.7I)!=1Z){x=3d.4y("ek"+o.d+v.7I);eI(x);o.S.dS(t,d);o.S.3Y(t,d);v.1o=d}F{o.2f=0;o.S.dS(0,0);o.S.3Y(0,0);v.1o=0}}};G.mN=E(t,d){if(o.R.5A()&&v.MW==1){}F{B ct=1y 6T().8D();3d.7J("ek"+(K(v.7I)?o.d+v.7I:v.id+o.9N),(K(o.3a)?"{"+o.3a+"}":\'\')+t+\'--\'+d+\'--\'+ct)}};G.CC=E(x){o.7U=(o.7U?o.7U+\',\':\'\')+x;3d.7J("l2"+(K(v.7I)?o.d+v.7I:v.id+o.9N),o.7U)};G.9S=E(){J{t:t,d:d}}};B kn=E(){B 2D=[];B aM=[];B 5a=H;B 7H;B 9P=-1;B sG;B am;B ow=[];B oQ;B iR=[];G.1A=E(x){if(!x&&am){p3(am);am=1N}F{x?p3(x):\'\'}};G.zp=E(x){p3(x)};G.JC=E(){iR=[]};E p3(x){if(x.I("#"+v.cF)==0&&x.I(v.dr)>0){o[o.fd[1]](x,Ek)}F{bE(x)}}E Ek(x){o.2c=x;bE(x)}E bE(x){!x?x=\'\':\'\';if(x!=\'11\'){B 1A=0;B rj=H;B kC=\'\';o.2c=x.2z(",");o.3k=[];o.3w=-1;if(wn()&&v.qS==1){if(3d.4y("r4")!=1Z){kC=3d.4y("r4")}}F{if(o.qF){kC=o.qF}}W(B i=0;i<o.2c.U;i++){if(o.2c[i].I("#0")==0){o.2c[i]=cN(o.2c[i])}if(o.2c[i].I("#"+v.an)==0){o.2c[i]=o[o.fd[0]](o.2c[i])}if(o.2c[i].I("[")==0&&o.2c[i].I("]")>1){o.3k[i]=o.2c[i].1n(o.2c[i].I("[")+1,o.2c[i].I("]")-1);o.2c[i]=o.2c[i].1n(o.2c[i].I("]")+1);rj=P}F{o.3k[i]=o.2c[i].1n(o.2c[i].pz("/")+1);o.3k[i]=o.3k[i].1n(0,o.3k[i].pz("."))}if(o.2c[i].I("#0")==0){o.2c[i]=cN(o.2c[i])}if(o.2c[i].I("#"+v.an)==0){o.2c[i]=o[o.fd[0]](o.2c[i])}}if(o.3k.U>1&&v.pi==1){o.3k.2L(ns(\'N3\',(v.NB==1&&K(v.E7)?v.E7:2T(\'Ks\'))));o.2c.2L("9V")}if(o.3k.U>0&&v.9J==1){if(v.A5==1){7H=0;1A++;o.3k.jd(ns(\'E6\',2T(\'6Z\')));o.2c.jd("")}F{o.3k.2L(ns(\'E6\',2T(\'6Z\')));o.2c.2L("");7H=o.3k.U-1}}W(B i=0;i<o.2c.U;i++){if(K(v.DD)){if(v.DD==o.3k[i]){1A=i;o.3w=i;v.fA=1}}if(kC!=\'\'){if(kC==o.3k[i]){1A=i;o.3w=i}}}if(v.9J==1&&v.fA==0){o.3w=7H}K(o.S)?o.S.aZ():\'\';if(v.fA==1){o.3w=1A;if(o.1A){if(v.pi==1&&o.2c[1A]=="9V"){qZ(o.3w)}F{i9(o.3w)}}F{am=x;o.5k=o.2c[1A]!=\'6Z\'&&1A!=7H;1G(iJ,42)}}F{if(rj&&o.2c.U<3){i9(7H==0?1:0)}v.9J!=1?o.3w=-1:\'\'}}F{4q()}};E zB(x){if(x.I(\'js:\')==0){3o{x=2n(x.1n(3))}2U(e){bh.1v(e.8p)}}J x?x:\'\'};G.uD=E(x){je(x,\'1H\')};E i9(x){if(K(o.2c[x])){o.2c[x]=zB(o.2c[x]);if(o.2c[x]){if(o.2c[x].I(".")>-1){o.p0=o.2c[x].2z(" or ");o.gn=0;je(x)}F{if(o.2c[x].I(\'aM\')==0){if(aM[o.2c[x].1n(4)]){rw(o.3k[x],aM[o.2c[x].1n(4)])}}if(o.2c[x].I(\'1H\')==0){o.R.h6(x,"Im");o.5k=H;o.3w=x;o.S.aZ()}}}}}E qZ(x){o.5k=H;iJ()}E je(x,y){B 18=y==\'1H\'?x:4D(o.p0[o.gn]);B jV=18;B go;if(ow[18]){if(o.2c[x]!=\'9V\'){o.5k=H;iJ()}}F{if(18.I(\'bI\')>0&&18.I(\'bI\')<4){go=18.1n(0,18.I(\'bI\'));jV=18.1n(18.I(\'bI\')+3)}B 4Z=f1(jV);9P=x;o.kq=1;4Z.ch=E(){o.kq=0;if(G.fy==4&&G.6W==4w){o.5k=H;rw(18,G.ee,x,y)}F{if(o.gn+1<o.p0.U){o.gn++;je(9P)}F{pA("fT")}}};4Z.tX=E(e){o.kq=0;if(o.gn+1<o.p0.U){o.gn++;je(9P)}F{pA("fT")}};4Z.b5()}};E pA(x){1v("28 fn pC or AV B5");if(o.3k[o.3w]){if(o.3k[o.3w].I(2T("fT"))==-1){o.3k[o.3w]=o.3k[o.3w]+\' (\'+2T(x)+\')\'}}if(v.NS==1&&9P>-1){o.2c[9P]=\'\';o.3k[9P]=\'\'}o.3w=-1;o.5k=P;if(o.NU){o.S.aZ();o.S.4P()}F{1G(E(){if(o.S){o.S.aZ();o.S.4P()}},100)}if(K(o.28)){o.1U.3q(o.28);o.28=1Z}}E rw(18,x,y,z){B go;if(x.I("#"+v.an)==0){x=o[o.fd[0]](x)}if(x.I("#"+v.cF)==0&&x.I(v.dr)>0){x=o[o.fd[1]](x)}if(18.I(\'bI\')>0&&18.I(\'bI\')<4){go=18.1n(0,18.I(\'bI\'))}if(18.I(\'.iT\')>-1||18.I(\'.qM\')>-1||18.I(\'.pa\')>-1||18.I(\'.ro\')>-1){B l=go?go:o.3w;if(o.2c[l]=="9V"){l=y}if(z!=\'1H\'||!2D[l]){2D[l]=7o();2D[l][0]=[];2D[l][1]=[]}B 3C=c5();3C=x.2z(/\\r|\\n/);B qK=1;B t1=0;B t2=0;B gf=(K(v.AZ)?v.AZ:0);if(18.I(\'kJ=\')>0){gf=18.1n(18.I(\'kJ=\')+6)*1}W(B i=0;i<3C.U;i++){if(18.I(\'.iT\')>-1||18.I(\'.ro\')>-1){if(3C[i].I(\'-->\')>-1&&3C[i].I(\':\')>-1){if(z==\'1H\'){if(iR.I(3C[i])>-1){1k}iR.2L(3C[i])}t1=iY(3C[i].1n(0,3C[i].I(\'-->\')))*1+gf;t1==0?t1=1:\'\';t2=iY(3C[i].1n(3C[i].I(\'-->\')+4,12))*1+gf;K(2D[l][0][t1])?\'\':2D[l][0][t1]=\'\';W(B j=t1;j<t2;j++){2D[l][1][j]=t1}qK++}F{3C[i]=4D(3C[i]);if(3C[i]!=\'\'&&3C[i].U>0&&3C[i]!=qK&&3C[i]!=\'Mt\'){if(2F(2D[l][0][t1])){2D[l][0][t1]=2D[l][0][t1]+\'<br>\'+3C[i]}F{2D[l][0][t1]=3C[i]}}}}if(18.I(\'.qM\')>-1||18.I(\'.pa\')>-1){if(3C[i].I(\'Nx:\')>-1){t1=iY(3C[i].1n((18.I(\'.pa\')>-1?3C[i].I(\'=0\')+3:12),12))*1+gf;t2=iY(3C[i].1n((18.I(\'.pa\')>-1?3C[i].I(\'=0\')+14:23),10))*1+gf;B p=\'\';if(3C[i].I(\'0,,\')>0){p=3C[i].1n(3C[i].I(\'0,,\')+3)}F{if(3C[i].I(\'An,\')>0){p=3C[i].1n(3C[i].I(\'An,\')+6)}if(3C[i].I(\')}\')>0){p=3C[i].1n(3C[i].I(\')}\')+2)}}if(p!=\'\'){if(2D[l][0][t1]!=1N){2D[l][0][t1]+=\'<br>\'+p}F{2D[l][0][t1]=p}2D[l][0][t1]=2D[l][0][t1].1T(/{.*?}/,\'\');2D[l][0][t1]=2D[l][0][t1].1T(/\\\\\\\\N/,\'<br>\');2D[l][0][t1]=2D[l][0][t1].1T(/\\\\N/,\'<br>\');W(B j=t1;j<t2;j++){2D[l][1][j]=t1}}}}}ow[18]=H;if(o.2c[y]!=\'9V\'){z!=\'1H\'?iJ():\'\'}}F{if(x!=\'\'){if(x.I(\'[\')==0){bE(x)}F{pA("2r")}}F{4q();o.S.4P()}}}E iJ(){o.S.aZ();o.X.jQ();o.S.4P()}E iY(iT){B 1C=iT.2z(\':\');B 4r=0;1C.U==2?1C.jd("bJ"):\'\';1C[0]!=\'bJ\'?4r+=1C[0]*uw:\'\';1C[1]!=\'bJ\'?4r+=1C[1]*60:\'\';4r+=1C[2].1n(0,2)*1;4r=4r*10+1C[2].1n(3,1)*1;J 4r};E 9b(x){if(K(o.3w)){if(o.3w!=x){iR=[];if(x==-1||(v.9J==1&&x==7H)){pq()}F{v.e4=0;o.3w=x;o.5k=H;v.fA=1;sy(x);js("28",o.3k[x]);o.S.aZ()}}F{if(v.9J!=1){pq()}}}}E sq(){if(K(o.3k[o.3w])){if(o.5z&&v.qS==1){3d.7J("r4",o.3k[o.3w])}F{o.qF=o.3k[o.3w]}}}E sy(x){if(K(o.2c[x])){1v("f0",x);o.3w=x;sq();if(o.2t=="1H"&&o.al==H){o.R.h6(x,"1H")}F{if(o.2t=="3X"&&o.su==H){o.R.h6(x,"3X")}F{if(o.2c[x]=="9V"){qZ(o.3w)}F{i9(o.3w)}}}}};G.qW=E(){if(o.f4){B x=o.f4.4t;if(x[0]){B y=1y qT();y.ch=E(e){B z=e.3Z.kS;aM.2L(z);o.3w=-1;B z=x[0].6G;if(z.U>40){z=x[0].6G.1n(0,15)+\'...\'+x[0].6G.1n(-15)}if(v.9J==1&&v.A5==1){o.2c.2L(\'aM\'+(aM.U-1));o.3k.2L(z+\'\');9b(o.2c.U-1)}F{o.2c.jd(\'aM\'+(aM.U-1));o.3k.jd(z+\'\');v.9J==1?7H++:\'\';9b(0)}o.f4.6c=""};y.LH(x[0])}F{o.f4.2x()}}};G.9b=E(x){9b(x)};G.7H=E(){J 7H};G.LZ=E(x){7H=x};G.1u=E(x){kr(x)};G.C=E(){rU()};G.6r=E(){4q()};G.6Z=E(){pq()};E pq(){js("28","6Z");o.5k?o.Bw=o.3w:\'\';o.3w=v.9J==1?7H:-1;v.fA=0;o.5k=P;o.S.aZ();sq();o.su?sy(o.3w):\'\';K(o.28)?o.1U.3q(o.28):\'\';o.28=1Z}E kr(1b){if(o.as){J}B t=2N(1b*10);if(v.e4){1b=1b-v.e4*1}if(o.5k&&K(o.2c)){if(2D){B x=o.3w;B t=2N(1b*10);if(v.v3==1&&!o.1E){J}if(o.2c[x]=="9V"){if(!oQ){W(B i=0;i<o.2c.U;i++){1G(i9,i*42,i)}if(!2D[x]){2D[x]=7o();2D[x][0]=c5();2D[x][1]=c5()}oQ=H}F{if(2D[x][1][t]){}F{W(B i=0;i<o.2c.U;i++){if(2D[i]){if(K(2D[i][1])){if(K(2D[i][1][t])){if(!2D[x][0][t]){2D[x][0][t]=\'\'}2D[x][0][t]+=(2D[x][0][t]!=\'\'?\'<br>[ph]\':\'\')+2D[i][0][2D[i][1][t]]+(2D[x][0][t]!=\'\'?\'[/ph]\':\'\')}}}}if(K(2D[x][0])){if(K(2D[x][0][t])){2D[x][1][t]=t}}}}}if(K(2D[x])){if(K(2D[x][1])){if(K(2D[x][1][t])){B y=\'\';y=2D[x][0][2D[x][1][t]];if(!K(o.28)){o.28=1O(\'1X\');4i(o.28,{id:\'j3\'+v.id+\'4B\'+\'28\'});o.1U.1M(o.28);rU();js("uI",o.3k[x])}if(5a){5K(o.28)}JZ();if(v.K0==1){y=LJ(y)}if(v.pi==1){y=y.1T(/\\[ph\\]/gm,\'<7m C="1t:\'+3A(v.kU)+\'">\');y=y.1T(/\\[\\/ph\\]/gm,\'</7m>\')}if(y.I(\'<c.\')>-1){y=y.1T(/\\<c./gm,\'<7m C=1t:\');y=y.1T(/\\<\\/c\\>/gm,\'</7m>\')}if(v.8Z){if(v.8Z.2D==1&&sG!=y){js("2D",y);sG=y}}o.28.1R=\'<7m C="\'+(v.Ll==1?\'2i-1t:\'+4E(v.os,v.oj)+\';\':\'\')+\'-3Q-6f-oF-1k: LP;1t:\'+3A(v.kY)+\';2Q:\'+v.sM+\'px \'+v.sM*2+\'px;2R-6M:\'+v.K9+\'px;2M:0 0;2E-1d:\'+(v.Kf?v.Kf:1.8)+\';3O-ez:\'+v.op+\'">\'+4D(y)+\'</7m>\';O(o.28,{"3O-3P":((2N(v.pk)+((2N(v.kW)-100)*2N(v.pk)/100))+"px")});if(v.Kk==1){if(o.2e){O(o.28,{"3O-3P":((v.pc+((2N(v.kW)-100)*v.pc/100))+"px")})}}5a=P}F{if(!5a&&K(o.28)){sA()}}}}F{sA()}}}}E sA(){if(!5a){o.28?o.28.1R=\'\':\'\';5a=H;3i(o.28)}}E rU(){if(o.28){O(o.28,{"1m":"2o","17":"100%","2Q-1c":"10%","2Q-2l":"10%","1c":0,"1t":v.kY,"1F-8N":"8P","6f-k5":"2R-6f"});if(v.LM==1&&K(v.sb)){v.sb!=\'\'?O(o.28,{"3O-dz":v.sb}):\'\'}if(v.rK==1){O(o.28,{"1F-ak":"-41 -41 0 #gw,41 -41 0 #gw,-41  41 0 #gw,41  41 0 #gw"})}F{if(v.oe==1){O(o.28,{"1F-ak":"41 41 ov NL"})}F{O(o.28,{"1F-ak":"1S"})}}if(v.NK==1){sc(o.28,\'o.o1\')}F{v.K0!=1?gE(o.28):\'\'}}}E JZ(){if(!o.o1){if(o.S.oR()||v.eB>v.1w.h){O(o.28,{"1m":"2o","1f":"2y","1c":0,"2J":(v.eB*1)})}F{O(o.28,{"1m":"2o","1f":"2y","1c":0,"2J":(v.eB*1+v.1w.h*1)})}}}E 4q(){o.3w=-1;o.5k=P;o.pZ=P;v.28=1Z;v.n6=1Z;o.2D=1Z;o.2c=1Z;oQ=P;ow=[];2D=[];if(K(o.S)){o.S.aZ()}o.3k=1Z;if(K(o.28)){o.1U.3q(o.28);o.28=1Z}o.3w=1Z;o.5k=P}};B Fn=E(){o.oo=1O("1X");B r=v.6P;B oo=[];B 1C=\'5h="\'+v.4k+\'" 3F="\'+v.4k+\'" 3F-17="2"\';oo[1]=1O(\'1X\');oo[1].1R=\'<2g><9z d="M0,0 L\'+r+\',0 Q0,0 0,\'+r+\' Z" \'+1C+\'/></2g>\';oo[2]=1O(\'1X\');oo[2].1R=\'<2g><9z d="M0,0 L\'+r+\',0 L\'+r+\',\'+r+\' Q\'+r+\',0 0,0 Z" \'+1C+\'/></2g>\';oo[3]=1O(\'1X\');oo[3].1R=\'<2g><9z d="M\'+r+\',0 L\'+r+\',\'+r+\' L0,\'+r+\' Q\'+r+\',\'+r+\' \'+r+\',0 Z" \'+1C+\'/></2g>\';oo[4]=1O(\'1X\');oo[4].1R=\'<2g><9z d="M0,0 Q0,\'+r+\' \'+r+\',\'+r+\' L0,\'+r+\' Z" \'+1C+\'/></2g>\';O(o.oo,{\'1m\':\'2o\',\'1f\':0,\'1c\':0,\'4l-3b\':\'1S\',\'1d\':\'2y\',\'5l\':\'3c\',\'17\':\'100%\',\'1d\':\'100%\'});o.oo.C.4S=4g;O(oo[1],{\'1m\':\'2o\',\'1f\':-1,\'1c\':-1});O(oo[2],{\'1m\':\'2o\',\'1f\':-1,\'2l\':-1});O(oo[3],{\'1m\':\'2o\',\'2J\':-1,\'2l\':-1});O(oo[4],{\'1m\':\'2o\',\'2J\':-1,\'1c\':-1});W(B i=1;i<5;i++){O(oo[i],{\'17\':r,\'1d\':r,\'2E-1d\':0});o.oo.1M(oo[i])}o.1K.1M(o.oo)};B FP=E(1a,bg,C){B 1r=1O("1X");B cu;1a.1M(1r);O(1r,{"1m":"2o","1f":(-bg.2S/2)-1,"2i-1t":3A(2q(C.Np,"#Nz")),"2R-Ny":1,"2k":"1S","9t":"1S"});if(C.oh==1&&C.Ko){cu=C.Ko.2z(",");O(1r,{"3O-3P":8,"1t":"#eH","2Q":"ov ov 0 ov","2E-1d":"1"})}F{C.oh=0;O(1r,{"1d":9,"17":13,"2i-7X":"18(2b:7X/2g+Nw;gv,Nv=)"})}G.f6=E(){B y=0;B x=o.R.qf();x=x.1T(2T("2y")+\' \',\'\');if(x){if(C.oh!=1){if(x==\'HD\'||x.I(\' HD\')>0||x.I(\'hd\')==0||x.I(\'Hd\')==0){x=\'Ae\'}}B x0=x;if(x.I(\' \')>0){x0=x.1n(0,x.I(\' \'))}y=2N(x0)}B t=\'-1\';B z;if(C.oh==1){if(mj(y)){y=x}t=\'\';W(B i=0;i<cu.U;i++){B ox=cu[i].2z(":");if(ox.U==2){if(4D(ox[0])==y){t=4D(ox[1])}}}if(t==\'\'){if(y>oy){z=H;1r.1R="HD"}}F{z=H;1r.1R=t}}F{if(y>oy){z=H}}if(z){5K(1r);if(bg.29-1r.29>0){O(1r,{"1c":(bg.29-1r.29)/2-2})}}F{3i(1r)}}};B vI=E(1a,2v,w,C){v.eF=1;B C=C;B w=w;B 4A=-1;B jZ=1O("1X");eC(jZ);1a.1M(jZ);K(v.2v)?8B(w):\'\';G.xg=E(w){s6(w)};G.c0=E(w){8B(w)};G.2B=E(x){J 7K(x)};G.4r=E(){rS()};E 8B(w){if(2v){W(B i=0;i<2v.U;i++){jZ.3q(2v[i])}}2v=[];if(v.2v){if(1P(v.2v)=="59"){v.2v=2n(v.2v)}W(B i=0;i<7o.6n(v.2v).U;i++){if(K(v.2v[i].1b)){2v[i]=1O("1X");O(2v[i],{\'1m\':\'2o\',\'1c\':0,\'1f\':-C.h/2,\'1d\':C.h,\'1B\':2q(v.2v[i].1B,C.oP),\'4l-3b\':\'1S\',\'2k\':\'1S\',\'2i-1t\':2q(v.2v[i].1t,C.Jy),\'4F\':\'1B 0.1s 3f,2K 0.2s 5g-in-4r\'});2v[i].1b=v.2v[i].1b;2v[i].w=v.2v[i].17;2v[i].1F=v.2v[i].1F;jZ.1M(2v[i])}}s6(w)}}E s6(w){B x=o.R.1o();W(B i=0;i<2v.U;i++){if(x>0){B pw=2q(2v[i].w,C.Jr);pd=pw;if(6t(pw).I(\'s\')>0){pd=pw.1n(0,6t(pw).I(\'s\'))*1;pw=(pd/x)*w}if(2v[i].1F){2v[i].9p=2v[i].1b+pd}O(2v[i],{\'1c\':w*(2v[i].1b/x)-w/2,\'17\':pw,\'2k\':\'4n\'})}F{3i(2v[i])}}}E 7K(x){B y=\'\';rH=P;if(K(x)){W(B i=0;i<2v.U;i++){if(2v[i].1F&&2v[i].9p){if(x>=2v[i].1b&&x<2v[i].9p){y=\'<4Q C="2E-1d:1.2;\'+(K(v.2v[i].Kq)?v.2v[i].Kq:\'\')+\'">\'+2v[i].1F.1T(/ /g,"&dK;")+\'</4Q>\';if(4A!=i){if(4A!=-1){O(2v[4A],{\'1B\':2q(v.2v[4A].1B,C.oP),"2K":"3r(1)"})}O(2v[i],{"1B":1,"2K":"3r(2)"});4A=i}rH=H}}}if(!rH){rS()}}J y}E rS(){if(4A>-1){O(2v[4A],{\'1B\':2q(v.2v[4A].1B,C.oP),"2K":"3r(1)"});4A=-1}}};E Ln(){B 3j=-1;B pl=[];B 3B=[];B ex=[];B 1I=[];B 3S=[];B eM=[];B h=[];B j=0;B 6Q=4;B bc=0;B 6y;B rB;B C=v.Y;!C.eN?C.eN=\'3E\':\'\';!C.9T?C.9T=\'46\':\'\';B eN=(C.Lm==1?C.eN:C.1t);B 9T=(C.Lm==1?C.9T:C.4k);if(v.Y.6y>0&&!6y){if(1P oN!=="1N"){6y=1y oN(H)}}fJ(".oL"+v.id+"6O::-3Q-sI {17: "+3T(0.3*2q(C.Mv,1))+"MD;}.oL"+v.id+"6O::-3Q-sI-9O {2i:"+4E(C.4k,C.4u)+"}.oL"+v.id+"6O::-3Q-sI-b0 {2i:#"+C.5R+"}");C.9h=4;B mb="<2g 17=\'"+(C.9h*2+2)+"\' 1d=\'"+(C.9h*1.2+1)+"\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\' C=\'4l-3b:1S;4F:2K 0.2s 5g-4r;1m: 2o;2J: 50%;2M-2J:-"+((C.9h*1.2+2)/2)+"px;2l:"+(C.jI/2+C.9h/2)+"px\'><g><2E x1=\'1\' y1=\'1\' x2=\'"+(C.9h+1)+"\' y2=\'"+(C.9h*1.2)+"\' 3F=\'#"+eN+"\' 3F-17=\'1\' 3F-cH=\'4a\'/><2E x1=\'"+(C.9h+1)+"\' y1=\'"+(C.9h*1.2)+"\' x2=\'"+(C.9h*2+1)+"\' y2=\'1\' 3F=\'#"+eN+"\' 3F-17=\'1\' 3F-cH=\'4a\'/></g></2g>";if(o.1D){W(B i=0;i<6Q;i++){3B[i]=1O("1X");B 1a=1O("1X");O(3B[i],{"1m":"2o","1f":C.8C,"1t":C.1t,"5l":"3c","3O-dz":eQ(C.3O),"2R-6M":C.6P+\'px\',"4S":2p});if(2F(C.kQ)){O(3B[i],{"2R":"41 6E "+3A(2q(C.kP,\'3E\'))})}o.1U.1M(3B[i]);4i(3B[i],{id:(v.id+"4B"+"Y"+(i+1))});1I[i]=1O("1X");B fs=C.hm;if(C.KN>0){fs=C.KN;if(C.L9>0&&o.9j){fs=C.L9}}O(1I[i],{"2k":"4n","3O-3P":fs*2q(v.7w,1)});3B[i].1M(1I[i]);3S[i]=1O("1X");O(3S[i],{"2k":"4n","4F":"1d 0.1s 5g-4r","3O-3P":C.es*2q(v.7w,1),"5l-x":"3c"});3S[i].gI.8v("oL"+v.id+"6O");3S[i].1z("kZ",rA,{e3:P});3B[i].1M(3S[i])}o.9U==0?o.9U=o.3a:\'\';8B();8k(0)}E 8B(){W(B i=0;i<6Q;i++){3S[i].1R=\'\';1I[i].1R=\'\'}B l3=o.1D[o.9U];jX(l1(l3,0),0);jX(l1(l3,1),1);jX(l1(l3,2),2);jX(l1(l3,3),3);2A()}E l1(x,n){W(B i=0;i<n;i++){if(x){if(x.7A==\'\'){x=-1;1k}F if(o.1D[x.7A].7A!=-1){x=o.1D[x.7A]}}}J x}E jX(x,n){if(x){if(x==-1){ex[n]=P;3i(3B[n])}F{ex[n]=H;5K(3B[n]);B pl=[];pl.2L(x);W(B y in o.1D){if(o.1D.2u(y)){if(o.1D[y].7A==x.7A){pl.2L(o.1D[y])}}}B z=oH(o.3a);if(6y){if(pl.U>v.Y.6y+1){6y.8v(C,3S[n])}}W(B i=0;i<pl.U;i++){B 1C=1O("1X");O(1C,{"2k":"4n","1m":"eP","6K":"4l","2Q":Cf(C.2Q),"4F":"1t .1s 5g-4r","2Q-2l":C.jI+(o.2Y>cs?C.9h*3:0)});B kA=1O("1X");O(kA,{"1m":"2o","1f":0,"1c":0,"4S":-1,"17":"100%","1d":"100%","4F":"6p .2s 5g-4r,2i .2s 5g-4r"});h5(kA,i,C.4k,C.4u);if(i==0){O(1C,{\'1t\':eN})}F{O(1C,{"1t":C.1t})}if(z.I(pl[i].id)>-1&&i>0){O(1C,{"1t":C.5R});C.he==1&&K(C.cg)?O(kA,{"7p":C.cg}):\'\';if(2F(C.oJ)){O(1C,{"2i-7X":"3f-4L(5p(0, 0, 0, "+(1-C.oJ*1)+") 0 0)"})}1C.gI.8v(\'6J-\'+v.id+\'-cZ-pl\')}1C.1R=pl[i].1I+(i==0&&o.2Y>cs?mb:\'\');1C.6o("me",(i==0?\'sd\':\'\')+pl[i].id);if(i==0){if(z.I(pl[i].id)>-1||n>0){eM[n]=pl[i].id}F{1C.1R=(C.Nf!=1?\'...\':(C.Ky?C.Ky:\'\'))+mb}1I[n].1M(1C)}F{if(o.8Q[pl[i].id]&&pl[i].id!=o.3a){r0(1C)}3S[n].1M(1C)}1C.1M(kA)}O(3S[n],{"1d":"2y"});h[n]=3S[n].2S;O(3S[n],{"1d":0});3B[n].1z("2x",8m);3B[n].1z("fF",5Y);3B[n].1z("fE",5r)}}F{}}E h5(x,i,y,z){B ok;if(x){if(C.vG==1&&C.so){O(x,{"2i":"3f-4L(to 1c,"+4E(C.so,z)+", "+4E((i==0?9T:y),z)+")"});ok=H}if(!ok){O(x,{"2i-1t":4E((i==0?9T:y),z)})}}}E oH(id){B x=o.1D[id];B z=[];if(x){W(B i=0;i<6Q;i++){z.2L(x.id);if(x.7A!=\'\'){x=o.1D[x.7A]}}}J z}E 8m(x){B z=x.3Z;B d=1y 6T();o.9x=d.8D();z.g7!=\'uv\'?z=z.3W:\'\';z.g7!=\'uv\'?z=z.3W:\'\';B y=z.3W.3W;B me=z.6w("me");if(me){if(me.I("sd")==0){B i=-1;y==3B[0]?i=0:\'\';y==3B[1]?i=1:\'\';y==3B[2]?i=2:\'\';ec();if(i>-1){if(3j!=i){kV(i)}F{3j=-1}}}F{5K(1I[3j]);if(eM[3j]==me){ec();if(3j>0){kV(3j-1);J}F{3j=-1}}F{eM[3j]=me}if(o.1D[me].5b){o.S.vO(me);ec();3j=-1;sl()}F{ec();o.2f=1N;3j=-1;3x("1E","id:"+me)}}}i6()}E sl(){W(B y in o.1D){if(o.1D.2u(y)){if(o.1D[o.9U]){if(o.1D[y].7A==o.1D[o.9U].id){o.9U=o.1D[y].id;8B();if(o.1D[y].5b){if(3S[0].ju.U<2){sl()}F{kV(0)}}F{if(C.N6==1){B me=3S[0].ju[0].6w(\'me\');me?3x("1E","id:"+me):\'\'}F{kV(0)}}1k}}}}}E kV(i){O(3S[i],{"1d":"2y"});O(Bg(1I[i].ju[0]),{"2i-1t":4E(9T,1)});O(1I[i].a3("2g")[0],{"2K":"1Q(-1, -1)"});o.S.bw();3j=i}E ec(){if(3j>-1){O(3S[3j],{"1d":0});O(3S[3j],{"2R-1f":"1S"});O(Bg(1I[3j].ju[0]),{"2i-1t":4E(9T,C.4u)});O(1I[3j].a3("2g")[0],{"2K":"1Q(1, 1)"})}}E 5Y(x){B y=x.3Z;B me=y.6w("me");B z=oH(o.3a);B bg=Bg(y);if(me){if(2F(C.ao)){O(bg,{"6p":"dW("+(C.ao)+")"})}if(3j==-1||me.I("Fb")==0){h5(bg,-1,9T,1)}F{if(C.he==1&&K(C.cg)&&me==eM[3j]){}F{if(2F(C.aF)){h5(bg,-1,C.aF,(C.8X>-1?C.8X:C.4u))}}}}}E 5r(x){B y=x.3Z;B me=y.6w("me");B z=oH(o.3a);B bg=Bg(y);if(me){if(2F(C.ao)){O(bg,{"6p":"dW(1)"})}if(3j==-1||me.I("sd")==0){B yy=x.3Z.3W.3W;B i=-1;yy==3B[0]?i=0:\'\';yy==3B[1]?i=1:\'\';yy==3B[2]?i=2:\'\';h5(bg,-1,9T,(3j==i?1:C.4u))}F{if(o.8Q[me]&&me!=o.3a){r0(y)}if(C.he==1&&K(C.cg)&&me==eM[3j]){}F{h5(bg,-1,C.4k,C.4u)}}}};E rA(e){}E 2A(){if(5D(3B[0])){B c6=0;W(B i=0;i<1I.U;i++){1I[i].2S>c6?c6=1I[i].2S:\'\'}bc=o.4p-c6-(o.4p>4w?v.1w.h+(o.4p>cs?60:30):0);if(c6>0){bc=2I.4a(bc/c6)*c6+(C.rG==1?2I.4a(bc/c6):0)-(o.4p<=4w?5:0)}if(bc>0){W(B i=0;i<6Q;i++){if(3S[i].oG>bc){O(3S[i],{"5l-y":"6O","2M-2l":0,"5W-1d":bc})}F{O(3S[i],{"5l":"3c","5W-1d":"1S"})}if(v.Y.1m.I("2l")>-1){O(3B[i],{"2l":C.4o+GH(i)})}F{O(3B[i],{"1c":C.4s});if(i>0){O(3B[i-1],{"1c":C.4s+KU(i)})}}}}}}E KU(x){B y=0;W(B i=6Q-1;i>=x;i--){y+=3B[i].29+(3B[i].29>0?C.4o:0)}J y}E GH(x){B y=0;W(B i=0;i<x;i++){y+=3B[i].29+(3B[i].29>0?C.4o:0)}J y}E 8k(x){W(B i=0;i<6Q;i++){x==1&&ex[i]?5K(3B[i]):3i(3B[i])}}E nY(x){if(x>-1){if(3S[x].oG>bc){J H}}J P}E r0(x){O(x,{\'1t\':C.qY});if(C.qU==1){O(x,{\'1F-oF\':\'2E-H9\'})}if(C.hy>-1){O(x,{\'1B\':C.hy})}O(Bg(x),{\'2i-1t\':4E(C.oE,C.hQ>-1?C.hQ:C.4u)})}E Bg(x){if(x){J x.a3(\'4Q\')[0]}}G.nY=E(){J nY(3j)};G.vv=E(){8k(0);ec();3j=-1};G.kr=E(){8k(1)};G.yJ=E(){J 3j>-1};G.8B=E(){if(o.9U!=0){B hd=0;!5D(3B[0])?hd=1:\'\';8B();hd?8k(0):\'\'}};G.2A=E(){2P(rB);rB=1G(2A,42)};G.aw=E(){ec();3j=-1};G.4q=E(){W(B i=0;i<6Q;i++){3B[i].5L("2x",8m);3B[i].5L("fF",5Y);3B[i].5L("fE",5r);3S[i].5L("kZ",rA);o.1U.3q(3B[i]);o.3e=1N}}};B 5T=E(x){B gg;B NQ;B 3g;B 53;B 4H;B oD;B hi=0;B cj;B rt=P;B rr;if(x.me!=1N&&x.mc!=1N&&x.1J!=1N&&x.to!=1N){if(x.1b==1Z){if(x.1J.I("fQ")>-1){x.to==0?x.1b=0.5:x.1b=0.2}F{x.1b=0.20}}gg=IX(x.5g);if(x.1J.I("1Q")==-1){if(K(o.7n[x.me])){o.7n[x.me].sL()}o.7n[x.me]=G}if(x.1u==1){x.mc.26("2k",H)}3g=x.1J.2z(\'|\');4H=6t(x.to).2z(\'|\');53=1y c5();W(B i=0;i<3g.U;i++){if(!4H[i]){4H[i]=4H[0]}if(3g[i]=="fQ"){53[i]=x.mc.g("1B")}if(3g[i]=="8A"){53[i]=x.mc.C.1B}if(3g[i]=="y"){53[i]=x.mc.g("y")}if(3g[i]=="x"){53[i]=x.mc.g("x")}if(3g[i]=="1c"){53[i]=2N(x.mc.C.1c)}if(3g[i]=="1f"){53[i]=2N(x.mc.C.1f)}if(3g[i]=="1Q"){53[i]=x.mc.g("3u")}if(3g[i]=="6O"){53[i]=x.mc.er}if(3g[i]=="iL"){53[i]=x.mc.bm}if(3g[i]=="3r"){53[i]=x.mc.g("3r")}if(3g[i]=="3u"){53[i]=x.mc.g("3u")}if(3g[i]=="17"){53[i]=x.mc.g("17")}if(3g[i]=="FV"){53[i]=x.mc.29;4H[i]=2I.8s(4H[i]);x.me=="O5"?1v("17",x.me,53[i],4H[i],x.mc.29):\'\'}if(3g[i]=="1d"){53[i]=x.mc.g("1d")}if(3g[i]=="FU"){53[i]=x.mc.2S}4H[i]=FX(4H[i]);53[i]=FX(53[i])}cj=x.1b*2p/gg.U;oD=gg.U;if(3g.U==1&&53[0]==4H[0]){ag()}F{1G(oC,2I.4a(cj))}}E oC(){W(B i=0;i<3g.U;i++){B 1C=53[i]+(4H[i]-53[i])*(gg[hi]?gg[hi]:0);rq(3g[i],1C);if(3g[i]=="y"){x.mc.26("1f",1C)}if(3g[i]=="x"){x.mc.26("1c",1C)}if(3g[i]=="1c"){x.mc.C.1c=1C+"px"}if(3g[i]=="1f"){x.mc.C.1f=1C+"px"}if(3g[i]=="1Q"){x.mc.26("1Q",1C)}if(3g[i]=="3r"){x.mc.26("3r",1C)}if(3g[i]=="3u"){x.mc.26("3u",1C)}if(3g[i]=="6O"){x.mc.er=1C}if(3g[i]=="iL"){x.mc.bm=1C}if(3g[i]=="17"){x.mc.26("17",1C)}if(3g[i]=="FV"){O(x.mc,{"17":1C})}if(3g[i]=="1d"){x.mc.26("1d",1C)}if(3g[i]=="FU"){O(x.mc,{"1d":1C})}}hi++;if(!rt){if(hi==oD){ag()}F{rr=1G(oC,2I.4a(cj))}}}E ag(){rt=H;if(x.1p){if(3g[0]=="8A"||3g[0]=="1c"){1p(x.mc)}F{x.mc.26("2k",P)}}if(x.1J.I("1Q")==-1){o.7n[x.me]=1Z;4O o.7n[x.me]}W(B i=0;i<3g.U;i++){rq(3g[i],4H[i])}2P(rr)};E rq(y,z){if(y=="fQ"){x.mc.26("1B",z)}if(y=="8A"){x.mc.C.1B=z}}G.sL=E(){ag()};G.Ct=E(){hi=oD-1;oC();ag()};G.XY=E(x0,x1,y0,y1){B e=P;W(B i=0;i<3g.U;i++){if(3g[i]==\'x\'&&x0!=x1){e=H}if(3g[i]==\'y\'&&y0!=y1){e=H}}e?ag():\'\'};E IX(IN){cw(IN){1q"IL":J[0,0.Mq,0.Ma,1.LN,1.Mk,1.Mi,1.102,0.LB,0.LS,0.87,0.Ml,0.M6,1.Vb,1.QE,1.Vd,1.XR,0.12y,0.16a,0.16y,0.16D,1.16B,1.Hj,1.16u,1.Hj,1.16o,0.jW,0.oB,0.oB,0.oB,0.oB,1];1k;1q"ca":J[0,0.15B,0.15A,0.15q,0.15Y,0.15Q,0.17h,0.16W,0.16L,0.16M,0.16K,0.173,0.174,0.176,0.178,0.179,0.172,0.16X,0.FC,0.95,0.16Q,0.17a,0.15G,0.15m,0.99,0.13Y,0.15k,0.jW,1];1k;8b:J[0,0.175,0.32,0.44,0.52,0.6,0.67,0.73,0.13z,0.82,0.85,0.13y,0.13x,0.FC,0.95,0.97,0.13w,0.13v,1];1k}}};B E0=E(){B N=7N.13u,ua=7N.13t,cE=7N.GI,r3;B M=ua.qH(/(oK|hJ|7g|Gj|Gl)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);B M=ua.qH(/(oK|hJ|7g|Gj|Gl|13s|qr)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);if(M&&(r3=ua.qH(/8J\\/([\\.\\d]+)/i))!=1Z)M[2]=r3[1];B oM=7N.KP;G.bV=M?M[1]:N;G.8J=M?M[2]:7N.13i;G.e2=7N.KP>1;G.oK=G.bV=="13p";G.tU=G.bV=="KV 9.0";G.ie=G.bV=="KV"||G.bV=="13o"||G.bV=="13n";G.qr=ua.bU(/(qr)\\/?\\s*/i)>-1;G.ff=G.bV=="15l";G.7g=G.bV=="13m";G.hJ=1V.hJ;G.km=ua.bU("13l NT")>-1;G.5w=(ua.bU(/(7Q|jo|13k)\\/?\\s*/i)>-1)||(7N.13j===\'13A\'&&oM>1);G.tv=v.Kt!=1&&ua.bU(/(TV|13r|13B|13T|13S|13R|13Q|13M)\\/?\\s*/i)>-1;G.lg=v.Kt!=1&&ua.bU(/(LG)\\/?\\s*/i)>-1;G.7Q=ua.bU(/(7Q)\\/?\\s*/i)>-1;G.jo=G.5w&&!G.7Q;G.3Q=\'13E\'in 22.q4.C;if(ua.bU(/(aU)\\/?\\s*/i)>-1){oM>0?G.aU=H:G.tv=H;if(13C(\'(4l:13g)\').12P){G.tv=H}}G.2m=(2W.2m==1||G.5w||G.aU||(ua.bU(/(12M|12K|oK lX)\\/?\\s*/i)>-1))&&!G.tv&&2W.12A!=1;G.sC=G.7g||G.hJ;G.2e=P;if(G.5w){G.12J=3T(ua.1n(ua.I(\'OS \')+3,4).1T(\'4B\',\'.\'));if(G.jo&&(!\'FD\'in 1V||oM<2)){G.2m=G.5w=P;G.tv=H}}G.cK=!G.2m;G.yT=G.2m||G.e2;G.DG=G.2m||G.tv;G.13e=G.3Q&&G.cK;if(o.1U.tk||o.1U.tg||o.1U.tl||o.1U.te||o.1U.tq){G.2e=H}};E 9W(4I,7C){W(B s in 7C){if(1P(7C[s])==\'3U\'){if(s=="3b"||s=="3G"){4I[s]=7C[s]}F{W(B s2 in 7C[s]){if(1P(4I[s])!=\'3U\'){4I[s]={}}if(1P(7C[s][s2])==\'3U\'){W(B s3 in 7C[s][s2]){if(1P(4I[s][s2])!=\'3U\'){4I[s][s2]={}}if(1P(7C[s][s2][s3])==\'3U\'){W(B s4 in 7C[s][s2][s3]){if(1P(4I[s][s2][s3])!=\'3U\'){4I[s][s2][s3]={}}4I[s][s2][s3][s4]=7C[s][s2][s3][s4];if(s3==\'2Q\'||s3==\'2M\'){4I[s][s2][s3][s4]=2N(4I[s][s2][s3][s4])}}}F{4I[s][s2][s3]=7C[s][s2][s3];if(s2==\'2Q\'||s2==\'2M\'){4I[s][s2][s3]=2N(4I[s][s2][s3])}}}}F{4I[s][s2]=7C[s][s2];if(s==\'2Q\'||s==\'2M\'){4I[s][s2]=2N(4I[s][s2])}}}}}F{if(s.I("13d")>0&&4D(7C[s])===""){}F{4I[s]=yc(s,7C[s])}}}J 4I};B yc=E(1e,6c){if(1P(6c)==\'59\'){6c=4D(6c);if(1e.I("1t")>-1&&6c!=-1){6c=3A(6c)}}J 6c};E wn(){3o{B 5z=1V[\'3d\'],x=\'133\';5z.7J(x,x);5z.yj(x);J H}2U(e){J P}};E xF(aP){if(aP){if(K(o.7n[aP])){o.7n[aP].sL()}}};B 2T=E(x){B y=x;if(y){y=x.6L(0).132()+x.6Y(1);if(y.I("4B")>-1){y=y.1T(/4B/ig," ")}}B en={"of":"of","hB":"hB","14S":"Lp on Lq","14R":"Lp 2r on Lq","Ks":"14P at 14G","8I":"pg","14X":"No","rW":"15b","oI":"15j","15i":"15h","eB":"15g 2M","op":"15e ez","oe":"15c","oj":"bq 1B","os":"bq 1t","kW":"rT 3P","kY":"rT 1t","kU":"rT 1t 2","e4":"4J kJ","rQ":"aw 2W","rP":"155","dw":"154","153":"149 to 147","v0":"142","q0":"148","q3":"14l","qg":"JW","Ar":"JW","qq":"HD","qp":"14m HD","14n":"14o HD","vk":"14p HD","vg":"14q HD 4K","14r":"Ad","14k":"Go to 14s 14u\'s 14v","8c":"14w","5Q":"14x","2e":"14y 2e","HJ":"Dk 2e"};if(K(en[x])){y=en[x]}if(v.Lc==1){if(o[\'pe\'+o.1l.cE]){v.cE=o.1l.cE;v.Lc=0}}if(K(o[\'pe\'+v.cE])){if(K(o[\'pe\'+v.cE][x])){y=o[\'pe\'+v.cE][x]}}if(v.sJ){if(v.sJ[x]){y=v.sJ[x]}}J y};B b9=E(x,y,z){if(!K(o.iM[y])&&v.rX!=1){B t=o.cX?o.cX:(v.1I?v.1I:\'\');K(v.7P)?t=v.7P:\'\';if(v.Kw[x]==1&&v.BV==1&&K(v.i7)){if(x=="8F"){7e(AA,14z)}if(K(1V["pj"+v.i7])){1V["pj"+v.i7].AE(\'sz\'+x,{1I:t});1v("KZ",\'sz\'+x)}F{1v("KZ 14A 2r")}}if(v.H3[x]==1){if(v.ga==1){B db;if(v.CF==1){if(1V.Fl){db={\'7P\':t};if(v.iD){if(1P(v.iD)=="3U"){W(B g in v.iD){if(v.iD.2u(g)){db[g]=v.iD[g]}}}}Fl(\'1h\',\'sz\'+x,db)}}F{if(1V.ga){db={CA:\'nT\',CB:y};if(t!=\'\'){db.CE=t}if(v.14B==1&&!o.9x){db.14t=1}ga(\'xH.b5\',\'1h\',db)}}}}}z?o.iM[y]=H:\'\'};E AA(){if(K(1V["pj"+v.i7])){1V["pj"+v.i7].AE(\'14i\')}};B qa=E(18){B x=\'\';18=18.1T("v=","{=");if(18){if(18.I(\'q8.be/\')>-1){x=18.1n(18.I(".be/")+4);x.1T("/","")}F{x=18.2z(/(q8.be\\/|v\\/|vp\\/|14h\\?|4U.140\\/xH\\/[^#]*#([^\\/]*?\\/)*)\\??{?=?([^#\\&\\?]*)/)[3]}if(x!=\'\'){if(x.I("?t=")>0){v.1A=x.1n(x.I("?t=")+3);B h=0;B m=0;B s=0;if(v.1A.I("h")>0){h=v.1A.1n(0,v.1A.I("h"));v.1A=v.1A.1n(v.1A.I("h")+1)}if(v.1A.I("m")>0){m=v.1A.1n(0,v.1A.I("m"));v.1A=v.1A.1n(v.1A.I("m")+1)}if(v.1A.I("s")>0){s=v.1A.1n(0,v.1A.I("s"));v.1A=v.1A.1n(v.1A.I("s")+1)}if(h>0||m>0||s>0){v.1A=h*uw+m*60+s*1}}if(x.I("?")>0){x=x.1n(0,x.I("?"))}}}J x};B js=E(x,y,li,ev){if(x=="8F"){o.8F=H}if(ev==1){W(B yi in y){if(y.2u(yi)){if(1P(y[yi])=="3U"){y[yi]=\'\'}}}}if(v.oZ==1&&o.8F){if(v.141==1||li==1){yB(x,y)}F{if(y!=1N){if(1P(y)==\'3U\'){3o{y=5u.vn(y)}2U(e){}}F{if(1P(y)==\'59\'){y=y.1T(/\'/ig,\'′\')}}}if(1P(v.3b)==\'59\'){if(v.3b.I("{")==0){3o{v.3b=v.3b.1T(/\\\'/ig,\'"\');v.3b=5u.7c(v.3b)}2U(e){bh.1v(e)}}}if(1P(v.3b)==\'3U\'){if(K(v.3b[x])||K(v.3b[\'sm\'])){B z=x;if(!K(v.3b[x])&&K(v.3b[\'sm\'])){z=\'sm\'}if(x.I("6s")==0){if(K(v.3b[\'2a\'])){z=\'2a\'}}3o{if(y!==1N){2n(v.3b[z]+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2n(v.3b[z]+"(\'"+x+"\',\'"+v.id+"\')")}}2U(e){1v("3b",e,x)}}}F{if(v.3b==\'\'){v.3b="AI"}3o{if(y!==1N){2n(v.3b+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2n(v.3b+"(\'"+x+"\',\'"+v.id+"\')")}}2U(e){1v("3b",e,x,y)}}}}if(o.8F&&v.Kx==1){if(o.AJ){3o{o.AJ.hF.o6({1h:x,94:y},"*")}2U(e){}}}if(v.Fa==1&&li!==1){B zv={1h:x,1b:o.R?(x=="4f"?o.BZ:o.R.1b()):0};if(y!=1N){zv["2b"]=y}if(x=="1o"||x=="1b"){zv["1o"]=o.R.1o()}if(x=="1L"||x=="aY"){zv["1L"]=v.1L}if(x=="1y"){zv["id"]=3x("Eq")}1V.ac.o6(zv,\'*\');B z=x;x=="8F"||x=="1A"||x=="4v"?z=x+"ed":\'\';x=="1E"?z="143":\'\';x=="4N"?z="8o":\'\';x=="5B"?z="3I":\'\';x=="aY"?z="144":\'\';x=="4f"?z="145":\'\';x=="146"?z="13Z":\'\';zv["1h"]=z;if(z!=\'\'&&z!=x){zv=5u.7c(5u.vn(zv));1V.ac.o6(zv,\'*\')}}};B yB=E(x,y){B ev=22.14a(\'7s\');if(y!==1N){ev.94=y}ev.14b(x,H,H);o.1K.14c(ev)};G.1h=E(x,y){o.3b[x]=y};G.3z=E(x,y,V){v.14d==1?1v(\'3z\',x,y):\'\';J 3x(x,y,V)};E 3x(x,y,V){if(K(o.X)&&1P(x)==\'59\'){if(o.uP==1){J}if(V){if(1P(V)==\'59\'){if(V.I("id:")==0){V=o.S.zk(V.1n(3),"5c");if(V){if(x=="oa"&&y=="14e"){V.Gi()}}}}}if(x=="1E"||x=="3G"){if(K(y)){B bx=P;if(1P(y)==\'59\'){y=y.1T(/(\\r\\n|\\n|\\r)/gm,"");B 2f=-1;if(y.I("[4f:")>-1&&y.pz("]")==y.U-1){2f=y.1n(y.I("[4f:")+6,y.U-1);2f=2f.1n(0,2f.U-1);if(2f=="1b"){2f=o.R.1b()}F{2f=2N(2f)}y=y.1n(0,y.I("[4f:"));if(y==\'\'){if(o.R.1o()>0){o.X.43(2f);o.X.2H();J}F{o.2f=2f;o.X.2H();J}}F{o.2f=2f}}if(y.I("[Aa]")>-1){bx=H;y=y.1T(\'[Aa]\',\'\')}if(y.I("#"+v.an)==0){y=o[o.fd[0]](y)}if(y.I("#"+v.cF)==0&&y.I(v.dr)>0){o[o.fd[1]](y,DK,x);J}if(y.I("#0")==0){y=cN(y)}if(v.cT==1){y=cT(y)}if(y.I(".9s")==y.U-4){B 4Z=f1(y);4Z.ch=E(){if(G.fy==4&&G.6W==4w){3o{3x(\'1E\',5u.7c(G.ee))}2U(e){}}};4Z.b5();J}if(y.I("id:")==0&&K(o.1D)){B z=DN(y);if(K(o.1D[z])){o.S.vO(z);2f>-1?o.2f=2f:\'\';J H}F{J P}}if(y.I("14f:")==0){B z=y.1n(10);if(o.2t=="4U"){o.R.Bn(z);J H}F{y=\'//q8.be/\'+z}}}if(x=="1E"){o.S.Ip();o.X.eO(y,1N,1N,(bx?1:0))}if(x=="3G"){o.lR=H;v.3n=0;o.X.eO(y,1,1N,(bx?1:0));o.S.3Y(0,0);o.1A=P}}F{if(x=="1E"){o.X.2H()}if(x=="3G"){1P Ab==\'E\'?Ab():\'\'}}}if(x=="et"){y?o.R.AT(y):\'\'}if(x=="4R"){if(K(y)){o.lR=H;o.X.eO(y,1,1)}F{o.R.sH()}}if(x=="4N"){if(o.1E){o.X.3l();o.X.jQ()}}if(x=="e9"&&K(y)){o.1A&&o.8g?o.8g.Ac(y):\'\'}if(x.I("14g")==0){if(o.2a){o.2a.14C(x.1n(6),y)}}if(x=="ay"){o.ay.n2();o.ay=1y yt();if(K(y)){o.ay.9s(y)}F{if(v.Bj==1){o.ay.9s(v.B7)}F{o.ay.9s("14j 8p")}if(v.By==1&&K(v.BI)){o.ep=1y BH()}}}if(x=="8d"){!o.1A?o.S.vR():\'\';o.S.9l();o.S.Ij("zq")}if(x=="f6"){o.1E?o.X.3l():o.X.2H()}if(x=="2O"){v.4R=0;v.3n=0;o.R.qo();o.X.bD()}if(x=="8M"){o.1b=o.R.1b();o.X.f8()}if(x=="7f"){if(v.8Z){if(v.8Z.on==1&&v.8Z.14D==1){o.X.kH()}}}if(x=="yD"&&K(y)){if(o.5P){o.5P.3z(y)}}if(x=="2Z"){o.S.I1()}if(x=="14Z"&&K(y)){if(v.2a==1){if(y.I(\'js:\')==0){v.6N=y;v.ko=H;o.X.sS("6N")}F{if(o.p!=\'\'){B sv=5u.7c(eR(o.p));W(B l in sv){if(sv.2u(l)){if(K(sv[l].id)){if(y==sv[l].id){v.6N=\'152\'+(K(sv[l][\'qQ\'])?\'qQ\'+sv[l][\'qQ\']:\'\')+y+\'4B\'+sv[l].7x;v.ko=H;o.X.sS("6N")}}}}}}}}if(x=="156"){1P Bo=="E"?Bo(y):\'\'}if(x=="7I"&&y){v.7I=y;o.3y?o.3y.Bs():\'\'}if(x=="5B"){o.X.5m()}if(x=="5q"){if(K(y)){o.X.9H(y)}F{J o.6i[o.aj]}}if(x=="eq"){if(v.8Z&&o.b7){if(v.8Z.b7==1){J 2I.4a((o.b7.6p(157).U-1)/2I.4a(o.R.1o())*100)}}}if(x=="j5"){J o.6i}if(x=="aY"){o.X.6F()}if(x=="n6"){if(K(y)){v[x]=y;o.X.kE()}}if(x=="cR"){J o.2G}if(x=="Db"){J o.ab?H:P}if(x=="5Q"){J o.R?o.R.5A():P}if(x=="uI"){J v.9J==1?o.3k.6Y(0,-1):o.3k}if(x=="FQ"){o.5k?o.3D.6Z():o.3D.9b(2q(o.Bw,(o.3D.7H()==0?1:0)))}if(x=="cp"){J o.as}if(x.I("28:")==0&&y){v[x.1T(\'1I:\',\'4B\')]=y;o.X.jQ()}if(x=="158"){J o.k1}if(x=="bz"){J o.7u}if(x=="1L"||x=="BA"){if(K(y)){if(1P y=="59"){if(y.I("+")==0){y=v.1L+3T(y.1n(1))}F{if(y.I("-")==0){y=v.1L-3T(y.1n(1))}}}if(y>=0&&y<=1){o.X.4c(y)}}J o.3I?0:v.1L}if(x=="3I"){J K(o.3I)?o.3I:P}if(x=="159"){o.S?o.S.Iu(y):\'\'}if(x=="dL"){y<2?y=\'\':\'\';if(2F(o[\'u\'+y])){B x2=5u.7c(eR(o[\'u\'+y]));B v2=[];W(B l in v){if(v.2u(l)){if(l.I("ai")==0){v[l]=1Z}}}if(1P x2=="3U"){W(B k in x2){if(x2.2u(k)){if(k.I("ai")==0){v[k]=x2[k]}if(k=="1w"){v2[k]=x2[k]}}}}v=9W(v,v2);B qJ=P;if(o.S.cJ()){o.S.7R();qJ=H}B r5=P;if(o.S.j1()){o.S.cS();r5=H}o.S.4q();o.S=1Z;o.S=1y yP();if(o.R.6W()=="7T"){o.S.2H()}o.S.4c(v.1L);if(K(v.1I)){aC(v.1I)}if(qJ){o.S.7R()}if(r5){o.S.cS()}if(o.2e){o.S.9w()}if(1e!=\'KL\'){o.S.3Y(o.R.1b(),o.R.1o())}bp()}}if(x=="ne"){J v.ne}if(x=="4Y"){o.S.4Y(H)}if(x=="151"){o.S.mw()}if(x=="Hg"){bp()}if(x=="2r"){o.R.5O(x)}if(x=="4f"){if(K(y)){if(1P y=="59"){if(y.I("%")>-1){y=2N(y.1n(0,y.I("%")));y=o.R.1o()*y/100}F{B oU=o.R.1b();if(o.3y&&!o.1A){if(!o.3y.mI){B f=o.3y.9S();if(f.t&&f.d){oU=f.t;o.3y.mI=H}}}if(y.I("+")==0){y=oU+3T(y.1n(1))}F{if(y.I("-")==0){y=oU-3T(y.1n(1))}}}}y=y*1;y<0?y=0:\'\';if(o.R.1o()>0){y>o.R.1o()?y=0:\'\'}if(!K(o.2a)&&!K(o.5I)&&o.R.1o()>0){o.2f=1N;o.X.43(y,H);o.X.uK()}F{o.2f=y}}}if(x=="2e"){!o.2e?o.X.9w():\'\'}if(x=="ta"){o.2e?o.X.8L():\'\'}if(x=="15a"){J o.2e}if(x=="3P"){J o.2Y+\'/\'+o.4p}if(x=="15d"){if(K(o.h8)){o.h8.Do()}}if(x=="IM"||x=="15f"){if(K(o.h8)){o.h8.Un()}}if(x=="1b"||x=="B2"){B jh=o.R?o.R.1b():0;if(o.3y&&v.cL==1&&!o.1A&&jh==0){B f=o.3y.9S();if(f.t){jh=f.t}}J x=="B2"?fH(jh):jh}if(x=="14Y"){if(o.aL){3x("1E","id:"+o.aL)}if(o.rv){3x("4f",o.rv);3x("1E")}}if(x=="1o"){J o.R?o.R.1o():0}if(x=="8j"){J o.R?o.R.af():0}if(x=="2v"){if(y){v.2v=y;o.S.jL()}}if(x=="5v"){if(K(y)){if(V){v.hd=bj(v.hd,y,V);if(o.2G.U==2){o.X.6g(v.hd)}}F{o.X.6g(y)}}F{J o.R?vL(o.R.qf()):0}}if(x=="8c"){if(K(y)){if(V){v.rs=bj(v.rs,y,V);if(o.7u.U==2){o.X.dX(v.rs)}}F{o.X.dX(y)}}F{J o.R?o.R.uo():0}}if(x=="B8"){J o.2t=="4U"}if(x=="vC"){if(o.7t>0){o.pK=o.7t}o.X.eO(o.4t[o.mZ])}if(x=="7T"){J o.1E}if(x=="oY"){J o.1A}if(x=="1l"){J o.1l[y]}if(x=="B9"){o.uP!=1?o.R.v4():\'\'}if(x=="id"){J v.id}if(x=="1v"){v.1v=y}if(x=="oZ"){v.oZ=y}if(x=="2h"){o.R.Jl()}if(x=="14O"){o.R.J3();if(V){o.rn=bj(o.rn,y,V)}}if(x=="6e"){o.R.fh()}if(x=="9K"){o.R.eV()}if(x=="2W"&&v.rX!=1){bh.1v(2W)}if(x=="14H"&&o.4x){o.4x.8F()}if(x=="28"){if(K(y)){if(y==\'0/1\'){if(o.5k){o.rk=o.3w;y=-1}F{y=o.rk?o.rk:0}}v.28=y;if(y.6A().U<3&&o.3D){o.3D.9b(y*1)}F{o.X.f0(y)}}F{J o.3k?o.3k[o.3w]:\'\'}}if(x=="+28"&&v.28){if(K(y)){v.28+=\',\'+y;o.X.f0(v.28)}}if(x=="d5"){if(K(o.d5)){if(K(y)){o.d5.3z(y)}F{J o.d5.14I()}}}if(x=="x8"){if(o.zu){J o.zu}F{J P}}if(x=="9k"){J o.R.9k()}if(x=="6f"){B 6f=1O("1X");6f.id=y;6f.C.4S=14J;o.1U.1M(6f)}if(x=="HQ"){if(o.4W){B 5x=1O("5x");B 3P=o.R.3P();5x.17=3P.17>0?3P.17:o.bA;5x.1d=3P.1d>0?3P.1d:o.cY;O(5x,{"1m":"2o","1f":-5x.1d,"1c":-5x.17,"2k":"1S"});22.3S.1M(5x);B 9c=5x.zD(\'2d\');9c.rg(o.R.aH(),0,0,5x.17,5x.1d);B 5v=2;B la=22.1O("5x");la.17=5x.17*5v;la.1d=5x.1d*5v;B ky=la.zD("2d");ky.rg(o.R.aH(),0,0,5x.17*5v,5x.1d*5v);if(v.14K==1&&K(v.rh)){!K(v.ku)?v.ku=20:\'\';!K(v.ri)?v.ri="3E":\'\';ky.3O=v.ku+"px 14L, 14M";ky.14F=3A(v.ri);ky.14N((v.rh=="hO"?o.hO:v.rh),v.ku,5x.1d*5v-v.ku-5)}9c.rg(la,0,0,5x.17,5x.1d);B 4m;3o{4m=5x.14Q("7X/14T")}2U(e){bh.1v(e.8p);J P}J 4m}F{J P}}if(x=="3X"){J o.2t==x?o.R.lN():1N}if(x=="1H"){J o.2t==x?o.R.mA():1N}if(x=="2j"){if(!o.1E||v.fY===0){o.R.a7(y);J H}F{J P}}if(x=="Ld"){if(K(y)){y==\'1/0\'?y=1-2q(v.lH,0):\'\';v.lH=y;o.R.iZ()}F{J 2q(v.lH,0)}}if(x=="1Q"){if(K(y)){if(y==0){o.R.iZ()}F{o.R.1Q(y)}}F{J[o.3N.x,o.3N.y,o.3K.C.1c,o.3K.C.1f]}}if(x=="1I"){if(K(y)){K(y)?v.1I=y:\'\';o.X.aC(\'1I\');J H}F{J v.1I}}if(x=="14U"){o.X.Dv()}if(x=="2L"){if(y){!o.l4?o.l4=[]:\'\';if(1P(y)==\'3U\'){y=o.l4.a1(y);x="Y"}}}if(x=="Y"){if(y){if(1P(y)==\'3U\'){3o{o.X.6v(y);J H}2U(e){J P}}F{if(y.I(".9s")==y.U-4||y.I(".9s?")>0){B 4Z=f1(y);4Z.ch=E(){if(G.fy==4&&G.6W==4w){3o{3x(\'Y\',5u.7c(G.ee))}2U(e){}}};4Z.b5();J H}F{if(y==\'\'){o.X.6v([])}F{if(y==\'eq\'&&o.k1>0){B 1C=2I.4a(((o.rd+(!o.S.cW("eq")?o.R.1b():0))/o.k1)*100);if(1C<o.rc||1C>100){J o.rc}F{o.rc=1C;J 1C}}}}}}}if(x=="7b"){o.S?o.S.bn():\'\'}if(x=="dw"){o.S?o.S.dC():\'\'}if(x=="6q"){o.S?o.S.kb(y):\'\'}if(x=="6q?"){J o.ax?[o.14V,o.14W]:0}if(x=="fO"){o.R?o.R.fO():\'\'}if(x=="nK"){if(K(y)&&K(o.1D)){!o.1E?v.3n=0:\'\';W(B j in o.1D){if(o.1D.2u(j)){if(o.1D[j].dh==y){y=j}}}if(K(o.1D[y])){o.S.Ir(y);J H}F{J P}}}if(x=="14E"){B 1C=[];if(K(o.1D)){W(B j in o.1D){if(o.1D[j].5b&&o.1D[j].tB==-1){1C.2L({1I:o.1D[j].1I,id:o.1D[j].id})}}}J 1C}if(x=="Eq"){if(o.3a){J o.1D[o.3a].dh?o.1D[o.3a].dh:o.3a}}if(x=="13X"){if(o.1D){J 7o.6n(o.1D).U}F{J-1}}if(x=="p5"){if(K(o.p5)){J o.p5}}if(x=="13h"){o.S.jf(y)}if(x=="13W"){o.R.hZ()}if(x=="1w"){if(y=="on"){v.1w.1p=0}F if(y=="6Z"){v.1w.1p=1;o.S.gk()}F{o.S.jS()}}if(x=="Es"){o.S.7R()}if(x=="6m"){o[x]=H}if(x=="12W"){if(o.2a){J H}F{J P}}if(x=="12X"){if(o.2a){J DO()}F{J P}}if(x=="12Y"){if(o.2a){J o.2a.4N()}F{J P}}if(x=="12Z"){if(o.2a){J o.2a.CJ()}F{J P}}if(x=="130"){if(o.2a){o.2a.131()}F{J P}}if(x=="12V"){if(o.2a){o.2a.5B()}F{J P}}if(x=="6z"){if(V){v.6z=bj(v.6z,y,V);o.R.6z()}F{J v.6z}}if(x=="9f"){if(K(V)){v.9f=bj(v.9f,y,V)}F{if(K(y)){y==\'0/1\'?y=1-v.9f:\'\';v.9f=y}F{J v.9f}}}if(x=="5U"){if(K(V)){v.5U=bj(v.5U,y,V)}F{if(K(y)){v.5U=y}F{J v.5U}}}if(x=="jz"||x=="p8"){B z="dv";x=="p8"?z="oS":"";if(K(V)){v.Y[z]=bj(v.Y[z],y,V)}F{if(K(y)){y==\'0/1\'?y=1-v.Y[z]:\'\';v.Y[z]=y}}J v.Y[z]}if(x=="hd"){if(o.2G.U==2){v.hd=o.2G[o.3v];v.hd=bj(v.hd,y,V);if(o.2G[0]==v.hd){o.X.6g(0)}F{o.X.6g(1)}}}if(x=="v"&&y){if(y.I(\'3G\')==0||y.I(\'bk\')==0){J}J v[y]}if(x.I("c0:")==0){B xx=x.1n(7);if(1P(y)==\'3U\'&&1P(v[xx])==\'3U\'){W(B yy in y){if(y.2u(yy)){v[xx][yy]=y[yy]}}}F{if(x.I(\'Eu\')==-1){v[xx]=y}}J H}if(x.I("1F:")==0){o.S.HF(x.1n(5),y)}if(v.Dw==1&&x.I("1t")==0&&y){fJ(\'4Q, 4Q > *{--6J\'+x+\':\'+3A(y)+\'}\')}if(x=="137"){J o.R?o.R.bZ():\'\'}if(x=="138"){J o.8J+\' \'+o.kD}if(x=="kD"){J o.kD}if(x=="qI"){J o.qI}if(x=="DI"){J o.DI}if(x=="5Z"){J o.5Z}if(x=="139"){J o.2a?o.DX:1N}if(x=="au"){o.X.lD();v.1W.on=0;if(v.tN==1){W(B i=0;i<5j.U;i++){if(5j[i]){if(5j[i].3z("id")==v.id){5j[i]=1Z}}}}W(B w in 1V){if(1V[w]==o.G){1V[w]=1Z}}if(eU==v.id){eU=\'\'}o.uP=1;o.1K.1R=\'\';o.G=1Z}}F{J P}};E DK(x,y){if(x&&y){3x(y,x)}}E bj(x,y,V){B z=4D(y)+\'\';if(y){if(y.I("/")>0){B y2=y.2z("/");if(y2.U==2){if(x==4D(y2[0])){z=4D(y2[1]);if(V){V.bR(1)}}F{z=4D(y2[0]);if(V){V.bR(0)}}}}}J z}E f1(x){B 4Z=1y BY();4Z.3j(\'BN\',x,H);J 4Z}E DN(y){B z=y.1n(3);if(o.1D){W(B j in o.1D){if(o.1D.2u(j)){if(o.1D[j].dh==z){z=j}}}}J z}E DO(){B x;if(o.2a){if(o.2a.cZ()){x=o.2a}}if(!x&&o.5I){x=o.5I}if(x){B y={is:o.4b,1l:x.94("13a"),8J:x.94("8J"),13b:x.94("E1"),18:o.F2+(x.94("DT")?x.94("13c")+x.94("DT"):\'\'),1J:x.94("136"),1o:x.94("9p"),3G:x.94("3G"),1b:(o.R?o.R.1b():\'\'),1L:x.12T(),id:o.DX};if(o.4b=="6N"){y.12S=o.12B}J y}}E vf(){if(\'f3\'in 7N){7N.f3.8E=1y 12C({1I:Ev(2q(o.cX,v.1I)),12D:[{3h:2q(v.2j,\'\')}]});if(!o.F0){7N.f3.nm(\'1E\',E(){3x("1E")});7N.f3.nm(\'4N\',E(){3x("4N")});if(o.S.gT()){7N.f3.nm(\'12E\',E(){3x("dw")});7N.f3.nm(\'12F\',E(){3x("7b")})}o.F0=H}}}B 1O=E(x){B y=x;x==\'1X\'||x==\'ym\'?y=\'4Q\':\'\';B z=22.1O(y);if(x==\'ym\'){O(z,{"6K":"4l","2k":"4n"})}J z};B 1v=E(a,b,c,d,e,f,g){if(v.1v==1||v.uE==1){B x=a+(b!=1N?" "+b:"")+(c!=1N?" "+c:"")+(d!=1N?" "+d:"")+(e!=1N?" "+e:"")+(f!=1N?" "+f:"")+(g!=1N?" "+g:"");bh.1v("F1"+(v.xs==1?"2":"")+": "+x);if(v.uE==1&&K(22.8S("F4"))){22.8S("F4").1R+=x+\'<br/>\'}}};B EQ=E(){if(v.xp==1&&K(v.di)&&v.di!=\'\'){B x=22.1O(\'ho\');x.F5=\'12G\';v.di.I(\':\')>0&&v.di.I(\':lW\')==-1?v.di=v.di.1T(/:/ig,\':lW@\'):\'\';x.9y=\'cr://xp.12H.8e/12I?dz=\'+v.di.1T(/,/ig,"&dz=").1T(/ /ig,"+");22.Fb.1M(x)+\'&2k=12L\'}};B JU=E(1X,5S){B x=["9z","hf","pG","hH","e0","12N"];W(B y=0;y<x.U;y++){B z=1X.yH("2g "+x[y]);if(z.U>0){W(B y2=0;y2<z.U;y2++){z[y2].C.5h=5S}}}};B i6=E(){if(v.8Z){if(v.8Z.12O==1){js("2x")}}};B 4J=E(1b){1b<0?1b=0:\'\';B EI=o.R.1o>=hq?H:P;B EV=o.R.1o>=uw?H:P;B 6U=2I.8s(1b/60);B 7M=2I.8s(1b-6U*60);B 8r=2I.8s(6U/60);B k4=2I.8s(8r/24);6U=6U-8r*60;if(k4>0){8r=8r-k4*24}if(v.mB==1&&o.R.5A()){B d=1y 6T();J 6t(1y 6T(d.8D()+1b*2p).EF())}F{J 6t((k4>0?k4+\':\':\'\')+(8r>0||EV?8r+\':\':\'\')+((8r>0||EI)&&6U<10?\'0\':\'\')+6U+\':\'+(7M<10?\'0\':\'\')+7M)}};B fH=E(x){B 7M=2I.8s(x);B 6U=2I.8s(7M/60);B 8r=2I.8s(6U/60);6U=2I.8s(6U%60);7M=2I.8s(7M%60);8r>0&&6U<10?6U="0"+6U:"";7M=7M>=0?((7M>=10)?7M:"0"+7M):"bJ";B 4r=(8r>0?8r+":":"")+(6U>=0?6U:"0")+":"+7M;if(v.mB==1&&o.R.5A()){B d=1y 6T();J 6t(1y 6T(d.8D()+x*2p).EF())}F{J 4r}};B CK=E(){J EG((1V.8y!=1V.ac.8y)?22.nn:22.8y.9y)};B vL=E(x){if(x){x=x.6A();B uq=x.I(" <7m C=\'1B");if(uq>-1){x=x.1n(0,uq)}}J x};B vM=E(x,y,z){B t;if(!DC(x)&&y){t=22.1O(\'pW\');y=="12Q"?y=x:\'\';t.3h=y.I(\'//\')==-1?\'cr://\'+y:y;t.12R=1;if(z){t.6G=z}B s=22.a3(\'pW\')[0];s.3W.ur(t,s)}J t};B Ev=E(x){if(x){if(1P(x)==\'59\'){x=x.1T(/<[^>]*>?/gm,\'\')}}J x};B DC=E(y){B x=P;B n0=22.a3(\'pW\');W(B i=0;i<n0.U;i++){if(n0[i].3h.I(y)>-1){x=H}}J x};B 4E=E(x,y){if(x){if(x.I(\'1t\')>-1||x.I(\'B\')>-1){J 3A(x)}F{x=x.1T(\'#\',\'\');B r=2N(x.U==3?x.6Y(0,1).gW(2):x.6Y(0,2),16);B g=2N(x.U==3?x.6Y(1,2).gW(2):x.6Y(2,4),16);B b=2N(x.U==3?x.6Y(2,3).gW(2):x.6Y(4,6),16);if(K(y)){J\'5p(\'+r+\', \'+g+\', \'+b+\', \'+y+\')\'}F{J\'Cs(\'+r+\', \'+g+\', \'+b+\')\'}}}};B O=E(e,o){if(K(e)){W(B 1e in o){if(o.2u(1e)){if(o[1e]!=\'13f\'&&o[1e]!=1N){if(1P o[1e]==\'12U\'&&1e!=\'3O-ez\'&&1e!=\'1B\'&&1e!=\'4S\'){o[1e]+=\'px\'}if(1e.I("13F")>-1&&1e.I("BS")==-1){o[1e]=3A(o[1e])}if(1e=="2K"||1e.I("kw")>-1){e.C[\'-ms-\'+1e]=o[1e];e.C[\'-pn-\'+1e]=o[1e];e.C[\'-3Q-\'+1e]=o[1e];e.C[\'-o-\'+1e]=o[1e]}if(1e=="y8"){if(o[1e].I(" ")>-1){o[1e]=\'"\'+o[1e]+\'"\'}}if(1e=="6f-k5"){e.C.13G(1e,o[1e],\'6k\')}F{e.C[1e]=o[1e]}}}}}};B zl=E(x,5S,b1,b2){5S=3A(5S);B y=2q(b1,1)*1;B z=2q(b2,1)*1;O(x,{"2i":"13H-3f-4L(-13I,"+5S+","+5S+" "+y+"px,5p(0,0,0,0),"+y+"px,5p(0,0,0,0) "+(y+z)+"px)"})};B 3A=E(c){if(c){c.I("1t")==0?c=\'B(--6J\'+c+\')\':\'\';J c.1n(0,1)!=\'#\'&&c.I("B")==-1&&c.I("Cs")==-1?c="#"+c:c}F{J\'#eH\'}};B JQ=E(x,1t,y){!1t?1t=\'#eH\':\'\';1t=3A(1t);B r=5M(nJ,13J);x=x.1T(/\\(AG\\)/g,r);x=x.1T(/\\(1t\\)/g,1t);x=x.1T(/\\(jv\\)/g,1+(v.13K.1Q-1)/2);B Cy=x.1n(0,x.I(\'|||\'));B un=x.1n(x.I(\'|||\')+3);B bo=\'\';if(o.1l.3Q){bo=un.1T(/6h:/g,"-3Q-6h:");bo=bo.1T(/6h-/g,"-3Q-6h-");bo=bo.1T(/@Cx/g,"@-3Q-Cx");bo=bo.1T(/2K/g,"-3Q-2K")}y?y.1R=Cy:\'\';fJ(bo+un)};B 7F=E(x,y,f){B z=P;if(x){W(B i=0;i<x.U;i++){if(x[i]){if(f){if(3T(y)==3T(x[i])){z=i;1k}}F{if(6t(x[i]).I(y)>-1){z=H}}}}}J z};B jk=E(x,y){B z=P;if(x&&y){W(B i=0;i<y.U;i++){if(6t(x).I(y[i])>-1){z=H}}}J z};B fJ=E(x){if(o.O){if(o.O.Cw){o.O.Cw.13L=x}F{o.O.1M(22.DH(x))}}};B eC=E(x){O(x,{"1m":"2o","1f":0,"1c":0,"17":"100%","1d":"100%"})};B gE=E(x){O(x,{"9t":"1S"})};B 4Z=E(y,z){B x=1y BY();x.3j(\'BN\',y,H);x.ch=z;x.b5()};B 13D=E(x){if(x){W(B i=0;i<5;i++){if(x.13O=="uv"){1k}F{if(x.BQ){x=x.BQ}}}}J x};B 9o=E(z){B 9o=22.1O("4m");if(o.np.I(z)>-1){o.np.2L(z);if(z.I("?")>0){z=z+\'&\'+2I.5M()}F{z=z+\'?\'+2I.5M()}}F{o.np.2L(z)}9o.6o(\'3h\',z);9o.6o(\'1d\',\'41\');9o.6o(\'17\',\'41\')};B 4i=E(e,o){W(B 1e in o){if(o.2u(1e)){e.6o(1e,o[1e])}}};B au=E(e){if(e){3o{e.3W.3q(e);e=1Z}2U(e){}}};B 5M=E(9L,5W){J 2I.8s(13P.U>1?(5W-9L+1)*2I.5M()+9L:(9L+1)*2I.5M())};B p4=E(){J 2I.5M().6A(36).13U(2,12)};B uy=E(x,y){x=7o.6n(x).13V(E(4I,1e){if(1e!=y){4I[1e]=x[1e]}J 4I},{});J x};B 4D=E(x){if(1P x=="59"){J x.1T(/^\\s+|\\s+$/gm,\'\')}F{J x}};B 6q=E(x,y,z){B r=P;if(x){if(x.I(y)>-1){B r=x.1n(x.I(y)+y.U);if(z){if(r.I(z)>-1){r=r.1n(0,r.I(z))}}}}J r};B 13N=E(x,n){if(n==0){J"#0"+d3.e(x)}if(n==-1){J d3.e(x)}if(n==1){J"#1"+vj(d3.e(x),1)}};B yk=E(x){if(v[x]!=""){if(1P v[x]!="59"){o[x+\'o\']=v[x]}F{if(v[x].I("[{")==0){3o{v[x]=v[x].1T(/6J\'qt/ig,\'"\');o[x+\'o\']=2n(v[x])}2U(e){}}}}};B 6d=E(x){J 6t.uB(x)};B eR=E(x){if(x.1n(0,2)=="#1"){J d3.d(vj(x.1n(2),-1))}F if(x.1n(0,2)=="#0"){J d3.d(x.1n(2))}F{J x}};B xS=E(x){if(x){if(x.I(\'3L\')==-1&&x.I(\'.\')==-1&&x.U>100&&x.I(\'2b:\')==-1){x=\'2b:7X/wk;gv,\'+x}}J x};B 1p=E(x){x?x.C.5Z="3c":\'\'};B 1u=E(x){x?x.C.5Z="4C":\'\'};B 3i=E(x){x?x.C.2k="1S":\'\'};B 5K=E(x){x?x.C.2k="4n":\'\'};B 5D=E(x){J x?x.C.5Z!="3c"&&x.C.2k!="1S":P};B 5n=E(s){if(1P s=="59"){if(s.I("px")>0){s=s.1n(0,s.I("px"))}}J 2N(s)};B 3c=E(x){J x.C.2k=="1S"};B 4z=E(o,x,y){o[x+\'1f\']=0;o[x+\'2l\']=0;o[x+\'2J\']=0;o[x+\'1c\']=0;if(K(o[y])){B z=o[y].2z(" ");if(z.U==4){o[x+\'1f\']=z[0]?3T(z[0]):0;o[x+\'2l\']=z[1]?3T(z[1]):0;o[x+\'2J\']=z[2]?3T(z[2]):0;o[x+\'1c\']=z[3]?3T(z[3]):0}}J o};B Cf=E(x){if(x){x=x.1T(/ /ig,\'px \')}J x+\'px\'};B ns=E(x,y){J v[x]&&v[x]!=\'\'?v[x]:y};B gM=6t.uB(65,66,67,68,69,70,71,72,73,74,75,76,77,97,98,99,100,101,102,103,104,105,106,107,108,109,78,79,80,81,82,83,84,85,86,87,88,89,90,110,111,112,113,114,115,116,117,118,119,120,121,122);B d3={bH:gM+"17d+/=",e:E(e){B t="";B n,r,i,s,o,u,a;B f=0;e=d3.D7(e);nw(f<e.U){n=e.bF(f++);r=e.bF(f++);i=e.bF(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(mj(r)){u=a=64}F if(mj(i)){a=64}t=t+G.bH.6L(s)+G.bH.6L(o)+G.bH.6L(u)+G.bH.6L(a)}J t},d:E(e){B t="";B n,r,i;B s,o,u,a;B f=0;e=e.1T(/[^A-Za-z0-9\\+\\/\\=]/g,"");nw(f<e.U){s=G.bH.I(e.6L(f++));o=G.bH.I(e.6L(f++));u=G.bH.I(e.6L(f++));a=G.bH.I(e.6L(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+6d(n);if(u!=64){t=t+6d(r)}if(a!=64){t=t+6d(i)}}t=d3.KA(t);J t},D7:E(e){e=e.1T(/\\r\\n/g,"\\n");B t="";W(B n=0;n<e.U;n++){B r=e.bF(n);if(r<128){t+=6d(r)}F if(r>127&&r<16N){t+=6d(r>>6|16P);t+=6d(r&63|128)}F{t+=6d(r>>12|D8);t+=6d(r>>6&63|128);t+=6d(r&63|128)}}J t},KA:E(e){B t="";B n=0;B r=0;B c1=0;B c2=0;nw(n<e.U){r=e.bF(n);if(r<128){t+=6d(r);n++}F if(r>17b&&r<D8){c2=e.bF(n+1);t+=6d((r&31)<<6|c2&63);n+=2}F{c2=e.bF(n+1);c3=e.bF(n+2);t+=6d((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}J t}};B vj=E(s,n){s=s.1T(/\\+/g,"#");s=s.1T(/#/g,"+");B a=D2(o.y)*n;if(n<0)a+=gM.U/2;B r=gM.1n(a*2)+gM.1n(0,a*2);J s.1T(/[A-Za-z]/g,E(c){J r.6L(gM.I(c))})};B D2=E(x){x=x.2z(6d(61));B kS=\'\';B c1=6d(120);B vm;W(B i in x){if(x.2u(i)){B vl=\'\';W(B j in x[i]){if(x[i].2u(j)){vl+=(x[i][j]==c1)?6d(49):6d(48)}}vm=2N(vl,2);kS+=6d(vm.6A(10))}}J kS.1n(0,kS.U-1)};B K=E(x){J x!=1Z&&1P(x)!=\'1N\'&&x!=\'1N\'};B 2q=E(x,y){J K(x)?x:y};B 2F=E(x){J K(x)&&x!=-1&&x!=\'\'};B xG=E(x,y){J 2F(x)?x:y};B n1=E(x){if(1P x=="3U"){x=5u.7c(5u.vn(x))}J x};B gj=E(el){B x=el.CR().1c+(1V.CV?1V.CV:1V.171);J x};B eQ=E(x){v.16Z==1&&2F(v.CT)?x=v.CT:\'\';J x};B kz=E(el){16Y hH=el.CR();J hH.1f+1V.16V};B 7k=E(x,y){if(x!=\'\'){if(v.16U==1||y==\'16T\'){1V.3j(x)}F{if(v.16S==1||y==\'1f\'){1V.ac.8y.9y=x}F{1V.8y.9y=x}}x=\'\'}};B wo=E(){if(v.51==1){o.51?o.1U.3q(o.51):\'\';o.51=1Z}};B DQ=E(){B o4=P;o.1l.tv?1v("tv"):\'\';o.1l.2m?1v("2m"):\'\';G.aC=E(x){o.S?o.S.1I(x):\'\'};G.6I=E(x){if(x){if(1P(x)==\'59\'){x=x.1T(/(\\r\\n|\\n|\\r)/gm,"");if(x.I("[{")==0){3o{x=x.1T(/6J\'qt/ig,\'"\');x=5u.7c(x)}2U(e){x="Bf 5u"}}}if(1P(x)==\'3U\'){o.1D=[];o.l4=n1(x);o.Y=tL(x);if(o.Y.U>0){if(v.Y.16R==1&&!v.4T){B 6n=7o.6n(o.1D);B vh=6n.6Y(-1)[0];vh?v.4T=vh:\'\'}B y=zA();if(y){x=y.3G;o.cX=y.1I;o.S?o.S.I0(y.1I):\'\';if(K(y.2j)){if(o.R){o.R.a7(y.2j)}F{v.2j=y.2j}}if(K(y.2D)){y.28=y.2D}if(K(y.1A)){if(y.1A=="3y"&&!o.1A){}F{v.1A=o.2f=y.1A}}7L("CO");if(K(y.id)){o.3a=y.id}B sx=["28","ne","vp","18","jV","D9","ki","n6","gK","7P","7f","2v","6r","4v","4O","CX","cl","7r","9A","1L"];if(K(v.d8)){if(v.d8.16O==1&&v.d8.m9==1){sx.2L("1I");sx.2L("t1");sx.2L("t2");sx.2L("t3");sx.2L("t4");sx.2L("t5")}}W(B i=0;i<sx.U;i++){if(K(y[sx[i]])){v[sx[i]]=y[sx[i]]}}jJ(y);if(sx.I(\'1I\')>0){if(v.d8.A9==1){o.py=v.d8.A8;o.X.oO(y)}o.X.aC(\'1I\')}if(K(y.1L)){1G(E(){o.X.4c(y.1L)},4w)}if(o.S){o.S.6v(o.Y);if(v.9A){o.S.xO()}}if(o.3e){o.3e.8B()}}F{}}}if(1P(x)==\'59\'){x=uh(x);if(x){if(x.I("#"+v.an)==0){x=o[o.fd[0]](x)}if(x){if(x.I("#"+v.cF)==0&&x.I(v.dr)>0){x=o[o.fd[1]](x)}if(x){if(x.I("#0")==0){x=cN(x)}x=uh(x)}F{x=\'\'}}}if(v.cT==1){x=cT(x)}if(x==\'\'){1v("5a 3G");o.bu=H;js("2r","5a")}o.2G=[];o.a0=[];o.7u=[];o.mZ=0;o.3v=0;o.7t=0;o.9Z=0;v.kh==\'\'?v.kh=\',\':\'\';if((x.I(v.jn)>-1&&x.I(v.eK)>-1)||K(v.cR)){o.4t=x.2z(v.kh)}F{o.4t=[x]}o.bz=[];if(K(v.cR)){B cR=v.cR.2z(v.kh)}if(o.4t.U>0){B q=-1;W(B i=0;i<o.4t.U;i++){o.4t[i]=4D(o.4t[i]);if(o.4t[i]!=\'\'){if(o.4t[i].I(v.jn)==0&&o.4t[i].I(v.eK)>1){o.2G[i]=o.4t[i].1n(o.4t[i].I(v.jn)+v.jn.U,o.4t[i].I(v.eK)-v.eK.U);o.4t[i]=o.4t[i].1n(o.4t[i].I(v.eK)+v.eK.U)}F{if(K(v.cR)){o.2G[i]=K(cR[i])?cR[i]:\'\'}F{o.2G[i]=i+1}}B is=0;if(K(v.56)&&q==-1){if(6t(v.56).I("mf:")==0){if(v.56.1n(4)*1==i){is=1}}if(v.56==o.2G[i]){is=1}if(v.56=="5W"&&i==o.4t.U-1){is=1}}if(K(o.56)){if(o.56==o.2G[i]){is=1;q=i}}if(is==1){o.mZ=i;o.3v=i}o.4t[i]=vr(o.4t[i])}}}F{o.4t[0]=vr(o.4t[0])}J o.4t[o.mZ]}}F{J x}};E vr(x){if(K(v.q7)&&x.I("//")==-1){x=v.q7+x}J x};G.Dv=E(){if(o.Y){B x=o.Y.Du();W(B i=0;i<x.U;i++){x[i].c9=i}o.Y=x;o.S.6v(o.Y)}};E jJ(y){B vs;W(B i=1;i<6;i++){B t="1F"+i;if(K(y[t])){v[t]=y[t];vs=H}}if(vs&&o.S){o.S.HE()}}G.jJ=E(x){jJ(x)};G.6v=E(x){if(1P(x)==\'3U\'){o.1D=[];o.l4=n1(x);o.Y=tL(x);if(o.S){o.S.6v(o.Y)}}};G.eO=E(x,y,z,no){!K(y)?o.3n=H:\'\';!K(z)?v.4R=0:\'\';v.1o=1N;v.4v=1N;!2W.4O?v.4O=1N:\'\';o.bu!=2?o.bu=P:\'\';o.8E=P;o.9K=P;o.a9=0;o.iM=[];o.tA=P;o.tI=P;o.KH=P;o.9Y=1N;o.nf=[P,P,P];o.17i=p4();o.Eh=0;o.dR=0;o.b7?o.b7=[]:\'\';o.2t!=\'6J\'&&o.3D?o.3D.6r():\'\';o.Dq?o.Dq=[]:\'\';if(o.ep){o.ep.6r()}if(o.R.6W()=="7T"){G.bD()}if(o.6q&&o.ax){o.S.kb()}if(K(o.2Z)){o.2Z.4q()}if(K(o.cd)){2P(o.cd)}js("1y");if(v.2a==1&&no!=1){o.X.fc();o.X.fc(\'6N\')}x=G.6I(x);if(y==1){o.2t=\'\'}o.R.6I(x);if((o.1l.2m||o.1l.7g)&&!K(y)){o.X.2H()}if(K(o.kx)){o.3N={x:1,y:1,x0:1,y0:1};o.R.iZ()}b9("1E","2H");o.R.kT();o.S.iU();o.S.mn();o.S.4P();o.g5?o.g5.Lj():\'\'};G.oO=E(x){B y=P;if(x&&o.py){v.1I=o.py;W(B i=1;i<6;i++){if(K(x[\'t\'+i])){v.1I=v.1I.1T("{"+i+"}",x[\'t\'+i]);y=H}}}J y};G.dx=E(){if(v.3n==1&&!v.Dn||o.3n){if(v.k0==1){1G(E(){o.X.2H()},42)}F{G.2H()}v.Dn=1;o.3n=P}kE()};G.kE=E(){kE()};E kE(){if(v.z2==1){if(1P Dm!=="1N"){o.th=1y Dm()}}}G.kT=E(){B x=P;if(o.1l.2m){x=H;if(v.DS==1&&o.1l.7Q){x=P}if(v.DP==1&&o.1l.jo){x=P}if(v.DV==1&&o.1l.5w){x=P}if(v.17e==1&&o.1l.aU){x=P}}if(v.17c==1&&o.1l.tv){x=H}J x};G.va=E(){o.R.4c(v.1L);if(o.3I){o.R.5m()}o.8E=H;o.S?o.S.4P():\'\';if(!o.1E&&!o.1A){v.5P==1?o.5P.3z("4N"):\'\'}if(o.5o&&o.4W){o.4x.Dk();o.4x.Go()}if(v.2a==1){if(v.BO!=1&&v.ko==1){!K(o.2a)?o7("6N","8E"):\'\'}}};G.BB=E(){!o.jO?aG(H):\'\'};E aG(x){o.jO=H;if(o.S){if(o.S.cJ()){o.S.7R()}}if(o.3e){o.3e.aw()}if(o.d1){o.d1.aw()}!x?o.R.2H():\'\';if(!o.tA){1G(E(){o.R.kT()},42)}!o.1E?o.S.2H():\'\';v.5P==1?o.5P.3z("1E"):\'\';v.2a==1?o.X.fc(\'dy\'):\'\';if(o.1l.2m){o.S.fj()}if(K(o.2Z)){o.2Z.17g()?o.2Z.vv():\'\'}if(v.17f==1&&K(v.ki)&&o.dt){if(v.ki!=\'\'&&!K(o.kt)){o.kt=7e(ug,v.Dh*2p);ug()}}}G.2H=E(bx){if(!o.1E&&o.R){o.gi=H;o.nM=P;o.7y=P;2P(o.zG);B 2O=P;if(o.2t=="4U"){if(!o.R.pI()&&v.3n!=1&&v.4R==1){2O=H;if(1V[\'YT\']){v.3n=1;o.3n=H;o.R.v4()}}}if(v.8I==1&&v.Cg==0){o.X.pg();2O=H}if(o.bu||2O){if(o.bu){8n("7x")?n4(2):\'\'}}F{o.lR=P;zL(!o.1A);o.ay.n2();if(!o.1A){js("1A");o.1A=H;if(v.1w.z3==1){1G(E(){o.S.ye()},100)}if(v.1w.9C>0&&v.3n==1){o.fr=H;1G(v1,v.1w.9C*2p)}if(v.16J==1&&v.163){16H()}W(B i=0;i<o.cM.U;i++){if(v[\'Ej\'+o.cM[i]]==1){3d.7J("Eg"+o.cM[i],6T.hw())}}if(v.15J==1&&v.15K){15L("1A")}if(o.3D){o.3D.1A()}js("1y");o.j0?o.S.xI(o.j0):\'\';o.S.vR();o.S.4P();b9("1E","2H");o.1l.2m?vf():\'\';o.ab?b9("Db","15M",1):\'\'}F{b9("CJ","15N")}if(v.CI==1&&!o.2e){B dd=1y 6T();B tt=dd.8D();if(tt-o.9x<dO){if(!o.1l.5w&&(v.Ce!=1||o.1l.2m)){G.9w()}}}if(o.5k){if(v.v3==1){5K(o.28)}}if(o.ep){o.ep.6r()}if(bx!=1&&8n("7x")||8n("6X")){n4(2)}F{if(v.7k==1&&K(v.Cd)&&!K(2W.7k)){7k(v.Cd);2O=H}if(!2O){1v("2H");o.R.1o()>0?o.S.3Y(o.R.1b(),o.R.1o()):\'\';if(!o.v7){o.v7=H;if(v.1w.9C>0&&v.3n==1){o.fr=H;1G(v1,v.1w.9C*2p)}}B n3=P;if(o.R.1b()>1&&v.nL==1&&bx!=1&&!8w()&&!K(o.2a)&&!K(o.5I)){n3=8n("dy")}if(n3){8w()?aG(P):\'\'}F{aG(P)}}}}}F{o.R?o.R.2H():\'\'}};E v1(){o.fr=P;o.S.4P()}G.3l=E(){if(o.1E){o.gi=P;1v("3l");o.R.3l();o.S.3l();js("4N");v.uR==1?8z():\'\';v.uU==1?oc():\'\';v.5P==1?o.5P.3z("4N"):\'\';if(o.5k){if(v.v3==1){3i(o.28)}}if(!K(o.2a)&&!K(o.5I)&&v.nL==0){8n("dy")}if(8w()){o.nM=H}o.jO=P}};G.5m=E(){o.R.5m();o.S.5m();o.3I=H;js("5B")};G.6F=E(){o.R.6F();o.3I=P;o.S.6F();o.R.4c(v.1L);js("aY")};G.4c=E(x,y){if(o.S){x<0.15O?x=0:\'\';x>1?x=1:\'\';if(x<=0){G.5m();v.1L=0;x=0}F{if(o.3I){G.6F()}v.1L=x}js("1L",x);o.S.4c(x,y);o.R.4c(x)}};G.9l=E(){o.S.9l()};G.7W=E(){o.S?o.S.7W():\'\'};G.15P=E(){G.7W()};G.uX=E(){o.X.6S();G.7W()};G.3Y=E(1b,1o){if(o.3y&&!o.1A){B f=o.3y.9S();if(f.t&&f.d){1b=f.t}}o.S?o.S.3Y(1b,1o):\'\'};G.qL=E(1b,1o){if(o.2f>0&&o.2t!="4U"&&!o.R.5A()){o.X.43(o.2f,P);o.2f=1N}};G.gz=E(){B d=1y 6T();o.9x=d.8D();B x=P;if(o.S.cJ()&&v.1j.8f!=1){o.S.bw();x=H}if(o.3e){if(o.3e.yJ()){o.3e.aw();x=H}}if(v.Y.8f==0){if(o.S.j1()&&v.Y.gA==1){o.S.cS();x=H}}if(v.7k==1&&K(v.C1)&&!K(2W.7k)){7k(v.C1);x=H}if(o.3I&&v.oz==1){o.X.6F();v.oz=0;x=H}if(!x){if(v.1W.on==1&&v.1W.2X==1&&v.1W.rC==1){7q(\'1E\',(o.1E?0:1))}G.8k()}};G.Ho=E(){if(o.S.cJ()){o.S.7R()}};G.8k=E(){if(o.R.6W()=="7T"){js("HM");v.15I==1?G.lD():G.3l()}F{js("HO");G.2H()}a8()};G.43=E(d9,kO){if(d9<o.R.1o()){if(v.fB.15S==1){if(d9>o.R.1b()){J}}if(v.4O>0){d9<v.4O?d9=v.4O:\'\'}1v("43");o.BZ=d9;o.R.43(d9);if(kO){o.S.43(d9,o.R.1o())}o.iP=H;o.fe=o.R.1b();a8(o.fe)}};G.zx=E(18,3Z,BM){if(o.R.6W()=="7T"&&o.jC!=\'K5\'){3l();if(o.2e&&BM){o.X.8L()}}1V.3j(18,3Z)};G.kH=E(){if(v.2a==1&&!o.1A){if(8n("7x")){o.tC=H;J}}B x=o.R.bZ();if(K(v.7f)){x=v.7f}if(x!=\'\'){js("7f");B km=1V.3j(x,(v.15T==1?\'15U\':\'v5\'));km.6m()}};G.6S=E(x){B 1b=o.R.1b();B 1o=o.R.1o();if(!o.1A&&o.2f>0){1b=o.2f}o.S.dS(1b,1o,x)};G.uK=E(){B 1b=o.R.1b();B 1o=o.R.1o();B ba=1o>0?1b/1o:0;if(!o.iP){o.S?o.S.dS((o.2f>0?o.2f:1b),1o):\'\'}F{1b!=o.fe&&o.fe!=-9?o.iP=P:\'\'}if((v.ga==1||v.BV==1)&&1o>0){nA("uY","2H 25%",ba,0.25);nA("v6","2H 50%",ba,0.50);nA("v8","2H 75%",ba,0.75)}W(B i=0;i<3;i++){if(!o.nf[i]){if(ba>=i*0.25+0.25){CG(i)}}}v.vb==1?1v(1,1b,1o):\'\';if(v.8M==1||v.vc>0){if(o.1E){B z=P;B nb=P;if(v.BR==1&&v.8M==1){if(!o.R.5A()){z=H}}if(1b>0){if(1b==o.1b&&!z){nb=H}F{o.a9=0}o.1b=1b}F{if(v.15V==1){B ld=o.R.af();v.vb==1?1v(2,ld,o.n8):\'\';if(!z){if(ld==o.n8){nb=H}F{o.a9=0}}o.n8=ld}}if(nb){o.a9++;if(v.8M==1){v.vb==1?1v(3,o.a9):\'\';if(o.a9==v.tc*(2p/o.qs)){o.X.f8()}}F if(v.vc>0&&o.R.qO()>1){if(o.a9==v.vc*(2p/o.qs)){o.R.5O(\'OR vK\')}}}}}if(v.8Z){if(v.8Z.b7==1&&1o>0){!o.b7?o.b7=[]:\'\';o.b7[2I.4a(1b)]=1}}if(v.2a==1){if(v.BO!=1&&v.ko==1){!K(o.2a)?o7("6N",1b,1o):\'\'}if(v.15W!=1&&v.sZ==1){!K(o.2a)?o7("gD",1b,1o):\'\'}}if(v.Ck==1&&v.ul>0){if(1b>=v.ul){if(!K(o.2a)){if(8n("6X")){o.R.3l();o.S.3l()}v.ul=0}}}7L("1E");if(v.8I==1&&v.Cg>-1){15X(1b,1o)}if(o.5k){a8(1b)}if(o.5z&&v.cL==1){if(o.3y){!o.2f?o.3y.mN(1b,1o):\'\'}}if(o.ax){o.6q?o.6q.1E(1b):\'\'}if(K(v.4v)){B ed=v.4v;if(7F([v.4v],\'-\')){ed=1o}if(ed>0&&1b>ed){if(o.2t=="4U"){o.R.3l();o.R.43(v.1A>0?v.1A:0)}F{o.R.qo();o.X.bD()}v.1A>0?o.2f=v.1A:\'\';o.X.pE()}}if(K(v.6r)){B r1=v.6r.2z(",");W(B i=0;i<r1.U;i++){B r2=r1[i].2z("-");if(r2.U==2){if(1b>r2[0]&&1b<r2[1]){o.R.43(r2[1]*1+(o.1l.7g?1:0))}}}}if(v.15Z==1){if(1P CH!=="1N"){CH(1b,ba)}}};E CG(x){o.nf[x]=H;if(v.cL==1&&v.7U==1&&v.CD==x){if(o.5z&&o.3a){o.3y?o.3y.CC(o.3a):\'\'}}}E nA(x,y,t,p){if(!K(o.iM[y])){if(t>p){b9(x,y,1)}}};G.f8=E(){o.a9=0;K(o.cd)?2P(o.cd):\'\';if(v.15R==1){js("8M")}F{o.2f>0||o.R.5A()?\'\':o.2f=o.R.1b()+(v.16I>0?1:0);B Cz=o.S.j1();js("8M");o.R.8M();Cz&&v.Y.gA==1?o.S.jf():\'\'}};G.Fk=E(){o.S.dS(0,0);o.S.wm(0,0);o.X.3Y(0,0);o.S.7W()};G.zc=E(){if(o.R){B 1b=o.R.af();if(v.15w==1){js("af",1b)}B 1o=o.R.1o();o.S?o.S.wm(1b,1o):\'\'}};G.pE=E(){js("15F");o.7y=H;if(v.9f==1){if(o.2t=="4U"){G.bD()}v.2a==1?o.X.fc(\'7x\'):\'\';if(v.1A>0){o.X.43(v.1A)}G.2H()}F{if(o.R.5A()||o.2t=="4U"){G.bD()}F{if(v.Cv==1){o.X.43((v.1A>0?v.1A:0),H);if(o.1l.ie){o.R.3l()}}}o.S.8O();v.Ck==1?v.15o=1:\'\';if(8n("nP")||8n("vy")){}F{ag()}}};G.9w=E(){B 2O=P;B 2r=P;o.DB=P;o.bC=H;1G(E(){o.bC=P},j2);W(B x in o.7n){if(o.7n.2u(x)){if(K(o.7n[x])){3o{o.7n[x].Ct()}2U(e){}}}}3o{o.dQ=H;if(((o.1l.5w&&v.hu==1)||(o.1l.aU&&v.JR==1))&&o.4W&&!o.as){B x=o.R.aH();if(x){if(x.15p){hn();2O=H}}}if(!2O){B nV;B y=o.1U;if((o.2t=="dm"||o.2t=="aD")&&o.1l.7Q&&v.hu==1){o.R.i3();J}if(y.tg){o.8l=H;nV=y.tg({nW:"1p"});if(nV!==1N){nV.d2(E(){}).2U(E(2r){})}}F if(y.tk){y.tk({nW:"1p"});o.8l=H}F if(o.1U.tl){y.tl({nW:"1p"});o.8l=H}F if(y.te){y.te({nW:"1p"});o.8l=H}F if(y.tq){y.tq();o.8l=H}}}2U(e){2r=H;1v(e)}if(!o.8l&&!2O){if(o.1l.3Q&&o.o0){hn()}F{G.yE()}}if(!2r){1G(Cl,4w)}};E hn(){B x=o.R.aH();if(x){o.j9=H;o.R.AR();x.15r();x.1z("15s",EP)}}E o2(){B x=o.R.aH();if(x){x.15t()}};G.hn=E(){hn()};G.o2=E(){o2()};E Cl(){if(o.DB!=H){if(o.9n){o.R.eV()}if(v.1W.tn==1){o5(H);o.5y=H}v.5P==1?o.5P.3z("nX"):\'\';js("2e");b9("nX","9w",1)}};B bP;B 8x={x:0,y:0};E sR(e){if(o.3e){if(o.3e.nY()){J}}if(e.15u!=0){e.ts!=0?8x.x++:8x.x--;e.bK!=0?8x.y++:8x.y--;if((v.1W.ER==1||v.1W.ES==1)&&o.2e&&8x.y>8x.x){3R(bP);bP=7e(E(){8x={x:0,y:0};3R(bP)},2p)}F{o.9D=H;3R(bP);bP=7e(E(){o.9D=P;o.S.4Y();8x={x:0,y:0};3R(bP)},4g);o.S.4Y()}if(8x.x>8x.y){if(e.ts>0){o.X.4c(3T(v.1L)-v.1W.hX/10,"no")}F{o.X.4c(3T(v.1L)+v.1W.hX/10,"no")}}F{B st=(o.1l.km?-v.1W.hX/10:v.1W.hX/10);if(v.1W.ES==1&&o.2e){o.R.1Q((e.bK>0?st:-st))}F if(v.1W.ER==1&&o.2e){3x("4f",(e.bK>0?"+"+st*10:"-"+st*10))}F{o.X.4c(3T(v.1L)+(e.bK>0?st:-st),"no");o.S.kM()}}}}E EP(){if(o.1l.5w){o.R.AP();js("ta")}o.j9=P}G.yE=E(){if(o.dQ){o.2e=H;o.S.9w();if(!o.8l){if(K(o.8U)){3o{O(o.8U,{\'17\':\'100%\',\'1d\':\'100%\',\'1m\':\'yu\',\'1c\':0,\'1f\':0,\'4S\':"nJ"})}2U(dZ){}}O(o.1U,{\'17\':\'100%\',\'1d\':\'100%\',\'1m\':\'yu\',\'1c\':0,\'1f\':0,\'4S\':"nJ"});o.2Y=o.1U.29;o.4p=o.1U.2S;3o{22.3S.C.5l=\'3c\';if(!K(o.Y)){22.wT=E(e){e.9R()}}}2U(dZ){}}if(v.tu==1){O(o.1U,{\'7p\':\'#46\'})}if(v.aB==1&&o.1l.3Q==1&&!o.1l.ff){B sw=1V.c8.17;B fz=1;W(B i=1;i<6;i++){if(sw>2p*i){fz=2q(v[\'aB\'+(2p*i)],i)}}if(fz>1){o.1U.C.Ez=fz;o.aB=fz;bp()}}if(o.3e){o.3e.aw()}a8();o.dQ=P}};G.8L=E(){o4=H;if(22.EN){22.EN()}F if(22.EM){22.EM()}F if(22.EL){22.EL()}F if(22.EK){22.EK()}F if(22.EJ){22.EJ()}F if(22.EH){22.EH()}if(!o.8l){G.yg(P)}};G.GY=E(x,y){tF(x,y)};E tF(x,Ew){if(K(o.2a)&&!Ew){o.nN=x}F{B 2O=P;B eW=o.9a/x;B eJ=0;B nZ={\'1d\':eW};if(v.15n==1){if(eW>o.91){eW=o.91;eJ=o.9a/x;o.9a=nZ[\'17\']=eJ}}if(K(o.8U)&&v.Ex!=1){3o{O(o.8U,nZ)}2U(dZ){2O=H;1v("eX 15v 15x")}}if(!2O){o.5f=x;o.91=eW;if(o.5f>0){O(o.1K,nZ)}if(eJ>0){js("17",eJ)}js("1d",eW)}if(o.2a&&!o.2e){o.4p=eW;if(eJ>0){o.2Y=eJ}o.2a.2A()}}};G.yg=E(x){if(o4||x){o.2e=P;o.j9=P;if(!o.8l){if(K(o.8U)){3o{O(o.8U,{\'1m\':\'nd\',\'1c\':0,\'1f\':0,\'4S\':\'EB\'});O(o.8U,o.Ey);O(o.8U,{\'17\':o.bA,\'1d\':o.cY})}2U(dZ){}}O(o.1U,{\'17\':o.bA,\'1d\':o.cY,\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'4S\':\'EB\'});3o{22.3S.C.5l=\'2y\';22.wT=E(e){J H}}2U(dZ){}}o.S.8L();if(v.tu==1){O(o.1U,{\'7p\':v.n5});if(v.eG==1){o.1U.C.7p=\'eG\'}F{O(o.1U,{\'7p\':v.n5})}}if(o.aB>1){o.1U.C.Ez=1;o.aB=1;bp()}if(v.1W.tn==1){o5(P);o.5y=P}if(o.3e){o.3e.aw()}a8();o.o1?o.o1=P:\'\';o.S.ly();o4=P;js("ta");o.8l=P;o.bC=P}};G.5y=E(x){v.1W.15y!=0?o5(x):\'\'};E o5(x){8x={x:0,y:0};if(x){1V.1z("kZ",sR)}F{3R(bP);1V.5L("kZ",sR)}}G.bD=E(x){v.4R=0;if(x!=1){o.S.3l();o.X.Fk()}F{}o.R.4c(v.1L);if(o.S.cJ()){o.S.7R()}if(o.3I){G.5m()}if(K(o.kt)){3R(o.kt);o.kt=1Z}a8(0);1v("2O");js("2O")};G.lD=E(){v.4R=0;v.3n=0;o.R.qo();o.X.bD()};G.6g=E(x){if(K(o.3v)){if(o.3v!=x){o.3v=x;if(v.w6==1){o.56=o.2G[x];if(o.5z){3d.7J("zn",o.56)}}o.R.6g(x);js("5v",o.2G[x]);o.S.vF(x)}}};G.iW=E(){o.S?o.S.iW():\'\'};G.dX=E(x){if(K(o.7t)){if(o.7t!=x){o.7t=x;if(v.En==1){o.b3=v.b3=o.7u[x];if(o.5z){3d.7J("yV",o.b3)}}o.R.dX(x);js("8c",x);o.S.mo("8c")}}};G.9H=E(x,z){x==\'0.0\'?x=0.1:\'\';B y=x;6t(y).I(\'.\')>0?z=1:\'\';y=y*1;if(!z){y=x==o.ew?1:o.6i[x];o.aj=x}y=3T(y);if(o.jg||z){o.hT=y;W(B i=0;i<o.6i.U;i++){if(y<=o.6i[i]*1){o.aj=i;1k}}}if(o.5z&&v.A6==1){3d.7J("As",y)}js("5q",y);o.R.9H(y);o.S.mo("5q")};E a8(x){o.3D?o.3D.1u(K(x)?x:o.R.1b()):\'\'};G.jQ=E(){if(o.3D){a8();o.3D.C()}};G.f0=E(x){if(1P(kn)==\'E\'){!o.3D?o.3D=1y kn():\'\';o.3D.zp(x)}};B 7E;B 9i;B nC;B 2w;E 8n(x){if(v["6s"+x+"Fg"]>0&&o.5z){B tb=3d.4y("po"+x+"4B"+o.d);if(tb){B ct=1y 6T();o.9x=ct.8D();B Fh=(ct.8D()-tb)/15z;if(Fh<v["6s"+x+"Fg"]){J P}}}if(v["6s"+x+"Ff"]>0){if(o.R.1o()>0){if(o.R.1o()<v["6s"+x+"Ff"]*60){if(v["6s"+x+"Fe"]>0){v["6s"+x+"4B"+"DM"]=v["6s"+x+"Fe"]}F{J P}}}}if(o.kN.I("8K")!=-1&&v.2a==1&&!o.bx&&v[x+\'s\']==1){if(1P t0=="1N"){J P}if(x=="6X"||x=="vy"){if(1P Fc!=="1N"){2w=[];J Fc(x)}}if(K(o.2a)||K(o.5I)){if(!5D(o.sU)||8w(o.4b)){1v(\'ad bg\');J P}F{1v(\'ad hw\');J H}}F{if(K(v[x])){if(v[x].6A().I(".")>-1||v[x].6A().I(":")>-1||v[x].6A().I("[15C]")>-1){js("15D",x);if(!8w(x)&&x!="gD"){1G(E(){o.1E||(o.5I==1Z&&o.2a==1Z)?\'\':o.X.9l()},10);gr()}7E=0;9i=0;nC=x;2w=v[x].2z(" g8 ");o.5J=[];o.td=2w.U;nD();o.Ep=1;o.nS=H;W(B i=0;i<2w.U;i++){2w[i]=2w[i].2z(" or ")}v[x.a1("4B","ix")]=v[x];v[x]=1Z;o.4b=x;if(x!=\'gD\'){o.2a=1y t0()}o.5I=1y nF();W(B i=0;i<2w.U;i++){W(B j=0;j<2w[i].U;j++){B 8i=4D(2w[i][j]);if(8i.I("[50%]")>0){B 1C=5M(1,2);2w[i][j]=2w[i][j].1T("[50%]","");if(1C==2){2w[i][j]=\'\'}}}}if(v.tW==1){W(B i=0;i<2w.U;i++){B n=i==0?1:0;if(2w[i].U>n){W(B j=n;j<2w[i].U;j++){B 8i=4D(2w[i][j]);if(o.1l.tU){gJ(8i)}F{1G(gJ,i*100,8i)}}}}}if(2w[0][0]==\'\'){lc()}F{o.5I.nG(4D(2w[0][0]),x)}J H}F{J P}}F{J P}}}F{J P}};G.sS=E(x){8n(x)};E o7(w,x,d){if(K(o[w+\'o\'])&&v[w+\'s\']==1){B y;W(B i in o[w+\'o\']){if(o[w+\'o\'].2u(i)){if(!K(o[w+\'o\'][i].nQ)&&K(o[w+\'o\'][i].1b)&&K(o[w+\'o\'][i].2a)){B z=o[w+\'o\'][i].1b.6A();B ok=P;if(z){if(x=="8E"){if(z==x){ok=H}}F{if(z.I("%")>0){if(d>0){z=2N(z.1n(0,z.I("%")))*d/100}F{z=-1}}F{z=2N(z)}if(x>=z){if(v[\'6s\'+w+\'EX\']>0&&z>-1){if(x-z>=v[\'6s\'+w+\'EX\']){z=-1}}if(z>-1){ok=H}}}if(o[w+\'o\'][i].F7&&o.R.1o()>0){if(o.R.1o()<o[w+\'o\'][i].F7*1){o[w+\'o\'][i].nQ=H;ok=P}}if(ok){y=o[w+\'o\'][i].2a;v[w]=o[w+\'o\'][i].2a;o[w+\'15E\']=o[w+\'o\'][i].1b;o[w+\'161\']=o[w+\'o\'][i].15H;if(8n(w)){o[w+\'o\'][i].nQ=H;1k}}}}}}}};E nE(){if(8w()){if(o.dH==0||v[\'6s\'+o.4b+\'162\']==1){O(o.sU,{"1B":0,"5Z":"3c","1f":4g});1v(o.4b+" 1p");o.4b==\'6N\'?o.R.2H():\'\'}}}E 8w(z){B y=P;B x=[\'6N\',\'dy\'];W(B i=0;i<x.U;i++){if(o.4b==x[i]||z==x[i]){if(v[\'6s\'+x[i]+\'16q\']==1){y=H}}}J y};G.8w=E(x){J 8w(x)};G.16r=E(x){x?\'\':o8();o.4b=="6N"?o.F3.2L(o.F2):\'\'};G.16s=E(){o8()};G.16t=E(){o8()};E o8(){if(8w()){if(o.1E){o.R.3l();o.S.3l()}1v(o.4b+" 1u");O(o.sU,{"1B":1,"5Z":"4C","1f":0});o.mK=1}if(o.j9&&!o.8l){o2()}F{if(v["6s"+o.4b+"h1"]==1&&o.2e){o.X.8L()}}};G.16v=E(x){o.5I=1Z;o.mK=0;1v("8K 4e",o.4b);js("16w",o.4b);if(x.1J=="gD"){B E4=1y 16p(x);o.sZ.2L(E4)}F{if(K(o.2a)){if(v.4R==0&&v.16x==1&&o.R.1b()==0&&o.R.1o()==0){v.4R=1;o.R.sH()}if((!o.2a.16z()||x.E1)&&o.t6>0){1v("8K 16A");o.2a.4q();o.2a=1Z;o.2a=1y t0()}if(8w()){nE()}F{if(o.1E){o.R.3l();o.S.3l()}}o.t6++;if(o.nS&&v.dA>0){2P(o.dA);o.dA=1G(DR,v.dA*2p*60);if(K(v.DY)){if(v.DY!=\'\'){o.l0?o.l0.6r():\'\';o.l0=1y 16C()}}}o.nS=P;if(v.DU>0){1v("8K 16E");js("16F");1G(t7,v.DU*2p,x)}F{t7(x)}}F{1v("8K 16G")}}};E t7(x){o.2a.Go(x)}E DR(){if(K(o.2a)){if(o.2a.cZ()&&o.dH==0){o.2a.tT();1v("8K vK "+v.dA);2w=[];cB()}}}G.16n=E(){js(\'16d\',o.4b);1v("8K 2r");t9()};G.lc=E(){t9()};E t9(){B n=nD();1v("8K 7b "+!n);!n?lc():cB()};G.16m=E(x){if(v[o.4b+"ty"]){W(B i=0;i<3;i++){v[o.4b+"ty"]=v[o.4b+"ty"].1T(x+(i==0?\' g8 \':(i==1?\' or \':\'\')),\'\')}}};E nD(){B x=P;if(o.4b){B 8h=v[\'6s\'+o.4b+\'4B\'+\'DM\'];B jH=v[\'6s\'+o.4b+\'4B\'+\'165\'];if(jH||8h){if(jH>0&&o.tJ>0){o.td=jH;if(o.dH>=jH){x=H}}F{if(8h>0){o.td=8h;if(o.dH>=8h){x=H}}}}}J x}E lc(){if(2w.U>0&&2w[7E]){if(9i<2w[7E].U-1){1v("8K 166");o.2a?o.2a.tT():\'\';nE();9i++;B 8i=4D(2w[7E][9i]);B gp=uc(8i);if(gp==\'7r\'){o.5I=1y nF();o.5I.nG(8i,o.4b)}if(gp==\'2r\'){lc()}}F{cB()}}F{cB()}}E uc(8i){B x=\'7r\';if(v.tW==1&&o.5J){B nK=P;B n=0;W(B i=0;i<o.5J.U;i++){if(o.5J[i].nR==0){if(o.5J[i].bT.DJ(8i)){o.5J[i].nR=1;B y=o.5J[i].bT.aK();if(y==\'4e\'){o.5I=o.5J[i].bT;1v("8K DJ");o.5J[i].bT.fW();x=y}F{if(y==\'\'){x=\'ok\';1v("8K 167");o.5I=o.5J[i].bT;o.5J[i].bT.168()}if(y==\'2r\'){x=\'2r\'}}nK=H}if(nK&&o.5J[i].gb==0){n++;if(n<6){tY(o.5J[i])}F{1k}}}}}J x}G.169=E(x,y){if(x!=\'\'){B z=7E;B tV=P;if(y){W(B j=0;j<2w.U;j++){2w[j]==y?z=j:\'\'}}if(2w.U==1){if(2w[0].U>1&&9i<2w[0].U-1&&2w[9i]){B DF=2w[9i].6Y(1,99);2w[0].tS(9i+1,99);tV=H}}if(1P(x)=="3U"){W(B i=0;i<x.U;i++){2w.tS(z+i+1,0,[x[i]]);if(o.1l.tU){gJ(x[i])}F{1G(gJ,i*100,x[i])}}}F{if(1P(x)=="59"){2w.2L([x]);gJ(x)}}if(tV){2w[2w.U-1]=2w[2w.U-1].a1(DF)}}};G.16b=E(x,y){if(x!=\'\'){B z=7E;if(y){W(B j=0;j<2w.U;j++){2w[j]==y?z=j:\'\'}}if(2w[z]){if(1P(x)=="3U"){W(B i=0;i<x.U;i++){2w[z].2L(x[i])}}F{if(1P(x)=="59"){2w[z].2L(x)}}}}};G.cB=E(x){cB(x)};E gJ(x){if(v.tW==1&&o.5J){B i=0;W(B i=0;i<2w.U;i++){if(2w[i]==x){if(7E>=i){J}F{}}}if(2w.U==1&&2w[0].U>1){}F{B n=0;W(i=0;i<o.5J.U;i++){o.5J[i].nR==0?n++:\'\'}o.5J.2L({gb:0,nR:0,x:4D(x),t:o.4b,bT:1y nF(H)});n<5?tY(o.5J[o.5J.U-1]):\'\'}}}E tY(x){if(x){x.gb=1;x.bT.nG(x.x,x.t)}}E cB(jE){B 2O=nD();1v("8K 6r ("+o.dH+")");if(2w.U>0&&7E==2w.U-1){if(2w[0][0].I("js:")==0){7E=-1;2w=[[2w[0][0]]]}}if(o.164==2){2O=H}if(2w.U>7E+1&&!2O){o.2a.tT();nE();7E++;o.Ep++;9i=0;B 8i=4D(2w[7E][0]);B gp=uc(8i);if(gp==\'7r\'){o.5I=1y nF();o.5I.nG(8i,nC)}if(gp==\'2r\'){cB(jE)}}F{fI();o.S.7W();if(K(o.2a)){o.2a.4q();o.2a=1Z}o.5I=1Z;2w=[];9i=0;7E=0;o.mK=0;o.Em!=1?js("16c",o.4b):\'\';o.Em=0;if(v.16e==1){if(o.nI){3o{o.nI.vW()}2U(e){1v(o.nI,e)}o.nI=1N}}nC=\'\';o.dH=0;o.Ei=0;2P(o.dA);3R(o.16f);o.l0?o.l0.6r():\'\';o.cV?o.cV.1p():\'\';o.tJ++;if(o.4b=="7x"||(o.4b=="dy"&&v.nL==1&&o.gi)||o.4b=="6N"){if(v.3G!=\'?\'){o.R.gc();B re;if(o.tC){o.X.kH();o.tC=P;re=H}if(o.2t=="4U"&&!o.tH&&o.1l.5w){re=H;o.4b=="7x"?o.R.Ji():\'\'}if(re||jE==\'jE\'||v.16h==1||o.nM){o.nM=P}F{o.X.2H(1)}}}if(o.nN>0){tF(o.nN);o.nN=0}if(o.4b=="nP"){ag()}o.tH=P;o.4b=1Z}};G.16i=E(){2w=[[\'\']]};G.fc=E(y){B x=[\'7x\',\'dy\',\'nP\',\'6X\',\'vy\'];B z;W(B i=0;i<x.U;i++){z=P;if(y){y!=x[i]?z=H:\'\'}if(!z&&K(v[x[i].a1("4B","ix")])){v[\'6s\'+x[i].a1("4B","E8")]--;if(v[\'6s\'+x[i].a1("4B","E8")]>0){v[x[i]]=v[x[i].a1("4B","ix")];v[x[i].a1("4B","ix")]=1Z}}}if(y=="7x"||y=="6N"){if(v.tM>1){if(K(o.tK)&&v.ko==1){W(B i in o.tK){o.tK[i].nQ=1N}v.tM--}}}};G.pg=E(){gr();if(K(o.8I)){o.8I.4q();o.8I=1Z}o.8I=1y 16j()};G.16k=E(){fI();o.8I.4q();o.8I=1Z};G.gr=E(){gr()};G.fI=E(){fI()};E gr(){if(o.aA){}F{o.aA=1O("1X");o.1U.1M(o.aA);eC(o.aA);O(o.aA,{"2i":"#46","1B":0.1});o.aA.C.4S=HT}};E fI(){if(o.aA){o.1U.3q(o.aA);o.aA=1Z}};E 8z(){if(K(o.2j)){B p=o.2e?2q(v.16l,v.2j):v.2j;if(p!=o.yS){a7(p,o.2j,v.gP)}1u(o.2j);O(o.2j,{"1B":v.lm});o.S.4P();o.gx?o.gx.1E():\'\'}};G.f7=E(){if(K(o.2j)){if(5D(o.2j)){3R(o.wA);B t=o.R.1b();if(t==0&&v.Bt==1){}F{if(v.BL>0){2P(o.tO);o.tO=1G(oc,v.BL*2p)}F{oc()}}}}};E oc(){2P(o.tO);if(v.uR==1&&!o.1E){}F{O(o.2j,{"1B":0});1G(zF,42)}}E zF(){if(!o.1E&&v.fY==1){}F{1p(o.2j);o.gx?o.gx.4N():\'\';o.S.4P()}}G.8z=E(){8z()};E zL(x){if(v.tN==1){W(B i=0;i<5j.U;i++){if(5j[i]){if(5j[i].3z("id")!=v.id){5j[i].3z(\'4N\')}}}}eU=v.id}E tL(x){B y=7o.6n(x).U;o.k1=0;if(y>0){x=tG(x,y,\'\',-1)}J x}E tG(x,y,p,j){B x2=[];B 2O;if(K(x[\'Y\'])){x=x[\'Y\'];y=x.U}B ii=0;W(B i=0;i<y;i++){2O=P;if(K(x[i][\'id\'])){x[i][\'dh\']=x[i][\'id\']}x[i][\'id\']="x"+p+\'-\'+i+(K(x[i][\'id\'])?\'-\'+x[i][\'id\']:\'\');j==-1&&i==0&&!K(x[i][\'5b\'])?o.jY=x[i][\'id\']:\'\';if(!K(o.jY)){j==0&&!K(x[i][\'5b\'])?o.jY=x[i][\'id\']:\'\'}x[i][\'7A\']=p;x[i][\'tB\']=j;x[i][\'c9\']=ii;if(K(x[i][\'1o\'])){o.k1+=x[i][\'1o\']}if(K(x[i][\'zW\'])){x[i][\'1I\']=x[i][\'zW\'];B q1=x[i][\'3G\']?x[i][\'3G\'].I(\'[\'):0;B q2=x[i][\'3G\']?x[i][\'3G\'].I(\']\'):0;if(q1>0&&q2>0){B s1=x[i][\'3G\'].1n(q1+1,q2-q1-1);B s2=s1.2z(",");B s3=\'\';W(B k=0;k<s2.U;k++){s3+="["+s2[k]+"]"+x[i][\'3G\'].1T("["+s1+"]",s2[k])+(k<s2.U-1?",":\'\')}x[i][\'3G\']=s3}}if(K(x[i][\'Y\'])){x[i][\'5b\']=x[i][\'Y\']}if(!K(x[i][\'5b\'])){if(K(x[i][\'3G\'])){if(x[i][\'3G\']==\'\'&&!K(x[i][\'7k\'])){2O=H}}F{2O=H}}if(!2O){o.1D[x[i][\'id\']]=x[i];ii+=1}if(K(x[i][\'5b\'])){B z=7o.6n(x[i][\'5b\']).U;if(z>0){x[i][\'5b\']=tG(x[i][\'5b\'],z,x[i][\'id\'],i)}}if(!2O){x2.2L(x[i])}}J x2}E zA(){B x=[];if(K(v.4T)){if(v.4T.I("x-")!=0){W(B y in o.1D){if(o.1D.2u(y)){if(o.1D[y].dh==v.4T){v.4T=y}}}}if(K(o.1D[v.4T])){v.Y.12z==1?v.Y.ma=0:\'\';x=o.1D[v.4T]}F{x=o.Y[0];if(v.4T==o.tD){o.2f=1N}}}F{x=o.Y[0]}if(x){W(B i=0;i<10;i++){if(K(x[\'5b\'])){x=x[\'5b\'][0]}F{1k}}v.4T=x.id;if(v.4T==o.tD&&x.1A!=\'3y\'){x.1A=1N}}J x}G.fC=E(){J fC()};E fC(){B x=P;if(o.S){if(o.S.gT()){if((v.Y.dv==1||v.jz==1)&&o.S.cD()){x=H}}}J x};E ag(){b9("4v","ag",1);o.X.fc();if(o.5z&&v.cL==1){o.3y.mN(0,o.R.1o())}if(o.S.gT()){if(fC()){if(K(v.Y.zI)){o.zG=1G(E(){o.S.bn()},v.Y.zI*2p)}F{o.S.bn()}}F{tQ()}}F{if(v.YF==1&&o.2e){o.X.8L()}tR()}}G.zN=E(){tQ()};E tQ(){if(v.Y.oS==1&&!o.S.cD()){o.S.lB();J}if(v.Y.GM==1){!o.S.j1()?o.S.cS():\'\'}tR()}E tR(){8z();v.5P==1?o.5P.3z("4v"):\'\';js("12x");if(v.7k==1&&v.Xn==1&&2F(v.zQ)){7k(v.zQ)}if(v.d1){if(1P zC!=="1N"){!o.d1?o.d1=1y zC():o.d1.zx()}}}E uh(x){if(x.I(\'js:\')==0){3o{x=2n(x.1n(3))}2U(e){bh.1v(e.8p)}}J x?x:\'\'}E ug(){B ue=2I.8s(6T.hw()/2p);B ud=(K(v.A3)?v.A3:0)+2N(o.R.1b());B 1J=0;o.1l.cK?1J=1:\'\';o.1l.5w?1J=2:\'\';o.1l.aU?1J=3:\'\';o.1l.Xo?1J=4:\'\';o.1l.tv?1J=5:\'\';B 18=v.ki.1T("[ue]",ue);18=18.1T("[ud]",ud);18=18.1T("[Xp]",1J);B 9o=22.1O("4m");9o.6o(\'3h\',18);9o.6o(\'1d\',\'41\');9o.6o(\'17\',\'41\');o.1U.1M(9o)}};B zJ=E(18){B 18;B 3V;B pD;B 7Z;B fR="";B ef=0;B iV=P;B pP=P;B ti;B R;B 3t;o.3N={x:1,y:1,x0:1,y0:1};B am;B qy;B qG=0;B fg=0;B hP;if(1P(18)==\'59\'){18=4D(18);if(18.I("[{")==0){3o{18=18.1T(/6J\'qt/ig,\'"\');18=5u.7c(18);am?18=o.X.6I(18):\'\'}2U(e){bh.1v(e);18="Bf 5u"}}if(18.I("#"+v.an)==0){18=o[o.fd[0]](18)}if(18){if(18.I("#"+v.cF)==0&&18.I(v.dr)>0){am=H;o[o.fd[1]](18,bE)}}if(18){if(18.I("#0")==0){if(18.I(o.dT)>0){18=cN(18.1T(o.dT,\'\'))+o.dT}F{18=cN(18)}}}if(v.cT==1){18=cT(18)}if(1P(18)==\'59\'){if(18.I(".bi")==18.U-4||18.I(".9s")>0){qy=18.2z(" or ");sW()}}}o.3K=1O("1X");eC(o.3K);O(o.3K,{"4F":"2K 0.2s 3f","1F-8N":"8P"});o.1U.1M(o.3K);if(v.1W.Bd==1){if(!o.tZ){sc(o.3K,\'o.Bd\',v.1W.k8!=1,v.1W.k8==1,Bc);o.tZ=H}}if(!am){bE()}E Bc(){B p=o.3K.lf;B p2=o.2Y;if(v.1W.k8==1){p=o.3K.u1;p2=o.4p}B x;if(p>p2*2q(v.1W.Ba,0.5)){if(o.S.gO()){x=H;o.S.dC()}}F{if(p<-p2*2q(v.1W.Ba,0.5)){if(o.S.cD()){x=H;o.S.bn()}}}if(x){if(v.1W.k8==1){O(o.3K,{"1f":0})}F{O(o.3K,{"1c":0})}}F{1y 5T({mc:o.3K,1J:(v.1W.k8==1?"1f":"1c"),to:0,1b:0.1,5g:"HK",me:"tZ"})}}E sW(){18=qy[qG];if(18.I(o.dT)>0){18=18.1T(o.dT,\'\');v.3G=18}B 4Z=f1(18);4Z.ch=E(){if(G.fy==4&&G.6W==4w){cS(G);o.S.Hf()}F{pY(1)}};4Z.tX=E(e){pY(1)};4Z.b5();am=H}E pY(x){if(qG+1<qy.U){qG++;sW();x=0}if(x==1){5O("Y fn pC or AV B5")}if(x==2){5O("Xq 5u")}}E cS(x){if(x.ee){B y=x.ee;if(y.I("#"+v.an)==0){y=o[o.fd[0]](y)}if(y.I("#"+v.cF)==0&&y.I(v.dr)>0){y=o[o.fd[1]](y)}if(18.I(".bi")==18.U-4){B bi=y.2z(/(\\r\\n\\t|\\n|\\r\\t)/gm);18=[];B sT=1;B jy=\'\';W(B i=0;i<bi.U;i++){if(bi[i].I("#Xr")>-1){if(bi[i].I(" - ")>-1){B 1C=bi[i].2z(" - ");jy=1C[1C.U-1]}}if(bi[i].I("3L")>-1){18.2L({1I:""+(jy!=\'\'?jy:sT),3G:bi[i]});sT++;jy=\'\'}}}F{y=y.1T(/(\\r\\n\\t|\\n|\\r\\t)/gm,"");3o{18=5u.7c(y)}2U(e){pY(2)}}if(o.S){if(v.Y.mg==1){o.S.jf(2)}}bE();bp();1G(E(){js("Y")},1)}}E bE(x){18=o.X.6I(x?x:18);18&&18!=\'?\'?6I(18):\'\';o.1E&&x&&!o.2a?o.R.2H():\'\'}E 5O(x,B0){B y=H;B yy=H;js("Xs",x);if(B0!=1&&v.8M==1&&v.tw==1){sY();J}if(3V){if(o.1E||o.gi||(v.3n==1&&!o.1A)){if(3V.U>0){7Z++;y=7Z>3V.U-1;if(y&&3V.U>1&&v.dR>0){if(o.dR<v.dR){7Z=0;y=P}o.dR++}if(y&&v.Xt==1){if(o.4t.U>1){if(o.2G[o.3v].I(2T("fT"))==-1){o.2G[o.3v]=o.2G[o.3v]+\' (\'+2T("fT")+\')\'}if(o.3v>0){yy=P;o.X.6g(o.3v-1);hC()}F{if(o.2G[o.3v+1].I(2T("fT"))==-1){yy=P;o.X.6g(o.3v+1);hC()}}}}if(!y){B z=P;o.2f>0||!o.1A||R.5A()?\'\':o.2f=4J();if(o.2t!=qb(3V[7Z])||o.2t!=\'cp\'){if(o.1E){o.X.bD(1);z=H}}if(v.pX>0){2P(o.hA);o.hA=1G(jM,v.pX*2p)}F{jM()}}F{if(v.8M==1&&yy&&v.tw!=1){y=P;sY()}}}}F{y=P;if(!o.1A){jM()}}}if(y&&yy&&x){tr(x,H)}};E jM(){if(o.1E||o.gi||(v.3n==1&&!o.1A)){1v("Xu cz",o.2f);6I(\'or\');o.1A&&!o.2a?R.2H():\'\';hC()}F{if(!o.1A){if(3V.U>0){if(7Z+1<3V.U){7Z++;o.dR++;6I(\'or\')}}}F{2P(o.hA);o.hA=1G(jM,(v.pX>0?v.pX:5)*2p)}}}E tr(x,mr){b9("2r","ih",H);if(v.AW==1&&!o.bu){if(v.Bj==1){o.ay.9s(v.B7)}F{o.ay.9s(x)}if(v.By==1&&K(v.BI)){o.ep=1y BH();o.X.f7()}}mr?o.bu=H:\'\';if(o.1E){o.X.7W();o.S.3l()}K(o.2j)&&!K(o.ep)?o.X.8z():\'\';js("2r",x)}E sY(){fg++;1v("ih f8 Ja "+fg);o.1E?o.mi=1:\'\';K(o.cd)?2P(o.cd):\'\';o.cd=1G(BE,v.tc*2p)}E BE(){B x=2q(v.Xv,10);if(o.1E||o.mi==1){o.mi=0;if(fg<x){o.X.f8()}F{if(v.tw==1){5O(R.jF(),1)}F{tr(\'f8 ih \'+R.jF())}}}}G.5O=E(x){5O(x?x:R.jF())};G.8O=E(y){1v("pE");iV=H;2P(hP);B x=P;if(3Y()>0&&!o.5o&&!y){B 1b=o.JL;if(1b+10<3Y()){1v(\'Xw (BD)\');js("BD");R.2H();R.43(1b);x=H}}if(!x){o.X.pE();js("4v")}};G.aG=E(){if(v.uU==1){K(o.2j)?o.X.8z():\'\'}v.fY==1?o.X.f7():\'\';o.S.2H();o.X.BB();if(v.Xm==1&&K(v.rO)){if(v.rO.U>5){rN();3R(ti);ti=7e(rN,v.Bx*2p)}}js("1E")};G.kT=E(){if(v.om==1&&o.4W){if(o.X.kT()){o.as=R.sO();o.S.4P();uz()}}o.tA=H};G.e7=E(){4J()>0&&4J()==3Y()&&o.X.fC()?\'\':o.X.3l()};G.iO=E(){1v("Xx")};G.iS=E(){1v("uX");o.X.uX();K(o.fe)?js("4f",o.fe):\'\'};G.df=E(){1v("va");fg=0;o.X.va();o.2t=="1H"?rb(1):\'\'};G.ah=E(){if(R){1v("3Y",3Y());o.X.3Y(4J(),3Y());js("1o",3Y());fg=0;2P(o.cd);if(K(o.pK)){o.X.dX(o.pK);o.pK=1Z}}};E 4J(){B x=R.1b();J x}E 3Y(){B x=R.1o();J x}G.e1=E(){};G.9M=E(){1v("9l");o.X.9l();js("8d")};G.d6=E(){if(ef!=4J()){if(!o.aA){o.X.7W();if(ef==0){if(v.fY==1&&v.Bt==1){o.X.f7()}}}}ef=4J();B 9p=3Y();js("1b",ef);if(v.2h.on==1){if(1P(Br)==\'E\'){!v.et&&v.2h.et?v.et=v.2h.et:\'\';if(!3t&&v.2h.4X!=1&&v.et&&v.et!=\'\'&&ef>0){o.ea=1y Br();3t=o.ea.fM()}}}if(o.2t=="1H"&&o.1l.7g&&9p>0){if(o.1E&&ef>9p-1){2P(hP);hP=1G(Bp,4g)}}};E Bp(){if(!iV){o.X.3l();o.R.8O()}}G.v4=E(){if(o.2t=="4U"){R?R.pI():\'\'}};G.Bn=E(x){o.X.bD();R.Bl(x)};G.HI=E(x){if(K(x)){if(3t){3t.4c(x)}v.2h.1L=x}};G.AT=E(x){if(K(x)){if(3t){3t.3h(x);3t.2H()}}};G.pI=E(){if(o.2t=="4U"&&R){J R.4e()}F{J H}};G.mA=E(){J o.2t=="1H"?R.mA():1N};G.lN=E(){J R.lN()};G.6g=E(x){1v("Xz",x);if((o.2t=="cp"||o.2t==o.ws||(o.2t=="1H"&&(v.9r==0||az()<2))||(o.2t=="3X"&&(v.qc==0||d0()<2)))&&K(o.4t[x])){B 1b=G.1b();o.2f>0?\'\':o.2f=1b;o.X.43(1b,P);6I(o.4t[x],H);B y=H;if(v.1j){if((v.1j.XA==1&&!o.1E)||!o.1A){y=P}}if(o.9Z>0){R.gL(o.9Z)}if(y){o.X.2H()}}if(o.2t=="1H"&&v.9r==1&&az()>1){R.Is(x)}F if(o.2t=="3X"&&v.qc==1&&d0()>1){R.Ix(x)}F if(o.2t=="4U"||o.2t=="dm"){R.tm(x)}};G.GU=E(x,y){J kF(x,y)};G.ux=E(x,y){J A7(x,y)};E kF(x,y){B r=x.1d+\'p\';if(x.1d<4w){r=\'v0\'}F if(x.1d>=4w&&x.1d<=dO){r=\'q0\'}F if(x.1d>dO&&x.1d<=cs){r=\'q3\'}F if(x.1d>cs&&x.1d<=42){r=\'qg\'}F if(x.1d>42&&x.1d<=hq){r=\'Ar\'}F if(x.1d>hq&&x.1d<=Aq){r=\'qq\'}F if(x.1d>Aq&&x.1d<=Ap){r=\'qp\'}F if(x.1d>Ap&&x.1d<=Ao){r=\'vk\'}F if(x.1d>Ao&&x.1d<=Am){r=\'XB\'}F if(x.1d>Am){r=\'vg\'}if(x.17==XC&&x.1d<=XD){r=\'q0\'}F if(x.17==Aj&&x.1d<=Ai){r=\'q3\'}F if(x.17==XE&&x.1d<=XF){r=\'qg\'}F if(x.17==XG&&x.1d<=Ae){r=\'qq\'}F if(x.17==XH&&x.1d<=XI){r=\'qp\'}F if(x.17==XJ&&x.1d<=Xy){r=\'vk\'}F if(x.17==Xk&&x.1d<=X8){r=\'vg\'}if(v.1j.Xj==1&&K(v.1j[\'6G\'+r])){r=v.1j[\'6G\'+r]}F{if(y==1){r=2T(r)}if(y==2&&K(x.9Y)){r=2N(x.9Y/2p)+\' \'+2T(\'hB\')}}J r};E A7(x,y){B r=x.p1();if(r=="WX"||r=="en"){x="WY"}F if(r=="WZ"||r=="ru"){x="Русский"}if(1P(v.qj)=="3U"){if(K(v.qj[x])){x=v.qj[x]}F{x=2q(v.qj[y.6A()],x)}}J x};E uz(){if(o.4W&&o.2c&&!o.uL){R.uN();W(B i=0;i<o.2c.U;i++){if(o.2c[i]!=\'9V\'){R.IU(o.2c[i],o.3k[i],(i==o.3w))}}o.uL=H}}G.9H=E(x){1v("X0",x);x=3T(x);R?R.ge(x):\'\';if(v.2h.on==1){if(3t){3t.ge(x)}}};G.AR=E(){uz()};G.AP=E(){R.uN()};G.dX=E(x){1v("X1",x);if(o.bz.U>0){if(o.bz[x]){B 1b=G.1b();o.2f>0?\'\':o.2f=1b;o.X.43(1b,P);6I(o.bz[x],H);o.X.2H()}}F{if(o.2t=="1H"&&v.cA==1){R.Ib(x)}F if(o.2t=="3X"&&v.AN==1){R.Iw(x)}F if(o.4W){R.gL(x)}}};G.qf=E(){B x=o.2G[o.3v];x==1N?x=\'\':\'\';B y=hz()&&v.hG==1&&v.9r==1&&x!=2T("2y");J(y?\'\'+2T("2y")+\' \':\'\')+x};G.uo=E(){B x=o.7u[o.7t];x==1N?x=\'\':\'\';J x};G.hz=E(){J hz()};E hz(){B x=P;if(R){if(o.2t=="4U"){x=R.2y()}if(o.2t=="1H"&&v.9r==1&&az()>1&&v.hG==1){x=R.2y()}if(o.2t=="3X"&&v.qc==1&&d0()>1){x=R.2y()}}J x}E az(){if(o.2t=="1H"){J R.az()}F{J 0}}E d0(){if(o.2t=="3X"){J R.d0()}F{J 0}};G.9k=E(){J o.4W?R.9k():o.5f};G.4Y=E(x){if(R&&(o.2t=="4U"||o.2t=="aD"||K(v.9k))){R.4Y()}if(v.xE>0){O(o.3K,{"1d":(o.2e?"100%":o.cY-v.xE)})}if(o.3t&&v.2h.Je==1){o.ea.4Y()}if(v.uJ==1){X2()}if(o.sX){o.sX.4Y()}};G.3P=E(){J R?R.3P():{}};G.i3=E(){R.i3()};G.8M=E(){1v(\'8M\');o.a9=0;o.1A?v.3n=1:\'\';o.X.9l();if(18&&v.X3!=1){if(18.I(\'(5M)\')==-1){18=18+(18.I(\'?\')==-1?\'?\':\'&\')+\'AG=(5M)\'}}if(18){if(o.4W){R.3h(18);G.2H()}F{6I(18)}}};if(!K(o.2j)){se()}if(K(v.2j)){if(v.2j!=\'\'){a7(v.2j,o.2j,v.gP);if(v.uU==1&&!o.1A){1p(o.2j)}}F{v.2j=1Z}}E aK(){fR=R?R.6W():\'\'}E AC(18){3V=18.2z(" or ");W(B i=0;i<3V.U;i++){if(3V[i].I(" g8 ")>-1){pD=3V[i].2z(" g8 ");3V[i]=pD[5M(0,pD.U-1)]}if(K(v.q7)&&3V[i].I("//")==-1){3V[i]=v.q7+3V[i]}}7Z=0}E Ay(){aK();if(fR=="7T"||o.5o){o.X.uK()}if(fR!=""){o.X.zc()}}E se(){if(o.2j){o.1U.3q(o.2j)}o.2j=1O("1X");O(o.2j,{"4l-3b":"1S","1B":v.lm,4F:"1B 0.5s"});if(v.uJ==1){X4()}F{O(o.2j,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1d\':\'100%\'})}o.1U.1M(o.2j)}E 6I(x,y,AB){2P(hP);v.hI==\'\'?v.hI=\';\':\'\';if(x.I(\'{\')>-1&&x.I(\'}\')>-1&&x.I(v.hI)>-1){B z=x.2z(v.hI);o.bz=[];W(B i=0;i<z.U;i++){o.7u[i]=z[i].1n(z[i].I("{")+1,z[i].I("}")-1);o.bz[i]=z[i].1n(z[i].I("}")+1);if(K(v.b3)){if(v.b3==o.7u[i]){o.7t=i}}}x=o.bz[o.7t]}!K(3V)?3V=[]:\'\';o.qm?2P(o.qm):\'\';x&&x!=\'or\'&&x!=\'x\'?AC(x):\'\';B ft=o.2t;if(3V.U>0){B fu=3V[7Z];if(fu.I(\'js:\')==0){3o{fu=2n(fu.1n(3))}2U(e){bh.1v(e.8p)}}if(fu){o.2t=qb(fu);B fM=P;if(AB){fM=H}18=fu;if(18){18=18.1T(/\\(5M\\)/g,2I.5M())}F{18=3V[0]}if(!fM&&x!=\'x\'&&R&&o.2t==ft&&(ft=="cp"||(ft=="aD"&&!o.1l.2m)||(ft=="4U"&&o.1A&&!pP)||ft=="dm"||ft=="1H"||ft=="3X")){R.3h(18);1v("3h")}F{1v("X5");qd();La(18)}rb()}}if(!y){3R(o.uH);o.uH=7e(Ay,o.qs);if(!K(v.28)&&v.pM==1&&v.ra==1){v.28=\'\'}if(K(v.28)){o.X.f0(v.28)}if(v.gF==1){if(v.om==1&&o.1l.2m){}F{if(o.2t=="4U"){O(o.3K,{"1f":-j2,"1c":-j2})}F{3i(o.3K)}v.1w.1p=0}}}}E rb(x){if(o.ew||x){if(o.jg){R.ge(o.hT)}F{if(o.aj!=o.ew){R.ge(o.6i[o.aj])}}}}E qb(x){B 1J="cp";if(x){if(x.I(".Jj")>0){1J="1H"}F if(x.I(".Jo")>0){1J="3X"}F if(x.I("w")==0&&x.I("s")==1){1J=o.ws}F if(x.I(\'4U.8e/\')>-1||x.I(\'q8.be/\')>-1){if(1P(rz)==\'E\'){1J="4U";if(v.z9==1){B y=\'cr://4m.4U.8e/vi/\'+qa(x)+\'/\';KD(y+\'KT.jB\',E(z){z>100?v.2j=y+\'KT.jB\':v.2j=y+\'X6.jB\';if(o.1D){o.1D[o.3a][\'2j\']=v.2j}v.3n==1||o.1A?\'\':a7(v.2j,o.2j,v.gP)})}}F{1v("No KC")}}F if(v.aD==1&&x.I(\'aD.8e/\')>-1){1J="aD"}F if(v.dm==1&&x.I(\'WW.8e\')>-1){1J="dm"}F if(v.Kx==1){if(1P(Kz)==\'E\'){Kz(x)?1J="6J":\'\'}}}o.4W=1J=="cp"||1J=="1H"||1J=="3X"||1J==o.ws;J 1J}E KD(18,KE){B 4m=1y X7();4m.ch=E(){KE(G.1d)};4m.3h=18}E La(x){o.2t=qb(x);if(o.4W){R=1y JV(x,o.3K,P)}if(o.2t=="4U"){R=1y rz(x,o.3K)}if(v.aD==1&&o.2t=="aD"){R=1y X9(x,o.3K)}if(o.2t=="6J"){R=1y Xa(x)}if(o.2t=="dm"){R=1y Xb(x,o.3K)}o.S?o.S.Hb():\'\';B t=0;if(K(v.1o)){if(o.3y&&v.cL==1&&!o.1A){t=o.3y.9S().t}1G(E(){o.X.3Y(t,v.1o)},100)}}E qd(){if(R){R.4q();R=1Z;fR="7y"}if(3t){3t.4q();3t=1Z;3t=1N;o.ea.6r();o.3t=1Z;o.ea=1Z}};G.4q=E(){qd()};G.Xc=E(){3V=[];qd()};G.6I=E(x,y,z){6I(x,y,z)};G.a7=E(x){a7(x,o.2j,v.gP)};G.2H=E(){if(R){iV=P;pP=P;if(o.5o){o.4x.2H()}F{R.2H();v.fY==1?o.X.f7():\'\'}if(K(3t)){3t.2H()}if(o.8g){if(o.4W){if(o.9x>0&&!o.8g.Xd()){o.8g.8B()}}F{o.q5=[];o.S.mo("e9")}}if(o.4W&&v.Ge>-1&&!o.tI&&!o.1l.5w){if(o.9x>0){R.FB()}}hC()}F{1G(G.2H,42)}};E hC(){if(v.JH>0&&3V.U>1){if(3Y()==0||v.J6==1){2P(o.qm);o.qm=1G(J5,v.JH*2p)}}}E J5(){if(o.1E&&(3Y()==0||v.J6==1)&&4J()==0&&!o.hA){if(R){if(R.af()==0&&7Z!=3V.U-1){5O(\'6I Ja\')}}}}G.J3=E(1h){if(o.3t){if(v.2h.Je==1){if(o.yG[o.3t]>2){J}}if(1h){1h.bB();1V.1h?1V.1h.6H=H:\'\'}B 1C=R;R.tP(H,o.3t);3t.tP(P,o.3K);R=3t;3t=1C;R.2H();3t.2H();js("2h")}};G.Ji=E(){R.3h(18)};G.zg=E(){v.5P==1?o.5P.3z("1p"):\'\';o.qV=H};G.kR=E(){if(v.1w.vQ){v.1w.vQ=P;if(o.S){o.S.xk(1);o.S.ye()}}o.qV=P};G.Jl=E(){if(o.3t&&o.ea){o.ea.f6()}};G.fh=E(){if(o.4W&&o.6e){o.kG=H;R.6e()}};G.eV=E(){if(o.4W&&o.9K){R.9K()}};G.lT=E(){if(v.fX==1&&K(v.Xe)){if(K(o.fX)){o.fX.1u()}F{if(1P(Kb)==\'E\'){o.fX=1y Kb()}}}hZ();if(R){n4(0);R.lT()}};G.gc=E(){o.fX?o.fX.1p():\'\';R?R.gc():\'\'};G.hZ=E(x){hZ(x)};E hZ(x){if(v.Xf==1&&2F(v.cV)){if(K(o.cV)){o.cV.1u(x)}F{if(1P(Kj)==\'E\'){o.cV=1y Kj()}}}}G.3l=E(){if(o.5o){o.4x.3l()}F{R?R.3l():1v("Xg")}if(K(o.3t)){3t.3l()}};G.qo=E(){pP=H;o.X.43(0,P);K(o.2j)?o.X.8z():\'\';6I(\'x\')};G.8k=E(){R?R.8k():\'\'};G.43=E(x){if(R){if(o.5o){o.4x.43(x)}F{R.43(x);if(v.2h.on==1){if(3t){3t.43(x)}}}}};G.5m=E(){if(R){R.5m();o.5o?o.4x.5m():\'\';1v("5B")}if(v.2h.on==1&&v.2h.hj==1){if(3t){3t.5m()}}};G.6F=E(){if(R){R.6F();o.5o?o.4x.6F():\'\';1v("aY")}if(v.2h.on==1&&v.2h.hj==1){if(3t){3t.6F()}}};G.4c=E(x){R?R.4c(x):\'\';if(v.2h.on==1){if(v.2h.hj==1&&3t&&!o.Ee){3t.4c(x)}}if(o.5o){o.4x.4c(x)}};G.mu=E(){J R?R.mu():P};G.5A=E(){J R?R.5A():P};G.6W=E(){J fR};G.7y=E(){J iV};G.1b=E(){B x=0;if(R){x=4J();if(o.5o){B y=o.4x.4J();y?x=y:\'\'}F{if(3Y()>0&&x!=3Y()){o.JL=x+0.Xh}}J x}F{J 0}};G.1o=E(){B x=0;if(R){x=3Y();x==0&&K(v.1o)?x=v.1o*1:\'\';if(o.5o){B y=o.4x.3Y();y?x=y:\'\'}}J x};G.af=E(){J R?R.af():0};G.fO=E(){o.3N.fO=o.3N.fO?P:H;O(o.3K,{"2K":(o.3N.fO?"3u(-1)":"3u(1)")})};G.Xi=E(){se()};G.sH=E(){if(o.4W){R.4R()}};G.K3=E(x,y){if(x==\'1Q\'){if(y==1){du(v.1j.1Q/100)}if(y==2){du(-v.1j.1Q/100)}if(y==3){o.R.iZ()}}F{if(o.4W){if(!o.aq[x]){if(x==\'sK\'){o.aq[x]=0}F{o.aq[x]=1}}if(y==1){o.aq[x]+=v.1j[x]/100}if(y==2){o.aq[x]-=v.1j[x]/100}if(y==3){if(x==\'sK\'){o.aq[x]=0}F{o.aq[x]=1}}!o.iN?o.iN=[]:\'\';o.iN[x]=x+\'(\'+2N(o.aq[x]*100)+\'%) \';B cf=\'\';W(B i in o.iN){cf+=o.iN[i]}O(R.aH(),{\'6p\':cf});o.S.lZ(x)}}};G.1Q=E(x){du(x)};E du(x){if(6t(x).I(":")>0){B y=x.2z(":");B z0=o.2Y/o.4p;B z1=o.R.3P();if(z1.17>0){z0=z1.17/z1.1d}B z=y[0]/y[1];if(z0!=z){if(o.4W){R.h4()}B w2=o.4p*z;B x2=w2/o.2Y;B h2=o.2Y/z;B y2=h2/o.4p;if(x2<1){o.3N.x0=o.3N.x=3T(x2);o.3N.y=1}F{o.3N.x=1;o.3N.y0=o.3N.y=3T(y2)}O(o.3K,{"2K":"3u("+o.3N.x+") 3r("+o.3N.y+")"});o.kx=x}}F{o.3N.x+=3T(x);o.3N.y+=3T(x);O(o.3K,{"2K":"3u("+o.3N.x+") 3r("+o.3N.y+")"})}if(v.1W.XK==1){if(!o.rM){if(o.3N.x>0||o.3N.y>1){sc(o.3K,\'o.Xl\');o.rM=H}}rL()}o.S.lZ(\'1Q\')};G.iZ=E(){if(o.4W){R.h4()}o.3N.x=o.3N.x0;o.3N.y=o.3N.y0;O(o.3K,{"2K":"3u("+o.3N.x+") 3r("+o.3N.y+")"});o.S.lZ(\'1Q\');o.kx=1Z;rL()};E rL(){if(o.rM&&v.1W.XL!=1){if(o.3N.x==1&&o.3N.y==1){O(o.3K,{"1f":0,"1c":0})}}};G.h6=E(x,y){R.h6(x,y)};G.bZ=E(){J bZ()};E bZ(){J 3V?(3V.U>0?(3V[7Z]?3V[7Z]:\'\'):\'\'):\'\'};G.qO=E(){J 3V.U};G.aH=E(){J R?R.aH():P};G.6z=E(){if(o.4W){R.6z()}};G.r6=E(){R.r6()};E rN(){B 4Z=f1(v.rO+\'?18=\'+3V[7Z]);4Z.ch=E(){if(G.fy==4&&G.6W==4w){if(G.ee){v.1I=G.ee;o.X.aC(\'1I\')}}};4Z.b5()}};B JV=E(18,1K,2h){B 1g=1O(v.gF==1?"K5":"gy");B bL;B sg=0;B 1H;B 54=P;B s7=P;B vt=P;B aE=P;B gd=-1;B 3X;B 6V=P;B ws;B vu=P;B 6B=P;o.5Q=P;B 8u=0;B 9E=P;B 2r;B Ye;B mT=P;B kX=-1;B bS=-1;B rp;B us;B al;B jx;B Yg;B H0=\'gy/KF; Yh="Yi.Yj, Yk.40.2"\';B lM=P;O(1g,{\'1m\':\'nd\',\'17\':\'100%\',\'1d\':\'100%\',\'3U-lv\':\'wN\',\'4F\':"6p 0.2s 3f",\'9L-1d\':\'2y\',\'5W-1d\':\'1S\',\'9L-17\':\'2y\',\'5W-17\':\'1S\'});h4();if(o.1l.7Q&&v.3n==1&&v.uk==1){if(!o.1A&&v.7x){4i(1g,{\'kc\':1})}F{o.3I=H;o.S?o.S.5m():\'\';4i(1g,{\'3I\':1,\'kc\':1,\'3n\':1})}}F{if(o.1l.2m){4i(1g,{\'kc\':1})}if(!o.1l.tv){4i(1g,{\'4R\':(v.4R==1?\'8E\':\'1S\')})}}if(v.Yl==1){4i(1g,{"Ym":"Ki","Yn":"Ki"})}18=gK(18);4i(1g,{\'3h\':18,\'x-3Q-6e\':\'Dt\',\'K7\':\'H\'});if(v.Yo!=1){4i(1g,{\'K7\':\'H\'})}if(v.Yp==1){4i(1g,{\'2h\':\'P\'})}if(2h){1g.3n=H;if(v.2h.hj!=1||v.3n==1){1g.3I=H}F{1g.1L=2F(v.2h.1L)?v.2h.1L:v.1L}}if(v.Yf==1){4i(1g,{\'Yq\':\'Ys\'})}tz();if(v.Yt==1){B ey=1O("eX");4i(ey,{"Di":"no","Dc":"H","Ds":"H","3h":""});O(ey,{"1m":"2o","17":"100%","1d":"100%","2R":0});1K.1M(ey);B Ka=1V.7e(E(){if(ey.hF.22.fy==="Yu"){1V.3R(Ka);O(ey.rF.3S,{"2Q":0,"2M":0});ey.rF.3S.1M(1g)}},100)}F{1K.1M(1g)}if(!K(18)){18=\'\'}B s8=P;if(o.1l.tv){if(18.I("16g")>0){s8=H}}if(18.I(".Jo")>0){6B=H;if(!o.3X){if(1P JI!=="1N"){o.3X=1y JI()}F{6B=P}}if(K(o.3X)){if(!K(1V.Jn)){o.3X.pW()}F{s9()}}}F if(((2W.1H==1&&v.rX!=1)||18.I(".Jj")>0)&&!s8&&(o.g1.I("8Y")!=-1||K(1V.6a))){54=H;s7=H;3o{if(K(1V.6a)){if(!6a.Jb()||(o.1l.7g&&v.Yv==1&&!o.1l.5w)||(o.1l.7g&&o.1l.5w&&v.Jf==1)||(o.1l.qr&&v.Yw==1)){1v(\'8Y Yx \',6a.Jb());54=P}F{if(v.4R==1||v.3n==1||v.J9==1||2h){eA(P)}}}F{54=P}}2U(2r){54=P}}F if(18.I("w")==0&&18.I("s")==1&&v.Yy==1){9E=H;ve()}if(o.1l.tv&&v.3n==1&&!54&&!6B&&!9E){1G(E(){o.X.dx()},100)}if(v.8g==1){K(o.8g)?o.8g.aw():\'\';o.8g=1y Yz()};G.r6=E(){s9()};E s9(){6B=H;if(qX()){if(v.4R==1||v.3n==1||v.Jm==1){mt(P)}}F{6B=P;1v("YA fn Hc")}}E mt(x){if(o.3X&&!6V){o.3X.fM(x,1g,18,2h);K(1V.Jn)?6V=H:\'\'}}E eA(x){1v("8Y");if(o.4t.U>1){v.9r=0;v.Jz=H}F{v.Jz?v.9r=1:\'\'}if(o.bz.U>1){v.cA=0;v.JD=H}F{v.JD?v.cA=1:\'\'}o.al=P;gd=-1;al=[];o.3D?o.3D.JC():\'\';B rZ=P;if(v.7x&&v.JB==1){rZ=H;v.JB=0}bL={J2:(v.JA==1&&!2h),YB:(v.4R==1||v.3n==1||2h||x)&&!rZ,hr:60,rI:60,YC:(v.Jw>0?v.Jw*2p:Jt),Yr:(v.Jv>0?v.Jv*2p:Jt),Yd:P};if(v.Y0==1){bL.Yc=H}if(v.hl==1){B ks=[\'fp\',\'wv\',\'pr\',\'ck\'];B qB=[\'8e.XO.XP\',\'8e.XQ.fQ\',\'8e.13q.XS\',\'47.w3.XT\'];B dj={};W(B i=0;i<ks.U;i++){if(v[\'hl\'+ks[i]]==1){dj[qB[i]]={};if(2F(v[\'hl\'+ks[i]+\'l\'])){dj[qB[i]].XU=v[\'hl\'+ks[i]+\'l\']}if(2F(v[\'hl\'+ks[i]+\'s\'])){dj[qB[i]].XV=v[\'hl\'+ks[i]+\'s\']}}}bL.XW=H;bL.XX=dj}if(v.Ls==1){bL[\'XN\']=E(4Z,18){4Z.XZ=H}}if(K(v.6R)){if(K(v.6R.hr)){if(v.6R.hr>hq){v.6R.hr=hq}v.6R.rI=v.6R.hr}if(K(v.6R.Lt)){v.6R.rI=v.6R.hr=v.6R.Lt}if(1P v.6R=="3U"){W(B 1e in v.6R){if(v.6R[1e].6A().I(\'2n:\')==0){v.6R[1e]=2n(v.6R[1e].1n(5))}bL[1e]=v.6R[1e]}}}1H=1y 6a(bL);js("1H",1H,1);1H.GD(18);1H.Y1(1g);1H.on(6a.7s.Y2,E(){1v("8Y Y3")});1H.on(6a.7s.Y4,E(1h,2b){!2h?o.X.dx():\'\'});1H.on(6a.7s.Y5,E(1h,2b){if(!2h&&v.9r==1&&az()>1){GW();mX();o.S?o.S.iU(o.3v):\'\'}});1H.on(6a.7s.Y6,E(1h,2b){mX()});1H.on(6a.7s.Y7,E(1h,2b){mX()});1H.on(6a.7s.Y8,E(1h,2b){if(!2h){if(2b.ir.5Q!=o.5Q){o.5Q=2b.ir.5Q;o.S.4P()}o.5Q=2b.ir.5Q;if(o.5Q){1v("Y9");o.KH=18.I("?xl")>-1;if(1g.1o>0&&1g.bX>0){if(1g.1o-1g.bX<10){if(o.i8>0){if(o.i8==1g.bX&&o.KG==1g.1o){o.qC++;if(o.qC>2){o.qC=0;o.i8=-1;1H.au();eA(H);8O()}}F{o.i8=-1}}F{o.i8=1g.bX;o.KG=1g.1o}}}}}if(v.9r==1){o.3v=1H.m5;o.S?o.S.iU(o.3v):\'\'}mS()});1H.on(6a.7s.Ya,E(1h,2b){if(K(2b.iE)){!2h?js("Yb",2b.iE.XM):\'\';if(v.WU==1){1P KB!=="1N"?KB(2b.iE):\'\'}}if(gd>-1){1H.Fr=gd;gd=-1}vt=H;J0()});1H.on(6a.7s.W4,E(1h,2b){js("WT",2b,1)});1H.on(6a.7s.VF,E(1h,2b){if(!2h&&v.cA==1){1G(uO,42)}});1H.on(6a.7s.VG,E(1h,2b){if(!2h&&v.cA==1){uA()}});1H.VH=P;if(v.VI==1){1H.on(6a.7s.VJ,E(1h,2b){if(1P(2b)=="3U"){if(2b.iE.1J==\'28\'){B fu=2b.iE.18;if(fu){B st=1H.IZ;if(o.5k){o.3D.uD(st+\'bI\'+fu)}F{!al[st]?al[st]=[]:\'\';al[st].2L(fu)}}}}});1H.on(6a.7s.VK,E(1h,2b){B x=1H.VL;B y=\'\';W(B i=0;i<x.U;i++){y+=(y!=\'\'?\',\':\'\')+\'[\'+x[i].6G+\']1H\'+i;x[i].8b?o.qF=x[i].6G:\'\'}3x("28",y)})}1H.on(6a.7s.VM,E(1h,2b){v.1v==1?bh.1v(2b):\'\';js(2b.1J+\'6a\',2b,0,H);o.qI=2b;if(2b.qw){if(2b.1J=="VN"){1v("8Y qw sj 2r");if(v.s0==1){rY()}F{2r=2b.ir+\' (\'+2b.1J+\')\';o.2f>0||2h||v.5Q==1||9E?\'\':o.2f=4J();1H.au();if(!2h){o.R.5O()}}}F{B nx=P;if(2b.1J=="VO"){if(v.VE==1&&o.R.qO()>0){nx=H}F{1v("8Y qw R 2r, ix");1H.VP()}}F{nx=H}if(nx){2r="8Y qw 2r, au";1H.au();!2h?o.R.5O():\'\'}}}F{1v("8Y ",2b.1J,2b.ir,(2b.nz?2b.nz.lI:\'\'));js("VR",(2b.nz?2b.nz.lI:\'\'));if(8u>0){8u=2;r8()}}});aE=H}E mX(){if(!2h&&v.9r==1&&az()>1){if(o.3v!=1H.m5){o.3v=1H.m5;o.S?o.S.iU(o.3v):\'\';1v("8Y VS "+o.3v)}if(2F(v.cP)&&o.3v>0){B fq=v.cP.2z(",");W(B k=0;k<fq.U;k++){if(o.2G[o.3v].I(fq[k])>-1){1v(\'VT 5v\');1H.im=o.3v-1;o.3v--;1k}}}}}E ve(){if(K(1V.KS)){if(qX()){if(!K(o.ws)){o.ws=1y VU()}ws=1y KS(1g,18,2q(v.VV,{J2:H}));vu=H}F{9E=P;1v("fn Hc")}}}E J0(){rf()};G.6z=E(){rf()};E rf(){if(v.Gb&&o.S){if(1g.gu.U>0){if(v.6z==1){1g.gu[1g.gu.U-1].jC="IS"}F{1g.gu[1g.gu.U-1].jC="3c"}if(!o.6z){o.6z=H;o.S.4P()}}F{if(o.6z){o.6z=P;o.S.4P()}}}}E rY(){1v("VW");!2h&&o.1E?o.X.3l():\'\';o.X.8z();8u=1;r8(o.1E)}E r8(x){if(8u>0){2P(rp);rp=1G(GE,v.GF*2p)}}E GE(){if(8u>0){1v("VX");if(54){if(8u==1){1H.GD(18)}if(8u==2){1H.au();eA(H);1g.1E()}}F{4i(1g,{\'3h\':18})}}}1g.1z(\'VY\',GA);1g.1z(\'2r\',r7);1g.1z(\'7y\',8O);1g.1z(\'1E\',aG);1g.1z(\'4N\',e7);1g.1z(\'IF\',d6);1g.1z(\'iP\',iO);1g.1z(\'mI\',iS);1g.1z(\'I7\',df);1g.1z(\'I6\',e1);1g.1z(\'8d\',9M);1g.1z(\'HB\',ah);1g.1z(\'VZ\',H7);1g.1z(\'Hz\',rD);1g.1z(\'Hw\',sh);if(o.1l.7Q){1g.1z(\'W0\',i3)}E GA(){if(!54&&!6B){!2h?o.X.dx():\'\'}}E i3(){if(1g.W1){o.X.hn()}}E r7(){if(!54&&!6B){if(1g.2r){1v(1g.2r,1g.2r.lI,1g.2r.8p);B x=1g.2r.lI;2r=1g.2r.8p;if(2r==\'\'){if(x==1){2r="VQ"}if(x==2){2r="sj"}if(x==3){2r="eR"}if(x==4){2r="fn pC"}}1v("VC ih: ",2r)}if(s7&&v.s0==1){2r=1N;rY()}if(2r!=1N||o.1l.5w){5O()}}}E 5O(){!2h?o.R.5O():\'\'}E 8O(){if(!2h){o.R.8O()}F{if(v.2h.9f==1){1g.bX=0;1g.1E()}}}E aG(){if(!o.1A&&v.7x){1v(\'Gs 1E\');4N();o.X.2H();J}if(54&&8u>0){}F{if(!2h){B aQ=o.X.8w()&&o.mK!=1;if(aQ||bS==-1){B x=P;if(54){if(K(o.2a)||K(o.5I)){if(aQ){}F{1v(\'4N jO\');4N();x=H}}}if(!x){o.R.aG()}}}}}E e7(){if(!lM){1v("Vq");if(o.1E&&o.gi&&!1g.7y&&v.Gp==1&&!o.as){1v("Gp");jq()}F{!2h&&!o.Gn&&1g.8o?o.R.e7():\'\'}}}E d6(){!2h?o.R.d6():\'\';if(bS>-1){if(4J()>bS){4N();bS=-1}}}E iO(){!2h?o.R.iO():\'\'}E iS(){!2h?o.R.iS():\'\'}E df(){if(2h){mp()}F{o.R.df();tE();if(54&&8u>0){8u=0;1v("VB up");1H.FG();jq();o.S.2H()}if(K(v.9k)){2A()}1G(Gk,42)}}E Gk(){if(1g.cq&&o.7u.U==0&&v.Vf!=0){B at=1g.cq;W(i=0;i<at.U;i++){B x=o.R.ux((at[i].7P?at[i].7P+\' (\':\'\')+at[i].GI+(at[i].7P?\')\':\'\'),i);if(x==v.b3){o.7t=o.9Z=i}o.7u[i]=x}o.S.mn(o.9Z)}if(o.9Z>0){gL(o.9Z,1)}};G.9k=E(){J(1g.lx/1g.gq)};E mp(){if(1g.gq>0){O(1K,{"1d":1K.29/(1g.lx/1g.gq)-2N(v.2h.2R)})}F{if(sg<20){1G(mp,100);sg++}}}E tE(){if(v.nc==1){3R(o.qP);o.qP=7e(qR,100);qR()}}E qR(){if(1g){if(1g.gq>0){o.X.GY(1g.lx/1g.gq);3R(o.qP)}}}E ah(){!2h&&!9E?o.R.ah():\'\'}E e1(){!2h?o.R.e1():\'\'}E 9M(){if(54&&8u>0){}F{!2h?o.R.9M():\'\'}}E H7(){o.X.qL()}E qX(){B lP=1V.H5=1V.H5||1V.Vg;B hM=1V.J1=1V.J1||1V.Vh;B lS=lP&&1P lP.lS===\'E\'&&lP.lS(H0);B GL=!hM||hM.rl&&1P hM.rl.Vi===\'E\'&&1P hM.rl.6r===\'E\';J lS&&GL}B um="<7m C=\'1B:0.5\'>";E GW(){if(!2h&&v.9r==1){B x=1H.6Q;B q=-1;o.2G=[];if(x.U>1){W(B i=0;i<x.U;i++){if(K(x[i].1d)){B y=o.R.GU(x[i],v.GT);if(o.2G.I(y)>-1||v.Vj==1){if(K(x[i].9Y)){B yi=o.2G.I(y);yi>-1?o.2G[yi]+=" "+um+" &dK;"+2N(x[yi].9Y/2p)+\' \'+2T(\'hB\')+\'</7m>\':\'\';o.2G[i]=y+" "+um+" &dK;"+2N(x[i].9Y/2p)+\' \'+2T(\'hB\')+\'</7m>\'}}F{o.2G[i]=y}if(K(x[i].GR)){o.a0[i]=x[i].GR[0]}}F if(K(x[i].6G)){o.2G[i]=x[i].6G}F{o.2G[i]=i}if(K(v.56)&&q==-1){if(v.56==o.2G[i]){q=i}}if(K(o.56)){if(o.56==o.2G[i]){q=i}}}if(v.hG==1){o.2G[x.U]=2T("2y")}F{1H.G1=0;1H.fo=0}if(v.GQ==1||q>-1){1H.fo=0;if(v.i1=="7b"||(!o.1A&&v.4R==0)){1H.uZ=q}F{if(v.i1=="hg"){1H.im=q}}o.3v=q}F{if(v.hG==1){o.3v=1H.6Q.U-1}F{o.3v=1H.Vk}}if(v.GO>0){1H.fo=x.U-v.GO*1-1}mS()}o.9Y=2q(1H.6Q[o.3v].9Y,0);o.S?o.S.4P():\'\'}}E mS(){if(v.cA==1){uO();uA()}}E uO(){if(!2h&&v.cA==1){B x=1H.cq;o.7u=[];B 2O;B 26=-1;if(x.U>1){W(B i=0;i<x.U;i++){2O=P;if(K(x[i].gH)&&o.a0.U>0){if(x[i].gH!=o.a0[o.3v]){W(B j=0;j<o.a0.U;j++){if(o.a0[j]==x[i].gH){2O=H}}}}if(!2O){o.7u[i]=K(x[i].6G)?o.R.ux(x[i].6G,i):i;if(K(v.b3)){if(v.b3==o.7u[i]){26=i}}}}}}if(26>-1){o.7t=26;1H.lj=26}}E uA(){if(!2h){B x=1H.cq;B y=1H.lj;if(y>-1){if(K(x[y].gH)){if(o.a0.U>0){if(o.a0[o.3v]!=x[y].gH){W(B i=0;i<x.U;i++){if(x[i].6G==x[y].6G&&x[i].gH==o.a0[o.3v]){1H.lj=i;y=i;1k}}}}}o.7t=y;1v("8Y Vl",o.7t);o.S.mn(o.7t)}}};G.gL=E(x,y){gL(x,y)};E gL(x,y){if(1g.cq.U>1){1g.cq[x].t8=H;1g.cq[y==1?0:o.9Z].t8=P;o.9Z=x;y!=1?1g.bX=o.R.1b():\'\'}}E 4J(){if(6B){J 6V?o.3X.1b():0}F{J 1g.bX}};E 3Y(){B x=1g.1o;if(x==Vm){v.5Q=1;x=4J()+10;if(o.9p){x<o.9p?x=o.9p:\'\'}o.9p=x}if(6B&&6V){x=o.3X.1o()}if(K(v.4v)){if(7F([v.4v],\'-\')){x=x+v.4v*1}F{x=v.4v}}J!mj(x)?x:0}G.2H=E(){B p=H;if(54&&!vt){if(!aE){eA(H)}1H.FG()}if(6B&&!6V){mt(H);p=P}if(9E){if(!vu){ve()}ws.1E();p=P}if(1g.C.1f=="-Vn"){G.gc()}p?jq():\'\'};B Vo;E jq(){if(18!="1S"){B pp=1g.1E();if(pp!==1N){pp.d2(E(){}).2U(E(2r){1v("Ve",2r.8p);if(2r.8p.I(\'cz\')==-1&&2r.8p.I(\'Vp by\')==-1){if(v.uk==1){1v(\'Vr\');o.X.5m();1g.1L=0;B tf=1g.1E();if(tf){tf.d2(E(){}).2U(E(e){1v("Vs",e.8p);if(o.1l.tv&&(54||6B)){}F{o.S.3l();o.X.8z();js("Vt")}})}}F{o.S.3l();o.X.8z()}}})}}}G.lT=E(){if(o.5I||o.2a){if(o.9n){eV()}if(!o.kG&&o.1l.2m&&o.1l.3Q){if(!1g.3I){1g.3I=H;mT=H}O(1g,{"1m":"2o","1c":-4g,"1f":-4g});bS=4J();if(!9E){1g.1E()}if(bS==0&&o.2f>0){jx=o.2f}}}};G.gc=E(){if(!o.kG&&(o.1l.2m||o.1l.3Q)){O(1g,{"1m":"nd","1c":0,"1f":0});if(K(v.9k)){2A()}if(mT){!o.3I?1g.3I=P:\'\';mT=P}if(jx>0){o.2f=jx;jx=0}bS=-1}};G.3l=E(){1v(\'8o\');4N()};E 4N(){if(9E){ws.4N()}F{1g.4N()}};G.8k=E(){!1g.8o?3l():jq()};G.43=E(x){if(6B&&6V){o.3X.4f(x)}F{if(54){if(v.Vu==1&&x>0&&uj()){gd=1H.im;1H.Fr=0}}1g.bX=x}};G.5m=E(){1g.3I=H};G.6F=E(){1g.3I=P;if(o.2t=="1H"&&o.1l.5w&&v.2a==1){if(!K(o.FN)){lM=H;1g.4N();1G(E(){1g.1E();lM=P},10);o.FN=H}}};G.4c=E(x){1g.1L=x};G.FB=E(){if(o.Ga!=1g){B cz;B 9c;if(o.mC[1g]){cz=o.mC[1g];9c=o.ub[1g]}F{1V.mq=1V.mq||1V.Vv;if(K(1V.mq)){3o{9c=1y mq();cz=9c.Vw(1g);o.mC[1g]=cz;o.ub[1g]=9c}2U(e){1v(e)}}}if(9c){B jR=9c.Vx();jR.jR.6c=v.Ge;cz.Gd(jR);jR.Gd(9c.Vy);o.tI=H;o.Ga=1g}}};G.mu=E(){J!1g.8o};G.5A=E(){J v.5Q==1||9E?H:o.5Q};G.aH=E(){J 1g};G.sO=E(){4i(1g,{\'S\':\'1\'});J H};G.4R=E(){4i(1g,{\'4R\':\'8E\'});if(54&&!aE){eA(P)}if(6B&&!6V){mt(P)}};G.6W=E(){B 7B="7T";if(1g.8o){7B="8o"}if(1g.7y){7B="7y"}J 7B};G.tP=E(x,y){2h=x;y.1M(1g);1K=y;if(x){if(v.2h.hj!=1){1g.3I=H}F{if(!o.3I){1g.3I=P}}mp();if(o.2G.U>0){if(54){kX=o.3v;1H.fo=0;1H.im=0}}}F{if(!o.3I&&v.2h.hj!=1){1g.3I=P}1g.1L=2F(v.2h.1L)?v.2h.1L:v.1L;tE();if(o.2G.U>0){if(54){1H.fo=-1;if(kX>-1){kX<1H.6Q.U?1H.uZ=kX:\'\'}}}}};G.1b=E(){J 4J()};G.1o=E(){J 3Y()};G.af=E(){B x=0;if(1g.8j){if(1g.8j.U>0){B y=4J();W(B i=0;i<1g.8j.U;i++){if((y>=1g.8j.1A(i)||y>=1g.8j.1A(i)-100)&&y<=1g.8j.4v(i)){x=1g.8j.4v(i)}}x==0?x=1g.8j.4v(1g.8j.U-1):\'\'}}if(K(v.4v)){B ed=v.4v;if(7F([ed],\'-\')){ed=3Y()}x>ed?x=ed:\'\'}J x};G.2y=E(){J uj()};E uj(){B x=P;if(54){if(aE){x=1H.G1}}F if(6B){if(6V){x=o.3X.2y()}}J x}G.3P=E(){J{"17":1g.lx,"1d":1g.gq}};G.3h=E(x){if(x){x=x.1T(/\\(5M\\)/g,2I.5M());x=gK(x);18=x;o.bu!=2?o.bu=P:\'\';if(6B){if(6V){o.3X.cz(x)}}F if(54){54&&1H?1H.au():\'\';eA(o.1A);sQ()}F{4i(1g,{\'3h\':x,\'3n\':0});tz();4N()}}};E gK(x){if(x){B y=x.I(\':Vz:\');if(y>0){o.gK=x.1n(y+6);x=x.1n(0,y)}}J x}E tz(){if(o.1l.7g){B y=1g.gu;if(y){W(B i=0;i<y.U;i++){y[i].jC="VA"}}y=1g.cq;if(y){W(i=0;i<y.U;i++){y[i].t8=(i==0?1:0)}}if(1V.W2){1g.1z(\'VD\',E(1h){o.6e=1h.W3=="Wu";!2h?o.X.iW():\'\'});1g.1z(\'Ww\',E(1h){})}}sQ();if(v.sX==1){1P FR!=="1N"?FR(18,1g,1K):\'\'}}G.6e=E(){1g.Wx()};G.9K=E(){eV()};E sQ(){if(o.1l.3Q){if(K(1g.Wy)&&!o.1l.7Q){o.9K=H}if(22.Wz&&!1g.WA){o.9K=H}}}E eV(){if(o.1l.7g){if(1g.WB==="mh-in-mh"){1g.I8("bN");o.9n=P}F{1g.I8("mh-in-mh");o.9n=H}}F{if(!22.WC){2n(\'1g.WD().d2(p => {o.9n = H;}).2U(2r => {o.9n = P;});\')}F{2n(\'22.WE().d2(ok =>{o.9n = P;}).2U(2r => {});\')}}};E rD(){o.9n=H};E sh(){o.9n=P};G.Ix=E(x){if(6V){o.3X.tm(x)}};G.Iw=E(x){if(6V){if(1g.8j.U>0){o.3X.WF(x)}}};G.Wv=E(x){if(o.ws){o.ws.It(ws,x,-1)}};G.WG=E(x){if(o.ws){o.ws.It(ws,-1,x)}};G.Is=E(x){if(aE){B y=2N(x);if(x==1H.6Q.U){y=-1;1H.fo=-1}if(v.i1=="hg"){1G(9M,42);1H.im=y}if(v.i1=="7b"){1v("8Y 7b WI "+y);1H.uZ=y}if(y==-1){o.3v=1H.m5}mS()}};G.mA=E(){J 1H};G.lN=E(){J 6V?o.3X.WJ():P};G.az=E(){J az()};E az(){B x=0;if(aE){if(1H.6Q){x=1H.6Q.U}}J x}G.d0=E(){J d0()};G.h4=E(){h4()};E h4(){if(1g){if(v.lH==1||v.5h==1){if(v.WK==1||v.5h==1){O(1g,{\'3U-lv\':\'5h\'})}F{O(1g,{\'3U-lv\':\'Lf\'})}}F{O(1g,{\'3U-lv\':\'wN\'})}}}G.4Y=E(){2A()};E 2A(){if(v.9k){3x(\'1Q\',6t(v.9k).1T(\'/\',\':\'))}}E d0(){B x=0;if(6V){x=o.3X.6Q()}J x}G.Ib=E(x){if(aE){1H.lj=2N(x)}};G.h6=E(x,y){if(y=="1H"&&aE&&us){us.WL(x)}if(y=="Im"&&aE){if(al[x]&&o.3D){W(B i=0;i<al[x].U;i++){o.3D.uD(al[x][i])}}1G(E(){1H.IZ=x},42)}if(y=="3X"&&6V){o.3X.WM(x)}};G.ge=E(x){if(x){1g.WN=x}};G.uN=E(){B x=1g.ju;B y=[];W(B i=0;i<x.U;i++){if(x[i].g7.p1()==\'9O\'){x[i].5L("gb",sP);y.2L(x[i])}}W(B i=0;i<y.U;i++){1g.3q(y[i])}o.uL=P};G.IU=E(x,y,z){if(x!=\'\'){if(x.I(\' or \')>0){B xx=x.2z(\' or \');x=xx[0]}B 9O=22.1O(\'9O\');9O.6o(\'3h\',x);9O.6o(\'7P\',y);9O.6o(\'WO\',\'uI\');9O.6o(\'jC\',\'IS\');if(z){9O.6o(\'8b\',\'\')}1g.1M(9O);9O.1z("gb",sP)}};E sP(e){if(e.3Z.7P&&o.3D){W(B i=0;i<o.3k.U;i++){if(o.3k[i]==e.3Z.7P){o.3D.9b(i)}}}};G.jF=E(){J 2r?2r:\'\'};G.4q=E(){3R(o.WP);54&&1H?1H.au():\'\';6B&&6V?o.3X.WQ():\'\';9E&&ws?ws.2O():\'\';1g.5L(\'2r\',r7);1g.5L(\'7y\',8O);1g.5L(\'1E\',aG);1g.5L(\'4N\',e7);1g.5L(\'IF\',d6);1g.5L(\'iP\',iO);1g.5L(\'mI\',iS);1g.5L(\'I7\',df);1g.5L(\'I6\',e1);1g.5L(\'8d\',9M);1g.5L(\'HB\',ah);1g.5L(\'Hz\',rD);1g.5L(\'Hw\',sh);1g.3h=\'\';if(1K.g7=="EU"){1K.rF.3S.3q(1g)}F{1K.3q(1g)}1g=1Z}};B yP=E(){B b=[];B hc=[];B 5F=[];B 8d=P;B mQ;B 7S=P;B 1j;B Y;if(o.4V){o.4V.1p();o.4V=1Z}B mL;o.6i=[0.25,0.5,0.75,1,1.25,1.5,2];if(v.1j.WR==1&&K(v.1j.j5)){v.1j.j5=v.1j.j5.1T(/\\n/ig,\'\');o.6i=v.1j.j5.2z(",")}o.ew=7F(o.6i,1,H);o.aj==3?o.aj=o.ew:\'\';W(B i in o.5G){if(o.5G.2u(i)){!K(v.1j[i])?v.1j[i]=5:\'\';o[\'eh\'+i]=[\'+ \'+v.1j[i]+\'%\',\'&WS; \'+v.1j[i]+\'%\',(o.5G[i]*100+\'%\')]}}if(v.1w.dN==1&&o.1l.5w&&v.hu==1){v.1w.1p=0}B lJ=P;B 9B=0;B mk=0;B fv=P;B ze=H;B i4;B bg=1y vz();B 1j;B 5t=[];B sD=P;B sE=P;B iC=0;B dc=[];if(v.fB.1m=="S-2l"){v.fB.1m="S"}W(B y in v){if(v.2u(y)){if(y.I("ai")==0&&v[y]){!K(v[y].sB)?v[y].sB=v[y].5t:v[y].5t=v[y].sB;if(5t[v[y].5t]){v[y].5t+=v[y].5t}5t[v[y].5t]=y;if(v.fB.1m!="S"){if(v[y].1m=="S-2l"){dc.2L([y,v[y].5t]);sD=H}F{if(v[y].1m=="S"||v[y].1m==1N){sD?sE=H:\'\'}}}iC<v[y].5t?iC=v[y].5t:\'\'}}}if(sE){dc.Hp(E(a,b){J a[1]-b[1]});W(B i=0;i<dc.U;i++){5t[v[dc[i][0]].5t]=1Z;v[dc[i][0]].5t=iC+1;iC++;5t[v[dc[i][0]].5t]=dc[i][0]}}o.bW=v.1w.1p==1&&v.1w.K1==1;if(o.bW){o.1w=1O("1X");o.1U.1M(o.1w);O(o.1w,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1d\':\'100%\',\'4F\':\'1f 0.3s 5g-4r\',\'4l-3b\':\'1S\'})}B 7O=1O("1X");if(o.bW){o.1w.1M(7O)}F{o.1U.1M(7O)}B bG;if(v.1w.WH==1){bG=1y vz(H)}O(7O,{\'1m\':\'2o\',\'1c\':0,\'2J\':0,\'17\':\'100%\',\'1d\':v.1w.h});7O.gX=E(){!o.1l.2m?o.X.Ho():\'\'};if(v.vV==1){3i(bg.c());3i(7O)}W(B i=1;i<5t.U;i++){if(5t[i]){B y=5t[i];if(y){B 1i=v[y].1i;B Wt=v[y].1p;if(o.1l.2m){if(1i=="1L"&&v[y].7V=="5q"){}F{if(1i=="1L"&&v.Wh==1&&o.1l.2m){v[y].hN=0}F{if(1i=="1L"||(1i=="2e"&&v.Ws)){v[y].on=0}}}if(1i=="bs"){v[y].W6==1?v[y].on=0:\'\'}}F{if(1i=="bs"){v[y].W7==1?v[y].on=0:\'\'}}if(v[y].1p==1){if(v[y].IE==1&&K(v[y].m6)){2W[v[y].m6]?v[y].on=0:\'\'}if(v[y].IH==1&&K(v[y].lQ)){!2W[v[y].lQ]?v[y].on=0:\'\'}}if(v.vV==1){v[y].on=0}if(v[y].on==1){if(1i=="2E"||1i=="1L"){b[y]=1y K2(y,1i);b[y].2A(b[y].s("w"))}F{b[y]=1y G4(y)}hc.2L(y);if(b[y].g("1i")=="1I"){if(b[y].s("1F")==\'\'){if(b[y].s("B")!=\'\'){if(!K(v[b[y].s("B")])){b[y].26("2k",P)}}F{b[y].26("2k",P)}}}if(b[y].g("1i")=="4X"){B lu=b[y].s("3m");if(lu){if(lu.I("3z:")==0&&lu.I(",0/1")>0){B z=lu.2z(",");3x(z[0].1n(4))==0?b[y].bR(0):\'\'}if(7F([lu],"2Z")){o.gs=H}}}b[y].26("1Q",b[y].s("1Q"))}}}}if(K(v.1j)){if(1P(7R)==\'E\'){1j=1y 7R("1j");v.1j.8f==1?1j.1u():1j.1p()}F{o.W8=H}}if(K(v.Y)){if(1P(7R)==\'E\'){Y=1y 7R("Y");if(K(o.Y)){Y.wj(o.Y);if(v.Y.mg==0||!K(v.Y.mg)){v.Y.8f==0?Y.1p():\'\'}F{Y.1u()}if(v.Y.Hi==1){Y.1u()}}F{Y.1p(1)}hY()}}lp();xP();2A(H);4M();vH();ze=P;E I4(V){B x=0;B W9=P;if(V){if(V.g("1i")==\'2E\'){x=5F.1c+V.s("4s")+V.g("17")/2;if(5F.g4!=1Z){}F{5F.g4=[]}}F{if(5F.g4!=1Z){B d4=V.g("17")+V.s("4o")+V.s("4s");if(gZ(V)){d4=0}if(V.s("3c")==1&&!V.g("1u")){d4=0}if(V.s("b6")>0){d4=0}x=bg.g("w")-v.1w.lb*1-d4+V.g("17")/2+V.s("4s");B i=0;5F.2l-=d4;W(i=0;i<5F.g4.U;i++){B cG=b[5F.g4[i]];if(cG.s("b6")>0){O(cG.c(),{"1c":(cG.g("x0")-d4)})}F{O(cG.c(),{"1c":(cG.g("x")-d4)})}cG.26("x0",cG.g("x"))}5F.g4.2L(V.g("1e"));V.26(\'gS\',1)}F{if(V.s("3c")==1&&!V.g("1u")&&!V.g("g9")){if(V.g("1i")=="1L"){if(V.s("1p")==1&&V.s("hN")==1&&fv){9B+=V.g("17")+V.s("4s")+V.s("4o");fv=P}}}F{if(V.s("b6")>0){x=5F.1c+V.s("4s")+V.s("4o")}F{B 2O=P;if(V.g("1i")=="1L"){if(V.s("1p")==1&&V.s("hN")==1&&!V.g("g9")){if(!o.dY&&!o.9D){2O=H;fv=P}F{if(!fv){9B-=V.g("17")+V.s("4s")+V.s("4o");fv=H}}}}if(gZ(V)){2O=H}if(!2O){5F.1c+=V.g("17")/2+V.s("4s");x=5F.1c;5F.1c+=V.g("17")/2+V.s("4o")}F{x=5F.1c}}}}}}J x};G.Hf=E(){lp();if(Y&&v.Y.8f&&!o.1A){Y.1u()}};G.CS=E(){lp()};E lp(){if(o.gs){1P Hr==\'E\'?o.2Z=1y Hr():\'\'}}E zb(V){B 17=o.2e&&v.1w.l6==0?o.bA:o.2Y;B 1d=o.4p;B bt=0;if(V!=bg){bt=17/2+V.s("4s")-V.s("4o")}B dE=1d/2;B s5=V.g("17");B lC=V.g("1d");B p=V.s("1m");if(p.I("8P")>-1){bt=o.2Y/2+V.s("4s")-V.s("4o")}if(p.I("1f")==0){dE=lC/2+(V.s("I5")*o.4p/100)}if(p.I("2J")==0){dE=o.4p-(V==bg?lC:lC/2)-(V.s("HU")*o.4p/100)}if(p.I("2l")>-1){bt=o.2Y-s5/2+V.s("4s")-V.s("4o")-(V.s("HZ")*o.2Y/100)}if(p.I("1c")>-1){bt=s5/2+V.s("4s")-V.s("4o")+(V.s("hS")*o.2Y/100)}if(p.I("9v")>-1){dE=-o.q6/2-(V.s("HU")*o.q6/100)+(V.s("I5")*o.q6/100);bt=(p=="9v"?-1:1)*o.w9/2+(V.s("hS")*o.w9/100)+V.s("4s")-V.s("4o")}if(p.I("S")>-1){B cx=I4(V);bt=(bg?(bg.c()?5n(bg.c().lf):0):0)+cx;if(p=="S-2l"){bt+=9B}if(v.1w.1m=="1f"){dE=v.1w.h/2-(v.dB<0?v.dB:0)}F{dE=1d-v.1w.h/2}}J{x:bt,y:dE+V.s("8C")-V.s("dM")}}E 2A(9V){B w=o.2e&&v.1w.l6==0?o.bA:o.2Y;B h=o.4p;if(v.1w.Wa==1){v.1w.I2=2F(v.1w.I3)&&o.9j?v.1w.I3:v.1w.rV;v.1w.lb=o.2Y*v.1w.I2/100}F{v.1w.lb=v.1w.rV}O(bg.c(),{\'1f\':(v.1w.1m=="1f"?0:o.4p-v.1w.h)-v.dB});bg.26("y0",(o.4p-v.1w.h-v.dB));if(v.1w.l6==0&&bg){O(bg.c(),{\'17\':w,\'1c\':0,\'2M-1c\':0});bg.26("w",w);if(o.2e){O(bg.c(),{\'1c\':\'50%\',\'2M-1c\':-w/2})}}5F={"1c":v.1w.lb*1,"2l":(bg.g("w")-v.1w.lb*1)};B rR=P;if(!bg.g("1u")){bg.26("2k",H);rR=H}B 1e;W(B i=0;i<hc.U;i++){1e=hc[i];if(b[1e]){B cc=zb(b[1e]);if(cc){if(b[1e].s("6h")=="1m"){if(K(o.7n[1e])){if(b[1e].g("x0")==cc.x&&b[1e].g("y0")==cc.y){3y}F{o.7n[1e].XY(b[1e].g("x0"),cc.x,b[1e].g("y0"),cc.y)}}}b[1e].26("x0",cc.x);b[1e].26("y0",cc.y);if(b[1e].s("3c")==1&&!b[1e].g("1u")&&!9V){zf(b[1e])}F{O(b[1e].c(),{"1m":"2o","1c":b[1e].g("x0"),"1f":b[1e].g("y0")})}}}}if(rR){bg.26("2k",P)}9B=0;W(1e in b){if(b.2u(1e)){if(b[1e].s("1m")=="S-2l"&&b[1e].g("1i")!="2E"&&9B>-1){9B=5F.2l-5F.1c}if(b[1e].g("1i")=="2E"&&bg){B cC;B ml=b[1e].s("4s")+b[1e].s("hS")*o.2Y/100;B mr=b[1e].s("4o")+b[1e].s("HZ")*o.2Y/100;if(b[1e].s("Wb")==1){if(b[1e].s("Wc")==1){cC=(o.2Y*b[1e].s("w")/100)-ml-mr}F{cC=b[1e].s("w")}}F{if(b[1e].s("1m").I("S")>-1){cC=5F.2l-5F.1c-ml-mr;O(b[1e].c(),{"1c":(5n(bg.c().lf)+5F.1c+ml+cC/2)});9B=-1}F{cC=bg.g("w")-ml-mr;O(b[1e].c(),{"1c":(5n(bg.c().lf)+ml+cC/2)})}}b[1e].26("x0",b[1e].g("x"));b[1e].2A(cC)}}}if(1j){ka(1j)}if(Y){ka(Y)}if(lJ||o.2e||mk!=9B){4M()}}E zf(b){B 1c=0;B 1f=0;if(b.s("1m").I("2l")>-1&&b.s("1m").I("S")==-1){1c=o.2Y+b.g("17")+10}if(b.s("1m").I("1c")>-1){1c=-b.g("17")-10}if(b.s("1m").I("1f")>-1){1f=-b.g("1d")*2}if(b.s("1m").I("2J")>-1||b.s("1m").I("S")>-1){1f=o.4p+b.g("1d")+b.g("17")+10}if(1c>0){O(b.c(),{"1c":1c})}if(1f>0){O(b.c(),{"1f":1f})}}E ka(x){B 1f=-4g;x.k6();B y=o.4p-v.1w.h*(x.s("1m").I("1f")>-1?1:2);if(x==Y&&v.xe==1){y=o.4p}B k9=y-(o.2e&&!o.1l.2m?(100+x.s("jT")*1):x.s("jT"))-(x==Y&&x.s("jT")*1==0?x.s("8C"):0);k9<100?k9=100:\'\';O(x.c(),{\'5W-1d\':k9});x.co()?O(x.co(),{\'5W-1d\':k9}):\'\';if(x.g("1u")){1f=o.4p/2-x.g("1d")/2+x.s("8C")-x.s("dM");if(x.s("1m").I("1f")>-1){1f=x.s("8C")-x.s("dM")}if(x.s("1m").I("2J")>-1){1f=o.4p-(v.1w.1m!=\'1f\'?v.1w.h:0)-x.g("1d")+x.s("8C")-x.s("dM")}1f<0?1f=0:\'\'}if(x.g("1e")=="1j"&&o.cU){B HH=o.2Y-x.g("17")-x.s("4o");if(o.cU>HH){O(x.c(),{"1m":"2o","2l":x.s("4o"),"1c":"2y","1f":1f})}F{O(x.c(),{"1m":"2o","1c":o.cU,"2l":"2y","1f":(o.jr<1f?o.jr:1f)})}}F{if(x.s("1m").I("2l")>-1){O(x.c(),{"1m":"2o","2l":x.s("4o")-x.s("mE"),"1c":"2y","1f":1f})}F if(x.s("1m").I("1c")>-1){O(x.c(),{"1m":"2o","1c":x.s("4s"),"2l":"2y","1f":1f})}F{if(x.g("1e")=="Y"&&x.s("3H")==1){O(x.c(),{"1m":"2o","1c":o.2Y/2-x.g("17")/2+x.s("4s")/2-x.s("4o")/2,"1f":1f})}F{B l=o.2Y/2-x.g("17")/2+x.s("4s")-x.s("4o");O(x.c(),{"1m":"2o","1c":(l>0?l:0),"1f":1f})}}}x.a2()};G.g2=E(1e){B V=b[1e];B a=V.g("1i");if(a){B d=1y 6T();o.9x=d.8D();if(a&&a!=""){5e(V);a=="4N"?o.HR=1:\'\';a=="1E"?o.HR=0:\'\'}}i6()};G.qN=E(z,x,y){W(B 1e in b){if(b.2u(1e)){if(b[1e].s(z)==x){b[1e].26(y?"5K":"3i")}}}};G.zk=E(x,s){B y=7v(s,x);J y};E 5e(V,1J){o.pf=H;mL=V;B a=V.g("1i");if(a=="1E"){o.X.2H();if(o.3I&&v.HP==1){o.X.6F();v.HP=0}if(v.1W.on==1&&v.1W.2X==1&&v.1W.rC==1){7q(\'1E\',1)}js("HO")}F{if(a=="4N"){o.mi=0;o.X.3l();if(v.1W.on==1&&v.1W.2X==1&&v.1W.rC==1){7q(\'1E\',0)}js("HM")}if(a=="2O"){o.X.lD()}}if(a=="HK"){o.X.43(0,P)}if(a=="2e"){!o.5o?o.X.9w():\'\'}F{if(a=="HJ"){o.X.8L()}}if(a=="2E"){B ld=o.R.1o();B lt=V.g("2x")*ld;if(v.4O>0){ld-=v.4O*1;lt=V.g("2x")*ld+v.4O*1}if(v.iv>0){if(v.iv/ld<=1-V.g("2x")){J}}js(a,lt);o.X.43(lt,H);if(o.3y){o.3y.mN(lt,ld);o.2f>0?o.2f=1N:\'\'}js("lF",lt)}if(a=="1L"){B x=V.g("2x");x<0.Wd?x=0:\'\';x>1?x=1:\'\';if(V.s("7V")=="5q"){x=3T(x*o.6i.6Y(-1)[0]).y9(1);o.X.9H(x,1)}F if(V.s("7V")=="yf"){o.R.HI(x)}F{if(o.5z&&v.zo==1){3d.7J("zi",x);if(V.g("2x")>0||o.1l.7Q||v.pu==0){3d.yj("ja")}F{3d.7J("ja",1)}}o.X.4c(x)}}if(a=="5B"){if(o.5z&&!o.1l.7Q&&v.pu==1){3d.7J("ja",1)}o.X.5m();if(v.1W.2X==1&&v.1W.HL==1){7q(\'5B\',0)}}F{if(a=="aY"){if(o.5z){3d.yj("ja")}o.X.6F();if(v.1W.2X==1&&v.1W.HL==1){7q(\'5B\',1)}}}if(a.I("1b")==0){V.We()?V.j6():V.On()}if(a=="q9"){o.R.wu()}if(a=="1Q+"){o.R.du(0.1)}if(a=="1Q-"){o.R.du(-0.1)}if(a=="1Q"){o.R.du(0)}if(a=="5Q"){3x("vC");V.26("vZ",1);V.26("iy",1)}if(a=="2Z"){js("2Z");xK()}if(a=="1j"){o.cU=1N;if(1j){if(!1j.g("1u")){1j.1u()}F{1j.1p()}}}if(a=="Y"){if(o.g3==a){J}o.S.jf()}if(a=="7b"){o.S.bn()}if(a=="dw"){o.S.dC()}if(a=="4X"){if(V.s("ho")==1&&V.s("3m")!=""){B x=4D(V.s("3m"));if(o.g3==a+x){J}if(x.I(\'{1b}\')>-1){x=x.1T(\'{1b}\',(K(o.3y)?o.3y.9S().t:o.R.1b()))}if(x.I(\'{3G}\')>-1){x=x.1T(\'{3G}\',o.R.bZ())}if(x.I(\'{1I}\')>-1){x=x.1T(\'{1I}\',v.1I.1T(/,/ig," "))}if(x=="6e"){o.R.fh()}if(x.I(\'7r\')==0){if(V.s("7r")>0){o.X.43(o.cO?o.cO.Wf():V.s("7r"))}}if(x.I(\'W5\')==0){if(o.cO){o.cO.Wg()}}if(x=="Wi"){o.X.43(V.s("hS")*o.R.1o()/100);!o.1E?o.X.2H():\'\'}V.s("HN")==1?o.X.3l():\'\';B y=x.2z(",");if(x.I("3z:")==0){B z=x.1n(4).2z(";");W(B i=0;i<z.U;i++){y=z[i].2z(",");if(y.U>1){if(y[0]==\'4f\'){if(v.1W.2X==1&&v.1W.Wj==1){7q(\'4f\',y[1]>0?1:0)}}3x(y[0],y[1],V);js("lF",y[1]);y[1]==\'0/1\'||y[1]==\'1/0\'?wo():\'\'}F{if(y[0]=="HQ"){B ss=3x(y[0]);if(ss){if(ss.I("2b")>-1){if(v.Wk==1){B 4m=22.1O(\'4m\');4m.6o(\'3h\',ss);O(4m,{1m:"yu",2l:(K(v.m7)?v.m7:20),2J:(K(v.m7)?v.m7:20),17:0,4F:"17 0.5s ca-Wl(.75,-0.5,0,1.75)"});4m.C.4S=HT;22.3S.1M(4m);1G(E(){O(4m,{17:(K(v.HV)?v.HV:4w)})},1);4m.gX=E(){G.3W.3q(G)}}if(v.Wm==1){B a=1O("a");a.9y=ss;a.7f=y[0]+".jB";a.2x()}}}F{1v(y[0]+" 2r")}}F{3x(y[0])}}}}F{if(x.I("js:")==0){if(x.I("(")>0&&x.I(")")>0){2n(x.1n(3))}F{2n(y[0].1n(3)+\'(\'+(K(y[1])?\'"\'+y[1]+\'"\':\'\')+(K(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}}if(x.I("1h:")==0){yB(x.1n(6),o.R.1b())}if(x.I("2Z:")==0&&o.2Z){o.2Z.3z(x.1n(6))}if(x.I("yD:")==0&&o.5P){3x("yD",x.1n(7))}if(x.I("3L")==0||x.I("/")==0||x.I("?")==0||x.I("18:")==0){x.I("18:")==0?x=x.1n(4):\'\';1V.3j(x,V.s("HW"))}if(x.I("7f")==0){o.X.kH()}if(x=="3z:9K"){o.R.eV()}}if(x.I("1j#")>-1){if(1j){B si=x.1n(9).2z(",");if(1j.g("1u")&&1j.g("3j")==si[0]){o.cU=1N;o.jr=1N;1j.1p()}F{o.cU=V.g("x")-V.g("17")/2;o.jr=V.g("y")+V.g("h");W(B i=0;i<si.U;i++){i==0?1j.1u():\'\';1j.3j(si[i])}Y?Y.HX():\'\'}}}if(x.I("1j:")>-1&&v.1j.Wn==1){if(!o.4V){o.4V=1y Wo()}if(v.1j.fk==1){if(1J=="4A"){o.4V.1u(x)}F{o.4V.f6(x)}}F{if(!1J){o.4V.f6(x)}}}if(x=="FF"){o.X.fI();o.wX=0;V.26("3i");B bl=7v("3m","4n");if(bl){bl.26("3i")}}if(x=="4n"){V.6u("OK");V.s("ls")?1V.8y.9y=4D(V.s("ls")):\'\'}}}};G.1I=E(t){B y=P;W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1I"){if(b[x].s("B")==t||t=="1I"){if(b[x].s("1p")==1&&b[x].s("zr")==1&&o.1E){y=H}if(v[t]==\'\'||y){b[x].26("2k",P)}F{b[x].26("2k",H)}b[x].6u(v[t])}}}}yd()};G.I0=E(){yd()};G.ye=E(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="4X"){if(b[x].s("1J")=="1F"){b[x].9Q()}}}}};E yd(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="4X"){if(b[x].s("1J")=="1F"){b[x].Lu(H)}}}}}E xK(){if(K(o.2Z)){o.2Z.kr()}}G.I1=E(){xK()};G.Lo=E(){if(v.1I!=\'\'){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1I"){B y=P;if(!b[x].g("1u")){y=H;b[x].26("2k",H)}b[x].6u(v.1I);if(y){b[x].26("2k",P)}}}}}};G.xO=E(){xP()};E xP(){if(v.9A){if(1P(v.9A)=="3U"){W(B x in v.9A){if(v.9A.2u(x)){iG(x,v.9A[x])}}}}};G.HF=E(y,z){iG(y,z)};G.xI=E(x){if(b[x]){b[x].w7()}};G.HE=E(){W(B x in b){if(b.2u(x)){if(b[x].g("yz")){b[x].w7()}}}};E iG(y,z){if(y){W(B x in b){if(b.2u(x)){if(b[x].g("yz")){if(b[x].s("5c")==y){if((!b[x].g("1u")||b[x].s("3c")==1)&&!gZ(b[x])){b[x].26("L1");b[x].26("2k",H)}b[x].iG(z)}}}}}};G.4Y=E(){2A()};G.Hg=E(){2A(H)};G.mw=E(){ka(1j)};G.k6=E(){ka(Y)};G.2H=E(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1E"){b[x].On()}}}o.cV?o.cV.1p():\'\';xZ();o.1E=H;4M()};G.3l=E(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="4N"||b[x].g("1i")=="2O"){b[x].j6()}}}if(Y){if(v.Y.GN==1&&!Y.5a()){Y.1u()}}o.1E=P;G.7W();4M();if(v.1w.1p==1&&v.1w.gt==1){gk(H)}};G.5m=E(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="5B"){b[x].On()}G.4c(0)}}4M()};G.6F=E(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="aY"){b[x].j6()}}}if(v.1L<0.1){v.1L=0.5;o.X.4c(v.1L)}F{G.4c(v.1L)}4M()};G.4c=E(1L,y){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1L"){if(!b[x].s("7V")||b[x].s("7V")=="1L"){b[x].6S(1L,1,(y=="no"?y:H))}}if(b[x].g("1i")=="5B"){b[x].xi(1L)}}}4M()};G.9w=E(){B bl=7v("1i","2e");if(bl){bl.On();bl.26("1Q",bl.s("1Q"))}4M();lJ?1G(4M,42):\'\';if(o.2e&&o.Fs){if(o.1l.km||o.1l.tv){1G(2A,10)}}fj();xY()};G.8L=E(){B bl=7v("1i","2e");if(bl){bl.j6()}2A();3R(o.kl);4M();xY()};E xY(){if(o.cU){o.cU=1N;o.jr=1N;1j.1p()}}G.8O=E(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1E"){b[x].vB()}}}};G.wF=E(){4M()};G.AY=E(){xZ()};E xZ(){if(Y){if(Y.g("1u")&&v.Y.gA==1){o.S.cS()}}}E 4M(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")!="bs"){bQ(b[x])}}}bQ(bg);if(mk!=9B){mk=9B;2A()}if(o.bW){gB(!o.fr&&!o.5i&&!o.2e&&o.1E&&v.1w.dN!=1&&!o.5o)}};E jS(){B 1u=7S&&v.1w.jm==1;if(v.1w.1p==1){if(!o.1E&&v.1w.gt==1){1u=P}}if(1u){W(B x in b){if(b.2u(x)){if(b[x].g("1i")!="bs"){bQ(b[x],P)}}}O(o.1U,{"6K":"8b"});o.ib=H;bQ(bg,P);if(bg.g("1u")){kR()}gB(P)}}E gk(){B 1p=o.1E&&v.1w.jm==1&&!o.3M;if(o.eE&&v.1w.Wp==1){1p=P}if(!o.1E&&v.1w.1p==1&&v.1w.gt==1){1p=H}if(1j){if(1j.g("1u")&&o.mH){1p=P}}if(o.5o){1p=P}if(1p){W(B x in b){if(b.2u(x)){if(b[x].g("1i")!="bs"){bQ(b[x],H)}}}bQ(bg,H);if(!bg.g("1u")){7S=H;o.R.zg();if(o.1E){O(o.1U,{"6K":"1S"});o.ib=P}}gB(H)}}E fj(){if(v.1w.jm==1){if(v.1w.dN==1&&!o.2e&&!o.bC){}F{3R(o.kl);o.kl=7e(gk,((v.1w.9C>0?v.1w.9C:v.1w.jc)*2p))}}}E bQ(V,da){B 1p=P;B 1u=P;B d7=P;if(v.1w.1p==1){if((!o.fr&&!o.5i&&!o.2e&&o.1E&&v.1w.dN!=1&&!o.5o)||(o.2e&&7S&&!o.ib)||(o.X.fC()&&o.7y&&!o.5i)){1p=H;1u=P;d7=H}F{1p=P;1u=H}if(K(da)&&!o.5o){1p=da;1u=!1p}if(o.bW&&(V.s("1m").I("S")==0||V.s("1i")=="2E")){1p=P;1u=H}if(v.1w.gt==1&&!o.1E){1p=H;1u=P;d7=P}if(v.1w.Wq==1&&!o.8E&&o.1E){1p=P;1u=H}}F{if(V.s("1p")!=1){1u=H}}if(1u&&!o.ib){O(o.1U,{"6K":"8b"});o.ib=H}B a=V.g("1i");if(a=="4X"&&V.s("1m").I("S")==-1){1p=P;1u=H}if(o.5o){if(a=="2E"){if(o.R.1o()==-1){1p=H;1u=P}}}B yL=P;B hp=gZ(V);if(V.s("1p")==1){if(V.s("Wr")==1){if(d7||da||(o.1E&&!o.5i)){!d7&&!da?\'\':hp=H}}if(V.s("YD")==1){if(!d7&&!da){hp=H}}if(V.s("WV")==1){if(o.1E&&!o.5i){hp=H}}if(V.s("Hy")==1||V.s("Hu")==1||V.s("II")==1){lJ=H}}if(hp){1p=H;1u=P}F{!1p?1u=H:\'\'}if(V.s("1i")=="1L"){if(V.s("1p")==1&&V.s("hN")==1&&!V.g("g9")){1p=H;1u=P;if(!d7&&(o.9D||o.dY)&&!da&&V.s("do")!=1){1p=P;1u=H}F{yL=H}}}if(o.as||(!o.1A&&v.1w.1p==1&&v.1w.z3==1)||(!o.8E&&v.1w.1p==1&&v.1w.IK==1)||(!o.2e&&v.1w.1p==1&&v.1w.YE==1)){if(V.s("1m").I("S")>-1||V.s("1m").I("2J")>-1){1p=H;1u=P}if(v.1w.dN==1&&!o.2e){1p=P;1u=H}}if(1j){if(1j.g("1u")&&v.1j.8f!=1){d7=P;da=P}}if(Y&&o.3e){if(v.Y.10A==1){if(o.3e.yJ()){J}}}if(a=="2Z"){if(K(o.2Z)){if(o.2Z.5a()){1p=H;1u=P;V.26("6h","1S")}}}if(a=="Y"||a=="7b"||a=="dw"||V.s("Be")==1){if(Y){if(Y.5a()&&V.s("Be")!=0){1p=H;1u=P;V.26("6h","1S")}}F{1p=H;1u=P}}if(o.11c==1){1p=H;1u=P}if(yL){B cc=zb(V);if(cc){cc.y>0?V.26("y0",cc.y):\'\';O(V.c(),{"1m":"2o","1f":V.g("y0")})}}if(1p){av(V,(ze?H:P))}if(1u){IR(V)}if(V==bg){if(!1p&&1u){kR();5K(7O);bG?bG.26("1B",bG.s("a")):\'\';7S=P;i4==0?js("ui",1):\'\';i4=1;o.6q&&o.ax?o.6q.1u():\'\'}if(1p&&!1u&&!o.5o){o.R.zg();bw();3i(7O);bG?bG.26("1B",0):\'\';7S=H;i4==1?js("ui",0):\'\';i4=0;o.6q&&o.ax?o.6q.1p():\'\'}if(1j){if(1j.tb()){if(!1j.g("1u")){1u&&!1p?1j.1u():\'\'}F{!1u&&1p?1j.1p(2):\'\'}}}if(Y){if(v.Y.8f==1&&!Y.5a()){if(1u||o.as){if(v.Y.Hq==1&&o.2e){}F{if(!Y.g("1u")){if(v.Y.Hs==1){!o.1E?Y.1u():\'\'}F{Y.1u()}}}}F{if(1p&&Y.g("1u")){Y.1p()}}}}}};E gZ(V){B x=P;B a=V.g("1i");if(V.s("1p")==1){if(V.s("zr")==1){o.1E?x=H:\'\'}if(V.s("gt")==1){!o.1E?x=H:\'\'}if(V.s("11d")==1){o.7y?x=H:\'\'}if(V.s("gV")==1){x=H}F{if(V.s("11e")==1){if(o.1l.cK){V.26("gV",1);x=H}}if(V.s("11f")==1){if(o.1l.2m){V.26("gV",1);x=H}}}if(V.s("Hu")==1){if(o.2Y>V.s("Hv")){V.26("do",1);x=H}F{V.26("do",0)}}if(V.s("11g")==1&&!8d){x=H;o.m0=1}if(V.s("11h")==1&&8d){x=H;o.m0=1}if(V.s("Hy")==1){if(o.2Y<=V.s("HA")){V.26("do",1);x=H}F{V.26("do",0)}}if(V.s("11i")==1){o.1A?x=H:\'\'}B t=o.R.1b();B d=o.R.1o();if(V.s("FH")==1&&V.s("HC")>0){if(t>=V.s("HC")){x=H}}if(V.s("FI")==1&&V.s("HG")>0){if(t<V.s("HG")){x=H}}if(V.s("FJ")==1&&V.s("IA")>0){if(t<d-V.s("IA")||d==0){x=H}}if(V.s("11j")==1){if(Y){if(!Y.cD()){x=H}}}if(V.s("11k")==1){if(o.1A||!o.3y||o.R.5A()){x=H}if(o.3y){if(o.3y.9S().t==0){x=H}}}if(V.s("z3")==1){!o.1A?x=H:\'\'}if(V.s("lY")>0){x=H}if(V.s("IE")==1){if(K(V.s("m6"))){2W[V.s("m6")]?x=H:\'\'}}if(V.s("11l")==1){if(!K(V.s("9A"))){x=H}}if(V.s("IH")==1){if(K(V.s("lQ"))){!2W[V.s("lQ")]?x=H:\'\'}}if(V.s("11b")==1&&o.1l.5w){!o.1A||o.lR?x=H:\'\'}if(V.s("11m")==1){!o.R.7y()?x=H:\'\'}if(V.s("11o")==1){!o.R.5A()?x=H:\'\'}if(V.s("11p")==1){!o.5i?x=H:\'\'}if(V.s("11q")==1){!o.2e?x=H:\'\'}if(V.s("II")==1){o.2e?x=H:\'\'}if(V.s("11r")==1){!o.3I?x=H:\'\'}if(V.s("11s")==1){o.R.5A()&&o.R.bZ().I("?xl")==-1?x=H:\'\'}if(V.s("K4")==1){5D(o.2j)?x=H:\'\'}if(V.s("IK")==1){!o.8E?x=H:\'\'}if(V.s("11t")==1){o.8E?x=H:\'\'}if(V.s("11u")==1){o.lX?x=H:\'\'}if(V.s("11v")==1){!o.lX?x=H:\'\'}if(V.s("Gu")==1){if(V.g("iu")){x=H}}if(V.s("11w")==1){!o.ab?x=H:\'\'}if(V.s("11x")==1){o.ab?x=H:\'\'}if(V.s("11y")==1){if(v.4R==1&&v.e6==1){if(o.2t=="4U"&&!K(v.2j)&&v.z9==0){if(!o.1A||o.R.6W()=="7y"){if(v.2j==\'\'){}F{x=H}}}}}}if(a=="4X"){B lu=V.s("3m");if(lu){if(lu=="3z:6e"||lu=="6e"){if(!o.6e&&!o.kG){x=H}}if(lu=="3z:9K"){if(!o.9K||(!o.1A&&v.4R==0)){x=H}}if(lu=="3z:IM"){if(!o.lX){x=H}}if(lu.I("6z")>-1){if(!o.6z){x=H}}if(7F([lu],"7r")&&!7F([lu],"js:")&&V.s("gV")!=1){B sk=P;if(K(v.7r)){if(!o.cO){1P IB==\'E\'?o.cO=1y IB():\'\'}if(o.cO){sk=o.cO.zp(V)}}!sk?x=H:\'\'}}}if(a=="Y"||a=="7b"||a=="dw"){if(Y){if(Y.5a()){x=H}}F{x=H}}if(a=="1j"){if(1j){if(1j.5a()){x=H;o.2t!=\'1H\'?V.26("6h","1S"):\'\'}}F{x=H}}if(V.g("1J")=="1F"){if(V.g("U")==0){x=H}}if(V.g("1j#")){if(!V.g("26#4C")){x=H}}if(V.s("4x")==1){B cb=22.8S("11n"+v.id);if((o.R.1o()==0&&o.R.1b()==0)||!o.4W||!5D(cb)||!o.10Z){x=H}}if(V.s("yq")==1){!x?V.26("yq",1):\'\'}if(a=="1o"){if(o.R.5A()){x=H}}if(V.g("1e")=="zq"&&o.1l.2m){if(o.as&&o.1l.aU){x=H}}J x}E av(V,w8){if(V.g("1u")){if(o.bC||V.s("6h")=="1S"||w8){V.26("2k",P)}F{IT(V)}V.26("1u",P)}};E IR(V){if(!V.g("1u")){if(V.s("6h")=="1S"||o.bC){V.26("2k",H);if(o.bC){V.26("1B",1)}if(V.g("1i")=="1L"){if(o.hR){zf(V)}}}F{IV(V)}if(V.s("1i")=="1L"){o.S.4c(o.3I?0:v.1L)}if(V.s("1i")=="2E"){o.X.zc()}V.26("1u",H)}};E IT(V){xF(V.g("1e"));B 5X="fQ|";B 5C="0|";B 1p=1;B a=V.s("6h");if(V.s("IW")==1){5X=\'\';5C=\'\'}B p=V.s("1m");B jv=V.g("3u");2F(V.s("mM"))?p=V.s("mM"):\'\';jk(p,[\'2J\'])&&o.bW?p="":\'\';if(a=="1Q"){5X+="1Q|";5C+="0|"}if(a=="1m"){if(p.I("2l")>-1&&p.I("S")==-1){5X+="x|";5C+=5n(o.2Y+V.g("17")/2*jv)+"|"}if(p.I("1c")>-1){5X+="x|";5C+=5n(-V.g("17")/2)*jv+"|"}if(p.I("1f")>-1){5X+="y|";5C+=(-V.g("1d")/2)*jv+"|"}if(jk(p,["2J","S","9v"])){5X+="y|";if(V.g("1i")=="2E"||V.g("1i")=="1L"){5C+=5n(o.4p+V.s("h")+(V.s("h")<20?20-V.s("h"):0))+"|"}F{5C+=5n(o.4p+V.g("1d")/2)+"|"}}if(p=="8P"){5X+="1Q|";5C+="0|"}}B m=1y 5T({"mc":V,"me":V.g("1e"),"1J":5X.1n(0,5X.U-1),"to":5C.1n(0,5C.U-1),"1p":1p})};E IV(V){xF(V.g("1e"));B 5X="";B 5C="";B a=V.s("6h");B p=V.s("1m");2F(V.s("mM"))?p=V.s("mM"):\'\';if(V.g("1B")!=1&&V.s("IW")!=1){5X="fQ|";5C=(V.g("1e")==\'bg\'?v.1w.a:"1")+"|"}if(a=="1Q"){if(V.g("3u")!=V.s("1Q")){5X+="1Q|";5C+=V.s("1Q")+"|"}}if(a=="1m"){if(p=="8P"){if(V.g("3u")!=V.s("1Q")){5X+="1Q|";5C+=V.s("1Q")+"|"}}F{if(p.I("S")>-1){if(V.g("y")!=V.g("y0")){5X+="y|";5C+=V.g("y0")+"|"}}F{5X+="x|y|";5C+=V.g("x0")+"|"+V.g("y0")+"|"}}}if(5X!=""&&5C!=""){B m=1y 5T({mc:V,me:V.g("1e"),1J:5X.1n(0,5X.U-1),to:5C.1n(0,5C.U-1),1u:1})}F{V.26("2k",H)}};G.le=E(1e,1J,w8){B 4Y=P;B 2O=P;B V=b[1e];B 1i=V.g("1i");B 3m=V.s("3m");if(1J=="4A"){if(o.hR){if(1i=="1L"||1i=="5B"||1i=="aY"){if(!V.g("g9")){o.9D=H;o.dY=H;4Y=H;4M();if(v.fB.IO==1){B bl=7v("1i","2E");if(bl){3i(bl.c())}}}}}if(1j&&v.1j.fk==1&&((1i=="1j"||3m.I("Iz")==0)||3m.I("1j:")==0)){2P(o.fm);if(!1j.g("1u")||mL!=V){5e(V,1J);o.g3=1i+3m;1G(E(){o.g3=1Z},42)}}if(Y&&v.Y.fk==1&&1i=="Y"){2P(o.wh);if(!Y.g("1u")||mL!=V){5e(V,1J);o.g3=1i;1G(E(){o.g3=1Z},42)}}}if(1J=="4r"){if(o.hR){if(1i=="1L"||1i=="5B"||1i=="aY"){o.9D=P;o.dY=H;1G(E(){if(!o.9D){o.dY=P;W(B x in b){if(b.2u(x)){if(!7S){if(b[x].g("1i")=="1L"&&!b[x].g("g9")){av(b[x]);2A()}}if(b[x].g("1i")=="2E"){if(v.fB.IO==1){5K(b[x].c())}}}}}},42)}}if(1i=="2E"){o.X.6S(1)}if(v.1j.fk==1&&((1i=="1j"||3m.I("Iz")==0)||3m.I("1j:")==0)){2P(o.fm);o.fm=1G(E(){if(!o.3M){bw(1)}},(v.1j.gl>0?v.1j.gl*2p:2p))}if(Y&&v.Y.fk==1&&1i=="Y"){2P(o.wh);o.wh=1G(E(){if(!o.3M){Y.g("1u")?Y.1p(1):\'\'}},(v.Y.gl>0?v.Y.gl*2p:2p))}}if(4Y){1G(2A,10)}};G.oV=E(){if(o.5y&&!o.2e&&!o.bC){o.X.5y(P);o.5y=P}if(o.2j){if(v.lz>-1&&5D(o.2j)){O(o.2j,{1B:v.lm})}}if(o.1E&&v.Ia==1&&v.10N!=0){o.X.3l()}if(v.1w.9C>0){2P(o.Iy);o.Iy=1G(4M,v.1w.9C*2p)}F{4M()}};G.zV=E(){if(o.2j){if(v.lz>-1&&5D(o.2j)){O(o.2j,{1B:v.lz})}}if(!o.1E&&v.Ia==1){o.X.2H()}4M();gB(P)};G.fb=E(bf,bd){B y;W(B x in b){if(b.2u(x)){y=b[x].g("1i");if(y=="2E"||y=="1L"){b[x].fb(bf,bd)}}}};G.yW=E(){if(v.1w.1p==1){if(v.1w.dN==1&&!o.2e){J}if((!o.5i||o.1l.2m)&&o.R.6W()=="7T"){o.5i=H;4M();o.1l.2m?1G(E(){o.5i=P},42):\'\'}if(v.1w.jm==1){jS();fj()}gB(P)}};G.gY=E(bf,bd){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="2E"||b[x].g("1i")=="1L"){b[x].gY(bf,bd)}}}};G.dS=E(1b,1o,Ic){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="2E"){b[x].6S(1b,1o,Ic)}if(b[x].g("1i")=="1b"){eI(b[x],1b,1o)}if(b[x].s("Fu")==1){b[x].wu()}if(b[x].s("Ft")==1){b[x].Jk(1b,1o)}if(b[x].s("FL")==1){if(b[x].s("3m")=="FK"||b[x].s("3m")=="9Y"){1P Id==\'E\'?Id(b[x]):\'\'}if(b[x].s("FM")==1&&!b[x].g("1u")&&7S){}F{if(b[x].g("1u")==gZ(b[x])){4M();2A()}}}}}};E gB(x){if(v.1w.1p==1){x?bw():\'\';if(o.bW){if(!o.1E&&v.1w.gt==1){x=H}if(x&&!o.wl){O(o.1w,{"1f":bg.h()})}if(!x&&o.wl){O(o.1w,{"1f":0})}o.wl=x}}}E kR(){7S=P;o.R.kR();if(o.vN){o.vN=P;2A();1G(2A,dO)}}E eI(x,1b,1o){if(v.4O>0){1b-=v.4O*1;1o-=v.4O*1}B y=4J(1b);if(x.s("G3")=="1"){y=4J(1o-1b)}if(x.s("10Y")=="1"){if(x.s("10C")=="1"){y=y+(1o>0?\' \'+2T(x.s("10D"))+\' \'+4J(1o):\'\')}F{1b==0?y=4J(1o):\'\'}}x.6u(y)}G.wm=E(1b,1o){B x=7v("1i","2E");if(x){x.zS(1b,1o)}};G.kb=E(y){if(o.R.1o()>0){B x=7v("1i","2E");if(x){x.kb(y)}}};G.9l=E(){if(!8d){if(v.gF==1){2P(mQ);mQ=1G(9l,42)}F{9l()}}};E 9l(){if(!8d){js("10E");8d=H;B x=7v("1i","bs");if(x){x.Km();if(v.Ik==1&&o.1E){2P(o.If);o.If=1G(Ii,(v.Ig>0?v.Ig:1)*2p)}}o.m0?4M():\'\'}}E Ii(){if(o.1E&&8d){o.X.8z()}}G.Ij=E(y){W(B x in b){if(x==y){b[x].26("3i")}}};G.7W=E(){2P(mQ);if(8d){js("8j");B x=7v("1i","bs");if(x){x.jb();if(v.Ik==1&&o.1E){o.X.f7()}}8d=P;o.m0?4M():\'\'}};G.kM=E(){B x=7v("3m","1L 6O");if(x){x.26("5K");x.6u(2T(\'1L\')+\' \'+(o.3I?0:2I.yU(v.1L*100))+\'%\');2P(o.kM);o.kM=1G(I9,2p)}};E I9(){B x=7v("3m","1L 6O");if(x){x.6u(\'\');x.26("3i");2P(o.kM)}}G.43=E(1b,1o){if(v.4O>0){1b-=v.4O*1;1o-=v.4O*1}W(B x in b){if(b.2u(x)){if(b[x].s("on")==1){if(b[x].g("1i")=="2E"){1o>0?b[x].26("2x",1b/1o):\'\';b[x].zX()}if(b[x].g("1i")=="1b"){eI(b[x],1b,1o)}if(b[x].g("1i")=="5Q"){b[x].26("vZ",0.5);b[x].26("iy",0)}}}}};G.3Y=E(1b,1o){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1o"){if(v.4O>0){1o-=v.4O*1}b[x].6u(4J(1o))}if(b[x].g("1i")=="2E"){b[x].6S(1b,1o);b[x].AX(1o)}if(b[x].g("1i")=="1b"){eI(b[x],1b,1o)}}}};G.7R=E(){if(!o.4V){1j.g("1u")?1j.1p():1j.1u()}};G.cJ=E(){if(1j){if(o.4V){J o.4V.5D()||1j.g("1u")}F{J 1j.g("1u")?H:P}}F{J P}};G.lZ=E(x){if(1j){1j.5G(x)}};G.bw=E(){bw()};G.10F=E(x){if(1j){1j.In(x)}};G.AH=E(){if(1j){1j.hK()}};G.Ah=E(x){if(1j){J 1j.Io(x)}};E bw(x){if(1j){1j.g("1u")?1j.1p(x):\'\'}o.4V?o.4V.1p():\'\'};G.cS=E(){if(Y){if(Y.g("1u")){Y.1p(1)}F{Y.1u()}}};G.jf=E(x){if(Y){if(Y.g("1u")&&x!=1){x!=2?Y.1p():\'\'}F{1G(E(){Y.1u()},100)}}};G.j1=E(){if(Y){J Y.g("1u")?H:P}F{J P}};G.cW=E(x){J Y?Y.g(x):\'\'};G.6v=E(x){if(Y){Y.wj(x)}};G.Ip=E(x){if(Y){Y.Iq(x)}};G.bn=E(){if(Y){Y.bn()}};G.ly=E(){if(Y){Y.ly()}};G.hY=E(){hY()};E hY(){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="7b"){O(b[x].c(),{"1B":(!Y.cD()?0.5:1)})}if(b[x].g("1i")=="dw"){O(b[x].c(),{"1B":(!Y.gO()?0.5:1)})}}}}G.cD=E(){if(Y){J Y.cD()}F{J P}};G.gO=E(){if(Y){J Y.gO()}F{J P}};G.gT=E(){if(Y){J Y.gT()}F{J P}};G.lB=E(){if(Y){Y.lB()}};G.dC=E(){if(Y){Y.dC()}};G.vO=E(x){if(x&&Y){Y.bO(x)}};G.Ir=E(x){if(x&&Y){Y.mx(x)}};G.Iu=E(x){if(x&&Y){O(Y.co(),{"10G":"1S","2Q-2l":Y.s("7j")});22.8S(x).1M(Y.co());3i(Y.c())}};G.10H=E(){};G.vF=E(x){if(1j){1j.6g();1j.g("1u")?1G(E(){1j.1p()},4w):\'\'}};G.iU=E(){if(1j){1j.6g()}if(o.4V){o.4V.c0()}};G.iW=E(x){if(1j){1j.fh()}2A();4M()};G.mo=E(x){if(1j){1j.jD(x);1j.g("1u")?1j.1p():\'\'}if(o.4V){o.4V.c0()}x=="5q"?vH():\'\'};E vH(){if(o.jg){B x=3T(o.hT/o.6i.6Y(-1)[0],1).y9(2);W(B i in b){if(b.2u(i)){if(b[i].s("7V")=="5q"&&o.hT){b[i].6S(x,1)}if(b[i].s("3m")=="3z:5q,1.0"){b[i].xi(x)}}}}}G.mn=E(x){if(1j){1j.jD("8c")}if(o.4V){o.4V.c0()}};G.aZ=E(){if(1j){1j.9b();1j.g("1u")?1G(E(){1j.1p()},4w):\'\'}if(o.4V){o.4V.c0()}if(o.5o&&o.4W){o.4x.a8()}};G.vJ=E(){o.4V?o.4V.1p():\'\';if(1j){1j.vJ()}};G.kI=E(mf,2k,8h){W(B x in b){if(b.2u(x)){if(b[x].g("1i")=="1j"){if(b[x].s("f9")==1){b[x].JO()}}if(b[x].g("KY")=="1j#"+mf){b[x].26("26#4C",2k);if(b[x].g("1J")=="1F"){if(8h){b[x].6u(vL(8h))}}F{if(v.1j[\'1j\'+mf+\'1i\']=="28"){if(8h==2T("6Z")){b[x].bR(0)}F{b[x].bR(1)}}2A()}bQ(b[x])}}}};G.Hb=E(){if(1j){1j.6g();1j.jD("8c");1j.jD("7f")}};G.jL=E(){B x=7v("1i","2E");if(x){x.jL()}};G.4Y=E(){2A();if(7S){o.vN=H}};G.xk=E(x){if(!7S||x==1){2A();4M()}F{v.1w.vQ=H}};G.vR=E(){B b=7v("1J","O");if(b){b.JP()}};G.4P=E(){4M();2A();4M();if(o.as){3i(7O)}F{!7S?5K(7O):\'\'}};G.Bq=E(1h){if(eU==v.id&&v.1W.on==1){B x=1h.FZ;B y=P;if(x==1N){x=1h.G0}if(K(o.2a)||K(o.8I)||o.wX==1){J P}if(o.1E&&v.1W.jO==1){y=H}if(((v.1W.96==1&&x==32)||(v.1W.10I==1&&x==13))&&(o.6m||o.5i||y)){if(v.1W.2X==1){7q(\'1E\',o.1E?0:1)}o.X.8k();1h.9R();J P}!v.1W.lk?v.1W.lk=0.2:\'\';!v.1W.1Q?v.1W.1Q=5:\'\';if(v.1W.FT==1&&(o.6m||y)){if(o.R.1o()>0){W(B i=48;i<58;i++){if(x==i){o.X.43((o.R.1o()*(x-48)*10)/100,H)}}}}if(x==39&&(o.6m||y)){lG(v.1W.wB)}if(x==37&&(o.6m||y)){ll(v.1W.wB)}if(x==38&&(o.6m||y)){lG(v.1W.xd)}if(x==40&&(o.6m||y)){ll(v.1W.xd)}if(x==10J&&(o.6m||y)){lG(v.1W.FY)}if(x==10K&&(o.6m||y)){ll(v.1W.FY)}}};E 7v(y,z){W(B x in b){if(b.2u(x)){if(b[x].s(y)==z){J b[x]}}}}E lG(x){if(x=="7b"){if(o.Y){o.S.bn()}F{x="4f"}}if(x=="4f"){if(o.R.1o()>0){B sk=o.R.1b()+3T(v.1W.4f);if(sk<o.R.1o()){o.X.43(sk,H);js("lF",sk)}}}if(x=="1L"){o.X.4c(3T(v.1L)+3T(v.1W.lk));1h.9R()}if(x=="1Q"){o.R.1Q(v.1W.1Q/100);1h.9R()}if(v.1W.2X==1){7q(x,1)}}E ll(x){if(x=="7b"){if(o.Y){o.S.dC()}F{x="4f"}}if(x=="4f"){if(o.R.1o()>0&&o.1A){B sk=o.R.1b()-v.1W.4f>=0?o.R.1b()-v.1W.4f:0;o.X.43(sk,H);js("lF",sk)}}if(x=="1L"){o.X.4c(3T(v.1L)-3T(v.1W.lk));1h.9R()}if(x=="1Q"){o.R.1Q(-v.1W.1Q/100);1h.9R()}if(v.1W.2X==1){7q(x,0)}};G.Bk=E(1h){if(eU==v.id){B x=1h.FZ;if(x==1N){x=1h.G0}if(x==57){if(v.1v==1){}}if(o.2e&&x==27){o.X.8L()}if(K(o.2a)||K(o.8I)){J P}if(v.1W.f==1&&x==70&&v.gF!=1&&(o.6m||o.5i)){if(v.1W.2X==1){7q(\'2e\',o.2e?0:1)}o.2e?o.X.8L():o.X.9w()}if(v.1W.s==1&&x==83&&(o.6m||o.5i)){if(o.3D){if(v.1W.2X==1){7q(\'28\',o.5k?0:1)}3x("FQ")}}if(v.1W.m==1&&x==77&&(o.6m||o.5i)){if(v.1W.2X==1){7q(\'5B\',o.3I?1:0)}o.3I?o.X.6F():o.X.5m()}}};G.4q=E(){3R(o.kl);W(B x in o){if(x.I("1a")==0&&x.I("Gh")>-1){3R(o[x])}}W(B i=0;i<hc.U;i++){1e=hc[i];if(b[1e]){b[1e].4q()}}if(1j){1j.4q()}if(Y){Y.4q()}bg.4q();bG?bG.4q():\'\';if(7O.3W==o.1U){o.1U.3q(7O)}F{o.1w?o.1w.3q(7O):\'\'}};G.jS=E(){jS()};G.gk=E(){gk();4M()};G.fj=E(){fj()};G.oR=E(){J 7S}};B G4=E(1e){B i;B C=[];B w;B h;B xn=0;B bg;B mU;B 9q;B oA=0;B 4C=H;B Gq=P;B 3u=1;B 3r=1;B 2B;B iq;B 2V;B 8R;B 1i;B a6=\'\';B x0;B y0;B on;B 4A=P;B cI=P;B j4=0;B 10L;B 10B=0;B gS=0;B Gg=0;B l8=0;B qu=P;B Lb=P;B iu=P;B 3c=P;B ip;B f9;B ln;B yl=P;C=9W(C,gh.V);C=9W(C,v[1e]);B X=[C.1i];1i=X[0];K(C.G7)?X[1]=C.G7:\'\';K(C.G8)?X[1]=C.G8:\'\';K(C.1I)?C.1F=C.1I:\'\';if(2F(C.G9)){o.9j?C.1Q=C.G9:\'\'}if(1i=="2Z"){o.gs=H}if(K(C.3m)){if(C.1J=="1F"&&C.3m!=\'\'){if(K(v[C.3m+\'1F\'])){C.1F=v[C.3m+\'1F\']}}if(C.3m.I("1j#")==0){a6=C.3m;if(C.2V==\'\'&&a6.I(",")==-1){C.2V=2T(v.1j[\'1j\'+a6.1n(9)+\'1i\'])}}if(C.3m.I("6z")>-1){v.Gb=H}if(C.3m.I("2Z:")>-1){o.gs=H}if(C.3m=="10M"){C.10O=1y 10P(C)}}B 7G=C.2V?C.2V.2z("///"):[];if(C.FO==1){C.1J="1F";C.1F=j7(0)+(X.U>1?\'///\'+j7(1):\'\');if(2F(C.aN)){C.1t=C.aN}}C.it=[];C.il=[];B xa=0;B 2X=1y c5();B 1r=1y c5();B e5=1y c5();B 10Q=1y c5();B j8=0;B aW;if(C.1J=="1F"){if(C.5c){if(K(v[C.5c+\'1F\'])){C.1F=v[C.5c+\'1F\']}}if(K(C.1F)){2X[0]=4D(C.1F);C.qA=C.1F.U;B xC=[\'/\',\'|\',\'-\'];xC.I(C.1F.1n(-1))>-1?C.vA=C.1F.1n(-1):\'\';xC.I(C.1F.1n(0,1))>-1?C.xD=C.1F.1n(0,1):\'\';if(1i=="1b"||1i=="1o"){if(C.1F.I(\'0:\')==0){C.qx=H}if(C.1F.2z(":").U==3){C.Lk=H}F{if(C.1F.I(\'bJ:bJ\')>-1){C.Lr=H}}if(C.mB==1){v.mB=1}}if(C.G3==1&&C.1F.I("-")==0){C.Le=H}if(C.1F.I("///")>0&&(1i=="4X"||C.FO==1)){C.h3=C.1F.2z("///");C.1F=2X[0]=C.h3[0]}}if(v.xp==1){1G(9Q,100);1G(9Q,42);1G(9Q,2p)}}F{if(K(C.1r)){2X[0]=C.1r;if(2X[0].I("///")>0&&2X[0].I("gv")==-1){2X=C.1r.2z("///")}if(K(C.mJ)){2X[1]=C.mJ}if(C.J4==1){if(2F(C.Fp)){2X.2L(C.Fp);j8=2X.U-1}}}}if(1i=="4X"){if(C.10R==1&&K(C.ls)){C.yY=C.3m}}B 1a=1O("1X");if(C.1m.I(\'9v\')>-1){o.9v?o.9v.1M(1a):1G(E(){o.9v.1M(1a)},100);o.Fs=H}F{if(jk(C.1m,["1a","2J"])&&o.bW){o.1w.1M(1a)}F{o.1U.1M(1a)}if(1i=="bs"&&C.10S==1){1a.C.4S=we}}if(C.Ft==1){C.iI=1y 10T(C,1a)}B mU=1O("1X");1a.1M(mU);B dg=1O("1X");O(dg,{"1m":"2o","1c":0,"1f":0});1a.1M(dg);O(1a,{"1m":"2o","1c":0,"1f":0,"1B":1,"eS":"mY","nH":"iQ"});if(2F(C.5c)){4i(1a,{"id":(v.id+"4B"+"ai"+C.5c)})}if(C.Fu==1||C.Gr==1){O(dg,{"4F":"2K 0.2s 3f"})}if(2X.U>0){W(i=0;i<2X.U;i++){1r[i]=1O("1X");O(1r[i],{"1m":"2o","1f":0,"1c":0,"9t":"1S","1B":C.a,"4F":"1B 0.1s 3f"});if(C.f5>C.1Q){O(1r[i],{"4F":"1B 0.1s 3f,2K 0.1s 3f"})}if(C.1J=="fV"&&C.3h!=\'\'){if(2F(C.5c)){4i(1r[i],{"id":(v.id+"4B"+"1a"+"4B"+C.5c+"4B"+"1r")});if(v[C.5c+\'3h\']){C.3h=v[C.5c+\'3h\']}}if(jk(C.3h,[".wk",".jB",".10U","gv",".9o"])){C.3h.I("//")==-1&&C.3h.I("gv")==-1?C.3h=\'//\'+C.3h:\'\';B z=1O("4m");C.9P=1;z.1z("gb",z5);z.3h=C.3h;1r[i].1M(z);C.w=1r[i].29;C.h=1r[i].2S;if(C.Fv>0){O(z,{1d:C.Fv})}}}if(C.1J=="1F"){O(1r[i],{"1t":(C.1t),"eS":C.es*2q(v.7w,1),"y8":eQ(C.3O),"kd-eZ":C.l9+\'px\',"2Q":"0 cv 0 cv","bv-96":"dI"});if(o.9j){if(2F(C.Fw)){O(1r[i],{"eS":C.Fw*2q(v.7w,1),})}}if(C.2x==1){if(C.1F.I("<a ")>-1||1e=="d8"){O(1r[i],{"9t":"2y"})}}if(C.Fx==1){O(1r[i],{"3O-ez":"Fx"})}if(C.lW>0){O(1r[i],{"3O-ez":C.lW})}if(C.Fo){O(1r[i],{"nH":C.Fo+"em"})}2X[i]==\'5Q\'?2X[i]=2T("5Q"):\'\';1r[i].1R=wd(2X[i]);1G(wD,100);C.w=1r[i].29;C.h=1r[i].2S;if(2F(C.5c)){4i(1r[i],{"id":(v.id+"pH"+C.5c+"10V")})}}if(C.1J=="O"){o.1A?1G(wf,4w):\'\'}B 9u=2X[i].6A();if(9u.I(\'B:\')==0){9u=2q(1V[9u.1n(4)],\'\')}B lO=9u.I(\'<2g\')>-1||9u.I(\'<10W\')>-1;if(C.1J=="2g"&&(9u.I(\'<g>\')>-1||lO)){if(1i=="5B"||1i=="4X"){9u=9u.1T(/j3/g,\'j3\'+v.id+1e)}if(9u.I(\'4l\')>-1){bM(1r[i])}1r[i].1R=(!lO?"<2g 17=\'20\' 1d=\'20\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'>":\'\')+9u+(!lO?"</2g>":\'\');1r[i].29>20?C.w=1r[i].29:\'\';1r[i].2S>20?C.h=1r[i].2S:\'\';O(1r[i],{"17":C.w,"1d":C.h});if(C.aN!=-1){pN(1r,C.aN)}if(2F(C.5c)){4i(1r[i],{"id":(v.id+"pH"+C.5c+"mb"+i)})}}dg.1M(1r[i]);i>0?1p(1r[i]):\'\'}bq();ln?z5():\'\';if(C.3m=="4x"){C.4x=1;C.1p=1;o.4x?1r[0].1R=o.4x.oa(C.aN!=-1?C.aN:\'#3E\'):\'\';if(o.1l.2m){1r[0].FD=xq;1r[0].10X=5r;1r[0].wT=xz}F{1r[0].jN=5Y;1r[0].kp=5r;1r[0].jw=eg}}F{if((bg.29*C.1Q<35||bg.2S*C.1Q<35)&&C.1J!=\'1F\'){yZ();bM(9q)}F{bM(bg)}}if(1i=="4X"){B lu=\'\';if(C.ho==1&&K(C.3m)){lu=C.3m;if(lu.I("3z:")==0){B 1C=lu.1n(4).2z(",");if(1C.U==2){B wV=1C[1].2z("/");if(wV.U==2){1C[0]==\'hd\'?1C[0]="56":\'\';if(v[1C[0]]==wV[1]){C.a=1;O(1r[0],{"1B":C.a})}}}}if(lu=="FF"||lu=="4n"){o.X.gr();1a.C.4S=we;o.wX=1}}if((C.1p==1&&(C.FH==1||C.FI==1||C.FJ==1))||lu.I("7r")==0||lu=="FK"||lu=="9Y"){C.FL=1;if(7F([C.1m],"1a")){C.FM=1}}if(lu.I("7r")==0){1a.C.4S=we}}W(B sf in C){if(2F(C[sf+\'4B\'+\'B\'])){if(2F(2W[C[sf+\'4B\'+\'B\']])){C[sf]=2W[C[sf+\'4B\'+\'B\']]}}}if(1i=="1j"&&C.f9==1){f9=1y FP(1a,bg,C)}if(C.2x==0){gE(1a)}if(C.9P==1){1p(bg)}if(C.2B==1){qE()}if(C.1m.I("2l")>-1){gS=1}if(C.1m.I("1f")>-1){Gg=1}if(C.1m.I("2J")>-1||C.1m.I("1a")>-1){l8=1}2A();B t=\'\';if(C.b8!=0){t+="q9("+C.b8+"xV)"}if(C.11z==1){t+=" 3u(-1)"}if(C.11a==1){t+=" 3r(-1)"}if(t!=\'\'){O(dg,{"2K":t})}if(1i=="bs"){jb()}B 1C=[];B i;if(1i=="Y"){1C=[\'dv\',\'GM\',\'mg\',\'GN\',\'ma\',\'oS\'];W(i=0;i<1C.U;i++){if(K(C[1C[i]])&&!K(v.Y[1C[i]])){v.Y[1C[i]]=C[1C[i]]}}}if(1i=="1I"){1C=[\'m9\',\'wI\',\'wE\'];W(i=0;i<1C.U;i++){if(K(C[1C[i]])&&!K(2W[1C[i]])){v[1C[i]]=C[1C[i]]}}}C.lE==1?7K():\'\';if(1i=="4X"&&C.on==0){3i(1a)}if(C.1p==1&&C.lY>0){1G(GP,C.lY*2p)}}E GP(){C.lY=-1;o.S.4P()}E yZ(){if(9q){9q.3W.3q(9q)}9q=1O("1X");O(9q,{"1m":"2o","1f":0,"1c":0,"17":C.1J=="fV"?bg.29:(bg.29>35?bg.29:35)*C.GS,"1d":C.1J=="fV"?bg.2S:(bg.2S>35?bg.2S:35)*C.ya});C=4z(C,\'hv\',\'hv\');1a.1M(9q)}E bM(x){if(1i.I("1b")==0&&X.U==1){C.2x=0}if(1i=="4X"&&C.ho==0){C.2x=0}if(C.2x==1){if(C.kO==1){O(x,{"6K":"4l"})}O(x,{"9t":"2y"});if(o.1l.2m){x.1z("cI",E(e){xz(e)});x.1z("hb",E(e){xq(e)});x.1z("h9",E(e){GV(e)})}if(v.cK==1||!o.1l.2m){x.gX=8m}if(v.1w.hD==1||C.hD==1){O(x,{"2i-1t":"#qi","1B":0.5})}}F{O(x,{"6K":"8b"})}if(!o.1l.2m){x.jN=5Y;x.kp=5r}if(C.3c==1||C.2B==1){x.jw=eg}}E xz(e){js("11A"+1e);e.bB();cI=H}E xq(e){C.GX==1?5Y():\'\';e.bB()}E GV(e){e.bB();e.9R();C.GX==1?5r():\'\';if(!cI){8m(e)}cI=P}E bq(){if(bg){bg.3W.3q(bg)}bg=1O("1X");O(bg,{"1m":"2o","1f":0,"1c":0});if(2F(C.5c)){4i(bg,{"id":(v.id+"pH"+C.5c+"126")})}w=C.w;h=C.h;C.fU=-1;C.aQ=-1;C=4z(C,\'2M\',\'2M\');C=4z(C,\'ar\',\'ar\');if(C.aV&&o.9j){if(C.aV!=\'0 0 0 0\'){C=4z(C,\'ar\',\'aV\')}}if(C.1J=="1F"){w=1r[xa].29;h=1r[xa].2S;if(C.w4>0){w<C.w4?w=C.w4:\'\'}}C=4z(C,\'gR\',\'gR\');C=4z(C,\'H1\',\'H1\');if(2F(C.5c)&&K(v.4X)&&C.1i=="4X"){if(1P(v.4X)==\'3U\'){W(B i=0;i<7o.6n(v.4X).U;i++){if(v.4X[i][C.5c]){if(v.4X[i][C.5c]=="6Z"){C.on=0}F{B 1C=v.4X[i][C.5c].2z(":");if(1C[0]=="2M-1c"){if(1C[1].I("%")>0){C.hS=2N(1C[1])}F{C.4s=2N(1C[1])}}}}}}}C.h=h;C.w=w;if(C.bg==1){h=h+C.9X+C.a4;w=w+C.7z+C.7j;C.h=h;C.w=w;if(C.1J=="1F"){C.jj=1r[0].2S}}F{C.4u=0}O(bg,{"17":(C.H2==1?H6:w),"1d":h,"yb":(C.ql*h)/2,"2i":(C.vG==1?"3f-4L("+(C.12a==1?"to 2l,":\'\')+4E(C.4k,C.4u)+","+4E(C.12b,C.4u)+")":4E(C.4k,C.4u)),"4F":"2i .1s 3f, 2K .1s 3f"+(2F(C.ao)?\', 6p .1s 3f\':\'\')});if(C.1J=="fV"){O(bg,{"17":w,"1d":h,"yb":(C.ql*h/C.1Q)/2,})}if(C.Ak==1){zl(bg,C.4k,C.AS,C.Au)}if(C.kQ==1){O(bg,{"2R":2q(C.12c,1)+"px 6E "+C.kP})}if(C.aa==1){O(bg,{\'kw-6p\':\'aa(aI)\'})}mU.1M(bg)}E 2A(){B fU=(-bg.2S/2);B aQ=(-bg.29/2);if(fU!=C.fU||aQ!=C.aQ){O(bg,{"1f":(-bg.2S/2),"1c":(-bg.29/2)});C.fU=fU;C.aQ=aQ}if(9q){B x=C.1J=="fV"?bg.29:(bg.29>35?bg.29:35);B y=C.1J=="fV"?bg.2S:(bg.2S>35?bg.2S:35);O(9q,{"1f":(-y/2)+C.Af-C.Ag,"1c":(-x/2)+C.12d-C.12e})}W(B i=0;i<2X.U;i++){B it=C.1J=="2g"?2I.4a(2N(1r[i].C.1d))/2:2I.4a(1r[i].2S)/2;B il=C.1J=="2g"?2N(1r[i].C.17)/2:1r[i].29/2;if(it!=C.it[i]||il!=C.il[i]){O(1r[i],{"1f":-it,"1c":-il});if(bg){O(1r[i],{"1f":(5n(1r[i].C.1f)+C.9X/2-C.a4/2+C.12f/2+C.12g/2),"1c":(5n(1r[i].C.1c)+C.7z/2-C.7j/2+C.12h/2+C.12i/2)})}C.it[i]=it;C.il[i]=il}}}E 5Y(){B i;4A=H;if(C.e5==1){if(on&&K(C.mJ)){i=1}F{i=0}if(aW&&e5.U>2){i=2}if(e5[i]){pR();1u(1r[e5[i]])}}if(C.bg==1){O(bg,{"2i":4E(xG(C.aF,C.4k),xG(C.8X,C.4u))});if(2F(C.ao)){O(bg,{"6p":"dW("+C.ao+")"})}}if(C.7l>-1&&!Gq){W(i=0;i<2X.U;i++){if(1r[i].C.5Z!="3c"){O(1r[i],{"1B":C.7l})}}}if(C.my!=-1){pN(1r,C.my)}if(C.Gr==1){j4+=45;i2(1r[0],j4)}if(C.f5>C.1Q&&C.f5>-1){1Q(C.f5)}if(1i=="1j"&&o.S.cJ()){}F{if(C.2B==1&&C.lE!=1){B x=7G.U>1&&!on?7G[1]:7G[0];if(x){if(x.I(\'B:\')==0){2V.1R=1V[x.1n(4)];7K()}}1u(2B);O(2B,{"1B":1})}}if(1i=="5B"){o.X.5y(H);o.5y=H}o.eE=H;o.S.le(1e,"4A")}E 5r(){4A=P;B i;if(C.e5==1){if(on&&K(C.mJ)){i=1}F{i=0}if(aW&&e5.U>2){i=2}pR();1u(1r[i])}if(C.bg==1){O(bg,{"2i":4E(C.4k,C.4u)});if(2F(C.ao)){O(bg,{"6p":"dW(1)"})}}if(C.7l>-1){W(i=0;i<2X.U;i++){if(1r[i].C.5Z!="3c"){O(1r[i],{"1B":C.a})}}}if(C.f5>-1){1Q(C.1Q)}if(C.my!=-1){pN(1r,(C.aN==-1?\'#3E\':C.aN))}if(1i=="5B"&&!o.2e){o.X.5y(P);o.5y=P}wC();o.eE=P;o.S?o.S.le(1e,"4r"):\'\'}E wC(){if(C.2B==1&&C.lE!=1){1p(2B);O(2B,{"1B":0})}}E 8m(e){e?e.6H=H:\'\';if(!qu){o.S.g2(1e);if(1i=="4X"){qz()}wC();if(C.12j==1){j4+=45;i2(1r[0],j4)}iu=H;if(C.Gu==1||(1e=="zq"&&C.1p==1&&C.zr==1)){o.S.4P()}}};G.Gi=E(){8m()};E qz(){if(2X){if(2X.U>1){if(on==H){1u(1r[0]);1p(1r[1])}F{1u(1r[1]);1p(1r[0])}}if(C.2B==1&&7G.U>1){2V.1R=o.ni+(on==H?7G[0]:7G[1])+o.iH;7K()}}if(K(C.yY)){if(on==H){C.3m=C.yY}F{C.3m=C.ls}}pV();on=on!=H;if(C.3m){if(C.3m.I(",0/1")>-1){js(C.3m,on?1:0)}}if(C.bg==1&&K(C.yN)){if(C.yN!=-1){if(on){C.Gv=C.4k;C.4k=C.yN}F{C.4k=C.Gv}bq();bM(bg);2A();if(C.1J=="1F"){9Q()}F{1Q(C.1Q)}}}}E pV(){if(K(C.h3)){if(C.h3.U>1){if(on==H){6u(C.h3[0])}F{6u(C.h3[1])}}}}E vB(1h){1h.6H=H;o.S.g2(1e)}E pR(){W(B i=0;i<2X.U;i++){if(1r[i].C.5Z!="3c"){O(1r[i],{"1B":C.a});1p(1r[i])}}}E wD(1F){if(1r[0]){if(1r[0].29>o.2Y-C.4s-C.4o-C.7z-C.7j){if(C.z6==1){if(!1F){1F=1r[0].1R}1r[0].1R=\'<z6>\'+1F+\'</z6>\'}F{O(1r[0],{"bv-96":"h1"})}O(1r[0],{"17":o.2Y-C.4s-C.4o-C.7z-C.7j})}}}E z5(){if(bg){ln=P;C.9P=0;1p(bg);if(1r[0]){C.w=1r[0].29*C.1Q;C.h=1r[0].2S*C.1Q;1Q(C.1Q)}C.af=0;bq();yZ();bM(9q);1u(bg);2A();o.S.4Y();if(!5D(1a)){3i(1a)}}F{ln=H}}E BC(1h){1h.6H=H}E eg(){if(!o.1l.2m&&!o.eE){5Y()}7K()}E 1Q(x){if(x>0){O(bg,{"2K":"1Q("+x+")"});W(i=0;i<2X.U;i++){O(1r[i],{"2K":"1Q("+x+")"})}if(C.iI){C.iI.1Q(x)}3u=x;3r=x}}E qE(){2B=1O("1X");O(2B,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'1d\':\'2y\',"1B":0,"4F":"1B 0.1s 3f"});iq=1O("1X");C=4z(C,\'jU\',\'jU\');C=4z(C,\'Gy\',\'Gy\');O(iq,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1d\':30,\'2i-1t\':C.ke,\'1B\':C.jA,\'2R-6M\':C.xQ});2V=1O("1X");O(2V,{\'1m\':\'2o\',\'1c\':C.yI,\'1f\':C.pB,\'1t\':C.yr,\'3O-dz\':eQ(C.yx),\'3O-3P\':C.yA*2q(v.7w,1),"kd-eZ":C.xN+\'px\',"2E-1d":"1"});if(C.2V){if(C.2V.I("B:")==0){C.Gz=H}}if(!C.Gz){O(2V,{\'bv-96\':\'dI\'})}if(C.h0==1){8R=1O("1X");8R.1R=\'<2g 17="aI" 1d="xT" xX="0 0 8 6" 8J="1.1" 4j="3L://4h.w3.47/4g/2g" 4j:4d="3L://4h.w3.47/7D/4d"><hf id="Ea" 3F="1S" 5h="#\'+C.ke.1T("#","")+\'" 5h-nO="Eb" 2v="0 0 8 0 4 6"></hf></2g>\'}if(C.lE==1){O(2B,{"1B":1});bM(2B)}F{gE(2B)}1a.1M(2B);2V.1R=o.ni+(C.2V==\'\'?2T(1i):7G[0])+o.iH;2B.1M(iq);2B.1M(2V);if(C.h0==1){2B.1M(8R);B y7=o.yQ?\'-aI\':\'-xT\';B ps=C.129;if(!K(ps)){ps=\'\'}B tp=ps.I("1f")>-1;if(tp){i2(8R,\'-12k\')}O(8R,{\'1m\':\'2o\',\'2l\':(ps.I("2l")>-1?10*C.1Q:\'2y\'),\'1c\':(ps.I("1c")>-1?10*C.1Q:(ps==\'\'||ps==\'1f\'?\'50%\':\'2y\')),\'2M-1c\':(ps==\'\'||ps==\'1f\'?\'-Fi\':0),\'2J\':(tp?\'2y\':y7),\'1f\':(tp?y7:\'2y\'),\'1B\':C.jA})}7K()}E 7K(){if(C.2B==1){O(2B,{"1f":(l8==1?-h-2B.2S+3:-2B.2S/2)+C.12m-C.12n,"1c":(gS==1?-2V.29:(l8==1?-w/2:+2V.29))-(l8==1?0:2V.29/2+5)+C.12o-C.12p,"1d":C.pB+2V.2S+C.yn,"17":C.yI+2V.29+C.BJ});O(iq,{\'1d\':2B.2S});2B.C.4S="2p"}}G.c=E(){J 1a};G.s=E(x){J C[x]};G.ss=E(x,x2){J K(C[x])?C[x][x2]:P};G.g=E(x){cw(x){1q"17":J w;1k;1q"1d":J h;1k;1q"h":J 2q(C.jj,h);1k;1q"x":J 5n(1a.C.1c);1k;1q"y":J 5n(1a.C.1f);1k;1q"1B":J 1a.C.1B?1a.C.1B:1;1k;1q"1u":J 4C;1k;1q"3u":J 3u;1k;1q"3r":J 3r;1k;1q"1i":J 1i;1k;1q"KY":J a6;1k;1q"iu":J iu;1k;1q"1J":J C.1J;1k;1q"U":J C.qA?C.qA:0;1k;1q"1e":J 1e;1k;1q"x0":J x0;1k;1q"y0":J y0;1k;1q"4A":J 4A;1k;1q"1j#":J a6.I("1j#")==0;1k;1q"1j:":J a6.I("1j:")==0;1k;1q"yz":J 1i=="4X"&&C.1J=="1F";1k;1q"26#4C":J yl;1k;8b:J P}};G.26=E(k,x){cw(k){1q"1u":4A?5r():\'\';4C=x;1k;1q"2k":KM(x);1k;1q"5K":5K(1a);1k;1q"3i":3i(1a);1k;1q"L1":C.3c=0;1k;1q"yq":if(C.L6>0&&C.3c!=1&&!ip){2P(ip);ip=1G(E(){3i(1a);(C.12q!=1?C.3c=1:\'\');ip=1N},C.L6*2p)}1k;1q"1Q":1Q(x);1k;1q"12r":O(1a,{"2K":"1Q(0)"});1k;1q"3u":O(1a,{"2K":"3u("+x+")"});3u=x;1k;1q"3r":O(1a,{"2K":"3r("+x+")"});3r=x;1k;1q"1B":O(1a,{"1B":x});1k;1q"vZ":O(1r[0],{"1B":x});1k;1q"iy":O(1r[0],{"6p":"iy("+x+")"});1k;1q"1c":O(1a,{"1c":x});1k;1q"1f":O(1a,{"1f":x});1k;1q"17":O(1a,{"17":x});1k;1q"1d":O(1a,{"1d":x});1k;1q"wG":C.wG=x;1k;1q"gS":gS=x;1k;1q"26#4C":yl=x;1k;1q"x":O(1a,{"1c":x});1k;1q"y":O(1a,{"1f":x});1k;1q"6h":C.6h=x;1k;1q"7r":C.7r=x;1k;1q"x0":x0=x;1k;1q"y0":y0=x;1k;1q"gV":C.gV=x;1k;8b:J P}};E KM(x){if(x&&o.1l.2m){qu=H;1G(Ku,dO)}if(!x){if(pU()&&aW){1p(1r[j8]);1u(1r[0]);aW=P}}if(C.9P==1){x?1u(1a):1p(1a)}F{if(1e=="12s"||1e=="KL"){x?1u(1a):1p(1a)}F{O(1a,{"2k":(x?"4n":"1S")})}4C=x;x?1u(1a):\'\'}if(x&&C.qv){C.qv=P;1G(9Q,100)}}E Ku(){qu=P}G.6u=E(x,y){if(a6!=\'\'&&(C.1F==\'x\'||C.1F==\'1x\')){x=x+\'x\'}if(y){x=C.1F+x}6u(x);!5D(1a)?C.qv=H:\'\'};B wr;G.iG=E(x){if(wr!=x){C.9A=x;6u(x);!5D(1a)?C.qv=H:\'\';o.S?o.S.4Y():\'\'}wr=x};G.wu=E(){i2(dg,oA);oA+=20};E i2(x,y){O(x,{"2K":"q9("+y+"xV)"+(x==1r[0]&&!Lb&&3u!=1?\' 1Q(\'+3u+\')\':\'\')})};G.Lu=E(x){if(C.1F.I("{1I")>-1){6u(C.1F)}};G.qz=E(){qz()};E 6u(1F){if(C.1J=="1F"){if(K(1F)){if(C.Lk){if(1F.U==4){1F=(C.qx?\'0:0\':\'bJ:0\')+1F}if(1F.U==5){1F=(C.qx?\'0:\':\'bJ:\')+1F}if(1F.U==7){1F=(C.qx?\'\':\'0\')+1F}}if(C.Lr){if(1F.U==4){1F=\'0\'+1F}}C.qA=1F.U}1F=(C.xD?C.xD+(C.Le?\'\':\' \'):\'\')+1F+(C.vA?\' \'+C.vA:\'\');B Jx=1r[0].29+(C.bg==1?C.9X+C.a4:0);B JF=1r[0].2S+(C.bg==1?C.9X+C.a4:0);1r[0].1R=o.ni+(1i=="4X"?wd(1F):1F)+o.iH;if(C.12t==1){1r[0].1R+=\'<7m C="2k:bN-4n;17:ds"></7m><7m C="2R-1f: cv 6E \'+3A(C.1t)+\';2R-1c: cv 6E eG;2R-2l: cv 6E eG;1m: 2o;2l:cv;1f: 50%;2M-1f: -41;"></7m>\'}if(1i=="1I"){O(1r[0],{"17":"2y","bv-96":"dI"});wD(1F)}C.w=1r[0].29+(C.bg==1?C.9X+C.a4:0);C.h=1r[0].2S+(C.bg==1?C.9X+C.a4:0);if(Jx!=C.w||JF!=C.h||(C.w>0&&xn==0)){9Q()}if(1r[0].29>0){xn=C.w}F{a6!=\'\'?1p(1r[0]):\'\';if(1F!=\'\'){1G(9Q,10)}}}}G.9Q=E(){9Q()};E pU(){J!o.R.5A()&&C.J4==1}E 9Q(){if(C.1J=="1F"){if(1r[0]){if(1r[0].29>0){a6!=\'\'?1u(1r[0]):\'\';w=C.w=1r[0].29;h=C.h=1r[0].2S;bq();bM(bg);2A();if(o.S){if(7F([C.1m],"1a")){o.S.xk()}F{o.S.4Y()}}}}}}G.xi=E(x){if(C.Jc==1){B n=4;if(1e=="12u"){if(o.1l.2m){J}}F{n=8}B y=\'j3\';B z=[];W(B i=1;i<n;i++){z[i]=22.8S(y.a1(v.id,1e,\'12v\',i))}if(z[1]){W(B i=1;i<n;i++){z[i]?1p(z[i]):\'\'}if(n==4){W(B i=1;i<n;i++){x>(i/n)&&z[i]?1u(z[i]):\'\'}}F{W(B i=n;i>0;i--){if(x*1+(1/n)>=(i/n)&&z[i]){1u(z[i]);1k}}}}}};G.On=E(){if(!on){if(2X){if(2X.U>1&&X.U>1){1p(1r[0]);1u(1r[1])}}if(X.U>1){1i=X[1];if(C.2B==1){2V.1R=j7(1);7K()}}if(pU()&&aW){1p(1r[j8]);aW=P}pV();on=H}};E j7(x){J o.ni+(C.2V==\'\'?2T(X[x]):(7G.U>1?7G[x]:7G[0]))+o.iH}G.bR=E(x){bR(x)};G.Jk=E(x,y){if(C.iI){C.iI.c0(x,y)}};E bR(x){B y=\'j3\';B z=22.8S(y.a1(v.id,1e,\'12w\'));if(z){O(z,{"4F":"2K 0.1s 5g-4r"});if(x==1){z.C.2K=\'JJ(0, 0)\'}F{z.C.2K=\'JJ(-K8, 0)\'}}F{if(x==1){C.a=1}F{C.a=0.5}}on=x==1;if(C.2B==1&&7G.U>1){2V.1R=(on?7G[0]:7G[1])}O(1r[0],{"1B":C.a})};G.j6=E(){if(on){if(2X){if(2X.U>1&&X.U>1){1u(1r[0]);1p(1r[1]);O(1r[0],{"1B":C.a})}}1i=X[0];if(X.U>1){if(C.2B==1){2V.1R=j7(0);7K()}}pV();on=P;aW=P}};G.vB=E(){if(pU()){pR();1u(1r[j8]);aW=H}};G.Km=E(){B 2O=P;if(C.1p==1){if(C.K4==1){if(5D(o.2j)){2O=H}}if(C.12l==1&&!o.2e){2O=H}if(C.124==1&&o.2e){2O=H}}if(!2O){5K(1a);B eY=1a.a3("*");W(B i=eY.U;i--;){O(eY[i],{"6h-1E-7B":"11O"})}4C=H}};G.jb=E(){jb()};E jb(){3i(1a);B eY=1a.a3("*");W(B i=eY.U;i--;){O(eY[i],{"6h-1E-7B":"8o"})}4C=P}G.4q=E(){if(2X.U>0){W(i=0;i<2X.U;i++){if(1r[i].3W==1a){1a.3q(1r[i])}1r[i]=1Z}}if(bg){bg.gC("gX");bg.gC("jN");bg.gC("kp");bg.3W.3q(bg);bg=1Z}if(C.1m.I(\'9v\')>-1){if(1a.3W==o.9v){o.9v.3q(1a)}}F{if(1a.3W==o.1U){o.1U.3q(1a)}F{if(o.1w){if(1a.3W==o.1w){o.1w.3q(1a)}}}}if(2B){if(2B.3W==1a){1a.3q(2B)}}1a=1Z};G.JO=E(){f9?f9.f6():\'\'};G.JP=E(){wf()};E wf(){JQ(2X[0],C.1t,1r[0])}E wd(x){B z=x+\'\';if(x.I(\'{\')>-1){if(x.I(\'{1b}\')>-1&&K(o.3y)){x=x.1T(\'{1b}\',fH(o.3y.9S().t))}if(x.I(\'{1I\')>-1){B y=o.cX?o.cX:(v.1I?v.1I:\'\');if(x.I(\'{cl}\')>-1&&o.S){x=x.1T(\'{cl}\',o.S.cW(\'cl\'))}if(o.aL&&o.S){y=o.S.cW(\'aL\')}x=x.1T(\'{1I}\',y);if(o.aL&&!o.S){1G(6u,100,z)}}if(x.I(\'{1F\')>-1){W(B i=1;i<6;i++){if(x.I(\'{1F\'+i+\'}\')>-1){if(K(v[\'1F\'+i])){x=x.1T(\'{1F\'+i+\'}\',v[\'1F\'+i])}F{x=x.1T(\'{1F\'+i+\'}\',\'\')}}}}if(x.I(\'{7b}\')>-1){o.j0=1e;if(o.S){x=x.1T(\'{7b}\',o.S.cW(\'JS\'))}}}J x}G.w7=E(){6u(C.1F)};E pN(1r,5S){W(B i=0;i<1r.U;i++){JU(1r[i],5S)}if(C.3m=="4x"){if(o.4x){o.4x.123(1r[0],5S)}}}};B K2=E(1e,1i){B i;B C=[];B w;B h;B bg;B 4C=H;B x0;B y0;B 3u=1;B 3r=1;B fK=0;B 9F=0;B 11D;B 3M;B pQ;B 4A;B 2x;B 3J;B zO;B zw;B vX;B zs;B 2B;B 2V;B 8R;B fL;B xu;o.Bz=-1;B qn;B 4A;B vS;W(i in gh.V){C[i]=gh.V[i]}B 1i=v[1e].1i;B 1J=v[1e].1J;W(i in gh[1i]){C[i]=gh[1i][i]}W(i in v[1e]){C[i]=v[1e][i]}C.w=2N(C.w);C.h=2N(C.h);C=4z(C,\'2M\',\'2M\');C=4z(C,\'ar\',\'ar\');if(o.9j){if(C.Kr>0){C.w=2N(C.Kr)}if(C.aV){if(C.aV!=\'0 0 0 0\'){C=4z(C,\'ar\',\'aV\')}}}B 1a=1O("1X");if(v.1w.K1==1&&v.1w.1p==1){o.1w.1M(1a)}F{o.1U.1M(1a)}1i=="2E"?o.9v=1a:\'\';B 8H=P;if(C.7V){if(C.7V!=\'1L\'){8H=H}}O(1a,{"1m":"2o","1f":0,"1c":0,"1B":1,"eS":"mY","nH":"iQ"});if(C.JY==1){1a.C.4S=C.5t}bq();B 9d=1O("1X");O(9d,{"1m":"2o","2J":2I.4a(-C.h/2),"1c":2I.4a(-C.w/2)});if(C.6P>0&&C.AO==1){O(9d,{"2R-6M":C.6P*C.h/2,"1d":C.h,"5l":"3c","4l-3b":"1S"})}if(2F(C.5c)){4i(1a,{"id":(v.id+"pH"+C.5c)})}1a.1M(9d);if(1i==\'2E\'&&v.z2==1){zU()}if(C.2B==1){qE()}B 92=1O("1X");hW(0,92,0.3,(C.4L==1?"3f-4L("+(C.yM==1?"to 1c,":\'\')+3A(C.JT)+", "+3A(C.pF)+")":3A(C.pF)),C.w,C.11E);if(C.JG==1&&K(C.qk)){B iX=1O("1X");iX.1R=C.qk.1T(/\\#JE/g,3A(C.pF));92.1M(iX);O(iX,{"1m":"2o","2J":-2I.4a(C.h/2),"1c":0,"4l-3b":"1S"});O(92,{"5l":"3c","2i":"1S"});B x=["9z","hf","pG","hH","e0"];W(B y=0;y<x.U;y++){B z=iX.yH("2g "+x[y]);if(z.U>0){W(B y2=0;y2<z.U;y2++){z[y2].C.5h=3A(C.pF)}}}}9d.1M(92);B 11F=[];B c7=1O("1X");hW(1,c7,C.Kh,(C.4L==1?"3f-4L("+(C.yM==1?"to 1c,":\'\')+3A(C.Kp)+", "+3A(C.Kl)+")":C.Kl),0,C.11G);9d.1M(c7);if(C.7l>0){B dU=1O("1X");hW(2,dU,C.Kd,C.11H,0,C.7l);9d.1M(dU)}B 7h=1O("1X");hW(3,7h,C.K6,(C.4L==1?"3f-4L("+(C.yM==1?"to 1c,":\'\')+3A(C.J8)+", "+3A(C.1t)+")":C.1t),0,C.a);if(C.JG==1&&K(C.qk)){B qh=1O("1X");qh.1R=C.qk.1T(/\\#JE/g,3A(C.1t));O(qh,{"1m":"2o","2J":-2I.4a(C.h/2),"1c":0,"4l-3b":"1S"});O(7h,{"5l":"3c","2i":"1S"});7h.1M(qh)}if(C.6c==1){B c4=1O("1X");C=4z(C,\'y5\',\'y5\');C=4z(C,\'zd\',\'zd\');O(c4,{"1m":"2o","2J":C.h/2,"1c":0,"4l-3b":"1S","3O-3P":C.Js*2q(v.7w,1),"1t":C.5R,"2E-1d":"100%","2Q-1f":C.11I,"2Q-2J":C.11J,"2Q-1c":C.11K,"2Q-2l":C.11L,"2M-1f":C.11M,"2M-2J":C.11C,"2M-1c":C.11N,"2M-2l":C.11P,"2R-6M":(C.KX+"px"),"2k":"1S"});if(C.KR==1){O(c4,{"2i":3A(C.KQ)})}7h.1M(c4);B kf=P;B 11Q=P}o.q6=C.h;9d.1M(7h);if(C.eF==1){B 2v=[];if(1P vI!=="1N"){B 9m=1y vI(1a,2v,w,C)}}if(C.3J==1){if(C.eu.6A().I(\'<2g\')==-1){C.eu==\'\'?C.eu="<2g 17=\'20\' 1d=\'20\'><g><e0 ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 5h=\'#eH\'/></g></2g>":\'\'}3J=1O("1X");3J.1R=C.eu.6A();C=4z(C,\'Az\',\'Az\');O(3J,{"1m":"2o","1f":-10+C.11R-C.11S,"1c":-2p,"4l-3b":"1S","1d":20,"17":C.fi,"1B":C.wz,"4F":"2K 0.1s 3f, 1B 0.1s 3f"});if(C.kk==1||C.wZ==1){O(3J,{"2K":"1Q(0)"})}F{if(C.pJ!=1){O(3J,{"2K":"1Q("+C.pJ+")"})}}if(C.11T==1){O(3J,{"6p":"11U-ak(41 41 cv 5p(0, 0, 0, .7))"})}1a.1M(3J);if(C.yv!=-1){B x=["9z","hH","e0"];W(B y=0;y<x.U;y++){B z=3J.yH("2g "+x[y]);if(z.U>0){W(B y2=0;y2<z.U;y2++){z[y2].C.5h=3A(C.yv)}}}}C.ha=3J.29}if(C.b8!=0){O(1a,{"2K":"q9("+C.b8+"xV)"})}if(C.3c==1){1p(1a);4C=P}if(1i=="1L"&&!8H){if(C.1p==1&&C.hN==1){o.hR=H;C.3c=H}F{o.hR=P}}C.b6=0;if(C.b8!=0){C.hV=2I.GG(C.b8);if(C.hV>45&&C.hV<135){C.b6=90}if(C.hV>11V&&C.hV<AL){C.b6=A2}}if(8H){C.7V?o[\'2E\'+\'4B\'+C.7V]=C.7V:\'\';w=C.w;C.7V=="5q"?6S(1,o.6i.6Y(-1)[0],"no"):\'\';if(C.7V=="yf"){B pv=v.1L;v.2h?(v.2h.1L?pv=v.2h.1L:\'\'):\'\';6S(pv,1,"no")}}E hW(n,x,y,z,AM,AQ){O(x,{"1m":"2o","2J":0,"1c":0,"17":AM,"1d":(C[\'h\'+n]>0?C[\'h\'+n]:C.h),"2i":z?(z.I("3f")>-1?z:3A(z)):\'\',"2R-6M":(C.AO==1?1:C.6P*C.h/2),"1B":AQ,"4l-3b":"1S","4F":"2K 0.2s 5g-in-4r"})}E bq(){bg=1O("1X");C=4z(C,\'gR\',\'gR\');B jj=C.h+C.9X+C.a4;B At=C.w+C.7z+C.7j;if(C.bg==1){}F{C.4u=0}C=4z(C,\'hv\',\'hv\');if(v.1w.hD==1||C.hD==1){C.4k=\'#qi\';C.bg=1;C.4u=0.5}O(bg,{"1m":"2o","1f":0,"1c":0,"17":At,"1d":jj*C.ya,"yb":(C.ql*jj)/2,"2i":4E(C.4k,C.4u),"9t":"2y","4F":"1B .1s 3f, 2i .1s 3f"});if(C.aa==1){O(bg,{\'kw-6p\':\'aa(aI)\'})}if(C.kQ==1){O(bg,{"2R":"41 6E #"+C.kP})}if(C.2x==1){if(C.kO==1){O(bg,{"6K":"4l"})}if(!o.1l.2m||v.cK==1){bg.gX=8m;bg.11W=vP;bg.11X=pS;bg.jw=eg}}F{O(bg,{"6K":"8b"})}if(!o.1l.2m){bg.jN=5Y;bg.jw=eg;bg.kp=5r}if(o.1l.yT&&C.2x==1){bg.1z("hb",E(1h){1h.6H=H;if(!K(1h.6D)&&1h.8a.U>0){1h.6D=1h.8a[0].ji;1h.9G=1h.8a[0].p9}qn=1h;5Y(1h);pS(1h)});bg.1z("h9",E(1h){1h.6H=H;o.3M=P;5r(1h);vP(qn)});bg.1z("2x",E(1h){1h.6H=H});bg.1z("cI",E(1h){if(!K(1h.6D)&&1h.8a.U>0){1h.6D=1h.8a[0].ji;1h.9G=1h.8a[0].p9}qn=1h;o.3M=H;eg(1h);if(o.1l.yT){pS(1h)}})}O(bg,{"1c":2I.yU(-C.w/2-C.7z)});O(bg,{"1f":2I.yU(-C.h/2-C.9X+C.Af-C.Ag)});if(C.Ak==1){zl(bg,C.4k,C.AS,C.Au)}1a.1M(bg)}E 2A(17){if(17!=w){w=17;o.w9=w;B ba=w/92.29;O(bg,{"17":(w+C.7z+C.7j),"1c":-w/2-C.7z,});O(9d,{"1c":-w/2});O(92,{"17":w});O(9d,{"17":w});B xx=c7.29*ba;if(xx>92.29){xx=92.29}O(c7,{"17":xx});B wp=7h.29*ba;O(7h,{"17":wp});kg(wp);if(1i=="2E"){Ec()}if(C.eF==1){9m?9m.xg(w):\'\'}if(o.6q){o.6q.2A()}}}E kg(x){if(C.3J==1){if(x<C.ha/2&&C.fi!=20){x=C.ha/2}if(x>w-C.ha/2&&C.fi!=20){x=w-C.ha/2}B y=x-w/2-C.ha/2+C.11Y-C.11Z;O(3J,{"1c":y})}}E x5(){O(3J,{"2K":"1Q("+C.pJ+")"})}E 5Y(1h){o.S.le(1e,"4A");if(C.bg==1){if(C.8X!=-1){B m=1y 5T({"mc":bg,"1J":"8A","to":C.8X,"1b":0.1,"me":(1e+"bg")})}if(2F(C.aF)){O(bg,{"2i-1t":C.aF})}}if(2F(C.wt)){O(7h,{"2i-1t":C.wt})}if(C.3J==1){if(C.Bu==1&&K(C.wx)){if(C.pT==1&&3M){}F{3J.1R="<2g 17=\'"+C.fi+"\' 1d=\'20\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'>"+C.wx.6A()+"</2g>"}}if(C.kk==1){if(C.wZ==1&&!o.1A){}F{x5()}}F{if(C.pL!=-1){B m2=1y 5T({"mc":3J,"1J":"8A","to":C.pL,"1b":0.1,"me":(1e+"3J")})}}}if(C.2B==1&&(o.R.1o()>0||1i=="1L"||8H)){jp()}if(C.fZ>0){O(bg,{"2K":"3r("+((C.fZ-1)/5+1)+")"});w0(C.fZ)}if(C.3J==1&&C.wW==1){kg(dq(1h.6D)-9F)}if(1i=="1L"){o.X.5y(H);o.5y=H}4A=H;o.eE=H}E w0(x){O(92,{"2K":"3r("+x+")"});O(c7,{"2K":"3r("+x+")"});dU?O(dU,{"2K":"3r("+x+")"}):\'\';O(7h,{"2K":"3r("+x+")"})}E 5r(){if(!pQ){if(C.7l>0){O(dU,{"17":0})}if(2F(C.wt)){O(7h,{"2i-1t":C.1t})}if(C.bg==1){if(C.8X!=-1){B m=1y 5T({"mc":bg,"1J":"8A","to":C.4u,"1b":0.1,"me":(1e+"bg")})}if(2F(C.aF)){O(bg,{"2i-1t":C.4k})}}if(C.3J==1){if(C.Bu==1&&K(C.wx)){if(C.pT==1&&3M){}F{3J.1R="<2g 17=\'"+C.fi+"\' 1d=\'20\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'>"+C.eu.6A()+"</2g>"}}if(C.kk==1){O(3J,{"2K":"1Q(0)"})}F{if(C.pL!=-1){B m2=1y 5T({"mc":3J,"1J":"8A","to":C.wz,"1b":0.1,"me":(1e+"3J")})}}}if(C.fZ>0){O(bg,{"2K":"3r(1)"});w0(1)}if(1i=="1L"&&!o.2e){o.X.5y(P);o.5y=P}o.S.le(1e,"4r")}if(C.eF==1&&9m){9m.4r()}if(C.2B==1&&(o.R.1o()>0||1i=="1L")){qD()}if(o.pZ&&1i=="2E"){o.th.1p();o.Bz=-1}4A=P;o.eE=P}E 8m(1h){1h.6H=H}E BC(1h){1h.6H=H}E vP(1h){if(1i=="1L"){if(o.9D){pQ=H;2P(vS);vS=1G(E(){pQ=P;5r()},2p)}}wM();o.3M=P;if(C.3J==1){if(C.pT==1&&K(C.vT)){3J.1R="<2g 17=\'20\' 1d=\'20\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'>"+C.eu.6A()+"</2g>"}}bY(1h.6D,1h.9G);o.S.g2(1e);o.S.gY(1h.6D,1h.9G);1h.6H=H}E pS(1h){3M=H;if(C.3J==1){if(C.pT==1&&K(C.vT)){3J.1R="<2g 17=\'20\' 1d=\'20\' 4j:4d=\'3L://4h.w3.47/7D/4d\' 4j=\'3L://4h.w3.47/4g/2g\'>"+C.vT.6A()+"</2g>"}}fK=kz(bg);9F=gj(bg);bY(1h.6D,1h.9G);6S(2x,1,"no")}E bY(ej,eo){B x;ej=dq(ej);eo=dq(eo);B BG=2I.5W(22.q4.bm,22.3S.bm);B BF=2I.5W(22.q4.er,22.3S.er);if(o.1l.2m){}F{eo=eo+BF;ej=ej+BG}if(C.b6>0){x=eo-fK-C.7j;2x=x/w;if(C.b6==A2){x=eo-fK-C.7z;2x=x/w;2x=(2x-1)*-1}}F{x=ej-9F-C.7z;2x=x/w;if(C.b8>134&&C.b8<11B){x=ej-9F-C.7j;2x=x/w;2x=(2x-1)*-1}}2x>1?2x=1:\'\';2x<0?2x=0:\'\'}E dq(x){if(o.aB>1){x=x/o.aB}J x}G.AX=E(){9m?9m.xg(w):\'\'};G.jL=E(){9m?9m.c0(w):\'\'};E wM(){3M=P}E eg(1h){9F=gj(bg);if(C.7l>0){if(o.1A||1i!=\'2E\'){O(dU,{"17":dq(1h.6D)-9F})}}if(C.2B==1&&(o.R.1o()>0||1i=="1L"||8H)){jp();fK=kz(bg);bY(1h.6D,1h.9G);if(1i=="2E"){if(v.10z==1){if(o.R.5A()&&o.R.bZ().I("?xl")>0){2V.1R=\'- \'+fH((1-2x)*o.R.1o(H))}F{2V.1R=fH(2x*o.R.1o())}}F{B d=o.R.1o();if(v.4O>0){d=d-v.4O*1}B 8v=\'\';if(C.eF==1&&9m){8v=9m.2B(2x*d);8v!=\'\'?8v=8v+\'<br>\':\'\'}2V.1R=8v+fH(2x*d)}}if(1i=="1L"||8H){2V.1R=y6(2x)}7K(1h)}if(o.pZ&&1i=="2E"&&o.th){xu=1h;if(!fL||v.B1!=1){xr()}if(v.B1==1){2P(fL);fL=1G(xr,50)}}if(C.3J==1&&C.wW==1){kg(dq(1h.6D)-9F)}}E xr(){2P(fL);fL=1N;if(C.2B==0){fK=kz(bg);9F=gj(bg);bY(1h.6D,1h.9G)}4A?o.th.b0(xu,w,2x,9F):\'\'}E 7K(1h,t,l){B 1c=(-w/2+(dq(1h.6D)+22.q4.bm-9F)-2V.29/2)+(l?l:0);B jt=0;if(v.yO!=1){if(1c+w/2+2V.29+10>o.2Y){jt=1c;1c=o.2Y-w/2-2V.29-10}if(1c+o.2Y/2<0){jt=1c;1c=-o.2Y/2}}B x={"1f":(-2V.2S-C.B3*1-C.pB-C.yn)-(C.B6==1?(C.h/2)*(C.fZ>0?C.fZ:1):0)+(t?t:0),"1c":1c};O(2B,x);if(C.h0==1){O(8R,{\'1m\':\'2o\',\'1c\':2V.29/2-4+(jt!=0?jt-1c:0),\'1f\':2V.2S-6})}}G.jp=E(e,x,t,l){jp();2V.1R=x;7K(e,t,l)};E jp(){if(!5D(2B)||2B.C.1B==0){1u(2B);O(2B,{"1B":1})}}G.qD=E(){qD()};E qD(){1p(2B);O(2B,{"1B":0})}G.c=E(){J 1a};G.s=E(1e){J C[1e]};G.ss=E(x,x2){J C[x][x2]};G.g=E(x){cw(x){1q"17":J w;1k;1q"Zy":J 92.29;1k;1q"1d":J C.h;1k;1q"x":J 5n(1a.C.1c);1k;1q"y":J 5n(1a.C.1f);1k;1q"1B":J 1a.C.1B?1a.C.1B:1;1k;1q"1u":J 4C;1k;1q"3u":J 3u;1k;1q"3r":J 3r;1k;1q"1i":J 1i;1k;1q"1e":J 1e;1k;1q"x0":J x0;1k;1q"y0":J y0;1k;1q"2x":J 2x;1k;1q"g9":J 8H;1k;8b:J P}};G.26=E(1e,x){cw(1e){1q"1u":4C=x;1k;1q"3M":3M=x;1k;1q"2k":1i=="2E"||C.1p==1?O(1a,{"5Z":(x?"4C":"3c")}):O(1a,{"2k":(x?"4n":"1S")});4C=x;1k;1q"3u":O(1a,{"2K":"3u("+x+")"});3u=x;1k;1q"3r":O(1a,{"2K":"3r("+x+")"});3r=x;1k;1q"1B":O(1a,{"1B":x});1k;1q"1c":O(1a,{"1c":x});1k;1q"1f":O(1a,{"1f":x});1k;1q"2x":2x=x;1k;1q"do":C.do=x;1k;1q"17":O(1a,{"17":x});1k;1q"1d":O(1a,{"1d":x});1k;1q"wG":C.10y=x;1k;1q"x":O(1a,{"1c":x});1k;1q"y":O(1a,{"1f":x});1k;1q"x0":x0=x;1k;1q"y0":y0=x;1k}};G.2A=E(x){2A(x)};G.oV=E(x){};G.fb=E(bf,bd){if(3M){if(1i=="1L"||8H){bY(bf,bd);o.S.g2(1e)}if(1i=="1L"){o.9D=H}bY(bf,bd);6S(2x,1,"no")}};G.gY=E(bf,bd){if(3M){wM();3M=P;bY(bf,bd);o.S.g2(1e);6S(2x,1,"no")}};E 6S(1b,1o,x){1b<0?1b=0:\'\';if(v.4O>0&&1o>1){1o=1o-v.4O;1b=1b-v.4O}if(C.3J==1&&C.wZ==1&&C.kk!=1){if(!C.Bi&&1b>0){x5();C.Bi=H}}if(3M&&1o!=1){}F{B 4H;if(1o>0&&1b>0){if(1b>1o){1b=1o}4H=w*(1b/1o);if(4H==7h.29){4H=-1}}F{4H=0}if(4H>=0){O(7h,{"17":4H});if(C.wW==1&&4A&&!x){}F{kg(4H)}}if(K(c4)){if(1o<2&&1i=="2E"){if(kf){3i(c4);kf=P}}F{if(!kf){5K(c4);kf=H}c4.1R=1i=="2E"?4J(1b==0?1o:1b):y6(1b)}}}};G.6S=E(1b,1o,x){if(1o!=zw||1b!=zs||x){6S(1b,1o,x)}};G.zX=E(){2x>1?2x=1:\'\';2x<0?2x=0:\'\';O(7h,{"17":(2x*w)})};G.zS=E(1b,1o){if(1o>0&&1b>0){B 4H=w*(1b/1o);4H>w?4H=w:\'\';O(c7,{"17":5n(4H)});zO=1o;vX=1b}F{vX=0;O(c7,{"17":0})}};G.kb=E(x){if(C.6q==1){if(!o.6q){if(x!=0){if(1P zP!=="1N"){o.6q=1y zP(1a,C,x);o.ax=H}}}F{if((!K(x)||x==0)&&o.ax){o.6q.1p();o.ax=P}F{if(!o.ax||(K(x)&&x!=1&&x!=0)){o.6q.vC(x);o.ax=H}}}}};E zU(){o.b0=1O("1X");O(o.b0,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':v.A0,\'1d\':v.zt,\'5l\':\'3c\',"4l-3b":"1S","2i-1t":"#gw","2R-6M":v.zT+\'px\',"2k":"1S"});o.b0.id="Z8"+v.id;if(v.zR==1){O(o.b0,{"2R":v.zM+"px 6E "+yc(\'1t\',v.zH)})}if(v.zK==1){O(o.b0,{"6f-ak":"fN 41 k7 5p(0,0,0,0.5)"})}o.b0.C.4S="jW";1a.1M(o.b0)}E qE(){2B=1O("1X");O(2B,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'1d\':\'2y\',"4l-3b":"1S","1B":0,"4F":"1B 0.1s 3f"});C=4z(C,\'jU\',\'jU\');2V=1O("1X");O(2V,{\'1m\':\'2o\',\'2Q-1c\':C.yI,\'2Q-2l\':C.BJ,\'2Q-1f\':C.pB,\'2Q-2J\':C.yn-1,\'1F-8N\':\'8P\',\'1t\':C.yr,\'3O-dz\':eQ(C.yx),\'3O-3P\':C.yA*2q(v.7w,1),\'kd-eZ\':C.xN+\'px\',\'2E-1d\':"1",\'2i-1t\':4E(C.ke,C.jA),\'2R-6M\':C.xQ});C.E9?C.h0=C.E9:\'\';if(C.h0==1){8R=1O("1X");8R.1R=\'<2g 17="aI" 1d="xT" xX="0 0 8 6" 8J="1.1" 4j="3L://4h.w3.47/4g/2g" 4j:4d="3L://4h.w3.47/7D/4d"><hf id="Ea" 3F="1S" 5h="\'+3A(C.ke)+\'" 5h-nO="Eb" 2v="0 0 8 0 4 6"></hf></2g>\'}1a.1M(2B);2B.1M(2V);if(C.h0==1){2B.1M(8R);O(8R,{\'1B\':C.jA})}2B.C.4S="2p"};E Ec(){if(o.3y&&v.cL==1&&!o.1A){B f=o.3y.9S();if(f.t&&f.d){6S(f.t,f.d)}}};E y6(x){B y=2I.4a(x*100);if(8H){if(o.jg){J(8H&&2F(C.2V)?C.2V+\'&dK;\':\'\')+3T(x*o.6i.6Y(-1)[0]).y9(1)}if(o.Ee){J(8H&&2F(C.2V)?C.2V+\'&dK;\':\'\')+o.yf}}J y};G.4q=E(){1a.3q(9d);if(bg){bg.gC("gX");bg.gC("jN");bg.gC("kp");bg.3W.3q(bg);bg=1Z}if(3J){1a.3q(3J)}if(1a.3W==o.1U){o.1U.3q(1a)}F{if(o.1w){if(1a.3W==o.1w){o.1w.3q(1a)}}}1a=1Z}};B vz=E(1f){B i;B C=[];B w;B h;B 4C=H;B 3u=1;B 3r=1;B x0=0;B y0=0;B aP=5M(nJ,Z9);B 1i,1e="bg";B 1J="Zb";if(1f==H){C["1m"]=\'1f\';C.h=2q(v.1w.Zc,50);C.a=2q(v.1w.Zd,0.5);C.1t=2q(v.1w.Ze,\'#gw\')}F{C["1m"]=v.1w.1m;W(B k in v.1w){if(v.1w.2u(k)){C[k]=v.1w[k]}}}if(C.1u==0){v.1w.h=C.h=0;C.2Q=C.2M="0 0 0 0";C.4L=0}C["1Q"]=1;C=4z(C,\'2M\',\'2M\');if(K(C.l5)){if(C.l5!=20&&C.2M=="-20 0 0 0"){C.8C=C.l5}}if(2F(C.Eo)&&o.9j){C=4z(C,\'2M\',\'Eo\')}if(C.Zf==1){C.4s+=\'%\';C.4o+=\'%\'}B 1a=1O("1X");if(C.aa==1&&C.4L==0){C.a<1?C.wy=C.a:C.wy=0.2;v.1w.a=C.a=1}F{C.aa=0}O(1a,{\'1m\':\'2o\',\'1c\':0,\'1f\':0,\'17\':(C.l6==1||1f?\'100%\':o.bA),\'1B\':C.a,\'4l-3b\':\'1S\',\'eS\':\'mY\',\'nH\':\'iQ\'});o.1U.1M(1a);B bg=1O("1X");O(bg,{\'1d\':C.h-(C.1m!=\'1f\'?C.dM+C.8C:0),\'2k\':\'4n\',\'2M-1c\':C.4s,\'2M-2l\':C.4o,\'2R-6M\':C.6P});if(C.lh>0){B lh=\'41 6E \'+4E(2q(C.Zg,\'3E\'),C.lh);if(C.Zh==1){O(bg,{\'2R-1f\':lh})}F{O(bg,{\'2R\':lh})}}1a.1M(bg);w=1a.29;v.dB=-C.8C;if(C.4L==1||1f){if((C.1t==\'46\'||v.1w.7X!=\'\')&&!1f){if(C.1m!=\'1f\'){v.dB=98-C.h}B 4m=\'2b:7X/wk;gv,Zi+Z7/T/D+Zj/Zl/Zm==\';if(v.1w.7X.I("2b:7X")>-1){4m=v.1w.7X}O(bg,{\'1d\':C.h+(C.1m!=\'1f\'?v.dB:0),\'2i\':\'18(\'+4m+\') gW-x 50% 100%\',\'2i-3P\':\'2y\'})}F{B gG=(1f?\'to 1f, \':\'to 2J, \')+4E(C.1t,0)+\', \'+4E(C.1t,1);O(bg,{\'2i\':\'-pn-3f-4L(\'+gG+\')\',\'2i\':\'-3Q-3f-4L(\'+gG+\')\',\'2i\':\'-ms-3f-4L(\'+gG+\')\',\'2i\':\'-o-3f-4L(\'+gG+\')\',\'2i\':\'3f-4L(\'+gG+\')\'})}}F{if(C.aa==1){O(1a,{\'kw-6p\':\'aa(aI)\'});O(bg,{\'1B\':C.wy})}O(bg,{\'2i-1t\':C.1t})}if(1f){O(1a,{"4F":"1B 0.2s 5g-4r"})}G.h=E(){J C.h-(C.1m!=\'1f\'?C.8C:0)};G.c=E(){J 1a};G.s=E(1e){J C[1e]};G.g=E(x){if(1a){cw(x){1q"w":1a.29>0?w=1a.29:\'\';J w;1k;1q"17":J 1a.29;1k;1q"1d":J 1a.2S;1k;1q"x":J 5n(1a.C.1c);1k;1q"y":J 5n(1a.C.1f);1k;1q"1B":J 1a.C.1B?1a.C.1B:1;1k;1q"1u":J 4C;1k;1q"3u":J 3u;1k;1q"3r":J 3r;1k;1q"1e":J 1e;1k;1q"x0":J x0;1k;1q"y0":J y0;1k;1q"aP":J 1e+aP;1k;8b:J P}}F{J P}};G.26=E(1e,x){cw(1e){1q"1u":4C=x;1k;1q"w":w=x;1k;1q"2k":O(1a,{"2k":(x&&v.vV!=1?"4n":"1S")});4C=x;1k;1q"1Q":O(1a,{"2K":"1Q("+x+")"});3u=x;3r=x;1k;1q"3u":O(1a,{"2K":"3u("+x+")"});3u=x;1k;1q"3r":O(1a,{"2K":"3r("+x+")"});3r=x;1k;1q"1B":O(1a,{"1B":x});1k;1q"1c":O(1a,{"1c":x});1k;1q"1f":O(1a,{"1f":x});1k;1q"17":O(1a,{"17":x});1k;1q"1d":O(1a,{"1d":x});1k;1q"x":O(1a,{"1c":x});1k;1q"y":O(1a,{"1f":x});1k;1q"x0":x0=x;1k;1q"y0":y0=x;1k}};G.4q=E(){o.1U.3q(1a);1a=1Z}};if(1P(2W)=="59"){DL()}o.G=G;if(2W.id){if(22.8S(2W.id)){wO()}F{22.1z(\'Zn\',g0)}}F{1P DE==\'E\'?DE():\'\'}E wO(){if(K(2W.id)){if(22.8S(2W.id)){if(!FW(22.8S(2W.id))||2W.4C==1){2W.Zo==1?1G(g0,50):g0()}F{1G(wO,50)}}}}E g0(){W(B i=0;i<5j.U;i++){if(K(5j[i])){if(5j[i].3z("id")==2W.id){if(5j[i].3z("7T")){5j[i].3z(\'2O\')}}F{if(v.Zp==1&&5j[i].3z("v","3n")==1){2W.3n=0}}}}5j.2L(o.G);B 2O=P;if(K(2W.3p)){W(B i=2;i<10;i++){if(2W.3p==i&&o[\'u\'+i]!=\'\'){v=9W(v,5u.7c(eR(o[\'u\'+i])));2O=H}}}if(o.u!=\'\'&&!2O){v=9W(v,(1P o.u!="3U"?5u.7c(eR(o.u)):o.u))}if(1P(Zq)!="E"){W(B 1e in 2W){if(2W.2u(1e)){if(1e.I("Eu")==0){2W[1e]=1Z}}}}v=9W(v,2W);o.1K=22.8S(v.id);if(v.k0==1&&v.Zr==1&&1P(wR)=="E"){xJ(o.1K,"Zs");if(!wR()){1V.22.1z("6O",wR)}}F{EZ()}}E EZ(){B wL=v.2j;if(v.Zt==1&&K(v.2j)&&K(wL)){v.2j!=\'\'?v.2j=wL:\'\'}if((!K(v.3G)||v.3G==\'\')&&v.Zu==1){1v(\'6r\');J}if(v.Fa==1||v.xs==1){1V.1z(\'8p\',E(1h){B x=1N;B y;K(1h.2b.1b)?x=1h.2b.1b:\'\';K(1h.2b.1L)?x=1h.2b.1L:\'\';K(1h.2b.Fd)?y=1h.2b.Fd:\'\';K(1h.2b.3z)?y=1h.2b.3z:\'\';if(y&&v.xy){if(v.xy!=\'\'){B pm=v.xy.1T(/\\s+/ig,\'\').2z(\',\');if(pm.I(y)==-1){J}}}if(v.xs==1){if(1P(F9)=="E"){F9(1h)}}if(y&&o.8F){if(K(1h.2b.26)){x=1h.2b.26}B z=3x(y,x);1V.ac.o6({1h:y,Zv:z},\'*\')}})}W(B 1e in o.g1){if(o.g1.2u(1e)){o.g1[1e]!=\'\'?o.kN+=o.g1[1e]+\' \':\'\'}}1v(o.8J+\' \'+o.kN);eU=v.id;o.d=8y.xo;o.hs=8y.Zk;if(!v.4T&&7F([o.hs],\'#1E-\')){v.4T=o.hs.1n(o.hs.I(\'#1E-\')+6)}if(ac){B nU=P;3o{if(ac){if(ac.22){B o3=ac.22.a3("EU");W(B i=0;i<o3.U;i++){if(o3[i].hF===1V){o.8U=o3[i];o.o0=H;v.Ex!=1?O(o.8U,{"2R":"1S"}):\'\';o.Ey=o.8U.C;1v("eX")}}}F{nU=H}}}2U(dZ){nU=H}if(nU){o.o0=H;1v("Z5-hO")}}o.o0&&22.nn?o.hO=22.nn.2z(\'/\')[2]:\'\';!o.EC?ED():\'\';if(1P(EE)=="E"){if(EE()){J}}o.8F=H;EQ();B ET=1y 6T();if(ET.YS()==20){if(5M(1,20)==10&&v.Z4!=0){vM(o.vE,o.vE);1G(E(){if(1V.ga){ga(\'fM\',\'UA-YH-6\',\'2y\',{\'6G\':\'6J\',\'YI\':H});ga(\'YJ\',\'Cq\');ga(\'Cq:YK\',[o.d]);ga(\'6J.b5\',\'1h\',{CA:\'nT\',CB:\'g0\',CE:o.d})}},j2)}}if(v.ga==1&&v.CF!=1){if(1P BP==\'E\'){o.ga=1y BP()}}if(!o.1K){v.1v=1;1v(\'id "\'+v.id+\'" fn pC\');J P}o.1K.1R=\'\';O(o.1K,{\'2Q\':0,\'YL-eZ\':\'h1\'});o.91=o.1K.2S;o.9a=o.1K.29;if(K(v.i0)&&!K(v.5f)){if(K(v.i0.5f)){v.5f=v.i0.5f}if(K(v.i0.nc)){v.nc=v.i0.nc}}if(o.1K.C.17.I("%")>-1){o.YM=o.1K.C.17}if(v.5f=="6Z"||o.1K.C.1d.I("%")>-1){v.5f="%";o.ob=o.1K.C.1d;o.91=0}if(o.9a==0){if(o.1K.C.17.I("px")>0){o.9a=2N(o.1K.C.17)}F{if(o.1K.3W.C.17.I("px")>0){o.9a=2N(o.1K.3W.C.17)}F{if(o.1K.3W.3W.C.17.I("px")>0){o.9a=2N(o.1K.3W.3W.C.17)}}}}if(6t(v.5f).I("x")>0){o.5f=v.5f.2z("x")[0]/v.5f.2z("x")[1];if(o.91==0){o.91=o.9a/o.5f}}F{o.5f=0}O(o.1K,{\'1m\':\'eP\',\'6f-k5\':\'xR-6f\',\'1F-8N\':\'1c\',\'-3Q-xH-eM\':\'1S\',\'y8\':eQ(\'na-n9\'),\'9L-1d\':15,\'eS\':14*2q(v.7w,1),\'2E-1d\':\'iQ\',\'Dy\':\'Dz\',\'1t-BS\':\'1S\'});if(v.ak==1){O(o.1K,{\'6f-ak\':\' 0 BX YN 5p(50,50,93,.1), 0 k7 BX 5p(0,0,0,.YO)\'})}if(o.5f>0){O(o.1K,{\'1d\':o.91})}F{O(o.1K,{\'1d\':o.91==0?o.ob:o.91})}if(o.9a==0){O(o.1K,{\'17\':\'100%\'})}o.1U=1O("1X");O(o.1U,{\'1m\':\'2o\',\'6f-k5\':\'xR-6f\',\'7p\':v.n5,\'1t\':\'#3E\',\'17\':\'100%\',\'1d\':\'100%\',\'1c\':0,\'1f\':0,\'eS\':\'mY\',\'2E-1d\':\'iQ\'});if(v.yO!=1){o.1U.C.5l=\'3c\'}if(v.YP==1){o.1U.C.7p=\'eG\'}o.O=22.1O(\'C\');o.O.1J=\'1F/O\';o.1U.1M(o.O);o.1U.6o("id",\'YQ\'+v.id);n4(1);if(1V.Cc){B Dd=1y Cc(E(e){if(e[0].yX.U>0){W(B i=0;i<e[0].yX.U;i++){if(e[0].yX[i]==o.1U){vW()}}}});Dd.YG(o.1K,{YR:H})}o.e8=1O(\'eX\');4i(o.e8,{"id":"Dj"+v.id,"Di":"no","1I":"Dj"+v.id,"Dc":"H","Ds":"H","Dt-n0":"H"});O(o.e8,{\'1m\':\'2o\',\'17\':\'100%\',\'1d\':\'100%\',\'2R\':0,\'4l-3b\':\'1S\'});if(v.2R==1){if(v.YU==1){O(o.e8,{"6f-ak":"fN fN fN "+v.yK+"px "+v.8q+" YV",\'4S\':2})}F{O(o.1K,{\'2R\':v.yK+\'px 6E \'+v.8q})}}if(!22.YW(\'.yC\')){B 1C="";if(v.Dw==1){W(B i=1;i<4;i++){if(2F(v[\'1t\'+i])){1C+=\'--YX\'+i+\':\'+3A(v[\'1t\'+i])+\';\'}}}fJ("4Q, 4Q > *{-3Q-YY-5Z: 3c;1m: nd;1f: 2y;1c: 2y;5l:4C;Dy:Dz!6k;5W-17:1S!6k;e2-1i: YZ;2K-Z0: 8P 8P;6f-k5:xR-6f!6k;-3Q-CM-CN-1t: 5p(0,0,0,0);-3Q-CM-CN-1t: eG;1F-Z1:0!6k;"+1C+"} 4Q 4m{5W-17:1S} 4Q > *:6m{Z2: 1S} 4Q,4Q a,4Q a:Z3,4Q a:Zw,4Q a:ho,4Q a:cZ,4Q a:6m{1t:#eH;3O-3P:100%;}4Q eX{2R:0}4Q eX{2k:4n!6k;5W-1d:1S!6k;2i:eG}.yC{}4Q 2g{2M:0}");o.1U.6o(\'Z6\',\'yC\')}o.1U.1M(o.e8);o.1K.Zx=E ZZ(e){o.nq++;if(o.nq==5){v.1v=1;1v(o.8J+\' \'+o.kN+\' \'+o.kD)}if(!e)B e=1V.1h;e.6H=H;if(e.bB)e.bB();B x=e.ji-gj(o.1U);B y=e.p9-kz(o.1U);if(v.10b==1){if(K(v.ny)){if(4D(v.ny)!=\'\'){o.yh=v.ny;K(v.D4)?o.ht=v.D4:\'\';v.ny==\'1S\'?o.ht=o.d:\'\'}}}wq(x,y);J P};E wq(x,y){if(o.ht.I(o.d)==-1||v.D5==1||v.51==1){if(!K(o.51)){!v.nl?v.nl="46":\'\';!v.wS?v.wS="3E":\'\';o.51=1O(\'1X\');B 1C;B n=0;W(B i=0;i<10;i++){if((v[\'rm\'+i]==1&&v.51==1)||i==9){if((K(v[\'rm\'+i+\'t\'])&&K(v[\'rm\'+i+\'a\'])||i==9)){1C=1O("ym");if(i==9){if(v.10c!=1){1C.yo=o.yh+(v.D6==1?" "+o.8J:\'\')}F{1k}}F{1C.yo=v[\'rm\'+i+\'t\']}if(i!=9){if(v[\'rm\'+i+\'a\'].I(",0/1")>-1||v[\'rm\'+i+\'a\'].I(",1/0")>-1){B z=v[\'rm\'+i+\'a\'].2z(\',\');1C.yo+=\' (\'+(3x(z[0].1n(4))==1?2T(\'on\'):2T(\'6Z\'))+\')\'}if(v[\'rm\'+i+\'a\'].I("2Z")==0){o.gs=H;!o.2Z?o.S.CS():\'\'}}1C.6o("i",i);Fj(1C);1C.1z("2x",C5);o.51.1M(1C);n++}}}O(o.51,{"1F-2K":"10d","2E-1d":"1","bv-96":"dI","2i":4E(v.nl,0.7)});if(n>1){O(o.51,{"2Q":"k7"})}o.51.C.4S="10e";o.51.jw=Cj;o.1U.1M(o.51)}F{5K(o.51)}O(o.51,{"1m":"2o","1f":y,"1c":x,"1F-8N":"1c"});B yR=P;if(o.2Y-x<o.51.29-20&&v.yO!=1){O(o.51,{"1c":x-o.51.29});yR=H}if(v.10f==1||yR){O(o.51,{"1F-8N":"2l"})}o.Cp=x;o.Cm=y;2P(o.nr);o.nr=1G(E(){3i(o.51)},4g)}}E Cj(){2P(o.nr);o.nr=1G(E(){3i(o.51)},4g)}E C5(e){B i=e.3Z.6w("i");B y;B xb=P;if(i>0){if(i==9){o.ht!=\'\'?1V.3j(o.ht):\'\'}F{B x=v[\'rm\'+i+\'a\'];if(x){if(x.I("3z:")==0){if(x.I(",0/1")>-1||x.I(",1/0")>-1){B z=x.2z(\',\');B b=o.S.zk(x,"3m");B u=3x(z[0].1n(4),z[1],b);js(z,u);wo();wq(o.Cp,o.Cm);xb=H}F{y=x.2z(",");3x(y[0].1n(4),(K(y[1])?y[1]:1Z))}}if(x.I("2Z:")==0&&o.2Z){o.2Z.3z(x.1n(6))}if(x.I("js:")==0){y=x.2z(",");2n(y[0].1n(3)+\'(\'+(K(y[1])?\'"\'+y[1]+\'"\':\'\')+(K(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}if(x.I("18:")==0){x=x.1T(/\\(18\\)/g,CK());x=x.1T(/\\(10g\\)/g,EG(K(v.EA)?v.EA:22.nn));x=x.1T(/\\(1I\\)/g,o.cX);x=x.1T(/\\(7P\\)/g,v.7P);1V.3j(x.1n(4))}}}!xb?3i(o.51):\'\'}}E Fj(x){O(x,{"2Q":"Fi k7","3O-3P":(v.F8?v.F8:"55")*2q(v.7w,1)+"%","kd-eZ":"0.10h","1B":0.9,"1t":v.wS});x.1z("fF",EW);x.1z("fE",Et)}E EW(e){O(e.3Z,{"1B":1});O(e.3Z,{"2i":4E(v.nl,0.5)})}E Et(e){O(e.3Z,{"1B":0.9});O(e.3Z,{"2i":"1S"})}o.1l=1y E0();if(o.1l.5w){B vU=(v.DZ==1?\'*::-3Q-R-S-1A-10i-oa {2k: 1S!6k;-3Q-xc: 1S;}\':\'\');if(v.om==1&&v.DV!=1&&(v.DS!=1||!o.1l.7Q)&&(v.DP!=1||!o.1l.jo)){}F{if(o.1l.5w&&v.hu==1){}F{vU+=\'gy::-3Q-R-S {2k:1S !6k;}*::-3Q-R-S-10j {2k: 1S!6k;-3Q-xc: 1S;}*::--3Q-R-S-1E-oa {2k: 1S!6k;-3Q-xc: 1S;}\'}}B 1C=22.1O(\'C\');1C.1J=\'1F/O\';1C.1M(22.DH(vU));o.1U.1M(1C)}if(o.1l.DG){v.3n==1&&v.10k==1?v.3n=0:\'\'}if(o.5f==0){if(o.1U.2S==15&&!o.ob&&v.BK>0){O(o.1K,{"1d":v.BK})}}if(K(v.jz)){v.Y.dv=v.jz}if(K(v.p8)){v.Y.oS=v.p8}if(K(v.1A)){o.2f=v.1A}if(K(1V.Fm)&&v.10a==1){1V.Fm(fW)}F{fW()}}E fW(){1v("fW");o.X=1y DQ();if(!v.3G){v.3G="?"}if(v.pl){v.3G=v.pl+o.dT}o.10l=p4();o.Eh=0;o.5z=wn();if(o.5z){if(3d.4y("w5")!=1Z){o.wb=3d.4y("w5")}F{o.wb=p4();3d.7J("w5",o.wb)}if(v.w6==1){if(3d.4y("zn")!=1Z){o.56=3d.4y("zn");if(2F(v.cP)){if(v.cP.I(o.56)>-1){o.56=1Z}}}}if(v.En==1){if(3d.4y("yV")!=1Z){v.b3=3d.4y("yV")}}W(B i=0;i<o.cM.U;i++){if(v[\'Ej\'+o.cM[i]]==1){if(3d.4y("Eg"+o.cM[i])!=1Z){}F{v[o.cM[i]+\'s\']=0}}}7L("10n");7L("10o")}o.9N=o.9y.1n(o.9y.I("://")+3);if(o.9N.I("#")>0){o.9N=o.9N.1n(0,o.9N.I("#"))}if(o.5z&&v.cL==1){o.3y=1y Ed()}if(v.k0==1){o.5Z=v.10p;xJ(o.1K,"5Z",H)}v.h8==1&&v.k0==1?o.h8=1y 10q():\'\';v.ab==1?10r():\'\';if(v.10s==1){o.d5=1y 10t();o.d5.bE()}o.R=1y zJ(v.3G);if(!o.1l.2m||v.cK==1){o.1U.1z("10u",E(){o.5i=H;o.oT=H;o.S?o.S.zV():\'\'});o.1U.1z("10v",E(e){if(!o.3M){if(v.1w.9C>0){2P(o.Bh);o.Bh=1G(E(){if(o.5i!=o.oT){o.5i=o.oT;o.S.wF()}},v.1w.9C*2p)}F{o.5i=P}o.oT=P;if(o.S){o.S.oV()}}})}if(!o.1l.2m){o.1U.1z("Bb",E(e){if(!o.hx){o.3M=H}});o.1U.1z("a5",E(e){if(!o.hx){o.3M=P;if(!o.5y){o.9D=P;o.dY=P}if(o.1l.e2&&o.1l.cK&&o.2e){1G(E(){o.5i=P;o.S.wF()},42)}1G(E(){o.6m=H},42);if(o.1l.2m&&o.S.oR()){}F{o.S?o.S.gY(e.6D,e.9G):\'\'}if(v.gF==1){if(o.S.cJ()){o.S.7R()}}}});o.1U.1z("xj",E(e){if(!o.hx){if(K(o.S)){if(o.3M){o.S.fb(e.6D,e.9G)}F{o.S.yW()}}}})}if(o.1l.2m){1V.1z("10w",KO,P)}v.x8==1&&1P B4==\'E\'?o.x8=1y B4():\'\';o.3K.1z("hb",E(e){if(e.8a){o.gU=e.8a.U}o.3M=H;o.5i=H;o.oX=P;oW("1A",e)},{e3:H});o.3K.1z("cI",E(e){if(e.8a){o.gU=e.8a.U;if(o.gU>1){o.xm=1}}if(o.3M){o.oX=H;oW("10x",e)}},{e3:H});o.3K.1z("h9",E(e){o.3M=P;1G(E(){o.5i=P},42);if(v.pb==1){B hw=1y 6T().8D();if(hw-o.9x<(v.iA?v.iA:0.3)*2p){ou(e)}}!o.oX&&o.gU<2&&o.xm!=1?gz(e):\'\';o.oX=P;o.gU=0;if(e.8a.U==0){o.gU=0;o.xm=0}oW("4v",e)},{e3:H});3o{1V.22.1z("a5",E(e){o.6m=P;if(!o.5y){o.9D=P;o.dY=P}if(o.3M&&o.S){o.3M=P;o.S.gY(e.6D,e.9G);o.S.oV()}if(!o.5i&&!o.1l.2m&&!o.1l.tv){o.S.bw();if(o.3e){o.3e.aw()}o.S.AY()}})}2U(dZ){}1V.22.1z("xj",E(e){o.S&&o.3M?o.S.fb(e.6D,e.9G):\'\'});if(!o.1l.tv){o.1U.1z("hb",E(e){o.hx=H;o.1l.2m=H;o.e2=H;o.3M=H},{e3:H});o.1U.1z("h9",E(e){o.e2=P;o.3M=P},{e3:H});1V.22.1z("cI",E(e){if(o.S&&o.e2){o.S.fb(e.8a[0].ji,e.8a[0].p9)}},{e3:H})}1V.22.1z("10m",E(e){B x=e.3Z.g7.p1();if(x==\'w1\'||x==\'Bm\'||x==\'Bv\'){J}F{o.S?o.S.Bk(e):\'\'}});1V.22.1z("ZY",E(e){B x=e.3Z.g7.p1();if(x==\'w1\'||x==\'Bm\'||x==\'1X\'||x==\'Bv\'){J}F{o.S?o.S.Bq(e):\'\'}});if(o.8U){wg(ac.22,KW)}wg(22,L3);E wg(x,z){B y=[\'\',\'pn\',\'3Q\',\'ms\',\'ZL\'];if(x){W(B i=0;i<y.U;i++){x.1z(y[i]+(i<y.U-1?"ZX":\'\'),z,P)}}}if(!K(o.e8.hF)){1v("ZA");J}F{o.e8.hF.1z(\'4Y\',oi,H)}if(!o.1l.2m){o.3K.1z("2x",E(e){!o.hx?gz(e):\'\'},P);if(v.oq==1&&v.pb==1){o.3K.1z("A4",ou,P)}}og();if(v.4x){v.4x.on==1?o.4x=1y ZB():\'\'}v.5P==1?o.5P=1y ZC():\'\';v.g5==1?o.g5=1y ZD():\'\';o.S=1y yP();if(v.d8.A9){o.py=v.d8.A8}aC();bp();if(o.5z){if(v.zo==1&&v.1L!=0&&!o.1l.2m){if(3d.4y("zi")!=1Z){v.1L=3d.4y("zi")}if(3d.4y("ja")==1&&v.pu==1){v.5B=1}}if(v.A6==1){B sp=3d.4y("As");if(K(sp)){if(sp.I(\'.\')>0&&o.jg){o.X.9H(sp,1)}F{if(o.6i){B pt=7F(o.6i,sp,H);if(pt!=-1&&o.S.Ah(\'5q\')){o.aj=pt;o.R.9H(o.6i[pt])}o.S.AH()}}}}B xM=P;if(v.xW==1){W(B j=0;j<o.de.U;j++){if(3d.4y("po"+o.de[j])!=1Z){v[o.de[j]]=3d.4y("po"+o.de[j]);xM=H}}}if(o.1l.2m){if(!xM){v.xL&&v.xL>-1?v.eB=v.xL:\'\'}if(K(v.Av)){v.pk=v.Av;2F(v.AF)?v.pc=v.AF:\'\'}}}if(o.3y){B f=o.3y.9S();if(f.t&&f.d){o.S.dS(f.t,f.d);o.S.3Y(f.t,f.d);v.1o=f.d}}o.X.4c(v.1L);if(v.5B==1){o.X.5m();o.S.4P()}if(K(v.AD)){3x("5q",v.AD)}o.ay=1y yt();if(v.6P>0){if(v.gF==1||o.cY<120){O(o.1K,{"2R-6M":(v.6P+"px")});O(o.1U,{"2R-6M":(v.6P+"px")})}F{Fn()}}if(K(v.6N)){yk("6N")}if(K(v.gD)){yk("gD")}if(K(o.Y)){js("Y")}if(v.8I==1&&v.ZE==1){o.X.pg()}W(B i=2;i<10;i++){if(K(v["dL"+i])){if(v["dL"+i]=="2m"&&o.1l.2m){3x("dL",i)}}}1G(oi,42,H);1G(E(){js("8F");if(v.4e){if(1P v.4e==\'E\'){v.4e=v.4e.6G};2n(v.4e+(v.4e.I(\'()\')==-1?\'("\'+v.id+\'")\':\'\'))}},1)}E gz(e){if(o.yG[o.3K]>2){J}o.pf=H;v.iA==0?v.pb=1:\'\';if(o.ol&&v.e6==1&&!o.1l.tv){ou(e)}F{B t=(v.iA?v.iA:0.35)*2p;od();2P(o.JN);o.JN=1G(E(){o.cQ=0},t+4w);if(v.pb==1||(v.oq==0&&v.1W.ot!=1)){z4()}F{o.ol=1G(z4,t)}}o.cQ++;i6()}E z4(){od();if(o.1l.2m){if(o.S.oR()){o.S.yW();if(o.3I&&v.oz==1){o.X.6F();v.oz=0}if(v.ZF!=1){J}}if(o.j9){if(v.JR==1&&v.ZG==1&&o.1l.aU){J}if(v.hu==1&&v.ZH==1&&o.1l.5w){J}}}if(o.cQ>1&&v.1W.ot==1){o.cQ=0;J}o.cQ=0;if(v.e6==1){o.1l.2m&&v.ZI==1?\'\':o.X.gz()}}E ou(e){od();B y=P;if(v.1W.ot==1){if(e){if(v.1W.ZJ==1&&!o.1l.2m){}F{B x;if(o.1l.2m){x=e.Zz;if(!x){if(e.Ke){x=e.Ke[0].ji-gj(o.1U)}}}F{x=e.ZK}if(o.aB>1){x=x/o.aB}if(x){if(x<o.2Y/2){if(x<o.2Y*20/100){3x("4f","-"+2q(v.1W.Kc,10)*o.cQ);v.1W.2X==1&&v.1W.Jh==1?7q(\'4f\',0):\'\';y=H}}F{if(x>o.2Y-o.2Y*20/100){3x("4f","+"+2q(v.1W.Kc,10)*o.cQ);v.1W.2X==1&&v.1W.Jh==1?7q(\'4f\',1):\'\';y=H}}if(y){if(e.bB)e.bB()}}}}}if(!y){if(v.oq==1){if(v.om==1&&o.1l.2m){}F{o.2e?o.X.8L():o.X.9w()}}}}E od(){2P(o.ol);o.ol=1N}E oi(x){if(o.Jg!=o.1U.29){x?o.Jg=o.1U.29:\'\';oi()}F{bp()}}E bp(){B y=P;if(o.bA!=o.1U.29||o.cY!=o.1U.2S){y=H}og();o.S?o.S.4Y():\'\';o.R.4Y();y&&!o.2e?js("4Y",o.bA+\',\'+o.cY):\'\'}E og(){B xw=o.1U.29;B xh=o.1U.2S;if(o.S){if(v.xe==1){if(v.Y.1m!="2J"){B x=o.S.cW("J7")+o.S.cW("1f")+5+o.S.cW("Jd")+2q(v.ZM,0);O(o.1K,{"1d":x})}}}if(o.5f>0&&!o.2e&&!o.dQ){xh=xw/o.5f+2q(v.xE,0);O(o.1K,{"1d":xh})}if(!o.2e&&!o.dQ&&!o.bC){o.bA=2I.4a(xw);o.cY=2I.4a(xh)}if(o.1l.2m&&o.2e&&v.wK==1&&c8.dl){if(o.5f>0){if(o.5f<1||o.R.9k()<1){B sp=c8.dl.wQ(\'Gw\');if(sp!==1N){sp.d2(E(){}).2U(E(e){})}}F{B sp=c8.dl.wQ(\'zh\');if(sp!==1N){sp.d2(E(){}).2U(E(e){})}}}F{B sp=c8.dl.wQ(\'zh\');if(sp!==1N){sp.d2(E(){}).2U(E(e){})}}}o.2Y=xw;o.4p=xh;if(K(v.1I)&&o.S){v.1I!=\'\'?o.S.Lo():\'\'}if(K(o.kx)){o.R.1Q(o.kx)}if(o.2a&&!o.2e){o.2a.2A()}o.3e?o.3e.2A():\'\';o.d5?o.d5.2A():\'\';o.5P?o.5P.3z(\'4Y\'):\'\';o.d1?o.d1.2A():\'\'}E aC(){o.X.oO(v);W(B x in v){if(v.2u(x)){if(x.I("1I")==0){if(v[x]!=\'\'){o.wY=v[x];o.X.aC(x)}}}}o.g5?o.g5.Lj():\'\'}E a7(18,1K,1Q){if(18){if(18!=\'\'){if(v.cT==1){18=cT(18)}if(1K==o.2j&&18==o.yS){}F{if(18.I("#"+v.an)==0){18=o[o.fd[0]](18)}if(18.I("#0")==0){18=cN(18)}18=xS(18);if(K(v.Li)&&18.I("//")==-1){18=v.Li+18}B s="wN";if(1Q=="5h"){s="Lf"}if(1Q=="1S"){s="2y"}if(1Q=="Ld"){s="100% 100%"}if(18.I(\' g8 \')>0&&1K==o.2j){o.kv=18.2z(\' g8 \');3R(o.wA);o.wA=7e(Kv,2q(v.ZN,2)*2p);o.gQ=0;18=o.kv[0]}18=18.1T(/ or /g,\'"),18("\');18=18.1T(/\\s/g,\'%20\');if(v.ZO==1&&7F([18],\'.KF\')){B 1C=\'6J\'+v.id+\'ZP\';1K.1R=\'<gy id="\'+1C+\'" 3h="\'+18+\'" 9f=1 kc=1 3n=1 3I=1 C="17:100%"></gy>\';o.gx=22.8S(1C)}F{o.gx=1N;1K.1R=\'\';O(1K,{\'2i-7X\':\'18("\'+18+\'")\',\'2i-gW\':\'no-gW\',\'2i-1m\':\'8P\',\'2i-3P\':s})}1u(1K);1K==o.2j?o.yS=18:\'\'}}}};E Kv(){if(K(o.kv)&&K(o.gQ)){o.gQ++;if(o.gQ>=o.kv.U){o.gQ=0}a7(o.kv[o.gQ],o.2j,v.gP)}}E ZQ(x){if(x.on==1&&K(x.3h)){x.3h=xS(x.3h);B y=1O("1X");if(x.3h.I("3L")>-1||x.3h.I("//")==0){B z=1O("4m");z.3h=x.3h;y.1M(z)}x=9W(x,v.L5);x=4z(x,\'2M\',\'2M\');O(y,{\'1m\':\'2o\'});if(x.1m.I("2J")>-1){O(y,{\'2J\':x.dM})}if(x.1m.I("2l")>-1){O(y,{\'2l\':x.4o})}if(x.1m.I("1f")>-1){O(y,{\'1f\':x.8C})}if(x.1m.I("1c")>-1){O(y,{\'1c\':x.4s})}o.1K.1M(y)}};E L3(){if(o.2e&&!x9()){o.X.yg(H);o.1l.ff?bp():\'\'}F{if(o.dQ||o.5i){x9()?o.2e=H:\'\';o.X.yE()}}1v("2e",o.2e)}E KW(){if(v.k0==1){xJ(o.1K,"5Z",H)}}E ZR(){1v("dl "+c8.dl.oA)}E KO(){if(2I.GG(1V.dl)===90){1v("zh");if(v.GJ==1){B ok=H;if(v.GC==1&&!o.1A){ok=P}if(v.Gt==1&&!o.1E){ok=P}if(o.9n){ok=P}if(o.2a){ok=H}!o.2e&&ok?o.X.9w():\'\'}}F{1v("Gw");if(v.GJ==1){o.2e&&v.wK!=1?o.X.8L():\'\'}}}E x9(x){!x?x=22:\'\';B y=P;3o{y=!!(x.ZS||x.ZT||x.ZU||x.ZV||(x.ZW!=1N))}2U(e){y=P}J y}E FW(x){J x.29==0&&x.2S==0};E vW(){W(B x in o){if(x.I("Gh")>-1){3R(o[x])}if(x.I("vK")>-1){2P(o[x])}}1v("Vc")}}', 62, 4297, '|||||||||||||||||||||||||||||||||||||var|style||function|else|this|true|indexOf|return|exist||||css|false||media|controls||length|but|for|actions|playlist|||||||||width|url||control|time|left|height|key|top|pjstg|event|action|settings|break|system|position|substr|duration|hide|case|icon||color|show|log|toolbar||new|addEventListener|start|opacity|tmp|playlist_dic|play|text|setTimeout|hls|title|type|container|volume|appendChild|undefined|createElement|typeof|scale|innerHTML|none|replace|frame|window|hotkey|div|faction|null|||document||||set||subtitle|offsetWidth|vast|data|subs||fullscreen|seekto|svg|pip|background|poster|display|right|mobile|eval|absolute|1000|existv|error||file_type|hasOwnProperty|points|vasturl|click|auto|split|Resize|tip|open_action|sub|line|exist2|files_quality|Play|Math|bottom|transform|push|margin|parseInt|stop|clearTimeout|padding|border|offsetHeight|Lang|catch|tiptext|options|icons|screen_w|share|||||||||||plid|events|hidden|localStorage|droplist|linear|_type|src|hide2|open|files_subtitle|Pause|linkurl|autoplay|try|player|removeChild|scaleY||media2|scaleX|current_quality|current_subtitle|apiProcessor|continue|api|CheckColor|list|rows|sbt|ffffff|stroke|file|floatleft|muted|handle|mediacontainer|http|mouseDown|mediascale|font|size|webkit|clearInterval|body|parseFloat|object|urls|parentNode|dash|Duration|target||1px|500|Seek|||000000|org|||round|vasttype|Volume|xlink|ready|seek|2000|www|attr|xmlns|bgcolor|pointer|img|block|marginright|screen_h|Remove|out|marginleft|files|bga|end|200|chromecast|getItem|MarginPadding|over|_|visible|trim|hex2rgb|transition|values|_to|obj|Time||gradient|ShowOrHide|pause|delete|refresh|pjsdiv|preload|zIndex|plstart|youtube|settings2|tagvideo|custom|resize|xhr||rightmenu||_from|is_hls||default_quality|||string|empty|folder|dom|f2title|Action|aspect|ease|fill|mouseHere|pljssglobal|subtitle_on|overflow|Mute|int|casting|rgba|speed|onOut||order|JSON|quality|ios|canvas|volumewheel|storage|isLive|mute|m_to|isVisible|valuefontsize|butPosition|menuproc|f2value|vastloader|vast_loaders|show2|removeEventListener|random|arr_up|onError|effects|live|valuecolor|clr|Motion|shuffle|arr_down|max|m_type|onOver|visibility|||f2action||||||||Hls|_value|value|dechar|airplay|box|SetQuality|animation|files_speed|plx|important|ftitle|focus|keys|setAttribute|filter|cut|remove|vast_|String|UpdateText|UpdatePlaylist|getAttribute|iset|srch|captions|toString|is_dash|evntclk|clientX|solid|Unmute|name|cancelBubble|File|pjs|cursor|charAt|radius|midroll|scroll|rounding|levels|hlsconfig|UpdatePlay|Date|minutes|dash_created|status|intro|slice|off|||||||||||activeiconsize|next|parse|control2|setInterval|download|safari|line3|okpd|bgpaddingright|redirect|aover|span|motions|Object|backgroundColor|PluginHotIcon|skip|Events|current_audiotrack|files_audiotrack|FindBut|globalfs|preroll|ended|bgpaddingleft|pjs_parent|state|obj2|1999|vast_and|indOf|tips|ioff|cuid|setItem|Tip|SettingsTimers|seconds|navigator|bg2|label|iphone|Settings|toolbarHidden|playing|playedstore|customline|StopWaiting|image|f2i|current_url|||||||||||touches|default|audiotrack|waiting|com|always|channels|val|_url|buffered|Toggle|realfullscreen|onClick|Advertising|paused|message|bordercolor|hours|floor|layer|is_sleep|add|isVastBgLoad|lastwheel|location|ShowPoster|alpha_div|Update|margintop|getTime|metadata|init|timer|_cul|pass|version|VAST|Normalscreen|reload|align|onEnded|center|plhistory|tipcrn|getElementById|Value|parentIframe|fvalue|_show|bgaover|HLS|apiprm||container_h|line0||info||space||||container_w|SetSubtitle|ctx|lines|xbg|loop|opid|arrowsize|vast_or|small|ratio|Waiting|pnt|ispipkit|gif|dur|area|hlsquality|txt|pointerEvents|icn|timeline|Fullscreen|clicktime|href|path|customtext|stretch_width|hideleavetimeout|hidden_volume_over|is_ws|leftBg|clientY|SetSpeed|ll1I|sub_off|pipwebkit|min|onWaiting|href2|track|loading|ResizeText|preventDefault|flag|dropbgcolor|plopenid|all|UpdateObject|bgpaddingtop|bitrate|ncrtat|files_quality_ag|concat|Arrows|getElementsByTagName|bgpaddingbottom|mouseup|actionstt|Poster|Sub|reloadTimer|blur||parent||fbg|loaded|End|onDuration|control_|current_speed|shadow|hls_subs|wait|enc2|bgbrovr|lIll|fltrs|marginproc|nativecontrols||destroy|HideControl|Close|cutted|alert|HlsLevelsLength|curtain|fzoom|Title|vimeo|hls_created|bgcolorover|onPlay|tag|8px|_cstm|Status|butplstart|upld|iconscolor|f2id|motion_id|bgl|evntout|scrollbgcolor|onMouseUp|android|mrgnprs|replay|evntovr|unmute|SubtitleChanged|thumb|||default_audio|Retimer|send|vertical|pld|rotation|gaTracker|delta|_hide|max_h|stage_y||stage_x||console|m3u|Switcher|||scrollLeft|PlaylistNext|_css2|MainResize|Background||buffer|but_x|media_error|white|SettingsClose|noads||audiotracks|normal_w|stopPropagation|fullscreen_process|Stop|Start|charCodeAt|bgtop|_keyStr|id_|00|deltaY|hls_config|Clickable|inline|playById|volumewheelin|ShowOrHideProcessor|CustomSwitch|pause_before_vast|ldr|search|browser|tlbrhd|currentTime|CalculateClick|currentFile|update||||line3value|Array|min_h|line1|screen|pjs_i|cubic|||reloadto|StyleItem||playbgcolor|onload|Remove2|_speed||title2|open_settings|CreateItem||native|audioTracks|https|400|||3px|switch|||source|hlsaudio|VastRemoveAndPlay|line_width|PlaylistNextExist|lang|enc3|but2|linecap|touchmove|SettingsVisible|desktop|timestore|vsts|fd0|skpbt|forbidden_quality|clicks|qualities|Playlist|fplace|sttx|vast_loadtxt|PlaylistG|titlestore|normal_h|active|DashLevelsLength|rec|then|salt|but_space|quiz|onTimeupdate|toolbar_hide|control_title|sec|forcehide|gao|_rb||sub_options|onMeta|icns|pjs_id|fontnames|||orientation||l1lI|hiddenwidth|shuffle_|Zoomed|file3_separator|10px||Scale|autoplaylist|prev|MediaReady|pauseroll|family|vast_longtimeout|toolbar_margintop|PlaylistPrev|stout|but_y|floatwidth|plfolder|vast_impressions|nowrap|_start|nbsp|design|marginbottom|hidejustfull|300|PlayerState|fullscreen_start|or0|Played|pltxt|line2|ScrollTo|brightness|SetAudioTrack|hidden_volume_over_process|err|ellipse|onVolume|touch|passive|sub_shift|iconsover|screenclick|onPause|frameresize|channel|mediapip|is_visible|CloseOpenList||responseText|_lastime|onMove|files_|toend|event_x|pljsplayfrom_||||event_y|err404v|played|scrollTop|fontsize|file2|handleicon||speed1||tagframe|weight|CreateHLS|sub_bottom|Pos0|ll1l|controlover|pointed|transparent|fff|UpdateTime|cow|qbr2|Home|select|dropcolor|NewFile|relative|checkFont|decode|fontSize|ActionPlaylist|pljssglobalid|PipWebkit|coh|iframe|items|spacing|Subtitle|XHR||mediaSession|subupld|scaleover|toggle|HidePoster|Reload|hdicon||StageMove|VastRecover||seeking_time||rldcnt|Airplay|handle_width|HideInterval|showovercontrol||settingsovertimer|not|autoLevelCapping|||starttimeout||||stretch_with_volume|upldfl|20px|readyState||subtitle_start|control_line|plNxtExst|opn|mouseout|mouseover|sub_settings_on|timeFormat|RemoveCurtain|pushCSS|topBg|thmove|create|0px|flip|FindPlStart|alpha|_status|C13|loading_error|bgt|pic|Ready|vast_poster|posterhide|expand|Init|compilation|ControlClick|overopentimeout|rightbs|mediatags|SubtitleSettingsMenu|tagName|and|cul||load|AfterVast|hls_force|setSpeed|url_shift|_ease|default_style|actplay|findLeft|HideForce|showoverto||sub_or|_id|_preloaded|videoHeight|Curtain|shareme|hideonpause|textTracks|base64|000|pstrv|video|ScreenClick|autohide|ToolbarDown|removeAttribute|overlay|Pnt0|hidevideo|bgg|groupId|classList|VastAddPreload|casturl|nativeAudioTrack|abc|f2bg|PlaylistPrevExist|poster_scale|pstrsi|bgpadding|rightside|PlaylistExist|tchs|hdnn|repeat|onclick|StageMouseUp|HideProof|tippointer|normal||texts|ObjectFit|BgClr|hlsDashSub|Il1l|minify|touchend|handlewidth|touchstart|butNames||playbgcolored|polygon|current||_step|nomute|justshow|hlsdrm|headfontsize|NativeEnterFs|link||600|maxBufferLength||brandurl|nativefullios|clickmargin|now|touched|historytitlea|autoQuality|errorto|kbps|FileTo|clickarea|floatheight|contentWindow|hlsautoquality|rect|file2_separator|chrome|UpdateSpeed|_prevIcon|sourceBuffer|hideoutmute|domain|hlsend_to|historybga|hidden_volume|marginprocleft|custom_speed|StyleArrow|rotation2|StyleLine|wheelstep|PlaylistControls|VstLdTxt|playersize|hlschangequality|Rot|iosfull|uijs|limitmaxwidth|JsClk|yamtrid|hls_stuck_time|SubtitleLoad|ScrollOverOut|fcdef|sxs|||||Error||downin|prm||currentLevel||float|htto|tipbg|details|||clicked|seekwindow|removed|recover|saturate||dclckto|scrollarrows|_max_order|galabels|frag|xtitle|CustomText|ni2|tmln|Parsed|_activeIcon|scrollleft|gatracked|cftlr|onSeeking|seeking|1em|hlsrows|onSeeked|srt|QualityChangedNoHand|_ended|AirplayChanged|svg0|TimeSub|normalscale|ctxtnk|PlaylistVisible|3000|pjs_|iconangle|speeds|Off|TipText|iconreplay|nativefull|pljsmute|BufferStop|hidetimeout|unshift|SubtitleLoad2|PlaylistShow|line_speed|_t|pageX|bgh|indOf2|YtInit|hidewithoutmoving|qbr1|ipad|ShowTip|TagPlay|stty||left0|childNodes|scl|onmousemove|_seekaftervast|m3ut|autonext|tipbga|jpg|mode|SetSetting|dontplay|errorMessage|_play_i|va2l|paddingright|Ctxt|parentcontainer|RenewPoints|ErrorOr|onmouseover|onplay|created|RenewSubtitle|gain|ShowForce|hmaxk|tippadding|url2|999|Drop|pl_first_id|pointscontrol|observer|pldur|||days|sizing|resizePlaylist|5px|swipev|ymax|ResizeSettings|Cut|playsinline|letter|tipbgcolor|l3v_show|HandleWidth|file_separator|heartbeat|_wait|handlehide|toolbarInterval|win|PluginSub|midrolls|onmouseout|subload|Show||heartbeatInterval|ssfontsize|pstrs|backdrop|custom_aspect|ctx2|findTop|tmpbg|mpi|memory|playerid|Thumbs|RenameQualities|airplayed|Download|SettingsN|shift|FltrVal|HistoryPlaylist|volumescroll|compilations|hand|bgbordercolor|bgborder|ToolbarShow|result|NativeControls|sub_color2|OpenList|sub_sizeproc|pip_quality|sub_color|wheel|vast_longtomsg|FindDrop|pljsplayed_|open_pl|playlist_source|paddingtop|stretchonfullscreen|shr|bottomside|letterspacing|canvas2|lrpd|VastNext||Mouse|offsetLeft||brd||audioTrack|vol|KeyPlusDown|poster_a|imgldd|bgtmp|CreateShare|scrollarrowcolor|showinterval|linkurl2|||fit|floatlimitwidth|videoWidth|PlaylistHere|poster_aover|tpp|PlaylistRewind|but_h|StopMedia|tipalways|userseek|KeyPlusUp|covervideo|code|resizeonwidth|limitwidth|scrollarrowsize|nops|getDASH|isvg|mediaSource|hidevar2|newfile|isTypeSupported|BeforeVast|BgBrAct|wheelinterval|wght|mini|hideuntilto|MenuProc|wtcntrl|||||loadLevel|hidevar|ssflyp|autoprevopenfolder|showtitleplaylist|openplaylistroot|_icon||StyleActive||num|openplaylistbefore|picture|rldplay|isNaN|stretch_width_last||onClickSubtitle|AudioTrackChangedNoHand|SettingChanged|PipSize|AudioContext|||CreateDASH|isPlaying|UpdateVars0|resizeSettings|openById|iconscolorover|UpdateVars|getHLS|dvrtime|audiosrc|fid|scrollwidth|autonextopenfolder|ResizePlaylist|setaction|seeked|icon2|vastfrombg|_lastactbut|apdr|write|valuefromlang|iclr|wait_to|clr_options|HlsUpdateAudio|unmuteplease|bgcontainer|subopt1|suboptns|HlsLevel|14px|current_file|scripts|copyObject|close|playroll|datetime|screencolor|thumbnails|C11|timeld|serif|sans|rld|changeheight|static|vars|quartile|youtube_id|drtn||playVideo|YouTubeIframeAPIReady|rmbgcolor|setActionHandler|referrer||gifed|rightclick|rightout|StringVar|ShowLayer|container_id|C15|while||rc_label|response|gaTrackPlay|_readyonplay|vast_type|VastAndLimit|VastBgLoad|VastLoader|Load|lineHeight|ima|100000|find|pauserollonplay|vstpause|resizeonplay|rule|postroll|worked|done|adsfirst|Player|exception|fspr|navigationUI|full|OpenScroll|nhs|iniframe|subdrag|NativeExitFs|frames|_fullscreen_end|VolumeWheelX|postMessage|MidrollOverlay|VastVisible|333333|button|container_h_procent|HidePoster2|ClearClick|sub_shadow||MainUpdateSize|hdicon2|FrameResizer|sub_bga||click_t|nativecontrolsmobile|||sub_weight|doubleclick||sub_bgcolor|seeksides|DoubleClick|2px|parsed|cu2|700|unmuteonclick|angle|998|onStep|_steps|historybgcolor|decoration|scrollHeight|FindOpenIds|offsettimer|bgbract|opera|pjspl|mtp|PluginPlSrch|TitleTemplate|pointa|alldd|ToolbarHidden|playlistrewind|mouseHere2|omt|StageLeave|Touch|mouseMove|started|eventstracker|subsor|toLowerCase||Start0|randomstr|playlist_title|quality_received|vastonmobile|playlistloop|pageY|ssa|click0timeout|sub_size_fullscreen||lang_|acted|Password|sub2|sub_all|yaCounter|sub_size|||moz|pljs||SubtitleOff|||spd|mutestore||||title_template|lastIndexOf|SubtitleError|tippaddingtop|found|urls_and|Ended|colorbg|polyline|_control_|YoutubeReady|handlescale|restart_audio|handleaover|sub_upload|IconsColor|72532408|_stopped|mouseUp|hideAllIcons|onDown|handleiconspress|isReplay|SwitchText|script|filerorto|PlaylistError|thumbs_on|240p|||360p|documentElement|files_channel|timeline_h|prefile|youtu|rotate|YoutubeID|FileType|dashquality|RemoveMedia|marginbg|getQuality|480p|svg3|ff0000|rename_audio|customdesignsvg|bgo|fileTimeout|lastTouch|Recover|1080p|720p|edge|timerTime||noclick|resizetxt|fatal|timeshort|plurls|CustomToogle|lngth|ksu|stuck|HideTip|CreateTip|remember_sub|current_plurl|match|hlserror|show_settings|cnt|LoadedData|ass|toggleControl|urlsl|heightInterval|cpm|WaitSize|sub_store|FileReader|historytitlestrike|toolbarhidden|SubUpload|MseIsSupported|historycolor|SubtitleLoadAll|History|||tem|pljssubtitle|show_playlist|onDash|onTagError|HlsSleep|playedstored|sub_upload0|StartSpeed|pldur3|pldur2||Captions|drawImage|sstext|ssfontcolor|urlcnfg|submm|prototype||piped|vtt|sleep_timeout|Alpha|_timeout|ahd|_stop||butseekto|SubtitleParse|||MediaYoutube|onWheel|resizetimeout|playiconbut|onPipEnter|nohead|contentDocument|borderbottom|overed|maxMaxBufferLength|paddingleft|sub_stroke|xy00|mediadrag|RadioTags|tagsurl|sub_reset|sub_x|bg_hide|Out|Text|Style|leftandrightpadding|sleeptimer|playerjscom|HlsSleep0|dontload|livewakeup|||||but_w|Place|is_hls2|nohls|CheckDash|96189913|sub_font|PluginMovable|head_|CreatePoster||pipto|onPipLeave||network||ShowNextList|other|xvalue|bggrclr||SubRem|floatmarginright|||dash_subs||||SetSubtitle2|playerjs_|Empty|order0|mutedautoplay|_rights|_move_rights|activeicon|lastsub|Preload|scrollbar|rename|sepia|TheEnd|sub_bgpadding|NxtExt|nativeControls|iOSTrackLoaded|CheckPip|VolumeWheel|advertising|m3ui|vastcontainer|VisibleItems|PlaylistLoad|v360|ErrorReload|overlays|VastVideo||||||vastgo|VastGo|enabled|VastCheckNext|exitfullscreen||reloadtimeout|adsinchain|webkitRequestFullScreen|pp2|requestFullscreen||_tags|settimer|requestFullScreen|mozRequestFullScreen|setQuality|volumewheelfull|||msRequestFullscreen|ErrorMsg|deltaX||fullblack||reloadfirst|SubtitleTimerMenu|_recover|tagSrc|checknative|pjs_parent_i|vstdwn|plcontinue|PlayerSize|NewAspect|IndexPlaylistProcessor|vastclick|gained|vast_starts|midrollo|IndexPlaylist|vast_midroll_limit|stopotherplayers|pstr_to|ChangePip|End2|End3|splice|RemoveForNextAd|ie9|moveOr2end|vast_preload|onerror|VastPreloadLoad|mdswp||offsetTop||||||||||audioctx|VastPreloaded|fts|vts||Heartbeat|fjs||isAuto|autoplaymute|introstart|span05|_css|getAudioTrack||spn|insertBefore|_hlssubtracks|SetCurrentQuality|startwait_t|PJSDIV|3600|renameTracks|removebykey|NativeSubtitle|HlsAudioTrack|fromCharCode|onYtPlayerReady|hlsSub|logout|cntrls|getDuration|timerInterval|subtitles|poster_float|Playing|nativesub|ytautoquality|removeTracks|HlsAudioTracks|destroyed|clientWidth|posteronpause|_set_quality|pauseVideo|posterhidepause|getVideoData|scrpt|Seeked|play25|nextLevel|160p|StartTimeout||subpausehide|onYoutubeReady|_blank|play50|start2|play75|Menuproc|Metadata|reloadlog|fileorto|Shuffle|CreateWS|MediaSess|2160p|last||pepper|1440p|encoded|chr|stringify|C14|embed|C12|Prefile|utx|hls_started|ws_created|Hide|5017903||outro|ControlsBg|postsmbl|ReplayIcon|restart|ll11|gaurl|QualityChanged|bggr|SpeedChanged|PluginPoints|SubOpt|timeout|NoSpan|Script|resizeonmouse|PlaylistPlayId|onUp|resizeme|startcss|onup_to|handleiconpress|ioscss|nocontrols|Destroy|_time_load|downi|iconopacity|LineScale|input|||minw|pljsuserid|qualitystore|UpText|quick|timeline_w||userid|UpdateStart|Places|2001|SetCSS|FSL|playlistovertimer|ControlOut|updatePlaylist|png|toolbarisdown|Loaded|StorageSupport|reRightMenu||RightMenu|lastt||coloroverplay|Rotate|||handleiconover|blra|handlea|pstrsin|leftright|TipHide|Marquee|addtitleplaylistbr|Review|over_final|ActionOptions|addtitleplaylist|_i|landfullmobile|pstr|EndMove|contain|VisibleCheck|upload|lock|InitVisible|rmcolor|ontouchmove|onClick2|tmp2|handlemove|stopkeys|maintitle|handlehideinit||||||ShowHandle|clck|join|geo|isFullscreen|_currentIcon|dont|appearance|updown|change2playlist|l1ll|place||UpdateVolume|mousemove|resizeFromText|DVR|tchs2|last_text_w|hostname|fonts|onMobOver|Thumb2|pjsframed|pjslng|movevent||||postmessages|onMobMove|bordercolored|StyleSubtitle|smbls|presmbl|screenmarginbottom|killMotion|exist2v|user|upText|Visibility|ShowShare|sub_bottommob|substore|tipletterspacing|customTextPl|CustomTextButs|tipbgrounding|content|checkBase64|6px|marginbgcolor|deg|sub_designstore|viewBox|CloseSttx|ClosePl||||||valuepadding|TipVol|btm|fontFamily|toFixed|clickscaley|borderRadius|SettingsParser|TitlePl|resizetext|volume2|NormalscreenUI|brand||removeItem|str2obj|settingsNumberVisible|div2|tippaddingbottom|innerText|sleep2|hidetime|tipcolor|marginbgpadding|Alert|fixed|handlecolor|Action2|tipfont||ctxt|tipfontsize|JsEvent|pjscssed|effect|FullscreenUI|stvs|moving|querySelectorAll|tippaddingleft|Visible|bordersize|re_y|grdlft|bgcolorlink2|notofh|Controls|doctype|tmpr|currentposter|mobtch|ceil|pljstrack|StageMove2|removedNodes|linkurl0|ClickArea|||thumbs|hideuntilstarted|ScreenClick2|imageLoaded|marquee|hdbrdclr|noprevicon|youtubeposter|arrinterval|ControlCoordinate|Loading|valuemargin|firstly|HidePositionControl|ToolbarHide|landscape|pljsvolume|scrollarrowbgcolor|butByS|Bglines|scrollarrowbg|pljsquality|volumestore|check|control_start|hideonplay|_time_play|thumb_height|geobj||_duration_play|Open|0638991||FindFileInPlaylist|sfjs|PluginRec|getContext|9390991|HidePoster3|plapto|thumb_bordercolor|apto|Media|thumb_shadow|StopOtherPlayer|thumb_borderwidth|ShuffleEnd|_duration_load|PluginCut|after|thumb_border|UpdateLoad|thumb_radius|CreateThumb|StageOver|comment|UpdatePlaySeek|9211241|6327241|thumb_width|4877241|270|livets|dblclick|sub_off0|speedstore|RenameTracks|template|templated|skipads|Papi41|SetChannel||720|clickmargintop|clickmarginbottom|SettingsExist|360|640|bglines|C10|1800|ffect|1550|1150|900|540p|pljsspeed|bgw|bgline2|sub_sizemob|analytics|TszQTsGa|Timer|handlemargin|yaHit|crt|ParseUrl|default_speed|reachGoal|sub_sizemobfull|rand|SettingsSpeed|PlayerjsEvents|pjsfrm|GGAyakRA|315|_w|dashaudio|roundout|removeNativeSubtitle|_a|nativeSubtitle|bgline1|pipSrc|8215241|access|alerts|PlacePoints|closePl|subshift|norld|thumb_move|time2|linetipmarginbottom|PluginGeo|denied|toptip|alert404text|isyoutube|youtubeready|swipep|mousedown|Swiping|swiping|hidewithoutplaylist|incorrect||leavetimeout2|handleinit|alert404|KeyUp|playId|textarea|playByYoutubeId|VastBreak|ChkHlsEnd|KeyDown|PluginPip|updateCuid|posterhidestart|handleiconsover|pjsin|last_subtitle|tagsinterval|alert404v|current_thumb|setVolume|onPlayTag|CancelBubble|recovery|ReloadTimeout|yOffset|xOffset|PluginErrorVideo|alert404video|tippaddingright|playerheight|posterhidetime|endfull|GET|nomidroll|PluginOldGA|parentElement|reloadlive|scheme|alertsfontsize|alertsbga|yamtr|alertspaddingh|15px|XMLHttpRequest|seeked_time|alertspaddingv|redirectonclick|ENDED|||RightClick|||||alertscolor|alertsbgcolor|MutationObserver|redirectonplay|fullonplaymobile|MarPad|passontime||8345227|RightMove|intros|PostFullscreen|right_y|Qualities|onQualityChanged|right_x|linker|yterrors|rgb|TheEnd2|customyterror|finishrewind|styleSheet|keyframes|_html|openpl|eventCategory|eventAction|writePl|playedquartile|eventLabel|ga4|Quartile|PluginTrack|fullonplay|resume|Href|ytcl|tap|highlight|offset|arial|youtubecontrols|getBoundingClientRect|CrShr|globalfontname|iframe_api|scrollX|HideLayer|outside|ffdd1f|pljs_yt_|nonzero|61928677|sugar|774328|rc_labelurl|rc_anyway|rc_version|_ue|224|url3|0454574|adblock|allowfullscreen|obsrvr|PLAYING|onYtPlayerStateChange|PlayingChecker|heartbeatinterval|scrolling|pjsfrrs|Exit|4959714|PluginThumbs|autoplayed||7378707|trcka|Youtube|allowtransparency|allow|reverse|InvertPlaylist|clrs|666666|direction|ltr|playsinlineonmobile|fs_error|Scripted|default_subtitle|PluginReplace|last_ors|mobiletv|createTextNode|dasherror|preloaded|api_|optStr|andlimit|FindIdPl|VastInfo|nativenotipad|Actions|VastLongTimeout|nativenotiphone|wrapper|vast_prestarttimeout|nativenotios|seekTo|vast_adid|vast_longtimemsg|hidestartbutios|System|isVpaid|helvetica|lI1l|ovr|8361812|sub_off_title|sub_allmyt|limit|linetippointer|Rectangle|evenodd|Continue|TimeStore|line_volume2|I1lI|pljsfirst|sesstime|vpaid_starts|vast_nofirst|Start00|60588467|shwvstfnsh|trackstore|mrgnsmll|adscounter|playlist_id|timestorejustbut|menu|RightOut|rc_|notag|frmvst|notframe|parentIframe_style|zoom|parent_domain|unset|prted|prtObj|PjsFr|toLocaleTimeString|encodeURIComponent|msExitFullscreen|full_minutes|webkitCancelFullScreen|mozCancelFullScreen|cancelFullscreen|exitFullscreen|cancelFullScreen|getPlayerState|iosExitFullscreen|CustomFonts|whlskfll|scrollwheelfull|today|IFRAME|full_hours|RightOver|rest|14130702|Init2|mss|Playerjs|current_vast_url|midrollimprsd|pjslog|rel|nameofyoutubequality|minduration|rmsize|PjsFrMsg|postmessage|head|PluginIntro|method|timelimited|timelimit|timebreak|ct2|4px|RightCSS|Stopped|gtag|requestAnimationFrame|PluginRounding|lineh|icon3|_reset|nextAutoLevel|rszr|svgtmln|rotateplaying|picheight|fontsizesmall|bold|playlistfolder|scroll_left|scroll_down|Gain|935|ontouchstart|onMouseDown|unblock|startLoad|hideafter|hidebefore|hidebefore2|bandwidth|often|often2|um1|liketext|PluginHdIcon|togglesubs|PjsCheck360|ShowTimeout|nums|height_div|width_div|isHidden|Number|plusminus|which|keyCode|autoLevelEnabled|ffeeab|inversetime|Control|second|minute|action2|opposite|scalesmall|gainedsource|hlscaptions|hour|connect|volumegain|showById|topside|Interval|Click|firefox|MetaAudio|msie|_subfile|nopause||unpause|selectOpen|rotateonhover|wrong|lsfullplay|hideafterclick|bgcolorlink0|portrait|show1value|tipmargin|tipvar|onLoadStart|cstm|lsfullstart|loadSource|HlsLiveWaiting|livewakeuptime|abs|ListsWidthRight|language|landscapefull|setupx|sourceBufferValidAPI|openplaylistafter|openplaylistpause|hlsmaxlvl|Hideuntilto|hlslowquality|audioGroupIds|clickscalex|nameofhlsquality|renameQualities|onMobOut|HlsQualityLevels|mobileover|changeAspect|_xIcon|mimeCodec|iconmargin|bgstretch|ga_event|Width|MediaSource|5000|onLoadedData|pressed|through|hidecontrol|UpdateSettings|supported||ArrowsInterval|NewPl|resize2|ScrollLeft|always2|006|valuealign|ScrollRight|ScrollUp|ScrollDown|ControlsBgClick|sort|alwaysnotfullscreen|PluginShare|alwaysjustpause|width100|hideoverwidth|hideoverwidthlimit|leavepictureinpicture|scrollarrowbgovercolor|hideonwidth|enterpictureinpicture|hideonwidthlimit|durationchange|hideaftersec||upTexts|customText|hidebeforesec|sttr|pipVol|normalscreen|back|muteiconbut|userpause|linkpause|userplay|unmuteonplay|screenshot|actpause|offsetwrite|1001|marginprocbottom|ssflyw|linktarget|plclose|PlaylistBack|marginprocright|titlepl|showShare|lrppp|lrpps|ControlX|marginproctop|volumechange|loadedmetadata|webkitSetPresentationMode|Volumescrolled|playonhover|setHlsAudioTrack|upd|PluginMbps|onClickSubtitle2|wtpstr_to|pstrwt|SubtitleSettingsClose|WaitPoster|HideElement|posteronwait|onClickTimer2|hls2|UpdateTimer|Exist|PreNewPl|prenewpl|PlaylistOpenId|setHlsQuality|setTracks|PlaylistMove|18px|setDashAudioTrack|setDashQuality|leavetimeout|setting|hidebeforesec2|PluginSkip|scrollarrowbgover|scrollarrowgradient|hideonvar|timeupdate|40px|hidewovar|hideonfullscreen|_nextIcon|hideuntilmeta|elastic|unfixing|str|hideonvolume|brda|headbordercolor|ShowControl|showing|HideAnimate|addTrack|ShowAnimate|apdra|Ease|SubtitleSettings|subtitleTrack|hlsTextTracks|SourceBuffer|debug|PipSwitch|iconsreplay|FileTimeout|filetod|scroll_height|gradientcolor|preloadhls|Timeout|isSupported|displayvolume|margin_bottom|movable|nativehlsios|screen_lw|seekicon|reYT|m3u8|Tmln|PipToggle|preloaddash|dashjs|mpd|Wheel|93409913|pointw|valuesize|40000|PlayerjsAsync|hlsfto|hlsmto|prevorius_default_w|pointcolor|hlsquality_off|hlsdebug|hlsvastwait|reHls|hlsaudio_off|FFFFFF|prevorius_default_h|customdesign|fileto|PluginDash|translate|220|current_time|DownIn|click_t2|HdIcon|setcss|controlCSS|nativefulldroid|nxtttl|gradientcolorbg|SvgColor|MediaVideo|High|ControlOver|ontop|SubtitleBottom|sub_split2words|hidedown|ControlLine|menufltr|hidewithposter|audio|linespeed3|disableRemotePlayback|7px|sub_bgo|framei|PlgnVstPstr|seeksidesec|linespeed2|changedTouches|sub_lineheight|playerjs|linespeed1|anonymous|PlgnVstLdtx|sub_big_fullscreen|colorload|Buffer|noindex|hdiconlist|gradientcolorload|textstyle|wps|together|notv|noClickTimeout|Posters|yamtr_event|pjsframe|my3|PjsFramed|_ud|PlgHlsFdt|YouTube|imageExists|callback|mp4|hls_stuck_duration|dvr|smallfontsize|DtXWan48Lq9neNd|floatwidthsmall|control_duration|DisplayControl|dropfontsize|OrientationChange|maxTouchPoints|valuebgcolor|valuebg|FlussonicMsePlayer|maxresdefault|ListsWidth|MSIE|ParentFS|valuerounding|action_settings|Yandex||unhidden|50032408|FullscreenChange||logo|hidesec||iset2|dropsmallfontsize|CreateMedia|zoomed|slng|stretch|minus4back|cover|2464991|25712408|preposter|read|with_hours|sub_bg|dropclrs|PluginDroplist|updateTitle|Playback|device|with_min|hlscookies|customBuffer|RenewFromTitle|floatheightsmall|html5|playsinlineonmobileiphone|reloaderTimer|ytReady|222222|957|clr_contrast|iv_load_policy|9485553|youtube_iframe_api||readAsText|contrast|PluginSubword|clr_brightness|onStateChange|sub_fonted|275|kl58qx5r2qtq|clone|clr_saturate|onPlaybackQualityChange|883|thumbs_img|postertitleonhover|disablekb|36980425|API|playerapiid|setioff||PAUSED|files_scale|playerVars|videoId|888888|992|ytcl1|files_sleep|historybgaover|857|ytlog|ytEnded|enablejsapi|onReady|onYouTubeIframeAPIReady|yttitle|999999|296|modestbranding|372|914|79351404|current_sleep|9753595|google|432|10176229|showinfo|WEBVTT|BUFFERING|dropscrlw|wrYndutVwvB0fKYmDGeNc250zLBQfNI6AHpXfqd|HsmKFHYdz3BXMK4|wjXjcuJ0euJZd3piM2mVaZw6wkwjzqxiM3FQc24jCjxTbLamwjXjevmXaGw6wOFmfvEjzqxPMK5lwkPYzqxkcumkbZw6AGXjaN9VevBQfNIjCksZzqxUMLxObK4jCjwXwrohAqoYAqwTwNsjCjwYwjXjbumlaGw6AGXjbumlaK9VeN9lwkPYzqxNc250wkPjELxQMKXjzqx0bLojCksTwOFQdvFmfvEjCjxdeHo0AKadeHo0BrpdeHo0BuadeHo0A2BdeHo0A2JdeHo0AnlhLvIXBrFlLvIXBrE0LvIXBrA4LvIXBrEXwjXjM2YQM2UidNJiwkPYgGXjM29VevxWct9neu9XwkQ7wN9ZauJZwkPYBGXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|setPlaybackQuality|stripsspace|unMute|wjXjMKB0bK9VwkPjd2J0eumVa3AjzqxXc3BQeumWcjw6wNBWcOFZc2YnzLxQa2i0wjXjcKtZa2mVwkPjAqo3wrohAqwTwOF5duIjCjxneNdjzqxnM2tTaGw6wksjzqx0bLojCksTwOFQduxOdN91cNFQcNdjCkATwNtVbK1ieumWcjw6wOpWd2m0bK9VwjXjMNdjCksTwNxOdutlaumVaZw6wkIhBZo1wrdjzqxja2BWcu9ZwkPjaHIXCHs0wjXjMNeWwkPjAq4ZwjXjMNeic3amdjw6wksjzqxja2sjCjwXwjXjbKBWcN1idNeQcjw6wkohAqoXwrojzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwOFQduxOMGw6wksjzqx0bLpiwkPjAq43wjXjeumXaN9VevBQfNIjCksYzqx0bLpTaLF0aLxndutkbK5OwkPXzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvFmfvEjCjwjzqxPaumkc24jCksTwNiQauIjCksTwNiQauJWcNYQeNIjCkoTwNmkc25nM29Tc3xWeNJZwkPjAroXAroXwjXjbKBWcOBkc2YWdjw6wj0YwO0TwNBWcOFZc2YgduYifKYQd3EjCOTjc3xlaLwjCksXzqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xns3dvhOwuimbKePer0OAHaXfqdheNmme0xWfr0OAjoZwrs3wrs2xZp2aLxnbK9VDGdYzksOwviUcu5nDGePevFXCmXWLq93e3dVenAVc3xOLq8ZAroXLq9neNdOwviUcu5nCOiTbK5SDGePevFXCmXWLq93e3dVenAVc3xOLq8YCHl5Lq94cumVbZd|rem|167061s212827333718243o013z1o252z2q193x3c1b3q0z112k3o01302m3v2s37242v302n11303a231q273321142z2x23211a2s291z1138231s25352z1422361y1z10161z153v292q1721241s3u2t212n1z3w242e133v2b2o193z2411101o232c1i3c2b36162x3s121z1m280w121z39233v213936182v3u101z1o3c182t39233v2b213v3b213x29213x1z113s2711302u271s2u271r2o1g27302q3c1x23121b3v1z1130243314212o1b3v1z1k1t352z1b223n2e1z3u2o2z1q1e25211o1o231z1s253t172z26142e1c2c2b361c3w29341v3w2s3o3u3722393p3730291714211411101m253c1q1z1z3w242e1b353a3v111x21141g1v1h183f1k1g1h1d1j3c181c1t3e1c1g193d143e1m3e1k1e1w1g101d172c1t2c102e1u2e1x2c1t2d1u2c1s1e152e1r2e1y2c1u2c152e1t3g1s2c1u2c1k2c1u1e1z2e1s1c1x2c1s3d1w2e1t2e1r2c1s2d172c1t2e1u2e1q2c1e2c1u2e1t2e1u2f1p2c1s3e1x2c1s2g142e1s2e1y2c1t3e1z2e1s1e1q2c1s2e1v2c1t2e1v2e1r2c1v2c1s3d1w2e1u2e1o2c1s3e1h2c1s2f192e1q3d102c1s2d182e1s3f1f2c1s1d172c1s3g102e1q3d172c1u3d1u2e1s3f172c1s3d1t2c1s2f172e1s3d1v2c1s3d192e1t3e1a2c1s3d182c1u3f1y2e1q3d192c1u3d182e1s1f172c1u3d1e2c1s3f172e1q3e1r2c1s2d192e1s3f1a2c1s3d192c1s3g1w2e1q1d172c1s3d192e1s3f152c1s3d1b2c1s2e1u2e1q1c1f1c1b2d1e3g1c1e1g1d1m3d1r3b1c3f1c3f1g2d123d1l2d1c2g1p1e193c1f3d1c1d1p1g1c1g1o3e1f1c1f1d1c3e1d1f141e1s1d1b1d1c3f1c3g1e3d1g2c1f1c1d3e1c1g1k3c1f1c183d133g1h2e191d1k1d1d1c1g3g1j3g1h3e1j1e141d1e3g1p1g1k1e1i1e1b2c1c1g1h3d1b2d1c1c1s2e1c3f1f3f103c1f3d1f1c1p3g1o3e1b3e181d1d1c123e1b1f171d1f1d1d1d1j1g1c2e1j2c1f1c1f1c1d3f1c1e161b1f1e1h1c1r2e1t1e1f2c1u1e1m2c1s2e1t2e1r1e1v2c1t1c1x2e1u2f142c1t2e152c1s2e1u2e1r1c1w2c1u1c152e1t2e1d2c1s1e1v2c1s2g1u2e1r1c1y2c1t3c1x2e102e1u3d101c192t1b143e1f2d183g1p3e183c1u3e1a1e1i3e1h1e1j1c1h2c181b1g3f122e1s2e1t2c1u2d1r2e1q3g1v2c1s3e142c1u2g1w2e1r2e1z2c1s1c1s2e1q2g1t2c1t2c1v2c1t2e1t2e1q3d1w2c1u3c1q2e1q3g1f2c1s3c1z2c1s2e1c2e1q1c1i2c1s3c1z2e1s1e1t2c1u1d1r2c1t1e1e2e1q1d1x2c1t2c1p2e1s1g1t2c1t2c152c1u2e1w2e1q3c1e2c1u2c1r2e1q1f142c1u3c1g2c1s3f172e1s3d162c1s3d172e1q3f1c2c1s2d192c1s3f1t2e1q3d192c1s3c182e1q3f172c1u3e1b2c1s3f162e1q3d182c1s3d192e1s3f1t2c1s3d182c1s3e1a2e1q3d192c1t3e1d2e1q3f172c1s3e1k2c1s1f152e1s3e1c2c1s3d192e1s3e1o2c1s1d172c1t3e1g2e1q3d172c1s3d1b2e1q3f152c1s3c1z2c1s1e1i1e163d1k1e1j1e1c3e1g3f1k3d1r3b1f3e1c1f193g1f3d131e1l1c1i1f1f3f1e3c181c1f1d161g1d1f1h3c1d1c1g3d141f1f3g173d1f3d1s1e1p3e1d1e1b3d1s2e1m1c1b3e1d3f1a1c1m1e1f1e1j3g1b3e1q1d1m1e1m1e1p1g1k1g1d3d1k1e181c181e122f1b3d1d1c1m3c1c1f1e1f121e1f3c1g3c1d3f1d3f1d3c1i1c121c161g1i3f1f2c1s2e1q3d1f3g163g1i1d151e1k1c1c1e1b3f1q3c1f3d1s2e1o3e1b1e1u2c1z2c1u2e1h2e1s2e1p2c1s3d1l2c1t1e1r2e1q1c1m2c1t3d102e1r2g1d2c1u2e1t2c1s2g1t2e1s1c172c1u2d1t2e1s1e1u2c1s1e152c1s2f1c2e1q1d1u2d193c1t3e1v141c1h1r1e1c1c1i2g121g1e3e1j1d1e3e121f1g1g1j1e1v2c1i1e1u2e1p1g1g2c1w1c1u2c1r2e1i2e1u2c182c1s2e1k2e1q1f192c1w2e1m2c1s2g1v2e1s2e102c1s3d1y2e1q2e1w2c1u1d1k2c1p2g1t2e1t3e1i2c1s2c1s2e1q1f1r2c1v2e1t2c1q2e1u2e1s2e1g2c1u1c1x2e1q3e1r2c1w2c142c1q2g1k2e1u1c1m2c1u3c1f2e1s2f1z2c1u3c1z2c1r1f1s2e1s1d192c1t3c142e1q1f182c1w3d182c1q1f152e1s3c1d2c1s3d152e1s3g1t2c1u1d192c1q3f1c2e1s3d192c1s3e142e1q1f192c1u3d1g2c1q3f152e1u3d162c1s2d172e1q3f1z2c1u3d192c1q3g1u2e1s3d1b2c1t3d1c2e1q3f172c1u3c1e2c1q3f162e1t3d1b2c1s1d152e1r3e192c1u3d172c1q3f172e1s2c1w2c1s2c1u1e1d1e123c181c1k3e191e121e121d161e1s2c191e1o1e183c1e1c1g3e121g1f3g191d1e3d1s1e1k3e1b1e1c3d1u2d1m1c193e1b3f1c3c1r1e1f1e1a3g1d1e1s1d1e3c1d1d141g1q1f1b1d1l3d1f3e1e3f1e2e1c1c1s3d1c3d1h3f163f142c1c1c1f3d1d3f163g1c3d1r3c121d121e1c1e1d3d1u3d1i1e1d1g1k1g1d1c163c1s3d1k3e161e1t3c1e3e1g1e1g3f151g1e3c1q1c1f1c1d2e1q1f1c3d1r1e1f3c1i1g1k3e121c1v2c1y2c1q2e1s2e1t3e1w2c1u1c1y2e1q3g1d1d171c1j2c1s2g1s2e1u2c1w2c1s2c1f2e1q2e1o1c172e1y2c1q2g1d2e1t1c1b2c1u1e1q2e1q1e1x1c103d1y3c1x3f121e121h1g1o1m2h1i2i1q2r1k121o|DudhevxicOBNc3xUDGe0dNtVd2YieuIPBqXhBqlODkYZaKB0wvh9xnoOwvl9xnoOwveQavFPDGdYAjdhbuJQa2i0DGdYAjdhaNmTcr0Ow2aNaNaNajedzn48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxneu9XwjXjevmXaGw6wOB2aZwTwNxOwkPXgGXjM29VevxWct9XdNJ2wkQ7wN9ZauJZwkPYBjXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|stripsw|getVideoLoadedFraction|f7441o3o1v3q221c271u393v211b3q0z101o25212o193x2c1k193v111i1c2z173u3w112z1411133x392o1920261s3s2v202p1z3u262c153v392q1722241z211m252c1g2e29381w2v3u1z121m260y1z1229213x2z2b361w2x3s11101m2e162v2z2n11203a231q27332e142z2x232e162s291z1138231s25352c1421261y1a2s291w2u27162u271u2s271q2c113u26111z3w261z3w243u2m3o011z21293w141m272c2o111x23121z121m272c2o2o35222o1z212z2b213v2226163o0z1e1c2v2c292q122u1z101f2z1q1z2z3a23373u253w253t1336231z113837112z161h1z1e1m2e162t212p2e29213x2z2q1g27332c2b3w121o121g2c1d1f1c1e1f1c142e1m1c1a2g1k1e183e1a1e171e1i1e1i1f1d2c1u1d1t2c1r2g1r2e1q2c1y2c1u2e1c2e1s1e1x2c1u3c1t2c1s2e122e1q2e1r2c1w1c1i2e1s3e1f2c1w2d112c1q3e1x2e1r1d1w2c1u1d1s2e1q2e1s2c1v3e1x2c1s2e1t2e1s2e1b2c1w1d1w2e1r2g1o2c1u2d102c1r2g1j2e1r1c1w2c1v2c1q2e1q2e1w2c1u3c1b2c1s2g1y2e1q3c192c1v3e1r2e1q2f152c1u3d1z2c1q3f152e1q3d1d2c1u2d172e1q3f182c1u1d1b2c1r3g142e1q3d1a2c1u3d1t2e1q2f152c1v3e1e2c1q3f162e1q3d162c1u3d172e1s3f182c1u3d1a2c1q3f1f2e1q1d1b2c1u3d1b2e1q3f152c1u3d1v2c1q2f172e1q3d182c1u3d152e1r3e1g2c1u2d192c1q3f172e1q3d192c1w2c1s2e1q2e1c1c1h1c1r1e1a1e1i2f1b3c1d2c161c101f123f1q3d1e1e1w1d1u2f1h2f161d141b1e3e1c3f1k1e193c1e3d1l3d113f1j1e1g1d1j3d1i2c161e1d2f141e1u1e1l3c1d1e1e3g121d1j3e1b3d1d3f1q1g1k3c1e1c1e3d1d3f1d3f1d3d1e3d1e1d192f1c3f1c3d1d1e1u3c1d1e121f1q2e1h3e1t3b1d2f1d1e1d1c1a1c1e2e192e1a1f193d1i2c1e2c1d1g1i1e1b3c1i1d1i2c1h1f1r2e1q1d1l3c1f3d161e1b3g1g1d1h1c1i2d1r2g1h2e1s2d1k2c1u1e1y2e1r3g1k2c1w1e1h3c1s2g1r2e1s2c1u2c1v2e1y2e1r2g1j2c1u2e1h1c1s2g1o2e1r1e1l2c1w2d1y2e1r1e1k2c1u2e1e1c1s3e1v2f143c1h321s1e3e1b3d1q1c171e111g103c161e1i3d151g1c2g1i1c1z3e1i3e132e1r3g1t2c1w2c1v2c1s2g172e1s1d102c1t2e1o2e1q2f1w2c1v2e1l2c1r1e1s2e1r2c1u2c1s2c1w2e1q3e172c1w2e102c1q3e152e1r3e112c1s2c1u2e1s1e1j2c1v2c152c1q1e1j2e1q3e1h2c1u1c1c2e1q3g1e2c1w1d1x2c1r2g1h2e1s2e1v2c1u2e1x2e1q2e1a2c1w1c1x2c1s2e1f2e1q1d1a2c1u3d182e1q3f172c1u3d1a2c1q3f172e1s3d1q2c1s3d172e1r3e1b2c1u1d182c1s3f132e1q3d192c1t3d1b2e1q1f162c1w3e102c1q3f162e1q3d1b2c1s3d162e1q3e152c1u3d172c1q3e1b2e1q3d192c1s3d1j2e1q3f172c1w3d1f2c1q3f152e1q3d1l2c1s2d162e1s3f1c2c1u3d172c1q3f192e1q2c112c1s2c1i1e1f3e1d1d1g1c1h3b1d3f1d3e192c163c103b1b2g161f171e1e1e1g3d1e3e1d3f1d2e1m3c1l1c1g1f1f1g1a3c1j3c1b1d1i3f163f1d3c1c1d1g3d121f1f1e101e1y2d1j1d161e101d1b3e1g3d1m1c193e1d3g1h3e1g3d1e3e1c3f1c3e1d3d1e1d1k3d1i3f1u1g122c1g1c1b3c1b1g1f1f1k3c103e1f2d112e183f122d1e3c1g3c1g3e1d1e1q2e1r1c1c1e193f123g1b1e1k1d1k1d1f3e101g123c1c1d1r1e193e1c1e1q3c1w1c1v2c1r3e1o2e1q1c102c1u1c1h2e1s2g1d2d1v1e172c1r2e1p2e1q1c1z2c1s1e1u2e1s1g1i2d1w1c1w2c1s1g1j2e1q3d1h2c1t2e1r2e1q1e1i2c1w2c103c122f1f141c1d1g1e1g3e1u1g1j1f191c1j1d191d1f1f1d1e1h1c1u1e1l3c1s3f1e2e1q1c1i2c1s3c1z2e1u1e1t2c1u1d1r2c1t1e1g2e1q1d1x2c1t2c1p2e1u1g1t2c1t2c152c1u2e1y2e1q3c1e2c1u2c1r2e1s1f142c1s2c1u2c1s2g1k2e1r2c1z2c1u2e1y2e1t2e1w2c1s3d1k2c1s2e182e1q3c1r2c1u2c1q2e1t1e1e2c1u2c142c1u2e1z2e1q2c1b2c1u2e1e2e1t3g1h2c1s2d182c1s3e1c2e1q3d192c1s3e1b2e1s3f162c1t3c192c1s3f172e1q3c1h2c1s2d182e1u3e1b2c1s1d192c1s3e1h2e1q3d182c1u3d192e1s3f172c1s3c1z2c1s2f192e1q3d1e2c1s1d192e1s3f1a2c1s1d172c1t3g1b2e1q2d182c1s3d182e1s2f152c1t3c1j2c1s2f182e1q3d192c1s3d172e1s3f1r2c1s2c1u2c1f1e1f3d123e1f2d182e1c2g1c1e1g3e1m3e1y2e1c2e1c1g1a3e1h1c1b2d1k1f183f1b3c1a1e1g3e141f1h3f101e1w2d1j3d183e121d1d1d1e3e1m1c1b3e1d3f1h3d131e1l1c1i1f1h3f1e2c181c1f2d161g1s1f1h3c181c181c181e181e1q3e1j1c1a1c1a1g123d1d3e1c1c1i2d1c3f1f3e101e143e1d3c1c3f1e3f1h1e1f2c192d141f1c1e1d3c1f2d1i3d1a1g1g1f1d3e1k1e1h2c1s3f1j3f132d1e3e142d1e2f1c1e1d2c1y2c1u1e1y2e1t2g1d2c1u3c1f2c1u2e152e1i2c1j2c1s3d1u2e1s1f1t2c1t1c1q2c1u1e1v2e1d2d1u2c1t3e1t2e1t2e1h2c1u1c1i2c1t3e1f2e1d3c163c153c172e1h192f1e2g2k1v2k1o1f2o1f2h14|setPlaybackRate|DudhevxicOBNc3xUDGe0dNtVd2YieuIPBG41zqo1yGd|Dvpieuhhar0OHHhVCHl5CHlTAHoVBrA3BrlhHrhVCHl5CHlTAHoVBrA3BGpAAjX1zkwYCrd1wsX4zkl5CHl5zrohHrhVCHl5CHlTAHoVBrA3BrlhKjpBAqXXwsXZzrohHrwTAHoVAkE5CrAhHroTAHoVAkE5CrAhHroTAqpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|8ddff2933313w331w371e25302o193v2c1b3o001z1m252z3o2m253c2o2m2w23381e232z1g3c29361a2v3s1z3z1m260w1z3z39213v2z39361a2v3s1z2z1m2z162t2z2n1z2038231q25333c142z2v233c1w2s271z1z38231q25332c143z261w101z141z133v392o172z241s3s2t2z2n1z3u243c133v392o172z24101z1m231z3u261z3u261z3u261z3u2o2z39213v3c29213v29213v252y393v2c1z1z2233143o00203c293w121m3c1b3o0z2z2k221z2z1m2z1z1z2s271z2z1d393v3c181w10202v3u2s332c101z1c1m1z133v27211t302o12232520332c1626332z1d1e183c143z261w1z101z202s271z101m3s350z3z223314332f1p3d1j1e1k1d1f1c1o3d1h2e1o3d1f3e183e1i1e1g1c1f2d1e3c1s3d1i2c1r3c1x2c1u2e1y2c1r2c1w2c1q3d1k2c1s2c162c1q3c1p2c1u2c1q2c1r1c1e2c1s2c142c1u2c1x2c1q2c192c1u2e1e2c1r3e1h2c1q2c1u2c1s1e122c1s2e1p2c1s2c1z2c1s2c1e2c1s3c1t2c1u2e1u2c1r2c1r2c1u2e1g2c1r2c1v2c1s2d1y2c1u2c162c1q2e1v2c1u2e1b2c1q1d142c1s3e1v2c1s3d172c1q3d172c1s1d182c1q3d1x2c1q3d192c1s3c1g2c1q2d152c1u3d142c1q2d152c1r3d1o2c1s2d172c1s3d122c1s3d192c1s3c1a2c1q2d172c1u3d1b2c1q3d152c1t3d1c2c1q3d152c1q3e1b2c1s2d152c1r3d1x2c1s3d162c1s3e182c1q2d182c1u3e1t2c1q3d152c1s3e192c1q3d1s2c1q2c1u2c1f1c1f3d1e1e1e3e1u1e141e1q2e1b1c1g1d121e143d1e1c1e1c1q2e1q3e1c3c1h3c1d2d191d1j2d183d103c171d1d1e1g3d1g2c1d3d1q3d1i1c1o1c1i1d1f3d1a1c1f1c1b1d1k3d163d1d3c181d1g3e141d1f1c101c181c1a1c1a1c183d1k1e1q2d1b1d1b1d1k3d1d1d1e1e1d1e1p3c102c121d1y1c1c3d1c3d1i3d1r2e1q2c1d1d1a3e1q1c1q3c1e3d1e3e141d1g1e1q1d1e1c1u1e1h3d1a3c1d1d1i1c123e1c3d1e1e1u2c1s2c1u1e1s2c1r1c1b2c1q2e102c1t2c1d2c172e1t2c1u3c1s2c1s3e1t2c1q2c1t2c1t2c1u2c1d3d1q2c1s1c1h2c1r2c1r2c1s2d1h2c1t2e1s2c1d2c123d1y2c153c10122d103c141c1i3e1e2e1c3d122c1g3d181e1e1d1q1e1h1c103e1a1c1p3e142c1s2e1p2c1q2c1x2c1u2c1e2c1s3c1r2c1s2e1w2c1r2c1r2c1s2e1e2c1t2c1v2c1s2d1w2c1s2c182c1q2e1v2c1s2e192c1s1d142c1q2c1x2c1q1e1g2c1s1c1s2c1r2c1i2c1u2c142c1q2e1k2c1q1d192c1s2e1k2c1s2e1v2c1s2e1w2c1q3d1y2c1q2c1w2c1q1d1i2c1p2e1t2c1t3e1e2c1q1d172c1s3e182c1q3d172c1r3e142c1s3d152c1s3d1a2c1q2d172c1s3e1e2c1q3d172c1u3d1b2c1q3d162c1s3e1b2c1q3d152c1q3d152c1s2d152c1s3c182c1q3d182c1q3d182c1q3d162c1s3d182c1q1d152c1r3d1b2c1q3d172c1q3d132c1s2d152c1s3e1u2c1q1d172c1q3d1c2c1q1d152c1s3c1x2c1q2c1u2c1i1c123d1j1e1i1d121e101e141e1q2e1d3d121e1y3e1i1d1b3c1b1d141e1d1d1b1d1o3d1d3e1e3d1e3c1d1c1d1c1d1e1k3c1d1c183d113e1f2c192d1i3d1c1c1e2c1q1e1h3e1b3c1j3c1d1d193d1h1d161c122c171d191d192d191d1b3c161c1b3d163d133c1i1d1q3d1d1e1d1e1d1c1c3c193c171d1p1e1q3e123c1s1d123d1d3d151e1h1d1q2d1h2e1k1c183e181d1k3e1b1c1f1c1d1c1g2c1d3e1f2c1g2e1d3d1f2c152c1d2c1q1c132c1s2d1d2c1q1e1g2c1q2d1t2c1w1e1g2c1q3c1w2c1u1c1f2c1q2e1j2c1s2c1f2c1s3c1k2c1q2c1j2c1s2e152c1q3e1p2c1s1e1k2c1t2d1y3d122d1r2c171d1d2d1e3e1c1c1g3c1k1e1h1d1k1c1d3c1e1d1e1d1e2c1h1e1b2c132c1s1c1j2c1t2c152c1q1c1j2c1q3e1f2c1u1c1c2c1q3e1e2c1u1d1x2c1r2e1h2c1s3e1t2c1u2e1x2c1q2c1a2c1u1c1x2c1s2c1f2c1q1c1u2c1s2c1u2c1r2c1y2c1u2c1z2c1r2d1s2c1q1c152c1t2e1w2c1s2c132c1t3e1u2c1s1c1i2c1s1c1z2c1u1c1v2c1q2d1u2c1t2c1t2c1q2d152c1r3c1z2c1s3d162c1q3c1c2c1s3d192c1s3e1b2c1q3d182c1s3d1b2c1q2d152c1t3d1z2c1q3d152c1q3c1k2c1s3d152c1q3d142c1s1d192c1q3d132c1q3d182c1s3d1t2c1q2d172c1s3e1g2c1q2d172c1q3d1b2c1s3d152c1q3c1o2c1s3d192c1s3d1r2c1q3d182c1u3e1w2c1q3d152c1s3d192c1q3d152c1q2c1u2c1s2e1d1c103e173d1q1c1p3d1p3b1b3d1d3c1b2c1p3c1w2d1i3e1d1c1c1e1p3c1b1c163e111e1h2c1b1d1i1e1d1c1e2c1s1e1c3e1d1c1h3c1b2d1b3d1j3d163c102c171d1c1e1g3d1e2c1d3d1q1d1k3c1o1c1g1e1f1e1a2d1k3d1k1d1i3e1i3e1d3d1c3e1j3e1f3e121c1d2e1f3d1s3c1b1c1d1c1g2d121d143d1d1d191e1f3b1s2d1s1d1d3c1b2e121d1o1e1a1e1g3c1h1c1d2e1c3c1x3c102c171d1q2d1b3d1w1e1q1e1d3c1u2c1t2e1h2c1s2e1s2c1q2c162c1t2e1v2c1r1c1r3c1r1c172c1r2c1i2c1s2c1h2c1u1e1d2c1r2e1y3c1u2e1a2c1s1e1q2c1q3c1f2c1s2e152c1q2d153c142c102d1x3c121r1i1q2o1i1p1k1j2r2j1o141|DtXWd3aODjwTwNtkeumWcjw6wOpZaLMjzqx0fLpmwkPjd3aOwjXjd2BicuIjCksVAjXjdu9nbLFQc24jCjxkc250dN9TdZ1jc3F0c20jzqxUMLxObK4jCjwXwrohAqoYBGx9zqxkc250dN9TL25mfvEjCOTjc3xlaLwjCks3zqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh1zqo1yGd|getCurrentTime|hd1080|tipa|Dvpieuhhar0OHHoVBrM5BrhTAKIUArIhHroVBrM5BrhTAKIUArIhHroVBrM5BrhTAqpABZ40Bkl0BZX1zkwYCrd1wsXXzkE2CHE4zrsXzkEnBnIhHroVBrM5BrhTAKIUArIhKjpBBZ41Ano1AjXXwsX5zkInArIZzrohHrlVBHAXBHwTAHoVBkw0CrwhHrdVBHAXBHwTAHoVBkw0CrwhHrdVBHAXBHwTAqpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|hd720|wjXjMKB0bK9VwkPjduYifGwTwOF5duIjCjxneNdjzqxjaZw6AGXjMNekc2YWdjw6wNI1ArlYBqwTwNxOcZw6wksjzqxja3piauFQcNdjCjwYAqoYAqoYAqoYAqwTwNmkc25UMLxObK4jCjwXwrohAqoXwjXjMNeiwkPjAGwTwNxOMK92aLwjCjwUAGwTwOBkMKYmc3amdjw6wkwVAjwTwNiQauIjCksTwNiQauJWcOpTMLljCksTwNiQauJWcOmWeLF1MNIjCksTwNxOMN9ZauJZwkPXzqxiwkPjAGwTwOFQdqw6AqXjeumXeuJ4eqw6wmY1ArEYAmY1ArEnaJY1ArE0AJY1ArEnamY1ArE0Aq5dz1XWLq9deHo0AKadeHo0AnpdeHo0BrBdeHo0AnedeHo0AnojzqxQM29Vd2BWcu9ZwkPjakJNBKMYwjXjMK5QcKt0bK9VwkPjcN9VaGwTwN1idNeQcjw6wkohAqoXwrojzqxQM29Vd3xmduYifGw6AqXjMK92aLwjCjwXzkljzqxPbKFmc25XMLJnaGw6AqXjbumlaK9VcuJieNIjCkp9zqxkc250dN9TL2YQeNIjCOTjc3xlaLwjCkETwN9VwkPYzqx0aLi0wkPjDvBXMK4hd3F5cuI9x2BWcu9ZCjA1BKs4AKIODmY1AkJkakYdz3BXMK4|Dvpieuhhar0OHHs2zrdVAHA2BksYAnwhHrs2zrdVAHo5AHM5BrIhHrs1zkwXCrs3CrITBZ4YArlYBkl0BGpAAHEVAkd1ArlnzrdVAHo5AHM5BrIhEns0zkw3BHo5AZXnzks5CHsZBkw1wrsYzko2Ans5BZXXwrdVAHA3BHE2BrITAqprAZ4ZAHs4CHI5AGXXwroTAZ4YCHlYAkMZBGoXzrdVAHo5AHM5BrIhEnoTAHsVArs5AksZBjonzkwYAHh5BHlYzrs0zkwYCrAnCrlhBZ4YAnd1BrM0BGXYBq4ZAHhnAnh5wsX3zksnBnI0BkE1zrsZzkE0AHo0BkIhEnEVAHlnAno4BHITAHwVBrEYArE2BGoYzkd4BrA4BkMZzrsXzko0AHdXAHhhAG43CrEnCrM2AjX3zksXCHs2CHE1wsAYzkd4BrA4BkMZzrEVAHd2BkA3ArIhBq4YCHAnArh1BGXYzkd3Bnw5AkA2wrdVAHA3BHE2BrITAG43BndZCHwnBjprAHoVArhYBnh0BqXYzkd3Bnw5AkA2wrsZzkE5ArdXBkATBq4YBnM2AndXBGoYAj40CHo3ArMnzrdVAHo5AHM5BrIhHrsXzkM0BrIYBkdTBZ4YArlYBkl0BGpAAHAVAnhZCrl5BjXYAG41BHw0Aro0wsXYBjX3zksnBkMYAHAZwtPOwuaQcuX9xZBNaNaNaNMODkYdz3pieuh|tippmargin|timestorenolive|1005|1006|unescape|wqohwqohwqo8dut0bqplDGeBAqX3wsXYBq41AHh3Ano0zrdOwumlDGeAbK5mxZpnevxWb2I9xZBuFlauFlMOwvB0dN9SaG13bKF0br0OAjd|DtXWdut0br4hwqohwqohwrYXMLFPwuE9x00XzrsnwsXYBq41AHh3Ano0zrsnxZpQar0OHumVaGdhd3FZc2UmDGdkFlauFlauxZpnevxWb2IUe2mleuh9xnwODkYdz3pieuh|wqohwrYdz2d|sub_all_title|DtXWd3aODjwTwNtkeumWcjw6wOpTMLmTbLB0wjXjdu9nbLFQc24jCjxkaK50aLwjzqxUMLxObK4jCjwYAqoXwrohAkIjzqxjaZw6AGXjd2BicuIjCjwYzkIjzqx0fLpmwkPjd3aOwjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxja3piauFQcNdjCjwXwrsXwrsXwrojzqxja2sjCjwXwjXjMNeic3amdjw6wksjzqx0bLojCksTwNxOM29Tc3wjCjxlMkoXArojzqxja28jCjwXzkwjzqxja2xWdNFmdjw6AqXjMNejc3xlaLxkc2YWdjw6wNaNaNaNajwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQdvpWbK50aLwjCksTwOFQdvpWbK50aLxicumOcjw6wNYmaOEjzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpNc250d2m6aGw6AHsTwOFQdvpiauFQcNdjCjw3wrdhBZo3wjXjeumXMNeiwkPjAGwTwOFQdu1idNeQcjw6wkohAqo1AqoUBrojzqx0bLp0aLi0wkPjLvIXBrwYLvIXBrBNLvIXBrA4LvIXBrEYLvIXBrBmLvIXBrBiwtY1ArEnAmY1ArEnCtY1ArEnBtY1ArEnBJY1ArEnaGwTwNmkc25nM29Tc3wjCjxNaNaNaNMjgGXjM29VevxWct9NeKYTwkQ7wN9ZauJZwkPYAZXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdYCqdhbuJQa2i0DGdYCqd|slidespeed|dropautoplay|Dvpieuhhar0OHHsXwrBPAZ42cq00wrFAAHshCq40crEUBtM4brxKAKhUB3QBBZo5zkaTzHEhBtMYAshYekePB3MUAlh0zkFTBq00fjdhaNmTcr0Ow2aNaNaNajd|DtXWdut0br48Lq9neNd|DtXWdut0br48Lq9ODkYdz3B2an4jzqxQM29VAZw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonyGd|timestoreunauto|timestore0plroot|wqohwrYOwumlDGevdN91dq0ZxZpnevxWb2I9x25WcNIOwvB0dN9SaG13bKF0br0OAGdhaNmTcr0OcN9VaGdhaNmTcq1ZeKYmDGemeNJVc2FlxZp0dNtVd2aWdN09x3FZMK5ncut0aGhnzkoXAroXAqXhAZ4XAroXAroQxZpnevxWb2IUcumVaKBidr0OdN91cNEOwvB0dN9SaG1TbK5mbN9Qck0OdN91cNEODjohwqohwqohDvpieuhhar0OHHoTAGpAAHEVBHs4BnAXBqXYxZpQar0OHumVaGdhd3FZc2UmDGdkFlauFlauxZpnevxWb2IUe2mleuh9xnwODkYdz3pieuh|timestoredontuse|ffce00|no3|wjXjbKBWckwjCjw8d3aOwveQavFPDGdYCqdhbuJQa2i0DGdYCqd|Dvpieuhhar0OHHshAHxPAZ42cq00wrFAAjoYBZ40crEUBtMYB2hZej03Grt6HHs2wq42cq00wrFKAKhUAOM3breKBNhUAZ42crEUBvPOwuaQcuX9xZBNaNaNaNMODkYdz3pieuh|loadVideoById|DtXWd3aODjwTwNtkeumWcjw6wNa1cuYnM3xmaK4jzqxiM3FQc24ZwkPjcN9ZcKtTd2BZaKJVwjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjM29VevxWcvAUdNmObvEjzqxUMLxObK4jCjwXwrIhAqoXwjXjd2BicuIjCjwXzkljzqxjaZw6AGXjMNeXMKFlbK5OwkPjBjo2wrMhBjwTwNxOM29Tc3wjCjxmBHo5AHEjzqxja28jCjwXzkwjzqxja2sjCjwXwjXjMNeic3amdjw6wksjzqx0bLojCksTwOFQduaWcOFnbLQmwkPYAGXjeumXMNeiwkPjAGwTwOFQdusjCjwXzkdjzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwOFQduxOdN91cNFQcNdjCkATwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpkc2YWdjw6wkoXAroXAqwTwNtVbK1ieumWcjw6wOpWd2m0bK9VwjXjbKBWcN1idNeQcjw6wkohAjonwrojzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvFmfvEjCjwjzqxja2BWcu9Zc3amdjw6wj0YwjXjbKBWcOBkc2YWdjw6wj0YwjXjbKBWcOBkc2YWdN92aLwjCjwXAroXArojgGXjM29VevxWct9neutZeqw6fZxWdNFmdjw6AHETwOpWd2m0bK9VwkPjM2JVeuJZwjXjd2BicuIjCjwYzkdjzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh1zqo0yGd|Dvpieuhhar0OHHoTAG44AnlXBrI2CqprAqXUAq42Ans5Cro4BHlhAq45ArdXCrAYArlTzHoVAHE2Ars0AnE2wrwVBro1CHdZBklTAq42Akw1CHl5AHMhEnAVCHo0CrMZAkdTAG4nCHsZAHEYCqo4zkh5BkM3BrA5zrEVAkEnBHlXCrIhAHoVArA5CHo5AGX0zkh5Ako5AroZwsAYAG4YCrAYBrA4zrIVBHEXBHh5AHhhAHwVArd0AHs2BqX2zkI4Ako2AkIZwrsXzks1Anw5BrITBZ43BnsYCrs1CGprCq4ZAnw0Bnw1CqX4zkl2ArAXArM2wrEVCrlnBHs3BjXYAq45CHd1BkM5wrwVBrE2BnI4CqXYAj4ZBHA1BnIZwsAXzrsnzkIXCHI4AnIhAqXYAZ4ZArlYCHA4wrwVBrE0CHwXBHamzHs2zrsYzksnAnl5BkEhEndVBHEnBHAXAHmmzHs2zrlVArI4Bnl5AHwhAG42Bkw1BrI5CuIUAHMTBq4nAHoXBnwZAGoXzrsVCrA5ArE1BkhhKjdhaNmTcr0Ow2aNaNaNajd|large|medium|posterwidth||hdiconclr|DtXWd3aODjwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wNBWcOFZc2YnwjXjcKtZa2mVwkPjAqoXwrohBGwTwNYQcNTjCksTwNYQcNU1dNXjCjxidul6dumXe2Jjb2m0wjXjbumlaGw6AqXjMNdjCksTwNxOM29Tc3wjCjw1BKs4AKIjzqxja28jCjwXzkwjzqxja2sjCjwXwjXjMNeic3amdjw6wksjzqxja3piauFQcNdjCjw2wrMhBjo2wjXjeumXwkPYzqx0bLp0aLi0wkPjLvIXBrwYLvIXBrAZLvIXBrA1LvIXBrEXLvIXBrBlLvIXBrEnLvIXBrEZLvIXBrFkwtY1ArEnAmY1ArEnCtY1ArEnBtY1ArEnBJY1ArEnaGwTwOFQduxOdN91cNFQcNdjCkATwOFQduaWcOFnbLQmwkPYAGXjeumXMNeiwkPjAGwTwOFQdusjCjwXzkdjzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwNtVbK1ieumWcjw6wOpWd2m0bK9VwjXjbKBWcN1idNeQcjw6wkohAqoXwrsjzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqx9zqxXdNJTc2tlwkPYzqxXcut5cumneqw6fZxPbKFmM29VevxWcqw6AGXjMNekc2YWdjw6wkhnAHoYAqwTwNBWcu9ZwkPjakJNBKMYwjXjeNtTeKJkc2YWdjw6wNM1akJNAGwTwNxOMGw6wkoVCGwTwNiQd3FWdOmja2BWcu9ZwkPjauwXAroXwjXjMNekc2YWdN92aLwjCjxlMkoXArojzqxjc3xlaLxkc2YWdNJlwkPYzqxjc3xlaLxkc2YWdjw6wNFmauJlaGwTwOxWeK5lbK5OwkPnzqxUMLxObK4jCjwYAqoYAqoXwrsXwjXjaNYWMLFTaKa0wkPXzqxldN9Xcumneqw6AGXjMKY3MLmnwkPYzqxPbLB0c3x5M29Tc3wjCjxNBKM1aksjzqxjc3xlaLxjc3F0c20jCkoTwNiQd3FWdOm0bLFTaLB0dNmSaGw6AqXjavxWduBTdOAjCksTwOpTMLmja2BWcu9ZaKEjCksTwOpTMLmja2BWcu9ZwkPjauwXAroXwjXjaN9Veqw6wmxWMN90cZwTwNFZc3pja2BWcu9ZwkPjBrxjarh4wjXjavxWduBWcu9ZwkPjAroXAroXwjXjMLJ0c3pTMLmTbLB0wkPYzqxXc3BQeumWcjw6wNYmaOEjzqxWduJVcutneqw6Av0TwNtTaLx0dZw6AGXjdu9neuJZc25XMLJnaGw6AqXjaLamcOFnevxiM2Umdjw6AGXjaLamcOFnwkPjIuYifKJZJLxWJtateNJVevAjzqx2MLB0wkPXzqxXdNJZc2YTdZw6AqXjeui1cKxnwkPXzqx1cNmWcjw6AqXjfKtUevwjCkoTwOmWeLF1MNJXc3B0aLwjCkoTwNYicNFNeKYTcK9jbKYmwkPYzqxZaKYWMKEjCksTwNiWeuUmfGw6fZxnaKJSd2mlaLAjCkoTwN51cLAjCkoTwN0jCkoTwOaWcvJUaLePaKJTaOJTcqw6AL0TwNiTdZw6AGXjaOJTcu9VduYifGw6AqXjeumUaLB0c3xmwkPYzqxneu9Xc3FPaLxXcut5aLxnwkPYzqxnd2aTfGw6AqXjd3BNcvm3wkPYCHwXzqxZM19keLB0c20jCksTwOxkL2tVfLeifGw6AqXjdNBgcutjaKXjCjxEcut5aLwhJLxWzmFKwtpZcZwTwOFQcKJneu9ZaHpXcvxWc3EjCksTwOpTMLmmavB0c3xmwkPXzqxVMLFQeNJkc250dN9Td21WMNmTaGw6AqXjeNJZd2mWcjw6zHsTwOFia2BWdOAjCkoTwOxkL3amdOBQc24jCksTwNxWdNFmdjw6AqXjevxicOBjaZw6AqXjMNekc2YWdjw6wNaNaNaNajwTwOBPMKFWeZw6AqXja2sjCkoTwNiTd2F2dOFQcKIjCkoTwNmVevxWdZw6AqXjbK50dN8jCjwjzqxQcOFZc3B0MLx0wkP2AqXjcKmldN9TcvAjCkoTwOaid3FgcKmldN9Tcvxmd3EjCksTwNBPdN9UaKBid3EjCOTjc24jCkp9zqxnbutZaHwjCjx2bZwTwOBPMLxmAZw6wOFmcuJOdNtUwjXjd2iidNI0wkPje2iievBidvojzqx0MKenwkPXzqxXbLojCOTjc24jCkp9zqxnbutZaKmkc25nM2tTaGw6wkwVCGwTwNJ2aK50cumneuJVaLxnwkPYzqxXc3B0cKJnd2tOaGw6AGXjc2xnaLx2aLwjCkoTwNeiL2J2aK50wkQ7wNJZdN9ZwkPYzqxmcNEjCksTwOpTMLlZBGw6AGXjduYifHIXwkPYzqxXcut5BnIjCkt9zqxNbK5Qd2iZaLeQcNEjCkoTwOxmcu9iavFQcKJWeLEjCksXzqxTMK5ld2BiduJNeKYTwkPYzqxmaNamM3FnwkPXzqxmaNamM3FjcvJZwkPYzqxmaNamM3FOdNt5wkPXzqxNc250dZw6AGXjdNJlbLxmM3EjCkoTwOeieuJZwkPXzqxPcvBieKFQcZw6AGXjcum2aLeib2J1dqw6AGXjM2iicN5mcvAjCkoTwNBPMK5VaKXZc2aNwkPYzqxkbutVcNJTAvFQeuYmwkPjIOIjzqxkbutVcNJTALFQeuYmwkPjFK4jzqxXMLBnwkPXzqxlMLBPwkPXzqxTd2a1cuYneutZeqw6AqXjcvBNeKYTduYifGw6AqXjeumUaLB0c3xmcN9TbLamwkPYzqxTMK5OL2m0wkPXzqxTMK5OL2B6wkPXzqxNbKYmwkPjK3UXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFHaKtnc24hALpRdZeYeqYXbOAOdLFNc2YlaLxXbOAOdLE6K3UXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrtXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhAOpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGonduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrFXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhBLpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo2duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwreXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhCvpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo5duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrsXduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9LL0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYetBmMLBWcjoZduQnx3t0zvpRdZeYeuaWcuFmdOpRdZeYerQcf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhALpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGoZduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrBXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhBvpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo1duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwraXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhB3pRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo4duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrmXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhAHpXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev1egGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0I2Jid29VwrBXbOAOdLETduQnx3t0aN9TauJZduQnx3t0CmU7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGoYduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrxXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhA3pRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo0duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrJXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhBOpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo3duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwriXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhCLpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0zqpXbOAOdLFneKx0bLFTaLpRdZeYerPhduQnx3t0K1Y1ArEZAtY1ArE0A1Y1ArE0AJY1ArE0AJY1ArEnMJY1ArEnCtY1ArEnCJ1PevFXdnQdz1XWd3FieumkzOaWbKFjc29neq5kc21dz3aQaLedz1xFMlaQFKxJArxkKsmFb1mJMnmYFNedzns3ArdXBrM3AHJdzntdznpdznBdznpdznBdznedz2m4eOejCuJmbvoVeOF0ztUtcNeTbLBPLKi0evpnCmXWLq9neut0bKAVeN9QauxWc3B0zNBWcJXWeNmme1XWcLJLd1BsM2YrIvmEIHpXMkE4AKAnIJXWAHdXBno0BkdYBJXWAJXWAtXWA1XWAtXWA1XWB1XWdua0B3JYfrm0bG52evFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrsXduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9LL1ewjXjaN9Veu5icKJnwkPjIN9jc3FWwjXjbuYnM29VaNmOwkQ7wN1ifsx1aNamdlYmcNe0bqw6BkoXgGXjdNJTc2tlcum2aGw6AGXjbuYnd3JjevxiM2UnwkPXzqxneKxgd2m6aGw6AHa9|u10|isflash|pjsga|customyterrors|PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMgOSIgd2lkdGg9IjEwMCUiPjxwYXRoIGQ9Ik01LDcgTDYsNyBMNiw4IEw1LDggTDUsNyBaIE0xMCwzIEwxMCw0IEw4LDQgTDgsMyBMMTAsMyBaIE0zLDYgTDMsNSBMNSw1IEw1LDYgTDMsNiBaIE0yLDcgTDMsNyBMMyw4IEwyLDggTDIsNyBaIE03LDcgTDEwLDcgTDEwLDggTDcsOCBMNyw3IFogTTEwLDYgTDExLDYgTDExLDcgTDEwLDcgTDEwLDYgWiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjY0NzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48cGF0aCBkPSJNNSw3IEw1LDYgTDUsNSBMMyw1IEwzLDYgTDMsNyBMMiw3IEwyLDIgTDMsMiBMMyw0IEw1LDQgTDUsMiBMNiwyIEw2LDcgTDUsNyBaIE0xMSw2IEwxMCw2IEwxMCw3IEw3LDcgTDcsMiBMMTAsMiBMMTAsMyBMMTEsMyBMMTEsNiBaIE0xMCw0IEwxMCwzIEw4LDMgTDgsNCBMOCw2IEwxMCw2IEwxMCw0IFoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4|xml|Dialogue|radius_|f00|default_w|sub_allmy|unavailable|ytError|vast_remove|vast_impressions_all|CUED|posters|posterheight|moved|sub_drag|black|clr_sepia|getAvailableQualityLevels|getPlaybackQuality|DtXWd3aODkYdz2FQek58gvXVcu9iauJZyvxicNEQwvUXc3BQeumWckPhdNJTMLFQeNI7cKtZa2mVCjoUAkJXfqoXwrohzHw1dvh7e2mleuh6wrIXdvh7gG5Tc2tlaLwPdNtVaql6MNJNc3xmwvUkc250aK50CjoOxnUlbLBXcut5Cjpjcu9kbnUXMKFlbK5OzLFWdrPhAHoXxHU9zNBQdNB1cutZyvxicNEQwvTUe2Jjb2m0zKtVbK1ieumWckPhdN90MLFmwrxnwuYQcNJidjpQcNaQcNm0aHUicNmUMLFQc246wvxWeut0aGoZdZpTbK5mMLwhbK5NbK5QeuI7buJQa2i0CjoYAromCZ13aKxSbLEUevxicOBNc3xUzK9ZbKeQckPhM2JVeuJZwuBmcOFmdkU0dNtVd2aWdN0Uc3xQa2mVCjpkaK50aLwhM2JVeuJZC3eQavFPCjoYAromC3pWd2m0bK9VCjpiMOBWcvJ0aHU0c3o6wro7MN90eu9UCjoXC2YmaOE6wro7dNmObvE6wro7cKtZa2mVCjpieLFWC30Vdut0bqiZMK5lyGp7d3FZc2UmzKFid2iidOxifHPhAGXhAkoXC3B0dN9SaG1lMLBPc2aNd2J0CjoXCZ13aKxSbLEUMK5QcKt0bK9VCjplMLBPwrsVBLAhaKtnaG1Qcj1WeLEhbK5NbK5QeuI7MK5QcKt0bK9VCjplMLBPwrsVBLAhaKtnaG1Qcj1WeLEhbK5NbK5QeuI7gIoUe2Jjb2m0zKUmfKaZMK1mdZpZc3FieuIhfnsXAqIhfZ13aKxSbLEUevxicOBNc3xUCjpZc3FieuIPAnMXauJOyHU0dNtVd2aWdN06wvxWeut0aGhnBkplaKdQC319EuUmfKaZMK1mdZpZc3FieuIhfnsXAqIhfZ13aKxSbLEUevxicOBNc3xUCjpZc3FieuIPAnMXauJOyHU0dNtVd2aWdN06wvxWeut0aGhnBkplaKdQC319Eq13aKxSbLEUb2J5aOxicKJnwuFid2hhfnomwvUnevxWb2IUautnbutZdNt5CjoYzqoZAro7d3FZc2UmzKFid2iWaNanaLE6wro7gHIXxGp7d3FZc2UmzKFid2iidOxifHPhCrlTwrwXArUnevxWb2IUautnbu9NaOBmerPhzHA1dvh7gHsXAqIhf3B0dN9SaG1lMLBPMLxZMLl6wrh5zqoZAro7d3FZc2UmzKFid2iWaNanaLE6wq0YAkFXfrU9gIpSaLmNdNtUaLAhautnbqp7AqIhf3B0dN9SaG1lMLBPMLxZMLl6wrsTwrwXArUnevxWb2IUautnbu9NaOBmerPhArU9BHomwvUnevxWb2IUautnbutZdNt5Cjo4CGXhAkoXC3B0dN9SaG1lMLBPc2aNd2J0CjoUAnJXfrU9AHoXxGp7d3FZc2UmzKFid2iidOxifHPhCrlTwrwXArUnevxWb2IUautnbu9NaOBmerPhzHsZBvp4C319wjXjMKB0bK9VwkPjMOJNaNJZwjXjevmXaGw6wNBndZwTwOpWd2m0bK9VwkPjM2JVeuJZwjXjd2BicuIjCksTwNBTbKBSwkPXzqxPbKFmwkPYgGXjM29VevxWct9naLF0bK5OdZw6fZxWdNFmdjw6AHwTwN9VwkPYzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAGlODkYXMLFPwuE9x005zkl1CHwYBkA2zrohHrsYzko3AnEnBHwTAj40Akw5Cro3BGpAAHwVArh0Akd4zrwVCHd2CrA2BnIhHrs0zkI2BHEZBkATAG44BklYAkE3BGpAAHMVAroYAnI1AZXnzkA1BnM2Bkh5wsXYBG4YCHdZBkE3zrIVCrEYBrs3ArlhHrs1zkEYBHE3BHMTBj44Ano2CrEnBGpAAHdVCrdnBno2AZX3zkd4CrA5AHshHrs4zrlVCrEZAkl5BHEhHrs1zkI1AnA1AHETAHoVCroXAro2AZpAAHIVArdXCrE3BZXYAG44Anh0Arh5wsXYBj4XCrs2CHo1zrs0zkA0AkwXCHAhHrs0zkM1BkMXBrwTAHIVCrsnBHE3CGpAAHwVAHInAHI0AZXYBq43BklZArE1wsXYAG4XAkd0BnM2zrs1zkw0Akw0ArhhHrsXzko4BHIYArsTAHdVBko3BkdhHrhVArMnCrw0BHETAHdVBZpABj45CrEYArI0BZXYBG4ZCrh0ArI4wsX1zkhYAkE2CHwTAHEVBnhXBns0CqpAAZ40BrMYBHI3BqXYBG44BHA3BnwYwsXYzkl2Brw2CrsYzrs0zkEnBrInCHAhHrwVCHw5Akd1BHsTAHsVCrh0BHdnCGpAAj4nBkMnAHA0BGXYAq44AkAXAkM5wsXXzrlVCrl5CHd0CrAhHroVArwnArEXCHo2CGX3zkhZAno0BHd4wsXZzkE0Bkd3AHhYzrMVCrEZAns4BrwhHrwVCHEXBnA0AnITBG44Brs0AHdXCGpAAG44CrA5Anw5BZXnzkA1BnM2Bkh5wsXnzkAnAHAZArh1zrsVCrlZAkM5AHAhHrIVCrM5Crh2BkETAj44CHMYBro4BjpABj45Bnw2BrM2AjXZzkE4Ard3CHhhHrdVCHA3BHAXCqXXzko0Bko0AHwYAnMhHrlVCHI5Aks2AnMTAqpbws04zkh0CHlnCrdnzrMhEndVAkd2ArAnBrITBjo2zrdVAkd2ArsnAkhhBjX4zkh0CHlnCHd0wsA2zrsXzkEZAnl4BkdhBZ4ZBnMXAnA0BGXYAG43wrhVCrE5CHA4BnATAHsVBZprAHoVBrwnCHM2BjXYAG43wrsYzkdTAHoVBrwnCHh2BZoYAG43zrhVCrE5CHA5BnEhEnsYzkdTBZ4ZBnMXAHAZCqoYAq40AkA5BkM2zrMhCq44Brl5Anh3AZX2wtPOwuaQcuX9xZBNaNaNaNMOLq8|_timer|tiny|subtitle_errdel||constrols|normalonclick|d46733c3aa997f6b979a582cdab829a6|DtXWd3aODjwTwNtkeumWcjw6wN5mfvEjzqx0fLpmwkPjd3aOwjXjd2BicuIjCksVAjXjdu9nbLFQc24jCjxkc250dN9TdZ1jc3F0c20jzqxUMLxObK4jCjwXwrohAqoYBGx9zqxkc250dN9TL3BPMLxmwkQ7wN9ZauJZwkPYCqXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|DvB2aZpkcutndn0OM2mZM3JTMLwPdNtVaqlOwvaQaLeqc3h9xnw1wrw1wrIXwrIXxn48M2mZM2YmwuBTMLBnDGeXMLFPyvxicNEQxZpnevxWb2I9xZikc2YWdjlOwuB4DGd1AqdhM3l9xnIXxZpZDGdZAqdhaNmTcr0OcN9VaGdhd3FZc2UmzLeQavFPDGdZxZpnevxWb2IUcKm0aLxTbK1Qer0OAHoOLq8|DtXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAZXhAjlODkYXc2Y5a29VwvpWbK50dn0OCq44Crs3CrEZaG0YBjo0zkA3BrMhCq44Crs3CrEZaG0YBjoYAq42AkInCGonzksXArw5wrsXzkMZBHA5wrdVBnEYBrAhAHIhBZ43BrEYCGoXwrAVAHoZAndhBq4nBnE2AGoYzkd3BkA1Bkh0aG0YBGo0zkA3BrMYwrsVBnd2AnI2CrFmzHs1wrEVAnd0BjdhaNmTcr0Ow2aNaNaNajedzn48dut0bqplDGeBAHsVCHw2Bnd2BZX2zkM0BnE0BnlYwsX5zkh3CHAZBnw2zrEVBHl5CHl4BrdhHrlTBG40BnlnAkI3AZpAAHsVArE3BrE5BqX3zkIZBkd3BHs3wsX5zrlVBHd0Akw0BkshHrlVCrd5Anw3AkMTAHoVBrInBHIYCGpAAHsVCHw2Bnd2BZX4zkEXBksXAkEnwsXYAZ45BnEZAkMYzrsXzkE1AnI1AHlhHrs0zkh1AnI1AnETCG41BnEZAkE2AGpAAHwVCro2AHo0zrdVBHw2Bnd1AHdhHrs0zkh1AnI1AnETBG40BnlnAkI3AZpAAHAVCHd0Akw2AGX0zkI5CHl5CrE3wsXYAG45AkM3BnM3zrMVBkE3BrE3CHshKjdhaNmTcr0Ow2aNaNaNajedzn48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxUeLFmwjXjMKB0bK9VAjw6wOJVcLJ0aGwTwOF5duIjCjxneNdjzqxUMLxObK4jCjwXwrohAqoYAqwTwNxOwkPYzqxja2BWcu9ZwkPjaHIXCHs0wjXjMNeWwkPjAq4ZwjXjMNeXMKFlbK5OwkPjBGo1wrIhBZwTwNmkc25UMLxObK4jCjwXwrohAqoUAGwTwNxOMK92aLwjCjwYwjXjMNeiwkPjAqwTwOFQdqw6AGXjeumXdutlaumVaZw6wkdhBZo3wrdjzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqx0bLpiwkPjAq43wjXjMK5QcKt0bK9VwkPjMKYXbusjzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxTaKa0wjXjeumXeuJ4eqw6wjwTwOpWd2m0bK9VwkPjM29VevxWcvAjzqxPbKFmwkPYzqxPbKFmc25Uc2xQcuIjCksTwNFQd3pTMLm2c2Y1cKIjCksTwNiQauJWeNJZe2mleuhjCkoTwNiQauJWcNFmd2U0c3ojCkoTwNmkc25nM29Tc3wjCjwUAGwTwNmkc25nM29Tc3xWeNJZwkPjAroXAroXwO0TwNBWcOFZc2YgeN9TeK1mwkQ7wN9ZauJZwkP5zqxWcjw6AGXjevmXaGw6wOBPMLpmwjXjMKB0bK9VwkPjeN9TeK1mwjXjbqw6BqXjdN91cNFQcNdjCjwYwjXjM3Jneu9Ue2mleuhjCksTwOdjCkdXzqxiwkPYzqxiMNdjCjwXzkAjzqxic3amdjw6wkojzqxkc2YWdjw6wNI1ArlYBqwTwNBWcu9ZMNdjCjxNaNaNaNMjzqxkc2YWdN92aLwjCjxNaNaNaNMjzqxPbKFmwkPYzqxPbKFmc3J0cLJ0aGw6AGXjdN90MLFQc24jCjwjzqxja3piauFQcNdjCjw1wrohBGoXwjXjMNdjCkoTwNiicNFTaGw6AGXjdu9nbLFQc24jCjxkc250dN9TdZwTwN1idNeQcjw6wkohAqoXwrsXwjXjMK5QcKt0bK9VwkPjMKYXbusjzqxPbKFmeK50bKYneutZeuJlwkPXzqxPbKFmc25TaKt2aGw6AqXjbutVauYmd2BicuIjCjwYzkAjzqxPMK5lcuJkc2YWdjw6wj0YwjXjaLiXMK5lwkPjAG40wjXjeumXwkPYzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqxTbK5meumXcKtZa2mVMN90eu9UwkPYBGXjeumXMNeiwkPjAGwTwOFQduxOdN91cNFQcNdjCkATwNYQcNJ0bLpXc2mVeuJZwkPYzqx0bLpNc250d2m6aGw6AHsTwN9Veu9XwkPYzqxPMK5lcuJPbKFmwkPXzqxkcumkb2tZaKsjCkoTwNiQauJWcN1WMNmTaGw6AL0TwNBWcOFZc2YgeumUaGw6fZxWdNFmdjw6BGXjc24jCksTwNtkeumWcjw6wOFQcKIjzqx0fLpmwkPjeuJ4eqwTwOFmfvEjCjwXCkoXwjXjaN9VevBQfNIjCksYzqxUMLxObK4jCjwYwrohAqoYAqwTwNBTbKBSwkPXzqxnaLpidNt0c3wjCjxdzZwTwNmVeNJZd2J0bK1mwkPXzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwOBPc3eleLxieumWcjw6AGXjcuJ0euJZd3piM2mVaZw6wksjzqxNc250wkPjIN9jc3FWwO0TwNBWcOFZc2YgavJZMLFQc24jCOTjc3xlaLwjCkdTwN9VwkPYzqxiM3FQc24jCjxleLxieumWcjwTwOF5duIjCjx0aLi0wjXjeuJ4eqw6wj0hwro6ArojzqxNc250d2m6aGw6AHsTwN1idNeQcjw6wkshAqoXwrojzqxkcumkbZw6AqXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqx0bLojCkoTwOFQdvFmfvEjCjxdeHo0AHFdeHo0A2xdeHo0AnideHo0BrxdeHo0AnJdeHo0A2xdeHo0BuBdeHo0A2FdeHo0A2JdeHo0BrtdeHo0BrxdeHo0BuAjzqxPbKFmwkPXzqxPbKFmc25TbLamwkPYzqxPbKFmc25laLBSeu9XwkPXzqxXc3BQeumWcjw6wNBWcOFZc2YnwjXjaN9Veqw6wmxWMN90cZwTwNYmevFmdOBXMKBQcNdjCjwYwO0TwNBWcOFZc2YgMOJNaNJZwkQ7wN9ZauJZwkP2zqxWcjw6AGXjbKBWcjw6wkYlbLMhM2Yid3A9x2YWMKFmdjiZMK5lyGd|Dvpieuhhar0OHHsYzkl5BrsnzrsVCrMZBnhhEnsYzkdZAkh5zrwVAHdZBHdhAHsVBnwZCrlTAj42BnE4CGoYAG45CHEYAZXZzkl4Ano5wsAYAj45CHd0BZX0zksnAkdYwrsnzkMYBko4zrIVBns0AHAhAHAVBks2ArhTBZ40BkhZCGprAHAVBks2ArhTCG4ZAko4BGoYAj45CHd0BZXYAq44Ars0CGoYAG45CHI1AjXYAG45BHs5wsAYAG43AkEZBZXYAj4ZBko4CGoYAG43AkEZBZXYAj43Bkw0AZoYAG45CHI1AjXYAZ4XBnwZAGprAHwVAHAXBrITAHAVAkw2BnshAHwVAno3BjXYAZ4nArEnBGoYAj40CrI0AZXYAZ4nArEnBGprAHwVBkMZBHMTAHAVAno0AnIhAHwVCrA5BnsTAHAVAkw2BnshAHwVCHd0BkETAHAVArdZAkshEns0zkwZBHM5zrsYzkMnCrl0wrs1zkoXAHA4zrlVBkInBrIhAHITBZ40BkhZCGprAHIVAroXBklTBG4ZCrs1BqoYBq4ZAkITAZ4ZCHE0BjoYAj45Bns4BZXYzkh2Akd4wsAYAj42CHl5AZXYzkI1Akl5wrsZzkw2AnATAG41BHw5CGoYAG45CHEYAZXYzkh2Akd4wsXYAG45CHEYAZXYzkh2Akd4wtPOwumlDGeXbOBgeN9TeK1mL2JTaK1mcOEZxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|DudhevxicOBNc3xUDGe0dNtVd2YieuIPAZXhAjlODkYXc2Y5a29VwuaQcuXUdOJTaH0OcN9VfNJZcZdhdu9QcOFnDGd4zkh4AHd4BrxmzHs2wrEVAnd0Bjo4zkh4AHd4BrxmzHs2wrsXzkMZBHA5wrAVAHoXAklhAHoVBkw1AnlhBZ43Brs0AZoYBGo3zkd0Brs5wrohAZ4YArwnBZo0zkA3BrMYwrsVBnd2AnI2CrFmzHs1wrEVAnd0BkshAG43BnMnBHM4BuIUAHIhBq4nBnE2xZpNbKYTDGdkaNaNaNaNx1XWDkYXMLFPwuE9x00YAq40Brs2BZXnzkMZAHh1wsAYAq4YBnEXBGXnzkAYBrs5wrlVBnE0AnETAZ4nAHEYCGo5zkE3Cro4zrAVBkwnBrAhEnlVAksZBHsTAZ45Anw2Cqo5zkwYAkIYzrEVBrAnAnwhCG40Bnl0BqX0zkd0AnA1wsX5zkE3CHE0zrEVBnEYBnhhEnsXzko2BnsnzrIVBrw1AHwhAHoVBrw5BrsTBj4nBkwnBqoYAq40Akl0AGX3zkEXAnl2wsAYAq40Akl0AGX4zkE0Brd5wrsXzko2BnhYzrlVAnd4CrIhCG40Cro4zrsXzko2Aks5wsA5zkwYAkITAHoVAnM5CrIhCG4ZAHw1zrsXzkh3ArE5wrlVBrd5BrETAHsVAHhYAnshEnlVBksZAkATAHsVAnA1BHEhCG43CrM1BZXYAG40AHAXBqo5zkl2ArlTAHsVBrsnArEhEnsXzksnBHlYzrsYzkEYAno0wrsXzkAYArw0zrsYzkAnBHI0wrsXzkE0AnonzrsYzks4AHAYwsAYAG4ZBnIYCGXYAq4ZAHM0AGoYAG43CHsnCqX4zkh3BHhnwrsYzkd5ArdTBZ40ArA5BjprAHsVBnlYAnhTBG45Akh5AjoYAG4ZBnAYBGX0zkI4Bkd2wrsXzkE0AHM3zrAVBkwYCrMhHrsXzkE0AHM3zrAVBkwYCrIhKjdhbKE9x3pRd192c2Y1cKJgaKYmcKJVersOwuaQcuX9xZBNaNaNaNMOLq8|Verdana|setSize|Dvpieuhhar0OHHsnzkw5AZonzkw5A0X3zkoZAjo5zkI2BuXYzkEYBqoYzkEYBqo2zkw3AG02zkw3AIXYBZo3JktPzHa6xZpNbKYTDGdkaNaNaNaNxn48Lq9XMLFPDkYXMLFPwuE9x00YAZoYBIhnJkJPBJMnGrxiAGoYwrohAqoXzHshALMYANsYwrshAqoXwrohAGoYbrsZMHshAGoXwrohAqoYzHt2zHaPzHx2BLPOwuaQcuX9xZBNaNaNaNMODkYdz3pieuh|line_play|DudhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAjXhAjlODkYXMLFPwuE9x001zkI2Bkw4BrITCq4ZBkw0CrA2BjprBG41BkMZCrE1zrhVAns3Brw1AnwhBG41BHEYAroYBZX4zkA2CHs1BksYwrIVBHIXCHM3ArITCq40AkA3BrshHrsYzks2Anl0ArwTAHsVAkl5ArhXAZprAHsVBkE0BHw1AGXYAq44CrwXAkAZwrsZzkw1CHAYAHMTAHoVBkwYBnMnCqoYAj45Anh1ArsTAHoVBkwYBnMnCqprAHEVBrM1BHE1CqXYAq42AkwZCHlhAHIVBnoZCHIYBZXYAG44CHo0AHM2wrs1zkdXAkl1AHdTAHAVBrI1Aro1wsAYBG43Arw5BHs3zrs1zkoZAHI1BHMhAHEVBrM1BHE1CqXYBj4ZCrl2BnAZwrsZzklnCrIXAGXYBj4ZCrl2BnAZwsAYAG40AHoZAnd4zrs2zkw4CHM3AnwhAHoVAHd0ArIXBqXYBG4XAks1BHI2wrsXzks3Bro1ArETAHAVBrI1Aro1wsAYAq4YBnEXBHo0zrsnzkA5CrMnBkAhAHoVAHh2AkA0BZXYAZ4nBrhYBHEZwrsXzks4CHA2BnlTAHAVAklnBHM5AZpABq41BnMnCHE2AZXYAq40AHhZAZprBq4XCHE0AHdnzrsXzkhnAnM4AHMhAZ40CrsXAkAZBZXYAG4XCHA5BrshAj44Ars4AnA4BqXYAG4XCHA5BrshEnsVAkd0CHMnArlTAHsVArlnCHEYwroVArA3AnhnAHd3BjX5zkhZBno3Ako4wroVArA3AnhnAHd3BjX4zkw2AkE4AnM2wsAXzkonBnA4Ans3BnMTBj42CHMZCrl3CGoYzkw3Brl2Ano5zrIVBrw3Crs1BrMhAj44Ars4AnA4BqX1zkEZBnhYBHE2wsAnzkE4AHoZAnw3zrIVBrw3Crs1BrMhBq4XCHE1CHsnBZX1zkM4CHM4ArwZwrEVBHd2Anl0BkATBj4YArIYAns4CqpAAHoVAHh5AnM3CGXnzkwZCHd5AkI4wsAYAq4YCrMZAnE3zrAVAHd0CrIXCHAhAHoVAHd0ArIXBqXnzksZAnsZArs1wrsXzks3Bro1ArETAZ4XBkM3BHs0BqprAHoVAHd0ArIXBqXYzkIXAnI5Aro3wrsYzkEYArwnBnhTAq4ZAnIZCHEYAHhhAHwVCHA4BHoYzroVAkA1Akl0AHs4wsAYBq40BkI1BrI4zroVAkA1Akl0AHs4wrs1zkdXAkl1AHdTAG41ArA1CHoXBZoYBG43Arw5BHs3zrAVArM2BnIYBrEhEns1zkdXAkl1AHdTBq42Anw5BrInAGoYBq40BkI1BrI4zrIVCHoYBrs5BkEhAHwVCHA4BHoYzrIVCHoYBrs5BkEhEnsZzkw1Bnd0BHsTBG45Ars0AHl2BqoYAG42BrEXArw5zrIVBkA5BHI0CrhhAHsVAHMnCHEXAjX1zkwZAkE5Bnd5wsX1zkI1Arl2Bno1zrhVArl5BrEZBHwhEnIVBHInCHw2AHsTCq4YBHEnCrEYCqo1zkI2Bkw4BrITCq4ZArMYAHE5CGo1zkI2Bkw4BrITCq4ZBkw0CrA2BjdhaNmTcr0Ow2aNaNaNajedzn48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxnbutZaGwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wOFWdq1ZbKePeqwTwN1idNeQcjw6wks1wrs1wrohAqwTwNxOwkPYzqxja28jCksTwOBkMKYmwkPYzqxja3piauFQcNdjCjw2wrMhBjo2wjXjMNeiwkPXzkATwNxOMK92aLwjCkoVBjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxmMLBmwkPjaKYid3FQMZwTwNiQauIjCksTwNiQauJWcNYmMLamMK5lduYifGw6AqXjbumlaK9VduYifGw6AGXjeumXwkPYgGXjcutVaZw6wNJVwjXjd2J0eumVa3AjCOTjd2J0eumVa3A0wkPYzqxnaLF0bK5OdnFiM3FQc24jCjxneKx0bLFTaGwTwOxWeK5lbK5OwkP1zqxja2BWcu9ZwkPjaNaNaNaNwjXjM29Tc3wjCjwXAroXArojzqxja2sjCjwYwjXjeNtTeKJkc2YWdjw6wkoXAroXAqwTwOpiauFQcNdjCjw1wrsXwrIhAHojzqxUMLxObK4jCjwXwrsXwrsZwrojzqxja2BWcu9Zc3amdjw6wNMXakpNAqwTwOBmevFQcNenBGw6AqXjd2J0eumVa3A1MKB0bK9VwkPjau93cNYWMKEjzqxPaKtlaN9VevBQfNIjCksZzqxjc3xlaLxkc2YWdNJlwkPYzqxjc3xlaLxkc2YWdjw6wNxNMNajajwTwOBmevFQcNenA3FQeuYmwkPjwjXjd2J0eumVa3AnwkPYzqxnaLF0bK5OdnwjCksTwOBmevFQcNenAGw6AGXjdu9nbLFQc24jCjxjc3F0c20UdNmObvEjzqxnM3xWcuYidOxWe3AjCksTwOBmevFQcNenALFQeuYmwkPjwjXjd2iWe292aLxkc250dN9TwkPXzqxNc250d2m6aGw6AHwTwOBmevFQcNenANtkeumWcjw6wOBXaKJlwjXjd2J0eumVa3AZeum0cuIjCjwjzqxnaLF0bK5OdnBiM3FQc24jCjxibLxXcut5wjXjMKB0bLambKBWcjw6AGXjcN9PaKtlwkPYzqxiM3FQeNJQM29Vd2m6aGw6AZXjcumUbLF3bKF0bqw6AqXjbumlaKtZdN93wkPXzqxicveifLAjCkoTwOBPc3dYeNtTeKIjCksTwNB1d3FWcLBXaKJldZw6AqXjeNtTeKJNc250d2m6aGw6AHwTwOBmevFQcNenAKiQauIjCkoTwOBmevFQcNenA2iQauIjCkoTwOBXaKJlBuYQeNIjCksTwOBmevFQcNenBvFQeuYmwkPjwjXjaN9Veqw6wmxWMN90cZx9zqxTc2djCkoTwOxWeK5lbK5OwkP2zqxkc250dN9TL1J5AsJCwkQ7wN9VwkPXzqxWdNFmdjw6AHsTwNtkeumWcjw6wNB1d3FWcGwTwNmkc24jCjw8d3aOwveQavFPDGdYCqdhbuJQa2i0DGdYCqd|DtXWdut0br48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxXcut5wjXjMKB0bK9VAjw6wOpieLBmwjXjevmXaGw6wOB2aZwTwOBkMKYmwkPjAGwTwOBkMKYmc3amdjw6wksjzqxUMLxObK4jCjwXwrohAqo1wjXjMNekc2YWdN92aLwjCjwUAGwTwNsjCjwYwjXjMK92aLwjCjwUAGwTwOFQdqw6AGXjbKBWcOBkc2YWdN92aLwjCjwXAroXArojzqxQM29Vd2BWcu9ZwkPjaNaNaNaNwjXjMNdjCksTwNxOM29Tc3wjCjxmBHo5AHEjzqxja3piauFQcNdjCjw1wrdhBGo3wjXjMNeic3amdjw6wksjzqxja2sjCjwXwjXjMNeWwkPjAq4ZwjXjbKBWcN1idNeQcjw6wkohAqoXwrwjzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwOFQdusjCjwXzkdjzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwOFQdvpWbK50aLwjCksTwOFQdvpWbK50aLxicumOcjw6wNYmaOEjzqxQM29Vd3xmduYifGw6AGXjbumlaGw6Av0TwNBWcOFZc2YgcLJ0aGw6fZxWdNFmdjw6CqXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|DtXWd3aODjwTwNmkc24nwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwTwrAQxn48dut0bqplDGeBAHMTBZ4YAnM2AHsnAjpAAHMTBZ4YArlYBkl0BGpAAHIVAko4AHd4BGX3zksXCHs2CHE1wsXYBq4ZBnIXCHATBZ4YArlYBkl0BGprAHEVAkd1ArlnzrAVAHl5AHw2AkIhAHsVArMnAHl3zrohBZ4YAnd1BrM0BGXXwsAnzkwYAHh5BHlYzrohAqXnzks5CHsZBkw1wroTBZ4YArlYBkl0BGprAqXYAG4XAHlZAHw2wrAVAksYCrl1CHsTAHEVAks4AnA4CGo3zksnBnI0BkE1zrs0zkwYCrAnCrlhHrdVAHA3BHE2BrITAHwVBrEYArE2BGprBq4YCHAnArh1BGXYAj40BrsXBrM1wrsVBnh0Anh2BkwTAHoVArEYBnoYCqoYzkd4BrA4BkMZzrdVAHo5AHM5BrIhEnsVBnh0Anh2BkwTBq4YBnM2AndXBGo0zks5AnAXCrI1zrsVBnd3AklZAnMhBZ4YAnd1BrM0BGXYzkd3Bnw5AkA2wsAYAq4XCrs3CrE0zrsVBnd3AklZAnMhAHwVBrlXBno2AZX0zks3BkMnBno1wrsZzkE5ArdXBkATBZ4YArlYBkl0BGpAAHoVBkE0BHs2BZX3zksXCHs2CHE1wsXYAZ4nCrw4CHl2zrsYzkI1AkEXArEhHrs2zrdVAHA2BksYAnwhKjdhaNmTcr0Ow2aNaNaNajd|DtXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrETwrAQxn48dut0bqplDGeBBZ43Ard2CHwZCqXXzkd3Bnd3Cro2BZpABZ43Ard2CHwZCqXYAZ4ZAkwZAkwZwsA3zkdXBnM5Akw4zrsnzkM1AHd3BZo4zko5AHsZArwYzrs0wrhVBHM0AHoZBHATAHEhHrsYzksnAnAnAnATAHEhEnsYzkMXBkAYBHMTAHEhAHsVCHh5BnEnBGXYAZ42BHs3BndhAHsVCHh5BnEnBGXYAZ4ZAkwZAkwZwsXYAG45Crl3BrA1zroVBnd3Bnd3Bnd4wsAYAG45Crl3BrA1zroVAnE4AkwZCHdZwrsYzkMXBkAYBHMTAqoYAG4YAnAnAnAnzrohHrhVBHM0AHoZBHATAqprCq4XCHsYAkoZAGXXwrdVBno3BklZAkhTAq4nBrhZAkw5BnwhBZ43Ard2CHwZCqXXzkd3Bnd3Bnd3Cqpbws0nzkEZBHM0AHoYzrs0wsXXzkh1BkEYArw1AZXYBqprAq4nCrA0Akd5AnsTAHEhAqXYAZ42BHs3BndhAqXYAZ4ZAkwZAkwZwsXXzroVBnd3Bnd3CHsnwsAXzroVAnE4AkwZCHdZwroVAnhnBrw3CHAYzrohAq44BHM0AHoZBHATAqpAAZ40AkI2BrsXAGXXwsAnzkh5CrMZAnA0zrohBq4ZCrwXBHsZBZXXzkA0CrwZAkl3Ajo0zkw4Ako1AHw3zroVBnd3Bnd3Bnd4wsX0zkw4Ako1AHw3zrsnzkwZAkwZAkwhEnEVAkhZArIYAkdTAHAVBkIYBnd3wrAVCrl4BkwnAnETAHEhAZ40AkI2BrsXAGXYBqpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|customimage|1fZxnM3xmaK5kc2YWdjw6wkoXAroXAqwTwOFWc2YjMLwjCOTjM29Tc3wjCjwXAroXArojzqxPbKFmwkPYzqxUMLxObK4jCjwUAkohAqoXwrojzqxOdNtlbKJVeqw6AGXjMK5QcKt0bK9VwkPjMKYXbusjzqxiwkPjAGwTwNYmaOFicNFZbKePevpiauFQcNdjCksXzqxPwkP1AqXjd3FZaLFkbu9VaOJTcvBkdNJmcjw6AGXjbumlaLJVeumTd3FidOFmaqw6AqXjbumlaLeQeuiWeLFUc3aQcNdjCksTwNiQauJTaKt2aLFQcKJWeLEjCkATwOpWd2m0bK9VwkPjMN90eu9UwjXjM2YQM2UidNJiwkPXzqxPbKFmc25XMLJnaGw6AqXjbumlaKFWe24jCksTwNiQauJReLB0aOJTcqw6Av0TwNBWcOFZc2Ygeum0cuIjCOTjc3xlaLwjCksTwN9VwkPXzqxiM3FQc24jCjx0bLFTaGwTwOF5duIjCjx0aLi0wjXjdu9nbLFQc24jCjx0c3oUcuJNeqwTwNBTbKBSwkPXzqxPMK5lwkPXzqx0aLi0wkPjwjXjeNtZwkPjeum0cuIjzqxPbKFmwkPYzqxPbKFmc25Xcut5wkPYzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwNxOwkPYzqxja2sjCkoVBqXjMNeXMKFlbK5OwkPjBjo2wrMhBjwTwNYmevFmdOBXMKBQcNdjCjwXwjXjd2iWe3FQeuYmduYifKYQd3EjCksTwNaWcOEjCjxGc2xWeu8jgGXjM29VevxWct9TbK5mwkQ7wN9ZauJZwkPnzqxWcjw6AGXjevmXaGw6wOBPMLpmwjXjMKB0bK9VwkPjcumVaGwTwNhjCkETwOxWeK5lbK5OwkPjAGwTwOdjCksXAqXjMGw6AGXjMKxOwkPjAq4nwjXjMKYWMKEjCjwXzkEjzqxic3amdjw6wkojzqxkc2YWdjw6wNI1ArlYBqwTwNBWcu9ZMNdjCjxNaNaNaNMjzqxkc2YWdNYWMKEjCjxNaNaNaNMjzqxkc2YWdN92aLwjCjxNaNaNaNMjzqxjeKaNaLwjCOTjc24jCkoTwNBWcu9ZwkPjaNaNaNaNwjXjMGw6Aq41gGXjdu9nbLFQc24jCjxjc3F0c20jzqxUMLxObK4jCjwXwrs1wrIXwrs1wjXjbutVauYmwkPYzqxja3piauFQcNdjCjw1wrohBGoXwjXjeumXwkPYzqxPbKFmwkPYzqxPbKFmc25TbLamwkPYzqxPMK5lcuJnM2tTaGw6wksVAZwTwNYQcNJ0bLpUMLxObK5jc3F0c20jCks1zqx0c3p0bLojCksTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpja3xWeK5lbK5OwkPnzqxmfvpicNEjCjwYzkdjzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQdvpiauFQcNdjCjw1wrdhBqo3wjXjeumXaN9VevBQfNIjCksYzqx0bLpja2sjCjwYwjXjeumXMGw6wkoVCqwTwNYQcNJ0bLpXc2mVeuJZwkPYzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwOFQdu1idNeQcjw6wkohAqoXwrojzqxkeLB0c213bKF0bqw6AqXjc250c3ojCksTwOpWbK50aKEjCksTwNBTbKBSMLxmMGw6AqXjeNtTeKIjCkoTwNBTbKBScKtZa2mVwkPjAqoXwrIhAqwTwNBTbKBSd2BicuJ5wkPjAG4YwjXjM2YQM2TjCkt9zqxkc250dN9TL3pTMLljCOTjc3xlaLwjCkwTwN9VwkPYzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPBGXhAZlODkYXMLFPwuE9x00YAG40BrMnBrMZzrMVAHI3CrsZBGpAAG4YBroYCHwnAGXXzksYBkM2BkM3wsAYzkoYBrAZBklZzroVArEnBnIhAq44CrE3BHl2AjXXwroVBnA2BkhZBklTAqprAq4nAnAYBnAXCqXXwroVAronBnoYCHwTAq4nAkhYAkIhAq4XArA3Ars5AjXXzkdZCHs2BkM3wsXXzroVBnw5AHM2BkdhHroTAHAVAkdXCrAnAZpAAq4XArA3Ars5AjXYAZ4ZBno4AnAnwsAXzkoXAndXAHlZzrsnzkM3AHh3BGoXzkAnAns3Ano4zrs0wroVBnA2BkhZBklTAHEhEnoVCrh4BrMYBHETAHEhAG4XAHEnAkM5AjXYAZ45Brh5BHhnwrsVAHIYAkl4ArhTAHAVCrd2ArEYBZpAAHsVBrE2AnE2AjX3zkh0Aks4BnIhEnsYzkM5ArM3AnsTBZ42Brs2BkM3wrsYzkh0Bks1AnhTBZ4nAnlXBkw1wrsYzkh0Bks1AnhTBZprAHsVCrE2AHInCqX2zkM2ArlnBnIhAHsVBklXBkdnAGX2zkA2AHl3CHs3wrsYzkE0BkA0BkwTBj4YBHd4AHw1wsXYAG40BrMnBrMZzrMVAHI3CrsZBGpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|fullwheel|action_back|default_h|444444|logos|vast_progressbgcolor|908349|00849913|73312408|39769913|73852408||50989913|98752408|64309913|28392408|02432408|97129913|09932408|17432408|72892408|03369913|Input|PluginUpload|26192408|98389913|36152408|46112408|90889913|52352408|83449913|27949913|17269913|75949913||42432408|60889913|3699241|64769913|80932408|57329913|||70972408|49829913|60952408|89792408|16112408|speed4live|08569913|34889913|current_channel|06192408|48629913|91252408|62369913|76252408|78569913|88589913|98549913|61112408|2002|1310991|9589241|81892408|37689913|2155241|94929913|7255241|partnerprerollor|4310991|8833241|eventstrackervast|5810991|7310991|32872408|0339241|8180991|0213241|9056991|9932991|2800991|4843241|3796991|vpaid_slotinframe|vast_resound|93169913|63169913|69872408|94772408|67729913|80612408|61009913|87332408|sub_settings|f2img|fimg|minivis|default_channel|53509913|introtxt|17872408|introtitle|45709913|introclosetime|introclickable|introskiptime|02932408|midrollpoint|partnermidrollor|54409913|partnerpostrollor||partnerpauserollor|9699241|4685241|vpaid_timeout|usernew|d9bb8c|aaaaaa|ffc7d1|e8bbff|feba54|faed54|62de50|72ccf8|250|shuffle8|redirectplaylist|4bd9ac|f2parent|pjslng_sub_sizeproc|hlsqhsort|clr_|home|pjslng_|onchange|accept|pressed_|PluginShare_whatsapp|b3fee8|ffff00|offsetoptions|onMouseOver|marginRight|brdl|brdlc|brdla|paddingbottom|scroll_right|scroll_up|scrollWidth|041|onMouseOut|borderBottom|D90000|borderRight|clear|scrollTo|dropnohide|hidesmoothly|contains|subclr|644082|409829|073DA0|current_|web|3958991|3780991|0038991|3092991|actn|9978991|7997241|9996991|49672408|C16|0008991|89532408|38992408|00069913|M12|8142991|hidearrow|9825241|2028991|3197241|9280991|3443241|6532991|3695241|4871241|2357241|whatsapp|18772408|M14|sleepoptions|1148991|12492408|6100991|sleep2options|50092408|0068991|70329913|01469913|01349913|01549913|49132408|01289913|5473241|28889913|5781241|81329913|4865241|00029913|5003241|14009913|7581241|vpaid_timeout2|vast_midroll_vmap|46361894|dashlowquality|04688705|3870176|0174202|6306539|13718414|25694808|8450875|2536879|51661242|01249004|4324598|errortimeout|dashcookies|91761122|dashdebug|16x9|545084|158849|2904441|2176147|1213742|3701951|nameofdashquality|vast_skip|4774119|6399635|82476969|5495798|06600745|embedwidth|embedsize|shareiconmargin|shareiconscaleover|27203981|shareiconscale|sharetop|3524524|vast_click|6935719|3658545|706974|sharetitle|97987656|ga_proc|3468113|00668076|3602134|vast_impression|046119|1533357|4557651|1980378|0856637|5770455|settings3|541335|593535|9031916|8512623|settings2action|settings1action|settings1|39043363|0588595|4794819|titlecolor|95640915|7073175|54918887|8413385|79867139|8681427|61104201|8949469|6708602|settings3action|L12|4883882|490814|1667378|poster_floatbgcolor|7454539|3811714|0134958|poster_floatheight|2547336|3351462|4155588|461584|settings4|poster_floatwidth|poster_floatposition|poster_floatmargin|settings5action|settings5|7774154|3677693|9784469|0997273|7244686|settings4action|66394451|560|vast_postroll_vmap|vast_xbgcolor|8587241|0266991|9829241|2829241|PluginShare_telegram|5em|vast_xcolor|M15|6001007|47186369|3186567|8898991|vast_titlecolor|45846159|L14|vast_titlebgcolor|vast_skipcolor|vast_skipbgcolor|vast_linktxtcolor|vast_linktxtbgcolor|5011287|vast_introtbimp|9894991|7465241|vast_midrolltbimp|7168991|vast_pauseroll_vmap||3343241|vast_preroll_vmap|4792991|1843241|5794991|vast_openclick|vast_unmutebutcolor|vast_unmutebutbgcolor|2095241|2593241|7398991|8542991|vast_default_volume|3091241|vast_unmutebutonce|5904991|6715241|vast_unmutehover|vast_linktxtonmobile|vast_volumecolor|vast_volumebgcolor|vast_progresscolor|vast_introtimebreak|vast_midrolltimebreak|6017798|75264618|9481644||vast_volume|591821|18940216|56501681|5646609|vast_closeonclick|vast_pauseonclick|55161471|80589866|0203322|39594688|1945595||vast_timeout|embedheight|55677205|4089931|39285947|0254896|78152031|1461085|91554129|86775181|76053503|vast_midroll_counter|vast_pauseroll_limit|vast_playroll_counter|vast_playroll_limit|vast_postroll_counter|71310145|vast_postrolltbimp|vast_postrolltimebreak|vast_postroll_limit|vast_pauseroll_counter|vast_pauserolltbimp|vast_pauserolltimebreak|525863|vast_title|vast_preroll_counter|vast_prerolltbimp|vast_prerolltimebreak|83887768|89905178|92444761|54028255|vast_preroll_andlimit|90280076|vast_preroll_limit|62378254|029|Destroyed|036|playError|nativeaudio|WebKitMediaSource|WebKitSourceBuffer|appendBuffer|hlsaddbitrate|firstLevel|AudioTrack|Infinity|2000px|playtry|interrupted|onpause|automute|playError2|autoplay_denied|hlsforce|webkitAudioContext|createMediaElementSource|createGain|destination|cast|disabled|wake|Video|webkitplaybacktargetavailabilitychanged|hlsermd|AUDIO_TRACKS_UPDATED|AUDIO_TRACK_SWITCHING|subtitleDisplay|hlssubtracks|FRAG_LOADED|SUBTITLE_TRACKS_UPDATED|subtitleTracks|ERROR|networkError|mediaError|recoverMediaError|aborted|hls_error|Level|regress|PluginWS|wsconfig|sleep|watching|loadstart|loadeddata|webkitfullscreenchange|webkitDisplayingFullscreen|WebKitPlaybackTargetAvailabilityEvent|availability|FRAG_PARSING_METADATA|cancelskip|hdbfmb|hdbfdt|noset|to_right|lrpp|customwidth|wproc|02|isOn|tskp|cancel|showvolmobile|seektome|seekiconbut|ssfly|bezier|ssdown|combined|PluginSettings2|showovr|showuntilmeta|hideonleaveandplay|nativemobile|hdn|available|setWsQuality|webkitcurrentplaybacktargetiswirelesschanged|webkitShowPlaybackTargetPicker|webkitSupportsPresentationMode|pictureInPictureEnabled|disablePictureInPicture|webkitPresentationMode|pictureInPictureElement|requestPictureInPicture|exitPictureInPicture|setAudio|setWsAudioTrack|grdt|level|getDash|fillvideo|HlsSubTrack|subtrack|playbackRate|kind|dashInterval|reset|customspeeds|ndash|fragdata|hlsfdt|hidelap|dailymotion|eng|English|rus|Speed|Audiotrack|FloatPosterScale|rldnornd|PluginFloatPoster|New|hqdefault|Image|2160|MediaVimeo|MediaPjs|MediaDaily|RemoveAll|Created|vast_posterurl|vast_loadtxtd|nomedia|0001|createposter|customqualities|3840|dragging|tags|redirectafter|winmob|dvtp|playlists|EXTINF|loaderror|tryotherquality|Alternative|reloadtimes|Break|Seeking|1440|Quality|qualitypause|1600p|426|240|854|480|1280|1920|1080|2560|scaledrag|scaledrag0|relurl|xhrSetup|apple|fps|widevine|019|playready|clearkey|licenseUrl|serverCertificateUrl|emeEnabled|drmSystems||withCredentials|hlscltps|attachMedia|MEDIA_ATTACHED|attached|MANIFEST_LOADED|MANIFEST_PARSED|LEVEL_SWITCH|LEVEL_SWITCHED|LEVEL_LOADED|Live|FRAG_CHANGED|fragment|capLevelToPlayerSize|enableWorker|error_time|nativenodownload|urlmse|codecs|avc1|42E01E|mp4a|tagcors|crossorigin|crossOrigin|drunchr|ynxnopip|controlsList|fragLoadingTimeOut|nodownload|taginframe|complete|nativehlsinsafari|nativehlsinedge|support|flussonic|PlugMediaChannels|DASH|autoStartLoad|manifestLoadingTimeOut|hideonbar|hidesmall|finishnormal|observe|88484718|allowLinker|require|autoLink|word|container_w_procent|35px|07|transbg|oframe|childList|getDate||borderin|inset|querySelector|pjscolor|backface|manipulation|origin|indent|outline|visited|srvsga|Cross|class|OqFAAAAdklEQVQoz42QQQ7AIAgEF|pjs_thumbnail_|200000||shape|grdth|grdta|grdtc|mrgnp|brdclr|brdtop|iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT|kbq|hash|RWAlnQyyazA4aoAB4FsBSA|bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg|DOMContentLoaded|fast|unatpl|pljscom|viewinit|intvsbl|pstrcnfg|emptyremove|answer|hover|oncontextmenu|offsetwidth|layerX|Local|ChromeCast|PluginEffects|PluginMediaTags|passonstart|mobtch1|nfscldr|nfsclios|nombclck|seeksidesmob|offsetX|MSFullscreenChange|change2playlist_bottom|posterstime|pstrvd|_vdpsrt|Logo|Orientation|webkitFullscreenElement|webkitIsFullScreen|mozFullScreen|msFullscreenElement|fullscreenElement|fullscreenchange|keydown|ContextMenu|||||||||||rafinit|rc_custom|rc_nobrand|uppercase|99999|rmright|ref|15em|playback|panel|autoplaynomobiletv|sessid|keyup|sleeptimer0|offsettimerinit|startvisibility|PluginMini|PluginBlock|quizes|PluginQuiz|mouseenter|mouseleave|orientationchange|move|roundingver_final|hlsdvrtime|dropopen|bufferDeg|showboth|separator|buffering|SettingsTimer|maxHeight|ShowSettingsBut|enter|187|189|bufferInterval|countdown|pauseonhover|counter|PluginCountdown|iconspress|link2|ontop2|PlgnCntrlTmln|webp|_text|SVG|ontouchend|showduration|cast_available|||||||||||flipy|hideuntilstartedios|hideall|hideonend|hideondesktop|hideonmobile|hideunwait|hidewait|hideafterstart|hidelastpl|hide0timestore|hideuntiltext|hideuntilended|pjs_cast_button_|hideonvod|hideonleave|hidenormscreen|hideonunmute|hideonlive|hideonmeta|hidemini|hidenomini|hidenoab|hideab|hideonyoutube|flipx|touch_|235|valuemarginbottom|alphas|abg|lines1|aload|colorover|valuepaddingtop|valuepaddingbottom|valuepaddingleft|valuepaddingright|valuemargintop|valuemarginleft|running|valuemarginright|l3v_left|handlemargintop|handlemarginbottom|handshdw|drop|225|onmouseup|onmousedown|handlemarginleft|handlemarginright||||Color|hdbffs||_bg|||tippointeralign|bggrl|bggrc|bgbrdrw|clickmarginleft|clickmarginright|iconmargintop|iconmarginbottom|iconmarginleft|iconmarginright|rotateonclick|180|hdbfnr|tipmargintop|tipmarginbottom|tipmarginleft|tipmarginright|hidesec2|scale0|control_time|triangle|control_mute|volume_element|slider|finish|996|norootplstart|nomobile|midrollcrtm|MediaMetadata|artwork|previoustrack|nexttrack|stylesheet|googleapis|css2|iosv|iemobile|swap|blackberry|circle|clk|matches|same|async|midroll_time|getVolume|number|vastmute|vastnow|vastinfo|vastpause|vastresume|vaststart|startAd|toUpperCase|__storage_test__|||filetype|currentfile|vrsn|vastids|adsystem|vpaid|wrapper0|roll|wkdt|NaNpx|fine|showplaylist|appVersion|platform|ipod|Windows|Safari|Edge|Trident|Opera|microsoft|tvOS|trident|userAgent|appName|993|983|915|885|775|MacIntel|webOS|matchMedia|FindPjsDiv|WebkitAppearance|olor|setProperty|repeating|45deg|1000000|control_buffer|cssText|Philips|encode|nodeName|arguments|Tizen|Roku|BRAVIA|armv|substring|reduce|showvlt|playlist_length|994|adShown|capiom|eventlisteners|Tiny|resumed|unmuted|rewound|vast_Impression|clipboard|Small|Copied|createEvent|initEvent|dispatchEvent|logapi|toogle|youtubeid|vpaid_|watch|playerjs_hit|Test|adsinvitation|Medium|Full|1296p|Super|Quad|Ultra|ads|the|nonInteraction|advertiser|website|Audio|LIVE|Enter|300000|Metric|gainact|VpaidSet|dwn|playlist_folders|fillStyle|once|castinit|Active|10000|sscopyright|Courier|Arial|fillText|switchpip|All|toDataURL|casterror|castdevice|jpeg|invert|cut1|cut2|0val|timeplay|startvast||mainresize|prt|copied|Previous|Reset|vastbreak|Boolean|plduration|moveplaylist|isfullscreen|Sleep|Shadow|fix|Font|unfix|Bottom|Yes|1val|Skip|997|Firefox|985|chngwd|outros|webkitSupportsFullscreen|267|webkitEnterFullScreen|webkitendfullscreen|webkitExitFullscreen|wheelDelta|crossdomain|pjsiframed|issue|vlscrl|3600000|185|096|yandex|vast_init|crtm|fileend|979|skipimpessed|scrnstp|pjsstat|pjsstatid|PluginStat|AdBlock|Resume|01|Progress|416|reloadjustevent|dontseekforward|downself|_self|reloadstart|nooverlay|PasswordTime|344|tracking||skipimprsd|bgload2|wid|vast_stop|and2limit|Next|preloading|disablePreload|VastInsertAnd|984|VastInsertOr|vast_finish|vast_error|vast_ima|vldcntrInterval|nativehlstv|vast_dontplay|EmptyVastUrl|Pass|RemovePassword|posterfull|VastRemoveUrl|VastError|003|VastOverlay|bgload|VastImpression|VpaidStarted|VastShow|007|VastReady|vast_ready|vastbgpreload|981|tagLive|renew|001|PluginVastTimeMsg|988|startdelay|vast_startdelay|alarm|PluginWater|reloadplus|water|705|606|659|2048|showfrom1file|192|962|openlast|redirectparent|blnk|redirectblank|scrollY|547|918|const|globalfont||pageXOffset|897|747|785||818||848|874|971|191|nativeontv|0123456789|nativenotandroid|heartbeats|isOpen|483|sess'.split('|'), 0, {}))
!function t(e) {
    var r, i;
    r = this, i = function () {
        "use strict";

        function r(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.push.apply(r, i)
            }
            return r
        }

        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(i), !0).forEach((function (e) {
                    var r, a, s;
                    r = t, a = e, s = i[e], (a = n(a)) in r ? Object.defineProperty(r, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[a] = s
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function n(t) {
            var e = function (t, e) {
                if ("object" != typeof t || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var i = r.call(t, e || "default");
                    if ("object" != typeof i) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
        }

        function a(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, n(i.key), i)
            }
        }

        function s(t, e, r) {
            return e && a(t.prototype, e), r && a(t, r), Object.defineProperty(t, "prototype", {writable: !1}), t
        }

        function o() {
            return o = Object.assign ? Object.assign.bind() : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }, o.apply(this, arguments)
        }

        function l(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, h(t, e)
        }

        function u(t) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, u(t)
        }

        function h(t, e) {
            return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                return t.__proto__ = e, t
            }, h(t, e)
        }

        function d(t, e, r) {
            return d = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }() ? Reflect.construct.bind() : function (t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i));
                return r && h(n, r.prototype), n
            }, d.apply(null, arguments)
        }

        function c(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return c = function (t) {
                if (null === t || !function (t) {
                    try {
                        return -1 !== Function.toString.call(t).indexOf("[native code]")
                    } catch (e) {
                        return "function" == typeof t
                    }
                }(t)) return t;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, r)
                }

                function r() {
                    return d(t, arguments, u(this).constructor)
                }

                return r.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h(r, t)
            }, c(t)
        }

        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
            return i
        }

        function g(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (r) return (r = r.call(t)).next.bind(r);
            if (Array.isArray(t) || (r = function (t, e) {
                if (t) {
                    if ("string" == typeof t) return f(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(t, e) : void 0
                }
            }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var i = 0;
                return function () {
                    return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function v(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }

        var m = {exports: {}};
        !function (t, e) {
            var r, i, n, a, s;
            r = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, n = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, s = {
                buildAbsoluteURL: function (t, e, r) {
                    if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                        if (!r.alwaysNormalize) return t;
                        var n = s.parseURL(t);
                        if (!n) throw new Error("Error trying to parse base URL.");
                        return n.path = s.normalizePath(n.path), s.buildURLFromParts(n)
                    }
                    var a = s.parseURL(e);
                    if (!a) throw new Error("Error trying to parse relative URL.");
                    if (a.scheme) return r.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : e;
                    var o = s.parseURL(t);
                    if (!o) throw new Error("Error trying to parse base URL.");
                    if (!o.netLoc && o.path && "/" !== o.path[0]) {
                        var l = i.exec(o.path);
                        o.netLoc = l[1], o.path = l[2]
                    }
                    o.netLoc && !o.path && (o.path = "/");
                    var u = {
                        scheme: o.scheme,
                        netLoc: a.netLoc,
                        path: null,
                        params: a.params,
                        query: a.query,
                        fragment: a.fragment
                    };
                    if (!a.netLoc && (u.netLoc = o.netLoc, "/" !== a.path[0])) if (a.path) {
                        var h = o.path, d = h.substring(0, h.lastIndexOf("/") + 1) + a.path;
                        u.path = s.normalizePath(d)
                    } else u.path = o.path, a.params || (u.params = o.params, a.query || (u.query = o.query));
                    return null === u.path && (u.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(u)
                }, parseURL: function (t) {
                    var e = r.exec(t);
                    return e ? {
                        scheme: e[1] || "",
                        netLoc: e[2] || "",
                        path: e[3] || "",
                        params: e[4] || "",
                        query: e[5] || "",
                        fragment: e[6] || ""
                    } : null
                }, normalizePath: function (t) {
                    for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(a, "")).length;) ;
                    return t.split("").reverse().join("")
                }, buildURLFromParts: function (t) {
                    return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                }
            }, t.exports = s
        }(m);
        var p = m.exports, y = Number.isFinite || function (t) {
            return "number" == typeof t && isFinite(t)
        }, E = Number.isSafeInteger || function (t) {
            return "number" == typeof t && Math.abs(t) <= T
        }, T = Number.MAX_SAFE_INTEGER || 9007199254740991, S = function (t) {
            return t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached", t.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", t
        }({}), L = function (t) {
            return t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError", t
        }({}), A = function (t) {
            return t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", t.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", t.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", t.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_PARSING_ERROR = "levelParsingError", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.FRAG_GAP = "fragGap", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown", t
        }({}), R = function () {
        }, k = {trace: R, debug: R, log: R, warn: R, info: R, error: R}, b = k;

        function D(t) {
            for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
            r.forEach((function (e) {
                b[e] = t[e] ? t[e].bind(t) : function (t) {
                    var e = self.console[t];
                    return e ? e.bind(self.console, "[" + t + "] >") : R
                }(e)
            }))
        }

        function I(t, e) {
            if ("object" == typeof console && !0 === t || "object" == typeof t) {
                D(t, "debug", "log", "info", "warn", "error");
                try {
                    b.log('Debug logs enabled for "' + e + '" in hls.js version 1.5.1')
                } catch (t) {
                    b = k
                }
            } else b = k
        }

        var w = b, C = /^(\d+)x(\d+)$/, _ = /(.+?)=(".*?"|.*?)(?:,|$)/g, x = function () {
            function t(e) {
                "string" == typeof e && (e = t.parseAttrList(e)), o(this, e)
            }

            var e = t.prototype;
            return e.decimalInteger = function (t) {
                var e = parseInt(this[t], 10);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
            }, e.hexadecimalInteger = function (t) {
                if (this[t]) {
                    var e = (this[t] || "0x").slice(2);
                    e = (1 & e.length ? "0" : "") + e;
                    for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++) r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                    return r
                }
                return null
            }, e.hexadecimalIntegerAsNumber = function (t) {
                var e = parseInt(this[t], 16);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
            }, e.decimalFloatingPoint = function (t) {
                return parseFloat(this[t])
            }, e.optionalFloat = function (t, e) {
                var r = this[t];
                return r ? parseFloat(r) : e
            }, e.enumeratedString = function (t) {
                return this[t]
            }, e.bool = function (t) {
                return "YES" === this[t]
            }, e.decimalResolution = function (t) {
                var e = C.exec(this[t]);
                if (null !== e) return {width: parseInt(e[1], 10), height: parseInt(e[2], 10)}
            }, t.parseAttrList = function (t) {
                var e, r = {};
                for (_.lastIndex = 0; null !== (e = _.exec(t));) {
                    var i = e[2];
                    0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1].trim()] = i
                }
                return r
            }, s(t, [{
                key: "clientAttrs", get: function () {
                    return Object.keys(this).filter((function (t) {
                        return "X-" === t.substring(0, 2)
                    }))
                }
            }]), t
        }();

        function P(t) {
            return "SCTE35-OUT" === t || "SCTE35-IN" === t
        }

        var F = function () {
            function t(t, e) {
                if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
                    var r = e.attr;
                    for (var i in r) if (Object.prototype.hasOwnProperty.call(t, i) && t[i] !== r[i]) {
                        w.warn('DATERANGE tag attribute: "' + i + '" does not match for tags with ID: "' + t.ID + '"'), this._badValueForSameId = i;
                        break
                    }
                    t = o(new x({}), r, t)
                }
                if (this.attr = t, this._startDate = new Date(t["START-DATE"]), "END-DATE" in this.attr) {
                    var n = new Date(this.attr["END-DATE"]);
                    y(n.getTime()) && (this._endDate = n)
                }
            }

            return s(t, [{
                key: "id", get: function () {
                    return this.attr.ID
                }
            }, {
                key: "class", get: function () {
                    return this.attr.CLASS
                }
            }, {
                key: "startDate", get: function () {
                    return this._startDate
                }
            }, {
                key: "endDate", get: function () {
                    if (this._endDate) return this._endDate;
                    var t = this.duration;
                    return null !== t ? new Date(this._startDate.getTime() + 1e3 * t) : null
                }
            }, {
                key: "duration", get: function () {
                    if ("DURATION" in this.attr) {
                        var t = this.attr.decimalFloatingPoint("DURATION");
                        if (y(t)) return t
                    } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
                    return null
                }
            }, {
                key: "plannedDuration", get: function () {
                    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
                }
            }, {
                key: "endOnNext", get: function () {
                    return this.attr.bool("END-ON-NEXT")
                }
            }, {
                key: "isValid", get: function () {
                    return !!this.id && !this._badValueForSameId && y(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
                }
            }]), t
        }(), M = function () {
            this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                start: 0,
                first: 0,
                end: 0
            }, this.parsing = {start: 0, end: 0}, this.buffering = {start: 0, first: 0, end: 0}
        }, O = "audio", N = "video", U = "audiovideo", B = function () {
            function t(t) {
                var e;
                this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e = {})[O] = null, e[N] = null, e[U] = null, e), this.baseurl = t
            }

            return t.prototype.setByteRange = function (t, e) {
                var r, i = t.split("@", 2);
                r = 1 === i.length ? (null == e ? void 0 : e.byteRangeEndOffset) || 0 : parseInt(i[1]), this._byteRange = [r, parseInt(i[0]) + r]
            }, s(t, [{
                key: "byteRange", get: function () {
                    return this._byteRange ? this._byteRange : []
                }
            }, {
                key: "byteRangeStartOffset", get: function () {
                    return this.byteRange[0]
                }
            }, {
                key: "byteRangeEndOffset", get: function () {
                    return this.byteRange[1]
                }
            }, {
                key: "url", get: function () {
                    return !this._url && this.baseurl && this.relurl && (this._url = p.buildAbsoluteURL(this.baseurl, this.relurl, {alwaysNormalize: !0})), this._url || ""
                }, set: function (t) {
                    this._url = t
                }
            }]), t
        }(), G = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkeys = void 0, i.type = void 0, i.loader = null, i.keyLoader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new M, i.data = void 0, i.bitrateTest = !1, i.title = null, i.initSegment = null, i.endList = void 0, i.gap = void 0, i.urlId = 0, i.type = e, i
            }

            l(e, t);
            var r = e.prototype;
            return r.setKeyFormat = function (t) {
                if (this.levelkeys) {
                    var e = this.levelkeys[t];
                    e && !this._decryptdata && (this._decryptdata = e.getDecryptData(this.sn))
                }
            }, r.abortRequests = function () {
                var t, e;
                null == (t = this.loader) || t.abort(), null == (e = this.keyLoader) || e.abort()
            }, r.setElementaryStreamInfo = function (t, e, r, i, n, a) {
                void 0 === a && (a = !1);
                var s = this.elementaryStreams, o = s[t];
                o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, n)) : s[t] = {
                    startPTS: e,
                    endPTS: r,
                    startDTS: i,
                    endDTS: n,
                    partial: a
                }
            }, r.clearElementaryStreamInfo = function () {
                var t = this.elementaryStreams;
                t[O] = null, t[N] = null, t[U] = null
            }, s(e, [{
                key: "decryptdata", get: function () {
                    if (!this.levelkeys && !this._decryptdata) return null;
                    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
                        var t = this.levelkeys.identity;
                        if (t) this._decryptdata = t.getDecryptData(this.sn); else {
                            var e = Object.keys(this.levelkeys);
                            if (1 === e.length) return this._decryptdata = this.levelkeys[e[0]].getDecryptData(this.sn)
                        }
                    }
                    return this._decryptdata
                }
            }, {
                key: "end", get: function () {
                    return this.start + this.duration
                }
            }, {
                key: "endProgramDateTime", get: function () {
                    if (null === this.programDateTime) return null;
                    if (!y(this.programDateTime)) return null;
                    var t = y(this.duration) ? this.duration : 0;
                    return this.programDateTime + 1e3 * t
                }
            }, {
                key: "encrypted", get: function () {
                    var t;
                    if (null != (t = this._decryptdata) && t.encrypted) return !0;
                    if (this.levelkeys) {
                        var e = Object.keys(this.levelkeys), r = e.length;
                        if (r > 1 || 1 === r && this.levelkeys[e[0]].encrypted) return !0
                    }
                    return !1
                }
            }]), e
        }(B), K = function (t) {
            function e(e, r, i, n, a) {
                var s;
                (s = t.call(this, i) || this).fragOffset = 0, s.duration = 0, s.gap = !1, s.independent = !1, s.relurl = void 0, s.fragment = void 0, s.index = void 0, s.stats = new M, s.duration = e.decimalFloatingPoint("DURATION"), s.gap = e.bool("GAP"), s.independent = e.bool("INDEPENDENT"), s.relurl = e.enumeratedString("URI"), s.fragment = r, s.index = n;
                var o = e.enumeratedString("BYTERANGE");
                return o && s.setByteRange(o, a), a && (s.fragOffset = a.fragOffset + a.duration), s
            }

            return l(e, t), s(e, [{
                key: "start", get: function () {
                    return this.fragment.start + this.fragOffset
                }
            }, {
                key: "end", get: function () {
                    return this.start + this.duration
                }
            }, {
                key: "loaded", get: function () {
                    var t = this.elementaryStreams;
                    return !!(t.audio || t.video || t.audiovideo)
                }
            }]), e
        }(B), H = function () {
            function t(t) {
                this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = t
            }

            return t.prototype.reloaded = function (t) {
                if (!t) return this.advanced = !0, void (this.updated = !0);
                var e = this.lastPartSn - t.lastPartSn, r = this.lastPartIndex - t.lastPartIndex;
                this.updated = this.endSN !== t.endSN || !!r || !!e || !this.live, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
            }, s(t, [{
                key: "hasProgramDateTime", get: function () {
                    return !!this.fragments.length && y(this.fragments[this.fragments.length - 1].programDateTime)
                }
            }, {
                key: "levelTargetDuration", get: function () {
                    return this.averagetargetduration || this.targetduration || 10
                }
            }, {
                key: "drift", get: function () {
                    var t = this.driftEndTime - this.driftStartTime;
                    return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
                }
            }, {
                key: "edge", get: function () {
                    return this.partEnd || this.fragmentEnd
                }
            }, {
                key: "partEnd", get: function () {
                    var t;
                    return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                }
            }, {
                key: "fragmentEnd", get: function () {
                    var t;
                    return null != (t = this.fragments) && t.length ? this.fragments[this.fragments.length - 1].end : 0
                }
            }, {
                key: "age", get: function () {
                    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                }
            }, {
                key: "lastPartIndex", get: function () {
                    var t;
                    return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].index : -1
                }
            }, {
                key: "lastPartSn", get: function () {
                    var t;
                    return null != (t = this.partList) && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                }
            }]), t
        }();

        function V(t) {
            return Uint8Array.from(atob(t), (function (t) {
                return t.charCodeAt(0)
            }))
        }

        function Y(t) {
            var e, r, i = t.split(":"), n = null;
            if ("data" === i[0] && 2 === i.length) {
                var a = i[1].split(";"), s = a[a.length - 1].split(",");
                if (2 === s.length) {
                    var o = "base64" === s[0], l = s[1];
                    o ? (a.splice(-1, 1), n = V(l)) : (e = W(l).subarray(0, 16), (r = new Uint8Array(16)).set(e, 16 - e.length), n = r)
                }
            }
            return n
        }

        function W(t) {
            return Uint8Array.from(unescape(encodeURIComponent(t)), (function (t) {
                return t.charCodeAt(0)
            }))
        }

        var j = "undefined" != typeof self ? self : void 0, q = {
                CLEARKEY: "org.w3.clearkey",
                FAIRPLAY: "com.apple.fps",
                PLAYREADY: "com.microsoft.playready",
                WIDEVINE: "com.widevine.alpha"
            }, X = "org.w3.clearkey", z = "com.apple.streamingkeydelivery", Q = "com.microsoft.playready",
            J = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";

        function $(t) {
            switch (t) {
                case z:
                    return q.FAIRPLAY;
                case Q:
                    return q.PLAYREADY;
                case J:
                    return q.WIDEVINE;
                case X:
                    return q.CLEARKEY
            }
        }

        var Z = "edef8ba979d64acea3c827dcd51d21ed";

        function tt(t) {
            switch (t) {
                case q.FAIRPLAY:
                    return z;
                case q.PLAYREADY:
                    return Q;
                case q.WIDEVINE:
                    return J;
                case q.CLEARKEY:
                    return X
            }
        }

        function et(t) {
            var e = t.drmSystems, r = t.widevineLicenseUrl,
                i = e ? [q.FAIRPLAY, q.WIDEVINE, q.PLAYREADY, q.CLEARKEY].filter((function (t) {
                    return !!e[t]
                })) : [];
            return !i[q.WIDEVINE] && r && i.push(q.WIDEVINE), i
        }

        var rt,
            it = null != j && null != (rt = j.navigator) && rt.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

        function nt(t, e, r) {
            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
        }

        var at, st = function (t, e) {
            return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        }, ot = function (t, e) {
            return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        }, lt = function (t, e) {
            for (var r = e, i = 0; st(t, e);) i += 10, i += ut(t, e + 6), ot(t, e + 10) && (i += 10), e += i;
            if (i > 0) return t.subarray(r, r + i)
        }, ut = function (t, e) {
            var r = 0;
            return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, r |= (127 & t[e + 2]) << 7, r |= 127 & t[e + 3]
        }, ht = function (t, e) {
            return st(t, e) && ut(t, e + 6) + 10 <= t.length - e
        }, dt = function (t) {
            for (var e = gt(t), r = 0; r < e.length; r++) {
                var i = e[r];
                if (ct(i)) return Et(i)
            }
        }, ct = function (t) {
            return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
        }, ft = function (t) {
            var e = String.fromCharCode(t[0], t[1], t[2], t[3]), r = ut(t, 4);
            return {type: e, size: r, data: t.subarray(10, 10 + r)}
        }, gt = function (t) {
            for (var e = 0, r = []; st(t, e);) {
                for (var i = ut(t, e + 6), n = (e += 10) + i; e + 8 < n;) {
                    var a = ft(t.subarray(e)), s = vt(a);
                    s && r.push(s), e += a.size + 10
                }
                ot(t, e) && (e += 10)
            }
            return r
        }, vt = function (t) {
            return "PRIV" === t.type ? mt(t) : "W" === t.type[0] ? yt(t) : pt(t)
        }, mt = function (t) {
            if (!(t.size < 2)) {
                var e = Tt(t.data, !0), r = new Uint8Array(t.data.subarray(e.length + 1));
                return {key: t.type, info: e, data: r.buffer}
            }
        }, pt = function (t) {
            if (!(t.size < 2)) {
                if ("TXXX" === t.type) {
                    var e = 1, r = Tt(t.data.subarray(e), !0);
                    e += r.length + 1;
                    var i = Tt(t.data.subarray(e));
                    return {key: t.type, info: r, data: i}
                }
                var n = Tt(t.data.subarray(1));
                return {key: t.type, data: n}
            }
        }, yt = function (t) {
            if ("WXXX" === t.type) {
                if (t.size < 2) return;
                var e = 1, r = Tt(t.data.subarray(e), !0);
                e += r.length + 1;
                var i = Tt(t.data.subarray(e));
                return {key: t.type, info: r, data: i}
            }
            var n = Tt(t.data);
            return {key: t.type, data: n}
        }, Et = function (t) {
            if (8 === t.data.byteLength) {
                var e = new Uint8Array(t.data), r = 1 & e[3], i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                return i /= 45, r && (i += 47721858.84), Math.round(i)
            }
        }, Tt = function (t, e) {
            void 0 === e && (e = !1);
            var r = St();
            if (r) {
                var i = r.decode(t);
                if (e) {
                    var n = i.indexOf("\0");
                    return -1 !== n ? i.substring(0, n) : i
                }
                return i.replace(/\0/g, "")
            }
            for (var a, s, o, l = t.length, u = "", h = 0; h < l;) {
                if (0 === (a = t[h++]) && e) return u;
                if (0 !== a && 3 !== a) switch (a >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        u += String.fromCharCode(a);
                        break;
                    case 12:
                    case 13:
                        s = t[h++], u += String.fromCharCode((31 & a) << 6 | 63 & s);
                        break;
                    case 14:
                        s = t[h++], o = t[h++], u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
                }
            }
            return u
        };

        function St() {
            if (!navigator.userAgent.includes("PlayStation 4")) return at || void 0 === self.TextDecoder || (at = new self.TextDecoder("utf-8")), at
        }

        var Lt = function (t) {
            for (var e = "", r = 0; r < t.length; r++) {
                var i = t[r].toString(16);
                i.length < 2 && (i = "0" + i), e += i
            }
            return e
        }, At = Math.pow(2, 32) - 1, Rt = [].push, kt = {video: 1, audio: 2, id3: 3, text: 4};

        function bt(t) {
            return String.fromCharCode.apply(null, t)
        }

        function Dt(t, e) {
            var r = t[e] << 8 | t[e + 1];
            return r < 0 ? 65536 + r : r
        }

        function It(t, e) {
            var r = wt(t, e);
            return r < 0 ? 4294967296 + r : r
        }

        function wt(t, e) {
            return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
        }

        function Ct(t, e, r) {
            t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
        }

        function _t(t, e) {
            var r = [];
            if (!e.length) return r;
            for (var i = t.byteLength, n = 0; n < i;) {
                var a = It(t, n), s = a > 1 ? n + a : i;
                if (bt(t.subarray(n + 4, n + 8)) === e[0]) if (1 === e.length) r.push(t.subarray(n + 8, s)); else {
                    var o = _t(t.subarray(n + 8, s), e.slice(1));
                    o.length && Rt.apply(r, o)
                }
                n = s
            }
            return r
        }

        function xt(t) {
            var e = [], r = t[0], i = 8, n = It(t, i);
            i += 4, i += 0 === r ? 8 : 16, i += 2;
            var a = t.length + 0, s = Dt(t, i);
            i += 2;
            for (var o = 0; o < s; o++) {
                var l = i, u = It(t, l);
                l += 4;
                var h = 2147483647 & u;
                if (1 == (2147483648 & u) >>> 31) return w.warn("SIDX has hierarchical references (not supported)"), null;
                var d = It(t, l);
                l += 4, e.push({
                    referenceSize: h,
                    subsegmentDuration: d,
                    info: {duration: d / n, start: a, end: a + h - 1}
                }), a += h, i = l += 4
            }
            return {earliestPresentationTime: 0, timescale: n, version: r, referencesCount: s, references: e}
        }

        function Pt(t) {
            for (var e = [], r = _t(t, ["moov", "trak"]), n = 0; n < r.length; n++) {
                var a = r[n], s = _t(a, ["tkhd"])[0];
                if (s) {
                    var o = s[0], l = It(s, 0 === o ? 12 : 20), u = _t(a, ["mdia", "mdhd"])[0];
                    if (u) {
                        var h = It(u, 0 === (o = u[0]) ? 12 : 20), d = _t(a, ["mdia", "hdlr"])[0];
                        if (d) {
                            var c = bt(d.subarray(8, 12)), f = {soun: O, vide: N}[c];
                            if (f) {
                                var g = Ft(_t(a, ["mdia", "minf", "stbl", "stsd"])[0]);
                                e[l] = {timescale: h, type: f}, e[f] = i({timescale: h, id: l}, g)
                            }
                        }
                    }
                }
            }
            return _t(t, ["moov", "mvex", "trex"]).forEach((function (t) {
                var r = It(t, 4), i = e[r];
                i && (i.default = {duration: It(t, 12), flags: It(t, 20)})
            })), e
        }

        function Ft(t) {
            var e = t.subarray(8), r = e.subarray(86), i = bt(e.subarray(4, 8)), n = i,
                a = "enca" === i || "encv" === i;
            if (a) {
                var s = _t(e, [i])[0];
                _t(s.subarray("enca" === i ? 28 : 78), ["sinf"]).forEach((function (t) {
                    var e = _t(t, ["schm"])[0];
                    if (e) {
                        var r = bt(e.subarray(4, 8));
                        if ("cbcs" === r || "cenc" === r) {
                            var i = _t(t, ["frma"])[0];
                            i && (n = bt(i))
                        }
                    }
                }))
            }
            switch (n) {
                case"avc1":
                case"avc2":
                case"avc3":
                case"avc4":
                    var o = _t(r, ["avcC"])[0];
                    n += "." + Ot(o[1]) + Ot(o[2]) + Ot(o[3]);
                    break;
                case"mp4a":
                    var l = _t(e, [i])[0], u = _t(l.subarray(28), ["esds"])[0];
                    if (u && u.length > 12) {
                        var h = 4;
                        if (3 !== u[h++]) break;
                        h = Mt(u, h), h += 2;
                        var d = u[h++];
                        if (128 & d && (h += 2), 64 & d && (h += u[h++]), 4 !== u[h++]) break;
                        h = Mt(u, h);
                        var c = u[h++];
                        if (64 !== c) break;
                        if (n += "." + Ot(c), h += 12, 5 !== u[h++]) break;
                        h = Mt(u, h);
                        var f = u[h++], g = (248 & f) >> 3;
                        31 === g && (g += 1 + ((7 & f) << 3) + ((224 & u[h]) >> 5)), n += "." + g
                    }
                    break;
                case"hvc1":
                case"hev1":
                    var v = _t(r, ["hvcC"])[0], m = v[1], p = ["", "A", "B", "C"][m >> 6], y = 31 & m, E = It(v, 2),
                        T = (32 & m) >> 5 ? "H" : "L", S = v[12], L = v.subarray(6, 12);
                    n += "." + p + y, n += "." + E.toString(16).toUpperCase(), n += "." + T + S;
                    for (var A = "", R = L.length; R--;) {
                        var k = L[R];
                        (k || A) && (A = "." + k.toString(16).toUpperCase() + A)
                    }
                    n += A;
                    break;
                case"dvh1":
                case"dvhe":
                    var b = _t(r, ["dvcC"])[0], D = b[2] >> 1 & 127, I = b[2] << 5 & 32 | b[3] >> 3 & 31;
                    n += "." + Nt(D) + "." + Nt(I);
                    break;
                case"vp09":
                    var w = _t(r, ["vpcC"])[0], C = w[4], _ = w[5], x = w[6] >> 4 & 15;
                    n += "." + Nt(C) + "." + Nt(_) + "." + Nt(x);
                    break;
                case"av01":
                    var P = _t(r, ["av1C"])[0], F = P[1] >>> 5, M = 31 & P[1], O = P[2] >>> 7 ? "H" : "M",
                        N = (64 & P[2]) >> 6, U = (32 & P[2]) >> 5, B = 2 === F && N ? U ? 12 : 10 : N ? 10 : 8,
                        G = (16 & P[2]) >> 4, K = (8 & P[2]) >> 3, H = (4 & P[2]) >> 2, V = 3 & P[2];
                    n += "." + F + "." + Nt(M) + O + "." + Nt(B) + "." + G + "." + K + H + V + "." + Nt(1) + "." + Nt(1) + "." + Nt(1) + ".0"
            }
            return {codec: n, encrypted: a}
        }

        function Mt(t, e) {
            for (var r = e + 5; 128 & t[e++] && e < r;) ;
            return e
        }

        function Ot(t) {
            return ("0" + t.toString(16).toUpperCase()).slice(-2)
        }

        function Nt(t) {
            return (t < 10 ? "0" : "") + t
        }

        function Ut(t) {
            var e = _t(t, ["schm"])[0];
            if (e) {
                var r = bt(e.subarray(4, 8));
                if ("cbcs" === r || "cenc" === r) return _t(t, ["schi", "tenc"])[0]
            }
            return w.error("[eme] missing 'schm' box"), null
        }

        function Bt(t) {
            var e = It(t, 0), r = 8;
            1 & e && (r += 4), 4 & e && (r += 4);
            for (var i = 0, n = It(t, 4), a = 0; a < n; a++) 256 & e && (i += It(t, r), r += 4), 512 & e && (r += 4), 1024 & e && (r += 4), 2048 & e && (r += 4);
            return i
        }

        function Gt(t, e) {
            var r = new Uint8Array(t.length + e.length);
            return r.set(t), r.set(e, t.length), r
        }

        function Kt(t, e) {
            var r = [], i = e.samples, n = e.timescale, a = e.id, s = !1;
            return _t(i, ["moof"]).map((function (o) {
                var l = o.byteOffset - 8;
                _t(o, ["traf"]).map((function (o) {
                    var u = _t(o, ["tfdt"]).map((function (t) {
                        var e = t[0], r = It(t, 4);
                        return 1 === e && (r *= Math.pow(2, 32), r += It(t, 8)), r / n
                    }))[0];
                    return void 0 !== u && (t = u), _t(o, ["tfhd"]).map((function (u) {
                        var h = It(u, 4), d = 16777215 & It(u, 0), c = 0, f = 0 != (16 & d), g = 0, v = 0 != (32 & d),
                            m = 8;
                        h === a && (0 != (1 & d) && (m += 8), 0 != (2 & d) && (m += 4), 0 != (8 & d) && (c = It(u, m), m += 4), f && (g = It(u, m), m += 4), v && (m += 4), "video" === e.type && (s = function (t) {
                            if (!t) return !1;
                            var e = t.indexOf("."), r = e < 0 ? t : t.substring(0, e);
                            return "hvc1" === r || "hev1" === r || "dvh1" === r || "dvhe" === r
                        }(e.codec)), _t(o, ["trun"]).map((function (a) {
                            var o = a[0], u = 16777215 & It(a, 0), h = 0 != (1 & u), d = 0, f = 0 != (4 & u),
                                v = 0 != (256 & u), m = 0, p = 0 != (512 & u), y = 0, E = 0 != (1024 & u),
                                T = 0 != (2048 & u), S = 0, L = It(a, 4), A = 8;
                            h && (d = It(a, A), A += 4), f && (A += 4);
                            for (var R = d + l, k = 0; k < L; k++) {
                                if (v ? (m = It(a, A), A += 4) : m = c, p ? (y = It(a, A), A += 4) : y = g, E && (A += 4), T && (S = 0 === o ? It(a, A) : wt(a, A), A += 4), e.type === N) for (var b = 0; b < y;) {
                                    var D = It(i, R);
                                    Ht(s, i[R += 4]) && Vt(i.subarray(R, R + D), s ? 2 : 1, t + S / n, r), R += D, b += D + 4
                                }
                                t += m / n
                            }
                        })))
                    }))
                }))
            })), r
        }

        function Ht(t, e) {
            if (t) {
                var r = e >> 1 & 63;
                return 39 === r || 40 === r
            }
            return 6 == (31 & e)
        }

        function Vt(t, e, r, i) {
            var n = Yt(t), a = 0;
            a += e;
            for (var s = 0, o = 0, l = 0; a < n.length;) {
                s = 0;
                do {
                    if (a >= n.length) break;
                    s += l = n[a++]
                } while (255 === l);
                o = 0;
                do {
                    if (a >= n.length) break;
                    o += l = n[a++]
                } while (255 === l);
                var u = n.length - a, h = a;
                if (o < u) a += o; else if (o > u) {
                    w.error("Malformed SEI payload. " + o + " is too small, only " + u + " bytes left to parse.");
                    break
                }
                if (4 === s) {
                    if (181 === n[h++]) {
                        var d = Dt(n, h);
                        if (h += 2, 49 === d) {
                            var c = It(n, h);
                            if (h += 4, 1195456820 === c) {
                                var f = n[h++];
                                if (3 === f) {
                                    var g = n[h++], v = 64 & g, m = v ? 2 + 3 * (31 & g) : 0, p = new Uint8Array(m);
                                    if (v) {
                                        p[0] = g;
                                        for (var y = 1; y < m; y++) p[y] = n[h++]
                                    }
                                    i.push({type: f, payloadType: s, pts: r, bytes: p})
                                }
                            }
                        }
                    }
                } else if (5 === s && o > 16) {
                    for (var E = [], T = 0; T < 16; T++) {
                        var S = n[h++].toString(16);
                        E.push(1 == S.length ? "0" + S : S), 3 !== T && 5 !== T && 7 !== T && 9 !== T || E.push("-")
                    }
                    for (var L = o - 16, A = new Uint8Array(L), R = 0; R < L; R++) A[R] = n[h++];
                    i.push({payloadType: s, pts: r, uuid: E.join(""), userData: Tt(A), userDataBytes: A})
                }
            }
        }

        function Yt(t) {
            for (var e = t.byteLength, r = [], i = 1; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
            if (0 === r.length) return t;
            var n = e - r.length, a = new Uint8Array(n), s = 0;
            for (i = 0; i < n; s++, i++) s === r[0] && (s++, r.shift()), a[i] = t[s];
            return a
        }

        function Wt(t, e, r) {
            if (16 !== t.byteLength) throw new RangeError("Invalid system id");
            var i, n, a;
            if (e) {
                i = 1, n = new Uint8Array(16 * e.length);
                for (var s = 0; s < e.length; s++) {
                    var o = e[s];
                    if (16 !== o.byteLength) throw new RangeError("Invalid key");
                    n.set(o, 16 * s)
                }
            } else i = 0, n = new Uint8Array;
            i > 0 ? (a = new Uint8Array(4), e.length > 0 && new DataView(a.buffer).setUint32(0, e.length, !1)) : a = new Uint8Array;
            var l = new Uint8Array(4);
            return r && r.byteLength > 0 && new DataView(l.buffer).setUint32(0, r.byteLength, !1), function (t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                for (var n = r.length, a = 8, s = n; s--;) a += r[s].byteLength;
                var o = new Uint8Array(a);
                for (o[0] = a >> 24 & 255, o[1] = a >> 16 & 255, o[2] = a >> 8 & 255, o[3] = 255 & a, o.set(t, 4), s = 0, a = 8; s < n; s++) o.set(r[s], a), a += r[s].byteLength;
                return o
            }([112, 115, 115, 104], new Uint8Array([i, 0, 0, 0]), t, a, n, l, r || new Uint8Array)
        }

        var jt = {}, qt = function () {
            function t(t, e, r, i, n) {
                void 0 === i && (i = [1]), void 0 === n && (n = null), this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t, this.uri = e, this.keyFormat = r, this.keyFormatVersions = i, this.iv = n, this.encrypted = !!t && "NONE" !== t, this.isCommonEncryption = this.encrypted && "AES-128" !== t
            }

            t.clearKeyUriToKeyIdMap = function () {
                jt = {}
            };
            var e = t.prototype;
            return e.isSupported = function () {
                if (this.method) {
                    if ("AES-128" === this.method || "NONE" === this.method) return !0;
                    if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
                    switch (this.keyFormat) {
                        case z:
                        case J:
                        case Q:
                        case X:
                            return -1 !== ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method)
                    }
                }
                return !1
            }, e.getDecryptData = function (e) {
                if (!this.encrypted || !this.uri) return null;
                if ("AES-128" === this.method && this.uri && !this.iv) {
                    "number" != typeof e && ("AES-128" !== this.method || this.iv || w.warn('missing IV for initialization segment with method="' + this.method + '" - compliance issue'), e = 0);
                    var r = function (t) {
                        for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                        return e
                    }(e);
                    return new t(this.method, this.uri, "identity", this.keyFormatVersions, r)
                }
                var i = Y(this.uri);
                if (i) switch (this.keyFormat) {
                    case J:
                        this.pssh = i, i.length >= 22 && (this.keyId = i.subarray(i.length - 22, i.length - 6));
                        break;
                    case Q:
                        var n = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                        this.pssh = Wt(n, null, i);
                        var a = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2),
                            s = String.fromCharCode.apply(null, Array.from(a)),
                            o = s.substring(s.indexOf("<"), s.length),
                            l = (new DOMParser).parseFromString(o, "text/xml").getElementsByTagName("KID")[0];
                        if (l) {
                            var u = l.childNodes[0] ? l.childNodes[0].nodeValue : l.getAttribute("VALUE");
                            if (u) {
                                var h = V(u).subarray(0, 16);
                                !function (t) {
                                    var e = function (t, e, r) {
                                        var i = t[e];
                                        t[e] = t[r], t[r] = i
                                    };
                                    e(t, 0, 3), e(t, 1, 2), e(t, 4, 5), e(t, 6, 7)
                                }(h), this.keyId = h
                            }
                        }
                        break;
                    default:
                        var d = i.subarray(0, 16);
                        if (16 !== d.length) {
                            var c = new Uint8Array(16);
                            c.set(d, 16 - d.length), d = c
                        }
                        this.keyId = d
                }
                if (!this.keyId || 16 !== this.keyId.byteLength) {
                    var f = jt[this.uri];
                    if (!f) {
                        var g = Object.keys(jt).length % Number.MAX_SAFE_INTEGER;
                        f = new Uint8Array(16), new DataView(f.buffer, 12, 4).setUint32(0, g), jt[this.uri] = f
                    }
                    this.keyId = f
                }
                return this
            }, t
        }(), Xt = /\{\$([a-zA-Z0-9-_]+)\}/g;

        function zt(t) {
            return Xt.test(t)
        }

        function Qt(t, e, r) {
            if (null !== t.variableList || t.hasVariableRefs) for (var i = r.length; i--;) {
                var n = r[i], a = e[n];
                a && (e[n] = Jt(t, a))
            }
        }

        function Jt(t, e) {
            if (null !== t.variableList || t.hasVariableRefs) {
                var r = t.variableList;
                return e.replace(Xt, (function (e) {
                    var i = e.substring(2, e.length - 1), n = null == r ? void 0 : r[i];
                    return void 0 === n ? (t.playlistParsingError || (t.playlistParsingError = new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "' + i + '"')), e) : n
                }))
            }
            return e
        }

        function $t(t, e, r) {
            var i, n, a = t.variableList;
            if (a || (t.variableList = a = {}), "QUERYPARAM" in e) {
                i = e.QUERYPARAM;
                try {
                    var s = new self.URL(r).searchParams;
                    if (!s.has(i)) throw new Error('"' + i + '" does not match any query parameter in URI: "' + r + '"');
                    n = s.get(i)
                } catch (e) {
                    t.playlistParsingError || (t.playlistParsingError = new Error("EXT-X-DEFINE QUERYPARAM: " + e.message))
                }
            } else i = e.NAME, n = e.VALUE;
            i in a ? t.playlistParsingError || (t.playlistParsingError = new Error('EXT-X-DEFINE duplicate Variable Name declarations: "' + i + '"')) : a[i] = n || ""
        }

        function Zt(t, e, r) {
            var i = e.IMPORT;
            if (r && i in r) {
                var n = t.variableList;
                n || (t.variableList = n = {}), n[i] = r[i]
            } else t.playlistParsingError || (t.playlistParsingError = new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "' + i + '"'))
        }

        function te(t) {
            if (void 0 === t && (t = !0), "undefined" != typeof self) return (t || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource
        }

        var ee = {
            audio: {
                a3ds: 1,
                "ac-3": .95,
                "ac-4": 1,
                alac: .9,
                alaw: 1,
                dra1: 1,
                "dts+": 1,
                "dts-": 1,
                dtsc: 1,
                dtse: 1,
                dtsh: 1,
                "ec-3": .9,
                enca: 1,
                fLaC: .9,
                flac: .9,
                FLAC: .9,
                g719: 1,
                g726: 1,
                m4ae: 1,
                mha1: 1,
                mha2: 1,
                mhm1: 1,
                mhm2: 1,
                mlpa: 1,
                mp4a: 1,
                "raw ": 1,
                Opus: 1,
                opus: 1,
                samr: 1,
                sawb: 1,
                sawp: 1,
                sevc: 1,
                sqcp: 1,
                ssmv: 1,
                twos: 1,
                ulaw: 1
            },
            video: {
                avc1: 1,
                avc2: 1,
                avc3: 1,
                avc4: 1,
                avcp: 1,
                av01: .8,
                drac: 1,
                dva1: 1,
                dvav: 1,
                dvh1: .7,
                dvhe: .7,
                encv: 1,
                hev1: .75,
                hvc1: .75,
                mjp2: 1,
                mp4v: 1,
                mvc1: 1,
                mvc2: 1,
                mvc3: 1,
                mvc4: 1,
                resv: 1,
                rv60: 1,
                s263: 1,
                svc1: 1,
                svc2: 1,
                "vc-1": 1,
                vp08: 1,
                vp09: .9
            },
            text: {stpp: 1, wvtt: 1}
        };

        function re(t, e, r) {
            return void 0 === r && (r = !0), !t.split(",").some((function (t) {
                return !ie(t, e, r)
            }))
        }

        function ie(t, e, r) {
            var i;
            void 0 === r && (r = !0);
            var n = te(r);
            return null != (i = null == n ? void 0 : n.isTypeSupported(ne(t, e))) && i
        }

        function ne(t, e) {
            return e + '/mp4;codecs="' + t + '"'
        }

        function ae(t) {
            if (t) {
                var e = t.substring(0, 4);
                return ee.video[e]
            }
            return 2
        }

        function se(t) {
            return t.split(",").reduce((function (t, e) {
                var r = ee.video[e];
                return r ? (2 * r + t) / (t ? 3 : 2) : (ee.audio[e] + t) / (t ? 2 : 1)
            }), 0)
        }

        var oe = {}, le = /flac|opus/i;

        function ue(t, e) {
            return void 0 === e && (e = !0), t.replace(le, (function (t) {
                return function (t, e) {
                    if (void 0 === e && (e = !0), oe[t]) return oe[t];
                    for (var r = {
                        flac: ["flac", "fLaC", "FLAC"],
                        opus: ["opus", "Opus"]
                    }[t], i = 0; i < r.length; i++) if (ie(r[i], "audio", e)) return oe[t] = r[i], r[i];
                    return t
                }(t.toLowerCase(), e)
            }))
        }

        function he(t, e) {
            return t && "mp4a" !== t ? t : e
        }

        var de = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
            ce = /#EXT-X-MEDIA:(.*)/g, fe = /^#EXT(?:INF|-X-TARGETDURATION):/m,
            ge = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
            ve = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
            me = function () {
                function t() {
                }

                return t.findGroup = function (t, e) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.id === e) return i
                    }
                }, t.resolve = function (t, e) {
                    return p.buildAbsoluteURL(e, t, {alwaysNormalize: !0})
                }, t.isMediaPlaylist = function (t) {
                    return fe.test(t)
                }, t.parseMasterPlaylist = function (e, r) {
                    var i, n = {
                        contentSteering: null,
                        levels: [],
                        playlistParsingError: null,
                        sessionData: null,
                        sessionKeys: null,
                        startTimeOffset: null,
                        variableList: null,
                        hasVariableRefs: zt(e)
                    }, a = [];
                    for (de.lastIndex = 0; null != (i = de.exec(e));) if (i[1]) {
                        var s, o = new x(i[1]);
                        Qt(n, o, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
                        var l = Jt(n, i[2]), u = {
                            attrs: o,
                            bitrate: o.decimalInteger("BANDWIDTH") || o.decimalInteger("AVERAGE-BANDWIDTH"),
                            name: o.NAME,
                            url: t.resolve(l, r)
                        }, h = o.decimalResolution("RESOLUTION");
                        h && (u.width = h.width, u.height = h.height), Ee(o.CODECS, u), null != (s = u.unknownCodecs) && s.length || a.push(u), n.levels.push(u)
                    } else if (i[3]) {
                        var d = i[3], c = i[4];
                        switch (d) {
                            case"SESSION-DATA":
                                var f = new x(c);
                                Qt(n, f, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                                var g = f["DATA-ID"];
                                g && (null === n.sessionData && (n.sessionData = {}), n.sessionData[g] = f);
                                break;
                            case"SESSION-KEY":
                                var v = pe(c, r, n);
                                v.encrypted && v.isSupported() ? (null === n.sessionKeys && (n.sessionKeys = []), n.sessionKeys.push(v)) : w.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + c + '"');
                                break;
                            case"DEFINE":
                                var m = new x(c);
                                Qt(n, m, ["NAME", "VALUE", "QUERYPARAM"]), $t(n, m, r);
                                break;
                            case"CONTENT-STEERING":
                                var p = new x(c);
                                Qt(n, p, ["SERVER-URI", "PATHWAY-ID"]), n.contentSteering = {
                                    uri: t.resolve(p["SERVER-URI"], r),
                                    pathwayId: p["PATHWAY-ID"] || "."
                                };
                                break;
                            case"START":
                                n.startTimeOffset = ye(c)
                        }
                    }
                    var y = a.length > 0 && a.length < n.levels.length;
                    return n.levels = y ? a : n.levels, 0 === n.levels.length && (n.playlistParsingError = new Error("no levels found in manifest")), n
                }, t.parseMasterPlaylistMedia = function (e, r, i) {
                    var n, a = {}, s = i.levels, o = {
                        AUDIO: s.map((function (t) {
                            return {id: t.attrs.AUDIO, audioCodec: t.audioCodec}
                        })), SUBTITLES: s.map((function (t) {
                            return {id: t.attrs.SUBTITLES, textCodec: t.textCodec}
                        })), "CLOSED-CAPTIONS": []
                    }, l = 0;
                    for (ce.lastIndex = 0; null !== (n = ce.exec(e));) {
                        var u = new x(n[1]), h = u.TYPE;
                        if (h) {
                            var d = o[h], c = a[h] || [];
                            a[h] = c, Qt(i, u, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                            var f = u.LANGUAGE, g = u["ASSOC-LANGUAGE"], v = u.CHANNELS, m = u.CHARACTERISTICS,
                                p = u["INSTREAM-ID"], y = {
                                    attrs: u,
                                    bitrate: 0,
                                    id: l++,
                                    groupId: u["GROUP-ID"] || "",
                                    name: u.NAME || f || "",
                                    type: h,
                                    default: u.bool("DEFAULT"),
                                    autoselect: u.bool("AUTOSELECT"),
                                    forced: u.bool("FORCED"),
                                    lang: f,
                                    url: u.URI ? t.resolve(u.URI, r) : ""
                                };
                            if (g && (y.assocLang = g), v && (y.channels = v), m && (y.characteristics = m), p && (y.instreamId = p), null != d && d.length) {
                                var E = t.findGroup(d, y.groupId) || d[0];
                                Te(y, E, "audioCodec"), Te(y, E, "textCodec")
                            }
                            c.push(y)
                        }
                    }
                    return a
                }, t.parseLevelPlaylist = function (t, e, r, i, n, a) {
                    var s, l, u, h = new H(e), d = h.fragments, c = null, f = 0, g = 0, v = 0, m = 0, p = null,
                        E = new G(i, e), T = -1, S = !1, L = null;
                    for (ge.lastIndex = 0, h.m3u8 = t, h.hasVariableRefs = zt(t); null !== (s = ge.exec(t));) {
                        S && (S = !1, (E = new G(i, e)).start = v, E.sn = f, E.cc = m, E.level = r, c && (E.initSegment = c, E.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null, L && (E.setByteRange(L), L = null)));
                        var A = s[1];
                        if (A) {
                            E.duration = parseFloat(A);
                            var R = (" " + s[2]).slice(1);
                            E.title = R || null, E.tagList.push(R ? ["INF", A, R] : ["INF", A])
                        } else if (s[3]) {
                            if (y(E.duration)) {
                                E.start = v, u && Ae(E, u, h), E.sn = f, E.level = r, E.cc = m, d.push(E);
                                var k = (" " + s[3]).slice(1);
                                E.relurl = Jt(h, k), Se(E, p), p = E, v += E.duration, f++, g = 0, S = !0
                            }
                        } else if (s[4]) {
                            var b = (" " + s[4]).slice(1);
                            p ? E.setByteRange(b, p) : E.setByteRange(b)
                        } else if (s[5]) E.rawProgramDateTime = (" " + s[5]).slice(1), E.tagList.push(["PROGRAM-DATE-TIME", E.rawProgramDateTime]), -1 === T && (T = d.length); else {
                            if (!(s = s[0].match(ve))) {
                                w.warn("No matches on slow regex match for level playlist!");
                                continue
                            }
                            for (l = 1; l < s.length && void 0 === s[l]; l++) ;
                            var D = (" " + s[l]).slice(1), I = (" " + s[l + 1]).slice(1),
                                C = s[l + 2] ? (" " + s[l + 2]).slice(1) : "";
                            switch (D) {
                                case"PLAYLIST-TYPE":
                                    h.type = I.toUpperCase();
                                    break;
                                case"MEDIA-SEQUENCE":
                                    f = h.startSN = parseInt(I);
                                    break;
                                case"SKIP":
                                    var _ = new x(I);
                                    Qt(h, _, ["RECENTLY-REMOVED-DATERANGES"]);
                                    var P = _.decimalInteger("SKIPPED-SEGMENTS");
                                    if (y(P)) {
                                        h.skippedSegments = P;
                                        for (var M = P; M--;) d.unshift(null);
                                        f += P
                                    }
                                    var O = _.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                    O && (h.recentlyRemovedDateranges = O.split("\t"));
                                    break;
                                case"TARGETDURATION":
                                    h.targetduration = Math.max(parseInt(I), 1);
                                    break;
                                case"VERSION":
                                    h.version = parseInt(I);
                                    break;
                                case"INDEPENDENT-SEGMENTS":
                                case"EXTM3U":
                                    break;
                                case"ENDLIST":
                                    h.live = !1;
                                    break;
                                case"#":
                                    (I || C) && E.tagList.push(C ? [I, C] : [I]);
                                    break;
                                case"DISCONTINUITY":
                                    m++, E.tagList.push(["DIS"]);
                                    break;
                                case"GAP":
                                    E.gap = !0, E.tagList.push([D]);
                                    break;
                                case"BITRATE":
                                    E.tagList.push([D, I]);
                                    break;
                                case"DATERANGE":
                                    var N = new x(I);
                                    Qt(h, N, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), Qt(h, N, N.clientAttrs);
                                    var U = new F(N, h.dateRanges[N.ID]);
                                    U.isValid || h.skippedSegments ? h.dateRanges[U.id] = U : w.warn('Ignoring invalid DATERANGE tag: "' + I + '"'), E.tagList.push(["EXT-X-DATERANGE", I]);
                                    break;
                                case"DEFINE":
                                    var B = new x(I);
                                    Qt(h, B, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in B ? Zt(h, B, a) : $t(h, B, e);
                                    break;
                                case"DISCONTINUITY-SEQUENCE":
                                    m = parseInt(I);
                                    break;
                                case"KEY":
                                    var V = pe(I, e, h);
                                    if (V.isSupported()) {
                                        if ("NONE" === V.method) {
                                            u = void 0;
                                            break
                                        }
                                        u || (u = {}), u[V.keyFormat] && (u = o({}, u)), u[V.keyFormat] = V
                                    } else w.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + I + '"');
                                    break;
                                case"START":
                                    h.startTimeOffset = ye(I);
                                    break;
                                case"MAP":
                                    var Y = new x(I);
                                    if (Qt(h, Y, ["BYTERANGE", "URI"]), E.duration) {
                                        var W = new G(i, e);
                                        Le(W, Y, r, u), c = W, E.initSegment = c, c.rawProgramDateTime && !E.rawProgramDateTime && (E.rawProgramDateTime = c.rawProgramDateTime)
                                    } else {
                                        var j = E.byteRangeEndOffset;
                                        if (j) {
                                            var q = E.byteRangeStartOffset;
                                            L = j - q + "@" + q
                                        } else L = null;
                                        Le(E, Y, r, u), c = E, S = !0
                                    }
                                    break;
                                case"SERVER-CONTROL":
                                    var X = new x(I);
                                    h.canBlockReload = X.bool("CAN-BLOCK-RELOAD"), h.canSkipUntil = X.optionalFloat("CAN-SKIP-UNTIL", 0), h.canSkipDateRanges = h.canSkipUntil > 0 && X.bool("CAN-SKIP-DATERANGES"), h.partHoldBack = X.optionalFloat("PART-HOLD-BACK", 0), h.holdBack = X.optionalFloat("HOLD-BACK", 0);
                                    break;
                                case"PART-INF":
                                    var z = new x(I);
                                    h.partTarget = z.decimalFloatingPoint("PART-TARGET");
                                    break;
                                case"PART":
                                    var Q = h.partList;
                                    Q || (Q = h.partList = []);
                                    var J = g > 0 ? Q[Q.length - 1] : void 0, $ = g++, Z = new x(I);
                                    Qt(h, Z, ["BYTERANGE", "URI"]);
                                    var tt = new K(Z, E, e, $, J);
                                    Q.push(tt), E.duration += tt.duration;
                                    break;
                                case"PRELOAD-HINT":
                                    var et = new x(I);
                                    Qt(h, et, ["URI"]), h.preloadHint = et;
                                    break;
                                case"RENDITION-REPORT":
                                    var rt = new x(I);
                                    Qt(h, rt, ["URI"]), h.renditionReports = h.renditionReports || [], h.renditionReports.push(rt);
                                    break;
                                default:
                                    w.warn("line parsed but not handled: " + s)
                            }
                        }
                    }
                    p && !p.relurl ? (d.pop(), v -= p.duration, h.partList && (h.fragmentHint = p)) : h.partList && (Se(E, p), E.cc = m, h.fragmentHint = E, u && Ae(E, u, h));
                    var it = d.length, nt = d[0], at = d[it - 1];
                    if ((v += h.skippedSegments * h.targetduration) > 0 && it && at) {
                        h.averagetargetduration = v / it;
                        var st = at.sn;
                        h.endSN = "initSegment" !== st ? st : 0, h.live || (at.endList = !0), nt && (h.startCC = nt.cc)
                    } else h.endSN = 0, h.startCC = 0;
                    return h.fragmentHint && (v += h.fragmentHint.duration), h.totalduration = v, h.endCC = m, T > 0 && function (t, e) {
                        for (var r = t[e], i = e; i--;) {
                            var n = t[i];
                            if (!n) return;
                            n.programDateTime = r.programDateTime - 1e3 * n.duration, r = n
                        }
                    }(d, T), h
                }, t
            }();

        function pe(t, e, r) {
            var i, n, a = new x(t);
            Qt(r, a, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
            var s = null != (i = a.METHOD) ? i : "", o = a.URI, l = a.hexadecimalInteger("IV"), u = a.KEYFORMATVERSIONS,
                h = null != (n = a.KEYFORMAT) ? n : "identity";
            o && a.IV && !l && w.error("Invalid IV: " + a.IV);
            var d = o ? me.resolve(o, e) : "", c = (u || "1").split("/").map(Number).filter(Number.isFinite);
            return new qt(s, d, h, c, l)
        }

        function ye(t) {
            var e = new x(t).decimalFloatingPoint("TIME-OFFSET");
            return y(e) ? e : null
        }

        function Ee(t, e) {
            var r = (t || "").split(/[ ,]+/).filter((function (t) {
                return t
            }));
            ["video", "audio", "text"].forEach((function (t) {
                var i = r.filter((function (e) {
                    return function (t, e) {
                        var r = ee[e];
                        return !!r && !!r[t.slice(0, 4)]
                    }(e, t)
                }));
                i.length && (e[t + "Codec"] = i.join(","), r = r.filter((function (t) {
                    return -1 === i.indexOf(t)
                })))
            })), e.unknownCodecs = r
        }

        function Te(t, e, r) {
            var i = e[r];
            i && (t[r] = i)
        }

        function Se(t, e) {
            t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), y(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
        }

        function Le(t, e, r, i) {
            t.relurl = e.URI, e.BYTERANGE && t.setByteRange(e.BYTERANGE), t.level = r, t.sn = "initSegment", i && (t.levelkeys = i), t.initSegment = null
        }

        function Ae(t, e, r) {
            t.levelkeys = e;
            var i = r.encryptedFragments;
            i.length && i[i.length - 1].levelkeys === e || !Object.keys(e).some((function (t) {
                return e[t].isCommonEncryption
            })) || i.push(t)
        }

        var Re = "manifest", ke = "level", be = "audioTrack", De = "subtitleTrack", Ie = "main", we = "audio",
            Ce = "subtitle";

        function _e(t) {
            switch (t.type) {
                case be:
                    return we;
                case De:
                    return Ce;
                default:
                    return Ie
            }
        }

        function xe(t, e) {
            var r = t.url;
            return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
        }

        var Pe = function () {
            function t(t) {
                this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.hls = t, this.registerListeners()
            }

            var e = t.prototype;
            return e.startLoad = function (t) {
            }, e.stopLoad = function () {
                this.destroyInternalLoaders()
            }, e.registerListeners = function () {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.LEVEL_LOADING, this.onLevelLoading, this), t.on(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_LOADING, this.onLevelLoading, this), t.off(S.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(S.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
            }, e.createInternalLoader = function (t) {
                var e = this.hls.config, r = e.pLoader, i = e.loader, n = new (r || i)(e);
                return this.loaders[t.type] = n, n
            }, e.getInternalLoader = function (t) {
                return this.loaders[t.type]
            }, e.resetInternalLoader = function (t) {
                this.loaders[t] && delete this.loaders[t]
            }, e.destroyInternalLoaders = function () {
                for (var t in this.loaders) {
                    var e = this.loaders[t];
                    e && e.destroy(), this.resetInternalLoader(t)
                }
            }, e.destroy = function () {
                this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders()
            }, e.onManifestLoading = function (t, e) {
                var r = e.url;
                this.variableList = null, this.load({
                    id: null,
                    level: 0,
                    responseType: "text",
                    type: Re,
                    url: r,
                    deliveryDirectives: null
                })
            }, e.onLevelLoading = function (t, e) {
                var r = e.id, i = e.level, n = e.pathwayId, a = e.url, s = e.deliveryDirectives;
                this.load({
                    id: r,
                    level: i,
                    pathwayId: n,
                    responseType: "text",
                    type: ke,
                    url: a,
                    deliveryDirectives: s
                })
            }, e.onAudioTrackLoading = function (t, e) {
                var r = e.id, i = e.groupId, n = e.url, a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: be,
                    url: n,
                    deliveryDirectives: a
                })
            }, e.onSubtitleTrackLoading = function (t, e) {
                var r = e.id, i = e.groupId, n = e.url, a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: De,
                    url: n,
                    deliveryDirectives: a
                })
            }, e.load = function (t) {
                var e, r, i, n = this, a = this.hls.config, s = this.getInternalLoader(t);
                if (s) {
                    var l = s.context;
                    if (l && l.url === t.url && l.level === t.level) return void w.trace("[playlist-loader]: playlist request ongoing");
                    w.log("[playlist-loader]: aborting previous loader for type: " + t.type), s.abort()
                }
                if (r = t.type === Re ? a.manifestLoadPolicy.default : o({}, a.playlistLoadPolicy.default, {
                    timeoutRetry: null,
                    errorRetry: null
                }), s = this.createInternalLoader(t), y(null == (e = t.deliveryDirectives) ? void 0 : e.part) && (t.type === ke && null !== t.level ? i = this.hls.levels[t.level].details : t.type === be && null !== t.id ? i = this.hls.audioTracks[t.id].details : t.type === De && null !== t.id && (i = this.hls.subtitleTracks[t.id].details), i)) {
                    var u = i.partTarget, h = i.targetduration;
                    if (u && h) {
                        var d = 1e3 * Math.max(3 * u, .8 * h);
                        r = o({}, r, {
                            maxTimeToFirstByteMs: Math.min(d, r.maxTimeToFirstByteMs),
                            maxLoadTimeMs: Math.min(d, r.maxTimeToFirstByteMs)
                        })
                    }
                }
                var c = r.errorRetry || r.timeoutRetry || {}, f = {
                    loadPolicy: r,
                    timeout: r.maxLoadTimeMs,
                    maxRetry: c.maxNumRetry || 0,
                    retryDelay: c.retryDelayMs || 0,
                    maxRetryDelay: c.maxRetryDelayMs || 0
                }, g = {
                    onSuccess: function (t, e, r, i) {
                        var a = n.getInternalLoader(r);
                        n.resetInternalLoader(r.type);
                        var s = t.data;
                        0 === s.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), me.isMediaPlaylist(s) ? n.handleTrackOrLevelPlaylist(t, e, r, i || null, a) : n.handleMasterPlaylist(t, e, r, i)) : n.handleManifestParsingError(t, r, new Error("no EXTM3U delimiter"), i || null, e)
                    }, onError: function (t, e, r, i) {
                        n.handleNetworkError(e, r, !1, t, i)
                    }, onTimeout: function (t, e, r) {
                        n.handleNetworkError(e, r, !0, void 0, t)
                    }
                };
                s.load(t, f, g)
            }, e.handleMasterPlaylist = function (t, e, r, i) {
                var n = this.hls, a = t.data, s = xe(t, r), o = me.parseMasterPlaylist(a, s);
                if (o.playlistParsingError) this.handleManifestParsingError(t, r, o.playlistParsingError, i, e); else {
                    var l = o.contentSteering, u = o.levels, h = o.sessionData, d = o.sessionKeys,
                        c = o.startTimeOffset, f = o.variableList;
                    this.variableList = f;
                    var g = me.parseMasterPlaylistMedia(a, s, o), v = g.AUDIO, m = void 0 === v ? [] : v,
                        p = g.SUBTITLES, y = g["CLOSED-CAPTIONS"];
                    m.length && (m.some((function (t) {
                        return !t.url
                    })) || !u[0].audioCodec || u[0].attrs.AUDIO || (w.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
                        type: "main",
                        name: "main",
                        groupId: "main",
                        default: !1,
                        autoselect: !1,
                        forced: !1,
                        id: -1,
                        attrs: new x({}),
                        bitrate: 0,
                        url: ""
                    }))), n.trigger(S.MANIFEST_LOADED, {
                        levels: u,
                        audioTracks: m,
                        subtitles: p,
                        captions: y,
                        contentSteering: l,
                        url: s,
                        stats: e,
                        networkDetails: i,
                        sessionData: h,
                        sessionKeys: d,
                        startTimeOffset: c,
                        variableList: f
                    })
                }
            }, e.handleTrackOrLevelPlaylist = function (t, e, r, i, n) {
                var a = this.hls, s = r.id, o = r.level, l = r.type, u = xe(t, r), h = y(o) ? o : y(s) ? s : 0,
                    d = _e(r), c = me.parseLevelPlaylist(t.data, u, h, d, 0, this.variableList);
                if (l === Re) {
                    var f = {attrs: new x({}), bitrate: 0, details: c, name: "", url: u};
                    a.trigger(S.MANIFEST_LOADED, {
                        levels: [f],
                        audioTracks: [],
                        url: u,
                        stats: e,
                        networkDetails: i,
                        sessionData: null,
                        sessionKeys: null,
                        contentSteering: null,
                        startTimeOffset: null,
                        variableList: null
                    })
                }
                e.parsing.end = performance.now(), r.levelDetails = c, this.handlePlaylistLoaded(c, t, e, r, i, n)
            }, e.handleManifestParsingError = function (t, e, r, i, n) {
                this.hls.trigger(S.ERROR, {
                    type: L.NETWORK_ERROR,
                    details: A.MANIFEST_PARSING_ERROR,
                    fatal: e.type === Re,
                    url: t.url,
                    err: r,
                    error: r,
                    reason: r.message,
                    response: t,
                    context: e,
                    networkDetails: i,
                    stats: n
                })
            }, e.handleNetworkError = function (t, e, r, n, a) {
                void 0 === r && (r = !1);
                var s = "A network " + (r ? "timeout" : "error" + (n ? " (status " + n.code + ")" : "")) + " occurred while loading " + t.type;
                t.type === ke ? s += ": " + t.level + " id: " + t.id : t.type !== be && t.type !== De || (s += " id: " + t.id + ' group-id: "' + t.groupId + '"');
                var o = new Error(s);
                w.warn("[playlist-loader]: " + s);
                var l = A.UNKNOWN, u = !1, h = this.getInternalLoader(t);
                switch (t.type) {
                    case Re:
                        l = r ? A.MANIFEST_LOAD_TIMEOUT : A.MANIFEST_LOAD_ERROR, u = !0;
                        break;
                    case ke:
                        l = r ? A.LEVEL_LOAD_TIMEOUT : A.LEVEL_LOAD_ERROR, u = !1;
                        break;
                    case be:
                        l = r ? A.AUDIO_TRACK_LOAD_TIMEOUT : A.AUDIO_TRACK_LOAD_ERROR, u = !1;
                        break;
                    case De:
                        l = r ? A.SUBTITLE_TRACK_LOAD_TIMEOUT : A.SUBTITLE_LOAD_ERROR, u = !1
                }
                h && this.resetInternalLoader(t.type);
                var d = {
                    type: L.NETWORK_ERROR,
                    details: l,
                    fatal: u,
                    url: t.url,
                    loader: h,
                    context: t,
                    error: o,
                    networkDetails: e,
                    stats: a
                };
                if (n) {
                    var c = (null == e ? void 0 : e.url) || t.url;
                    d.response = i({url: c, data: void 0}, n)
                }
                this.hls.trigger(S.ERROR, d)
            }, e.handlePlaylistLoaded = function (t, e, r, i, n, a) {
                var s = this.hls, o = i.type, l = i.level, u = i.id, h = i.groupId, d = i.deliveryDirectives,
                    c = xe(e, i), f = _e(i), g = "number" == typeof i.level && f === Ie ? l : void 0;
                if (t.fragments.length) {
                    t.targetduration || (t.playlistParsingError = new Error("Missing Target Duration"));
                    var v = t.playlistParsingError;
                    if (v) s.trigger(S.ERROR, {
                        type: L.NETWORK_ERROR,
                        details: A.LEVEL_PARSING_ERROR,
                        fatal: !1,
                        url: c,
                        error: v,
                        reason: v.message,
                        response: e,
                        context: i,
                        level: g,
                        parent: f,
                        networkDetails: n,
                        stats: r
                    }); else switch (t.live && a && (a.getCacheAge && (t.ageHeader = a.getCacheAge() || 0), a.getCacheAge && !isNaN(t.ageHeader) || (t.ageHeader = 0)), o) {
                        case Re:
                        case ke:
                            s.trigger(S.LEVEL_LOADED, {
                                details: t,
                                level: g || 0,
                                id: u || 0,
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            });
                            break;
                        case be:
                            s.trigger(S.AUDIO_TRACK_LOADED, {
                                details: t,
                                id: u || 0,
                                groupId: h || "",
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            });
                            break;
                        case De:
                            s.trigger(S.SUBTITLE_TRACK_LOADED, {
                                details: t,
                                id: u || 0,
                                groupId: h || "",
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            })
                    }
                } else {
                    var m = new Error("No Segments found in Playlist");
                    s.trigger(S.ERROR, {
                        type: L.NETWORK_ERROR,
                        details: A.LEVEL_EMPTY_ERROR,
                        fatal: !1,
                        url: c,
                        error: m,
                        reason: m.message,
                        response: e,
                        context: i,
                        level: g,
                        parent: f,
                        networkDetails: n,
                        stats: r
                    })
                }
            }, t
        }();

        function Fe(t, e) {
            var r;
            try {
                r = new Event("addtrack")
            } catch (t) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = t, e.dispatchEvent(r)
        }

        function Me(t, e) {
            var r = t.mode;
            if ("disabled" === r && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id)) try {
                if (t.addCue(e), !t.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
            } catch (r) {
                w.debug("[texttrack-utils]: " + r);
                try {
                    var i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                    i.id = e.id, t.addCue(i)
                } catch (t) {
                    w.debug("[texttrack-utils]: Legacy TextTrackCue fallback failed: " + t)
                }
            }
            "disabled" === r && (t.mode = r)
        }

        function Oe(t) {
            var e = t.mode;
            if ("disabled" === e && (t.mode = "hidden"), t.cues) for (var r = t.cues.length; r--;) t.removeCue(t.cues[r]);
            "disabled" === e && (t.mode = e)
        }

        function Ne(t, e, r, i) {
            var n = t.mode;
            if ("disabled" === n && (t.mode = "hidden"), t.cues && t.cues.length > 0) for (var a = function (t, e, r) {
                var i = [], n = function (t, e) {
                    if (e < t[0].startTime) return 0;
                    var r = t.length - 1;
                    if (e > t[r].endTime) return -1;
                    for (var i = 0, n = r; i <= n;) {
                        var a = Math.floor((n + i) / 2);
                        if (e < t[a].startTime) n = a - 1; else {
                            if (!(e > t[a].startTime && i < r)) return a;
                            i = a + 1
                        }
                    }
                    return t[i].startTime - e < e - t[n].startTime ? i : n
                }(t, e);
                if (n > -1) for (var a = n, s = t.length; a < s; a++) {
                    var o = t[a];
                    if (o.startTime >= e && o.endTime <= r) i.push(o); else if (o.startTime > r) return i
                }
                return i
            }(t.cues, e, r), s = 0; s < a.length; s++) i && !i(a[s]) || t.removeCue(a[s]);
            "disabled" === n && (t.mode = n)
        }

        function Ue(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = t[r];
                "subtitles" !== i.kind && "captions" !== i.kind || !i.label || e.push(t[r])
            }
            return e
        }

        var Be = "org.id3", Ge = "com.apple.quicktime.HLS", Ke = "https://aomedia.org/emsg/ID3";

        function He() {
            if ("undefined" != typeof self) return self.VTTCue || self.TextTrackCue
        }

        function Ve(t, e, r, n, a) {
            var s = new t(e, r, "");
            try {
                s.value = n, a && (s.type = a)
            } catch (o) {
                s = new t(e, r, JSON.stringify(a ? i({type: a}, n) : n))
            }
            return s
        }

        var Ye = function () {
            var t = He();
            try {
                t && new t(0, Number.POSITIVE_INFINITY, "")
            } catch (t) {
                return Number.MAX_VALUE
            }
            return Number.POSITIVE_INFINITY
        }();

        function We(t, e) {
            return t.getTime() / 1e3 - e
        }

        var je = function () {
                function t(t) {
                    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners()
                }

                var e = t.prototype;
                return e.destroy = function () {
                    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
                }, e._registerListeners = function () {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this)
                }, e._unregisterListeners = function () {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this)
                }, e.onMediaAttached = function (t, e) {
                    this.media = e.media
                }, e.onMediaDetaching = function () {
                    this.id3Track && (Oe(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
                }, e.onManifestLoading = function () {
                    this.dateRangeCuesAppended = {}
                }, e.createTrack = function (t) {
                    var e = this.getID3Track(t.textTracks);
                    return e.mode = "hidden", e
                }, e.getID3Track = function (t) {
                    if (this.media) {
                        for (var e = 0; e < t.length; e++) {
                            var r = t[e];
                            if ("metadata" === r.kind && "id3" === r.label) return Fe(r, this.media), r
                        }
                        return this.media.addTextTrack("metadata", "id3")
                    }
                }, e.onFragParsingMetadata = function (t, e) {
                    if (this.media) {
                        var r = this.hls.config, i = r.enableEmsgMetadataCues, n = r.enableID3MetadataCues;
                        if (i || n) {
                            var a = e.samples;
                            this.id3Track || (this.id3Track = this.createTrack(this.media));
                            var s = He();
                            if (s) for (var o = 0; o < a.length; o++) {
                                var l = a[o].type;
                                if ((l !== Ke || i) && n) {
                                    var u = gt(a[o].data);
                                    if (u) {
                                        var h = a[o].pts, d = h + a[o].duration;
                                        d > Ye && (d = Ye), d - h <= 0 && (d = h + .25);
                                        for (var c = 0; c < u.length; c++) {
                                            var f = u[c];
                                            if (!ct(f)) {
                                                this.updateId3CueEnds(h, l);
                                                var g = Ve(s, h, d, f, l);
                                                g && this.id3Track.addCue(g)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, e.updateId3CueEnds = function (t, e) {
                    var r, i = null == (r = this.id3Track) ? void 0 : r.cues;
                    if (i) for (var n = i.length; n--;) {
                        var a = i[n];
                        a.type === e && a.startTime < t && a.endTime === Ye && (a.endTime = t)
                    }
                }, e.onBufferFlushing = function (t, e) {
                    var r = e.startOffset, i = e.endOffset, n = e.type, a = this.id3Track, s = this.hls;
                    if (s) {
                        var o = s.config, l = o.enableEmsgMetadataCues, u = o.enableID3MetadataCues;
                        a && (l || u) && Ne(a, r, i, "audio" === n ? function (t) {
                            return t.type === Be && u
                        } : "video" === n ? function (t) {
                            return t.type === Ke && l
                        } : function (t) {
                            return t.type === Be && u || t.type === Ke && l
                        })
                    }
                }, e.onLevelUpdated = function (t, e) {
                    var r = this, i = e.details;
                    if (this.media && i.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
                        var n = this.dateRangeCuesAppended, a = this.id3Track, s = i.dateRanges, o = Object.keys(s);
                        if (a) for (var l = Object.keys(n).filter((function (t) {
                            return !o.includes(t)
                        })), u = function () {
                            var t = l[h];
                            Object.keys(n[t].cues).forEach((function (e) {
                                a.removeCue(n[t].cues[e])
                            })), delete n[t]
                        }, h = l.length; h--;) u();
                        var d = i.fragments[i.fragments.length - 1];
                        if (0 !== o.length && y(null == d ? void 0 : d.programDateTime)) {
                            this.id3Track || (this.id3Track = this.createTrack(this.media));
                            for (var c = d.programDateTime / 1e3 - d.start, f = He(), g = function () {
                                var t = o[v], e = s[t], i = We(e.startDate, c), a = n[t],
                                    l = (null == a ? void 0 : a.cues) || {},
                                    u = (null == a ? void 0 : a.durationKnown) || !1, h = Ye, d = e.endDate;
                                if (d) h = We(d, c), u = !0; else if (e.endOnNext && !u) {
                                    var g = o.reduce((function (t, r) {
                                        if (r !== e.id) {
                                            var i = s[r];
                                            if (i.class === e.class && i.startDate > e.startDate && (!t || e.startDate < t.startDate)) return i
                                        }
                                        return t
                                    }), null);
                                    g && (h = We(g.startDate, c), u = !0)
                                }
                                for (var m, p, y = Object.keys(e.attr), E = 0; E < y.length; E++) {
                                    var T = y[E];
                                    if ("ID" !== (p = T) && "CLASS" !== p && "START-DATE" !== p && "DURATION" !== p && "END-DATE" !== p && "END-ON-NEXT" !== p) {
                                        var S = l[T];
                                        if (S) u && !a.durationKnown && (S.endTime = h); else if (f) {
                                            var L = e.attr[T];
                                            P(T) && (m = L, L = Uint8Array.from(m.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer);
                                            var A = Ve(f, i, h, {key: T, data: L}, Ge);
                                            A && (A.id = t, r.id3Track.addCue(A), l[T] = A)
                                        }
                                    }
                                }
                                n[t] = {cues: l, dateRange: e, durationKnown: u}
                            }, v = 0; v < o.length; v++) g()
                        }
                    }
                }, t
            }(), qe = function () {
                function t(t) {
                    var e = this;
                    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function () {
                        return e.timeupdate()
                    }, this.hls = t, this.config = t.config, this.registerListeners()
                }

                var e = t.prototype;
                return e.destroy = function () {
                    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
                }, e.registerListeners = function () {
                    this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(S.ERROR, this.onError, this)
                }, e.unregisterListeners = function () {
                    this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(S.ERROR, this.onError, this)
                }, e.onMediaAttached = function (t, e) {
                    this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
                }, e.onMediaDetaching = function () {
                    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
                }, e.onManifestLoading = function () {
                    this.levelDetails = null, this._latency = null, this.stallCount = 0
                }, e.onLevelUpdated = function (t, e) {
                    var r = e.details;
                    this.levelDetails = r, r.advanced && this.timeupdate(), !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
                }, e.onError = function (t, e) {
                    var r;
                    e.details === A.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r = this.levelDetails) && r.live && w.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
                }, e.timeupdate = function () {
                    var t = this.media, e = this.levelDetails;
                    if (t && e) {
                        this.currentTime = t.currentTime;
                        var r = this.computeLatency();
                        if (null !== r) {
                            this._latency = r;
                            var i = this.config, n = i.lowLatencyMode, a = i.maxLiveSyncPlaybackRate;
                            if (n && 1 !== a && e.live) {
                                var s = this.targetLatency;
                                if (null !== s) {
                                    var o = r - s;
                                    if (o < Math.min(this.maxLatency, s + e.targetduration) && o > .05 && this.forwardBufferLength > 1) {
                                        var l = Math.min(2, Math.max(1, a)),
                                            u = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                        t.playbackRate = Math.min(l, Math.max(1, u))
                                    } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                                }
                            }
                        }
                    }
                }, e.estimateLiveEdge = function () {
                    var t = this.levelDetails;
                    return null === t ? null : t.edge + t.age
                }, e.computeLatency = function () {
                    var t = this.estimateLiveEdge();
                    return null === t ? null : t - this.currentTime
                }, s(t, [{
                    key: "latency", get: function () {
                        return this._latency || 0
                    }
                }, {
                    key: "maxLatency", get: function () {
                        var t = this.config, e = this.levelDetails;
                        return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                    }
                }, {
                    key: "targetLatency", get: function () {
                        var t = this.levelDetails;
                        if (null === t) return null;
                        var e = t.holdBack, r = t.partHoldBack, i = t.targetduration, n = this.config,
                            a = n.liveSyncDuration, s = n.liveSyncDurationCount, o = n.lowLatencyMode,
                            l = this.hls.userConfig, u = o && r || e;
                        (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== a ? a : s * i);
                        var h = i;
                        return u + Math.min(1 * this.stallCount, h)
                    }
                }, {
                    key: "liveSyncPosition", get: function () {
                        var t = this.estimateLiveEdge(), e = this.targetLatency, r = this.levelDetails;
                        if (null === t || null === e || null === r) return null;
                        var i = r.edge, n = t - e - this.edgeStalled, a = i - r.totalduration,
                            s = i - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
                        return Math.min(Math.max(a, n), s)
                    }
                }, {
                    key: "drift", get: function () {
                        var t = this.levelDetails;
                        return null === t ? 1 : t.drift
                    }
                }, {
                    key: "edgeStalled", get: function () {
                        var t = this.levelDetails;
                        if (null === t) return 0;
                        var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                        return Math.max(t.age - e, 0)
                    }
                }, {
                    key: "forwardBufferLength", get: function () {
                        var t = this.media, e = this.levelDetails;
                        if (!t || !e) return 0;
                        var r = t.buffered.length;
                        return (r ? t.buffered.end(r - 1) : e.edge) - this.currentTime
                    }
                }]), t
            }(), Xe = ["NONE", "TYPE-0", "TYPE-1", null], ze = ["SDR", "PQ", "HLG"], Qe = "", Je = "YES", $e = "v2",
            Ze = function () {
                function t(t, e, r) {
                    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = r
                }

                return t.prototype.addDirectives = function (t) {
                    var e = new self.URL(t);
                    return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.href
                }, t
            }(), tr = function () {
                function t(t) {
                    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [t.url], this._attrs = [t.attrs], this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.frameRate = t.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = t.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.codecSet = [t.videoCodec, t.audioCodec].filter((function (t) {
                        return !!t
                    })).map((function (t) {
                        return t.substring(0, 4)
                    })).join(","), this.addGroupId("audio", t.attrs.AUDIO), this.addGroupId("text", t.attrs.SUBTITLES)
                }

                var e = t.prototype;
                return e.hasAudioGroup = function (t) {
                    return er(this._audioGroups, t)
                }, e.hasSubtitleGroup = function (t) {
                    return er(this._subtitleGroups, t)
                }, e.addGroupId = function (t, e) {
                    if (e) if ("audio" === t) {
                        var r = this._audioGroups;
                        r || (r = this._audioGroups = []), -1 === r.indexOf(e) && r.push(e)
                    } else if ("text" === t) {
                        var i = this._subtitleGroups;
                        i || (i = this._subtitleGroups = []), -1 === i.indexOf(e) && i.push(e)
                    }
                }, e.addFallback = function () {
                }, s(t, [{
                    key: "maxBitrate", get: function () {
                        return Math.max(this.realBitrate, this.bitrate)
                    }
                }, {
                    key: "averageBitrate", get: function () {
                        return this._avgBitrate || this.realBitrate || this.bitrate
                    }
                }, {
                    key: "attrs", get: function () {
                        return this._attrs[0]
                    }
                }, {
                    key: "codecs", get: function () {
                        return this.attrs.CODECS || ""
                    }
                }, {
                    key: "pathwayId", get: function () {
                        return this.attrs["PATHWAY-ID"] || "."
                    }
                }, {
                    key: "videoRange", get: function () {
                        return this.attrs["VIDEO-RANGE"] || "SDR"
                    }
                }, {
                    key: "score", get: function () {
                        return this.attrs.optionalFloat("SCORE", 0)
                    }
                }, {
                    key: "uri", get: function () {
                        return this.url[0] || ""
                    }
                }, {
                    key: "audioGroups", get: function () {
                        return this._audioGroups
                    }
                }, {
                    key: "subtitleGroups", get: function () {
                        return this._subtitleGroups
                    }
                }, {
                    key: "urlId", get: function () {
                        return 0
                    }, set: function (t) {
                    }
                }, {
                    key: "audioGroupIds", get: function () {
                        return this.audioGroups ? [this.audioGroupId] : void 0
                    }
                }, {
                    key: "textGroupIds", get: function () {
                        return this.subtitleGroups ? [this.textGroupId] : void 0
                    }
                }, {
                    key: "audioGroupId", get: function () {
                        var t;
                        return null == (t = this.audioGroups) ? void 0 : t[0]
                    }
                }, {
                    key: "textGroupId", get: function () {
                        var t;
                        return null == (t = this.subtitleGroups) ? void 0 : t[0]
                    }
                }]), t
            }();

        function er(t, e) {
            return !(!e || !t) && -1 !== t.indexOf(e)
        }

        function rr(t, e) {
            var r = e.startPTS;
            if (y(r)) {
                var i, n = 0;
                e.sn > t.sn ? (n = r - t.start, i = t) : (n = t.start - r, i = e), i.duration !== n && (i.duration = n)
            } else e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
        }

        function ir(t, e, r, i, n, a) {
            i - r <= 0 && (w.warn("Fragment should have a positive duration", e), i = r + e.duration, a = n + e.duration);
            var s = r, o = i, l = e.startPTS, u = e.endPTS;
            if (y(l)) {
                var h = Math.abs(l - r);
                y(e.deltaPTS) ? e.deltaPTS = Math.max(h, e.deltaPTS) : e.deltaPTS = h, s = Math.max(r, l), r = Math.min(r, l), n = Math.min(n, e.startDTS), o = Math.min(i, u), i = Math.max(i, u), a = Math.max(a, e.endDTS)
            }
            var d = r - e.start;
            0 !== e.start && (e.start = r), e.duration = i - e.start, e.startPTS = r, e.maxStartPTS = s, e.startDTS = n, e.endPTS = i, e.minEndPTS = o, e.endDTS = a;
            var c, f = e.sn;
            if (!t || f < t.startSN || f > t.endSN) return 0;
            var g = f - t.startSN, v = t.fragments;
            for (v[g] = e, c = g; c > 0; c--) rr(v[c], v[c - 1]);
            for (c = g; c < v.length - 1; c++) rr(v[c], v[c + 1]);
            return t.fragmentHint && rr(v[v.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, d
        }

        function nr(t, e) {
            for (var r = null, i = t.fragments, n = i.length - 1; n >= 0; n--) {
                var a = i[n].initSegment;
                if (a) {
                    r = a;
                    break
                }
            }
            t.fragmentHint && delete t.fragmentHint.endPTS;
            var s, l, u, h, d, c = 0;
            if (function (t, e, r) {
                for (var i = e.skippedSegments, n = Math.max(t.startSN, e.startSN) - e.startSN, a = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = n; u <= a; u++) {
                    var h = l[s + u], d = o[u];
                    i && !d && u < i && (d = e.fragments[u] = h), h && d && r(h, d)
                }
            }(t, e, (function (t, i) {
                t.relurl && (c = t.cc - i.cc), y(t.startPTS) && y(t.endPTS) && (i.start = i.startPTS = t.startPTS, i.startDTS = t.startDTS, i.maxStartPTS = t.maxStartPTS, i.endPTS = t.endPTS, i.endDTS = t.endDTS, i.minEndPTS = t.minEndPTS, i.duration = t.endPTS - t.startPTS, i.duration && (s = i), e.PTSKnown = e.alignedSliding = !0), i.elementaryStreams = t.elementaryStreams, i.loader = t.loader, i.stats = t.stats, t.initSegment && (i.initSegment = t.initSegment, r = t.initSegment)
            })), r && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function (t) {
                var e;
                !t || t.initSegment && t.initSegment.relurl !== (null == (e = r) ? void 0 : e.relurl) || (t.initSegment = r)
            })), e.skippedSegments) if (e.deltaUpdateFailed = e.fragments.some((function (t) {
                return !t
            })), e.deltaUpdateFailed) {
                w.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                for (var f = e.skippedSegments; f--;) e.fragments.shift();
                e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
            } else e.canSkipDateRanges && (e.dateRanges = (l = t.dateRanges, u = e.dateRanges, h = e.recentlyRemovedDateranges, d = o({}, l), h && h.forEach((function (t) {
                delete d[t]
            })), Object.keys(u).forEach((function (t) {
                var e = new F(u[t].attr, d[t]);
                e.isValid ? d[t] = e : w.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(u[t].attr) + '"')
            })), d));
            var g = e.fragments;
            if (c) {
                w.warn("discontinuity sliding from playlist, take drift into account");
                for (var v = 0; v < g.length; v++) g[v].cc += c
            }
            e.skippedSegments && (e.startCC = e.fragments[0].cc), function (t, e, r) {
                if (t && e) for (var i = 0, n = 0, a = t.length; n <= a; n++) {
                    var s = t[n], o = e[n + i];
                    s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? r(s, o) : i--
                }
            }(t.partList, e.partList, (function (t, e) {
                e.elementaryStreams = t.elementaryStreams, e.stats = t.stats
            })), s ? ir(e, s, s.startPTS, s.endPTS, s.startDTS, s.endDTS) : ar(t, e), g.length && (e.totalduration = e.edge - g[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
            var m = e.advancedDateTime;
            if (e.advanced && m) {
                var p = e.edge;
                e.driftStart || (e.driftStartTime = m, e.driftStart = p), e.driftEndTime = m, e.driftEnd = p
            } else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
        }

        function ar(t, e) {
            var r = e.startSN + e.skippedSegments - t.startSN, i = t.fragments;
            r < 0 || r >= i.length || sr(e, i[r].start)
        }

        function sr(t, e) {
            if (e) {
                for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++) r[i].start += e;
                t.fragmentHint && (t.fragmentHint.start += e)
            }
        }

        function or(t, e, r) {
            var i;
            return null != t && t.details ? lr(null == (i = t.details) ? void 0 : i.partList, e, r) : null
        }

        function lr(t, e, r) {
            if (t) for (var i = t.length; i--;) {
                var n = t[i];
                if (n.index === r && n.fragment.sn === e) return n
            }
            return null
        }

        function ur(t) {
            t.forEach((function (t, e) {
                var r = t.details;
                null != r && r.fragments && r.fragments.forEach((function (t) {
                    t.level = e
                }))
            }))
        }

        function hr(t) {
            switch (t.details) {
                case A.FRAG_LOAD_TIMEOUT:
                case A.KEY_LOAD_TIMEOUT:
                case A.LEVEL_LOAD_TIMEOUT:
                case A.MANIFEST_LOAD_TIMEOUT:
                    return !0
            }
            return !1
        }

        function dr(t, e) {
            var r = hr(e);
            return t.default[(r ? "timeout" : "error") + "Retry"]
        }

        function cr(t, e) {
            var r = "linear" === t.backoff ? 1 : Math.pow(2, e);
            return Math.min(r * t.retryDelayMs, t.maxRetryDelayMs)
        }

        function fr(t) {
            return i(i({}, t), {errorRetry: null, timeoutRetry: null})
        }

        function gr(t, e, r, i) {
            if (!t) return !1;
            var n = null == i ? void 0 : i.code, a = e < t.maxNumRetry && (function (t) {
                return 0 === t && !1 === navigator.onLine || !!t && (t < 400 || t > 499)
            }(n) || !!r);
            return t.shouldRetry ? t.shouldRetry(t, e, r, i, a) : a
        }

        var vr = function (t, e) {
            for (var r = 0, i = t.length - 1, n = null, a = null; r <= i;) {
                var s = e(a = t[n = (r + i) / 2 | 0]);
                if (s > 0) r = n + 1; else {
                    if (!(s < 0)) return a;
                    i = n - 1
                }
            }
            return null
        };

        function mr(t, e, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = 0);
            var n = null;
            if (t) {
                n = e[t.sn - e[0].sn + 1] || null;
                var a = t.endDTS - r;
                a > 0 && a < 15e-7 && (r += 15e-7)
            } else 0 === r && 0 === e[0].start && (n = e[0]);
            if (n && (!t || t.level === n.level) && 0 === pr(r, i, n)) return n;
            var s = vr(e, pr.bind(null, r, i));
            return !s || s === t && n ? n : s
        }

        function pr(t, e, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), r.start <= t && r.start + r.duration > t) return 0;
            var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
        }

        function yr(t, e, r) {
            var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return (r.endProgramDateTime || 0) - i > t
        }

        var Er = 0, Tr = 2, Sr = 3, Lr = 5, Ar = 0, Rr = 1, kr = 2, br = function () {
            function t(t) {
                this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t, this.log = w.log.bind(w, "[info]:"), this.warn = w.warn.bind(w, "[warning]:"), this.error = w.error.bind(w, "[error]:"), this.registerListeners()
            }

            var e = t.prototype;
            return e.registerListeners = function () {
                var t = this.hls;
                t.on(S.ERROR, this.onError, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t && (t.off(S.ERROR, this.onError, this), t.off(S.ERROR, this.onErrorOut, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this))
            }, e.destroy = function () {
                this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {}
            }, e.startLoad = function (t) {
            }, e.stopLoad = function () {
                this.playlistError = 0
            }, e.getVariantLevelIndex = function (t) {
                return (null == t ? void 0 : t.type) === Ie ? t.level : this.hls.loadLevel
            }, e.onManifestLoading = function () {
                this.playlistError = 0, this.penalizedRenditions = {}
            }, e.onLevelUpdated = function () {
                this.playlistError = 0
            }, e.onError = function (t, e) {
                var r, i;
                if (!e.fatal) {
                    var n = this.hls, a = e.context;
                    switch (e.details) {
                        case A.FRAG_LOAD_ERROR:
                        case A.FRAG_LOAD_TIMEOUT:
                        case A.KEY_LOAD_ERROR:
                        case A.KEY_LOAD_TIMEOUT:
                            return void (e.errorAction = this.getFragRetryOrSwitchAction(e));
                        case A.FRAG_PARSING_ERROR:
                            if (null != (r = e.frag) && r.gap) return void (e.errorAction = {action: Er, flags: Ar});
                        case A.FRAG_GAP:
                        case A.FRAG_DECRYPT_ERROR:
                            return e.errorAction = this.getFragRetryOrSwitchAction(e), void (e.errorAction.action = Tr);
                        case A.LEVEL_EMPTY_ERROR:
                        case A.LEVEL_PARSING_ERROR:
                            var s, o, l = e.parent === Ie ? e.level : n.loadLevel;
                            return void (e.details === A.LEVEL_EMPTY_ERROR && null != (s = e.context) && null != (o = s.levelDetails) && o.live ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, l) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, l)));
                        case A.LEVEL_LOAD_ERROR:
                        case A.LEVEL_LOAD_TIMEOUT:
                            return void ("number" == typeof (null == a ? void 0 : a.level) && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, a.level)));
                        case A.AUDIO_TRACK_LOAD_ERROR:
                        case A.AUDIO_TRACK_LOAD_TIMEOUT:
                        case A.SUBTITLE_LOAD_ERROR:
                        case A.SUBTITLE_TRACK_LOAD_TIMEOUT:
                            if (a) {
                                var u = n.levels[n.loadLevel];
                                if (u && (a.type === be && u.hasAudioGroup(a.groupId) || a.type === De && u.hasSubtitleGroup(a.groupId))) return e.errorAction = this.getPlaylistRetryOrSwitchAction(e, n.loadLevel), e.errorAction.action = Tr, void (e.errorAction.flags = Rr)
                            }
                            return;
                        case A.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                            var h = n.levels[n.loadLevel], d = null == h ? void 0 : h.attrs["HDCP-LEVEL"];
                            return void (d ? e.errorAction = {
                                action: Tr,
                                flags: kr,
                                hdcpLevel: d
                            } : this.keySystemError(e));
                        case A.BUFFER_ADD_CODEC_ERROR:
                        case A.REMUX_ALLOC_ERROR:
                        case A.BUFFER_APPEND_ERROR:
                            return void (e.errorAction = this.getLevelSwitchAction(e, null != (i = e.level) ? i : n.loadLevel));
                        case A.INTERNAL_EXCEPTION:
                        case A.BUFFER_APPENDING_ERROR:
                        case A.BUFFER_FULL_ERROR:
                        case A.LEVEL_SWITCH_ERROR:
                        case A.BUFFER_STALLED_ERROR:
                        case A.BUFFER_SEEK_OVER_HOLE:
                        case A.BUFFER_NUDGE_ON_STALL:
                            return void (e.errorAction = {action: Er, flags: Ar})
                    }
                    e.type === L.KEY_SYSTEM_ERROR && this.keySystemError(e)
                }
            }, e.keySystemError = function (t) {
                var e = this.getVariantLevelIndex(t.frag);
                t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e)
            }, e.getPlaylistRetryOrSwitchAction = function (t, e) {
                var r = dr(this.hls.config.playlistLoadPolicy, t), i = this.playlistError++;
                if (gr(r, i, hr(t), t.response)) return {action: Lr, flags: Ar, retryConfig: r, retryCount: i};
                var n = this.getLevelSwitchAction(t, e);
                return r && (n.retryConfig = r, n.retryCount = i), n
            }, e.getFragRetryOrSwitchAction = function (t) {
                var e = this.hls, r = this.getVariantLevelIndex(t.frag), i = e.levels[r], n = e.config,
                    a = n.fragLoadPolicy, s = n.keyLoadPolicy, o = dr(t.details.startsWith("key") ? s : a, t),
                    l = e.levels.reduce((function (t, e) {
                        return t + e.fragmentError
                    }), 0);
                if (i && (t.details !== A.FRAG_GAP && i.fragmentError++, gr(o, l, hr(t), t.response))) return {
                    action: Lr,
                    flags: Ar,
                    retryConfig: o,
                    retryCount: l
                };
                var u = this.getLevelSwitchAction(t, r);
                return o && (u.retryConfig = o, u.retryCount = l), u
            }, e.getLevelSwitchAction = function (t, e) {
                var r = this.hls;
                null == e && (e = r.loadLevel);
                var i = this.hls.levels[e];
                if (i) {
                    var n, a, s = t.details;
                    i.loadError++, s === A.BUFFER_APPEND_ERROR && i.fragmentError++;
                    var o = -1, l = r.levels, u = r.loadLevel, h = r.minAutoLevel, d = r.maxAutoLevel;
                    r.autoLevelEnabled || (r.loadLevel = -1);
                    for (var c, f = null == (n = t.frag) ? void 0 : n.type, g = (f === we && s === A.FRAG_PARSING_ERROR || "audio" === t.sourceBufferName && (s === A.BUFFER_ADD_CODEC_ERROR || s === A.BUFFER_APPEND_ERROR)) && l.some((function (t) {
                        var e = t.audioCodec;
                        return i.audioCodec !== e
                    })), v = "video" === t.sourceBufferName && (s === A.BUFFER_ADD_CODEC_ERROR || s === A.BUFFER_APPEND_ERROR) && l.some((function (t) {
                        var e = t.codecSet, r = t.audioCodec;
                        return i.codecSet !== e && i.audioCodec === r
                    })), m = null != (a = t.context) ? a : {}, p = m.type, y = m.groupId, E = function () {
                        var e = (T + u) % l.length;
                        if (e !== u && e >= h && e <= d && 0 === l[e].loadError) {
                            var r, n, a = l[e];
                            if (s === A.FRAG_GAP && t.frag) {
                                var c = l[e].details;
                                if (c) {
                                    var m = mr(t.frag, c.fragments, t.frag.start);
                                    if (null != m && m.gap) return 0
                                }
                            } else {
                                if (p === be && a.hasAudioGroup(y) || p === De && a.hasSubtitleGroup(y)) return 0;
                                if (f === we && null != (r = i.audioGroups) && r.some((function (t) {
                                    return a.hasAudioGroup(t)
                                })) || f === Ce && null != (n = i.subtitleGroups) && n.some((function (t) {
                                    return a.hasSubtitleGroup(t)
                                })) || g && i.audioCodec === a.audioCodec || !g && i.audioCodec !== a.audioCodec || v && i.codecSet === a.codecSet) return 0
                            }
                            return o = e, 1
                        }
                    }, T = l.length; T-- && (0 === (c = E()) || 1 !== c);) ;
                    if (o > -1 && r.loadLevel !== o) return t.levelRetry = !0, this.playlistError = 0, {
                        action: Tr,
                        flags: Ar,
                        nextAutoLevel: o
                    }
                }
                return {action: Tr, flags: Rr}
            }, e.onErrorOut = function (t, e) {
                var r;
                switch (null == (r = e.errorAction) ? void 0 : r.action) {
                    case Er:
                        break;
                    case Tr:
                        this.sendAlternateToPenaltyBox(e), e.errorAction.resolved || e.details === A.FRAG_GAP ? /MediaSource readyState: ended/.test(e.error.message) && (this.warn('MediaSource ended after "' + e.sourceBufferName + '" sourceBuffer append error. Attempting to recover from media error.'), this.hls.recoverMediaError()) : e.fatal = !0
                }
                e.fatal && this.hls.stopLoad()
            }, e.sendAlternateToPenaltyBox = function (t) {
                var e = this.hls, r = t.errorAction;
                if (r) {
                    var i = r.flags, n = r.hdcpLevel, a = r.nextAutoLevel;
                    switch (i) {
                        case Ar:
                            this.switchLevel(t, a);
                            break;
                        case kr:
                            n && (e.maxHdcpLevel = Xe[Xe.indexOf(n) - 1], r.resolved = !0), this.warn('Restricting playback to HDCP-LEVEL of "' + e.maxHdcpLevel + '" or lower')
                    }
                    r.resolved || this.switchLevel(t, a)
                }
            }, e.switchLevel = function (t, e) {
                void 0 !== e && t.errorAction && (this.warn("switching to level " + e + " after " + t.details), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
            }, t
        }(), Dr = function () {
            function t(t, e) {
                this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = w.log.bind(w, e + ":"), this.warn = w.warn.bind(w, e + ":"), this.hls = t
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.clearTimer(), this.hls = this.log = this.warn = null
            }, e.clearTimer = function () {
                -1 !== this.timer && (self.clearTimeout(this.timer), this.timer = -1)
            }, e.startLoad = function () {
                this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist()
            }, e.stopLoad = function () {
                this.canLoad = !1, this.clearTimer()
            }, e.switchParams = function (t, e) {
                var r = null == e ? void 0 : e.renditionReports;
                if (r) {
                    for (var i = -1, n = 0; n < r.length; n++) {
                        var a = r[n], s = void 0;
                        try {
                            s = new self.URL(a.URI, e.url).href
                        } catch (t) {
                            w.warn("Could not construct new URL for Rendition Report: " + t), s = a.URI || ""
                        }
                        if (s === t) {
                            i = n;
                            break
                        }
                        s === t.substring(0, s.length) && (i = n)
                    }
                    if (-1 !== i) {
                        var o = r[i], l = parseInt(o["LAST-MSN"]) || (null == e ? void 0 : e.lastPartSn),
                            u = parseInt(o["LAST-PART"]) || (null == e ? void 0 : e.lastPartIndex);
                        if (this.hls.config.lowLatencyMode) {
                            var h = Math.min(e.age - e.partTarget, e.targetduration);
                            u >= 0 && h > e.partTarget && (u += 1)
                        }
                        return new Ze(l, u >= 0 ? u : void 0, Qe)
                    }
                }
            }, e.loadPlaylist = function (t) {
                -1 === this.requestScheduled && (this.requestScheduled = self.performance.now())
            }, e.shouldLoadPlaylist = function (t) {
                return this.canLoad && !!t && !!t.url && (!t.details || t.details.live)
            }, e.shouldReloadPlaylist = function (t) {
                return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(t)
            }, e.playlistLoaded = function (t, e, r) {
                var i = this, n = e.details, a = e.stats, s = self.performance.now(),
                    o = a.loading.first ? Math.max(0, s - a.loading.first) : 0;
                if (n.advancedDateTime = Date.now() - o, n.live || null != r && r.live) {
                    if (n.reloaded(r), r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : n.updated ? "UPDATED" : "MISSED")), r && n.fragments.length > 0 && nr(r, n), !this.canLoad || !n.live) return;
                    var l, u = void 0, h = void 0;
                    if (n.canBlockReload && n.endSN && n.advanced) {
                        var d = this.hls.config.lowLatencyMode, c = n.lastPartSn, f = n.endSN, g = n.lastPartIndex,
                            v = c === f;
                        -1 !== g ? (u = v ? f + 1 : c, h = v ? d ? 0 : g : g + 1) : u = f + 1;
                        var m = n.age, p = m + n.ageHeader, y = Math.min(p - n.partTarget, 1.5 * n.targetduration);
                        if (y > 0) {
                            if (r && y > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + y + " with playlist age: " + n.age), y = 0; else {
                                var E = Math.floor(y / n.targetduration);
                                u += E, void 0 !== h && (h += Math.round(y % n.targetduration / n.partTarget)), this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + m.toFixed(2) + "s goal: " + y + " skip sn " + E + " to part " + h)
                            }
                            n.tuneInGoal = y
                        }
                        if (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, h), d || !v) return void this.loadPlaylist(l)
                    } else (n.canBlockReload || n.canSkipUntil) && (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, h));
                    var T = this.hls.mainForwardBufferInfo, S = T ? T.end - T.len : 0, L = function (t, e) {
                        void 0 === e && (e = 1 / 0);
                        var r = 1e3 * t.targetduration;
                        if (t.updated) {
                            var i = t.fragments;
                            if (i.length && 4 * r > e) {
                                var n = 1e3 * i[i.length - 1].duration;
                                n < r && (r = n)
                            }
                        } else r /= 2;
                        return Math.round(r)
                    }(n, 1e3 * (n.edge - S));
                    n.updated && s > this.requestScheduled + L && (this.requestScheduled = a.loading.start), void 0 !== u && n.canBlockReload ? this.requestScheduled = a.loading.first + L - (1e3 * n.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + L < s ? this.requestScheduled = s : this.requestScheduled - s <= 0 && (this.requestScheduled += L);
                    var A = this.requestScheduled - s;
                    A = Math.max(0, A), this.log("reload live playlist " + t + " in " + Math.round(A) + " ms"), this.timer = self.setTimeout((function () {
                        return i.loadPlaylist(l)
                    }), A)
                } else this.clearTimer()
            }, e.getDeliveryDirectives = function (t, e, r, i) {
                var n = function (t, e) {
                    var r = t.canSkipUntil, i = t.canSkipDateRanges, n = t.endSN;
                    return r && (void 0 !== e ? e - n : 0) < r ? i ? $e : Je : Qe
                }(t, r);
                return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn, i = e.part, n = Qe), new Ze(r, i, n)
            }, e.checkRetry = function (t) {
                var e = this, r = t.details, i = hr(t), n = t.errorAction, a = n || {}, s = a.action, o = a.retryCount,
                    l = void 0 === o ? 0 : o, u = a.retryConfig,
                    h = !!n && !!u && (s === Lr || !n.resolved && s === Tr);
                if (h) {
                    var d;
                    if (this.requestScheduled = -1, l >= u.maxNumRetry) return !1;
                    if (i && null != (d = t.context) && d.deliveryDirectives) this.warn("Retrying playlist loading " + (l + 1) + "/" + u.maxNumRetry + ' after "' + r + '" without delivery-directives'), this.loadPlaylist(); else {
                        var c = cr(u, l);
                        this.timer = self.setTimeout((function () {
                            return e.loadPlaylist()
                        }), c), this.warn("Retrying playlist loading " + (l + 1) + "/" + u.maxNumRetry + ' after "' + r + '" in ' + c + "ms")
                    }
                    t.levelRetry = !0, n.resolved = !0
                }
                return h
            }, t
        }(), Ir = function () {
            function t(t, e, r) {
                void 0 === e && (e = 0), void 0 === r && (r = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = r
            }

            var e = t.prototype;
            return e.sample = function (t, e) {
                var r = Math.pow(this.alpha_, t);
                this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
            }, e.getTotalWeight = function () {
                return this.totalWeight_
            }, e.getEstimate = function () {
                if (this.alpha_) {
                    var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    if (t) return this.estimate_ / t
                }
                return this.estimate_
            }, t
        }(), wr = function () {
            function t(t, e, r, i) {
                void 0 === i && (i = 100), this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Ir(t), this.fast_ = new Ir(e), this.defaultTTFB_ = i, this.ttfb_ = new Ir(t)
            }

            var e = t.prototype;
            return e.update = function (t, e) {
                var r = this.slow_, i = this.fast_, n = this.ttfb_;
                r.halfLife !== t && (this.slow_ = new Ir(t, r.getEstimate(), r.getTotalWeight())), i.halfLife !== e && (this.fast_ = new Ir(e, i.getEstimate(), i.getTotalWeight())), n.halfLife !== t && (this.ttfb_ = new Ir(t, n.getEstimate(), n.getTotalWeight()))
            }, e.sample = function (t, e) {
                var r = (t = Math.max(t, this.minDelayMs_)) / 1e3, i = 8 * e / r;
                this.fast_.sample(r, i), this.slow_.sample(r, i)
            }, e.sampleTTFB = function (t) {
                var e = t / 1e3, r = Math.sqrt(2) * Math.exp(-Math.pow(e, 2) / 2);
                this.ttfb_.sample(r, Math.max(t, 5))
            }, e.canEstimate = function () {
                return this.fast_.getTotalWeight() >= this.minWeight_
            }, e.getEstimate = function () {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
            }, e.getEstimateTTFB = function () {
                return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
            }, e.destroy = function () {
            }, t
        }(), Cr = {
            supported: !0,
            configurations: [],
            decodingInfoResults: [{supported: !0, powerEfficient: !0, smooth: !0}]
        }, _r = {};

        function xr(t, e, r) {
            var n = t.videoCodec, a = t.audioCodec;
            if (!n || !a || !r) return Promise.resolve(Cr);
            var s = {
                width: t.width,
                height: t.height,
                bitrate: Math.ceil(Math.max(.9 * t.bitrate, t.averageBitrate)),
                framerate: t.frameRate || 30
            }, o = t.videoRange;
            "SDR" !== o && (s.transferFunction = o.toLowerCase());
            var l = n.split(",").map((function (t) {
                return {type: "media-source", video: i(i({}, s), {}, {contentType: ne(t, "video")})}
            }));
            return a && t.audioGroups && t.audioGroups.forEach((function (t) {
                var r;
                t && (null == (r = e.groups[t]) || r.tracks.forEach((function (e) {
                    if (e.groupId === t) {
                        var r = e.channels || "", i = parseFloat(r);
                        y(i) && i > 2 && l.push.apply(l, a.split(",").map((function (t) {
                            return {type: "media-source", audio: {contentType: ne(t, "audio"), channels: "" + i}}
                        })))
                    }
                })))
            })), Promise.all(l.map((function (t) {
                var e = function (t) {
                    var e = t.audio, r = t.video, i = r || e;
                    if (i) {
                        var n = i.contentType.split('"')[1];
                        if (r) return "r" + r.height + "x" + r.width + "f" + Math.ceil(r.framerate) + (r.transferFunction || "sd") + "_" + n + "_" + Math.ceil(r.bitrate / 1e5);
                        if (e) return "c" + e.channels + (e.spatialRendering ? "s" : "n") + "_" + n
                    }
                    return ""
                }(t);
                return _r[e] || (_r[e] = r.decodingInfo(t))
            }))).then((function (t) {
                return {
                    supported: !t.some((function (t) {
                        return !t.supported
                    })), configurations: l, decodingInfoResults: t
                }
            })).catch((function (t) {
                return {supported: !1, configurations: l, decodingInfoResults: [], error: t}
            }))
        }

        function Pr(t, e) {
            var r = !1, i = [];
            return t && (r = "SDR" !== t, i = [t]), e && (i = e.allowedVideoRanges || ze.slice(0), i = (r = void 0 !== e.preferHDR ? e.preferHDR : function () {
                if ("function" == typeof matchMedia) {
                    var t = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
                    if (t.media !== e.media) return !0 === t.matches
                }
                return !1
            }()) ? i.filter((function (t) {
                return "SDR" !== t
            })) : ["SDR"]), {preferHDR: r, allowedVideoRanges: i}
        }

        function Fr(t, e) {
            w.log('[abr] start candidates with "' + t + '" ignored because ' + e)
        }

        function Mr(t, e, r) {
            if ("attrs" in t) {
                var i = e.indexOf(t);
                if (-1 !== i) return i
            }
            for (var n = 0; n < e.length; n++) if (Or(t, e[n], r)) return n;
            return -1
        }

        function Or(t, e, r) {
            var i = t.groupId, n = t.name, a = t.lang, s = t.assocLang, o = t.characteristics, l = t.default,
                u = t.forced;
            return (void 0 === i || e.groupId === i) && (void 0 === n || e.name === n) && (void 0 === a || e.lang === a) && (void 0 === a || e.assocLang === s) && (void 0 === l || e.default === l) && (void 0 === u || e.forced === u) && (void 0 === o || function (t, e) {
                void 0 === e && (e = "");
                var r = t.split(","), i = e.split(",");
                return r.length === i.length && !r.some((function (t) {
                    return -1 === i.indexOf(t)
                }))
            }(o, e.characteristics)) && (void 0 === r || r(t, e))
        }

        function Nr(t, e) {
            var r = t.audioCodec, i = t.channels;
            return !(void 0 !== r && (e.audioCodec || "").substring(0, 4) !== r.substring(0, 4) || void 0 !== i && i !== (e.channels || "2"))
        }

        function Ur(t, e, r) {
            for (var i = e; i; i--) if (r(t[i])) return i;
            for (var n = e + 1; n < t.length; n++) if (r(t[n])) return n;
            return -1
        }

        var Br = function () {
            function t(t) {
                var e = this;
                this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = function () {
                    var t = e.fragCurrent, r = e.partCurrent, i = e.hls, n = i.autoLevelEnabled, a = i.media;
                    if (t && a) {
                        var s = performance.now(), o = r ? r.stats : t.stats, l = r ? r.duration : t.duration,
                            u = s - o.loading.start, h = i.minAutoLevel;
                        if (o.aborted || o.loaded && o.loaded === o.total || t.level <= h) return e.clearTimer(), void (e._nextAutoLevel = -1);
                        if (n && !a.paused && a.playbackRate && a.readyState) {
                            var d = i.mainForwardBufferInfo;
                            if (null !== d) {
                                var c = e.bwEstimator.getEstimateTTFB(), f = Math.abs(a.playbackRate);
                                if (!(u <= Math.max(c, l / (2 * f) * 1e3))) {
                                    var g = d.len / f, v = o.loading.first ? o.loading.first - o.loading.start : -1,
                                        m = o.loaded && v > -1, p = e.getBwEstimate(), E = i.levels, T = E[t.level],
                                        L = o.total || Math.max(o.loaded, Math.round(l * T.maxBitrate / 8)),
                                        A = m ? u - v : u;
                                    A < 1 && m && (A = Math.min(u, 8 * o.loaded / p));
                                    var R = m ? 1e3 * o.loaded / A : 0,
                                        k = R ? (L - o.loaded) / R : 8 * L / p + c / 1e3;
                                    if (!(k <= g)) {
                                        var b, D = R ? 8 * R : p, I = Number.POSITIVE_INFINITY;
                                        for (b = t.level - 1; b > h; b--) {
                                            var C = E[b].maxBitrate;
                                            if ((I = e.getTimeToLoadFrag(c / 1e3, D, l * C, !E[b].details)) < g) break
                                        }
                                        if (!(I >= k || I > 10 * l)) {
                                            i.nextLoadLevel = i.nextAutoLevel = b, m ? e.bwEstimator.sample(u - Math.min(c, v), o.loaded) : e.bwEstimator.sampleTTFB(u);
                                            var _ = E[b].bitrate;
                                            e.getBwEstimate() * e.hls.config.abrBandWidthUpFactor > _ && e.resetEstimator(_), e.clearTimer(), w.warn("[abr] Fragment " + t.sn + (r ? " part " + r.index : "") + " of level " + t.level + " is loading too slowly;\n      Time to underbuffer: " + g.toFixed(3) + " s\n      Estimated load time for current fragment: " + k.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + I.toFixed(3) + " s\n      TTFB estimate: " + (0 | v) + " ms\n      Current BW estimate: " + (y(p) ? 0 | p : "Unknown") + " bps\n      New BW estimate: " + (0 | e.getBwEstimate()) + " bps\n      Switching to level " + b + " @ " + (0 | _) + " bps"), i.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                frag: t,
                                                part: r,
                                                stats: o
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, this.hls = t, this.bwEstimator = this.initEstimator(), this.registerListeners()
            }

            var e = t.prototype;
            return e.resetEstimator = function (t) {
                t && (w.log("setting initial bwe to " + t), this.hls.config.abrEwmaDefaultEstimate = t), this.firstSelection = -1, this.bwEstimator = this.initEstimator()
            }, e.initEstimator = function () {
                var t = this.hls.config;
                return new wr(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate)
            }, e.registerListeners = function () {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.FRAG_LOADING, this.onFragLoading, this), t.on(S.FRAG_LOADED, this.onFragLoaded, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(S.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.on(S.ERROR, this.onError, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t && (t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.FRAG_LOADING, this.onFragLoading, this), t.off(S.FRAG_LOADED, this.onFragLoaded, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(S.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.off(S.ERROR, this.onError, this))
            }, e.destroy = function () {
                this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null
            }, e.onManifestLoading = function (t, e) {
                this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer()
            }, e.onLevelsUpdated = function () {
                this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null
            }, e.onMaxAutoLevelUpdated = function () {
                this.firstSelection = -1, this.nextAutoLevelKey = ""
            }, e.onFragLoading = function (t, e) {
                var r, i = e.frag;
                this.ignoreFragment(i) || (i.bitrateTest || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null), this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100))
            }, e.onLevelSwitching = function (t, e) {
                this.clearTimer()
            }, e.onError = function (t, e) {
                if (!e.fatal) switch (e.details) {
                    case A.BUFFER_ADD_CODEC_ERROR:
                    case A.BUFFER_APPEND_ERROR:
                        this.lastLoadedFragLevel = -1, this.firstSelection = -1;
                        break;
                    case A.FRAG_LOAD_TIMEOUT:
                        var r = e.frag, i = this.fragCurrent, n = this.partCurrent;
                        if (r && i && r.sn === i.sn && r.level === i.level) {
                            var a = performance.now(), s = n ? n.stats : r.stats, o = a - s.loading.start,
                                l = s.loading.first ? s.loading.first - s.loading.start : -1;
                            if (s.loaded && l > -1) {
                                var u = this.bwEstimator.getEstimateTTFB();
                                this.bwEstimator.sample(o - Math.min(u, l), s.loaded)
                            } else this.bwEstimator.sampleTTFB(o)
                        }
                }
            }, e.getTimeToLoadFrag = function (t, e, r, i) {
                return t + r / e + (i ? this.lastLevelLoadSec : 0)
            }, e.onLevelLoaded = function (t, e) {
                var r = this.hls.config, i = e.stats.loading, n = i.end - i.start;
                y(n) && (this.lastLevelLoadSec = n / 1e3), e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
            }, e.onFragLoaded = function (t, e) {
                var r = e.frag, i = e.part, n = i ? i.stats : r.stats;
                if (r.type === Ie && this.bwEstimator.sampleTTFB(n.loading.first - n.loading.start), !this.ignoreFragment(r)) {
                    if (this.clearTimer(), r.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
                        var a = i ? i.duration : r.duration, s = this.hls.levels[r.level],
                            o = (s.loaded ? s.loaded.bytes : 0) + n.loaded, l = (s.loaded ? s.loaded.duration : 0) + a;
                        s.loaded = {bytes: o, duration: l}, s.realBitrate = Math.round(8 * o / l)
                    }
                    if (r.bitrateTest) {
                        var u = {stats: n, frag: r, part: i, id: r.type};
                        this.onFragBuffered(S.FRAG_BUFFERED, u), r.bitrateTest = !1
                    } else this.lastLoadedFragLevel = r.level
                }
            }, e.onFragBuffered = function (t, e) {
                var r = e.frag, i = e.part, n = null != i && i.stats.loaded ? i.stats : r.stats;
                if (!n.aborted && !this.ignoreFragment(r)) {
                    var a = n.parsing.end - n.loading.start - Math.min(n.loading.first - n.loading.start, this.bwEstimator.getEstimateTTFB());
                    this.bwEstimator.sample(a, n.loaded), n.bwEstimate = this.getBwEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                }
            }, e.ignoreFragment = function (t) {
                return t.type !== Ie || "initSegment" === t.sn
            }, e.clearTimer = function () {
                this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1)
            }, e.getAutoLevelKey = function () {
                var t;
                return this.getBwEstimate() + "_" + (null == (t = this.hls.mainForwardBufferInfo) ? void 0 : t.len)
            }, e.getNextABRAutoLevel = function () {
                var t = this.fragCurrent, e = this.partCurrent, r = this.hls, i = r.maxAutoLevel, n = r.config,
                    a = r.minAutoLevel, s = r.media, o = e ? e.duration : t ? t.duration : 0,
                    l = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1, u = this.getBwEstimate(),
                    h = r.mainForwardBufferInfo, d = (h ? h.len : 0) / l, c = n.abrBandWidthFactor,
                    f = n.abrBandWidthUpFactor;
                if (d) {
                    var g = this.findBestLevel(u, a, i, d, 0, c, f);
                    if (g >= 0) return g
                }
                var v = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay;
                if (!d) {
                    var m = this.bitrateTestDelay;
                    m && (v = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - m, w.info("[abr] bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), c = f = 1)
                }
                var p = this.findBestLevel(u, a, i, d, v, c, f);
                if (w.info("[abr] " + (d ? "rebuffering expected" : "buffer is empty") + ", optimal quality level " + p), p > -1) return p;
                var y = r.levels[a], E = r.levels[r.loadLevel];
                return (null == y ? void 0 : y.bitrate) < (null == E ? void 0 : E.bitrate) ? a : r.loadLevel
            }, e.getBwEstimate = function () {
                return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate
            }, e.findBestLevel = function (t, e, r, i, n, a, s) {
                var o, l = this, u = i + n, h = this.lastLoadedFragLevel, d = -1 === h ? this.hls.firstLevel : h,
                    c = this.fragCurrent, f = this.partCurrent, g = this.hls, v = g.levels, m = g.allAudioTracks,
                    p = g.loadLevel, E = g.config;
                if (1 === v.length) return 0;
                var T, S = v[d], L = !(null == S || null == (o = S.details) || !o.live), A = -1 === p || -1 === h,
                    R = "SDR", k = (null == S ? void 0 : S.frameRate) || 0, b = E.audioPreference,
                    D = E.videoPreference, I = this.audioTracksByGroup || (this.audioTracksByGroup = function (t) {
                        return t.reduce((function (t, e) {
                            var r = t.groups[e.groupId];
                            r || (r = t.groups[e.groupId] = {
                                tracks: [],
                                channels: {2: 0},
                                hasDefault: !1,
                                hasAutoSelect: !1
                            }), r.tracks.push(e);
                            var i = e.channels || "2";
                            return r.channels[i] = (r.channels[i] || 0) + 1, r.hasDefault = r.hasDefault || e.default, r.hasAutoSelect = r.hasAutoSelect || e.autoselect, r.hasDefault && (t.hasDefaultAudio = !0), r.hasAutoSelect && (t.hasAutoSelectAudio = !0), t
                        }), {hasDefaultAudio: !1, hasAutoSelectAudio: !1, groups: {}})
                    }(m));
                if (A) {
                    if (-1 !== this.firstSelection) return this.firstSelection;
                    var C = this.codecTiers || (this.codecTiers = function (t, e, r, i) {
                            return t.slice(r, i + 1).reduce((function (t, r) {
                                if (!r.codecSet) return t;
                                var i = r.audioGroups, n = t[r.codecSet];
                                n || (t[r.codecSet] = n = {
                                    minBitrate: 1 / 0,
                                    minHeight: 1 / 0,
                                    minFramerate: 1 / 0,
                                    maxScore: 0,
                                    videoRanges: {SDR: 0},
                                    channels: {2: 0},
                                    hasDefaultAudio: !i,
                                    fragmentError: 0
                                }), n.minBitrate = Math.min(n.minBitrate, r.bitrate);
                                var a = Math.min(r.height, r.width);
                                return n.minHeight = Math.min(n.minHeight, a), n.minFramerate = Math.min(n.minFramerate, r.frameRate), n.maxScore = Math.max(n.maxScore, r.score), n.fragmentError += r.fragmentError, n.videoRanges[r.videoRange] = (n.videoRanges[r.videoRange] || 0) + 1, i && i.forEach((function (t) {
                                    if (t) {
                                        var r = e.groups[t];
                                        n.hasDefaultAudio = n.hasDefaultAudio || e.hasDefaultAudio ? r.hasDefault : r.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(r.channels).forEach((function (t) {
                                            n.channels[t] = (n.channels[t] || 0) + r.channels[t]
                                        }))
                                    }
                                })), t
                            }), {})
                        }(v, I, e, r)), _ = function (t, e, r, i, n) {
                            for (var a = Object.keys(t), s = null == i ? void 0 : i.channels, o = null == i ? void 0 : i.audioCodec, l = s && 2 === parseInt(s), u = !0, h = !1, d = 1 / 0, c = 1 / 0, f = 1 / 0, g = 0, v = [], m = Pr(e, n), p = m.preferHDR, E = m.allowedVideoRanges, T = function () {
                                var e = t[a[S]];
                                u = e.channels[2] > 0, d = Math.min(d, e.minHeight), c = Math.min(c, e.minFramerate), f = Math.min(f, e.minBitrate);
                                var r = E.filter((function (t) {
                                    return e.videoRanges[t] > 0
                                }));
                                r.length > 0 && (h = !0, v = r)
                            }, S = a.length; S--;) T();
                            d = y(d) ? d : 0, c = y(c) ? c : 0;
                            var L = Math.max(1080, d), A = Math.max(30, c);
                            return f = y(f) ? f : r, r = Math.max(f, r), h || (e = void 0, v = []), {
                                codecSet: a.reduce((function (e, i) {
                                    var n = t[i];
                                    if (i === e) return e;
                                    if (n.minBitrate > r) return Fr(i, "min bitrate of " + n.minBitrate + " > current estimate of " + r), e;
                                    if (!n.hasDefaultAudio) return Fr(i, "no renditions with default or auto-select sound found"), e;
                                    if (o && i.indexOf(o.substring(0, 4)) % 5 != 0) return Fr(i, 'audio codec preference "' + o + '" not found'), e;
                                    if (s && !l) {
                                        if (!n.channels[s]) return Fr(i, "no renditions with " + s + " channel sound found (channels options: " + Object.keys(n.channels) + ")"), e
                                    } else if ((!o || l) && u && 0 === n.channels[2]) return Fr(i, "no renditions with stereo sound found"), e;
                                    return n.minHeight > L ? (Fr(i, "min resolution of " + n.minHeight + " > maximum of " + L), e) : n.minFramerate > A ? (Fr(i, "min framerate of " + n.minFramerate + " > maximum of " + A), e) : v.some((function (t) {
                                        return n.videoRanges[t] > 0
                                    })) ? n.maxScore < g ? (Fr(i, "max score of " + n.maxScore + " < selected max of " + g), e) : e && (se(i) >= se(e) || n.fragmentError > t[e].fragmentError) ? e : (g = n.maxScore, i) : (Fr(i, "no variants with VIDEO-RANGE of " + JSON.stringify(v) + " found"), e)
                                }), void 0), videoRanges: v, preferHDR: p, minFramerate: c, minBitrate: f
                            }
                        }(C, R, t, b, D), x = _.codecSet, P = _.videoRanges, F = _.minFramerate, M = _.minBitrate,
                        O = _.preferHDR;
                    T = x, R = O ? P[P.length - 1] : P[0], k = F, t = Math.max(t, M), w.log("[abr] picked start tier " + JSON.stringify(_))
                } else T = null == S ? void 0 : S.codecSet, R = null == S ? void 0 : S.videoRange;
                for (var N, U = f ? f.duration : c ? c.duration : 0, B = this.bwEstimator.getEstimateTTFB() / 1e3, G = [], K = function () {
                    var e, o, c = v[H], g = H > d;
                    if (!c) return 0;
                    if (E.useMediaCapabilities && !c.supportedResult && !c.supportedPromise) {
                        var m = navigator.mediaCapabilities;
                        "function" == typeof (null == m ? void 0 : m.decodingInfo) && function (t, e, r, i, n, a) {
                            var s = t.audioCodec ? t.audioGroups : null, o = null == a ? void 0 : a.audioCodec,
                                l = null == a ? void 0 : a.channels, u = l ? parseInt(l) : o ? 1 / 0 : 2, h = null;
                            if (null != s && s.length) try {
                                h = 1 === s.length && s[0] ? e.groups[s[0]].channels : s.reduce((function (t, r) {
                                    if (r) {
                                        var i = e.groups[r];
                                        if (!i) throw new Error("Audio track group " + r + " not found");
                                        Object.keys(i.channels).forEach((function (e) {
                                            t[e] = (t[e] || 0) + i.channels[e]
                                        }))
                                    }
                                    return t
                                }), {2: 0})
                            } catch (t) {
                                return !0
                            }
                            return void 0 !== t.videoCodec && (t.width > 1920 && t.height > 1088 || t.height > 1920 && t.width > 1088 || t.frameRate > Math.max(i, 30) || "SDR" !== t.videoRange && t.videoRange !== r || t.bitrate > Math.max(n, 8e6)) || !!h && y(u) && Object.keys(h).some((function (t) {
                                return parseInt(t) > u
                            }))
                        }(c, I, R, k, t, b) ? (c.supportedPromise = xr(c, I, m), c.supportedPromise.then((function (t) {
                            c.supportedResult = t;
                            var e = l.hls.levels, r = e.indexOf(c);
                            t.error ? w.warn('[abr] MediaCapabilities decodingInfo error: "' + t.error + '" for level ' + r + " " + JSON.stringify(t)) : t.supported || (w.warn("[abr] Unsupported MediaCapabilities decodingInfo result for level " + r + " " + JSON.stringify(t)), r > -1 && e.length > 1 && (w.log("[abr] Removing unsupported level " + r), l.hls.removeLevel(r)))
                        }))) : c.supportedResult = Cr
                    }
                    if (T && c.codecSet !== T || R && c.videoRange !== R || g && k > c.frameRate || !g && k > 0 && k < c.frameRate || null == (e = c.supportedResult) || null == (o = e.decodingInfoResults) || !o[0].smooth) return G.push(H), 0;
                    var D, C = c.details,
                        _ = (f ? null == C ? void 0 : C.partTarget : null == C ? void 0 : C.averagetargetduration) || U;
                    D = g ? s * t : a * t;
                    var x = U && i >= 2 * U && 0 === n ? v[H].averageBitrate : v[H].maxBitrate,
                        P = l.getTimeToLoadFrag(B, D, x * _, void 0 === C);
                    if (D >= x && (H === h || 0 === c.loadError && 0 === c.fragmentError) && (P <= B || !y(P) || L && !l.bitrateTestDelay || P < u)) {
                        var F = l.forcedAutoLevel;
                        return H === p || -1 !== F && F === p || (G.length && w.trace("[abr] Skipped level(s) " + G.join(",") + " of " + r + ' max with CODECS and VIDEO-RANGE:"' + v[G[0]].codecs + '" ' + v[G[0]].videoRange + '; not compatible with "' + S.codecs + '" ' + R), w.info("[abr] switch candidate:" + d + "->" + H + " adjustedbw(" + Math.round(D) + ")-bitrate=" + Math.round(D - x) + " ttfb:" + B.toFixed(1) + " avgDuration:" + _.toFixed(1) + " maxFetchDuration:" + u.toFixed(1) + " fetchDuration:" + P.toFixed(1) + " firstSelection:" + A + " codecSet:" + T + " videoRange:" + R + " hls.loadLevel:" + p)), A && (l.firstSelection = H), {v: H}
                    }
                }, H = r; H >= e; H--) if (0 !== (N = K()) && N) return N.v;
                return -1
            }, s(t, [{
                key: "firstAutoLevel", get: function () {
                    var t = this.hls, e = t.maxAutoLevel, r = t.minAutoLevel, i = this.getBwEstimate(),
                        n = this.hls.config.maxStarvationDelay, a = this.findBestLevel(i, r, e, 0, n, 1, 1);
                    if (a > -1) return a;
                    var s = this.hls.firstLevel, o = Math.min(Math.max(s, r), e);
                    return w.warn("[abr] Could not find best starting auto level. Defaulting to first in playlist " + s + " clamped to " + o), o
                }
            }, {
                key: "forcedAutoLevel", get: function () {
                    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel
                }
            }, {
                key: "nextAutoLevel", get: function () {
                    var t = this.forcedAutoLevel, e = this.bwEstimator.canEstimate(), r = this.lastLoadedFragLevel > -1;
                    if (!(-1 === t || e && r && this.nextAutoLevelKey !== this.getAutoLevelKey())) return t;
                    var i = e && r ? this.getNextABRAutoLevel() : this.firstAutoLevel;
                    if (-1 !== t) {
                        var n = this.hls.levels;
                        if (n.length > Math.max(t, i) && n[t].loadError <= n[i].loadError) return t
                    }
                    return this._nextAutoLevel = i, this.nextAutoLevelKey = this.getAutoLevelKey(), i
                }, set: function (t) {
                    var e = Math.max(this.hls.minAutoLevel, t);
                    this._nextAutoLevel != e && (this.nextAutoLevelKey = "", this._nextAutoLevel = e)
                }
            }]), t
        }(), Gr = function () {
            function t() {
                this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.onHandlerDestroying(), this.onHandlerDestroyed()
            }, e.onHandlerDestroying = function () {
                this.clearNextTick(), this.clearInterval()
            }, e.onHandlerDestroyed = function () {
            }, e.hasInterval = function () {
                return !!this._tickInterval
            }, e.hasNextTick = function () {
                return !!this._tickTimer
            }, e.setInterval = function (t) {
                return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t), !0)
            }, e.clearInterval = function () {
                return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
            }, e.clearNextTick = function () {
                return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
            }, e.tick = function () {
                this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
            }, e.tickImmediate = function () {
                this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
            }, e.doTick = function () {
            }, t
        }(), Kr = "NOT_LOADED", Hr = "APPENDING", Vr = "PARTIAL", Yr = "OK", Wr = function () {
            function t(t) {
                this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = t, this._registerListeners()
            }

            var e = t.prototype;
            return e._registerListeners = function () {
                var t = this.hls;
                t.on(S.BUFFER_APPENDED, this.onBufferAppended, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t.on(S.FRAG_LOADED, this.onFragLoaded, this)
            }, e._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.BUFFER_APPENDED, this.onBufferAppended, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t.off(S.FRAG_LOADED, this.onFragLoaded, this)
            }, e.destroy = function () {
                this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
            }, e.getAppendedFrag = function (t, e) {
                var r = this.activePartLists[e];
                if (r) for (var i = r.length; i--;) {
                    var n = r[i];
                    if (!n) break;
                    var a = n.end;
                    if (n.start <= t && null !== a && t <= a) return n
                }
                return this.getBufferedFrag(t, e)
            }, e.getBufferedFrag = function (t, e) {
                for (var r = this.fragments, i = Object.keys(r), n = i.length; n--;) {
                    var a = r[i[n]];
                    if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                        var s = a.body;
                        if (s.start <= t && t <= s.end) return s
                    }
                }
                return null
            }, e.detectEvictedFragments = function (t, e, r, i) {
                var n = this;
                this.timeRanges && (this.timeRanges[t] = e);
                var a = (null == i ? void 0 : i.fragment.sn) || -1;
                Object.keys(this.fragments).forEach((function (i) {
                    var s = n.fragments[i];
                    if (s && !(a >= s.body.sn)) if (s.buffered || s.loaded) {
                        var o = s.range[t];
                        o && o.time.some((function (t) {
                            var r = !n.isTimeBuffered(t.startPTS, t.endPTS, e);
                            return r && n.removeFragment(s.body), r
                        }))
                    } else s.body.type === r && n.removeFragment(s.body)
                }))
            }, e.detectPartialFragments = function (t) {
                var e = this, r = this.timeRanges, i = t.frag, n = t.part;
                if (r && "initSegment" !== i.sn) {
                    var a = qr(i), s = this.fragments[a];
                    if (!(!s || s.buffered && i.gap)) {
                        var o = !i.relurl;
                        Object.keys(r).forEach((function (t) {
                            var a = i.elementaryStreams[t];
                            if (a) {
                                var l = r[t], u = o || !0 === a.partial;
                                s.range[t] = e.getBufferedTimes(i, n, u, l)
                            }
                        })), s.loaded = null, Object.keys(s.range).length ? (s.buffered = !0, (s.body.endList = i.endList || s.body.endList) && (this.endListFragments[s.body.type] = s), jr(s) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(s.body)
                    }
                }
            }, e.removeParts = function (t, e) {
                var r = this.activePartLists[e];
                r && (this.activePartLists[e] = r.filter((function (e) {
                    return e.fragment.sn >= t
                })))
            }, e.fragBuffered = function (t, e) {
                var r = qr(t), i = this.fragments[r];
                !i && e && (i = this.fragments[r] = {
                    body: t,
                    appendedPTS: null,
                    loaded: null,
                    buffered: !1,
                    range: Object.create(null)
                }, t.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0)
            }, e.getBufferedTimes = function (t, e, r, i) {
                for (var n = {
                    time: [],
                    partial: r
                }, a = t.start, s = t.end, o = t.minEndPTS || s, l = t.maxStartPTS || a, u = 0; u < i.length; u++) {
                    var h = i.start(u) - this.bufferPadding, d = i.end(u) + this.bufferPadding;
                    if (l >= h && o <= d) {
                        n.time.push({startPTS: Math.max(a, i.start(u)), endPTS: Math.min(s, i.end(u))});
                        break
                    }
                    if (a < d && s > h) {
                        var c = Math.max(a, i.start(u)), f = Math.min(s, i.end(u));
                        f > c && (n.partial = !0, n.time.push({startPTS: c, endPTS: f}))
                    } else if (s <= h) break
                }
                return n
            }, e.getPartialFragment = function (t) {
                var e, r, i, n = null, a = 0, s = this.bufferPadding, o = this.fragments;
                return Object.keys(o).forEach((function (l) {
                    var u = o[l];
                    u && jr(u) && (r = u.body.start - s, i = u.body.end + s, t >= r && t <= i && (e = Math.min(t - r, i - t), a <= e && (n = u.body, a = e)))
                })), n
            }, e.isEndListAppended = function (t) {
                var e = this.endListFragments[t];
                return void 0 !== e && (e.buffered || jr(e))
            }, e.getState = function (t) {
                var e = qr(t), r = this.fragments[e];
                return r ? r.buffered ? jr(r) ? Vr : Yr : Hr : Kr
            }, e.isTimeBuffered = function (t, e, r) {
                for (var i, n, a = 0; a < r.length; a++) {
                    if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, t >= i && e <= n) return !0;
                    if (e <= i) return !1
                }
                return !1
            }, e.onFragLoaded = function (t, e) {
                var r = e.frag, i = e.part;
                if ("initSegment" !== r.sn && !r.bitrateTest) {
                    var n = i ? null : e, a = qr(r);
                    this.fragments[a] = {
                        body: r,
                        appendedPTS: null,
                        loaded: n,
                        buffered: !1,
                        range: Object.create(null)
                    }
                }
            }, e.onBufferAppended = function (t, e) {
                var r = this, i = e.frag, n = e.part, a = e.timeRanges;
                if ("initSegment" !== i.sn) {
                    var s = i.type;
                    if (n) {
                        var o = this.activePartLists[s];
                        o || (this.activePartLists[s] = o = []), o.push(n)
                    }
                    this.timeRanges = a, Object.keys(a).forEach((function (t) {
                        var e = a[t];
                        r.detectEvictedFragments(t, e, s, n)
                    }))
                }
            }, e.onFragBuffered = function (t, e) {
                this.detectPartialFragments(e)
            }, e.hasFragment = function (t) {
                var e = qr(t);
                return !!this.fragments[e]
            }, e.hasParts = function (t) {
                var e;
                return !(null == (e = this.activePartLists[t]) || !e.length)
            }, e.removeFragmentsInRange = function (t, e, r, i, n) {
                var a = this;
                i && !this.hasGaps || Object.keys(this.fragments).forEach((function (s) {
                    var o = a.fragments[s];
                    if (o) {
                        var l = o.body;
                        l.type !== r || i && !l.gap || l.start < e && l.end > t && (o.buffered || n) && a.removeFragment(l)
                    }
                }))
            }, e.removeFragment = function (t) {
                var e = qr(t);
                t.stats.loaded = 0, t.clearElementaryStreamInfo();
                var r = this.activePartLists[t.type];
                if (r) {
                    var i = t.sn;
                    this.activePartLists[t.type] = r.filter((function (t) {
                        return t.fragment.sn !== i
                    }))
                }
                delete this.fragments[e], t.endList && delete this.endListFragments[t.type]
            }, e.removeAllFragments = function () {
                this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1
            }, t
        }();

        function jr(t) {
            var e, r, i;
            return t.buffered && (t.body.gap || (null == (e = t.range.video) ? void 0 : e.partial) || (null == (r = t.range.audio) ? void 0 : r.partial) || (null == (i = t.range.audiovideo) ? void 0 : i.partial))
        }

        function qr(t) {
            return t.type + "_" + t.level + "_" + t.sn
        }

        var Xr = {
            length: 0, start: function () {
                return 0
            }, end: function () {
                return 0
            }
        }, zr = function () {
            function t() {
            }

            return t.isBuffered = function (e, r) {
                try {
                    if (e) for (var i = t.getBuffered(e), n = 0; n < i.length; n++) if (r >= i.start(n) && r <= i.end(n)) return !0
                } catch (t) {
                }
                return !1
            }, t.bufferInfo = function (e, r, i) {
                try {
                    if (e) {
                        var n, a = t.getBuffered(e), s = [];
                        for (n = 0; n < a.length; n++) s.push({start: a.start(n), end: a.end(n)});
                        return this.bufferedInfo(s, r, i)
                    }
                } catch (t) {
                }
                return {len: 0, start: r, end: r, nextStart: void 0}
            }, t.bufferedInfo = function (t, e, r) {
                e = Math.max(0, e), t.sort((function (t, e) {
                    var r = t.start - e.start;
                    return r || e.end - t.end
                }));
                var i = [];
                if (r) for (var n = 0; n < t.length; n++) {
                    var a = i.length;
                    if (a) {
                        var s = i[a - 1].end;
                        t[n].start - s < r ? t[n].end > s && (i[a - 1].end = t[n].end) : i.push(t[n])
                    } else i.push(t[n])
                } else i = t;
                for (var o, l = 0, u = e, h = e, d = 0; d < i.length; d++) {
                    var c = i[d].start, f = i[d].end;
                    if (e + r >= c && e < f) u = c, l = (h = f) - e; else if (e + r < c) {
                        o = c;
                        break
                    }
                }
                return {len: l, start: u || 0, end: h || 0, nextStart: o}
            }, t.getBuffered = function (t) {
                try {
                    return t.buffered
                } catch (t) {
                    return w.log("failed to get media.buffered", t), Xr
                }
            }, t
        }(), Qr = function (t, e, r, i, n, a) {
            void 0 === i && (i = 0), void 0 === n && (n = -1), void 0 === a && (a = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
                start: 0,
                executeStart: 0,
                executeEnd: 0,
                end: 0
            }, this.buffering = {
                audio: {start: 0, executeStart: 0, executeEnd: 0, end: 0},
                video: {start: 0, executeStart: 0, executeEnd: 0, end: 0},
                audiovideo: {start: 0, executeStart: 0, executeEnd: 0, end: 0}
            }, this.level = t, this.sn = e, this.id = r, this.size = i, this.part = n, this.partial = a
        };

        function Jr(t, e) {
            for (var r = 0, i = t.length; r < i; r++) {
                var n;
                if ((null == (n = t[r]) ? void 0 : n.cc) === e) return t[r]
            }
            return null
        }

        function $r(t, e) {
            if (t) {
                var r = t.start + e;
                t.start = t.startPTS = r, t.endPTS = r + t.duration
            }
        }

        function Zr(t, e) {
            for (var r = e.fragments, i = 0, n = r.length; i < n; i++) $r(r[i], t);
            e.fragmentHint && $r(e.fragmentHint, t), e.alignedSliding = !0
        }

        function ti(t, e, r) {
            e && (function (t, e, r) {
                if (function (t, e, r) {
                    return !(!e || !(r.endCC > r.startCC || t && t.cc < r.startCC))
                }(t, r, e)) {
                    var i = function (t, e) {
                        var r = t.fragments, i = e.fragments;
                        if (i.length && r.length) {
                            var n = Jr(r, i[0].cc);
                            if (n && (!n || n.startPTS)) return n;
                            w.log("No frag in previous level to align on")
                        } else w.log("No fragments to align")
                    }(r, e);
                    i && y(i.start) && (w.log("Adjusting PTS using last level due to CC increase within current level " + e.url), Zr(i.start, e))
                }
            }(t, r, e), !r.alignedSliding && e && ei(r, e), r.alignedSliding || !e || r.skippedSegments || ar(e, r))
        }

        function ei(t, e) {
            if (t.hasProgramDateTime && e.hasProgramDateTime) {
                var r = t.fragments, i = e.fragments;
                if (r.length && i.length) {
                    var n, a, s = Math.min(e.endCC, t.endCC);
                    e.startCC < s && t.startCC < s && (n = Jr(i, s), a = Jr(r, s)), n && a || (a = Jr(r, (n = i[Math.floor(i.length / 2)]).cc) || r[Math.floor(r.length / 2)]);
                    var o = n.programDateTime, l = a.programDateTime;
                    o && l && Zr((l - o) / 1e3 - (a.start - n.start), t)
                }
            }
        }

        var ri = Math.pow(2, 17), ii = function () {
            function t(t) {
                this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.loader && (this.loader.destroy(), this.loader = null)
            }, e.abort = function () {
                this.loader && this.loader.abort()
            }, e.load = function (t, e) {
                var r = this, n = t.url;
                if (!n) return Promise.reject(new si({
                    type: L.NETWORK_ERROR,
                    details: A.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: t,
                    error: new Error("Fragment does not have a " + (n ? "part list" : "url")),
                    networkDetails: null
                }));
                this.abort();
                var a = this.config, s = a.fLoader, o = a.loader;
                return new Promise((function (l, u) {
                    if (r.loader && r.loader.destroy(), t.gap) {
                        if (t.tagList.some((function (t) {
                            return "GAP" === t[0]
                        }))) return void u(ai(t));
                        t.gap = !1
                    }
                    var h = r.loader = t.loader = s ? new s(a) : new o(a), d = ni(t), c = fr(a.fragLoadPolicy.default),
                        f = {
                            loadPolicy: c,
                            timeout: c.maxLoadTimeMs,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: 0,
                            highWaterMark: "initSegment" === t.sn ? 1 / 0 : ri
                        };
                    t.stats = h.stats, h.load(d, f, {
                        onSuccess: function (e, i, n, a) {
                            r.resetLoader(t, h);
                            var s = e.data;
                            n.resetIV && t.decryptdata && (t.decryptdata.iv = new Uint8Array(s.slice(0, 16)), s = s.slice(16)), l({
                                frag: t,
                                part: null,
                                payload: s,
                                networkDetails: a
                            })
                        }, onError: function (e, a, s, o) {
                            r.resetLoader(t, h), u(new si({
                                type: L.NETWORK_ERROR,
                                details: A.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t,
                                response: i({url: n, data: void 0}, e),
                                error: new Error("HTTP Error " + e.code + " " + e.text),
                                networkDetails: s,
                                stats: o
                            }))
                        }, onAbort: function (e, i, n) {
                            r.resetLoader(t, h), u(new si({
                                type: L.NETWORK_ERROR,
                                details: A.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: t,
                                error: new Error("Aborted"),
                                networkDetails: n,
                                stats: e
                            }))
                        }, onTimeout: function (e, i, n) {
                            r.resetLoader(t, h), u(new si({
                                type: L.NETWORK_ERROR,
                                details: A.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: t,
                                error: new Error("Timeout after " + f.timeout + "ms"),
                                networkDetails: n,
                                stats: e
                            }))
                        }, onProgress: function (r, i, n, a) {
                            e && e({frag: t, part: null, payload: n, networkDetails: a})
                        }
                    })
                }))
            }, e.loadPart = function (t, e, r) {
                var n = this;
                this.abort();
                var a = this.config, s = a.fLoader, o = a.loader;
                return new Promise((function (l, u) {
                    if (n.loader && n.loader.destroy(), t.gap || e.gap) u(ai(t, e)); else {
                        var h = n.loader = t.loader = s ? new s(a) : new o(a), d = ni(t, e),
                            c = fr(a.fragLoadPolicy.default), f = {
                                loadPolicy: c,
                                timeout: c.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0,
                                highWaterMark: ri
                            };
                        e.stats = h.stats, h.load(d, f, {
                            onSuccess: function (i, a, s, o) {
                                n.resetLoader(t, h), n.updateStatsFromPart(t, e);
                                var u = {frag: t, part: e, payload: i.data, networkDetails: o};
                                r(u), l(u)
                            }, onError: function (r, a, s, o) {
                                n.resetLoader(t, h), u(new si({
                                    type: L.NETWORK_ERROR,
                                    details: A.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    response: i({url: d.url, data: void 0}, r),
                                    error: new Error("HTTP Error " + r.code + " " + r.text),
                                    networkDetails: s,
                                    stats: o
                                }))
                            }, onAbort: function (r, i, a) {
                                t.stats.aborted = e.stats.aborted, n.resetLoader(t, h), u(new si({
                                    type: L.NETWORK_ERROR,
                                    details: A.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    error: new Error("Aborted"),
                                    networkDetails: a,
                                    stats: r
                                }))
                            }, onTimeout: function (r, i, a) {
                                n.resetLoader(t, h), u(new si({
                                    type: L.NETWORK_ERROR,
                                    details: A.FRAG_LOAD_TIMEOUT,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    error: new Error("Timeout after " + f.timeout + "ms"),
                                    networkDetails: a,
                                    stats: r
                                }))
                            }
                        })
                    }
                }))
            }, e.updateStatsFromPart = function (t, e) {
                var r = t.stats, i = e.stats, n = i.total;
                if (r.loaded += i.loaded, n) {
                    var a = Math.round(t.duration / e.duration), s = Math.min(Math.round(r.loaded / n), a),
                        o = (a - s) * Math.round(r.loaded / s);
                    r.total = r.loaded + o
                } else r.total = Math.max(r.loaded, r.total);
                var l = r.loading, u = i.loading;
                l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
            }, e.resetLoader = function (t, e) {
                t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
            }, t
        }();

        function ni(t, e) {
            void 0 === e && (e = null);
            var r = e || t, i = {
                frag: t,
                part: e,
                responseType: "arraybuffer",
                url: r.url,
                headers: {},
                rangeStart: 0,
                rangeEnd: 0
            }, n = r.byteRangeStartOffset, a = r.byteRangeEndOffset;
            if (y(n) && y(a)) {
                var s, o = n, l = a;
                if ("initSegment" === t.sn && "AES-128" === (null == (s = t.decryptdata) ? void 0 : s.method)) {
                    var u = a - n;
                    u % 16 && (l = a + (16 - u % 16)), 0 !== n && (i.resetIV = !0, o = n - 16)
                }
                i.rangeStart = o, i.rangeEnd = l
            }
            return i
        }

        function ai(t, e) {
            var r = new Error("GAP " + (t.gap ? "tag" : "attribute") + " found"),
                i = {type: L.MEDIA_ERROR, details: A.FRAG_GAP, fatal: !1, frag: t, error: r, networkDetails: null};
            return e && (i.part = e), (e || t).stats.aborted = !0, new si(i)
        }

        var si = function (t) {
                function e(e) {
                    var r;
                    return (r = t.call(this, e.error.message) || this).data = void 0, r.data = e, r
                }

                return l(e, t), e
            }(c(Error)), oi = function () {
                function t(t, e) {
                    this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
                }

                return t.prototype.decrypt = function (t, e) {
                    return this.subtle.decrypt({name: "AES-CBC", iv: this.aesIV}, e, t)
                }, t
            }(), li = function () {
                function t(t, e) {
                    this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
                }

                return t.prototype.expandKey = function () {
                    return this.subtle.importKey("raw", this.key, {name: "AES-CBC"}, !1, ["encrypt", "decrypt"])
                }, t
            }(), ui = function () {
                function t() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
                }

                var e = t.prototype;
                return e.uint8ArrayToUint32Array_ = function (t) {
                    for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                    return r
                }, e.initTable = function () {
                    var t = this.sBox, e = this.invSBox, r = this.subMix, i = r[0], n = r[1], a = r[2], s = r[3],
                        o = this.invSubMix, l = o[0], u = o[1], h = o[2], d = o[3], c = new Uint32Array(256), f = 0, g = 0,
                        v = 0;
                    for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                    for (v = 0; v < 256; v++) {
                        var m = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                        m = m >>> 8 ^ 255 & m ^ 99, t[f] = m, e[m] = f;
                        var p = c[f], y = c[p], E = c[y], T = 257 * c[m] ^ 16843008 * m;
                        i[f] = T << 24 | T >>> 8, n[f] = T << 16 | T >>> 16, a[f] = T << 8 | T >>> 24, s[f] = T, T = 16843009 * E ^ 65537 * y ^ 257 * p ^ 16843008 * f, l[m] = T << 24 | T >>> 8, u[m] = T << 16 | T >>> 16, h[m] = T << 8 | T >>> 24, d[m] = T, f ? (f = p ^ c[c[c[E ^ p]]], g ^= c[c[g]]) : f = g = 1
                    }
                }, e.expandKey = function (t) {
                    for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;) r = e[i] === this.key[i], i++;
                    if (!r) {
                        this.key = e;
                        var n = this.keySize = e.length;
                        if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
                        var a, s, o, l, u = this.ksRows = 4 * (n + 6 + 1), h = this.keySchedule = new Uint32Array(u),
                            d = this.invKeySchedule = new Uint32Array(u), c = this.sBox, f = this.rcon, g = this.invSubMix,
                            v = g[0], m = g[1], p = g[2], y = g[3];
                        for (a = 0; a < u; a++) a < n ? o = h[a] = e[a] : (l = o, a % n == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), h[a] = o = (h[a - n] ^ l) >>> 0);
                        for (s = 0; s < u; s++) a = u - s, l = 3 & s ? h[a] : h[a - 4], d[s] = s < 4 || a <= 4 ? l : v[c[l >>> 24]] ^ m[c[l >>> 16 & 255]] ^ p[c[l >>> 8 & 255]] ^ y[c[255 & l]], d[s] = d[s] >>> 0
                    }
                }, e.networkToHostOrderSwap = function (t) {
                    return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                }, e.decrypt = function (t, e, r) {
                    for (var i, n, a, s, o, l, u, h, d, c, f, g, v, m, p = this.keySize + 6, y = this.invKeySchedule, E = this.invSBox, T = this.invSubMix, S = T[0], L = T[1], A = T[2], R = T[3], k = this.uint8ArrayToUint32Array_(r), b = k[0], D = k[1], I = k[2], w = k[3], C = new Int32Array(t), _ = new Int32Array(C.length), x = this.networkToHostOrderSwap; e < C.length;) {
                        for (d = x(C[e]), c = x(C[e + 1]), f = x(C[e + 2]), g = x(C[e + 3]), o = d ^ y[0], l = g ^ y[1], u = f ^ y[2], h = c ^ y[3], v = 4, m = 1; m < p; m++) i = S[o >>> 24] ^ L[l >> 16 & 255] ^ A[u >> 8 & 255] ^ R[255 & h] ^ y[v], n = S[l >>> 24] ^ L[u >> 16 & 255] ^ A[h >> 8 & 255] ^ R[255 & o] ^ y[v + 1], a = S[u >>> 24] ^ L[h >> 16 & 255] ^ A[o >> 8 & 255] ^ R[255 & l] ^ y[v + 2], s = S[h >>> 24] ^ L[o >> 16 & 255] ^ A[l >> 8 & 255] ^ R[255 & u] ^ y[v + 3], o = i, l = n, u = a, h = s, v += 4;
                        i = E[o >>> 24] << 24 ^ E[l >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & h] ^ y[v], n = E[l >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[h >> 8 & 255] << 8 ^ E[255 & o] ^ y[v + 1], a = E[u >>> 24] << 24 ^ E[h >> 16 & 255] << 16 ^ E[o >> 8 & 255] << 8 ^ E[255 & l] ^ y[v + 2], s = E[h >>> 24] << 24 ^ E[o >> 16 & 255] << 16 ^ E[l >> 8 & 255] << 8 ^ E[255 & u] ^ y[v + 3], _[e] = x(i ^ b), _[e + 1] = x(s ^ D), _[e + 2] = x(a ^ I), _[e + 3] = x(n ^ w), b = d, D = c, I = f, w = g, e += 4
                    }
                    return _.buffer
                }, t
            }(), hi = function () {
                function t(t, e) {
                    var r = (void 0 === e ? {} : e).removePKCS7Padding, i = void 0 === r || r;
                    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t.enableSoftwareAES, this.removePKCS7Padding = i, i) try {
                        var n = self.crypto;
                        n && (this.subtle = n.subtle || n.webkitSubtle)
                    } catch (t) {
                    }
                    null === this.subtle && (this.useSoftware = !0)
                }

                var e = t.prototype;
                return e.destroy = function () {
                    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null
                }, e.isSync = function () {
                    return this.useSoftware
                }, e.flush = function () {
                    var t = this.currentResult, e = this.remainderData;
                    if (!t || e) return this.reset(), null;
                    var r, i, n, a = new Uint8Array(t);
                    return this.reset(), this.removePKCS7Padding ? (i = (r = a).byteLength, (n = i && new DataView(r.buffer).getUint8(i - 1)) ? nt(r, 0, i - n) : r) : a
                }, e.reset = function () {
                    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
                }, e.decrypt = function (t, e, r) {
                    var i = this;
                    return this.useSoftware ? new Promise((function (n, a) {
                        i.softwareDecrypt(new Uint8Array(t), e, r);
                        var s = i.flush();
                        s ? n(s.buffer) : a(new Error("[softwareDecrypt] Failed to decrypt data"))
                    })) : this.webCryptoDecrypt(new Uint8Array(t), e, r)
                }, e.softwareDecrypt = function (t, e, r) {
                    var i = this.currentIV, n = this.currentResult, a = this.remainderData;
                    this.logOnce("JS AES decrypt"), a && (t = Gt(a, t), this.remainderData = null);
                    var s = this.getValidChunk(t);
                    if (!s.length) return null;
                    i && (r = i);
                    var o = this.softwareDecrypter;
                    o || (o = this.softwareDecrypter = new ui), o.expandKey(e);
                    var l = n;
                    return this.currentResult = o.decrypt(s.buffer, 0, r), this.currentIV = nt(s, -16).buffer, l || null
                }, e.webCryptoDecrypt = function (t, e, r) {
                    var i = this, n = this.subtle;
                    return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new li(n, e)), this.fastAesKey.expandKey().then((function (e) {
                        return n ? (i.logOnce("WebCrypto AES decrypt"), new oi(n, new Uint8Array(r)).decrypt(t.buffer, e)) : Promise.reject(new Error("web crypto not initialized"))
                    })).catch((function (n) {
                        return w.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + n.name + ": " + n.message), i.onWebCryptoError(t, e, r)
                    }))
                }, e.onWebCryptoError = function (t, e, r) {
                    this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(t, e, r);
                    var i = this.flush();
                    if (i) return i.buffer;
                    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")
                }, e.getValidChunk = function (t) {
                    var e = t, r = t.length - t.length % 16;
                    return r !== t.length && (e = nt(t, 0, r), this.remainderData = nt(t, r)), e
                }, e.logOnce = function (t) {
                    this.logEnabled && (w.log("[decrypter]: " + t), this.logEnabled = !1)
                }, t
            }(), di = function (t) {
                for (var e = "", r = t.length, i = 0; i < r; i++) e += "[" + t.start(i).toFixed(3) + "-" + t.end(i).toFixed(3) + "]";
                return e
            }, ci = "STOPPED", fi = "IDLE", gi = "KEY_LOADING", vi = "FRAG_LOADING", mi = "FRAG_LOADING_WAITING_RETRY",
            pi = "WAITING_TRACK", yi = "PARSING", Ei = "PARSED", Ti = "ENDED", Si = "ERROR", Li = "WAITING_INIT_PTS",
            Ai = "WAITING_LEVEL", Ri = function (t) {
                function e(e, r, i, n, a) {
                    var s;
                    return (s = t.call(this) || this).hls = void 0, s.fragPrevious = null, s.fragCurrent = null, s.fragmentTracker = void 0, s.transmuxer = null, s._state = ci, s.playlistType = void 0, s.media = null, s.mediaBuffer = null, s.config = void 0, s.bitrateTest = !1, s.lastCurrentTime = 0, s.nextLoadPosition = 0, s.startPosition = 0, s.startTimeOffset = null, s.loadedmetadata = !1, s.retryDate = 0, s.levels = null, s.fragmentLoader = void 0, s.keyLoader = void 0, s.levelLastLoaded = null, s.startFragRequested = !1, s.decrypter = void 0, s.initPTS = [], s.onvseeking = null, s.onvended = null, s.logPrefix = "", s.log = void 0, s.warn = void 0, s.playlistType = a, s.logPrefix = n, s.log = w.log.bind(w, n + ":"), s.warn = w.warn.bind(w, n + ":"), s.hls = e, s.fragmentLoader = new ii(e.config), s.keyLoader = i, s.fragmentTracker = r, s.config = e.config, s.decrypter = new hi(e.config), e.on(S.MANIFEST_LOADED, s.onManifestLoaded, function (t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(s)), s
                }

                l(e, t);
                var r = e.prototype;
                return r.doTick = function () {
                    this.onTickEnd()
                }, r.onTickEnd = function () {
                }, r.startLoad = function (t) {
                }, r.stopLoad = function () {
                    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
                    var t = this.fragCurrent;
                    null != t && t.loader && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = ci
                }, r._streamEnded = function (t, e) {
                    if (e.live || t.nextStart || !t.end || !this.media) return !1;
                    var r = e.partList;
                    if (null != r && r.length) {
                        var i = r[r.length - 1];
                        return zr.isBuffered(this.media, i.start + i.duration / 2)
                    }
                    var n = e.fragments[e.fragments.length - 1].type;
                    return this.fragmentTracker.isEndListAppended(n)
                }, r.getLevelDetails = function () {
                    var t;
                    if (this.levels && null !== this.levelLastLoaded) return null == (t = this.levelLastLoaded) ? void 0 : t.details
                }, r.onMediaAttached = function (t, e) {
                    var r = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
                    var i = this.config;
                    this.levels && i.autoStartLoad && this.state === ci && this.startLoad(i.startPosition)
                }, r.onMediaDetaching = function () {
                    var t = this.media;
                    null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && this.onvseeking && this.onvended && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                }, r.onMediaSeeking = function () {
                    var t = this.config, e = this.fragCurrent, r = this.media, i = this.mediaBuffer, n = this.state,
                        a = r ? r.currentTime : 0, s = zr.bufferInfo(i || r, a, t.maxBufferHole);
                    if (this.log("media seeking to " + (y(a) ? a.toFixed(3) : a) + ", state: " + n), this.state === Ti) this.resetLoadingState(); else if (e) {
                        var o = t.maxFragLookUpTolerance, l = e.start - o, u = e.start + e.duration + o;
                        if (!s.len || u < s.start || l > s.end) {
                            var h = a > u;
                            (a < l || h) && (h && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
                        }
                    }
                    r && (this.fragmentTracker.removeFragmentsInRange(a, 1 / 0, this.playlistType, !0), this.lastCurrentTime = a), this.loadedmetadata || s.len || (this.nextLoadPosition = this.startPosition = a), this.tickImmediate()
                }, r.onMediaEnded = function () {
                    this.startPosition = this.lastCurrentTime = 0
                }, r.onManifestLoaded = function (t, e) {
                    this.startTimeOffset = e.startTimeOffset, this.initPTS = []
                }, r.onHandlerDestroying = function () {
                    this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), t.prototype.onHandlerDestroying.call(this), this.hls = null
                }, r.onHandlerDestroyed = function () {
                    this.state = ci, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
                }, r.loadFragment = function (t, e, r) {
                    this._loadFragForPlayback(t, e, r)
                }, r._loadFragForPlayback = function (t, e, r) {
                    var i = this;
                    this._doFragLoad(t, e, r, (function (e) {
                        if (i.fragContextChanged(t)) return i.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), void i.fragmentTracker.removeFragment(t);
                        t.stats.chunkCount++, i._handleFragmentLoadProgress(e)
                    })).then((function (e) {
                        if (e) {
                            var r = i.state;
                            i.fragContextChanged(t) ? (r === vi || !i.fragCurrent && r === yi) && (i.fragmentTracker.removeFragment(t), i.state = fi) : ("payload" in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level), i.hls.trigger(S.FRAG_LOADED, e)), i._handleFragmentLoadComplete(e))
                        }
                    })).catch((function (e) {
                        i.state !== ci && i.state !== Si && (i.warn(e), i.resetFragmentLoading(t))
                    }))
                }, r.clearTrackerIfNeeded = function (t) {
                    var e, r = this.fragmentTracker;
                    if (r.getState(t) === Hr) {
                        var i = t.type, n = this.getFwdBufferInfo(this.mediaBuffer, i),
                            a = Math.max(t.duration, n ? n.len : this.config.maxBufferLength);
                        this.reduceMaxBufferLength(a) && r.removeFragment(t)
                    } else 0 === (null == (e = this.mediaBuffer) ? void 0 : e.buffered.length) ? r.removeAllFragments() : r.hasParts(t.type) && (r.detectPartialFragments({
                        frag: t,
                        part: null,
                        stats: t.stats,
                        id: t.type
                    }), r.getState(t) === Vr && r.removeFragment(t))
                }, r.checkLiveUpdate = function (t) {
                    if (t.updated && !t.live) {
                        var e = t.fragments[t.fragments.length - 1];
                        this.fragmentTracker.detectPartialFragments({frag: e, part: null, stats: e.stats, id: e.type})
                    }
                    t.fragments[0] || (t.deltaUpdateFailed = !0)
                }, r.flushMainBuffer = function (t, e, r) {
                    if (void 0 === r && (r = null), t - e) {
                        var i = {startOffset: t, endOffset: e, type: r};
                        this.hls.trigger(S.BUFFER_FLUSHING, i)
                    }
                }, r._loadInitSegment = function (t, e) {
                    var r = this;
                    this._doFragLoad(t, e).then((function (e) {
                        if (!e || r.fragContextChanged(t) || !r.levels) throw new Error("init load aborted");
                        return e
                    })).then((function (e) {
                        var i = r.hls, n = e.payload, a = t.decryptdata;
                        if (n && n.byteLength > 0 && null != a && a.key && a.iv && "AES-128" === a.method) {
                            var s = self.performance.now();
                            return r.decrypter.decrypt(new Uint8Array(n), a.key.buffer, a.iv.buffer).catch((function (e) {
                                throw i.trigger(S.ERROR, {
                                    type: L.MEDIA_ERROR,
                                    details: A.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: e,
                                    reason: e.message,
                                    frag: t
                                }), e
                            })).then((function (n) {
                                var a = self.performance.now();
                                return i.trigger(S.FRAG_DECRYPTED, {
                                    frag: t,
                                    payload: n,
                                    stats: {tstart: s, tdecrypt: a}
                                }), e.payload = n, r.completeInitSegmentLoad(e)
                            }))
                        }
                        return r.completeInitSegmentLoad(e)
                    })).catch((function (e) {
                        r.state !== ci && r.state !== Si && (r.warn(e), r.resetFragmentLoading(t))
                    }))
                }, r.completeInitSegmentLoad = function (t) {
                    if (!this.levels) throw new Error("init load aborted, missing levels");
                    var e = t.frag.stats;
                    this.state = fi, t.frag.data = new Uint8Array(t.payload), e.parsing.start = e.buffering.start = self.performance.now(), e.parsing.end = e.buffering.end = self.performance.now(), this.tick()
                }, r.fragContextChanged = function (t) {
                    var e = this.fragCurrent;
                    return !t || !e || t.sn !== e.sn || t.level !== e.level
                }, r.fragBufferedComplete = function (t, e) {
                    var r, i, n, a, s = this.mediaBuffer ? this.mediaBuffer : this.media;
                    if (this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + (this.playlistType === Ie ? "level" : "track") + " " + t.level + " (frag:[" + (null != (r = t.startPTS) ? r : NaN).toFixed(3) + "-" + (null != (i = t.endPTS) ? i : NaN).toFixed(3) + "] > buffer:" + (s ? di(zr.getBuffered(s)) : "(detached)") + ")"), "initSegment" !== t.sn) {
                        var o;
                        if (t.type !== Ce) {
                            var l = t.elementaryStreams;
                            if (!Object.keys(l).some((function (t) {
                                return !!l[t]
                            }))) return void (this.state = fi)
                        }
                        var u = null == (o = this.levels) ? void 0 : o[t.level];
                        null != u && u.fragmentError && (this.log("Resetting level fragment error count of " + u.fragmentError + " on frag buffered"), u.fragmentError = 0)
                    }
                    this.state = fi, s && (!this.loadedmetadata && t.type == Ie && s.buffered.length && (null == (n = this.fragCurrent) ? void 0 : n.sn) === (null == (a = this.fragPrevious) ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
                }, r.seekToStartPos = function () {
                }, r._handleFragmentLoadComplete = function (t) {
                    var e = this.transmuxer;
                    if (e) {
                        var r = t.frag, i = t.part, n = t.partsLoaded, a = !n || 0 === n.length || n.some((function (t) {
                            return !t
                        })), s = new Qr(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
                        e.flush(s)
                    }
                }, r._handleFragmentLoadProgress = function (t) {
                }, r._doFragLoad = function (t, e, r, i) {
                    var n, a = this;
                    void 0 === r && (r = null);
                    var s = null == e ? void 0 : e.details;
                    if (!this.levels || !s) throw new Error("frag load aborted, missing level" + (s ? "" : " detail") + "s");
                    var o = null;
                    if (!t.encrypted || null != (n = t.decryptdata) && n.key ? !t.encrypted && s.encryptedFragments.length && this.keyLoader.loadClear(t, s.encryptedFragments) : (this.log("Loading key for " + t.sn + " of [" + s.startSN + "-" + s.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = gi, this.fragCurrent = t, o = this.keyLoader.load(t).then((function (t) {
                        if (!a.fragContextChanged(t.frag)) return a.hls.trigger(S.KEY_LOADED, t), a.state === gi && (a.state = fi), t
                    })), this.hls.trigger(S.KEY_LOADING, {frag: t}), null === this.fragCurrent && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), r = Math.max(t.start, r || 0), this.config.lowLatencyMode && "initSegment" !== t.sn) {
                        var l = s.partList;
                        if (l && i) {
                            r > t.end && s.fragmentHint && (t = s.fragmentHint);
                            var u = this.getNextPart(l, t, r);
                            if (u > -1) {
                                var h, d = l[u];
                                return this.log("Loading part sn: " + t.sn + " p: " + d.index + " cc: " + t.cc + " of playlist [" + s.startSN + "-" + s.endSN + "] parts [0-" + u + "-" + (l.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.nextLoadPosition = d.start + d.duration, this.state = vi, h = o ? o.then((function (r) {
                                    return !r || a.fragContextChanged(r.frag) ? null : a.doFragPartsLoad(t, d, e, i)
                                })).catch((function (t) {
                                    return a.handleFragLoadError(t)
                                })) : this.doFragPartsLoad(t, d, e, i).catch((function (t) {
                                    return a.handleFragLoadError(t)
                                })), this.hls.trigger(S.FRAG_LOADING, {
                                    frag: t,
                                    part: d,
                                    targetBufferTime: r
                                }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : h
                            }
                            if (!t.url || this.loadedEndOfParts(l, r)) return Promise.resolve(null)
                        }
                    }
                    this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (s ? "of [" + s.startSN + "-" + s.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), y(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = vi;
                    var c, f = this.config.progressive;
                    return c = f && o ? o.then((function (e) {
                        return !e || a.fragContextChanged(null == e ? void 0 : e.frag) ? null : a.fragmentLoader.load(t, i)
                    })).catch((function (t) {
                        return a.handleFragLoadError(t)
                    })) : Promise.all([this.fragmentLoader.load(t, f ? i : void 0), o]).then((function (t) {
                        var e = t[0];
                        return !f && e && i && i(e), e
                    })).catch((function (t) {
                        return a.handleFragLoadError(t)
                    })), this.hls.trigger(S.FRAG_LOADING, {
                        frag: t,
                        targetBufferTime: r
                    }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c
                }, r.doFragPartsLoad = function (t, e, r, i) {
                    var n = this;
                    return new Promise((function (a, s) {
                        var o, l = [], u = null == (o = r.details) ? void 0 : o.partList;
                        !function e(o) {
                            n.fragmentLoader.loadPart(t, o, i).then((function (i) {
                                l[o.index] = i;
                                var s = i.part;
                                n.hls.trigger(S.FRAG_LOADED, i);
                                var h = or(r, t.sn, o.index + 1) || lr(u, t.sn, o.index + 1);
                                if (!h) return a({frag: t, part: s, partsLoaded: l});
                                e(h)
                            })).catch(s)
                        }(e)
                    }))
                }, r.handleFragLoadError = function (t) {
                    if ("data" in t) {
                        var e = t.data;
                        t.data && e.details === A.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(S.ERROR, e)
                    } else this.hls.trigger(S.ERROR, {
                        type: L.OTHER_ERROR,
                        details: A.INTERNAL_EXCEPTION,
                        err: t,
                        error: t,
                        fatal: !0
                    });
                    return null
                }, r._handleTransmuxerFlush = function (t) {
                    var e = this.getCurrentContext(t);
                    if (e && this.state === yi) {
                        var r = e.frag, i = e.part, n = e.level, a = self.performance.now();
                        r.stats.parsing.end = a, i && (i.stats.parsing.end = a), this.updateLevelTiming(r, i, n, t.partial)
                    } else this.fragCurrent || this.state === ci || this.state === Si || (this.state = fi)
                }, r.getCurrentContext = function (t) {
                    var e = this.levels, r = this.fragCurrent, i = t.level, n = t.sn, a = t.part;
                    if (null == e || !e[i]) return this.warn("Levels object was unset while buffering fragment " + n + " of level " + i + ". The current chunk will not be buffered."), null;
                    var s = e[i], o = a > -1 ? or(s, n, a) : null, l = o ? o.fragment : function (t, e, r) {
                        if (null == t || !t.details) return null;
                        var i = t.details, n = i.fragments[e - i.startSN];
                        return n || ((n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null)
                    }(s, n, r);
                    return l ? (r && r !== l && (l.stats = r.stats), {frag: l, part: o, level: s}) : null
                }, r.bufferFragmentData = function (t, e, r, i, n) {
                    var a;
                    if (t && this.state === yi) {
                        var s = t.data1, o = t.data2, l = s;
                        if (s && o && (l = Gt(s, o)), null != (a = l) && a.length) {
                            var u = {type: t.type, frag: e, part: r, chunkMeta: i, parent: e.type, data: l};
                            if (this.hls.trigger(S.BUFFER_APPENDING, u), t.dropped && t.independent && !r) {
                                if (n) return;
                                this.flushBufferGap(e)
                            }
                        }
                    }
                }, r.flushBufferGap = function (t) {
                    var e = this.media;
                    if (e) if (zr.isBuffered(e, e.currentTime)) {
                        var r = e.currentTime, i = zr.bufferInfo(e, r, 0), n = t.duration,
                            a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n),
                            s = Math.max(Math.min(t.start - a, i.end - a), r + a);
                        t.start - s > a && this.flushMainBuffer(s, t.start)
                    } else this.flushMainBuffer(0, t.start)
                }, r.getFwdBufferInfo = function (t, e) {
                    var r = this.getLoadPosition();
                    return y(r) ? this.getFwdBufferInfoAtPos(t, r, e) : null
                }, r.getFwdBufferInfoAtPos = function (t, e, r) {
                    var i = this.config.maxBufferHole, n = zr.bufferInfo(t, e, i);
                    if (0 === n.len && void 0 !== n.nextStart) {
                        var a = this.fragmentTracker.getBufferedFrag(e, r);
                        if (a && n.nextStart < a.end) return zr.bufferInfo(t, e, Math.max(n.nextStart, i))
                    }
                    return n
                }, r.getMaxBufferLength = function (t) {
                    var e, r = this.config;
                    return e = t ? Math.max(8 * r.maxBufferSize / t, r.maxBufferLength) : r.maxBufferLength, Math.min(e, r.maxMaxBufferLength)
                }, r.reduceMaxBufferLength = function (t) {
                    var e = this.config, r = t || e.maxBufferLength;
                    return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                }, r.getAppendedFrag = function (t, e) {
                    var r = this.fragmentTracker.getAppendedFrag(t, Ie);
                    return r && "fragment" in r ? r.fragment : r
                }, r.getNextFragment = function (t, e) {
                    var r = e.fragments, i = r.length;
                    if (!i) return null;
                    var n, a = this.config, s = r[0].start;
                    if (e.live) {
                        var o = a.initialLiveManifestSize;
                        if (i < o) return this.warn("Not enough fragments to start playback (have: " + i + ", need: " + o + ")"), null;
                        (!e.PTSKnown && !this.startFragRequested && -1 === this.startPosition || t < s) && (n = this.getInitialLiveFragment(e, r), this.startPosition = this.nextLoadPosition = n ? this.hls.liveSyncPosition || n.start : t)
                    } else t <= s && (n = r[0]);
                    if (!n) {
                        var l = a.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                        n = this.getFragmentAtPosition(t, l, e)
                    }
                    return this.mapToInitFragWhenRequired(n)
                }, r.isLoopLoading = function (t, e) {
                    var r = this.fragmentTracker.getState(t);
                    return (r === Yr || r === Vr && !!t.gap) && this.nextLoadPosition > e
                }, r.getNextFragmentLoopLoading = function (t, e, r, i, n) {
                    var a = t.gap, s = this.getNextFragment(this.nextLoadPosition, e);
                    if (null === s) return s;
                    if (t = s, a && t && !t.gap && r.nextStart) {
                        var o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, r.nextStart, i);
                        if (null !== o && r.len + o.len >= n) return this.log('buffer full after gaps in "' + i + '" playlist starting at sn: ' + t.sn), null
                    }
                    return t
                }, r.mapToInitFragWhenRequired = function (t) {
                    return null == t || !t.initSegment || null != t && t.initSegment.data || this.bitrateTest ? t : t.initSegment
                }, r.getNextPart = function (t, e, r) {
                    for (var i = -1, n = !1, a = !0, s = 0, o = t.length; s < o; s++) {
                        var l = t[s];
                        if (a = a && !l.independent, i > -1 && r < l.start) break;
                        var u = l.loaded;
                        u ? i = -1 : (n || l.independent || a) && l.fragment === e && (i = s), n = u
                    }
                    return i
                }, r.loadedEndOfParts = function (t, e) {
                    var r = t[t.length - 1];
                    return r && e > r.start && r.loaded
                }, r.getInitialLiveFragment = function (t, e) {
                    var r = this.fragPrevious, i = null;
                    if (r) {
                        if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime), i = function (t, e, r) {
                            if (null === e || !Array.isArray(t) || !t.length || !y(e)) return null;
                            if (e < (t[0].programDateTime || 0)) return null;
                            if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
                            r = r || 0;
                            for (var i = 0; i < t.length; ++i) {
                                var n = t[i];
                                if (yr(e, r, n)) return n
                            }
                            return null
                        }(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                            var n = r.sn + 1;
                            if (n >= t.startSN && n <= t.endSN) {
                                var a = e[n - t.startSN];
                                r.cc === a.cc && (i = a, this.log("Live playlist, switching playlist, load frag with next SN: " + i.sn))
                            }
                            i || (i = function (t, e) {
                                return vr(t, (function (t) {
                                    return t.cc < e ? 1 : t.cc > e ? -1 : 0
                                }))
                            }(e, r.cc), i && this.log("Live playlist, switching playlist, load frag with same CC: " + i.sn))
                        }
                    } else {
                        var s = this.hls.liveSyncPosition;
                        null !== s && (i = this.getFragmentAtPosition(s, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                    }
                    return i
                }, r.getFragmentAtPosition = function (t, e, r) {
                    var i, n = this.config, a = this.fragPrevious, s = r.fragments, o = r.endSN, l = r.fragmentHint,
                        u = n.maxFragLookUpTolerance, h = r.partList,
                        d = !!(n.lowLatencyMode && null != h && h.length && l);
                    if (d && l && !this.bitrateTest && (s = s.concat(l), o = l.sn), i = t < e ? mr(a, s, t, t > e - u ? 0 : u) : s[s.length - 1]) {
                        var c = i.sn - r.startSN, f = this.fragmentTracker.getState(i);
                        if ((f === Yr || f === Vr && i.gap) && (a = i), a && i.sn === a.sn && (!d || h[0].fragment.sn > i.sn) && a && i.level === a.level) {
                            var g = s[c + 1];
                            i = i.sn < o && this.fragmentTracker.getState(g) !== Yr ? g : null
                        }
                    }
                    return i
                }, r.synchronizeToLiveEdge = function (t) {
                    var e = this.config, r = this.media;
                    if (r) {
                        var i = this.hls.liveSyncPosition, n = r.currentTime, a = t.fragments[0].start, s = t.edge,
                            o = n >= a - e.maxFragLookUpTolerance && n <= s;
                        if (null !== i && r.duration > i && (n < i || !o)) {
                            var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                            (!o && r.readyState < 4 || n < s - l) && (this.loadedmetadata || (this.nextLoadPosition = i), r.readyState && (this.warn("Playback: " + n.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + i.toFixed(3)), r.currentTime = i))
                        }
                    }
                }, r.alignPlaylists = function (t, e, r) {
                    var i = t.fragments.length;
                    if (!i) return this.warn("No fragments in live playlist"), 0;
                    var n = t.fragments[0].start, a = !e, s = t.alignedSliding && y(n);
                    if (a || !s && !n) {
                        var o = this.fragPrevious;
                        ti(o, r, t);
                        var l = t.fragments[0].start;
                        return this.log("Live playlist sliding: " + l.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (o ? o.sn : "na") + " fragments: " + i), l
                    }
                    return n
                }, r.waitForCdnTuneIn = function (t) {
                    return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                }, r.setStartPosition = function (t, e) {
                    var r = this.startPosition;
                    if (r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
                        var i = null !== this.startTimeOffset, n = i ? this.startTimeOffset : t.startTimeOffset;
                        null !== n && y(n) ? (r = e + n, n < 0 && (r += t.totalduration), r = Math.min(Math.max(e, r), e + t.totalduration), this.log("Start time offset " + n + " found in " + (i ? "multivariant" : "media") + " playlist, adjust startPosition to " + r), this.startPosition = r) : t.live ? r = this.hls.liveSyncPosition || e : this.startPosition = r = 0, this.lastCurrentTime = r
                    }
                    this.nextLoadPosition = r
                }, r.getLoadPosition = function () {
                    var t = this.media, e = 0;
                    return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                }, r.handleFragLoadAborted = function (t, e) {
                    this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
                }, r.resetFragmentLoading = function (t) {
                    this.fragCurrent && (this.fragContextChanged(t) || this.state === mi) || (this.state = fi)
                }, r.onFragmentOrKeyLoadError = function (t, e) {
                    if (e.chunkMeta && !e.frag) {
                        var r = this.getCurrentContext(e.chunkMeta);
                        r && (e.frag = r.frag)
                    }
                    var i = e.frag;
                    if (i && i.type === t && this.levels) if (this.fragContextChanged(i)) {
                        var n;
                        this.warn("Frag load error must match current frag to retry " + i.url + " > " + (null == (n = this.fragCurrent) ? void 0 : n.url))
                    } else {
                        var a = e.details === A.FRAG_GAP;
                        a && this.fragmentTracker.fragBuffered(i, !0);
                        var s = e.errorAction, o = s || {}, l = o.action, u = o.retryCount, h = void 0 === u ? 0 : u,
                            d = o.retryConfig;
                        if (s && l === Lr && d) {
                            this.resetStartWhenNotLoaded(this.levelLastLoaded);
                            var c = cr(d, h);
                            this.warn("Fragment " + i.sn + " of " + t + " " + i.level + " errored with " + e.details + ", retrying loading " + (h + 1) + "/" + d.maxNumRetry + " in " + c + "ms"), s.resolved = !0, this.retryDate = self.performance.now() + c, this.state = mi
                        } else if (d && s) {
                            if (this.resetFragmentErrors(t), !(h < d.maxNumRetry)) return void w.warn(e.details + " reached or exceeded max retry (" + h + ")");
                            a || l === Sr || (s.resolved = !0)
                        } else (null == s ? void 0 : s.action) === Tr ? this.state = Ai : this.state = Si;
                        this.tickImmediate()
                    }
                }, r.reduceLengthAndFlushBuffer = function (t) {
                    if (this.state === yi || this.state === Ei) {
                        var e = t.parent, r = this.getFwdBufferInfo(this.mediaBuffer, e), i = r && r.len > .5;
                        i && this.reduceMaxBufferLength(r.len);
                        var n = !i;
                        return n && this.warn("Buffer full error while media.currentTime is not buffered, flush " + e + " buffer"), t.frag && (this.fragmentTracker.removeFragment(t.frag), this.nextLoadPosition = t.frag.start), this.resetLoadingState(), n
                    }
                    return !1
                }, r.resetFragmentErrors = function (t) {
                    t === we && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== ci && (this.state = fi)
                }, r.afterBufferFlushed = function (t, e, r) {
                    if (t) {
                        var i = zr.getBuffered(t);
                        this.fragmentTracker.detectEvictedFragments(e, i, r), this.state === Ti && this.resetLoadingState()
                    }
                }, r.resetLoadingState = function () {
                    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = fi
                }, r.resetStartWhenNotLoaded = function (t) {
                    if (!this.loadedmetadata) {
                        this.startFragRequested = !1;
                        var e = t ? t.details : null;
                        null != e && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
                    }
                }, r.resetWhenMissingContext = function (t) {
                    this.warn("The loading context changed while buffering fragment " + t.sn + " of level " + t.level + ". This chunk will not be buffered."), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState()
                }, r.removeUnbufferedFrags = function (t) {
                    void 0 === t && (t = 0), this.fragmentTracker.removeFragmentsInRange(t, 1 / 0, this.playlistType, !1, !0)
                }, r.updateLevelTiming = function (t, e, r, i) {
                    var n, a = this, s = r.details;
                    if (s) {
                        if (!Object.keys(t.elementaryStreams).reduce((function (e, n) {
                            var o = t.elementaryStreams[n];
                            if (o) {
                                var l = o.endPTS - o.startPTS;
                                if (l <= 0) return a.warn("Could not parse fragment " + t.sn + " " + n + " duration reliably (" + l + ")"), e || !1;
                                var u = i ? 0 : ir(s, t, o.startPTS, o.endPTS, o.startDTS, o.endDTS);
                                return a.hls.trigger(S.LEVEL_PTS_UPDATED, {
                                    details: s,
                                    level: r,
                                    drift: u,
                                    type: n,
                                    frag: t,
                                    start: o.startPTS,
                                    end: o.endPTS
                                }), !0
                            }
                            return e
                        }), !1) && null === (null == (n = this.transmuxer) ? void 0 : n.error)) {
                            var o = new Error("Found no media in fragment " + t.sn + " of level " + t.level + " resetting transmuxer to fallback to playlist timing");
                            if (0 === r.fragmentError && (r.fragmentError++, t.gap = !0, this.fragmentTracker.removeFragment(t), this.fragmentTracker.fragBuffered(t, !0)), this.warn(o.message), this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: A.FRAG_PARSING_ERROR,
                                fatal: !1,
                                error: o,
                                frag: t,
                                reason: "Found no media in msn " + t.sn + ' of level "' + r.url + '"'
                            }), !this.hls) return;
                            this.resetTransmuxer()
                        }
                        this.state = Ei, this.hls.trigger(S.FRAG_PARSED, {frag: t, part: e})
                    } else this.warn("level.details undefined")
                }, r.resetTransmuxer = function () {
                    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                }, r.recoverWorkerError = function (t) {
                    "demuxerWorker" === t.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState())
                }, s(e, [{
                    key: "state", get: function () {
                        return this._state
                    }, set: function (t) {
                        var e = this._state;
                        e !== t && (this._state = t, this.log(e + "->" + t))
                    }
                }]), e
            }(Gr), ki = function () {
                function t() {
                    this.chunks = [], this.dataLength = 0
                }

                var e = t.prototype;
                return e.push = function (t) {
                    this.chunks.push(t), this.dataLength += t.length
                }, e.flush = function () {
                    var t, e = this.chunks, r = this.dataLength;
                    return e.length ? (t = 1 === e.length ? e[0] : function (t, e) {
                        for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                            var a = t[n];
                            r.set(a, i), i += a.length
                        }
                        return r
                    }(e, r), this.reset(), t) : new Uint8Array(0)
                }, e.reset = function () {
                    this.chunks.length = 0, this.dataLength = 0
                }, t
            }();

        function bi(t, e) {
            return void 0 === t && (t = ""), void 0 === e && (e = 9e4), {
                type: t,
                id: -1,
                pid: -1,
                inputTimeScale: e,
                sequenceNumber: -1,
                samples: [],
                dropped: 0
            }
        }

        var Di = function () {
            function t() {
                this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
            }

            var e = t.prototype;
            return e.resetInitSegment = function (t, e, r, i) {
                this._id3Track = {
                    type: "id3",
                    id: 3,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0
                }
            }, e.resetTimeStamp = function (t) {
                this.initPTS = t, this.resetContiguity()
            }, e.resetContiguity = function () {
                this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
            }, e.canParse = function (t, e) {
                return !1
            }, e.appendFrame = function (t, e, r) {
            }, e.demux = function (t, e) {
                this.cachedData && (t = Gt(this.cachedData, t), this.cachedData = null);
                var r, i = lt(t, 0), n = i ? i.length : 0, a = this._audioTrack, s = this._id3Track,
                    o = i ? dt(i) : void 0, l = t.length;
                for ((null === this.basePTS || 0 === this.frameIndex && y(o)) && (this.basePTS = Ii(o, e, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && s.samples.push({
                    pts: this.lastPTS,
                    dts: this.lastPTS,
                    data: i,
                    type: Be,
                    duration: Number.POSITIVE_INFINITY
                }); n < l;) {
                    if (this.canParse(t, n)) {
                        var u = this.appendFrame(a, t, n);
                        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, r = n += u.length) : n = l
                    } else ht(t, n) ? (i = lt(t, n), s.samples.push({
                        pts: this.lastPTS,
                        dts: this.lastPTS,
                        data: i,
                        type: Be,
                        duration: Number.POSITIVE_INFINITY
                    }), r = n += i.length) : n++;
                    if (n === l && r !== l) {
                        var h = nt(t, r);
                        this.cachedData ? this.cachedData = Gt(this.cachedData, h) : this.cachedData = h
                    }
                }
                return {audioTrack: a, videoTrack: bi(), id3Track: s, textTrack: bi()}
            }, e.demuxSampleAes = function (t, e, r) {
                return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
            }, e.flush = function (t) {
                var e = this.cachedData;
                return e && (this.cachedData = null, this.demux(e, 0)), {
                    audioTrack: this._audioTrack,
                    videoTrack: bi(),
                    id3Track: this._id3Track,
                    textTrack: bi()
                }
            }, e.destroy = function () {
            }, t
        }(), Ii = function (t, e, r) {
            return y(t) ? 90 * t : 9e4 * e + (r ? 9e4 * r.baseTime / r.timescale : 0)
        };

        function wi(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }

        function Ci(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }

        function _i(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }

        function xi(t, e) {
            return e + 1 < t.length && wi(t, e)
        }

        function Pi(t, e) {
            if (xi(t, e)) {
                var r = Ci(t, e);
                if (e + r >= t.length) return !1;
                var i = _i(t, e);
                if (i <= r) return !1;
                var n = e + i;
                return n === t.length || xi(t, n)
            }
            return !1
        }

        function Fi(t, e, r, i, n) {
            if (!t.samplerate) {
                var a = function (t, e, r, i) {
                    var n, a, s, o, l = navigator.userAgent.toLowerCase(), u = i,
                        h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    n = 1 + ((192 & e[r + 2]) >>> 6);
                    var d = (60 & e[r + 2]) >>> 2;
                    if (!(d > h.length - 1)) return s = (1 & e[r + 2]) << 2, s |= (192 & e[r + 3]) >>> 6, w.log("manifest codec:" + i + ", ADTS type:" + n + ", samplingIndex:" + d), /firefox/i.test(l) ? d >= 6 ? (n = 5, o = new Array(4), a = d - 3) : (n = 2, o = new Array(2), a = d) : -1 !== l.indexOf("android") ? (n = 2, o = new Array(2), a = d) : (n = 5, o = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && d >= 6 ? a = d - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (d >= 6 && 1 === s || /vivaldi/i.test(l)) || !i && 1 === s) && (n = 2, o = new Array(2)), a = d)), o[0] = n << 3, o[0] |= (14 & d) >> 1, o[1] |= (1 & d) << 7, o[1] |= s << 3, 5 === n && (o[1] |= (14 & a) >> 1, o[2] = (1 & a) << 7, o[2] |= 8, o[3] = 0), {
                        config: o,
                        samplerate: h[d],
                        channelCount: s,
                        codec: "mp4a.40." + n,
                        manifestCodec: u
                    };
                    var c = new Error("invalid ADTS sampling index:" + d);
                    t.emit(S.ERROR, S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: A.FRAG_PARSING_ERROR,
                        fatal: !0,
                        error: c,
                        reason: c.message
                    })
                }(e, r, i, n);
                if (!a) return;
                t.config = a.config, t.samplerate = a.samplerate, t.channelCount = a.channelCount, t.codec = a.codec, t.manifestCodec = a.manifestCodec, w.log("parsed codec:" + t.codec + ", rate:" + a.samplerate + ", channels:" + a.channelCount)
            }
        }

        function Mi(t) {
            return 9216e4 / t
        }

        function Oi(t, e, r, i, n) {
            var a, s = i + n * Mi(t.samplerate), o = function (t, e) {
                var r = Ci(t, e);
                if (e + r <= t.length) {
                    var i = _i(t, e) - r;
                    if (i > 0) return {headerLength: r, frameLength: i}
                }
            }(e, r);
            if (o) {
                var l = o.frameLength, u = o.headerLength, h = u + l, d = Math.max(0, r + h - e.length);
                d ? (a = new Uint8Array(h - u)).set(e.subarray(r + u, e.length), 0) : a = e.subarray(r + u, r + h);
                var c = {unit: a, pts: s};
                return d || t.samples.push(c), {sample: c, length: h, missing: d}
            }
            var f = e.length - r;
            return (a = new Uint8Array(f)).set(e.subarray(r, e.length), 0), {
                sample: {unit: a, pts: s},
                length: f,
                missing: -1
            }
        }

        var Ni = null,
            Ui = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            Bi = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            Gi = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], Ki = [0, 1, 1, 4];

        function Hi(t, e, r, i, n) {
            if (!(r + 24 > e.length)) {
                var a = Vi(e, r);
                if (a && r + a.frameLength <= e.length) {
                    var s = i + n * (9e4 * a.samplesPerFrame / a.sampleRate),
                        o = {unit: e.subarray(r, r + a.frameLength), pts: s, dts: s};
                    return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(o), {
                        sample: o,
                        length: a.frameLength,
                        missing: 0
                    }
                }
            }
        }

        function Vi(t, e) {
            var r = t[e + 1] >> 3 & 3, i = t[e + 1] >> 1 & 3, n = t[e + 2] >> 4 & 15, a = t[e + 2] >> 2 & 3;
            if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
                var s = t[e + 2] >> 1 & 1, o = t[e + 3] >> 6,
                    l = 1e3 * Ui[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + n - 1],
                    u = Bi[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a], h = 3 === o ? 1 : 2, d = Gi[r][i], c = Ki[i],
                    f = 8 * d * c, g = Math.floor(d * l / u + s) * c;
                if (null === Ni) {
                    var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    Ni = v ? parseInt(v[1]) : 0
                }
                return !!Ni && Ni <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                    sampleRate: u,
                    channelCount: h,
                    frameLength: g,
                    samplesPerFrame: f
                }
            }
        }

        function Yi(t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
        }

        function Wi(t, e) {
            return e + 1 < t.length && Yi(t, e)
        }

        function ji(t, e) {
            if (e + 1 < t.length && Yi(t, e)) {
                var r = Vi(t, e), i = 4;
                null != r && r.frameLength && (i = r.frameLength);
                var n = e + i;
                return n === t.length || Wi(t, n)
            }
            return !1
        }

        var qi = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this) || this).observer = void 0, i.config = void 0, i.observer = e, i.config = r, i
            }

            l(e, t);
            var r = e.prototype;
            return r.resetInitSegment = function (e, r, i, n) {
                t.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: "aac",
                    samples: [],
                    manifestCodec: r,
                    duration: n,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }, e.probe = function (t) {
                if (!t) return !1;
                var e = lt(t, 0), r = (null == e ? void 0 : e.length) || 0;
                if (ji(t, r)) return !1;
                for (var i = t.length; r < i; r++) if (Pi(t, r)) return w.log("ADTS sync word found !"), !0;
                return !1
            }, r.canParse = function (t, e) {
                return function (t, e) {
                    return function (t, e) {
                        return e + 5 < t.length
                    }(t, e) && wi(t, e) && _i(t, e) <= t.length - e
                }(t, e)
            }, r.appendFrame = function (t, e, r) {
                Fi(t, this.observer, e, r, t.manifestCodec);
                var i = Oi(t, e, r, this.basePTS, this.frameIndex);
                if (i && 0 === i.missing) return i
            }, e
        }(Di), Xi = /\/emsg[-/]ID3/i, zi = function () {
            function t(t, e) {
                this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
            }

            var e = t.prototype;
            return e.resetTimeStamp = function () {
            }, e.resetInitSegment = function (t, e, r, i) {
                var n = this.videoTrack = bi("video", 1), a = this.audioTrack = bi("audio", 1),
                    s = this.txtTrack = bi("text", 1);
                if (this.id3Track = bi("id3", 1), this.timeOffset = 0, null != t && t.byteLength) {
                    var o = Pt(t);
                    if (o.video) {
                        var l = o.video, u = l.id, h = l.timescale, d = l.codec;
                        n.id = u, n.timescale = s.timescale = h, n.codec = d
                    }
                    if (o.audio) {
                        var c = o.audio, f = c.id, g = c.timescale, v = c.codec;
                        a.id = f, a.timescale = g, a.codec = v
                    }
                    s.id = kt.text, n.sampleDuration = 0, n.duration = a.duration = i
                }
            }, e.resetContiguity = function () {
                this.remainderData = null
            }, t.probe = function (t) {
                return function (t) {
                    for (var e = t.byteLength, r = 0; r < e;) {
                        var i = It(t, r);
                        if (i > 8 && 109 === t[r + 4] && 111 === t[r + 5] && 111 === t[r + 6] && 102 === t[r + 7]) return !0;
                        r = i > 1 ? r + i : e
                    }
                    return !1
                }(t)
            }, e.demux = function (t, e) {
                this.timeOffset = e;
                var r = t, i = this.videoTrack, n = this.txtTrack;
                if (this.config.progressive) {
                    this.remainderData && (r = Gt(this.remainderData, t));
                    var a = function (t) {
                        var e = {valid: null, remainder: null}, r = _t(t, ["moof"]);
                        if (r.length < 2) return e.remainder = t, e;
                        var i = r[r.length - 1];
                        return e.valid = nt(t, 0, i.byteOffset - 8), e.remainder = nt(t, i.byteOffset - 8), e
                    }(r);
                    this.remainderData = a.remainder, i.samples = a.valid || new Uint8Array
                } else i.samples = r;
                var s = this.extractID3Track(i, e);
                return n.samples = Kt(e, i), {
                    videoTrack: i,
                    audioTrack: this.audioTrack,
                    id3Track: s,
                    textTrack: this.txtTrack
                }
            }, e.flush = function () {
                var t = this.timeOffset, e = this.videoTrack, r = this.txtTrack;
                e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
                var i = this.extractID3Track(e, this.timeOffset);
                return r.samples = Kt(t, e), {videoTrack: e, audioTrack: bi(), id3Track: i, textTrack: bi()}
            }, e.extractID3Track = function (t, e) {
                var r = this.id3Track;
                if (t.samples.length) {
                    var i = _t(t.samples, ["emsg"]);
                    i && i.forEach((function (t) {
                        var i = function (t) {
                            var e = t[0], r = "", i = "", n = 0, a = 0, s = 0, o = 0, l = 0, u = 0;
                            if (0 === e) {
                                for (; "\0" !== bt(t.subarray(u, u + 1));) r += bt(t.subarray(u, u + 1)), u += 1;
                                for (r += bt(t.subarray(u, u + 1)), u += 1; "\0" !== bt(t.subarray(u, u + 1));) i += bt(t.subarray(u, u + 1)), u += 1;
                                i += bt(t.subarray(u, u + 1)), u += 1, n = It(t, 12), a = It(t, 16), o = It(t, 20), l = It(t, 24), u = 28
                            } else if (1 === e) {
                                n = It(t, u += 4);
                                var h = It(t, u += 4), d = It(t, u += 4);
                                for (u += 4, s = Math.pow(2, 32) * h + d, E(s) || (s = Number.MAX_SAFE_INTEGER, w.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = It(t, u), l = It(t, u += 4), u += 4; "\0" !== bt(t.subarray(u, u + 1));) r += bt(t.subarray(u, u + 1)), u += 1;
                                for (r += bt(t.subarray(u, u + 1)), u += 1; "\0" !== bt(t.subarray(u, u + 1));) i += bt(t.subarray(u, u + 1)), u += 1;
                                i += bt(t.subarray(u, u + 1)), u += 1
                            }
                            return {
                                schemeIdUri: r,
                                value: i,
                                timeScale: n,
                                presentationTime: s,
                                presentationTimeDelta: a,
                                eventDuration: o,
                                id: l,
                                payload: t.subarray(u, t.byteLength)
                            }
                        }(t);
                        if (Xi.test(i.schemeIdUri)) {
                            var n = y(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale,
                                a = 4294967295 === i.eventDuration ? Number.POSITIVE_INFINITY : i.eventDuration / i.timeScale;
                            a <= .001 && (a = Number.POSITIVE_INFINITY);
                            var s = i.payload;
                            r.samples.push({data: s, len: s.byteLength, dts: n, pts: n, type: Ke, duration: a})
                        }
                    }))
                }
                return r
            }, e.demuxSampleAes = function (t, e, r) {
                return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
            }, e.destroy = function () {
            }, t
        }(), Qi = function (t, e) {
            var r = 0, i = 5;
            e += i;
            for (var n = new Uint32Array(1), a = new Uint32Array(1), s = new Uint8Array(1); i > 0;) {
                s[0] = t[e];
                var o = Math.min(i, 8), l = 8 - o;
                a[0] = 4278190080 >>> 24 + l << l, n[0] = (s[0] & a[0]) >> l, r = r ? r << o | n[0] : n[0], e += 1, i -= o
            }
            return r
        }, Ji = function (t) {
            function e(e) {
                var r;
                return (r = t.call(this) || this).observer = void 0, r.observer = e, r
            }

            l(e, t);
            var r = e.prototype;
            return r.resetInitSegment = function (e, r, i, n) {
                t.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                    container: "audio/ac-3",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: "ac3",
                    samples: [],
                    manifestCodec: r,
                    duration: n,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }, r.canParse = function (t, e) {
                return e + 64 < t.length
            }, r.appendFrame = function (t, e, r) {
                var i = $i(t, e, r, this.basePTS, this.frameIndex);
                if (-1 !== i) return {sample: t.samples[t.samples.length - 1], length: i, missing: 0}
            }, e.probe = function (t) {
                if (!t) return !1;
                var e = lt(t, 0);
                if (!e) return !1;
                var r = e.length;
                return 11 === t[r] && 119 === t[r + 1] && void 0 !== dt(e) && Qi(t, r) < 16
            }, e
        }(Di);

        function $i(t, e, r, i, n) {
            if (r + 8 > e.length) return -1;
            if (11 !== e[r] || 119 !== e[r + 1]) return -1;
            var a = e[r + 4] >> 6;
            if (a >= 3) return -1;
            var s = [48e3, 44100, 32e3][a], o = 63 & e[r + 4],
                l = 2 * [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][3 * o + a];
            if (r + l > e.length) return -1;
            var u = e[r + 6] >> 5, h = 0;
            2 === u ? h += 2 : (1 & u && 1 !== u && (h += 2), 4 & u && (h += 2));
            var d = (e[r + 6] << 8 | e[r + 7]) >> 12 - h & 1, c = [2, 1, 2, 3, 3, 4, 4, 5][u] + d, f = e[r + 5] >> 3,
                g = 7 & e[r + 5],
                v = new Uint8Array([a << 6 | f << 1 | g >> 2, (3 & g) << 6 | u << 3 | d << 2 | o >> 4, o << 4 & 224]),
                m = i + n * (1536 / s * 9e4), p = e.subarray(r, r + l);
            return t.config = v, t.channelCount = c, t.samplerate = s, t.samples.push({unit: p, pts: m}), l
        }

        var Zi = function () {
            function t() {
                this.VideoSample = null
            }

            var e = t.prototype;
            return e.createVideoSample = function (t, e, r, i) {
                return {key: t, frame: !1, pts: e, dts: r, units: [], debug: i, length: 0}
            }, e.getLastNalUnit = function (t) {
                var e, r, i = this.VideoSample;
                if (i && 0 !== i.units.length || (i = t[t.length - 1]), null != (e = i) && e.units) {
                    var n = i.units;
                    r = n[n.length - 1]
                }
                return r
            }, e.pushAccessUnit = function (t, e) {
                if (t.units.length && t.frame) {
                    if (void 0 === t.pts) {
                        var r = e.samples, i = r.length;
                        if (!i) return void e.dropped++;
                        var n = r[i - 1];
                        t.pts = n.pts, t.dts = n.dts
                    }
                    e.samples.push(t)
                }
                t.debug.length && w.log(t.pts + "/" + t.dts + ":" + t.debug)
            }, t
        }(), tn = function () {
            function t(t) {
                this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
            }

            var e = t.prototype;
            return e.loadWord = function () {
                var t = this.data, e = this.bytesAvailable, r = t.byteLength - e, i = new Uint8Array(4),
                    n = Math.min(4, e);
                if (0 === n) throw new Error("no bytes available");
                i.set(t.subarray(r, r + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
            }, e.skipBits = function (t) {
                var e;
                t = Math.min(t, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
            }, e.readBits = function (t) {
                var e = Math.min(this.bitsAvailable, t), r = this.word >>> 32 - e;
                if (t > 32 && w.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0) this.word <<= e; else {
                    if (!(this.bytesAvailable > 0)) throw new Error("no bits available");
                    this.loadWord()
                }
                return (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
            }, e.skipLZ = function () {
                var t;
                for (t = 0; t < this.bitsAvailable; ++t) if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                return this.loadWord(), t + this.skipLZ()
            }, e.skipUEG = function () {
                this.skipBits(1 + this.skipLZ())
            }, e.skipEG = function () {
                this.skipBits(1 + this.skipLZ())
            }, e.readUEG = function () {
                var t = this.skipLZ();
                return this.readBits(t + 1) - 1
            }, e.readEG = function () {
                var t = this.readUEG();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            }, e.readBoolean = function () {
                return 1 === this.readBits(1)
            }, e.readUByte = function () {
                return this.readBits(8)
            }, e.readUShort = function () {
                return this.readBits(16)
            }, e.readUInt = function () {
                return this.readBits(32)
            }, e.skipScalingList = function (t) {
                for (var e = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (e + this.readEG() + 256) % 256), e = 0 === r ? e : r
            }, e.readSPS = function () {
                var t, e, r, i = 0, n = 0, a = 0, s = 0, o = this.readUByte.bind(this), l = this.readBits.bind(this),
                    u = this.readUEG.bind(this), h = this.readBoolean.bind(this), d = this.skipBits.bind(this),
                    c = this.skipEG.bind(this), f = this.skipUEG.bind(this), g = this.skipScalingList.bind(this);
                o();
                var v = o();
                if (l(5), d(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                    var m = u();
                    if (3 === m && d(1), f(), f(), d(1), h()) for (e = 3 !== m ? 8 : 12, r = 0; r < e; r++) h() && g(r < 6 ? 16 : 64)
                }
                f();
                var p = u();
                if (0 === p) u(); else if (1 === p) for (d(1), c(), c(), t = u(), r = 0; r < t; r++) c();
                f(), d(1);
                var y = u(), E = u(), T = l(1);
                0 === T && d(1), d(1), h() && (i = u(), n = u(), a = u(), s = u());
                var S = [1, 1];
                if (h() && h()) switch (o()) {
                    case 1:
                        S = [1, 1];
                        break;
                    case 2:
                        S = [12, 11];
                        break;
                    case 3:
                        S = [10, 11];
                        break;
                    case 4:
                        S = [16, 11];
                        break;
                    case 5:
                        S = [40, 33];
                        break;
                    case 6:
                        S = [24, 11];
                        break;
                    case 7:
                        S = [20, 11];
                        break;
                    case 8:
                        S = [32, 11];
                        break;
                    case 9:
                        S = [80, 33];
                        break;
                    case 10:
                        S = [18, 11];
                        break;
                    case 11:
                        S = [15, 11];
                        break;
                    case 12:
                        S = [64, 33];
                        break;
                    case 13:
                        S = [160, 99];
                        break;
                    case 14:
                        S = [4, 3];
                        break;
                    case 15:
                        S = [3, 2];
                        break;
                    case 16:
                        S = [2, 1];
                        break;
                    case 255:
                        S = [o() << 8 | o(), o() << 8 | o()]
                }
                return {
                    width: Math.ceil(16 * (y + 1) - 2 * i - 2 * n),
                    height: (2 - T) * (E + 1) * 16 - (T ? 2 : 4) * (a + s),
                    pixelRatio: S
                }
            }, e.readSliceType = function () {
                return this.readUByte(), this.readUEG(), this.readUEG()
            }, t
        }(), en = function (t) {
            function e() {
                return t.apply(this, arguments) || this
            }

            l(e, t);
            var r = e.prototype;
            return r.parseAVCPES = function (t, e, r, i, n) {
                var a, s = this, o = this.parseAVCNALu(t, r.data), l = this.VideoSample, u = !1;
                r.data = null, l && o.length && !t.audFound && (this.pushAccessUnit(l, t), l = this.VideoSample = this.createVideoSample(!1, r.pts, r.dts, "")), o.forEach((function (i) {
                    var o;
                    switch (i.type) {
                        case 1:
                            var h = !1;
                            a = !0;
                            var d, c = i.data;
                            if (u && c.length > 4) {
                                var f = new tn(c).readSliceType();
                                2 !== f && 4 !== f && 7 !== f && 9 !== f || (h = !0)
                            }
                            h && null != (d = l) && d.frame && !l.key && (s.pushAccessUnit(l, t), l = s.VideoSample = null), l || (l = s.VideoSample = s.createVideoSample(!0, r.pts, r.dts, "")), l.frame = !0, l.key = h;
                            break;
                        case 5:
                            a = !0, null != (o = l) && o.frame && !l.key && (s.pushAccessUnit(l, t), l = s.VideoSample = null), l || (l = s.VideoSample = s.createVideoSample(!0, r.pts, r.dts, "")), l.key = !0, l.frame = !0;
                            break;
                        case 6:
                            a = !0, Vt(i.data, 1, r.pts, e.samples);
                            break;
                        case 7:
                            var g, v;
                            a = !0, u = !0;
                            var m = i.data, p = new tn(m).readSPS();
                            if (!t.sps || t.width !== p.width || t.height !== p.height || (null == (g = t.pixelRatio) ? void 0 : g[0]) !== p.pixelRatio[0] || (null == (v = t.pixelRatio) ? void 0 : v[1]) !== p.pixelRatio[1]) {
                                t.width = p.width, t.height = p.height, t.pixelRatio = p.pixelRatio, t.sps = [m], t.duration = n;
                                for (var y = m.subarray(1, 4), E = "avc1.", T = 0; T < 3; T++) {
                                    var S = y[T].toString(16);
                                    S.length < 2 && (S = "0" + S), E += S
                                }
                                t.codec = E
                            }
                            break;
                        case 8:
                            a = !0, t.pps = [i.data];
                            break;
                        case 9:
                            a = !0, t.audFound = !0, l && s.pushAccessUnit(l, t), l = s.VideoSample = s.createVideoSample(!1, r.pts, r.dts, "");
                            break;
                        case 12:
                            a = !0;
                            break;
                        default:
                            a = !1, l && (l.debug += "unknown NAL " + i.type + " ")
                    }
                    l && a && l.units.push(i)
                })), i && l && (this.pushAccessUnit(l, t), this.VideoSample = null)
            }, r.parseAVCNALu = function (t, e) {
                var r, i, n = e.byteLength, a = t.naluState || 0, s = a, o = [], l = 0, u = -1, h = 0;
                for (-1 === a && (u = 0, h = 31 & e[0], a = 0, l = 1); l < n;) if (r = e[l++], a) if (1 !== a) if (r) if (1 === r) {
                    if (i = l - a - 1, u >= 0) {
                        var d = {data: e.subarray(u, i), type: h};
                        o.push(d)
                    } else {
                        var c = this.getLastNalUnit(t.samples);
                        c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), i > 0 && (c.data = Gt(c.data, e.subarray(0, i)), c.state = 0))
                    }
                    l < n ? (u = l, h = 31 & e[l], a = 0) : a = -1
                } else a = 0; else a = 3; else a = r ? 0 : 2; else a = r ? 0 : 1;
                if (u >= 0 && a >= 0) {
                    var f = {data: e.subarray(u, n), type: h, state: a};
                    o.push(f)
                }
                if (0 === o.length) {
                    var g = this.getLastNalUnit(t.samples);
                    g && (g.data = Gt(g.data, e))
                }
                return t.naluState = a, o
            }, e
        }(Zi), rn = function () {
            function t(t, e, r) {
                this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new hi(e, {removePKCS7Padding: !1})
            }

            var e = t.prototype;
            return e.decryptBuffer = function (t) {
                return this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer)
            }, e.decryptAacSample = function (t, e, r) {
                var i = this, n = t[e].unit;
                if (!(n.length <= 16)) {
                    var a = n.subarray(16, n.length - n.length % 16),
                        s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length);
                    this.decryptBuffer(s).then((function (a) {
                        var s = new Uint8Array(a);
                        n.set(s, 16), i.decrypter.isSync() || i.decryptAacSamples(t, e + 1, r)
                    }))
                }
            }, e.decryptAacSamples = function (t, e, r) {
                for (; ; e++) {
                    if (e >= t.length) return void r();
                    if (!(t[e].unit.length < 32 || (this.decryptAacSample(t, e, r), this.decrypter.isSync()))) return
                }
            }, e.getAvcEncryptedData = function (t) {
                for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) r.set(t.subarray(n, n + 16), i);
                return r
            }, e.getAvcDecryptedUnit = function (t, e) {
                for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) t.set(r.subarray(i, i + 16), n);
                return t
            }, e.decryptAvcSample = function (t, e, r, i, n) {
                var a = this, s = Yt(n.data), o = this.getAvcEncryptedData(s);
                this.decryptBuffer(o.buffer).then((function (o) {
                    n.data = a.getAvcDecryptedUnit(s, o), a.decrypter.isSync() || a.decryptAvcSamples(t, e, r + 1, i)
                }))
            }, e.decryptAvcSamples = function (t, e, r, i) {
                if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                for (; ; e++, r = 0) {
                    if (e >= t.length) return void i();
                    for (var n = t[e].units; !(r >= n.length); r++) {
                        var a = n[r];
                        if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type || (this.decryptAvcSample(t, e, r, i, a), this.decrypter.isSync()))) return
                    }
                }
            }, t
        }(), nn = 188, an = function () {
            function t(t, e, r) {
                this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = t, this.config = e, this.typeSupported = r, this.videoParser = new en
            }

            t.probe = function (e) {
                var r = t.syncOffset(e);
                return r > 0 && w.warn("MPEG2-TS detected but first sync word found @ offset " + r), -1 !== r
            }, t.syncOffset = function (t) {
                for (var e = t.length, r = Math.min(940, e - nn) + 1, i = 0; i < r;) {
                    for (var n = !1, a = -1, s = 0, o = i; o < e; o += nn) {
                        if (71 !== t[o] || e - o !== nn && 71 !== t[o + nn]) {
                            if (s) return -1;
                            break
                        }
                        if (s++, -1 === a && 0 !== (a = o) && (r = Math.min(a + 18612, t.length - nn) + 1), n || (n = 0 === sn(t, o)), n && s > 1 && (0 === a && s > 2 || o + nn > r)) return a
                    }
                    i++
                }
                return -1
            }, t.createTrack = function (t, e) {
                return {
                    container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                    type: t,
                    id: kt[t],
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    dropped: 0,
                    duration: "audio" === t ? e : void 0
                }
            };
            var e = t.prototype;
            return e.resetInitSegment = function (e, r, i, n) {
                this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = t.createTrack("video"), this._audioTrack = t.createTrack("audio", n), this._id3Track = t.createTrack("id3"), this._txtTrack = t.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = r, this.videoCodec = i, this._duration = n
            }, e.resetTimeStamp = function () {
            }, e.resetContiguity = function () {
                var t = this._audioTrack, e = this._videoTrack, r = this._id3Track;
                t && (t.pesData = null), e && (e.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.remainderData = null
            }, e.demux = function (e, r, i, n) {
                var a;
                void 0 === i && (i = !1), void 0 === n && (n = !1), i || (this.sampleAes = null);
                var s = this._videoTrack, o = this._audioTrack, l = this._id3Track, u = this._txtTrack, h = s.pid,
                    d = s.pesData, c = o.pid, f = l.pid, g = o.pesData, v = l.pesData, m = null, p = this.pmtParsed,
                    y = this._pmtId, E = e.length;
                if (this.remainderData && (E = (e = Gt(this.remainderData, e)).length, this.remainderData = null), E < nn && !n) return this.remainderData = e, {
                    audioTrack: o,
                    videoTrack: s,
                    id3Track: l,
                    textTrack: u
                };
                var T = Math.max(0, t.syncOffset(e));
                (E -= (E - T) % nn) < e.byteLength && !n && (this.remainderData = new Uint8Array(e.buffer, E, e.buffer.byteLength - E));
                for (var R = 0, k = T; k < E; k += nn) if (71 === e[k]) {
                    var b = !!(64 & e[k + 1]), D = sn(e, k), I = void 0;
                    if ((48 & e[k + 3]) >> 4 > 1) {
                        if ((I = k + 5 + e[k + 4]) === k + nn) continue
                    } else I = k + 4;
                    switch (D) {
                        case h:
                            b && (d && (a = hn(d)) && this.videoParser.parseAVCPES(s, u, a, !1, this._duration), d = {
                                data: [],
                                size: 0
                            }), d && (d.data.push(e.subarray(I, k + nn)), d.size += k + nn - I);
                            break;
                        case c:
                            if (b) {
                                if (g && (a = hn(g))) switch (o.segmentCodec) {
                                    case"aac":
                                        this.parseAACPES(o, a);
                                        break;
                                    case"mp3":
                                        this.parseMPEGPES(o, a);
                                        break;
                                    case"ac3":
                                        this.parseAC3PES(o, a)
                                }
                                g = {data: [], size: 0}
                            }
                            g && (g.data.push(e.subarray(I, k + nn)), g.size += k + nn - I);
                            break;
                        case f:
                            b && (v && (a = hn(v)) && this.parseID3PES(l, a), v = {
                                data: [],
                                size: 0
                            }), v && (v.data.push(e.subarray(I, k + nn)), v.size += k + nn - I);
                            break;
                        case 0:
                            b && (I += e[I] + 1), y = this._pmtId = on(e, I);
                            break;
                        case y:
                            b && (I += e[I] + 1);
                            var C = ln(e, I, this.typeSupported, i);
                            (h = C.videoPid) > 0 && (s.pid = h, s.segmentCodec = C.segmentVideoCodec), (c = C.audioPid) > 0 && (o.pid = c, o.segmentCodec = C.segmentAudioCodec), (f = C.id3Pid) > 0 && (l.pid = f), null === m || p || (w.warn("MPEG-TS PMT found at " + k + " after unknown PID '" + m + "'. Backtracking to sync byte @" + T + " to parse all TS packets."), m = null, k = T - 188), p = this.pmtParsed = !0;
                            break;
                        case 17:
                        case 8191:
                            break;
                        default:
                            m = D
                    }
                } else R++;
                if (R > 0) {
                    var _ = new Error("Found " + R + " TS packet/s that do not start with 0x47");
                    this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: A.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: _,
                        reason: _.message
                    })
                }
                s.pesData = d, o.pesData = g, l.pesData = v;
                var x = {audioTrack: o, videoTrack: s, id3Track: l, textTrack: u};
                return n && this.extractRemainingSamples(x), x
            }, e.flush = function () {
                var t, e = this.remainderData;
                return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                    videoTrack: this._videoTrack,
                    audioTrack: this._audioTrack,
                    id3Track: this._id3Track,
                    textTrack: this._txtTrack
                }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
            }, e.extractRemainingSamples = function (t) {
                var e, r = t.audioTrack, i = t.videoTrack, n = t.id3Track, a = t.textTrack, s = i.pesData,
                    o = r.pesData, l = n.pesData;
                if (s && (e = hn(s)) ? (this.videoParser.parseAVCPES(i, a, e, !0, this._duration), i.pesData = null) : i.pesData = s, o && (e = hn(o))) {
                    switch (r.segmentCodec) {
                        case"aac":
                            this.parseAACPES(r, e);
                            break;
                        case"mp3":
                            this.parseMPEGPES(r, e);
                            break;
                        case"ac3":
                            this.parseAC3PES(r, e)
                    }
                    r.pesData = null
                } else null != o && o.size && w.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = o;
                l && (e = hn(l)) ? (this.parseID3PES(n, e), n.pesData = null) : n.pesData = l
            }, e.demuxSampleAes = function (t, e, r) {
                var i = this.demux(t, r, !0, !this.config.progressive),
                    n = this.sampleAes = new rn(this.observer, this.config, e);
                return this.decrypt(i, n)
            }, e.decrypt = function (t, e) {
                return new Promise((function (r) {
                    var i = t.audioTrack, n = t.videoTrack;
                    i.samples && "aac" === i.segmentCodec ? e.decryptAacSamples(i.samples, 0, (function () {
                        n.samples ? e.decryptAvcSamples(n.samples, 0, 0, (function () {
                            r(t)
                        })) : r(t)
                    })) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, (function () {
                        r(t)
                    }))
                }))
            }, e.destroy = function () {
                this._duration = 0
            }, e.parseAACPES = function (t, e) {
                var r, i, n, a = 0, s = this.aacOverFlow, o = e.data;
                if (s) {
                    this.aacOverFlow = null;
                    var l = s.missing, u = s.sample.unit.byteLength;
                    if (-1 === l) o = Gt(s.sample.unit, o); else {
                        var h = u - l;
                        s.sample.unit.set(o.subarray(0, l), h), t.samples.push(s.sample), a = s.missing
                    }
                }
                for (r = a, i = o.length; r < i - 1 && !xi(o, r); r++) ;
                if (r !== a) {
                    var d, c = r < i - 1;
                    d = c ? "AAC PES did not start with ADTS header,offset:" + r : "No ADTS header found in AAC PES";
                    var f = new Error(d);
                    if (w.warn("parsing error: " + d), this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: A.FRAG_PARSING_ERROR,
                        fatal: !1,
                        levelRetry: c,
                        error: f,
                        reason: d
                    }), !c) return
                }
                if (Fi(t, this.observer, o, r, this.audioCodec), void 0 !== e.pts) n = e.pts; else {
                    if (!s) return void w.warn("[tsdemuxer]: AAC PES unknown PTS");
                    var g = Mi(t.samplerate);
                    n = s.sample.pts + g
                }
                for (var v, m = 0; r < i;) {
                    if (r += (v = Oi(t, o, r, n, m)).length, v.missing) {
                        this.aacOverFlow = v;
                        break
                    }
                    for (m++; r < i - 1 && !xi(o, r); r++) ;
                }
            }, e.parseMPEGPES = function (t, e) {
                var r = e.data, i = r.length, n = 0, a = 0, s = e.pts;
                if (void 0 !== s) for (; a < i;) if (Wi(r, a)) {
                    var o = Hi(t, r, a, s, n);
                    if (!o) break;
                    a += o.length, n++
                } else a++; else w.warn("[tsdemuxer]: MPEG PES unknown PTS")
            }, e.parseAC3PES = function (t, e) {
                var r = e.data, i = e.pts;
                if (void 0 !== i) for (var n, a = r.length, s = 0, o = 0; o < a && (n = $i(t, r, o, i, s++)) > 0;) o += n; else w.warn("[tsdemuxer]: AC3 PES unknown PTS")
            }, e.parseID3PES = function (t, e) {
                if (void 0 !== e.pts) {
                    var r = o({}, e, {type: this._videoTrack ? Ke : Be, duration: Number.POSITIVE_INFINITY});
                    t.samples.push(r)
                } else w.warn("[tsdemuxer]: ID3 PES unknown PTS")
            }, t
        }();

        function sn(t, e) {
            return ((31 & t[e + 1]) << 8) + t[e + 2]
        }

        function on(t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11]
        }

        function ln(t, e, r, i) {
            var n = {audioPid: -1, videoPid: -1, id3Pid: -1, segmentVideoCodec: "avc", segmentAudioCodec: "aac"},
                a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
            for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a;) {
                var s = sn(t, e), o = (15 & t[e + 3]) << 8 | t[e + 4];
                switch (t[e]) {
                    case 207:
                        if (!i) {
                            un("ADTS AAC");
                            break
                        }
                    case 15:
                        -1 === n.audioPid && (n.audioPid = s);
                        break;
                    case 21:
                        -1 === n.id3Pid && (n.id3Pid = s);
                        break;
                    case 219:
                        if (!i) {
                            un("H.264");
                            break
                        }
                    case 27:
                        -1 === n.videoPid && (n.videoPid = s, n.segmentVideoCodec = "avc");
                        break;
                    case 3:
                    case 4:
                        r.mpeg || r.mp3 ? -1 === n.audioPid && (n.audioPid = s, n.segmentAudioCodec = "mp3") : w.log("MPEG audio found, not supported in this browser");
                        break;
                    case 193:
                        if (!i) {
                            un("AC-3");
                            break
                        }
                    case 129:
                        r.ac3 ? -1 === n.audioPid && (n.audioPid = s, n.segmentAudioCodec = "ac3") : w.log("AC-3 audio found, not supported in this browser");
                        break;
                    case 6:
                        if (-1 === n.audioPid && o > 0) for (var l = e + 5, u = o; u > 2;) {
                            106 === t[l] && (!0 !== r.ac3 ? w.log("AC-3 audio found, not supported in this browser for now") : (n.audioPid = s, n.segmentAudioCodec = "ac3"));
                            var h = t[l + 1] + 2;
                            l += h, u -= h
                        }
                        break;
                    case 194:
                    case 135:
                        w.warn("Unsupported EC-3 in M2TS found");
                        break;
                    case 36:
                        w.warn("Unsupported HEVC in M2TS found")
                }
                e += o + 5
            }
            return n
        }

        function un(t) {
            w.log(t + " with AES-128-CBC encryption found in unencrypted stream")
        }

        function hn(t) {
            var e, r, i, n, a, s = 0, o = t.data;
            if (!t || 0 === t.size) return null;
            for (; o[0].length < 19 && o.length > 1;) o[0] = Gt(o[0], o[1]), o.splice(1, 1);
            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
                var l = e[7];
                192 & l && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & l ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (w.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a) : a = n);
                var u = (i = e[8]) + 9;
                if (t.size <= u) return null;
                t.size -= u;
                for (var h = new Uint8Array(t.size), d = 0, c = o.length; d < c; d++) {
                    var f = (e = o[d]).byteLength;
                    if (u) {
                        if (u > f) {
                            u -= f;
                            continue
                        }
                        e = e.subarray(u), f -= u, u = 0
                    }
                    h.set(e, s), s += f
                }
                return r && (r -= i + 3), {data: h, pts: n, dts: a, len: r}
            }
            return null
        }

        var dn = function (t) {
            function e() {
                return t.apply(this, arguments) || this
            }

            l(e, t);
            var r = e.prototype;
            return r.resetInitSegment = function (e, r, i, n) {
                t.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: 2,
                    pid: -1,
                    sequenceNumber: 0,
                    segmentCodec: "mp3",
                    samples: [],
                    manifestCodec: r,
                    duration: n,
                    inputTimeScale: 9e4,
                    dropped: 0
                }
            }, e.probe = function (t) {
                if (!t) return !1;
                var e = lt(t, 0), r = (null == e ? void 0 : e.length) || 0;
                if (e && 11 === t[r] && 119 === t[r + 1] && void 0 !== dt(e) && Qi(t, r) <= 16) return !1;
                for (var i = t.length; r < i; r++) if (ji(t, r)) return w.log("MPEG Audio sync word found !"), !0;
                return !1
            }, r.canParse = function (t, e) {
                return function (t, e) {
                    return Yi(t, e) && 4 <= t.length - e
                }(t, e)
            }, r.appendFrame = function (t, e, r) {
                if (null !== this.basePTS) return Hi(t, e, r, this.basePTS, this.frameIndex)
            }, e
        }(Di), cn = function () {
            function t() {
            }

            return t.getSilentFrame = function (t, e) {
                if ("mp4a.40.2" === t) {
                    if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                    if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                    if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                } else {
                    if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                    if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
            }, t
        }(), fn = Math.pow(2, 32) - 1, gn = function () {
            function t() {
            }

            return t.init = function () {
                var e;
                for (e in t.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    dac3: [],
                    "ac-3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                }, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                    i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                t.HDLR_TYPES = {video: r, audio: i};
                var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                    a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var s = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]),
                    l = new Uint8Array([0, 0, 0, 1]);
                t.FTYP = t.box(t.types.ftyp, s, l, s, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
            }, t.box = function (t) {
                for (var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                for (var a = i.length, s = a; a--;) e += i[a].byteLength;
                var o = new Uint8Array(e);
                for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), a = 0, e = 8; a < s; a++) o.set(i[a], e), e += i[a].byteLength;
                return o
            }, t.hdlr = function (e) {
                return t.box(t.types.hdlr, t.HDLR_TYPES[e])
            }, t.mdat = function (e) {
                return t.box(t.types.mdat, e)
            }, t.mdhd = function (e, r) {
                r *= e;
                var i = Math.floor(r / (fn + 1)), n = Math.floor(r % (fn + 1));
                return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
            }, t.mdia = function (e) {
                return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
            }, t.mfhd = function (e) {
                return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
            }, t.minf = function (e) {
                return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
            }, t.moof = function (e, r, i) {
                return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
            }, t.moov = function (e) {
                for (var r = e.length, i = []; r--;) i[r] = t.trak(e[r]);
                return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
            }, t.mvex = function (e) {
                for (var r = e.length, i = []; r--;) i[r] = t.trex(e[r]);
                return t.box.apply(null, [t.types.mvex].concat(i))
            }, t.mvhd = function (e, r) {
                r *= e;
                var i = Math.floor(r / (fn + 1)), n = Math.floor(r % (fn + 1)),
                    a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return t.box(t.types.mvhd, a)
            }, t.sdtp = function (e) {
                var r, i, n = e.samples || [], a = new Uint8Array(4 + n.length);
                for (r = 0; r < n.length; r++) i = n[r].flags, a[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                return t.box(t.types.sdtp, a)
            }, t.stbl = function (e) {
                return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
            }, t.avc1 = function (e) {
                var r, i, n, a = [], s = [];
                for (r = 0; r < e.sps.length; r++) n = (i = e.sps[r]).byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(i));
                for (r = 0; r < e.pps.length; r++) n = (i = e.pps[r]).byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(i));
                var o = t.box(t.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | e.sps.length].concat(a).concat([e.pps.length]).concat(s))),
                    l = e.width, u = e.height, h = e.pixelRatio[0], d = e.pixelRatio[1];
                return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
            }, t.esds = function (t) {
                var e = t.config.length;
                return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
            }, t.audioStsd = function (t) {
                var e = t.samplerate;
                return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, 255 & e, 0, 0])
            }, t.mp4a = function (e) {
                return t.box(t.types.mp4a, t.audioStsd(e), t.box(t.types.esds, t.esds(e)))
            }, t.mp3 = function (e) {
                return t.box(t.types[".mp3"], t.audioStsd(e))
            }, t.ac3 = function (e) {
                return t.box(t.types["ac-3"], t.audioStsd(e), t.box(t.types.dac3, e.config))
            }, t.stsd = function (e) {
                return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? t.box(t.types.stsd, t.STSD, t.mp3(e)) : "ac3" === e.segmentCodec ? t.box(t.types.stsd, t.STSD, t.ac3(e)) : t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
            }, t.tkhd = function (e) {
                var r = e.id, i = e.duration * e.timescale, n = e.width, a = e.height, s = Math.floor(i / (fn + 1)),
                    o = Math.floor(i % (fn + 1));
                return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
            }, t.traf = function (e, r) {
                var i = t.sdtp(e), n = e.id, a = Math.floor(r / (fn + 1)), s = Math.floor(r % (fn + 1));
                return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
            }, t.trak = function (e) {
                return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
            }, t.trex = function (e) {
                var r = e.id;
                return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
            }, t.trun = function (e, r) {
                var i, n, a, s, o, l, u = e.samples || [], h = u.length, d = 12 + 16 * h, c = new Uint8Array(d);
                for (r += 8 + d, c.set(["video" === e.type ? 1 : 0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < h; i++) a = (n = u[i]).duration, s = n.size, o = n.flags, l = n.cts, c.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                return t.box(t.types.trun, c)
            }, t.initSegment = function (e) {
                t.types || t.init();
                var r = t.moov(e);
                return Gt(t.FTYP, r)
            }, t
        }();
        gn.types = void 0, gn.HDLR_TYPES = void 0, gn.STTS = void 0, gn.STSC = void 0, gn.STCO = void 0, gn.STSZ = void 0, gn.VMHD = void 0, gn.SMHD = void 0, gn.STSD = void 0, gn.FTYP = void 0, gn.DINF = void 0;
        var vn = 9e4;

        function mn(t, e, r, i) {
            void 0 === r && (r = 1), void 0 === i && (i = !1);
            var n = t * e * r;
            return i ? Math.round(n) : n
        }

        function pn(t, e) {
            return void 0 === e && (e = !1), mn(t, 1e3, 1 / vn, e)
        }

        var yn = null, En = null, Tn = function () {
            function t(t, e, r, i) {
                if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === yn) {
                    var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    yn = n ? parseInt(n[1]) : 0
                }
                if (null === En) {
                    var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                    En = a ? parseInt(a[1]) : 0
                }
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null
            }, e.resetTimeStamp = function (t) {
                w.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
            }, e.resetNextTimestamp = function () {
                w.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
            }, e.resetInitSegment = function () {
                w.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0
            }, e.getVideoStartPts = function (t) {
                var e = !1, r = t.reduce((function (t, r) {
                    var i = r.pts - t;
                    return i < -4294967296 ? (e = !0, Sn(t, r.pts)) : i > 0 ? t : r.pts
                }), t[0].pts);
                return e && w.debug("PTS rollover detected"), r
            }, e.remux = function (t, e, r, i, n, a, s, o) {
                var l, u, h, d, c, f, g = n, v = n, m = t.pid > -1, p = e.pid > -1, y = e.samples.length,
                    E = t.samples.length > 0, T = s && y > 0 || y > 1;
                if ((!m || E) && (!p || T) || this.ISGenerated || s) {
                    if (this.ISGenerated) {
                        var S, L, A, R, k = this.videoTrackConfig;
                        !k || e.width === k.width && e.height === k.height && (null == (S = e.pixelRatio) ? void 0 : S[0]) === (null == (L = k.pixelRatio) ? void 0 : L[0]) && (null == (A = e.pixelRatio) ? void 0 : A[1]) === (null == (R = k.pixelRatio) ? void 0 : R[1]) || this.resetInitSegment()
                    } else h = this.generateIS(t, e, n, a);
                    var b, D = this.isVideoContiguous, I = -1;
                    if (T && (I = function (t) {
                        for (var e = 0; e < t.length; e++) if (t[e].key) return e;
                        return -1
                    }(e.samples), !D && this.config.forceKeyFrameOnDiscontinuity)) if (f = !0, I > 0) {
                        w.warn("[mp4-remuxer]: Dropped " + I + " out of " + y + " video samples due to a missing keyframe");
                        var C = this.getVideoStartPts(e.samples);
                        e.samples = e.samples.slice(I), e.dropped += I, b = v += (e.samples[0].pts - C) / e.inputTimeScale
                    } else -1 === I && (w.warn("[mp4-remuxer]: No keyframe found out of " + y + " video samples"), f = !1);
                    if (this.ISGenerated) {
                        if (E && T) {
                            var _ = this.getVideoStartPts(e.samples),
                                x = (Sn(t.samples[0].pts, _) - _) / e.inputTimeScale;
                            g += Math.max(0, x), v += Math.max(0, -x)
                        }
                        if (E) {
                            if (t.samplerate || (w.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(t, e, n, a)), u = this.remuxAudio(t, g, this.isAudioContiguous, a, p || T || o === we ? v : void 0), T) {
                                var P = u ? u.endPTS - u.startPTS : 0;
                                e.inputTimeScale || (w.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(t, e, n, a)), l = this.remuxVideo(e, v, D, P)
                            }
                        } else T && (l = this.remuxVideo(e, v, D, 0));
                        l && (l.firstKeyFrame = I, l.independent = -1 !== I, l.firstKeyFramePTS = b)
                    }
                }
                return this.ISGenerated && this._initPTS && this._initDTS && (r.samples.length && (c = Ln(r, n, this._initPTS, this._initDTS)), i.samples.length && (d = An(i, n, this._initPTS))), {
                    audio: u,
                    video: l,
                    initSegment: h,
                    independent: f,
                    text: d,
                    id3: c
                }
            }, e.generateIS = function (t, e, r, i) {
                var n, a, s, o = t.samples, l = e.samples, u = this.typeSupported, h = {}, d = this._initPTS,
                    c = !d || i, f = "audio/mp4";
                if (c && (n = a = 1 / 0), t.config && o.length) {
                    switch (t.timescale = t.samplerate, t.segmentCodec) {
                        case"mp3":
                            u.mpeg ? (f = "audio/mpeg", t.codec = "") : u.mp3 && (t.codec = "mp3");
                            break;
                        case"ac3":
                            t.codec = "ac-3"
                    }
                    h.audio = {
                        id: "audio",
                        container: f,
                        codec: t.codec,
                        initSegment: "mp3" === t.segmentCodec && u.mpeg ? new Uint8Array(0) : gn.initSegment([t]),
                        metadata: {channelCount: t.channelCount}
                    }, c && (s = t.inputTimeScale, d && s === d.timescale ? c = !1 : n = a = o[0].pts - Math.round(s * r))
                }
                if (e.sps && e.pps && l.length) {
                    if (e.timescale = e.inputTimeScale, h.video = {
                        id: "main",
                        container: "video/mp4",
                        codec: e.codec,
                        initSegment: gn.initSegment([e]),
                        metadata: {width: e.width, height: e.height}
                    }, c) if (s = e.inputTimeScale, d && s === d.timescale) c = !1; else {
                        var g = this.getVideoStartPts(l), v = Math.round(s * r);
                        a = Math.min(a, Sn(l[0].dts, g) - v), n = Math.min(n, g - v)
                    }
                    this.videoTrackConfig = {width: e.width, height: e.height, pixelRatio: e.pixelRatio}
                }
                if (Object.keys(h).length) return this.ISGenerated = !0, c ? (this._initPTS = {
                    baseTime: n,
                    timescale: s
                }, this._initDTS = {baseTime: a, timescale: s}) : n = s = void 0, {tracks: h, initPTS: n, timescale: s}
            }, e.remuxVideo = function (t, e, r, i) {
                var n, a, s = t.inputTimeScale, l = t.samples, u = [], h = l.length, d = this._initPTS,
                    c = this.nextAvcDts, f = 8, g = this.videoSampleDuration, v = Number.POSITIVE_INFINITY,
                    m = Number.NEGATIVE_INFINITY, p = !1;
                if (!r || null === c) {
                    var y = e * s, E = l[0].pts - Sn(l[0].dts, l[0].pts);
                    yn && null !== c && Math.abs(y - E - c) < 15e3 ? r = !0 : c = y - E
                }
                for (var T = d.baseTime * s / d.timescale, R = 0; R < h; R++) {
                    var k = l[R];
                    k.pts = Sn(k.pts - T, c), k.dts = Sn(k.dts - T, c), k.dts < l[R > 0 ? R - 1 : R].dts && (p = !0)
                }
                p && l.sort((function (t, e) {
                    var r = t.dts - e.dts, i = t.pts - e.pts;
                    return r || i
                })), n = l[0].dts;
                var b = (a = l[l.length - 1].dts) - n, D = b ? Math.round(b / (h - 1)) : g || t.inputTimeScale / 30;
                if (r) {
                    var I = n - c, C = I > D, _ = I < -1;
                    if ((C || _) && (C ? w.warn("AVC: " + pn(I, !0) + " ms (" + I + "dts) hole between fragments detected at " + e.toFixed(3)) : w.warn("AVC: " + pn(-I, !0) + " ms (" + I + "dts) overlapping between fragments detected at " + e.toFixed(3)), !_ || c >= l[0].pts || yn)) {
                        n = c;
                        var x = l[0].pts - I;
                        if (C) l[0].dts = n, l[0].pts = x; else for (var P = 0; P < l.length && !(l[P].dts > x); P++) l[P].dts -= I, l[P].pts -= I;
                        w.log("Video: Initial PTS/DTS adjusted: " + pn(x, !0) + "/" + pn(n, !0) + ", delta: " + pn(I, !0) + " ms")
                    }
                }
                for (var F = 0, M = 0, O = n = Math.max(0, n), N = 0; N < h; N++) {
                    for (var U = l[N], B = U.units, G = B.length, K = 0, H = 0; H < G; H++) K += B[H].data.length;
                    M += K, F += G, U.length = K, U.dts < O ? (U.dts = O, O += D / 4 | 0 || 1) : O = U.dts, v = Math.min(U.pts, v), m = Math.max(U.pts, m)
                }
                a = l[h - 1].dts;
                var V, Y = M + 4 * F + 8;
                try {
                    V = new Uint8Array(Y)
                } catch (t) {
                    return void this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MUX_ERROR,
                        details: A.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        error: t,
                        bytes: Y,
                        reason: "fail allocating video mdat " + Y
                    })
                }
                var W = new DataView(V.buffer);
                W.setUint32(0, Y), V.set(gn.types.mdat, 4);
                for (var j = !1, q = Number.POSITIVE_INFINITY, X = Number.POSITIVE_INFINITY, z = Number.NEGATIVE_INFINITY, Q = Number.NEGATIVE_INFINITY, J = 0; J < h; J++) {
                    for (var $ = l[J], Z = $.units, tt = 0, et = 0, rt = Z.length; et < rt; et++) {
                        var it = Z[et], nt = it.data, at = it.data.byteLength;
                        W.setUint32(f, at), f += 4, V.set(nt, f), f += at, tt += 4 + at
                    }
                    var st = void 0;
                    if (J < h - 1) g = l[J + 1].dts - $.dts, st = l[J + 1].pts - $.pts; else {
                        var ot = this.config, lt = J > 0 ? $.dts - l[J - 1].dts : D;
                        if (st = J > 0 ? $.pts - l[J - 1].pts : D, ot.stretchShortVideoTrack && null !== this.nextAudioPts) {
                            var ut = Math.floor(ot.maxBufferHole * s), ht = (i ? v + i * s : this.nextAudioPts) - $.pts;
                            ht > ut ? ((g = ht - lt) < 0 ? g = lt : j = !0, w.log("[mp4-remuxer]: It is approximately " + ht / 90 + " ms to the next segment; using duration " + g / 90 + " ms for the last video frame.")) : g = lt
                        } else g = lt
                    }
                    var dt = Math.round($.pts - $.dts);
                    q = Math.min(q, g), z = Math.max(z, g), X = Math.min(X, st), Q = Math.max(Q, st), u.push(new kn($.key, g, tt, dt))
                }
                if (u.length) if (yn) {
                    if (yn < 70) {
                        var ct = u[0].flags;
                        ct.dependsOn = 2, ct.isNonSync = 0
                    }
                } else if (En && Q - X < z - q && D / z < .025 && 0 === u[0].cts) {
                    w.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                    for (var ft = n, gt = 0, vt = u.length; gt < vt; gt++) {
                        var mt = ft + u[gt].duration, pt = ft + u[gt].cts;
                        if (gt < vt - 1) {
                            var yt = mt + u[gt + 1].cts;
                            u[gt].duration = yt - pt
                        } else u[gt].duration = gt ? u[gt - 1].duration : D;
                        u[gt].cts = 0, ft = mt
                    }
                }
                g = j || !g ? D : g, this.nextAvcDts = c = a + g, this.videoSampleDuration = g, this.isVideoContiguous = !0;
                var Et = {
                    data1: gn.moof(t.sequenceNumber++, n, o({}, t, {samples: u})),
                    data2: V,
                    startPTS: v / s,
                    endPTS: (m + g) / s,
                    startDTS: n / s,
                    endDTS: c / s,
                    type: "video",
                    hasAudio: !1,
                    hasVideo: !0,
                    nb: u.length,
                    dropped: t.dropped
                };
                return t.samples = [], t.dropped = 0, Et
            }, e.getSamplesPerFrame = function (t) {
                switch (t.segmentCodec) {
                    case"mp3":
                        return 1152;
                    case"ac3":
                        return 1536;
                    default:
                        return 1024
                }
            }, e.remuxAudio = function (t, e, r, i, n) {
                var a = t.inputTimeScale, s = a / (t.samplerate ? t.samplerate : a), l = this.getSamplesPerFrame(t),
                    u = l * s, h = this._initPTS, d = "mp3" === t.segmentCodec && this.typeSupported.mpeg, c = [],
                    f = void 0 !== n, g = t.samples, v = d ? 0 : 8, m = this.nextAudioPts || -1, p = e * a,
                    y = h.baseTime * a / h.timescale;
                if (this.isAudioContiguous = r = r || g.length && m > 0 && (i && Math.abs(p - m) < 9e3 || Math.abs(Sn(g[0].pts - y, p) - m) < 20 * u), g.forEach((function (t) {
                    t.pts = Sn(t.pts - y, p)
                })), !r || m < 0) {
                    if (g = g.filter((function (t) {
                        return t.pts >= 0
                    })), !g.length) return;
                    m = 0 === n ? 0 : i && !f ? Math.max(0, p) : g[0].pts
                }
                if ("aac" === t.segmentCodec) for (var E = this.config.maxAudioFramesDrift, T = 0, R = m; T < g.length; T++) {
                    var k = g[T], b = k.pts, D = b - R, I = Math.abs(1e3 * D / a);
                    if (D <= -E * u && f) 0 === T && (w.warn("Audio frame @ " + (b / a).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * D / a) + " ms."), this.nextAudioPts = m = R = b); else if (D >= E * u && I < 1e4 && f) {
                        var C = Math.round(D / u);
                        (R = b - C * u) < 0 && (C--, R += u), 0 === T && (this.nextAudioPts = m = R), w.warn("[mp4-remuxer]: Injecting " + C + " audio frame @ " + (R / a).toFixed(3) + "s due to " + Math.round(1e3 * D / a) + " ms gap.");
                        for (var _ = 0; _ < C; _++) {
                            var x = Math.max(R, 0), P = cn.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                            P || (w.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), P = k.unit.subarray()), g.splice(T, 0, {
                                unit: P,
                                pts: x
                            }), R += u, T++
                        }
                    }
                    k.pts = R, R += u
                }
                for (var F, M = null, O = null, N = 0, U = g.length; U--;) N += g[U].unit.byteLength;
                for (var B = 0, G = g.length; B < G; B++) {
                    var K = g[B], H = K.unit, V = K.pts;
                    if (null !== O) c[B - 1].duration = Math.round((V - O) / s); else {
                        if (r && "aac" === t.segmentCodec && (V = m), M = V, !(N > 0)) return;
                        N += v;
                        try {
                            F = new Uint8Array(N)
                        } catch (t) {
                            return void this.observer.emit(S.ERROR, S.ERROR, {
                                type: L.MUX_ERROR,
                                details: A.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                error: t,
                                bytes: N,
                                reason: "fail allocating audio mdat " + N
                            })
                        }
                        d || (new DataView(F.buffer).setUint32(0, N), F.set(gn.types.mdat, 4))
                    }
                    F.set(H, v);
                    var Y = H.byteLength;
                    v += Y, c.push(new kn(!0, l, Y, 0)), O = V
                }
                var W = c.length;
                if (W) {
                    var j = c[c.length - 1];
                    this.nextAudioPts = m = O + s * j.duration;
                    var q = d ? new Uint8Array(0) : gn.moof(t.sequenceNumber++, M / s, o({}, t, {samples: c}));
                    t.samples = [];
                    var X = M / a, z = m / a, Q = {
                        data1: q,
                        data2: F,
                        startPTS: X,
                        endPTS: z,
                        startDTS: X,
                        endDTS: z,
                        type: "audio",
                        hasAudio: !0,
                        hasVideo: !1,
                        nb: W
                    };
                    return this.isAudioContiguous = !0, Q
                }
            }, e.remuxEmptyAudio = function (t, e, r, i) {
                var n = t.inputTimeScale, a = n / (t.samplerate ? t.samplerate : n), s = this.nextAudioPts,
                    o = this._initDTS, l = 9e4 * o.baseTime / o.timescale, u = (null !== s ? s : i.startDTS * n) + l,
                    h = i.endDTS * n + l, d = 1024 * a, c = Math.ceil((h - u) / d),
                    f = cn.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                if (w.warn("[mp4-remuxer]: remux empty Audio"), f) {
                    for (var g = [], v = 0; v < c; v++) {
                        var m = u + v * d;
                        g.push({unit: f, pts: m, dts: m})
                    }
                    return t.samples = g, this.remuxAudio(t, e, r, !1)
                }
                w.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
            }, t
        }();

        function Sn(t, e) {
            var r;
            if (null === e) return t;
            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
            return t
        }

        function Ln(t, e, r, i) {
            var n = t.samples.length;
            if (n) {
                for (var a = t.inputTimeScale, s = 0; s < n; s++) {
                    var o = t.samples[s];
                    o.pts = Sn(o.pts - r.baseTime * a / r.timescale, e * a) / a, o.dts = Sn(o.dts - i.baseTime * a / i.timescale, e * a) / a
                }
                var l = t.samples;
                return t.samples = [], {samples: l}
            }
        }

        function An(t, e, r) {
            var i = t.samples.length;
            if (i) {
                for (var n = t.inputTimeScale, a = 0; a < i; a++) {
                    var s = t.samples[a];
                    s.pts = Sn(s.pts - r.baseTime * n / r.timescale, e * n) / n
                }
                t.samples.sort((function (t, e) {
                    return t.pts - e.pts
                }));
                var o = t.samples;
                return t.samples = [], {samples: o}
            }
        }

        var Rn, kn = function (t, e, r, i) {
            this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = r, this.cts = i, this.flags = {
                isLeading: 0,
                isDependedOn: 0,
                hasRedundancy: 0,
                degradPrio: 0,
                dependsOn: t ? 2 : 1,
                isNonSync: t ? 0 : 1
            }
        }, bn = function () {
            function t() {
                this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null
            }

            var e = t.prototype;
            return e.destroy = function () {
            }, e.resetTimeStamp = function (t) {
                this.initPTS = t, this.lastEndTime = null
            }, e.resetNextTimestamp = function () {
                this.lastEndTime = null
            }, e.resetInitSegment = function (t, e, r, i) {
                this.audioCodec = e, this.videoCodec = r, this.generateInitSegment(function (t, e) {
                    if (!t || !e) return t;
                    var r = e.keyId;
                    return r && e.isCommonEncryption && _t(t, ["moov", "trak"]).forEach((function (t) {
                        var e = _t(t, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8), i = _t(e, ["enca"]),
                            n = i.length > 0;
                        n || (i = _t(e, ["encv"])), i.forEach((function (t) {
                            _t(n ? t.subarray(28) : t.subarray(78), ["sinf"]).forEach((function (t) {
                                var e = Ut(t);
                                if (e) {
                                    var i = e.subarray(8, 24);
                                    i.some((function (t) {
                                        return 0 !== t
                                    })) || (w.log("[eme] Patching keyId in 'enc" + (n ? "a" : "v") + ">sinf>>tenc' box: " + Lt(i) + " -> " + Lt(r)), e.set(r, 8))
                                }
                            }))
                        }))
                    })), t
                }(t, i)), this.emitInitSegment = !0
            }, e.generateInitSegment = function (t) {
                var e = this.audioCodec, r = this.videoCodec;
                if (null == t || !t.byteLength) return this.initTracks = void 0, void (this.initData = void 0);
                var i = this.initData = Pt(t);
                i.audio && (e = Dn(i.audio, O)), i.video && (r = Dn(i.video, N));
                var n = {};
                i.audio && i.video ? n.audiovideo = {
                    container: "video/mp4",
                    codec: e + "," + r,
                    initSegment: t,
                    id: "main"
                } : i.audio ? n.audio = {
                    container: "audio/mp4",
                    codec: e,
                    initSegment: t,
                    id: "audio"
                } : i.video ? n.video = {
                    container: "video/mp4",
                    codec: r,
                    initSegment: t,
                    id: "main"
                } : w.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n
            }, e.remux = function (t, e, r, i, n, a) {
                var s, o, l = this.initPTS, u = this.lastEndTime,
                    h = {audio: void 0, video: void 0, text: i, id3: r, initSegment: void 0};
                y(u) || (u = this.lastEndTime = n || 0);
                var d = e.samples;
                if (null == d || !d.length) return h;
                var c = {initPTS: void 0, timescale: 1}, f = this.initData;
                if (null != (s = f) && s.length || (this.generateInitSegment(d), f = this.initData), null == (o = f) || !o.length) return w.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
                this.emitInitSegment && (c.tracks = this.initTracks, this.emitInitSegment = !1);
                var g = function (t, e) {
                    for (var r = 0, i = 0, n = 0, a = _t(t, ["moof", "traf"]), s = 0; s < a.length; s++) {
                        var o = a[s], l = _t(o, ["tfhd"])[0], u = e[It(l, 4)];
                        if (u) {
                            var h = u.default, d = It(l, 0) | (null == h ? void 0 : h.flags),
                                c = null == h ? void 0 : h.duration;
                            8 & d && (c = It(l, 2 & d ? 12 : 8));
                            for (var f = u.timescale || 9e4, g = _t(o, ["trun"]), v = 0; v < g.length; v++) !(r = Bt(g[v])) && c && (r = c * It(g[v], 4)), u.type === N ? i += r / f : u.type === O && (n += r / f)
                        }
                    }
                    if (0 === i && 0 === n) {
                        for (var m = 0, p = _t(t, ["sidx"]), y = 0; y < p.length; y++) {
                            var E = xt(p[y]);
                            null != E && E.references && (m += E.references.reduce((function (t, e) {
                                return t + e.info.duration || 0
                            }), 0))
                        }
                        return m
                    }
                    return i || n
                }(d, f), v = function (t, e) {
                    return _t(e, ["moof", "traf"]).reduce((function (e, r) {
                        var i = _t(r, ["tfdt"])[0], n = i[0], a = _t(r, ["tfhd"]).reduce((function (e, r) {
                            var a = It(r, 4), s = t[a];
                            if (s) {
                                var o = It(i, 4);
                                if (1 === n) {
                                    if (o === At) return w.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e;
                                    o *= At + 1, o += It(i, 8)
                                }
                                var l = o / (s.timescale || 9e4);
                                if (y(l) && (null === e || l < e)) return l
                            }
                            return e
                        }), null);
                        return null !== a && y(a) && (null === e || a < e) ? a : e
                    }), null)
                }(f, d), m = null === v ? n : v;
                (function (t, e, r, i) {
                    if (null === t) return !0;
                    var n = Math.max(i, 1), a = e - t.baseTime / t.timescale;
                    return Math.abs(a - r) > n
                }(l, m, n, g) || c.timescale !== l.timescale && a) && (c.initPTS = m - n, l && 1 === l.timescale && w.warn("Adjusting initPTS by " + (c.initPTS - l.baseTime)), this.initPTS = l = {
                    baseTime: c.initPTS,
                    timescale: 1
                });
                var p = t ? m - l.baseTime / l.timescale : u, E = p + g;
                !function (t, e, r) {
                    _t(e, ["moof", "traf"]).forEach((function (e) {
                        _t(e, ["tfhd"]).forEach((function (i) {
                            var n = It(i, 4), a = t[n];
                            if (a) {
                                var s = a.timescale || 9e4;
                                _t(e, ["tfdt"]).forEach((function (t) {
                                    var e = t[0], i = r * s;
                                    if (i) {
                                        var n = It(t, 4);
                                        if (0 === e) n -= i, Ct(t, 4, n = Math.max(n, 0)); else {
                                            n *= Math.pow(2, 32), n += It(t, 8), n -= i, n = Math.max(n, 0);
                                            var a = Math.floor(n / (At + 1)), o = Math.floor(n % (At + 1));
                                            Ct(t, 4, a), Ct(t, 8, o)
                                        }
                                    }
                                }))
                            }
                        }))
                    }))
                }(f, d, l.baseTime / l.timescale), g > 0 ? this.lastEndTime = E : (w.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                var T = !!f.audio, S = !!f.video, L = "";
                T && (L += "audio"), S && (L += "video");
                var A = {
                    data1: d,
                    startPTS: p,
                    startDTS: p,
                    endPTS: E,
                    endDTS: E,
                    type: L,
                    hasAudio: T,
                    hasVideo: S,
                    nb: 1,
                    dropped: 0
                };
                return h.audio = "audio" === A.type ? A : void 0, h.video = "audio" !== A.type ? A : void 0, h.initSegment = c, h.id3 = Ln(r, n, l, l), i.samples.length && (h.text = An(i, n, l)), h
            }, t
        }();

        function Dn(t, e) {
            var r = null == t ? void 0 : t.codec;
            if (r && r.length > 4) return r;
            if (e === O) {
                if ("ec-3" === r || "ac-3" === r || "alac" === r) return r;
                if ("fLaC" === r || "Opus" === r) return ue(r, !1);
                var i = "mp4a.40.5";
                return w.info('Parsed audio codec "' + r + '" or audio object type not handled. Using "' + i + '"'), i
            }
            return w.warn('Unhandled video codec "' + r + '"'), "hvc1" === r || "hev1" === r ? "hvc1.1.6.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1.42e01e"
        }

        try {
            Rn = self.performance.now.bind(self.performance)
        } catch (t) {
            w.debug("Unable to use Performance API on this environment"), Rn = null == j ? void 0 : j.Date.now
        }
        var In = [{demux: zi, remux: bn}, {demux: an, remux: Tn}, {demux: qi, remux: Tn}, {demux: dn, remux: Tn}];
        In.splice(2, 0, {demux: Ji, remux: Tn});
        var wn = function () {
            function t(t, e, r, i, n) {
                this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = r, this.vendor = i, this.id = n
            }

            var e = t.prototype;
            return e.configure = function (t) {
                this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
            }, e.push = function (t, e, r, i) {
                var n = this, a = r.transmuxing;
                a.executeStart = Rn();
                var s = new Uint8Array(t), o = this.currentTransmuxState, l = this.transmuxConfig;
                i && (this.currentTransmuxState = i);
                var u = i || o, h = u.contiguous, d = u.discontinuity, c = u.trackSwitch, f = u.accurateTimeOffset,
                    g = u.timeOffset, v = u.initSegmentChange, m = l.audioCodec, p = l.videoCodec, y = l.defaultInitPts,
                    E = l.duration, T = l.initSegmentData, R = function (t, e) {
                        var r = null;
                        return t.byteLength > 0 && null != (null == e ? void 0 : e.key) && null !== e.iv && null != e.method && (r = e), r
                    }(s, e);
                if (R && "AES-128" === R.method) {
                    var k = this.getDecrypter();
                    if (!k.isSync()) return this.decryptionPromise = k.webCryptoDecrypt(s, R.key.buffer, R.iv.buffer).then((function (t) {
                        var e = n.push(t, null, r);
                        return n.decryptionPromise = null, e
                    })), this.decryptionPromise;
                    var b = k.softwareDecrypt(s, R.key.buffer, R.iv.buffer);
                    if (r.part > -1 && (b = k.flush()), !b) return a.executeEnd = Rn(), Cn(r);
                    s = new Uint8Array(b)
                }
                var D = this.needsProbing(d, c);
                if (D) {
                    var I = this.configureTransmuxer(s);
                    if (I) return w.warn("[transmuxer] " + I.message), this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: A.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: I,
                        reason: I.message
                    }), a.executeEnd = Rn(), Cn(r)
                }
                (d || c || v || D) && this.resetInitSegment(T, m, p, E, e), (d || v || D) && this.resetInitialTimestamp(y), h || this.resetContiguity();
                var C = this.transmux(s, R, g, f, r), _ = this.currentTransmuxState;
                return _.contiguous = !0, _.discontinuity = !1, _.trackSwitch = !1, a.executeEnd = Rn(), C
            }, e.flush = function (t) {
                var e = this, r = t.transmuxing;
                r.executeStart = Rn();
                var i = this.decrypter, n = this.currentTransmuxState, a = this.decryptionPromise;
                if (a) return a.then((function () {
                    return e.flush(t)
                }));
                var s = [], o = n.timeOffset;
                if (i) {
                    var l = i.flush();
                    l && s.push(this.push(l, null, t))
                }
                var u = this.demuxer, h = this.remuxer;
                if (!u || !h) return r.executeEnd = Rn(), [Cn(t)];
                var d = u.flush(o);
                return _n(d) ? d.then((function (r) {
                    return e.flushRemux(s, r, t), s
                })) : (this.flushRemux(s, d, t), s)
            }, e.flushRemux = function (t, e, r) {
                var i = e.audioTrack, n = e.videoTrack, a = e.id3Track, s = e.textTrack, o = this.currentTransmuxState,
                    l = o.accurateTimeOffset, u = o.timeOffset;
                w.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
                t.push({remuxResult: h, chunkMeta: r}), r.transmuxing.executeEnd = Rn()
            }, e.resetInitialTimestamp = function (t) {
                var e = this.demuxer, r = this.remuxer;
                e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
            }, e.resetContiguity = function () {
                var t = this.demuxer, e = this.remuxer;
                t && e && (t.resetContiguity(), e.resetNextTimestamp())
            }, e.resetInitSegment = function (t, e, r, i, n) {
                var a = this.demuxer, s = this.remuxer;
                a && s && (a.resetInitSegment(t, e, r, i), s.resetInitSegment(t, e, r, n))
            }, e.destroy = function () {
                this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
            }, e.transmux = function (t, e, r, i, n) {
                return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n)
            }, e.transmuxUnencrypted = function (t, e, r, i) {
                var n = this.demuxer.demux(t, e, !1, !this.config.progressive), a = n.audioTrack, s = n.videoTrack,
                    o = n.id3Track, l = n.textTrack;
                return {remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id), chunkMeta: i}
            }, e.transmuxSampleAes = function (t, e, r, i, n) {
                var a = this;
                return this.demuxer.demuxSampleAes(t, e, r).then((function (t) {
                    return {
                        remuxResult: a.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, r, i, !1, a.id),
                        chunkMeta: n
                    }
                }))
            }, e.configureTransmuxer = function (t) {
                for (var e, r = this.config, i = this.observer, n = this.typeSupported, a = this.vendor, s = 0, o = In.length; s < o; s++) {
                    var l;
                    if (null != (l = In[s].demux) && l.probe(t)) {
                        e = In[s];
                        break
                    }
                }
                if (!e) return new Error("Failed to find demuxer by probing fragment data");
                var u = this.demuxer, h = this.remuxer, d = e.remux, c = e.demux;
                h && h instanceof d || (this.remuxer = new d(i, r, n, a)), u && u instanceof c || (this.demuxer = new c(i, r, n), this.probe = c.probe)
            }, e.needsProbing = function (t, e) {
                return !this.demuxer || !this.remuxer || t || e
            }, e.getDecrypter = function () {
                var t = this.decrypter;
                return t || (t = this.decrypter = new hi(this.config)), t
            }, t
        }(), Cn = function (t) {
            return {remuxResult: {}, chunkMeta: t}
        };

        function _n(t) {
            return "then" in t && t.then instanceof Function
        }

        var xn = function (t, e, r, i, n) {
            this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = r, this.duration = i, this.defaultInitPts = n || null
        }, Pn = function (t, e, r, i, n, a) {
            this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = r, this.trackSwitch = i, this.timeOffset = n, this.initSegmentChange = a
        }, Fn = {exports: {}};
        !function (t) {
            var e = Object.prototype.hasOwnProperty, r = "~";

            function i() {
            }

            function n(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function a(t, e, i, a, s) {
                if ("function" != typeof i) throw new TypeError("The listener must be a function");
                var o = new n(i, a || t, s), l = r ? r + e : e;
                return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new i : delete t._events[e]
            }

            function o() {
                this._events = new i, this._eventsCount = 0
            }

            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (r = !1)), o.prototype.eventNames = function () {
                var t, i, n = [];
                if (0 === this._eventsCount) return n;
                for (i in t = this._events) e.call(t, i) && n.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, o.prototype.listeners = function (t) {
                var e = r ? r + t : t, i = this._events[e];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var n = 0, a = i.length, s = new Array(a); n < a; n++) s[n] = i[n].fn;
                return s
            }, o.prototype.listenerCount = function (t) {
                var e = r ? r + t : t, i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0
            }, o.prototype.emit = function (t, e, i, n, a, s) {
                var o = r ? r + t : t;
                if (!this._events[o]) return !1;
                var l, u, h = this._events[o], d = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), d) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, i), !0;
                        case 4:
                            return h.fn.call(h.context, e, i, n), !0;
                        case 5:
                            return h.fn.call(h.context, e, i, n, a), !0;
                        case 6:
                            return h.fn.call(h.context, e, i, n, a, s), !0
                    }
                    for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                    h.fn.apply(h.context, l)
                } else {
                    var c, f = h.length;
                    for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d) {
                        case 1:
                            h[u].fn.call(h[u].context);
                            break;
                        case 2:
                            h[u].fn.call(h[u].context, e);
                            break;
                        case 3:
                            h[u].fn.call(h[u].context, e, i);
                            break;
                        case 4:
                            h[u].fn.call(h[u].context, e, i, n);
                            break;
                        default:
                            if (!l) for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                            h[u].fn.apply(h[u].context, l)
                    }
                }
                return !0
            }, o.prototype.on = function (t, e, r) {
                return a(this, t, e, r, !1)
            }, o.prototype.once = function (t, e, r) {
                return a(this, t, e, r, !0)
            }, o.prototype.removeListener = function (t, e, i, n) {
                var a = r ? r + t : t;
                if (!this._events[a]) return this;
                if (!e) return s(this, a), this;
                var o = this._events[a];
                if (o.fn) o.fn !== e || n && !o.once || i && o.context !== i || s(this, a); else {
                    for (var l = 0, u = [], h = o.length; l < h; l++) (o[l].fn !== e || n && !o[l].once || i && o[l].context !== i) && u.push(o[l]);
                    u.length ? this._events[a] = 1 === u.length ? u[0] : u : s(this, a)
                }
                return this
            }, o.prototype.removeAllListeners = function (t) {
                var e;
                return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new i, this._eventsCount = 0), this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = r, o.EventEmitter = o, t.exports = o
        }(Fn);
        var Mn = v(Fn.exports);

        function On(t, e) {
            if (!((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment)) return !1;
            var r, i = [], n = e.remuxResult, a = n.audio, s = n.video;
            return a && Nn(i, a), s && Nn(i, s), t.postMessage({event: "transmuxComplete", data: e}, i), !0
        }

        function Nn(t, e) {
            e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
        }

        function Un(t, e, r) {
            e.reduce((function (e, r) {
                return On(t, r) || e
            }), !1) || t.postMessage({event: "transmuxComplete", data: e[0]}), t.postMessage({event: "flush", data: r})
        }

        void 0 !== e && e && function (t) {
            var e = new Mn, r = function (e, r) {
                t.postMessage({event: e, data: r})
            };
            e.on(S.FRAG_DECRYPTED, r), e.on(S.ERROR, r);
            var i = function () {
                var t = function (t) {
                    var e = function (e) {
                        r("workerLog", {logType: t, message: e})
                    };
                    w[t] = e
                };
                for (var e in w) t(e)
            };
            t.addEventListener("message", (function (n) {
                var a = n.data;
                switch (a.cmd) {
                    case"init":
                        var s = JSON.parse(a.config);
                        t.transmuxer = new wn(e, a.typeSupported, s, a.vendor, a.id), I(s.debug, a.id), i(), r("init", null);
                        break;
                    case"configure":
                        t.transmuxer.configure(a.config);
                        break;
                    case"demux":
                        var o = t.transmuxer.push(a.data, a.decryptdata, a.chunkMeta, a.state);
                        _n(o) ? (t.transmuxer.async = !0, o.then((function (e) {
                            On(t, e)
                        })).catch((function (t) {
                            r(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: A.FRAG_PARSING_ERROR,
                                chunkMeta: a.chunkMeta,
                                fatal: !1,
                                error: t,
                                err: t,
                                reason: "transmuxer-worker push error"
                            })
                        }))) : (t.transmuxer.async = !1, On(t, o));
                        break;
                    case"flush":
                        var l = a.chunkMeta, u = t.transmuxer.flush(l);
                        _n(u) || t.transmuxer.async ? (_n(u) || (u = Promise.resolve(u)), u.then((function (e) {
                            Un(t, e, l)
                        })).catch((function (t) {
                            r(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: A.FRAG_PARSING_ERROR,
                                chunkMeta: a.chunkMeta,
                                fatal: !1,
                                error: t,
                                err: t,
                                reason: "transmuxer-worker flush error"
                            })
                        }))) : Un(t, u, l)
                }
            }))
        }(self);
        var Bn = function () {
            function e(e, r, i, n) {
                var a = this;
                this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
                var s = e.config;
                this.hls = e, this.id = r, this.useWorker = !!s.enableWorker, this.onTransmuxComplete = i, this.onFlush = n;
                var o = function (t, e) {
                    (e = e || {}).frag = a.frag, e.id = a.id, t === S.ERROR && (a.error = e.error), a.hls.trigger(t, e)
                };
                this.observer = new Mn, this.observer.on(S.FRAG_DECRYPTED, o), this.observer.on(S.ERROR, o);
                var l, u, h, d, c = te(s.preferManagedMediaSource) || {
                    isTypeSupported: function () {
                        return !1
                    }
                }, f = {
                    mpeg: c.isTypeSupported("audio/mpeg"),
                    mp3: c.isTypeSupported('audio/mp4; codecs="mp3"'),
                    ac3: c.isTypeSupported('audio/mp4; codecs="ac-3"')
                }, g = navigator.vendor;
                if (!this.useWorker || "undefined" == typeof Worker || (s.workerPath, 0)) this.transmuxer = new wn(this.observer, f, s, g, r); else try {
                    s.workerPath ? (w.log("loading Web Worker " + s.workerPath + ' for "' + r + '"'), this.workerContext = (h = s.workerPath, d = new self.URL(h, self.location.href).href, {
                        worker: new self.Worker(d),
                        scriptURL: d
                    })) : (w.log('injecting Web Worker for "' + r + '"'), this.workerContext = (l = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + t.toString() + ")(true);"], {type: "text/javascript"}), u = self.URL.createObjectURL(l), {
                        worker: new self.Worker(u),
                        objectURL: u
                    })), this.onwmsg = function (t) {
                        return a.onWorkerMessage(t)
                    };
                    var v = this.workerContext.worker;
                    v.addEventListener("message", this.onwmsg), v.onerror = function (t) {
                        var e = new Error(t.message + "  (" + t.filename + ":" + t.lineno + ")");
                        s.enableWorker = !1, w.warn('Error in "' + r + '" Web Worker, fallback to inline'), a.hls.trigger(S.ERROR, {
                            type: L.OTHER_ERROR,
                            details: A.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: "demuxerWorker",
                            error: e
                        })
                    }, v.postMessage({cmd: "init", typeSupported: f, vendor: g, id: r, config: JSON.stringify(s)})
                } catch (t) {
                    w.warn('Error setting up "' + r + '" Web Worker, fallback to inline', t), this.resetWorker(), this.error = null, this.transmuxer = new wn(this.observer, f, s, g, r)
                }
            }

            var r = e.prototype;
            return r.resetWorker = function () {
                if (this.workerContext) {
                    var t = this.workerContext, e = t.worker, r = t.objectURL;
                    r && self.URL.revokeObjectURL(r), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null
                }
            }, r.destroy = function () {
                if (this.workerContext) this.resetWorker(), this.onwmsg = void 0; else {
                    var t = this.transmuxer;
                    t && (t.destroy(), this.transmuxer = null)
                }
                var e = this.observer;
                e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
            }, r.push = function (t, e, r, i, n, a, s, o, l, u) {
                var h, d, c = this;
                l.transmuxing.start = self.performance.now();
                var f = this.transmuxer, g = a ? a.start : n.start, v = n.decryptdata, m = this.frag,
                    p = !(m && n.cc === m.cc), y = !(m && l.level === m.level), E = m ? l.sn - m.sn : -1,
                    T = this.part ? l.part - this.part.index : -1,
                    S = 0 === E && l.id > 1 && l.id === (null == m ? void 0 : m.stats.chunkCount),
                    L = !y && (1 === E || 0 === E && (1 === T || S && T <= 0)), A = self.performance.now();
                (y || E || 0 === n.stats.parsing.start) && (n.stats.parsing.start = A), !a || !T && L || (a.stats.parsing.start = A);
                var R = !(m && (null == (h = n.initSegment) ? void 0 : h.url) === (null == (d = m.initSegment) ? void 0 : d.url)),
                    k = new Pn(p, L, o, y, g, R);
                if (!L || p || R) {
                    w.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + l.sn + " p: " + l.part + " level: " + l.level + " id: " + l.id + "\n        discontinuity: " + p + "\n        trackSwitch: " + y + "\n        contiguous: " + L + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + g + "\n        initSegmentChange: " + R);
                    var b = new xn(r, i, e, s, u);
                    this.configureTransmuxer(b)
                }
                if (this.frag = n, this.part = a, this.workerContext) this.workerContext.worker.postMessage({
                    cmd: "demux",
                    data: t,
                    decryptdata: v,
                    chunkMeta: l,
                    state: k
                }, t instanceof ArrayBuffer ? [t] : []); else if (f) {
                    var D = f.push(t, v, l, k);
                    _n(D) ? (f.async = !0, D.then((function (t) {
                        c.handleTransmuxComplete(t)
                    })).catch((function (t) {
                        c.transmuxerError(t, l, "transmuxer-interface push error")
                    }))) : (f.async = !1, this.handleTransmuxComplete(D))
                }
            }, r.flush = function (t) {
                var e = this;
                t.transmuxing.start = self.performance.now();
                var r = this.transmuxer;
                if (this.workerContext) this.workerContext.worker.postMessage({
                    cmd: "flush",
                    chunkMeta: t
                }); else if (r) {
                    var i = r.flush(t);
                    _n(i) || r.async ? (_n(i) || (i = Promise.resolve(i)), i.then((function (r) {
                        e.handleFlushResult(r, t)
                    })).catch((function (r) {
                        e.transmuxerError(r, t, "transmuxer-interface flush error")
                    }))) : this.handleFlushResult(i, t)
                }
            }, r.transmuxerError = function (t, e, r) {
                this.hls && (this.error = t, this.hls.trigger(S.ERROR, {
                    type: L.MEDIA_ERROR,
                    details: A.FRAG_PARSING_ERROR,
                    chunkMeta: e,
                    fatal: !1,
                    error: t,
                    err: t,
                    reason: r
                }))
            }, r.handleFlushResult = function (t, e) {
                var r = this;
                t.forEach((function (t) {
                    r.handleTransmuxComplete(t)
                })), this.onFlush(e)
            }, r.onWorkerMessage = function (t) {
                var e = t.data, r = this.hls;
                switch (e.event) {
                    case"init":
                        var i, n = null == (i = this.workerContext) ? void 0 : i.objectURL;
                        n && self.URL.revokeObjectURL(n);
                        break;
                    case"transmuxComplete":
                        this.handleTransmuxComplete(e.data);
                        break;
                    case"flush":
                        this.onFlush(e.data);
                        break;
                    case"workerLog":
                        w[e.data.logType] && w[e.data.logType](e.data.message);
                        break;
                    default:
                        e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                }
            }, r.configureTransmuxer = function (t) {
                var e = this.transmuxer;
                this.workerContext ? this.workerContext.worker.postMessage({
                    cmd: "configure",
                    config: t
                }) : e && e.configure(t)
            }, r.handleTransmuxComplete = function (t) {
                t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
            }, e
        }();

        function Gn(t, e) {
            if (t.length !== e.length) return !1;
            for (var r = 0; r < t.length; r++) if (!Kn(t[r].attrs, e[r].attrs)) return !1;
            return !0
        }

        function Kn(t, e, r) {
            var i = t["STABLE-RENDITION-ID"];
            return i && !r ? i === e["STABLE-RENDITION-ID"] : !(r || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((function (r) {
                return t[r] !== e[r]
            }))
        }

        function Hn(t, e) {
            return e.label.toLowerCase() === t.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (t.lang || "").toLowerCase())
        }

        var Vn = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e, r, i, "[audio-stream-controller]", we) || this).videoBuffer = null, n.videoTrackCC = -1, n.waitingVideoCC = -1, n.bufferedTrack = null, n.switchingTrack = null, n.trackId = -1, n.waitingData = null, n.mainDetails = null, n.flushing = !1, n.bufferFlushed = !1, n.cachedTrackLoadedData = null, n._registerListeners(), n
            }

            l(e, t);
            var r = e.prototype;
            return r.onHandlerDestroying = function () {
                this._unregisterListeners(), t.prototype.onHandlerDestroying.call(this), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null
            }, r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(S.ERROR, this.onError, this), t.on(S.BUFFER_RESET, this.onBufferReset, this), t.on(S.BUFFER_CREATED, this.onBufferCreated, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(S.ERROR, this.onError, this), t.off(S.BUFFER_RESET, this.onBufferReset, this), t.off(S.BUFFER_CREATED, this.onBufferCreated, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r.onInitPtsFound = function (t, e) {
                var r = e.frag, i = e.id, n = e.initPTS, a = e.timescale;
                if ("main" === i) {
                    var s = r.cc;
                    this.initPTS[r.cc] = {
                        baseTime: n,
                        timescale: a
                    }, this.log("InitPTS for cc: " + s + " found from main: " + n), this.videoTrackCC = s, this.state === Li && this.tick()
                }
            }, r.startLoad = function (t) {
                if (!this.levels) return this.startPosition = t, void (this.state = ci);
                var e = this.lastCurrentTime;
                this.stopLoad(), this.setInterval(100), e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e, this.state = fi) : (this.loadedmetadata = !1, this.state = pi), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
            }, r.doTick = function () {
                switch (this.state) {
                    case fi:
                        this.doTickIdle();
                        break;
                    case pi:
                        var e, r = this.levels, i = this.trackId,
                            n = null == r || null == (e = r[i]) ? void 0 : e.details;
                        if (n) {
                            if (this.waitForCdnTuneIn(n)) break;
                            this.state = Li
                        }
                        break;
                    case mi:
                        var a, s = performance.now(), o = this.retryDate;
                        if (!o || s >= o || null != (a = this.media) && a.seeking) {
                            var l = this.levels, u = this.trackId;
                            this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((null == l ? void 0 : l[u]) || null), this.state = fi
                        }
                        break;
                    case Li:
                        var h = this.waitingData;
                        if (h) {
                            var d = h.frag, c = h.part, f = h.cache, g = h.complete;
                            if (void 0 !== this.initPTS[d.cc]) {
                                this.waitingData = null, this.waitingVideoCC = -1, this.state = vi;
                                var v = {frag: d, part: c, payload: f.flush(), networkDetails: null};
                                this._handleFragmentLoadProgress(v), g && t.prototype._handleFragmentLoadComplete.call(this, v)
                            } else if (this.videoTrackCC !== this.waitingVideoCC) this.log("Waiting fragment cc (" + d.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment(); else {
                                var m = this.getLoadPosition(),
                                    p = zr.bufferInfo(this.mediaBuffer, m, this.config.maxBufferHole);
                                pr(p.end, this.config.maxFragLookUpTolerance, d) < 0 && (this.log("Waiting fragment cc (" + d.cc + ") @ " + d.start + " cancelled because another fragment at " + p.end + " is needed"), this.clearWaitingFragment())
                            }
                        } else this.state = fi
                }
                this.onTickEnd()
            }, r.clearWaitingFragment = function () {
                var t = this.waitingData;
                t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = fi)
            }, r.resetLoadingState = function () {
                this.clearWaitingFragment(), t.prototype.resetLoadingState.call(this)
            }, r.onTickEnd = function () {
                var t = this.media;
                null != t && t.readyState && (this.lastCurrentTime = t.currentTime)
            }, r.doTickIdle = function () {
                var t = this.hls, e = this.levels, r = this.media, i = this.trackId, n = t.config;
                if ((r || !this.startFragRequested && n.startFragPrefetch) && null != e && e[i]) {
                    var a = e[i], s = a.details;
                    if (!s || s.live && this.levelLastLoaded !== a || this.waitForCdnTuneIn(s)) this.state = pi; else {
                        var o = this.mediaBuffer ? this.mediaBuffer : this.media;
                        this.bufferFlushed && o && (this.bufferFlushed = !1, this.afterBufferFlushed(o, O, we));
                        var l = this.getFwdBufferInfo(o, we);
                        if (null !== l) {
                            var u = this.bufferedTrack, h = this.switchingTrack;
                            if (!h && this._streamEnded(l, s)) return t.trigger(S.BUFFER_EOS, {type: "audio"}), void (this.state = Ti);
                            var d = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, Ie),
                                c = l.len, f = this.getMaxBufferLength(null == d ? void 0 : d.len), g = s.fragments,
                                v = g[0].start, m = this.flushing ? this.getLoadPosition() : l.end;
                            if (h && r) {
                                var p = this.getLoadPosition();
                                u && !Kn(h.attrs, u.attrs) && (m = p), s.PTSKnown && p < v && (l.end > v || l.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r.currentTime = v + .05)
                            }
                            if (!(c >= f && !h && m < g[g.length - 1].start)) {
                                var y = this.getNextFragment(m, s), E = !1;
                                if (y && this.isLoopLoading(y, m) && (E = !!y.gap, y = this.getNextFragmentLoopLoading(y, s, l, Ie, f)), y) {
                                    var T = d && y.start > d.end + s.targetduration;
                                    if (T || (null == d || !d.len) && l.len) {
                                        var L = this.getAppendedFrag(y.start, Ie);
                                        if (null === L) return;
                                        if (E || (E = !!L.gap || !!T && 0 === d.len), T && !E || E && l.nextStart && l.nextStart < L.end) return
                                    }
                                    this.loadFragment(y, a, m)
                                } else this.bufferFlushed = !0
                            }
                        }
                    }
                }
            }, r.getMaxBufferLength = function (e) {
                var r = t.prototype.getMaxBufferLength.call(this);
                return e ? Math.min(Math.max(r, e), this.config.maxMaxBufferLength) : r
            }, r.onMediaDetaching = function () {
                this.videoBuffer = null, this.bufferFlushed = this.flushing = !1, t.prototype.onMediaDetaching.call(this)
            }, r.onAudioTracksUpdated = function (t, e) {
                var r = e.audioTracks;
                this.resetTransmuxer(), this.levels = r.map((function (t) {
                    return new tr(t)
                }))
            }, r.onAudioTrackSwitching = function (t, e) {
                var r = !!e.url;
                this.trackId = e.id;
                var i = this.fragCurrent;
                i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), r ? this.setInterval(100) : this.resetTransmuxer(), r ? (this.switchingTrack = e, this.state = fi, this.flushAudioIfNeeded(e)) : (this.switchingTrack = null, this.bufferedTrack = e, this.state = ci), this.tick()
            }, r.onManifestLoading = function () {
                this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = this.flushing = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
            }, r.onLevelLoaded = function (t, e) {
                this.mainDetails = e.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(S.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
            }, r.onAudioTrackLoaded = function (t, e) {
                var r;
                if (null != this.mainDetails) {
                    var i = this.levels, n = e.details, a = e.id;
                    if (i) {
                        this.log("Audio track " + a + " loaded [" + n.startSN + "," + n.endSN + "]" + (n.lastPartSn ? "[part-" + n.lastPartSn + "-" + n.lastPartIndex + "]" : "") + ",duration:" + n.totalduration);
                        var s = i[a], o = 0;
                        if (n.live || null != (r = s.details) && r.live) {
                            this.checkLiveUpdate(n);
                            var l, u = this.mainDetails;
                            if (n.deltaUpdateFailed || !u) return;
                            !s.details && n.hasProgramDateTime && u.hasProgramDateTime ? (ei(n, u), o = n.fragments[0].start) : o = this.alignPlaylists(n, s.details, null == (l = this.levelLastLoaded) ? void 0 : l.details)
                        }
                        s.details = n, this.levelLastLoaded = s, this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(s.details, o), this.state !== pi || this.waitForCdnTuneIn(n) || (this.state = fi), this.tick()
                    } else this.warn("Audio tracks were reset while loading level " + a)
                } else this.cachedTrackLoadedData = e
            }, r._handleFragmentLoadProgress = function (t) {
                var e, r = t.frag, i = t.part, n = t.payload, a = this.config, s = this.trackId, o = this.levels;
                if (o) {
                    var l = o[s];
                    if (l) {
                        var u = l.details;
                        if (!u) return this.warn("Audio track details undefined on fragment load progress"), void this.removeUnbufferedFrags(r.start);
                        var h = a.defaultAudioCodec || l.audioCodec || "mp4a.40.2", d = this.transmuxer;
                        d || (d = this.transmuxer = new Bn(this.hls, we, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                        var c = this.initPTS[r.cc], f = null == (e = r.initSegment) ? void 0 : e.data;
                        if (void 0 !== c) {
                            var g = i ? i.index : -1, v = -1 !== g,
                                m = new Qr(r.level, r.sn, r.stats.chunkCount, n.byteLength, g, v);
                            d.push(n, f, h, "", r, i, u.totalduration, !1, m, c)
                        } else this.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + u.startSN + " ," + u.endSN + "],track " + s), (this.waitingData = this.waitingData || {
                            frag: r,
                            part: i,
                            cache: new ki,
                            complete: !1
                        }).cache.push(new Uint8Array(n)), this.waitingVideoCC = this.videoTrackCC, this.state = Li
                    } else this.warn("Audio track is undefined on fragment load progress")
                } else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
            }, r._handleFragmentLoadComplete = function (e) {
                this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
            }, r.onBufferReset = function () {
                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
            }, r.onBufferCreated = function (t, e) {
                var r = e.tracks.audio;
                r && (this.mediaBuffer = r.buffer || null), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer || null)
            }, r.onFragBuffered = function (t, e) {
                var r = e.frag, n = e.part;
                if (r.type === we) if (this.fragContextChanged(r)) this.warn("Fragment " + r.sn + (n ? " p: " + n.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + (this.switchingTrack ? this.switchingTrack.name : "false")); else {
                    if ("initSegment" !== r.sn) {
                        this.fragPrevious = r;
                        var a = this.switchingTrack;
                        a && (this.bufferedTrack = a, this.switchingTrack = null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, i({}, a)))
                    }
                    this.fragBufferedComplete(r, n)
                } else if (!this.loadedmetadata && r.type === Ie) {
                    var s = this.videoBuffer || this.media;
                    s && zr.getBuffered(s).length && (this.loadedmetadata = !0)
                }
            }, r.onError = function (e, r) {
                var i;
                if (r.fatal) this.state = Si; else switch (r.details) {
                    case A.FRAG_GAP:
                    case A.FRAG_PARSING_ERROR:
                    case A.FRAG_DECRYPT_ERROR:
                    case A.FRAG_LOAD_ERROR:
                    case A.FRAG_LOAD_TIMEOUT:
                    case A.KEY_LOAD_ERROR:
                    case A.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(we, r);
                        break;
                    case A.AUDIO_TRACK_LOAD_ERROR:
                    case A.AUDIO_TRACK_LOAD_TIMEOUT:
                    case A.LEVEL_PARSING_ERROR:
                        r.levelRetry || this.state !== pi || (null == (i = r.context) ? void 0 : i.type) !== be || (this.state = fi);
                        break;
                    case A.BUFFER_APPEND_ERROR:
                    case A.BUFFER_FULL_ERROR:
                        if (!r.parent || "audio" !== r.parent) return;
                        if (r.details === A.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                        this.reduceLengthAndFlushBuffer(r) && (this.bufferedTrack = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"));
                        break;
                    case A.INTERNAL_EXCEPTION:
                        this.recoverWorkerError(r)
                }
            }, r.onBufferFlushing = function (t, e) {
                e.type !== N && (this.flushing = !0)
            }, r.onBufferFlushed = function (t, e) {
                var r = e.type;
                if (r !== N) {
                    this.flushing = !1, this.bufferFlushed = !0, this.state === Ti && (this.state = fi);
                    var i = this.mediaBuffer || this.media;
                    i && (this.afterBufferFlushed(i, r, we), this.tick())
                }
            }, r._handleTransmuxComplete = function (t) {
                var e, r = "audio", i = this.hls, n = t.remuxResult, a = t.chunkMeta, s = this.getCurrentContext(a);
                if (s) {
                    var l = s.frag, u = s.part, h = s.level, d = h.details, c = n.audio, f = n.text, g = n.id3,
                        v = n.initSegment;
                    if (!this.fragContextChanged(l) && d) {
                        if (this.state = yi, this.switchingTrack && c && this.completeAudioSwitch(this.switchingTrack), null != v && v.tracks) {
                            var m = l.initSegment || l;
                            this._bufferInitSegment(h, v.tracks, m, a), i.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
                                frag: m,
                                id: r,
                                tracks: v.tracks
                            })
                        }
                        if (c) {
                            var p = c.startPTS, y = c.endPTS, E = c.startDTS, T = c.endDTS;
                            u && (u.elementaryStreams[O] = {
                                startPTS: p,
                                endPTS: y,
                                startDTS: E,
                                endDTS: T
                            }), l.setElementaryStreamInfo(O, p, y, E, T), this.bufferFragmentData(c, l, u, a)
                        }
                        if (null != g && null != (e = g.samples) && e.length) {
                            var L = o({id: r, frag: l, details: d}, g);
                            i.trigger(S.FRAG_PARSING_METADATA, L)
                        }
                        if (f) {
                            var A = o({id: r, frag: l, details: d}, f);
                            i.trigger(S.FRAG_PARSING_USERDATA, A)
                        }
                    } else this.fragmentTracker.removeFragment(l)
                } else this.resetWhenMissingContext(a)
            }, r._bufferInitSegment = function (t, e, r, i) {
                if (this.state === yi) {
                    e.video && delete e.video;
                    var n = e.audio;
                    if (n) {
                        n.id = "audio";
                        var a = t.audioCodec;
                        this.log("Init audio buffer, container:" + n.container + ", codecs[level/parsed]=[" + a + "/" + n.codec + "]"), a && 1 === a.split(",").length && (n.levelCodec = a), this.hls.trigger(S.BUFFER_CODECS, e);
                        var s = n.initSegment;
                        if (null != s && s.byteLength) {
                            var o = {type: "audio", frag: r, part: null, chunkMeta: i, parent: r.type, data: s};
                            this.hls.trigger(S.BUFFER_APPENDING, o)
                        }
                        this.tickImmediate()
                    }
                }
            }, r.loadFragment = function (e, r, i) {
                var n, a = this.fragmentTracker.getState(e);
                if (this.fragCurrent = e, this.switchingTrack || a === Kr || a === Vr) if ("initSegment" === e.sn) this._loadInitSegment(e, r); else if (null != (n = r.details) && n.live && !this.initPTS[e.cc]) {
                    this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = Li;
                    var s = this.mainDetails;
                    s && s.fragments[0].start !== r.details.fragments[0].start && ei(r.details, s)
                } else this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i); else this.clearTrackerIfNeeded(e)
            }, r.flushAudioIfNeeded = function (e) {
                var r = this.media, i = this.bufferedTrack, n = null == i ? void 0 : i.attrs, a = e.attrs;
                r && n && (n.CHANNELS !== a.CHANNELS || i.name !== e.name || i.lang !== e.lang) && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null)
            }, r.completeAudioSwitch = function (t) {
                var e = this.hls;
                this.flushAudioIfNeeded(t), this.bufferedTrack = t, this.switchingTrack = null, e.trigger(S.AUDIO_TRACK_SWITCHED, i({}, t))
            }, e
        }(Ri), Yn = function (t) {
            function e(e) {
                var r;
                return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [], r.groupIds = null, r.tracksInGroup = [], r.trackId = -1, r.currentTrack = null, r.selectDefaultTrack = !0, r.registerListeners(), r
            }

            l(e, t);
            var r = e.prototype;
            return r.registerListeners = function () {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.LEVEL_LOADING, this.onLevelLoading, this), t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(S.ERROR, this.onError, this)
            }, r.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.LEVEL_LOADING, this.onLevelLoading, this), t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(S.ERROR, this.onError, this)
            }, r.destroy = function () {
                this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, t.prototype.destroy.call(this)
            }, r.onManifestLoading = function () {
                this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0
            }, r.onManifestParsed = function (t, e) {
                this.tracks = e.audioTracks || []
            }, r.onAudioTrackLoaded = function (t, e) {
                var r = e.id, i = e.groupId, n = e.details, a = this.tracksInGroup[r];
                if (a && a.groupId === i) {
                    var s = a.details;
                    a.details = e.details, this.log("Audio track " + r + ' "' + a.name + '" lang:' + a.lang + " group:" + i + " loaded [" + n.startSN + "-" + n.endSN + "]"), r === this.trackId && this.playlistLoaded(r, e, s)
                } else this.warn("Audio track with id:" + r + " and group:" + i + " not found in active group " + (null == a ? void 0 : a.groupId))
            }, r.onLevelLoading = function (t, e) {
                this.switchLevel(e.level)
            }, r.onLevelSwitching = function (t, e) {
                this.switchLevel(e.level)
            }, r.switchLevel = function (t) {
                var e = this.hls.levels[t];
                if (e) {
                    var r = e.audioGroups || null, i = this.groupIds, n = this.currentTrack;
                    if (!r || (null == i ? void 0 : i.length) !== (null == r ? void 0 : r.length) || null != r && r.some((function (t) {
                        return -1 === (null == i ? void 0 : i.indexOf(t))
                    }))) {
                        this.groupIds = r, this.trackId = -1, this.currentTrack = null;
                        var a = this.tracks.filter((function (t) {
                            return !r || -1 !== r.indexOf(t.groupId)
                        }));
                        if (a.length) this.selectDefaultTrack && !a.some((function (t) {
                            return t.default
                        })) && (this.selectDefaultTrack = !1), a.forEach((function (t, e) {
                            t.id = e
                        })); else if (!n && !this.tracksInGroup.length) return;
                        this.tracksInGroup = a;
                        var s = this.hls.config.audioPreference;
                        if (!n && s) {
                            var o = Mr(s, a, Nr);
                            if (o > -1) n = a[o]; else {
                                var l = Mr(s, this.tracks);
                                n = this.tracks[l]
                            }
                        }
                        var u = this.findTrackId(n);
                        -1 === u && n && (u = this.findTrackId(null));
                        var h = {audioTracks: a};
                        this.log("Updating audio tracks, " + a.length + " track(s) found in group(s): " + (null == r ? void 0 : r.join(","))), this.hls.trigger(S.AUDIO_TRACKS_UPDATED, h);
                        var d = this.trackId;
                        if (-1 !== u && -1 === d) this.setAudioTrack(u); else if (a.length && -1 === d) {
                            var c,
                                f = new Error("No audio track selected for current audio group-ID(s): " + (null == (c = this.groupIds) ? void 0 : c.join(",")) + " track count: " + a.length);
                            this.warn(f.message), this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: A.AUDIO_TRACK_LOAD_ERROR,
                                fatal: !0,
                                error: f
                            })
                        }
                    } else this.shouldReloadPlaylist(n) && this.setAudioTrack(this.trackId)
                }
            }, r.onError = function (t, e) {
                !e.fatal && e.context && (e.context.type !== be || e.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(e.context.groupId) || (this.requestScheduled = -1, this.checkRetry(e)))
            }, r.setAudioOption = function (t) {
                var e = this.hls;
                if (e.config.audioPreference = t, t) {
                    var r = this.allAudioTracks;
                    if (this.selectDefaultTrack = !1, r.length) {
                        var i = this.currentTrack;
                        if (i && Or(t, i, Nr)) return i;
                        var n = Mr(t, this.tracksInGroup, Nr);
                        if (n > -1) {
                            var a = this.tracksInGroup[n];
                            return this.setAudioTrack(n), a
                        }
                        if (i) {
                            var s = e.loadLevel;
                            -1 === s && (s = e.firstAutoLevel);
                            var o = function (t, e, r, i, n) {
                                var a = e[i], s = e.reduce((function (t, e, r) {
                                    var i = e.uri;
                                    return (t[i] || (t[i] = [])).push(r), t
                                }), {})[a.uri];
                                s.length > 1 && (i = Math.max.apply(Math, s));
                                var o = a.videoRange, l = a.frameRate, u = a.codecSet.substring(0, 4),
                                    h = Ur(e, i, (function (e) {
                                        if (e.videoRange !== o || e.frameRate !== l || e.codecSet.substring(0, 4) !== u) return !1;
                                        var i = e.audioGroups, a = r.filter((function (t) {
                                            return !i || -1 !== i.indexOf(t.groupId)
                                        }));
                                        return Mr(t, a, n) > -1
                                    }));
                                return h > -1 ? h : Ur(e, i, (function (e) {
                                    var i = e.audioGroups, a = r.filter((function (t) {
                                        return !i || -1 !== i.indexOf(t.groupId)
                                    }));
                                    return Mr(t, a, n) > -1
                                }))
                            }(t, e.levels, r, s, Nr);
                            if (-1 === o) return null;
                            e.nextLoadLevel = o
                        }
                        if (t.channels || t.audioCodec) {
                            var l = Mr(t, r);
                            if (l > -1) return r[l]
                        }
                    }
                }
                return null
            }, r.setAudioTrack = function (t) {
                var e = this.tracksInGroup;
                if (t < 0 || t >= e.length) this.warn("Invalid audio track id: " + t); else {
                    this.clearTimer(), this.selectDefaultTrack = !1;
                    var r = this.currentTrack, n = e[t], a = n.details && !n.details.live;
                    if (!(t === this.trackId && n === r && a || (this.log("Switching to audio-track " + t + ' "' + n.name + '" lang:' + n.lang + " group:" + n.groupId + " channels:" + n.channels), this.trackId = t, this.currentTrack = n, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, i({}, n)), a))) {
                        var s = this.switchParams(n.url, null == r ? void 0 : r.details);
                        this.loadPlaylist(s)
                    }
                }
            }, r.findTrackId = function (t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ((!this.selectDefaultTrack || i.default) && (!t || Or(t, i, Nr))) return r
                }
                if (t) {
                    for (var n = t.name, a = t.lang, s = t.assocLang, o = t.characteristics, l = t.audioCodec, u = t.channels, h = 0; h < e.length; h++) if (Or({
                        name: n,
                        lang: a,
                        assocLang: s,
                        characteristics: o,
                        audioCodec: l,
                        channels: u
                    }, e[h], Nr)) return h;
                    for (var d = 0; d < e.length; d++) {
                        var c = e[d];
                        if (Kn(t.attrs, c.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return d
                    }
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        if (Kn(t.attrs, g.attrs, ["LANGUAGE"])) return f
                    }
                }
                return -1
            }, r.loadPlaylist = function (e) {
                var r = this.currentTrack;
                if (this.shouldLoadPlaylist(r) && r) {
                    t.prototype.loadPlaylist.call(this);
                    var i = r.id, n = r.groupId, a = r.url;
                    if (e) try {
                        a = e.addDirectives(a)
                    } catch (t) {
                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                    }
                    this.log("loading audio-track playlist " + i + ' "' + r.name + '" lang:' + r.lang + " group:" + n), this.clearTimer(), this.hls.trigger(S.AUDIO_TRACK_LOADING, {
                        url: a,
                        id: i,
                        groupId: n,
                        deliveryDirectives: e || null
                    })
                }
            }, s(e, [{
                key: "allAudioTracks", get: function () {
                    return this.tracks
                }
            }, {
                key: "audioTracks", get: function () {
                    return this.tracksInGroup
                }
            }, {
                key: "audioTrack", get: function () {
                    return this.trackId
                }, set: function (t) {
                    this.selectDefaultTrack = !1, this.setAudioTrack(t)
                }
            }]), e
        }(Dr), Wn = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e, r, i, "[subtitle-stream-controller]", Ce) || this).currentTrackId = -1, n.tracksBuffered = [], n.mainDetails = null, n._registerListeners(), n
            }

            l(e, t);
            var r = e.prototype;
            return r.onHandlerDestroying = function () {
                this._unregisterListeners(), t.prototype.onHandlerDestroying.call(this), this.mainDetails = null
            }, r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.ERROR, this.onError, this), t.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.ERROR, this.onError, this), t.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r.startLoad = function (t) {
                this.stopLoad(), this.state = fi, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
            }, r.onManifestLoading = function () {
                this.mainDetails = null, this.fragmentTracker.removeAllFragments()
            }, r.onMediaDetaching = function () {
                this.tracksBuffered = [], t.prototype.onMediaDetaching.call(this)
            }, r.onLevelLoaded = function (t, e) {
                this.mainDetails = e.details
            }, r.onSubtitleFragProcessed = function (t, e) {
                var r = e.frag, i = e.success;
                if (this.fragPrevious = r, this.state = fi, i) {
                    var n = this.tracksBuffered[this.currentTrackId];
                    if (n) {
                        for (var a, s = r.start, o = 0; o < n.length; o++) if (s >= n[o].start && s <= n[o].end) {
                            a = n[o];
                            break
                        }
                        var l = r.start + r.duration;
                        a ? a.end = l : (a = {
                            start: s,
                            end: l
                        }, n.push(a)), this.fragmentTracker.fragBuffered(r), this.fragBufferedComplete(r, null)
                    }
                }
            }, r.onBufferFlushing = function (t, e) {
                var r = e.startOffset, i = e.endOffset;
                if (0 === r && i !== Number.POSITIVE_INFINITY) {
                    var n = i - 1;
                    if (n <= 0) return;
                    e.endOffsetSubtitles = Math.max(0, n), this.tracksBuffered.forEach((function (t) {
                        for (var e = 0; e < t.length;) if (t[e].end <= n) t.shift(); else {
                            if (!(t[e].start < n)) break;
                            t[e].start = n, e++
                        }
                    })), this.fragmentTracker.removeFragmentsInRange(r, n, Ce)
                }
            }, r.onFragBuffered = function (t, e) {
                var r;
                this.loadedmetadata || e.frag.type !== Ie || null != (r = this.media) && r.buffered.length && (this.loadedmetadata = !0)
            }, r.onError = function (t, e) {
                var r = e.frag;
                (null == r ? void 0 : r.type) === Ce && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== ci && (this.state = fi))
            }, r.onSubtitleTracksUpdated = function (t, e) {
                var r = this, i = e.subtitleTracks;
                this.levels && !Gn(this.levels, i) ? (this.tracksBuffered = [], this.levels = i.map((function (t) {
                    var e = new tr(t);
                    return r.tracksBuffered[e.id] = [], e
                })), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, Ce), this.fragPrevious = null, this.mediaBuffer = null) : this.levels = i.map((function (t) {
                    return new tr(t)
                }))
            }, r.onSubtitleTrackSwitch = function (t, e) {
                var r;
                if (this.currentTrackId = e.id, null != (r = this.levels) && r.length && -1 !== this.currentTrackId) {
                    var i = this.levels[this.currentTrackId];
                    null != i && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.setInterval(500)
                } else this.clearInterval()
            }, r.onSubtitleTrackLoaded = function (t, e) {
                var r, i = this.currentTrackId, n = this.levels, a = e.details, s = e.id;
                if (n) {
                    var o = n[i];
                    if (!(s >= n.length || s !== i) && o) {
                        this.log("Subtitle track " + s + " loaded [" + a.startSN + "," + a.endSN + "]" + (a.lastPartSn ? "[part-" + a.lastPartSn + "-" + a.lastPartIndex + "]" : "") + ",duration:" + a.totalduration), this.mediaBuffer = this.mediaBufferTimeRanges;
                        var l = 0;
                        if (a.live || null != (r = o.details) && r.live) {
                            var u = this.mainDetails;
                            if (a.deltaUpdateFailed || !u) return;
                            var h, d = u.fragments[0];
                            o.details ? 0 === (l = this.alignPlaylists(a, o.details, null == (h = this.levelLastLoaded) ? void 0 : h.details)) && d && sr(a, l = d.start) : a.hasProgramDateTime && u.hasProgramDateTime ? (ei(a, u), l = a.fragments[0].start) : d && sr(a, l = d.start)
                        }
                        o.details = a, this.levelLastLoaded = o, this.startFragRequested || !this.mainDetails && a.live || this.setStartPosition(o.details, l), this.tick(), a.live && !this.fragCurrent && this.media && this.state === fi && (mr(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0))
                    }
                } else this.warn("Subtitle tracks were reset while loading level " + s)
            }, r._handleFragmentLoadComplete = function (t) {
                var e = this, r = t.frag, i = t.payload, n = r.decryptdata, a = this.hls;
                if (!this.fragContextChanged(r) && i && i.byteLength > 0 && null != n && n.key && n.iv && "AES-128" === n.method) {
                    var s = performance.now();
                    this.decrypter.decrypt(new Uint8Array(i), n.key.buffer, n.iv.buffer).catch((function (t) {
                        throw a.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: A.FRAG_DECRYPT_ERROR,
                            fatal: !1,
                            error: t,
                            reason: t.message,
                            frag: r
                        }), t
                    })).then((function (t) {
                        var e = performance.now();
                        a.trigger(S.FRAG_DECRYPTED, {frag: r, payload: t, stats: {tstart: s, tdecrypt: e}})
                    })).catch((function (t) {
                        e.warn(t.name + ": " + t.message), e.state = fi
                    }))
                }
            }, r.doTick = function () {
                if (this.media) {
                    if (this.state === fi) {
                        var t = this.currentTrackId, e = this.levels, r = null == e ? void 0 : e[t];
                        if (!r || !e.length || !r.details) return;
                        var i = this.config, n = this.getLoadPosition(),
                            a = zr.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], n, i.maxBufferHole),
                            s = a.end, o = a.len, l = this.getFwdBufferInfo(this.media, Ie), u = r.details;
                        if (o > this.getMaxBufferLength(null == l ? void 0 : l.len) + u.levelTargetDuration) return;
                        var h = u.fragments, d = h.length, c = u.edge, f = null, g = this.fragPrevious;
                        if (s < c) {
                            var v = i.maxFragLookUpTolerance, m = s > c - v ? 0 : v;
                            !(f = mr(g, h, Math.max(h[0].start, s), m)) && g && g.start < h[0].start && (f = h[0])
                        } else f = h[d - 1];
                        if (!f) return;
                        if ("initSegment" !== (f = this.mapToInitFragWhenRequired(f)).sn) {
                            var p = h[f.sn - u.startSN - 1];
                            p && p.cc === f.cc && this.fragmentTracker.getState(p) === Kr && (f = p)
                        }
                        this.fragmentTracker.getState(f) === Kr && this.loadFragment(f, r, s)
                    }
                } else this.state = fi
            }, r.getMaxBufferLength = function (e) {
                var r = t.prototype.getMaxBufferLength.call(this);
                return e ? Math.max(r, e) : r
            }, r.loadFragment = function (e, r, i) {
                this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e, r) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i))
            }, s(e, [{
                key: "mediaBufferTimeRanges", get: function () {
                    return new jn(this.tracksBuffered[this.currentTrackId] || [])
                }
            }]), e
        }(Ri), jn = function (t) {
            this.buffered = void 0;
            var e = function (e, r, i) {
                if ((r >>>= 0) > i - 1) throw new DOMException("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + r + ") is greater than the maximum bound (" + i + ")");
                return t[r][e]
            };
            this.buffered = {
                get length() {
                    return t.length
                }, end: function (r) {
                    return e("end", r, t.length)
                }, start: function (r) {
                    return e("start", r, t.length)
                }
            }
        }, qn = function (t) {
            function e(e) {
                var r;
                return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupIds = null, r.tracksInGroup = [], r.trackId = -1, r.currentTrack = null, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.asyncPollTrackChange = function () {
                    return r.pollTrackChange(0)
                }, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r._subtitleDisplay = !0, r.onTextTracksChanged = function () {
                    if (r.useTextTrackPolling || self.clearInterval(r.subtitlePollingInterval), r.media && r.hls.config.renderTextTracksNatively) {
                        for (var t = null, e = Ue(r.media.textTracks), i = 0; i < e.length; i++) if ("hidden" === e[i].mode) t = e[i]; else if ("showing" === e[i].mode) {
                            t = e[i];
                            break
                        }
                        var n = r.findTrackForTextTrack(t);
                        r.subtitleTrack !== n && r.setSubtitleTrack(n)
                    }
                }, r.registerListeners(), r
            }

            l(e, t);
            var r = e.prototype;
            return r.destroy = function () {
                this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, t.prototype.destroy.call(this)
            }, r.registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.LEVEL_LOADING, this.onLevelLoading, this), t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(S.ERROR, this.onError, this)
            }, r.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.LEVEL_LOADING, this.onLevelLoading, this), t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(S.ERROR, this.onError, this)
            }, r.onMediaAttached = function (t, e) {
                this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
            }, r.pollTrackChange = function (t) {
                self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, t)
            }, r.onMediaDetaching = function () {
                this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), Ue(this.media.textTracks).forEach((function (t) {
                    Oe(t)
                })), this.subtitleTrack = -1, this.media = null)
            }, r.onManifestLoading = function () {
                this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0
            }, r.onManifestParsed = function (t, e) {
                this.tracks = e.subtitleTracks
            }, r.onSubtitleTrackLoaded = function (t, e) {
                var r = e.id, i = e.groupId, n = e.details, a = this.tracksInGroup[r];
                if (a && a.groupId === i) {
                    var s = a.details;
                    a.details = e.details, this.log("Subtitle track " + r + ' "' + a.name + '" lang:' + a.lang + " group:" + i + " loaded [" + n.startSN + "-" + n.endSN + "]"), r === this.trackId && this.playlistLoaded(r, e, s)
                } else this.warn("Subtitle track with id:" + r + " and group:" + i + " not found in active group " + (null == a ? void 0 : a.groupId))
            }, r.onLevelLoading = function (t, e) {
                this.switchLevel(e.level)
            }, r.onLevelSwitching = function (t, e) {
                this.switchLevel(e.level)
            }, r.switchLevel = function (t) {
                var e = this.hls.levels[t];
                if (e) {
                    var r = e.subtitleGroups || null, i = this.groupIds, n = this.currentTrack;
                    if (!r || (null == i ? void 0 : i.length) !== (null == r ? void 0 : r.length) || null != r && r.some((function (t) {
                        return -1 === (null == i ? void 0 : i.indexOf(t))
                    }))) {
                        this.groupIds = r, this.trackId = -1, this.currentTrack = null;
                        var a = this.tracks.filter((function (t) {
                            return !r || -1 !== r.indexOf(t.groupId)
                        }));
                        if (a.length) this.selectDefaultTrack && !a.some((function (t) {
                            return t.default
                        })) && (this.selectDefaultTrack = !1), a.forEach((function (t, e) {
                            t.id = e
                        })); else if (!n && !this.tracksInGroup.length) return;
                        this.tracksInGroup = a;
                        var s = this.hls.config.subtitlePreference;
                        if (!n && s) {
                            this.selectDefaultTrack = !1;
                            var o = Mr(s, a);
                            if (o > -1) n = a[o]; else {
                                var l = Mr(s, this.tracks);
                                n = this.tracks[l]
                            }
                        }
                        var u = this.findTrackId(n);
                        -1 === u && n && (u = this.findTrackId(null));
                        var h = {subtitleTracks: a};
                        this.log("Updating subtitle tracks, " + a.length + ' track(s) found in "' + (null == r ? void 0 : r.join(",")) + '" group-id'), this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED, h), -1 !== u && -1 === this.trackId && this.setSubtitleTrack(u)
                    } else this.shouldReloadPlaylist(n) && this.setSubtitleTrack(this.trackId)
                }
            }, r.findTrackId = function (t) {
                for (var e = this.tracksInGroup, r = this.selectDefaultTrack, i = 0; i < e.length; i++) {
                    var n = e[i];
                    if ((!r || n.default) && (r || t) && (!t || Or(n, t))) return i
                }
                if (t) {
                    for (var a = 0; a < e.length; a++) {
                        var s = e[a];
                        if (Kn(t.attrs, s.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"])) return a
                    }
                    for (var o = 0; o < e.length; o++) {
                        var l = e[o];
                        if (Kn(t.attrs, l.attrs, ["LANGUAGE"])) return o
                    }
                }
                return -1
            }, r.findTrackForTextTrack = function (t) {
                if (t) for (var e = this.tracksInGroup, r = 0; r < e.length; r++) if (Hn(e[r], t)) return r;
                return -1
            }, r.onError = function (t, e) {
                !e.fatal && e.context && (e.context.type !== De || e.context.id !== this.trackId || this.groupIds && -1 === this.groupIds.indexOf(e.context.groupId) || this.checkRetry(e))
            }, r.setSubtitleOption = function (t) {
                if (this.hls.config.subtitlePreference = t, t) {
                    var e = this.allSubtitleTracks;
                    if (this.selectDefaultTrack = !1, e.length) {
                        var r = this.currentTrack;
                        if (r && Or(t, r)) return r;
                        var i = Mr(t, this.tracksInGroup);
                        if (i > -1) {
                            var n = this.tracksInGroup[i];
                            return this.setSubtitleTrack(i), n
                        }
                        if (r) return null;
                        var a = Mr(t, e);
                        if (a > -1) return e[a]
                    }
                }
                return null
            }, r.loadPlaylist = function (e) {
                t.prototype.loadPlaylist.call(this);
                var r = this.currentTrack;
                if (this.shouldLoadPlaylist(r) && r) {
                    var i = r.id, n = r.groupId, a = r.url;
                    if (e) try {
                        a = e.addDirectives(a)
                    } catch (t) {
                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                    }
                    this.log("Loading subtitle playlist for id " + i), this.hls.trigger(S.SUBTITLE_TRACK_LOADING, {
                        url: a,
                        id: i,
                        groupId: n,
                        deliveryDirectives: e || null
                    })
                }
            }, r.toggleTrackModes = function () {
                var t = this.media;
                if (t) {
                    var e, r = Ue(t.textTracks), i = this.currentTrack;
                    if (i && ((e = r.filter((function (t) {
                        return Hn(i, t)
                    }))[0]) || this.warn('Unable to find subtitle TextTrack with name "' + i.name + '" and language "' + i.lang + '"')), [].slice.call(r).forEach((function (t) {
                        "disabled" !== t.mode && t !== e && (t.mode = "disabled")
                    })), e) {
                        var n = this.subtitleDisplay ? "showing" : "hidden";
                        e.mode !== n && (e.mode = n)
                    }
                }
            }, r.setSubtitleTrack = function (t) {
                var e = this.tracksInGroup;
                if (this.media) if (t < -1 || t >= e.length || !y(t)) this.warn("Invalid subtitle track id: " + t); else {
                    this.clearTimer(), this.selectDefaultTrack = !1;
                    var r = this.currentTrack, i = e[t] || null;
                    if (this.trackId = t, this.currentTrack = i, this.toggleTrackModes(), i) {
                        var n = !!i.details && !i.details.live;
                        if (t !== this.trackId || i !== r || !n) {
                            this.log("Switching to subtitle-track " + t + (i ? ' "' + i.name + '" lang:' + i.lang + " group:" + i.groupId : ""));
                            var a = i.id, s = i.groupId, o = void 0 === s ? "" : s, l = i.name, u = i.type, h = i.url;
                            this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {id: a, groupId: o, name: l, type: u, url: h});
                            var d = this.switchParams(i.url, null == r ? void 0 : r.details);
                            this.loadPlaylist(d)
                        }
                    } else this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {id: t})
                } else this.queuedDefaultTrack = t
            }, s(e, [{
                key: "subtitleDisplay", get: function () {
                    return this._subtitleDisplay
                }, set: function (t) {
                    this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes()
                }
            }, {
                key: "allSubtitleTracks", get: function () {
                    return this.tracks
                }
            }, {
                key: "subtitleTracks", get: function () {
                    return this.tracksInGroup
                }
            }, {
                key: "subtitleTrack", get: function () {
                    return this.trackId
                }, set: function (t) {
                    this.selectDefaultTrack = !1, this.setSubtitleTrack(t)
                }
            }]), e
        }(Dr), Xn = function () {
            function t(t) {
                this.buffers = void 0, this.queues = {video: [], audio: [], audiovideo: []}, this.buffers = t
            }

            var e = t.prototype;
            return e.append = function (t, e, r) {
                var i = this.queues[e];
                i.push(t), 1 !== i.length || r || this.executeNext(e)
            }, e.insertAbort = function (t, e) {
                this.queues[e].unshift(t), this.executeNext(e)
            }, e.appendBlocker = function (t) {
                var e, r = new Promise((function (t) {
                    e = t
                })), i = {
                    execute: e, onStart: function () {
                    }, onComplete: function () {
                    }, onError: function () {
                    }
                };
                return this.append(i, t), r
            }, e.executeNext = function (t) {
                var e = this.queues[t];
                if (e.length) {
                    var r = e[0];
                    try {
                        r.execute()
                    } catch (e) {
                        w.warn('[buffer-operation-queue]: Exception executing "' + t + '" SourceBuffer operation: ' + e), r.onError(e);
                        var i = this.buffers[t];
                        null != i && i.updating || this.shiftAndExecuteNext(t)
                    }
                }
            }, e.shiftAndExecuteNext = function (t) {
                this.queues[t].shift(), this.executeNext(t)
            }, e.current = function (t) {
                return this.queues[t][0]
            }, t
        }(), zn = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, Qn = function () {
            function t(t) {
                var e = this;
                this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
                    audio: 0,
                    video: 0,
                    audiovideo: 0
                }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = function (t) {
                    e.hls && e.hls.pauseBuffering()
                }, this._onStartStreaming = function (t) {
                    e.hls && e.hls.resumeBuffering()
                }, this._onMediaSourceOpen = function () {
                    var t = e.media, r = e.mediaSource;
                    e.log("Media source opened"), t && (t.removeEventListener("emptied", e._onMediaEmptied), e.updateMediaElementDuration(), e.hls.trigger(S.MEDIA_ATTACHED, {
                        media: t,
                        mediaSource: r
                    })), r && r.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
                }, this._onMediaSourceClose = function () {
                    e.log("Media source closed")
                }, this._onMediaSourceEnded = function () {
                    e.log("Media source ended")
                }, this._onMediaEmptied = function () {
                    var t = e.mediaSrc, r = e._objectUrl;
                    t !== r && w.error("Media element src was set while attaching MediaSource (" + r + " > " + t + ")")
                }, this.hls = t;
                var r = "[buffer-controller]";
                this.appendSource = t.config.preferManagedMediaSource, this.log = w.log.bind(w, r), this.warn = w.warn.bind(w, r), this.error = w.error.bind(w, r), this._initSourceBuffer(), this.registerListeners()
            }

            var e = t.prototype;
            return e.hasSourceTypes = function () {
                return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
            }, e.destroy = function () {
                this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null
            }, e.registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.BUFFER_RESET, this.onBufferReset, this), t.on(S.BUFFER_APPENDING, this.onBufferAppending, this), t.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t.on(S.BUFFER_EOS, this.onBufferEos, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(S.FRAG_PARSED, this.onFragParsed, this), t.on(S.FRAG_CHANGED, this.onFragChanged, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.BUFFER_RESET, this.onBufferReset, this), t.off(S.BUFFER_APPENDING, this.onBufferAppending, this), t.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t.off(S.BUFFER_EOS, this.onBufferEos, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(S.FRAG_PARSED, this.onFragParsed, this), t.off(S.FRAG_CHANGED, this.onFragChanged, this)
            }, e._initSourceBuffer = function () {
                this.sourceBuffer = {}, this.operationQueue = new Xn(this.sourceBuffer), this.listeners = {
                    audio: [],
                    video: [],
                    audiovideo: []
                }, this.appendErrors = {audio: 0, video: 0, audiovideo: 0}, this.lastMpegAudioChunk = null
            }, e.onManifestLoading = function () {
                this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null
            }, e.onManifestParsed = function (t, e) {
                var r = 2;
                (e.audio && !e.video || !e.altAudio) && (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, this.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
            }, e.onMediaAttaching = function (t, e) {
                var r = this.media = e.media, i = te(this.appendSource);
                if (r && i) {
                    var n, a = this.mediaSource = new i;
                    this.log("created media source: " + (null == (n = a.constructor) ? void 0 : n.name)), a.addEventListener("sourceopen", this._onMediaSourceOpen), a.addEventListener("sourceended", this._onMediaSourceEnded), a.addEventListener("sourceclose", this._onMediaSourceClose), a.addEventListener("startstreaming", this._onStartStreaming), a.addEventListener("endstreaming", this._onEndStreaming);
                    var s = this._objectUrl = self.URL.createObjectURL(a);
                    if (this.appendSource) try {
                        r.removeAttribute("src");
                        var o = self.ManagedMediaSource;
                        r.disableRemotePlayback = r.disableRemotePlayback || o && a instanceof o, Jn(r), function (t, e) {
                            var r = self.document.createElement("source");
                            r.type = "video/mp4", r.src = e, t.appendChild(r)
                        }(r, s), r.load()
                    } catch (t) {
                        r.src = s
                    } else r.src = s;
                    r.addEventListener("emptied", this._onMediaEmptied)
                }
            }, e.onMediaDetaching = function () {
                var t = this.media, e = this.mediaSource, r = this._objectUrl;
                if (e) {
                    if (this.log("media source detaching"), "open" === e.readyState) try {
                        e.endOfStream()
                    } catch (t) {
                        this.warn("onMediaDetaching: " + t.message + " while calling endOfStream")
                    }
                    this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), e.removeEventListener("startstreaming", this._onStartStreaming), e.removeEventListener("endstreaming", this._onEndStreaming), t && (t.removeEventListener("emptied", this._onMediaEmptied), r && self.URL.revokeObjectURL(r), this.mediaSrc === r ? (t.removeAttribute("src"), this.appendSource && Jn(t), t.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                }
                this.hls.trigger(S.MEDIA_DETACHED, void 0)
            }, e.onBufferReset = function () {
                var t = this;
                this.getSourceBufferTypes().forEach((function (e) {
                    t.resetBuffer(e)
                })), this._initSourceBuffer()
            }, e.resetBuffer = function (t) {
                var e = this.sourceBuffer[t];
                try {
                    var r;
                    e && (this.removeBufferListeners(t), this.sourceBuffer[t] = void 0, null != (r = this.mediaSource) && r.sourceBuffers.length && this.mediaSource.removeSourceBuffer(e))
                } catch (e) {
                    this.warn("onBufferReset " + t, e)
                }
            }, e.onBufferCodecs = function (t, e) {
                var r = this, i = this.getSourceBufferTypes().length, n = Object.keys(e);
                if (n.forEach((function (t) {
                    if (i) {
                        var n = r.tracks[t];
                        if (n && "function" == typeof n.buffer.changeType) {
                            var a, s = e[t], o = s.id, l = s.codec, u = s.levelCodec, h = s.container, d = s.metadata,
                                c = he(n.codec, n.levelCodec), f = null == c ? void 0 : c.replace(zn, "$1"),
                                g = he(l, u), v = null == (a = g) ? void 0 : a.replace(zn, "$1");
                            if (g && f !== v) {
                                "audio" === t.slice(0, 5) && (g = ue(g, r.hls.config.preferManagedMediaSource));
                                var m = h + ";codecs=" + g;
                                r.appendChangeType(t, m), r.log("switching codec " + c + " to " + g), r.tracks[t] = {
                                    buffer: n.buffer,
                                    codec: l,
                                    container: h,
                                    levelCodec: u,
                                    metadata: d,
                                    id: o
                                }
                            }
                        }
                    } else r.pendingTracks[t] = e[t]
                })), !i) {
                    var a = Math.max(this.bufferCodecEventsExpected - 1, 0);
                    this.bufferCodecEventsExpected !== a && (this.log(a + " bufferCodec event(s) expected " + n.join(",")), this.bufferCodecEventsExpected = a), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks()
                }
            }, e.appendChangeType = function (t, e) {
                var r = this, i = this.operationQueue, n = {
                    execute: function () {
                        var n = r.sourceBuffer[t];
                        n && (r.log("changing " + t + " sourceBuffer type to " + e), n.changeType(e)), i.shiftAndExecuteNext(t)
                    }, onStart: function () {
                    }, onComplete: function () {
                    }, onError: function (e) {
                        r.warn("Failed to change " + t + " SourceBuffer type", e)
                    }
                };
                i.append(n, t, !!this.pendingTracks[t])
            }, e.onBufferAppending = function (t, e) {
                var r = this, i = this.hls, n = this.operationQueue, a = this.tracks, s = e.data, o = e.type,
                    l = e.frag, u = e.part, h = e.chunkMeta, d = h.buffering[o], c = self.performance.now();
                d.start = c;
                var f = l.stats.buffering, g = u ? u.stats.buffering : null;
                0 === f.start && (f.start = c), g && 0 === g.start && (g.start = c);
                var v = a.audio, m = !1;
                "audio" === o && "audio/mpeg" === (null == v ? void 0 : v.container) && (m = !this.lastMpegAudioChunk || 1 === h.id || this.lastMpegAudioChunk.sn !== h.sn, this.lastMpegAudioChunk = h);
                var p = l.start, y = {
                    execute: function () {
                        if (d.executeStart = self.performance.now(), m) {
                            var t = r.sourceBuffer[o];
                            if (t) {
                                var e = p - t.timestampOffset;
                                Math.abs(e) >= .1 && (r.log("Updating audio SourceBuffer timestampOffset to " + p + " (delta: " + e + ") sn: " + l.sn + ")"), t.timestampOffset = p)
                            }
                        }
                        r.appendExecutor(s, o)
                    }, onStart: function () {
                    }, onComplete: function () {
                        var t = self.performance.now();
                        d.executeEnd = d.end = t, 0 === f.first && (f.first = t), g && 0 === g.first && (g.first = t);
                        var e = r.sourceBuffer, i = {};
                        for (var n in e) i[n] = zr.getBuffered(e[n]);
                        r.appendErrors[o] = 0, "audio" === o || "video" === o ? r.appendErrors.audiovideo = 0 : (r.appendErrors.audio = 0, r.appendErrors.video = 0), r.hls.trigger(S.BUFFER_APPENDED, {
                            type: o,
                            frag: l,
                            part: u,
                            chunkMeta: h,
                            parent: l.type,
                            timeRanges: i
                        })
                    }, onError: function (t) {
                        var e = {
                            type: L.MEDIA_ERROR,
                            parent: l.type,
                            details: A.BUFFER_APPEND_ERROR,
                            sourceBufferName: o,
                            frag: l,
                            part: u,
                            chunkMeta: h,
                            error: t,
                            err: t,
                            fatal: !1
                        };
                        if (t.code === DOMException.QUOTA_EXCEEDED_ERR) e.details = A.BUFFER_FULL_ERROR; else {
                            var n = ++r.appendErrors[o];
                            e.details = A.BUFFER_APPEND_ERROR, r.warn("Failed " + n + "/" + i.config.appendErrorMaxRetry + ' times to append segment in "' + o + '" sourceBuffer'), n >= i.config.appendErrorMaxRetry && (e.fatal = !0)
                        }
                        i.trigger(S.ERROR, e)
                    }
                };
                n.append(y, o, !!this.pendingTracks[o])
            }, e.onBufferFlushing = function (t, e) {
                var r = this, i = this.operationQueue, n = function (t) {
                    return {
                        execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset), onStart: function () {
                        }, onComplete: function () {
                            r.hls.trigger(S.BUFFER_FLUSHED, {type: t})
                        }, onError: function (e) {
                            r.warn("Failed to remove from " + t + " SourceBuffer", e)
                        }
                    }
                };
                e.type ? i.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach((function (t) {
                    i.append(n(t), t)
                }))
            }, e.onFragParsed = function (t, e) {
                var r = this, i = e.frag, n = e.part, a = [], s = n ? n.elementaryStreams : i.elementaryStreams;
                s[U] ? a.push("audiovideo") : (s[O] && a.push("audio"), s[N] && a.push("video")), 0 === a.length && this.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn), this.blockBuffers((function () {
                    var t = self.performance.now();
                    i.stats.buffering.end = t, n && (n.stats.buffering.end = t);
                    var e = n ? n.stats : i.stats;
                    r.hls.trigger(S.FRAG_BUFFERED, {frag: i, part: n, stats: e, id: i.type})
                }), a)
            }, e.onFragChanged = function (t, e) {
                this.trimBuffers()
            }, e.onBufferEos = function (t, e) {
                var r = this;
                this.getSourceBufferTypes().reduce((function (t, i) {
                    var n = r.sourceBuffer[i];
                    return !n || e.type && e.type !== i || (n.ending = !0, n.ended || (n.ended = !0, r.log(i + " sourceBuffer now EOS"))), t && !(n && !n.ended)
                }), !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers((function () {
                    r.getSourceBufferTypes().forEach((function (t) {
                        var e = r.sourceBuffer[t];
                        e && (e.ending = !1)
                    }));
                    var t = r.mediaSource;
                    t && "open" === t.readyState ? (r.log("Calling mediaSource.endOfStream()"), t.endOfStream()) : t && r.log("Could not call mediaSource.endOfStream(). mediaSource.readyState: " + t.readyState)
                })))
            }, e.onLevelUpdated = function (t, e) {
                var r = e.details;
                r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
            }, e.trimBuffers = function () {
                var t = this.hls, e = this.details, r = this.media;
                if (r && null !== e && this.getSourceBufferTypes().length) {
                    var i = t.config, n = r.currentTime, a = e.levelTargetDuration,
                        s = e.live && null !== i.liveBackBufferLength ? i.liveBackBufferLength : i.backBufferLength;
                    if (y(s) && s > 0) {
                        var o = Math.max(s, a), l = Math.floor(n / a) * a - o;
                        this.flushBackBuffer(n, a, l)
                    }
                    if (y(i.frontBufferFlushThreshold) && i.frontBufferFlushThreshold > 0) {
                        var u = Math.max(i.maxBufferLength, i.frontBufferFlushThreshold), h = Math.max(u, a),
                            d = Math.floor(n / a) * a + h;
                        this.flushFrontBuffer(n, a, d)
                    }
                }
            }, e.flushBackBuffer = function (t, e, r) {
                var i = this, n = this.details, a = this.sourceBuffer;
                this.getSourceBufferTypes().forEach((function (s) {
                    var o = a[s];
                    if (o) {
                        var l = zr.getBuffered(o);
                        if (l.length > 0 && r > l.start(0)) {
                            if (i.hls.trigger(S.BACK_BUFFER_REACHED, {bufferEnd: r}), null != n && n.live) i.hls.trigger(S.LIVE_BACK_BUFFER_REACHED, {bufferEnd: r}); else if (o.ended && l.end(l.length - 1) - t < 2 * e) return void i.log("Cannot flush " + s + " back buffer while SourceBuffer is in ended state");
                            i.hls.trigger(S.BUFFER_FLUSHING, {startOffset: 0, endOffset: r, type: s})
                        }
                    }
                }))
            }, e.flushFrontBuffer = function (t, e, r) {
                var i = this, n = this.sourceBuffer;
                this.getSourceBufferTypes().forEach((function (a) {
                    var s = n[a];
                    if (s) {
                        var o = zr.getBuffered(s), l = o.length;
                        if (l < 2) return;
                        var u = o.start(l - 1), h = o.end(l - 1);
                        if (r > u || t >= u && t <= h) return;
                        if (s.ended && t - h < 2 * e) return void i.log("Cannot flush " + a + " front buffer while SourceBuffer is in ended state");
                        i.hls.trigger(S.BUFFER_FLUSHING, {startOffset: u, endOffset: 1 / 0, type: a})
                    }
                }))
            }, e.updateMediaElementDuration = function () {
                if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                    var t = this.details, e = this.hls, r = this.media, i = this.mediaSource,
                        n = t.fragments[0].start + t.totalduration, a = r.duration, s = y(i.duration) ? i.duration : 0;
                    t.live && e.config.liveDurationInfinity ? (i.duration = 1 / 0, this.updateSeekableRange(t)) : (n > s && n > a || !y(a)) && (this.log("Updating Media Source duration to " + n.toFixed(3)), i.duration = n)
                }
            }, e.updateSeekableRange = function (t) {
                var e = this.mediaSource, r = t.fragments;
                if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                    var i = Math.max(0, r[0].start), n = Math.max(i, i + t.totalduration);
                    this.log("Media Source duration is set to " + e.duration + ". Setting seekable range to " + i + "-" + n + "."), e.setLiveSeekableRange(i, n)
                }
            }, e.checkPendingTracks = function () {
                var t = this.bufferCodecEventsExpected, e = this.operationQueue, r = this.pendingTracks,
                    i = Object.keys(r).length;
                if (i && (!t || 2 === i || "audiovideo" in r)) {
                    this.createSourceBuffers(r), this.pendingTracks = {};
                    var n = this.getSourceBufferTypes();
                    if (n.length) this.hls.trigger(S.BUFFER_CREATED, {tracks: this.tracks}), n.forEach((function (t) {
                        e.executeNext(t)
                    })); else {
                        var a = new Error("could not create source buffer for media codec(s)");
                        this.hls.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: A.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            error: a,
                            reason: a.message
                        })
                    }
                }
            }, e.createSourceBuffers = function (t) {
                var e = this, r = this.sourceBuffer, i = this.mediaSource;
                if (!i) throw Error("createSourceBuffers called when mediaSource was null");
                var n = function (n) {
                    if (!r[n]) {
                        var a = t[n];
                        if (!a) throw Error("source buffer exists for track " + n + ", however track does not");
                        var s = a.levelCodec || a.codec;
                        s && "audio" === n.slice(0, 5) && (s = ue(s, e.hls.config.preferManagedMediaSource));
                        var o = a.container + ";codecs=" + s;
                        e.log("creating sourceBuffer(" + o + ")");
                        try {
                            var l = r[n] = i.addSourceBuffer(o), u = n;
                            e.addBufferListener(u, "updatestart", e._onSBUpdateStart), e.addBufferListener(u, "updateend", e._onSBUpdateEnd), e.addBufferListener(u, "error", e._onSBUpdateError), e.addBufferListener(u, "bufferedchange", (function (t, r) {
                                var i = r.removedRanges;
                                null != i && i.length && e.hls.trigger(S.BUFFER_FLUSHED, {type: n})
                            })), e.tracks[n] = {
                                buffer: l,
                                codec: s,
                                container: a.container,
                                levelCodec: a.levelCodec,
                                metadata: a.metadata,
                                id: a.id
                            }
                        } catch (t) {
                            e.error("error while trying to add sourceBuffer: " + t.message), e.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: A.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                error: t,
                                sourceBufferName: n,
                                mimeType: o
                            })
                        }
                    }
                };
                for (var a in t) n(a)
            }, e._onSBUpdateStart = function (t) {
                this.operationQueue.current(t).onStart()
            }, e._onSBUpdateEnd = function (t) {
                var e;
                if ("closed" !== (null == (e = this.mediaSource) ? void 0 : e.readyState)) {
                    var r = this.operationQueue;
                    r.current(t).onComplete(), r.shiftAndExecuteNext(t)
                } else this.resetBuffer(t)
            }, e._onSBUpdateError = function (t, e) {
                var r,
                    i = new Error(t + " SourceBuffer error. MediaSource readyState: " + (null == (r = this.mediaSource) ? void 0 : r.readyState));
                this.error("" + i, e), this.hls.trigger(S.ERROR, {
                    type: L.MEDIA_ERROR,
                    details: A.BUFFER_APPENDING_ERROR,
                    sourceBufferName: t,
                    error: i,
                    fatal: !1
                });
                var n = this.operationQueue.current(t);
                n && n.onError(i)
            }, e.removeExecutor = function (t, e, r) {
                var i = this.media, n = this.mediaSource, a = this.operationQueue, s = this.sourceBuffer[t];
                if (!i || !n || !s) return this.warn("Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void a.shiftAndExecuteNext(t);
                var o = y(i.duration) ? i.duration : 1 / 0, l = y(n.duration) ? n.duration : 1 / 0, u = Math.max(0, e),
                    h = Math.min(r, o, l);
                h > u && (!s.ending || s.ended) ? (s.ended = !1, this.log("Removing [" + u + "," + h + "] from the " + t + " SourceBuffer"), s.remove(u, h)) : a.shiftAndExecuteNext(t)
            }, e.appendExecutor = function (t, e) {
                var r = this.sourceBuffer[e];
                if (r) r.ended = !1, r.appendBuffer(t); else if (!this.pendingTracks[e]) throw new Error("Attempting to append to the " + e + " SourceBuffer, but it does not exist")
            }, e.blockBuffers = function (t, e) {
                var r = this;
                if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return this.log("Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
                var i = this.operationQueue, n = e.map((function (t) {
                    return i.appendBlocker(t)
                }));
                Promise.all(n).then((function () {
                    t(), e.forEach((function (t) {
                        var e = r.sourceBuffer[t];
                        null != e && e.updating || i.shiftAndExecuteNext(t)
                    }))
                }))
            }, e.getSourceBufferTypes = function () {
                return Object.keys(this.sourceBuffer)
            }, e.addBufferListener = function (t, e, r) {
                var i = this.sourceBuffer[t];
                if (i) {
                    var n = r.bind(this, t);
                    this.listeners[t].push({event: e, listener: n}), i.addEventListener(e, n)
                }
            }, e.removeBufferListeners = function (t) {
                var e = this.sourceBuffer[t];
                e && this.listeners[t].forEach((function (t) {
                    e.removeEventListener(t.event, t.listener)
                }))
            }, s(t, [{
                key: "mediaSrc", get: function () {
                    var t, e = (null == (t = this.media) ? void 0 : t.firstChild) || this.media;
                    return null == e ? void 0 : e.src
                }
            }]), t
        }();

        function Jn(t) {
            var e = t.querySelectorAll("source");
            [].slice.call(e).forEach((function (e) {
                t.removeChild(e)
            }))
        }

        var $n = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }, Zn = function (t) {
                var e = t;
                return $n.hasOwnProperty(t) && (e = $n[t]), String.fromCharCode(e)
            }, ta = 15, ea = 100, ra = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14},
            ia = {17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15},
            na = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14},
            aa = {25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15},
            sa = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
            oa = function () {
                function t() {
                    this.time = null, this.verboseLevel = 0
                }

                return t.prototype.log = function (t, e) {
                    if (this.verboseLevel >= t) {
                        var r = "function" == typeof e ? e() : e;
                        w.log(this.time + " [" + t + "] " + r)
                    }
                }, t
            }(), la = function (t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                return e
            }, ua = function () {
                function t() {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }

                var e = t.prototype;
                return e.reset = function () {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }, e.setStyles = function (t) {
                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                        var i = e[r];
                        t.hasOwnProperty(i) && (this[i] = t[i])
                    }
                }, e.isDefault = function () {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, e.equals = function (t) {
                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                }, e.copy = function (t) {
                    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                }, e.toString = function () {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }, t
            }(), ha = function () {
                function t() {
                    this.uchar = " ", this.penState = new ua
                }

                var e = t.prototype;
                return e.reset = function () {
                    this.uchar = " ", this.penState.reset()
                }, e.setChar = function (t, e) {
                    this.uchar = t, this.penState.copy(e)
                }, e.setPenState = function (t) {
                    this.penState.copy(t)
                }, e.equals = function (t) {
                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                }, e.copy = function (t) {
                    this.uchar = t.uchar, this.penState.copy(t.penState)
                }, e.isEmpty = function () {
                    return " " === this.uchar && this.penState.isDefault()
                }, t
            }(), da = function () {
                function t(t) {
                    this.chars = [], this.pos = 0, this.currPenState = new ua, this.cueStartTime = null, this.logger = void 0;
                    for (var e = 0; e < ea; e++) this.chars.push(new ha);
                    this.logger = t
                }

                var e = t.prototype;
                return e.equals = function (t) {
                    for (var e = 0; e < ea; e++) if (!this.chars[e].equals(t.chars[e])) return !1;
                    return !0
                }, e.copy = function (t) {
                    for (var e = 0; e < ea; e++) this.chars[e].copy(t.chars[e])
                }, e.isEmpty = function () {
                    for (var t = !0, e = 0; e < ea; e++) if (!this.chars[e].isEmpty()) {
                        t = !1;
                        break
                    }
                    return t
                }, e.setCursor = function (t) {
                    this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > ea && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = ea)
                }, e.moveCursor = function (t) {
                    var e = this.pos + t;
                    if (t > 1) for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                    this.setCursor(e)
                }, e.backSpace = function () {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, e.insertChar = function (t) {
                    var e = this;
                    t >= 144 && this.backSpace();
                    var r = Zn(t);
                    this.pos >= ea ? this.logger.log(0, (function () {
                        return "Cannot insert " + t.toString(16) + " (" + r + ") at position " + e.pos + ". Skipping it!"
                    })) : (this.chars[this.pos].setChar(r, this.currPenState), this.moveCursor(1))
                }, e.clearFromPos = function (t) {
                    var e;
                    for (e = t; e < ea; e++) this.chars[e].reset()
                }, e.clear = function () {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, e.clearToEndOfRow = function () {
                    this.clearFromPos(this.pos)
                }, e.getTextString = function () {
                    for (var t = [], e = !0, r = 0; r < ea; r++) {
                        var i = this.chars[r].uchar;
                        " " !== i && (e = !1), t.push(i)
                    }
                    return e ? "" : t.join("")
                }, e.setPenStyles = function (t) {
                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(), ca = function () {
                function t(t) {
                    this.rows = [], this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
                    for (var e = 0; e < ta; e++) this.rows.push(new da(t));
                    this.logger = t
                }

                var e = t.prototype;
                return e.reset = function () {
                    for (var t = 0; t < ta; t++) this.rows[t].clear();
                    this.currRow = 14
                }, e.equals = function (t) {
                    for (var e = !0, r = 0; r < ta; r++) if (!this.rows[r].equals(t.rows[r])) {
                        e = !1;
                        break
                    }
                    return e
                }, e.copy = function (t) {
                    for (var e = 0; e < ta; e++) this.rows[e].copy(t.rows[e])
                }, e.isEmpty = function () {
                    for (var t = !0, e = 0; e < ta; e++) if (!this.rows[e].isEmpty()) {
                        t = !1;
                        break
                    }
                    return t
                }, e.backSpace = function () {
                    this.rows[this.currRow].backSpace()
                }, e.clearToEndOfRow = function () {
                    this.rows[this.currRow].clearToEndOfRow()
                }, e.insertChar = function (t) {
                    this.rows[this.currRow].insertChar(t)
                }, e.setPen = function (t) {
                    this.rows[this.currRow].setPenStyles(t)
                }, e.moveCursor = function (t) {
                    this.rows[this.currRow].moveCursor(t)
                }, e.setCursor = function (t) {
                    this.logger.log(2, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                }, e.setPAC = function (t) {
                    this.logger.log(2, (function () {
                        return "pacData = " + JSON.stringify(t)
                    }));
                    var e = t.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                        for (var r = 0; r < ta; r++) this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows, n = this.lastOutputScreen;
                        if (n) {
                            var a = n.rows[i].cueStartTime, s = this.logger.time;
                            if (null !== a && null !== s && a < s) for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[i + o])
                        }
                    }
                    this.currRow = e;
                    var l = this.rows[this.currRow];
                    if (null !== t.indent) {
                        var u = t.indent, h = Math.max(u - 1, 0);
                        l.setCursor(t.indent), t.color = l.chars[h].penState.foreground
                    }
                    var d = {
                        foreground: t.color,
                        underline: t.underline,
                        italics: t.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(d)
                }, e.setBkgData = function (t) {
                    this.logger.log(2, (function () {
                        return "bkgData = " + JSON.stringify(t)
                    })), this.backSpace(), this.setPen(t), this.insertChar(32)
                }, e.setRollUpRows = function (t) {
                    this.nrRollUpRows = t
                }, e.rollUp = function () {
                    var t = this;
                    if (null !== this.nrRollUpRows) {
                        this.logger.log(1, (function () {
                            return t.getDisplayText()
                        }));
                        var e = this.currRow + 1 - this.nrRollUpRows, r = this.rows.splice(e, 1)[0];
                        r.clear(), this.rows.splice(this.currRow, 0, r), this.logger.log(2, "Rolling up")
                    } else this.logger.log(3, "roll_up but nrRollUpRows not set yet")
                }, e.getDisplayText = function (t) {
                    t = t || !1;
                    for (var e = [], r = "", i = -1, n = 0; n < ta; n++) {
                        var a = this.rows[n].getTextString();
                        a && (i = n + 1, t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, e.getTextAndFormat = function () {
                    return this.rows
                }, t
            }(), fa = function () {
                function t(t, e, r) {
                    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new ca(r), this.nonDisplayedMemory = new ca(r), this.lastOutputScreen = new ca(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
                }

                var e = t.prototype;
                return e.reset = function () {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }, e.getHandler = function () {
                    return this.outputFilter
                }, e.setHandler = function (t) {
                    this.outputFilter = t
                }, e.setPAC = function (t) {
                    this.writeScreen.setPAC(t)
                }, e.setBkgData = function (t) {
                    this.writeScreen.setBkgData(t)
                }, e.setMode = function (t) {
                    t !== this.mode && (this.mode = t, this.logger.log(2, (function () {
                        return "MODE=" + t
                    })), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                }, e.insertChars = function (t) {
                    for (var e = this, r = 0; r < t.length; r++) this.writeScreen.insertChar(t[r]);
                    var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    this.logger.log(2, (function () {
                        return i + ": " + e.writeScreen.getDisplayText(!0)
                    })), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(1, (function () {
                        return "DISPLAYED: " + e.displayedMemory.getDisplayText(!0)
                    })), this.outputDataUpdate())
                }, e.ccRCL = function () {
                    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, e.ccBS = function () {
                    this.logger.log(2, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, e.ccAOF = function () {
                }, e.ccAON = function () {
                }, e.ccDER = function () {
                    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, e.ccRU = function (t) {
                    this.logger.log(2, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                }, e.ccFON = function () {
                    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({flash: !0})
                }, e.ccRDC = function () {
                    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, e.ccTR = function () {
                    this.logger.log(2, "TR"), this.setMode("MODE_TEXT")
                }, e.ccRTD = function () {
                    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT")
                }, e.ccEDM = function () {
                    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                }, e.ccCR = function () {
                    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                }, e.ccENM = function () {
                    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, e.ccEOC = function () {
                    var t = this;
                    if (this.logger.log(2, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var e = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, (function () {
                            return "DISP: " + t.displayedMemory.getDisplayText()
                        }))
                    }
                    this.outputDataUpdate(!0)
                }, e.ccTO = function (t) {
                    this.logger.log(2, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                }, e.ccMIDROW = function (t) {
                    var e = {flash: !1};
                    if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white"; else {
                        var r = Math.floor(t / 2) - 16;
                        e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                    }
                    this.logger.log(2, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                }, e.outputDataUpdate = function (t) {
                    void 0 === t && (t = !1);
                    var e = this.logger.time;
                    null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                }, e.cueSplitAtTime = function (t) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                }, t
            }(), ga = function () {
                function t(t, e, r) {
                    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = {
                        a: null,
                        b: null
                    }, this.logger = void 0;
                    var i = this.logger = new oa;
                    this.channels = [null, new fa(t, e, i), new fa(t + 1, r, i)]
                }

                var e = t.prototype;
                return e.getHandler = function (t) {
                    return this.channels[t].getHandler()
                }, e.setHandler = function (t, e) {
                    this.channels[t].setHandler(e)
                }, e.addData = function (t, e) {
                    var r, i, n, a = !1;
                    this.logger.time = t;
                    for (var s = 0; s < e.length; s += 2) if (i = 127 & e[s], n = 127 & e[s + 1], 0 !== i || 0 !== n) {
                        if (this.logger.log(3, "[" + la([e[s], e[s + 1]]) + "] -> (" + la([i, n]) + ")"), (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) {
                            var o = this.currentChannel;
                            o && o > 0 ? this.channels[o].insertChars(a) : this.logger.log(2, "No channel found yet. TEXT-MODE?")
                        }
                        r || a || this.logger.log(2, "Couldn't parse cleaned data " + la([i, n]) + " orig: " + la([e[s], e[s + 1]]))
                    }
                }, e.parseCmd = function (t, e) {
                    var r = this.cmdHistory;
                    if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
                    if (ma(t, e, r)) return va(null, null, r), this.logger.log(3, "Repeated command (" + la([t, e]) + ") is dropped"), !0;
                    var i = 20 === t || 21 === t || 23 === t ? 1 : 2, n = this.channels[i];
                    return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), va(t, e, r), this.currentChannel = i, !0
                }, e.parseMidrow = function (t, e) {
                    var r = 0;
                    if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                        if ((r = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
                        var i = this.channels[r];
                        return !!i && (i.ccMIDROW(e), this.logger.log(3, "MIDROW (" + la([t, e]) + ")"), !0)
                    }
                    return !1
                }, e.parsePAC = function (t, e) {
                    var r, i = this.cmdHistory;
                    if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
                    if (ma(t, e, i)) return va(null, null, i), !0;
                    var n = t <= 23 ? 1 : 2;
                    r = e >= 64 && e <= 95 ? 1 === n ? ra[t] : na[t] : 1 === n ? ia[t] : aa[t];
                    var a = this.channels[n];
                    return !!a && (a.setPAC(this.interpretPAC(r, e)), va(t, e, i), this.currentChannel = n, !0)
                }, e.interpretPAC = function (t, e) {
                    var r, i = {color: null, italics: !1, indent: null, underline: !1, row: t};
                    return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }, e.parseChars = function (t, e) {
                    var r, i, n = null, a = null;
                    if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), a >= 17 && a <= 19 ? (i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(2, "Special char '" + Zn(i) + "' in channel " + r), n = [i]) : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]), n) {
                        var s = la(n);
                        this.logger.log(3, "Char codes =  " + s.join(",")), va(t, e, this.cmdHistory)
                    }
                    return n
                }, e.parseBackgroundAttributes = function (t, e) {
                    var r;
                    if (!((16 === t || 24 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
                    var i = {};
                    16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = sa[r], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0));
                    var n = t <= 23 ? 1 : 2;
                    return this.channels[n].setBkgData(i), va(t, e, this.cmdHistory), !0
                }, e.reset = function () {
                    for (var t = 0; t < Object.keys(this.channels).length; t++) {
                        var e = this.channels[t];
                        e && e.reset()
                    }
                    this.cmdHistory = {a: null, b: null}
                }, e.cueSplitAtTime = function (t) {
                    for (var e = 0; e < this.channels.length; e++) {
                        var r = this.channels[e];
                        r && r.cueSplitAtTime(t)
                    }
                }, t
            }();

        function va(t, e, r) {
            r.a = t, r.b = e
        }

        function ma(t, e, r) {
            return r.a === t && r.b === e
        }

        var pa = function () {
            function t(t, e) {
                this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
            }

            var e = t.prototype;
            return e.dispatchCue = function () {
                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
            }, e.newCue = function (t, e, r) {
                (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
            }, e.reset = function () {
                this.cueRanges = [], this.startTime = null
            }, t
        }(), ya = function () {
            if (null != j && j.VTTCue) return self.VTTCue;
            var t = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];

            function r(t, e) {
                if ("string" != typeof e) return !1;
                if (!Array.isArray(t)) return !1;
                var r = e.toLowerCase();
                return !!~t.indexOf(r) && r
            }

            function i(t) {
                return r(e, t)
            }

            function n(t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                for (var n = 1; n < arguments.length; n++) {
                    var a = arguments[n];
                    for (var s in a) t[s] = a[s]
                }
                return t
            }

            function a(e, a, s) {
                var o = this, l = {enumerable: !0};
                o.hasBeenReset = !1;
                var u = "", h = !1, d = e, c = a, f = s, g = null, v = "", m = !0, p = "auto", y = "start", E = 50,
                    T = "middle", S = 50, L = "middle";
                Object.defineProperty(o, "id", n({}, l, {
                    get: function () {
                        return u
                    }, set: function (t) {
                        u = "" + t
                    }
                })), Object.defineProperty(o, "pauseOnExit", n({}, l, {
                    get: function () {
                        return h
                    }, set: function (t) {
                        h = !!t
                    }
                })), Object.defineProperty(o, "startTime", n({}, l, {
                    get: function () {
                        return d
                    }, set: function (t) {
                        if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                        d = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "endTime", n({}, l, {
                    get: function () {
                        return c
                    }, set: function (t) {
                        if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                        c = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "text", n({}, l, {
                    get: function () {
                        return f
                    }, set: function (t) {
                        f = "" + t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "region", n({}, l, {
                    get: function () {
                        return g
                    }, set: function (t) {
                        g = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "vertical", n({}, l, {
                    get: function () {
                        return v
                    }, set: function (e) {
                        var i = function (e) {
                            return r(t, e)
                        }(e);
                        if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
                        v = i, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "snapToLines", n({}, l, {
                    get: function () {
                        return m
                    }, set: function (t) {
                        m = !!t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "line", n({}, l, {
                    get: function () {
                        return p
                    }, set: function (t) {
                        if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
                        p = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "lineAlign", n({}, l, {
                    get: function () {
                        return y
                    }, set: function (t) {
                        var e = i(t);
                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                        y = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "position", n({}, l, {
                    get: function () {
                        return E
                    }, set: function (t) {
                        if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                        E = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "positionAlign", n({}, l, {
                    get: function () {
                        return T
                    }, set: function (t) {
                        var e = i(t);
                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                        T = e, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "size", n({}, l, {
                    get: function () {
                        return S
                    }, set: function (t) {
                        if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                        S = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "align", n({}, l, {
                    get: function () {
                        return L
                    }, set: function (t) {
                        var e = i(t);
                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                        L = e, this.hasBeenReset = !0
                    }
                })), o.displayState = void 0
            }

            return a.prototype.getCueAsHTML = function () {
                return self.WebVTT.convertCueToDOMTree(self, this.text)
            }, a
        }(), Ea = function () {
            function t() {
            }

            return t.prototype.decode = function (t, e) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }, t
        }();

        function Ta(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
            }

            var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
            return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
        }

        var Sa = function () {
            function t() {
                this.values = Object.create(null)
            }

            var e = t.prototype;
            return e.set = function (t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            }, e.get = function (t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            }, e.has = function (t) {
                return t in this.values
            }, e.alt = function (t, e, r) {
                for (var i = 0; i < r.length; ++i) if (e === r[i]) {
                    this.set(t, e);
                    break
                }
            }, e.integer = function (t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }, e.percent = function (t, e) {
                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                    var r = parseFloat(e);
                    if (r >= 0 && r <= 100) return this.set(t, r), !0
                }
                return !1
            }, t
        }();

        function La(t, e, r, i) {
            var n = i ? t.split(i) : [t];
            for (var a in n) if ("string" == typeof n[a]) {
                var s = n[a].split(r);
                2 === s.length && e(s[0], s[1])
            }
        }

        var Aa = new ya(0, 0, ""), Ra = "middle" === Aa.align ? "middle" : "center";

        function ka(t, e, r) {
            var i = t;

            function n() {
                var e = Ta(t);
                if (null === e) throw new Error("Malformed timestamp: " + i);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function a() {
                t = t.replace(/^\s+/, "")
            }

            if (a(), e.startTime = n(), a(), "--\x3e" !== t.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            t = t.slice(3), a(), e.endTime = n(), a(), function (t, e) {
                var i = new Sa;
                La(t, (function (t, e) {
                    var n;
                    switch (t) {
                        case"region":
                            for (var a = r.length - 1; a >= 0; a--) if (r[a].id === e) {
                                i.set(t, r[a].region);
                                break
                            }
                            break;
                        case"vertical":
                            i.alt(t, e, ["rl", "lr"]);
                            break;
                        case"line":
                            n = e.split(","), i.integer(t, n[0]), i.percent(t, n[0]) && i.set("snapToLines", !1), i.alt(t, n[0], ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", Ra, "end"]);
                            break;
                        case"position":
                            n = e.split(","), i.percent(t, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", Ra, "end", "line-left", "line-right", "auto"]);
                            break;
                        case"size":
                            i.percent(t, e);
                            break;
                        case"align":
                            i.alt(t, e, ["start", Ra, "end", "left", "right"])
                    }
                }), /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", "");
                var n = i.get("line", "auto");
                "auto" === n && -1 === Aa.line && (n = -1), e.line = n, e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", Ra);
                var a = i.get("position", "auto");
                "auto" === a && 50 === Aa.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = a
            }(t, e)
        }

        function ba(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }

        var Da = function () {
            function t() {
                this.state = "INITIAL", this.buffer = "", this.decoder = new Ea, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
            }

            var e = t.prototype;
            return e.parse = function (t) {
                var e = this;

                function r() {
                    var t = e.buffer, r = 0;
                    for (t = ba(t); r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
                    var i = t.slice(0, r);
                    return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.slice(r), i
                }

                t && (e.buffer += e.decoder.decode(t, {stream: !0}));
                try {
                    var i = "";
                    if ("INITIAL" === e.state) {
                        if (!/\r\n|\n/.test(e.buffer)) return this;
                        var n = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (null == n || !n[0]) throw new Error("Malformed WebVTT signature.");
                        e.state = "HEADER"
                    }
                    for (var a = !1; e.buffer;) {
                        if (!/\r\n|\n/.test(e.buffer)) return this;
                        switch (a ? a = !1 : i = r(), e.state) {
                            case"HEADER":
                                /:/.test(i) ? La(i, (function (t, e) {
                                }), /:/) : i || (e.state = "ID");
                                continue;
                            case"NOTE":
                                i || (e.state = "ID");
                                continue;
                            case"ID":
                                if (/^NOTE($|[ \t])/.test(i)) {
                                    e.state = "NOTE";
                                    break
                                }
                                if (!i) continue;
                                if (e.cue = new ya(0, 0, ""), e.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                    e.cue.id = i;
                                    continue
                                }
                            case"CUE":
                                if (!e.cue) {
                                    e.state = "BADCUE";
                                    continue
                                }
                                try {
                                    ka(i, e.cue, e.regionList)
                                } catch (t) {
                                    e.cue = null, e.state = "BADCUE";
                                    continue
                                }
                                e.state = "CUETEXT";
                                continue;
                            case"CUETEXT":
                                var s = -1 !== i.indexOf("--\x3e");
                                if (!i || s && (a = !0)) {
                                    e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                    continue
                                }
                                if (null === e.cue) continue;
                                e.cue.text && (e.cue.text += "\n"), e.cue.text += i;
                                continue;
                            case"BADCUE":
                                i || (e.state = "ID")
                        }
                    }
                } catch (t) {
                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            }, e.flush = function () {
                var t = this;
                try {
                    if ((t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state || "BADWEBVTT" === t.state) throw new Error("Malformed WebVTT signature.")
                } catch (e) {
                    t.onparsingerror && t.onparsingerror(e)
                }
                return t.onflush && t.onflush(), this
            }, t
        }(), Ia = /\r\n|\n\r|\n|\r/g, wa = function (t, e, r) {
            return void 0 === r && (r = 0), t.slice(r, r + e.length) === e
        }, Ca = function (t) {
            for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
            return (e >>> 0).toString()
        };

        function _a(t, e, r) {
            return Ca(t.toString()) + Ca(e.toString()) + Ca(r)
        }

        function xa(t, e, r, i, n, a, s) {
            var o, l, u, h = new Da, d = Tt(new Uint8Array(t)).trim().replace(Ia, "\n").split("\n"), c = [],
                f = e ? (o = e.baseTime, void 0 === (l = e.timescale) && (l = 1), mn(o, vn, 1 / l)) : 0,
                g = "00:00.000", v = 0, m = 0, p = !0;
            h.oncue = function (t) {
                var a = r[i], s = r.ccOffset, o = (v - f) / 9e4;
                if (null != a && a.new && (void 0 !== m ? s = r.ccOffset = a.start : function (t, e, r) {
                    var i = t[e], n = t[i.prevCC];
                    if (!n || !n.new && i.new) return t.ccOffset = t.presentationOffset = i.start, void (i.new = !1);
                    for (; null != (a = n) && a.new;) {
                        var a;
                        t.ccOffset += i.start - n.start, i.new = !1, n = t[(i = n).prevCC]
                    }
                    t.presentationOffset = r
                }(r, i, o)), o) {
                    if (!e) return void (u = new Error("Missing initPTS for VTT MPEGTS"));
                    s = o - r.presentationOffset
                }
                var l = t.endTime - t.startTime, h = Sn(9e4 * (t.startTime + s - m), 9e4 * n) / 9e4;
                t.startTime = Math.max(h, 0), t.endTime = Math.max(h + l, 0);
                var d = t.text.trim();
                t.text = decodeURIComponent(encodeURIComponent(d)), t.id || (t.id = _a(t.startTime, t.endTime, d)), t.endTime > 0 && c.push(t)
            }, h.onparsingerror = function (t) {
                u = t
            }, h.onflush = function () {
                u ? s(u) : a(c)
            }, d.forEach((function (t) {
                if (p) {
                    if (wa(t, "X-TIMESTAMP-MAP=")) {
                        p = !1, t.slice(16).split(",").forEach((function (t) {
                            wa(t, "LOCAL:") ? g = t.slice(6) : wa(t, "MPEGTS:") && (v = parseInt(t.slice(7)))
                        }));
                        try {
                            m = function (t) {
                                var e = parseInt(t.slice(-3)), r = parseInt(t.slice(-6, -4)),
                                    i = parseInt(t.slice(-9, -7)),
                                    n = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
                                if (!(y(e) && y(r) && y(i) && y(n))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                return e += 1e3 * r, (e += 6e4 * i) + 36e5 * n
                            }(g) / 1e3
                        } catch (t) {
                            u = t
                        }
                        return
                    }
                    "" === t && (p = !1)
                }
                h.parse(t + "\n")
            })), h.flush()
        }

        var Pa = "stpp.ttml.im1t", Fa = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
            Ma = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
            Oa = {left: "start", center: "center", right: "end", start: "start", end: "end"};

        function Na(t, e, r, i) {
            var n = _t(new Uint8Array(t), ["mdat"]);
            if (0 !== n.length) {
                var a, s, l, u, h = n.map((function (t) {
                        return Tt(t)
                    })),
                    d = (a = e.baseTime, s = 1, void 0 === (l = e.timescale) && (l = 1), void 0 === u && (u = !1), mn(a, s, 1 / l, u));
                try {
                    h.forEach((function (t) {
                        return r(function (t, e) {
                            var r = (new DOMParser).parseFromString(t, "text/xml"), i = r.getElementsByTagName("tt")[0];
                            if (!i) throw new Error("Invalid ttml");
                            var n = {frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0},
                                a = Object.keys(n).reduce((function (t, e) {
                                    return t[e] = i.getAttribute("ttp:" + e) || n[e], t
                                }), {}), s = "preserve" !== i.getAttribute("xml:space"),
                                l = Ba(Ua(i, "styling", "style")), u = Ba(Ua(i, "layout", "region")),
                                h = Ua(i, "body", "[begin]");
                            return [].map.call(h, (function (t) {
                                var r = Ga(t, s);
                                if (!r || !t.hasAttribute("begin")) return null;
                                var i = Va(t.getAttribute("begin"), a), n = Va(t.getAttribute("dur"), a),
                                    h = Va(t.getAttribute("end"), a);
                                if (null === i) throw Ha(t);
                                if (null === h) {
                                    if (null === n) throw Ha(t);
                                    h = i + n
                                }
                                var d = new ya(i - e, h - e, r);
                                d.id = _a(d.startTime, d.endTime, d.text);
                                var c = function (t, e, r) {
                                    var i = "http://www.w3.org/ns/ttml#styling", n = null,
                                        a = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"],
                                        s = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
                                    return s && r.hasOwnProperty(s) && (n = r[s]), a.reduce((function (r, a) {
                                        var s = Ka(e, i, a) || Ka(t, i, a) || Ka(n, i, a);
                                        return s && (r[a] = s), r
                                    }), {})
                                }(u[t.getAttribute("region")], l[t.getAttribute("style")], l), f = c.textAlign;
                                if (f) {
                                    var g = Oa[f];
                                    g && (d.lineAlign = g), d.align = f
                                }
                                return o(d, c), d
                            })).filter((function (t) {
                                return null !== t
                            }))
                        }(t, d))
                    }))
                } catch (t) {
                    i(t)
                }
            } else i(new Error("Could not parse IMSC1 mdat"))
        }

        function Ua(t, e, r) {
            var i = t.getElementsByTagName(e)[0];
            return i ? [].slice.call(i.querySelectorAll(r)) : []
        }

        function Ba(t) {
            return t.reduce((function (t, e) {
                var r = e.getAttribute("xml:id");
                return r && (t[r] = e), t
            }), {})
        }

        function Ga(t, e) {
            return [].slice.call(t.childNodes).reduce((function (t, r, i) {
                var n;
                return "br" === r.nodeName && i ? t + "\n" : null != (n = r.childNodes) && n.length ? Ga(r, e) : e ? t + r.textContent.trim().replace(/\s+/g, " ") : t + r.textContent
            }), "")
        }

        function Ka(t, e, r) {
            return t && t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
        }

        function Ha(t) {
            return new Error("Could not parse ttml timestamp " + t)
        }

        function Va(t, e) {
            if (!t) return null;
            var r = Ta(t);
            return null === r && (Fa.test(t) ? r = function (t, e) {
                var r = Fa.exec(t), i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
            }(t, e) : Ma.test(t) && (r = function (t, e) {
                var r = Ma.exec(t), i = Number(r[1]);
                switch (r[2]) {
                    case"h":
                        return 3600 * i;
                    case"m":
                        return 60 * i;
                    case"ms":
                        return 1e3 * i;
                    case"f":
                        return i / e.frameRate;
                    case"t":
                        return i / e.tickRate
                }
                return i
            }(t, e))), r
        }

        var Ya = function () {
            function t(t) {
                this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {start: 0, prevCC: -1, new: !0}
                }, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                    textTrack1: {
                        label: this.config.captionsTextTrack1Label,
                        languageCode: this.config.captionsTextTrack1LanguageCode
                    },
                    textTrack2: {
                        label: this.config.captionsTextTrack2Label,
                        languageCode: this.config.captionsTextTrack2LanguageCode
                    },
                    textTrack3: {
                        label: this.config.captionsTextTrack3Label,
                        languageCode: this.config.captionsTextTrack3LanguageCode
                    },
                    textTrack4: {
                        label: this.config.captionsTextTrack4Label,
                        languageCode: this.config.captionsTextTrack4LanguageCode
                    }
                }, t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(S.FRAG_LOADING, this.onFragLoading, this), t.on(S.FRAG_LOADED, this.onFragLoaded, this), t.on(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }

            var e = t.prototype;
            return e.destroy = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(S.FRAG_LOADING, this.onFragLoading, this), t.off(S.FRAG_LOADED, this.onFragLoaded, this), t.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = null, this.cea608Parser1 = this.cea608Parser2 = void 0
            }, e.initCea608Parsers = function () {
                if (this.config.enableCEA708Captions && (!this.cea608Parser1 || !this.cea608Parser2)) {
                    var t = new pa(this, "textTrack1"), e = new pa(this, "textTrack2"), r = new pa(this, "textTrack3"),
                        i = new pa(this, "textTrack4");
                    this.cea608Parser1 = new ga(1, t, e), this.cea608Parser2 = new ga(3, r, i)
                }
            }, e.addCues = function (t, e, r, i, n) {
                for (var a, s, o, l, u = !1, h = n.length; h--;) {
                    var d = n[h], c = (a = d[0], s = d[1], o = e, l = r, Math.min(s, l) - Math.max(a, o));
                    if (c >= 0 && (d[0] = Math.min(d[0], e), d[1] = Math.max(d[1], r), u = !0, c / (r - e) > .5)) return
                }
                if (u || n.push([e, r]), this.config.renderTextTracksNatively) {
                    var f = this.captionsTracks[t];
                    this.Cues.newCue(f, e, r, i)
                } else {
                    var g = this.Cues.newCue(null, e, r, i);
                    this.hls.trigger(S.CUES_PARSED, {type: "captions", cues: g, track: t})
                }
            }, e.onInitPtsFound = function (t, e) {
                var r = this, i = e.frag, n = e.id, a = e.initPTS, s = e.timescale, o = this.unparsedVttFrags;
                "main" === n && (this.initPTS[i.cc] = {
                    baseTime: a,
                    timescale: s
                }), o.length && (this.unparsedVttFrags = [], o.forEach((function (t) {
                    r.onFragLoaded(S.FRAG_LOADED, t)
                })))
            }, e.getExistingTrack = function (t, e) {
                var r = this.media;
                if (r) for (var i = 0; i < r.textTracks.length; i++) {
                    var n = r.textTracks[i];
                    if (ja(n, {name: t, lang: e, attrs: {}})) return n
                }
                return null
            }, e.createCaptionsTrack = function (t) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
            }, e.createNativeTrack = function (t) {
                if (!this.captionsTracks[t]) {
                    var e = this.captionsProperties, r = this.captionsTracks, i = this.media, n = e[t], a = n.label,
                        s = n.languageCode, o = this.getExistingTrack(a, s);
                    if (o) r[t] = o, Oe(r[t]), Fe(r[t], i); else {
                        var l = this.createTextTrack("captions", a, s);
                        l && (l[t] = !0, r[t] = l)
                    }
                }
            }, e.createNonNativeTrack = function (t) {
                if (!this.nonNativeCaptionsTracks[t]) {
                    var e = this.captionsProperties[t];
                    if (e) {
                        var r = {
                            _id: t,
                            label: e.label,
                            kind: "captions",
                            default: !!e.media && !!e.media.default,
                            closedCaptions: e.media
                        };
                        this.nonNativeCaptionsTracks[t] = r, this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {tracks: [r]})
                    }
                }
            }, e.createTextTrack = function (t, e, r) {
                var i = this.media;
                if (i) return i.addTextTrack(t, e, r)
            }, e.onMediaAttaching = function (t, e) {
                this.media = e.media, this._cleanTracks()
            }, e.onMediaDetaching = function () {
                var t = this.captionsTracks;
                Object.keys(t).forEach((function (e) {
                    Oe(t[e]), delete t[e]
                })), this.nonNativeCaptionsTracks = {}
            }, e.onManifestLoading = function () {
                this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {start: 0, prevCC: -1, new: !0}
                }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
            }, e._cleanTracks = function () {
                var t = this.media;
                if (t) {
                    var e = t.textTracks;
                    if (e) for (var r = 0; r < e.length; r++) Oe(e[r])
                }
            }, e.onSubtitleTracksUpdated = function (t, e) {
                var r = this, i = e.subtitleTracks || [], n = i.some((function (t) {
                    return t.textCodec === Pa
                }));
                if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
                    if (Gn(this.tracks, i)) return void (this.tracks = i);
                    if (this.textTracks = [], this.tracks = i, this.config.renderTextTracksNatively) {
                        var a = this.media, s = a ? Ue(a.textTracks) : null;
                        if (this.tracks.forEach((function (t, e) {
                            var i;
                            if (s) {
                                for (var n = null, a = 0; a < s.length; a++) if (s[a] && ja(s[a], t)) {
                                    n = s[a], s[a] = null;
                                    break
                                }
                                n && (i = n)
                            }
                            if (i) Oe(i); else {
                                var o = Wa(t);
                                (i = r.createTextTrack(o, t.name, t.lang)) && (i.mode = "disabled")
                            }
                            i && r.textTracks.push(i)
                        })), null != s && s.length) {
                            var o = s.filter((function (t) {
                                return null !== t
                            })).map((function (t) {
                                return t.label
                            }));
                            o.length && w.warn("Media element contains unused subtitle tracks: " + o.join(", ") + ". Replace media element for each source to clear TextTracks and captions menu.")
                        }
                    } else if (this.tracks.length) {
                        var l = this.tracks.map((function (t) {
                            return {label: t.name, kind: t.type.toLowerCase(), default: t.default, subtitleTrack: t}
                        }));
                        this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {tracks: l})
                    }
                }
            }, e.onManifestLoaded = function (t, e) {
                var r = this;
                this.config.enableCEA708Captions && e.captions && e.captions.forEach((function (t) {
                    var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                    if (e) {
                        var i = "textTrack" + e[1], n = r.captionsProperties[i];
                        n && (n.label = t.name, t.lang && (n.languageCode = t.lang), n.media = t)
                    }
                }))
            }, e.closedCaptionsForLevel = function (t) {
                var e = this.hls.levels[t.level];
                return null == e ? void 0 : e.attrs["CLOSED-CAPTIONS"]
            }, e.onFragLoading = function (t, e) {
                this.initCea608Parsers();
                var r = this.cea608Parser1, i = this.cea608Parser2, n = this.lastCc, a = this.lastSn,
                    s = this.lastPartIndex;
                if (this.enabled && r && i && e.frag.type === Ie) {
                    var o, l, u = e.frag, h = u.cc, d = u.sn,
                        c = null != (o = null == e || null == (l = e.part) ? void 0 : l.index) ? o : -1;
                    d === a + 1 || d === a && c === s + 1 || h === n || (r.reset(), i.reset()), this.lastCc = h, this.lastSn = d, this.lastPartIndex = c
                }
            }, e.onFragLoaded = function (t, e) {
                var r = e.frag, i = e.payload;
                if (r.type === Ce) if (i.byteLength) {
                    var n = r.decryptdata, a = "stats" in e;
                    if (null == n || !n.encrypted || a) {
                        var s = this.tracks[r.level], o = this.vttCCs;
                        o[r.cc] || (o[r.cc] = {
                            start: r.start,
                            prevCC: this.prevCC,
                            new: !0
                        }, this.prevCC = r.cc), s && s.textCodec === Pa ? this._parseIMSC1(r, i) : this._parseVTTs(e)
                    }
                } else this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: r,
                    error: new Error("Empty subtitle payload")
                })
            }, e._parseIMSC1 = function (t, e) {
                var r = this, i = this.hls;
                Na(e, this.initPTS[t.cc], (function (e) {
                    r._appendCues(e, t.level), i.trigger(S.SUBTITLE_FRAG_PROCESSED, {success: !0, frag: t})
                }), (function (e) {
                    w.log("Failed to parse IMSC1: " + e), i.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: t,
                        error: e
                    })
                }))
            }, e._parseVTTs = function (t) {
                var e, r = this, i = t.frag, n = t.payload, a = this.initPTS, s = this.unparsedVttFrags,
                    o = a.length - 1;
                if (a[i.cc] || -1 !== o) {
                    var l = this.hls;
                    xa(null != (e = i.initSegment) && e.data ? Gt(i.initSegment.data, new Uint8Array(n)) : n, this.initPTS[i.cc], this.vttCCs, i.cc, i.start, (function (t) {
                        r._appendCues(t, i.level), l.trigger(S.SUBTITLE_FRAG_PROCESSED, {success: !0, frag: i})
                    }), (function (e) {
                        var a = "Missing initPTS for VTT MPEGTS" === e.message;
                        a ? s.push(t) : r._fallbackToIMSC1(i, n), w.log("Failed to parse VTT cue: " + e), a && o > i.cc || l.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: i,
                            error: e
                        })
                    }))
                } else s.push(t)
            }, e._fallbackToIMSC1 = function (t, e) {
                var r = this, i = this.tracks[t.level];
                i.textCodec || Na(e, this.initPTS[t.cc], (function () {
                    i.textCodec = Pa, r._parseIMSC1(t, e)
                }), (function () {
                    i.textCodec = "wvtt"
                }))
            }, e._appendCues = function (t, e) {
                var r = this.hls;
                if (this.config.renderTextTracksNatively) {
                    var i = this.textTracks[e];
                    if (!i || "disabled" === i.mode) return;
                    t.forEach((function (t) {
                        return Me(i, t)
                    }))
                } else {
                    var n = this.tracks[e];
                    if (!n) return;
                    var a = n.default ? "default" : "subtitles" + e;
                    r.trigger(S.CUES_PARSED, {type: "subtitles", cues: t, track: a})
                }
            }, e.onFragDecrypted = function (t, e) {
                e.frag.type === Ce && this.onFragLoaded(S.FRAG_LOADED, e)
            }, e.onSubtitleTracksCleared = function () {
                this.tracks = [], this.captionsTracks = {}
            }, e.onFragParsingUserdata = function (t, e) {
                this.initCea608Parsers();
                var r = this.cea608Parser1, i = this.cea608Parser2;
                if (this.enabled && r && i) {
                    var n = e.frag, a = e.samples;
                    if (n.type !== Ie || "NONE" !== this.closedCaptionsForLevel(n)) for (var s = 0; s < a.length; s++) {
                        var o = a[s].bytes;
                        if (o) {
                            var l = this.extractCea608Data(o);
                            r.addData(a[s].pts, l[0]), i.addData(a[s].pts, l[1])
                        }
                    }
                }
            }, e.onBufferFlushing = function (t, e) {
                var r = e.startOffset, i = e.endOffset, n = e.endOffsetSubtitles, a = e.type, s = this.media;
                if (s && !(s.currentTime < i)) {
                    if (!a || "video" === a) {
                        var o = this.captionsTracks;
                        Object.keys(o).forEach((function (t) {
                            return Ne(o[t], r, i)
                        }))
                    }
                    if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                        var l = this.textTracks;
                        Object.keys(l).forEach((function (t) {
                            return Ne(l[t], r, n)
                        }))
                    }
                }
            }, e.extractCea608Data = function (t) {
                for (var e = [[], []], r = 31 & t[0], i = 2, n = 0; n < r; n++) {
                    var a = t[i++], s = 127 & t[i++], o = 127 & t[i++];
                    if ((0 !== s || 0 !== o) && 0 != (4 & a)) {
                        var l = 3 & a;
                        0 !== l && 1 !== l || (e[l].push(s), e[l].push(o))
                    }
                }
                return e
            }, t
        }();

        function Wa(t) {
            return t.characteristics && /transcribes-spoken-dialog/gi.test(t.characteristics) && /describes-music-and-sound/gi.test(t.characteristics) ? "captions" : "subtitles"
        }

        function ja(t, e) {
            return !!t && t.kind === Wa(e) && Hn(e, t)
        }

        var qa = function () {
            function t(t) {
                this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
            }

            var e = t.prototype;
            return e.setStreamController = function (t) {
                this.streamController = t
            }, e.destroy = function () {
                this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
            }, e.registerListeners = function () {
                var t = this.hls;
                t.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this)
            }, e.unregisterListener = function () {
                var t = this.hls;
                t.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this)
            }, e.onFpsDropLevelCapping = function (t, e) {
                var r = this.hls.levels[e.droppedLevel];
                this.isLevelAllowed(r) && this.restrictedLevels.push({
                    bitrate: r.bitrate,
                    height: r.height,
                    width: r.width
                })
            }, e.onMediaAttaching = function (t, e) {
                this.media = e.media instanceof HTMLVideoElement ? e.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize()
            }, e.onManifestParsed = function (t, e) {
                var r = this.hls;
                this.restrictedLevels = [], this.firstLevel = e.firstLevel, r.config.capLevelToPlayerSize && e.video && this.startCapping()
            }, e.onLevelsUpdated = function (t, e) {
                this.timer && y(this.autoLevelCapping) && this.detectPlayerSize()
            }, e.onBufferCodecs = function (t, e) {
                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
            }, e.onMediaDetaching = function () {
                this.stopCapping()
            }, e.detectPlayerSize = function () {
                if (this.media) {
                    if (this.mediaHeight <= 0 || this.mediaWidth <= 0) return void (this.clientRect = null);
                    var t = this.hls.levels;
                    if (t.length) {
                        var e = this.hls, r = this.getMaxLevel(t.length - 1);
                        r !== this.autoLevelCapping && w.log("Setting autoLevelCapping to " + r + ": " + t[r].height + "p@" + t[r].bitrate + " for media " + this.mediaWidth + "x" + this.mediaHeight), e.autoLevelCapping = r, e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                    }
                }
            }, e.getMaxLevel = function (e) {
                var r = this, i = this.hls.levels;
                if (!i.length) return -1;
                var n = i.filter((function (t, i) {
                    return r.isLevelAllowed(t) && i <= e
                }));
                return this.clientRect = null, t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
            }, e.startCapping = function () {
                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
            }, e.stopCapping = function () {
                this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
            }, e.getDimensions = function () {
                if (this.clientRect) return this.clientRect;
                var t = this.media, e = {width: 0, height: 0};
                if (t) {
                    var r = t.getBoundingClientRect();
                    e.width = r.width, e.height = r.height, e.width || e.height || (e.width = r.right - r.left || t.width || 0, e.height = r.bottom - r.top || t.height || 0)
                }
                return this.clientRect = e, e
            }, e.isLevelAllowed = function (t) {
                return !this.restrictedLevels.some((function (e) {
                    return t.bitrate === e.bitrate && t.width === e.width && t.height === e.height
                }))
            }, t.getMaxLevelByMediaSize = function (t, e, r) {
                if (null == t || !t.length) return -1;
                for (var i, n, a = t.length - 1, s = Math.max(e, r), o = 0; o < t.length; o += 1) {
                    var l = t[o];
                    if ((l.width >= s || l.height >= s) && (i = l, !(n = t[o + 1]) || i.width !== n.width || i.height !== n.height)) {
                        a = o;
                        break
                    }
                }
                return a
            }, s(t, [{
                key: "mediaWidth", get: function () {
                    return this.getDimensions().width * this.contentScaleFactor
                }
            }, {
                key: "mediaHeight", get: function () {
                    return this.getDimensions().height * this.contentScaleFactor
                }
            }, {
                key: "contentScaleFactor", get: function () {
                    var t = 1;
                    if (!this.hls.config.ignoreDevicePixelRatio) try {
                        t = self.devicePixelRatio
                    } catch (t) {
                    }
                    return t
                }
            }]), t
        }(), Xa = function () {
            function t(t) {
                this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
            }

            var e = t.prototype;
            return e.setStreamController = function (t) {
                this.streamController = t
            }, e.registerListeners = function () {
                this.hls.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this)
            }, e.unregisterListeners = function () {
                this.hls.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this)
            }, e.destroy = function () {
                this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
            }, e.onMediaAttaching = function (t, e) {
                var r = this.hls.config;
                if (r.capLevelOnFPSDrop) {
                    var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                    this.media = i, i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                }
            }, e.checkFPS = function (t, e, r) {
                var i = performance.now();
                if (e) {
                    if (this.lastTime) {
                        var n = i - this.lastTime, a = r - this.lastDroppedFrames, s = e - this.lastDecodedFrames,
                            o = 1e3 * a / n, l = this.hls;
                        if (l.trigger(S.FPS_DROP, {
                            currentDropped: a,
                            currentDecoded: s,
                            totalDroppedFrames: r
                        }), o > 0 && a > l.config.fpsDroppedMonitoringThreshold * s) {
                            var u = l.currentLevel;
                            w.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger(S.FPS_DROP_LEVEL_CAPPING, {
                                level: u,
                                droppedLevel: l.currentLevel
                            }), l.autoLevelCapping = u, this.streamController.nextLevelSwitch())
                        }
                    }
                    this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                }
            }, e.checkFPSInterval = function () {
                var t = this.media;
                if (t) if (this.isVideoPlaybackQualityAvailable) {
                    var e = t.getVideoPlaybackQuality();
                    this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
            }, t
        }(), za = "[eme]", Qa = function () {
            function t(e) {
                this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = t.CDMCleanupPromise ? [t.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = w.debug.bind(w, za), this.log = w.log.bind(w, za), this.warn = w.warn.bind(w, za), this.error = w.error.bind(w, za), this.hls = e, this.config = e.config, this.registerListeners()
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.unregisterListeners(), this.onMediaDetached();
                var t = this.config;
                t.requestMediaKeySystemAccessFunc = null, t.licenseXhrSetup = t.licenseResponseCallback = void 0, t.drmSystems = t.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null
            }, e.registerListeners = function () {
                this.hls.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(S.MANIFEST_LOADED, this.onManifestLoaded, this)
            }, e.unregisterListeners = function () {
                this.hls.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(S.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(S.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(S.MANIFEST_LOADED, this.onManifestLoaded, this)
            }, e.getLicenseServerUrl = function (t) {
                var e = this.config, r = e.drmSystems, i = e.widevineLicenseUrl, n = r[t];
                if (n) return n.licenseUrl;
                if (t === q.WIDEVINE && i) return i;
                throw new Error('no license server URL configured for key-system "' + t + '"')
            }, e.getServerCertificateUrl = function (t) {
                var e = this.config.drmSystems[t];
                if (e) return e.serverCertificateUrl;
                this.log('No Server Certificate in config.drmSystems["' + t + '"]')
            }, e.attemptKeySystemAccess = function (t) {
                var e = this, r = this.hls.levels, i = function (t, e, r) {
                    return !!t && r.indexOf(t) === e
                }, n = r.map((function (t) {
                    return t.audioCodec
                })).filter(i), a = r.map((function (t) {
                    return t.videoCodec
                })).filter(i);
                return n.length + a.length === 0 && a.push("avc1.42e01e"), new Promise((function (r, i) {
                    !function t(s) {
                        var o = s.shift();
                        e.getMediaKeysPromise(o, n, a).then((function (t) {
                            return r({keySystem: o, mediaKeys: t})
                        })).catch((function (e) {
                            s.length ? t(s) : i(e instanceof es ? e : new es({
                                type: L.KEY_SYSTEM_ERROR,
                                details: A.KEY_SYSTEM_NO_ACCESS,
                                error: e,
                                fatal: !0
                            }, e.message))
                        }))
                    }(t)
                }))
            }, e.requestMediaKeySystemAccess = function (t, e) {
                var r = this.config.requestMediaKeySystemAccessFunc;
                if ("function" != typeof r) {
                    var i = "Configured requestMediaKeySystemAccess is not a function " + r;
                    return null === it && "http:" === self.location.protocol && (i = "navigator.requestMediaKeySystemAccess is not available over insecure protocol " + location.protocol), Promise.reject(new Error(i))
                }
                return r(t, e)
            }, e.getMediaKeysPromise = function (t, e, r) {
                var i = this, n = function (t, e, r, i) {
                        var n;
                        switch (t) {
                            case q.FAIRPLAY:
                                n = ["cenc", "sinf"];
                                break;
                            case q.WIDEVINE:
                            case q.PLAYREADY:
                                n = ["cenc"];
                                break;
                            case q.CLEARKEY:
                                n = ["cenc", "keyids"];
                                break;
                            default:
                                throw new Error("Unknown key-system: " + t)
                        }
                        return function (t, e, r, i) {
                            return [{
                                initDataTypes: t,
                                persistentState: i.persistentState || "optional",
                                distinctiveIdentifier: i.distinctiveIdentifier || "optional",
                                sessionTypes: i.sessionTypes || [i.sessionType || "temporary"],
                                audioCapabilities: e.map((function (t) {
                                    return {
                                        contentType: 'audio/mp4; codecs="' + t + '"',
                                        robustness: i.audioRobustness || "",
                                        encryptionScheme: i.audioEncryptionScheme || null
                                    }
                                })),
                                videoCapabilities: r.map((function (t) {
                                    return {
                                        contentType: 'video/mp4; codecs="' + t + '"',
                                        robustness: i.videoRobustness || "",
                                        encryptionScheme: i.videoEncryptionScheme || null
                                    }
                                }))
                            }]
                        }(n, e, r, i)
                    }(t, e, r, this.config.drmSystemOptions), a = this.keySystemAccessPromises[t],
                    s = null == a ? void 0 : a.keySystemAccess;
                if (!s) {
                    this.log('Requesting encrypted media "' + t + '" key-system access with config: ' + JSON.stringify(n)), s = this.requestMediaKeySystemAccess(t, n);
                    var o = this.keySystemAccessPromises[t] = {keySystemAccess: s};
                    return s.catch((function (e) {
                        i.log('Failed to obtain access to key-system "' + t + '": ' + e)
                    })), s.then((function (e) {
                        i.log('Access for key-system "' + e.keySystem + '" obtained');
                        var r = i.fetchServerCertificate(t);
                        return i.log('Create media-keys for "' + t + '"'), o.mediaKeys = e.createMediaKeys().then((function (e) {
                            return i.log('Media-keys created for "' + t + '"'), r.then((function (r) {
                                return r ? i.setMediaKeysServerCertificate(e, t, r) : e
                            }))
                        })), o.mediaKeys.catch((function (e) {
                            i.error('Failed to create media-keys for "' + t + '"}: ' + e)
                        })), o.mediaKeys
                    }))
                }
                return s.then((function () {
                    return a.mediaKeys
                }))
            }, e.createMediaKeySessionContext = function (t) {
                var e = t.decryptdata, r = t.keySystem, i = t.mediaKeys;
                this.log('Creating key-system session "' + r + '" keyId: ' + Lt(e.keyId || []));
                var n = i.createSession(),
                    a = {decryptdata: e, keySystem: r, mediaKeys: i, mediaKeysSession: n, keyStatus: "status-pending"};
                return this.mediaKeySessions.push(a), a
            }, e.renewKeySession = function (t) {
                var e = t.decryptdata;
                if (e.pssh) {
                    var r = this.createMediaKeySessionContext(t), i = this.getKeyIdString(e);
                    this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(r, "cenc", e.pssh, "expired")
                } else this.warn("Could not renew expired session. Missing pssh initData.");
                this.removeSession(t)
            }, e.getKeyIdString = function (t) {
                if (!t) throw new Error("Could not read keyId of undefined decryptdata");
                if (null === t.keyId) throw new Error("keyId is null");
                return Lt(t.keyId)
            }, e.updateKeySession = function (t, e) {
                var r, i = t.mediaKeysSession;
                return this.log('Updating key-session "' + i.sessionId + '" for keyID ' + Lt((null == (r = t.decryptdata) ? void 0 : r.keyId) || []) + "\n      } (data length: " + (e ? e.byteLength : e) + ")"), i.update(e)
            }, e.selectKeySystemFormat = function (t) {
                var e = Object.keys(t.levelkeys || {});
                return this.keyFormatPromise || (this.log("Selecting key-system from fragment (sn: " + t.sn + " " + t.type + ": " + t.level + ") key formats " + e.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(e)), this.keyFormatPromise
            }, e.getKeyFormatPromise = function (t) {
                var e = this;
                return new Promise((function (r, i) {
                    var n = et(e.config), a = t.map($).filter((function (t) {
                        return !!t && -1 !== n.indexOf(t)
                    }));
                    return e.getKeySystemSelectionPromise(a).then((function (t) {
                        var e = t.keySystem, n = tt(e);
                        n ? r(n) : i(new Error('Unable to find format for key-system "' + e + '"'))
                    })).catch(i)
                }))
            }, e.loadKey = function (t) {
                var e = this, r = t.keyInfo.decryptdata, i = this.getKeyIdString(r),
                    n = "(keyId: " + i + ' format: "' + r.keyFormat + '" method: ' + r.method + " uri: " + r.uri + ")";
                this.log("Starting session for key " + n);
                var a = this.keyIdToKeySessionPromise[i];
                return a || (a = this.keyIdToKeySessionPromise[i] = this.getKeySystemForKeyPromise(r).then((function (i) {
                    var a = i.keySystem, s = i.mediaKeys;
                    return e.throwIfDestroyed(), e.log("Handle encrypted media sn: " + t.frag.sn + " " + t.frag.type + ": " + t.frag.level + " using key " + n), e.attemptSetMediaKeys(a, s).then((function () {
                        e.throwIfDestroyed();
                        var t = e.createMediaKeySessionContext({keySystem: a, mediaKeys: s, decryptdata: r});
                        return e.generateRequestWithPreferredKeySession(t, "cenc", r.pssh, "playlist-key")
                    }))
                }))).catch((function (t) {
                    return e.handleError(t)
                })), a
            }, e.throwIfDestroyed = function (t) {
                if (!this.hls) throw new Error("invalid state")
            }, e.handleError = function (t) {
                this.hls && (this.error(t.message), t instanceof es ? this.hls.trigger(S.ERROR, t.data) : this.hls.trigger(S.ERROR, {
                    type: L.KEY_SYSTEM_ERROR,
                    details: A.KEY_SYSTEM_NO_KEYS,
                    error: t,
                    fatal: !0
                }))
            }, e.getKeySystemForKeyPromise = function (t) {
                var e = this.getKeyIdString(t), r = this.keyIdToKeySessionPromise[e];
                if (!r) {
                    var i = $(t.keyFormat), n = i ? [i] : et(this.config);
                    return this.attemptKeySystemAccess(n)
                }
                return r
            }, e.getKeySystemSelectionPromise = function (t) {
                if (t.length || (t = et(this.config)), 0 === t.length) throw new es({
                    type: L.KEY_SYSTEM_ERROR,
                    details: A.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
                    fatal: !0
                }, "Missing key-system license configuration options " + JSON.stringify({drmSystems: this.config.drmSystems}));
                return this.attemptKeySystemAccess(t)
            }, e._onMediaEncrypted = function (t) {
                var e = this, r = t.initDataType, i = t.initData;
                if (this.debug('"' + t.type + '" event: init data type: "' + r + '"'), null !== i) {
                    var n, a;
                    if ("sinf" === r && this.config.drmSystems[q.FAIRPLAY]) {
                        var s = bt(new Uint8Array(i));
                        try {
                            var o = V(JSON.parse(s).sinf), l = Ut(new Uint8Array(o));
                            if (!l) return;
                            n = l.subarray(8, 24), a = q.FAIRPLAY
                        } catch (t) {
                            return void this.warn('Failed to parse sinf "encrypted" event message initData')
                        }
                    } else {
                        var u = function (t) {
                            if (!(t instanceof ArrayBuffer) || t.byteLength < 32) return null;
                            var e = {version: 0, systemId: "", kids: null, data: null}, r = new DataView(t),
                                i = r.getUint32(0);
                            if (t.byteLength !== i && i > 44) return null;
                            if (1886614376 !== r.getUint32(4)) return null;
                            if (e.version = r.getUint32(8) >>> 24, e.version > 1) return null;
                            e.systemId = Lt(new Uint8Array(t, 12, 16));
                            var n = r.getUint32(28);
                            if (0 === e.version) {
                                if (i - 32 < n) return null;
                                e.data = new Uint8Array(t, 32, n)
                            } else if (1 === e.version) {
                                e.kids = [];
                                for (var a = 0; a < n; a++) e.kids.push(new Uint8Array(t, 32 + 16 * a, 16))
                            }
                            return e
                        }(i);
                        if (null === u) return;
                        0 === u.version && u.systemId === Z && u.data && (n = u.data.subarray(8, 24)), a = function (t) {
                            if (t === Z) return q.WIDEVINE
                        }(u.systemId)
                    }
                    if (a && n) {
                        for (var h, d = Lt(n), c = this.keyIdToKeySessionPromise, f = this.mediaKeySessions, g = c[d], v = function () {
                            var t = f[m], a = t.decryptdata;
                            if (a.pssh || !a.keyId) return 0;
                            var s = Lt(a.keyId);
                            return d === s || -1 !== a.uri.replace(/-/g, "").indexOf(d) ? (g = c[s], delete c[s], a.pssh = new Uint8Array(i), a.keyId = n, g = c[d] = g.then((function () {
                                return e.generateRequestWithPreferredKeySession(t, r, i, "encrypted-event-key-match")
                            })), 1) : void 0
                        }, m = 0; m < f.length && (0 === (h = v()) || 1 !== h); m++) ;
                        g || (g = c[d] = this.getKeySystemSelectionPromise([a]).then((function (t) {
                            var a, s = t.keySystem, o = t.mediaKeys;
                            e.throwIfDestroyed();
                            var l = new qt("ISO-23001-7", d, null != (a = tt(s)) ? a : "");
                            return l.pssh = new Uint8Array(i), l.keyId = n, e.attemptSetMediaKeys(s, o).then((function () {
                                e.throwIfDestroyed();
                                var t = e.createMediaKeySessionContext({decryptdata: l, keySystem: s, mediaKeys: o});
                                return e.generateRequestWithPreferredKeySession(t, r, i, "encrypted-event-no-match")
                            }))
                        }))), g.catch((function (t) {
                            return e.handleError(t)
                        }))
                    }
                }
            }, e._onWaitingForKey = function (t) {
                this.log('"' + t.type + '" event')
            }, e.attemptSetMediaKeys = function (t, e) {
                var r = this, i = this.setMediaKeysQueue.slice();
                this.log('Setting media-keys for "' + t + '"');
                var n = Promise.all(i).then((function () {
                    if (!r.media) throw new Error("Attempted to set mediaKeys without media element attached");
                    return r.media.setMediaKeys(e)
                }));
                return this.setMediaKeysQueue.push(n), n.then((function () {
                    r.log('Media-keys set for "' + t + '"'), i.push(n), r.setMediaKeysQueue = r.setMediaKeysQueue.filter((function (t) {
                        return -1 === i.indexOf(t)
                    }))
                }))
            }, e.generateRequestWithPreferredKeySession = function (t, e, r, i) {
                var n, a, s = this,
                    o = null == (n = this.config.drmSystems) || null == (a = n[t.keySystem]) ? void 0 : a.generateRequest;
                if (o) try {
                    var l = o.call(this.hls, e, r, t);
                    if (!l) throw new Error("Invalid response from configured generateRequest filter");
                    e = l.initDataType, r = t.decryptdata.pssh = l.initData ? new Uint8Array(l.initData) : null
                } catch (t) {
                    var u;
                    if (this.warn(t.message), null != (u = this.hls) && u.config.debug) throw t
                }
                if (null === r) return this.log('Skipping key-session request for "' + i + '" (no initData)'), Promise.resolve(t);
                var h = this.getKeyIdString(t.decryptdata);
                this.log('Generating key-session request for "' + i + '": ' + h + " (init data type: " + e + " length: " + (r ? r.byteLength : null) + ")");
                var d = new Mn, c = t._onmessage = function (e) {
                    var r = t.mediaKeysSession;
                    if (r) {
                        var i = e.messageType, n = e.message;
                        s.log('"' + i + '" message event for session "' + r.sessionId + '" message size: ' + n.byteLength), "license-request" === i || "license-renewal" === i ? s.renewLicense(t, n).catch((function (t) {
                            s.handleError(t), d.emit("error", t)
                        })) : "license-release" === i ? t.keySystem === q.FAIRPLAY && (s.updateKeySession(t, W("acknowledged")), s.removeSession(t)) : s.warn('unhandled media key message type "' + i + '"')
                    } else d.emit("error", new Error("invalid state"))
                }, f = t._onkeystatuseschange = function (e) {
                    if (t.mediaKeysSession) {
                        s.onKeyStatusChange(t);
                        var r = t.keyStatus;
                        d.emit("keyStatus", r), "expired" === r && (s.warn(t.keySystem + " expired for key " + h), s.renewKeySession(t))
                    } else d.emit("error", new Error("invalid state"))
                };
                t.mediaKeysSession.addEventListener("message", c), t.mediaKeysSession.addEventListener("keystatuseschange", f);
                var g = new Promise((function (t, e) {
                    d.on("error", e), d.on("keyStatus", (function (r) {
                        r.startsWith("usable") ? t() : "output-restricted" === r ? e(new es({
                            type: L.KEY_SYSTEM_ERROR,
                            details: A.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                            fatal: !1
                        }, "HDCP level output restricted")) : "internal-error" === r ? e(new es({
                            type: L.KEY_SYSTEM_ERROR,
                            details: A.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                            fatal: !0
                        }, 'key status changed to "' + r + '"')) : "expired" === r ? e(new Error("key expired while generating request")) : s.warn('unhandled key status change "' + r + '"')
                    }))
                }));
                return t.mediaKeysSession.generateRequest(e, r).then((function () {
                    var e;
                    s.log('Request generated for key-session "' + (null == (e = t.mediaKeysSession) ? void 0 : e.sessionId) + '" keyId: ' + h)
                })).catch((function (t) {
                    throw new es({
                        type: L.KEY_SYSTEM_ERROR,
                        details: A.KEY_SYSTEM_NO_SESSION,
                        error: t,
                        fatal: !1
                    }, "Error generating key-session request: " + t)
                })).then((function () {
                    return g
                })).catch((function (e) {
                    throw d.removeAllListeners(), s.removeSession(t), e
                })).then((function () {
                    return d.removeAllListeners(), t
                }))
            }, e.onKeyStatusChange = function (t) {
                var e = this;
                t.mediaKeysSession.keyStatuses.forEach((function (r, i) {
                    e.log('key status change "' + r + '" for keyStatuses keyId: ' + Lt("buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i)) + " session keyId: " + Lt(new Uint8Array(t.decryptdata.keyId || [])) + " uri: " + t.decryptdata.uri), t.keyStatus = r
                }))
            }, e.fetchServerCertificate = function (t) {
                var e = this.config, r = new (0, e.loader)(e), n = this.getServerCertificateUrl(t);
                return n ? (this.log('Fetching server certificate for "' + t + '"'), new Promise((function (a, s) {
                    var o = {responseType: "arraybuffer", url: n}, l = e.certLoadPolicy.default,
                        u = {loadPolicy: l, timeout: l.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0},
                        h = {
                            onSuccess: function (t, e, r, i) {
                                a(t.data)
                            }, onError: function (e, r, a, l) {
                                s(new es({
                                    type: L.KEY_SYSTEM_ERROR,
                                    details: A.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                    fatal: !0,
                                    networkDetails: a,
                                    response: i({url: o.url, data: void 0}, e)
                                }, '"' + t + '" certificate request failed (' + n + "). Status: " + e.code + " (" + e.text + ")"))
                            }, onTimeout: function (e, r, i) {
                                s(new es({
                                    type: L.KEY_SYSTEM_ERROR,
                                    details: A.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                    fatal: !0,
                                    networkDetails: i,
                                    response: {url: o.url, data: void 0}
                                }, '"' + t + '" certificate request timed out (' + n + ")"))
                            }, onAbort: function (t, e, r) {
                                s(new Error("aborted"))
                            }
                        };
                    r.load(o, u, h)
                }))) : Promise.resolve()
            }, e.setMediaKeysServerCertificate = function (t, e, r) {
                var i = this;
                return new Promise((function (n, a) {
                    t.setServerCertificate(r).then((function (a) {
                        i.log("setServerCertificate " + (a ? "success" : "not supported by CDM") + " (" + (null == r ? void 0 : r.byteLength) + ') on "' + e + '"'), n(t)
                    })).catch((function (t) {
                        a(new es({
                            type: L.KEY_SYSTEM_ERROR,
                            details: A.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                            error: t,
                            fatal: !0
                        }, t.message))
                    }))
                }))
            }, e.renewLicense = function (t, e) {
                var r = this;
                return this.requestLicense(t, new Uint8Array(e)).then((function (e) {
                    return r.updateKeySession(t, new Uint8Array(e)).catch((function (t) {
                        throw new es({
                            type: L.KEY_SYSTEM_ERROR,
                            details: A.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                            error: t,
                            fatal: !0
                        }, t.message)
                    }))
                }))
            }, e.unpackPlayReadyKeyMessage = function (t, e) {
                var r = String.fromCharCode.apply(null, new Uint16Array(e.buffer));
                if (!r.includes("PlayReadyKeyMessage")) return t.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), e;
                var i = (new DOMParser).parseFromString(r, "application/xml"), n = i.querySelectorAll("HttpHeader");
                if (n.length > 0) for (var a, s = 0, o = n.length; s < o; s++) {
                    var l, u, h = null == (l = (a = n[s]).querySelector("name")) ? void 0 : l.textContent,
                        d = null == (u = a.querySelector("value")) ? void 0 : u.textContent;
                    h && d && t.setRequestHeader(h, d)
                }
                var c = i.querySelector("Challenge"), f = null == c ? void 0 : c.textContent;
                if (!f) throw new Error("Cannot find <Challenge> in key message");
                return W(atob(f))
            }, e.setupLicenseXHR = function (t, e, r, i) {
                var n = this, a = this.config.licenseXhrSetup;
                return a ? Promise.resolve().then((function () {
                    if (!r.decryptdata) throw new Error("Key removed");
                    return a.call(n.hls, t, e, r, i)
                })).catch((function (s) {
                    if (!r.decryptdata) throw s;
                    return t.open("POST", e, !0), a.call(n.hls, t, e, r, i)
                })).then((function (r) {
                    return t.readyState || t.open("POST", e, !0), {xhr: t, licenseChallenge: r || i}
                })) : (t.open("POST", e, !0), Promise.resolve({xhr: t, licenseChallenge: i}))
            }, e.requestLicense = function (t, e) {
                var r = this, i = this.config.keyLoadPolicy.default;
                return new Promise((function (n, a) {
                    var s = r.getLicenseServerUrl(t.keySystem);
                    r.log("Sending license request to URL: " + s);
                    var o = new XMLHttpRequest;
                    o.responseType = "arraybuffer", o.onreadystatechange = function () {
                        if (!r.hls || !t.mediaKeysSession) return a(new Error("invalid state"));
                        if (4 === o.readyState) if (200 === o.status) {
                            r._requestLicenseFailureCount = 0;
                            var l = o.response;
                            r.log("License received " + (l instanceof ArrayBuffer ? l.byteLength : l));
                            var u = r.config.licenseResponseCallback;
                            if (u) try {
                                l = u.call(r.hls, o, s, t)
                            } catch (t) {
                                r.error(t)
                            }
                            n(l)
                        } else {
                            var h = i.errorRetry, d = h ? h.maxNumRetry : 0;
                            if (r._requestLicenseFailureCount++, r._requestLicenseFailureCount > d || o.status >= 400 && o.status < 500) a(new es({
                                type: L.KEY_SYSTEM_ERROR,
                                details: A.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0,
                                networkDetails: o,
                                response: {url: s, data: void 0, code: o.status, text: o.statusText}
                            }, "License Request XHR failed (" + s + "). Status: " + o.status + " (" + o.statusText + ")")); else {
                                var c = d - r._requestLicenseFailureCount + 1;
                                r.warn("Retrying license request, " + c + " attempts left"), r.requestLicense(t, e).then(n, a)
                            }
                        }
                    }, t.licenseXhr && t.licenseXhr.readyState !== XMLHttpRequest.DONE && t.licenseXhr.abort(), t.licenseXhr = o, r.setupLicenseXHR(o, s, t, e).then((function (e) {
                        var i = e.xhr, n = e.licenseChallenge;
                        t.keySystem == q.PLAYREADY && (n = r.unpackPlayReadyKeyMessage(i, n)), i.send(n)
                    }))
                }))
            }, e.onMediaAttached = function (t, e) {
                if (this.config.emeEnabled) {
                    var r = e.media;
                    this.media = r, r.addEventListener("encrypted", this.onMediaEncrypted), r.addEventListener("waitingforkey", this.onWaitingForKey)
                }
            }, e.onMediaDetached = function () {
                var e = this, r = this.media, i = this.mediaKeySessions;
                r && (r.removeEventListener("encrypted", this.onMediaEncrypted), r.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, qt.clearKeyUriToKeyIdMap();
                var n = i.length;
                t.CDMCleanupPromise = Promise.all(i.map((function (t) {
                    return e.removeSession(t)
                })).concat(null == r ? void 0 : r.setMediaKeys(null).catch((function (t) {
                    e.log("Could not clear media keys: " + t)
                })))).then((function () {
                    n && (e.log("finished closing key sessions and clearing media keys"), i.length = 0)
                })).catch((function (t) {
                    e.log("Could not close sessions and clear media keys: " + t)
                }))
            }, e.onManifestLoading = function () {
                this.keyFormatPromise = null
            }, e.onManifestLoaded = function (t, e) {
                var r = e.sessionKeys;
                if (r && this.config.emeEnabled && !this.keyFormatPromise) {
                    var i = r.reduce((function (t, e) {
                        return -1 === t.indexOf(e.keyFormat) && t.push(e.keyFormat), t
                    }), []);
                    this.log("Selecting key-system from session-keys " + i.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(i)
                }
            }, e.removeSession = function (t) {
                var e = this, r = t.mediaKeysSession, i = t.licenseXhr;
                if (r) {
                    this.log("Remove licenses and keys and close session " + r.sessionId), t._onmessage && (r.removeEventListener("message", t._onmessage), t._onmessage = void 0), t._onkeystatuseschange && (r.removeEventListener("keystatuseschange", t._onkeystatuseschange), t._onkeystatuseschange = void 0), i && i.readyState !== XMLHttpRequest.DONE && i.abort(), t.mediaKeysSession = t.decryptdata = t.licenseXhr = void 0;
                    var n = this.mediaKeySessions.indexOf(t);
                    return n > -1 && this.mediaKeySessions.splice(n, 1), r.remove().catch((function (t) {
                        e.log("Could not remove session: " + t)
                    })).then((function () {
                        return r.close()
                    })).catch((function (t) {
                        e.log("Could not close session: " + t)
                    }))
                }
            }, t
        }();
        Qa.CDMCleanupPromise = void 0;
        var Ja, $a, Za, ts, es = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, r) || this).data = void 0, e.error || (e.error = new Error(r)), i.data = e, e.err = e.error, i
            }

            return l(e, t), e
        }(c(Error));
        !function (t) {
            t.MANIFEST = "m", t.AUDIO = "a", t.VIDEO = "v", t.MUXED = "av", t.INIT = "i", t.CAPTION = "c", t.TIMED_TEXT = "tt", t.KEY = "k", t.OTHER = "o"
        }(Ja || (Ja = {})), function (t) {
            t.DASH = "d", t.HLS = "h", t.SMOOTH = "s", t.OTHER = "o"
        }($a || ($a = {})), function (t) {
            t.OBJECT = "CMCD-Object", t.REQUEST = "CMCD-Request", t.SESSION = "CMCD-Session", t.STATUS = "CMCD-Status"
        }(Za || (Za = {}));
        var rs = ((ts = {})[Za.OBJECT] = ["br", "d", "ot", "tb"], ts[Za.REQUEST] = ["bl", "dl", "mtp", "nor", "nrr", "su"], ts[Za.SESSION] = ["cid", "pr", "sf", "sid", "st", "v"], ts[Za.STATUS] = ["bs", "rtp"], ts),
            is = function t(e, r) {
                this.value = void 0, this.params = void 0, Array.isArray(e) && (e = e.map((function (e) {
                    return e instanceof t ? e : new t(e)
                }))), this.value = e, this.params = r
            }, ns = function (t) {
                this.description = void 0, this.description = t
            }, as = "Dict";

        function ss(t, e, r, i) {
            return new Error("failed to " + t + ' "' + (n = e, (Array.isArray(n) ? JSON.stringify(n) : n instanceof Map ? "Map{}" : n instanceof Set ? "Set{}" : "object" == typeof n ? JSON.stringify(n) : String(n)) + '" as ') + r, {cause: i});
            var n
        }

        var os = "Bare Item", ls = "Boolean", us = "Byte Sequence", hs = "Decimal", ds = "Integer",
            cs = /[\x00-\x1f\x7f]+/, fs = "Token", gs = "Key";

        function vs(t, e, r) {
            return ss("serialize", t, e, r)
        }

        function ms(t) {
            if (!1 === ArrayBuffer.isView(t)) throw vs(t, us);
            return ":" + (e = t, btoa(String.fromCharCode.apply(String, e)) + ":");
            var e
        }

        function ps(t) {
            if (function (t) {
                return t < -999999999999999 || 999999999999999 < t
            }(t)) throw vs(t, ds);
            return t.toString()
        }

        function ys(t, e) {
            if (t < 0) return -ys(-t, e);
            var r = Math.pow(10, e);
            if (Math.abs(t * r % 1 - .5) < Number.EPSILON) {
                var i = Math.floor(t * r);
                return (i % 2 == 0 ? i : i + 1) / r
            }
            return Math.round(t * r) / r
        }

        function Es(t) {
            var e = ys(t, 3);
            if (Math.floor(Math.abs(e)).toString().length > 12) throw vs(t, hs);
            var r = e.toString();
            return r.includes(".") ? r : r + ".0"
        }

        var Ts = "String";

        function Ss(t) {
            var e, r = (e = t).description || e.toString().slice(7, -1);
            if (!1 === /^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(r)) throw vs(r, fs);
            return r
        }

        function Ls(t) {
            switch (typeof t) {
                case"number":
                    if (!y(t)) throw vs(t, os);
                    return Number.isInteger(t) ? ps(t) : Es(t);
                case"string":
                    return function (t) {
                        if (cs.test(t)) throw vs(t, Ts);
                        return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'
                    }(t);
                case"symbol":
                    return Ss(t);
                case"boolean":
                    return function (t) {
                        if ("boolean" != typeof t) throw vs(t, ls);
                        return t ? "?1" : "?0"
                    }(t);
                case"object":
                    if (t instanceof Date) return function (t) {
                        return "@" + ps(t.getTime() / 1e3)
                    }(t);
                    if (t instanceof Uint8Array) return ms(t);
                    if (t instanceof ns) return Ss(t);
                default:
                    throw vs(t, os)
            }
        }

        function As(t) {
            if (!1 === /^[a-z*][a-z0-9\-_.*]*$/.test(t)) throw vs(t, gs);
            return t
        }

        function Rs(t) {
            return null == t ? "" : Object.entries(t).map((function (t) {
                var e = t[0], r = t[1];
                return !0 === r ? ";" + As(e) : ";" + As(e) + "=" + Ls(r)
            })).join("")
        }

        function ks(t) {
            return t instanceof is ? "" + Ls(t.value) + Rs(t.params) : Ls(t)
        }

        function bs(t, e) {
            var r;
            if (void 0 === e && (e = {whitespace: !0}), "object" != typeof t) throw vs(t, as);
            var i = t instanceof Map ? t.entries() : Object.entries(t), n = null != (r = e) && r.whitespace ? " " : "";
            return Array.from(i).map((function (t) {
                var e = t[0], r = t[1];
                r instanceof is == 0 && (r = new is(r));
                var i, n = As(e);
                return !0 === r.value ? n += Rs(r.params) : (n += "=", Array.isArray(r.value) ? n += "(" + (i = r).value.map(ks).join(" ") + ")" + Rs(i.params) : n += ks(r)), n
            })).join("," + n)
        }

        var Ds = function (t) {
            return "ot" === t || "sf" === t || "st" === t
        }, Is = function (t) {
            return "number" == typeof t ? y(t) : null != t && "" !== t && !1 !== t
        }, ws = function (t) {
            return Math.round(t)
        }, Cs = function (t) {
            return 100 * ws(t / 100)
        }, _s = {
            br: ws, d: ws, bl: Cs, dl: Cs, mtp: Cs, nor: function (t, e) {
                return null != e && e.baseUrl && (t = function (t, e) {
                    var r = new URL(t), i = new URL(e);
                    if (r.origin !== i.origin) return t;
                    for (var n = r.pathname.split("/").slice(1), a = i.pathname.split("/").slice(1, -1); n[0] === a[0];) n.shift(), a.shift();
                    for (; a.length;) a.shift(), n.unshift("..");
                    return n.join("/")
                }(t, e.baseUrl)), encodeURIComponent(t)
            }, rtp: Cs, tb: ws
        };

        function xs(t, e) {
            return void 0 === e && (e = {}), t ? function (t, e) {
                return bs(t, e)
            }(function (t, e) {
                var r = {};
                if (null == t || "object" != typeof t) return r;
                var i = Object.keys(t).sort(), n = o({}, _s, null == e ? void 0 : e.formatters),
                    a = null == e ? void 0 : e.filter;
                return i.forEach((function (i) {
                    if (null == a || !a(i)) {
                        var s = t[i], o = n[i];
                        o && (s = o(s, e)), "v" === i && 1 === s || "pr" == i && 1 === s || Is(s) && (Ds(i) && "string" == typeof s && (s = new ns(s)), r[i] = s)
                    }
                })), r
            }(t, e), o({whitespace: !1}, e)) : ""
        }

        function Ps(t, e, r) {
            return o(t, function (t, e) {
                var r;
                if (void 0 === e && (e = {}), !t) return {};
                var i = Object.entries(t),
                    n = Object.entries(rs).concat(Object.entries((null == (r = e) ? void 0 : r.customHeaderMap) || {})),
                    a = i.reduce((function (t, e) {
                        var r, i = e[0], a = e[1], s = (null == (r = n.find((function (t) {
                            return t[1].includes(i)
                        }))) ? void 0 : r[0]) || Za.REQUEST;
                        return null != t[s] || (t[s] = {}), t[s][i] = a, t
                    }), {});
                return Object.entries(a).reduce((function (t, r) {
                    var i = r[0], n = r[1];
                    return t[i] = xs(n, e), t
                }), {})
            }(e, r))
        }

        var Fs = "CMCD", Ms = /CMCD=[^&#]+/;

        function Os(t, e, r) {
            var i = function (t, e) {
                if (void 0 === e && (e = {}), !t) return "";
                var r = xs(t, e);
                return Fs + "=" + encodeURIComponent(r)
            }(e, r);
            if (!i) return t;
            if (Ms.test(t)) return t.replace(Ms, i);
            var n = t.includes("?") ? "&" : "?";
            return "" + t + n + i
        }

        var Ns = function () {
            function t(t) {
                var e = this;
                this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function () {
                    e.initialized && (e.starved = !0), e.buffering = !0
                }, this.onPlaying = function () {
                    e.initialized || (e.initialized = !0), e.buffering = !1
                }, this.applyPlaylistData = function (t) {
                    try {
                        e.apply(t, {ot: Ja.MANIFEST, su: !e.initialized})
                    } catch (t) {
                        w.warn("Could not generate manifest CMCD data.", t)
                    }
                }, this.applyFragmentData = function (t) {
                    try {
                        var r = t.frag, i = e.hls.levels[r.level], n = e.getObjectType(r),
                            a = {d: 1e3 * r.duration, ot: n};
                        n !== Ja.VIDEO && n !== Ja.AUDIO && n != Ja.MUXED || (a.br = i.bitrate / 1e3, a.tb = e.getTopBandwidth(n) / 1e3, a.bl = e.getBufferLength(n)), e.apply(t, a)
                    } catch (t) {
                        w.warn("Could not generate segment CMCD data.", t)
                    }
                }, this.hls = t;
                var r = this.config = t.config, i = r.cmcd;
                null != i && (r.pLoader = this.createPlaylistLoader(), r.fLoader = this.createFragmentLoader(), this.sid = i.sessionId || function () {
                    try {
                        return crypto.randomUUID()
                    } catch (i) {
                        try {
                            var t = URL.createObjectURL(new Blob), e = t.toString();
                            return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
                        } catch (t) {
                            var r = (new Date).getTime();
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                                var e = (r + 16 * Math.random()) % 16 | 0;
                                return r = Math.floor(r / 16), ("x" == t ? e : 3 & e | 8).toString(16)
                            }))
                        }
                    }
                }(), this.cid = i.contentId, this.useHeaders = !0 === i.useHeaders, this.includeKeys = i.includeKeys, this.registerListeners())
            }

            var e = t.prototype;
            return e.registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHED, this.onMediaDetached, this), t.on(S.BUFFER_CREATED, this.onBufferCreated, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHED, this.onMediaDetached, this), t.off(S.BUFFER_CREATED, this.onBufferCreated, this)
            }, e.destroy = function () {
                this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = null
            }, e.onMediaAttached = function (t, e) {
                this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
            }, e.onMediaDetached = function () {
                this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
            }, e.onBufferCreated = function (t, e) {
                var r, i;
                this.audioBuffer = null == (r = e.tracks.audio) ? void 0 : r.buffer, this.videoBuffer = null == (i = e.tracks.video) ? void 0 : i.buffer
            }, e.createData = function () {
                var t;
                return {
                    v: 1,
                    sf: $a.HLS,
                    sid: this.sid,
                    cid: this.cid,
                    pr: null == (t = this.media) ? void 0 : t.playbackRate,
                    mtp: this.hls.bandwidthEstimate / 1e3
                }
            }, e.apply = function (t, e) {
                void 0 === e && (e = {}), o(e, this.createData());
                var r = e.ot === Ja.INIT || e.ot === Ja.VIDEO || e.ot === Ja.MUXED;
                this.starved && r && (e.bs = !0, e.su = !0, this.starved = !1), null == e.su && (e.su = this.buffering);
                var i = this.includeKeys;
                i && (e = Object.keys(e).reduce((function (t, r) {
                    return i.includes(r) && (t[r] = e[r]), t
                }), {})), this.useHeaders ? (t.headers || (t.headers = {}), Ps(t.headers, e)) : t.url = Os(t.url, e)
            }, e.getObjectType = function (t) {
                var e = t.type;
                return "subtitle" === e ? Ja.TIMED_TEXT : "initSegment" === t.sn ? Ja.INIT : "audio" === e ? Ja.AUDIO : "main" === e ? this.hls.audioTracks.length ? Ja.VIDEO : Ja.MUXED : void 0
            }, e.getTopBandwidth = function (t) {
                var e, r = 0, i = this.hls;
                if (t === Ja.AUDIO) e = i.audioTracks; else {
                    var n = i.maxAutoLevel, a = n > -1 ? n + 1 : i.levels.length;
                    e = i.levels.slice(0, a)
                }
                for (var s, o = g(e); !(s = o()).done;) {
                    var l = s.value;
                    l.bitrate > r && (r = l.bitrate)
                }
                return r > 0 ? r : NaN
            }, e.getBufferLength = function (t) {
                var e = this.hls.media, r = t === Ja.AUDIO ? this.audioBuffer : this.videoBuffer;
                return r && e ? 1e3 * zr.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len : NaN
            }, e.createPlaylistLoader = function () {
                var t = this.config.pLoader, e = this.applyPlaylistData, r = t || this.config.loader;
                return function () {
                    function t(t) {
                        this.loader = void 0, this.loader = new r(t)
                    }

                    var i = t.prototype;
                    return i.destroy = function () {
                        this.loader.destroy()
                    }, i.abort = function () {
                        this.loader.abort()
                    }, i.load = function (t, r, i) {
                        e(t), this.loader.load(t, r, i)
                    }, s(t, [{
                        key: "stats", get: function () {
                            return this.loader.stats
                        }
                    }, {
                        key: "context", get: function () {
                            return this.loader.context
                        }
                    }]), t
                }()
            }, e.createFragmentLoader = function () {
                var t = this.config.fLoader, e = this.applyFragmentData, r = t || this.config.loader;
                return function () {
                    function t(t) {
                        this.loader = void 0, this.loader = new r(t)
                    }

                    var i = t.prototype;
                    return i.destroy = function () {
                        this.loader.destroy()
                    }, i.abort = function () {
                        this.loader.abort()
                    }, i.load = function (t, r, i) {
                        e(t), this.loader.load(t, r, i)
                    }, s(t, [{
                        key: "stats", get: function () {
                            return this.loader.stats
                        }
                    }, {
                        key: "context", get: function () {
                            return this.loader.context
                        }
                    }]), t
                }()
            }, t
        }(), Us = function () {
            function t(t) {
                this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t, this.log = w.log.bind(w, "[content-steering]:"), this.registerListeners()
            }

            var e = t.prototype;
            return e.registerListeners = function () {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.ERROR, this.onError, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t && (t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.ERROR, this.onError, this))
            }, e.startLoad = function () {
                if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
                    if (this.updated) {
                        var t = 1e3 * this.timeToLoad - (performance.now() - this.updated);
                        if (t > 0) return void this.scheduleRefresh(this.uri, t)
                    }
                    this.loadSteeringManifest(this.uri)
                }
            }, e.stopLoad = function () {
                this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout()
            }, e.clearTimeout = function () {
                -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1)
            }, e.destroy = function () {
                this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null
            }, e.removeLevel = function (t) {
                var e = this.levels;
                e && (this.levels = e.filter((function (e) {
                    return e !== t
                })))
            }, e.onManifestLoading = function () {
                this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null
            }, e.onManifestLoaded = function (t, e) {
                var r = e.contentSteering;
                null !== r && (this.pathwayId = r.pathwayId, this.uri = r.uri, this.started && this.startLoad())
            }, e.onManifestParsed = function (t, e) {
                this.audioTracks = e.audioTracks, this.subtitleTracks = e.subtitleTracks
            }, e.onError = function (t, e) {
                var r = e.errorAction;
                if ((null == r ? void 0 : r.action) === Tr && r.flags === Rr) {
                    var i = this.levels, n = this.pathwayPriority, a = this.pathwayId;
                    if (e.context) {
                        var s = e.context, o = s.groupId, l = s.pathwayId, u = s.type;
                        o && i ? a = this.getPathwayForGroupId(o, u, a) : l && (a = l)
                    }
                    a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !n && i && (n = i.reduce((function (t, e) {
                        return -1 === t.indexOf(e.pathwayId) && t.push(e.pathwayId), t
                    }), [])), n && n.length > 1 && (this.updatePathwayPriority(n), r.resolved = this.pathwayId !== a), r.resolved || w.warn("Could not resolve " + e.details + ' ("' + e.error.message + '") with content-steering for Pathway: ' + a + " levels: " + (i ? i.length : i) + " priorities: " + JSON.stringify(n) + " penalized: " + JSON.stringify(this.penalizedPathways))
                }
            }, e.filterParsedLevels = function (t) {
                this.levels = t;
                var e = this.getLevelsForPathway(this.pathwayId);
                if (0 === e.length) {
                    var r = t[0].pathwayId;
                    this.log("No levels found in Pathway " + this.pathwayId + '. Setting initial Pathway to "' + r + '"'), e = this.getLevelsForPathway(r), this.pathwayId = r
                }
                return e.length !== t.length ? (this.log("Found " + e.length + "/" + t.length + ' levels in Pathway "' + this.pathwayId + '"'), e) : t
            }, e.getLevelsForPathway = function (t) {
                return null === this.levels ? [] : this.levels.filter((function (e) {
                    return t === e.pathwayId
                }))
            }, e.updatePathwayPriority = function (t) {
                var e;
                this.pathwayPriority = t;
                var r = this.penalizedPathways, i = performance.now();
                Object.keys(r).forEach((function (t) {
                    i - r[t] > 3e5 && delete r[t]
                }));
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (!(a in r)) {
                        if (a === this.pathwayId) return;
                        var s = this.hls.nextLoadLevel, o = this.hls.levels[s];
                        if ((e = this.getLevelsForPathway(a)).length > 0) {
                            this.log('Setting Pathway to "' + a + '"'), this.pathwayId = a, ur(e), this.hls.trigger(S.LEVELS_UPDATED, {levels: e});
                            var l = this.hls.levels[s];
                            o && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== o.attrs["STABLE-VARIANT-ID"] && l.bitrate !== o.bitrate && this.log("Unstable Pathways change from bitrate " + o.bitrate + " to " + l.bitrate), this.hls.nextLoadLevel = s);
                            break
                        }
                    }
                }
            }, e.getPathwayForGroupId = function (t, e, r) {
                for (var i = this.getLevelsForPathway(r).concat(this.levels || []), n = 0; n < i.length; n++) if (e === be && i[n].hasAudioGroup(t) || e === De && i[n].hasSubtitleGroup(t)) return i[n].pathwayId;
                return r
            }, e.clonePathways = function (t) {
                var e = this, r = this.levels;
                if (r) {
                    var i = {}, n = {};
                    t.forEach((function (t) {
                        var a = t.ID, s = t["BASE-ID"], o = t["URI-REPLACEMENT"];
                        if (!r.some((function (t) {
                            return t.pathwayId === a
                        }))) {
                            var l = e.getLevelsForPathway(s).map((function (t) {
                                var e = new x(t.attrs);
                                e["PATHWAY-ID"] = a;
                                var r = e.AUDIO && e.AUDIO + "_clone_" + a,
                                    s = e.SUBTITLES && e.SUBTITLES + "_clone_" + a;
                                r && (i[e.AUDIO] = r, e.AUDIO = r), s && (n[e.SUBTITLES] = s, e.SUBTITLES = s);
                                var l = Gs(t.uri, e["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", o), u = new tr({
                                    attrs: e,
                                    audioCodec: t.audioCodec,
                                    bitrate: t.bitrate,
                                    height: t.height,
                                    name: t.name,
                                    url: l,
                                    videoCodec: t.videoCodec,
                                    width: t.width
                                });
                                if (t.audioGroups) for (var h = 1; h < t.audioGroups.length; h++) u.addGroupId("audio", t.audioGroups[h] + "_clone_" + a);
                                if (t.subtitleGroups) for (var d = 1; d < t.subtitleGroups.length; d++) u.addGroupId("text", t.subtitleGroups[d] + "_clone_" + a);
                                return u
                            }));
                            r.push.apply(r, l), Bs(e.audioTracks, i, o, a), Bs(e.subtitleTracks, n, o, a)
                        }
                    }))
                }
            }, e.loadSteeringManifest = function (t) {
                var e, r = this, i = this.hls.config, n = i.loader;
                this.loader && this.loader.destroy(), this.loader = new n(i);
                try {
                    e = new self.URL(t)
                } catch (e) {
                    return this.enabled = !1, void this.log("Failed to parse Steering Manifest URI: " + t)
                }
                if ("data:" !== e.protocol) {
                    var a = 0 | (this.hls.bandwidthEstimate || i.abrEwmaDefaultEstimate);
                    e.searchParams.set("_HLS_pathway", this.pathwayId), e.searchParams.set("_HLS_throughput", "" + a)
                }
                var s = {responseType: "json", url: e.href}, o = i.steeringManifestLoadPolicy.default,
                    l = o.errorRetry || o.timeoutRetry || {}, u = {
                        loadPolicy: o,
                        timeout: o.maxLoadTimeMs,
                        maxRetry: l.maxNumRetry || 0,
                        retryDelay: l.retryDelayMs || 0,
                        maxRetryDelay: l.maxRetryDelayMs || 0
                    }, h = {
                        onSuccess: function (t, i, n, a) {
                            r.log('Loaded steering manifest: "' + e + '"');
                            var s = t.data;
                            if (1 === s.VERSION) {
                                r.updated = performance.now(), r.timeToLoad = s.TTL;
                                var o = s["RELOAD-URI"], l = s["PATHWAY-CLONES"], u = s["PATHWAY-PRIORITY"];
                                if (o) try {
                                    r.uri = new self.URL(o, e).href
                                } catch (t) {
                                    return r.enabled = !1, void r.log("Failed to parse Steering Manifest RELOAD-URI: " + o)
                                }
                                r.scheduleRefresh(r.uri || n.url), l && r.clonePathways(l);
                                var h = {steeringManifest: s, url: e.toString()};
                                r.hls.trigger(S.STEERING_MANIFEST_LOADED, h), u && r.updatePathwayPriority(u)
                            } else r.log("Steering VERSION " + s.VERSION + " not supported!")
                        }, onError: function (t, e, i, n) {
                            if (r.log("Error loading steering manifest: " + t.code + " " + t.text + " (" + e.url + ")"), r.stopLoad(), 410 === t.code) return r.enabled = !1, void r.log("Steering manifest " + e.url + " no longer available");
                            var a = 1e3 * r.timeToLoad;
                            if (429 !== t.code) r.scheduleRefresh(r.uri || e.url, a); else {
                                var s = r.loader;
                                if ("function" == typeof (null == s ? void 0 : s.getResponseHeader)) {
                                    var o = s.getResponseHeader("Retry-After");
                                    o && (a = 1e3 * parseFloat(o))
                                }
                                r.log("Steering manifest " + e.url + " rate limited")
                            }
                        }, onTimeout: function (t, e, i) {
                            r.log("Timeout loading steering manifest (" + e.url + ")"), r.scheduleRefresh(r.uri || e.url)
                        }
                    };
                this.log("Requesting steering manifest: " + e), this.loader.load(s, u, h)
            }, e.scheduleRefresh = function (t, e) {
                var r = this;
                void 0 === e && (e = 1e3 * this.timeToLoad), this.clearTimeout(), this.reloadTimer = self.setTimeout((function () {
                    var e, i = null == (e = r.hls) ? void 0 : e.media;
                    !i || i.ended ? r.scheduleRefresh(t, 1e3 * r.timeToLoad) : r.loadSteeringManifest(t)
                }), e)
            }, t
        }();

        function Bs(t, e, r, i) {
            t && Object.keys(e).forEach((function (n) {
                var a = t.filter((function (t) {
                    return t.groupId === n
                })).map((function (t) {
                    var a = o({}, t);
                    return a.details = void 0, a.attrs = new x(a.attrs), a.url = a.attrs.URI = Gs(t.url, t.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r), a.groupId = a.attrs["GROUP-ID"] = e[n], a.attrs["PATHWAY-ID"] = i, a
                }));
                t.push.apply(t, a)
            }))
        }

        function Gs(t, e, r, i) {
            var n, a = i.HOST, s = i.PARAMS, o = i[r];
            e && (n = null == o ? void 0 : o[e]) && (t = n);
            var l = new self.URL(t);
            return a && !n && (l.host = a), s && Object.keys(s).sort().forEach((function (t) {
                t && l.searchParams.set(t, s[t])
            })), l.href
        }

        var Ks = /^age:\s*[\d.]+\s*$/im, Hs = function () {
            function t(t) {
                this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = t && t.xhrSetup || null, this.stats = new M, this.retryDelay = 0
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null, this.stats = null
            }, e.abortInternal = function () {
                var t = this.loader;
                self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
            }, e.abort = function () {
                var t;
                this.abortInternal(), null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
            }, e.load = function (t, e, r) {
                if (this.stats.loading.start) throw new Error("Loader can only be used once.");
                this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = r, this.loadInternal()
            }, e.loadInternal = function () {
                var t = this, e = this.config, r = this.context;
                if (e && r) {
                    var i = this.loader = new self.XMLHttpRequest, n = this.stats;
                    n.loading.first = 0, n.loaded = 0, n.aborted = !1;
                    var a = this.xhrSetup;
                    a ? Promise.resolve().then((function () {
                        if (!t.stats.aborted) return a(i, r.url)
                    })).catch((function (t) {
                        return i.open("GET", r.url, !0), a(i, r.url)
                    })).then((function () {
                        t.stats.aborted || t.openAndSendXhr(i, r, e)
                    })).catch((function (e) {
                        t.callbacks.onError({code: i.status, text: e.message}, r, i, n)
                    })) : this.openAndSendXhr(i, r, e)
                }
            }, e.openAndSendXhr = function (t, e, r) {
                t.readyState || t.open("GET", e.url, !0);
                var i = e.headers, n = r.loadPolicy, a = n.maxTimeToFirstByteMs, s = n.maxLoadTimeMs;
                if (i) for (var o in i) t.setRequestHeader(o, i[o]);
                e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, self.clearTimeout(this.requestTimeout), r.timeout = a && y(a) ? a : s, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.timeout), t.send()
            }, e.readystatechange = function () {
                var t = this.context, e = this.loader, r = this.stats;
                if (t && e) {
                    var i = e.readyState, n = this.config;
                    if (!r.aborted && i >= 2 && (0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start), n.timeout !== n.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n.timeout = n.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.loadPolicy.maxLoadTimeMs - (r.loading.first - r.loading.start)))), 4 === i)) {
                        self.clearTimeout(this.requestTimeout), e.onreadystatechange = null, e.onprogress = null;
                        var a = e.status, s = "text" !== e.responseType;
                        if (a >= 200 && a < 300 && (s && e.response || null !== e.responseText)) {
                            r.loading.end = Math.max(self.performance.now(), r.loading.first);
                            var o = s ? e.response : e.responseText,
                                l = "arraybuffer" === e.responseType ? o.byteLength : o.length;
                            if (r.loaded = r.total = l, r.bwEstimate = 8e3 * r.total / (r.loading.end - r.loading.first), !this.callbacks) return;
                            var u = this.callbacks.onProgress;
                            if (u && u(r, t, o, e), !this.callbacks) return;
                            var h = {url: e.responseURL, data: o, code: a};
                            this.callbacks.onSuccess(h, r, t, e)
                        } else {
                            var d = n.loadPolicy.errorRetry;
                            gr(d, r.retry, !1, {
                                url: t.url,
                                data: void 0,
                                code: a
                            }) ? this.retry(d) : (w.error(a + " while loading " + t.url), this.callbacks.onError({
                                code: a,
                                text: e.statusText
                            }, t, e, r))
                        }
                    }
                }
            }, e.loadtimeout = function () {
                var t, e = null == (t = this.config) ? void 0 : t.loadPolicy.timeoutRetry;
                if (gr(e, this.stats.retry, !0)) this.retry(e); else {
                    var r;
                    w.warn("timeout while loading " + (null == (r = this.context) ? void 0 : r.url));
                    var i = this.callbacks;
                    i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader))
                }
            }, e.retry = function (t) {
                var e = this.context, r = this.stats;
                this.retryDelay = cr(t, r.retry), r.retry++, w.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + (null == e ? void 0 : e.url) + ", retrying " + r.retry + "/" + t.maxNumRetry + " in " + this.retryDelay + "ms"), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
            }, e.loadprogress = function (t) {
                var e = this.stats;
                e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
            }, e.getCacheAge = function () {
                var t = null;
                if (this.loader && Ks.test(this.loader.getAllResponseHeaders())) {
                    var e = this.loader.getResponseHeader("age");
                    t = e ? parseFloat(e) : null
                }
                return t
            }, e.getResponseHeader = function (t) {
                return this.loader && new RegExp("^" + t + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null
            }, t
        }(), Vs = /(\d+)-(\d+)\/(\d+)/, Ys = function () {
            function t(t) {
                this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Ws, this.controller = new self.AbortController, this.stats = new M
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null
            }, e.abortInternal = function () {
                this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort())
            }, e.abort = function () {
                var t;
                this.abortInternal(), null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
            }, e.load = function (t, e, r) {
                var i = this, n = this.stats;
                if (n.loading.start) throw new Error("Loader can only be used once.");
                n.loading.start = self.performance.now();
                var a = function (t, e) {
                        var r = {
                            method: "GET",
                            mode: "cors",
                            credentials: "same-origin",
                            signal: e,
                            headers: new self.Headers(o({}, t.headers))
                        };
                        return t.rangeEnd && r.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)), r
                    }(t, this.controller.signal), s = r.onProgress, l = "arraybuffer" === t.responseType,
                    u = l ? "byteLength" : "length", h = e.loadPolicy, d = h.maxTimeToFirstByteMs, c = h.maxLoadTimeMs;
                this.context = t, this.config = e, this.callbacks = r, this.request = this.fetchSetup(t, a), self.clearTimeout(this.requestTimeout), e.timeout = d && y(d) ? d : c, this.requestTimeout = self.setTimeout((function () {
                    i.abortInternal(), r.onTimeout(n, t, i.response)
                }), e.timeout), self.fetch(this.request).then((function (a) {
                    i.response = i.loader = a;
                    var o = Math.max(self.performance.now(), n.loading.start);
                    if (self.clearTimeout(i.requestTimeout), e.timeout = c, i.requestTimeout = self.setTimeout((function () {
                        i.abortInternal(), r.onTimeout(n, t, i.response)
                    }), c - (o - n.loading.start)), !a.ok) {
                        var u = a.status, h = a.statusText;
                        throw new qs(h || "fetch, bad network response", u, a)
                    }
                    return n.loading.first = o, n.total = function (t) {
                        var e = t.get("Content-Range");
                        if (e) {
                            var r = function (t) {
                                var e = Vs.exec(t);
                                if (e) return parseInt(e[2]) - parseInt(e[1]) + 1
                            }(e);
                            if (y(r)) return r
                        }
                        var i = t.get("Content-Length");
                        if (i) return parseInt(i)
                    }(a.headers) || n.total, s && y(e.highWaterMark) ? i.loadProgressively(a, n, t, e.highWaterMark, s) : l ? a.arrayBuffer() : "json" === t.responseType ? a.json() : a.text()
                })).then((function (a) {
                    var o = i.response;
                    if (!o) throw new Error("loader destroyed");
                    self.clearTimeout(i.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first);
                    var l = a[u];
                    l && (n.loaded = n.total = l);
                    var h = {url: o.url, data: a, code: o.status};
                    s && !y(e.highWaterMark) && s(n, t, a, o), r.onSuccess(h, n, t, o)
                })).catch((function (e) {
                    if (self.clearTimeout(i.requestTimeout), !n.aborted) {
                        var a = e && e.code || 0, s = e ? e.message : null;
                        r.onError({code: a, text: s}, t, e ? e.details : null, n)
                    }
                }))
            }, e.getCacheAge = function () {
                var t = null;
                if (this.response) {
                    var e = this.response.headers.get("age");
                    t = e ? parseFloat(e) : null
                }
                return t
            }, e.getResponseHeader = function (t) {
                return this.response ? this.response.headers.get(t) : null
            }, e.loadProgressively = function (t, e, r, i, n) {
                void 0 === i && (i = 0);
                var a = new ki, s = t.body.getReader();
                return function o() {
                    return s.read().then((function (s) {
                        if (s.done) return a.dataLength && n(e, r, a.flush(), t), Promise.resolve(new ArrayBuffer(0));
                        var l = s.value, u = l.length;
                        return e.loaded += u, u < i || a.dataLength ? (a.push(l), a.dataLength >= i && n(e, r, a.flush(), t)) : n(e, r, l, t), o()
                    })).catch((function () {
                        return Promise.reject()
                    }))
                }()
            }, t
        }();

        function Ws(t, e) {
            return new self.Request(t.url, e)
        }

        var js, qs = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e) || this).code = void 0, n.details = void 0, n.code = r, n.details = i, n
            }

            return l(e, t), e
        }(c(Error)), Xs = /\s/, zs = i(i({
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            ignoreDevicePixelRatio: !1,
            preferManagedMediaSource: !0,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            backBufferLength: 1 / 0,
            frontBufferFlushThreshold: 1 / 0,
            maxBufferSize: 6e7,
            maxBufferHole: .1,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: .1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: .25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            maxLiveSyncPlaybackRate: 1,
            liveDurationInfinity: !1,
            liveBackBufferLength: null,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            workerPath: null,
            enableSoftwareAES: !0,
            startLevel: void 0,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            loader: Hs,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: Br,
            bufferController: Qn,
            capLevelController: qa,
            errorController: br,
            fpsController: Xa,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrEwmaDefaultEstimateMax: 5e6,
            abrBandWidthFactor: .95,
            abrBandWidthUpFactor: .7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            drmSystems: {},
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: it,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0,
            cmcd: void 0,
            enableDateRangeMetadataCues: !0,
            enableEmsgMetadataCues: !0,
            enableID3MetadataCues: !0,
            useMediaCapabilities: !0,
            certLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 8e3,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: null,
                    errorRetry: null
                }
            },
            keyLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 8e3,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear"},
                    errorRetry: {maxNumRetry: 8, retryDelayMs: 1e3, maxRetryDelayMs: 2e4, backoff: "linear"}
                }
            },
            manifestLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1 / 0,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0},
                    errorRetry: {maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3}
                }
            },
            playlistLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0},
                    errorRetry: {maxNumRetry: 2, retryDelayMs: 1e3, maxRetryDelayMs: 8e3}
                }
            },
            fragLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 12e4,
                    timeoutRetry: {maxNumRetry: 4, retryDelayMs: 0, maxRetryDelayMs: 0},
                    errorRetry: {maxNumRetry: 6, retryDelayMs: 1e3, maxRetryDelayMs: 8e3}
                }
            },
            steeringManifestLoadPolicy: {
                default: {
                    maxTimeToFirstByteMs: 1e4,
                    maxLoadTimeMs: 2e4,
                    timeoutRetry: {maxNumRetry: 2, retryDelayMs: 0, maxRetryDelayMs: 0},
                    errorRetry: {maxNumRetry: 1, retryDelayMs: 1e3, maxRetryDelayMs: 8e3}
                }
            },
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3
        }, {
            cueHandler: {
                newCue: function (t, e, r, i) {
                    for (var n, a, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0; d < i.rows.length; d++) if (s = !0, o = 0, l = "", !(n = i.rows[d]).isEmpty()) {
                        for (var c, f = 0; f < n.chars.length; f++) Xs.test(n.chars[f].uchar) && s ? o++ : (l += n.chars[f].uchar, s = !1);
                        n.cueStartTime = e, e === r && (r += 1e-4), o >= 16 ? o-- : o++;
                        var g = ba(l.trim()), v = _a(e, r, g);
                        null != t && null != (c = t.cues) && c.getCueById(v) || ((a = new h(e, r, g)).id = v, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(a))
                    }
                    return t && u.length && (u.sort((function (t, e) {
                        return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                    })), u.forEach((function (e) {
                        return Me(t, e)
                    }))), u
                }
            },
            enableWebVTT: !0,
            enableIMSC1: !0,
            enableCEA708Captions: !0,
            captionsTextTrack1Label: "English",
            captionsTextTrack1LanguageCode: "en",
            captionsTextTrack2Label: "Spanish",
            captionsTextTrack2LanguageCode: "es",
            captionsTextTrack3Label: "Unknown CC",
            captionsTextTrack3LanguageCode: "",
            captionsTextTrack4Label: "Unknown CC",
            captionsTextTrack4LanguageCode: "",
            renderTextTracksNatively: !0
        }), {}, {
            subtitleStreamController: Wn,
            subtitleTrackController: qn,
            timelineController: Ya,
            audioStreamController: Vn,
            audioTrackController: Yn,
            emeController: Qa,
            cmcdController: Ns,
            contentSteeringController: Us
        });

        function Qs(t) {
            return t && "object" == typeof t ? Array.isArray(t) ? t.map(Qs) : Object.keys(t).reduce((function (e, r) {
                return e[r] = Qs(t[r]), e
            }), {}) : t
        }

        function Js(t) {
            var e = t.loader;
            e !== Ys && e !== Hs ? (w.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function () {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                    return new self.ReadableStream({}), !0
                } catch (t) {
                }
                return !1
            }() && (t.loader = Ys, t.progressive = !0, t.enableSoftwareAES = !0, w.log("[config]: Progressive streaming enabled, using FetchLoader"))
        }

        var $s = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, e, "[level-controller]") || this)._levels = [], i._firstLevel = -1, i._maxAutoLevel = -1, i._startLevel = void 0, i.currentLevel = null, i.currentLevelIndex = -1, i.manualLevelIndex = -1, i.steering = void 0, i.onParsedComplete = void 0, i.steering = r, i._registerListeners(), i
            }

            l(e, t);
            var r = e.prototype;
            return r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t.on(S.ERROR, this.onError, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t.off(S.ERROR, this.onError, this)
            }, r.destroy = function () {
                this._unregisterListeners(), this.steering = null, this.resetLevels(), t.prototype.destroy.call(this)
            }, r.stopLoad = function () {
                this._levels.forEach((function (t) {
                    t.loadError = 0, t.fragmentError = 0
                })), t.prototype.stopLoad.call(this)
            }, r.resetLevels = function () {
                this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1
            }, r.onManifestLoading = function (t, e) {
                this.resetLevels()
            }, r.onManifestLoaded = function (t, e) {
                var r = this.hls.config.preferManagedMediaSource, i = [], n = {}, a = {}, s = !1, o = !1, l = !1;
                e.levels.forEach((function (t) {
                    var e, u, h = t.attrs, d = t.audioCodec, c = t.videoCodec;
                    -1 !== (null == (e = d) ? void 0 : e.indexOf("mp4a.40.34")) && (js || (js = /chrome|firefox/i.test(navigator.userAgent)), js && (t.audioCodec = d = void 0)), d && (t.audioCodec = d = ue(d, r)), 0 === (null == (u = c) ? void 0 : u.indexOf("avc1")) && (c = t.videoCodec = function (t) {
                        var e = t.split(".");
                        if (e.length > 2) {
                            var r = e.shift() + ".";
                            return (r += parseInt(e.shift()).toString(16)) + ("000" + parseInt(e.shift()).toString(16)).slice(-4)
                        }
                        return t
                    }(c));
                    var f = t.width, g = t.height, v = t.unknownCodecs;
                    if (s || (s = !(!f || !g)), o || (o = !!c), l || (l = !!d), !(null != v && v.length || d && !re(d, "audio", r) || c && !re(c, "video", r))) {
                        var m = h.CODECS, p = h["FRAME-RATE"], y = h["HDCP-LEVEL"], E = h["PATHWAY-ID"],
                            T = h.RESOLUTION, S = h["VIDEO-RANGE"],
                            L = (E || ".") + "-" + t.bitrate + "-" + T + "-" + p + "-" + m + "-" + S + "-" + y;
                        if (n[L]) if (n[L].uri === t.url || t.attrs["PATHWAY-ID"]) n[L].addGroupId("audio", h.AUDIO), n[L].addGroupId("text", h.SUBTITLES); else {
                            var A = a[L] += 1;
                            t.attrs["PATHWAY-ID"] = new Array(A + 1).join(".");
                            var R = new tr(t);
                            n[L] = R, i.push(R)
                        } else {
                            var k = new tr(t);
                            n[L] = k, a[L] = 1, i.push(k)
                        }
                    }
                })), this.filterAndSortMediaOptions(i, e, s, o, l)
            }, r.filterAndSortMediaOptions = function (t, e, r, i, n) {
                var a = this, s = [], o = [], l = t;
                if ((r || i) && n && (l = l.filter((function (t) {
                    var e, r = t.videoCodec, i = t.videoRange, n = t.width, a = t.height;
                    return (!!r || !(!n || !a)) && !!(e = i) && ze.indexOf(e) > -1
                }))), 0 !== l.length) {
                    if (e.audioTracks) {
                        var u = this.hls.config.preferManagedMediaSource;
                        Zs(s = e.audioTracks.filter((function (t) {
                            return !t.audioCodec || re(t.audioCodec, "audio", u)
                        })))
                    }
                    e.subtitles && Zs(o = e.subtitles);
                    var h = l.slice(0);
                    l.sort((function (t, e) {
                        if (t.attrs["HDCP-LEVEL"] !== e.attrs["HDCP-LEVEL"]) return (t.attrs["HDCP-LEVEL"] || "") > (e.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
                        if (r && t.height !== e.height) return t.height - e.height;
                        if (t.frameRate !== e.frameRate) return t.frameRate - e.frameRate;
                        if (t.videoRange !== e.videoRange) return ze.indexOf(t.videoRange) - ze.indexOf(e.videoRange);
                        if (t.videoCodec !== e.videoCodec) {
                            var i = ae(t.videoCodec), n = ae(e.videoCodec);
                            if (i !== n) return n - i
                        }
                        if (t.uri === e.uri && t.codecSet !== e.codecSet) {
                            var a = se(t.codecSet), s = se(e.codecSet);
                            if (a !== s) return s - a
                        }
                        return t.bitrate !== e.bitrate ? t.bitrate - e.bitrate : 0
                    }));
                    var d = h[0];
                    if (this.steering && (l = this.steering.filterParsedLevels(l)).length !== h.length) for (var c = 0; c < h.length; c++) if (h[c].pathwayId === l[0].pathwayId) {
                        d = h[c];
                        break
                    }
                    this._levels = l;
                    for (var f = 0; f < l.length; f++) if (l[f] === d) {
                        var g;
                        this._firstLevel = f;
                        var v = d.bitrate, m = this.hls.bandwidthEstimate;
                        if (this.log("manifest loaded, " + l.length + " level(s) found, first bitrate: " + v), void 0 === (null == (g = this.hls.userConfig) ? void 0 : g.abrEwmaDefaultEstimate)) {
                            var p = Math.min(v, this.hls.config.abrEwmaDefaultEstimateMax);
                            p > m && m === zs.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = p)
                        }
                        break
                    }
                    var y = n && !i, E = {
                        levels: l,
                        audioTracks: s,
                        subtitleTracks: o,
                        sessionData: e.sessionData,
                        sessionKeys: e.sessionKeys,
                        firstLevel: this._firstLevel,
                        stats: e.stats,
                        audio: n,
                        video: i,
                        altAudio: !y && s.some((function (t) {
                            return !!t.url
                        }))
                    };
                    this.hls.trigger(S.MANIFEST_PARSED, E), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                } else Promise.resolve().then((function () {
                    if (a.hls) {
                        e.levels.length && a.warn("One or more CODECS in variant not supported: " + JSON.stringify(e.levels[0].attrs));
                        var t = new Error("no level with compatible codecs found in manifest");
                        a.hls.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: A.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: e.url,
                            error: t,
                            reason: t.message
                        })
                    }
                }))
            }, r.onError = function (t, e) {
                !e.fatal && e.context && e.context.type === ke && e.context.level === this.level && this.checkRetry(e)
            }, r.onFragBuffered = function (t, e) {
                var r = e.frag;
                if (void 0 !== r && r.type === Ie) {
                    var i = r.elementaryStreams;
                    if (!Object.keys(i).some((function (t) {
                        return !!i[t]
                    }))) return;
                    var n = this._levels[r.level];
                    null != n && n.loadError && (this.log("Resetting level error count of " + n.loadError + " on frag buffered"), n.loadError = 0)
                }
            }, r.onLevelLoaded = function (t, e) {
                var r, i, n = e.level, a = e.details, s = this._levels[n];
                if (!s) return this.warn("Invalid level index " + n), void (null != (i = e.deliveryDirectives) && i.skip && (a.deltaUpdateFailed = !0));
                n === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0), this.playlistLoaded(n, e, s.details)) : null != (r = e.deliveryDirectives) && r.skip && (a.deltaUpdateFailed = !0)
            }, r.loadPlaylist = function (e) {
                t.prototype.loadPlaylist.call(this);
                var r = this.currentLevelIndex, i = this.currentLevel;
                if (i && this.shouldLoadPlaylist(i)) {
                    var n = i.uri;
                    if (e) try {
                        n = e.addDirectives(n)
                    } catch (t) {
                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                    }
                    var a = i.attrs["PATHWAY-ID"];
                    this.log("Loading level index " + r + (void 0 !== (null == e ? void 0 : e.msn) ? " at sn " + e.msn + " part " + e.part : "") + " with" + (a ? " Pathway " + a : "") + " " + n), this.clearTimer(), this.hls.trigger(S.LEVEL_LOADING, {
                        url: n,
                        level: r,
                        pathwayId: i.attrs["PATHWAY-ID"],
                        id: 0,
                        deliveryDirectives: e || null
                    })
                }
            }, r.removeLevel = function (t) {
                var e, r = this, i = this._levels.filter((function (e, i) {
                    return i !== t || (r.steering && r.steering.removeLevel(e), e === r.currentLevel && (r.currentLevel = null, r.currentLevelIndex = -1, e.details && e.details.fragments.forEach((function (t) {
                        return t.level = -1
                    }))), !1)
                }));
                ur(i), this._levels = i, this.currentLevelIndex > -1 && null != (e = this.currentLevel) && e.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(S.LEVELS_UPDATED, {levels: i})
            }, r.onLevelsUpdated = function (t, e) {
                var r = e.levels;
                this._levels = r
            }, r.checkMaxAutoUpdated = function () {
                var t = this.hls, e = t.autoLevelCapping, r = t.maxAutoLevel, i = t.maxHdcpLevel;
                this._maxAutoLevel !== r && (this._maxAutoLevel = r, this.hls.trigger(S.MAX_AUTO_LEVEL_UPDATED, {
                    autoLevelCapping: e,
                    levels: this.levels,
                    maxAutoLevel: r,
                    minAutoLevel: this.hls.minAutoLevel,
                    maxHdcpLevel: i
                }))
            }, s(e, [{
                key: "levels", get: function () {
                    return 0 === this._levels.length ? null : this._levels
                }
            }, {
                key: "level", get: function () {
                    return this.currentLevelIndex
                }, set: function (t) {
                    var e = this._levels;
                    if (0 !== e.length) {
                        if (t < 0 || t >= e.length) {
                            var r = new Error("invalid level idx"), i = t < 0;
                            if (this.hls.trigger(S.ERROR, {
                                type: L.OTHER_ERROR,
                                details: A.LEVEL_SWITCH_ERROR,
                                level: t,
                                fatal: i,
                                error: r,
                                reason: r.message
                            }), i) return;
                            t = Math.min(t, e.length - 1)
                        }
                        var n = this.currentLevelIndex, a = this.currentLevel, s = a ? a.attrs["PATHWAY-ID"] : void 0,
                            o = e[t], l = o.attrs["PATHWAY-ID"];
                        if (this.currentLevelIndex = t, this.currentLevel = o, n !== t || !o.details || !a || s !== l) {
                            this.log("Switching to level " + t + " (" + (o.height ? o.height + "p " : "") + (o.videoRange ? o.videoRange + " " : "") + (o.codecSet ? o.codecSet + " " : "") + "@" + o.bitrate + ")" + (l ? " with Pathway " + l : "") + " from level " + n + (s ? " with Pathway " + s : ""));
                            var u = {
                                level: t,
                                attrs: o.attrs,
                                details: o.details,
                                bitrate: o.bitrate,
                                averageBitrate: o.averageBitrate,
                                maxBitrate: o.maxBitrate,
                                realBitrate: o.realBitrate,
                                width: o.width,
                                height: o.height,
                                codecSet: o.codecSet,
                                audioCodec: o.audioCodec,
                                videoCodec: o.videoCodec,
                                audioGroups: o.audioGroups,
                                subtitleGroups: o.subtitleGroups,
                                loaded: o.loaded,
                                loadError: o.loadError,
                                fragmentError: o.fragmentError,
                                name: o.name,
                                id: o.id,
                                uri: o.uri,
                                url: o.url,
                                urlId: 0,
                                audioGroupIds: o.audioGroupIds,
                                textGroupIds: o.textGroupIds
                            };
                            this.hls.trigger(S.LEVEL_SWITCHING, u);
                            var h = o.details;
                            if (!h || h.live) {
                                var d = this.switchParams(o.uri, null == a ? void 0 : a.details);
                                this.loadPlaylist(d)
                            }
                        }
                    }
                }
            }, {
                key: "manualLevel", get: function () {
                    return this.manualLevelIndex
                }, set: function (t) {
                    this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                }
            }, {
                key: "firstLevel", get: function () {
                    return this._firstLevel
                }, set: function (t) {
                    this._firstLevel = t
                }
            }, {
                key: "startLevel", get: function () {
                    if (void 0 === this._startLevel) {
                        var t = this.hls.config.startLevel;
                        return void 0 !== t ? t : this.hls.firstAutoLevel
                    }
                    return this._startLevel
                }, set: function (t) {
                    this._startLevel = t
                }
            }, {
                key: "nextLoadLevel", get: function () {
                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                }, set: function (t) {
                    this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                }
            }]), e
        }(Dr);

        function Zs(t) {
            var e = {};
            t.forEach((function (t) {
                var r = t.groupId || "";
                t.id = e[r] = e[r] || 0, e[r]++
            }))
        }

        var to = function () {
            function t(t) {
                this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t
            }

            var e = t.prototype;
            return e.abort = function (t) {
                for (var e in this.keyUriToKeyInfo) {
                    var r = this.keyUriToKeyInfo[e].loader;
                    if (r) {
                        var i;
                        if (t && t !== (null == (i = r.context) ? void 0 : i.frag.type)) return;
                        r.abort()
                    }
                }
            }, e.detach = function () {
                for (var t in this.keyUriToKeyInfo) {
                    var e = this.keyUriToKeyInfo[t];
                    (e.mediaKeySessionContext || e.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t]
                }
            }, e.destroy = function () {
                for (var t in this.detach(), this.keyUriToKeyInfo) {
                    var e = this.keyUriToKeyInfo[t].loader;
                    e && e.destroy()
                }
                this.keyUriToKeyInfo = {}
            }, e.createKeyLoadError = function (t, e, r, i, n) {
                return void 0 === e && (e = A.KEY_LOAD_ERROR), new si({
                    type: L.NETWORK_ERROR,
                    details: e,
                    fatal: !1,
                    frag: t,
                    response: n,
                    error: r,
                    networkDetails: i
                })
            }, e.loadClear = function (t, e) {
                var r = this;
                if (this.emeController && this.config.emeEnabled) for (var i = t.sn, n = t.cc, a = function () {
                    var t = e[s];
                    if (n <= t.cc && ("initSegment" === i || "initSegment" === t.sn || i < t.sn)) return r.emeController.selectKeySystemFormat(t).then((function (e) {
                        t.setKeyFormat(e)
                    })), 1
                }, s = 0; s < e.length && !a(); s++) ;
            }, e.load = function (t) {
                var e = this;
                return !t.decryptdata && t.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t).then((function (r) {
                    return e.loadInternal(t, r)
                })) : this.loadInternal(t)
            }, e.loadInternal = function (t, e) {
                var r, i;
                e && t.setKeyFormat(e);
                var n = t.decryptdata;
                if (!n) {
                    var a = new Error(e ? "Expected frag.decryptdata to be defined after setting format " + e : "Missing decryption data on fragment in onKeyLoading");
                    return Promise.reject(this.createKeyLoadError(t, A.KEY_LOAD_ERROR, a))
                }
                var s = n.uri;
                if (!s) return Promise.reject(this.createKeyLoadError(t, A.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + s + '"')));
                var o, l = this.keyUriToKeyInfo[s];
                if (null != (r = l) && r.decryptdata.key) return n.key = l.decryptdata.key, Promise.resolve({
                    frag: t,
                    keyInfo: l
                });
                if (null != (i = l) && i.keyLoadPromise) switch (null == (o = l.mediaKeySessionContext) ? void 0 : o.keyStatus) {
                    case void 0:
                    case"status-pending":
                    case"usable":
                    case"usable-in-future":
                        return l.keyLoadPromise.then((function (e) {
                            return n.key = e.keyInfo.decryptdata.key, {frag: t, keyInfo: l}
                        }))
                }
                switch (l = this.keyUriToKeyInfo[s] = {
                    decryptdata: n,
                    keyLoadPromise: null,
                    loader: null,
                    mediaKeySessionContext: null
                }, n.method) {
                    case"ISO-23001-7":
                    case"SAMPLE-AES":
                    case"SAMPLE-AES-CENC":
                    case"SAMPLE-AES-CTR":
                        return "identity" === n.keyFormat ? this.loadKeyHTTP(l, t) : this.loadKeyEME(l, t);
                    case"AES-128":
                        return this.loadKeyHTTP(l, t);
                    default:
                        return Promise.reject(this.createKeyLoadError(t, A.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + n.method + '"')))
                }
            }, e.loadKeyEME = function (t, e) {
                var r = {frag: e, keyInfo: t};
                if (this.emeController && this.config.emeEnabled) {
                    var i = this.emeController.loadKey(r);
                    if (i) return (t.keyLoadPromise = i.then((function (e) {
                        return t.mediaKeySessionContext = e, r
                    }))).catch((function (e) {
                        throw t.keyLoadPromise = null, e
                    }))
                }
                return Promise.resolve(r)
            }, e.loadKeyHTTP = function (t, e) {
                var r = this, n = this.config, a = new (0, n.loader)(n);
                return e.keyLoader = t.loader = a, t.keyLoadPromise = new Promise((function (s, o) {
                    var l = {keyInfo: t, frag: e, responseType: "arraybuffer", url: t.decryptdata.uri},
                        u = n.keyLoadPolicy.default,
                        h = {loadPolicy: u, timeout: u.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0},
                        d = {
                            onSuccess: function (t, e, i, n) {
                                var a = i.frag, l = i.keyInfo, u = i.url;
                                if (!a.decryptdata || l !== r.keyUriToKeyInfo[u]) return o(r.createKeyLoadError(a, A.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), n));
                                l.decryptdata.key = a.decryptdata.key = new Uint8Array(t.data), a.keyLoader = null, l.loader = null, s({
                                    frag: a,
                                    keyInfo: l
                                })
                            }, onError: function (t, n, a, s) {
                                r.resetLoader(n), o(r.createKeyLoadError(e, A.KEY_LOAD_ERROR, new Error("HTTP Error " + t.code + " loading key " + t.text), a, i({
                                    url: l.url,
                                    data: void 0
                                }, t)))
                            }, onTimeout: function (t, i, n) {
                                r.resetLoader(i), o(r.createKeyLoadError(e, A.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), n))
                            }, onAbort: function (t, i, n) {
                                r.resetLoader(i), o(r.createKeyLoadError(e, A.INTERNAL_ABORTED, new Error("key loading aborted"), n))
                            }
                        };
                    a.load(l, h, d)
                }))
            }, e.resetLoader = function (t) {
                var e = t.frag, r = t.keyInfo, i = t.url, n = r.loader;
                e.keyLoader === n && (e.keyLoader = null, r.loader = null), delete this.keyUriToKeyInfo[i], n && n.destroy()
            }, t
        }();

        function eo() {
            return self.SourceBuffer || self.WebKitSourceBuffer
        }

        function ro() {
            if (!te()) return !1;
            var t = eo();
            return !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove
        }

        var io = function () {
            function t(t, e, r, i) {
                this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = r, this.hls = i
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.media = null, this.hls = this.fragmentTracker = null
            }, e.poll = function (t, e) {
                var r = this.config, i = this.media, n = this.stalled;
                if (null !== i) {
                    var a = i.currentTime, s = i.seeking, o = this.seeking && !s, l = !this.seeking && s;
                    if (this.seeking = s, a === t) if (l || o) this.stalled = null; else if (i.paused && !s || i.ended || 0 === i.playbackRate || !zr.getBuffered(i).length) this.nudgeRetry = 0; else {
                        var u = zr.bufferInfo(i, a, 0), h = u.nextStart || 0;
                        if (s) {
                            var d = u.len > 2,
                                c = !h || e && e.start <= a || h - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                            if (d || c) return;
                            this.moved = !1
                        }
                        if (!this.moved && null !== this.stalled) {
                            var f;
                            if (!(u.len > 0 || h)) return;
                            var g = Math.max(h, u.start || 0) - a,
                                v = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                m = (null == v || null == (f = v.details) ? void 0 : f.live) ? 2 * v.details.targetduration : 2,
                                p = this.fragmentTracker.getPartialFragment(a);
                            if (g > 0 && (g <= m || p)) return void (i.paused || this._trySkipBufferHole(p))
                        }
                        var y = self.performance.now();
                        if (null !== n) {
                            var E = y - n;
                            if (s || !(E >= 250) || (this._reportStall(u), this.media)) {
                                var T = zr.bufferInfo(i, a, r.maxBufferHole);
                                this._tryFixBufferStall(T, E)
                            }
                        } else this.stalled = y
                    } else if (this.moved = !0, s || (this.nudgeRetry = 0), null !== n) {
                        if (this.stallReported) {
                            var S = self.performance.now() - n;
                            w.warn("playback not stuck anymore @" + a + ", after " + Math.round(S) + "ms"), this.stallReported = !1
                        }
                        this.stalled = null
                    }
                }
            }, e._tryFixBufferStall = function (t, e) {
                var r = this.config, i = this.fragmentTracker, n = this.media;
                if (null !== n) {
                    var a = n.currentTime, s = i.getPartialFragment(a);
                    if (s && (this._trySkipBufferHole(s) || !this.media)) return;
                    (t.len > r.maxBufferHole || t.nextStart && t.nextStart - a < r.maxBufferHole) && e > 1e3 * r.highBufferWatchdogPeriod && (w.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                }
            }, e._reportStall = function (t) {
                var e = this.hls, r = this.media;
                if (!this.stallReported && r) {
                    this.stallReported = !0;
                    var i = new Error("Playback stalling at @" + r.currentTime + " due to low buffer (" + JSON.stringify(t) + ")");
                    w.warn(i.message), e.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: A.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        error: i,
                        buffer: t.len
                    })
                }
            }, e._trySkipBufferHole = function (t) {
                var e = this.config, r = this.hls, i = this.media;
                if (null === i) return 0;
                var n = i.currentTime, a = zr.bufferInfo(i, n, 0), s = n < a.start ? a.start : a.nextStart;
                if (s) {
                    var o = a.len <= e.maxBufferHole, l = a.len > 0 && a.len < 1 && i.readyState < 3, u = s - n;
                    if (u > 0 && (o || l)) {
                        if (u > e.maxBufferHole) {
                            var h = this.fragmentTracker, d = !1;
                            if (0 === n) {
                                var c = h.getAppendedFrag(0, Ie);
                                c && s < c.end && (d = !0)
                            }
                            if (!d) {
                                var f = t || h.getAppendedFrag(n, Ie);
                                if (f) {
                                    for (var g = !1, v = f.end; v < s;) {
                                        var m = h.getPartialFragment(v);
                                        if (!m) {
                                            g = !0;
                                            break
                                        }
                                        v += m.duration
                                    }
                                    if (g) return 0
                                }
                            }
                        }
                        var p = Math.max(s + .05, n + .1);
                        if (w.warn("skipping hole, adjusting currentTime from " + n + " to " + p), this.moved = !0, this.stalled = null, i.currentTime = p, t && !t.gap) {
                            var y = new Error("fragment loaded with buffer holes, seeking from " + n + " to " + p);
                            r.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: A.BUFFER_SEEK_OVER_HOLE,
                                fatal: !1,
                                error: y,
                                reason: y.message,
                                frag: t
                            })
                        }
                        return p
                    }
                }
                return 0
            }, e._tryNudgeBuffer = function () {
                var t = this.config, e = this.hls, r = this.media, i = this.nudgeRetry;
                if (null !== r) {
                    var n = r.currentTime;
                    if (this.nudgeRetry++, i < t.nudgeMaxRetry) {
                        var a = n + (i + 1) * t.nudgeOffset,
                            s = new Error("Nudging 'currentTime' from " + n + " to " + a);
                        w.warn(s.message), r.currentTime = a, e.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: A.BUFFER_NUDGE_ON_STALL,
                            error: s,
                            fatal: !1
                        })
                    } else {
                        var o = new Error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges");
                        w.error(o.message), e.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: A.BUFFER_STALLED_ERROR,
                            error: o,
                            fatal: !0
                        })
                    }
                }
            }, t
        }(), no = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e, r, i, "[stream-controller]", Ie) || this).audioCodecSwap = !1, n.gapController = null, n.level = -1, n._forceStartLoad = !1, n.altAudio = !1, n.audioOnly = !1, n.fragPlaying = null, n.onvplaying = null, n.onvseeked = null, n.fragLastKbps = 0, n.couldBacktrack = !1, n.backtrackFragment = null, n.audioCodecSwitch = !1, n.videoBuffer = null, n._registerListeners(), n
            }

            l(e, t);
            var r = e.prototype;
            return r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.LEVEL_LOADING, this.onLevelLoading, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(S.ERROR, this.onError, this), t.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(S.BUFFER_CREATED, this.onBufferCreated, this), t.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(S.ERROR, this.onError, this), t.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(S.BUFFER_CREATED, this.onBufferCreated, this), t.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r.onHandlerDestroying = function () {
                this._unregisterListeners(), t.prototype.onHandlerDestroying.call(this)
            }, r.startLoad = function (t) {
                if (this.levels) {
                    var e = this.lastCurrentTime, r = this.hls;
                    if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                        var i = r.startLevel;
                        -1 === i && (r.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = r.firstAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                    }
                    e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = fi, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                } else this._forceStartLoad = !0, this.state = ci
            }, r.stopLoad = function () {
                this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
            }, r.doTick = function () {
                switch (this.state) {
                    case Ai:
                        var t = this.levels, e = this.level, r = null == t ? void 0 : t[e],
                            i = null == r ? void 0 : r.details;
                        if (i && (!i.live || this.levelLastLoaded === r)) {
                            if (this.waitForCdnTuneIn(i)) break;
                            this.state = fi;
                            break
                        }
                        if (this.hls.nextLoadLevel !== this.level) {
                            this.state = fi;
                            break
                        }
                        break;
                    case mi:
                        var n, a = self.performance.now(), s = this.retryDate;
                        if (!s || a >= s || null != (n = this.media) && n.seeking) {
                            var o = this.levels, l = this.level, u = null == o ? void 0 : o[l];
                            this.resetStartWhenNotLoaded(u || null), this.state = fi
                        }
                }
                this.state === fi && this.doTickIdle(), this.onTickEnd()
            }, r.onTickEnd = function () {
                t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
            }, r.doTickIdle = function () {
                var t = this.hls, e = this.levelLastLoaded, r = this.levels, i = this.media, n = t.config,
                    a = t.nextLoadLevel;
                if (null !== e && (i || !this.startFragRequested && n.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && null != r && r[a]) {
                    var s = r[a], o = this.getMainFwdBufferInfo();
                    if (null !== o) {
                        var l = this.getLevelDetails();
                        if (l && this._streamEnded(o, l)) {
                            var u = {};
                            return this.altAudio && (u.type = "video"), this.hls.trigger(S.BUFFER_EOS, u), void (this.state = Ti)
                        }
                        t.loadLevel !== a && -1 === t.manualLevel && this.log("Adapting to level " + a + " from level " + this.level), this.level = t.nextLoadLevel = a;
                        var h = s.details;
                        if (!h || this.state === Ai || h.live && this.levelLastLoaded !== s) return this.level = a, void (this.state = Ai);
                        var d = o.len, c = this.getMaxBufferLength(s.maxBitrate);
                        if (!(d >= c)) {
                            this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
                            var f = this.backtrackFragment ? this.backtrackFragment.start : o.end,
                                g = this.getNextFragment(f, h);
                            if (this.couldBacktrack && !this.fragPrevious && g && "initSegment" !== g.sn && this.fragmentTracker.getState(g) !== Yr) {
                                var v, m = (null != (v = this.backtrackFragment) ? v : g).sn - h.startSN,
                                    p = h.fragments[m - 1];
                                p && g.cc === p.cc && (g = p, this.fragmentTracker.removeFragment(p))
                            } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
                            if (g && this.isLoopLoading(g, f)) {
                                if (!g.gap) {
                                    var y = this.audioOnly && !this.altAudio ? O : N,
                                        E = (y === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                                    E && this.afterBufferFlushed(E, y, Ie)
                                }
                                g = this.getNextFragmentLoopLoading(g, h, o, Ie, c)
                            }
                            g && (!g.initSegment || g.initSegment.data || this.bitrateTest || (g = g.initSegment), this.loadFragment(g, s, f))
                        }
                    }
                }
            }, r.loadFragment = function (e, r, i) {
                var n = this.fragmentTracker.getState(e);
                this.fragCurrent = e, n === Kr || n === Vr ? "initSegment" === e.sn ? this._loadInitSegment(e, r) : this.bitrateTest ? (this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e, r)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : this.clearTrackerIfNeeded(e)
            }, r.getBufferedFrag = function (t) {
                return this.fragmentTracker.getBufferedFrag(t, Ie)
            }, r.followingBufferedFrag = function (t) {
                return t ? this.getBufferedFrag(t.end + .5) : null
            }, r.immediateLevelSwitch = function () {
                this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
            }, r.nextLevelSwitch = function () {
                var t = this.levels, e = this.media;
                if (null != e && e.readyState) {
                    var r, i = this.getAppendedFrag(e.currentTime);
                    i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
                    var n = this.getLevelDetails();
                    if (null != n && n.live) {
                        var a = this.getMainFwdBufferInfo();
                        if (!a || a.len < 2 * n.targetduration) return
                    }
                    if (!e.paused && t) {
                        var s = t[this.hls.nextLoadLevel], o = this.fragLastKbps;
                        r = o && this.fragCurrent ? this.fragCurrent.duration * s.maxBitrate / (1e3 * o) + 1 : 0
                    } else r = 0;
                    var l = this.getBufferedFrag(e.currentTime + r);
                    if (l) {
                        var u = this.followingBufferedFrag(l);
                        if (u) {
                            this.abortCurrentFrag();
                            var h = u.maxStartPTS ? u.maxStartPTS : u.start, d = u.duration,
                                c = Math.max(l.end, h + Math.min(Math.max(d - this.config.maxFragLookUpTolerance, d * (this.couldBacktrack ? .5 : .125)), d * (this.couldBacktrack ? .75 : .25)));
                            this.flushMainBuffer(c, Number.POSITIVE_INFINITY)
                        }
                    }
                }
            }, r.abortCurrentFrag = function () {
                var t = this.fragCurrent;
                switch (this.fragCurrent = null, this.backtrackFragment = null, t && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.state) {
                    case gi:
                    case vi:
                    case mi:
                    case yi:
                    case Ei:
                        this.state = fi
                }
                this.nextLoadPosition = this.getLoadPosition()
            }, r.flushMainBuffer = function (e, r) {
                t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
            }, r.onMediaAttached = function (e, r) {
                t.prototype.onMediaAttached.call(this, e, r);
                var i = r.media;
                this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new io(this.config, i, this.fragmentTracker, this.hls)
            }, r.onMediaDetaching = function () {
                var e = this.media;
                e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t.prototype.onMediaDetaching.call(this)
            }, r.onMediaPlaying = function () {
                this.tick()
            }, r.onMediaSeeked = function () {
                var t = this.media, e = t ? t.currentTime : null;
                y(e) && this.log("Media seeked to " + e.toFixed(3));
                var r = this.getMainFwdBufferInfo();
                null !== r && 0 !== r.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (r ? r.len : "empty") + ")")
            }, r.onManifestLoading = function () {
                this.log("Trigger BUFFER_RESET"), this.hls.trigger(S.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = !1
            }, r.onManifestParsed = function (t, e) {
                var r, i, n = !1, a = !1;
                e.levels.forEach((function (t) {
                    var e = t.audioCodec;
                    e && (n = n || -1 !== e.indexOf("mp4a.40.2"), a = a || -1 !== e.indexOf("mp4a.40.5"))
                })), this.audioCodecSwitch = n && a && !("function" == typeof (null == (i = eo()) || null == (r = i.prototype) ? void 0 : r.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
            }, r.onLevelLoading = function (t, e) {
                var r = this.levels;
                if (r && this.state === fi) {
                    var i = r[e.level];
                    (!i.details || i.details.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(i.details)) && (this.state = Ai)
                }
            }, r.onLevelLoaded = function (t, e) {
                var r, i = this.levels, n = e.level, a = e.details, s = a.totalduration;
                if (i) {
                    this.log("Level " + n + " loaded [" + a.startSN + "," + a.endSN + "]" + (a.lastPartSn ? "[part-" + a.lastPartSn + "-" + a.lastPartIndex + "]" : "") + ", cc [" + a.startCC + ", " + a.endCC + "] duration:" + s);
                    var o = i[n], l = this.fragCurrent;
                    !l || this.state !== vi && this.state !== mi || l.level !== e.level && l.loader && this.abortCurrentFrag();
                    var u = 0;
                    if (a.live || null != (r = o.details) && r.live) {
                        var h;
                        if (this.checkLiveUpdate(a), a.deltaUpdateFailed) return;
                        u = this.alignPlaylists(a, o.details, null == (h = this.levelLastLoaded) ? void 0 : h.details)
                    }
                    if (o.details = a, this.levelLastLoaded = o, this.hls.trigger(S.LEVEL_UPDATED, {
                        details: a,
                        level: n
                    }), this.state === Ai) {
                        if (this.waitForCdnTuneIn(a)) return;
                        this.state = fi
                    }
                    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, u), this.tick()
                } else this.warn("Levels were reset while loading level " + n)
            }, r._handleFragmentLoadProgress = function (t) {
                var e, r = t.frag, i = t.part, n = t.payload, a = this.levels;
                if (a) {
                    var s = a[r.level], o = s.details;
                    if (!o) return this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset"), void this.fragmentTracker.removeFragment(r);
                    var l = s.videoCodec, u = o.PTSKnown || !o.live, h = null == (e = r.initSegment) ? void 0 : e.data,
                        d = this._getAudioCodec(s),
                        c = this.transmuxer = this.transmuxer || new Bn(this.hls, Ie, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                        f = i ? i.index : -1, g = -1 !== f,
                        v = new Qr(r.level, r.sn, r.stats.chunkCount, n.byteLength, f, g), m = this.initPTS[r.cc];
                    c.push(n, h, d, l, r, i, o.totalduration, u, v, m)
                } else this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
            }, r.onAudioTrackSwitching = function (t, e) {
                var r = this.altAudio;
                if (!e.url) {
                    if (this.mediaBuffer !== this.media) {
                        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                        var i = this.fragCurrent;
                        i && (this.log("Switching to main audio track, cancel main fragment load"), i.abortRequests(), this.fragmentTracker.removeFragment(i)), this.resetTransmuxer(), this.resetLoadingState()
                    } else this.audioOnly && this.resetTransmuxer();
                    var n = this.hls;
                    r && (n.trigger(S.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: null
                    }), this.fragmentTracker.removeAllFragments()), n.trigger(S.AUDIO_TRACK_SWITCHED, e)
                }
            }, r.onAudioTrackSwitched = function (t, e) {
                var r = e.id, i = !!this.hls.audioTracks[r].url;
                if (i) {
                    var n = this.videoBuffer;
                    n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                }
                this.altAudio = i, this.tick()
            }, r.onBufferCreated = function (t, e) {
                var r, i, n = e.tracks, a = !1;
                for (var s in n) {
                    var o = n[s];
                    if ("main" === o.id) {
                        if (i = s, r = o, "video" === s) {
                            var l = n[s];
                            l && (this.videoBuffer = l.buffer)
                        }
                    } else a = !0
                }
                a && r ? (this.log("Alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
            }, r.onFragBuffered = function (t, e) {
                var r = e.frag, i = e.part;
                if (!r || r.type === Ie) {
                    if (this.fragContextChanged(r)) return this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === Ei && (this.state = fi));
                    var n = i ? i.stats : r.stats;
                    this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)), "initSegment" !== r.sn && (this.fragPrevious = r), this.fragBufferedComplete(r, i)
                }
            }, r.onError = function (t, e) {
                var r;
                if (e.fatal) this.state = Si; else switch (e.details) {
                    case A.FRAG_GAP:
                    case A.FRAG_PARSING_ERROR:
                    case A.FRAG_DECRYPT_ERROR:
                    case A.FRAG_LOAD_ERROR:
                    case A.FRAG_LOAD_TIMEOUT:
                    case A.KEY_LOAD_ERROR:
                    case A.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(Ie, e);
                        break;
                    case A.LEVEL_LOAD_ERROR:
                    case A.LEVEL_LOAD_TIMEOUT:
                    case A.LEVEL_PARSING_ERROR:
                        e.levelRetry || this.state !== Ai || (null == (r = e.context) ? void 0 : r.type) !== ke || (this.state = fi);
                        break;
                    case A.BUFFER_APPEND_ERROR:
                    case A.BUFFER_FULL_ERROR:
                        if (!e.parent || "main" !== e.parent) return;
                        if (e.details === A.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                        this.reduceLengthAndFlushBuffer(e) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                        break;
                    case A.INTERNAL_EXCEPTION:
                        this.recoverWorkerError(e)
                }
            }, r.checkBuffer = function () {
                var t = this.media, e = this.gapController;
                if (t && e && t.readyState) {
                    if (this.loadedmetadata || !zr.getBuffered(t).length) {
                        var r = this.state !== fi ? this.fragCurrent : null;
                        e.poll(this.lastCurrentTime, r)
                    }
                    this.lastCurrentTime = t.currentTime
                }
            }, r.onFragLoadEmergencyAborted = function () {
                this.state = fi, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
            }, r.onBufferFlushed = function (t, e) {
                var r = e.type;
                if (r !== O || this.audioOnly && !this.altAudio) {
                    var i = (r === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                    this.afterBufferFlushed(i, r, Ie), this.tick()
                }
            }, r.onLevelsUpdated = function (t, e) {
                this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = e.levels
            }, r.swapAudioCodec = function () {
                this.audioCodecSwap = !this.audioCodecSwap
            }, r.seekToStartPos = function () {
                var t = this.media;
                if (t) {
                    var e = t.currentTime, r = this.startPosition;
                    if (r >= 0 && e < r) {
                        if (t.seeking) return void this.log("could not seek to " + r + ", already seeking at " + e);
                        var i = zr.getBuffered(t), n = (i.length ? i.start(0) : 0) - r;
                        n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + n + " to match buffer start"), r += n, this.startPosition = r), this.log("seek to target start position " + r + " from current time " + e), t.currentTime = r
                    }
                }
            }, r._getAudioCodec = function (t) {
                var e = this.config.defaultAudioCodec || t.audioCodec;
                return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
            }, r._loadBitrateTestFrag = function (t, e) {
                var r = this;
                t.bitrateTest = !0, this._doFragLoad(t, e).then((function (i) {
                    var n = r.hls;
                    if (i && !r.fragContextChanged(t)) {
                        e.fragmentError = 0, r.state = fi, r.startFragRequested = !1, r.bitrateTest = !1;
                        var a = t.stats;
                        a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), n.trigger(S.FRAG_LOADED, i), t.bitrateTest = !1
                    }
                }))
            }, r._handleTransmuxComplete = function (t) {
                var e, r = "main", i = this.hls, n = t.remuxResult, a = t.chunkMeta, s = this.getCurrentContext(a);
                if (s) {
                    var o = s.frag, l = s.part, u = s.level, h = n.video, d = n.text, c = n.id3, f = n.initSegment,
                        g = u.details, v = this.altAudio ? void 0 : n.audio;
                    if (this.fragContextChanged(o)) this.fragmentTracker.removeFragment(o); else {
                        if (this.state = yi, f) {
                            if (null != f && f.tracks) {
                                var m = o.initSegment || o;
                                this._bufferInitSegment(u, f.tracks, m, a), i.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
                                    frag: m,
                                    id: r,
                                    tracks: f.tracks
                                })
                            }
                            var p = f.initPTS, E = f.timescale;
                            y(p) && (this.initPTS[o.cc] = {
                                baseTime: p,
                                timescale: E
                            }, i.trigger(S.INIT_PTS_FOUND, {frag: o, id: r, initPTS: p, timescale: E}))
                        }
                        if (h && g && "initSegment" !== o.sn) {
                            var T = g.fragments[o.sn - 1 - g.startSN], L = o.sn === g.startSN, A = !T || o.cc > T.cc;
                            if (!1 !== n.independent) {
                                var R = h.startPTS, k = h.endPTS, b = h.startDTS, D = h.endDTS;
                                if (l) l.elementaryStreams[h.type] = {
                                    startPTS: R,
                                    endPTS: k,
                                    startDTS: b,
                                    endDTS: D
                                }; else if (h.firstKeyFrame && h.independent && 1 === a.id && !A && (this.couldBacktrack = !0), h.dropped && h.independent) {
                                    var I = this.getMainFwdBufferInfo(),
                                        w = (I ? I.end : this.getLoadPosition()) + this.config.maxBufferHole,
                                        C = h.firstKeyFramePTS ? h.firstKeyFramePTS : R;
                                    if (!L && w < C - this.config.maxBufferHole && !A) return void this.backtrack(o);
                                    A && (o.gap = !0), o.setElementaryStreamInfo(h.type, o.start, k, o.start, D, !0)
                                } else L && R > 2 && (o.gap = !0);
                                o.setElementaryStreamInfo(h.type, R, k, b, D), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(h, o, l, a, L || A)
                            } else {
                                if (!L && !A) return void this.backtrack(o);
                                o.gap = !0
                            }
                        }
                        if (v) {
                            var _ = v.startPTS, x = v.endPTS, P = v.startDTS, F = v.endDTS;
                            l && (l.elementaryStreams[O] = {
                                startPTS: _,
                                endPTS: x,
                                startDTS: P,
                                endDTS: F
                            }), o.setElementaryStreamInfo(O, _, x, P, F), this.bufferFragmentData(v, o, l, a)
                        }
                        if (g && null != c && null != (e = c.samples) && e.length) {
                            var M = {id: r, frag: o, details: g, samples: c.samples};
                            i.trigger(S.FRAG_PARSING_METADATA, M)
                        }
                        if (g && d) {
                            var N = {id: r, frag: o, details: g, samples: d.samples};
                            i.trigger(S.FRAG_PARSING_USERDATA, N)
                        }
                    }
                } else this.resetWhenMissingContext(a)
            }, r._bufferInitSegment = function (t, e, r, i) {
                var n = this;
                if (this.state === yi) {
                    this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
                    var a = e.audio, s = e.video, o = e.audiovideo;
                    if (a) {
                        var l = t.audioCodec, u = navigator.userAgent.toLowerCase();
                        this.audioCodecSwitch && (l && (l = -1 !== l.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a.metadata.channelCount && -1 === u.indexOf("firefox") && (l = "mp4a.40.5")), l && -1 !== l.indexOf("mp4a.40.5") && -1 !== u.indexOf("android") && "audio/mpeg" !== a.container && (l = "mp4a.40.2", this.log("Android: force audio codec to " + l)), t.audioCodec && t.audioCodec !== l && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + l + '"'), a.levelCodec = l, a.id = "main", this.log("Init audio buffer, container:" + a.container + ", codecs[selected/level/parsed]=[" + (l || "") + "/" + (t.audioCodec || "") + "/" + a.codec + "]")
                    }
                    s && (s.levelCodec = t.videoCodec, s.id = "main", this.log("Init video buffer, container:" + s.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + s.codec + "]")), o && this.log("Init audiovideo buffer, container:" + o.container + ", codecs[level/parsed]=[" + t.codecs + "/" + o.codec + "]"), this.hls.trigger(S.BUFFER_CODECS, e), Object.keys(e).forEach((function (t) {
                        var a = e[t].initSegment;
                        null != a && a.byteLength && n.hls.trigger(S.BUFFER_APPENDING, {
                            type: t,
                            data: a,
                            frag: r,
                            part: null,
                            chunkMeta: i,
                            parent: r.type
                        })
                    })), this.tickImmediate()
                }
            }, r.getMainFwdBufferInfo = function () {
                return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, Ie)
            }, r.backtrack = function (t) {
                this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = fi
            }, r.checkFragmentChanged = function () {
                var t = this.media, e = null;
                if (t && t.readyState > 1 && !1 === t.seeking) {
                    var r = t.currentTime;
                    if (zr.isBuffered(t, r) ? e = this.getAppendedFrag(r) : zr.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)), e) {
                        this.backtrackFragment = null;
                        var i = this.fragPlaying, n = e.level;
                        i && e.sn === i.sn && i.level === n || (this.fragPlaying = e, this.hls.trigger(S.FRAG_CHANGED, {frag: e}), i && i.level === n || this.hls.trigger(S.LEVEL_SWITCHED, {level: n}))
                    }
                }
            }, s(e, [{
                key: "nextLevel", get: function () {
                    var t = this.nextBufferedFrag;
                    return t ? t.level : -1
                }
            }, {
                key: "currentFrag", get: function () {
                    var t = this.media;
                    return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
                }
            }, {
                key: "currentProgramDateTime", get: function () {
                    var t = this.media;
                    if (t) {
                        var e = t.currentTime, r = this.currentFrag;
                        if (r && y(e) && y(r.programDateTime)) {
                            var i = r.programDateTime + 1e3 * (e - r.start);
                            return new Date(i)
                        }
                    }
                    return null
                }
            }, {
                key: "currentLevel", get: function () {
                    var t = this.currentFrag;
                    return t ? t.level : -1
                }
            }, {
                key: "nextBufferedFrag", get: function () {
                    var t = this.currentFrag;
                    return t ? this.followingBufferedFrag(t) : null
                }
            }, {
                key: "forceStartLoad", get: function () {
                    return this._forceStartLoad
                }
            }]), e
        }(Ri), ao = function () {
            function t(e) {
                void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = !1, this._emitter = new Mn, this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, I(e.debug || !1, "Hls instance");
                var r = this.config = function (t, e) {
                    if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                    if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                    var r = Qs(t), n = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
                    return ["manifest", "level", "frag"].forEach((function (t) {
                        var i = ("level" === t ? "playlist" : t) + "LoadPolicy", a = void 0 === e[i], s = [];
                        n.forEach((function (n) {
                            var o = t + "Loading" + n, l = e[o];
                            if (void 0 !== l && a) {
                                s.push(o);
                                var u = r[i].default;
                                switch (e[i] = {default: u}, n) {
                                    case"TimeOut":
                                        u.maxLoadTimeMs = l, u.maxTimeToFirstByteMs = l;
                                        break;
                                    case"MaxRetry":
                                        u.errorRetry.maxNumRetry = l, u.timeoutRetry.maxNumRetry = l;
                                        break;
                                    case"RetryDelay":
                                        u.errorRetry.retryDelayMs = l, u.timeoutRetry.retryDelayMs = l;
                                        break;
                                    case"MaxRetryTimeout":
                                        u.errorRetry.maxRetryDelayMs = l, u.timeoutRetry.maxRetryDelayMs = l
                                }
                            }
                        })), s.length && w.warn('hls.js config: "' + s.join('", "') + '" setting(s) are deprecated, use "' + i + '": ' + JSON.stringify(e[i]))
                    })), i(i({}, r), e)
                }(t.DefaultConfig, e);
                this.userConfig = e, r.progressive && Js(r);
                var n = r.abrController, a = r.bufferController, s = r.capLevelController, o = r.errorController,
                    l = r.fpsController, u = new o(this), h = this.abrController = new n(this),
                    d = this.bufferController = new a(this), c = this.capLevelController = new s(this), f = new l(this),
                    g = new Pe(this), v = new je(this), m = r.contentSteeringController, p = m ? new m(this) : null,
                    y = this.levelController = new $s(this, p), E = new Wr(this), T = new to(this.config),
                    L = this.streamController = new no(this, E, T);
                c.setStreamController(L), f.setStreamController(L);
                var A = [g, y, L];
                p && A.splice(1, 0, p), this.networkControllers = A;
                var R = [h, d, c, f, v, E];
                this.audioTrackController = this.createController(r.audioTrackController, A);
                var k = r.audioStreamController;
                k && A.push(new k(this, E, T)), this.subtitleTrackController = this.createController(r.subtitleTrackController, A);
                var b = r.subtitleStreamController;
                b && A.push(new b(this, E, T)), this.createController(r.timelineController, R), T.emeController = this.emeController = this.createController(r.emeController, R), this.cmcdController = this.createController(r.cmcdController, R), this.latencyController = this.createController(qe, R), this.coreComponents = R, A.push(u);
                var D = u.onErrorOut;
                "function" == typeof D && this.on(S.ERROR, D, u)
            }

            t.isMSESupported = function () {
                return ro()
            }, t.isSupported = function () {
                return function () {
                    if (!ro()) return !1;
                    var t = te();
                    return "function" == typeof (null == t ? void 0 : t.isTypeSupported) && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((function (e) {
                        return t.isTypeSupported(ne(e, "video"))
                    })) || ["mp4a.40.2", "fLaC"].some((function (e) {
                        return t.isTypeSupported(ne(e, "audio"))
                    })))
                }()
            }, t.getMediaSource = function () {
                return te()
            };
            var e = t.prototype;
            return e.createController = function (t, e) {
                if (t) {
                    var r = new t(this);
                    return e && e.push(r), r
                }
                return null
            }, e.on = function (t, e, r) {
                void 0 === r && (r = this), this._emitter.on(t, e, r)
            }, e.once = function (t, e, r) {
                void 0 === r && (r = this), this._emitter.once(t, e, r)
            }, e.removeAllListeners = function (t) {
                this._emitter.removeAllListeners(t)
            }, e.off = function (t, e, r, i) {
                void 0 === r && (r = this), this._emitter.off(t, e, r, i)
            }, e.listeners = function (t) {
                return this._emitter.listeners(t)
            }, e.emit = function (t, e, r) {
                return this._emitter.emit(t, e, r)
            }, e.trigger = function (t, e) {
                if (this.config.debug) return this.emit(t, t, e);
                try {
                    return this.emit(t, t, e)
                } catch (e) {
                    if (w.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), !this.triggeringException) {
                        this.triggeringException = !0;
                        var r = t === S.ERROR;
                        this.trigger(S.ERROR, {
                            type: L.OTHER_ERROR,
                            details: A.INTERNAL_EXCEPTION,
                            fatal: r,
                            event: t,
                            error: e
                        }), this.triggeringException = !1
                    }
                }
                return !1
            }, e.listenerCount = function (t) {
                return this._emitter.listenerCount(t)
            }, e.destroy = function () {
                w.log("destroy"), this.trigger(S.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((function (t) {
                    return t.destroy()
                })), this.networkControllers.length = 0, this.coreComponents.forEach((function (t) {
                    return t.destroy()
                })), this.coreComponents.length = 0;
                var t = this.config;
                t.xhrSetup = t.fetchSetup = void 0, this.userConfig = null
            }, e.attachMedia = function (t) {
                w.log("attachMedia"), this._media = t, this.trigger(S.MEDIA_ATTACHING, {media: t})
            }, e.detachMedia = function () {
                w.log("detachMedia"), this.trigger(S.MEDIA_DETACHING, void 0), this._media = null
            }, e.loadSource = function (t) {
                this.stopLoad();
                var e = this.media, r = this.url,
                    i = this.url = p.buildAbsoluteURL(self.location.href, t, {alwaysNormalize: !0});
                this._autoLevelCapping = -1, this._maxHdcpLevel = null, w.log("loadSource:" + i), e && r && (r !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)), this.trigger(S.MANIFEST_LOADING, {url: t})
            }, e.startLoad = function (t) {
                void 0 === t && (t = -1), w.log("startLoad(" + t + ")"), this.started = !0, this.networkControllers.forEach((function (e) {
                    e.startLoad(t)
                }))
            }, e.stopLoad = function () {
                w.log("stopLoad"), this.started = !1, this.networkControllers.forEach((function (t) {
                    t.stopLoad()
                }))
            }, e.resumeBuffering = function () {
                this.started && this.networkControllers.forEach((function (t) {
                    "fragmentLoader" in t && t.startLoad(-1)
                }))
            }, e.pauseBuffering = function () {
                this.networkControllers.forEach((function (t) {
                    "fragmentLoader" in t && t.stopLoad()
                }))
            }, e.swapAudioCodec = function () {
                w.log("swapAudioCodec"), this.streamController.swapAudioCodec()
            }, e.recoverMediaError = function () {
                w.log("recoverMediaError");
                var t = this._media;
                this.detachMedia(), t && this.attachMedia(t)
            }, e.removeLevel = function (t) {
                this.levelController.removeLevel(t)
            }, e.setAudioOption = function (t) {
                var e;
                return null == (e = this.audioTrackController) ? void 0 : e.setAudioOption(t)
            }, e.setSubtitleOption = function (t) {
                var e;
                return null == (e = this.subtitleTrackController) || e.setSubtitleOption(t), null
            }, s(t, [{
                key: "levels", get: function () {
                    var t = this.levelController.levels;
                    return t || []
                }
            }, {
                key: "currentLevel", get: function () {
                    return this.streamController.currentLevel
                }, set: function (t) {
                    w.log("set currentLevel:" + t), this.levelController.manualLevel = t, this.streamController.immediateLevelSwitch()
                }
            }, {
                key: "nextLevel", get: function () {
                    return this.streamController.nextLevel
                }, set: function (t) {
                    w.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                }
            }, {
                key: "loadLevel", get: function () {
                    return this.levelController.level
                }, set: function (t) {
                    w.log("set loadLevel:" + t), this.levelController.manualLevel = t
                }
            }, {
                key: "nextLoadLevel", get: function () {
                    return this.levelController.nextLoadLevel
                }, set: function (t) {
                    this.levelController.nextLoadLevel = t
                }
            }, {
                key: "firstLevel", get: function () {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                }, set: function (t) {
                    w.log("set firstLevel:" + t), this.levelController.firstLevel = t
                }
            }, {
                key: "startLevel", get: function () {
                    var t = this.levelController.startLevel;
                    return -1 === t && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : t
                }, set: function (t) {
                    w.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
                }
            }, {
                key: "capLevelToPlayerSize", get: function () {
                    return this.config.capLevelToPlayerSize
                }, set: function (t) {
                    var e = !!t;
                    e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
                }
            }, {
                key: "autoLevelCapping", get: function () {
                    return this._autoLevelCapping
                }, set: function (t) {
                    this._autoLevelCapping !== t && (w.log("set autoLevelCapping:" + t), this._autoLevelCapping = t, this.levelController.checkMaxAutoUpdated())
                }
            }, {
                key: "bandwidthEstimate", get: function () {
                    var t = this.abrController.bwEstimator;
                    return t ? t.getEstimate() : NaN
                }, set: function (t) {
                    this.abrController.resetEstimator(t)
                }
            }, {
                key: "ttfbEstimate", get: function () {
                    var t = this.abrController.bwEstimator;
                    return t ? t.getEstimateTTFB() : NaN
                }
            }, {
                key: "maxHdcpLevel", get: function () {
                    return this._maxHdcpLevel
                }, set: function (t) {
                    (function (t) {
                        return Xe.indexOf(t) > -1
                    })(t) && this._maxHdcpLevel !== t && (this._maxHdcpLevel = t, this.levelController.checkMaxAutoUpdated())
                }
            }, {
                key: "autoLevelEnabled", get: function () {
                    return -1 === this.levelController.manualLevel
                }
            }, {
                key: "manualLevel", get: function () {
                    return this.levelController.manualLevel
                }
            }, {
                key: "minAutoLevel", get: function () {
                    var t = this.levels, e = this.config.minAutoBitrate;
                    if (!t) return 0;
                    for (var r = t.length, i = 0; i < r; i++) if (t[i].maxBitrate >= e) return i;
                    return 0
                }
            }, {
                key: "maxAutoLevel", get: function () {
                    var t, e = this.levels, r = this.autoLevelCapping, i = this.maxHdcpLevel;
                    if (t = -1 === r && null != e && e.length ? e.length - 1 : r, i) for (var n = t; n--;) {
                        var a = e[n].attrs["HDCP-LEVEL"];
                        if (a && a <= i) return n
                    }
                    return t
                }
            }, {
                key: "firstAutoLevel", get: function () {
                    return this.abrController.firstAutoLevel
                }
            }, {
                key: "nextAutoLevel", get: function () {
                    return this.abrController.nextAutoLevel
                }, set: function (t) {
                    this.abrController.nextAutoLevel = t
                }
            }, {
                key: "playingDate", get: function () {
                    return this.streamController.currentProgramDateTime
                }
            }, {
                key: "mainForwardBufferInfo", get: function () {
                    return this.streamController.getMainFwdBufferInfo()
                }
            }, {
                key: "allAudioTracks", get: function () {
                    var t = this.audioTrackController;
                    return t ? t.allAudioTracks : []
                }
            }, {
                key: "audioTracks", get: function () {
                    var t = this.audioTrackController;
                    return t ? t.audioTracks : []
                }
            }, {
                key: "audioTrack", get: function () {
                    var t = this.audioTrackController;
                    return t ? t.audioTrack : -1
                }, set: function (t) {
                    var e = this.audioTrackController;
                    e && (e.audioTrack = t)
                }
            }, {
                key: "allSubtitleTracks", get: function () {
                    var t = this.subtitleTrackController;
                    return t ? t.allSubtitleTracks : []
                }
            }, {
                key: "subtitleTracks", get: function () {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTracks : []
                }
            }, {
                key: "subtitleTrack", get: function () {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTrack : -1
                }, set: function (t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleTrack = t)
                }
            }, {
                key: "media", get: function () {
                    return this._media
                }
            }, {
                key: "subtitleDisplay", get: function () {
                    var t = this.subtitleTrackController;
                    return !!t && t.subtitleDisplay
                }, set: function (t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleDisplay = t)
                }
            }, {
                key: "lowLatencyMode", get: function () {
                    return this.config.lowLatencyMode
                }, set: function (t) {
                    this.config.lowLatencyMode = t
                }
            }, {
                key: "liveSyncPosition", get: function () {
                    return this.latencyController.liveSyncPosition
                }
            }, {
                key: "latency", get: function () {
                    return this.latencyController.latency
                }
            }, {
                key: "maxLatency", get: function () {
                    return this.latencyController.maxLatency
                }
            }, {
                key: "targetLatency", get: function () {
                    return this.latencyController.targetLatency
                }
            }, {
                key: "drift", get: function () {
                    return this.latencyController.drift
                }
            }, {
                key: "forceStartLoad", get: function () {
                    return this.streamController.forceStartLoad
                }
            }], [{
                key: "version", get: function () {
                    return "1.5.1"
                }
            }, {
                key: "Events", get: function () {
                    return S
                }
            }, {
                key: "ErrorTypes", get: function () {
                    return L
                }
            }, {
                key: "ErrorDetails", get: function () {
                    return A
                }
            }, {
                key: "DefaultConfig", get: function () {
                    return t.defaultConfig ? t.defaultConfig : zs
                }, set: function (e) {
                    t.defaultConfig = e
                }
            }]), t
        }();
        return ao.defaultConfig = void 0, ao
    }, "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (r = "undefined" != typeof globalThis ? globalThis : r || self).Hls = i()
}(!1);
//# sourceMappingURL=hls.min.js.map
