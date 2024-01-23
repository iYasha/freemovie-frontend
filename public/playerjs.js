//	Playerjs.com 19.4.10
//	25.12.2023 21:56:05
//	API - https://playerjs.com/docs/q=api


function mapQualityStream(streams) {
    return streams.map((stream) => {
        return '[' + stream.quality + ']' + stream.streams.hls;
    }).join(',');
}


function getStreamUrl(rezka_movie_id, rezka_audio_id, host, authToken, movie_type, season= 1, episode= 1, return_data=false) {
    function getStreamResponse(request_data) {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open(request_data.method, request_data.url, false);
            Object.entries(request_data.headers).forEach(([key, value]) => {
                xhr.setRequestHeader(key, value);
            });
            const urlEncodedData = Object.keys(request_data.data)
                .map(
                    (key) =>
                        encodeURIComponent(key) +
                        '=' +
                        encodeURIComponent(request_data.data[key])
                )
                .join('&');

            xhr.send(urlEncodedData);
            return JSON.parse(xhr.responseText);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    function getStreamUrls(cdn_response) {
        const requestUrl = host + '/api/v1/movies/' + movie_type + '/stream/parse/';
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', requestUrl, false);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', authToken);
            xhr.send(JSON.stringify(cdn_response));
            return JSON.parse(xhr.responseText).data;
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    let requestUrl = host + '/api/v1/movies/' + movie_type + '/' + rezka_movie_id + '/audio/' + rezka_audio_id;
    if (movie_type === 'series') {
        requestUrl += '/season/' + season + '/episode/' + episode;
    }
    requestUrl += '/stream/request'

    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl, false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', authToken);
        xhr.send();
        const response = JSON.parse(xhr.responseText);
        const stream_response = getStreamResponse(response.data);
        const parsed_data = getStreamUrls(stream_response);
        if (return_data === true) {
            return parsed_data;
        }
        return mapQualityStream(parsed_data.streams);
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
}('if(!1S.5h){B 5h=[];B eS}if(1S[\'Lb\']){1G(Lb,1)};E Ds(2Q){B o={1A:P,ng:[],tW:[],kN:\'N4\',N5:KC,N6:KL,8S:\'19.4.10\',gs:[\'8B\',\'\'],kC:\'\',2a:P,8v:P,ao:P,N7:P,eo:P,6m:P,96:P,9r:P,u:\'#N8#N9#Na#Nb#MZ#Ne#Np#Nv#Nu#zV#Nm#Nl#Nj#Ni#Nh#MG#Mr#Fr#Ms#Mu#Mw#Mx#My#MA#zV#MC#MD#ME#Mq#MF#MU#MS#MQ#MH#MM#ML#MK#Fr#MJ==\',u2:\'\',u3:\'\',u4:\'\',u5:\'\',u6:\'\',u7:\'\',u8:\'\',u9:\'\',MI:\'\',y:\'xx??x?=xx????=\',p:\'\',Nw:-1,vX:"Fv",gI:"//Fv.7R",7G:[],dt:H,pr:H,ga:P,ab:P,kk:[],MY:P,ew:\'//.9b//\',uY:0,2G:[],7B:[],aI:[],3i:[],om:[],az:0,8L:[],nX:0,qP:P,6j:P,1E:P,ul:P,8m:P,ni:\'<Fx>\',iZ:\'</Fx>\',9m:1S.cq.17<2p&&1S.cq.1e<2p,yt:[],O8:[],5W:{\'1P\':1,\'AX\':1,\'bV\':1,\'gF\':1,\'qk\':0},aA:[],qV:0,fZ:0,5H:P,5k:P,go:P,oa:P,Oe:[],b0:P,bJ:0,jq:P,sX:1M,iN:1M,tN:P,D6:E(x){B a;I a},Oh:0,oA:4z,4Q:P,eb:P,w0:22.w0,d:8Q.xI,jN:8Q.xI,9L:8Q.9L,cu:8Q.9L.K("cu")==0,Oi:{},xP:\'Ok-CX.7R/CX.js\',fd:["D6","Eh"],6f:[],Om:[],Oo:[],hv:1,oG:[],Eh:E(x,y,z){B a;I a},1b:0,pg:0,5u:P,dk:-1,ah:3,Op:0,rZ:0,aH:0,3M:{x:1,y:1,x0:1,y0:1},cr:["h0","gz","gt","kO","kL","lc","lU","jC","cv","cO","mR","mI"],lK:["OC","OB","OA","Or"],dS:0,Ov:0,s9:0,zC:0,dQ:0,Ax:[],cM:[\'7y\',\'dJ\',\'pI\',\'6O\'],Ou:[],pa:H,s6:[],ql:0,ws:"w"+"s",mj:P,pL:[P,P,P]};B g8={V:{w:20,h:20,1i:"-",Ot:"-",a:1,7r:-1,1r:"3L",1K:"",1P:1,f0:-1,aN:0,2A:1,1v:"",1F:"",3R:"NA",dG:12,iF:0,1l:"S",2M:"0 3 0 3",an:"0 0 0 0",2x:1,hF:"0 0 0 0",ND:0,l1:1,bg:0,nL:0,Lp:0,4s:1,8J:-1,4j:"4b",9T:-1,he:"0 0 0 0",kY:-1,kZ:"3L",bi:-1,pV:-1,6h:"1U",41:"r4",2A:0,jZ:"4b",k9:0.7,xZ:0,xC:"3L",jU:"3 5 3 5",NI:"0 0 0 0",NJ:1,xg:"pA-pz",xD:11,xX:0,2T:"",B7:5,B8:0,3g:0,Nz:2,NZ:2,Kn:0.2,KU:0,Ll:0.1,e0:0,FF:"O3",nt:1,Gb:5,KR:"4b",Ko:"3L",Ln:"3L",KN:1,HE:1,xm:1,6P:0,3H:0,hl:20,dp:"<2g 17=\'20\' 1e=\'20\'><g><dx ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 5g=\'#f9\'/></g></2g>",xq:1,nU:-1,jh:0,nR:1,xA:-1,O1:0.1,fb:0,3m:"",Jh:0,JN:"r4",3h:"",KD:Ej,KP:Ej,Iq:0,5Y:0,62:"3L",Jg:0,Jd:"4b",L2:9,x8:"0 0 10 0",x9:"0 0 0 0",JE:0}};E A5(){I H;o.Ah=H}E cW(s){if(s.K(\'.\')==-1){s=s.1q(1);s2=\'\';W(i=0;i<s.U;i+=3){s2+=\'%u0\'+s.7f(i,i+3)}s=O0(s2)}I s};E zx(){if(o.u!=\'\'){v=a3(v,5w.7b(eg(o.u)))}if(2Q.K("#"+v.9O)==0){3w{2Q=5w.7b(o[o.fd[0]](2Q))}2X(e){}}F{if(2Q.K("#"+v.cP)==0){3w{2Q=5w.7b(o[o.fd[1]](2Q))}2X(e){}}}}E 7T(x,y){}E q9(y,1h){}B yE=E(){B 9q=1Q("1Y");o.1T.1N(9q);O(9q,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1e\':30,\'2j-1r\':v.F8,\'1C\':v.EZ,\'2l\':\'1U\'});B x=1Q("1Y");o.1T.1N(x);O(x,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1r\':v.F5,\'3R-3T\':v.CE,\'2V\':(v.F3+\'px \'+v.F1+\'px\'),\'2l\':\'1U\'});G.9b=E(1F,n){x.1R=1F;6k(x);O(9q,{\'1e\':x.2S,\'2l\':\'4r\'});9q.C.4N="NX";W(B i=0;i<x.ac(\'a\').U;i++){x.ac(\'a\')[i].C.1r=\'#f9\'}if(n){1G(G.pn,2p*n)}x.C.4N="NW"};G.pn=E(){3k(x);3k(9q)}};2o(E(w,i,s,e){B aE=0;B 91=0;B h3=0;B ef=[];B eE=[];nT(H){if(aE<5)eE.2L(w.6R(aE));F if(aE<w.U)ef.2L(w.6R(aE));aE++;if(91<5)eE.2L(i.6R(91));F if(91<i.U)ef.2L(i.6R(91));91++;if(h3<5)eE.2L(s.6R(h3));F if(h3<s.U)ef.2L(s.6R(h3));h3++;if(w.U+i.U+s.U+e.U==ef.U+eE.U+e.U)1k}B D1=ef.vP(\'\');B E9=eE.vP(\'\');91=0;B wC=[];W(aE=0;aE<ef.U;aE+=2){B wG=-1;if(E9.bE(91)%2)wG=1;wC.2L(6v.uj(2P(D1.1q(aE,2),36)-wG));91++;if(91>=eE.U)91=0}I wC.vP(\'\')}(\'Mb\',\'M2\',\'LR\',\'LV\'));B v={1w:0,ug:0,pu:"#4b",2Y:0,wb:1,8s:"#4b",4j:"#3L",6P:0,eB:1,ma:1,3o:0,rq:1,eG:0,aq:1,1u:{LW:0,1r:"4b",a:"0.4",h:34,jO:1,1n:1,l8:1,du:0,jv:3,9N:0,s8:3,6h:"1U",1l:"2O",2M:"0 0 0 0",6P:0,hL:0,9d:\'\'},1W:{on:1,f:1,r:1,m:1,4h:5,wi:"4h",92:1,wf:"1L",mH:0,Iv:0,rO:1,jp:0.2},Y:{4j:"4b",9T:"qd",4s:0.9,8J:-1,1l:"1c",2M:"0 0 0 0",2V:"7 15 7 15",1r:"3L",3R:"FT, FS, pA-pz",dG:12,5C:10,iF:0,62:"EV",rs:1,8s:"LZ",a:1,7r:-1,Mm:0,Mk:100,Mf:Ma,M6:1,kv:1,sN:"Ly",lC:"4b",kX:-1,LB:-1,sH:0,7e:3,eZ:16,Ha:"Lz",6P:0,kp:1,oL:1,ls:"3L",zd:0,zg:"4b",KG:1,KI:0,Km:"qd",lZ:0,kq:4z,eC:0,8f:0,L5:0,KX:0,gp:1,3D:0,kc:50,rz:0,lx:1,dl:RT,og:0,y9:"qd",wT:"0 0 0 0",lh:30,8s:"Ez"},1j:{4j:"4b",9T:"Tf",4s:0.7,8J:-1,3R:"FT, FS, pA-pz",1l:"2O-2k",2M:"0 0 0 0",2V:"7 10 7 15",1r:"3L",dG:12,eZ:16,5C:10,iF:0,T3:"3L",62:"EV",a:1,1P:5,7r:-1,rH:1,7e:3,kp:1,oL:1,ls:"3L",lZ:0,kq:4z,6P:0,Sh:1,SD:"5d",4P:1,Sd:"7u",RU:1,S0:"28",RY:0,SB:"6T",SA:0,Sx:"5m",lh:30,8s:"Ez"},A0:{1l:"2O-2k",2M:"0 10 50 0"},1L:0.8,wS:1,na:1,9C:0,5L:0,zY:1,5o:0,4T:0,Is:0,J3:0,3n:0,vd:1,lL:0,vK:0,vL:0,kH:\',\',hD:\';\',e9:\'//\',Iw:1,jR:\'[\',eN:\']\',hg:\'5g\',mx:1,mu:-1,sY:0,Ss:\'20 0 0 20\',Sj:\'1f-1c\',UC:100,Up:100,Uo:-1,rp:0,AY:1,F8:"o8",F5:"3L",F3:5,F1:10,EZ:1,CE:10,nX:0,yP:1,tB:1,gd:1,5n:\'UV\',yA:0,kW:\'6S\',hY:1,IL:0,Gh:0,GF:0,9o:1,cs:1,KY:5,8p:0,EY:1,s5:0,vq:5,US:0,Ue:0,TF:0,oE:1,JQ:1,Gi:0,Dv:0,TD:0,wN:1,qh:0,3c:"DM",Tt:Lr,pU:\'100%\',ga:0,E4:{8k:1,2q:0,oN:0,4H:0,1A:1,r6:0,r7:0,r8:0,TC:0,Ty:0,Tx:0},Dy:{8k:1,2q:0,oN:0,4H:0,1A:1,r6:0,r7:0,r8:0},U7:100,G3:1,eW:1,nC:14,h0:\'100%\',Du:1,nz:20,CT:1,kL:0.7,CP:2,tX:3,cv:10,gz:"3L",gt:"HZ",kO:"4b",lc:0,lU:0,jC:cA,z9:1,cO:0,uq:1,9f:1,U5:1,U4:0.3,U1:3,TZ:4,TY:5,RR:0,PN:PA,Pz:Js,Fd:0,Fc:1,sB:1,gQ:1,CG:1,y7:0,Ca:160,BJ:90,BL:0,BM:1,BP:"qd",BK:0,BQ:1,9O:\'2\',cP:\'3\',Q8:10,Qd:1,Q7:1,Q2:-1,PZ:1,PX:1,Pv:-1,P4:0,P3:1,P2:0,OY:1,OW:0,OJ:1,OV:0,OU:1,OT:0,OQ:1,OO:0,OL:1,P7:0,qQ:1,OX:0,P8:0,Pl:1,Ps:0,Pr:1,Pq:"#3L",Pk:"#4b",Pj:"#4b",Pe:"#3L",Pc:"#4b",Rs:"#3L",RG:"#4b",RP:"#3L",RM:"#4b",RL:"#3L",RJ:"#4b",RD:"#3L",RA:1,Ru:0,QI:1,Qs:0.5,Qn:"#3L",QG:"#4b",R3:1,R1:1,R0:1,QZ:1,QY:1,QK:10,QL:-1,Qt:1,Qv:1,Qx:0,pe:0,Qz:"or",QA:"or",QC:"or",QE:"or",Rw:"50%",Ry:-1,RB:0,RE:-1,RH:0,RI:0,G1:1,FV:0,Fj:30,RQ:2,BA:10,zN:0,R9:30,Cm:1,Cf:1,6E:0,2h:{on:0,4j:"4b",2Y:0,9X:2,8s:"4b",1l:"1c",2M:"20 0 0 20",17:150,1n:0}};v.mA="ru";B 7M=E(is){B i;B C=[];B f=[];B 9U=[];B Ra=[];B 6c=[];B 8l=[];B 1X=[];B f2=[];B fX=[];B Rc=[];B 5i=[];B 5V=[];B 5X=[];B ee=[];B dV=P;B 2z;B bS=-1;B 54=H;B 1d=is;B 6t=is=="1j";B Y;B 5L=[];B dD=[];B mC;B 3a=\'\';B dF=\'\';B 6b=-1;B gU=P;B Re=P;B nd=P;B lR=P;B ha=P;B ix=P;B mm;B yj;B mb;B jv;B tc;B kK=[];B 5O=[];B lS=0;B b8=0;B 6B;B 6F="2x";B aP=(o.1m.2n?"fS":"gj");B aM=(o.1m.2n?"gN":"gg");C=a3(C,v[is]);C=4A(v[is],\'2M\',\'2M\');C=4A(v[is],\'an\',\'an\');C=4A(v[is],\'bu\',\'bu\');if(C.og==0){C.wT="0 0 0 0"}C=4A(v[is],\'he\',\'wT\');C=4A(v[is],\'2V\',\'2V\');C.lo=0;B ip="<2g C=\'2M-1f:cl\' 17=\'"+C.7e*2+"\' 1e=\'"+(C.7e*2>C.5C?(C.7e*2):C.5C)+"\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'><g><dx ry=\'"+(C.7e)+"\' rx=\'"+C.7e+"\' cy=\'"+(C.7e*2>C.5C?(C.7e):(C.5C/2))+"\' cx=\'"+C.7e+"\' 5g=\'#"+C.62+"\'/></g></2g>";B IU="<2g 17=\'"+C.7e*2+"\' 1e=\'"+C.5C+"\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\' ><g><dx ry=\'"+(C.7e-1)+"\' rx=\'"+(C.7e-1)+"\' cy=\'"+(C.5C/2+2)+"\' cx=\'"+C.7e+"\' 3E=\'#"+C.62+"\' 3E=\'1\' 5g-1C=\'0\'/></g></2g>";B xx=4;B J6="<4O C=\'2l:d5-4r;\'><2g 17=\'"+(xx+2)+"\' 1e=\'"+(C.5C)+"\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'><g><2F x1=\'1\' y1=\'"+(C.5C/2-xx)+"\' x2=\'"+xx+"\' y2=\'"+(C.5C/2)+"\' 3E=\'#"+C.1r+"\' 3E-17=\'1\' 3E-c0=\'47\'/><2F x1=\'"+xx+"\' y1=\'"+(C.5C/2)+"\' x2=\'1\' y2=\'"+(C.5C/2+xx)+"\' 3E=\'#"+C.1r+"\' 3E-17=\'1\' 3E-c0=\'47\'/></g></2g></4O>";B ke="<4O C=\'2l:d5-4r;\'><2g 17=\'"+(xx+10)+"\' 1e=\'"+(C.5C+1)+"\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\' C=\'jG:1c\'><g><2F x1=\'1\' y1=\'"+(C.5C/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.5C/2-xx+2)+"\' 3E=\'#"+C.1r+"\' 3E-17=\'1\' 3E-c0=\'47\' /><2F x1=\'1\' y1=\'"+(C.5C/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.5C/2+xx+2)+"\' 3E=\'#"+C.1r+"\' 3E-17=\'1\' 3E-c0=\'47\'/></g></2g></4O>";B 8s=4S(2t(C.8s,\'3L\'),2t(C.H3,1));B 1J=1Q("1Y");o.1T.1N(1J);O(1J,{\'5v\':\'3g\',\'2l\':\'4r\',\'1C\':0,\'2Y-6Q\':C.6P});if(C.kY==1){O(1J,{"2Y":"42 6w "+3C(2t(C.kZ,\'3L\'))})}B i7={};W(B i in o.5W){if(o.5W.2w(i)){i7[o.5W[i]]=-1}}if(6t){1J.C.4N=Rj}F{1J.C.4N=99}B 1a=1Q("1Y");if(o.9m){C.KV>0?C.dG=C.KV:\'\';C.Lk>0?C.dl=C.Lk:\'\';C.Ku>0?C.kc=C.Ku:\'\'}O(1a,{\'1l\':\'et\',\'1f\':0,\'1c\':0,\'2l\':\'4r\',\'17\':\'100%\',\'2V-1f\':C.a4,\'2V-2k\':C.7p+(6t&&C.3D==1?0:20),\'2V-2O\':C.ai,\'2V-1c\':C.7o,\'1r\':C.1r,\'3R-3T\':C.dG*2t(v.7J,1),\'3R-dq\':eh(C.3R),\'hH-fV\':C.iF+\'px\'});if(o.1m.7l){O(1a,{\'9A-17\':KK})}if(is!=="Y"){O(1a,{\'5v-y\':(6t&&C.3D==1?\'3g\':\'6X\')})}1J.1N(1a);if(C.3D!=1){B 7g=1Q("1Y");O(7g,{\'2l\':\'4r\',\'5v\':\'3g\',\'2Y-6Q\':C.6P});if(C.3D!=1){if(o.1m.7l){O(7g,{\'9A-17\':KK})}}1a.1N(7g)}4i(1a,{id:(v.id+"4y"+is)});if(is=="Y"){if(C.3D==1){O(1a,{\'17\':\'100%\',\'2V-2k\':C.7p,\'2V-2O\':C.ai+20,\'5v-x\':\'6X\',\'5v-y\':\'3g\',\'bs-92\':\'ej\'});O(1J,{\'17\':o.2Z-C.4q-C.4o,\'1e\':C.kc+C.a4+C.ai})}F{O(1a,{\'5v-y\':\'6X\',\'5v-x\':\'3g\'});if(C.H6==1){nA()}}if(C.og==1){O(1J,{\'2j-1r\':C.y9})}if(v.Y.3d==1){3k(1J)}}if(C.kp==1){B 5U=1Q("1Y");B bz=4S(C.og==1?C.y9:C.4j);if(C.3D==1){jT(5U,\'to 2k, 5c(\'+bz+\',\'+(C.4s*1+0.3)+\'), 5c(\'+bz+\',0)\',\'1c\',12,5,7,10,7,10,12,15);5U.1y(6F,JR)}F{jT(5U,\'to 2O, 5c(\'+bz+\',\'+(C.4s*1+0.3)+\'), 5c(\'+bz+\',0)\',\'1f\',5,12,10,7,10,7,15,12);5U.1y(6F,Jq)}B 5I=1Q("1Y");if(C.3D==1){jT(5I,\'to 1c, 5c(\'+bz+\',\'+(C.4s*1+0.3)+\'), 5c(\'+bz+\',0)\',\'2k\',8,5,13,10,13,10,8,15);5I.1y(6F,K9)}F{jT(5I,\'to 2O, 5c(\'+bz+\',0), 5c(\'+bz+\',\'+(C.4s*1+0.3)+\')\',\'2O\',5,8,10,13,10,13,15,8);5I.1y(6F,Kh)}5U.1y("gj",jn);5U.1y("gg",jn);5I.1y("gj",jn);5I.1y("gg",jn);1a.1y("kD",GZ);5U.1y("al",aR);5I.1y("al",aR);1J.1N(5U);1J.1N(5I);3S(yj);yj=7d(L6,2p)}1a.1y(aP,IE);1a.1y(aM,xJ);if(v.Y.6B>0&&!6B&&is=="Y"){if(1O ny!=="1M"){6B=1z ny()}}if(6t){W(B i=1;i<11;i++){if(J(v["aD"+is][is+i])){v.1j[is+i]=v["aD"+is][is+i];if(J(v["aD"+is][is+i+"1I"])){v.1j[is+i+"1I"]=v["aD"+is][is+i+"1I"]}if(J(v["aD"+is][is+i+"1i"])){v.1j[is+i+"1i"]=v["aD"+is][is+i+"1i"]}}if(J(v.1j[is+i])){if(v.1j[is+i]==1){ca(\'f\',i);cm(f[i],9U[i],6c[i],8l[i],i);if(!J(v.1j[is+i+"1i"])){v.1j[is+i+"1i"]="5m"}6c[i].1R=2R(v.1j[is+i+"1i"]);if(J(v.1j[is+i+"1I"])){if(v.1j[is+i+"1I"]!=\'\'){6c[i].1R=v.1j[is+i+"1I"]}}if(v.1j[is+i+"1i"]=="2U"){o.gR=H}1X[i]=v.1j[is+i+"1i"];8u(i);if(1X[i]==\'lX\'){!o.fm?o.fm=1z Qh():\'\';if(J(1S.v6)){6c[i].1R=o.fm.U0();o.fm.Ch()}}if(1X[i]in o.5W){i7[1X[i]]=i}f[i].1y(aP,5R);f[i].1y(aM,5r);f[i].1y(6F,8V);f[i].1y("al",aR);if(v.1j[is+i+"1n"]==1){O(f[i],{"1e":0})}}}}}E GZ(x){if(is=="Y"&&C.3D==1&&x){if(x.so==0&&x.bI!=0){1a.aU-=x.bI;x.aj()}}3S(mb);mb=7d(xJ,ku);bF()}E IE(){o.3O=H}E xJ(){if(C.fQ==1){2N(o.fI);o.fI=1G(E(){if(!o.3O&&!o.lY){ag()}},(v.1j.fW>0?v.1j.fW*2p:(o.1m.tv?4d:2p)))}o.3O=P}E 5R(1h){if(o.2a){o.5D?o.X.5D(P):\'\'}B i=1h.41.6r(\'lv\');B x;if(i){x=\'f\'}F{if(1h.41.6r(\'aY\')){i=1h.41.6r(\'aY\');x=\'f2\'}}if(i){i=2P(i);B h9=P;if(J(2o(x)[i])){if(C.8J>-1){O(2o(x+\'bg\')[i],{\'1C\':C.8J})}if(2E(C.am)){O(2o(x+\'bg\')[i],{\'6a\':\'bV(\'+C.am+\')\'})}if(C.7r>-1){O(2o(x+\'1I\')[i],{\'1C\':C.7r});O(2o(x+\'5Y\')[i],{\'1C\':C.7r})}if(is=="Y"){if(1X[i].K("Y")==0){B id=1X[i].1q(8);if(3a==id||dF==id){O(2o(x+\'1I\')[i],{\'1r\':C.62});O(2o(x+\'5Y\')[i],{\'1r\':C.62});h9=H}F{O(2o(x+\'1I\')[i],{\'1r\':C.1r})}}}if(C.hi==1&&J(C.cG)&&h9){}F{O(2o(x+\'bg\')[i],{\'7v\':C.9T})}}}};E 5r(1h){if(o.2a){o.5D?o.X.5D(H):\'\'}B i=1h.41.6r(\'lv\');B x;B h9=P;3S(i0);bF();if(i){x=\'f\'}F{if(1h.41.6r(\'aY\')){i=1h.41.6r(\'aY\');x=\'f2\'}}if(i){if(J(2o(x)[i])){if(C.8J>-1){O(2o(x+\'bg\')[i],{\'1C\':C.4s})}if(2E(C.am)){O(2o(x+\'bg\')[i],{\'6a\':\'bV(1)\'})}if(C.7r>-1){O(2o(x+\'1I\')[i],{\'1C\':C.a});O(2o(x+\'5Y\')[i],{\'1C\':C.a})}if(is=="Y"){if(1X[i].K("Y")==0){B id=1X[i].1q(8);if(3a==id||dF==id){O(2o(x+\'1I\')[i],{\'1r\':C.62});O(2o(x+\'5Y\')[i],{\'1r\':C.62});h9=H}F{if(J(o.8L[id])){kA(i)}F{O(2o(x+\'1I\')[i],{\'1r\':C.1r})}}}}if(C.hi==1&&J(C.cG)&&h9){}F{O(2o(x+\'bg\')[i],{\'7v\':o.8L[id]?C.lC:C.4j})}}}}E 8V(1h){if(!ha){B d=1z 6N();o.9g=d.8C();B i=1h.41.6r(\'lv\');if(i){if(J(f[i])){if(J(1X[i])){if(is=="Y"){o.2e=1M}5e(i,0)}}}hE()}}B vR;B i0;E I8(1h){if(!ha){B i=1h.41.6r(\'aY\');if(i){if(J(5X[i])){if(2z in o.5W){vR=i;i0=7d(HY,4z)}}}}}E HY(){zm(vR)}E aR(1h){3S(i0);1h.6L=H;bF()}E wz(1h){3S(i0);if(!ha){B d=1z 6N();o.9g=d.8C();B i=1h.41.6r(\'aY\');if(i){if(i==0){if(5X[0]==\'1r\'){cn();5e(lS)}F{ea()}}F{if(J(5X[i])){zm(i)}}}}}E nf(1h){B x=1h.41.6r(\'In\');if(x){wx(x)}}E Gv(1h){bF();B i=1h.41.6r(\'aY\');if(J(5X[i])){if(8g("=",i)>0){B x=5X[i].1q(0,8g("=",i));B y=5X[i].1q(8g("=",i)+1);B z=2z+\'HM\';if(!v[z]){v[z]=[]}if(!J(v[z][x])){v[z][x]=v[x]+\'\'}wk(x,y)}}};E wk(x,y){v[x]=y;if(o.5G&&v.z9==1&&x!="cO"){3f.8c("nh"+x,y)}if(o.5u&&o.4B){o.4B.aC()}o.X.kM();wx(x)}E Gu(1h){B i=1h.41.6r(\'aY\');B x=5X[i];if(J(x)){if(x.K("=")>0){B z=x.1q(0,x.K("="));B y=x.1q(x.K("=")+1);v[z]=y;ta();8u(o[2z+\'wP\']);if(2z=="jF"){7T("Ja")}}}}E 8u(i){if(J(1X[i])){B aS=P;B 8H=P;B 5S=\'\';if(6t){if(1X[i]=="5d"){5S=o.R.td()}if(1X[i]=="7u"){5S=o.R.sS()}if(1X[i]=="2U"){5S=\' \';8H=H}if(1X[i]=="bR"){if(o.7Z){5S=o.om[o.SE]}}if(1X[i]=="7u"||1X[i]=="bR"||1X[i]=="5d"){if(o[\'e1\'+1X[i]].U==0){aS=H}F{if(o[\'e1\'+1X[i]].U==1&&(C.J9!=1||o[\'e1\'+1X[i]][0]==1)){aS=H}F{8H=H}}}if(1X[i]=="6m"){if(!o.6m){aS=H}F{8H=H}}if(1X[i]=="6T"){if(o.2r!=\'bT\'&&!v.6T){aS=H}F{8H=H}}if(1X[i]=="28"){if(J(o.2f)){8H=H;if(o.5k||v.9f==1){if(o.3F){5S=o.3i[!o.5k?o.3F.7A():o.3v]}}F{5S=\'\'}B iD=0;W(B s=0;s<o.2f.U;s++){if(o.2f[s]!=\'\'){iD++}}if(iD==1&&o.iB==1){iD=0}if(v.oz==1&&v.te==1){}F{if(iD==0){aS=H;8H=P}}}F{aS=H}}if(1X[i]=="5m"){5S=o.6f[o.ah];5S==1&&C.e8!=1?5S=2R(\'er\'):\'\';8H=H;if(o.2r=="ap"||(o.R.5B()&&C.Tl!=1)){aS=H;8H=P}}if(1X[i]in o.5W){5S=iy(1X[i]);8H=H}if(1X[i].K("8F")>0){B x=\' \';B y=[\'rI\',\'rJ\',\'rK\'];W(B z=0;z<y.U;z++){if(J(v[1X[i]+y[z]])){if(v[1X[i]+y[z]]!==\' \'){x+=(x!==\' \'?\':\':\'\')+v[1X[i]+y[z]]}}}5S=x!=\' 0:0\'&&x.K(":")>-1?x:\' \';o[1X[i]+\'7Q\']=5S;8H=H}}8l[i].1R=5S+(5S!=\'\'&&C.Tp!=1?\' &dP;<2g 17="hJ" 1e="Gy" y6="-1 -1 5 8" 8S="1.1" 4g="3J://4e.w3.4a/4d/2g" 4g:4f="3J://4e.w3.4a/7k/4f"><oh 3E="#\'+C.62+\'" 3E-17="1" 5g="1U" 2v="0 0 3 3 0 6"></oh></2g>\':\'\');B JT=6t&&bS!=-1;if(aS){1n(f[i]);if(6t){ee[i]?2N(ee[i]):\'\';if(o.S){o.S.hy(i,P,5S)}F{ee[i]=1G(E(){o.S.hy(i,P,5S)},4z)}}O(f[i],{\'1l\':\'2m\',\'2k\':0,\'1f\':-100})}if(8H){if(JT){}F{if(C.3D==1){O(f[i],{\'2l\':\'d5-4r\'})}F{1t(f[i])}}if(6t){ee[i]?2N(ee[i]):\'\';if(o.S){o.S.hy(i,H,5S)}F{ee[i]=1G(E(){o.S.hy(i,H,5S)},4c)}}O(f[i],{\'1l\':\'et\',\'2k\':0,\'1f\':0})}2C()}W(B j=1;j<f.U;j++){if(f[j]){if(5A(f[j])){B 4U=P;54?4U=H:\'\';54=P;4U&&o.S?o.S.4U():\'\'}}}};B w4=0;E 5e(i,Jf,fa){fa?1X[i]=fa:\'\';if(J(1X[i])){o.lY=H;bF();B x=tY();if(6t){bS==-1?w4=x[0]:x[0]=w4}if(2z!=1X[i]){2z=1X[i];if(2z==\'5d\'||2z==\'7u\'||2z==\'28\'||2z==\'5m\'||2z==\'bR\'||2z in o.5W||2z.K("8F")>0||2z==\'2U\'||2z==\'1r\'){bS=i;B z=pj(o[\'e1\'+2z]);if(2z=="nr"){if(C.za==1){z=7T("M7")}F{z=7T("Md")}}if(2z=="jF"){z=7T("Mg")}if(2z=="2U"&&o.2U){z=[];W(B j=1;j<=16;j++){if(J(v["2U"+j])){z.2L(2R(v["2U"+j]));kK[z.U]=v["2U"+j]}}}if(2z=="1r"&&o.4Q){z=[];lS=i;W(B j=0;j<o.lK.U;j++){B co=o.lK[j].1q(4);z.2L(2R(co));5O[z.U]=co}}B fA=o[\'Mi\'+2z];B Ir=o[\'Mj\'+2z];W(B j=1;j<f.U;j++){if(f[j]){f[j].C.2l="1U"}}f2=[];ca(\'f2\',0);cm(f2[0],fX[0],5i[0],5V[0],0);O(f2[0],{"2Y-2O":"42 6w "+(C.wu==1?8s:"5c(100,100,100,0.7)")});b8=Jf;B m6=P;5i[0].1R=(x[0]<2||b8==1||C.yQ==1?\'\':ke)+(v.1j[is+i+"1I"]&&v.1j[is+i+"1I"]!=\'\'?v.1j[is+i+"1I"]:2R(v.1j[is+i+"1i"]))+(o[1X[i]+\'7Q\']?o[1X[i]+\'7Q\']:\'\');if(2z==\'28\'&&!o.tH){B jf=1Q("1Y");jf.1R=2R("2Q");O(jf,{\'1r\':C.1r,\'a0\':\'2y\',\'6M\':\'4k\'});5V[0].1N(jf);jf.1y(6F,Gt);m6=H}if(2z==\'28\'&&v.oz==1&&!o.1m.tv&&J(1S.v6)){B uf=1Q("1Y");!o.3F?o.3F=1z kT():\'\';uf.1R="<wc 1K=\'3I\' id=\'"+v.id+"Jx\' M1=\'.sA,.sq,.ia\' C=\'2l:1U\'/>"+2R(\'lX\');O(uf,{\'1r\':C.1r,\'a0\':\'2y\',\'6M\':\'4k\',\'2M-1c\':(m6?\'e4\':0)});5V[0].1N(uf);o.fD=22.8y(v.id+"Jx");o.fD.LO=o.3F.vr;uf.1y(6F,o.3F.vr)}if(m6){if(gU){if(b8==2){z=[];3k(f2[0])}W(j=0;j<o.cr.U;j++){if(v.mt==0&&o.cr[j]=="gt"){}F{z.2L("LQ"+o.cr[j])}}}}O(5i[0],{\'3R-3T\':C.eZ*2t(v.7J,1)});5X[0]="LX";if(2z in o.5W){vc(2z);if(lS>0&&o.lK.K(\'LK\'+2z)>-1){5i[0].1R=ke+2R(2z);5X[0]="1r";5V[0].1R=iy(2z)}O(5V[0],{\'17\':C.5C*2.5,\'1F-8o\':\'2k\'})}if(b8!=1&&x[0]>1){f2[0].1y(aP,5R);f2[0].1y(aM,5r);f2[0].1y(6F,wz);f2[0].1y("al",aR)}F{O(f2[0],{"6M":\'7C\'})}if(C.uN==1){3k(f2[0])}if(J(z)){B zz=\'\';W(j=0;j<z.U;j++){B y=j+1;B dA=0;B 6G=P;if(z[j]&&4Z(z[j])!=\'\'){if(2z==\'5d\'){if(z[j]==2R("2y")){dA=1}if(o.2r=="1H"&&v.M4==1){B iz=5t(z[j]);if(iz&&iz<zz){dA=2}zz=5t(z[j])}}ca(\'f2\',y,dA);cm(f2[y],fX[y],5i[y],5V[y],1X[i],i);if(2z==\'5m\'){z[j]==1&&C.e8!=1?z[j]=2R(\'er\'):\'\'}if(1O(z[j])==\'5j\'){if(z[j].K("<<<")==0){z[j]=z[j].1V(\'<<<\',\'\');6G=H}if(z[j].K(\'8F\')>0){o[2z+\'wP\']=i}if(z[j].K("wB")==0){B 1B=z[j];if(1B.K("8F")>0){5i[y].1R=2R(z[j].1q(1B.K("8F")+5))}F{5i[y].1R=2R(z[j].1q(7))}if(z[j]==\'Mc\'){mC=f2[y];O(f2[y],{"2Y-1f":"42 6w "+(C.wu==1?8s:"5c(100,100,100,0.7)")})}}F{5i[y].1R=z[j]}}F{5i[y].1R=z[j]}5X[y]=2z+j;if(fA==j||Ir==j){5V[y].1R=fA==j?ip:IU;if(fA==j){md(y)}}if(1O(z[j])==\'5j\'){if(z[j].K("wB")==0){B t=z[j].1q(7);if(t.K("1r")>0){5V[y].1R="<1Y C=\'"+(v[t]=="4b"?\'2Y:42 6w #ka;1e:b7;17:b7;\':\'1e:e4;17:e4;\')+";2j-1r:"+(v[t].K("#")==-1?\'#\':\'\')+v[t]+";2Y-6Q:e4;\'></1Y>"}F{if(J(v[z[j].1q(7)])){5V[y].1R=v[z[j].1q(7)]}}}if(2z=="2U"){if(J(kK[y])&&o.2U){5V[y].1R=o.2U.1v(kK[y],0.7,3C(C.62))}}if(2z=="1r"){if(J(5O[y])&&o.4Q){5V[y].1R=iy(5O[y])}}if(2z==\'5d\'){if(z[j]==2R("2y")&&o.R.hN()){md(y)}if(2E(v.cR)){B fq=v.cR.2D(",");W(B k=0;k<fq.U;k++){if(z[j].K(fq[k])>-1){3k(f2[y])}}}}}B wE="";if(1O(z[j])==\'5j\'){if(z[j].K("wB")==0){4i(f2[y],{\'LF\':i,\'In\':z[j].1q(7)});wE="nf"}}if(!6G){f2[y].1y(aP,5R);f2[y].1y(aM,5r);if(wE=="nf"){f2[y].1y(6F,nf)}F{f2[y].1y(6F,wz)}f2[y].1y("al",aR);f2[y].1y("Ep",I8)}F{O(f2[y],{"6M":"7C"})}}}}2C()}if(1X[i]==\'6T\'){o.X.lf();2z=-1}if(1X[i]==\'lX\'&&J(o.fm)){o.fm.3j();2z=-1}if(1X[i].K(\'Y\')>-1){B id=1X[i].1q(8);if(J(o.1D[id])){B fl=o.1D[id][\'3I\'];if(J(fl)){if(fl.K(\'4h:\')==0){if(id.K(\'x\'+dF)!=0){o.2e=fl.1q(5);d0(id.1q(0,id.lP(\'-\'))+\'-0\');I}if(!o.1E){o.2e=fl.1q(5)}if(!o.1A){o.X.2H()}3y(\'4h\',fl.1q(5));ag();I}dr(i);z4(id);7T("EL");if(J(o.1D[id][\'7i\'])&&v.7i==1&&v.NU==1){7i(o.1D[id][\'7i\'])}F{n2(id);o.X.eM(fl,(v.Y.jW==1?1:1M));v.Y.8f==0&&v.Y.gp==1?1G(ag,4z):\'\';nd=P;lR=P;nc(id);js("NV")}}F{if(J(o.1D[id][\'5b\'])){6D(id);if(nd){6b==-1?5e(0,0):\'\'}F if(lR){6b==-1?5e(2P(f.U)-2,0):\'\'}}}}if(o.3d){o.3d.8G()}}if(1X[i]==\'6m\'){o.R.h5()}}}};G.GC=E(x){8u(o[x+\'wP\'])};E wx(x){if(x=="mI"){GQ();I}if(x=="mR"){B z=2z+\'HM\';if(v[z]){W(B y in v[z]){if(v[z].2w(y)){wk(y,v[z][y])}}gX()}I}bF();W(B i=0;i<f2.U;i++){if(f2[i]){f2[i].C.2l="1U"}}f2=[];ca(\'f2\',0);cm(f2[0],fX[0],5i[0],5V[0],0);O(f2[0],{"2Y-2O":"42 6w "+(C.wu==1?8s:"5c(100,100,100,0.7)")});if(x.K("8F")>0){f2[0].1y(6F,ta);5i[0].1R=2R(x.1q(x.K("8F")+5))}F{f2[0].1y(6F,gX);5i[0].1R=(C.yQ!=1?ke:\'\')+2R(x)}O(5i[0],{\'3R-3T\':C.eZ*2t(v.7J,1)});f2[0].1y(aP,5R);f2[0].1y(aM,5r);f2[0].1y("al",aR);B 4E=[];B nF=P;if(x.K("3T")>0){4E=[\'50%\',\'75%\',\'100%\',\'125%\',\'150%\',\'Ba%\',\'4z%\',\'O2%\',\'dN%\',\'cA%\']}if(x.K("4s")>0){4E=[\'0\',\'0.2\',\'0.3\',\'0.4\',\'0.5\',\'0.6\',\'0.7\',\'0.8\',\'0.9\',\'1\']}if(x.K("hw")>0){W(B i=-5;i<5.5;i+=0.5){4E.2L(2I.47(i*100)/100)}}if(x.K("dv")>0){4E=[4z,cA,hu]}if(x.K("2O")>0){W(i=0;i<21;i++){4E[i]=i*10}}if(x.K("rI")>0){W(i=0;i<24;i++){4E[i]=i}}if(x.K("rJ")>0||x.K("rK")>0){W(i=0;i<60;i++){4E[i]=i}}if(x.K("9X")>0){nF=H;4E=[0,1]}if(x.K("3E")>0){nF=H;4E=[0,1]}if(x.K("1r")>0){4E=[\'3L\',\'HZ\',\'O4\',\'O5\',\'NO\',\'NN\',\'NM\',\'NH\',\'NG\',\'NF\',\'NE\',\'NC\',\'NB\',\'O6\',\'NP\',\'O7\',\'OD\',\'4b\'];B vx=v[x].1V("#","");if(4E.K(vx)==-1){4E[8]=vx}}W(y=1;y<=4E.U;y++){ca(\'f2\',y,0);cm(f2[y],fX[y],5i[y],5V[y],y);O(5V[y],{\'2V-1c\':0});if(x.K("1r")>0||x.K("2O")>0||x.K("8F")>0||x.K("hw")>0){y%3!=0?O(f2[y],{\'jG\':\'1c\'}):\'\';O(f2[y],{\'17\':\'33.3%\'});if(x.K("1r")>0){4E[y-1]=2t(v["OE"+(y-1)],4E[y-1]);5i[y].1R="<1Y C=\'"+(4E[y-1]=="4b"?\'2Y:42 6w #ka;1e:GL;17:GL;\':\'1e:hj;17:hj;\')+";2j-1r:"+3C(4E[y-1])+";2Y-6Q:hj;\'></1Y>";O(f2[y],{\'2F-1e\':1})}F{5i[y].1R=4E[y-1]}}F{if(x.K("dv")>0){5i[y].1R=4E[y-1]}F{y%2!=0?O(f2[y],{\'jG\':\'1c\'}):\'\';O(f2[y],{\'17\':\'50%\'});if(nF){5i[y].1R=2R(4E[y-1]+\'7Q\')}F{5i[y].1R=4E[y-1]}}}5X[y]=x+\'=\'+4E[y-1];if((4E[y-1]==v[x]&&6v(v[x])!=" ")||v[x]==\'#\'+4E[y-1]){5V[y].1R=ip;md(y)}f2[y].1y(aP,5R);f2[y].1y(aM,5r);if(x.K("8F")>0){f2[y].1y(6F,Gu)}F{f2[y].1y(6F,Gv)}f2[y].1y("al",aR)}2C()}E md(x){f2[x].fi.8w(\'6W-\'+v.id+\'-c6-CY\');O(5i[x],{\'1r\':C.62});n8(fX[x])}E n2(id){if(J(o.1D[id][\'2i\'])){v.2i=o.1D[id][\'2i\'];J(v.2i)?o.R.ae(v.2i):\'\'}if(J(o.1D[id][\'1I\'])){o.cw=o.1D[id][\'1I\']}uQ()}E nc(id){B t=o.1D[id][\'1I\'];if(J(t)){if(v.lL==1){if(o.X.nE(o.1D[id])){}F{v.1I=(v.vL==1&&J(o.zj)?o.zj+(v.vK==1?\'<br>\':\' \'):\'\')+t}o.X.9R(\'1I\')}}if(v.e0==1){if(J(o.1D[id][\'2v\'])){v.2v=o.1D[id][\'2v\']}F{v.2v=[]}o.S.l0()}B xv=[\'6s\',\'o6\',\'6T\',\'6Y\',\'18\',\'l4\',\'EI\',\'o3\',\'o4\',\'4H\',\'4G\',\'jj\',\'EG\',\'7U\',\'d3\',\'9J\',\'j7\'];W(B i=0;i<xv.U;i++){B np=o.1D[id][xv[i]];if(J(np)){v[xv[i]]=np;if(i==16){v.Y.eC=np}}F{i<4?v[xv[i]]=1M:\'\'}}z4(id);B 8Z=o.1D[id];if(J(8Z[\'2B\'])){8Z[\'28\']=8Z[\'2B\']}if(J(8Z[\'28\'])){o.X.fv(8Z[\'28\'])}if(J(8Z[\'9J\'])){o.S.yO()}o.X.kt(o.1D[id]);if(o.iM){o.S.z6(o.iM)}if(J(8Z[\'eJ\'])){3y(\'eJ\',8Z[\'eJ\'])}if(J(8Z.1L)){o.X.3Z(8Z.1L)}}E z4(id){B x=o.1D[id][\'1E\'];if(J(x)){if(x=="3x"){if(2Q.28&&!o.1D[id][\'28\']){o.1D[id][\'28\']=2Q.28}if(o.R.1b()>0){v.1E=o.2e=o.R.1b()}F{2Q.1E&&!o.2e?o.2e=2Q.1E:v.1E=0}}F{v.1E=o.2e=x}}F{v.1E=0}}E dr(x){if(6b==0&&!o.1E){O(6c[6b],{\'1r\':C.1r});O(9U[6b],{\'7v\':C.4j});8l[6b].1R=\'\';f[6b].fi.6s(\'6W-\'+v.id+\'-c6-pl\')}F{o.a1=x;if(6b>-1){kA(6b)}if(3a!=\'\'){if(!o.8L[3a]&&J(o.1D[3a])){o.uY+=2t(o.1D[3a].1p,0)}o.8L[3a]=H;5L=ts(5L,3a)}}if(1X[x]){B id=1X[x].1q(8);8l[x].1R=ip;f[x].fi.8w(\'6W-\'+v.id+\'-c6-pl\');O(6c[x],{\'1r\':C.62,\'1F-lD\':\'1U\',\'1C\':C.a});n8(9U[x]);if(C.hi==1&&J(C.cG)){O(9U[x],{\'7v\':C.cG})}6b=x;3a=id;o.3a=3a;v.4V=3a;o.q3=6c[x].1R;o.a1=3a;dF=o.1D[id][\'7s\'];if(o.S){o.S.hI()}if(6B){6B.Og()}}}E 6D(id){B x=id==0?o.Y:o.1D[id];o.a1=id;W(B i=0;i<f.U;i++){if(f[i]){if(C.3D==1){1a.3p(f[i])}F{7g.3p(f[i])}f[i]=1Z}}f=[];6b=-1;if(J(x[\'5b\'])){B y=7F.6d(x[\'5b\']).U;ca(\'f\',y);1X[y]="I1";cm(f[y],9U[y],6c[y],8l[y],y);if(C.3D==1){O(f[y],{"17":(C.lx==1?C.dl:"2y"),"1e":C.kc})}if(C.rs==1){B yN="42 6w "+4S(C.Ha,2t(C.H3,1));if(C.3D==1){O(f[y],{"Oa":yN})}F{O(f[y],{"Nx":yN})}}B 1B=x.1I;if(C.yQ!=1){1B=ke+1B}6c[y].1R=1B;O(6c[y],{\'3R-3T\':C.eZ*2t(v.7J,1)});B p=x[\'7s\'];f[y].1y(aP,5R);f[y].1y(aM,5r);f[y].1y(6F,E(){JL(p)});x=x[\'5b\']}B y=7F.6d(x).U;5L=[];dD=[];if(6B&&C.3D!=1){6B.6s(7g);if(y>v.Y.6B){6B.8w(C,7g)}}W(B i=0;i<y;i++){ca(\'f\',i);1X[i]="Y"+x[i].id;if(!J(o.8L[x[i].id])&&!J(x[i].5b)){5L[x[i].id]=i;dD[x[i].id]=i}cm(f[i],9U[i],6c[i],8l[i],i);if(C.3D==1){if(C.7e==0){O(6c[i],{\'17\':C.dl-C.sI-C.ki});3k(8l[i])}O(f[i],{"17":(C.lx==1?C.dl:"2y"),"1e":C.kc})}6c[i].1R=x[i].1I?x[i].1I:\'&dP;\';if(v.cL==1&&v.7W==1&&x[i].id){if(o.tq){if(o.tq.K(x[i].id)>-1){x[i].eu=1}}}if(J(x[i].eu)){if(x[i].eu==1){o.8L[x[i].id]=H;kA(i)}}if(J(x[i].5b)){8l[i].1R=J6;O(8l[i],{"1r":C.1r})}f[i].1y(aP,5R);f[i].1y(aM,5r);f[i].1y(6F,8V);f[i].1y("al",aR);if(J(o.8L[x[i].id])){kA(i)}if(3a==x[i].id){dr(i)}if(dF==x[i].id){O(6c[i],{\'1r\':C.62});O(8l[i],{\'1r\':C.62});n8(9U[i])}}2C();54=P;o.S?o.S.4U():\'\'}E n8(x){if(2E(C.n3)&&x){O(x,{"2j-9d":"3e-4L(5c(0, 0, 0, "+(1-C.n3*1)+") 0 0)"})}}E jT(x,y,z,x1,y1,x2,y2,x3,y3,x4,y4){B ww=(C.3D==1?\'Jb\':\'100%\');B hh=(C.3D==1?\'100%\':\'Jb\');O(x,{\'1l\':\'2m\',\'2l\':\'d5-4r\',\'17\':ww,\'1e\':hh,\'1F-8o\':\'8K\'});if(C.KG==1){O(x,{\'2j\':\'-lG-3e-4L(\'+y+\')\',\'2j\':\'-3K-3e-4L(\'+y+\')\',\'2j\':\'-ms-3e-4L(\'+y+\')\',\'2j\':\'-o-3e-4L(\'+y+\')\',\'2j\':\'3e-4L(\'+y+\')\',})}if(C.3D==1||o.1m.2n){O(x,{\'6M\':\'4k\'})}F{O(x,{\'4k-3c\':\'1U\'})}if(C.lZ==1){O(x,{\'5N-17\':C.kq+\'px!6i\'})}if(z=="1f"){O(x,{\'1f\':-1,\'1c\':0})}if(z=="2O"){O(x,{\'2O\':-1,\'1c\':0})}if(z=="1c"){O(x,{\'1f\':0,\'1c\':0})}if(z=="2k"){O(x,{\'1f\':0,\'2k\':0})}if(z=="2k"||z=="1c"){O(x,{\'1F-8o\':\'1c\',\'2V-1f\':1J.2S/2-10})}x.1R="<8K><1Y "+(C.KI==1?"MN=\'G.C.7v=\\"#"+C.Km+"\\"\' MT=\'"+(C.zd==1?"G.C.7v=\\"#"+C.zg:"G.C.2j=\\"1U")+"\\"\'":"")+" C=\'4k-3c:2y;6M:4k;17:hj;1e:hj;2Y-6Q:hj;"+(C.zd==1?"2j-1r:#"+C.zg+";":"")+(z=="1f"?"2M-1f:e4;":"")+(z=="2O"?"2M-1f:e4;":"")+(z=="2k"?"2M-1c:fO;":"")+(z=="1c"?"2M-2k:fO;":"")+"\'><2g 17=\'20\' 1e=\'20\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'><g><2F x1=\'"+x1+"\' y1=\'"+y1+"\' x2=\'"+x2+"\' y2=\'"+y2+"\' 3E=\'#"+C.ls+"\' 3E-17=\'"+C.oL+"\' 3E-c0=\'47\'/><2F x1=\'"+x3+"\' y1=\'"+y3+"\' x2=\'"+x4+"\' y2=\'"+y4+"\' 3E=\'#"+C.ls+"\' 3E-17=\'"+C.oL+"\' 3E-c0=\'47\'/></g></2g></1Y></8K>"}G.9Q=E(){if(C.kp==1){9Q()}};E L6(){if(dV){9Q()}}E 9Q(e){if(C.kp==1&&!ix){if(C.3D==1){B h=1a.MP;B m=1J.2b+C.7o+C.7p+20;B t=1a.aU}F{B h=1a.m5;B m=1J.2S;B t=1a.di}if(h>m){if(t>0){if(!5A(5U)){1t(5U);B m1=1z 5Q({"mc":5U,"1K":"8R","to":1,"1b":0.3,"me":"5U"})}}F{if(5A(5U)){B m2=1z 5Q({"mc":5U,"1K":"8R","to":0,"1b":0.3,"me":"5U","1n":H})}if(e){e.bI<0?e.aj():\'\'}}if(t<h-m-10){if(!5A(5I)){1t(5I);B m3=1z 5Q({"mc":5I,"1K":"8R","to":1,"1b":0.3,"me":"5I"})}}F{if(5A(5I)){B m4=1z 5Q({"mc":5I,"1K":"8R","to":0,"1b":0.3,"me":"5I","1n":H})}if(e){e.bI>0?e.aj():\'\'}}}F{1n(5U);1n(5I)}}}E Kh(){B x=1a.di+1J.2S-60;B m=1z 5Q({"mc":1a,"1K":"6X","to":x,"1b":0.3,"me":"HX","5l":"ch"});1G(9Q,2p)}E Jq(){B x=1a.di-1J.2S+60;B m=1z 5Q({"mc":1a,"1K":"6X","to":x,"1b":0.3,"me":"MB","5l":"ch"});1G(9Q,2p)}E jn(1h){2N(o.fI);1h.bt()}E K9(){B x=1a.aU+(1J.2b+C.7o+C.7p)-60;B m=1z 5Q({"mc":1a,"1K":"kG","to":x,"1b":0.3,"me":"Nk","5l":"ch"});1G(9Q,2p)}E JR(){B x=1a.aU-(1J.2b+C.7o+C.7p)+60;B m=1z 5Q({"mc":1a,"1K":"kG","to":x,"1b":0.3,"me":"HJ","5l":"ch"});1G(9Q,2p)}E JL(x){if(x==\'\'){6D(0)}F{if(J(o.1D[x])){6D(x)}}2z=\'\'}E kA(x){8l[x].1R=\'\';O(6c[x],{\'1r\':C.sN});if(C.sH==1){O(6c[x],{\'1F-lD\':\'2F-Cn\'})}if(C.kv>-1){O(6c[x],{\'1C\':C.kv})}f[x].fi.6s(\'6W-\'+v.id+\'-c6-pl\');O(9U[x],{\'7v\':C.lC});if(C.kX>-1){O(9U[x],{\'1C\':C.kX})}}E zm(i){if(J(5X[i])){bF();if(8g("5d",i)==0){o.X.6n(5X[i].1q(7))}if(8g("7u",i)==0){o.X.dR(5X[i].1q(10))}if(8g("28",i)==0){!o.3F?o.3F=1z kT():\'\';o.3F.9e(5X[i].1q(8))}if(8g("bR",i)==0&&v.7Z==1){o.7Z.DQ(5X[i].1q(7))}if(8g("2U",i)==0){o.2U?o.2U.3z(kK[i]):\'\';ag()}if(8g("1r",i)==0){cn();5e(0,0,5O[i])}W(B p in o.5W){if(o.5W.2w(p)){if(8g(p,i)==0){o.R.Hh(p,i)}}}if(8g("8F",i)>0){if(5i[i].1R==2R(\'6G\')){7T(2z+\'0\');8u(bS);if(2z=="jF"){7T("Ja")}ea()}F{if(2z=="nr"&&C.za==1){7T(\'za\',i);8u(bS);ea()}}}if(8g("5m",i)==0){o.X.9x(5X[i].1q(5));lb();1G(ag,4z)}}};G.lb=E(){lb()};G.GW=E(x){W(B i=0;i<1X.U;i++){if(1X[i]==x){I H}}I P};E lb(){W(B i=0;i<1X.U;i++){if(1X[i]=="5m"){8u(i);if(2z==\'5m\'){cn();5e(i,0)}}}}E ca(x,i,dA){if(J(2o(x))){2o(x)[i]=1Q("1Y");if(i<2||x=="f"||2z!=\'5d\'||dA==1){if(C.3D==1){1a.1N(2o(x)[i])}F{7g.1N(2o(x)[i])}}F{if(C.3D==1){1a.t8(2o(x)[i],2o(x)[i-1])}F{7g.t8(2o(x)[i],2o(x)[dA==2?i-2:i-1])}}if(x==\'f\'){4i(2o(x)[i],{\'lv\':i})}if(x==\'f2\'){4i(2o(x)[i],{\'aY\':i})}2o(x+\'bg\')[i]=1Q("1Y");B lq=1Q("1Y");2o(x)[i].1N(lq);lq.1N(2o(x+\'bg\')[i]);fk(lq);2o(x+\'4u\')[i]=1Q("1Y");2o(x)[i].1N(2o(x+\'4u\')[i]);dW(2o(x+\'4u\')[i]);fk(2o(x+\'4u\')[i]);2o(x+\'1I\')[i]=1Q("1Y");2o(x)[i].1N(2o(x+\'1I\')[i]);2o(x+\'5Y\')[i]=1Q("1Y");2o(x)[i].1N(2o(x+\'5Y\')[i]);if(i>0&&x=="f2"&&6t&&C.rH==0){3k(2o(x+\'5Y\')[i])}}};E cm(x,9q,k0,ro,Nq,ii){O(x,{\'1l\':\'et\',\'2k\':0,\'1f\':0,\'6M\':\'4k\',\'1e\':\'2y\',\'17\':\'100%\',\'5v\':\'3g\',\'2l\':\'4r\',\'2F-1e\':\'1.Nn\'});if(6t){if(C.3D==1){O(x,{\'17\':\'2y\'})}}if(C.rz&&C.3D==1){O(x,{\'Ng\':C.rz})}if(C.3D==1&&(!6t||ii>0||C.uN==1)){O(x,{\'2l\':\'d5-4r\',\'bm-8o\':\'1f\',\'bs-92\':\'er\'})}O(9q,{\'2j\':(C.vw==1?"3e-4L(to 1c,"+3C(C.rj)+", "+3C(C.4j)+")":3C(C.4j)),\'1C\':C.4s,\'a0\':\'1U\',\'4I\':\'1C 0.2s 5l-4m,2j .2s 5l-4m,6a .2s 5l-4m\'});dW(9q);dW(9q.3X);if(C.aa==1){O(9q.3X,{\'l5-6a\':\'aa(b7)\'})}if(C.Nf==1){x.C[C.3D==1?"2Y-2k":"2Y-2O"]="42 6w "+4S(2t(C.MX,\'3L\'),2t(C.MW,0.2))}O(k0,{\'1l\':\'et\',\'2k\':0,\'1f\':0,\'jG\':(C.8o?C.8o:\'1c\'),\'1r\':C.1r,\'2V-1f\':C.ji,\'2V-2k\':C.ki,\'2V-2O\':C.Mt,\'2V-1c\':C.sI,\'a0\':\'1U\',\'1C\':C.a,\'4I\':\'1C 0.2s 3e,1r 0.2s 3e\',});O(ro,{\'1l\':\'et\',\'2k\':0,\'1f\':0,\'jG\':(C.JC?C.JC:\'2k\'),\'2V-1f\':C.ji,\'2V-2k\':C.ki,\'2V-1c\':C.sI,\'a0\':\'1U\',\'3R-3T\':C.5C*2t(v.7J,1),\'1C\':C.a,\'1r\':C.62,\'4I\':\'1C 0.2s 3e,1r 0.2s 3e\'});if(C.lZ==1){O(x,{\'5N-17\':C.kq+\'px!6i\'});O(k0,{\'5N-17\':(C.kq-70)+\'px!6i\'})}F{if(C.3D==1){if(C.lx==1){O(x,{\'17\':C.dl});O(k0,{\'17\':C.dl-70})}}F{O(k0,{\'bs-92\':\'ej\'});O(ro,{\'bs-92\':\'ej\'})}}}E ea(){W(B i=1;i<f.U;i++){if(J(f[i])){if(C.3D==1){f[i].C.2l="d5-4r"}F{f[i].C.2l="4r"}}}bF();cn();2C();2z=\'\';bS=-1};E cn(){W(B j=0;j<f2.U;j++){if(f2[j]){if(C.3D==1){1a.3p(f2[j])}F{7g.3p(f2[j])}f2[j]=1Z}}f2=[];2z=\'\'}E Jr(){I 1a.2b};G.jK=E(){nA()};E nA(){if(is=="Y"){if(C.3D==1||C.H6==1){B x=o.2Z-C.4q-C.4o;O(1J,{\'17\':x});O(1a,{\'17\':x});7g?O(7g,{\'17\':x}):\'\'}o.3d?o.3d.2C():\'\'}}E 2C(){if(!ix){if(6t){o.S?o.S.lJ():\'\';B x=C.uN==1&&f.U>1?f[1]:f[0]}if(is=="Y"){nA();o.S?o.S.jK():\'\';B x=f[0];if(v.yH==1){nm()}}f.U>1&&!x?(f[1]?x=f[1]:\'\'):\'\';f.U>2&&!x?(f[2]?x=f[2]:\'\'):\'\';if(x){x.2b==0&&f2.U>0?x=f2[0]:\'\'}if(1a.2b-1a.vk>0&&x&&C.3D!=1){if(J(5U)){O(5U,{"17":7g.2b})}if(J(5I)){O(5I,{"17":7g.2b})}C.lo=(1a.2b-x.2b)-(1a.vk-x.vk)}F{C.lo=0}}};E tY(){B x=0;B y=0;B z=\'\';W(B i=1;i<f.U;i++){if(J(f[i])){if(f[i].C.5J!="3g"&&f[i].C.2l!="1U"){x++;y=i;z=1X[i]}}}I[x,y,z]}G.wq=E(){gU=H;G.1t();b8=2;gX()};E Gt(x){gU=H;gX(x);if(gU&&mC){1a.O9(0,mC.uE)}}E GQ(x){gU=P;gX(x)}E gX(){ea();W(B i=0;i<1X.U;i++){if(1X[i]=="28"){5e(i,b8)}}}E bF(){2N(tc);tc=1G(E(){o.lY=P},4d)}E ta(){B x=2z;ea();W(B i=0;i<1X.U;i++){if(1X[i]==x){5e(i,0)}}}G.tb=E(){I v.1j.8f==1&&v.1j.1u==1};E ag(x){if((!6t&&v.Y.JG==1)||(6t&&v.1j.8f==1&&x!=2)){I}if(is==\'Y\'&&v.Y.3d==1&&v.Y.Oy!=1){if(v.Y.8f==1&&x==1){I}o.3d?o.3d.uH():\'\';dV=P}F{if((x!=1||(C.Ox==1&&C.8f==1))&&!o.1m.tv){B m=1z 5Q({"mc":1J,"1K":"8R","to":0,"1b":0.1,"me":is,"5l":"Bi"});jv=1G(E(){O(1J,{"5J":"3g","1C":0,"1f":-4d});dV=P},4z)}F{O(1J,{"5J":"3g","1C":0,"1f":-4d});dV=P}}if(is==\'Y\'){if(v.Y.ID==1&&o.S){o.S.rT("1i","Y",H)}}3S(mb)};G.c=E(){I 1J};G.co=E(){if(1J.Ow(1a)){I 1a}};G.s=E(1d){if(1d=="4o"||1d=="4q"){B k2=1d.1V("2M","an");B k3=1d.1V("2M","bu");if(2E(C[k3])&&o.9m){I o.2Z*C[k3]/100}if(2E(C[k2])){I o.2Z*C[k2]/100}}I C[1d]};G.ss=E(1d){I C};G.1t=E(){ea();2N(jv);dV=H;if(is==\'Y\'&&v.Y.3d==1){o.3d?o.3d.jB():\'\'}F{O(1J,{"5J":"4D","1C":1,"4I":"1C 0.2s 3e"});B x=tY();if(x[0]==1){if(x[2]=="5d"||x[2]=="7u"||x[2]=="28"||x[2]=="5m"||x[2]in o.5W||x[2].K("8F")>0){5e(x[1],0)}}}if(o.S){is==\'1j\'?o.S.lJ():\'\';if(is==\'Y\'){o.S.jK();if(v.Y.ID==1){o.S.rT("1i","Y",P)}}}if(o.1m.7l){O(1a,{\'9A-17\':\'2y\'});if(C.3D!=1){O(7g,{\'9A-17\':\'2y\'})}}ha=H;3S(mm);mm=7d(Iz,100)};E Iz(){3S(mm);ha=P}G.3j=E(i){5e(i,1)};G.1n=E(x){ag(x)};G.JY=E(){if(o.3d){o.3d.ar()}};G.6n=E(){W(B i=0;i<1X.U;i++){if(1X[i]=="5d"){8u(i);if(o.2G.U>1){1t(f[i])}if(2z==\'5d\'){cn();5e(i,b8)}}}};G.h5=E(){W(B i=0;i<1X.U;i++){if(1X[i]=="6m"){8u(i)}}};G.hS=E(x){W(B i=0;i<1X.U;i++){if(1X[i]==x){8u(i);if(o[\'e1\'+x]){if(o[\'e1\'+x].U>1){1t(f[i])}}if(2z==x){cn();5e(i,b8)}}}};G.9e=E(){W(B i=0;i<1X.U;i++){if(1X[i]=="28"){8u(i);if(o.3i){if(o.3i.U>0){B x=P;if(o.2f){W(B y=0;y<o.2f.U;y++){if(o.2f[y]!=\'\'){x=H;1k}}}F{x=H}x?1t(f[i]):\'\'}}if(2z==\'28\'){cn();5e(i,0)}}}};G.ze=E(x){o.Y=x;6D(0);if(J(v.4V)){if(v.4V.K("x-")!=0){W(B y in o.1D){if(o.1D.2w(y)){if(o.1D[y].dB==v.4V){v.4V=y}}}}if(J(o.1D[v.4V])){f5(o.1D[v.4V]);B y=o.1D[v.4V][\'cC\'];dr(y);if(v.Y.lI==1&&C.3d!=1){6D(0);1G(E(){2C()},4c)}F{1G(E(){e6(y);2C()},4c)}v.4V=1M}F{dr(0)}}F{dr(0)}if(C.3d==1){if(!J(o.3d)){o.3d=1z Fm()}}};G.d0=E(x){d0(x)};E d0(x){if(J(o.1D[x])){f5(o.1D[x]);5e(o.1D[x][\'cC\'],0);e6(o.1D[x][\'cC\'])}};G.mJ=E(x){if(J(o.1D[x])){f5(o.1D[x]);if(o.1D[x]["3I"]){o.2e=1M;dr(o.1D[x][\'cC\']);n2(x);o.X.eM(o.1D[x]["3I"],1);nc(x);e6(o.1D[x][\'cC\']);if(o.3d){o.3d.8G()}}F if(o.1D[x]["5b"]){6D(x)}}};E Gj(x){if(J(o.1D[x])){dF=\'\';6D(0);f5(o.1D[x]);n2(x);5e(o.1D[x][\'cC\'],0);nc(x)}};G.bj=E(){nd=H;B x=2P(6b)+1;if(3a!=\'\'){o.8L[3a]=H;5L=ts(5L,3a)}if(v.5L==1){x=ve(5L);if(x==1Z){if(v.Lt==1||v.Y.eC==1){dD.Kj(E(a,b){I 2I.5M()-0.5});W(B x in dD){if(dD.2w(x)){5L[x]=dD[x]}}x=ve(5L)}F{o.X.Cp()}}}F{if((1X[x]=="I1"||6b==-1)&&3a!=\'\'){B y=7z().K(3a);if(y<7z().U){B z=o.1D[7z()[y+1]];if(z){if(J(z.5b)){z=o.1D[7z()[y+2]]}G.mJ(z.id);x=-1;o.X.2H()}}}}if(x>-1){o.2e=1M;5e(x,0);e6(x)}};E e6(x){if(f[x]&&!ix){if(C.3D==1){B to=f[x].kI-20;B m=1z 5Q({"mc":1a,"1K":"kG","to":to,"1b":0.3,"me":"HJ","5l":"ch"})}F{B to=f[x].uE-1J.2S/2+20;B m=1z 5Q({"mc":1a,"1K":"6X","to":to,"1b":0.3,"me":"HX","5l":"ch"})}1G(9Q,2p)}}E ve(4J){B 6d=7F.6d(4J);B x;W(B i=0;i<6d.U;i++){x=4J[6d[6d.U*2I.5M()<<0]];if(x){1k}}I x};G.5W=E(x){vc(x)};E vc(x){i7[x]>-1?8u(i7[x]):\'\';if(5V[0]){if(2z==\'1P\'){5V[0].1R=2I.47(o.3M.x*100)+\'%\'}F{5V[0].1R=iy(2z)}}};E iy(x){if(x=="1P"){I 2I.47(o.3M.x*100)+\'%\'}F{I 2I.47(2t(o.aA[x],o.5W[x])*100)+\'%\'}}G.cX=E(){I sF()};E sF(){if(v.5L==1){I 7F.6d(5L).U>0}B x=P;if(o.1D){x=7z().K(3a)<7z().U-1}I x};G.mF=E(){if(J(o.km)){Gj(o.km)}};G.gM=E(){B x=6b>0;if(o.1D){B z=7z().K(3a);x=z>0;if(z==1){if(J(o.1D[7z()[0]].5b)){x=P}}}I x};G.gP=E(){I J(o.1D)};G.dU=E(){lR=H;if(G.gM()){B x=2P(6b)-1;if(x<0){B y=7z().K(3a);if(y>0){B z=o.1D[7z()[y-1]];if(z){if(J(z.5b)){z=o.1D[7z()[y-2]]}if(z){G.mJ(z.id);o.X.2H()}}}}F{o.2e=1M;5e(x,0);e6(x)}}};G.mD=E(){if(6b>0){e6(6b)}};E 8g(x,i){I 5X[i].K(x)};E f5(x){if(x[\'rk\']!=-1){f5(o.1D[x[\'7s\']]);6D(x[\'7s\'])}F{6D(0)}};G.g=E(x){b3(x){1o"17":I Jr();1k;1o"1e":I 1J.2S;1k;1o"1f":I C.8z;1k;1o"FY":I 1a.m5;1k;1o"FW":I C.ep;1k;1o"x":I 5t(1J.C.1c);1k;1o"y":I 5t(1J.C.1f);1k;1o"1C":I 1J.C.1C;1k;1o"1t":I dV;1k;1o"3j":I bS;1k;1o"1d":I 1d;1k;1o"b4":I 1d+b4;1k;1o"54":I 54;1k;1o"Y":I is=="Y";1k;1o"eu":I o.8L[3a];1k;1o"rH":I ip;1k;1o"bG":I o.1D[o.bG]?o.1D[o.bG].1I:\'\';1o"d3":I v.d3?v.d3:\'\';1o"Hf":I sF()?o.1D[7z()[7z().K(3a)+1]].1I:\'\'}};E 7z(){I 7F.6d(o.1D)};G.GR=E(){3a=\'\';v.4V=\'\'};G.54=E(){if(6t){B x=0;W(B i=1;i<11;i++){if(1X[i]=="5d"){B y=o.2G.U;if(J(v.cR)){B z=v.cR.2D(",");W(B j=0;j<z.U;j++){if(o.2G.K(z[j])>-1){y--}}}if(y>0){if(y>1||(y==1&&o.2G!=1&&C.J9==1)){x++}}}if(1X[i]=="6m"){if(o.6m){x++}}if(1X[i]=="6T"){if(o.2r==\'bT\'||v.6T){x++}}if(1X[i]=="7u"){if(o.7B.U>1){x++}}if(1X[i]=="bR"&&v.7Z==1){if(o.om.U>0){x++}}if(1X[i]=="28"){if(J(o.2f)){W(B s=0;s<o.2f.U;s++){if(o.2f[s]!=\'\'){x++;1k}}}if(x==1&&o.iB==1){x=0}if(v.oz==1&&v.te==1){x++}}if(1X[i]=="5m"){if(o.2r!="ap"){x++}}if(1X[i]in o.5W||1X[i]=="2U"||1X[i]=="1r"){x++}if(1X[i]){if(1X[i].K("8F")>0){x++}}if(v.1j[is+i+\'1n\']==1){x--}}I x<=0}F if(is=="Y"){I f.U==0}F{I 54}};G.4n=E(){if(1J.3X==o.1T){1J.3p(1a);o.1T.3p(1J);o.3d?o.3d.4n():\'\';1J=1Z;1a=1Z;ix=H}}};E SO(){G.2U=E(){I(o.1m.2n?"cu://wa.me/?":"cu://SN.SI.7R/bd?")+"1F="};G.1v=E(5O){I"<8Y d=\'SR.Id,5.If fY.Tk,4.Tg 11.T9,3.T8 10.OH,3.H8 C6.Sb,3.H8 4.S6,6.S4 4.S3,9.S2 C4.S1,10.RZ 4.RX,11.Sg 4.SC,12.Sz L4.Sw,15.Sv L7.Su,14.Sr C8.Sq,15.Sp 9.So,15.Sn 10.Sl,15.IQ fY.Tr,15.IQ 15.Uv,12.Uq 15.Um,9.Uk Uh.UD,7.Us 15.V1,6.V0 14.Id,5.If Z UZ.BH,11.BS sQ.UX,11.UW 12.UU,12.UT 11.UQ,12.UP py.UO,12.UJ 11.UI,12.UH 10.UF,11.TN C8.TK,11.TI 7.Tv,9.Tu 7.TO,9.U3 C7.Uc,9.Ub 6.tn,8.U6 6.tn,8.U2 C6.tn,7.TX 7.TW,7.TU 7.TT,6.RS C7.Qk,6.PS 7.PO,6.pY 7.PM,6.pY C7.PL,6.pY 8.PH,6.pY 8.PD,6.PC C8.Q4,6.PV 8.P1,6.P0 8.OZ,6.OP C8.ON,7.OM 8.Le,8.Pp 8.Pn,8.Pi C9.Pg,8.Pf 9.Pb,8.Qi 8.Px,8.Qj C8.Le,8.Rq 8.Rm,8.Rl 8.Rk,8.Rg C8.Rd,8.Rb 8.RN,8.RK 8.RF,8.QD C8.QB,8.Qy 8.Ql,9.Qq 8.Qp,9.Qm C8.Qw,9.QU 8.R2,9.QX 9.QW,10.QV C9.QT,10.QJ 10.QS,10.QR 10.QQ,10.QO Bm.QN,11.QM 10.Mn,11.Se 10.QP,10.CB Bm.QH,10.Cr 11.Qo,10.Qr 11.Qu,10.QF py.R4,10.R5 11.Rx,10.Rz 11.RC,10.Rv py.RO,10.Rt 12.Ri,10.R8 12.Rf,10.R7 sQ.Rh,10.Cr 12.Rn,10.Ro 13.Rp,10.CB fY.Cq,10.Rr 13.Cq,11.R6 12.BH,11.BS Z\' 5g=\'"+5O+"\' 5g-pM=\'G5\'></8Y>"}};E Pd(){G.2U=E(){I"cu://t.me/2U/18?18="};G.1v=E(5O){I"<8Y d=\'Ph.FQ,4.G4 nS.Pa,4.Pm 15.Po,4.Pt 14.zS,4.zZ Pu.zS,4.zZ vg.P5,4.P6 11.P9,5.Pw 8.PY,6.Q1 C6.Q3,7.Q5 4.Q6,8.PW 4.Q9,8.Qa C4.Av,8.Qb 3.Qc,9.Qe 3.Qf,9.Qg C3.PU,9.PJ 3.PT,10.PB 4.Av,10.PE C4.PF,10.PG 6.Py,11.PI 6.PK,11.PP C6.PQ,11.PR 13.Ts,6.TS 13.EF,6.TR fY.U8,7.U9 8.Ua,11.TP 8.TE,11.Tw C8.Tz,11.TA 7.TB,14.TG 8.TH,14.TJ C8.TL,14.TM 8.Ud,14.TQ 8.UK,14.EO C8.UL,14.UM 8.UN,14.BV 8.UG,14.BV C9.UY,14.UR 9.UE,13.Ui 10.Uj,13.Ul py.Ug,14.Ur 12.Ut,15.Uu 12.Uw,15.Ux Uy.Uz,15.UB sQ.Uf,15.SF 13.Tq,15.uC 13.Sk,15.uC fY.Sm,15.uC 13.Si,15.Sy 13.EF,15.St fY.S5,15.Sf 13.RV,15.RW 14.EP,14.EO vg.EP,14.S7 14.S8,14.S9 14.Sa,14.Sc vg.T5,12.T6 14.T7,10.Ta 15.Tb,9.Tc nS.Td,7.T4 15.Te,6.Th 15.Ti,5.Tj nS.Tm,5.Tn 15.To,5.T2 15.T1,5.SH nS.SJ,5.SK 15.SL,4.SM 15.FQ,4.G4 Z\' 5g=\'"+5O+"\' 5g-pM=\'G5\'></8Y>"}};B ud=E(18,ja){B 7a=P;if(18.K(\'7a\')==0){7a=H;18=18.1q(5)}B ov=ow(18);B 2q;B 3o;B iR=P;B 4l=P;B q8=P;B pX=P;B 2y=H;B tE=[];B ce=1;B hG=P;B t9;B eI=0;B qy=0;B pS=P;B pQ=\'G6\'+v.id+(7a?\'7a\':\'\');fT("#G6"+v.id+"{17:100%!6i;1e:100%!6i;5N-17:1U!6i;5N-1e:1U!6i}");B 1J=1Q(\'1Y\');B qq=0;1J.6g(\'id\',pQ);ja.1N(1J);o.6m=P;!7a?o.X.hM():\'\';if(o.1m.2n){v.4T=1}if(v.Gd!=1){B 8i=1Q(\'1Y\');ja.1N(8i);O(8i,{1l:"2m",1f:0,1c:0,"2j-1r":"#o8",1e:"100%",17:"100%","1C":0});8i.1y("DW",E(1h){1h.6L=H});if(o.1m.2n){8i.1y("fS",E(1h){1h.6L=H});8i.1y("2x",E(1h){1h.6L=H});8i.1y("gN",E(1h){1h.6L=H;gO(1h);if(v.eB==1){1G(G7,100);1G(ou,2p)}})}F{8i.1y("wh",E(1h){B x=H;if(v.29==1){if(J(v.7y)&&!q8){x=P}if(J(v.pq)&&bx()=="8q"&&1b()>0){x=P}}if(x&&v.eB==1&&v.G8!=1){3k(G);1G(ou,4d)}})}v.eB==1&&v.SP!=1?3k(8i):\'\'}E ou(){6k(8i)}E G7(){if(v.G8!=1){3k(8i)}}if(v.4T==1&&v.3n==0){9p()}if(!1S[\'YT\']){1S.SG=E(){oc();W(B i=0;i<5h.U;i++){if(5h[i]){if(5h[i].3z("id")!=v.id){if(5h[i].3z(\'En\')){5h[i].3z(\'El\')}}}}};B v0=xO("4R.7R/G9","4R.7R/G9","SQ");if(v0){v0.uA=E(e){o.X.dH();if(v.FL!=1){2q=\'JI SS im\';o.R.6l()}}}}F{oc()}E oc(){if(v.4T==1||7a){!iR?iQ():\'\'}F{o.X.dH()}}E iQ(){if("YT"in 1S){if(J(YT.pO)&&!iR){1w("FB hk");B uW=0;if(v.Gd==1){uW=1}o.2e>0?eI=2P(o.2e):\'\';3o=1z YT.pO(pQ,{1e:o.9M,17:o.9B,ST:ov,SU:{SV:1,SW:pQ,SX:1,SY:1,gp:1,kr:((v.G3==0||(v.SZ!=1&&o.1m.7S))&&o.1m.2n?0:1),T0:3,S:uW,OI:0,OF:1,Dp:0,3n:7a||v.3n==1?1:0,9C:0},3c:{\'OG\':tm,\'LC\':Fq,\'6l\':6l,\'Lx\':FM}});if(o.2e>0){o.2e=1M}2C();iR=H}F{1G(iQ,4c)}}F{1G(iQ,4c)}}B kV;E tm(){if(o.R){1w("FB fr");4l=H;2N(t9);o.X.7L();if(7a){if(o.1m.qY){o.X.5p()}3o.oJ();o.29.Lu()}F{if(v.3n==1&&o.1m.qY&&!o.mj){o.X.5p();if(o.1m.2n){3S(kV);kV=7d(FN,dN)}}if(v.4T==0){3o.oJ()}F{o.X.dH()}qq=3o.tP();o.R.a9();if(ce!=1){9x(ce)}db();2C();if(v.LA==1){3w{if(3o.uU()){if(J(3o.uU().1I)){v.1I=3o.uU().1I;o.X.9R(\'1I\')}}}2X(e){}}}}}E FN(){B x=3o.Dl();if(x==2||x==-1){o.S.3l();o.S.7L();3S(kV)}if(x==1){3S(kV)}}E Fq(1h){if(v.Lw==1){1w(\'YT\',1h.2c)}if(7a){if(1h.2c==YT.eP.FC){o.29.M3()}if(1h.2c==YT.eP.Fw){}}F{if(1h.2c==YT.eP.Fw){if(qy==1){qy=0;tm()}if(!o.1A){o.X.2H()}if(eI>0){3o.CH(eI,H);eI=0;o.2e=1M}ou();q8=H;4l=H;if(pX){3o.tF()}F{o.R.a5();o.R.df()}Es();if(J(v.53)){W(B i=0;i<o.2G.U;i++){if(v.53==o.2G[i]){6n(i)}}v.53=1Z}F{if(J(o.53)){W(B i=0;i<o.2G.U;i++){if(o.53==o.2G[i]){6n(i)}}o.53=1Z}}hG=P}if(1h.2c==-1&&hG&&o.1A){o.X.7L();hG=P;dX()}if(1h.2c==YT.eP.M9){}if(1h.2c==YT.eP.FC){8M()}if(1h.2c==YT.eP.Mh){if(!o.1A){}if(o.1A){hG=H;9p()}}if(1h.2c==YT.eP.LJ){}}}E 6l(1h){if(7a){o.29.LL()}F{if(1h.2c==2){2q="Jj 4R id"}if(1h.2c==5){2q="s7 54"}if(1h.2c==101||1h.2c==150||1h.2c==100){2q="G fj is LM"}if(v.LN==1){J(v.FK)?2q=v.FK:\'\'}if(v.FL!=1){o.R.6l()}F{1n(o.2i)}}}E 8M(){v.1E>0?eI=v.1E:\'\';o.R.8M();o.R.a9()}E dX(){if(!o.JB&&o.1A){o.X.3l()}}E df(){o.R.df()}E db(){o.R.db();o.X.sM()}E a9(){o.R.a9()}E dC(){o.R.dC()}E 9p(){if(o.R){o.R.9p()}F{t9=1G(9p,100)}}E FM(1h){t7(1h.2c)}E Es(){if(!pS){B x=3o.LS()+\'\';if(x!=\'\'&&x!=1M){o.2G=x.2D(\',\');o.2G=o.2G.EA();if(v.tB==0){B y=o.2G.K(\'2y\');if(y>-1){o.2G.rG(y,1)}}W(B i=0;i<o.2G.U;i++){o.2G[i]=kx(o.2G[i])}pS=H;t7(3o.LY())}}}E t7(x){o.3r=o.2G.K(kx(x+\'\'));o.S.wt(o.3r)}G.3T=E(){I{"17":0,"1e":0}};G.3h=E(x){ov=ow(x);if(o.2e>0){eI=2P(o.2e)}d0(ov)};E bx(){B 7n=-1;if(4l){7n=3o.Dl()}B x=\'\';if(7n==-1){x="8q"}if(7n==1||7n==3){x="8b"}if(7n==2){x="8q";if(o.1A){o.X.3l()}}if(7n==5){x="8q"}if(7n==0){x="7t"}I x}E 2C(){3w{if(J(3o)){3o.LU(o.2Z,o.4t)}}2X(e){1w(e)}}E kx(x){B y=x;if(x=="LT"){y="nO"}if(x=="9m"){y="l9"}if(x=="LH"){y="l3"}if(x=="LP"){y="je"}if(x=="LI"){y="nK"}if(x=="Me"){y="nJ"}if(v.Dv==1){y=2R(y)}if(x=="2y"){y=2R("2y")}tE[y]=x;I y}E 1b(){B x=4l?3o.LE():0;if(x>0&&v.k4>0){v.4G=x-v.k4;v.k4=-1}I x};E 9x(x){3w{3o?3o.Ml(x):\'\';ce=x}2X(e){}};G.nP=E(){oc()};G.2H=E(){if(4l){3o.oJ()}F{if(!iR){iQ()}F{}}};G.3l=E(){if(4l){3o.tF()}};G.8N=E(){if(4l){bx()==\'8b\'?3o.tF():3o.oJ()}};G.3Y=E(x){if(4l){3o.CH(x,H);js("4h",x)}};G.av=E(){I P};G.5p=E(){4l?3o.5o():\'\'};G.6z=E(){4l?3o.M8():\'\'};G.3Z=E(x){4l?3o.DE(x*100):\'\'};G.nx=E(){I bx()==\'8b\'};G.5B=E(){I P};G.tg=E(x){6n(x)};E 6n(x){if(4l){if(J(o.2G[x])){B y=tE[o.2G[x]];2y=y==\'2y\';B z=1b();3o.M5(y)}}}G.g4=E(x){9x(x)};G.4l=E(){I 4l};G.7h=E(){I bx()};G.1b=E(){I 1b()};G.1p=E(){B x=4l?3o.tP():0;if(x!=qq){qq=x;o.R.a9()}if(J(v.4H)){if(7c([v.4H],\'-\')){x=x+v.4H*1}F{x=v.4H}}I x};G.ak=E(){B x=0;if(4l){x=3o.LD()*3o.tP()}I x};G.4Y=E(){2C()};G.jw=E(){I 2q};G.2y=E(){I v.tB==1?2y:P};G.Bq=E(x){d0(x)};E d0(x){18=x;if(3o){qy=1;3o.Lv(x,0)}}G.nb=E(){if(o.1m.2n&&o.1m.bw){G.2H();pX=H}F{if(bx()=="8b"){G.3l()}}};G.gl=E(){pX=P};G.uI=E(){I H};G.4n=E(){4l?3o.a2():\'\';4l=P;pS=P;3w{if(1J){ja.3p(1J)}ja.3p(8i)}2X(e){}}};B Ea=E(){B x=\'\';B t=0;B d=0;if(o.5G){if(v.Mp!=1){if(3f.4v("es"+v.id+o.9H)!=1Z){x=3f.4v("es"+v.id+o.9H)}if(v.7W==1&&3f.4v("iY"+v.id+o.9H)!=1Z){o.7W=3f.4v("iY"+v.id+o.9H)}if(J(v.7D)){if(3f.4v("es"+o.d+v.7D)!=1Z){x=3f.4v("es"+o.d+v.7D)}if(v.7W==1&&3f.4v("iY"+o.d+v.7D)!=1Z){o.7W=3f.4v("iY"+o.d+v.7D)}}if(o.7W&&v.7W==1){o.tq=o.7W.2D(",")}if(x.K("{")==0){if(v.E1==1){o.bG=x.1q(1,x.K("}")-1)}F{o.r5=v.4V=x.1q(1,x.K("}")-1)}x=x.1q(x.K("}")+1);v.Ny==1?v.Y.lI=0:\'\'}dI(x)}};E dI(x){if(x){if(x.K("--")>0){B y=x.2D("--");t=3Q(y[0]);if(v.NR==1&&t>0&&v.3n==1){v.3n=0}if(v.E1==1){o.qR=t}F{d=3Q(y[1]);o.2e=t}}}}G.DH=E(){if(J(v.7D)){if(3f.4v("es"+o.d+v.7D)!=1Z){x=3f.4v("es"+o.d+v.7D);dI(x);o.S.eK(t,d);o.S.3V(t,d);v.1p=d}F{o.2e=0;o.S.eK(0,0);o.S.3V(0,0);v.1p=0}}};G.nG=E(t,d){if(o.R.5B()&&v.NS==1){}F{B ct=1z 6N().8C();3f.8c("es"+(J(v.7D)?o.d+v.7D:v.id+o.9H),(J(o.3a)?"{"+o.3a+"}":\'\')+t+\'--\'+d+\'--\'+ct)}};G.zR=E(x){o.7W=(o.7W?o.7W+\',\':\'\')+x;3f.8c("iY"+(J(v.7D)?o.d+v.7D:v.id+o.9H),o.7W)};G.ax=E(){I{t:t,d:d}}};B kT=E(){B 2B=[];B aZ=[];B 54=H;B 7A;B 9K=-1;B tS;B a7;B mz=[];B my;B iE=[];G.1E=E(x){if(!x&&a7){qw(a7);a7=1M}F{x?qw(x):\'\'}};G.yY=E(x){qw(x)};G.IS=E(){iE=[]};E qw(x){if(x.K("#"+v.cP)==0&&x.K(v.e9)>0){o[o.fd[1]](x,Eb)}F{aJ(x)}}E Eb(x){o.2f=x;aJ(x)}E aJ(x){!x?x=\'\':\'\';if(x!=\'11\'){B 1E=0;B r3=H;B hX=\'\';o.2f=x.2D(",");o.3i=[];o.3v=-1;if(wH()&&v.uq==1){if(3f.4v("uD")!=1Z){hX=3f.4v("uD")}}F{if(o.qi){hX=o.qi}}W(B i=0;i<o.2f.U;i++){if(o.2f[i].K("#0")==0){o.2f[i]=cW(o.2f[i])}if(o.2f[i].K("#"+v.9O)==0){o.2f[i]=o[o.fd[0]](o.2f[i])}if(o.2f[i].K("[")==0&&o.2f[i].K("]")>1){o.3i[i]=o.2f[i].1q(o.2f[i].K("[")+1,o.2f[i].K("]")-1);o.2f[i]=o.2f[i].1q(o.2f[i].K("]")+1);r3=P}F{o.3i[i]=o.2f[i].1q(o.2f[i].lP("/")+1);o.3i[i]=o.3i[i].1q(0,o.3i[i].lP("."))}if(o.2f[i].K("#0")==0){o.2f[i]=cW(o.2f[i])}if(o.2f[i].K("#"+v.9O)==0){o.2f[i]=o[o.fd[0]](o.2f[i])}}if(o.3i.U>1&&v.mt==1){o.3i.2L(nM(\'NQ\',(v.NY==1&&J(v.Ec)?v.Ec:2R(\'uG\'))));o.2f.2L("9Z")}if(o.3i.U>0&&v.9f==1){if(v.DX==1){7A=0;1E++;o.3i.j5(nM(\'Ee\',2R(\'6G\')));o.2f.j5("")}F{o.3i.2L(nM(\'Ee\',2R(\'6G\')));o.2f.2L("");7A=o.3i.U-1}}W(B i=0;i<o.2f.U;i++){if(J(v.Ei)){if(v.Ei==o.3i[i]){1E=i;o.3v=i;v.eW=1}}if(hX!=\'\'){if(hX==o.3i[i]){1E=i;o.3v=i}}}if(v.9f==1&&v.eW==0){o.3v=7A}J(o.S)?o.S.bH():\'\';if(v.eW==1){o.3v=1E;if(o.1E){if(v.mt==1&&o.2f[1E]=="9Z"){vj(o.3v)}F{iT(o.3v)}}F{a7=x;o.5k=o.2f[1E]!=\'6G\'&&1E!=7A;1G(i1,4c)}}F{if(r3&&o.2f.U<3){iT(7A==0?1:0)}v.9f!=1?o.3v=-1:\'\'}}F{4n()}};G.uF=E(x){iv(x,\'1H\')};E iT(x){if(J(o.2f[x])){if(o.2f[x].K(".")>-1){o.qs=o.2f[x].2D(" or ");o.gK=0;iv(x)}F{if(o.2f[x].K(\'aZ\')==0){if(aZ[o.2f[x].1q(4)]){sl(o.3i[x],aZ[o.2f[x].1q(4)])}}if(o.2f[x].K(\'1H\')==0){o.R.fP(x,"Hr");o.5k=H;o.3v=x;o.S.bH()}}}}E vj(x){o.5k=H;i1()}E iv(x,y){B 18=y==\'1H\'?x:4Z(o.qs[o.gK]);B l4=18;B gh;if(mz[18]){if(o.2f[x]!=\'9Z\'){o.5k=H;i1()}}F{if(18.K(\'d9\')>0&&18.K(\'d9\')<4){gh=18.1q(0,18.K(\'d9\'));l4=18.1q(18.K(\'d9\')+3)}B 51=fh(l4);9K=x;o.iB=1;51.cZ=E(){o.iB=0;if(G.fn==4&&G.7h==4z){o.5k=H;sl(18,G.dy,x,y)}F{if(o.gK+1<o.qs.U){o.gK++;iv(9K)}F{lQ("dg")}}};51.uA=E(e){o.iB=0;if(o.gK+1<o.qs.U){o.gK++;iv(9K)}F{lQ("dg")}};51.bd()}};E lQ(x){1w("28 hc pJ or B6 B5");if(o.3i[o.3v]){if(o.3i[o.3v].K(2R("dg"))==-1){o.3i[o.3v]=o.3i[o.3v]+\' (\'+2R(x)+\')\'}}if(v.NL==1&&9K>-1){o.2f[9K]=\'\';o.3i[9K]=\'\'}o.3v=-1;o.5k=P;if(o.NK){o.S.bH();o.S.4U()}F{1G(E(){if(o.S){o.S.bH();o.S.4U()}},100)}if(J(o.28)){o.1T.3p(o.28);o.28=1Z}}E sl(18,x,y,z){B gh;if(x.K("#"+v.9O)==0){x=o[o.fd[0]](x)}if(x.K("#"+v.cP)==0&&x.K(v.e9)>0){x=o[o.fd[1]](x)}if(18.K(\'d9\')>0&&18.K(\'d9\')<4){gh=18.1q(0,18.K(\'d9\'))}if(18.K(\'.ia\')>-1||18.K(\'.sq\')>-1||18.K(\'.lM\')>-1||18.K(\'.sA\')>-1){B l=gh?gh:o.3v;if(o.2f[l]=="9Z"){l=y}if(z!=\'1H\'||!2B[l]){2B[l]=7F();2B[l][0]=[];2B[l][1]=[]}B 3G=c9();3G=x.2D(/\\r|\\n/);B sa=1;B t1=0;B t2=0;B gW=(J(v.DD)?v.DD:0);if(18.K(\'hw=\')>0){gW=18.1q(18.K(\'hw=\')+6)*1}W(B i=0;i<3G.U;i++){if(18.K(\'.ia\')>-1||18.K(\'.sA\')>-1){if(3G[i].K(\'-->\')>-1&&3G[i].K(\':\')>-1){if(z==\'1H\'){if(iE.K(3G[i])>-1){1k}iE.2L(3G[i])}t1=i9(3G[i].1q(0,3G[i].K(\'-->\')))*1+gW;t1==0?t1=1:\'\';t2=i9(3G[i].1q(3G[i].K(\'-->\')+4,12))*1+gW;J(2B[l][0][t1])?\'\':2B[l][0][t1]=\'\';W(B j=t1;j<t2;j++){2B[l][1][j]=t1}sa++}F{3G[i]=4Z(3G[i]);if(3G[i]!=\'\'&&3G[i].U>0&&3G[i]!=sa&&3G[i]!=\'Oq\'){if(2E(2B[l][0][t1])){2B[l][0][t1]=2B[l][0][t1]+\'<br>\'+3G[i]}F{2B[l][0][t1]=3G[i]}}}}if(18.K(\'.sq\')>-1||18.K(\'.lM\')>-1){if(3G[i].K(\'Os:\')>-1){t1=i9(3G[i].1q((18.K(\'.lM\')>-1?3G[i].K(\'=0\')+3:12),12))*1+gW;t2=i9(3G[i].1q((18.K(\'.lM\')>-1?3G[i].K(\'=0\')+14:23),10))*1+gW;B p=\'\';if(3G[i].K(\'0,,\')>0){p=3G[i].1q(3G[i].K(\'0,,\')+3)}F{if(3G[i].K(\'DP,\')>0){p=3G[i].1q(3G[i].K(\'DP,\')+6)}if(3G[i].K(\')}\')>0){p=3G[i].1q(3G[i].K(\')}\')+2)}}if(p!=\'\'){if(2B[l][0][t1]!=1M){2B[l][0][t1]+=\'<br>\'+p}F{2B[l][0][t1]=p}2B[l][0][t1]=2B[l][0][t1].1V(/{.*?}/,\'\');2B[l][0][t1]=2B[l][0][t1].1V(/\\\\\\\\N/,\'<br>\');2B[l][0][t1]=2B[l][0][t1].1V(/\\\\N/,\'<br>\');W(B j=t1;j<t2;j++){2B[l][1][j]=t1}}}}}mz[18]=H;if(o.2f[y]!=\'9Z\'){z!=\'1H\'?i1():\'\'}}F{if(x!=\'\'){if(x.K(\'[\')==0){aJ(x)}F{lQ("2q")}}F{4n();o.S.4U()}}}E i1(){o.S.bH();o.X.kM();o.S.4U()}E i9(ia){B 1B=ia.2D(\':\');B 4m=0;1B.U==2?1B.j5("cK"):\'\';1B[0]!=\'cK\'?4m+=1B[0]*tZ:\'\';1B[1]!=\'cK\'?4m+=1B[1]*60:\'\';4m+=1B[2].1q(0,2)*1;4m=4m*10+1B[2].1q(3,1)*1;I 4m};E 9e(x){if(J(o.3v)){if(o.3v!=x){iE=[];if(x==-1||(v.9f==1&&x==7A)){mZ()}F{v.cO=0;o.3v=x;o.5k=H;v.eW=1;tG(x);js("28",o.3i[x]);o.S.bH()}}F{if(v.9f!=1){mZ()}}}}E ue(){if(J(o.3i[o.3v])){if(o.5G&&v.uq==1){3f.8c("uD",o.3i[o.3v])}F{o.qi=o.3i[o.3v]}}}E tG(x){if(J(o.2f[x])){1w("fv",x);o.3v=x;ue();if(o.2r=="1H"&&o.9P==H){o.R.fP(x,"1H")}F{if(o.2r=="3W"&&o.tH==H){o.R.fP(x,"3W")}F{if(o.2f[x]=="9Z"){vj(o.3v)}F{iT(o.3v)}}}}};G.vr=E(){if(o.fD){B x=o.fD.4p;if(x[0]){B y=1z v6();y.cZ=E(e){B z=e.41.kU;aZ.2L(z);o.3v=-1;B z=x[0].6H;if(z.U>40){z=x[0].6H.1q(0,15)+\'...\'+x[0].6H.1q(-15)}if(v.9f==1&&v.DX==1){o.2f.2L(\'aZ\'+(aZ.U-1));o.3i.2L(z+\'\');9e(o.2f.U-1)}F{o.2f.j5(\'aZ\'+(aZ.U-1));o.3i.j5(z+\'\');v.9f==1?7A++:\'\';9e(0)}o.fD.5Y=""};y.Mo(x[0])}F{o.fD.2x()}}};G.9e=E(x){9e(x)};G.7A=E(){I 7A};G.Oz=E(x){7A=x};G.1t=E(x){jB(x)};G.C=E(){tR()};G.6s=E(){4n()};G.6G=E(){mZ()};E mZ(){js("28","6G");o.5k?o.DG=o.3v:\'\';o.3v=v.9f==1?7A:-1;v.eW=0;o.5k=P;o.S.bH();ue();o.tH?tG(o.3v):\'\';J(o.28)?o.1T.3p(o.28):\'\';o.28=1Z}E jB(1b){if(o.ao){I}B t=2P(1b*10);if(v.cO){1b=1b-v.cO*1}if(o.5k&&J(o.2f)){if(2B){B x=o.3v;B t=2P(1b*10);if(v.r0==1&&!o.1A){I}if(o.2f[x]=="9Z"){if(!my){W(B i=0;i<o.2f.U;i++){1G(iT,i*4c,i)}if(!2B[x]){2B[x]=7F();2B[x][0]=c9();2B[x][1]=c9()}my=H}F{if(2B[x][1][t]){}F{W(B i=0;i<o.2f.U;i++){if(2B[i]){if(J(2B[i][1])){if(J(2B[i][1][t])){if(!2B[x][0][t]){2B[x][0][t]=\'\'}2B[x][0][t]+=(2B[x][0][t]!=\'\'?\'<br>[mk]\':\'\')+2B[i][0][2B[i][1][t]]+(2B[x][0][t]!=\'\'?\'[/mk]\':\'\')}}}}if(J(2B[x][0])){if(J(2B[x][0][t])){2B[x][1][t]=t}}}}}if(J(2B[x])){if(J(2B[x][1])){if(J(2B[x][1][t])){B y=\'\';y=2B[x][0][2B[x][1][t]];if(!J(o.28)){o.28=1Q(\'1Y\');4i(o.28,{id:\'j9\'+v.id+\'4y\'+\'28\'});o.1T.1N(o.28);tR();js("uR",o.3i[x])}if(54){6k(o.28)}Da();if(v.Dh==1){y=Ol(y)}if(v.mt==1){y=y.1V(/\\[mk\\]/gm,\'<7x C="1r:\'+3C(v.gt)+\'">\');y=y.1V(/\\[\\/mk\\]/gm,\'</7x>\')}if(y.K(\'<c.\')>-1){y=y.1V(/\\<c./gm,\'<7x C=1r:\');y=y.1V(/\\<\\/c\\>/gm,\'</7x>\')}if(v.9i){if(v.9i.2B==1&&tS!=y){js("2B",y);tS=y}}o.28.1R=\'<7x C="\'+(v.CT==1?\'2j-1r:\'+4S(v.kO,v.kL)+\';\':\'\')+\'-3K-6o-lD-1k: Oj;1r:\'+3C(v.gz)+\';2V:\'+v.tX+\'px \'+v.tX*2+\'px;2Y-6Q:\'+v.CP+\'px;2M:0 0;2F-1e:\'+(v.CL?v.CL:1.8)+\';3R-dv:\'+v.jC+\'">\'+4Z(y)+\'</7x>\';O(o.28,{"3R-3T":((2P(v.nC)+((2P(v.h0)-100)*2P(v.nC)/100))+"px")});if(v.Du==1){if(o.2a){O(o.28,{"3R-3T":((v.nz+((2P(v.h0)-100)*v.nz/100))+"px")})}}54=P}F{if(!54&&J(o.28)){tU()}}}}F{tU()}}}}E tU(){if(!54){o.28?o.28.1R=\'\':\'\';54=H;3k(o.28)}}E tR(){if(o.28){O(o.28,{"1l":"2m","17":"100%","2V-1c":"10%","2V-2k":"10%","1c":0,"1r":v.gz,"1F-8o":"8K","6o-l6":"2Y-6o"});if(v.Of==1&&J(v.sV)){v.sV!=\'\'?O(o.28,{"3R-dq":v.sV}):\'\'}if(v.lU==1){O(o.28,{"1F-9X":"-42 -42 0 #gq,42 -42 0 #gq,-42  42 0 #gq,42  42 0 #gq"})}F{if(v.lc==1){O(o.28,{"1F-9X":"42 42 Od Oc"})}F{O(o.28,{"1F-9X":"1U"})}}if(v.Ob==1){u1(o.28,\'o.p3\')}F{v.Dh!=1?fk(o.28):\'\'}}}E Da(){if(!o.p3){if(o.S.mn()||v.cv>v.1u.h){O(o.28,{"1l":"2m","1f":"2y","1c":0,"2O":(v.cv*1)})}F{O(o.28,{"1l":"2m","1f":"2y","1c":0,"2O":(v.cv*1+v.1u.h*1)})}}}E 4n(){o.3v=-1;o.5k=P;o.oa=P;v.28=1Z;v.o6=1Z;o.2B=1Z;o.2f=1Z;my=P;mz=[];2B=[];if(J(o.S)){o.S.bH()}o.3i=1Z;if(J(o.28)){o.1T.3p(o.28);o.28=1Z}o.3v=1Z;o.5k=P}};B Dx=E(){o.oo=1Q("1Y");B r=v.6P;B oo=[];B 1B=\'5g="\'+v.4j+\'" 3E="\'+v.4j+\'" 3E-17="2"\';oo[1]=1Q(\'1Y\');oo[1].1R=\'<2g><8Y d="M0,0 L\'+r+\',0 Q0,0 0,\'+r+\' Z" \'+1B+\'/></2g>\';oo[2]=1Q(\'1Y\');oo[2].1R=\'<2g><8Y d="M0,0 L\'+r+\',0 L\'+r+\',\'+r+\' Q\'+r+\',0 0,0 Z" \'+1B+\'/></2g>\';oo[3]=1Q(\'1Y\');oo[3].1R=\'<2g><8Y d="M\'+r+\',0 L\'+r+\',\'+r+\' L0,\'+r+\' Q\'+r+\',\'+r+\' \'+r+\',0 Z" \'+1B+\'/></2g>\';oo[4]=1Q(\'1Y\');oo[4].1R=\'<2g><8Y d="M0,0 Q0,\'+r+\' \'+r+\',\'+r+\' L0,\'+r+\' Z" \'+1B+\'/></2g>\';O(o.oo,{\'1l\':\'2m\',\'1f\':0,\'1c\':0,\'4k-3c\':\'1U\',\'1e\':\'2y\',\'5v\':\'3g\',\'17\':\'100%\',\'1e\':\'100%\'});o.oo.C.4N=4d;O(oo[1],{\'1l\':\'2m\',\'1f\':-1,\'1c\':-1});O(oo[2],{\'1l\':\'2m\',\'1f\':-1,\'2k\':-1});O(oo[3],{\'1l\':\'2m\',\'2O\':-1,\'2k\':-1});O(oo[4],{\'1l\':\'2m\',\'2O\':-1,\'1c\':-1});W(B i=1;i<5;i++){O(oo[i],{\'17\':r,\'1e\':r,\'2F-1e\':0});o.oo.1N(oo[i])}o.1J.1N(o.oo)};B wU=E(1a,2v,w,C){v.e0=1;B C=C;B w=w;B 4w=-1;B kE=1Q("1Y");dW(kE);1a.1N(kE);J(v.2v)?8G(w):\'\';G.xr=E(w){uT(w)};G.cY=E(w){8G(w)};G.2A=E(x){I 7P(x)};G.4m=E(){uB()};E 8G(w){if(2v){W(B i=0;i<2v.U;i++){kE.3p(2v[i])}}2v=[];if(v.2v){if(1O(v.2v)=="5j"){v.2v=2o(v.2v)}W(B i=0;i<7F.6d(v.2v).U;i++){if(J(v.2v[i].1b)){2v[i]=1Q("1Y");O(2v[i],{\'1l\':\'2m\',\'1c\':0,\'1f\':-C.h/2,\'1e\':C.h,\'1C\':2t(v.2v[i].1C,C.nt),\'4k-3c\':\'1U\',\'2l\':\'1U\',\'2j-1r\':2t(v.2v[i].1r,C.FF),\'4I\':\'1C 0.1s 3e,2J 0.2s 5l-in-4m\'});2v[i].1b=v.2v[i].1b;2v[i].w=v.2v[i].17;2v[i].1F=v.2v[i].1F;kE.1N(2v[i])}}uT(w)}}E uT(w){B x=o.R.1p();W(B i=0;i<2v.U;i++){if(x>0){B pw=2t(2v[i].w,C.Gb);pd=pw;if(6v(pw).K(\'s\')>0){pd=pw.1q(0,6v(pw).K(\'s\'))*1;pw=(pd/x)*w}if(2v[i].1F){2v[i].9u=2v[i].1b+pd}O(2v[i],{\'1c\':w*(2v[i].1b/x)-w/2,\'17\':pw,\'2l\':\'4r\'})}F{3k(2v[i])}}}E 7P(x){B y=\'\';uz=P;if(J(x)){W(B i=0;i<2v.U;i++){if(2v[i].1F&&2v[i].9u){if(x>=2v[i].1b&&x<2v[i].9u){y=\'<4O C="2F-1e:1.2;\'+(J(v.2v[i].Ga)?v.2v[i].Ga:\'\')+\'">\'+2v[i].1F.1V(/ /g,"&dP;")+\'</4O>\';if(4w!=i){if(4w!=-1){O(2v[4w],{\'1C\':2t(v.2v[4w].1C,C.nt),"2J":"3q(1)"})}O(2v[i],{"1C":1,"2J":"3q(2)"});4w=i}uz=H}}}if(!uz){uB()}}I y}E uB(){if(4w>-1){O(2v[4w],{\'1C\':2t(v.2v[4w].1C,C.nt),"2J":"3q(1)"});4w=-1}}};E Fm(){B 3j=-1;B pl=[];B 3A=[];B ex=[];B 1I=[];B 3P=[];B ey=[];B h=[];B j=0;B 6I=4;B bb=0;B 6B;B rA;B C=v.Y;!C.ez?C.ez=\'3L\':\'\';!C.af?C.af=\'4b\':\'\';B ez=(C.Fh==1?C.ez:C.1r);B af=(C.Fh==1?C.af:C.4j);if(v.Y.6B>0&&!6B){if(1O ny!=="1M"){6B=1z ny(H)}}fT(".n7"+v.id+"6X::-3K-uP {17: "+3Q(0.3*2t(C.MO,1))+"MR;}.n7"+v.id+"6X::-3K-uP-8X {2j:"+4S(C.4j,C.4s)+"}.n7"+v.id+"6X::-3K-uP-b9 {2j:#"+C.62+"}");C.9h=4;B lw="<2g 17=\'"+(C.9h*2+2)+"\' 1e=\'"+(C.9h*1.2+1)+"\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\' C=\'4k-3c:1U;4I:2J 0.2s 5l-4m;1l: 2m;2O: 50%;2M-2O:-"+((C.9h*1.2+2)/2)+"px;2k:"+(C.ki/2+C.9h/2)+"px\'><g><2F x1=\'1\' y1=\'1\' x2=\'"+(C.9h+1)+"\' y2=\'"+(C.9h*1.2)+"\' 3E=\'#"+ez+"\' 3E-17=\'1\' 3E-c0=\'47\'/><2F x1=\'"+(C.9h+1)+"\' y1=\'"+(C.9h*1.2)+"\' x2=\'"+(C.9h*2+1)+"\' y2=\'1\' 3E=\'#"+ez+"\' 3E-17=\'1\' 3E-c0=\'47\'/></g></2g>";if(o.1D){W(B i=0;i<6I;i++){3A[i]=1Q("1Y");B 1a=1Q("1Y");O(3A[i],{"1l":"2m","1f":C.8z,"1r":C.1r,"5v":"3g","3R-dq":eh(C.3R),"2Y-6Q":C.6P+\'px\',"4N":2p});if(2E(C.kY)){O(3A[i],{"2Y":"42 6w "+3C(2t(C.kZ,\'3L\'))})}o.1T.1N(3A[i]);4i(3A[i],{id:(v.id+"4y"+"Y"+(i+1))});1I[i]=1Q("1Y");B fs=C.eZ;if(C.Et>0){fs=C.Et;if(C.Aj>0&&o.9m){fs=C.Aj}}O(1I[i],{"2l":"4r","3R-3T":fs*2t(v.7J,1)});3A[i].1N(1I[i]);3P[i]=1Q("1Y");O(3P[i],{"2l":"4r","4I":"1e 0.1s 5l-4m","3R-3T":C.dG*2t(v.7J,1),"5v-x":"3g"});3P[i].fi.8w("n7"+v.id+"6X");3P[i].1y("kD",rE,{eU:P});3A[i].1N(3P[i])}o.a1==0?o.a1=o.3a:\'\';8G();8N(0)}E 8G(){W(B i=0;i<6I;i++){3P[i].1R=\'\';1I[i].1R=\'\'}B kb=o.1D[o.a1];kh(kd(kb,0),0);kh(kd(kb,1),1);kh(kd(kb,2),2);kh(kd(kb,3),3);2C()}E kd(x,n){W(B i=0;i<n;i++){if(x){if(x.7s==\'\'){x=-1;1k}F if(o.1D[x.7s].7s!=-1){x=o.1D[x.7s]}}}I x}E kh(x,n){if(x){if(x==-1){ex[n]=P;3k(3A[n])}F{ex[n]=H;6k(3A[n]);B pl=[];pl.2L(x);W(B y in o.1D){if(o.1D.2w(y)){if(o.1D[y].7s==x.7s){pl.2L(o.1D[y])}}}B z=mW(o.3a);if(6B){if(pl.U>v.Y.6B+1){6B.8w(C,3P[n])}}W(B i=0;i<pl.U;i++){B 1B=1Q("1Y");O(1B,{"2l":"4r","1l":"et","6M":"4k","2V":Fu(C.2V),"4I":"1r .1s 5l-4m","2V-2k":C.ki+(o.2Z>cA?C.9h*3:0)});B ko=1Q("1Y");O(ko,{"1l":"2m","1f":0,"1c":0,"4N":-1,"17":"100%","1e":"100%","4I":"6a .2s 5l-4m,2j .2s 5l-4m"});ho(ko,i,C.4j,C.4s);if(i==0){O(1B,{\'1r\':ez})}F{O(1B,{"1r":C.1r})}if(z.K(pl[i].id)>-1&&i>0){O(1B,{"1r":C.62});C.hi==1&&J(C.cG)?O(ko,{"7v":C.cG}):\'\';if(2E(C.n3)){O(1B,{"2j-9d":"3e-4L(5c(0, 0, 0, "+(1-C.n3*1)+") 0 0)"})}1B.fi.8w(\'6W-\'+v.id+\'-c6-pl\')}1B.1R=pl[i].1I+(i==0&&o.2Z>cA?lw:\'\');1B.6g("me",(i==0?\'qF\':\'\')+pl[i].id);if(i==0){if(z.K(pl[i].id)>-1||n>0){ey[n]=pl[i].id}F{1B.1R=(C.Mz!=1?\'...\':(C.zI?C.zI:\'\'))+lw}1I[n].1N(1B)}F{if(o.8L[pl[i].id]&&pl[i].id!=o.3a){sO(1B)}3P[n].1N(1B)}1B.1N(ko)}O(3P[n],{"1e":"2y"});h[n]=3P[n].2S;O(3P[n],{"1e":0});3A[n].1y("2x",8V);3A[n].1y("gj",5R);3A[n].1y("gg",5r)}}F{}}E ho(x,i,y,z){B ok;if(x){if(C.vw==1&&C.rj){O(x,{"2j":"3e-4L(to 1c,"+4S(C.rj,z)+", "+4S((i==0?af:y),z)+")"});ok=H}if(!ok){O(x,{"2j-1r":4S((i==0?af:y),z)})}}}E mW(id){B x=o.1D[id];B z=[];if(x){W(B i=0;i<6I;i++){z.2L(x.id);if(x.7s!=\'\'){x=o.1D[x.7s]}}}I z}E 8V(x){B z=x.41;B d=1z 6N();o.9g=d.8C();z.h4!=\'tj\'?z=z.3X:\'\';z.h4!=\'tj\'?z=z.3X:\'\';B y=z.3X.3X;B me=z.6r("me");if(me){if(me.K("qF")==0){B i=-1;y==3A[0]?i=0:\'\';y==3A[1]?i=1:\'\';y==3A[2]?i=2:\'\';eV();if(i>-1){if(3j!=i){k6(i)}F{3j=-1}}}F{6k(1I[3j]);if(ey[3j]==me){eV();if(3j>0){k6(3j-1);I}F{3j=-1}}F{ey[3j]=me}if(o.1D[me].5b){o.S.zo(me);eV();3j=-1;rd()}F{eV();o.2e=1M;3j=-1;3y("1A","id:"+me)}}}hE()}E rd(){W(B y in o.1D){if(o.1D.2w(y)){if(o.1D[o.a1]){if(o.1D[y].7s==o.1D[o.a1].id){o.a1=o.1D[y].id;8G();if(o.1D[y].5b){if(3P[0].jx.U<2){rd()}F{k6(0)}}F{if(C.Mv==1){B me=3P[0].jx[0].6r(\'me\');me?3y("1A","id:"+me):\'\'}F{k6(0)}}1k}}}}}E k6(i){O(3P[i],{"1e":"2y"});O(Bg(1I[i].jx[0]),{"2j-1r":4S(af,1)});O(1I[i].ac("2g")[0],{"2J":"1P(-1, -1)"});o.S.aV();3j=i}E eV(){if(3j>-1){O(3P[3j],{"1e":0});O(3P[3j],{"2Y-1f":"1U"});O(Bg(1I[3j].jx[0]),{"2j-1r":4S(af,C.4s)});O(1I[3j].ac("2g")[0],{"2J":"1P(1, 1)"})}}E 5R(x){B y=x.41;B me=y.6r("me");B z=mW(o.3a);B bg=Bg(y);if(me){if(2E(C.am)){O(bg,{"6a":"bV("+(C.am)+")"})}if(3j==-1||me.K("Dm")==0){ho(bg,-1,af,1)}F{if(C.hi==1&&J(C.cG)&&me==ey[3j]){}F{if(2E(C.9T)){ho(bg,-1,C.9T,(C.8J>-1?C.8J:C.4s))}}}}}E 5r(x){B y=x.41;B me=y.6r("me");B z=mW(o.3a);B bg=Bg(y);if(me){if(2E(C.am)){O(bg,{"6a":"bV(1)"})}if(3j==-1||me.K("qF")==0){B yy=x.41.3X.3X;B i=-1;yy==3A[0]?i=0:\'\';yy==3A[1]?i=1:\'\';yy==3A[2]?i=2:\'\';ho(bg,-1,af,(3j==i?1:C.4s))}F{if(o.8L[me]&&me!=o.3a){sO(y)}if(C.hi==1&&J(C.cG)&&me==ey[3j]){}F{ho(bg,-1,C.4j,C.4s)}}}};E rE(e){}E 2C(){if(5A(3A[0])){B bX=0;W(B i=0;i<1I.U;i++){1I[i].2S>bX?bX=1I[i].2S:\'\'}bb=o.4t-bX-(o.4t>4z?v.1u.h+(o.4t>cA?60:30):0);if(bX>0){bb=2I.47(bb/bX)*bX+(C.rs==1?2I.47(bb/bX):0)-(o.4t<=4z?5:0)}if(bb>0){W(B i=0;i<6I;i++){if(3P[i].m5>bb){O(3P[i],{"5v-y":"6X","2M-2k":0,"5N-1e":bb})}F{O(3P[i],{"5v":"3g","5N-1e":"1U"})}if(v.Y.1l.K("2k")>-1){O(3A[i],{"2k":C.4q+BY(i)})}F{O(3A[i],{"1c":C.4o});if(i>0){O(3A[i-1],{"1c":C.4o+C5(i)})}}}}}}E C5(x){B y=0;W(B i=6I-1;i>=x;i--){y+=3A[i].2b+(3A[i].2b>0?C.4q:0)}I y}E BY(x){B y=0;W(B i=0;i<x;i++){y+=3A[i].2b+(3A[i].2b>0?C.4q:0)}I y}E 8N(x){W(B i=0;i<6I;i++){x==1&&ex[i]?6k(3A[i]):3k(3A[i])}}E oQ(x){if(x>-1){if(3P[x].m5>bb){I H}}I P}E sO(x){O(x,{\'1r\':C.sN});if(C.sH==1){O(x,{\'1F-lD\':\'2F-Cn\'})}if(C.kv>-1){O(x,{\'1C\':C.kv})}O(Bg(x),{\'2j-1r\':4S(C.lC,C.kX>-1?C.kX:C.4s)})}E Bg(x){if(x){I x.ac(\'4O\')[0]}}G.oQ=E(){I oQ(3j)};G.uH=E(){8N(0);eV();3j=-1};G.jB=E(){8N(1)};G.yD=E(){I 3j>-1};G.8G=E(){if(o.a1!=0){B hd=0;!5A(3A[0])?hd=1:\'\';8G();hd?8N(0):\'\'}};G.2C=E(){2N(rA);rA=1G(2C,4c)};G.ar=E(){eV();3j=-1};G.4n=E(){W(B i=0;i<6I;i++){3A[i].5K("2x",8V);3A[i].5K("gj",5R);3A[i].5K("gg",5r);3P[i].5K("kD",rE);o.1T.3p(3A[i]);o.3d=1M}}};o.Nr={"2y":"Авто","1A":"Пуск","4x":"Пауза","2K":"Стоп","2a":"Во весь экран","vv":"Выйти из полноэкранного режима","1j":"Настройки","2Q":"Параметры","1L":"Громкость","5o":"Выключить звук","9S":"Включить звук","5H":"В ЭФИРЕ","Y":"Плейлист","5d":"Качество","6T":"Скачать","28":"Субтитры","5m":"Скорость","er":"Обычная","2q":"ошибка","Ns":"Включите звук","7u":"Аудио","dg":"ошибка загрузки","nO":"Очень низкое","l9":"Низкое","l3":"Среднее","je":"Высокое","tx":"Высокое","6S":"Следующий","cQ":"Предыдущий","2U":"Поделиться","Fn":"Скопировано в буфер обмена","CN":"Реклама","6Y":"Пропустить","Nt":"Пропустить через ","CR":"Перейти на сайт рекламодателя","h0":"Размер текста","cO":"Сдвиг по времени","gz":"Цвет текста","gt":"Цвет текста 2","kO":"Цвет фона","kL":"Прозрачность фона","lc":"Тень","lU":"Контур","jC":"Толщина текста","cv":"Отступ снизу","mR":"Сбросить","mI":"Скрыть параметры","lX":"Загрузить","nr":"Сон","jF":"Пропуск","rI":"Час","rJ":"Минута","rK":"Секунда","G2":"Да","FR":"Нет","of":"из","7X":"Пароль","EJ":"Ошибка воспроизведения на устройстве","EC":"Играет на устройстве","bR":"Канал","1P":"Масштаб","on":"Вкл.","6G":"Выкл.","uG":"Все сразу","gV":"кбит/с","o4":"Код","18":"Ссылка","1r":"Цвет","AX":"Контраст","bV":"Яркость","gF":"Насыщенность","qk":"Сепия"};B 5Q=E(x){B h8;B Nd;B 3b;B 56;B 4C;B ll;B fE=0;B ce;B rQ=P;B rR;if(x.me!=1M&&x.mc!=1M&&x.1K!=1M&&x.to!=1M){if(x.1b==1Z){if(x.1K.K("g9")>-1){x.to==0?x.1b=0.5:x.1b=0.2}F{x.1b=0.20}}h8=Bn(x.5l);if(x.1K.K("1P")==-1){if(J(o.7G[x.me])){o.7G[x.me].uO()}o.7G[x.me]=G}if(x.1t==1){x.mc.26("2l",H)}3b=x.1K.2D(\'|\');4C=6v(x.to).2D(\'|\');56=1z c9();W(B i=0;i<3b.U;i++){if(!4C[i]){4C[i]=4C[0]}if(3b[i]=="g9"){56[i]=x.mc.g("1C")}if(3b[i]=="8R"){56[i]=x.mc.C.1C}if(3b[i]=="y"){56[i]=x.mc.g("y")}if(3b[i]=="x"){56[i]=x.mc.g("x")}if(3b[i]=="1c"){56[i]=2P(x.mc.C.1c)}if(3b[i]=="1f"){56[i]=2P(x.mc.C.1f)}if(3b[i]=="1P"){56[i]=x.mc.g("3u")}if(3b[i]=="6X"){56[i]=x.mc.di}if(3b[i]=="kG"){56[i]=x.mc.aU}if(3b[i]=="3q"){56[i]=x.mc.g("3q")}if(3b[i]=="3u"){56[i]=x.mc.g("3u")}if(3b[i]=="17"){56[i]=x.mc.g("17")}if(3b[i]=="Bc"){56[i]=x.mc.2b;4C[i]=2I.8U(4C[i]);x.me=="Nc"?1w("17",x.me,56[i],4C[i],x.mc.2b):\'\'}if(3b[i]=="1e"){56[i]=x.mc.g("1e")}if(3b[i]=="BD"){56[i]=x.mc.2S}4C[i]=AU(4C[i]);56[i]=AU(56[i])}ce=x.1b*2p/h8.U;ll=h8.U;if(3b.U==1&&56[0]==4C[0]){a6()}F{1G(ln,2I.47(ce))}}E ln(){W(B i=0;i<3b.U;i++){B 1B=56[i]+(4C[i]-56[i])*(h8[fE]?h8[fE]:0);rS(3b[i],1B);if(3b[i]=="y"){x.mc.26("1f",1B)}if(3b[i]=="x"){x.mc.26("1c",1B)}if(3b[i]=="1c"){x.mc.C.1c=1B+"px"}if(3b[i]=="1f"){x.mc.C.1f=1B+"px"}if(3b[i]=="1P"){x.mc.26("1P",1B)}if(3b[i]=="3q"){x.mc.26("3q",1B)}if(3b[i]=="3u"){x.mc.26("3u",1B)}if(3b[i]=="6X"){x.mc.di=1B}if(3b[i]=="kG"){x.mc.aU=1B}if(3b[i]=="17"){x.mc.26("17",1B)}if(3b[i]=="Bc"){O(x.mc,{"17":1B})}if(3b[i]=="1e"){x.mc.26("1e",1B)}if(3b[i]=="BD"){O(x.mc,{"1e":1B})}}fE++;if(!rQ){if(fE==ll){a6()}F{rR=1G(ln,2I.47(ce))}}}E a6(){rQ=H;if(x.1n){if(3b[0]=="8R"||3b[0]=="1c"){1n(x.mc)}F{x.mc.26("2l",P)}}if(x.1K.K("1P")==-1){o.7G[x.me]=1Z;4G o.7G[x.me]}W(B i=0;i<3b.U;i++){rS(3b[i],4C[i])}2N(rR)};E rS(y,z){if(y=="g9"){x.mc.26("1C",z)}if(y=="8R"){x.mc.C.1C=z}}G.uO=E(){a6()};G.zq=E(){fE=ll-1;ln();a6()};G.XY=E(x0,x1,y0,y1){B e=P;W(B i=0;i<3b.U;i++){if(3b[i]==\'x\'&&x0!=x1){e=H}if(3b[i]==\'y\'&&y0!=y1){e=H}}e?a6():\'\'};E Bn(Bj){b3(Bj){1o"Bi":I[0,0.N3,0.N2,1.N1,1.N0,1.V2,1.102,0.MV,0.V4,0.87,0.XG,0.161,1.15W,1.15Q,1.16m,1.16j,0.16c,0.15K,0.15j,0.11Z,1.15z,1.Bf,1.16R,1.Bf,1.16y,0.ka,0.lp,0.lp,0.lp,0.lp,1];1k;1o"ch":I[0,0.16z,0.16A,0.16r,0.16B,0.16K,0.16V,0.16U,0.16u,0.16F,0.16L,0.16D,0.16w,0.16s,0.16P,0.157,0.13J,0.155,0.Cg,0.95,0.13l,0.13k,0.13j,0.13i,0.99,0.13h,0.13g,0.ka,1];1k;7C:I[0,0.Ba,0.32,0.44,0.52,0.6,0.67,0.73,0.13f,0.82,0.85,0.13e,0.13c,0.Cg,0.95,0.97,0.132,0.13a,1];1k}}};B CS=E(){B N=8W.139,ua=8W.138,sr;B M=ua.su(/(mY|ju|7l|CA|BI)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);B M=ua.su(/(mY|ju|7l|CA|BI|137|qu)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);if(M&&(sr=ua.su(/8S\\/([\\.\\d]+)/i))!=1Z)M[2]=sr[1];B nv=8W.C0;G.bP=M?M[1]:N;G.8S=M?M[2]:8W.156;G.eQ=8W.C0>1;G.mY=G.bP=="133";G.rF=G.bP=="AO 9.0";G.ie=G.bP=="AO"||G.bP=="13m"||G.bP=="13d";G.qu=ua.d2(/(qu)\\/?\\s*/i)>-1;G.ff=G.bP=="13n";G.7l=G.bP=="13y";G.ju=1S.ju;G.oR=ua.d2("13G NT")>-1;G.5x=(ua.d2(/(7S|iH|13F)\\/?\\s*/i)>-1)||(8W.13E===\'13D\'&&nv>1);G.tv=v.zG!=1&&ua.d2(/(TV|13C|13x|13p|13w|13t|12Z|12B)\\/?\\s*/i)>-1;G.lg=v.zG!=1&&ua.d2(/(LG)\\/?\\s*/i)>-1;G.7S=ua.d2(/(7S)\\/?\\s*/i)>-1;G.iH=G.5x&&!G.7S;G.3K=\'12y\'in 22.pi.C;if(ua.d2(/(bw)\\/?\\s*/i)>-1){nv>0?G.bw=H:G.tv=H;if(12u(\'(4k:12s)\').12p){G.tv=H}}G.2n=(2Q.2n==1||G.5x||G.bw||(ua.d2(/(12E|12X|mY nD)\\/?\\s*/i)>-1))&&!G.tv&&2Q.12W!=1;G.qY=G.7l||G.ju;G.2a=P;if(G.5x){G.12R=3Q(ua.1q(ua.K(\'OS \')+3,4).1V(\'4y\',\'.\'));if(G.iH&&(!\'IR\'in 1S||nv<2)){G.2n=G.5x=P;G.tv=H}}G.dc=!G.2n;G.xj=G.2n||G.eQ;G.CV=G.2n||G.tv;G.12P=G.3K&&G.dc;if(o.1T.sb||o.1T.qN||o.1T.sd||o.1T.se||o.1T.sh){G.2a=H}};E a3(4J,7H){W(B s in 7H){if(1O(7H[s])==\'3U\'){if(s=="3c"||s=="3I"){4J[s]=7H[s]}F{W(B s2 in 7H[s]){if(1O(4J[s])!=\'3U\'){4J[s]={}}if(1O(7H[s][s2])==\'3U\'){W(B s3 in 7H[s][s2]){if(1O(4J[s][s2])!=\'3U\'){4J[s][s2]={}}if(1O(7H[s][s2][s3])==\'3U\'){W(B s4 in 7H[s][s2][s3]){if(1O(4J[s][s2][s3])!=\'3U\'){4J[s][s2][s3]={}}4J[s][s2][s3][s4]=7H[s][s2][s3][s4];if(s3==\'2V\'||s3==\'2M\'){4J[s][s2][s3][s4]=2P(4J[s][s2][s3][s4])}}}F{4J[s][s2][s3]=7H[s][s2][s3];if(s2==\'2V\'||s2==\'2M\'){4J[s][s2][s3]=2P(4J[s][s2][s3])}}}}F{4J[s][s2]=7H[s][s2];if(s==\'2V\'||s==\'2M\'){4J[s][s2]=2P(4J[s][s2])}}}}}F{if(s.K("12K")>0&&4Z(7H[s])===""){}F{4J[s]=xb(s,7H[s])}}}I 4J};B xb=E(1d,5Y){if(1O(5Y)==\'5j\'){5Y=4Z(5Y);if(1d.K("1r")>-1&&5Y!=-1){5Y=3C(5Y)}}I 5Y};E wH(){3w{B 5G=1S[\'3f\'],x=\'12I\';5G.8c(x,x);5G.zl(x);I H}2X(e){I P}};E yr(b4){if(b4){if(J(o.7G[b4])){o.7G[b4].uO()}}};B 2R=E(x){B y=x;if(y){y=x.6R(0).14w()+x.7f(1);if(y.K("4y")>-1){y=y.1V(/4y/ig," ")}}B en={"of":"of","gV":"gV","EC":"EM on ES","EJ":"EM 2q on ES","uG":"154 at 153","7X":"mp","FR":"No","nr":"152","jF":"151","G2":"14X","cv":"14W 2M","jC":"14U dv","lc":"14L","kL":"bp 1C","kO":"bp 1r","h0":"tw 3T","gz":"tw 1r","gt":"tw 1r 2","cO":"4F hw","mI":"ar 2Q","mR":"14O","cQ":"14m","Fn":"14l to 147","nO":"146","l9":"16q","l3":"136","je":"Di","tx":"Di","nK":"HD","nJ":"148 HD","149":"14a HD","tl":"14b HD","tk":"14c HD 4K","CN":"Ad","CR":"Go to 145 14d\'s 14f","7u":"14g","5H":"14h","2a":"14i 2a","vv":"Fk 2a"};if(J(en[x])){y=en[x]}if(J(o[\'tQ\'+v.mA])){if(J(o[\'tQ\'+v.mA][x])){y=o[\'tQ\'+v.mA][x]}}if(v.tL){if(v.tL[x]){y=v.tL[x]}}I y};B bf=E(x,y,z){if(!J(o.kk[y])&&v.tr!=1){B t=o.cw?o.cw:(v.1I?v.1I:\'\');J(v.7U)?t=v.7U:\'\';if(v.Dy[x]==1&&v.F2==1&&J(v.iK)){if(x=="8k"){7d(E0,14j)}if(J(1S["nB"+v.iK])){1S["nB"+v.iK].DC(\'rt\'+x,{1I:t});1w("E3",\'rt\'+x)}F{1w("E3 14k 2q")}}if(v.E4[x]==1){if(v.ga==1){B bW;if(v.zJ==1){if(1S.E6){bW={\'7U\':t};if(v.iS){if(1O(v.iS)=="3U"){W(B g in v.iS){if(v.iS.2w(g)){bW[g]=v.iS[g]}}}}E6(\'1h\',\'rt\'+x,bW)}}F{if(1S.ga){bW={zL:\'pO\',zM:y};if(t!=\'\'){bW.zK=t}if(v.14e==1&&!o.9g){bW.143=1}ga(\'xR.bd\',\'1h\',bW)}}}}}z?o.kk[y]=H:\'\'};E E0(){if(J(1S["nB"+v.iK])){1S["nB"+v.iK].DC(\'13T\')}};B ow=E(18){B x=\'\';18=18.1V("v=","{=");if(18){if(18.K(\'oy.be/\')>-1){x=18.1q(18.K(".be/")+4);x.1V("/","")}F{x=18.2D(/(oy.be\\/|v\\/|o4\\/|142\\?|4R.13L\\/xR\\/[^#]*#([^\\/]*?\\/)*)\\??{?=?([^#\\&\\?]*)/)[3]}if(x!=\'\'){if(x.K("?t=")>0){v.1E=x.1q(x.K("?t=")+3);B h=0;B m=0;B s=0;if(v.1E.K("h")>0){h=v.1E.1q(0,v.1E.K("h"));v.1E=v.1E.1q(v.1E.K("h")+1)}if(v.1E.K("m")>0){m=v.1E.1q(0,v.1E.K("m"));v.1E=v.1E.1q(v.1E.K("m")+1)}if(v.1E.K("s")>0){s=v.1E.1q(0,v.1E.K("s"));v.1E=v.1E.1q(v.1E.K("s")+1)}if(h>0||m>0||s>0){v.1E=h*tZ+m*60+s*1}}if(x.K("?")>0){x=x.1q(0,x.K("?"))}}}I x};B js=E(x,y,li,ev){if(x=="8k"){o.8k=H}if(ev==1){W(B yi in y){if(y.2w(yi)){if(1O(y[yi])=="3U"){y[yi]=\'\'}}}}if(v.qh==1&&o.8k){if(v.13M==1||li==1){yG(x,y)}F{if(y!=1M){if(1O(y)==\'3U\'){3w{y=5w.vh(y)}2X(e){}}F{if(1O(y)==\'5j\'){y=y.1V(/\'/ig,\'′\')}}}if(1O(v.3c)==\'5j\'){if(v.3c.K("{")==0){3w{v.3c=v.3c.1V(/\\\'/ig,\'"\');v.3c=5w.7b(v.3c)}2X(e){e5.1w(e)}}}if(1O(v.3c)==\'3U\'){if(J(v.3c[x])||J(v.3c[\'sU\'])){B z=x;if(!J(v.3c[x])&&J(v.3c[\'sU\'])){z=\'sU\'}if(x.K("6x")==0){if(J(v.3c[\'29\'])){z=\'29\'}}3w{if(y!==1M){2o(v.3c[z]+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2o(v.3c[z]+"(\'"+x+"\',\'"+v.id+"\')")}}2X(e){1w("3c",e,x)}}}F{if(v.3c==\'\'){v.3c="DM"}3w{if(y!==1M){2o(v.3c+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2o(v.3c+"(\'"+x+"\',\'"+v.id+"\')")}}2X(e){1w("3c",e,x,y)}}}}if(o.8k&&v.Ky==1){if(o.DO){3w{o.DO.i2.p7({1h:x,94:y},"*")}2X(e){}}}if(v.AH==1&&li!==1){B zv={1h:x,1b:o.R?(x=="4h"?o.F6:o.R.1b()):0};if(y!=1M){zv["2c"]=y}if(x=="1p"||x=="1b"){zv["1p"]=o.R.1p()}if(x=="1L"||x=="9S"){zv["1L"]=v.1L}if(x=="1z"){zv["id"]=3y("D2")}1S.aG.p7(zv,\'*\');B z=x;x=="8k"||x=="1E"||x=="4H"?z=x+"ed":\'\';x=="1A"?z="13N":\'\';x=="4x"?z="8q":\'\';x=="5o"?z="3B":\'\';x=="9S"?z="13O":\'\';x=="4h"?z="13P":\'\';x=="13Q"?z="13R":\'\';zv["1h"]=z;if(z!=\'\'&&z!=x){zv=5w.7b(5w.vh(zv));1S.aG.p7(zv,\'*\')}}};B yG=E(x,y){B ev=22.13K(\'7q\');if(y!==1M){ev.94=y}ev.13S(x,H,H);o.1J.13U(ev)};G.1h=E(x,y){o.3c[x]=y};G.3z=E(x,y,V){v.13V==1?1w(\'3z\',x,y):\'\';I 3y(x,y,V)};E 3y(x,y,V){if(J(o.X)&&1O(x)==\'5j\'){if(o.tC==1){I}if(V){if(1O(V)==\'5j\'){if(V.K("id:")==0){V=o.S.vB(V.1q(3),"5a");if(V){if(x=="qz"&&y=="13W"){V.JX()}}}}}if(x=="1A"||x=="3I"){if(J(y)){B b0=P;if(1O(y)==\'5j\'){y=y.1V(/(\\r\\n|\\n|\\r)/gm,"");B 2e=-1;if(y.K("[4h:")>-1&&y.lP("]")==y.U-1){2e=y.1q(y.K("[4h:")+6,y.U-1);2e=2e.1q(0,2e.U-1);if(2e=="1b"){2e=o.R.1b()}F{2e=2P(2e)}y=y.1q(0,y.K("[4h:"));if(y==\'\'){if(o.R.1p()>0){o.X.3Y(2e);o.X.2H();I}F{o.2e=2e;o.X.2H();I}}F{o.2e=2e}}if(y.K("[DU]")>-1){b0=H;y=y.1V(\'[DU]\',\'\')}if(y.K("#"+v.9O)==0){y=o[o.fd[0]](y)}if(y.K("#"+v.cP)==0&&y.K(v.e9)>0){o[o.fd[1]](y,CM,x);I}if(y.K("#0")==0){y=cW(y)}if(v.cJ==1){y=cJ(y)}if(y.K(".9b")==y.U-4){B 51=fh(y);51.cZ=E(){if(G.fn==4&&G.7h==4z){3w{3y(\'1A\',5w.7b(G.dy))}2X(e){}}};51.bd();I}if(y.K("id:")==0&&J(o.1D)){B z=CJ(y);if(J(o.1D[z])){o.S.zo(z);2e>-1?o.2e=2e:\'\';I H}F{I P}}if(y.K("13X:")==0){B z=y.1q(10);if(o.2r=="4R"){o.R.Br(z);I H}F{y=\'//oy.be/\'+z}}}if(x=="1A"){o.S.GU();o.X.eM(y,1M,1M,(b0?1:0))}if(x=="3I"){o.n4=H;v.3n=0;o.X.eM(y,1,1M,(b0?1:0));o.S.3V(0,0);o.1E=P}}F{if(x=="1A"){o.X.2H()}if(x=="3I"){1O DT==\'E\'?DT():\'\'}}}if(x=="dM"){y?o.R.Bp(y):\'\'}if(x=="4T"){if(J(y)){o.n4=H;o.X.eM(y,1,1)}F{o.R.tK()}}if(x=="4x"){if(o.1A){o.X.3l();o.X.kM()}}if(x=="bR"&&J(y)){o.1E&&o.7Z?o.7Z.DQ(y):\'\'}if(x.K("13Y")==0){if(o.29){o.29.13Z(x.1q(6),y)}}if(x=="as"){o.as.pn();o.as=1z yE();if(J(y)){o.as.9b(y)}F{if(v.AW==1){o.as.9b(v.AV)}F{o.as.9b("140 9Y")}if(v.AT==1&&J(v.AS)){o.dL=1z AR()}}}if(x=="8a"){!o.1E?o.S.wj():\'\';o.S.9a();o.S.Gl("vN")}if(x=="iW"){o.1A?o.X.3l():o.X.2H()}if(x=="2K"){v.4T=0;v.3n=0;o.R.oj();o.X.bB()}if(x=="8p"){o.1b=o.R.1b();o.X.g3()}if(x=="6T"){if(v.9i){if(v.9i.on==1&&v.9i.141==1){o.X.lf()}}}if(x=="yB"&&J(y)){if(o.6C){o.6C.3z(y)}}if(x=="2U"){o.S.K1()}if(x=="14n"&&J(y)){if(v.29==1){if(y.K(\'js:\')==0){v.6O=y;v.jY=H;o.X.rN("6O")}F{if(o.p!=\'\'){B sv=5w.7b(eg(o.p));W(B l in sv){if(sv.2w(l)){if(J(sv[l].id)){if(y==sv[l].id){v.6O=\'144\'+(J(sv[l][\'sn\'])?\'sn\'+sv[l][\'sn\']:\'\')+y+\'4y\'+sv[l].7y;v.jY=H;o.X.rN("6O")}}}}}}}}if(x=="14o"){1O DJ=="E"?DJ(y):\'\'}if(x=="7D"&&y){v.7D=y;o.3x?o.3x.DH():\'\'}if(x=="5o"){o.X.5p()}if(x=="5m"){if(J(y)){o.X.9x(y)}F{I o.6f[o.ah]}}if(x=="eu"){if(v.9i&&o.bh){if(v.9i.bh==1){I 2I.47((o.bh.6a(14K).U-1)/2I.47(o.R.1p())*100)}}}if(x=="jV"){I o.6f}if(x=="9S"){o.X.6z()}if(x=="o6"){if(J(y)){v[x]=y;o.X.jH()}}if(x=="cI"){I o.2G}if(x=="Fg"){I o.ab?H:P}if(x=="5H"){I o.R?o.R.5B():P}if(x=="uR"){I v.9f==1?o.3i.7f(0,-1):o.3i}if(x=="HQ"){o.5k?o.3F.6G():o.3F.9e(2t(o.DG,(o.3F.7A()==0?1:0)))}if(x=="bT"){I o.ao}if(x.K("28:")==0&&y){v[x.1V(\'1I:\',\'4y\')]=y;o.X.kM()}if(x=="14M"){I o.kj}if(x=="aQ"){I o.7B}if(x=="1L"||x=="DE"){if(J(y)){if(1O y=="5j"){if(y.K("+")==0){y=v.1L+3Q(y.1q(1))}F{if(y.K("-")==0){y=v.1L-3Q(y.1q(1))}}}if(y>=0&&y<=1){o.X.3Z(y)}}I o.3B?0:v.1L}if(x=="3B"){I J(o.3B)?o.3B:P}if(x=="14N"){o.S?o.S.GM(y):\'\'}if(x=="eJ"){y<2?y=\'\':\'\';if(2E(o[\'u\'+y])){B x2=5w.7b(eg(o[\'u\'+y]));B v2=[];W(B l in v){if(v.2w(l)){if(l.K("aD")==0){v[l]=1Z}}}if(1O x2=="3U"){W(B k in x2){if(x2.2w(k)){if(k.K("aD")==0){v[k]=x2[k]}if(k=="1u"){v2[k]=x2[k]}}}}v=a3(v,v2);B rP=P;if(o.S.cN()){o.S.7M();rP=H}B sm=P;if(o.S.kf()){o.S.cF();sm=H}o.S.4n();o.S=1Z;o.S=1z yl();if(o.R.7h()=="8b"){o.S.2H()}o.S.3Z(v.1L);if(J(v.1I)){9R(v.1I)}if(rP){o.S.7M()}if(sm){o.S.cF()}if(o.2a){o.S.9t()}if(1d!=\'II\'){o.S.3V(o.R.1b(),o.R.1p())}bc()}}if(x=="o3"){I v.o3}if(x=="4Y"){o.S.4Y(H)}if(x=="14P"){o.S.lJ()}if(x=="Je"){bc()}if(x=="4h"){if(J(y)){if(1O y=="5j"){if(y.K("%")>-1){y=2P(y.1q(0,y.K("%")));y=o.R.1p()*y/100}F{B qm=o.R.1b();if(o.3x&&!o.1E){if(!o.3x.ne){B f=o.3x.ax();if(f.t&&f.d){qm=f.t;o.3x.ne=H}}}if(y.K("+")==0){y=qm+3Q(y.1q(1))}F{if(y.K("-")==0){y=qm-3Q(y.1q(1))}}}}y=y*1;y<0?y=0:\'\';if(o.R.1p()>0){y>o.R.1p()?y=0:\'\'}if(!J(o.29)&&!J(o.5P)&&o.R.1p()>0){o.2e=1M;o.X.3Y(y,H);o.X.sZ()}F{o.2e=y}}}if(x=="2a"){!o.2a?o.X.9t():\'\'}if(x=="rC"){o.2a?o.X.8h():\'\'}if(x=="14Q"){I o.2a}if(x=="3T"){I o.2Z+\'/\'+o.4t}if(x=="14R"){if(J(o.hm)){o.hm.Do()}}if(x=="H2"||x=="14S"){if(J(o.hm)){o.hm.Un()}}if(x=="1b"||x=="Ef"){B iA=o.R?o.R.1b():0;if(o.3x&&v.cL==1&&!o.1E&&iA==0){B f=o.3x.ax();if(f.t){iA=f.t}}I x=="Ef"?fN(iA):iA}if(x=="14T"){if(o.bG){3y("1A","id:"+o.bG)}if(o.qR){3y("4h",o.qR);3y("1A")}}if(x=="1p"){I o.R?o.R.1p():0}if(x=="8E"){I o.R?o.R.ak():0}if(x=="2v"){if(y){v.2v=y;o.S.l0()}}if(x=="5d"){if(J(y)){if(V){v.hd=bq(v.hd,y,V);if(o.2G.U==2){o.X.6n(v.hd)}}F{o.X.6n(y)}}F{I o.R?wo(o.R.td()):0}}if(x=="7u"){if(J(y)){if(V){v.rg=bq(v.rg,y,V);if(o.7B.U==2){o.X.dR(v.rg)}}F{o.X.dR(y)}}F{I o.R?o.R.sS():0}}if(x=="En"){I o.2r=="4R"}if(x=="x7"){if(o.7E>0){o.nQ=o.7E}o.X.eM(o.4p[o.oH])}if(x=="8b"){I o.1A}if(x=="q8"){I o.1E}if(x=="1m"){I o.1m[y]}if(x=="El"){o.tC!=1?o.R.uk():\'\'}if(x=="id"){I v.id}if(x=="1w"){v.1w=y}if(x=="qh"){v.qh=y}if(x=="2h"){o.R.Kt()}if(x=="14Y"){o.R.KS();if(V){o.qV=bq(o.qV,y,V)}}if(x=="6m"){o.R.h5()}if(x=="96"){o.R.ds()}if(x=="2Q"&&v.tr!=1){e5.1w(2Q)}if(x=="14Z"&&o.4B){o.4B.8k()}if(x=="28"){if(J(y)){if(y==\'0/1\'){if(o.5k){o.sR=o.3v;y=-1}F{y=o.sR?o.sR:0}}v.28=y;if(y.6q().U<3&&o.3F){o.3F.9e(y*1)}F{o.X.fv(y)}}F{I o.3i?o.3i[o.3v]:\'\'}}if(x=="+28"&&v.28){if(J(y)){v.28+=\',\'+y;o.X.fv(v.28)}}if(x=="c4"){if(J(o.c4)){if(J(y)){o.c4.3z(y)}F{I o.c4.14V()}}}if(x=="we"){if(o.Eg){I o.Eg}F{I P}}if(x=="9c"){I o.R.9c()}if(x=="6o"){B 6o=1Q("1Y");6o.id=y;6o.C.4N=14J;o.1T.1N(6o)}if(x=="Ji"){if(o.4Q){B 5F=1Q("5F");B 3T=o.R.3T();5F.17=3T.17>0?3T.17:o.bo;5F.1e=3T.1e>0?3T.1e:o.bQ;O(5F,{"1l":"2m","1f":-5F.1e,"1c":-5F.17,"2l":"1U"});22.3P.1N(5F);B 9s=5F.Ed(\'2d\');9s.v5(o.R.av(),0,0,5F.17,5F.1e);B 5d=2;B j1=22.1Q("5F");j1.17=5F.17*5d;j1.1e=5F.1e*5d;B ij=j1.Ed("2d");ij.v5(o.R.av(),0,0,5F.17*5d,5F.1e*5d);if(v.14I==1&&J(v.va)){!J(v.j0)?v.j0=20:\'\';!J(v.uy)?v.uy="3L":\'\';ij.3R=v.j0+"px 14r, 14s";ij.14t=3C(v.uy);ij.14u((v.va=="jN"?o.jN:v.va),v.j0,5F.1e*5d-v.j0-5)}9s.v5(j1,0,0,5F.17,5F.1e);B 4u;3w{4u=5F.14v("9d/14x")}2X(e){e5.1w(e.9Y);I P}I 4u}F{I P}}if(x=="3W"){I o.2r==x?o.R.mL():1M}if(x=="1H"){I o.2r==x?o.R.mP():1M}if(x=="2i"){if(!o.1A||v.gd===0){o.R.ae(y);I H}F{I P}}if(x=="As"){if(J(y)){y==\'1/0\'?y=1-2t(v.mh,0):\'\';v.mh=y;o.R.iI()}F{I 2t(v.mh,0)}}if(x=="1P"){if(J(y)){if(y==0){o.R.iI()}F{o.R.1P(y)}}F{I[o.3M.x,o.3M.y,o.3N.C.1c,o.3N.C.1f]}}if(x=="1I"){if(J(y)){J(y)?v.1I=y:\'\';o.X.9R(\'1I\');I H}F{I v.1I}}if(x=="14q"){o.X.EB()}if(x=="2L"){if(y){!o.jD?o.jD=[]:\'\';if(1O(y)==\'3U\'){y=o.jD.aB(y);x="Y"}}}if(x=="Y"){if(y){if(1O(y)==\'3U\'){3w{o.X.6D(y);I H}2X(e){I P}}F{if(y.K(".9b")==y.U-4||y.K(".9b?")>0){B 51=fh(y);51.cZ=E(){if(G.fn==4&&G.7h==4z){3w{3y(\'Y\',5w.7b(G.dy))}2X(e){}}};51.bd();I H}F{if(y==\'\'){o.X.6D([])}F{if(y==\'eu\'&&o.kj>0){B 1B=2I.47(((o.uY+(!o.S.cg("eu")?o.R.1b():0))/o.kj)*100);if(1B<o.tA||1B>100){I o.tA}F{o.tA=1B;I 1B}}}}}}}if(x=="6S"){o.S?o.S.bj():\'\'}if(x=="cQ"){o.S?o.S.dU():\'\'}if(x=="6p"){o.S?o.S.kg(y):\'\'}if(x=="6p?"){I o.9W?[o.14y,o.14A]:0}if(x=="g7"){o.R?o.R.g7():\'\'}if(x=="p5"){if(J(y)&&J(o.1D)){!o.1A?v.3n=0:\'\';W(B j in o.1D){if(o.1D.2w(j)){if(o.1D[j].dB==y){y=j}}}if(J(o.1D[y])){o.S.GN(y);I H}F{I P}}}if(x=="14B"){B 1B=[];if(J(o.1D)){W(B j in o.1D){if(o.1D[j].5b&&o.1D[j].rk==-1){1B.2L({1I:o.1D[j].1I,id:o.1D[j].id})}}}I 1B}if(x=="D2"){if(o.3a){I o.1D[o.3a].dB?o.1D[o.3a].dB:o.3a}}if(x=="14C"){if(o.1D){I 7F.6d(o.1D).U}F{I-1}}if(x=="q3"){if(J(o.q3)){I o.q3}}if(x=="14D"){o.S.la(y)}if(x=="14E"){o.R.iV()}if(x=="1u"){if(y=="on"){v.1u.1n=0}F if(y=="6G"){v.1u.1n=1;o.S.fF()}F{o.S.iL()}}if(x=="CY"){o.S.7M()}if(x=="6j"){o[x]=H}if(x=="14F"){if(o.29){I H}F{I P}}if(x=="14G"){if(o.29){I CI()}F{I P}}if(x=="14H"){if(o.29){I o.29.4x()}F{I P}}if(x=="14p"){if(o.29){I o.29.Ff()}F{I P}}if(x=="13I"){if(o.29){o.29.131()}F{I P}}if(x=="13H"){if(o.29){o.29.5o()}F{I P}}if(x=="6E"){if(V){v.6E=bq(v.6E,y,V);o.R.6E()}F{I v.6E}}if(x=="9C"){if(J(V)){v.9C=bq(v.9C,y,V)}F{if(J(y)){y==\'0/1\'?y=1-v.9C:\'\';v.9C=y}F{I v.9C}}}if(x=="5L"){if(J(V)){v.5L=bq(v.5L,y,V)}F{if(J(y)){v.5L=y}F{I v.5L}}}if(x=="j7"||x=="q5"){B z="eC";x=="q5"?z="pT":"";if(J(V)){v.Y[z]=bq(v.Y[z],y,V)}F{if(J(y)){y==\'0/1\'?y=1-v.Y[z]:\'\';v.Y[z]=y}}I v.Y[z]}if(x=="hd"){if(o.2G.U==2){v.hd=o.2G[o.3r];v.hd=bq(v.hd,y,V);if(o.2G[0]==v.hd){o.X.6n(0)}F{o.X.6n(1)}}}if(x=="v"&&y){if(y.K(\'3I\')==0||y.K(\'bk\')==0){I}I v[y]}if(x.K("cY:")==0){B xx=x.1q(7);if(1O(y)==\'3U\'&&1O(v[xx])==\'3U\'){W(B yy in y){if(y.2w(yy)){v[xx][yy]=y[yy]}}}F{if(x.K(\'A3\')==-1){v[xx]=y}}I H}if(x.K("1F:")==0){o.S.K5(x.1q(5),y)}if(v.ED==1&&x.K("1r")==0&&y){fT(\'4O, 4O > *{--6W\'+x+\':\'+3C(y)+\'}\')}if(x=="12J"){I o.R?o.R.cU():\'\'}if(x=="12L"){I o.8S+\' \'+o.kN}if(x=="kN"){I o.kN}if(x=="vt"){I o.vt}if(x=="CQ"){I o.CQ}if(x=="5J"){I o.5J}if(x=="12M"){I o.29?o.Dk:1M}if(x=="a2"){o.X.lr();v.1W.on=0;if(v.rq==1){W(B i=0;i<5h.U;i++){if(5h[i]){if(5h[i].3z("id")==v.id){5h[i]=1Z}}}}W(B w in 1S){if(1S[w]==o.G){1S[w]=1Z}}if(eS==v.id){eS=\'\'}o.tC=1;o.1J.1R=\'\';o.G=1Z}}F{I P}};E CM(x,y){if(x&&y){3y(y,x)}}E bq(x,y,V){B z=4Z(y)+\'\';if(y){if(y.K("/")>0){B y2=y.2D("/");if(y2.U==2){if(x==4Z(y2[0])){z=4Z(y2[1]);if(V){V.cV(1)}}F{z=4Z(y2[0]);if(V){V.cV(0)}}}}}I z}E fh(x){B 51=1z FE();51.3j(\'FD\',x,H);I 51}E CJ(y){B z=y.1q(3);if(o.1D){W(B j in o.1D){if(o.1D.2w(j)){if(o.1D[j].dB==z){z=j}}}}I z}E CI(){B x;if(o.29){if(o.29.c6()){x=o.29}}if(!x&&o.5P){x=o.5P}if(x){B y={is:o.43,1m:x.94("12N"),8S:x.94("8S"),12O:x.94("A4"),18:o.Aw+(x.94("D4")?x.94("12H")+x.94("D4"):\'\'),1K:x.94("12S"),1p:x.94("9u"),3I:x.94("3I"),1b:(o.R?o.R.1b():\'\'),1L:x.12T(),id:o.Dk};if(o.43=="6O"){y.12U=o.12V}I y}}E uQ(){if(\'gc\'in 8W){8W.gc.8m=1z 12Y({1I:Er(2t(o.cw,v.1I)),12Q:[{3h:2t(v.2i,\'\')}]});if(!o.Dt){8W.gc.op(\'1A\',E(){3y("1A")});8W.gc.op(\'4x\',E(){3y("4x")});if(o.S.gP()){8W.gc.op(\'12F\',E(){3y("cQ")});8W.gc.op(\'12v\',E(){3y("6S")})}o.Dt=H}}}B 1Q=E(x){B y=x;x==\'1Y\'||x==\'vQ\'?y=\'4O\':\'\';B z=22.1Q(y);if(x==\'vQ\'){O(z,{"6M":"4k","2l":"4r"})}I z};B 1w=E(a,b,c,d,e,f,g){if(v.1w==1||v.ug==1){B x=a+(b!=1M?" "+b:"")+(c!=1M?" "+c:"")+(d!=1M?" "+d:"")+(e!=1M?" "+e:"")+(f!=1M?" "+f:"")+(g!=1M?" "+g:"");e5.1w("Ds"+(v.xH==1?"2":"")+": "+x);if(v.ug==1&&J(22.8y("Dq"))){22.8y("Dq").1R+=x+\'<br/>\'}}};B A8=E(){if(v.wK==1&&J(v.eL)&&v.eL!=\'\'){B x=22.1Q(\'fb\');x.Dp=\'12n\';v.eL.K(\':\')>0&&v.eL.K(\':lH\')==-1?v.eL=v.eL.1V(/:/ig,\':lH@\'):\'\';x.9L=\'cu://wK.12o.7R/12q?dq=\'+v.eL.1V(/,/ig,"&dq=").1V(/ /ig,"+");22.Dm.1N(x)+\'&2l=12r\'}};B J7=E(1Y,5O){B x=["8Y","hr","oh","hB","dx","12t"];W(B y=0;y<x.U;y++){B z=1Y.xB("2g "+x[y]);if(z.U>0){W(B y2=0;y2<z.U;y2++){z[y2].C.5g=5O}}}};B hE=E(){if(v.9i){if(v.9i.12m==1){js("2x")}}};B 4F=E(1b){1b<0?1b=0:\'\';B De=o.R.1p>=hu?H:P;B Df=o.R.1p>=tZ?H:P;B 6U=2I.8U(1b/60);B 7Y=2I.8U(1b-6U*60);B 8t=2I.8U(6U/60);B hz=2I.8U(8t/24);6U=6U-8t*60;if(hz>0){8t=8t-hz*24}if(v.n5==1&&o.R.5B()){B d=1z 6N();I 6v(1z 6N(d.8C()+1b*2p).Db())}F{I 6v((hz>0?hz+\':\':\'\')+(8t>0||Df?8t+\':\':\'\')+((8t>0||De)&&6U<10?\'0\':\'\')+6U+\':\'+(7Y<10?\'0\':\'\')+7Y)}};B fN=E(x){B 7Y=2I.8U(x);B 6U=2I.8U(7Y/60);B 8t=2I.8U(6U/60);6U=2I.8U(6U%60);7Y=2I.8U(7Y%60);8t>0&&6U<10?6U="0"+6U:"";7Y=7Y>=0?((7Y>=10)?7Y:"0"+7Y):"cK";B 4m=(8t>0?8t+":":"")+(6U>=0?6U:"0")+":"+7Y;if(v.n5==1&&o.R.5B()){B d=1z 6N();I 6v(1z 6N(d.8C()+x*2p).Db())}F{I 4m}};B Dc=E(){I Dd((1S.8Q!=1S.aG.8Q)?22.ox:22.8Q.9L)};B wo=E(x){if(x){x=x.6q();B t6=x.K(" <7x C=\'1C");if(t6>-1){x=x.1q(0,t6)}}I x};B xO=E(x,y,z){B t;if(!Dz(x)&&y){t=22.1Q(\'qj\');y=="12w"?y=x:\'\';t.3h=y.K(\'//\')==-1?\'cu://\'+y:y;t.12x=1;if(z){t.6H=z}B s=22.ac(\'qj\')[0];s.3X.t8(t,s)}I t};B Er=E(x){if(x){x=x.1V(/<[^>]*>?/gm,\'\')}I x};B Dz=E(y){B x=P;B ph=22.ac(\'qj\');W(B i=0;i<ph.U;i++){if(ph[i].3h.K(y)>-1){x=H}}I x};B 4S=E(x,y){if(x){if(x.K(\'1r\')>-1||x.K(\'B\')>-1){I 3C(x)}F{x=x.1V(\'#\',\'\');B r=2P(x.U==3?x.7f(0,1).h6(2):x.7f(0,2),16);B g=2P(x.U==3?x.7f(1,2).h6(2):x.7f(2,4),16);B b=2P(x.U==3?x.7f(2,3).h6(2):x.7f(4,6),16);if(J(y)){I\'5c(\'+r+\', \'+g+\', \'+b+\', \'+y+\')\'}F{I\'FJ(\'+r+\', \'+g+\', \'+b+\')\'}}}};B O=E(e,o){if(J(e)){W(B 1d in o){if(o.2w(1d)){if(o[1d]!=\'12z\'&&o[1d]!=1M){if(1O o[1d]==\'12A\'&&1d!=\'3R-dv\'&&1d!=\'1C\'&&1d!=\'4N\'){o[1d]+=\'px\'}if(1d.K("12C")>-1&&1d.K("F0")==-1){o[1d]=3C(o[1d])}if(1d=="2J"||1d.K("l5")>-1){e.C[\'-ms-\'+1d]=o[1d];e.C[\'-lG-\'+1d]=o[1d];e.C[\'-3K-\'+1d]=o[1d];e.C[\'-o-\'+1d]=o[1d]}if(1d=="xS"){if(o[1d].K(" ")>-1){o[1d]=\'"\'+o[1d]+\'"\'}}if(1d=="6o-l6"){e.C.12D(1d,o[1d],\'6i\')}F{e.C[1d]=o[1d]}}}}}};B xn=E(x,5O,b1,b2){5O=3C(5O);B y=2t(b1,1)*1;B z=2t(b2,1)*1;O(x,{"2j":"12G-3e-4L(-130,"+5O+","+5O+" "+y+"px,5c(0,0,0,0),"+y+"px,5c(0,0,0,0) "+(y+z)+"px)"})};B 3C=E(c){if(c){c.K("1r")==0?c=\'B(--6W\'+c+\')\':\'\';I c.1q(0,1)!=\'#\'&&c.K("B")==-1&&c.K("FJ")==-1?c="#"+c:c}F{I\'#f9\'}};B He=E(x,1r,y){!1r?1r=\'#f9\':\'\';1r=3C(1r);B r=5M(oM,13o);x=x.1V(/\\(JK\\)/g,r);x=x.1V(/\\(1r\\)/g,1r);x=x.1V(/\\(jI\\)/g,1+(v.13q.1P-1)/2);B FH=x.1q(0,x.K(\'|||\'));B tf=x.1q(x.K(\'|||\')+3);B bD=\'\';if(o.1m.3K){bD=tf.1V(/6h:/g,"-3K-6h:");bD=bD.1V(/6h-/g,"-3K-6h-");bD=bD.1V(/@FI/g,"@-3K-FI");bD=bD.1V(/2J/g,"-3K-2J")}y?y.1R=FH:\'\';fT(bD+tf)};B 7c=E(x,y,f){B z=P;if(x){W(B i=0;i<x.U;i++){if(x[i]){if(f){if(3Q(y)==3Q(x[i])){z=i;1k}}F{if(6v(x[i]).K(y)>-1){z=H}}}}}I z};B Hb=E(x,y){B z=P;if(x&&y){W(B i=0;i<y.U;i++){if(6v(x).K(y[i])>-1){z=H}}}I z};B fT=E(x){if(o.O){if(o.O.FG){o.O.FG.13r=x}F{o.O.1N(22.CU(x))}}};B dW=E(x){O(x,{"1l":"2m","1f":0,"1c":0,"17":"100%","1e":"100%"})};B fk=E(x){O(x,{"a0":"1U"})};B 51=E(y,z){B x=1z FE();x.3j(\'FD\',y,H);x.cZ=z;x.bd()};B 13s=E(x){if(x){W(B i=0;i<5;i++){if(x.13u=="tj"){1k}F{if(x.FA){x=x.FA}}}}I x};B 9w=E(z){B 9w=22.1Q("4u");if(o.oG.K(z)>-1){o.oG.2L(z);if(z.K("?")>0){z=z+\'&\'+2I.5M()}F{z=z+\'?\'+2I.5M()}}F{o.oG.2L(z)}9w.6g(\'3h\',z);9w.6g(\'1e\',\'42\');9w.6g(\'17\',\'42\')};B 4i=E(e,o){W(B 1d in o){if(o.2w(1d)){e.6g(1d,o[1d])}}};B a2=E(e){if(e){3w{e.3X.3p(e);e=1Z}2X(e){}}};B 5M=E(9A,5N){I 2I.8U(13v.U>1?(5N-9A+1)*2I.5M()+9A:(9A+1)*2I.5M())};B qo=E(){I 2I.5M().6q(36).13z(2,12)};B ts=E(x,y){x=7F.6d(x).13A(E(4J,1d){if(1d!=y){4J[1d]=x[1d]}I 4J},{});I x};B 4Z=E(x){if(1O x=="5j"){I x.1V(/^\\s+|\\s+$/gm,\'\')}F{I x}};B 6p=E(x,y,z){B r=P;if(x){if(x.K(y)>-1){B r=x.1q(x.K(y)+y.U);if(z){if(r.K(z)>-1){r=r.1q(0,r.K(z))}}}}I r};B 13B=E(x,n){if(n==0){I"#0"+bN.e(x)}if(n==-1){I bN.e(x)}if(n==1){I"#1"+v7(bN.e(x),1)}};B yz=E(x){if(v[x]!=""){if(1O v[x]!="5j"){o[x+\'o\']=v[x]}F{if(v[x].K("[{")==0){3w{v[x]=v[x].1V(/6W\'qt/ig,\'"\');o[x+\'o\']=2o(v[x])}2X(e){}}}}};B 6e=E(x){I 6v.uj(x)};B eg=E(x){if(x.1q(0,2)=="#1"){I bN.d(v7(x.1q(2),-1))}F if(x.1q(0,2)=="#0"){I bN.d(x.1q(2))}F{I x}};B yK=E(x){if(x){if(x.K(\'3J\')==-1&&x.K(\'.\')==-1&&x.U>100&&x.K(\'2c:\')==-1){x=\'2c:9d/yf;jE,\'+x}}I x};B 1n=E(x){x?x.C.5J="3g":\'\'};B 1t=E(x){x?x.C.5J="4D":\'\'};B 3k=E(x){x?x.C.2l="1U":\'\'};B 6k=E(x){x?x.C.2l="4r":\'\'};B 5A=E(x){I x?x.C.5J!="3g"&&x.C.2l!="1U":P};B 5t=E(s){if(1O s=="5j"){if(s.K("px")>0){s=s.1q(0,s.K("px"))}}I 2P(s)};B 3g=E(x){I x.C.2l=="1U"};B 4A=E(o,x,y){o[x+\'1f\']=0;o[x+\'2k\']=0;o[x+\'2O\']=0;o[x+\'1c\']=0;if(J(o[y])){B z=o[y].2D(" ");if(z.U==4){o[x+\'1f\']=z[0]?3Q(z[0]):0;o[x+\'2k\']=z[1]?3Q(z[1]):0;o[x+\'2O\']=z[2]?3Q(z[2]):0;o[x+\'1c\']=z[3]?3Q(z[3]):0}}I o};B Fu=E(x){if(x){x=x.1V(/ /ig,\'px \')}I x+\'px\'};B nM=E(x,y){I v[x]&&v[x]!=\'\'?v[x]:y};B fx=6v.uj(65,66,67,68,69,70,71,72,73,74,75,76,77,97,98,99,100,101,102,103,104,105,106,107,108,109,78,79,80,81,82,83,84,85,86,87,88,89,90,110,111,112,113,114,115,116,117,118,119,120,121,122);B bN={bC:fx+"15p+/=",e:E(e){B t="";B n,r,i,s,o,u,a;B f=0;e=bN.G0(e);nT(f<e.U){n=e.bE(f++);r=e.bE(f++);i=e.bE(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(uw(r)){u=a=64}F if(uw(i)){a=64}t=t+G.bC.6R(s)+G.bC.6R(o)+G.bC.6R(u)+G.bC.6R(a)}I t},d:E(e){B t="";B n,r,i;B s,o,u,a;B f=0;e=e.1V(/[^A-Za-z0-9\\+\\/\\=]/g,"");nT(f<e.U){s=G.bC.K(e.6R(f++));o=G.bC.K(e.6R(f++));u=G.bC.K(e.6R(f++));a=G.bC.K(e.6R(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+6e(n);if(u!=64){t=t+6e(r)}if(a!=64){t=t+6e(i)}}t=bN.FZ(t);I t},G0:E(e){e=e.1V(/\\r\\n/g,"\\n");B t="";W(B n=0;n<e.U;n++){B r=e.bE(n);if(r<128){t+=6e(r)}F if(r>127&&r<16O){t+=6e(r>>6|16M);t+=6e(r&63|128)}F{t+=6e(r>>12|FX);t+=6e(r>>6&63|128);t+=6e(r&63|128)}}I t},FZ:E(e){B t="";B n=0;B r=0;B c1=0;B c2=0;nT(n<e.U){r=e.bE(n);if(r<128){t+=6e(r);n++}F if(r>16t&&r<FX){c2=e.bE(n+1);t+=6e((r&31)<<6|c2&63);n+=2}F{c2=e.bE(n+1);c3=e.bE(n+2);t+=6e((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}I t}};B v7=E(s,n){s=s.1V(/\\+/g,"#");s=s.1V(/#/g,"+");B a=FP(o.y)*n;if(n<0)a+=fx.U/2;B r=fx.1q(a*2)+fx.1q(0,a*2);I s.1V(/[A-Za-z]/g,E(c){I r.6R(fx.K(c))})};B FP=E(x){x=x.2D(6e(61));B kU=\'\';B c1=6e(120);B vl;W(B i in x){if(x.2w(i)){B vn=\'\';W(B j in x[i]){if(x[i].2w(j)){vn+=(x[i][j]==c1)?6e(49):6e(48)}}vl=2P(vn,2);kU+=6e(vl.6q(10))}}I kU.1q(0,kU.U-1)};B J=E(x){I x!=1Z&&1O(x)!=\'1M\'&&x!=\'1M\'};B 2t=E(x,y){I J(x)?x:y};B 2E=E(x){I J(x)&&x!=-1&&x!=\'\'};B vA=E(x,y){I 2E(x)?x:y};B pj=E(x){if(1O x=="3U"){x=5w.7b(5w.vh(x))}I x};B gH=E(el){B x=el.EQ().1c+(1S.Fl?1S.Fl:1S.16Z);I x};B eh=E(x){v.16C==1&&2E(v.ER)?x=v.ER:\'\';I x};B kQ=E(el){16N hB=el.EQ();I hB.1f+1S.16J};B 7i=E(x,y){if(x!=\'\'){if(v.16I==1){1S.3j(x)}F{if(v.16H==1){1S.aG.8Q.9L=x}F{1S.8Q.9L=x}}x=\'\'}};B vC=E(){if(v.4X==1){o.4X?o.1T.3p(o.4X):\'\';o.4X=1Z}};B D0=E(){B p4=P;if(o.1m.tv){1w("tv")}G.9R=E(x){o.S?o.S.1I(x):\'\'};G.6Z=E(x){if(x){if(1O(x)==\'5j\'){x=x.1V(/(\\r\\n|\\n|\\r)/gm,"");if(x.K("[{")==0){3w{x=x.1V(/6W\'qt/ig,\'"\');x=5w.7b(x)}2X(e){x="Be 5w"}}}if(1O(x)==\'3U\'){o.1D=[];o.jD=pj(x);o.Y=rr(x);if(o.Y.U>0){if(v.Y.16G==1&&!v.4V){B 6d=7F.6d(o.1D);B vf=6d.7f(-1)[0];vf?v.4V=vf:\'\'}B y=Cy();if(y){x=y.3I;o.cw=y.1I;o.S?o.S.Kd(y.1I):\'\';if(J(y.2i)){if(o.R){o.R.ae(y.2i)}F{v.2i=y.2i}}if(J(y.2B)){y.28=y.2B}if(J(y.1E)){if(y.1E=="3x"&&!o.1E){}F{v.1E=o.2e=y.1E}}7T("EL");if(J(y.id)){o.3a=y.id}B sx=["28","o3","o4","18","l4","EI","jj","o6","7U","6T","2v","6s","4H","4G","EG","d3","6Y","9J","1L"];if(J(v.ci)){if(v.ci.16E==1&&v.ci.lL==1){sx.2L("1I");sx.2L("t1");sx.2L("t2");sx.2L("t3");sx.2L("t4");sx.2L("t5")}}W(B i=0;i<sx.U;i++){if(J(y[sx[i]])){v[sx[i]]=y[sx[i]]}}kt(y);if(sx.K(\'1I\')>0){if(v.ci.DY==1){o.m9=v.ci.F7;o.X.nE(y)}o.X.9R(\'1I\')}if(J(y.1L)){1G(E(){o.X.3Z(y.1L)},4z)}if(o.S){o.S.6D(o.Y);if(v.9J){o.S.yO()}}if(o.3d){o.3d.8G()}}F{}}}if(1O(x)==\'5j\'){x=qU(x);if(x){if(x.K("#"+v.9O)==0){x=o[o.fd[0]](x)}if(x){if(x.K("#"+v.cP)==0&&x.K(v.e9)>0){x=o[o.fd[1]](x)}if(x){if(x.K("#0")==0){x=cW(x)}x=qU(x)}F{x=\'\'}}}if(v.cJ==1){x=cJ(x)}if(x==\'\'){1w("54 3I");o.aW=H;js("2q","54")}o.2G=[];o.aI=[];o.7B=[];o.oH=0;o.3r=0;o.7E=0;o.az=0;v.kH==\'\'?v.kH=\',\':\'\';if((x.K(v.jR)>-1&&x.K(v.eN)>-1)||J(v.cI)){o.4p=x.2D(v.kH)}F{o.4p=[x]}o.aQ=[];if(J(v.cI)){B cI=v.cI.2D(v.kH)}if(o.4p.U>0){B q=-1;W(B i=0;i<o.4p.U;i++){o.4p[i]=4Z(o.4p[i]);if(o.4p[i]!=\'\'){if(o.4p[i].K(v.jR)==0&&o.4p[i].K(v.eN)>1){o.2G[i]=o.4p[i].1q(o.4p[i].K(v.jR)+v.jR.U,o.4p[i].K(v.eN)-v.eN.U);o.4p[i]=o.4p[i].1q(o.4p[i].K(v.eN)+v.eN.U)}F{if(J(v.cI)){o.2G[i]=J(cI[i])?cI[i]:\'\'}F{o.2G[i]=i+1}}B is=0;if(J(v.53)&&q==-1){if(6v(v.53).K("mf:")==0){if(v.53.1q(4)*1==i){is=1}}if(v.53==o.2G[i]){is=1}if(v.53=="5N"&&i==o.4p.U-1){is=1}}if(J(o.53)){if(o.53==o.2G[i]){is=1;q=i}}if(is==1){o.oH=i;o.3r=i}o.4p[i]=ur(o.4p[i])}}}F{o.4p[0]=ur(o.4p[0])}I o.4p[o.oH]}}F{I x}};E ur(x){if(J(v.oC)&&x.K("//")==-1){x=v.oC+x}I x};G.EB=E(){if(o.Y){B x=o.Y.EA();W(B i=0;i<x.U;i++){x[i].cC=i}o.Y=x;o.S.6D(o.Y)}};E kt(y){B us;W(B i=1;i<6;i++){B t="1F"+i;if(J(y[t])){v[t]=y[t];us=H}}if(us&&o.S){o.S.K3()}}G.kt=E(x){kt(x)};G.6D=E(x){if(1O(x)==\'3U\'){o.1D=[];o.jD=pj(x);o.Y=rr(x);if(o.S){o.S.6D(o.Y)}}};G.eM=E(x,y,z,no){!J(y)?o.3n=H:\'\';!J(z)?v.4T=0:\'\';v.1p=1M;v.4H=1M;!2Q.4G?v.4G=1M:\'\';o.aW!=2?o.aW=P:\'\';o.8m=P;o.96=P;o.aH=0;o.kk=[];o.v9=P;o.tJ=P;o.Iy=P;o.aF=1M;o.pL=[P,P,P];o.16x=qo();o.D3=0;o.fZ=0;o.bh?o.bh=[]:\'\';o.2r!=\'6W\'&&o.3F?o.3F.6s():\'\';o.Ev?o.Ev=[]:\'\';if(o.dL){o.dL.6s()}if(o.R.7h()=="8b"){G.bB()}if(o.6p&&o.9W){o.S.kg()}if(J(o.2U)){o.2U.4n()}if(J(o.bZ)){2N(o.bZ)}js("1z");if(v.29==1&&no!=1){o.X.eX();o.X.eX(\'6O\')}x=G.6Z(x);if(y==1){o.2r=\'\'}o.R.6Z(x);if((o.1m.2n||o.1m.7l)&&!J(y)){o.X.2H()}if(J(o.jk)){o.3M={x:1,y:1,x0:1,y0:1};o.R.iI()}bf("1A","2H");o.R.kR();o.S.hT();o.S.mS();o.S.4U();o.f6?o.f6.EX():\'\'};G.nE=E(x){B y=P;if(x&&o.m9){v.1I=o.m9;W(B i=1;i<6;i++){if(J(x[\'t\'+i])){v.1I=v.1I.1V("{"+i+"}",x[\'t\'+i]);y=H}}}I y};G.dH=E(){if(v.3n==1&&!v.ET||o.3n){if(v.jm==1){1G(E(){o.X.2H()},4c)}F{G.2H()}v.ET=1;o.3n=P}jH()};G.jH=E(){jH()};E jH(){if(v.y7==1){if(1O EU!=="1M"){o.th=1z EU()}}}G.kR=E(){B x=P;if(o.1m.2n){x=H;if(v.CO==1&&o.1m.7S){x=P}if(v.CF==1&&o.1m.iH){x=P}if(v.CK==1&&o.1m.5x){x=P}if(v.16v==1&&o.1m.bw){x=P}}if(v.16Q==1&&o.1m.tv){x=H}I x};G.v3=E(){o.R.3Z(v.1L);if(o.3B){o.R.5p()}o.8m=H;o.S?o.S.4U():\'\';if(!o.1A&&!o.1E){v.6C==1?o.6C.3z("4x"):\'\'}if(o.5u&&o.4Q){o.4B.Fk();o.4B.Go()}if(v.29==1){if(v.zA!=1&&v.jY==1){!J(o.29)?p8("6O","8m"):\'\'}}};G.BB=E(){!o.hO?a5(H):\'\'};E a5(x){o.hO=H;if(o.S){if(o.S.cN()){o.S.7M()}}if(o.3d){o.3d.ar()}if(o.eH){o.eH.ar()}!x?o.R.2H():\'\';if(!o.v9){1G(E(){o.R.kR()},4c)}!o.1A?o.S.2H():\'\';v.6C==1?o.6C.3z("1A"):\'\';v.29==1?o.X.eX(\'dJ\'):\'\';if(o.1m.2n){o.S.f8()}if(J(o.2U)){o.2U.16X()?o.2U.uH():\'\'}if(v.16T==1&&J(v.jj)&&o.dt){if(v.jj!=\'\'&&!J(o.kJ)){o.kJ=7d(qT,v.Fj*2p);qT()}}}G.2H=E(b0){if(!o.1A&&o.R){o.g6=H;o.pN=P;o.7t=P;2N(o.Ct);B 2K=P;if(o.2r=="4R"){if(!o.R.nP()&&v.3n!=1&&v.4T==1){2K=H;if(1S[\'YT\']){v.3n=1;o.3n=H;o.R.uk()}}}if(v.7X==1&&v.A1==0){o.X.mp();2K=H}if(o.aW||2K){if(o.aW){8j("7y")?po(2):\'\'}}F{o.n4=P;Gg(!o.1E);o.as.pn();if(!o.1E){js("1E");o.1E=H;if(v.1u.yX==1){1G(E(){o.S.z2()},100)}if(v.1u.9N>0&&v.3n==1){o.go=H;1G(sP,v.1u.9N*2p)}if(v.16W==1&&v.16Y){16S()}W(B i=0;i<o.cM.U;i++){if(v[\'E7\'+o.cM[i]]==1){3f.8c("E8"+o.cM[i],6N.iu())}}if(v.15L==1&&v.16o){15t("1E")}if(o.3F){o.3F.1E()}js("1z");o.iM?o.S.z6(o.iM):\'\';o.S.wj();o.S.4U();bf("1A","2H");o.1m.2n?uQ():\'\';o.ab?bf("Fg","15u",1):\'\'}F{bf("Ff","15v")}if(v.Fd==1&&!o.2a){B dd=1z 6N();B tt=dd.8C();if(tt-o.9g<dN){if(!o.1m.5x&&(v.Fc!=1||o.1m.2n)){G.9t()}}}if(o.5k){if(v.r0==1){6k(o.28)}}if(o.dL){o.dL.6s()}if(b0!=1&&8j("7y")||8j("7a")){po(2)}F{if(v.7i==1&&J(v.Fb)&&!J(2Q.7i)){7i(v.Fb);2K=H}if(!2K){1w("2H");o.R.1p()>0?o.S.3V(o.R.1b(),o.R.1p()):\'\';if(!o.ul){o.ul=H;if(v.1u.9N>0&&v.3n==1){o.go=H;1G(sP,v.1u.9N*2p)}}B pq=P;if(o.R.1b()>1&&v.pe==1&&b0!=1&&!8x()&&!J(o.29)&&!J(o.5P)){pq=8j("dJ")}if(pq){8x()?a5(P):\'\'}F{a5(P)}}}}}F{o.R?o.R.2H():\'\'}};E sP(){o.go=P;o.S.4U()}G.3l=E(){if(o.1A){o.g6=P;1w("3l");o.R.3l();o.S.3l();js("4x");v.rp==1?8A():\'\';v.t0==1?pB():\'\';v.6C==1?o.6C.3z("4x"):\'\';if(o.5k){if(v.r0==1){3k(o.28)}}if(!J(o.29)&&!J(o.5P)&&v.pe==0){8j("dJ")}if(8x()){o.pN=H}o.hO=P}};G.5p=E(){o.R.5p();o.S.5p();o.3B=H;js("5o")};G.6z=E(){o.R.6z();o.3B=P;o.S.6z();o.R.3Z(v.1L);js("9S")};G.3Z=E(x,y){if(o.S){x<0.15w?x=0:\'\';x>1?x=1:\'\';if(x<=0){G.5p();v.1L=0;x=0}F{if(o.3B){G.6z()}v.1L=x}js("1L",x);o.S.3Z(x,y);o.R.3Z(x)}};G.9a=E(){o.S.9a()};G.7L=E(){o.S?o.S.7L():\'\'};G.15x=E(){G.7L()};G.v8=E(){o.X.6K();G.7L()};G.3V=E(1b,1p){if(o.3x&&!o.1E){B f=o.3x.ax();if(f.t&&f.d){1b=f.t}}o.S?o.S.3V(1b,1p):\'\'};G.sM=E(1b,1p){if(o.2e>0&&o.2r!="4R"&&!o.R.5B()){o.X.3Y(o.2e,P);o.2e=1M}};G.gO=E(){B d=1z 6N();o.9g=d.8C();B x=P;if(o.S.cN()&&v.1j.8f!=1){o.S.aV();x=H}if(o.3d){if(o.3d.yD()){o.3d.ar();x=H}}if(v.Y.8f==0){if(o.S.kf()&&v.Y.gp==1){o.S.cF();x=H}}if(v.7i==1&&J(v.CD)&&!J(2Q.7i)){7i(v.CD);x=H}if(o.3B&&v.mT==1){o.X.6z();v.mT=0;x=H}if(!x){if(v.1W.on==1&&v.1W.2W==1&&v.1W.rY==1){7I(\'1A\',(o.1A?0:1))}G.8N()}};G.Jz=E(){if(o.S.cN()){o.S.7M()}};G.8N=E(){if(o.R.7h()=="8b"){js("Lf");v.15y==1?G.lr():G.3l()}F{js("Jv");G.2H()}aC()};G.3Y=E(d6,l1){if(d6<o.R.1p()){if(v.fM.15s==1){if(d6>o.R.1b()){I}}if(v.4G>0){d6<v.4G?d6=v.4G:\'\'}1w("3Y");o.F6=d6;o.R.3Y(d6);if(l1){o.S.3Y(d6,o.R.1p())}o.jX=H;o.gC=o.R.1b();aC(o.gC)}};G.Cj=E(18,41,F4){if(o.R.7h()=="8b"&&o.jl!=\'Gm\'){3l();if(o.2a&&F4){o.X.8h()}}1S.3j(18,41)};G.lf=E(){if(v.29==1&&!o.1E){if(8j("7y")){o.qK=H;I}}B x=o.R.cU();if(J(v.6T)){x=v.6T}if(x!=\'\'){js("6T");B oR=1S.3j(x,(v.15A==1?\'15C\':\'r4\'));oR.6j()}};G.6K=E(x){B 1b=o.R.1b();B 1p=o.R.1p();if(!o.1E&&o.2e>0){1b=o.2e}o.S.eK(1b,1p,x)};G.sZ=E(){B 1b=o.R.1b();B 1p=o.R.1p();B bA=1p>0?1b/1p:0;if(!o.jX){o.S?o.S.eK((o.2e>0?o.2e:1b),1p):\'\'}F{1b!=o.gC&&o.gC!=-9?o.jX=P:\'\'}if((v.ga==1||v.F2==1)&&1p>0){pC("r6","2H 25%",bA,0.25);pC("r7","2H 50%",bA,0.50);pC("r8","2H 75%",bA,0.75)}W(B i=0;i<3;i++){if(!o.pL[i]){if(bA>=i*0.25+0.25){zU(i)}}}v.rc==1?1w(1,1b,1p):\'\';if(v.8p==1||v.qG>0){if(o.1A){B z=P;B pD=P;if(v.EY==1&&v.8p==1){if(!o.R.5B()){z=H}}if(1b>0){if(1b==o.1b&&!z){pD=H}F{o.aH=0}o.1b=1b}F{if(v.15D==1){B ld=o.R.ak();v.rc==1?1w(2,ld,o.pg):\'\';if(!z){if(ld==o.pg){pD=H}F{o.aH=0}}o.pg=ld}}if(pD){o.aH++;if(v.8p==1){v.rc==1?1w(3,o.aH):\'\';if(o.aH==v.vq*(2p/o.oA)){o.X.g3()}}F if(v.qG>0&&o.R.Hq()>1){if(o.aH==v.qG*(2p/o.oA)){o.R.6l(\'OR zn\')}}}}}if(v.9i){if(v.9i.bh==1&&1p>0){!o.bh?o.bh=[]:\'\';o.bh[2I.47(1b)]=1}}if(v.29==1){if(v.zA!=1&&v.jY==1){!J(o.29)?p8("6O",1b,1p):\'\'}if(v.15E!=1&&v.s6==1){!J(o.29)?p8("gi",1b,1p):\'\'}}if(v.zt==1&&v.qD>0){if(1b>=v.qD){if(!J(o.29)){if(8j("7a")){o.R.3l();o.S.3l()}v.qD=0}}}7T("1A");if(v.7X==1&&v.A1>-1){15F(1b,1p)}if(o.5k){aC(1b)}if(o.5G&&v.cL==1){if(o.3x){!o.2e?o.3x.nG(1b,1p):\'\'}}if(o.9W){o.6p?o.6p.1A(1b):\'\'}if(J(v.4H)){B ed=v.4H;if(7c([v.4H],\'-\')){ed=1p}if(ed>0&&1b>ed){if(o.2r=="4R"){o.R.3l();o.R.3Y(v.1E>0?v.1E:0)}F{o.R.oj();o.X.bB()}v.1E>0?o.2e=v.1E:\'\';o.X.nW()}}if(J(v.6s)){B r1=v.6s.2D(",");W(B i=0;i<r1.U;i++){B r2=r1[i].2D("-");if(r2.U==2){if(1b>r2[0]&&1b<r2[1]){o.R.3Y(r2[1]*1+(o.1m.7l?1:0))}}}}if(v.15G==1){if(1O zW!=="1M"){zW(1b,bA)}}};E zU(x){o.pL[x]=H;if(v.cL==1&&v.7W==1&&v.zN==x){if(o.5G&&o.3a){o.3x?o.3x.zR(o.3a):\'\'}}}E pC(x,y,t,p){if(!J(o.kk[y])){if(t>p){bf(x,y,1)}}};G.g3=E(){o.aH=0;J(o.bZ)?2N(o.bZ):\'\';if(v.15H==1){js("8p")}F{o.2e>0||o.R.5B()?\'\':o.2e=o.R.1b()+(v.15I>0?1:0);B zX=o.S.kf();js("8p");o.R.8p();zX&&v.Y.gp==1?o.S.la():\'\'}};G.AM=E(){o.S.eK(0,0);o.S.z5(0,0);o.X.3V(0,0);o.S.7L()};G.yp=E(){if(o.R){B 1b=o.R.ak();if(v.15B==1){js("ak",1b)}B 1p=o.R.1p();o.S?o.S.z5(1b,1p):\'\'}};G.nW=E(){js("15q");o.7t=H;if(v.9C==1){if(o.2r=="4R"){G.bB()}v.29==1?o.X.eX(\'7y\'):\'\';if(v.1E>0){o.X.3Y(v.1E)}G.2H()}F{if(o.R.5B()||o.2r=="4R"){G.bB()}F{if(v.zY==1){o.X.3Y((v.1E>0?v.1E:0),H);if(o.1m.ie){o.R.3l()}}}o.S.8M();v.zt==1?v.15h=1:\'\';if(8j("pI")||8j("ra")){}F{a6()}}};G.9t=E(){B 2K=P;B 2q=P;o.Ag=P;o.bv=H;1G(E(){o.bv=P},ku);W(B x in o.7G){if(o.7G.2w(x)){if(J(o.7G[x])){3w{o.7G[x].zq()}2X(e){}}}}3w{o.eo=H;if(((o.1m.5x&&v.gQ==1)||(o.1m.bw&&v.Fo==1))&&o.4Q&&!o.ao){B x=o.R.av();if(x){if(x.16p){gn();2K=H}}}if(!2K){B oY;B y=o.1T;if((o.2r=="dm"||o.2r=="ap")&&o.1m.7S&&v.gQ==1){o.R.ir();I}if(y.qN){o.8v=H;oY=y.qN({pc:"1n"});if(oY!==1M){oY.bU(E(){}).2X(E(2q){})}}F if(y.sb){y.sb({pc:"1n"});o.8v=H}F if(o.1T.sd){y.sd({pc:"1n"});o.8v=H}F if(y.se){y.se({pc:"1n"});o.8v=H}F if(y.sh){y.sh();o.8v=H}}}2X(e){2q=H;1w(e)}if(!o.8v&&!2K){if(o.1m.3K&&o.oK){gn()}F{G.yS()}}if(!2q){1G(AC,4z)}};E gn(){B x=o.R.av();if(x){o.hQ=H;o.R.JW();x.159();x.1y("15a",Af)}}E pb(){B x=o.R.av();if(x){x.15b()}};G.gn=E(){gn()};G.pb=E(){pb()};E AC(){if(o.Ag!=H){if(o.9r){o.R.ds()}if(v.1W.rO==1){p6(H);o.5D=H}v.6C==1?o.6C.3z("oN"):\'\';js("2a");bf("oN","9t",1)}};B cp;B 8n={x:0,y:0};E rL(e){if(o.3d){if(o.3d.oQ()){I}}if(e.15c!=0){e.so!=0?8n.x++:8n.x--;e.bI!=0?8n.y++:8n.y--;if((v.1W.Ae==1||v.1W.Ac==1)&&o.2a&&8n.y>8n.x){3S(cp);cp=7d(E(){8n={x:0,y:0};3S(cp)},2p)}F{o.9z=H;3S(cp);cp=7d(E(){o.9z=P;o.S.4Y();8n={x:0,y:0};3S(cp)},4d);o.S.4Y()}if(8n.x>8n.y){if(e.so>0){o.X.3Z(3Q(v.1L)-v.1W.jp/10,"no")}F{o.X.3Z(3Q(v.1L)+v.1W.jp/10,"no")}}F{B st=(o.1m.oR?-v.1W.jp/10:v.1W.jp/10);if(v.1W.Ac==1&&o.2a){o.R.1P((e.bI>0?st:-st))}F if(v.1W.Ae==1&&o.2a){3y("4h",(e.bI>0?"+"+st*10:"-"+st*10))}F{o.X.3Z(3Q(v.1L)+(e.bI>0?st:-st),"no");o.S.kB()}}}}E Af(){if(o.1m.5x){o.R.JU();js("rC")}o.hQ=P}G.yS=E(){if(o.eo){o.2a=H;o.S.9t();if(!o.8v){if(J(o.8P)){3w{O(o.8P,{\'17\':\'100%\',\'1e\':\'100%\',\'1l\':\'z7\',\'1c\':0,\'1f\':0,\'4N\':"oM"})}2X(eT){}}O(o.1T,{\'17\':\'100%\',\'1e\':\'100%\',\'1l\':\'z7\',\'1c\':0,\'1f\':0,\'4N\':"oM"});o.2Z=o.1T.2b;o.4t=o.1T.2S;3w{22.3P.C.5v=\'3g\';if(!J(o.Y)){22.wA=E(e){e.aj()}}}2X(eT){}}if(v.sB==1){O(o.1T,{\'7v\':\'#4b\'})}if(v.aq==1&&o.1m.3K==1&&!o.1m.ff){B sw=1S.cq.17;B fz=1;W(B i=1;i<6;i++){if(sw>2p*i){fz=2t(v[\'aq\'+(2p*i)],i)}}if(fz>1){o.1T.C.Ap=fz;o.aq=fz;bc()}}if(o.3d){o.3d.ar()}aC();o.eo=P}};G.8h=E(){p4=H;if(22.Au){22.Au()}F if(22.Ao){22.Ao()}F if(22.An){22.An()}F if(22.Am){22.Am()}F if(22.Al){22.Al()}F if(22.Ak){22.Ak()}if(!o.8v){G.yv(P)}};G.Kx=E(x,y){qM(x,y)};E qM(x,Ai){if(J(o.29)&&!Ai){o.pK=x}F{B 2K=P;B eO=o.9B/x;B eA=0;B oS={\'1e\':eO};if(v.15e==1){if(eO>o.9M){eO=o.9M;eA=o.9B/x;o.9B=oS[\'17\']=eA}}if(J(o.8P)&&v.A6!=1){3w{O(o.8P,oS)}2X(eT){2K=H;1w("eG 15f 158")}}if(!2K){o.5n=x;o.9M=eO;if(o.5n>0){O(o.1J,oS)}if(eA>0){js("17",eA)}js("1e",eO)}if(o.29&&!o.2a){o.4t=eO;if(eA>0){o.2Z=eA}o.29.2C()}}};G.yv=E(x){if(p4||x){o.2a=P;o.hQ=P;if(!o.8v){if(J(o.8P)){3w{O(o.8P,{\'1l\':\'o7\',\'1c\':0,\'1f\':0,\'4N\':\'A9\'});O(o.8P,o.Ab);O(o.8P,{\'17\':o.bo,\'1e\':o.bQ})}2X(eT){}}O(o.1T,{\'17\':o.bo,\'1e\':o.bQ,\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'4N\':\'A9\'});3w{22.3P.C.5v=\'2y\';22.wA=E(e){I H}}2X(eT){}}o.S.8h();if(v.sB==1){O(o.1T,{\'7v\':v.pu});if(v.eF==1){o.1T.C.7v=\'eF\'}F{O(o.1T,{\'7v\':v.pu})}}if(o.aq>1){o.1T.C.Ap=1;o.aq=1;bc()}if(v.1W.rO==1){p6(P);o.5D=P}if(o.3d){o.3d.ar()}aC();o.p3?o.p3=P:\'\';o.S.mD();p4=P;js("rC");o.8v=P;o.bv=P}};G.5D=E(x){v.1W.15g!=0?p6(x):\'\'};E p6(x){8n={x:0,y:0};if(x){1S.1y("kD",rL)}F{3S(cp);1S.5K("kD",rL)}}G.bB=E(x){v.4T=0;if(x!=1){o.S.3l();o.X.AM()}F{}o.R.3Z(v.1L);if(o.S.cN()){o.S.7M()}if(o.3B){G.5p()}if(J(o.kJ)){3S(o.kJ);o.kJ=1Z}aC(0);1w("2K");js("2K")};G.lr=E(){v.4T=0;v.3n=0;o.R.oj();o.X.bB()};G.6n=E(x){if(J(o.3r)){if(o.3r!=x){o.3r=x;if(v.wN==1){o.53=o.2G[x];if(o.5G){3f.8c("wO",o.53)}}o.R.6n(x);js("5d",o.2G[x]);o.S.wt(x)}}};G.hM=E(){o.S?o.S.hM():\'\'};G.dR=E(x){if(J(o.7E)){if(o.7E!=x){o.7E=x;if(v.E5==1){o.aO=v.aO=o.7B[x];if(o.5G){3f.8c("wI",o.aO)}}o.R.dR(x);js("7u",x);o.S.mQ("7u")}}};G.9x=E(x,z){x==\'0.0\'?x=0.1:\'\';B y=x;6v(y).K(\'.\')>0?z=1:\'\';y=y*1;if(!z){y=x==o.e8?1:o.6f[x];o.ah=x}y=3Q(y);if(o.jb||z){o.hv=y;W(B i=0;i<o.6f.U;i++){if(y<=o.6f[i]*1){o.ah=i;1k}}}if(o.5G&&v.DV==1){3f.8c("DS",y)}js("5m",y);o.R.9x(y);o.S.mQ("5m")};E aC(x){o.3F?o.3F.1t(J(x)?x:o.R.1b()):\'\'};G.kM=E(){if(o.3F){aC();o.3F.C()}};G.fv=E(x){if(1O(kT)==\'E\'){!o.3F?o.3F=1z kT():\'\';o.3F.yY(x)}};B 7K;B 9l;B oO;B 2u;E 8j(x){if(v["6x"+x+"AF"]>0&&o.5G){B tb=3f.4v("nh"+x+"4y"+o.d);if(tb){B ct=1z 6N();o.9g=ct.8C();B AG=(ct.8C()-tb)/15i;if(AG<v["6x"+x+"AF"]){I P}}}if(v["6x"+x+"AE"]>0){if(o.R.1p()>0){if(o.R.1p()<v["6x"+x+"AE"]*60){if(v["6x"+x+"AD"]>0){v["6x"+x+"4y"+"zu"]=v["6x"+x+"AD"]}F{I P}}}}if(o.kC.K("8D")!=-1&&v.29==1&&!o.b0&&v[x+\'s\']==1){if(1O s0=="1M"){I P}if(x=="7a"||x=="ra"){if(1O AB!=="1M"){2u=[];I AB(x)}}if(J(o.29)||J(o.5P)){if(!5A(o.rU)||8x(o.43)){1w(\'ad bg\');I P}F{1w(\'ad iu\');I H}}F{if(J(v[x])){if(v[x].6q().K(".")>-1||v[x].6q().K(":")>-1||v[x].6q().K("[15k]")>-1){js("15l",x);if(!8x(x)&&x!="gi"){1G(E(){o.1A||(o.5P==1Z&&o.29==1Z)?\'\':o.X.9a()},10);gE()}7K=0;9l=0;oO=x;2u=v[x].2D(" fw ");o.5T=[];o.rM=2u.U;oX();o.zQ=1;o.pa=H;W(B i=0;i<2u.U;i++){2u[i]=2u[i].2D(" or ")}v[x.aB("4y","ic")]=v[x];v[x]=1Z;o.43=x;if(x!=\'gi\'){o.29=1z s0()}o.5P=1z oV();W(B i=0;i<2u.U;i++){W(B j=0;j<2u[i].U;j++){B 8e=4Z(2u[i][j]);if(8e.K("[50%]")>0){B 1B=5M(1,2);2u[i][j]=2u[i][j].1V("[50%]","");if(1B==2){2u[i][j]=\'\'}}}}if(v.sC==1){W(B i=0;i<2u.U;i++){B n=i==0?1:0;if(2u[i].U>n){W(B j=n;j<2u[i].U;j++){B 8e=4Z(2u[i][j]);if(o.1m.rF){fG(8e)}F{1G(fG,i*100,8e)}}}}}if(2u[0][0]==\'\'){kw()}F{o.5P.oU(4Z(2u[0][0]),x)}I H}F{I P}}F{I P}}}F{I P}};G.rN=E(x){8j(x)};E p8(w,x,d){if(J(o[w+\'o\'])&&v[w+\'s\']==1){B y;W(B i in o[w+\'o\']){if(o[w+\'o\'].2w(i)){if(!J(o[w+\'o\'][i].pF)&&J(o[w+\'o\'][i].1b)&&J(o[w+\'o\'][i].29)){B z=o[w+\'o\'][i].1b.6q();B ok=P;if(z){if(x=="8m"){if(z==x){ok=H}}F{if(z.K("%")>0){if(d>0){z=2P(z.1q(0,z.K("%")))*d/100}F{z=-1}}F{z=2P(z)}if(x>=z){if(v[\'6x\'+w+\'AA\']>0&&z>-1){if(x-z>=v[\'6x\'+w+\'AA\']){z=-1}}if(z>-1){ok=H}}}if(o[w+\'o\'][i].Az&&o.R.1p()>0){if(o.R.1p()<o[w+\'o\'][i].Az*1){o[w+\'o\'][i].pF=H;ok=P}}if(ok){y=o[w+\'o\'][i].29;v[w]=o[w+\'o\'][i].29;o[w+\'15m\']=o[w+\'o\'][i].1b;o[w+\'15n\']=o[w+\'o\'][i].15o;if(8j(w)){o[w+\'o\'][i].pF=H;1k}}}}}}}};E oW(){if(8x()){if(o.dS==0||v[\'6x\'+o.43+\'15J\']==1){O(o.rU,{"1C":0,"5J":"3g","1f":4d});1w(o.43+" 1n");o.43==\'6O\'?o.R.2H():\'\'}}}E 8x(z){B y=P;B x=[\'6O\',\'dJ\'];W(B i=0;i<x.U;i++){if(o.43==x[i]||z==x[i]){if(v[\'6x\'+x[i]+\'15r\']==1){y=H}}}I y};G.8x=E(x){I 8x(x)};G.166=E(x){x?\'\':p9();o.43=="6O"?o.Ax.2L(o.Aw):\'\'};G.168=E(){p9()};G.169=E(){p9()};E p9(){if(8x()){if(o.1A){o.R.3l();o.S.3l()}1w(o.43+" 1t");O(o.rU,{"1C":1,"5J":"4D","1f":0});o.nH=1}if(o.hQ&&!o.8v){pb()}F{if(v["6x"+o.43+"er"]==1&&o.2a){o.X.8h()}}};G.16a=E(x){o.5P=1Z;o.nH=0;1w("8D 4l",o.43);js("16b",o.43);if(x.1K=="gi"){B Ar=1z 16d(x);o.s6.2L(Ar)}F{if(J(o.29)){if(v.4T==0&&v.16e==1&&o.R.1b()==0&&o.R.1p()==0){v.4T=1;o.R.tK()}if((!o.29.167()||x.A4)&&o.rZ>0){1w("8D 16f");o.29.4n();o.29=1Z;o.29=1z s0()}if(8x()){oW()}F{if(o.1A){o.R.3l();o.S.3l()}}o.rZ++;if(o.pa&&v.dQ>0){2N(o.dQ);o.dQ=1G(zy,v.dQ*2p*60);if(J(v.zF)){if(v.zF!=\'\'){o.kn?o.kn.6s():\'\';o.kn=1z 16h()}}}o.pa=P;if(v.zB>0){1w("8D 16i");js("16k");1G(rW,v.zB*2p,x)}F{rW(x)}}F{1w("8D 16l")}}};E rW(x){o.29.Go(x)}E zy(){if(J(o.29)){if(o.29.c6()&&o.dS==0){o.29.sJ();1w("8D zn "+v.dQ);2u=[];bK()}}}G.16n=E(){js(\'16g\',o.43);1w("8D 2q");rV()};G.kw=E(){rV()};E rV(){B n=oX();1w("8D 6S "+!n);!n?kw():bK()};G.165=E(x){if(v[o.43+"rw"]){W(B i=0;i<3;i++){v[o.43+"rw"]=v[o.43+"rw"].1V(x+(i==0?\' fw \':(i==1?\' or \':\'\')),\'\')}}};E oX(){B x=P;if(o.43){B 7Q=v[\'6x\'+o.43+\'4y\'+\'zu\'];B kS=v[\'6x\'+o.43+\'4y\'+\'15V\'];if(kS||7Q){if(kS>0&&o.s9>0){o.rM=kS;if(o.dS>=kS){x=H}}F{if(7Q>0){o.rM=7Q;if(o.dS>=7Q){x=H}}}}}I x}E kw(){if(2u.U>0&&2u[7K]){if(9l<2u[7K].U-1){1w("8D 164");o.29?o.29.sJ():\'\';oW();9l++;B 8e=4Z(2u[7K][9l]);B gG=sL(8e);if(gG==\'6Y\'){o.5P=1z oV();o.5P.oU(8e,o.43)}if(gG==\'2q\'){kw()}}F{bK()}}F{bK()}}E sL(8e){B x=\'6Y\';if(v.sC==1&&o.5T){B p5=P;B n=0;W(B i=0;i<o.5T.U;i++){if(o.5T[i].p0==0){if(o.5T[i].c7.zr(8e)){o.5T[i].p0=1;B y=o.5T[i].c7.bx();if(y==\'4l\'){o.5P=o.5T[i].c7;1w("8D zr");o.5T[i].c7.fr();x=y}F{if(y==\'\'){x=\'ok\';1w("8D 15N");o.5P=o.5T[i].c7;o.5T[i].c7.15O()}if(y==\'2q\'){x=\'2q\'}}p5=H}if(p5&&o.5T[i].h7==0){n++;if(n<6){sG(o.5T[i])}F{1k}}}}}I x}G.15P=E(x,y){if(x!=\'\'){B z=7K;B rB=P;if(y){W(B j=0;j<2u.U;j++){2u[j]==y?z=j:\'\'}}if(2u.U==1){if(2u[0].U>1&&9l<2u[0].U-1&&2u[9l]){B A2=2u[9l].7f(1,99);2u[0].rG(9l+1,99);rB=H}}if(1O(x)=="3U"){W(B i=0;i<x.U;i++){2u.rG(z+i+1,0,[x[i]]);if(o.1m.rF){fG(x[i])}F{1G(fG,i*100,x[i])}}}F{if(1O(x)=="5j"){2u.2L([x]);fG(x)}}if(rB){2u[2u.U-1]=2u[2u.U-1].aB(A2)}}};G.15R=E(x,y){if(x!=\'\'){B z=7K;if(y){W(B j=0;j<2u.U;j++){2u[j]==y?z=j:\'\'}}if(2u[z]){if(1O(x)=="3U"){W(B i=0;i<x.U;i++){2u[z].2L(x[i])}}F{if(1O(x)=="5j"){2u[z].2L(x)}}}}};G.bK=E(x){bK(x)};E fG(x){if(v.sC==1&&o.5T){B i=0;W(B i=0;i<2u.U;i++){if(2u[i]==x){if(7K>=i){I}F{}}}if(2u.U==1&&2u[0].U>1){}F{B n=0;W(i=0;i<o.5T.U;i++){o.5T[i].p0==0?n++:\'\'}o.5T.2L({h7:0,p0:0,x:4Z(x),t:o.43,c7:1z oV(H)});n<5?sG(o.5T[o.5T.U-1]):\'\'}}}E sG(x){if(x){x.h7=1;x.c7.oU(x.x,x.t)}}E bK(jW){B 2K=oX();1w("8D 6s ("+o.dS+")");if(2u.U>0&&7K==2u.U-1){if(2u[0][0].K("js:")==0){7K=-1;2u=[[2u[0][0]]]}}if(o.15S==2){2K=H}if(2u.U>7K+1&&!2K){o.29.sJ();oW();7K++;o.zQ++;9l=0;B 8e=4Z(2u[7K][0]);B gG=sL(8e);if(gG==\'6Y\'){o.5P=1z oV();o.5P.oU(8e,oO)}if(gG==\'2q\'){bK(jW)}}F{gJ();o.S.7L();if(J(o.29)){o.29.4n();o.29=1Z}o.5P=1Z;2u=[];9l=0;7K=0;o.nH=0;o.zs!=1?js("15T",o.43):\'\';o.zs=0;if(v.15M==1){if(o.oP){3w{o.oP.zk()}2X(e){1w(o.oP,e)}o.oP=1M}}oO=\'\';o.dS=0;o.zC=0;2N(o.dQ);3S(o.15U);o.kn?o.kn.6s():\'\';o.cD?o.cD.1n():\'\';o.s9++;if(o.43=="7y"||(o.43=="dJ"&&v.pe==1&&o.g6)||o.43=="6O"){if(v.3I!=\'?\'){o.R.gl();B re;if(o.qK){o.X.lf();o.qK=P;re=H}if(o.2r=="4R"&&!o.qP&&o.1m.5x){re=H;o.43=="7y"?o.R.Kv():\'\'}if(re||jW==\'jW\'||v.15X==1||o.pN){o.pN=P}F{o.X.2H(1)}}}if(o.pK>0){qM(o.pK);o.pK=0}if(o.43=="pI"){a6()}o.qP=P;o.43=1Z}};G.15Y=E(){2u=[[\'\']]};G.eX=E(y){B x=[\'7y\',\'dJ\',\'pI\',\'7a\',\'ra\'];B z;W(B i=0;i<x.U;i++){z=P;if(y){y!=x[i]?z=H:\'\'}if(!z&&J(v[x[i].aB("4y","ic")])){v[\'6x\'+x[i].aB("4y","BW")]--;if(v[\'6x\'+x[i].aB("4y","BW")]>0){v[x[i]]=v[x[i].aB("4y","ic")];v[x[i].aB("4y","ic")]=1Z}}}if(y=="7y"||y=="6O"){if(v.qQ>1){if(J(o.rf)&&v.jY==1){W(B i in o.rf){o.rf[i].pF=1M}v.qQ--}}}};G.mp=E(){gE();if(J(o.7X)){o.7X.4n();o.7X=1Z}o.7X=1z 15Z()};G.162=E(){gJ();o.7X.4n();o.7X=1Z};G.gE=E(){gE()};G.gJ=E(){gJ()};E gE(){if(o.a8){}F{o.a8=1Q("1Y");o.1T.1N(o.a8);dW(o.a8);O(o.a8,{"2j":"#4b","1C":0.1});o.a8.C.4N=JH}};E gJ(){if(o.a8){o.1T.3p(o.a8);o.a8=1Z}};E 8A(){if(J(o.2i)){B p=o.2a?2t(v.163,v.2i):v.2i;if(p!=o.yW){ae(p,o.2i,v.hg)}1t(o.2i);O(o.2i,{"1C":v.mx});o.S.4U();o.gk?o.gk.1A():\'\'}};G.gy=E(){if(J(o.2i)){if(5A(o.2i)){3S(o.yq);B t=o.R.1b();if(t==0&&v.Bx==1){}F{if(v.BR>0){2N(o.rn);o.rn=1G(pB,v.BR*2p)}F{pB()}}}}};E pB(){2N(o.rn);if(v.rp==1&&!o.1A){}F{O(o.2i,{"1C":0});1G(BO,4c)}}E BO(){if(!o.1A&&v.gd==1){}F{1n(o.2i);o.gk?o.gk.4x():\'\';o.S.4U()}}G.8A=E(){8A()};E Gg(x){if(v.rq==1){W(B i=0;i<5h.U;i++){if(5h[i]){if(5h[i].3z("id")!=v.id){5h[i].3z(\'4x\')}}}}eS=v.id}E rr(x){B y=7F.6d(x).U;o.kj=0;if(y>0){x=r9(x,y,\'\',-1)}I x}E r9(x,y,p,j){B x2=[];B 2K;if(J(x[\'Y\'])){x=x[\'Y\'];y=x.U}B ii=0;W(B i=0;i<y;i++){2K=P;if(J(x[i][\'id\'])){x[i][\'dB\']=x[i][\'id\']}x[i][\'id\']="x"+p+\'-\'+i+(J(x[i][\'id\'])?\'-\'+x[i][\'id\']:\'\');j==-1&&i==0&&!J(x[i][\'5b\'])?o.km=x[i][\'id\']:\'\';if(!J(o.km)){j==0&&!J(x[i][\'5b\'])?o.km=x[i][\'id\']:\'\'}x[i][\'7s\']=p;x[i][\'rk\']=j;x[i][\'cC\']=ii;if(J(x[i][\'1p\'])){o.kj+=x[i][\'1p\']}if(J(x[i][\'Cb\'])){x[i][\'1I\']=x[i][\'Cb\'];B q1=x[i][\'3I\']?x[i][\'3I\'].K(\'[\'):0;B q2=x[i][\'3I\']?x[i][\'3I\'].K(\']\'):0;if(q1>0&&q2>0){B s1=x[i][\'3I\'].1q(q1+1,q2-q1-1);B s2=s1.2D(",");B s3=\'\';W(B k=0;k<s2.U;k++){s3+="["+s2[k]+"]"+x[i][\'3I\'].1V("["+s1+"]",s2[k])+(k<s2.U-1?",":\'\')}x[i][\'3I\']=s3}}if(J(x[i][\'Y\'])){x[i][\'5b\']=x[i][\'Y\']}if(!J(x[i][\'5b\'])){if(J(x[i][\'3I\'])){if(x[i][\'3I\']==\'\'&&!J(x[i][\'7i\'])){2K=H}}F{2K=H}}if(!2K){o.1D[x[i][\'id\']]=x[i];ii+=1}if(J(x[i][\'5b\'])){B z=7F.6d(x[i][\'5b\']).U;if(z>0){x[i][\'5b\']=r9(x[i][\'5b\'],z,x[i][\'id\'],i)}}if(!2K){x2.2L(x[i])}}I x2}E Cy(){B x=[];if(J(v.4V)){if(v.4V.K("x-")!=0){W(B y in o.1D){if(o.1D.2w(y)){if(o.1D[y].dB==v.4V){v.4V=y}}}}if(J(o.1D[v.4V])){v.Y.14z==1?v.Y.lI=0:\'\';x=o.1D[v.4V]}F{x=o.Y[0];if(v.4V==o.r5){o.2e=1M}}}F{x=o.Y[0]}if(x){W(B i=0;i<10;i++){if(J(x[\'5b\'])){x=x[\'5b\'][0]}F{1k}}v.4V=x.id;if(v.4V==o.r5&&x.1E!=\'3x\'){x.1E=1M}}I x}G.gw=E(){I gw()};E gw(){B x=P;if(o.S){if(o.S.gP()){if((v.Y.eC==1||v.j7==1)&&o.S.cX()){x=H}}}I x};E a6(){bf("4H","a6",1);o.X.eX();if(o.5G&&v.cL==1){o.3x.nG(0,o.R.1p())}if(o.S.gP()){if(gw()){if(J(v.Y.Cs)){o.Ct=1G(E(){o.S.bj()},v.Y.Cs*2p)}F{o.S.bj()}}F{qZ()}}F{if(v.12l==1&&o.2a){o.X.8h()}qW()}}G.Cp=E(){qZ()};E qZ(){if(v.Y.pT==1&&!o.S.cX()){o.S.mF();I}if(v.Y.GV==1){!o.S.kf()?o.S.cF():\'\'}qW()}E qW(){8A();js("Yu");if(v.7i==1&&v.12j==1&&2E(v.Cl)){7i(v.Cl)}if(v.Xd){if(1O Ck!=="1M"){!o.eH?o.eH=1z Ck():o.eH.Cj()}}}E qU(x){if(x.K(\'js:\')==0){3w{x=2o(x.1q(3))}2X(e){e5.1w(e.9Y)}}I x?x:\'\'}E qT(){B uL=2I.8U(6N.iu()/2p);B uJ=(J(v.Ce)?v.Ce:0)+2P(o.R.1b());B 1K=0;o.1m.dc?1K=1:\'\';o.1m.5x?1K=2:\'\';o.1m.bw?1K=3:\'\';o.1m.Xe?1K=4:\'\';o.1m.tv?1K=5:\'\';B 18=v.jj.1V("[uL]",uL);18=18.1V("[uJ]",uJ);18=18.1V("[Xf]",1K);B 9w=22.1Q("4u");9w.6g(\'3h\',18);9w.6g(\'1e\',\'42\');9w.6g(\'17\',\'42\');o.1T.1N(9w)}};B Ek=E(18){B 18;B 46;B oD;B 8r;B g2="";B dZ=0;B iO=P;B oe=P;B uV;B R;B 3t;o.3M={x:1,y:1,x0:1,y0:1};B a7;B pf;B oI=0;B gx=0;B hC;if(1O(18)==\'5j\'){18=4Z(18);if(18.K("[{")==0){3w{18=18.1V(/6W\'qt/ig,\'"\');18=5w.7b(18);a7?18=o.X.6Z(18):\'\'}2X(e){e5.1w(e);18="Be 5w"}}if(18.K("#"+v.9O)==0){18=o[o.fd[0]](18)}if(18){if(18.K("#"+v.cP)==0&&18.K(v.e9)>0){a7=H;o[o.fd[1]](18,aJ)}}if(18){if(18.K("#0")==0){if(18.K(o.ew)>0){18=cW(18.1V(o.ew,\'\'))+o.ew}F{18=cW(18)}}}if(v.cJ==1){18=cJ(18)}if(1O(18)==\'5j\'){if(18.K(".aT")==18.U-4||18.K(".9b")>0){pf=18.2D(" or ");uu()}}}o.3N=1Q("1Y");dW(o.3N);O(o.3N,{"4I":"2J 0.2s 3e","1F-8o":"8K"});o.1T.1N(o.3N);if(v.1W.BE==1){if(!o.um){u1(o.3N,\'o.BE\',v.1W.jM!=1,v.1W.jM==1,Bb);o.um=H}}if(!a7){aJ()}E Bb(){B p=o.3N.kI;B p2=o.2Z;if(v.1W.jM==1){p=o.3N.uE;p2=o.4t}B x;if(p>p2*2t(v.1W.B9,0.5)){if(o.S.gM()){x=H;o.S.dU()}}F{if(p<-p2*2t(v.1W.B9,0.5)){if(o.S.cX()){x=H;o.S.bj()}}}if(x){if(v.1W.jM==1){O(o.3N,{"1f":0})}F{O(o.3N,{"1c":0})}}F{1z 5Q({mc:o.3N,1K:(v.1W.jM==1?"1f":"1c"),to:0,1b:0.1,5l:"BN",me:"um"})}}E uu(){18=pf[oI];if(18.K(o.ew)>0){18=18.1V(o.ew,\'\');v.3I=18}B 51=fh(18);51.cZ=E(){if(G.fn==4&&G.7h==4z){cF(G);o.S.K6()}F{o5(1)}};51.uA=E(e){o5(1)};51.bd();a7=H}E o5(x){if(oI+1<pf.U){oI++;uu();x=0}if(x==1){6l("Y hc pJ or B6 B5")}if(x==2){6l("Xg 5w")}}E cF(x){if(x.dy){B y=x.dy;if(y.K("#"+v.9O)==0){y=o[o.fd[0]](y)}if(y.K("#"+v.cP)==0&&y.K(v.e9)>0){y=o[o.fd[1]](y)}if(18.K(".aT")==18.U-4){B aT=y.2D(/(\\r\\n\\t|\\n|\\r\\t)/gm);18=[];B uo=1;B l2=\'\';W(B i=0;i<aT.U;i++){if(aT[i].K("#Xh")>-1){if(aT[i].K(" - ")>-1){B 1B=aT[i].2D(" - ");l2=1B[1B.U-1]}}if(aT[i].K("3J")>-1){18.2L({1I:""+(l2!=\'\'?l2:uo),3I:aT[i]});uo++;l2=\'\'}}}F{y=y.1V(/(\\r\\n\\t|\\n|\\r\\t)/gm,"");3w{18=5w.7b(y)}2X(e){o5(2)}}if(o.S){if(v.Y.lE==1){o.S.la(2)}}aJ();bc();1G(E(){js("Y")},1)}}E aJ(x){18=o.X.6Z(x?x:18);18&&18!=\'?\'?6Z(18):\'\';o.1A&&x&&!o.29?o.R.2H():\'\'}E 6l(x,B2){B y=H;B yy=H;js("Xi",x);if(B2!=1&&v.8p==1&&v.vs==1){vp();I}if(46){if(o.1A||o.g6||(v.3n==1&&!o.1E)){if(46.U>0){8r++;y=8r>46.U-1;if(y&&46.U>1&&v.fZ>0){if(o.fZ<v.fZ){8r=0;y=P}o.fZ++}if(y&&v.Xj==1){if(o.4p.U>1){if(o.2G[o.3r].K(2R("dg"))==-1){o.2G[o.3r]=o.2G[o.3r]+\' (\'+2R("dg")+\')\'}if(o.3r>0){yy=P;o.X.6n(o.3r-1);hU()}F{if(o.2G[o.3r+1].K(2R("dg"))==-1){yy=P;o.X.6n(o.3r+1);hU()}}}}if(!y){B z=P;o.2e>0||!o.1E||R.5B()?\'\':o.2e=4F();if(o.2r!=ot(46[8r])||o.2r!=\'bT\'){if(o.1A){o.X.bB(1);z=H}}if(v.o1>0){2N(o.hW);o.hW=1G(o2,v.o1*2p)}F{o2()}}F{if(v.8p==1&&yy&&v.vs!=1){y=P;vp()}}}}F{y=P}}if(y&&yy&&x){vm(x,H)}};E o2(){if(o.1A||o.g6||(v.3n==1&&!o.1E)){1w("Xk de",o.2e);6Z(\'or\');o.1E&&!o.29?R.2H():\'\';hU()}F{2N(o.hW);o.hW=1G(o2,(v.o1>0?v.o1:5)*2p)}}E vm(x,mr){bf("2q","im",H);if(v.AY==1&&!o.aW){if(v.AW==1){o.as.9b(v.AV)}F{o.as.9b(x)}if(v.AT==1&&J(v.AS)){o.dL=1z AR();o.X.gy()}}mr?o.aW=H:\'\';if(o.1A){o.X.7L();o.S.3l()}J(o.2i)&&!J(o.dL)?o.X.8A():\'\';js("2q",x)}E vp(){gx++;1w("im g3 KB "+gx);o.1A?o.lk=1:\'\';J(o.bZ)?2N(o.bZ):\'\';o.bZ=1G(Bd,v.vq*2p)}E Bd(){B x=2t(v.Xl,10);if(o.1A||o.lk==1){o.lk=0;if(gx<x){o.X.g3()}F{if(v.vs==1){6l(R.jw(),1)}F{vm(\'g3 im \'+R.jw())}}}}G.6l=E(x){6l(x?x:R.jw())};G.8M=E(y){1w("nW");iO=H;2N(hC);B x=P;if(3V()>0&&!o.5u&&!y){B 1b=o.KJ;if(1b+10<3V()){1w(\'Xm (BC)\');js("BC");R.2H();R.3Y(1b);x=H}}if(!x){o.X.nW();js("4H")}};G.a5=E(){if(v.t0==1){J(o.2i)?o.X.8A():\'\'}v.gd==1?o.X.gy():\'\';o.S.2H();o.X.BB();if(v.Xc==1&&J(v.sW)){if(v.sW.U>5){sT();3S(uV);uV=7d(sT,v.BA*2p)}}js("1A")};G.kR=E(){if(v.mo==1&&o.4Q){if(o.X.kR()){o.ao=R.uI();o.S.4U();ti()}}o.v9=H};G.dX=E(){4F()>0&&4F()==3V()&&o.X.gw()?\'\':o.X.3l()};G.jS=E(){1w("Xn")};G.k1=E(){1w("v8");o.X.v8();J(o.gC)?js("4h",o.gC):\'\'};G.db=E(){1w("v3");gx=0;o.X.v3();o.2r=="1H"?tz(1):\'\'};G.a9=E(){if(R){1w("3V",3V());o.X.3V(4F(),3V());js("1p",3V());gx=0;2N(o.bZ);if(J(o.nQ)){o.X.dR(o.nQ);o.nQ=1Z}}};E 4F(){B x=R.1b();I x}E 3V(){B x=R.1p();I x}G.dC=E(){};G.9p=E(){1w("9a");o.X.9a();js("8a")};G.df=E(){if(dZ!=4F()){if(!o.a8){o.X.7L();if(dZ==0){if(v.gd==1&&v.Bx==1){o.X.gy()}}}}dZ=4F();B 9u=3V();js("1b",dZ);if(v.2h.on==1){if(1O(Bw)==\'E\'){!v.dM&&v.2h.dM?v.dM=v.2h.dM:\'\';if(!3t&&v.2h.59!=1&&v.dM&&v.dM!=\'\'&&dZ>0){o.do=1z Bw();3t=o.do.gD()}}}if(o.2r=="1H"&&o.1m.7l&&9u>0){if(o.1A&&dZ>9u-1){2N(hC);hC=1G(Bu,4d)}}};E Bu(){if(!iO){o.X.3l();o.R.8M()}}G.uk=E(){if(o.2r=="4R"){R?R.nP():\'\'}};G.Br=E(x){o.X.bB();R.Bq(x)};G.Lo=E(x){if(J(x)){if(3t){3t.3Z(x)}v.2h.1L=x}};G.Bp=E(x){if(J(x)){if(3t){3t.3h(x);3t.2H()}}};G.nP=E(){if(o.2r=="4R"&&R){I R.4l()}F{I H}};G.mP=E(){I o.2r=="1H"?R.mP():1M};G.mL=E(){I R.mL()};G.6n=E(x){1w("Xp",x);if((o.2r=="bT"||o.2r==o.ws||(o.2r=="1H"&&(v.9o==0||au()<2))||(o.2r=="3W"&&(v.oE==0||cH()<2)))&&J(o.4p[x])){B 1b=G.1b();o.2e>0?\'\':o.2e=1b;o.X.3Y(1b,P);6Z(o.4p[x],H);B y=H;if(v.1j){if((v.1j.Xq==1&&!o.1A)||!o.1E){y=P}}if(o.az>0){R.gZ(o.az)}if(y){o.X.2H()}}if(o.2r=="1H"&&v.9o==1&&au()>1){R.GT(x)}F if(o.2r=="3W"&&v.oE==1&&cH()>1){R.GE(x)}F if(o.2r=="4R"||o.2r=="dm"){R.tg(x)}};G.Hs=E(x,y){I kx(x,y)};G.rl=E(x,y){I Jo(x,y)};E kx(x,y){B r=x.1e+\'p\';if(x.1e<4z){r=\'nO\'}F if(x.1e>=4z&&x.1e<=dN){r=\'l9\'}F if(x.1e>dN&&x.1e<=cA){r=\'l3\'}F if(x.1e>cA&&x.1e<=4c){r=\'je\'}F if(x.1e>4c&&x.1e<=hu){r=\'tx\'}F if(x.1e>hu&&x.1e<=Bh){r=\'nK\'}F if(x.1e>Bh&&x.1e<=Gf){r=\'nJ\'}F if(x.1e>Gf&&x.1e<=Fp){r=\'tl\'}F if(x.1e>Fp){r=\'tk\'}if(x.17==Xr&&x.1e<=Xs){r=\'l9\'}F if(x.17==KC&&x.1e<=KL){r=\'l3\'}F if(x.17==Xt&&x.1e<=Xu){r=\'je\'}F if(x.17==Xv&&x.1e<=Xw){r=\'nK\'}F if(x.17==Xx&&x.1e<=Xy){r=\'nJ\'}F if(x.17==Xz&&x.1e<=Xo){r=\'tl\'}F if(x.17==Xa&&x.1e<=WY){r=\'tk\'}if(v.1j.X9==1&&J(v.1j[\'6H\'+r])){r=v.1j[\'6H\'+r]}F{if(y==1){r=2R(r)}if(y==2&&J(x.aF)){r=2P(x.aF/2p)+\' \'+2R(\'gV\')}}I r};E Jo(x,y){B r=x.lW();if(r=="WN"||r=="en"){x="WO"}F if(r=="WP"||r=="ru"){x="Русский"}if(1O(v.o9)=="3U"){if(J(v.o9[x])){x=v.o9[x]}F{x=2t(v.o9[y.6q()],x)}}I x};E ti(){if(o.4Q&&o.2f&&!o.uM){R.uK();W(B i=0;i<o.2f.U;i++){if(o.2f[i]!=\'9Z\'){R.Hw(o.2f[i],o.3i[i],(i==o.3v))}}o.uM=H}}G.9x=E(x){1w("WQ",x);x=3Q(x);R?R.g4(x):\'\';if(v.2h.on==1){if(3t){3t.g4(x)}}};G.JW=E(){ti()};G.JU=E(){R.uK()};G.dR=E(x){1w("WR",x);if(o.aQ.U>0){if(o.aQ[x]){B 1b=G.1b();o.2e>0?\'\':o.2e=1b;o.X.3Y(1b,P);6Z(o.aQ[x],H);o.X.2H()}}F{if(o.2r=="1H"&&v.cs==1){R.Hl(x)}F if(o.2r=="3W"&&v.JQ==1){R.GP(x)}F if(o.4Q){R.gZ(x)}}};G.td=E(){B x=o.2G[o.3r];x==1M?x=\'\':\'\';B y=hN()&&v.hY==1&&v.9o==1&&x!=2R("2y");I(y?\'\'+2R("2y")+\' \':\'\')+x};G.sS=E(){B x=o.7B[o.7E];x==1M?x=\'\':\'\';I x};G.hN=E(){I hN()};E hN(){B x=P;if(R){if(o.2r=="4R"){x=R.2y()}if(o.2r=="1H"&&v.9o==1&&au()>1&&v.hY==1){x=R.2y()}if(o.2r=="3W"&&v.oE==1&&cH()>1){x=R.2y()}}I x}E au(){if(o.2r=="1H"){I R.au()}F{I 0}}E cH(){if(o.2r=="3W"){I R.cH()}F{I 0}};G.9c=E(){I o.4Q?R.9c():o.5n};G.4Y=E(x){if(R&&(o.2r=="4R"||o.2r=="ap"||J(v.9c))){R.4Y()}if(v.yu>0){O(o.3N,{"1e":(o.2a?"100%":o.bQ-v.yu)})}if(o.3t&&v.2h.Kw==1){o.do.4Y()}if(v.sY==1){WS()}if(o.tT){o.tT.4Y()}};G.3T=E(){I R?R.3T():{}};G.ir=E(){R.ir()};G.8p=E(){1w(\'8p\');o.aH=0;o.1E?v.3n=1:\'\';o.X.9a();if(18&&v.WT!=1){if(18.K(\'(5M)\')==-1){18=18+(18.K(\'?\')==-1?\'?\':\'&\')+\'JK=(5M)\'}}if(18){if(o.4Q){R.3h(18);G.2H()}F{6Z(18)}}};if(!J(o.2i)){tI()}if(J(v.2i)){if(v.2i!=\'\'){ae(v.2i,o.2i,v.hg);if(v.t0==1&&!o.1E){1n(o.2i)}}F{v.2i=1Z}}E bx(){g2=R?R.7h():\'\'}E Jm(18){46=18.2D(" or ");W(B i=0;i<46.U;i++){if(46[i].K(" fw ")>-1){oD=46[i].2D(" fw ");46[i]=oD[5M(0,oD.U-1)]}if(J(v.oC)&&46[i].K("//")==-1){46[i]=v.oC+46[i]}}8r=0}E J8(){bx();if(g2=="8b"||o.5u){o.X.sZ()}if(g2!=""){o.X.yp()}}E tI(){if(o.2i){o.1T.3p(o.2i)}o.2i=1Q("1Y");O(o.2i,{"4k-3c":"1U","1C":v.mx,4I:"1C 0.5s"});if(v.sY==1){WU()}F{O(o.2i,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1e\':\'100%\'})}o.1T.1N(o.2i)}E 6Z(x,y,Jl){2N(hC);v.hD==\'\'?v.hD=\';\':\'\';if(x.K(\'{\')>-1&&x.K(\'}\')>-1&&x.K(v.hD)>-1){B z=x.2D(v.hD);o.aQ=[];W(B i=0;i<z.U;i++){o.7B[i]=z[i].1q(z[i].K("{")+1,z[i].K("}")-1);o.aQ[i]=z[i].1q(z[i].K("}")+1);if(J(v.aO)){if(v.aO==o.7B[i]){o.7E=i}}}x=o.aQ[o.7E]}!J(46)?46=[]:\'\';o.ol?2N(o.ol):\'\';x&&x!=\'or\'&&x!=\'x\'?Jm(x):\'\';B ft=o.2r;if(46.U>0){o.2r=ot(46[8r]);B gD=P;if(Jl){gD=H}18=46[8r];if(18){18=18.1V(/\\(5M\\)/g,2I.5M())}F{18=46[0]}if(!gD&&x!=\'x\'&&R&&o.2r==ft&&(ft=="bT"||(ft=="ap"&&!o.1m.2n)||(ft=="4R"&&o.1E&&!oe)||ft=="dm"||ft=="1H"||ft=="3W")){R.3h(18);1w("3h")}F{1w("WV");ob();L3(18)}tz()}if(!y){3S(o.sX);o.sX=7d(J8,o.oA);if(!J(v.28)&&v.oz==1&&v.te==1){v.28=\'\'}if(J(v.28)){o.X.fv(v.28)}if(v.g0==1){if(v.mo==1&&o.1m.2n){}F{if(o.2r=="4R"){O(o.3N,{"1f":-ku,"1c":-ku})}F{3k(o.3N)}v.1u.1n=0}}}}E tz(x){if(o.e8||x){if(o.jb){R.g4(o.hv)}F{if(o.ah!=o.e8){R.g4(o.6f[o.ah])}}}}E ot(x){B 1K="bT";if(x){if(x.K(".Ix")>0){1K="1H"}F if(x.K(".IC")>0){1K="3W"}F if(x.K("w")==0&&x.K("s")==1){1K=o.ws}F if(x.K(\'4R.7R/\')>-1||x.K(\'oy.be/\')>-1){if(1O(ud)==\'E\'){1K="4R";if(v.yP==1){B y=\'cu://4u.4R.7R/vi/\'+ow(x)+\'/\';La(y+\'Ju.j2\',E(z){z>100?v.2i=y+\'Ju.j2\':v.2i=y+\'WW.j2\';if(o.1D){o.1D[o.3a][\'2i\']=v.2i}v.3n==1||o.1E?\'\':ae(v.2i,o.2i,v.hg)})}}F{1w("No JI")}}F if(v.ap==1&&x.K(\'ap.7R/\')>-1){1K="ap"}F if(v.dm==1&&x.K(\'WM.7R\')>-1){1K="dm"}F if(v.Ky==1){if(1O(Lc)==\'E\'){Lc(x)?1K="6W":\'\'}}}o.4Q=1K=="bT"||1K=="1H"||1K=="3W"||1K==o.ws;I 1K}E La(18,L8){B 4u=1z WX();4u.cZ=E(){L8(G.1e)};4u.3h=18}E L3(x){o.2r=ot(x);if(o.4Q){R=1z Gq(x,o.3N,P)}if(o.2r=="4R"){R=1z ud(x,o.3N)}if(v.ap==1&&o.2r=="ap"){R=1z WZ(x,o.3N)}if(o.2r=="6W"){R=1z X0(x)}if(o.2r=="dm"){R=1z X1(x,o.3N)}o.S?o.S.IH():\'\';B t=0;if(J(v.1p)){if(o.3x&&v.cL==1&&!o.1E){t=o.3x.ax().t}1G(E(){o.X.3V(t,v.1p)},100)}}E ob(){if(R){R.4n();R=1Z;g2="7t"}if(3t){3t.4n();3t=1Z;3t=1M;o.do.6s();o.3t=1Z;o.do=1Z}};G.4n=E(){ob()};G.X2=E(){46=[];ob()};G.6Z=E(x,y,z){6Z(x,y,z)};G.ae=E(x){ae(x,o.2i,v.hg)};G.2H=E(){if(R){iO=P;oe=P;if(o.5u){o.4B.2H()}F{R.2H();v.gd==1?o.X.gy():\'\'}if(J(3t)){3t.2H()}if(o.7Z){if(o.4Q){if(o.9g>0&&!o.7Z.X3()){o.7Z.8G()}}F{o.om=[];o.S.mQ("bR")}}if(o.4Q&&v.HN>-1&&!o.tJ&&!o.1m.5x){if(o.9g>0){R.Il()}}hU()}F{1G(G.2H,4c)}};E hU(){if(v.Lj>0&&46.U>1){if(3V()==0||v.Lh==1){2N(o.ol);o.ol=1G(Li,v.Lj*2p)}}}E Li(){if(o.1A&&(3V()==0||v.Lh==1)&&4F()==0&&!o.hW){if(R){if(R.ak()==0&&8r!=46.U-1){6l(\'6Z KB\')}}}}G.KS=E(1h){if(o.3t){if(v.2h.Kw==1){if(o.yt[o.3t]>2){I}}if(1h){1h.bt();1S.1h?1S.1h.6L=H:\'\'}B 1B=R;R.tD(H,o.3t);3t.tD(P,o.3N);R=3t;3t=1B;R.2H();3t.2H();js("2h")}};G.Kv=E(){R.3h(18)};G.zb=E(){v.6C==1?o.6C.3z("1n"):\'\';o.tN=H};G.kz=E(){if(v.1u.wl){v.1u.wl=P;if(o.S){o.S.xL(1);o.S.z2()}}o.tN=P};G.Kt=E(){if(o.3t&&o.do){o.do.iW()}};G.h5=E(){if(o.4Q&&o.6m){o.jq=H;R.6m()}};G.ds=E(){if(o.4Q&&o.96){R.96()}};G.nb=E(){if(v.fU==1&&J(v.X4)){if(J(o.fU)){o.fU.1t()}F{if(1O(Kq)==\'E\'){o.fU=1z Kq()}}}iV();if(R){po(0);R.nb()}};G.gl=E(){o.fU?o.fU.1n():\'\';R?R.gl():\'\'};G.iV=E(x){iV(x)};E iV(x){if(v.X5==1&&2E(v.cD)){if(J(o.cD)){o.cD.1t(x)}F{if(1O(Kz)==\'E\'){o.cD=1z Kz()}}}}G.3l=E(){if(o.5u){o.4B.3l()}F{R?R.3l():1w("X6")}if(J(o.3t)){3t.3l()}};G.oj=E(){oe=H;o.X.3Y(0,P);J(o.2i)?o.X.8A():\'\';6Z(\'x\')};G.8N=E(){R?R.8N():\'\'};G.3Y=E(x){if(R){if(o.5u){o.4B.3Y(x)}F{R.3Y(x);if(v.2h.on==1){if(3t){3t.3Y(x)}}}}};G.5p=E(){if(R){R.5p();o.5u?o.4B.5p():\'\';1w("5o")}if(v.2h.on==1&&v.2h.ge==1){if(3t){3t.5p()}}};G.6z=E(){if(R){R.6z();o.5u?o.4B.6z():\'\';1w("9S")}if(v.2h.on==1&&v.2h.ge==1){if(3t){3t.6z()}}};G.3Z=E(x){R?R.3Z(x):\'\';if(v.2h.on==1){if(v.2h.ge==1&&3t&&!o.zH){3t.3Z(x)}}if(o.5u){o.4B.3Z(x)}};G.nx=E(){I R?R.nx():P};G.5B=E(){I R?R.5B():P};G.7h=E(){I g2};G.7t=E(){I iO};G.1b=E(){B x=0;if(R){x=4F();if(o.5u){B y=o.4B.4F();y?x=y:\'\'}F{if(3V()>0&&x!=3V()){o.KJ=x+0.X7}}I x}F{I 0}};G.1p=E(){B x=0;if(R){x=3V();x==0&&J(v.1p)?x=v.1p*1:\'\';if(o.5u){B y=o.4B.3V();y?x=y:\'\'}}I x};G.ak=E(){I R?R.ak():0};G.g7=E(){o.3M.g7=o.3M.g7?P:H;O(o.3N,{"2J":(o.3M.g7?"3u(-1)":"3u(1)")})};G.X8=E(){tI()};G.tK=E(){if(o.4Q){R.4T()}};G.Hh=E(x,y){if(x==\'1P\'){if(y==1){dw(v.1j.1P/100)}if(y==2){dw(-v.1j.1P/100)}if(y==3){o.R.iI()}}F{if(o.4Q){if(!o.aA[x]){if(x==\'qk\'){o.aA[x]=0}F{o.aA[x]=1}}if(y==1){o.aA[x]+=v.1j[x]/100}if(y==2){o.aA[x]-=v.1j[x]/100}if(y==3){if(x==\'qk\'){o.aA[x]=0}F{o.aA[x]=1}}!o.iJ?o.iJ=[]:\'\';o.iJ[x]=x+\'(\'+2P(o.aA[x]*100)+\'%) \';B cf=\'\';W(B i in o.iJ){cf+=o.iJ[i]}O(R.av(),{\'6a\':cf});o.S.mE(x)}}};G.1P=E(x){dw(x)};E dw(x){if(6v(x).K(":")>0){B y=x.2D(":");B z0=o.2Z/o.4t;B z1=o.R.3T();if(z1.17>0){z0=z1.17/z1.1e}B z=y[0]/y[1];if(z0!=z){if(o.4Q){R.fo()}B w2=o.4t*z;B x2=w2/o.2Z;B h2=o.2Z/z;B y2=h2/o.4t;if(x2<1){o.3M.x0=o.3M.x=3Q(x2);o.3M.y=1}F{o.3M.x=1;o.3M.y0=o.3M.y=3Q(y2)}O(o.3N,{"2J":"3u("+o.3M.x+") 3q("+o.3M.y+")"});o.jk=x}}F{o.3M.x+=3Q(x);o.3M.y+=3Q(x);O(o.3N,{"2J":"3u("+o.3M.x+") 3q("+o.3M.y+")"})}if(v.1W.XA==1){if(!o.tV){if(o.3M.x>0||o.3M.y>1){u1(o.3N,\'o.Xb\');o.tV=H}}uc()}o.S.mE(\'1P\')};G.iI=E(){if(o.4Q){R.fo()}o.3M.x=o.3M.x0;o.3M.y=o.3M.y0;O(o.3N,{"2J":"3u("+o.3M.x+") 3q("+o.3M.y+")"});o.S.mE(\'1P\');o.jk=1Z;uc()};E uc(){if(o.tV&&v.1W.XB!=1){if(o.3M.x==1&&o.3M.y==1){O(o.3N,{"1f":0,"1c":0})}}};G.fP=E(x,y){R.fP(x,y)};G.cU=E(){I cU()};E cU(){I 46?(46.U>0?(46[8r]?46[8r]:\'\'):\'\'):\'\'};G.Hq=E(){I 46.U};G.av=E(){I R?R.av():P};G.6E=E(){if(o.4Q){R.6E()}};G.uZ=E(){R.uZ()};E sT(){B 51=fh(v.sW+\'?18=\'+46[8r]);51.cZ=E(){if(G.fn==4&&G.7h==4z){if(G.dy){v.1I=G.dy;o.X.9R(\'1I\')}}};51.bd()}};B Gq=E(18,1J,2h){B 1g=1Q(v.g0==1?"Gm":"fj");B cT;B sz=0;B 1H;B 4W=P;B rX=P;B uv=P;B 9V=P;B fC=-1;B 3W;B 6V=P;B ws;B un=P;B 6A=P;o.5H=P;B 8I=0;B 9F=P;B 2q;B Y3;B n9=P;B iG=-1;B cd=-1;B sj;B ut;B 9P;B j4;B Y5;B Hk=\'fj/zw; Y6="Y7.Y8, Y9.40.2"\';B n1=P;O(1g,{\'1l\':\'o7\',\'17\':\'100%\',\'1e\':\'100%\',\'3U-mi\':\'yo\',\'4I\':"6a 0.2s 3e",\'9A-1e\':\'2y\',\'5N-1e\':\'1U\',\'9A-17\':\'2y\',\'5N-17\':\'1U\'});fo();if(o.1m.7S&&v.3n==1&&v.vd==1){if(!o.1E&&v.7y){4i(1g,{\'kr\':1})}F{o.3B=H;o.S?o.S.5p():\'\';4i(1g,{\'3B\':1,\'kr\':1,\'3n\':1})}}F{if(o.1m.2n){4i(1g,{\'kr\':1})}if(!o.1m.tv){4i(1g,{\'4T\':(v.4T==1?\'8m\':\'1U\')})}}if(v.Ya==1){4i(1g,{"Yb":"GJ","Yc":"GJ"})}4i(1g,{\'3h\':18,\'x-3K-6m\':\'Ey\',\'GI\':\'H\'});if(v.Yd!=1){4i(1g,{\'GI\':\'H\'})}if(v.Ye==1){4i(1g,{\'2h\':\'P\'})}if(2h){1g.3n=H;if(v.2h.ge!=1||v.3n==1){1g.3B=H}F{1g.1L=2E(v.2h.1L)?v.2h.1L:v.1L}}if(v.Y4==1){4i(1g,{\'Yf\':\'Yh\'})}uh();if(v.Yi==1){B eq=1Q("eG");4i(eq,{"F9":"no","Ew":"H","Ex":"H","3h":""});O(eq,{"1l":"2m","17":"100%","1e":"100%","2Y":0});1J.1N(eq);B IF=1S.7d(E(){if(eq.i2.22.fn==="Yj"){1S.3S(IF);O(eq.qL.3P,{"2V":0,"2M":0});eq.qL.3P.1N(1g)}},100)}F{1J.1N(1g)}if(!J(18)){18=\'\'}B tu=P;if(o.1m.tv){if(18.K("Yk")>0){tu=H}}if(18.K(".IC")>0){6A=H;if(!o.3W){if(1O IB!=="1M"){o.3W=1z IB()}F{6A=P}}if(J(o.3W)){if(!J(1S.J1)){o.3W.qj()}F{v4()}}}F if(((2Q.1H==1&&v.tr!=1)||18.K(".Ix")>0)&&!tu&&(o.gs.K("8B")!=-1||J(1S.5q))){4W=H;rX=H;3w{if(J(1S.5q)){if(!5q.It()||(o.1m.7l&&v.Yl==1&&!o.1m.5x)||(o.1m.7l&&o.1m.5x&&v.Iw==1)||(o.1m.qu&&v.Ym==1)){1w(\'8B Yn \',5q.It());4W=P}F{if(v.4T==1||v.3n==1||v.Is==1||2h){e7(P)}}}F{4W=P}}2X(2q){4W=P}}F if(18.K("w")==0&&18.K("s")==1&&v.Yo==1){9F=H;uS()}if(o.1m.tv&&v.3n==1&&!4W&&!6A&&!9F){1G(E(){o.X.dH()},100)}if(v.7Z==1){J(o.7Z)?o.7Z.ar():\'\';o.7Z=1z Yp()};G.uZ=E(){v4()};E v4(){6A=H;if(sy()){if(v.4T==1||v.3n==1||v.J3==1){nw(P)}}F{6A=P;1w("Yq hc Kg")}}E nw(x){if(o.3W&&!6V){o.3W.gD(x,1g,18,2h);J(1S.J1)?6V=H:\'\'}}E e7(x){1w("8B");if(o.4p.U>1){v.9o=0;v.IV=H}F{v.IV?v.9o=1:\'\'}if(o.aQ.U>1){v.cs=0;v.IT=H}F{v.IT?v.cs=1:\'\'}o.9P=P;fC=-1;9P=[];o.3F?o.3F.IS():\'\';B vo=P;if(v.7y&&v.IO==1){vo=H;v.IO=0}cT={JO:(v.IL==1&&!2h),Yr:(v.4T==1||v.3n==1||2h||x)&&!vo,hq:60,ux:60,Yg:(v.HV>0?v.HV*2p:HR),Y2:(v.HT>0?v.HT*2p:HR),XP:P};if(v.Y1==1){cT.XE=H}if(v.hf==1){B ks=[\'fp\',\'wv\',\'pr\',\'ck\'];B qa=[\'7R.XF.13b\',\'7R.XH.g9\',\'7R.XI.XJ\',\'4a.w3.XK\'];B dj={};W(B i=0;i<ks.U;i++){if(v[\'hf\'+ks[i]]==1){dj[qa[i]]={};if(2E(v[\'hf\'+ks[i]+\'l\'])){dj[qa[i]].XL=v[\'hf\'+ks[i]+\'l\']}if(2E(v[\'hf\'+ks[i]+\'s\'])){dj[qa[i]].XM=v[\'hf\'+ks[i]+\'s\']}}}cT.XN=H;cT.XD=dj}if(v.Gh==1){cT[\'XO\']=E(51,18){51.XQ=H}}if(J(v.6J)){if(J(v.6J.hq)){if(v.6J.hq>hu){v.6J.hq=hu}v.6J.ux=v.6J.hq}if(J(v.6J.HW)){v.6J.ux=v.6J.hq=v.6J.HW}if(1O v.6J=="3U"){W(B 1d in v.6J){if(v.6J[1d].6q().K(\'2o:\')==0){v.6J[1d]=2o(v.6J[1d].1q(5))}cT[1d]=v.6J[1d]}}}1H=1z 5q(cT);js("1H",1H,1);1H.Lm(18);1H.XR(1g);1H.on(5q.7q.XS,E(){1w("8B XT")});1H.on(5q.7q.XU,E(1h,2c){!2h?o.X.dH():\'\'});1H.on(5q.7q.XV,E(1h,2c){if(!2h&&v.9o==1&&au()>1){Ht();qx();o.S?o.S.hT(o.3r):\'\'}});1H.on(5q.7q.XW,E(1h,2c){qx()});1H.on(5q.7q.XX,E(1h,2c){qx()});1H.on(5q.7q.XZ,E(1h,2c){if(!2h){if(2c.ih.5H!=o.5H){o.5H=2c.ih.5H;o.S.4U()}o.5H=2c.ih.5H;if(o.5H){1w("Y0");o.Iy=18.K("?xf")>-1;if(1g.1p>0&&1g.c8>0){if(1g.1p-1g.c8<10){if(o.i6>0){if(o.i6==1g.c8&&o.HG==1g.1p){o.ql++;if(o.ql>2){o.ql=0;o.i6=-1;1H.a2();e7(H);8M()}}F{o.i6=-1}}F{o.i6=1g.c8;o.HG=1g.1p}}}}}if(v.9o==1){o.3r=1H.mM;o.S?o.S.hT(o.3r):\'\'}mO()});1H.on(5q.7q.XC,E(1h,2c){if(J(2c.i4)){!2h?js("WK",2c.i4.VU):\'\';if(v.WJ==1){1O GK!=="1M"?GK(2c.i4):\'\'}}if(fC>-1){1H.Ih=fC;fC=-1}uv=H;K2()});1H.on(5q.7q.Vw,E(1h,2c){js("Vx",2c,1)});1H.on(5q.7q.Vy,E(1h,2c){if(!2h&&v.cs==1){1G(rb,4c)}});1H.on(5q.7q.Vz,E(1h,2c){if(!2h&&v.cs==1){qS()}});1H.VA=P;if(v.VB==1){1H.on(5q.7q.VC,E(1h,2c){if(1O(2c)=="3U"){if(2c.i4.1K==\'28\'){B fu=2c.i4.18;if(fu){B st=1H.Hx;if(o.5k){o.3F.uF(st+\'d9\'+fu)}F{!9P[st]?9P[st]=[]:\'\';9P[st].2L(fu)}}}}});1H.on(5q.7q.VD,E(1h,2c){B x=1H.VE;B y=\'\';W(B i=0;i<x.U;i++){y+=(y!=\'\'?\',\':\'\')+\'[\'+x[i].6H+\']1H\'+i;x[i].7C?o.qi=x[i].6H:\'\'}3y("28",y)})}1H.on(5q.7q.VF,E(1h,2c){v.1w==1?e5.1w(2c):\'\';js(2c.1K+\'5q\',2c,0,H);o.vt=2c;if(2c.qe){b3(2c.1K){1o 5q.L9.Vv:1w("8B qe s7 2q");if(v.s5==1){uX()}F{2q=2c.ih+\' (\'+2c.1K+\')\';o.2e>0||2h||v.5H==1||9F?\'\':o.2e=4F();1H.a2();if(!2h){o.R.6l()}}1k;1o 5q.L9.VG:1w("8B qe R 2q, ic");1H.VI();1k;7C:2q="8B qe 2q, a2";1H.a2();!2h?o.R.6l():\'\';1k}}F{1w("8B ",2c.1K,2c.ih,(2c.pW?2c.pW.q7:\'\'));js("VJ",(2c.pW?2c.pW.q7:\'\'));if(8I>0){8I=2;ri()}}});9V=H}E qx(){if(!2h&&v.9o==1&&au()>1){if(o.3r!=1H.mM){o.3r=1H.mM;o.S?o.S.hT(o.3r):\'\';1w("8B VK "+o.3r)}if(2E(v.cR)&&o.3r>0){B fq=v.cR.2D(",");W(B k=0;k<fq.U;k++){if(o.2G[o.3r].K(fq[k])>-1){1w(\'VL 5d\');1H.lj=o.3r-1;o.3r--;1k}}}}}E uS(){if(J(1S.JV)){if(sy()){if(!J(o.ws)){o.ws=1z VM()}ws=1z JV(1g,18,2t(v.VN,{JO:H}));un=H}F{9F=P;1w("hc Kg")}}}E K2(){qH()};G.6E=E(){qH()};E qH(){if(v.Im&&o.S){if(1g.gb.U>0){if(v.6E==1){1g.gb[1g.gb.U-1].jl="H1"}F{1g.gb[1g.gb.U-1].jl="3g"}if(!o.6E){o.6E=H;o.S.4U()}}F{if(o.6E){o.6E=P;o.S.4U()}}}}E uX(){1w("VO");!2h&&o.1A?o.X.3l():\'\';o.X.8A();8I=1;ri(o.1A)}E ri(x){if(8I>0){2N(sj);sj=1G(Kp,v.KY*2p)}}E Kp(){if(8I>0){1w("VP");if(4W){if(8I==1){1H.Lm(18)}if(8I==2){1H.a2();e7(H);1g.1A()}}F{4i(1g,{\'3h\':18})}}}1g.1y(\'VQ\',K0);1g.1y(\'2q\',rh);1g.1y(\'7t\',8M);1g.1y(\'1A\',a5);1g.1y(\'4x\',dX);1g.1y(\'HI\',df);1g.1y(\'jX\',jS);1g.1y(\'ne\',k1);1g.1y(\'KO\',db);1g.1y(\'KQ\',dC);1g.1y(\'8a\',9p);1g.1y(\'Kl\',a9);1g.1y(\'VR\',KF);1g.1y(\'Kk\',qE);1g.1y(\'Ld\',qJ);if(o.1m.7S){1g.1y(\'VH\',ir)}E K0(){if(!4W&&!6A){!2h?o.X.dH():\'\'}}E ir(){if(1g.Vt){o.X.gn()}}E rh(){if(!4W&&!6A){if(1g.2q){1w(1g.2q,1g.2q.q7,1g.2q.9Y);B x=1g.2q.q7;2q=1g.2q.9Y;if(2q==\'\'){if(x==1){2q="Vh"}if(x==2){2q="s7"}if(x==3){2q="eg"}if(x==4){2q="hc pJ"}}1w("Vs im: ",2q)}if(rX&&v.s5==1){2q=1M;uX()}if(2q!=1M||o.1m.5x){6l()}}}E 6l(){!2h?o.R.6l():\'\'}E 8M(){if(!2h){o.R.8M()}F{if(v.2h.9C==1){1g.c8=0;1g.1A()}}}E a5(){if(!o.1E&&v.7y){1w(\'Jj 1A\');4x();o.X.2H();I}if(4W&&8I>0){}F{if(!2h){B ba=o.X.8x()&&o.nH!=1;if(ba||cd==-1){B x=P;if(4W){if(J(o.29)||J(o.5P)){if(ba){}F{1w(\'4x hO\');4x();x=H}}}if(!x){o.R.a5()}}}}}E dX(){if(!n1){1w("V6");if(o.1A&&o.g6&&!1g.7t&&v.JD==1&&!o.ao){1w("JD");j6()}F{!2h&&!o.JB&&1g.8q?o.R.dX():\'\'}}}E df(){!2h?o.R.df():\'\';if(cd>-1){if(4F()>cd){4x();cd=-1}}}E jS(){!2h?o.R.jS():\'\'}E k1(){!2h?o.R.k1():\'\'}E db(){if(2h){nk()}F{o.R.db();tM();if(4W&&8I>0){8I=0;1w("V7 up");1H.IP();j6();o.S.2H()}if(J(v.9c)){2C()}1G(L1,4c)}}E L1(){if(1g.d8&&o.7B.U==0&&v.V8!=0){B at=1g.d8;W(i=0;i<at.U;i++){B x=o.R.rl((at[i].7U?at[i].7U+\' (\':\'\')+at[i].V9+(at[i].7U?\')\':\'\'),i);if(x==v.aO){o.7E=o.az=i}o.7B[i]=x}o.S.mS(o.az)}if(o.az>0){gZ(o.az,1)}};G.9c=E(){I(1g.mw/1g.fL)};E nk(){if(1g.fL>0){O(1J,{"1e":1J.2b/(1g.mw/1g.fL)-2P(v.2h.2Y)})}F{if(sz<20){1G(nk,100);sz++}}}E tM(){if(v.pH==1){3S(o.sK);o.sK=7d(sD,100);sD()}}E sD(){if(1g){if(1g.fL>0){o.X.Kx(1g.mw/1g.fL);3S(o.sK)}}}E a9(){!2h&&!9F?o.R.a9():\'\'}E dC(){!2h?o.R.dC():\'\'}E 9p(){if(4W&&8I>0){}F{!2h?o.R.9p():\'\'}}E KF(){o.X.sM()}E sy(){B lV=1S.H9=1S.H9||1S.Va;B ik=1S.H5=1S.H5||1S.Vb;B lN=lV&&1O lV.lN===\'E\'&&lV.lN(Hk);B HB=!ik||ik.sg&&1O ik.sg.Vc===\'E\'&&1O ik.sg.6s===\'E\';I lN&&HB}B qI="<7x C=\'1C:0.5\'>";E Ht(){if(!2h&&v.9o==1){B x=1H.6I;B q=-1;o.2G=[];if(x.U>1){W(B i=0;i<x.U;i++){if(J(x[i].1e)){B y=o.R.Hs(x[i],v.Gi);if(o.2G.K(y)>-1||v.Vd==1){if(J(x[i].aF)){B yi=o.2G.K(y);yi>-1?o.2G[yi]+=" "+qI+" &dP;"+2P(x[yi].aF/2p)+\' \'+2R(\'gV\')+\'</7x>\':\'\';o.2G[i]=y+" "+qI+" &dP;"+2P(x[i].aF/2p)+\' \'+2R(\'gV\')+\'</7x>\'}}F{o.2G[i]=y}if(J(x[i].GH)){o.aI[i]=x[i].GH[0]}}F if(J(x[i].6H)){o.2G[i]=x[i].6H}F{o.2G[i]=i}if(J(v.53)&&q==-1){if(v.53==o.2G[i]){q=i}}if(J(o.53)){if(o.53==o.2G[i]){q=i}}}if(v.hY==1){o.2G[x.U]=2R("2y")}F{1H.IZ=0;1H.fy=0}if(v.GF==1||q>-1){1H.fy=0;if(v.kW=="6S"||(!o.1E&&v.4T==0)){1H.v1=q}F{if(v.kW=="fA"){1H.lj=q}}o.3r=q}F{if(v.hY==1){o.3r=1H.6I.U-1}F{o.3r=1H.Ve}}if(v.Iu>0){1H.fy=x.U-v.Iu*1-1}mO()}o.aF=2t(1H.6I[o.3r].aF,0);o.S?o.S.4U():\'\'}}E mO(){if(v.cs==1){rb();qS()}}E rb(){if(!2h&&v.cs==1){B x=1H.d8;o.7B=[];B 2K;B 26=-1;if(x.U>1){W(B i=0;i<x.U;i++){2K=P;if(J(x[i].gv)&&o.aI.U>0){if(x[i].gv!=o.aI[o.3r]){W(B j=0;j<o.aI.U;j++){if(o.aI[j]==x[i].gv){2K=H}}}}if(!2K){o.7B[i]=J(x[i].6H)?o.R.rl(x[i].6H,i):i;if(J(v.aO)){if(v.aO==o.7B[i]){26=i}}}}}}if(26>-1){o.7E=26;1H.mU=26}}E qS(){if(!2h){B x=1H.d8;B y=1H.mU;if(y>-1){if(J(x[y].gv)){if(o.aI.U>0){if(o.aI[o.3r]!=x[y].gv){W(B i=0;i<x.U;i++){if(x[i].6H==x[y].6H&&x[i].gv==o.aI[o.3r]){1H.mU=i;y=i;1k}}}}}o.7E=y;1w("8B Vf",o.7E);o.S.mS(o.7E)}}};G.gZ=E(x,y){gZ(x,y)};E gZ(x,y){if(1g.d8.U>1){1g.d8[x].ub=H;1g.d8[y==1?0:o.az].ub=P;o.az=x;y!=1?1g.c8=o.R.1b():\'\'}}E 4F(){if(6A){I 6V?o.3W.1b():0}F{I 1g.c8}};E 3V(){B x=1g.1p;if(x==V5){v.5H=1;x=4F()+10;if(o.9u){x<o.9u?x=o.9u:\'\'}o.9u=x}if(6A&&6V){x=o.3W.1p()}if(J(v.4H)){if(7c([v.4H],\'-\')){x=x+v.4H*1}F{x=v.4H}}I!uw(x)?x:0}G.2H=E(){B p=H;if(4W&&!uv){if(!9V){e7(H)}1H.IP()}if(6A&&!6V){nw(H);p=P}if(9F){if(!un){uS()}ws.1A();p=P}if(1g.C.1f=="-Vg"){G.gl()}p?j6():\'\'};B Vi;E j6(){if(18!="1U"){B pp=1g.1A();if(pp!==1M){pp.bU(E(){}).2X(E(2q){1w("Vj",2q.9Y);if(2q.9Y.K(\'de\')==-1&&2q.9Y.K(\'Vk by\')==-1){if(v.vd==1){1w(\'Vl\');o.X.5p();1g.1L=0;B vb=1g.1A();if(vb){vb.bU(E(){}).2X(E(e){1w("Vm",e.9Y);if(o.1m.tv&&(4W||6A)){}F{o.S.3l();o.X.8A();js("Vn")}})}}F{o.S.3l();o.X.8A()}}})}}}G.nb=E(){if(o.5P||o.29){if(o.9r){ds()}if(!o.jq&&o.1m.2n&&o.1m.3K){if(!1g.3B){1g.3B=H;n9=H}O(1g,{"1l":"2m","1c":-4d,"1f":-4d});cd=4F();if(!9F){1g.1A()}if(cd==0&&o.2e>0){j4=o.2e}}}};G.gl=E(){if(!o.jq&&(o.1m.2n||o.1m.3K)){O(1g,{"1l":"o7","1c":0,"1f":0});if(J(v.9c)){2C()}if(n9){!o.3B?1g.3B=P:\'\';n9=P}if(j4>0){o.2e=j4;j4=0}cd=-1}};G.3l=E(){1w(\'8q\');4x()};E 4x(){if(9F){ws.4x()}F{1g.4x()}};G.8N=E(){!1g.8q?3l():j6()};G.3Y=E(x){if(6A&&6V){o.3W.4h(x)}F{if(4W){if(v.Vo==1&&x>0&&tO()){fC=1H.lj;1H.Ih=0}}1g.c8=x}};G.5p=E(){1g.3B=H};G.6z=E(){1g.3B=P;if(o.2r=="1H"&&o.1m.5x&&v.29==1){if(!J(o.Ik)){n1=H;1g.4x();1G(E(){1g.1A();n1=P},10);o.Ik=H}}};G.3Z=E(x){1g.1L=x};G.Il=E(){if(o.HU!=1g){B de;B 9s;if(o.ng[1g]){de=o.ng[1g];9s=o.tW[1g]}F{1S.n0=1S.n0||1S.Vp;if(J(1S.n0)){3w{9s=1z n0();de=9s.Vq(1g);o.ng[1g]=de;o.tW[1g]=9s}2X(e){1w(e)}}}if(9s){B iP=9s.Vr();iP.iP.5Y=v.HN;de.HO(iP);iP.HO(9s.VS);o.tJ=H;o.HU=1g}}};G.nx=E(){I!1g.8q};G.5B=E(){I v.5H==1||9F?H:o.5H};G.av=E(){I 1g};G.uI=E(){4i(1g,{\'S\':\'1\'});I H};G.4T=E(){4i(1g,{\'4T\':\'8m\'});if(4W&&!9V){e7(P)}if(6A&&!6V){nw(P)}};G.7h=E(){B 7n="8b";if(1g.8q){7n="8q"}if(1g.7t){7n="7t"}I 7n};G.tD=E(x,y){2h=x;y.1N(1g);1J=y;if(x){if(v.2h.ge!=1){1g.3B=H}F{if(!o.3B){1g.3B=P}}nk();if(o.2G.U>0){if(4W){iG=o.3r;1H.fy=0;1H.lj=0}}}F{if(!o.3B&&v.2h.ge!=1){1g.3B=P}1g.1L=2E(v.2h.1L)?v.2h.1L:v.1L;tM();if(o.2G.U>0){if(4W){1H.fy=-1;if(iG>-1){iG<1H.6I.U?1H.v1=iG:\'\'}}}}};G.1b=E(){I 4F()};G.1p=E(){I 3V()};G.ak=E(){B x=0;if(1g.8E){if(1g.8E.U>0){B y=4F();W(B i=0;i<1g.8E.U;i++){if((y>=1g.8E.1E(i)||y>=1g.8E.1E(i)-100)&&y<=1g.8E.4H(i)){x=1g.8E.4H(i)}}x==0?x=1g.8E.4H(1g.8E.U-1):\'\'}}if(J(v.4H)){B ed=v.4H;if(7c([ed],\'-\')){ed=3V()}x>ed?x=ed:\'\'}I x};G.2y=E(){I tO()};E tO(){B x=P;if(4W){if(9V){x=1H.IZ}}F if(6A){if(6V){x=o.3W.2y()}}I x}G.3T=E(){I{"17":1g.mw,"1e":1g.fL}};G.3h=E(x){if(x){x=x.1V(/\\(5M\\)/g,2I.5M());18=x;o.aW!=2?o.aW=P:\'\';if(6A){if(6V){o.3W.de(x)}}F if(4W){4W&&1H?1H.a2():\'\';e7(H);ty()}F{4i(1g,{\'3h\':x,\'3n\':0});uh();4x()}}};E uh(){if(o.1m.7l){B y=1g.gb;if(y){W(B i=0;i<y.U;i++){y[i].jl="Vu"}}y=1g.d8;if(y){W(i=0;i<y.U;i++){y[i].ub=(i==0?1:0)}}if(1S.VT){1g.1y(\'Wk\',E(1h){o.6m=1h.Wm=="Wn";!2h?o.X.hM():\'\'});1g.1y(\'Wo\',E(1h){})}}ty();if(v.tT==1){1O Ip!=="1M"?Ip(18,1g,1J):\'\'}}G.6m=E(){1g.Wp()};G.96=E(){ds()};E ty(){if(o.1m.3K){if(J(1g.Wq)&&!o.1m.7S){o.96=H}if(22.Wr&&!1g.Ws){o.96=H}}}E ds(){if(o.1m.7l){if(1g.Wt==="mN-in-mN"){1g.GG("d5");o.9r=P}F{1g.GG("mN-in-mN");o.9r=H}}F{if(!22.Wu){2o(\'1g.Wv().bU(p => {o.9r = H;}).2X(2q => {o.9r = P;});\')}F{2o(\'22.Wl().bU(ok =>{o.9r = P;}).2X(2q => {});\')}}};E qE(){o.9r=H};E qJ(){o.9r=P};G.GE=E(x){if(6V){o.3W.tg(x)}};G.GP=E(x){if(6V){if(1g.8E.U>0){o.3W.Ww(x)}}};G.Wy=E(x){if(o.ws){o.ws.GS(ws,x,-1)}};G.Wz=E(x){if(o.ws){o.ws.GS(ws,-1,x)}};G.GT=E(x){if(9V){B y=2P(x);if(x==1H.6I.U){y=-1;1H.fy=-1}if(v.kW=="fA"){1G(9p,4c);1H.lj=y}if(v.kW=="6S"){1w("8B 6S WA "+y);1H.v1=y}if(y==-1){o.3r=1H.mM}mO()}};G.mP=E(){I 1H};G.mL=E(){I 6V?o.3W.WB():P};G.au=E(){I au()};E au(){B x=0;if(9V){if(1H.6I){x=1H.6I.U}}I x}G.cH=E(){I cH()};G.fo=E(){fo()};E fo(){if(1g){if(v.mh==1||v.5g==1){if(v.WC==1||v.5g==1){O(1g,{\'3U-mi\':\'5g\'})}F{O(1g,{\'3U-mi\':\'AJ\'})}}F{O(1g,{\'3U-mi\':\'yo\'})}}}G.4Y=E(){2C()};E 2C(){if(v.9c){3y(\'1P\',6v(v.9c).1V(\'/\',\':\'))}}E cH(){B x=0;if(6V){x=o.3W.6I()}I x}G.Hl=E(x){if(9V){1H.mU=2P(x)}};G.fP=E(x,y){if(y=="1H"&&9V&&ut){ut.WD(x)}if(y=="Hr"&&9V){if(9P[x]&&o.3F){W(B i=0;i<9P[x].U;i++){o.3F.uF(9P[x][i])}}1G(E(){1H.Hx=x},4c)}if(y=="3W"&&6V){o.3W.WE(x)}};G.g4=E(x){if(x){1g.WF=x}};G.uK=E(){B x=1g.jx;B y=[];W(B i=0;i<x.U;i++){if(x[i].h4.lW()==\'8X\'){x[i].5K("h7",qX);y.2L(x[i])}}W(B i=0;i<y.U;i++){1g.3p(y[i])}o.uM=P};G.Hw=E(x,y,z){if(x!=\'\'){if(x.K(\' or \')>0){B xx=x.2D(\' or \');x=xx[0]}B 8X=22.1Q(\'8X\');8X.6g(\'3h\',x);8X.6g(\'7U\',y);8X.6g(\'WG\',\'uR\');8X.6g(\'jl\',\'H1\');if(z){8X.6g(\'7C\',\'\')}1g.1N(8X);8X.1y("h7",qX)}};E qX(e){if(e.41.7U&&o.3F){W(B i=0;i<o.3i.U;i++){if(o.3i[i]==e.41.7U){o.3F.9e(i)}}}};G.jw=E(){I 2q?2q:\'\'};G.4n=E(){3S(o.WH);4W&&1H?1H.a2():\'\';6A&&6V?o.3W.WI():\'\';9F&&ws?ws.2K():\'\';1g.5K(\'2q\',rh);1g.5K(\'7t\',8M);1g.5K(\'1A\',a5);1g.5K(\'4x\',dX);1g.5K(\'HI\',df);1g.5K(\'jX\',jS);1g.5K(\'ne\',k1);1g.5K(\'KO\',db);1g.5K(\'KQ\',dC);1g.5K(\'8a\',9p);1g.5K(\'Kl\',a9);1g.5K(\'Kk\',qE);1g.5K(\'Ld\',qJ);1g.3h=\'\';if(1J.h4=="Aq"){1J.qL.3P.3p(1g)}F{1J.3p(1g)}1g=1Z}};B yl=E(){B b=[];B g1=[];B 5E=[];B 8a=P;B mK;B 7N=P;B 1j;B Y;if(o.4P){o.4P.1n();o.4P=1Z}B nn;o.6f=[0.25,0.5,0.75,1,1.25,1.5,2];if(v.1j.Wx==1&&J(v.1j.jV)){v.1j.jV=v.1j.jV.1V(/\\n/ig,\'\');o.6f=v.1j.jV.2D(",")}o.e8=7c(o.6f,1,H);o.ah==3?o.ah=o.e8:\'\';W(B i in o.5W){if(o.5W.2w(i)){!J(v.1j[i])?v.1j[i]=5:\'\';o[\'e1\'+i]=[\'+ \'+v.1j[i]+\'%\',\'&Wj; \'+v.1j[i]+\'%\',(o.5W[i]*100+\'%\')]}}if(v.1u.du==1&&o.1m.5x&&v.gQ==1){v.1u.1n=0}B lA=P;B 9n=0;B lT=0;B gS=P;B zc=H;B k7;B bg=1z vu();B 1j;B 5y=[];B rv=P;B sc=P;B kl=0;B bO=[];if(v.fM.1l=="S-2k"){v.fM.1l="S"}W(B y in v){if(v.2w(y)){if(y.K("aD")==0&&v[y]){!J(v[y].qO)?v[y].qO=v[y].5y:v[y].5y=v[y].qO;if(5y[v[y].5y]){v[y].5y+=v[y].5y}5y[v[y].5y]=y;if(v.fM.1l!="S"){if(v[y].1l=="S-2k"){bO.2L([y,v[y].5y]);rv=H}F{if(v[y].1l=="S"||v[y].1l==1M){rv?sc=H:\'\'}}}kl<v[y].5y?kl=v[y].5y:\'\'}}}if(sc){bO.Kj(E(a,b){I a[1]-b[1]});W(B i=0;i<bO.U;i++){5y[v[bO[i][0]].5y]=1Z;v[bO[i][0]].5y=kl+1;kl++;5y[v[bO[i][0]].5y]=bO[i][0]}}if(v.1u.1n==1&&v.1u.ec==1){o.1u=1Q("1Y");o.1T.1N(o.1u);O(o.1u,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1e\':\'100%\',\'4I\':\'1f 0.3s 5l-4m\',\'4k-3c\':\'1U\'})}B 7O=1Q("1Y");if(v.1u.1n==1&&v.1u.ec==1){o.1u.1N(7O)}F{o.1T.1N(7O)}B aX;if(v.1u.W7==1){aX=1z vu(H)}O(7O,{\'1l\':\'2m\',\'1c\':0,\'2O\':0,\'17\':\'100%\',\'1e\':v.1u.h});7O.gB=E(){!o.1m.2n?o.X.Jz():\'\'};if(v.yh==1){3k(bg.c());3k(7O)}W(B i=1;i<5y.U;i++){if(5y[i]){B y=5y[i];if(y){B 1i=v[y].1i;B Wi=v[y].1n;if(o.1m.2n){if(1i=="1L"&&v[y].7V=="5m"){}F{if(1i=="1L"&&v.VW==1&&o.1m.2n){v[y].hx=0}F{if(1i=="1L"||(1i=="2a"&&v.VX)){v[y].on=0}}}if(1i=="b5"){v[y].VY==1?v[y].on=0:\'\'}}F{if(1i=="b5"){v[y].VZ==1?v[y].on=0:\'\'}}if(v[y].1n==1){if(v[y].Hd==1&&J(v[y].n6)){2Q[v[y].n6]?v[y].on=0:\'\'}if(v[y].Hc==1&&J(v[y].mX)){!2Q[v[y].mX]?v[y].on=0:\'\'}}if(v.yh==1){v[y].on=0}if(v[y].on==1){if(1i=="2F"||1i=="1L"){b[y]=1z KH(y,1i);b[y].2C(b[y].s("w"))}F{b[y]=1z HP(y)}g1.2L(y);if(b[y].g("1i")=="1I"){if(b[y].s("1F")==\'\'){if(b[y].s("B")!=\'\'){if(!J(v[b[y].s("B")])){b[y].26("2l",P)}}F{b[y].26("2l",P)}}}if(b[y].g("1i")=="59"){B lu=b[y].s("3m");if(lu){if(lu.K("3z:")==0&&lu.K(",0/1")>0){B z=lu.2D(",");3y(z[0].1q(4))==0?b[y].cV(0):\'\'}if(7c([lu],"2U")){o.gR=H}}}b[y].26("1P",b[y].s("1P"))}}}}if(J(v.1j)){if(1O(7M)==\'E\'){1j=1z 7M("1j");v.1j.8f==1?1j.1t():1j.1n()}F{o.W0=H}}if(J(v.Y)){if(1O(7M)==\'E\'){Y=1z 7M("Y");if(J(o.Y)){Y.ze(o.Y);if(v.Y.lE==0||!J(v.Y.lE)){v.Y.8f==0?Y.1n():\'\'}F{Y.1t()}if(v.Y.JG==1){Y.1t()}}F{Y.1n(1)}hI()}}m7();yL();2C(H);4M();wr();zc=P;E Kc(V){B x=0;B W1=P;if(V){if(V.g("1i")==\'2F\'){x=5E.1c+V.s("4o")+V.g("17")/2;if(5E.gT!=1Z){}F{5E.gT=[]}}F{if(5E.gT!=1Z){B cB=V.g("17")+V.s("4q")+V.s("4o");if(fe(V)){cB=0}if(V.s("3g")==1&&!V.g("1t")){cB=0}if(V.s("bm")>0){cB=0}x=bg.g("w")-v.1u.l7*1-cB+V.g("17")/2+V.s("4o");B i=0;5E.2k-=cB;W(i=0;i<5E.gT.U;i++){B cz=b[5E.gT[i]];if(cz.s("bm")>0){O(cz.c(),{"1c":(cz.g("x0")-cB)})}F{O(cz.c(),{"1c":(cz.g("x")-cB)})}cz.26("x0",cz.g("x"))}5E.gT.2L(V.g("1d"));V.26(\'gr\',1)}F{if(V.s("3g")==1&&!V.g("1t")&&!V.g("g5")){if(V.g("1i")=="1L"){if(V.s("1n")==1&&V.s("hx")==1&&gS){9n+=V.g("17")+V.s("4o")+V.s("4q");gS=P}}}F{if(V.s("bm")>0){x=5E.1c+V.s("4o")+V.s("4q")}F{B 2K=P;if(V.g("1i")=="1L"){if(V.s("1n")==1&&V.s("hx")==1&&!V.g("g5")){if(!o.eR&&!o.9z){2K=H;gS=P}F{if(!gS){9n-=V.g("17")+V.s("4o")+V.s("4q");gS=H}}}}if(fe(V)){2K=H}if(!2K){5E.1c+=V.g("17")/2+V.s("4o");x=5E.1c;5E.1c+=V.g("17")/2+V.s("4q")}F{x=5E.1c}}}}}}I x};G.K6=E(){m7();if(Y&&v.Y.8f&&!o.1E){Y.1t()}};G.Ge=E(){m7()};E m7(){if(o.gR){1O K7==\'E\'?o.2U=1z K7():\'\'}}E z8(V){B 17=o.2a&&v.1u.jO==0?o.bo:o.2Z;B 1e=o.4t;B b6=0;if(V!=bg){b6=17/2+V.s("4o")-V.s("4q")}B dK=1e/2;B sE=V.g("17");B lF=V.g("1e");B p=V.s("1l");if(p.K("8K")>-1){b6=o.2Z/2+V.s("4o")-V.s("4q")}if(p.K("1f")==0){dK=lF/2+(V.s("Ka")*o.4t/100)}if(p.K("2O")==0){dK=o.4t-(V==bg?lF:lF/2)-(V.s("K8")*o.4t/100)}if(p.K("2k")>-1){b6=o.2Z-sE/2+V.s("4o")-V.s("4q")-(V.s("JP")*o.2Z/100)}if(p.K("1c")>-1){b6=sE/2+V.s("4o")-V.s("4q")+(V.s("iq")*o.2Z/100)}if(p=="ay"){b6=-o.xo/2+(V.s("iq")*o.xo/100)+V.s("4o")-V.s("4q");dK=-o.oB/2-(V.s("K8")*o.oB/100)+(V.s("Ka")*o.oB/100)}if(p.K("S")>-1){B cx=Kc(V);b6=(bg?(bg.c()?5t(bg.c().kI):0):0)+cx;if(p=="S-2k"){b6+=9n}if(v.1u.1l=="1f"){dK=v.1u.h/2-(v.e2<0?v.e2:0)}F{dK=1e-v.1u.h/2}}I{x:b6,y:dK+V.s("8z")-V.s("ep")}}E 2C(9Z){B w=o.2a&&v.1u.jO==0?o.bo:o.2Z;B h=o.4t;if(v.1u.W2==1){v.1u.Kf=2E(v.1u.Ke)&&o.9m?v.1u.Ke:v.1u.s8;v.1u.l7=o.2Z*v.1u.Kf/100}F{v.1u.l7=v.1u.s8}O(bg.c(),{\'1f\':(v.1u.1l=="1f"?0:o.4t-v.1u.h)-v.e2});bg.26("y0",(o.4t-v.1u.h-v.e2));if(v.1u.jO==0&&bg){O(bg.c(),{\'17\':w,\'1c\':0,\'2M-1c\':0});bg.26("w",w);if(o.2a){O(bg.c(),{\'1c\':\'50%\',\'2M-1c\':-w/2})}}5E={"1c":v.1u.l7*1,"2k":(bg.g("w")-v.1u.l7*1)};B rD=P;if(!bg.g("1t")){bg.26("2l",H);rD=H}B 1d;W(B i=0;i<g1.U;i++){1d=g1[i];if(b[1d]){B cc=z8(b[1d]);if(cc){if(b[1d].s("6h")=="1l"){if(J(o.7G[1d])){if(b[1d].g("x0")==cc.x&&b[1d].g("y0")==cc.y){3x}F{o.7G[1d].XY(b[1d].g("x0"),cc.x,b[1d].g("y0"),cc.y)}}}b[1d].26("x0",cc.x);b[1d].26("y0",cc.y);if(b[1d].s("3g")==1&&!b[1d].g("1t")&&!9Z){yx(b[1d])}F{O(b[1d].c(),{"1l":"2m","1c":b[1d].g("x0"),"1f":b[1d].g("y0")})}}}}if(rD){bg.26("2l",P)}9n=0;W(1d in b){if(b.2w(1d)){if(b[1d].s("1l")=="S-2k"&&b[1d].g("1i")!="2F"&&9n>-1){9n=5E.2k-5E.1c}if(b[1d].g("1i")=="2F"&&bg){B cj;B ml=b[1d].s("4o")+b[1d].s("iq")*o.2Z/100;B mr=b[1d].s("4q")+b[1d].s("JP")*o.2Z/100;if(b[1d].s("W3")==1){if(b[1d].s("W4")==1){cj=(o.2Z*b[1d].s("w")/100)-ml-mr}F{cj=b[1d].s("w")}}F{if(b[1d].s("1l").K("S")>-1){cj=5E.2k-5E.1c-ml-mr;O(b[1d].c(),{"1c":(5t(bg.c().kI)+5E.1c+ml+cj/2)});9n=-1}F{cj=bg.g("w")-ml-mr;O(b[1d].c(),{"1c":(5t(bg.c().kI)+ml+cj/2)})}}b[1d].26("x0",b[1d].g("x"));b[1d].2C(cj)}}}if(1j){jL(1j)}if(Y){jL(Y)}if(lA||o.2a||lT!=9n){4M()}}E yx(b){B 1c=0;B 1f=0;if(b.s("1l").K("2k")>-1&&b.s("1l").K("S")==-1){1c=o.2Z+b.g("17")+10}if(b.s("1l").K("1c")>-1){1c=-b.g("17")-10}if(b.s("1l").K("1f")>-1){1f=-b.g("1e")*2}if(b.s("1l").K("2O")>-1||b.s("1l").K("S")>-1){1f=o.4t+b.g("1e")+b.g("17")+10}if(1c>0){O(b.c(),{"1c":1c})}if(1f>0){O(b.c(),{"1f":1f})}}E jL(x){B 1f=-4d;x.jK();B y=o.4t-v.1u.h*(x.s("1l").K("1f")>-1?1:2);if(x==Y&&v.yH==1){y=o.4t}B ky=y-(o.2a&&!o.1m.2n?(100+x.s("lh")*1):x.s("lh"))-(x==Y&&x.s("lh")*1==0?x.s("8z"):0);ky<100?ky=100:\'\';O(x.c(),{\'5N-1e\':ky});x.co()?O(x.co(),{\'5N-1e\':ky}):\'\';if(x.g("1t")){1f=o.4t/2-x.g("1e")/2+x.s("8z")-x.s("ep");if(x.s("1l").K("1f")>-1){1f=x.s("8z")-x.s("ep")}if(x.s("1l").K("2O")>-1){1f=o.4t-(v.1u.1l!=\'1f\'?v.1u.h:0)-x.g("1e")+x.s("8z")-x.s("ep")}1f<0?1f=0:\'\'}if(x.g("1d")=="1j"&&o.cE){B Jk=o.2Z-x.g("17")-x.s("4q");if(o.cE>Jk){O(x.c(),{"1l":"2m","2k":x.s("4q"),"1c":"2y","1f":1f})}F{O(x.c(),{"1l":"2m","1c":o.cE,"2k":"2y","1f":(o.jy<1f?o.jy:1f)})}}F{if(x.s("1l").K("2k")>-1){O(x.c(),{"1l":"2m","2k":x.s("4q")-x.s("lo"),"1c":"2y","1f":1f})}F if(x.s("1l").K("1c")>-1){O(x.c(),{"1l":"2m","1c":x.s("4o"),"2k":"2y","1f":1f})}F{if(x.g("1d")=="Y"&&x.s("3D")==1){O(x.c(),{"1l":"2m","1c":o.2Z/2-x.g("17")/2+x.s("4o")/2-x.s("4q")/2,"1f":1f})}F{B l=o.2Z/2-x.g("17")/2+x.s("4o")-x.s("4q");O(x.c(),{"1l":"2m","1c":(l>0?l:0),"1f":1f})}}}x.9Q()};G.fc=E(1d){B V=b[1d];B a=V.g("1i");if(a){B d=1z 6N();o.9g=d.8C();if(a&&a!=""){5e(V);a=="4x"?o.Jy=1:\'\';a=="1A"?o.Jy=0:\'\'}}hE()};G.rT=E(z,x,y){W(B 1d in b){if(b.2w(1d)){if(b[1d].s(z)==x){b[1d].26(y?"6k":"3k")}}}};G.vB=E(x,s){B y=7j(s,x);I y};E 5e(V,1K){o.mj=H;nn=V;B a=V.g("1i");if(a=="1A"){o.X.2H();if(o.3B&&v.JA==1){o.X.6z();v.JA=0}if(v.1W.on==1&&v.1W.2W==1&&v.1W.rY==1){7I(\'1A\',1)}js("Jv")}F{if(a=="4x"){o.lk=0;o.X.3l();if(v.1W.on==1&&v.1W.2W==1&&v.1W.rY==1){7I(\'1A\',0)}js("Lf")}if(a=="2K"){o.X.lr()}}if(a=="BN"){o.X.3Y(0,P)}if(a=="2a"){!o.5u?o.X.9t():\'\'}F{if(a=="vv"){o.X.8h()}}if(a=="2F"){B ld=o.R.1p();B lt=V.g("2x")*ld;if(v.4G>0){ld-=v.4G*1;lt=V.g("2x")*ld+v.4G*1}if(v.k4>0){if(v.k4/ld<=1-V.g("2x")){I}}js(a,lt);o.X.3Y(lt,H);if(o.3x){o.3x.nG(lt,ld);o.2e>0?o.2e=1M:\'\'}js("nq",lt)}if(a=="1L"){B x=V.g("2x");x<0.W5?x=0:\'\';x>1?x=1:\'\';if(V.s("7V")=="5m"){x=3Q(x*o.6f.7f(-1)[0]).ya(1);o.X.9x(x,1)}F if(V.s("7V")=="xY"){o.R.Lo(x)}F{if(o.5G&&v.wS==1){3f.8c("yn",x);if(V.g("2x")>0||o.1m.7S||v.na==0){3f.zl("j3")}F{3f.8c("j3",1)}}o.X.3Z(x)}}if(a=="5o"){if(o.5G&&!o.1m.7S&&v.na==1){3f.8c("j3",1)}o.X.5p();if(v.1W.2W==1&&v.1W.KW==1){7I(\'5o\',0)}}F{if(a=="9S"){if(o.5G){3f.zl("j3")}o.X.6z();if(v.1W.2W==1&&v.1W.KW==1){7I(\'5o\',1)}}}if(a.K("1b")==0){V.VV()?V.jc():V.On()}if(a=="oF"){o.R.xU()}if(a=="1P+"){o.R.dw(0.1)}if(a=="1P-"){o.R.dw(-0.1)}if(a=="1P"){o.R.dw(0)}if(a=="5H"){3y("x7");V.26("vT",1);V.26("gF",1)}if(a=="2U"){js("2U");yR()}if(a=="1j"){o.cE=1M;if(1j){if(!1j.g("1t")){1j.1t()}F{1j.1n()}}}if(a=="Y"){if(o.fR==a){I}o.S.la()}if(a=="6S"){o.S.bj()}if(a=="cQ"){o.S.dU()}if(a=="59"){if(V.s("fb")==1&&V.s("3m")!=""){B x=4Z(V.s("3m"));if(o.fR==a+x){I}if(x.K(\'{1b}\')>-1){x=x.1V(\'{1b}\',(J(o.3x)?o.3x.ax().t:o.R.1b()))}if(x.K(\'{3I}\')>-1){x=x.1V(\'{3I}\',o.R.cU())}if(x.K(\'{1I}\')>-1){x=x.1V(\'{1I}\',v.1I.1V(/,/ig," "))}if(x=="6m"){o.R.h5()}if(x.K(\'6Y\')==0){if(V.s("6Y")>0){o.X.3Y(o.bM?o.bM.W6():V.s("6Y"))}}if(x.K(\'W8\')==0){if(o.bM){o.bM.W9()}}if(x=="Wa"){o.X.3Y(V.s("iq")*o.R.1p()/100);!o.1A?o.X.2H():\'\'}V.s("Jh")==1?o.X.3l():\'\';B y=x.2D(",");if(x.K("3z:")==0){B z=x.1q(4).2D(";");W(B i=0;i<z.U;i++){y=z[i].2D(",");if(y.U>1){if(y[0]==\'4h\'){if(v.1W.2W==1&&v.1W.Wb==1){7I(\'4h\',y[1]>0?1:0)}}3y(y[0],y[1],V);js("nq",y[1]);y[1]==\'0/1\'||y[1]==\'1/0\'?vC():\'\'}F{if(y[0]=="Ji"){B ss=3y(y[0]);if(ss){if(ss.K("2c")>-1){if(v.Wc==1){B 4u=22.1Q(\'4u\');4u.6g(\'3h\',ss);O(4u,{1l:"z7",2k:(J(v.lz)?v.lz:20),2O:(J(v.lz)?v.lz:20),17:0,4I:"17 0.5s ch-Wd(.75,-0.5,0,1.75)"});4u.C.4N=JH;22.3P.1N(4u);1G(E(){O(4u,{17:(J(v.K4)?v.K4:4z)})},1);4u.gB=E(){G.3X.3p(G)}}if(v.We==1){B a=1Q("a");a.9L=ss;a.6T=y[0]+".j2";a.2x()}}}F{1w(y[0]+" 2q")}}F{3y(y[0])}}}}F{if(x.K("js:")==0){if(x.K("(")>0&&x.K(")")>0){2o(x.1q(3))}F{2o(y[0].1q(3)+\'(\'+(J(y[1])?\'"\'+y[1]+\'"\':\'\')+(J(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}}if(x.K("1h:")==0){yG(x.1q(6),o.R.1b())}if(x.K("2U:")==0&&o.2U){o.2U.3z(x.1q(6))}if(x.K("yB:")==0&&o.6C){3y("yB",x.1q(7))}if(x.K("3J")==0||x.K("/")==0||x.K("?")==0||x.K("18:")==0){x.K("18:")==0?x=x.1q(4):\'\';1S.3j(x,V.s("JN"))}if(x.K("6T")==0){o.X.lf()}if(x=="3z:96"){o.R.ds()}}if(x.K("1j#")>-1){if(1j){B si=x.1q(9).2D(",");if(1j.g("1t")&&1j.g("3j")==si[0]){o.cE=1M;o.jy=1M;1j.1n()}F{o.cE=V.g("x")-V.g("17")/2;o.jy=V.g("y")+V.g("h");W(B i=0;i<si.U;i++){i==0?1j.1t():\'\';1j.3j(si[i])}Y?Y.JY():\'\'}}}if(x.K("1j:")>-1&&v.1j.Wf==1){if(!o.4P){o.4P=1z Wg()}if(v.1j.fQ==1){if(1K=="4w"){o.4P.1t(x)}F{o.4P.iW(x)}}F{if(!1K){o.4P.iW(x)}}}if(x=="IM"){o.X.gJ();o.w9=0;V.26("3k");B bl=7j("3m","4r");if(bl){bl.26("3k")}}if(x=="4r"){V.6u("OK");V.s("qg")?1S.8Q.9L=4Z(V.s("qg")):\'\'}}}};G.1I=E(t){B y=P;W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1I"){if(b[x].s("B")==t||t=="1I"){if(b[x].s("1n")==1&&b[x].s("vF")==1&&o.1A){y=H}if(v[t]==\'\'||y){b[x].26("2l",P)}F{b[x].26("2l",H)}b[x].6u(v[t])}}}}yZ()};G.Kd=E(){yZ()};G.z2=E(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="59"){if(b[x].s("1K")=="1F"){b[x].9D()}}}}};E yZ(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="59"){if(b[x].s("1K")=="1F"){b[x].HS(H)}}}}}E yR(){if(J(o.2U)){o.2U.jB()}}G.K1=E(){yR()};G.Fe=E(){if(v.1I!=\'\'){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1I"){B y=P;if(!b[x].g("1t")){y=H;b[x].26("2l",H)}b[x].6u(v.1I);if(y){b[x].26("2l",P)}}}}}};G.yO=E(){yL()};E yL(){if(v.9J){if(1O(v.9J)=="3U"){W(B x in v.9J){if(v.9J.2w(x)){i8(x,v.9J[x])}}}}};G.K5=E(y,z){i8(y,z)};G.z6=E(x){if(b[x]){b[x].yb()}};G.K3=E(){W(B x in b){if(b.2w(x)){if(b[x].g("vW")){b[x].yb()}}}};E i8(y,z){if(y){W(B x in b){if(b.2w(x)){if(b[x].g("vW")){if(b[x].s("5a")==y){if((!b[x].g("1t")||b[x].s("3g")==1)&&!fe(b[x])){b[x].26("Jt");b[x].26("2l",H)}b[x].i8(z)}}}}}};G.4Y=E(){2C()};G.Je=E(){2C(H)};G.lJ=E(){jL(1j)};G.jK=E(){jL(Y)};G.2H=E(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1A"){b[x].On()}}}o.cD?o.cD.1n():\'\';yU();o.1A=H;4M()};G.3l=E(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="4x"||b[x].g("1i")=="2K"){b[x].jc()}}}if(Y){if(v.Y.GO==1&&!Y.54()){Y.1t()}}o.1A=P;G.7L();4M();if(v.1u.1n==1&&v.1u.fB==1){fF(H)}};G.5p=E(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="5o"){b[x].On()}G.3Z(0)}}4M()};G.6z=E(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="9S"){b[x].jc()}}}if(v.1L<0.1){v.1L=0.5;o.X.3Z(v.1L)}F{G.3Z(v.1L)}4M()};G.3Z=E(1L,y){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1L"){if(!b[x].s("7V")||b[x].s("7V")=="1L"){b[x].6K(1L,1,(y=="no"?y:H))}}if(b[x].g("1i")=="5o"){b[x].xK(1L)}}}4M()};G.9t=E(){B bl=7j("1i","2a");if(bl){bl.On();bl.26("1P",bl.s("1P"))}4M();lA?1G(4M,4c):\'\';f8();z3()};G.8h=E(){B bl=7j("1i","2a");if(bl){bl.jc()}2C();3S(o.iN);4M();z3()};E z3(){if(o.cE){o.cE=1M;o.jy=1M;1j.1n()}}G.8M=E(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1A"){b[x].yc()}}}};G.wd=E(){4M()};G.DB=E(){yU()};E yU(){if(Y){if(Y.g("1t")&&v.Y.gp==1){o.S.cF()}}}E 4M(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")!="b5"){d1(b[x])}}}d1(bg);if(lT!=9n){lT=9n;2C()}if(v.1u.1n==1&&v.1u.ec==1){fg(!o.go&&!o.5f&&!o.2a&&o.1A&&v.1u.du!=1&&!o.5u)}};E iL(){B 1t=7N&&v.1u.l8==1;if(v.1u.1n==1){if(!o.1A&&v.1u.fB==1){1t=P}}if(1t){W(B x in b){if(b.2w(x)){if(b[x].g("1i")!="b5"){d1(b[x],P)}}}O(o.1T,{"6M":"7C"});o.jQ=H;d1(bg,P);if(bg.g("1t")){kz()}fg(P)}}E fF(){B 1n=o.1A&&v.1u.l8==1&&!o.3O;if(o.eb&&v.1u.Wh==1){1n=P}if(!o.1A&&v.1u.1n==1&&v.1u.fB==1){1n=H}if(1j){if(1j.g("1t")&&o.lY){1n=P}}if(o.5u){1n=P}if(1n){W(B x in b){if(b.2w(x)){if(b[x].g("1i")!="b5"){d1(b[x],H)}}}d1(bg,H);if(!bg.g("1t")){7N=H;o.R.zb();if(o.1A){O(o.1T,{"6M":"1U"});o.jQ=P}}fg(H)}}E f8(){if(v.1u.l8==1){if(v.1u.du==1&&!o.2a&&!o.bv){}F{3S(o.iN);o.iN=7d(fF,((v.1u.9N>0?v.1u.9N:v.1u.jv)*2p))}}}E d1(V,bY){B 1n=P;B 1t=P;B c5=P;if(v.1u.1n==1){if((!o.go&&!o.5f&&!o.2a&&o.1A&&v.1u.du!=1&&!o.5u)||(o.2a&&7N&&!o.jQ)||(o.X.gw()&&o.7t&&!o.5f)){1n=H;1t=P;c5=H}F{1n=P;1t=H}if(J(bY)&&!o.5u){1n=bY;1t=!1n}if(v.1u.1n==1&&v.1u.ec==1&&(V.s("1l").K("S")==0||V.s("1i")=="2F")){1n=P;1t=H}if(v.1u.fB==1&&!o.1A){1n=H;1t=P;c5=P}if(v.1u.Ys==1&&!o.8m&&o.1A){1n=P;1t=H}}F{if(V.s("1n")!=1){1t=H}}if(1t&&!o.jQ){O(o.1T,{"6M":"7C"});o.jQ=H}B a=V.g("1i");if(a=="59"&&V.s("1l").K("S")==-1){1n=P;1t=H}if(o.5u){if(a=="2F"){if(o.R.1p()==-1){1n=H;1t=P}}}B yJ=P;B hp=fe(V);if(V.s("1n")==1){if(V.s("WL")==1){if(c5||bY||(o.1A&&!o.5f)){!c5&&!bY?\'\':hp=H}}if(V.s("Yt")==1){if(!c5&&!bY){hp=H}}if(V.s("10n")==1){if(o.1A&&!o.5f){hp=H}}if(V.s("KE")==1||V.s("KA")==1||V.s("yk")==1){lA=H}}if(hp){1n=H;1t=P}F{!1n?1t=H:\'\'}if(V.s("1i")=="1L"){if(V.s("1n")==1&&V.s("hx")==1&&!V.g("g5")){1n=H;1t=P;if(!c5&&(o.9z||o.eR)&&!bY&&V.s("dT")!=1){1n=P;1t=H}F{yJ=H}}}if(o.ao||(!o.1E&&v.1u.1n==1&&v.1u.yX==1)||(!o.8m&&v.1u.1n==1&&v.1u.H0==1)||(!o.2a&&v.1u.1n==1&&v.1u.10P==1)){if(V.s("1l").K("S")>-1||V.s("1l").K("2O")>-1){1n=H;1t=P}if(v.1u.du==1&&!o.2a){1n=P;1t=H}}if(1j){if(1j.g("1t")&&v.1j.8f!=1){c5=P;bY=P}}if(Y&&o.3d){if(v.Y.10Q==1){if(o.3d.yD()){I}}}if(a=="2U"){if(J(o.2U)){if(o.2U.54()){1n=H;1t=P;V.26("6h","1U")}}}if(a=="Y"||a=="6S"||a=="cQ"||V.s("KZ")==1){if(Y){if(Y.54()&&V.s("KZ")!=0){1n=H;1t=P;V.26("6h","1U")}}F{1n=H;1t=P}}if(o.10R==1){1n=H;1t=P}if(yJ){B cc=z8(V);if(cc){cc.y>0?V.26("y0",cc.y):\'\';O(V.c(),{"1l":"2m","1f":V.g("y0")})}}if(1n){ag(V,(zc?H:P))}if(1t){HA(V)}if(V==bg){if(!1n&&1t){kz();6k(7O);aX?aX.26("1C",aX.s("a")):\'\';7N=P;k7==0?js("ui",1):\'\';k7=1;o.6p&&o.9W?o.6p.1t():\'\'}if(1n&&!1t&&!o.5u){o.R.zb();aV();3k(7O);aX?aX.26("1C",0):\'\';7N=H;k7==1?js("ui",0):\'\';k7=0;o.6p&&o.9W?o.6p.1n():\'\'}if(1j){if(1j.tb()){if(!1j.g("1t")){1t&&!1n?1j.1t():\'\'}F{!1t&&1n?1j.1n(2):\'\'}}}if(Y){if(v.Y.8f==1&&!Y.54()){if(1t||o.ao){if(v.Y.KX==1&&o.2a){}F{if(!Y.g("1t")){if(v.Y.L5==1){!o.1A?Y.1t():\'\'}F{Y.1t()}}}}F{if(1n&&Y.g("1t")){Y.1n()}}}}}};E fe(V){B x=P;B a=V.g("1i");if(V.s("1n")==1){if(V.s("vF")==1){o.1A?x=H:\'\'}if(V.s("fB")==1){!o.1A?x=H:\'\'}if(V.s("10S")==1){o.7t?x=H:\'\'}if(V.s("gu")==1){x=H}F{if(V.s("10T")==1){if(o.1m.dc){V.26("gu",1);x=H}}if(V.s("10U")==1){if(o.1m.2n){V.26("gu",1);x=H}}}if(V.s("KA")==1){if(o.2Z>V.s("KP")){V.26("dT",1);x=H}F{V.26("dT",0)}}if(V.s("10V")==1&&!8a){x=H;o.mB=1}if(V.s("10W")==1&&8a){x=H;o.mB=1}if(V.s("KE")==1){if(o.2Z<=V.s("KD")){V.26("dT",1);x=H}F{V.26("dT",0)}}if(V.s("10X")==1){o.1E?x=H:\'\'}B t=o.R.1b();B d=o.R.1p();if(V.s("IY")==1&&V.s("J5")>0){if(t>=V.s("J5")){x=H}}if(V.s("J0")==1&&V.s("Hi")>0){if(t<V.s("Hi")){x=H}}if(V.s("J2")==1&&V.s("Hg")>0){if(t<d-V.s("Hg")||d==0){x=H}}if(V.s("10Y")==1){if(Y){if(!Y.cX()){x=H}}}if(V.s("10O")==1){if(o.1E||!o.3x||o.R.5B()){x=H}if(o.3x){if(o.3x.ax().t==0){x=H}}}if(V.s("yX")==1){!o.1E?x=H:\'\'}if(V.s("lB")>0){x=H}if(V.s("Hd")==1){if(J(V.s("n6"))){2Q[V.s("n6")]?x=H:\'\'}}if(V.s("10Z")==1){if(!J(V.s("9J"))){x=H}}if(V.s("Hc")==1){if(J(V.s("mX"))){!2Q[V.s("mX")]?x=H:\'\'}}if(V.s("11b")==1&&o.1m.5x){!o.1E||o.n4?x=H:\'\'}if(V.s("11c")==1){!o.R.7t()?x=H:\'\'}if(V.s("11d")==1){!o.R.5B()?x=H:\'\'}if(V.s("11e")==1){!o.5f?x=H:\'\'}if(V.s("Hn")==1){!o.2a?x=H:\'\'}if(V.s("yk")==1){o.2a?x=H:\'\'}if(V.s("11f")==1){!o.3B?x=H:\'\'}if(V.s("11g")==1){o.R.5B()&&o.R.cU().K("?xf")==-1?x=H:\'\'}if(V.s("GD")==1){5A(o.2i)?x=H:\'\'}if(V.s("H0")==1){!o.8m?x=H:\'\'}if(V.s("11h")==1){o.8m?x=H:\'\'}if(V.s("11i")==1){o.nD?x=H:\'\'}if(V.s("11j")==1){!o.nD?x=H:\'\'}if(V.s("JS")==1){if(V.g("i5")){x=H}}if(V.s("11k")==1){!o.ab?x=H:\'\'}if(V.s("11l")==1){o.ab?x=H:\'\'}if(V.s("11a")==1){if(v.4T==1&&v.eB==1){if(o.2r=="4R"&&!J(v.2i)&&v.yP==0){if(!o.1E||o.R.7h()=="7t"){if(v.2i==\'\'){}F{x=H}}}}}}if(a=="59"){B lu=V.s("3m");if(lu){if(lu=="3z:6m"||lu=="6m"){if(!o.6m&&!o.jq){x=H}}if(lu=="3z:96"){if(!o.96||(!o.1E&&v.4T==0)){x=H}}if(lu=="3z:H2"){if(!o.nD){x=H}}if(lu.K("6E")>-1){if(!o.6E){x=H}}if(7c([lu],"6Y")&&!7c([lu],"js:")&&V.s("gu")!=1){B sk=P;if(J(v.6Y)){if(!o.bM){1O Hj==\'E\'?o.bM=1z Hj():\'\'}if(o.bM){sk=o.bM.yY(V)}}!sk?x=H:\'\'}}}if(a=="Y"||a=="6S"||a=="cQ"){if(Y){if(Y.54()){x=H}}F{x=H}}if(a=="1j"){if(1j){if(1j.54()){x=H;o.2r!=\'1H\'?V.26("6h","1U"):\'\'}}F{x=H}}if(V.g("1K")=="1F"){if(V.g("U")==0){x=H}}if(V.g("1j#")){if(!V.g("26#4D")){x=H}}if(V.s("4B")==1){B cb=22.8y("10M"+v.id);if((o.R.1p()==0&&o.R.1b()==0)||!o.4Q||!5A(cb)||!o.10A){x=H}}if(V.s("vV")==1){!x?V.26("vV",1):\'\'}if(a=="1p"){if(o.R.5B()){x=H}}if(V.g("1d")=="vN"&&o.1m.2n){if(o.ao&&o.1m.bw){x=H}}I x}E ag(V,ys){if(V.g("1t")){if(o.bv||V.s("6h")=="1U"||ys){V.26("2l",P)}F{Hy(V)}V.26("1t",P)}};E HA(V){if(!V.g("1t")){if(V.s("6h")=="1U"||o.bv){V.26("2l",H);if(o.bv){V.26("1C",1)}if(V.g("1i")=="1L"){if(o.hP){yx(V)}}}F{Hm(V)}if(V.s("1i")=="1L"){o.S.3Z(o.3B?0:v.1L)}if(V.s("1i")=="2F"){o.X.yp()}V.26("1t",H)}};E Hy(V){yr(V.g("1d"));B 5Z="g9|";B 5z="0|";B 1n=1;B a=V.s("6h");if(V.s("Hu")==1){5Z=\'\';5z=\'\'}B p=V.s("1l");B jI=V.g("3u");2E(V.s("nu"))?p=V.s("nu"):\'\';if(a=="1P"){5Z+="1P|";5z+="0|"}if(a=="1l"){if(p.K("2k")>-1&&p.K("S")==-1){5Z+="x|";5z+=5t(o.2Z+V.g("17")/2*jI)+"|"}if(p.K("1c")>-1){5Z+="x|";5z+=5t(-V.g("17")/2)*jI+"|"}if(p.K("1f")>-1){5Z+="y|";5z+=(-V.g("1e")/2)*jI+"|"}if(p.K("2O")>-1||p.K("S")>-1||p=="ay"){5Z+="y|";if(V.g("1i")=="2F"||V.g("1i")=="1L"){5z+=5t(o.4t+V.s("h")+(V.s("h")<20?20-V.s("h"):0))+"|"}F{5z+=5t(o.4t+V.g("1e")/2)+"|"}}if(p=="8K"){5Z+="1P|";5z+="0|"}}B m=1z 5Q({"mc":V,"me":V.g("1d"),"1K":5Z.1q(0,5Z.U-1),"to":5z.1q(0,5z.U-1),"1n":1n})};E Hm(V){yr(V.g("1d"));B 5Z="";B 5z="";B a=V.s("6h");B p=V.s("1l");2E(V.s("nu"))?p=V.s("nu"):\'\';if(V.g("1C")!=1&&V.s("Hu")!=1){5Z="g9|";5z=(V.g("1d")==\'bg\'?v.1u.a:"1")+"|"}if(a=="1P"){if(V.g("3u")!=V.s("1P")){5Z+="1P|";5z+=V.s("1P")+"|"}}if(a=="1l"){if(p=="8K"){if(V.g("3u")!=V.s("1P")){5Z+="1P|";5z+=V.s("1P")+"|"}}F{if(p.K("S")>-1){if(V.g("y")!=V.g("y0")){5Z+="y|";5z+=V.g("y0")+"|"}}F{5Z+="x|y|";5z+=V.g("x0")+"|"+V.g("y0")+"|"}}}if(5Z!=""&&5z!=""){B m=1z 5Q({mc:V,me:V.g("1d"),1K:5Z.1q(0,5Z.U-1),to:5z.1q(0,5z.U-1),1t:1})}F{V.26("2l",H)}};G.kF=E(1d,1K,ys){B 4Y=P;B 2K=P;B V=b[1d];B 1i=V.g("1i");B 3m=V.s("3m");if(1K=="4w"){if(o.hP){if(1i=="1L"||1i=="5o"||1i=="9S"){if(!V.g("g5")){o.9z=H;o.eR=H;4Y=H;4M();if(v.fM.Hp==1){B bl=7j("1i","2F");if(bl){3k(bl.c())}}}}}if(1j&&v.1j.fQ==1&&((1i=="1j"||3m.K("Ho")==0)||3m.K("1j:")==0)){2N(o.fI);if(!1j.g("1t")||nn!=V){5e(V,1K);o.fR=1i+3m;1G(E(){o.fR=1Z},4c)}}if(Y&&v.Y.fQ==1&&1i=="Y"){2N(o.yw);if(!Y.g("1t")||nn!=V){5e(V,1K);o.fR=1i;1G(E(){o.fR=1Z},4c)}}}if(1K=="4m"){if(o.hP){if(1i=="1L"||1i=="5o"||1i=="9S"){o.9z=P;o.eR=H;1G(E(){if(!o.9z){o.eR=P;W(B x in b){if(b.2w(x)){if(!7N){if(b[x].g("1i")=="1L"&&!b[x].g("g5")){ag(b[x]);2C()}}if(b[x].g("1i")=="2F"){if(v.fM.Hp==1){6k(b[x].c())}}}}}},4c)}}if(1i=="2F"){o.X.6K(1)}if(v.1j.fQ==1&&((1i=="1j"||3m.K("Ho")==0)||3m.K("1j:")==0)){2N(o.fI);o.fI=1G(E(){if(!o.3O){aV(1)}},(v.1j.fW>0?v.1j.fW*2p:2p))}if(Y&&v.Y.fQ==1&&1i=="Y"){2N(o.yw);o.yw=1G(E(){if(!o.3O){Y.g("1t")?Y.1n(1):\'\'}},(v.Y.fW>0?v.Y.fW*2p:2p))}}if(4Y){1G(2C,10)}};G.q6=E(){if(o.5D&&!o.2a&&!o.bv){o.X.5D(P);o.5D=P}if(o.2i){if(v.mu>-1&&5A(o.2i)){O(o.2i,{1C:v.mx})}}if(o.1A&&v.GX==1&&v.10L!=0){o.X.3l()}if(v.1u.9N>0){2N(o.GY);o.GY=1G(4M,v.1u.9N*2p)}F{4M()}};G.Em=E(){if(o.2i){if(v.mu>-1&&5A(o.2i)){O(o.2i,{1C:v.mu})}}if(!o.1A&&v.GX==1){o.X.2H()}4M();fg(P)};G.f7=E(aK,bn){B y;W(B x in b){if(b.2w(x)){y=b[x].g("1i");if(y=="2F"||y=="1L"){b[x].f7(aK,bn)}}}};G.yM=E(){if(v.1u.1n==1){if(v.1u.du==1&&!o.2a){I}if((!o.5f||o.1m.2n)&&o.R.7h()=="8b"){o.5f=H;4M();o.1m.2n?1G(E(){o.5f=P},4c):\'\'}if(v.1u.l8==1){iL();f8()}fg(P)}};G.f1=E(aK,bn){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="2F"||b[x].g("1i")=="1L"){b[x].f1(aK,bn)}}}};G.eK=E(1b,1p,Gz){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="2F"){b[x].6K(1b,1p,Gz)}if(b[x].g("1i")=="1b"){dI(b[x],1b,1p)}if(b[x].s("I5")==1){b[x].xU()}if(b[x].s("I6")==1){b[x].GB(1b,1p)}if(b[x].s("IA")==1){if(b[x].s("3m")=="IW"||b[x].s("3m")=="aF"){1O Gw==\'E\'?Gw(b[x]):\'\'}if(b[x].s("IJ")==1&&!b[x].g("1t")&&7N){}F{if(b[x].g("1t")==fe(b[x])){4M();2C()}}}}}};E fg(x){if(v.1u.1n==1){x?aV():\'\';if(v.1u.ec==1){if(!o.1A&&v.1u.fB==1){x=H}if(x&&!o.yC){O(o.1u,{"1f":bg.h()})}if(!x&&o.yC){O(o.1u,{"1f":0})}o.yC=x}}}E kz(){7N=P;o.R.kz();if(o.wm){o.wm=P;2C();1G(2C,dN)}}E dI(x,1b,1p){if(v.4G>0){1b-=v.4G*1;1p-=v.4G*1}B y=4F(1b);if(x.s("Ic")=="1"){y=4F(1p-1b)}if(x.s("10p")=="1"){if(x.s("10q")=="1"){y=y+(1p>0?\' \'+2R(x.s("10r"))+\' \'+4F(1p):\'\')}F{1b==0?y=4F(1p):\'\'}}x.6u(y)}G.z5=E(1b,1p){B x=7j("1i","2F");if(x){x.Cv(1b,1p)}};G.kg=E(y){if(o.R.1p()>0){B x=7j("1i","2F");if(x){x.kg(y)}}};G.9a=E(){if(!8a){if(v.g0==1){2N(mK);mK=1G(9a,4c)}F{9a()}}};E 9a(){if(!8a){js("10s");8a=H;B x=7j("1i","b5");if(x){x.GA();if(v.Gk==1&&o.1A){2N(o.Gr);o.Gr=1G(Gn,(v.Gp>0?v.Gp:1)*2p)}}o.mB?4M():\'\'}}E Gn(){if(o.1A&&8a){o.X.8A()}}G.Gl=E(y){W(B x in b){if(x==y){b[x].26("3k")}}};G.7L=E(){2N(mK);if(8a){js("8E");B x=7j("1i","b5");if(x){x.iX();if(v.Gk==1&&o.1A){o.X.gy()}}8a=P;o.mB?4M():\'\'}};G.kB=E(){B x=7j("3m","1L 6X");if(x){x.26("6k");x.6u(2R(\'1L\')+\' \'+(o.3B?0:2I.xk(v.1L*100))+\'%\');2N(o.kB);o.kB=1G(Gs,2p)}};E Gs(){B x=7j("3m","1L 6X");if(x){x.6u(\'\');x.26("3k");2N(o.kB)}}G.3Y=E(1b,1p){if(v.4G>0){1b-=v.4G*1;1p-=v.4G*1}W(B x in b){if(b.2w(x)){if(b[x].s("on")==1){if(b[x].g("1i")=="2F"){1p>0?b[x].26("2x",1b/1p):\'\';b[x].Cu()}if(b[x].g("1i")=="1b"){dI(b[x],1b,1p)}if(b[x].g("1i")=="5H"){b[x].26("vT",0.5);b[x].26("gF",0)}}}}};G.3V=E(1b,1p){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1p"){if(v.4G>0){1p-=v.4G*1}b[x].6u(4F(1p))}if(b[x].g("1i")=="2F"){b[x].6K(1b,1p);b[x].B3(1p)}if(b[x].g("1i")=="1b"){dI(b[x],1b,1p)}}}};G.7M=E(){if(!o.4P){1j.g("1t")?1j.1n():1j.1t()}};G.cN=E(){if(1j){if(o.4P){I o.4P.5A()||1j.g("1t")}F{I 1j.g("1t")?H:P}}F{I P}};G.mE=E(x){if(1j){1j.5W(x)}};G.aV=E(){aV()};G.10t=E(x){if(1j){1j.GC(x)}};G.DA=E(){if(1j){1j.lb()}};G.DR=E(x){if(1j){I 1j.GW(x)}};E aV(x){if(1j){1j.g("1t")?1j.1n(x):\'\'}o.4P?o.4P.1n():\'\'};G.cF=E(){if(Y){if(Y.g("1t")){Y.1n(1)}F{Y.1t()}}};G.la=E(x){if(Y){if(Y.g("1t")&&x!=1){x!=2?Y.1n():\'\'}F{1G(E(){Y.1t()},100)}}};G.kf=E(){if(Y){I Y.g("1t")?H:P}F{I P}};G.cg=E(x){I Y?Y.g(x):\'\'};G.6D=E(x){if(Y){Y.ze(x)}};G.GU=E(x){if(Y){Y.GR(x)}};G.bj=E(){if(Y){Y.bj()}};G.mD=E(){if(Y){Y.mD()}};G.hI=E(){hI()};E hI(){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="6S"){O(b[x].c(),{"1C":(!Y.cX()?0.5:1)})}if(b[x].g("1i")=="cQ"){O(b[x].c(),{"1C":(!Y.gM()?0.5:1)})}}}}G.cX=E(){if(Y){I Y.cX()}F{I P}};G.gM=E(){if(Y){I Y.gM()}F{I P}};G.gP=E(){if(Y){I Y.gP()}F{I P}};G.mF=E(){if(Y){Y.mF()}};G.dU=E(){if(Y){Y.dU()}};G.zo=E(x){if(x&&Y){Y.d0(x)}};G.GN=E(x){if(x&&Y){Y.mJ(x)}};G.GM=E(x){if(x&&Y){O(Y.co(),{"10u":"1U","2V-2k":Y.s("7p")});22.8y(x).1N(Y.co());3k(Y.c())}};G.10v=E(){};G.wt=E(x){if(1j){1j.6n();1j.g("1t")?1G(E(){1j.1n()},4z):\'\'}};G.hT=E(){if(1j){1j.6n()}if(o.4P){o.4P.cY()}};G.hM=E(x){if(1j){1j.h5()}2C();4M()};G.mQ=E(x){if(1j){1j.hS(x);1j.g("1t")?1j.1n():\'\'}if(o.4P){o.4P.cY()}x=="5m"?wr():\'\'};E wr(){if(o.jb){B x=3Q(o.hv/o.6f.7f(-1)[0],1).ya(2);W(B i in b){if(b.2w(i)){if(b[i].s("7V")=="5m"&&o.hv){b[i].6K(x,1)}if(b[i].s("3m")=="3z:5m,1.0"){b[i].xK(x)}}}}}G.mS=E(x){if(1j){1j.hS("7u")}if(o.4P){o.4P.cY()}};G.bH=E(){if(1j){1j.9e();1j.g("1t")?1G(E(){1j.1n()},4z):\'\'}if(o.4P){o.4P.cY()}if(o.5u&&o.4Q){o.4B.aC()}};G.wq=E(){o.4P?o.4P.1n():\'\';if(1j){1j.wq()}};G.hy=E(mf,2l,7Q){W(B x in b){if(b.2w(x)){if(b[x].g("1i")=="1j"){if(b[x].s("f4")==1){b[x].Hv()}}if(b[x].g("Jn")=="1j#"+mf){b[x].26("26#4D",2l);if(b[x].g("1K")=="1F"){if(7Q){b[x].6u(wo(7Q))}}F{if(v.1j[\'1j\'+mf+\'1i\']=="28"){if(7Q==2R("6G")){b[x].cV(0)}F{b[x].cV(1)}}2C()}d1(b[x])}}}};G.IH=E(){if(1j){1j.6n();1j.hS("7u");1j.hS("6T")}};G.l0=E(){B x=7j("1i","2F");if(x){x.l0()}};G.4Y=E(){2C();if(7N){o.wm=H}};G.xL=E(x){if(!7N||x==1){2C();4M()}F{v.1u.wl=H}};G.wj=E(){B b=7j("1K","O");if(b){b.Hz()}};G.4U=E(){4M();2C();4M();if(o.ao){3k(7O)}F{!7N?6k(7O):\'\'}};G.DL=E(1h){if(eS==v.id&&v.1W.on==1){B x=1h.Io;B y=P;if(x==1M){x=1h.I3}if(J(o.29)||J(o.7X)||o.w9==1){I P}if(o.1A&&v.1W.hO==1){y=H}if(((v.1W.92==1&&x==32)||(v.1W.10w==1&&x==13))&&(o.6j||o.5f||y)){if(v.1W.2W==1){7I(\'1A\',o.1A?0:1)}o.X.8N();1h.aj();I P}!v.1W.ns?v.1W.ns=0.2:\'\';!v.1W.1P?v.1W.1P=5:\'\';if(v.1W.Iv==1&&(o.6j||y)){if(o.R.1p()>0){W(B i=48;i<58;i++){if(x==i){o.X.3Y((o.R.1p()*(x-48)*10)/100,H)}}}}if(x==39&&(o.6j||y)){mV(v.1W.wi)}if(x==37&&(o.6j||y)){nl(v.1W.wi)}if(x==38&&(o.6j||y)){mV(v.1W.wf)}if(x==40&&(o.6j||y)){nl(v.1W.wf)}if(x==10x&&(o.6j||y)){mV(v.1W.IN)}if(x==10y&&(o.6j||y)){nl(v.1W.IN)}}};E 7j(y,z){W(B x in b){if(b.2w(x)){if(b[x].s(y)==z){I b[x]}}}}E mV(x){if(x=="6S"){if(o.Y){o.S.bj()}F{x="4h"}}if(x=="4h"){if(o.R.1p()>0){B sk=o.R.1b()+3Q(v.1W.4h);if(sk<o.R.1p()){o.X.3Y(sk,H);js("nq",sk)}}}if(x=="1L"){o.X.3Z(3Q(v.1L)+3Q(v.1W.ns));1h.aj()}if(x=="1P"){o.R.1P(v.1W.1P/100);1h.aj()}if(v.1W.2W==1){7I(x,1)}}E nl(x){if(x=="6S"){if(o.Y){o.S.dU()}F{x="4h"}}if(x=="4h"){if(o.R.1p()>0&&o.1E){B sk=o.R.1b()-v.1W.4h>=0?o.R.1b()-v.1W.4h:0;o.X.3Y(sk,H);js("nq",sk)}}if(x=="1L"){o.X.3Z(3Q(v.1L)-3Q(v.1W.ns));1h.aj()}if(x=="1P"){o.R.1P(-v.1W.1P/100);1h.aj()}if(v.1W.2W==1){7I(x,0)}};G.DF=E(1h){if(eS==v.id){B x=1h.Io;if(x==1M){x=1h.I3}if(x==57){if(v.1w==1){}}if(o.2a&&x==27){o.X.8h()}if(J(o.29)||J(o.7X)){I P}if(v.1W.f==1&&x==70&&v.g0!=1&&(o.6j||o.5f)){if(v.1W.2W==1){7I(\'2a\',o.2a?0:1)}o.2a?o.X.8h():o.X.9t()}if(v.1W.s==1&&x==83&&(o.6j||o.5f)){if(o.3F){if(v.1W.2W==1){7I(\'28\',o.5k?0:1)}3y("HQ")}}if(v.1W.m==1&&x==77&&(o.6j||o.5f)){if(v.1W.2W==1){7I(\'5o\',o.3B?1:0)}o.3B?o.X.6z():o.X.5p()}}};G.4n=E(){3S(o.iN);W(B x in o){if(x.K("1a")==0&&x.K("Bz")>-1){3S(o[x])}}W(B i=0;i<g1.U;i++){1d=g1[i];if(b[1d]){b[1d].4n()}}if(1j){1j.4n()}if(Y){Y.4n()}bg.4n();aX?aX.4n():\'\';if(7O.3X==o.1T){o.1T.3p(7O)}F{o.1u?o.1u.3p(7O):\'\'}};G.iL=E(){iL()};G.fF=E(){fF();4M()};G.f8=E(){f8()};G.mn=E(){I 7N}};B HP=E(1d){B i;B C=[];B w;B h;B xF=0;B bg;B ly;B 9y;B lO=0;B 4D=H;B JZ=P;B 3u=1;B 3q=1;B 2A;B iw;B 2T;B 8O;B 1i;B aw=\'\';B x0;B y0;B on;B 4w=P;B bL=P;B io=0;B 10o;B 10z=0;B gr=0;B HH=0;B iC=0;B qC=P;B HL=P;B i5=P;B 3g=P;B hZ;B f4;B qv;B vS=P;C=a3(C,g8.V);C=a3(C,v[1d]);B X=[C.1i];1i=X[0];J(C.HK)?X[1]=C.HK:\'\';J(C.I2)?X[1]=C.I2:\'\';J(C.1I)?C.1F=C.1I:\'\';if(2E(C.Ie)){o.9m?C.1P=C.Ie:\'\'}if(1i=="2U"){o.gR=H}if(J(C.3m)){if(C.1K=="1F"&&C.3m!=\'\'){if(J(v[C.3m+\'1F\'])){C.1F=v[C.3m+\'1F\']}}if(C.3m.K("1j#")==0){aw=C.3m;if(C.2T==\'\'&&aw.K(",")==-1){C.2T=2R(v.1j[\'1j\'+aw.1q(9)+\'1i\'])}}if(C.3m.K("6E")>-1){v.Im=H}if(C.3m.K("2U:")>-1){o.gR=H}if(C.3m=="10B"){C.10C=1z 10D(C)}}B 7m=C.2T?C.2T.2D("///"):[];if(C.Ia==1){C.1K="1F";C.1F=jd(0)+(X.U>1?\'///\'+jd(1):\'\');if(2E(C.bi)){C.1r=C.bi}}C.it=[];C.il=[];B vG=0;B 2W=1z c9();B 1v=1z c9();B dY=1z c9();B 10E=1z c9();B hV=0;B aL;if(C.1K=="1F"){if(C.5a){if(J(v[C.5a+\'1F\'])){C.1F=v[C.5a+\'1F\']}}if(J(C.1F)){2W[0]=4Z(C.1F);C.qA=C.1F.U;B wM=[\'/\',\'|\',\'-\'];wM.K(C.1F.1q(-1))>-1?C.xQ=C.1F.1q(-1):\'\';wM.K(C.1F.1q(0,1))>-1?C.xT=C.1F.1q(0,1):\'\';if(1i=="1b"||1i=="1p"){if(C.1F.K(\'0:\')==0){C.q4=H}if(C.1F.2D(":").U==3){C.Ig=H}F{if(C.1F.K(\'cK:cK\')>-1){C.Ib=H}}if(C.n5==1){v.n5=1}}if(C.Ic==1&&C.1F.K("-")==0){C.Ii=H}if(C.1F.K("///")>0&&(1i=="59"||C.Ia==1)){C.hn=C.1F.2D("///");C.1F=2W[0]=C.hn[0]}}if(v.wK==1){1G(9D,100);1G(9D,4c);1G(9D,2p)}}F{if(J(C.1v)){2W[0]=C.1v;if(2W[0].K("///")>0&&2W[0].K("jE")==-1){2W=C.1v.2D("///")}if(J(C.qB)){2W[1]=C.qB}if(C.IK==1){if(2E(C.I9)){2W.2L(C.I9);hV=2W.U-1}}}}if(1i=="59"){if(C.10F==1&&J(C.qg)){C.vO=C.3m}}B 1a=1Q("1Y");if(C.1l==\'ay\'){o.ay?o.ay.1N(1a):1G(E(){o.ay.1N(1a)},100)}F{if(7c([C.1l],"1a")&&v.1u.1n==1&&v.1u.ec==1){o.1u.1N(1a)}F{o.1T.1N(1a)}if(1i=="b5"&&C.10G==1){1a.C.4N=w8}}if(C.I6==1){C.j8=1z 10H(C,1a)}B ly=1Q("1Y");1a.1N(ly);B dO=1Q("1Y");O(dO,{"1l":"2m","1c":0,"1f":0});1a.1N(dO);O(1a,{"1l":"2m","1c":0,"1f":0,"1C":1,"eD":"pt","oT":"jo"});if(2E(C.5a)){4i(1a,{"id":(v.id+"4y"+"aD"+C.5a)})}if(C.I5==1||C.JM==1){O(dO,{"4I":"2J 0.2s 3e"})}if(2W.U>0){W(i=0;i<2W.U;i++){1v[i]=1Q("1Y");O(1v[i],{"1l":"2m","1f":0,"1c":0,"a0":"1U","1C":C.a,"4I":"1C 0.1s 3e"});if(C.f0>C.1P){O(1v[i],{"4I":"1C 0.1s 3e,2J 0.1s 3e"})}if(C.1K=="fH"&&C.3h!=\'\'){if(2E(C.5a)){4i(1v[i],{"id":(v.id+"4y"+"1a"+"4y"+C.5a+"4y"+"1v")});if(v[C.5a+\'3h\']){C.3h=v[C.5a+\'3h\']}}if(Hb(C.3h,[".yf",".j2",".10I","jE",".9w"])){C.3h.K("//")==-1&&C.3h.K("jE")==-1?C.3h=\'//\'+C.3h:\'\';B z=1Q("4u");C.9K=1;z.1y("h7",w6);z.3h=C.3h;1v[i].1N(z);C.w=1v[i].2b;C.h=1v[i].2S;if(C.I7>0){O(z,{1e:C.I7})}}}if(C.1K=="1F"){O(1v[i],{"1r":(C.1r),"eD":C.dG*2t(v.7J,1),"xS":eh(C.3R),"hH-fV":C.iF+\'px\',"2V":"0 cl 0 cl","bs-92":"ej"});if(o.9m){if(2E(C.I4)){O(1v[i],{"eD":C.I4*2t(v.7J,1),})}}if(C.2x==1){if(C.1F.K("<a ")>-1||1d=="ci"){O(1v[i],{"a0":"2y"})}}if(C.Ij==1){O(1v[i],{"3R-dv":"Ij"})}if(C.lH>0){O(1v[i],{"3R-dv":C.lH})}if(C.I0){O(1v[i],{"oT":C.I0+"em"})}2W[i]==\'5H\'?2W[i]=2R("5H"):\'\';1v[i].1R=ye(2W[i]);1G(xM,100);C.w=1v[i].2b;C.h=1v[i].2S;if(2E(C.5a)){4i(1v[i],{"id":(v.id+"od"+C.5a+"10J")})}}if(C.1K=="O"){o.1E?1G(yg,4z):\'\'}B 9v=2W[i].6q();if(9v.K(\'B:\')==0){9v=2t(1S[9v.1q(4)],\'\')}B lm=9v.K(\'<2g\')>-1||9v.K(\'<10K\')>-1;if(C.1K=="2g"&&(9v.K(\'<g>\')>-1||lm)){if(1i=="5o"||1i=="59"){9v=9v.1V(/j9/g,\'j9\'+v.id+1d)}if(9v.K(\'4k\')>-1){cS(1v[i])}1v[i].1R=(!lm?"<2g 17=\'20\' 1e=\'20\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'>":\'\')+9v+(!lm?"</2g>":\'\');1v[i].2b>20?C.w=1v[i].2b:\'\';1v[i].2S>20?C.h=1v[i].2S:\'\';O(1v[i],{"17":C.w,"1e":C.h});if(C.bi!=-1){qp(1v,C.bi)}if(2E(C.5a)){4i(1v[i],{"id":(v.id+"od"+C.5a+"lw"+i)})}}dO.1N(1v[i]);i>0?1n(1v[i]):\'\'}bp();qv?w6():\'\';if(C.3m=="4B"){C.4B=1;C.1n=1;o.4B?1v[0].1R=o.4B.qz(C.bi!=-1?C.bi:\'#3L\'):\'\';if(o.1m.2n){1v[0].IR=vH;1v[0].11m=5r;1v[0].wA=vI}F{1v[0].jz=5R;1v[0].jP=5r;1v[0].le=dh}}F{if((bg.2b*C.1P<35||bg.2S*C.1P<35)&&C.1K!=\'1F\'){w5();cS(9y)}F{cS(bg)}}if(1i=="59"){B lu=\'\';if(C.fb==1&&J(C.3m)){lu=C.3m;if(lu.K("3z:")==0){B 1B=lu.1q(4).2D(",");if(1B.U==2){B wy=1B[1].2D("/");if(wy.U==2){1B[0]==\'hd\'?1B[0]="53":\'\';if(v[1B[0]]==wy[1]){C.a=1;O(1v[0],{"1C":C.a})}}}}if(lu=="IM"||lu=="4r"){o.X.gE();1a.C.4N=w8;o.w9=1}}if((C.1n==1&&(C.IY==1||C.J0==1||C.J2==1))||lu.K("6Y")==0||lu=="IW"||lu=="aF"){C.IA=1;if(7c([C.1l],"1a")){C.IJ=1}}if(lu.K("6Y")==0){1a.C.4N=w8}}W(B sf in C){if(2E(C[sf+\'4y\'+\'B\'])){if(2E(2Q[C[sf+\'4y\'+\'B\']])){C[sf]=2Q[C[sf+\'4y\'+\'B\']]}}}if(1i=="1j"&&C.f4==1){f4=1z 10N(1a,bg,C)}if(C.2x==0){fk(1a)}if(C.9K==1){1n(bg)}if(C.2A==1){pE()}if(C.1l.K("2k")>-1){gr=1}if(C.1l.K("1f")>-1){HH=1}if(C.1l.K("2O")>-1||C.1l.K("1a")>-1){iC=1}2C();B t=\'\';if(C.aN!=0){t+="oF("+C.aN+"xz)"}if(C.11n==1){t+=" 3u(-1)"}if(C.11O==1){t+=" 3q(-1)"}if(t!=\'\'){O(dO,{"2J":t})}if(1i=="b5"){iX()}B 1B=[];B i;if(1i=="Y"){1B=[\'eC\',\'GV\',\'lE\',\'GO\',\'lI\',\'pT\'];W(i=0;i<1B.U;i++){if(J(C[1B[i]])&&!J(v.Y[1B[i]])){v.Y[1B[i]]=C[1B[i]]}}}if(1i=="1I"){1B=[\'lL\',\'vL\',\'vK\'];W(i=0;i<1B.U;i++){if(J(C[1B[i]])&&!J(2Q[1B[i]])){v[1B[i]]=C[1B[i]]}}}C.qn==1?7P():\'\';if(1i=="59"&&C.on==0){3k(1a)}if(C.1n==1&&C.lB>0){1G(HC,C.lB*2p)}}E HC(){C.lB=-1;o.S.4U()}E w5(){if(9y){9y.3X.3p(9y)}9y=1Q("1Y");O(9y,{"1l":"2m","1f":0,"1c":0,"17":C.1K=="fH"?bg.2b:(bg.2b>35?bg.2b:35)*C.HE,"1e":C.1K=="fH"?bg.2S:(bg.2S>35?bg.2S:35)*C.xm});C=4A(C,\'hF\',\'hF\');1a.1N(9y)}E cS(x){if(1i.K("1b")==0&&X.U==1){C.2x=0}if(1i=="59"&&C.fb==0){C.2x=0}if(C.2x==1){if(C.l1==1){O(x,{"6M":"4k"})}O(x,{"a0":"2y"});if(o.1m.2n){x.1y("bL",E(e){vI(e)});x.1y("fS",E(e){vH(e)});x.1y("gN",E(e){H4(e)})}if(v.dc==1||!o.1m.2n){x.gB=8V}if(v.1u.hL==1||C.hL==1){O(x,{"2j-1r":"#o8","1C":0.5})}}F{O(x,{"6M":"7C"})}if(!o.1m.2n){x.jz=5R;x.jP=5r}if(C.3g==1||C.2A==1){x.le=dh}}E vI(e){js("11Q"+1d);e.bt();bL=H}E vH(e){C.H7==1?5R():\'\';e.bt()}E H4(e){e.bt();e.aj();C.H7==1?5r():\'\';if(!bL){8V(e)}bL=P}E bp(){if(bg){bg.3X.3p(bg)}bg=1Q("1Y");O(bg,{"1l":"2m","1f":0,"1c":0});if(2E(C.5a)){4i(bg,{"id":(v.id+"od"+C.5a+"11R")})}w=C.w;h=C.h;C.f3=-1;C.ba=-1;C=4A(C,\'2M\',\'2M\');C=4A(C,\'an\',\'an\');if(C.bu&&o.9m){if(C.bu!=\'0 0 0 0\'){C=4A(C,\'an\',\'bu\')}}if(C.1K=="1F"){w=1v[vG].2b;h=1v[vG].2S;if(C.vE>0){w<C.vE?w=C.vE:\'\'}}C=4A(C,\'he\',\'he\');C=4A(C,\'Ks\',\'Ks\');if(2E(C.5a)&&J(v.59)&&C.1i=="59"){if(1O(v.59)==\'3U\'){W(B i=0;i<7F.6d(v.59).U;i++){if(v.59[i][C.5a]){if(v.59[i][C.5a]=="6G"){C.on=0}F{B 1B=v.59[i][C.5a].2D(":");if(1B[0]=="2M-1c"){if(1B[1].K("%")>0){C.iq=2P(1B[1])}F{C.4o=2P(1B[1])}}}}}}}C.h=h;C.w=w;if(C.bg==1){h=h+C.a4+C.ai;w=w+C.7o+C.7p;C.h=h;C.w=w;if(C.1K=="1F"){C.jg=1v[0].2S}}F{C.4s=0}O(bg,{"17":(C.Lp==1?Lr:w),"1e":h,"xl":(C.nL*h)/2,"2j":(C.vw==1?"3e-4L("+(C.11S==1?"to 2k,":\'\')+4S(C.4j,C.4s)+","+4S(C.11T,C.4s)+")":4S(C.4j,C.4s)),"4I":"2j .1s 3e, 2J .1s 3e"+(2E(C.am)?\', 6a .1s 3e\':\'\')});if(C.1K=="fH"){O(bg,{"17":w,"1e":h,"xl":(C.nL*h/C.1P)/2,})}if(C.Bo==1){xn(bg,C.4j,C.Bt,C.Bv)}if(C.kY==1){O(bg,{"2Y":2t(C.11U,1)+"px 6w "+C.kZ})}if(C.aa==1){O(bg,{\'l5-6a\':\'aa(b7)\'})}ly.1N(bg)}E 2C(){B f3=(-bg.2S/2);B ba=(-bg.2b/2);if(f3!=C.f3||ba!=C.ba){O(bg,{"1f":(-bg.2S/2),"1c":(-bg.2b/2)});C.f3=f3;C.ba=ba}if(9y){B x=C.1K=="fH"?bg.2b:(bg.2b>35?bg.2b:35);B y=C.1K=="fH"?bg.2S:(bg.2S>35?bg.2S:35);O(9y,{"1f":(-y/2)+C.Bk-C.Bl,"1c":(-x/2)+C.11V-C.11W})}W(B i=0;i<2W.U;i++){B it=C.1K=="2g"?2I.47(2P(1v[i].C.1e))/2:2I.47(1v[i].2S)/2;B il=C.1K=="2g"?2P(1v[i].C.17)/2:1v[i].2b/2;if(it!=C.it[i]||il!=C.il[i]){O(1v[i],{"1f":-it,"1c":-il});if(bg){O(1v[i],{"1f":(5t(1v[i].C.1f)+C.a4/2-C.ai/2+C.11X/2+C.11Y/2),"1c":(5t(1v[i].C.1c)+C.7o/2-C.7p/2+C.12k/2+C.11P/2)})}C.it[i]=it;C.il[i]=il}}}E 5R(){B i;4w=H;if(C.dY==1){if(on&&J(C.qB)){i=1}F{i=0}if(aL&&dY.U>2){i=2}if(dY[i]){qb();1t(1v[dY[i]])}}if(C.bg==1){O(bg,{"2j":4S(vA(C.9T,C.4j),vA(C.8J,C.4s))});if(2E(C.am)){O(bg,{"6a":"bV("+C.am+")"})}}if(C.7r>-1&&!JZ){W(i=0;i<2W.U;i++){if(1v[i].C.5J!="3g"){O(1v[i],{"1C":C.7r})}}}if(C.pV!=-1){qp(1v,C.pV)}if(C.JM==1){io+=45;ib(1v[0],io)}if(C.f0>C.1P&&C.f0>-1){1P(C.f0)}if(1i=="1j"&&o.S.cN()){}F{if(C.2A==1&&C.qn!=1){B x=7m.U>1&&!on?7m[1]:7m[0];if(x){if(x.K(\'B:\')==0){2T.1R=1S[x.1q(4)];7P()}}1t(2A);O(2A,{"1C":1})}}if(1i=="5o"){o.X.5D(H);o.5D=H}o.eb=H;o.S.kF(1d,"4w")}E 5r(){4w=P;B i;if(C.dY==1){if(on&&J(C.qB)){i=1}F{i=0}if(aL&&dY.U>2){i=2}qb();1t(1v[i])}if(C.bg==1){O(bg,{"2j":4S(C.4j,C.4s)});if(2E(C.am)){O(bg,{"6a":"bV(1)"})}}if(C.7r>-1){W(i=0;i<2W.U;i++){if(1v[i].C.5J!="3g"){O(1v[i],{"1C":C.a})}}}if(C.f0>-1){1P(C.1P)}if(C.pV!=-1){qp(1v,(C.bi==-1?\'#3L\':C.bi))}if(1i=="5o"&&!o.2a){o.X.5D(P);o.5D=P}vz();o.eb=P;o.S?o.S.kF(1d,"4m"):\'\'}E vz(){if(C.2A==1&&C.qn!=1){1n(2A);O(2A,{"1C":0})}}E 8V(e){e?e.6L=H:\'\';if(!qC){o.S.fc(1d);if(1i=="59"){q0()}vz();if(C.123==1){io+=45;ib(1v[0],io)}i5=H;if(C.JS==1||(1d=="vN"&&C.1n==1&&C.vF==1)){o.S.4U()}}};G.JX=E(){8V()};E q0(){if(2W){if(2W.U>1){if(on==H){1t(1v[0]);1n(1v[1])}F{1t(1v[1]);1n(1v[0])}}if(C.2A==1&&7m.U>1){2T.1R=o.ni+(on==H?7m[0]:7m[1])+o.iZ;7P()}}if(J(C.vO)){if(on==H){C.3m=C.vO}F{C.3m=C.qg}}qf();on=on!=H;if(C.3m){if(C.3m.K(",0/1")>-1){js(C.3m,on?1:0)}}if(C.bg==1&&J(C.vY)){if(C.vY!=-1){if(on){C.Ls=C.4j;C.4j=C.vY}F{C.4j=C.Ls}bp();cS(bg);2C();if(C.1K=="1F"){9D()}F{1P(C.1P)}}}}E qf(){if(J(C.hn)){if(C.hn.U>1){if(on==H){6u(C.hn[0])}F{6u(C.hn[1])}}}}E yc(1h){1h.6L=H;o.S.fc(1d)}E qb(){W(B i=0;i<2W.U;i++){if(1v[i].C.5J!="3g"){O(1v[i],{"1C":C.a});1n(1v[i])}}}E xM(1F){if(1v[0]){if(1v[0].2b>o.2Z-C.4o-C.4q-C.7o-C.7p){if(C.ym==1){if(!1F){1F=1v[0].1R}1v[0].1R=\'<ym>\'+1F+\'</ym>\'}F{O(1v[0],{"bs-92":"er"})}O(1v[0],{"17":o.2Z-C.4o-C.4q-C.7o-C.7p})}}}E w6(){if(bg){qv=P;C.9K=0;1n(bg);if(1v[0]){C.w=1v[0].2b*C.1P;C.h=1v[0].2S*C.1P;1P(C.1P)}C.ak=0;bp();w5();cS(9y);1t(bg);2C();o.S.4Y();if(!5A(1a)){3k(1a)}}F{qv=H}}E B1(1h){1h.6L=H}E dh(){if(!o.1m.2n&&!o.eb){5R()}7P()}E 1P(x){if(x>0){O(bg,{"2J":"1P("+x+")"});W(i=0;i<2W.U;i++){O(1v[i],{"2J":"1P("+x+")"})}if(C.j8){C.j8.1P(x)}3u=x;3q=x}}E pE(){2A=1Q("1Y");O(2A,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'1e\':\'2y\',"1C":0,"4I":"1C 0.1s 3e"});iw=1Q("1Y");C=4A(C,\'jU\',\'jU\');C=4A(C,\'Jc\',\'Jc\');O(iw,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':\'100%\',\'1e\':30,\'2j-1r\':C.jZ,\'1C\':C.k9,\'2Y-6Q\':C.xZ});2T=1Q("1Y");O(2T,{\'1l\':\'2m\',\'1c\':C.xc,\'1f\':C.pG,\'1r\':C.xC,\'3R-dq\':eh(C.xg),\'3R-3T\':C.xD*2t(v.7J,1),"hH-fV":C.xX+\'px\',"2F-1e":"1"});if(C.2T){if(C.2T.K("B:")==0){C.Jp=H}}if(!C.Jp){O(2T,{\'bs-92\':\'ej\'})}if(C.ht==1){8O=1Q("1Y");8O.1R=\'<2g 17="b7" 1e="y5" y6="0 0 8 6" 8S="1.1" 4g="3J://4e.w3.4a/4d/2g" 4g:4f="3J://4e.w3.4a/7k/4f"><hr id="C1" 3E="1U" 5g="#\'+C.jZ.1V("#","")+\'" 5g-pM="C2" 2v="0 0 8 0 4 6"></hr></2g>\'}if(C.qn==1){O(2A,{"1C":1});cS(2A)}F{fk(2A)}1a.1N(2A);2T.1R=o.ni+(C.2T==\'\'?2R(1i):7m[0])+o.iZ;2A.1N(iw);2A.1N(2T);if(C.ht==1){2A.1N(8O);B vZ=o.w0?\'-b7\':\'-y5\';B ps=C.126;if(!J(ps)){ps=\'\'}B tp=ps.K("1f")>-1;if(tp){ib(8O,\'-129\')}O(8O,{\'1l\':\'2m\',\'2k\':(ps.K("2k")>-1?10*C.1P:\'2y\'),\'1c\':(ps.K("1c")>-1?10*C.1P:(ps==\'\'||ps==\'1f\'?\'50%\':\'2y\')),\'2M-1c\':(ps==\'\'||ps==\'1f\'?\'-Dn\':0),\'2O\':(tp?\'2y\':vZ),\'1f\':(tp?vZ:\'2y\'),\'1C\':C.k9})}7P()}E 7P(){if(C.2A==1){O(2A,{"1f":(iC==1?-h-2A.2S+3:-2A.2S/2)+C.12a-C.12b,"1c":(gr==1?-2T.2b:(iC==1?-w/2:+2T.2b))-(iC==1?0:2T.2b/2+5)+C.12c-C.12d,"1e":C.pG+2T.2S+C.xd,"17":C.xc+2T.2b+C.AN});O(iw,{\'1e\':2A.2S});2A.C.4N="2p"}}G.c=E(){I 1a};G.s=E(x){I C[x]};G.ss=E(x,x2){I J(C[x])?C[x][x2]:P};G.g=E(x){b3(x){1o"17":I w;1k;1o"1e":I h;1k;1o"h":I 2t(C.jg,h);1k;1o"x":I 5t(1a.C.1c);1k;1o"y":I 5t(1a.C.1f);1k;1o"1C":I 1a.C.1C?1a.C.1C:1;1k;1o"1t":I 4D;1k;1o"3u":I 3u;1k;1o"3q":I 3q;1k;1o"1i":I 1i;1k;1o"Jn":I aw;1k;1o"i5":I i5;1k;1o"1K":I C.1K;1k;1o"U":I C.qA?C.qA:0;1k;1o"1d":I 1d;1k;1o"x0":I x0;1k;1o"y0":I y0;1k;1o"4w":I 4w;1k;1o"1j#":I aw.K("1j#")==0;1k;1o"1j:":I aw.K("1j:")==0;1k;1o"vW":I 1i=="59"&&C.1K=="1F";1k;1o"26#4D":I vS;1k;7C:I P}};G.26=E(k,x){b3(k){1o"1t":4w?5r():\'\';4D=x;1k;1o"2l":HF(x);1k;1o"6k":6k(1a);1k;1o"3k":3k(1a);1k;1o"Jt":C.3g=0;1k;1o"vV":if(C.KT>0&&C.3g!=1&&!hZ){2N(hZ);hZ=1G(E(){3k(1a);(C.12e!=1?C.3g=1:\'\');hZ=1M},C.KT*2p)}1k;1o"1P":1P(x);1k;1o"12f":O(1a,{"2J":"1P(0)"});1k;1o"3u":O(1a,{"2J":"3u("+x+")"});3u=x;1k;1o"3q":O(1a,{"2J":"3q("+x+")"});3q=x;1k;1o"1C":O(1a,{"1C":x});1k;1o"vT":O(1v[0],{"1C":x});1k;1o"gF":O(1v[0],{"6a":"gF("+x+")"});1k;1o"1c":O(1a,{"1c":x});1k;1o"1f":O(1a,{"1f":x});1k;1o"17":O(1a,{"17":x});1k;1o"1e":O(1a,{"1e":x});1k;1o"wV":C.wV=x;1k;1o"gr":gr=x;1k;1o"26#4D":vS=x;1k;1o"x":O(1a,{"1c":x});1k;1o"y":O(1a,{"1f":x});1k;1o"6h":C.6h=x;1k;1o"6Y":C.6Y=x;1k;1o"x0":x0=x;1k;1o"y0":y0=x;1k;1o"gu":C.gu=x;1k;7C:I P}};E HF(x){if(x&&o.1m.2n){qC=H;1G(IG,dN)}if(!x){if(qc()&&aL){1n(1v[hV]);1t(1v[0]);aL=P}}if(C.9K==1){x?1t(1a):1n(1a)}F{if(1d=="12g"||1d=="II"){x?1t(1a):1n(1a)}F{O(1a,{"2l":(x?"4r":"1U")})}4D=x;x?1t(1a):\'\'}if(x&&C.qr){C.qr=P;1G(9D,100)}}E IG(){qC=P}G.6u=E(x,y){if(aw!=\'\'&&(C.1F==\'x\'||C.1F==\'1x\')){x=x+\'x\'}if(y){x=C.1F+x}6u(x);!5A(1a)?C.qr=H:\'\'};B xE;G.i8=E(x){if(xE!=x){C.9J=x;6u(x);!5A(1a)?C.qr=H:\'\';o.S?o.S.4Y():\'\'}xE=x};G.xU=E(){ib(dO,lO);lO+=20};E ib(x,y){O(x,{"2J":"oF("+y+"xz)"+(x==1v[0]&&!HL&&3u!=1?\' 1P(\'+3u+\')\':\'\')})};G.HS=E(x){if(C.1F.K("{1I")>-1){6u(C.1F)}};G.q0=E(){q0()};E 6u(1F){if(C.1K=="1F"){if(J(1F)){if(C.Ig){if(1F.U==4){1F=(C.q4?\'0:0\':\'cK:0\')+1F}if(1F.U==5){1F=(C.q4?\'0:\':\'cK:\')+1F}if(1F.U==7){1F=(C.q4?\'\':\'0\')+1F}}if(C.Ib){if(1F.U==4){1F=\'0\'+1F}}C.qA=1F.U}1F=(C.xT?C.xT+(C.Ii?\'\':\' \'):\'\')+1F+(C.xQ?\' \'+C.xQ:\'\');B IX=1v[0].2b+(C.bg==1?C.a4+C.ai:0);B J4=1v[0].2S+(C.bg==1?C.a4+C.ai:0);1v[0].1R=o.ni+(1i=="59"?ye(1F):1F)+o.iZ;if(C.12h==1){1v[0].1R+=\'<7x C="2l:d5-4r;17:e4"></7x><7x C="2Y-1f: cl 6w \'+3C(C.1r)+\';2Y-1c: cl 6w eF;2Y-2k: cl 6w eF;1l: 2m;2k:cl;1f: 50%;2M-1f: -42;"></7x>\'}if(1i=="1I"){O(1v[0],{"17":"2y","bs-92":"ej"});xM(1F)}C.w=1v[0].2b+(C.bg==1?C.a4+C.ai:0);C.h=1v[0].2S+(C.bg==1?C.a4+C.ai:0);if(IX!=C.w||J4!=C.h||(C.w>0&&xF==0)){9D()}if(1v[0].2b>0){xF=C.w}F{aw!=\'\'?1n(1v[0]):\'\';if(1F!=\'\'){1G(9D,10)}}}}G.9D=E(){9D()};E qc(){I!o.R.5B()&&C.IK==1}E 9D(){if(C.1K=="1F"){if(1v[0]){if(1v[0].2b>0){aw!=\'\'?1t(1v[0]):\'\';w=C.w=1v[0].2b;h=C.h=1v[0].2S;bp();cS(bg);2C();if(o.S){if(7c([C.1l],"1a")){o.S.xL()}F{o.S.4Y()}}}}}}G.xK=E(x){if(C.Iq==1){B n=4;if(1d=="12i"){if(o.1m.2n){I}}F{n=8}B y=\'j9\';B z=[];W(B i=1;i<n;i++){z[i]=22.8y(y.aB(v.id,1d,\'124\',i))}if(z[1]){W(B i=1;i<n;i++){z[i]?1n(z[i]):\'\'}if(n==4){W(B i=1;i<n;i++){x>(i/n)&&z[i]?1t(z[i]):\'\'}}F{W(B i=n;i>0;i--){if(x*1+(1/n)>=(i/n)&&z[i]){1t(z[i]);1k}}}}}};G.On=E(){if(!on){if(2W){if(2W.U>1&&X.U>1){1n(1v[0]);1t(1v[1])}}if(X.U>1){1i=X[1];if(C.2A==1){2T.1R=jd(1);7P()}}if(qc()&&aL){1n(1v[hV]);aL=P}qf();on=H}};E jd(x){I o.ni+(C.2T==\'\'?2R(X[x]):(7m.U>1?7m[x]:7m[0]))+o.iZ}G.cV=E(x){cV(x)};G.GB=E(x,y){if(C.j8){C.j8.cY(x,y)}};E cV(x){B y=\'j9\';B z=22.8y(y.aB(v.id,1d,\'11N\'));if(z){O(z,{"4I":"2J 0.1s 5l-4m"});if(x==1){z.C.2J=\'Gx(0, 0)\'}F{z.C.2J=\'Gx(-Gy, 0)\'}}F{if(x==1){C.a=1}F{C.a=0.5}}on=x==1;if(C.2A==1&&7m.U>1){2T.1R=(on?7m[0]:7m[1])}O(1v[0],{"1C":C.a})};G.jc=E(){if(on){if(2W){if(2W.U>1&&X.U>1){1t(1v[0]);1n(1v[1]);O(1v[0],{"1C":C.a})}}1i=X[0];if(X.U>1){if(C.2A==1){2T.1R=jd(0);7P()}}qf();on=P;aL=P}};G.yc=E(){if(qc()){qb();1t(1v[hV]);aL=H}};G.GA=E(){B 2K=P;if(C.1n==1){if(C.GD==1){if(5A(o.2i)){2K=H}}if(C.Hn==1&&!o.2a){2K=H}if(C.yk==1&&o.2a){2K=H}}if(!2K){6k(1a);B eY=1a.ac("*");W(B i=eY.U;i--;){O(eY[i],{"6h-1A-7n":"11B"})}4D=H}};G.iX=E(){iX()};E iX(){3k(1a);B eY=1a.ac("*");W(B i=eY.U;i--;){O(eY[i],{"6h-1A-7n":"8q"})}4D=P}G.4n=E(){if(2W.U>0){W(i=0;i<2W.U;i++){if(1v[i].3X==1a){1a.3p(1v[i])}1v[i]=1Z}}if(bg){bg.gA("gB");bg.gA("jz");bg.gA("jP");bg.3X.3p(bg);bg=1Z}if(C.1l==\'ay\'){if(1a.3X==o.ay){o.ay.3p(1a)}}F{if(1a.3X==o.1T){o.1T.3p(1a)}F{if(o.1u){if(1a.3X==o.1u){o.1u.3p(1a)}}}}if(2A){if(2A.3X==1a){1a.3p(2A)}}1a=1Z};G.Hv=E(){f4?f4.iW():\'\'};G.Hz=E(){yg()};E yg(){He(2W[0],C.1r,1v[0])}E ye(x){B z=x+\'\';if(x.K(\'{\')>-1){if(x.K(\'{1b}\')>-1&&J(o.3x)){x=x.1V(\'{1b}\',fN(o.3x.ax().t))}if(x.K(\'{1I\')>-1){B y=o.cw?o.cw:(v.1I?v.1I:\'\');if(x.K(\'{d3}\')>-1&&o.S){x=x.1V(\'{d3}\',o.S.cg(\'d3\'))}if(o.bG&&o.S){y=o.S.cg(\'bG\')}x=x.1V(\'{1I}\',y);if(o.bG&&!o.S){1G(6u,100,z)}}if(x.K(\'{1F\')>-1){W(B i=1;i<6;i++){if(x.K(\'{1F\'+i+\'}\')>-1){if(J(v[\'1F\'+i])){x=x.1V(\'{1F\'+i+\'}\',v[\'1F\'+i])}F{x=x.1V(\'{1F\'+i+\'}\',\'\')}}}}if(x.K(\'{6S}\')>-1){o.iM=1d;if(o.S){x=x.1V(\'{6S}\',o.S.cg(\'Hf\'))}}}I x}G.yb=E(){6u(C.1F)};E qp(1v,5O){W(B i=0;i<1v.U;i++){J7(1v[i],5O)}if(C.3m=="4B"){if(o.4B){o.4B.11M(1v[0],5O)}}}};B KH=E(1d,1i){B i;B C=[];B w;B h;B bg;B 4D=H;B x0;B y0;B 3u=1;B 3q=1;B fJ=0;B 9G=0;B 11q;B 3O;B nY;B 4w;B 2x;B 3H;B Cw;B Co;B x5;B Cd;B 2A;B 2T;B 8O;B fK;B xe;o.Bs=-1;B nN;B 4w;B xu;W(i in g8.V){C[i]=g8.V[i]}B 1i=v[1d].1i;B 1K=v[1d].1K;W(i in g8[1i]){C[i]=g8[1i][i]}W(i in v[1d]){C[i]=v[1d][i]}C.w=2P(C.w);C.h=2P(C.h);C=4A(C,\'2M\',\'2M\');C=4A(C,\'an\',\'an\');if(o.9m){if(C.KM>0){C.w=2P(C.KM)}if(C.bu){if(C.bu!=\'0 0 0 0\'){C=4A(C,\'an\',\'bu\')}}}B 1a=1Q("1Y");if(v.1u.ec==1&&v.1u.1n==1){o.1u.1N(1a)}F{o.1T.1N(1a)}1i=="2F"?o.ay=1a:\'\';B 8T=P;if(C.7V){if(C.7V!=\'1L\'){8T=H}}O(1a,{"1l":"2m","1f":0,"1c":0,"1C":1,"eD":"pt","oT":"jo"});if(C.KN==1){1a.C.4N=C.5y}bp();B 9k=1Q("1Y");O(9k,{"1l":"2m","2O":2I.47(-C.h/2),"1c":2I.47(-C.w/2)});if(C.6P>0&&C.JF==1){O(9k,{"2Y-6Q":C.6P*C.h/2,"1e":C.h,"5v":"3g","4k-3c":"1U"})}if(2E(C.5a)){4i(1a,{"id":(v.id+"od"+C.5a)})}1a.1N(9k);if(1i==\'2F\'&&v.y7==1){BT()}if(C.2A==1){pE()}B 9I=1Q("1Y");hA(0,9I,0.3,(C.4L==1?"3e-4L("+(C.xa==1?"to 1c,":\'\')+3C(C.KR)+", "+3C(C.oi)+")":3C(C.oi)),C.w,C.11r);if(C.Lg==1&&J(C.oq)){B iU=1Q("1Y");iU.1R=C.oq.1V(/\\#Lq/g,3C(C.oi));9I.1N(iU);O(iU,{"1l":"2m","2O":-2I.47(C.h/2),"1c":0,"4k-3c":"1U"});O(9I,{"5v":"3g","2j":"1U"});B x=["8Y","hr","oh","hB","dx"];W(B y=0;y<x.U;y++){B z=iU.xB("2g "+x[y]);if(z.U>0){W(B y2=0;y2<z.U;y2++){z[y2].C.5g=3C(C.oi)}}}}9k.1N(9I);B 11s=[];B da=1Q("1Y");hA(1,da,C.Kn,(C.4L==1?"3e-4L("+(C.xa==1?"to 1c,":\'\')+3C(C.Ko)+", "+3C(C.Kr)+")":C.Kr),0,C.11t);9k.1N(da);if(C.7r>0){B dn=1Q("1Y");hA(2,dn,C.KU,C.11u,0,C.7r);9k.1N(dn)}B 7w=1Q("1Y");hA(3,7w,C.Ll,(C.4L==1?"3e-4L("+(C.xa==1?"to 1c,":\'\')+3C(C.Ln)+", "+3C(C.1r)+")":C.1r),0,C.a);if(C.Lg==1&&J(C.oq)){B os=1Q("1Y");os.1R=C.oq.1V(/\\#Lq/g,3C(C.1r));O(os,{"1l":"2m","2O":-2I.47(C.h/2),"1c":0,"4k-3c":"1U"});O(7w,{"5v":"3g","2j":"1U"});7w.1N(os)}if(C.5Y==1){B d7=1Q("1Y");C=4A(C,\'x9\',\'x9\');C=4A(C,\'x8\',\'x8\');O(d7,{"1l":"2m","2O":C.h/2,"1c":0,"4k-3c":"1U","3R-3T":C.L2*2t(v.7J,1),"1r":C.62,"2F-1e":"100%","2V-1f":C.11v,"2V-2O":C.15d,"2V-1c":C.11w,"2V-2k":C.11x,"2M-1f":C.11y,"2M-2O":C.11z,"2M-1c":C.11p,"2M-2k":C.11A,"2Y-6Q":(C.JE+"px"),"2l":"1U"});if(C.Jg==1){O(d7,{"2j":3C(C.Jd)})}7w.1N(d7);B jt=P;B 11C=P}o.oB=C.h;9k.1N(7w);if(C.e0==1){B 2v=[];if(1O wU!=="1M"){B 9E=1z wU(1a,2v,w,C)}}if(C.3H==1){if(C.dp.6q().K(\'<2g\')==-1){C.dp==\'\'?C.dp="<2g 17=\'20\' 1e=\'20\'><g><dx ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 5g=\'#f9\'/></g></2g>":\'\'}3H=1Q("1Y");3H.1R=C.dp.6q();C=4A(C,\'Kb\',\'Kb\');O(3H,{"1l":"2m","1f":-10+C.11D-C.11E,"1c":-2p,"4k-3c":"1U","1e":20,"17":C.hl,"1C":C.xq,"4I":"2J 0.1s 3e, 1C 0.1s 3e"});if(C.jh==1||C.wX==1){O(3H,{"2J":"1P(0)"})}F{if(C.nR!=1){O(3H,{"2J":"1P("+C.nR+")"})}}if(C.11F==1){O(3H,{"6a":"11G-9X(42 42 cl 5c(0, 0, 0, .7))"})}1a.1N(3H);if(C.xA!=-1){B x=["8Y","hB","dx"];W(B y=0;y<x.U;y++){B z=3H.xB("2g "+x[y]);if(z.U>0){W(B y2=0;y2<z.U;y2++){z[y2].C.5g=3C(C.xA)}}}}C.gY=3H.2b}if(C.aN!=0){O(1a,{"2J":"oF("+C.aN+"xz)"})}if(C.3g==1){1n(1a);4D=P}if(1i=="1L"&&!8T){if(C.1n==1&&C.hx==1){o.hP=H;C.3g=H}F{o.hP=P}}C.bm=0;if(C.aN!=0){C.hK=2I.Cz(C.aN);if(C.hK>45&&C.hK<135){C.bm=90}if(C.hK>11H&&C.hK<Js){C.bm=B0}}if(8T){C.7V?o[\'2F\'+\'4y\'+C.7V]=C.7V:\'\';w=C.w;C.7V=="5m"?6K(1,o.6f.7f(-1)[0],"no"):\'\';if(C.7V=="xY"){B pv=v.1L;v.2h?(v.2h.1L?pv=v.2h.1L:\'\'):\'\';6K(pv,1,"no")}}E hA(n,x,y,z,JJ,Jw){O(x,{"1l":"2m","2O":0,"1c":0,"17":JJ,"1e":(C[\'h\'+n]>0?C[\'h\'+n]:C.h),"2j":z?(z.K("3e")>-1?z:3C(z)):\'\',"2Y-6Q":(C.JF==1?1:C.6P*C.h/2),"1C":Jw,"4k-3c":"1U","4I":"2J 0.2s 5l-in-4m"})}E bp(){bg=1Q("1Y");C=4A(C,\'he\',\'he\');B jg=C.h+C.a4+C.ai;B Ki=C.w+C.7o+C.7p;if(C.bg==1){}F{C.4s=0}C=4A(C,\'hF\',\'hF\');if(v.1u.hL==1||C.hL==1){C.4j=\'#o8\';C.bg=1;C.4s=0.5}O(bg,{"1l":"2m","1f":0,"1c":0,"17":Ki,"1e":jg*C.xm,"xl":(C.nL*jg)/2,"2j":4S(C.4j,C.4s),"a0":"2y","4I":"1C .1s 3e, 2j .1s 3e"});if(C.aa==1){O(bg,{\'l5-6a\':\'aa(b7)\'})}if(C.kY==1){O(bg,{"2Y":"42 6w #"+C.kZ})}if(C.2x==1){if(C.l1==1){O(bg,{"6M":"4k"})}if(!o.1m.2n||v.dc==1){bg.gB=8V;bg.11I=xt;bg.11J=nZ;bg.le=dh}}F{O(bg,{"6M":"7C"})}if(!o.1m.2n){bg.jz=5R;bg.le=dh;bg.jP=5r}if(o.1m.xj&&C.2x==1){bg.1y("fS",E(1h){1h.6L=H;if(!J(1h.6y)&&1h.8d.U>0){1h.6y=1h.8d[0].kP;1h.9j=1h.8d[0].m0}nN=1h;5R(1h);nZ(1h)});bg.1y("gN",E(1h){1h.6L=H;o.3O=P;5r(1h);xt(nN)});bg.1y("2x",E(1h){1h.6L=H});bg.1y("bL",E(1h){if(!J(1h.6y)&&1h.8d.U>0){1h.6y=1h.8d[0].kP;1h.9j=1h.8d[0].m0}nN=1h;o.3O=H;dh(1h);if(o.1m.xj){nZ(1h)}})}O(bg,{"1c":2I.xk(-C.w/2-C.7o)});O(bg,{"1f":2I.xk(-C.h/2-C.a4+C.Bk-C.Bl)});if(C.Bo==1){xn(bg,C.4j,C.Bt,C.Bv)}1a.1N(bg)}E 2C(17){if(17!=w){w=17;o.xo=w;B bA=w/9I.2b;O(bg,{"17":(w+C.7o+C.7p),"1c":-w/2-C.7o,});O(9k,{"1c":-w/2});O(9I,{"17":w});O(9k,{"17":w});B xx=da.2b*bA;if(xx>9I.2b){xx=9I.2b}O(da,{"17":xx});B wp=7w.2b*bA;O(7w,{"17":wp});jr(wp);if(1i=="2F"){BG()}if(C.e0==1){9E?9E.xr(w):\'\'}if(o.6p){o.6p.2C()}}}E jr(x){if(C.3H==1){if(x<C.gY/2&&C.hl!=20){x=C.gY/2}if(x>w-C.gY/2&&C.hl!=20){x=w-C.gY/2}B y=x-w/2-C.gY/2+C.11K-C.11L;O(3H,{"1c":y})}}E wY(){O(3H,{"2J":"1P("+C.nR+")"})}E 5R(1h){o.S.kF(1d,"4w");if(C.bg==1){if(C.8J!=-1){B m=1z 5Q({"mc":bg,"1K":"8R","to":C.8J,"1b":0.1,"me":(1d+"bg")})}if(2E(C.9T)){O(bg,{"2j-1r":C.9T})}}if(2E(C.xp)){O(7w,{"2j-1r":C.xp})}if(C.3H==1){if(C.By==1&&J(C.xi)){if(C.o0==1&&3O){}F{3H.1R="<2g 17=\'"+C.hl+"\' 1e=\'20\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'>"+C.xi.6q()+"</2g>"}}if(C.jh==1){if(C.wX==1&&!o.1E){}F{wY()}}F{if(C.nU!=-1){B m2=1z 5Q({"mc":3H,"1K":"8R","to":C.nU,"1b":0.1,"me":(1d+"3H")})}}}if(C.2A==1&&(o.R.1p()>0||1i=="1L"||8T)){jJ()}if(C.gf>0){O(bg,{"2J":"3q("+((C.gf-1)/5+1)+")"});xs(C.gf)}if(C.3H==1&&C.wZ==1){jr(e3(1h.6y)-9G)}if(1i=="1L"){o.X.5D(H);o.5D=H}4w=H;o.eb=H}E xs(x){O(9I,{"2J":"3q("+x+")"});O(da,{"2J":"3q("+x+")"});dn?O(dn,{"2J":"3q("+x+")"}):\'\';O(7w,{"2J":"3q("+x+")"})}E 5r(){if(!nY){if(C.7r>0){O(dn,{"17":0})}if(2E(C.xp)){O(7w,{"2j-1r":C.1r})}if(C.bg==1){if(C.8J!=-1){B m=1z 5Q({"mc":bg,"1K":"8R","to":C.4s,"1b":0.1,"me":(1d+"bg")})}if(2E(C.9T)){O(bg,{"2j-1r":C.4j})}}if(C.3H==1){if(C.By==1&&J(C.xi)){if(C.o0==1&&3O){}F{3H.1R="<2g 17=\'"+C.hl+"\' 1e=\'20\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'>"+C.dp.6q()+"</2g>"}}if(C.jh==1){O(3H,{"2J":"1P(0)"})}F{if(C.nU!=-1){B m2=1z 5Q({"mc":3H,"1K":"8R","to":C.xq,"1b":0.1,"me":(1d+"3H")})}}}if(C.gf>0){O(bg,{"2J":"3q(1)"});xs(1)}if(1i=="1L"&&!o.2a){o.X.5D(P);o.5D=P}o.S.kF(1d,"4m")}if(C.e0==1&&9E){9E.4m()}if(C.2A==1&&(o.R.1p()>0||1i=="1L")){pk()}if(o.oa&&1i=="2F"){o.th.1n();o.Bs=-1}4w=P;o.eb=P}E 8V(1h){1h.6L=H}E B1(1h){1h.6L=H}E xt(1h){if(1i=="1L"){if(o.9z){nY=H;2N(xu);xu=1G(E(){nY=P;5r()},2p)}}wW();o.3O=P;if(C.3H==1){if(C.o0==1&&J(C.xy)){3H.1R="<2g 17=\'20\' 1e=\'20\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'>"+C.dp.6q()+"</2g>"}}d4(1h.6y,1h.9j);o.S.fc(1d);o.S.f1(1h.6y,1h.9j);1h.6L=H}E nZ(1h){3O=H;if(C.3H==1){if(C.o0==1&&J(C.xy)){3H.1R="<2g 17=\'20\' 1e=\'20\' 4g:4f=\'3J://4e.w3.4a/7k/4f\' 4g=\'3J://4e.w3.4a/4d/2g\'>"+C.xy.6q()+"</2g>"}}fJ=kQ(bg);9G=gH(bg);d4(1h.6y,1h.9j);6K(2x,1,"no")}E d4(dE,dz){B x;dE=e3(dE);dz=e3(dz);B AP=2I.5N(22.pi.aU,22.3P.aU);B AZ=2I.5N(22.pi.di,22.3P.di);if(o.1m.2n){}F{dz=dz+AZ;dE=dE+AP}if(C.bm>0){x=dz-fJ-C.7p;2x=x/w;if(C.bm==B0){x=dz-fJ-C.7o;2x=x/w;2x=(2x-1)*-1}}F{x=dE-9G-C.7o;2x=x/w;if(C.aN>134&&C.aN<11o){x=dE-9G-C.7p;2x=x/w;2x=(2x-1)*-1}}2x>1?2x=1:\'\';2x<0?2x=0:\'\'}E e3(x){if(o.aq>1){x=x/o.aq}I x}G.B3=E(){9E?9E.xr(w):\'\'};G.l0=E(){9E?9E.cY(w):\'\'};E wW(){3O=P}E dh(1h){9G=gH(bg);if(C.7r>0){if(o.1E||1i!=\'2F\'){O(dn,{"17":e3(1h.6y)-9G})}}if(C.2A==1&&(o.R.1p()>0||1i=="1L"||8T)){jJ();fJ=kQ(bg);d4(1h.6y,1h.9j);if(1i=="2F"){if(v.10m==1){if(o.R.5B()&&o.R.cU().K("?xf")>0){2T.1R=\'- \'+fN((1-2x)*o.R.1p(H))}F{2T.1R=fN(2x*o.R.1p())}}F{B d=o.R.1p();if(v.4G>0){d=d-v.4G*1}B 8w=\'\';if(C.e0==1&&9E){8w=9E.2A(2x*d);8w!=\'\'?8w=8w+\'<br>\':\'\'}2T.1R=8w+fN(2x*d)}}if(1i=="1L"||8T){2T.1R=y8(2x)}7P(1h)}if(o.oa&&1i=="2F"&&o.th){xe=1h;if(!fK||v.B4!=1){x6()}if(v.B4==1){2N(fK);fK=1G(x6,50)}}if(C.3H==1&&C.wZ==1){jr(e3(1h.6y)-9G)}}E x6(){2N(fK);fK=1M;if(C.2A==0){fJ=kQ(bg);9G=gH(bg);d4(1h.6y,1h.9j)}4w?o.th.b9(xe,w,2x,9G):\'\'}E 7P(1h,t,l){B 1c=(-w/2+(e3(1h.6y)+22.pi.aU-9G)-2T.2b/2)+(l?l:0);B jA=0;if(v.w7!=1){if(1c+w/2+2T.2b+10>o.2Z){jA=1c;1c=o.2Z-w/2-2T.2b-10}if(1c+o.2Z/2<0){jA=1c;1c=-o.2Z/2}}B x={"1f":(-2T.2S-C.B7*1-C.pG-C.xd)-(C.B8==1?(C.h/2)*(C.gf>0?C.gf:1):0)+(t?t:0),"1c":1c};O(2A,x);if(C.ht==1){O(8O,{\'1l\':\'2m\',\'1c\':2T.2b/2-4+(jA!=0?jA-1c:0),\'1f\':2T.2S-6})}}G.jJ=E(e,x,t,l){jJ();2T.1R=x;7P(e,t,l)};E jJ(){if(!5A(2A)||2A.C.1C==0){1t(2A);O(2A,{"1C":1})}}G.pk=E(){pk()};E pk(){1n(2A);O(2A,{"1C":0})}G.c=E(){I 1a};G.s=E(1d){I C[1d]};G.ss=E(x,x2){I C[x][x2]};G.g=E(x){b3(x){1o"17":I w;1k;1o"Zm":I 9I.2b;1k;1o"1e":I C.h;1k;1o"x":I 5t(1a.C.1c);1k;1o"y":I 5t(1a.C.1f);1k;1o"1C":I 1a.C.1C?1a.C.1C:1;1k;1o"1t":I 4D;1k;1o"3u":I 3u;1k;1o"3q":I 3q;1k;1o"1i":I 1i;1k;1o"1d":I 1d;1k;1o"x0":I x0;1k;1o"y0":I y0;1k;1o"2x":I 2x;1k;1o"g5":I 8T;1k;7C:I P}};G.26=E(1d,x){b3(1d){1o"1t":4D=x;1k;1o"3O":3O=x;1k;1o"2l":1i=="2F"||C.1n==1?O(1a,{"5J":(x?"4D":"3g")}):O(1a,{"2l":(x?"4r":"1U")});4D=x;1k;1o"3u":O(1a,{"2J":"3u("+x+")"});3u=x;1k;1o"3q":O(1a,{"2J":"3q("+x+")"});3q=x;1k;1o"1C":O(1a,{"1C":x});1k;1o"1c":O(1a,{"1c":x});1k;1o"1f":O(1a,{"1f":x});1k;1o"2x":2x=x;1k;1o"dT":C.dT=x;1k;1o"17":O(1a,{"17":x});1k;1o"1e":O(1a,{"1e":x});1k;1o"wV":C.10l=x;1k;1o"x":O(1a,{"1c":x});1k;1o"y":O(1a,{"1f":x});1k;1o"x0":x0=x;1k;1o"y0":y0=x;1k}};G.2C=E(x){2C(x)};G.q6=E(x){};G.f7=E(aK,bn){if(3O){if(1i=="1L"||8T){d4(aK,bn);o.S.fc(1d)}if(1i=="1L"){o.9z=H}d4(aK,bn);6K(2x,1,"no")}};G.f1=E(aK,bn){if(3O){wW();3O=P;d4(aK,bn);o.S.fc(1d);6K(2x,1,"no")}};E 6K(1b,1p,x){1b<0?1b=0:\'\';if(v.4G>0&&1p>1){1p=1p-v.4G;1b=1b-v.4G}if(C.3H==1&&C.wX==1&&C.jh!=1){if(!C.Ci&&1b>0){wY();C.Ci=H}}if(3O&&1p!=1){}F{B 4C;if(1p>0&&1b>0){if(1b>1p){1b=1p}4C=w*(1b/1p);if(4C==7w.2b){4C=-1}}F{4C=0}if(4C>=0){O(7w,{"17":4C});if(C.wZ==1&&4w&&!x){}F{jr(4C)}}if(J(d7)){if(1p<2&&1i=="2F"){if(jt){3k(d7);jt=P}}F{if(!jt){6k(d7);jt=H}d7.1R=1i=="2F"?4F(1b==0?1p:1b):y8(1b)}}}};G.6K=E(1b,1p,x){if(1p!=Co||1b!=Cd||x){6K(1b,1p,x)}};G.Cu=E(){2x>1?2x=1:\'\';2x<0?2x=0:\'\';O(7w,{"17":(2x*w)})};G.Cv=E(1b,1p){if(1p>0&&1b>0){B 4C=w*(1b/1p);4C>w?4C=w:\'\';O(da,{"17":5t(4C)});Cw=1p;x5=1b}F{x5=0;O(da,{"17":0})}};G.kg=E(x){if(C.6p==1){if(!o.6p){if(x!=0){if(1O Cx!=="1M"){o.6p=1z Cx(1a,C,x);o.9W=H}}}F{if((!J(x)||x==0)&&o.9W){o.6p.1n();o.9W=P}F{if(!o.9W||(J(x)&&x!=1&&x!=0)){o.6p.x7(x);o.9W=H}}}}};E BT(){o.b9=1Q("1Y");O(o.b9,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':v.Ca,\'1e\':v.BJ,\'5v\':\'3g\',"4k-3c":"1U","2j-1r":"#gq","2Y-6Q":v.BK+\'px\',"2l":"1U"});o.b9.id="YX"+v.id;if(v.BL==1){O(o.b9,{"2Y":v.BM+"px 6w "+xb(\'1r\',v.BP)})}if(v.BQ==1){O(o.b9,{"6o-9X":"fO 42 hJ 5c(0,0,0,0.5)"})}o.b9.C.4N="ka";1a.1N(o.b9)}E pE(){2A=1Q("1Y");O(2A,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'1e\':\'2y\',"4k-3c":"1U","1C":0,"4I":"1C 0.1s 3e"});C=4A(C,\'jU\',\'jU\');2T=1Q("1Y");O(2T,{\'1l\':\'2m\',\'2V-1c\':C.xc,\'2V-2k\':C.AN,\'2V-1f\':C.pG,\'2V-2O\':C.xd-1,\'1F-8o\':\'8K\',\'1r\':C.xC,\'3R-dq\':eh(C.xg),\'3R-3T\':C.xD*2t(v.7J,1),\'hH-fV\':C.xX+\'px\',\'2F-1e\':"1",\'2j-1r\':4S(C.jZ,C.k9),\'2Y-6Q\':C.xZ});C.BZ?C.ht=C.BZ:\'\';if(C.ht==1){8O=1Q("1Y");8O.1R=\'<2g 17="b7" 1e="y5" y6="0 0 8 6" 8S="1.1" 4g="3J://4e.w3.4a/4d/2g" 4g:4f="3J://4e.w3.4a/7k/4f"><hr id="C1" 3E="1U" 5g="\'+3C(C.jZ)+\'" 5g-pM="C2" 2v="0 0 8 0 4 6"></hr></2g>\'}1a.1N(2A);2A.1N(2T);if(C.ht==1){2A.1N(8O);O(8O,{\'1C\':C.k9})}2A.C.4N="2p"};E BG(){if(o.3x&&v.cL==1&&!o.1E){B f=o.3x.ax();if(f.t&&f.d){6K(f.t,f.d)}}};E y8(x){B y=2I.47(x*100);if(8T){if(o.jb){I(8T&&2E(C.2T)?C.2T+\'&dP;\':\'\')+3Q(x*o.6f.7f(-1)[0]).ya(1)}if(o.zH){I(8T&&2E(C.2T)?C.2T+\'&dP;\':\'\')+o.xY}}I y};G.4n=E(){1a.3p(9k);if(bg){bg.gA("gB");bg.gA("jz");bg.gA("jP");bg.3X.3p(bg);bg=1Z}if(3H){1a.3p(3H)}if(1a.3X==o.1T){o.1T.3p(1a)}F{if(o.1u){if(1a.3X==o.1u){o.1u.3p(1a)}}}1a=1Z}};B vu=E(1f){B i;B C=[];B w;B h;B 4D=H;B 3u=1;B 3q=1;B x0=0;B y0=0;B b4=5M(oM,YY);B 1i,1d="bg";B 1K="YZ";if(1f==H){C["1l"]=\'1f\';C.h=2t(v.1u.Z0,50);C.a=2t(v.1u.Z1,0.5);C.1r=2t(v.1u.Z2,\'#gq\')}F{C["1l"]=v.1u.1l;W(B k in v.1u){if(v.1u.2w(k)){C[k]=v.1u[k]}}}if(C.1t==0){v.1u.h=C.h=0;C.2V=C.2M="0 0 0 0";C.4L=0}C["1P"]=1;C=4A(C,\'2M\',\'2M\');if(J(C.ji)){if(C.ji!=20&&C.2M=="-20 0 0 0"){C.8z=C.ji}}if(2E(C.zp)&&o.9m){C=4A(C,\'2M\',\'zp\')}if(C.Z3==1){C.4o+=\'%\';C.4q+=\'%\'}B 1a=1Q("1Y");if(C.aa==1&&C.4L==0){C.zT=C.a;C.a=1}F{C.aa=0}O(1a,{\'1l\':\'2m\',\'1c\':0,\'1f\':0,\'17\':(C.jO==1||1f?\'100%\':o.bo),\'1C\':C.a,\'4k-3c\':\'1U\',\'eD\':\'pt\',\'oT\':\'jo\'});o.1T.1N(1a);B bg=1Q("1Y");O(bg,{\'1e\':C.h-(C.1l!=\'1f\'?C.ep+C.8z:0),\'2l\':\'4r\',\'2M-1c\':C.4o,\'2M-2k\':C.4q,\'2Y-6Q\':C.6P});if(C.zP>0){O(bg,{\'2Y\':\'42 6w 5c(yd,yd,yd,\'+C.zP+\')\'})}1a.1N(bg);w=1a.2b;v.e2=-C.8z;if(C.4L==1||1f){if((C.1r==\'4b\'||v.1u.9d!=\'\')&&!1f){if(C.1l!=\'1f\'){v.e2=98-C.h}B 4u=\'2c:9d/yf;jE,Z4+Z5/T/D+Z6/YW/Z7==\';if(v.1u.9d.K("2c:9d")>-1){4u=v.1u.9d}O(bg,{\'1e\':C.h+(C.1l!=\'1f\'?v.e2:0),\'2j\':\'18(\'+4u+\') h6-x 50% 100%\',\'2j-3T\':\'2y\'})}F{B gL=(1f?\'to 1f, \':\'to 2O, \')+4S(C.1r,0)+\', \'+4S(C.1r,1);O(bg,{\'2j\':\'-lG-3e-4L(\'+gL+\')\',\'2j\':\'-3K-3e-4L(\'+gL+\')\',\'2j\':\'-ms-3e-4L(\'+gL+\')\',\'2j\':\'-o-3e-4L(\'+gL+\')\',\'2j\':\'3e-4L(\'+gL+\')\'})}}F{if(C.aa==1){O(1a,{\'l5-6a\':\'aa(b7)\'});O(bg,{\'1C\':C.zT})}O(bg,{\'2j-1r\':C.1r})}if(1f){O(1a,{"4I":"1C 0.2s 5l-4m"})}G.h=E(){I C.h-(C.1l!=\'1f\'?C.8z:0)};G.c=E(){I 1a};G.s=E(1d){I C[1d]};G.g=E(x){if(1a){b3(x){1o"w":1a.2b>0?w=1a.2b:\'\';I w;1k;1o"17":I 1a.2b;1k;1o"1e":I 1a.2S;1k;1o"x":I 5t(1a.C.1c);1k;1o"y":I 5t(1a.C.1f);1k;1o"1C":I 1a.C.1C?1a.C.1C:1;1k;1o"1t":I 4D;1k;1o"3u":I 3u;1k;1o"3q":I 3q;1k;1o"1d":I 1d;1k;1o"x0":I x0;1k;1o"y0":I y0;1k;1o"b4":I 1d+b4;1k;7C:I P}}F{I P}};G.26=E(1d,x){b3(1d){1o"1t":4D=x;1k;1o"w":w=x;1k;1o"2l":O(1a,{"2l":(x&&v.yh!=1?"4r":"1U")});4D=x;1k;1o"1P":O(1a,{"2J":"1P("+x+")"});3u=x;3q=x;1k;1o"3u":O(1a,{"2J":"3u("+x+")"});3u=x;1k;1o"3q":O(1a,{"2J":"3q("+x+")"});3q=x;1k;1o"1C":O(1a,{"1C":x});1k;1o"1c":O(1a,{"1c":x});1k;1o"1f":O(1a,{"1f":x});1k;1o"17":O(1a,{"17":x});1k;1o"1e":O(1a,{"1e":x});1k;1o"x":O(1a,{"1c":x});1k;1o"y":O(1a,{"1f":x});1k;1o"x0":x0=x;1k;1o"y0":y0=x;1k}};G.4n=E(){o.1T.3p(1a);1a=1Z}};if(1O(2Q)=="5j"){zx()}o.G=G;if(2Q.id){if(22.8y(2Q.id)){xW()}F{22.1y(\'Z9\',hk)}}F{1O zD==\'E\'?zD():\'\'}E xW(){if(J(2Q.id)){if(22.8y(2Q.id)){if(!AQ(22.8y(2Q.id))||2Q.4D==1){2Q.Zb==1?1G(hk,50):hk()}F{1G(xW,50)}}}}E hk(){W(B i=0;i<5h.U;i++){if(J(5h[i])){if(5h[i].3z("id")==2Q.id){if(5h[i].3z("8b")){5h[i].3z(\'2K\')}}F{if(v.Zc==1&&5h[i].3z("v","3n")==1){2Q.3n=0}}}}5h.2L(o.G);B 2K=P;if(J(2Q.3o)){W(B i=2;i<10;i++){if(2Q.3o==i&&o[\'u\'+i]!=\'\'){v=a3(v,5w.7b(eg(o[\'u\'+i])));2K=H}}}if(o.u!=\'\'&&!2K){v=a3(v,(1O o.u!="3U"?5w.7b(eg(o.u)):o.u))}if(1O(Zd)!="E"){W(B 1d in 2Q){if(2Q.2w(1d)){if(1d.K("A3")==0){2Q[1d]=1Z}}}}v=a3(v,2Q);o.1J=22.8y(v.id);if(v.jm==1&&v.Ze==1&&1O(xN)=="E"){yT(o.1J,"Zf");if(!xN()){1S.22.1y("6X",xN)}}F{Ay()}}E Ay(){B xV=v.2i;if(v.Zg==1&&J(v.2i)&&J(xV)){v.2i!=\'\'?v.2i=xV:\'\'}if((!J(v.3I)||v.3I==\'\')&&v.Zh==1){1w(\'6s\');I}if(v.AH==1||v.xH==1){1S.1y(\'9Y\',E(1h){B x=1M;B y;J(1h.2c.1b)?x=1h.2c.1b:\'\';J(1h.2c.1L)?x=1h.2c.1L:\'\';J(1h.2c.AI)?y=1h.2c.AI:\'\';J(1h.2c.3z)?y=1h.2c.3z:\'\';if(y&&v.xG){if(v.xG!=\'\'){B pm=v.xG.1V(/\\s+/ig,\'\').2D(\',\');if(pm.K(y)==-1){I}}}if(v.xH==1){if(1O(AK)=="E"){AK(1h)}}if(y&&o.8k){if(J(1h.2c.26)){x=1h.2c.26}B z=3y(y,x);1S.aG.p7({1h:y,Zi:z},\'*\')}})}W(B 1d in o.gs){if(o.gs.2w(1d)){o.gs[1d]!=\'\'?o.kC+=o.gs[1d]+\' \':\'\'}}1w(o.8S+\' \'+o.kC);eS=v.id;o.d=8Q.xI;o.hs=8Q.Zj;if(!v.4V&&7c([o.hs],\'#1A-\')){v.4V=o.hs.1q(o.hs.K(\'#1A-\')+6)}if(aG){B oZ=P;3w{if(aG){if(aG.22){B p1=aG.22.ac("Aq");W(B i=0;i<p1.U;i++){if(p1[i].i2===1S){o.8P=p1[i];o.oK=H;v.A6!=1?O(o.8P,{"2Y":"1U"}):\'\';o.Ab=o.8P.C;1w("eG")}}}F{oZ=H}}}2X(eT){oZ=H}if(oZ){o.oK=H;1w("Z8-jN")}}o.oK&&22.ox?o.jN=22.ox.2D(\'/\')[2]:\'\';!o.Ah?A5():\'\';if(1O(Aa)=="E"){if(Aa()){I}}o.8k=H;A8();B A7=1z 6N();if(A7.YU()==20){if(5M(1,20)==10&&v.YH!=0){xO(o.xP,o.xP);1G(E(){if(1S.ga){ga(\'gD\',\'UA-YS-6\',\'2y\',{\'6H\':\'6W\',\'Yw\':H});ga(\'Yx\',\'At\');ga(\'At:Yy\',[o.d]);ga(\'6W.bd\',\'1h\',{zL:\'pO\',zM:\'hk\',zK:o.d})}},ku)}}if(v.ga==1&&v.zJ!=1){if(1O CC==\'E\'){o.ga=1z CC()}}if(!o.1J){v.1w=1;1w(\'id "\'+v.id+\'" hc pJ\');I P}o.1J.1R=\'\';O(o.1J,{\'2V\':0,\'Yz-fV\':\'er\'});o.9M=o.1J.2S;o.9B=o.1J.2b;if(J(v.k5)&&!J(v.5n)){if(J(v.k5.5n)){v.5n=v.k5.5n}if(J(v.k5.pH)){v.pH=v.k5.pH}}if(o.1J.C.17.K("%")>-1){o.YA=o.1J.C.17}if(v.5n=="6G"||o.1J.C.1e.K("%")>-1){v.5n="%";o.pU=o.1J.C.1e;o.9M=0}if(o.9B==0){if(o.1J.C.17.K("px")>0){o.9B=2P(o.1J.C.17)}F{if(o.1J.3X.C.17.K("px")>0){o.9B=2P(o.1J.3X.C.17)}F{if(o.1J.3X.3X.C.17.K("px")>0){o.9B=2P(o.1J.3X.3X.C.17)}}}}if(6v(v.5n).K("x")>0){o.5n=v.5n.2D("x")[0]/v.5n.2D("x")[1];if(o.9M==0){o.9M=o.9B/o.5n}}F{o.5n=0}O(o.1J,{\'1l\':\'et\',\'6o-l6\':\'wQ-6o\',\'1F-8o\':\'1c\',\'-3K-xR-ey\':\'1U\',\'xS\':eh(\'pA-pz\'),\'9A-1e\':15,\'eD\':14*2t(v.7J,1),\'2F-1e\':\'jo\',\'EE\':\'Eu\',\'1r-F0\':\'1U\'});if(v.9X==1){O(o.1J,{\'6o-9X\':\' 0 EW YB 5c(50,50,93,.1), 0 hJ EW 5c(0,0,0,.YC)\'})}if(o.5n>0){O(o.1J,{\'1e\':o.9M})}F{O(o.1J,{\'1e\':o.9M==0?o.pU:o.9M})}if(o.9B==0){O(o.1J,{\'17\':\'100%\'})}o.1T=1Q("1Y");O(o.1T,{\'1l\':\'2m\',\'6o-l6\':\'wQ-6o\',\'7v\':v.pu,\'1r\':\'#3L\',\'17\':\'100%\',\'1e\':\'100%\',\'1c\':0,\'1f\':0,\'eD\':\'pt\',\'2F-1e\':\'jo\'});if(v.w7!=1){o.1T.C.5v=\'3g\'}if(v.YD==1){o.1T.C.7v=\'eF\'}o.O=22.1Q(\'C\');o.O.1K=\'1F/O\';o.1T.1N(o.O);o.1T.6g("id",\'YE\'+v.id);po(1);if(1S.Fa){B Fi=1z Fa(E(e){if(e[0].wR.U>0){W(B i=0;i<e[0].wR.U;i++){if(e[0].wR[i]==o.1T){zk()}}}});Fi.YF(o.1J,{Yv:H})}o.ek=1Q(\'eG\');4i(o.ek,{"id":"EH"+v.id,"F9":"no","1I":"EH"+v.id,"Ew":"H","Ex":"H","Ey-ph":"H"});O(o.ek,{\'1l\':\'2m\',\'17\':\'100%\',\'1e\':\'100%\',\'2Y\':0,\'4k-3c\':\'1U\'});if(v.2Y==1){if(v.YG==1){O(o.ek,{"6o-9X":"fO fO fO "+v.wb+"px "+v.8s+" YI",\'4N\':2})}F{O(o.1J,{\'2Y\':v.wb+\'px 6w \'+v.8s})}}if(!22.YJ(\'.vU\')){B 1B="";if(v.ED==1){W(B i=1;i<4;i++){if(2E(v[\'1r\'+i])){1B+=\'--YK\'+i+\':\'+3C(v[\'1r\'+i])+\';\'}}}fT("4O, 4O > *{-3K-YL-5J: 3g;1l: o7;1f: 2y;1c: 2y;5v:4D;EE:Eu!6i;5N-17:1U!6i;eQ-1i: YM;2J-YN: 8K 8K;6o-l6:wQ-6o!6i;-3K-EK-EN-1r: 5c(0,0,0,0);-3K-EK-EN-1r: eF;1F-YO:0!6i;"+1B+"} 4O 4u{5N-17:1U} 4O > *:6j{YP: 1U} 4O,4O a,4O a:YQ,4O a:YR,4O a:fb,4O a:c6,4O a:6j{1r:#f9;3R-3T:100%;}4O eG{2Y:0}4O eG{2l:4r!6i;5N-1e:1U!6i;2j:eF}.vU{}4O 2g{2M:0}");o.1T.6g(\'Zk\',\'vU\')}o.1T.1N(o.ek);o.1J.YV=E Zl(e){o.nX++;if(o.nX==5){v.1w=1;1w(o.8S+\' \'+o.kC+\' \'+o.kN)}if(!e)B e=1S.1h;e.6L=H;if(e.bt)e.bt();B x=e.kP-gH(o.1T);B y=e.m0-kQ(o.1T);if(v.ZM==1){if(J(v.nI)){if(4Z(v.nI)!=\'\'){o.vX=v.nI;J(v.FU)?o.gI=v.FU:\'\';v.nI==\'1U\'?o.gI=o.d:\'\'}}}vD(x,y);I P};E vD(x,y){if(o.gI.K(o.d)==-1||v.FV==1||v.4X==1){if(!J(o.4X)){!v.pP?v.pP="4b":\'\';!v.vM?v.vM="3L":\'\';o.4X=1Q(\'1Y\');B 1B;B n=0;W(B i=0;i<10;i++){if((v[\'rm\'+i]==1&&v.4X==1)||i==9){if((J(v[\'rm\'+i+\'t\'])&&J(v[\'rm\'+i+\'a\'])||i==9)){1B=1Q("vQ");if(i==9){if(v.ZO!=1){1B.w1=o.vX+(v.G1==1?" "+o.8S:\'\')}F{1k}}F{1B.w1=v[\'rm\'+i+\'t\']}if(i!=9){if(v[\'rm\'+i+\'a\'].K(",0/1")>-1||v[\'rm\'+i+\'a\'].K(",1/0")>-1){B z=v[\'rm\'+i+\'a\'].2D(\',\');1B.w1+=\' (\'+(3y(z[0].1q(4))==1?2R(\'on\'):2R(\'6G\'))+\')\'}if(v[\'rm\'+i+\'a\'].K("2U")==0){o.gR=H;!o.2U?o.S.Ge():\'\'}}1B.6g("i",i);D7(1B);1B.1y("2x",Fz);o.4X.1N(1B);n++}}}O(o.4X,{"1F-2J":"ZP","2F-1e":"1","bs-92":"ej","2j":4S(v.pP,0.7)});if(n>1){O(o.4X,{"2V":"hJ"})}o.4X.C.4N="ZQ";o.4X.le=Fy;o.1T.1N(o.4X)}F{6k(o.4X)}O(o.4X,{"1l":"2m","1f":y,"1c":x,"1F-8o":"1c"});B vy=P;if(o.2Z-x<o.4X.2b-20&&v.w7!=1){O(o.4X,{"1c":x-o.4X.2b});vy=H}if(v.ZR==1||vy){O(o.4X,{"1F-8o":"2k"})}o.D8=x;o.D9=y;2N(o.nV);o.nV=1G(E(){3k(o.4X)},4d)}}E Fy(){2N(o.nV);o.nV=1G(E(){3k(o.4X)},4d)}E Fz(e){B i=e.41.6r("i");B y;B vJ=P;if(i>0){if(i==9){o.gI!=\'\'?1S.3j(o.gI):\'\'}F{B x=v[\'rm\'+i+\'a\'];if(x){if(x.K("3z:")==0){if(x.K(",0/1")>-1||x.K(",1/0")>-1){B z=x.2D(\',\');B b=o.S.vB(x,"3m");B u=3y(z[0].1q(4),z[1],b);js(z,u);vC();vD(o.D8,o.D9);vJ=H}F{y=x.2D(",");3y(y[0].1q(4),(J(y[1])?y[1]:1Z))}}if(x.K("2U:")==0&&o.2U){o.2U.3z(x.1q(6))}if(x.K("js:")==0){y=x.2D(",");2o(y[0].1q(3)+\'(\'+(J(y[1])?\'"\'+y[1]+\'"\':\'\')+(J(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}if(x.K("18:")==0){x=x.1V(/\\(18\\)/g,Dc());x=x.1V(/\\(ZS\\)/g,Dd(J(v.Dg)?v.Dg:22.ox));x=x.1V(/\\(1I\\)/g,o.cw);x=x.1V(/\\(7U\\)/g,v.7U);1S.3j(x.1q(4))}}}!vJ?3k(o.4X):\'\'}}E D7(x){O(x,{"2V":"Dn hJ","3R-3T":(v.Dr?v.Dr:"55")*2t(v.7J,1)+"%","hH-fV":"0.ZT","1C":0.9,"1r":v.vM});x.1y("gj",Dw);x.1y("gg",D5)}E Dw(e){O(e.41,{"1C":1});O(e.41,{"2j":4S(v.pP,0.5)})}E D5(e){O(e.41,{"1C":0.9});O(e.41,{"2j":"1U"})}o.1m=1z CS();if(o.1m.5x){B wF=(v.CG==1?\'*::-3K-R-S-1E-ZU-qz {2l: 1U!6i;-3K-wD: 1U;}\':\'\');if(v.mo==1&&v.CK!=1&&(v.CO!=1||!o.1m.7S)&&(v.CF!=1||!o.1m.iH)){}F{if(o.1m.5x&&v.gQ==1){}F{wF+=\'fj::-3K-R-S {2l:1U !6i;}*::-3K-R-S-ZV {2l: 1U!6i;-3K-wD: 1U;}*::--3K-R-S-1A-qz {2l: 1U!6i;-3K-wD: 1U;}\'}}B 1B=22.1Q(\'C\');1B.1K=\'1F/O\';1B.1N(22.CU(wF));o.1T.1N(1B)}if(o.1m.CV){v.3n==1&&v.ZW==1?v.3n=0:\'\'}if(o.5n==0){if(o.1T.2S==15&&!o.pU&&v.CW>0){O(o.1J,{"1e":v.CW})}}if(J(v.j7)){v.Y.eC=v.j7}if(J(v.q5)){v.Y.pT=v.q5}if(J(v.1E)){o.2e=v.1E}if(J(1S.CZ)&&v.ZX==1){1S.CZ(fr)}F{fr()}}E fr(){1w("fr");o.X=1z D0();if(!v.3I){v.3I="?"}if(v.pl){v.3I=v.pl+o.ew}o.ZN=qo();o.D3=0;o.5G=wH();if(o.5G){if(3f.4v("wJ")!=1Z){o.wL=3f.4v("wJ")}F{o.wL=qo();3f.8c("wJ",o.wL)}if(v.wN==1){if(3f.4v("wO")!=1Z){o.53=3f.4v("wO");if(2E(v.cR)){if(v.cR.K(o.53)>-1){o.53=1Z}}}}if(v.E5==1){if(3f.4v("wI")!=1Z){v.aO=3f.4v("wI")}}W(B i=0;i<o.cM.U;i++){if(v[\'E7\'+o.cM[i]]==1){if(3f.4v("E8"+o.cM[i])!=1Z){}F{v[o.cM[i]+\'s\']=0}}}7T("ZY");7T("10a")}o.9H=o.9L.1q(o.9L.K("://")+3);if(o.9H.K("#")>0){o.9H=o.9H.1q(0,o.9H.K("#"))}if(o.5G&&v.cL==1){o.3x=1z Ea()}if(v.jm==1){o.5J=v.10b;yT(o.1J,"5J",H)}v.hm==1&&v.jm==1?o.hm=1z 10c():\'\';v.ab==1?10d():\'\';if(v.10e==1){o.c4=1z 10f();o.c4.aJ()}o.R=1z Ek(v.3I);if(!o.1m.2n||v.dc==1){o.1T.1y("10g",E(){o.5f=H;o.pZ=H;o.S?o.S.Em():\'\'});o.1T.1y("10h",E(e){if(!o.3O){if(v.1u.9N>0){2N(o.Eo);o.Eo=1G(E(){if(o.5f!=o.pZ){o.5f=o.pZ;o.S.wd()}},v.1u.9N*2p)}F{o.5f=P}o.pZ=P;if(o.S){o.S.q6()}}})}if(!o.1m.2n){o.1T.1y("Ep",E(e){if(!o.i3){o.3O=H}});o.1T.1y("al",E(e){if(!o.i3){o.3O=P;if(!o.5D){o.9z=P;o.eR=P}if(o.1m.eQ&&o.1m.dc&&o.2a){1G(E(){o.5f=P;o.S.wd()},4c)}1G(E(){o.6j=H},4c);if(o.1m.2n&&o.S.mn()){}F{o.S?o.S.f1(e.6y,e.9j):\'\'}if(v.g0==1){if(o.S.cN()){o.S.7M()}}}});o.1T.1y("wh",E(e){if(!o.i3){if(J(o.S)){if(o.3O){o.S.f7(e.6y,e.9j)}F{o.S.yM()}}}})}if(o.1m.2n){1S.1y("10i",BU,P)}v.we==1&&1O DN==\'E\'?o.we=1z DN():\'\';o.3N.1y("fS",E(e){if(e.8d){o.h1=e.8d.U}o.3O=H;o.5f=H;o.pR=P;q9("1E",e)},{eU:H});o.3N.1y("bL",E(e){if(e.8d){o.h1=e.8d.U;if(o.h1>1){o.wg=1}}if(o.3O){o.pR=H;q9("10j",e)}},{eU:H});o.3N.1y("gN",E(e){o.3O=P;1G(E(){o.5f=P},4c);if(v.mg==1){B iu=1z 6N().8C();if(iu-o.9g<(v.hR?v.hR:0.3)*2p){mG(e)}}!o.pR&&o.h1<2&&o.wg!=1?gO(e):\'\';o.pR=P;o.h1=0;if(e.8d.U==0){o.h1=0;o.wg=0}q9("4H",e)},{eU:H});3w{1S.22.1y("al",E(e){o.6j=P;if(!o.5D){o.9z=P;o.eR=P}if(o.3O&&o.S){o.3O=P;o.S.f1(e.6y,e.9j);o.S.q6()}if(!o.5f&&!o.1m.2n&&!o.1m.tv){o.S.aV();if(o.3d){o.3d.ar()}o.S.DB()}})}2X(eT){}1S.22.1y("wh",E(e){o.S&&o.3O?o.S.f7(e.6y,e.9j):\'\'});o.1T.1y("fS",E(e){o.i3=H;o.1m.2n=H;o.eQ=H;o.3O=H},{eU:H});o.1T.1y("gN",E(e){o.eQ=P;o.3O=P},{eU:H});1S.22.1y("bL",E(e){if(o.S&&o.eQ){o.S.f7(e.8d[0].kP,e.8d[0].m0)}},{eU:H});1S.22.1y("10k",E(e){B x=e.41.h4.lW();if(x==\'wc\'||x==\'DI\'||x==\'DK\'){I}F{o.S?o.S.DF(e):\'\'}});1S.22.1y("ZZ",E(e){B x=e.41.h4.lW();if(x==\'wc\'||x==\'DI\'||x==\'1Y\'||x==\'DK\'){I}F{o.S?o.S.DL(e):\'\'}});if(o.8P){wn(aG.22,BX)}wn(22,zE);E wn(x,z){B y=[\'\',\'lG\',\'3K\',\'ms\',\'ZL\'];if(x){W(B i=0;i<y.U;i++){x.1y(y[i]+(i<y.U-1?"Zz":\'\'),z,P)}}}if(!J(o.ek.i2)){1w("ZK");I}F{o.ek.i2.1y(\'4Y\',nj,H)}if(!o.1m.2n){o.3N.1y("2x",E(e){!o.i3?gO(e):\'\'},P);if(v.ma==1&&v.mg==1){o.3N.1y("DW",mG,P)}}nm();if(v.4B){v.4B.on==1?o.4B=1z Zo():\'\'}v.6C==1?o.6C=1z Zp():\'\';v.f6==1?o.f6=1z Zq():\'\';o.S=1z yl();if(v.ci.DY){o.m9=v.ci.F7}9R();bc();if(o.5G){if(v.wS==1&&v.1L!=0&&!o.1m.2n){if(3f.4v("yn")!=1Z){v.1L=3f.4v("yn")}if(3f.4v("j3")==1&&v.na==1){v.5o=1}}if(v.DV==1){B sp=3f.4v("DS");if(J(sp)){if(sp.K(\'.\')>0&&o.jb){o.X.9x(sp,1)}F{if(o.6f){B m8=7c(o.6f,sp,H);if(m8!=-1&&o.S.DR(\'5m\')){o.ah=m8;o.R.9x(o.6f[m8])}o.S.DA()}}}}B zf=P;if(v.z9==1){W(B j=0;j<o.cr.U;j++){if(3f.4v("nh"+o.cr[j])!=1Z){v[o.cr[j]]=3f.4v("nh"+o.cr[j]);zf=H}}}if(o.1m.2n){if(!zf){v.zi&&v.zi>-1?v.cv=v.zi:\'\'}if(J(v.DZ)){v.nC=v.DZ;2E(v.Eq)?v.nz=v.Eq:\'\'}}}if(o.3x){B f=o.3x.ax();if(f.t&&f.d){o.S.eK(f.t,f.d);o.S.3V(f.t,f.d);v.1p=f.d}}o.X.3Z(v.1L);if(v.5o==1){o.X.5p();o.S.4U()}if(J(v.E2)){3y("5m",v.E2)}o.as=1z yE();if(v.6P>0){if(v.g0==1||o.bQ<120){O(o.1J,{"2Y-6Q":(v.6P+"px")});O(o.1T,{"2Y-6Q":(v.6P+"px")})}F{Dx()}}if(J(v.6O)){yz("6O")}if(J(v.gi)){yz("gi")}if(J(o.Y)){js("Y")}if(v.7X==1&&v.Zr==1){o.X.mp()}W(B i=2;i<10;i++){if(J(v["eJ"+i])){if(v["eJ"+i]=="2n"&&o.1m.2n){3y("eJ",i)}}}1G(nj,4c,H);1G(E(){js("8k");if(v.4l){if(1O v.4l==\'E\'){v.4l=v.4l.6H};2o(v.4l+(v.4l.K(\'()\')==-1?\'("\'+v.id+\'")\':\'\'))}},1)}E gO(e){if(o.yt[o.3N]>2){I}o.mj=H;v.hR==0?v.mg=1:\'\';if(o.mv&&v.eB==1&&!o.1m.tv){mG(e)}F{B t=(v.hR?v.hR:0.35)*2p;mq();2N(o.Dj);o.Dj=1G(E(){o.bJ=0},t+4z);if(v.mg==1||(v.ma==0&&v.1W.mH!=1)){yV()}F{o.mv=1G(yV,t)}}o.bJ++;hE()}E yV(){mq();if(o.1m.2n){if(o.S.mn()){o.S.yM();if(o.3B&&v.mT==1){o.X.6z();v.mT=0}if(v.Zs!=1){I}}if(o.hQ){if(v.Fo==1&&v.Zt==1&&o.1m.bw){I}if(v.gQ==1&&v.Zu==1&&o.1m.5x){I}}}if(o.bJ>1&&v.1W.mH==1){o.bJ=0;I}o.bJ=0;if(v.eB==1){o.1m.2n&&v.Zv==1?\'\':o.X.gO()}}E mG(e){mq();B y=P;if(v.1W.mH==1){if(e){if(v.1W.Zw==1&&!o.1m.2n){}F{B x;if(o.1m.2n){x=e.Zx;if(!x){if(e.Ft){x=e.Ft[0].kP-gH(o.1T)}}}F{x=e.Zn}if(o.aq>1){x=x/o.aq}if(x){if(x<o.2Z/2){if(x<o.2Z*20/100){3y("4h","-"+2t(v.1W.Fs,10)*o.bJ);v.1W.2W==1&&v.1W.FO==1?7I(\'4h\',0):\'\';y=H}}F{if(x>o.2Z-o.2Z*20/100){3y("4h","+"+2t(v.1W.Fs,10)*o.bJ);v.1W.2W==1&&v.1W.FO==1?7I(\'4h\',1):\'\';y=H}}if(y){if(e.bt)e.bt()}}}}}if(!y){if(v.ma==1){if(v.mo==1&&o.1m.2n){}F{o.2a?o.X.8h():o.X.9t()}}}}E mq(){2N(o.mv);o.mv=1M}E nj(x){if(o.Gc!=o.1T.2b){x?o.Gc=o.1T.2b:\'\';nj()}F{bc()}}E bc(){B y=P;if(o.bo!=o.1T.2b||o.bQ!=o.1T.2S){y=H}nm();o.S?o.S.4Y():\'\';o.R.4Y();y&&!o.2a?js("4Y",o.bo+\',\'+o.bQ):\'\'}E nm(){B xw=o.1T.2b;B xh=o.1T.2S;if(o.S){if(v.yH==1){if(v.Y.1l!="2O"){B x=o.S.cg("FY")+o.S.cg("1f")+5+o.S.cg("FW")+2t(v.Zy,0);O(o.1J,{"1e":x})}}}if(o.5n>0&&!o.2a&&!o.eo){xh=xw/o.5n+2t(v.yu,0);O(o.1J,{"1e":xh})}if(!o.2a&&!o.eo&&!o.bv){o.bo=2I.47(xw);o.bQ=2I.47(xh)}if(o.1m.2n&&o.2a&&v.yA==1&&cq.ei){if(o.5n>0){if(o.5n<1||o.R.9c()<1){B sp=cq.ei.zh(\'Cc\');if(sp!==1M){sp.bU(E(){}).2X(E(e){})}}F{B sp=cq.ei.zh(\'yI\');if(sp!==1M){sp.bU(E(){}).2X(E(e){})}}}F{B sp=cq.ei.zh(\'yI\');if(sp!==1M){sp.bU(E(){}).2X(E(e){})}}}o.2Z=xw;o.4t=xh;if(J(v.1I)&&o.S){v.1I!=\'\'?o.S.Fe():\'\'}if(J(o.jk)){o.R.1P(o.jk)}if(o.29&&!o.2a){o.29.2C()}o.3d?o.3d.2C():\'\';o.c4?o.c4.2C():\'\';o.6C?o.6C.3z(\'4Y\'):\'\';o.eH?o.eH.2C():\'\'}E 9R(){o.X.nE(v);W(B x in v){if(v.2w(x)){if(x.K("1I")==0){if(v[x]!=\'\'){o.zj=v[x];o.X.9R(x)}}}}o.f6?o.f6.EX():\'\'}E ae(18,1J,1P){if(18){if(18!=\'\'){if(v.cJ==1){18=cJ(18)}if(1J==o.2i&&18==o.yW){}F{if(18.K("#"+v.9O)==0){18=o[o.fd[0]](18)}if(18.K("#0")==0){18=cW(18)}18=yK(18);if(J(v.AL)&&18.K("//")==-1){18=v.AL+18}B s="yo";if(1P=="5g"){s="AJ"}if(1P=="1U"){s="2y"}if(1P=="As"){s="100% 100%"}if(18.K(\' fw \')>0&&1J==o.2i){o.k8=18.2D(\' fw \');3S(o.yq);o.yq=7d(zO,2t(v.ZA,2)*2p);o.hb=0;18=o.k8[0]}18=18.1V(/ or /g,\'"),18("\');18=18.1V(/\\s/g,\'%20\');if(v.ZB==1&&7c([18],\'.zw\')){B 1B=\'6W\'+v.id+\'ZC\';1J.1R=\'<fj id="\'+1B+\'" 3h="\'+18+\'" 9C=1 kr=1 3n=1 3B=1 C="17:100%"></fj>\';o.gk=22.8y(1B)}F{o.gk=1M;1J.1R=\'\';O(1J,{\'2j-9d\':\'18("\'+18+\'")\',\'2j-h6\':\'no-h6\',\'2j-1l\':\'8K\',\'2j-3T\':s})}1t(1J);1J==o.2i?o.yW=18:\'\'}}}};E zO(){if(J(o.k8)&&J(o.hb)){o.hb++;if(o.hb>=o.k8.U){o.hb=0}ae(o.k8[o.hb],o.2i,v.hg)}}E ZD(x){if(x.on==1&&J(x.3h)){x.3h=yK(x.3h);B y=1Q("1Y");if(x.3h.K("3J")>-1||x.3h.K("//")==0){B z=1Q("4u");z.3h=x.3h;y.1N(z)}x=a3(x,v.A0);x=4A(x,\'2M\',\'2M\');O(y,{\'1l\':\'2m\'});if(x.1l.K("2O")>-1){O(y,{\'2O\':x.ep})}if(x.1l.K("2k")>-1){O(y,{\'2k\':x.4q})}if(x.1l.K("1f")>-1){O(y,{\'1f\':x.8z})}if(x.1l.K("1c")>-1){O(y,{\'1c\':x.4o})}o.1J.1N(y)}};E zE(){if(o.2a&&!yF()){o.X.yv(H);o.1m.ff?bc():\'\'}F{if(o.eo||o.5f){yF()?o.2a=H:\'\';o.X.yS()}}1w("2a",o.2a)}E BX(){if(v.jm==1){yT(o.1J,"5J",H)}}E ZE(){1w("ei "+cq.ei.lO)}E BU(){if(2I.Cz(1S.ei)===90){1w("yI");if(v.BF==1){B ok=H;if(v.Cm==1&&!o.1E){ok=P}if(v.Cf==1&&!o.1A){ok=P}if(o.9r){ok=P}if(o.29){ok=H}!o.2a&&ok?o.X.9t():\'\'}}F{1w("Cc");if(v.BF==1){o.2a&&v.yA!=1?o.X.8h():\'\'}}}E yF(x){!x?x=22:\'\';B y=P;3w{y=!!(x.ZF||x.ZG||x.ZH||x.ZI||(x.ZJ!=1M))}2X(e){y=P}I y}E AQ(x){I x.2b==0&&x.2S==0};E zk(){W(B x in o){if(x.K("Bz")>-1){3S(o[x])}if(x.K("zn")>-1){2N(o[x])}}1w("V3")}}', 62, 4278, '|||||||||||||||||||||||||||||||||||||var|style||function|else|this|true|return|exist|indexOf||||css|false||media|controls||length|but|for|actions|playlist|||||||||width|url||control|time|left|key|height|top|pjstg|event|action|settings|break|position|system|hide|case|duration|substr|color||show|toolbar|icon|log||addEventListener|new|play|tmp|opacity|playlist_dic|start|text|setTimeout|hls|title|container|type|volume|undefined|appendChild|typeof|scale|createElement|innerHTML|window|frame|none|replace|hotkey|faction|div|null|||document||||set||subtitle|vast|fullscreen|offsetWidth|data||seekto|subs|svg|pip|poster|background|right|display|absolute|mobile|eval|1000|error|file_type||existv|vasturl|points|hasOwnProperty|click|auto|open_action|tip|sub|Resize|split|exist2|line|files_quality|Play|Math|transform|stop|push|margin|clearTimeout|bottom|parseInt|options|Lang|offsetHeight|tiptext|share|padding|icons|catch|border|screen_w|||||||||||plid|_type|events|droplist|linear|localStorage|hidden|src|files_subtitle|open|hide2|Pause|linkurl|autoplay|player|removeChild|scaleY|current_quality||media2|scaleX|current_subtitle|try|continue|apiProcessor|api|list|muted|CheckColor|floatleft|stroke|sbt|rows|handle|file|http|webkit|ffffff|mediascale|mediacontainer|mouseDown|body|parseFloat|font|clearInterval|size|object|Duration|dash|parentNode|Seek|Volume||target|1px|vasttype|||urls|round|||org|000000|500|2000|www|xlink|xmlns|seek|attr|bgcolor|pointer|ready|out|Remove|marginleft|files|marginright|block|bga|screen_h|img|getItem|over|pause|_|200|MarginPadding|chromecast|_to|visible|values|Time|delete|end|transition|obj||gradient|ShowOrHide|zIndex|pjsdiv|settings2|tagvideo|youtube|hex2rgb|preload|refresh|plstart|is_hls|rightmenu|resize|trim||xhr||default_quality|empty||_from|||custom|dom|folder|rgba|quality|Action|mouseHere|fill|pljssglobal|f2title|string|subtitle_on|ease|speed|aspect|mute|Mute|Hls|onOut||int|casting|overflow|JSON|ios|order|m_to|isVisible|isLive|valuefontsize|volumewheel|butPosition|canvas|storage|live|arr_down|visibility|removeEventListener|shuffle|random|max|clr|vastloader|Motion|onOver|_value|vast_loaders|arr_up|f2value|menuproc|f2action|value|m_type|||valuecolor||||||||filter|plx|ftitle|keys|dechar|files_speed|setAttribute|animation|important|focus|show2|onError|airplay|SetQuality|box|cut|toString|getAttribute|remove|iset|UpdateText|String|solid|vast_|clientX|Unmute|is_dash|srch|effects|UpdatePlaylist|captions|evntclk|off|name|levels|hlsconfig|UpdatePlay|cancelBubble|cursor|Date|midroll|rounding|radius|charAt|next|download|minutes|dash_created|pjs|scroll|skip|File|||||||||||intro|parse|indOf|setInterval|activeiconsize|slice|control2|status|redirect|FindBut|1999|safari|tips|state|bgpaddingleft|bgpaddingright|Events|aover|pjs_parent|ended|audiotrack|backgroundColor|line3|span|preroll|okpd|ioff|files_audiotrack|default|cuid|current_audiotrack|Object|motions|obj2|PluginHotIcon|globalfs|vast_and|StopWaiting|Settings|toolbarHidden|bg2|Tip|val|com|iphone|SettingsTimers|label|customline|playedstore|pass|seconds|channels|||||||||||waiting|playing|setItem|touches|_url|always|f2i|Normalscreen|layer|Advertising|init|fvalue|metadata|lastwheel|align|reload|paused|current_url|bordercolor|hours|Value|realfullscreen|add|isVastBgLoad|getElementById|margintop|ShowPoster|HLS|getTime|VAST|buffered|timer|Update|_show|is_sleep|bgaover|center|plhistory|onEnded|Toggle|tipcrn|parentIframe|location|alpha_div|version|_cul|floor|onClick|navigator|track|path|opid||ll1I|space||info||pipwebkit||||Waiting|txt|ratio|image|SetSubtitle|sub_off|clicktime|arrowsize|apiprm|clientY|lines|vast_or|small|stretch_width|hlsquality|onWaiting|xbg|ispipkit|ctx|Fullscreen|dur|icn|gif|SetSpeed|area|hidden_volume_over|min|container_w|loop|ResizeText|pnt|is_ws|leftBg|href2|line0|customtext|loading|href|container_h|hideleavetimeout|enc2|hls_subs|Arrows|Title|unmute|bgcolorover|fbg|hls_created|cutted|shadow|message|all|pointerEvents|plopenid|destroy|UpdateObject|bgpaddingtop|onPlay|End|wait|curtain|onDuration|blur||getElementsByTagName||Poster|dropbgcolor|HideControl|current_speed|bgpaddingbottom|preventDefault|loaded|mouseup|bgbrovr|marginproc|nativecontrols|vimeo|fzoom|Close|alert||HlsLevelsLength|tag|actionstt|flag|timeline|ncrtat|fltrs|concat|Sub|control_|lIll|bitrate|parent|reloadTimer|files_quality_ag|Start|stage_x|replay|evntout|rotation|default_audio|evntovr|audiotracks|onMouseUp|_hide|m3u|scrollLeft|SettingsClose|media_error|bgtop|f2id|upld|noads|||switch|motion_id|buffer|but_x|8px|_cstm|thumb|bgl|max_h|MainResize|send||gaTracker||pld|iconscolor|PlaylistNext|||vertical|stage_y|normal_w|Background|Switcher||white|stopPropagation|mrgnprs|fullscreen_process|android|Status||scrollbgcolor|delta|Stop|_keyStr|_css2|charCodeAt|Retimer|butplstart|SubtitleChanged|deltaY|clicks|VastRemoveAndPlay|touchmove|skpbt|salt|_rb|browser|normal_h|channel|open_settings|native|then|brightness|gao|min_h|forcehide|reloadto|linecap||||quiz|toolbar_hide|active|ldr|currentTime|Array|CreateItem|||pause_before_vast|_speed||PlaylistG|cubic|control_title|line_width||3px|StyleItem|Remove2||volumewheelin|screen|sub_options|hlsaudio||https|sub_bottom|titlestore|||but2|400|but_space|pjs_i|vast_loadtxt|sttx|Playlist|playbgcolor|DashLevelsLength|qualities|fplace|00|timestore|vsts|SettingsVisible|sub_shift|enc3|prev|forbidden_quality|Clickable|hls_config|currentFile|CustomSwitch|fd0|PlaylistNextExist|update|onload|playById|ShowOrHideProcessor|search|title2|CalculateClick|inline|sec|line3value|audioTracks|id_|line1|onMeta|desktop||source|onTimeupdate|loading_error|onMove|scrollTop|||floatwidth||line2|mediapip|handleicon|family|ActionPlaylist|PipWebkit||hidejustfull|weight|Scale|ellipse|responseText|event_y|toend|pjs_id|onVolume|shuffle_|event_x|plfolder|fontsize|MediaReady|UpdateTime|pauseroll|but_y|err404v|file2|300|icns|nbsp|vast_longtimeout|SetAudioTrack|vast_impressions|hiddenwidth|PlaylistPrev|is_visible|Pos0|onPause|iconsover|_lastime|pointed|files_|toolbar_margintop|Zoomed|10px|console|ScrollTo|CreateHLS|speed1|file3_separator|Home|controlover|hidedown||stout|ll1l|decode|checkFont|orientation|nowrap|frameresize||||fullscreen_start|marginbottom|tagframe|normal|pljsplayfrom_|relative|played||pltxt||select|dropcolor|cow|screenclick|autoplaylist|fontSize|l1lI|transparent|iframe|sug|_start|design|Played|fontnames|NewFile|qbr2|coh|PlayerState|touch|hidden_volume_over_process|pljssglobalid|err|passive|CloseOpenList|subtitle_start|VastRecover|items|headfontsize|scaleover|StageMouseUp||bgt|hdicon|FindPlStart|mediatags|StageMove|HideInterval|fff||link|ControlClick||HideProof||ToolbarDown|XHR|classList|video|Pnt0||upldfl|readyState|ObjectFit|||Ready||||Subtitle|and|abc|autoLevelCapping||current|hideonpause|hls_force|subupld|_step|HideForce|VastAddPreload|pic|settingsovertimer|topBg|thmove|videoHeight|control_line|timeFormat|0px|hlsDashSub|showovercontrol|overopentimeout|touchstart|pushCSS|vast_poster|spacing|showoverto|f2bg|C13|or0|hidevideo|butNames|_status|Reload|setSpeed|cul|actplay|flip|default_style|alpha||textTracks|mediaSession|posterhide|nomute|expand|mouseout|_id|overlay|mouseover|pstrv|AfterVast||NativeEnterFs|starttimeout|autohide|000|rightside|compilation|sub_color2|hdnn|groupId|plNxtExst|rldcnt|HidePoster|sub_color|removeAttribute|onclick|seeking_time|create|Curtain|saturate|_preloaded|findLeft|brandurl|RemoveCurtain|sub_or|bgg|PlaylistPrevExist|touchend|ScreenClick|PlaylistExist|nativefullios|shareme|stretch_with_volume|rightbs|sub_settings_on|kbps|url_shift|SubtitleSettingsMenu|handlewidth|nativeAudioTrack|sub_sizeproc|tchs||Il1l|tagName|Airplay|repeat|load|_ease|opn|justshow|pstrsi|not||bgpadding|hlsdrm|poster_scale||playbgcolored|20px|Init|handle_width|minify|texts|BgClr||maxBufferLength|polygon||tippointer|600|custom_speed|shift|hideoutmute|SettingsN|days|StyleLine|rect|hlsend_to|file2_separator|JsClk|clickmargin|_wait|letter|PlaylistControls|5px|rotation2|clickarea|AirplayChanged|autoQuality|onplay|hidden_volume|nativefull|dclckto|SetSetting|QualityChangedNoHand|FileTo|iconreplay|errorto|memory|hlsautoquality|htto|downin|Parsed|contentWindow|touched|frag|clicked|hls_stuck_time|mpi|CustomText|TimeSub|srt|Rot|recover|||||details||ctx2|sourceBuffer||Error||iconangle|_activeIcon|marginprocleft|iosfull|||now|SubtitleLoad2|tipbg|removed|FltrVal||_t|subload|bottomside|sxs|hlsrows|letterspacing|pip_quality|ipad|normalscale|cftlr|yamtrid|ShowForce|ctxtnk|toolbarInterval|_ended|gain|YtInit|created|galabels|SubtitleLoad|svg0|VstLdTxt|toggle|BufferStop|pljsplayed_|ni2|ssfontsize|canvas2|jpg|pljsmute|_seekaftervast|unshift|TagPlay|autonext|tmln|pjs_|parentcontainer|line_speed|Off|TipText|480p|prm|bgh|handlehide|paddingtop|heartbeat|custom_aspect|mode|observer|ScrollOverOut|1em|wheelstep|airplayed|HandleWidth||l3v_show|chrome|hidetimeout|errorMessage|childNodes|stty|onmouseover|left0|Show|sub_weight|playlist_source|base64|offsettimer|float|Thumbs|scl|ShowTip|resizePlaylist|ResizeSettings|swipev|domain|stretchonfullscreen|onmouseout|fcdef|qbr1|onSeeking|StyleArrow|tippadding|speeds|dontplay|seeking|midrolls|tipbgcolor|xtitle|onSeeked|||seekwindow|playersize|OpenList|uijs|pstrs|tipbga|999|open_pl|floatheight|FindDrop|_prevIcon|PlaylistVisible|Cut|Drop|paddingright|pldur|gatracked|_max_order|pl_first_id|vast_longtomsg|tmpbg|scrollarrows|limitmaxwidth|playsinline||Ctxt|3000|historytitlea|VastNext|RenameQualities|ymax|ToolbarShow|HistoryPlaylist|volumescroll|compilations|wheel|pointscontrol|Mouse|scrollleft|file_separator|offsetLeft|heartbeatInterval|shr|sub_bga|RenewSubtitle|playerid|sub_bgcolor|pageX|findTop|NativeControls|va2l|PluginSub|result|_play_i|hlschangequality|historybga|bgborder|bgbordercolor|RenewPoints|hand|m3ut|360p|url2|backdrop|sizing|lrpd|hidewithoutmoving|240p|PlaylistShow|UpdateSpeed|sub_shadow||onmousemove|Download||hmaxk||currentLevel|rldplay|_steps|isvg|onStep|scrollwidth|998|bgtmp|StopMedia|scrollarrowcolor|||fid|_icon|floatlimitwidth|bgcontainer|ssflyp|resizeonwidth|hideuntilto|historybgcolor|decoration|openplaylistbefore|but_h|moz|wght|openplaylistroot|resizeSettings|clr_options|showtitleplaylist|ssa|isTypeSupported|angle|lastIndexOf|SubtitleError|autoprevopenfolder|iclr|stretch_width_last|sub_stroke|mediaSource|toLowerCase|upload|setaction|limitwidth|pageY|||||scrollHeight|suboptns|CreateShare|spd|title_template|doubleclick|wheelinterval||StyleActive||num|click0timeout|covervideo|fit|acted|sub2||showinterval|ToolbarHidden|nativecontrolsmobile|Password|ClearClick|||sub_all|poster_aover|click_t|videoWidth|poster_a|alldd|parsed|lang|wtcntrl|subopt1|PlaylistHere|MenuProc|PlaylistRewind|DoubleClick|seeksides|sub_x|openById|wait_to|getDASH|loadLevel|picture|HlsUpdateAudio|getHLS|SettingChanged|sub_reset|AudioTrackChangedNoHand|unmuteonclick|audioTrack|KeyPlusUp|FindOpenIds|hidevar2|opera|SubtitleOff|AudioContext|nops|UpdateVars0|bgbract|newfile|dvrtime|hidevar|pjspl|BgBrAct|unmuteplease|mutestore|BeforeVast|UpdateVars|autonextopenfolder|seeked|onClickSubtitle|audiosrc|pljs||FrameResizer|PipSize|KeyPlusDown|MainUpdateSize|_lastactbut||tpp|userseek|sleeptimer|vol|pointa|apdr|mtp|CreateDASH|isPlaying|PluginPlSrch|sub_size_fullscreen|ResizePlaylist|yaCounter|sub_size|mini|TitleTemplate|valuefromlang|write|vastfrombg|rc_label|1080p|720p|bgo|StringVar|lastTouch|160p|YoutubeReady|restart_audio|handlescale|C15|while|handleaover|rightout|Ended|rightclick|mouseUp|onDown|handleiconspress|filerorto|ErrorOr|vars|embed|PlaylistError|thumbnails|static|ff0000|rename_audio|thumbs_on|RemoveMedia|YouTubeIframeAPIReady|_control_|_stopped||marginbg|polyline|colorbg|Recover||fileTimeout|files_channel|||setActionHandler|customdesignsvg||svg3|FileType|ShowLayer|youtube_id|YoutubeID|referrer|youtu|sub_upload|timerTime|timeline_h|prefile|urls_and|dashquality|rotate|gifed|current_file|current_plurl|playVideo|iniframe|scrollarrowsize|100000|full|vast_type|ima|OpenScroll|win|nhs|lineHeight|Load|VastLoader|VastBgLoad|VastAndLimit|fspr|exception|done|frames||subdrag|_fullscreen_end|find|VolumeWheelX|postMessage|MidrollOverlay|VastVisible|adsfirst|NativeExitFs|navigationUI||pauserollonplay|plurls|timeld|scripts|documentElement|copyObject|HideTip|||close|datetime||playroll|||14px|screencolor||||C11|serif|sans|HidePoster2|gaTrackPlay|rld|CreateTip|worked|tippaddingtop|changeheight|postroll|found|resizeonplay|quartile|rule|vstpause|Player|rmbgcolor|container_id|mouseMove|quality_received|playlistrewind|container_h_procent|iconscolorover|response|vastonmobile|72532408|mouseHere2|CustomToogle|||playlist_title|timeshort|playlistloop|StageLeave|code|started|Touch|ksu|hideAllIcons|isReplay|333333|fatal|SwitchText|linkurl2|eventstracker|remember_sub|script|sepia|stuck|omt|tipalways|randomstr|IconsColor|drtn|resizetxt|subsor||edge|imgldd|Start0|HlsLevel|_readyonplay|button|lngth|icon2|noclick|introstart|onPipEnter|head_|fileorto|Captions|span05|onPipLeave|vstdwn|contentDocument|NewAspect|requestFullscreen|order0|vastclick|vast_midroll_limit|butseekto|HlsAudioTrack|Heartbeat|fjs|piped|End3|iOSTrackLoaded|mutedautoplay|End2|subpausehide|||urlcnfg|_blank|plcontinue|play25|play50|play75|IndexPlaylistProcessor|outro|HlsAudioTracks|reloadlog|ShowNextList||midrollo|ahd|onTagError|HlsSleep|bggrclr|pjs_parent_i|renameTracks||pstr_to|xvalue|posteronpause|stopotherplayers|IndexPlaylist|borderbottom|playerjs_||_rights|_recover|||floatmarginright|resizetimeout|moveOr2end|exitfullscreen|bg_hide|onWheel|ie9|splice|activeicon|hour|minute|second|VolumeWheel|adsinchain|advertising|volumewheelfull|show_settings|_stop|_timeout|Alpha|toggleControl|vastcontainer|VastCheckNext|VastGo|is_hls2|playiconbut|vastgo|VastVideo|||||livewakeup|overlays|network|leftandrightpadding|vast_starts|cnt|requestFullScreen|_move_rights|mozRequestFullScreen|webkitRequestFullScreen||prototype|msRequestFullscreen||sleep_timeout||SubtitleParse|show_playlist|cpm|deltaX||ass|tem|||match||||MseIsSupported|pipto|vtt|fullblack|vast_preload|WaitSize|but_w|NxtExt|VastPreloadLoad|historytitlestrike|paddingleft|RemoveForNextAd|heightInterval|VastPreloaded|LoadedData|historycolor|History|StartTimeout|C12|submm|getAudioTrack|RadioTags|other|sub_font|tagsurl|timerInterval|poster_float|Playing|posterhidepause||||||spn|SetCurrentQuality|insertBefore|startwait_t|SubtitleTimerMenu||settimer|getQuality|sub_upload0|_css|setQuality||NativeSubtitle|PJSDIV|2160p|1440p|onYtPlayerReady|96189913|||playedstored|playerjscom|removebykey||nohls||Text|540p|CheckPip|StartSpeed|pldur3|ytautoquality|destroyed|ChangePip|_set_quality|pauseVideo|SetSubtitle2|dash_subs|CreatePoster|gained|Preload|rename|PlayerSize|toolbarhidden|isAuto|getDuration|lang_|Style|lastsub|v360|Empty|mediadrag|audioctx|sub_bgpadding|VisibleItems|3600||PluginMovable||||||||||enabled|xy00|MediaYoutube|SubRem||logout|tagSrc||fromCharCode|onYoutubeReady|start2|mdswp|ws_created|m3ui||sub_store|Prefile|utx|_hlssubtracks|PlaylistLoad|hls_started|isNaN|maxMaxBufferLength|ssfontcolor|overed|onerror|Out|5017903|pljssubtitle|offsetTop|hlsSub|together|Hide|nativeControls|fts|removeTracks|vts|nativesub|nohead|TheEnd|scrollbar|MediaSess|subtitles|CreateWS|Place|getVideoData|_tags|cntrls|HlsSleep0|pldur2|onDash|scrpt|nextLevel||Metadata|CheckDash|drawImage|FileReader|pepper|Seeked|checknative|sstext|pp2|Menuproc|autoplaymute|Shuffle|last|C14|stringify||SubtitleLoadAll|clientWidth|chr|ErrorMsg|encoded|dontload|ErrorReload|reloadtimeout|SubUpload|reloadfirst|hlserror|ControlsBg|normalscreen|bggr||tmpr|TipHide|exist2v|butByS|reRightMenu|RightMenu|minw|hideonplay|_currentIcon|onMobOver|onMobMove|dont|addtitleplaylistbr|addtitleplaylist|rmcolor|control_start|linkurl0|join|div2|downi|settingsNumberVisible|iconopacity|pjscssed|hidetime|ctxt|brand|bgcolorlink2|btm|doctype|innerText|||stvs|ClickArea|imageLoaded|notofh|2001|stopkeys||bordersize|input|Review|geo|updown|tchs2|mousemove|leftright|startcss|StyleSubtitle|resizeme|resizeonmouse|FSL|NoSpan||SubOpt|SpeedChanged||QualityChanged|bordercolored|||ActionOptions|tmp2|onClick2|ontouchmove|pjslng|l1ll|appearance|clck|ioscss|ll11|StorageSupport|pljstrack|pljsuserid|fonts|userid|smbls|qualitystore|pljsquality|_i|content|removedNodes|volumestore|marginbgpadding|PluginPoints|over_final|EndMove|handlehideinit|ShowHandle|handlemove||||||_time_load|Thumb2|restart|valuemargin|valuepadding|grdlft|SettingsParser|tippaddingleft|tippaddingbottom|movevent|DVR|tipfont||handleiconover|mobtch|ceil|borderRadius|clickscaley|Bglines|timeline_w|coloroverplay|handlea|place|LineScale|onUp|onup_to||||handleiconpress|deg|handlecolor|querySelectorAll|tipcolor|tipfontsize|lastt|last_text_w|postmessages|pjsframed|hostname|ControlOut|UpdateVolume|resizeFromText|Marquee|InitVisible|Script|gaurl|postsmbl|user|fontFamily|presmbl|Rotate|pstr|VisibleCheck|tipletterspacing|volume2|tipbgrounding||||||6px|viewBox|thumbs|TipVol|marginbgcolor|toFixed|UpText|ReplayIcon|255|Places|png|SetCSS|nocontrols||arrinterval|hideonfullscreen|Controls|marquee|pljsvolume|contain|Loading|pstrsin|killMotion|quick|moving|screenmarginbottom|NormalscreenUI|playlistovertimer|HidePositionControl||str2obj|landfullmobile|effect|toolbarisdown|Visible|Alert|isFullscreen|JsEvent|change2playlist|landscape|re_y|checkBase64|CustomTextButs|StageMove2|hdbrdclr|customTextPl|youtubeposter|noprevicon|ShowShare|FullscreenUI|Visibility|ClosePl|ScreenClick2|currentposter|hideuntilstarted|check|TitlePl|||resizetext|CloseSttx|UpdateStart|Loaded|upText|fixed|ControlCoordinate|sub_designstore|sleep2|ToolbarHide|firstly|scrollarrowbg|updatePlaylist|substore|scrollarrowbgcolor|lock|sub_bottommob|maintitle|Destroy|removeItem|Action2|timeout|PlaylistPlayId|mrgnsmll|TheEnd2|preloaded|shwvstfnsh|intros|andlimit||mp4|optStr|VastLongTimeout||nomidroll|vast_prestarttimeout|vpaid_starts|PluginReplace|FullscreenChange|vast_longtimemsg|notv|line_volume2|my3|ga4|eventLabel|eventCategory|eventAction|playedquartile|Posters|brd|adscounter|writePl|8361812|blra|Quartile|DtXWan48Lq9neNd|PluginTrack|openpl|finishrewind|60588467|logo|passontime|last_ors|rc_|isVpaid|prtObj|notframe|today|CustomFonts|unset|PjsFr|parentIframe_style|scrollwheelfull||whlskfll|iosExitFullscreen|fs_error|prted|frmvst|dropsmallfontsize|msExitFullscreen|webkitCancelFullScreen|mozCancelFullScreen|cancelFullscreen|exitFullscreen|zoom|IFRAME|ovr|stretch|linker|cancelFullScreen|14130702|current_vast_url|midrollimprsd|Init2|minduration|rest|PluginIntro|PostFullscreen|timelimited|timelimit|timebreak|ct2|postmessage|method|cover|PjsFrMsg|preposter|Stopped|tippaddingright|MSIE|xOffset|isHidden|PluginErrorVideo|alert404video|alert404v|Number|alert404text|alert404|contrast|alerts|yOffset|270|CancelBubble|norld|PlacePoints|thumb_move|denied|access|linetipmarginbottom|toptip|swipep|175|Swiping|width_div|ReloadTimeout|incorrect|006||900|elastic|str|clickmargintop|clickmarginbottom|C10|Ease|bglines|pipSrc|playId|playByYoutubeId|current_thumb|bgline1|ChkHlsEnd|bgline2|PluginPip|posterhidestart|handleiconsover|Interval|tagsinterval|onPlayTag|recovery|height_div|swiping|landscapefull|Continue|9390991|msie|thumb_height|thumb_radius|thumb_border|thumb_borderwidth|back|HidePoster3|thumb_bordercolor|thumb_shadow|posterhidetime|6327241|CreateThumb|OrientationChange|8345227|limit|ParentFS|ListsWidthRight|linetippointer|maxTouchPoints|Rectangle|evenodd|||ListsWidth|||||thumb_width|comment|portrait|_time_play|livets|lsfullplay|935||handleinit|Open|PluginSug|after|lsfullstart|through|_duration_play|ShuffleEnd|0638991|8215241|apto|plapto|UpdatePlaySeek|UpdateLoad|_duration_load|PluginCut|FindFileInPlaylist|abs|firefox|9211241|PluginOldGA|redirectonclick|alertsfontsize|nativenotipad|hidestartbutios|seekTo|VastInfo|FindIdPl|nativenotios|sub_lineheight|api_|ads|nativenotiphone|sub_bgo|dasherror|adsinvitation|System|sub_bg|createTextNode|mobiletv|playerheight|analytics|menu|requestAnimationFrame|Actions|lI1l|playlist_id|sesstime|wrapper|RightOut|RhKdkeFe|RightCSS|right_x|right_y|SubtitleBottom|toLocaleTimeString|Href|encodeURIComponent|full_minutes|full_hours|parent_domain|sub_split2words|High|click_t2|vast_adid|getPlayerState|head|4px||rel|pjslog|rmsize|Playerjs|mss|sub_big_fullscreen|nameofyoutubequality|RightOver|PluginRounding|yamtr_event|Scripted|SettingsSpeed|closePl|reachGoal|subshift|setVolume|KeyUp|last_subtitle|updateCuid|textarea|VastBreak|pjsin|KeyDown|PlayerjsEvents|PluginGeo|pjsfrm|ffect|SetChannel|SettingsExist|pljsspeed|Papi41|skipads|speedstore|dblclick|sub_off0|templated|sub_sizemob|yaHit|timestorejustbut|default_speed|Yandex|ga_event|trackstore|gtag|vast_nofirst|pljsfirst|I1lI|TimeStore|Start00|sub_allmyt|getContext|sub_off_title|time2|geobj|aHBtDkeA|default_subtitle|700|Media|youtubeready|StageOver|isyoutube|leavetimeout2|mousedown|sub_sizemobfull|notag|Qualities|dropfontsize|ltr|trcka|allowfullscreen|allowtransparency|allow|666666|reverse|InvertPlaylist|castdevice|clrs|direction|4959714|outside|pjsfrrs|url3|casterror|tap|offset|Playback|highlight|7378707|0454574|getBoundingClientRect|globalfontname|device|autoplayed|PluginThumbs|ffdd1f|15px|read|reloadlive|alertsbga|scheme|alertspaddingh|yamtr|alertspaddingv|endfull|alertscolor|seeked_time|template|alertsbgcolor|scrolling|MutationObserver|redirectonplay|fullonplaymobile|fullonplay|updateTitle|resume|adblock|dropclrs|obsrvr|heartbeatinterval|Exit|scrollX|PluginDroplist|copied|nativefulldroid|1800|onYtPlayerStateChange|DtXWdut0br48Lq9neNd|seeksidesec|changedTouches|MarPad|playerjs|PLAYING|noindex|RightMove|RightClick|parentElement|Youtube|ENDED|GET|XMLHttpRequest|pointcolor|styleSheet|_html|keyframes|rgb|customyterror|yterrors|onQualityChanged|PlayingChecker|seekicon|sugar|774328|0val|helvetica|arial|rc_labelurl|rc_anyway|margin_bottom|224|scroll_height|_ud|_ue|rc_version|1val|playsinlineonmobile|61928677|nonzero|pljs_yt_|HideLayer|ytcl|iframe_api|textstyle|pointw|screen_lw|youtubecontrols|CrShr|1150|StopOtherPlayer|hlscookies|nameofhlsquality|showById|posteronwait|HideElement|audio|WaitPoster||pstrwt|MediaVideo|wtpstr_to|Volumescrolled|SubtitleSettings|onClickTimer2|onClickSubtitle2|PluginMbps|translate|7px|upd|Buffer|Tmln|UpdateTimer|hidewithposter|setDashQuality|hlslowquality|webkitSetPresentationMode|audioGroupIds|disableRemotePlayback|anonymous|PlgHlsFdt|18px|PlaylistMove|PlaylistOpenId|openplaylistpause|setDashAudioTrack|SubtitleSettingsClose|prenewpl|setTracks|setHlsQuality|PreNewPl|openplaylistafter|Exist|playonhover|leavetimeout|Wheel|hideuntilmeta|showing|unfixing|brda|onMobOut|SourceBuffer|width100|mobileover|50032408|MediaSource|headbordercolor|indOf2|hidewovar|hideonvar|controlCSS|nxtttl|hidebeforesec2|menufltr|hidebeforesec|PluginSkip|mimeCodec|setHlsAudioTrack|ShowAnimate|hidenormscreen|setting|hideonvolume|urlsl|hls2|renameQualities|HlsQualityLevels|apdra|HdIcon|addTrack|subtitleTrack|HideAnimate|setcss|ShowControl|sourceBufferValidAPI|Hideuntilto||clickscalex|DisplayControl|hls_stuck_duration|topside|timeupdate|scroll_left|action2|zoomed|_reset|volumegain|connect|Control|togglesubs|40000|RenewFromTitle|hlsfto|gainedsource|hlsmto|customBuffer|scroll_down|DownIn|ffeeab|lineh|playlistfolder|opposite|keyCode|fontsizesmall|rotateplaying|svgtmln|picheight|onMouseDown|icon3|liketext|with_min|inversetime|2464991|scalesmall|25712408|with_hours|nextAutoLevel|minus4back|bold|um1|Gain|hlscaptions|setupx|which|PjsCheck360|displayvolume|pressed|preloadhls|isSupported|hlsmaxlvl|nums|nativehlsios|m3u8|dvr|ShowTimeout|often|PluginDash|mpd|hidecontrol|ControlOver|framei|noClickTimeout|UpdateSettings|control_duration|often2|iconsreplay|hlsdebug|unblock|plusminus|hlsvastwait|startLoad|4877241|ontouchstart|reHls|hlsaudio_off|_xIcon|hlsquality_off|bandwidth|prevorius_default_w|hideafter|autoLevelEnabled|hidebefore|dashjs|hidebefore2|preloaddash|prevorius_default_h|hideaftersec|_nextIcon|SvgColor|Timer|show1value|offsetwrite|40px|tipmargin|valuebgcolor|resize2|cstm|valuebg|linkpause|screenshot|wrong|sttr|crt|ParseUrl|action_settings|RenameTracks|tipvar|ScrollUp|Width|315|unhidden|maxresdefault|userplay|_a|_subfile|actpause|ControlsBgClick|unmuteonplay|nopause|valuealign|unpause|valuerounding|roundout|always2|1001|YouTube|_w|rand|PlaylistBack|rotateonhover|linktarget|debug|marginprocright|dashaudio|ScrollLeft|hideafterclick|iset2|removeNativeSubtitle|FlussonicMsePlayer|nativeSubtitle|Click|plclose|selectOpen|onLoadStart|showShare|hlsTextTracks|upTexts|ssflyw|customText|NewPl|PluginShare|marginprocbottom|ScrollRight|marginproctop|handlemargin|ControlX|titlepl|lrpps|lrppp|supported|ScrollDown|bgw|sort|enterpictureinpicture|durationchange|scrollarrowbgovercolor|linespeed1|gradientcolorload|HlsLiveWaiting|PlgnVstPstr|colorload|iconmargin|PipToggle|floatheightsmall|reYT|movable|changeAspect|pjsframe|PlgnVstLdtx|hideoverwidth|Timeout|640|hideonwidthlimit|hideonwidth|onLoadedData|scrollarrowgradient|ControlLine|scrollarrowbgover|current_time|220|360|wps|ontop|loadedmetadata|hideoverwidthlimit|volumechange|gradientcolorbg|PipSwitch|hidesec|linespeed2|smallfontsize|muteiconbut|alwaysnotfullscreen|livewakeuptime|hidewithoutplaylist||MetaAudio|valuesize|CreateMedia||alwaysjustpause|ArrowsInterval||callback|ErrorTypes|imageExists|PlayerjsAsync|PjsFramed|leavepictureinpicture|93409913|userpause|customdesign|filetod|FileTimeout|fileto|floatwidthsmall|linespeed3|loadSource|gradientcolor|pipVol|bgstretch|FFFFFF|5000|bgcolorlink0|shuffle8|ytReady|loadVideoById|ytlog|onPlaybackQualityChange|999999|888888|yttitle|historybgaover|onStateChange|getVideoLoadedFraction|getCurrentTime|f2parent||medium|hd720|CUED|clr_|ytError|unavailable|customyterrors|onchange|large|pjslng_|08a992923333y351w371g27222o193x2e1d3o00111o272z2o2o272e2o2m2y253a1e23211i2e29361c2x3u1z2z1o280y1z2z3b233x2z29381c2x3s1z211o21162t212p112038251s27332c16212x232c1y2u291z1z3a251s25332e1621261w1211161z133x3b2q172z261u3u2t2z2p113w242c153x3b2o172126121z1m25113w261z3w28113u26113w2q2z29233x2e29213x2b233v25203b3x2c1z112435143o02222e293w141o2e1b3o01212m221z211o211z1z2u29112z1d3b3x2e181w12222x3u2s352e121z1c1o11153v27231v322o12252722332c1828352z1d1g1a2e142z281y11101z222u291z101o3u370z2z243516331o1e3f1q1e1k1f1f1e1q3d1l2g1s3d1f3g183g1k2e1k1e1j2d1e3e1s3f1k2c1v3e112c1u2g1y2e1t2c102e1u3d1k2e1s2e182c1u3e1t2c1u2e1q2e1t1c1i2e1w2c142e1u2e1z2c1u2e1d2c1u2g1e2e1t3e1l2e1u2c1u2e1s1g142c1w2g1t2c1s2e1z2e1u2c1i2e1w3c1t2e1u2g1w2c1v2e1v2c1u2g1g2e1t2c1z2e1w2d1y2e1u2e182c1u2g1z2c1u2g1b2e1s1d182e1w3e1v2e1s3f192c1u3f1b2c1s1f182e1s3e112e1u2d192e1s3e1i2c1u2f192c1u3f142e1s2d192e1v3d1o2e1s2f192c1w3f162c1s3f192e1u3c1e2e1u2d172e1u3f1d2c1u3f192c1t3f1f2e1s1d192e1u3e1b2e1s2f172c1v3f112c1s3f162e1u3e1c2e1u2d182e1u3g1v2c1u3f192c1s3g192e1s3d1w2e1u2c1u2e1f1e1h3d1i1g1i3e1u1g142g1s2e1f1e1k3e121g143f1g2c1i1e1u1e1q3g1f1e1j3c1e2f1d3e1j2f181f121c1b1f1e1e1g3f1g2e1c3d1u3g1m3c1o1e1i1f1h1d1e1e1j3c1b2f1k1f183d1e3e1c1e1g3g141f1h1c141e1c1c1a1e1a1e1a3e1r1g1u1d1b2f1b1f1p3d1e1f1i1e1d1g1m3e122c161g121c1c3f1f1f1k1e1v2g1u1c1d1f1a3g1s1c1u3e1i3d1e3g141f1i1e1u1f1i3c1u2g1h1f1c1c1e1g1m3c123g1f1f1g1e183e1w2c1u1g1s2e1t2c1f2e1u2e152e1t2e1f2c1x3g1x2c1u3e1s2e1t3e1v2e1u2c1t2e1t2e1y2c1h3f1u2c1s1e1f2e1t2c1x2e1w2d1h2e1t3f1u2c1h2e103c103f1y3e12122s123e161c1m3g1i2e1c3f142e1i3d1c1g1i1d1q2g1j1e123e1e1e1t3e142e1u2g1r2c1u2e112c1u2e1g2e1u3c1v2e1w2e1w2e1t2e1t2c1w2g1i2c1t2e1x2e1u2d102e1w2c182e1s2g1x2c1w2g1d2c1s1f162e1s2c112e1u1e1g2e1u1e1u2c1v2e1m2c1u2e162e1s2e1r2e1u1d192e1u2g1p2c1w2g1z2c1s2g1y2e1s3d122e1u2c1w2e1s1f1k2c1t2g1x2c1t3g1g2e1s1d1b2e1w3e182e1s3f192c1v3g182c1s1f172e1u3d1e2e1u2d172e1u3g1g2c1u3f1b2c1u3f1d2e1s3d1a2e1w3e1b2e1s3f172c1u3f192c1s2f172e1u3c1c2e1u3d182e1s3f1a2c1u3f1a2c1s3f1a2e1s1d192e1v3d1b2e1s3f192c1u3f172c1s2f172e1u3e1y2e1u1d172e1s3f1b2c1u1f192c1s3e1z2e1s2c1y2e1m1c123f1l1g1k1d161g141e142g1s2g1c1d161g123e1i1f1d3e1d2d181g1e1d1b1f1q3f1c1e1i3f1i3c1d1e1f1e1c1e1r3e1e1c183f131g1h2c1d2f1m3d1c1e1g2e1s2e1l3g1f3c1j3e1f2f1b1d1l1f1a1c122e192f1b2d1d2f1d1d1b1e181e1d3d1a3f173c1i1f1s3f1f2e1e1g1h1c1c3e1b1e191d1t1g1u3e121e1u1f143d1e3f191e1h1f1s2f1j2e1r1e1c3e181f1m3g1d1c1j1e1e1c1g2e1f1g1h2c1k2g1e3d1f2e182e1f2c1u1e172c1s2g1f2e1s2e1k2e1u2d1s2e1y1g1k2c1u3e102c1u1e1h2e1s2e1l2e1w2c1f2e1w3e1p2c1u2e1q2c1s2g152e1s3e1v2e1w3e1k2e182e102c1w3f182c171r1r2g1e3e1e1e1i3c1k1g1j1f1k1c1f3e1g1d1e1f1g2e1h1e1d2e152c1s1e1l2e1t2c172e1s1c1j2e1s3g1f2c1w1e1e2c1q3g1g2e1u1d1z2e1t2e1h2e1u2g1t2c1w2g1z2c1q2e1c2e1u1c1z2e1u2c1f2e1s1e1u2c1u2e1w2c1r2e102e1u2c112e1t2d1s2e1s1e152c1v2g1y2c1s2e152e1t3e1w2e1u1c1i2e1u1e1z2c1w1e1x2c1q2f1w2e1t2c1v2e1s2d152e1t3e1z2c1u3f182c1q3e1e2e1s3d1b2e1u3e1b2e1s3f182c1u3f1d2c1q2f172e1t3d112e1s3d152e1s3e1k2c1u3f172c1q3f162e1s1d1b2e1s3d132e1s3f182c1u3f1v2c1q2f192e1s3e1i2e1s2d172e1s3f1b2c1u3f172c1q3e1q2e1s3d1b2e1u3d1r2e1s3f182c1w3g1y2c1q3f172e1s3d1b2e1s3d152e1s2e1u2c1u2g1f1c103g193f1q1c1r3f1r3b1b3f1f3e1b2c1r3e1y2d1i3g1f1e1c1e1r3e1d1c163f131g1h2c1d1f1k1e1d1e1g2e1s1e1e3g1f1c1h3e1d2f1b3e1l3f183c102e191g1c1e1i3f1g2c1d3f1s1g1k3c1q1e1i1e1f1f1c2g1k3e1m1g1k3e1i3f1f3f1c3e1l3g1h3e121e1f2g1f3d1u3e1d1c1d1e1i2g121e163g1f1d191f1h3d1s2d1u1f1f3c1b2f141g1o1e1c1g1i3c1h1e1f2g1c3c1z3e122c171f1s2f1b3d1y1g1s1e1d3e142e1t2e1j2e1u2e1s2e1s2e162c1v2g1z2c1r1e193e1r1c192e1t2c1i2e1u2f1f2c1w1g1f2c1r1g1x3e1u2e1c2e1u1e1r2e1s3e1h2c1u2g172c1q2f1v2e142c1z2e1y2c121h1h1l1o2g1i1j2f1p1i1h161|getAvailableQualityLevels|tiny|setSize|4e34818c7a9d50753963a2c5bf77c941|customimage|home|getPlaybackQuality|444444||accept|604bbm3q1t3s241a291s3b3x2z1d3o01121m272z3q1b3v2e1i1b3x1z1k1a21193s3y1z31161z153v3b2q1722241u3u2t222n113w242e133x3b2o192036113z1o233e1i3c2b361y2x3s11101o380w11102b233v2129381y2v3u1z121o3c182t213p1z2238251s25352c16212v252c183u27111z3a251q27333e162z281w1c3u271y2s29183s291s3u291o2e1z3w281z113u28113u263s3o3q0z112z3b3y121o252e2q1z1z211411101o253e3q2m37203q113z2129233x3028143q011c1e2t2e2b2o142s11121d211o11313825353w273u273r153821111z3a391z21141j111c1o2c182v3z2r2c2b233v212o1i29312e293y141m142k1e1e2d1g1c1j1e122g1i1e1e2e1r1c1c3g181g131g1m1c1m1d1h2e1s1f1p2e1v3e1v2c1u2e1w2e1q3g1g2c1w1c112e1s3e1p2e1w2c162c1u2g1p2e1s1e1m2c1w3c1j2e1u2f1x2e1u3c112c1v1f1u2e1q1f1w2c1u2c1w2e1t3g1t2e1w2c1x2c1w2g192e1s1f102c1v2e1s2e1s2f1w2e1v2e1q2c1v1e1u2e1r2e1u2c1u2c102e1s3e172e1w2e122c1u3e172e1r3g1v2c1u2d192e1s3f1v2e1u3d192c1u3f1b2e1q3f1b2c1u3d1c2e1s1f172e1v3e182c1u3f182e1q3f1x2c1u2d192e1t3g1a2e1u3d1a2c1u3f142e1q3f1b2c1w3d1c2e1s3f162e1u3d1j2c1u3f192e1q3f1f2c1u3d192e1s3f1r2e1u3d1b2c1u3f162e1q3f192c1v3c1k2e1s2f152e1u3e1b2c1u3f172e1s2e1w2c1u2c1g1e1f1e1k1g1e1c1m2d1f3e1b2e121e141e163d1u3f1c1g1s1f1y2d1l2d1a3g121d1d1g1g3e1r1c1d3e1c3f1h3f151e1q1c1k1g1h1f1e2e1a1c1e2d181g1s1g1h3e1e1c1i3e161f1h3g171f1e3d1u1e1r3e1c1e1d3f1e3d1e3d1e3f1c3f1d2f1d2d1g3d1g3f1b2g1q1e1h1c161e1u1g1f3g1p3d1e3d1e1c1e3e181e1d2g1d2c1e1e1d3f1g2e1d2e1e1e1m1c1f3e1g1f1e2e1l1d1v2c1u1g1j3e1b1f1a1c1f3e1k3g1f1e1e3f1v2e1l2c1w2f1k2e1q1g122c1v3e1r2e1u1e1d2e1w2e1t2c1w2e1s2e1r2g172c1v2e1q2e1s2g1d1e1w2e1u2c1v1g1j2e1s2f122c1v1c1r2e1s2g181f1u3c103c1y2f1f341o2r3g193f1o1e1b1c151e143e141g1g3f191e1g2e1m1e1x3g1g3g172c1v3e1x2e1u2e1t2e1w3e1b2c1w1f1y2e1r2g1s2c1u2d102e1t2g1j2e1v1c1w2c1v2e1s2e1q3e102c1u3c1b2e1u2g1y2e1u3c192c1v3g1z2e1q3e1y2c1w1c1q2e1t2e132e1u1c1q2c1u3g1f2e1s2e1g2c1u3e1i2e1u2f1v2e1v2e1l2c1w2g1t2e1s3g112c1u2c1e2e1u1e1v2e1w2c1j2c1u1f182e1s3f1c2c1u3d1b2e1s3f182e1u3d1b2c1w3f1o2e1q3f1b2c1v3c1f2e1s1f162e1w3d172c1u3f172e1r3f1f2c1u1d1a2e1u3g1y2e1u3d1a2c1u3f192e1q3f1a2c1u3c192e1s3f152e1u3c1f2c1u3f172e1q3f1q2c1u3d1b2e1u3f1d2e1u3d192c1u3f1j2e1q2f1a2c1w3d1d2e1s1f152e1u3d1d2c1u2e1z2e1q2e1m1c1j3c1e1f1e1e1f3d1e3d1e3c1d2e141e1y3d1f3e1a1d1b1g1c1g1e3f1i1c1e3d1e2g1k1e1j1e1k1d1j1e1e3e1h1e192f1m1d1a3d1e3e1a1f1e3f161d1j1c141g1w2f1h1f1a1c141b1f3g1e3f1k1e1d3c1e3e1l3g1e3f1c3g1g3d1g3c1e3f1c1f1i3f1m3d1y1e162e1e1e191e1f1e1j1d1r3e1y3g1d2f152c1c3d162f1c3e1e1e1k3c1e1c1u2g1p1e1a2g1d3d163e1f1g1i1f1i1f1j1c141e163e1a1f1p1g1d1c1g1c1x3e1u1e1t2e1v3c1s2c1u1e102e1s1e1l2c1w2e1h2f1t1g152e1v3c1r2c1u1e1x2e1q1g102c1w1e1m2f1u2e1s2e1w2e1s2c1u3f1f2e1r2g1v2c1u1c1m3e163e1s2e1b3c1j122q2f1e1g1e3g1w1e1l1d1b1e1h1f171f1h1d1f1c1j1e1s1g1j3e1u3d1g2c1s1e1g2e1q3e112c1w1c1v2e1s1f1p2e1v1c1i2c1s1f1v2e1r2e1r2c1w1e1v2e1r2e132e1w2c102c1s3e1c2e1s2e1t2c1u1d162e1q2e1s2e1u2e1m2c1t3e1x2e1s3g102c1v2c1y2e1q3f1i2e1u2c1a2c1s3e1p2e1s2e1s2c1v1c1g2e1s2e122e1w2c112c1s2e192e1s2g1g2c1v3e1j2e1q2f162e1u3c1e2c1s3f172e1q3g1d2c1u3d182e1r3e172e1u3d192c1s3e1f2e1q3f1a2c1w3c1d2e1q1f172e1u3c1j2c1s3f162e1s3f1b2c1u3d192e1q3e1x2e1u2d1b2c1s3f1c2e1q1f1b2c1u3e1c2e1q1f152e1v3e1d2c1s2f162e1q3f1a2c1u2d172e1r3e1h2e1u2d1a2c1s3f172e1q3f192c1u3d1t2e1q2e1s2e1h1c1h3b143g1d2f162g1e2e1e1c1i3g1k3f1w2g1e2c1e1e1c3g1f1e192f1m1e1a3d1d3e181f1e3g161e1j3e121g1u2f1h3f1a3c141b1f1f1c3f1k1e1d3c1f3e1j3f111f1j1e1k1e1j3d1g2e161e1d2f181e1u1d1j3e161e161e1a1c1a1c1s3g1h1e181e1c1e143b1f3g1a1e1g2f1e3d1h3c121g123g1b3e1e3e1g3e1j1g1d2e172f161d1e1c1f3e1d2f1g3f1c1e1i1d1f3g1i1f1f2e1u3e1l3e152f1c3f122f1g2e1e1c1f3f1w2e1s1g102c1v2e1e2e1s3e1d2e1w2c172c1k3f1h2e1q3f1u2c1u1d1v2e1r1e1q2e1w1c1x2c1f2f1q2e1r3g1x2c1v2c1j2e1s1e1g2e1v3c1h2c1f2e1x3f1u2f172c1j171u1l1q2m1b1g1g1q2v1q1e16|ytEnded|hlsqhsort|setPlaybackQuality|postertitleonhover|sleep2options|unMute|PAUSED|177|fab751s2z2827313716243o0z2z1m253z2o193v2c1b3o0z1z2k3o0z202k3v3s35242t203n1z2038231q25332z142z2v232z1a3s271z1z38231q25332z1430261w1z10141z133v292o173z241s3s2t3z2n1z3u243c133v292o172z241z101m233c1g2c2936162v3s101z1m360w101z39213v3z2936162v3s101z1m2c162t39213v29213v39213v29213v1z1z2s271z203s271s3s271p2o1g25203o2c1x2112193v1z1z202233143z2o193v1z1i1t332z1b302n3c1z3u2m2z1o1e253z1o1m231z1q253r173z24143c1c3c39361a3w29321v3u2s3o3s3730293p35203717143z141z101m232c1o1z1z3u243c1b35383v1z1x21121g1j1c181d1i1e1j1d1j3c181c1t3c1a2e1b3d143e1p3e1k1c1u1e121d172c1t2c102c1s2c1z2c1t2d1u2c1s1c132c1t3e1y2c1u2c152c1r3e1u2c1u2c1k2c1u1c1x2c1u1c1x2c1s2d1w2c1r3c1t2c1s2d172c1t2c1s2c1s2c1e2c1u2e1t2c1s2d1r2c1s3e1x2c1s3e122c1u2e1y2c1t2e1z2c1q2c1s2c1s2e1v2c1t2c1t2c1t3c1v2c1s3d1w2c1s3c1q2c1s3e1h2c1s2d172c1s3d102c1s2d182c1q3d1h2c1s1d172c1s3e1y2c1s3d172c1u3d1u2c1q3d192c1s3d1t2c1s2d152c1u3d1v2c1s3d192c1r3c1c2c1s3d182c1u3d1w2c1s3d192c1u3d182c1q1d192c1u3d1b2c1s3d152c1s3e1r2c1s2d192c1q3d1c2c1s3d192c1s3e1u2c1s1d172c1s3e192c1q3d172c1s3d1b2c1s2c1s2c1s1c1f1c1b1e1e3e1a1c1i1e1p3e1r3b1c3d1d3d1i2d123d1o2d1c2e1k1c1b3c1c3e1c3e1p1e1d2e1q3e1c1c1c1d1c3c1b2d161e1s1d1b1e1c3d1d1e1g3d1g2c1c1c1d1c1d1e1p3c1c1c183d131e1f2c1b2d1k1e1d3c1g1e1h1e1j1e1j1e143e1e3e1k1e1p1e1i1e1b2c1c1e1f3b1d2d1c1c1s2e1c1d1d1d121c1c3d1c3c1p3e1j3c1d3e181e1d3c121c191d191d1f1d1d1d1j1e1d2c1o2c1c1c1c1c1d3d1d1c181b1c1e1h1c192c1r1c1h2c1u1e1p2c1s3c1r2c1t2e1v2c1t1c172c1s2d182c1t2e152c1s3c1s2c1t2c1u2c1u1c172c1r2c1f2c1s1e1v2c1s3e1q2c1t2c102c1u3c1u2d153c142d101c172s2k143e1f2d183e1p3c1a3c1u3e1a1e1i3c1h1c1o1c1h2c181b1g3d122c1u2e1t2c1u2d1r2c1q3e1x2c1s2e142c1u2e1w2c1t3e1z2c1s1c1s2c1q2e1v2c1t2c1v2c1t3c1t2c1s3d1w2c1u2c1q2c1q3e1h2c1s2c1z2c1s2c1c2c1s2c1i2c1s3c1z2c1s2c1v2c1u1d1r2c1t1c1e2c1s1d1x2c1t2c1p2c1s1e1v2c1t2c152c1u3c1w2c1s3c1e2c1u2c1r2c1q1d162c1u3c1g2c1s3d172c1u3d162c1s3d172c1q3d1b2c1s2d192c1s3d1t2c1s3d192c1s3c182c1q3d192c1u3e1b2c1s3d162c1s3d182c1s2d192c1s3d1v2c1s3d182c1s3c1a2c1s3d192c1t3e1d2c1q3d192c1s3e1k2c1s2d152c1u3e1c2c1s3d192c1s3c1q2c1s1d172c1t3c1g2c1s1d172c1s3d1b2c1q3d172c1s2c1z2c1s1c1i1c181d1k1e1j1e1c1c1g1d1p3d1r3b1c2e1c1d193e1h3d131e1o1c1i1d1f1d1g1c181c1c1d161e1d1d1j3c1d1c1g3d141d1f3e191d1c3d1s1e1p3c1d1c1d3d1s2e1p1c1b3c1d3d1c1c1p1e1c1e1j3e1b1c1s1d1p1e1p1e1p1e1k1e1c1d1k1e181c181c122d1d3d1d1c1p3c1c1d1e1d142e1c2c1g3c1d3d1d3d1c3c1i1c121c161e1i1d1h2c1s2e1q3d1f3e163e1k1d151e1k1c1c1c1b3d1s3c1c3d1s2e1o3c1b1c1w2d1z2c1u2e1j2c1s2c1r2c1s3d1o2c1t1c1r2c1s1d1k2c1t3d102c1r2e1h2c1u2e1t2c1s3e1t2c1u1c162c1u2d1t2c1s2e1w2c1s1e152c1s2d1d2c1s1c1z3d1r2c163c1q121e2d1p1e1a1c1i2e121e1e3e1h1d1c3e121d1g1e1j1e1t2c1g1e1u2c1p1e1g2c1u1c1s2c1r3c1i2c1u2c162c1q2e1k2c1q1d192c1u2e1k2c1s2e1v2c1s2e1y2c1q3d1y2c1q3c1w2c1s1d1i2c1p2e1t2c1t3e1g2c1q2c1s2c1q1d1r2c1t2e1r2c1q3c1u2c1s2e1e2c1s1c1x2c1q3c1r2c1u2c122c1q2e1k2c1u1c1k2c1s3c1f2c1s3d1z2c1s3c1x2c1r1d1s2c1s1d172c1r3c142c1q1d182c1u3d162c1q1d152c1s3c1b2c1q3d152c1s3e1t2c1s1d172c1q3d1c2c1s3d172c1q3e142c1q1d192c1s3d1e2c1q3d152c1u3d142c1q2d172c1q3d1z2c1s3d172c1q3d1u2c1s3d192c1r3d1c2c1q3d172c1s3c1c2c1q3d162c1t3d192c1q1d152c1r3c192c1s3d152c1q3d172c1s2c1u2c1q2c1u1c1d1c123c161c1i3e191c121c121d141e1q2c191c1o1c183c1c1c1e3e121d1f3e191e1c3d1q1e1k3c1b1c1c3d1s2e1k1c193c1b3e1c3c1p1e1d1e1a3e1d1c1s1d1c3c1b1d141e1q1d1b1e1j3d1d3e1e3d1e2c1c1c1q3d1a3d1h3d163d142c1a1c1d3d1d3d163e1c3e1p3c101d121c1c1c1d3d1s3d1g1e1d1d1k1e1d1c143c1q3d1k3c161c1t3c1c3e1e1e1g3d151e1e3c1o1c1d1c1d2c1q1d1c3e1p1e1d3c1i1d1k3c121d1t2c1y2c1q3c1s2c1t1e1u2c1s1d1y2c1q3e1d1c161c1h2c1s2e1u2c1u2c1u2c1q2c1f2c1q2c1j1c172e1w2c1q2e1d2c1t1c192c1s1e1o2c1q1c1z1c1v2c1u2c1r3c1t1c122e1c2i1r1i1k1o2g2i2k121m|pjslng_sub_sizeproc|sleepoptions|hd1080|posterwidth|offsetoptions|BUFFERING|current_|pressed_|posterheight|setPlaybackRate|posters|8180991|readAsText|timestoredontuse|wjXjcuJ0euJZd3piM2mVaZw6wkwjzqxiM3FQc24jCjxTbLamwjXjevmXaGw6wOFmfvEjzqxPMK5lwkPYzqxkcumkbZw6AGXjaN9VevBQfNIjCksZzqxUMLxObK4jCjwXwrohAqoYAqwTwNsjCjwYwjXjbumlaGw6AGXjbumlaK9VeN9lwkPYzqxNc250wkPjELxQMKXjzqx0bLojCksTwOFQdvFmfvEjCjxdeHo0AKadeHo0BrpdeHo0BuadeHo0A2BdeHo0A2JdeHo0AnlhLvIXBrFlLvIXBrE0LvIXBrA4LvIXBrEXwjXjM2YQM2UidNJiwkPYgGXjM29VevxWct9neu9XwkQ7wN9ZauJZwkPYBGXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|Dvpieuhhar0OHHsXwrBPAZ42cq00wrFAAHshCq40crEUBtM4brxKAKhUB3QBBZo5zkaTzHEhBtMYAshYekePB3MUAlh0zkFTBq00fjdhaNmTcr0Ow2aNaNaNajd|wjXjbKBWckwjCjw8d3aOwveQavFPDGdYCqdhbuJQa2i0DGdYCqd|paddingbottom|Dvpieuhhar0OHHshAHxPAZ42cq00wrFAAjoYBZ40crEUBtMYB2hZej03Grt6HHs2wq42cq00wrFKAKhUAOM3breKBNhUAZ42crEUBvPOwuaQcuX9xZBNaNaNaNMODkYdz3pieuh|dropautoplay|DtXWd3aODjwTwNtkeumWcjw6wNa1cuYnM3xmaK4jzqxiM3FQc24ZwkPjcN9ZcKtTd2BZaKJVwjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjM29VevxWcvAUdNmObvEjzqxUMLxObK4jCjwXwrIhAqoXwjXjd2BicuIjCjwXzkljzqxjaZw6AGXjMNeXMKFlbK5OwkPjBjo2wrMhBjwTwNxOM29Tc3wjCjxmBHo5AHEjzqxja28jCjwXzkwjzqxja2sjCjwXwjXjMNeic3amdjw6wksjzqx0bLojCksTwOFQduaWcOFnbLQmwkPYAGXjeumXMNeiwkPjAGwTwOFQdusjCjwXzkdjzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwOFQduxOdN91cNFQcNdjCkATwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpkc2YWdjw6wkoXAroXAqwTwNtVbK1ieumWcjw6wOpWd2m0bK9VwjXjbKBWcN1idNeQcjw6wkohAjonwrojzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvFmfvEjCjwjzqxja2BWcu9Zc3amdjw6wj0YwjXjbKBWcOBkc2YWdjw6wj0YwjXjbKBWcOBkc2YWdN92aLwjCjwXAroXArojgGXjM29VevxWct9neutZeqw6fZxWdNFmdjw6AHETwOpWd2m0bK9VwkPjM2JVeuJZwjXjd2BicuIjCjwYzkdjzqxWcjw6AGXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh1zqo0yGd|Dvpieuhhar0OHHoTAG44AnlXBrI2CqprAqXUAq42Ans5Cro4BHlhAq45ArdXCrAYArlTzHoVAHE2Ars0AnE2wrwVBro1CHdZBklTAq42Akw1CHl5AHMhEnAVCHo0CrMZAkdTAG4nCHsZAHEYCqo4zkh5BkM3BrA5zrEVAkEnBHlXCrIhAHoVArA5CHo5AGX0zkh5Ako5AroZwsAYAG4YCrAYBrA4zrIVBHEXBHh5AHhhAHwVArd0AHs2BqX2zkI4Ako2AkIZwrsXzks1Anw5BrITBZ43BnsYCrs1CGprCq4ZAnw0Bnw1CqX4zkl2ArAXArM2wrEVCrlnBHs3BjXYAq45CHd1BkM5wrwVBrE2BnI4CqXYAj4ZBHA1BnIZwsAXzrsnzkIXCHI4AnIhAqXYAZ4ZArlYCHA4wrwVBrE0CHwXBHamzHs2zrsYzksnAnl5BkEhEndVBHEnBHAXAHmmzHs2zrlVArI4Bnl5AHwhAG42Bkw1BrI5CuIUAHMTBq4nAHoXBnwZAGoXzrsVCrA5ArE1BkhhKjdhaNmTcr0Ow2aNaNaNajd|DtXWdut0br48Lq9ODkYdz3B2an4jzqxQM29VAZw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGhZzqonyGd|no3|Dvpieuhhar0OHHs2zrdVAHA2BksYAnwhHrs2zrdVAHo5AHM5BrIhHrs1zkwXCrs3CrITBZ4YArlYBkl0BGpAAHEVAkd1ArlnzrdVAHo5AHM5BrIhEns0zkw3BHo5AZXnzks5CHsZBkw1wrsYzko2Ans5BZXXwrdVAHA3BHE2BrITAqprAZ4ZAHs4CHI5AGXXwroTAZ4YCHlYAkMZBGoXzrdVAHo5AHM5BrIhEnoTAHsVArs5AksZBjonzkwYAHh5BHlYzrs0zkwYCrAnCrlhBZ4YAnd1BrM0BGXYBq4ZAHhnAnh5wsX3zksnBnI0BkE1zrsZzkE0AHo0BkIhEnEVAHlnAno4BHITAHwVBrEYArE2BGoYzkd4BrA4BkMZzrsXzko0AHdXAHhhAG43CrEnCrM2AjX3zksXCHs2CHE1wsAYzkd4BrA4BkMZzrEVAHd2BkA3ArIhBq4YCHAnArh1BGXYzkd3Bnw5AkA2wrdVAHA3BHE2BrITAG43BndZCHwnBjprAHoVArhYBnh0BqXYzkd3Bnw5AkA2wrsZzkE5ArdXBkATBq4YBnM2AndXBGoYAj40CHo3ArMnzrdVAHo5AHM5BrIhHrsXzkM0BrIYBkdTBZ4YArlYBkl0BGpAAHAVAnhZCrl5BjXYAG41BHw0Aro0wsXYBjX3zksnBkMYAHAZwtPOwuaQcuX9xZBNaNaNaNMODkYdz3pieuh|scroll_up|wjXjMKB0bK9VwkPjduYifGwTwOF5duIjCjxneNdjzqxjaZw6AGXjMNekc2YWdjw6wNI1ArlYBqwTwNxOcZw6wksjzqxja3piauFQcNdjCjwYAqoYAqoYAqoYAqwTwNmkc25UMLxObK4jCjwXwrohAqoXwjXjMNeiwkPjAGwTwNxOMK92aLwjCjwUAGwTwOBkMKYmc3amdjw6wkwVAjwTwNiQauIjCksTwNiQauJWcOpTMLljCksTwNiQauJWcOmWeLF1MNIjCksTwNxOMN9ZauJZwkPXzqxiwkPjAGwTwOFQdqw6AqXjeumXeuJ4eqw6wmY1ArEYAmY1ArEnaJY1ArE0AJY1ArEnamY1ArE0Aq5dz1XWLq9deHo0AKadeHo0AnpdeHo0BrBdeHo0AnedeHo0AnojzqxQM29Vd2BWcu9ZwkPjakJNBKMYwjXjMK5QcKt0bK9VwkPjcN9VaGwTwN1idNeQcjw6wkohAqoXwrojzqxQM29Vd3xmduYifGw6AqXjMK92aLwjCjwXzkljzqxPbKFmc25XMLJnaGw6AqXjbumlaK9VcuJieNIjCkp9zqxkc250dN9TL2YQeNIjCOTjc3xlaLwjCkETwN9VwkPYzqx0aLi0wkPjDvBXMK4hd3F5cuI9x2BWcu9ZCjA1BKs4AKIODmY1AkJkakYdz3BXMK4|wrYndutVwvB0fKYmDGeNc250zLBQfNI6AHpXfqd|HsmKFHYdz3BXMK4|DudhevxicOBNc3xUDGe0dNtVd2YieuIPBqXhBqlODkYZaKB0wvh9xnoOwvl9xnoOwveQavFPDGdYAjdhbuJQa2i0DGdYAjdhaNmTcr0Ow2aNaNaNajedzn48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxneu9XwjXjevmXaGw6wOB2aZwTwNxOwkPXgGXjM29VevxWct9XdNJ2wkQ7wN9ZauJZwkPYBjXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|DtXWd3aODjwTwNtkeumWcjw6wOpTMLmTbLB0wjXjdu9nbLFQc24jCjxkaK50aLwjzqxUMLxObK4jCjwYAqoXwrohAkIjzqxjaZw6AGXjd2BicuIjCjwYzkIjzqx0fLpmwkPjd3aOwjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxja3piauFQcNdjCjwXwrsXwrsXwrojzqxja2sjCjwXwjXjMNeic3amdjw6wksjzqx0bLojCksTwNxOM29Tc3wjCjxlMkoXArojzqxja28jCjwXzkwjzqxja2xWdNFmdjw6AqXjMNejc3xlaLxkc2YWdjw6wNaNaNaNajwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQdvpWbK50aLwjCksTwOFQdvpWbK50aLxicumOcjw6wNYmaOEjzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpNc250d2m6aGw6AHsTwOFQdvpiauFQcNdjCjw3wrdhBZo3wjXjeumXMNeiwkPjAGwTwOFQdu1idNeQcjw6wkohAqo1AqoUBrojzqx0bLp0aLi0wkPjLvIXBrwYLvIXBrBNLvIXBrA4LvIXBrEYLvIXBrBmLvIXBrBiwtY1ArEnAmY1ArEnCtY1ArEnBtY1ArEnBJY1ArEnaGwTwNmkc25nM29Tc3wjCjxlMkoXArojgGXjM29VevxWct9NeKYTwkQ7wN9ZauJZwkPYAZXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdYCqdhbuJQa2i0DGdYCqd|Dvpieuhhar0OHHoVBrM5BrhTAKIUArIhHroVBrM5BrhTAKIUArIhHroVBrM5BrhTAqpABZ40Bkl0BZX1zkwYCrd1wsXXzkE2CHE4zrsXzkEnBnIhHroVBrM5BrhTAKIUArIhKjpBBZ41Ano1AjXXwsX5zkInArIZzrohHrlVBHAXBHwTAHoVBkw0CrwhHrdVBHAXBHwTAHoVBkw0CrwhHrdVBHAXBHwTAqpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|u10|wjXjevmXaGw6wOB2aZwTwOpWd2m0bK9VwkPjM29VevxWcvAjzqxUMLxObK4jCjwXwrohAqo1wjXjcumVbZw6AGXjcumVb3JZcqw6wNtXbHQXbLp3aKxSbLEjzqxPbKFmwkPXzqxjaZw6AGXjMNekc2YWdjw6wkI1MHhYaGwTwNxOcZw6wkoVAjwTwNxOMGw6wkojzqxja2tWeNJZwkPjAGwTwNxOdutlaumVaZw6wkMhBjo2wrMjzqx0bLojCksTwOFQdvFmfvEjCjxdeHo0AktdeHo0AnxdeHo0AnJdeHo0BrpdeHo0A2FdeHo0BrBdeHo0BrxdeHo0BuAhLvIXBrAZLvIXBrA4LvIXBrA0LvIXBrA1LvIXBrBmwjXjeumXMNeZc3JVaumVaZw6AZXjeumXaN9VevBQfNIjCksYzqx0bLpja2sjCjwYwjXjeumXMGw6wkoVBZwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQdvpiauFQcNdjCjw3wrdhBZo3wjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxQM29VcKtZa2mVwkPjAqoXwrohAGwTwOFQdvpWbK50aLwjCksTwOFQdvpWbK50aLxicumOcjw6wOxQa2i0wO0TwOpZaKYWMKEjCkoTwOpTMLmTbLB0wkQ7wNiQauJkc250dN9TwkPYzqxja2BWcu9ZwkPjCrAYArsXwjXjM29Tc3wjCjxNBKM1aksjzqx2MKY1aKBWcu9ZwkPjakJNBKMYwjXjMNeiwkPjAq45wjXjbumneu9ZfKxOM29Tc3wjCjxlMkoXArojzqxja2BWcu9Zc3amdjw6wNFjAroXAqwTwNxWdNFmdNBWcu9ZaKEjCksTwNxWdNFmdNBWcu9ZwkPjauJlaKFmwjXjdN91cNFQcNdjCkATwN1idNeQcjw6wksXwrsXwrohAHojzqxNcu9ieuYmaOEjCkoTwNFZc3pTbLB0wkPYzqxicveifLAjCksTwNiQd3FWdOmkc2YWdjw6wNM1akJNAGwTwNxWdNFmdNxWevFWcGw6AqXjbumneu9ZfLFQeuYmd3FZbKUmwkPXzqxldN9XM2YZdZw6AGXjduYifKxOM29Tc3xmaqw6AGXjduYifKxOM29Tc3wjCjxlMkoXArojzqxNc250wkPjIN9jc3FWwjXjavxWduxOM29Tc3wjCjw0ANxlCrhjzqxldN9XM29Tc3wjCjwXAroXArojzqxieLFWduYifKYQd3EjCkt9zqxicuJZevAjCksTwOpWd3FmdN9Vdut1d2IjCkoTwNJ2aK50d3FZMKBSaLwjCksTwNJ2aK50dZw6wmpTMLmmdmJZc1FKFLamcOFnwjXjeNtneqw6AqXjdvxmdN9TcvAjCkoTwOFPeK1jdZw6AqXjeK5Qc24jCkoTwOmicLFZwkPXzqx5c3J0eKxmdu9neuJZwkPXzqxTMK5laOJTcu1WMNmTaGw6AGXjdNJTc2tlwkPYzqxPc3FSaLljCOTjd2Jmb3BQauJnwkPYzqxVeK1nwkPXzqxUwkPXzqx2c2Y1cKJ3buJmcua1cuXjCkt9zqxPcvAjCksTwNa1cuYWcOpTMLljCkoTwOFQcKJneu9ZaGw6AGXjd3FWdu90buJZduYifKJZdZw6AGXjd3BNcvljCkoTwOBnaNY5eZw6AHlZAqXjdNBgM3Jneu9UwkPYzqxZM19icOm3MLljCkoTwOxkL2YiMNJTwkPjIuYifKJZwtJZcZ5IJjpEdN8jzqx0bK1md3FWdNIXduYZc290wkPYzqxXcut5aKFneu9ZaGw6AqXjcNt0bLamM29VevxWcvBUc2xQcuIjCkoTwOamdOBQc24jCj0Yzqx0MKekc3xnwkPXzqxZM192aLxnbK9VwkPYzqxjc3xlaLwjCkoTwOFZMK5nMNdjCkoTwNxOM29Tc3wjCjxNaNaNaNMjzqxnbutlc3djCkoTwNeiwkPXzqxPcvBleOx0bK1mwkPXzqxQcOFZc3AjCkoTwNmVevxWwkPjwjXjbK50dN9neutZeqw6BkoTwN1QavxWcuYnwkPXzqx2MLB0L21QavxWcuYZaLB0wkPYzqxkbvxWcKJkMLB0wkQ7wN9VwkPXgGXjd2iidNIZwkPjeNTjzqxnbutZaHAjCjx0aKYma3xicGwTwOBPMLxmBqw6wOePMLFnMLpXwjXjeutOdZw6AqXjdumXwkQ7wN9VwkPXgGXjd2iidNJQM29Vd2BicuIjCjwZzkljzqxmeNJVeuYQd3FmcNJZdZw6AGXjdu9neu1md3Bia2IjCksTwN9jd2JZeNJZwkPXzqxOMJ9meNJVeqw6fZxmdOxWdjw6AGXjaK5lwkPYzqxXcut5AkIjCksTwOpTMLl1Aqw6AGXjduYifHd1wkPYgGXjaNmVbLBPdNJ3bK5lwkPXzqxZaKYWMKF0bK1mc3J0wkPYAqXjcutVavBkMLpmaOJTcqw6AGXjaKaNaKB0dZw6AqXjaKaNaKB0MNY1djw6AGXjaKaNaKB0a3xifGw6AqXjaN9VevAjCksTwOxmaumZaKB0wkPXzqx3MLFmdjw6AqXjbuYnMLJlbK8jCksTwNYQeNJ3MKUmeLojCksTwNBPMK5VaKYnwkPXzqxkbutVcNJTAN9Najw6AGXjM2iicN5mcrp0bLFTaGw6wmx1wjXjM2iicN5mcrt0bLFTaGw6wlJVwjXjdutndZw6AqXjautnbqw6AqXjcvBNeKYTd3FidOEjCkoTwNYnaOJTcvpTMLljCkoTwOFQcKJneu9ZaK5Wcum2aGw6AGXjcutVa19Qeqw6AqXjcutVa19kfjw6AqXjaNmTaGw6wmU7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0I2Jid29VwrtXbOAOdLETduQnx3t0aN9TauJZduQnx3t0CmU7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGoYduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0KnE4AvpeLq9dz3BQeuIVM29ULq92bKFmcnE4Aq5UdrETKndZAvpeLq9dz3BQeuIVM29ULq92bKFmcndZAq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrxXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhA3pRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo0duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrJXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhBOpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo3duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwriXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhCLpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGoYAvpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gJ19zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFHaKtnc24hAOpRdZeYeqYXbOAOdLFNc2YlaLxXbOAOdLE6K3UXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrtXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhAOpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGonduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrFXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhBLpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo2duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwreXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhCvpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo5duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrsXduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9LL0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYetBmMLBWcjonduQnx3t0zvpRdZeYeuaWcuFmdOpRdZeYerQcf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhALpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGoZduQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrBXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhBvpRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo1duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwraXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhB3pRdZeYeqYXbOAOdLFNbKYmduQnx3t0COpRdZeYeui0evpnCmXWLq9XcvxRdZ5kc21dz3hVcLo0duQnx3t0gGY7duQnx3t0eum0cuJXbOAOdLE6duQnx3t0FLpQd29laGo4duQnx3t0zvpRdZeYeuaQcuJXbOAOdLE6duQnx3t0bvF0dvA6Lq9dz3pTdNQnzNBWcJXWfq5UdrFXbOAOdLF9zvUXbOAOdLF0bLFTaLpRdZeYerQXbOAOdLFtdumnc2FmwrmXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev0Tf3pRdZeYevFQeuYmduQnx3t0COpRdZeYesJXbLBWauIhAHpXbOAOdLETduQnx3t0aNmTaLpRdZeYerQXbOAOdLFPevFXdnQdz1XWduYZbOAVM29ULq94zN1XBvpRdZeYev1egJ0jzqxNc250cNtUaLAjCjxGc2xWeu8jzqxPcvBkc25NbKdjCOTjcKt4EOJNaNJZHuJVa3FPwkP2Arp9gE|Dvpieuhhar0OHHsnwrs1GrBKBKh1JkBwANsYwrshAqoXwroUAGoYeksZMHshAGoXwrohAqoYwrtPAHxiAGoYwrohAqoXwrsUALMUBNhUAOM1fjdhaNmTcr0Ow2aNaNaNajd|DudhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAjXhAjlODkYXMLFPwuE9x001zkI2Bkw4BrITCq4ZBkw0CrA2BjprBG41BkMZCrE1zrhVAns3Brw1AnwhBG41BHEYAroYBZX4zkA2CHs1BksYwrIVBHIXCHM3ArITCq40AkA3BrshHrsYzks2Anl0ArwTAHsVAkl5ArhXAZprAHsVBkE0BHw1AGXYAq44CrwXAkAZwrsZzkw1CHAYAHMTAHoVBkwYBnMnCqoYAj45Anh1ArsTAHoVBkwYBnMnCqprAHEVBrM1BHE1CqXYAq42AkwZCHlhAHIVBnoZCHIYBZXYAG44CHo0AHM2wrs1zkdXAkl1AHdTAHAVBrI1Aro1wsAYBG43Arw5BHs3zrs1zkoZAHI1BHMhAHEVBrM1BHE1CqXYBj4ZCrl2BnAZwrsZzklnCrIXAGXYBj4ZCrl2BnAZwsAYAG40AHoZAnd4zrs2zkw4CHM3AnwhAHoVAHd0ArIXBqXYBG4XAks1BHI2wrsXzks3Bro1ArETAHAVBrI1Aro1wsAYAq4YBnEXBHo0zrsnzkA5CrMnBkAhAHoVAHh2AkA0BZXYAZ4nBrhYBHEZwrsXzks4CHA2BnlTAHAVAklnBHM5AZpABq41BnMnCHE2AZXYAq40AHhZAZprBq4XCHE0AHdnzrsXzkhnAnM4AHMhAZ40CrsXAkAZBZXYAG4XCHA5BrshAj44Ars4AnA4BqXYAG4XCHA5BrshEnsVAkd0CHMnArlTAHsVArlnCHEYwroVArA3AnhnAHd3BjX5zkhZBno3Ako4wroVArA3AnhnAHd3BjX4zkw2AkE4AnM2wsAXzkonBnA4Ans3BnMTBj42CHMZCrl3CGoYzkw3Brl2Ano5zrIVBrw3Crs1BrMhAj44Ars4AnA4BqX1zkEZBnhYBHE2wsAnzkE4AHoZAnw3zrIVBrw3Crs1BrMhBq4XCHE1CHsnBZX1zkM4CHM4ArwZwrEVBHd2Anl0BkATBj4YArIYAns4CqpAAHoVAHh5AnM3CGXnzkwZCHd5AkI4wsAYAq4YCrMZAnE3zrAVAHd0CrIXCHAhAHoVAHd0ArIXBqXnzksZAnsZArs1wrsXzks3Bro1ArETAZ4XBkM3BHs0BqprAHoVAHd0ArIXBqXYzkIXAnI5Aro3wrsYzkEYArwnBnhTAq4ZAnIZCHEYAHhhAHwVCHA4BHoYzroVAkA1Akl0AHs4wsAYBq40BkI1BrI4zroVAkA1Akl0AHs4wrs1zkdXAkl1AHdTAG41ArA1CHoXBZoYBG43Arw5BHs3zrAVArM2BnIYBrEhEns1zkdXAkl1AHdTBq42Anw5BrInAGoYBq40BkI1BrI4zrIVCHoYBrs5BkEhAHwVCHA4BHoYzrIVCHoYBrs5BkEhEnsZzkw1Bnd0BHsTBG45Ars0AHl2BqoYAG42BrEXArw5zrIVBkA5BHI0CrhhAHsVAHMnCHEXAjX1zkwZAkE5Bnd5wsX1zkI1Arl2Bno1zrhVArl5BrEZBHwhEnIVBHInCHw2AHsTCq4YBHEnCrEYCqo1zkI2Bkw4BrITCq4ZArMYAHE5CGo1zkI2Bkw4BrITCq4ZBkw0CrA2BjdhaNmTcr0Ow2aNaNaNajedzn48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxnbutZaGwTwOF5duIjCjxneNdjzqxXc3BQeumWcjw6wOFWdq1ZbKePeqwTwN1idNeQcjw6wks1wrs1wrohAqwTwNxOwkPYzqxja28jCksTwOBkMKYmwkPYzqxja3piauFQcNdjCjw2wrMhBjo2wjXjMNeiwkPXzkATwNxOMK92aLwjCkoVBjXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqxmMLBmwkPjaKYid3FQMZwTwNiQauIjCksTwNiQauJWcNYmMLamMK5lduYifGw6AqXjbumlaK9VduYifGw6AGXjeumXwkPYgGXjcutVaZw6wOx1wjXjd2J0eumVa3AjCOTjd2J0eumVa3A0wkPXzqxnaLF0bK5OdnFiM3FQc24jCjxkbutVcNJTwjXjdN91cNFQcNdjCkITwNxOM29Tc3wjCjxNaNaNaNMjzqxkc2YWdjw6wkoXAroXAqwTwNxOMGw6wksjzqx2MKY1aKBWcu9ZwkPjAroXAroXwjXjdutlaumVaZw6wkIhAHohBGoYAqwTwN1idNeQcjw6wkohAHohAHwhAqwTwNxOM29Tc3xWeNJZwkPjakpNAuMXwjXjd2J0eumVa3A1wkPXzqxnaLF0bK5OdnJiM3FQc24jCjxlc3eVcu9iaqwTwNimMKFNc250d2m6aGw6AHwTwNxWdNFmdNBWcu9ZaKEjCksTwNxWdNFmdNBWcu9ZwkPjMNajaNxNwjXjd2J0eumVa3Aneum0cuIjCjwjzqxnaLF0bK5OdnAjCksTwOBmevFQcNenAjw6AGXjd2J0eumVa3AYwkPYzqxXc3BQeumWcjw6wNxWevFWcG1ZbKePeqwTwOBkdN9TcutZdN93dZw6AGXjd2J0eumVa3AYeum0cuIjCjwjzqxnbu93c3amdNBWcOFZc2XjCkoTwNaWcOFnbLQmwkPYAjXjd2J0eumVa3AZMKB0bK9VwkPjd3pmaKEjzqxnaLF0bK5Odnx0bLFTaGw6wjwTwOBmevFQcNenA2tkeumWcjw6wNtQdOpTMLljzqxiM3FQeNJQM29VwkPYzqxVc2imMKEjCksTwNtkeum2aKmkc25nbLQmwkPnzqxTbK1QeveQavFPwkPXzqxPbKFmMLxZc3djCkoTwNtTe2t5dZw6AqXjd2iWent2MKY1aGw6AGXjM3Jneu9Ud3pmaKFnwkPXzqx2MKY1aKaWcOFnbLQmwkPYAjXjd2J0eumVa3AYbumlaGw6AqXjd2J0eumVa3AnbumlaGw6AqXjd3pmaKE0cum2aGw6AGXjd2J0eumVa3A0eum0cuIjCjwjzqxNc250wkPjIN9jc3FWwO0TwNYWaZw6AqXjdN91cNFQcNdjCkMTwNBWcOFZc2YgJLlXFI4jCOTjc24jCkoTwN9ZauJZwkPYAGXjMKB0bK9VwkPjM3Jneu9UwjXjbKBWcjw6wkYneNdhe2mleuh9xns4xZpPaKmObvE9xns4xn48dut0bqplDGeBAHAVAklnwrAVAklnHrdVArwZwrlVBHM0crsVBrs0wrsVBrs0wrMVAkdYzHMVAkdYHrs3wreKAKhUBOPOwuaQcuX9xZBNaNaNaNMODkYdz3pieuh|DtXWd3aODjwTwNtkeumWcjw6wN5mfvEjzqx0fLpmwkPjd3aOwjXjd2BicuIjCksVAjXjdu9nbLFQc24jCjxkc250dN9TdZ1jc3F0c20jzqxUMLxObK4jCjwXwrohAqoYBGx9zqxkc250dN9TL3BPMLxmwkQ7wN9ZauJZwkPYCqXjc24jCkoTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|onMouseOver|dropscrlw|scrollWidth|DtXWd3aODjwTwNtkeumWcjw6wOpZaLMjzqx0fLpmwkPjd3aOwjXjd2BicuIjCksVAjXjdu9nbLFQc24jCjxkc250dN9TdZ1jc3F0c20jzqxUMLxObK4jCjwXwrohAqoYBGx9zqxkc250dN9TL25mfvEjCOTjc3xlaLwjCks3zqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xnwXxZpPaKmObvE9xnwXxn48aZp0dNtVd2aWdN09x3FZMK5ncut0aGh1zqo1yGd|rem|Dvpieuhhar0OHHhVCHl5CHlTAHoVBrA3BrlhHrhVCHl5CHlTAHoVBrA3BGpAAjX1zkwYCrd1wsX4zkl5CHl5zrohHrhVCHl5CHlTAHoVBrA3BrlhKjpBAqXXwsXZzrohHrwTAHoVAkE5CrAhHroTAHoVAkE5CrAhHroTAqpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|onMouseOut|DudhevxicOBNc3xUDGe0dNtVd2YieuIPBG41zqo1yGd|957|brdla|brdlc|pjsga|DudhevxicOBNc3xUDGe0dNtVd2YieuIPAZXhAjlODkYXc2Y5a29VwuaQcuXUdOJTaH0OcN9VfNJZcZdhdu9QcOFnDGd4zkh4AHd4BrxmzHs2wrEVAnd0Bjo4zkh4AHd4BrxmzHs2wrsXzkMZBHA5wrAVAHoXAklhAHoVBkw1AnlhBZ43Brs0AZoYBGo3zkd0Brs5wrohAZ4YArwnBZo0zkA3BrMYwrsVBnd2AnI2CrFmzHs1wrEVAnd0BkshAG43BnMnBHM4BuIUAHIhBq4nBnE2xZpNbKYTDGdkaNaNaNaNx1XWDkYXMLFPwuE9x00YAq40Brs2BZXnzkMZAHh1wsAYAq4YBnEXBGXnzkAYBrs5wrlVBnE0AnETAZ4nAHEYCGo5zkE3Cro4zrAVBkwnBrAhEnlVAksZBHsTAZ45Anw2Cqo5zkwYAkIYzrEVBrAnAnwhCG40Bnl0BqX0zkd0AnA1wsX5zkE3CHE0zrEVBnEYBnhhEnsXzko2BnsnzrIVBrw1AHwhAHoVBrw5BrsTBj4nBkwnBqoYAq40Akl0AGX3zkEXAnl2wsAYAq40Akl0AGX4zkE0Brd5wrsXzko2BnhYzrlVAnd4CrIhCG40Cro4zrsXzko2Aks5wsA5zkwYAkITAHoVAnM5CrIhCG4ZAHw1zrsXzkh3ArE5wrlVBrd5BrETAHsVAHhYAnshEnlVBksZAkATAHsVAnA1BHEhCG43CrM1BZXYAG40AHAXBqo5zkl2ArlTAHsVBrsnArEhEnsXzksnBHlYzrsYzkEYAno0wrsXzkAYArw0zrsYzkAnBHI0wrsXzkE0AnonzrsYzks4AHAYwsAYAG4ZBnIYCGXYAq4ZAHM0AGoYAG43CHsnCqX4zkh3BHhnwrsYzkd5ArdTBZ40ArA5BjprAHsVBnlYAnhTBG45Akh5AjoYAG4ZBnAYBGX0zkI4Bkd2wrsXzkE0AHM3zrAVBkwYCrMhHrsXzkE0AHM3zrAVBkwYCrIhKjdhbKE9x3pRd192c2Y1cKJgaKYmcKJVersOwuaQcuX9xZBNaNaNaNMOLq8|372|275|857|432|kl58qx5r2qtq|default_w|default_h|fullwheel|1fZxnM3xmaK5kc2YWdjw6wkoXAroXAqwTwOFWc2YjMLwjCOTjM29Tc3wjCjwXAroXArojzqxPbKFmwkPYzqxUMLxObK4jCjwUAkohAqoXwrojzqxOdNtlbKJVeqw6AGXjMK5QcKt0bK9VwkPjMKYXbusjzqxiwkPjAGwTwNYmaOFicNFZbKePevpiauFQcNdjCksXzqxPwkP1AqXjd3FZaLFkbu9VaOJTcvBkdNJmcjw6AGXjbumlaLJVeumTd3FidOFmaqw6AqXjbumlaLeQeuiWeLFUc3aQcNdjCksTwNiQauJTaKt2aLFQcKJWeLEjCkATwOpWd2m0bK9VwkPjMN90eu9UwjXjM2YQM2UidNJiwkPXzqxPbKFmc25XMLJnaGw6AqXjbumlaKFWe24jCksTwNiQauJReLB0aOJTcqw6Av0TwNBWcOFZc2Ygeum0cuIjCOTjc3xlaLwjCksTwN9VwkPXzqxiM3FQc24jCjx0bLFTaGwTwOF5duIjCjx0aLi0wjXjdu9nbLFQc24jCjx0c3oUcuJNeqwTwNBTbKBSwkPXzqxPMK5lwkPXzqx0aLi0wkPjwjXjeNtZwkPjeum0cuIjzqxPbKFmwkPYzqxPbKFmc25Xcut5wkPYzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwNxOwkPYzqxja2sjCkoVBqXjMNeXMKFlbK5OwkPjBjo2wrMhBjwTwNYmevFmdOBXMKBQcNdjCjwXwjXjd2iWe3FQeuYmduYifKYQd3EjCksTwNaWcOEjCjxGc2xWeu8jgGXjM29VevxWct9TbK5mwkQ7wN9ZauJZwkPnzqxWcjw6AGXjevmXaGw6wOBPMLpmwjXjMKB0bK9VwkPjcumVaGwTwNhjCkETwOxWeK5lbK5OwkPjAGwTwOdjCksXAqXjMGw6AGXjMKxOwkPjAq4nwjXjMKYWMKEjCjwXzkEjzqxic3amdjw6wkojzqxkc2YWdjw6wNI1ArlYBqwTwNBWcu9ZMNdjCjxNaNaNaNMjzqxkc2YWdNYWMKEjCjxNaNaNaNMjzqxkc2YWdN92aLwjCjxNaNaNaNMjzqxjeKaNaLwjCOTjc24jCkoTwNBWcu9ZwkPjaNaNaNaNwjXjMGw6Aq41gGXjdu9nbLFQc24jCjxjc3F0c20jzqxUMLxObK4jCjwXwrs1wrIXwrs1wjXjbutVauYmwkPYzqxja3piauFQcNdjCjw1wrohBGoXwjXjeumXwkPYzqxPbKFmwkPYzqxPbKFmc25TbLamwkPYzqxPMK5lcuJnM2tTaGw6wksVAZwTwNYQcNJ0bLpUMLxObK5jc3F0c20jCks1zqx0c3p0bLojCksTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpja3xWeK5lbK5OwkPnzqxmfvpicNEjCjwYzkdjzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQdvpiauFQcNdjCjw1wrdhBqo3wjXjeumXaN9VevBQfNIjCksYzqx0bLpja2sjCjwYwjXjeumXMGw6wkoVCqwTwNYQcNJ0bLpXc2mVeuJZwkPYzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwOFQdu1idNeQcjw6wkohAqoXwrojzqxkeLB0c213bKF0bqw6AqXjc250c3ojCksTwOpWbK50aKEjCksTwNBTbKBSMLxmMGw6AqXjeNtTeKIjCkoTwNBTbKBScKtZa2mVwkPjAqoXwrIhAqwTwNBTbKBSd2BicuJ5wkPjAG4YwjXjM2YQM2TjCkt9zqxkc250dN9TL3pTMLljCOTjc3xlaLwjCkwTwN9VwkPYzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPBGXhAZlODkYXMLFPwuE9x00YAG40BrMnBrMZzrMVAHI3CrsZBGpAAG4YBroYCHwnAGXXzksYBkM2BkM3wsAYzkoYBrAZBklZzroVArEnBnIhAq44CrE3BHl2AjXXwroVBnA2BkhZBklTAqprAq4nAnAYBnAXCqXXwroVAronBnoYCHwTAq4nAkhYAkIhAq4XArA3Ars5AjXXzkdZCHs2BkM3wsXXzroVBnw5AHM2BkdhHroTAHAVAkdXCrAnAZpAAq4XArA3Ars5AjXYAZ4ZBno4AnAnwsAXzkoXAndXAHlZzrsnzkM3AHh3BGoXzkAnAns3Ano4zrs0wroVBnA2BkhZBklTAHEhEnoVCrh4BrMYBHETAHEhAG4XAHEnAkM5AjXYAZ45Brh5BHhnwrsVAHIYAkl4ArhTAHAVCrd2ArEYBZpAAHsVBrE2AnE2AjX3zkh0Aks4BnIhEnsYzkM5ArM3AnsTBZ42Brs2BkM3wrsYzkh0Bks1AnhTBZ4nAnlXBkw1wrsYzkh0Bks1AnhTBZprAHsVCrE2AHInCqX2zkM2ArlnBnIhAHsVBklXBkdnAGX2zkA2AHl3CHs3wrsYzkE0BkA0BkwTBj4YBHd4AHw1wsXYAG40BrMnBrMZzrMVAHI3CrsZBGpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|DtXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuX9xZAXAroXAroOwvFZMK5naN9ZcH0OevxicOBTMLFmyrETwrAQxn48dut0bqplDGeBBZ43Ard2CHwZCqXXzkd3Bnd3Cro2BZpABZ43Ard2CHwZCqXYAZ4ZAkwZAkwZwsA3zkdXBnM5Akw4zrsnzkM1AHd3BZo4zko5AHsZArwYzrs0wrhVBHM0AHoZBHATAHEhHrsYzksnAnAnAnATAHEhEnsYzkMXBkAYBHMTAHEhAHsVCHh5BnEnBGXYAZ42BHs3BndhAHsVCHh5BnEnBGXYAZ4ZAkwZAkwZwsXYAG45Crl3BrA1zroVBnd3Bnd3Bnd4wsAYAG45Crl3BrA1zroVAnE4AkwZCHdZwrsYzkMXBkAYBHMTAqoYAG4YAnAnAnAnzrohHrhVBHM0AHoZBHATAqprCq4XCHsYAkoZAGXXwrdVBno3BklZAkhTAq4nBrhZAkw5BnwhBZ43Ard2CHwZCqXXzkd3Bnd3Bnd3Cqpbws0nzkEZBHM0AHoYzrs0wsXXzkh1BkEYArw1AZXYBqprAq4nCrA0Akd5AnsTAHEhAqXYAZ42BHs3BndhAqXYAZ4ZAkwZAkwZwsXXzroVBnd3Bnd3CHsnwsAXzroVAnE4AkwZCHdZwroVAnhnBrw3CHAYzrohAq44BHM0AHoZBHATAqpAAZ40AkI2BrsXAGXXwsAnzkh5CrMZAnA0zrohBq4ZCrwXBHsZBZXXzkA0CrwZAkl3Ajo0zkw4Ako1AHw3zroVBnd3Bnd3Bnd4wsX0zkw4Ako1AHw3zrsnzkwZAkwZAkwhEnEVAkhZArIYAkdTAHAVBkIYBnd3wrAVCrl4BkwnAnETAHEhAZ40AkI2BrsXAGXYBqpbxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|DtXWd3aODjwTwNmkc24nwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwvFZMK5naN9ZcH0OevxicOBTMLFmyrwTwrAQxn48dut0bqplDGeBAHMTBZ4YAnM2AHsnAjpAAHMTBZ4YArlYBkl0BGpAAHIVAko4AHd4BGX3zksXCHs2CHE1wsXYBq4ZBnIXCHATBZ4YArlYBkl0BGprAHEVAkd1ArlnzrAVAHl5AHw2AkIhAHsVArMnAHl3zrohBZ4YAnd1BrM0BGXXwsAnzkwYAHh5BHlYzrohAqXnzks5CHsZBkw1wroTBZ4YArlYBkl0BGprAqXYAG4XAHlZAHw2wrAVAksYCrl1CHsTAHEVAks4AnA4CGo3zksnBnI0BkE1zrs0zkwYCrAnCrlhHrdVAHA3BHE2BrITAHwVBrEYArE2BGprBq4YCHAnArh1BGXYAj40BrsXBrM1wrsVBnh0Anh2BkwTAHoVArEYBnoYCqoYzkd4BrA4BkMZzrdVAHo5AHM5BrIhEnsVBnh0Anh2BkwTBq4YBnM2AndXBGo0zks5AnAXCrI1zrsVBnd3AklZAnMhBZ4YAnd1BrM0BGXYzkd3Bnw5AkA2wsAYAq4XCrs3CrE0zrsVBnd3AklZAnMhAHwVBrlXBno2AZX0zks3BkMnBno1wrsZzkE5ArdXBkATBZ4YArlYBkl0BGpAAHoVBkE0BHs2BZX3zksXCHs2CHE1wsXYAZ4nCrw4CHl2zrsYzkI1AkEXArEhHrs2zrdVAHA2BksYAnwhKjdhaNmTcr0Ow2aNaNaNajd|DtXWdut0br48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxXcut5wjXjMKB0bK9VAjw6wOpieLBmwjXjevmXaGw6wOB2aZwTwOBkMKYmwkPjAGwTwOBkMKYmc3amdjw6wksjzqxUMLxObK4jCjwXwrohAqo1wjXjMNekc2YWdN92aLwjCjwUAGwTwNsjCjwYwjXjMK92aLwjCjwUAGwTwOFQdqw6AGXjbKBWcOBkc2YWdN92aLwjCjwXAroXArojzqxQM29Vd2BWcu9ZwkPjaNaNaNaNwjXjMNdjCksTwNxOM29Tc3wjCjxmBHo5AHEjzqxja3piauFQcNdjCjw1wrdhBGo3wjXjMNeic3amdjw6wksjzqxja2sjCjwXwjXjMNeWwkPjAq4ZwjXjbKBWcN1idNeQcjw6wkohAqoXwrwjzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwOFQdusjCjwXzkdjzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwOFQdvpWbK50aLwjCksTwOFQdvpWbK50aLxicumOcjw6wNYmaOEjzqxQM29Vd3xmduYifGw6AGXjbumlaGw6Av0TwNBWcOFZc2YgcLJ0aGw6fZxWdNFmdjw6CqXjc24jCksTwNmkc24jCjw8d3aOwveQavFPDGdZAqdhbuJQa2i0DGdZAqd|line_play|_timer|Dvpieuhhar0OHHsYzkl5BrsnzrsVCrMZBnhhEnsYzkdZAkh5zrwVAHdZBHdhAHsVBnwZCrlTAj42BnE4CGoYAG45CHEYAZXZzkl4Ano5wsAYAj45CHd0BZX0zksnAkdYwrsnzkMYBko4zrIVBns0AHAhAHAVBks2ArhTBZ40BkhZCGprAHAVBks2ArhTCG4ZAko4BGoYAj45CHd0BZXYAq44Ars0CGoYAG45CHI1AjXYAG45BHs5wsAYAG43AkEZBZXYAj4ZBko4CGoYAG43AkEZBZXYAj43Bkw0AZoYAG45CHI1AjXYAZ4XBnwZAGprAHwVAHAXBrITAHAVAkw2BnshAHwVAno3BjXYAZ4nArEnBGoYAj40CrI0AZXYAZ4nArEnBGprAHwVBkMZBHMTAHAVAno0AnIhAHwVCrA5BnsTAHAVAkw2BnshAHwVCHd0BkETAHAVArdZAkshEns0zkwZBHM5zrsYzkMnCrl0wrs1zkoXAHA4zrlVBkInBrIhAHITBZ40BkhZCGprAHIVAroXBklTBG4ZCrs1BqoYBq4ZAkITAZ4ZCHE0BjoYAj45Bns4BZXYzkh2Akd4wsAYAj42CHl5AZXYzkI1Akl5wrsZzkw2AnATAG41BHw5CGoYAG45CHEYAZXYzkh2Akd4wsXYAG45CHEYAZXYzkh2Akd4wtPOwumlDGeXbOBgeN9TeK1mL2JTaK1mcOEZxZpNbKYTDGdkaNaNaNaNx1XWDkYdz2d|brdl|marginRight|wqohwrYdz2d|DtXWdut0br4hwqohwqohwrYXMLFPwuE9x00XzrsnwsXYBq41AHh3Ano0zrsnxZpQar0OHumVaGdhd3FZc2UmDGdkFlauFlauxZpnevxWb2IUe2mleuh9xnwODkYdz3pieuh|wqohwqohwqo8dut0bqplDGeBAqX3wsXYBq41AHh3Ano0zrdOwumlDGeAbK5mxZpnevxWb2I9xZBuFlauFlMOwvB0dN9SaG13bKF0br0OAjd|scroll_right|wqohwrYOwumlDGevdN91dq0ZxZpnevxWb2I9x25WcNIOwvB0dN9SaG13bKF0br0OAGdhaNmTcr0OcN9VaGdhaNmTcq1ZeKYmDGemeNJVc2FlxZp0dNtVd2aWdN09x3FZMK5ncut0aGhnzkoXAroXAqXhAZ4XAroXAroQxZpnevxWb2IUcumVaKBidr0OdN91cNEOwvB0dN9SaG1TbK5mbN9Qck0OdN91cNEODjohwqohwqohDvpieuhhar0OHHoTAGpAAHEVBHs4BnAXBqXYxZpQar0OHumVaGdhd3FZc2UmDGdkFlauFlauxZpnevxWb2IUe2mleuh9xnwODkYdz3pieuh|wjXjMKB0bK9VwkPjd2J0eumVa3AjzqxXc3BQeumWcjw6wNBWcOFZc2YnzLxQa2i0wjXjcKtZa2mVwkPjAqo3wrohAqwTwOF5duIjCjxneNdjzqxnM2tTaGw6wksjzqx0bLojCksTwOFQduxOdN91cNFQcNdjCkATwNtVbK1ieumWcjw6wOpWd2m0bK9VwjXjMNdjCksTwNxOdutlaumVaZw6wkIhBZo1wrdjzqxja2BWcu9ZwkPjaHIXCHs0wjXjMNeWwkPjAq4ZwjXjMNeic3amdjw6wksjzqxja2sjCjwXwjXjbKBWcN1idNeQcjw6wkohAqoXwrojzqx0bLpXMKFlbK5OwkPjBZo3wrdhBZwTwOFQduxOMGw6wksjzqx0bLpiwkPjAq43wjXjeumXaN9VevBQfNIjCksYzqx0bLpTaLF0aLxndutkbK5OwkPXzqx0bLpkc2YWdjw6wkoXAroXAqwTwOFQduxOM29Tc3wjCjxNaNaNaNMjzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxZbKePeqwTwOFQdvFmfvEjCjwjzqxPaumkc24jCkoTwNiQauIjCksTwNiQauJWcNYQeNIjCkoTwNmkc25nM29Tc3xWeNJZwkPjAroXAroXwjXjbKBWcOBkc2YWdjw6wj0YwO0TwNBWcOFZc2YgduYifKYQd3EjCOTjc3xlaLwjCksXzqxWcjw6AqXjbKBWcjw6wkYneNdhe2mleuh9xns3dvhOwuimbKePer0OAHaXfqdheNmme0xWfr0OAjoZwrs3wrs2xZp2aLxnbK9VDGdYzksOwviUcu5nDGePevFXCmXWLq93e3dVenAVc3xOLq8ZAroXLq9neNdOwviUcu5nCOiTbK5SDGePevFXCmXWLq93e3dVenAVc3xOLq8YCHl5Lq94cumVbZd|5em||DtXWd3aODjwTwNmkc24ZwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhaNmTcr0OwnoXAroXAqdhevxicOBNc3xUDGe0dNtVd2YieuIPAZXhAjlODkYXc2Y5a29VwvpWbK50dn0OCq44Crs3CrEZaG0YBjo0zkA3BrMhCq44Crs3CrEZaG0YBjoYAq42AkInCGonzksXArw5wrsXzkMZBHA5wrdVBnEYBrAhAHIhBZ43BrEYCGoXwrAVAHoZAndhBq4nBnE2AGoYzkd3BkA1Bkh0aG0YBGo0zkA3BrMYwrsVBnd2AnI2CrFmzHs1wrEVAnd0BjdhaNmTcr0Ow2aNaNaNajedzn48dut0bqplDGeBAHsVCHw2Bnd2BZX2zkM0BnE0BnlYwsX5zkh3CHAZBnw2zrEVBHl5CHl4BrdhHrlTBG40BnlnAkI3AZpAAHsVArE3BrE5BqX3zkIZBkd3BHs3wsX5zrlVBHd0Akw0BkshHrlVCrd5Anw3AkMTAHoVBrInBHIYCGpAAHsVCHw2Bnd2BZX4zkEXBksXAkEnwsXYAZ45BnEZAkMYzrsXzkE1AnI1AHlhHrs0zkh1AnI1AnETCG41BnEZAkE2AGpAAHwVCro2AHo0zrdVBHw2Bnd1AHdhHrs0zkh1AnI1AnETBG40BnlnAkI3AZpAAHAVCHd0Akw2AGX0zkI5CHl5CrE3wsXYAG45AkM3BnM3zrMVBkE3BrE3CHshKjdhaNmTcr0Ow2aNaNaNajedzn48Lq9ODkYdz3B2an4jzqxiM3FQc24jCjxUeLFmwjXjMKB0bK9VAjw6wOJVcLJ0aGwTwOF5duIjCjxneNdjzqxUMLxObK4jCjwXwrohAqoYAqwTwNxOwkPYzqxja2BWcu9ZwkPjaHIXCHs0wjXjMNeWwkPjAq4ZwjXjMNeXMKFlbK5OwkPjBGo1wrIhBZwTwNmkc25UMLxObK4jCjwXwrohAqoUAGwTwNxOMK92aLwjCjwYwjXjMNeiwkPjAqwTwOFQdqw6AGXjeumXdutlaumVaZw6wkdhBZo3wrdjzqx0bLpja2sjCjwYwjXjeumXaN9VevBQfNIjCksYzqx0bLpja3xWeK5lbK5OwkPnzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqx0bLpiwkPjAq43wjXjMK5QcKt0bK9VwkPjMKYXbusjzqx0bLpXc2mVeuJZwkPYzqx0bLpXc2mVeuJZMKYQa24jCjxTaKa0wjXjeumXeuJ4eqw6wjwTwOpWd2m0bK9VwkPjM29VevxWcvAjzqxPbKFmwkPYzqxPbKFmc25Uc2xQcuIjCksTwNFQd3pTMLm2c2Y1cKIjCksTwNiQauJWeNJZe2mleuhjCkoTwNiQauJWcNFmd2U0c3ojCkoTwNmkc25nM29Tc3wjCjwUAGwTwNmkc25nM29Tc3xWeNJZwkPjAroXAroXwO0TwNBWcOFZc2YgeN9TeK1mwkQ7wN9ZauJZwkP5zqxWcjw6AGXjevmXaGw6wOBPMLpmwjXjMKB0bK9VwkPjeN9TeK1mwjXjbqw6BqXjdN91cNFQcNdjCjwYwjXjM3Jneu9Ue2mleuhjCksTwOdjCkdXzqxiwkPYzqxiMNdjCjwXzkAjzqxic3amdjw6wkojzqxkc2YWdjw6wNI1ArlYBqwTwNBWcu9ZMNdjCjxNaNaNaNMjzqxkc2YWdN92aLwjCjxNaNaNaNMjzqxPbKFmwkPYzqxPbKFmc3J0cLJ0aGw6AGXjdN90MLFQc24jCjwjzqxja3piauFQcNdjCjw1wrohBGoXwjXjMNdjCkoTwNiicNFTaGw6AGXjdu9nbLFQc24jCjxkc250dN9TdZwTwN1idNeQcjw6wkohAqoXwrsXwjXjMK5QcKt0bK9VwkPjMKYXbusjzqxPbKFmeK50bKYneutZeuJlwkPXzqxPbKFmc25TaKt2aGw6AqXjbutVauYmd2BicuIjCjwYzkAjzqxPMK5lcuJkc2YWdjw6wj0YwjXjaLiXMK5lwkPjAG40wjXjeumXwkPYzqx0bLpja2BWcu9ZwkPjaNaNaNaNwjXjeumXM29Tc3wjCjwXAroXArojzqxTbK5meumXcKtZa2mVMN90eu9UwkPYBGXjeumXMNeiwkPjAGwTwOFQduxOdN91cNFQcNdjCkATwNYQcNJ0bLpXc2mVeuJZwkPYzqx0bLpNc250d2m6aGw6AHsTwN9Veu9XwkPYzqxPMK5lcuJPbKFmwkPXzqxkcumkb2tZaKsjCkoTwNiQauJWcN1WMNmTaGw6AL0TwNBWcOFZc2YgeumUaGw6fZxWdNFmdjw6BGXjc24jCksTwNtkeumWcjw6wOFQcKIjzqx0fLpmwkPjeuJ4eqwTwOFmfvEjCjwXCkoXwjXjaN9VevBQfNIjCksYzqxUMLxObK4jCjwYwrohAqoYAqwTwNBTbKBSwkPXzqxnaLpidNt0c3wjCjxdzZwTwNmVeNJZd2J0bK1mwkPXzqxicNmUMLFQc24jCjxXc3BQeumWcjwTwOBPc3eleLxieumWcjw6AGXjcuJ0euJZd3piM2mVaZw6wksjzqxNc250wkPjIN9jc3FWwO0TwNBWcOFZc2YgavJZMLFQc24jCOTjc3xlaLwjCkdTwN9VwkPYzqxiM3FQc24jCjxleLxieumWcjwTwOF5duIjCjx0aLi0wjXjeuJ4eqw6wj0hwro6ArojzqxNc250d2m6aGw6AHsTwN1idNeQcjw6wkshAqoXwrojzqxkcumkbZw6AqXjMK5QcKt0bK9VwkPjdu9nbLFQc24jzqx0bLojCkoTwOFQdvFmfvEjCjxdeHo0AHFdeHo0A2xdeHo0AnideHo0BrxdeHo0AnJdeHo0A2xdeHo0BuBdeHo0A2FdeHo0A2JdeHo0BrtdeHo0BrxdeHo0BuAjzqxPbKFmwkPXzqxPbKFmc25TbLamwkPYzqxPbKFmc25laLBSeu9XwkPXzqxXc3BQeumWcjw6wNBWcOFZc2YnwjXjaN9Veqw6wmxWMN90cZwTwNYmevFmdOBXMKBQcNdjCjwYwO0TwNBWcOFZc2YgMOJNaNJZwkQ7wN9ZauJZwkP2zqxWcjw6AGXjbKBWcjw6wkYlbLMhM2Yid3A9x2YWMKFmdjiZMK5lyGd|actn|lang_ru|unmute_video|skip_after_|DtXWd3aODkYdz2FQek58gvXVcu9iauJZyvxicNEQwvUXc3BQeumWckPhdNJTMLFQeNI7cKtZa2mVCjoUAkJXfqoXwrohzHw1dvh7e2mleuh6wrIXdvh7gG5Tc2tlaLwPdNtVaql6MNJNc3xmwvUkc250aK50CjoOxnUlbLBXcut5Cjpjcu9kbnUXMKFlbK5OzLFWdrPhAHoXxHU9zNBQdNB1cutZyvxicNEQwvTUe2Jjb2m0zKtVbK1ieumWckPhdN90MLFmwrxnwuYQcNJidjpQcNaQcNm0aHUicNmUMLFQc246wvxWeut0aGoZdZpTbK5mMLwhbK5NbK5QeuI7buJQa2i0CjoYAromCZ13aKxSbLEUevxicOBNc3xUzK9ZbKeQckPhM2JVeuJZwuBmcOFmdkU0dNtVd2aWdN0Uc3xQa2mVCjpkaK50aLwhM2JVeuJZC3eQavFPCjoYAromC3pWd2m0bK9VCjpiMOBWcvJ0aHU0c3o6wro7MN90eu9UCjoXC2YmaOE6wro7dNmObvE6wro7cKtZa2mVCjpieLFWC30Vdut0bqiZMK5lyGp7d3FZc2UmzKFid2iidOxifHPhAGXhAkoXC3B0dN9SaG1lMLBPc2aNd2J0CjoXCZ13aKxSbLEUMK5QcKt0bK9VCjplMLBPwrsVBLAhaKtnaG1Qcj1WeLEhbK5NbK5QeuI7MK5QcKt0bK9VCjplMLBPwrsVBLAhaKtnaG1Qcj1WeLEhbK5NbK5QeuI7gIoUe2Jjb2m0zKUmfKaZMK1mdZpZc3FieuIhfnsXAqIhfZ13aKxSbLEUevxicOBNc3xUCjpZc3FieuIPAnMXauJOyHU0dNtVd2aWdN06wvxWeut0aGhnBkplaKdQC319EuUmfKaZMK1mdZpZc3FieuIhfnsXAqIhfZ13aKxSbLEUevxicOBNc3xUCjpZc3FieuIPAnMXauJOyHU0dNtVd2aWdN06wvxWeut0aGhnBkplaKdQC319Eq13aKxSbLEUb2J5aOxicKJnwuFid2hhfnomwvUnevxWb2IUautnbutZdNt5CjoYzqoZAro7d3FZc2UmzKFid2iWaNanaLE6wro7gHIXxGp7d3FZc2UmzKFid2iidOxifHPhCrlTwrwXArUnevxWb2IUautnbu9NaOBmerPhzHA1dvh7gHsXAqIhf3B0dN9SaG1lMLBPMLxZMLl6wrh5zqoZAro7d3FZc2UmzKFid2iWaNanaLE6wq0YAkFXfrU9gIpSaLmNdNtUaLAhautnbqp7AqIhf3B0dN9SaG1lMLBPMLxZMLl6wrsTwrwXArUnevxWb2IUautnbu9NaOBmerPhArU9BHomwvUnevxWb2IUautnbutZdNt5Cjo4CGXhAkoXC3B0dN9SaG1lMLBPc2aNd2J0CjoUAnJXfrU9AHoXxGp7d3FZc2UmzKFid2iidOxifHPhCrlTwrwXArUnevxWb2IUautnbu9NaOBmerPhzHsZBvp4C319wjXjMKB0bK9VwkPjMOJNaNJZwjXjevmXaGw6wNBndZwTwOpWd2m0bK9VwkPjM2JVeuJZwjXjd2BicuIjCksTwNBTbKBSwkPXzqxPbKFmwkPYgGXjM29VevxWct9naLF0bK5OdZw6fZxWdNFmdjw6AHwTwN9VwkPYzqxQM29VwkPjDvB2aZp3bKF0br0OAkoOwuimbKePer0OAkoODkYOwuaQcuXUdOJTaH0OcN9VfNJZcZdhevxicOBNc3xUDGe0dNtVd2YieuIPAGXhAGlODkYXMLFPwuE9x005zkl1CHwYBkA2zrohHrsYzko3AnEnBHwTAj40Akw5Cro3BGpAAHwVArh0Akd4zrwVCHd2CrA2BnIhHrs0zkI2BHEZBkATAG44BklYAkE3BGpAAHMVAroYAnI1AZXnzkA1BnM2Bkh5wsXYBG4YCHdZBkE3zrIVCrEYBrs3ArlhHrs1zkEYBHE3BHMTBj44Ano2CrEnBGpAAHdVCrdnBno2AZX3zkd4CrA5AHshHrs4zrlVCrEZAkl5BHEhHrs1zkI1AnA1AHETAHoVCroXAro2AZpAAHIVArdXCrE3BZXYAG44Anh0Arh5wsXYBj4XCrs2CHo1zrs0zkA0AkwXCHAhHrs0zkM1BkMXBrwTAHIVCrsnBHE3CGpAAHwVAHInAHI0AZXYBq43BklZArE1wsXYAG4XAkd0BnM2zrs1zkw0Akw0ArhhHrsXzko4BHIYArsTAHdVBko3BkdhHrhVArMnCrw0BHETAHdVBZpABj45CrEYArI0BZXYBG4ZCrh0ArI4wsX1zkhYAkE2CHwTAHEVBnhXBns0CqpAAZ40BrMYBHI3BqXYBG44BHA3BnwYwsXYzkl2Brw2CrsYzrs0zkEnBrInCHAhHrwVCHw5Akd1BHsTAHsVCrh0BHdnCGpAAj4nBkMnAHA0BGXYAq44AkAXAkM5wsXXzrlVCrl5CHd0CrAhHroVArwnArEXCHo2CGX3zkhZAno0BHd4wsXZzkE0Bkd3AHhYzrMVCrEZAns4BrwhHrwVCHEXBnA0AnITBG44Brs0AHdXCGpAAG44CrA5Anw5BZXnzkA1BnM2Bkh5wsXnzkAnAHAZArh1zrsVCrlZAkM5AHAhHrIVCrM5Crh2BkETAj44CHMYBro4BjpABj45Bnw2BrM2AjXZzkE4Ard3CHhhHrdVCHA3BHAXCqXXzko0Bko0AHwYAnMhHrlVCHI5Aks2AnMTAqpbws04zkh0CHlnCrdnzrMhEndVAkd2ArAnBrITBjo2zrdVAkd2ArsnAkhhBjX4zkh0CHlnCHd0wsA2zrsXzkEZAnl4BkdhBZ4ZBnMXAnA0BGXYAG43wrhVCrE5CHA4BnATAHsVBZprAHoVBrwnCHM2BjXYAG43wrsYzkdTAHoVBrwnCHh2BZoYAG43zrhVCrE5CHA5BnEhEnsYzkdTBZ4ZBnMXAHAZCqoYAq40AkA5BkM2zrMhCq44Brl5Anh3AZX2wtPOwuaQcuX9xZBNaNaNaNMOLq8|DvB2aZpkcutndn0OM2mZM3JTMLwPdNtVaqlOwvaQaLeqc3h9xnw1wrw1wrIXwrIXxn48M2mZM2YmwuBTMLBnDGeXMLFPyvxicNEQxZpnevxWb2I9xZikc2YWdjlOwuB4DGd1AqdhM3l9xnIXxZpZDGdZAqdhaNmTcr0OcN9VaGdhd3FZc2UmzLeQavFPDGdZxZpnevxWb2IUcKm0aLxTbK1Qer0OAHoOLq8|isflash|borderBottom|timestore0plroot|stripsw|Verdana|ffff00|4bd9ac|normalonclick|b3fee8|d9bb8c|aaaaaa|ffc7d1|tippmargin|tipa|constrols|subtitle_errdel|e8bbff|feba54|faed54|073DA0|sub_all_title|timestoreunauto|timestorenolive||redirectplaylist|usernew|1006|1005|sub_allmy|stripsspace|unescape|slidespeed|250|ffce00|72ccf8|62de50|D90000|409829|moved|scrollTo|borderRight|sub_drag|black|2px|thumbs_img|sub_fonted|clear|reloaderTimer|logos|clone|google|PluginSubword|files_scale||files_sleep|current_sleep|WEBVTT|clr_sepia|Dialogue|action_back|vast_remove|vast_impressions_all|contains|hidesmoothly|dropnohide|setioff|clr_saturate|clr_brightness|clr_contrast|644082|subclr|modestbranding|onReady|0068991|showinfo|vast_pauserolltbimp||vast_playroll_limit|28392408|64309913|vast_postroll_counter|98752408|vast_postrolltbimp|||vast_postrolltimebreak|vast_postroll_limit|vast_pauseroll_counter|vast_pauserolltimebreak|vast_midroll_counter|vast_pauseroll_limit|50989913|73852408|39769913|vast_preroll_counter|vast_prerolltbimp|vast_prerolltimebreak|5011287|71310145|vast_playroll_counter|vast_midrolltimebreak|525863|6001007|03369913|vast_titlebgcolor|PluginShare_telegram|vast_skipcolor|17432408|00849913|M15|09932408|vast_skipbgcolor|vast_linktxtcolor|vast_midrolltbimp|47186369|97129913|3186567|02432408|vast_linktxtbgcolor|vast_introtbimp|vast_introtimebreak|45846159|L14|vast_preroll_andlimit|83887768|98389913|39285947|embedheight|560|0203322|72892408|17269913|1945595|55677205|4089931|08569913|0254896|80589866|78152031|98549913|88589913|embedwidth|78569913|1461085|91554129|6017798|76252408|75264618|55161471|73312408|76053503|vast_preroll_limit|89905178|vast_title||92444761|vast_volume|54028255|27949913|90280076|62378254|vast_closeonclick|vast_timeout|39594688|86775181|9481644|591821|vast_pauseonclick|18940216|56501681|5646609|PluginUpload|26192408|36152408|62369913|45709913|17872408|vast_unmutebutbgcolor|2800991|54409913|02932408|4843241|vast_default_volume|vast_resound|3796991|vpaid_slotinframe|63169913|eventstrackervast|94772408|partnerprerollor|partnerpauserollor|53509913|partnerpostrollor|87332408|partnermidrollor|3343241|vast_unmutebutcolor|9932991|vast_unmutebutonce|7255241|vpaid_timeout|vpaid_timeout2|0339241|7310991|9589241|9056991|5810991|8833241|4310991|94929913|32872408|2155241|37689913|81892408|vast_midroll_vmap|vast_postroll_vmap|vast_pauseroll_vmap|vast_preroll_vmap|93169913|vast_openclick|4792991|1843241|2829241|7465241|6715241|minivis|fimg|69872408|f2img|75949913|sub_settings|7398991|61112408|8898991|5904991|2002|83449913|52352408|90889913|9894991|8587241|0266991|46112408|9829241|vast_titlecolor|3091241|vast_unmutehover|2593241|midrollpoint|5794991|introskiptime|2095241|vast_linktxtonmobile|introclickable|7168991|vast_volumecolor|introclosetime|61009913|vast_xbgcolor|introtitle|introtxt|vast_volumebgcolor|80612408|vast_progresscolor|vast_progressbgcolor|67729913|8542991|vast_xcolor|default_channel|embedsize|91252408|170|settings3|9784469|0997273|28889913|settings4|5473241|settings3action|01289913|49132408|01349913|18772408|7774154|01469913|7244686|0588595|6708602|0856637|70329913|5770455|settings2action|0213241|3677693|5781241|settings1|4155588|poster_floatposition|2547336|0038991|3351462|4871241|00069913|2357241|01549913|7581241|poster_floatmargin|461584|14009913|5003241|00029913|settings5action|4883882|4865241|settings5|settings4action|81329913|settings1action|current_channel|3811714|onYouTubeIframeAPIReady|36980425|whatsapp|9485553|10176229|9753595|79351404|web|PluginShare_whatsapp|ytcl1|youtube_iframe_api|M14|API|videoId|playerVars|enablejsapi|playerapiid|html5|disablekb|playsinlineonmobileiphone|iv_load_policy|908349|46361894|titlecolor|95640915|541335|593535|9031916|50092408|6100991|8512623|1980378|39043363|4794819|7073175|222222|12492408|54918887|8413385|79867139|1148991|speed4live|8681427|61104201|8949469|hidearrow|0134958|3092991|4557651|errortimeout|80932408|64769913|6935719|vast_impression|vast_click|3658545|706974|97987656|vast_skip|nameofdashquality|3524524|dashlowquality|3468113|00668076|3699241|3602134|60889913|04688705|3870176|9699241|57329913|6399635|6306539|82476969|66394451|48629913|06192408||34889913|42432408|shareiconmargin|shareiconscaleover|Input|shareiconscale|16112408|70972408|sharetop|sharetitle|89792408|ga_proc|5495798|06600745|27203981|60952408|49829913|0174202|dashcookies|7454539|2176147|C16|545084|158849|49672408|2904441|9996991||poster_floatbgcolor|poster_floatheight|7997241|1213742|89532408|3701951|046119|9978991|4774119|1533357|L12|490814||1667378|poster_floatwidth|0008991|91761122|1310991|51661242|4685241|3958991|3695241|13718414|25694808|8450875|2536879|6532991|3443241|9280991|4324598|dashdebug|3197241|2028991|16x9|9825241|8142991|01249004|M12|38992408|3780991|296|Destroyed|883|Infinity|onpause|wake|nativeaudio|language|WebKitMediaSource|WebKitSourceBuffer|appendBuffer|hlsaddbitrate|firstLevel|AudioTrack|2000px|aborted|playtry|playError|interrupted|automute|playError2|autoplay_denied|hlsforce|webkitAudioContext|createMediaElementSource|createGain|Video|webkitDisplayingFullscreen|disabled|NETWORK_ERROR|FRAG_PARSING_METADATA|fragdata|AUDIO_TRACKS_UPDATED|AUDIO_TRACK_SWITCHING|subtitleDisplay|hlssubtracks|FRAG_LOADED|SUBTITLE_TRACKS_UPDATED|subtitleTracks|ERROR|MEDIA_ERROR|webkitfullscreenchange|recoverMediaError|hls_error|Level|regress|PluginWS|wsconfig|sleep|watching|loadstart|loadeddata|destination|WebKitPlaybackTargetAvailabilityEvent|relurl|isOn|showvolmobile|nativemobile|hdbfmb|hdbfdt|noset|to_right|lrpp|customwidth|wproc|02|tskp|grdt|cancelskip|cancel|seektome|seekiconbut|ssfly|bezier|ssdown|combined|PluginSettings2|showovr|hdn|ndash|webkitplaybacktargetavailabilitychanged|exitPictureInPicture|availability|available|webkitcurrentplaybacktargetiswirelesschanged|webkitShowPlaybackTargetPicker|webkitSupportsPresentationMode|pictureInPictureEnabled|disablePictureInPicture|webkitPresentationMode|pictureInPictureElement|requestPictureInPicture|setAudio|customspeeds|setWsQuality|setWsAudioTrack|level|getDash|fillvideo|HlsSubTrack|subtrack|playbackRate|kind|dashInterval|reset|hlsfdt|fragment|hideonleaveandplay|dailymotion|eng|English|rus|Speed|Audiotrack|FloatPosterScale|rldnornd|PluginFloatPoster|New|hqdefault|Image|2160|MediaVimeo|MediaPjs|MediaDaily|RemoveAll|Created|vast_posterurl|vast_loadtxtd|nomedia|0001|createposter|customqualities|3840|dragging|tags|suggestions|winmob|dvtp|playlists|EXTINF|loaderror|tryotherquality|Alternative|reloadtimes|Break|Seeking|1440|Quality|qualitypause|426|240|854|480|1280|720|1920|1080|2560|scaledrag|scaledrag0|FRAG_CHANGED|drmSystems|capLevelToPlayerSize|apple|914|widevine|microsoft|playready|clearkey|licenseUrl|serverCertificateUrl|emeEnabled|xhrSetup|enableWorker|withCredentials|attachMedia|MEDIA_ATTACHED|attached|MANIFEST_LOADED|MANIFEST_PARSED|LEVEL_SWITCH|LEVEL_SWITCHED||LEVEL_LOADED|Live|hlscltps|fragLoadingTimeOut|error_time|nativenodownload|urlmse|codecs|avc1|42E01E|mp4a|tagcors|crossorigin|crossOrigin|drunchr|ynxnopip|controlsList|manifestLoadingTimeOut|nodownload|taginframe|complete|nativehlstv|nativehlsinsafari|nativehlsinedge|support|flussonic|PlugMediaChannels|DASH|autoStartLoad|showuntilmeta|hideonbar|finish|childList|allowLinker|require|autoLink|word|container_w_procent|35px|07|transbg|oframe|observe|borderin|srvsga|inset|querySelector|pjscolor|backface|manipulation|origin|indent|outline|visited|hover|88484718||getDate|oncontextmenu|RWAlnQyyazA4aoAB4FsBSA|pjs_thumbnail_|200000|shape|grdth|grdta|grdtc|mrgnp|iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT|OqFAAAAdklEQVQoz42QQQ7AIAgEF|kbq|bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg|Cross|DOMContentLoaded||fast|unatpl|pljscom|viewinit|intvsbl|pstrcnfg|emptyremove|answer|hash|class|ContextMenu|offsetwidth|offsetX|ChromeCast|PluginEffects|PluginMediaTags|passonstart|mobtch1|nfscldr|nfsclios|nombclck|seeksidesmob|layerX|change2playlist_bottom|fullscreenchange|posterstime|pstrvd|_vdpsrt|Logo|Orientation|webkitFullscreenElement|webkitIsFullScreen|mozFullScreen|msFullscreenElement|fullscreenElement|Local|MSFullscreenChange|rc_custom|sessid|rc_nobrand|uppercase|99999|rmright|ref|15em|playback|panel|autoplaynomobiletv|rafinit|sleeptimer0|keydown|||||||||||offsettimerinit|startvisibility|PluginMini|PluginBlock|quizes|PluginQuiz|mouseenter|mouseleave|orientationchange|move|keyup|roundingver_final|hlsdvrtime|hidelap|bufferInterval|showduration|showboth|separator|buffering|SettingsTimer|maxHeight|ShowSettingsBut|enter|187|189|bufferDeg|cast_available|countdown|counter|PluginCountdown|iconspress|link2|ontop2|PlgnCntrlTmln|webp|_text|SVG|pauseonhover|pjs_cast_button_|PluginHdIcon|hide0timestore|hidesmall|dropopen|hideall|hideonend|hideondesktop|hideonmobile|hideunwait|hidewait|hideafterstart|hidelastpl|hideuntiltext|||||||||||hideonyoutube|hideuntilstartedios|hideuntilended|hideonvod|hideonleave|hideonunmute|hideonlive|hideonmeta|hidemini|hidenomini|hidenoab|hideab|ontouchend|flipx|235|valuemarginleft|alphas|abg|lines1|aload|colorover|valuepaddingtop|valuepaddingleft|valuepaddingright|valuemargintop|valuemarginbottom|valuemarginright|running|l3v_left|handlemargintop|handlemarginbottom|handshdw|drop|225|onmouseup|onmousedown|handlemarginleft|handlemarginright|Color|slider|flipy|iconmarginright|touch_|_bg|bggrl|bggrc|bgbrdrw|clickmarginleft|clickmarginright|iconmargintop|iconmarginbottom|988||||rotateonclick|volume_element||tippointeralign|||180|tipmargintop|tipmarginbottom|tipmarginleft|tipmarginright|hidesec2|scale0|control_time|triangle|control_mute|redirectafter|iconmarginleft|finishnormal|clk|stylesheet|googleapis|matches|css2|swap|fine|circle|matchMedia|nexttrack|same|async|WebkitAppearance|NaNpx|number|Philips|olor|setProperty|blackberry|previoustrack|repeating|wrapper0|__storage_test__|currentfile|roll|vrsn|vastids|adsystem|vpaid|wkdt|artwork|iosv|filetype|getVolume|midroll_time|midrollcrtm|nomobile|iemobile|MediaMetadata|Tizen|45deg|startAd|983|Opera|||Medium|trident|userAgent|appName|993|fps|915|Edge|885|775|997|994|985|979|971|962|Trident|Firefox|1000000|armv|control_buffer|cssText|FindPjsDiv|Roku|nodeName|arguments|BRAVIA|webOS|Safari|substring|reduce|encode|tvOS|MacIntel|platform|ipod|Windows|vastmute|vaststart|897|createEvent|capiom|eventlisteners|resumed|unmuted|rewound|vast_Impression|adShown|initEvent|playerjs_hit|dispatchEvent|logapi|toogle|youtubeid|vpaid_|VpaidSet|Test|dwn|watch|nonInteraction|prt|the|Tiny|clipboard|Full|1296p|Super|Quad|Ultra|advertiser|gainact|website|Audio|LIVE|Enter|300000|Metric|Copied|Previous|startvast|vastbreak|vastresume|invert|Courier|Arial|fillStyle|fillText|toDataURL|toUpperCase|jpeg|cut1|norootplstart|cut2|playlist_folders|playlist_length|showplaylist|showvlt|vastnow|vastinfo|vastpause|sscopyright|10000|Boolean|Shadow|plduration|moveplaylist|Reset|mainresize|isfullscreen|fix|unfix|timeplay|Font|Active|Bottom|Yes|switchpip|castinit||Skip|Sleep|once|All|918|appVersion|874|issue|webkitEnterFullScreen|webkitendfullscreen|webkitExitFullscreen|wheelDelta|valuepaddingbottom|chngwd|crossdomain|vlscrl|outros|3600000|981|yandex|vast_init|crtm|skipimprsd|skipimpessed|0123456789|fileend|bgload|dontseekforward|PluginStat|AdBlock|Resume|01|Progress|scrnstp|001|downself|pjsiframed|_self|reloadstart|nooverlay|PasswordTime|tracking|reloadjustevent|reloadplus|bgload2|984|pjsstat|vast_ima|preloading|disablePreload|VastInsertAnd|041|VastInsertOr|vast_stop|vast_finish|vldcntrInterval|and2limit|029|vast_dontplay|EmptyVastUrl|Pass||992|RemovePassword|posterfull|Next|VastRemoveUrl|VastImpression|tagLive|VpaidStarted|VastShow|VastReady|vast_ready|996|VastOverlay|vastbgpreload|renew|vast_error|PluginVastTimeMsg|startdelay|019|vast_startdelay|alarm|036|VastError|pjsstatid|webkitSupportsFullscreen|Small|267|818|191|606|nativenotandroid|785|sess|003|096|185|344|globalfont|747|showfrom1file|659|openlast|redirectparent|redirectblank|scrollY|416|705|192|const|2048|848|nativeontv|007|PluginWater|heartbeats|547|483|water|isOpen|wid|pageXOffset'.split('|'), 0, {}))
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
                    s(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, m(i.key), i)
            }
        }

        function a(t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", {writable: !1}), t
        }

        function s(t, e, r) {
            return (e = m(e)) in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
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

        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }

        function c(t, e, r) {
            return c = d() ? Reflect.construct.bind() : function (t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i));
                return r && h(n, r.prototype), n
            }, c.apply(null, arguments)
        }

        function f(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return f = function (t) {
                if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                var r;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, i)
                }

                function i() {
                    return c(t, arguments, u(this).constructor)
                }

                return i.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h(i, t)
            }, f(t)
        }

        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
            return i
        }

        function v(t, e) {
            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (r) return (r = r.call(t)).next.bind(r);
            if (Array.isArray(t) || (r = function (t, e) {
                if (t) {
                    if ("string" == typeof t) return g(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(t, e) : void 0
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

        function m(t) {
            var e = function (t, e) {
                if ("object" != typeof t || null === t) return t;
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

        function p(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }

        var y = {exports: {}};
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
        }(y);
        var T = y.exports, E = Number.isFinite || function (t) {
            return "number" == typeof t && isFinite(t)
        }, S = function (t) {
            return t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached", t
        }({}), L = function (t) {
            return t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError", t
        }({}), R = function (t) {
            return t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", t.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", t.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", t.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", t.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_PARSING_ERROR = "levelParsingError", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.FRAG_GAP = "fragGap", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown", t
        }({}), A = function () {
        }, k = {trace: A, debug: A, log: A, warn: A, info: A, error: A}, b = k;

        function D(t) {
            var e = self.console[t];
            return e ? e.bind(self.console, "[" + t + "] >") : A
        }

        function I(t, e) {
            if (self.console && !0 === t || "object" == typeof t) {
                !function (t) {
                    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                    r.forEach((function (e) {
                        b[e] = t[e] ? t[e].bind(t) : D(e)
                    }))
                }(t, "debug", "log", "info", "warn", "error");
                try {
                    b.log('Debug logs enabled for "' + e + '" in hls.js version 1.4.10')
                } catch (t) {
                    b = k
                }
            } else b = k
        }

        var w = b, C = /^(\d+)x(\d+)$/, _ = /(.+?)=(".*?"|.*?)(?:,|$)/g, P = function () {
            function t(e) {
                for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && ("X-" === r.substring(0, 2) && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(r)), this[r] = e[r])
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
            }, t
        }();

        function x(t) {
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
                    t = o(new P({}), r, t)
                }
                if (this.attr = t, this._startDate = new Date(t["START-DATE"]), "END-DATE" in this.attr) {
                    var n = new Date(this.attr["END-DATE"]);
                    E(n.getTime()) && (this._endDate = n)
                }
            }

            return a(t, [{
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
                        if (E(t)) return t
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
                    return !!this.id && !this._badValueForSameId && E(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
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
                var r = t.split("@", 2), i = [];
                1 === r.length ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
            }, a(t, [{
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
                    return !this._url && this.baseurl && this.relurl && (this._url = T.buildAbsoluteURL(this.baseurl, this.relurl, {alwaysNormalize: !0})), this._url || ""
                }, set: function (t) {
                    this._url = t
                }
            }]), t
        }(), G = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkeys = void 0, i.type = void 0, i.loader = null, i.keyLoader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new M, i.urlId = 0, i.data = void 0, i.bitrateTest = !1, i.title = null, i.initSegment = null, i.endList = void 0, i.gap = void 0, i.type = e, i
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
            }, a(e, [{
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
                    if (!E(this.programDateTime)) return null;
                    var t = E(this.duration) ? this.duration : 0;
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

            return l(e, t), a(e, [{
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
                this.updated = this.endSN !== t.endSN || !!r || !!e, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
            }, a(t, [{
                key: "hasProgramDateTime", get: function () {
                    return !!this.fragments.length && E(this.fragments[this.fragments.length - 1].programDateTime)
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

        var j = {
                CLEARKEY: "org.w3.clearkey",
                FAIRPLAY: "com.apple.fps",
                PLAYREADY: "com.microsoft.playready",
                WIDEVINE: "com.widevine.alpha"
            }, q = "org.w3.clearkey", X = "com.apple.streamingkeydelivery", z = "com.microsoft.playready",
            Q = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed";

        function $(t) {
            switch (t) {
                case X:
                    return j.FAIRPLAY;
                case z:
                    return j.PLAYREADY;
                case Q:
                    return j.WIDEVINE;
                case q:
                    return j.CLEARKEY
            }
        }

        var J = "edef8ba979d64acea3c827dcd51d21ed";

        function Z(t) {
            switch (t) {
                case j.FAIRPLAY:
                    return X;
                case j.PLAYREADY:
                    return z;
                case j.WIDEVINE:
                    return Q;
                case j.CLEARKEY:
                    return q
            }
        }

        function tt(t) {
            var e = t.drmSystems, r = t.widevineLicenseUrl,
                i = e ? [j.FAIRPLAY, j.WIDEVINE, j.PLAYREADY, j.CLEARKEY].filter((function (t) {
                    return !!e[t]
                })) : [];
            return !i[j.WIDEVINE] && r && i.push(j.WIDEVINE), i
        }

        var et = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

        function rt(t, e, r) {
            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
        }

        var it, nt = function (t, e) {
            return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        }, at = function (t, e) {
            return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
        }, st = function (t, e) {
            for (var r = e, i = 0; nt(t, e);) i += 10, i += ot(t, e + 6), at(t, e + 10) && (i += 10), e += i;
            if (i > 0) return t.subarray(r, r + i)
        }, ot = function (t, e) {
            var r = 0;
            return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, r |= (127 & t[e + 2]) << 7, r |= 127 & t[e + 3]
        }, lt = function (t, e) {
            return nt(t, e) && ot(t, e + 6) + 10 <= t.length - e
        }, ut = function (t) {
            return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
        }, ht = function (t) {
            var e = String.fromCharCode(t[0], t[1], t[2], t[3]), r = ot(t, 4);
            return {type: e, size: r, data: t.subarray(10, 10 + r)}
        }, dt = function (t) {
            for (var e = 0, r = []; nt(t, e);) {
                for (var i = ot(t, e + 6), n = (e += 10) + i; e + 8 < n;) {
                    var a = ht(t.subarray(e)), s = ct(a);
                    s && r.push(s), e += a.size + 10
                }
                at(t, e) && (e += 10)
            }
            return r
        }, ct = function (t) {
            return "PRIV" === t.type ? ft(t) : "W" === t.type[0] ? vt(t) : gt(t)
        }, ft = function (t) {
            if (!(t.size < 2)) {
                var e = pt(t.data, !0), r = new Uint8Array(t.data.subarray(e.length + 1));
                return {key: t.type, info: e, data: r.buffer}
            }
        }, gt = function (t) {
            if (!(t.size < 2)) {
                if ("TXXX" === t.type) {
                    var e = 1, r = pt(t.data.subarray(e), !0);
                    e += r.length + 1;
                    var i = pt(t.data.subarray(e));
                    return {key: t.type, info: r, data: i}
                }
                var n = pt(t.data.subarray(1));
                return {key: t.type, data: n}
            }
        }, vt = function (t) {
            if ("WXXX" === t.type) {
                if (t.size < 2) return;
                var e = 1, r = pt(t.data.subarray(e), !0);
                e += r.length + 1;
                var i = pt(t.data.subarray(e));
                return {key: t.type, info: r, data: i}
            }
            var n = pt(t.data);
            return {key: t.type, data: n}
        }, mt = function (t) {
            if (8 === t.data.byteLength) {
                var e = new Uint8Array(t.data), r = 1 & e[3], i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                return i /= 45, r && (i += 47721858.84), Math.round(i)
            }
        }, pt = function (t, e) {
            void 0 === e && (e = !1);
            var r = yt();
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

        function yt() {
            return it || void 0 === self.TextDecoder || (it = new self.TextDecoder("utf-8")), it
        }

        var Tt = function (t) {
            for (var e = "", r = 0; r < t.length; r++) {
                var i = t[r].toString(16);
                i.length < 2 && (i = "0" + i), e += i
            }
            return e
        }, Et = Math.pow(2, 32) - 1, St = [].push, Lt = {video: 1, audio: 2, id3: 3, text: 4};

        function Rt(t) {
            return String.fromCharCode.apply(null, t)
        }

        function At(t, e) {
            var r = t[e] << 8 | t[e + 1];
            return r < 0 ? 65536 + r : r
        }

        function kt(t, e) {
            var r = bt(t, e);
            return r < 0 ? 4294967296 + r : r
        }

        function bt(t, e) {
            return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
        }

        function Dt(t, e, r) {
            t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
        }

        function It(t, e) {
            var r = [];
            if (!e.length) return r;
            for (var i = t.byteLength, n = 0; n < i;) {
                var a = kt(t, n), s = a > 1 ? n + a : i;
                if (Rt(t.subarray(n + 4, n + 8)) === e[0]) if (1 === e.length) r.push(t.subarray(n + 8, s)); else {
                    var o = It(t.subarray(n + 8, s), e.slice(1));
                    o.length && St.apply(r, o)
                }
                n = s
            }
            return r
        }

        function wt(t) {
            var e = [], r = t[0], i = 8, n = kt(t, i);
            i += 4, i += 0 === r ? 8 : 16, i += 2;
            var a = t.length + 0, s = At(t, i);
            i += 2;
            for (var o = 0; o < s; o++) {
                var l = i, u = kt(t, l);
                l += 4;
                var h = 2147483647 & u;
                if (1 == (2147483648 & u) >>> 31) return w.warn("SIDX has hierarchical references (not supported)"), null;
                var d = kt(t, l);
                l += 4, e.push({
                    referenceSize: h,
                    subsegmentDuration: d,
                    info: {duration: d / n, start: a, end: a + h - 1}
                }), a += h, i = l += 4
            }
            return {earliestPresentationTime: 0, timescale: n, version: r, referencesCount: s, references: e}
        }

        function Ct(t) {
            for (var e = [], r = It(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                var n = r[i], a = It(n, ["tkhd"])[0];
                if (a) {
                    var s = a[0], o = 0 === s ? 12 : 20, l = kt(a, o), u = It(n, ["mdia", "mdhd"])[0];
                    if (u) {
                        var h = kt(u, o = 0 === (s = u[0]) ? 12 : 20), d = It(n, ["mdia", "hdlr"])[0];
                        if (d) {
                            var c = Rt(d.subarray(8, 12)), f = {soun: O, vide: N}[c];
                            if (f) {
                                var g = It(n, ["mdia", "minf", "stbl", "stsd"])[0], v = void 0;
                                g && (v = Rt(g.subarray(12, 16))), e[l] = {timescale: h, type: f}, e[f] = {
                                    timescale: h,
                                    id: l,
                                    codec: v
                                }
                            }
                        }
                    }
                }
            }
            return It(t, ["moov", "mvex", "trex"]).forEach((function (t) {
                var r = kt(t, 4), i = e[r];
                i && (i.default = {duration: kt(t, 12), flags: kt(t, 20)})
            })), e
        }

        function _t(t) {
            var e = It(t, ["schm"])[0];
            if (e) {
                var r = Rt(e.subarray(4, 8));
                if ("cbcs" === r || "cenc" === r) return It(t, ["schi", "tenc"])[0]
            }
            return w.error("[eme] missing 'schm' box"), null
        }

        function Pt(t) {
            var e = kt(t, 0), r = 8;
            1 & e && (r += 4), 4 & e && (r += 4);
            for (var i = 0, n = kt(t, 4), a = 0; a < n; a++) 256 & e && (i += kt(t, r), r += 4), 512 & e && (r += 4), 1024 & e && (r += 4), 2048 & e && (r += 4);
            return i
        }

        function xt(t, e) {
            var r = new Uint8Array(t.length + e.length);
            return r.set(t), r.set(e, t.length), r
        }

        function Ft(t, e) {
            var r = [], i = e.samples, n = e.timescale, a = e.id, s = !1;
            return It(i, ["moof"]).map((function (o) {
                var l = o.byteOffset - 8;
                It(o, ["traf"]).map((function (o) {
                    var u = It(o, ["tfdt"]).map((function (t) {
                        var e = t[0], r = kt(t, 4);
                        return 1 === e && (r *= Math.pow(2, 32), r += kt(t, 8)), r / n
                    }))[0];
                    return void 0 !== u && (t = u), It(o, ["tfhd"]).map((function (u) {
                        var h = kt(u, 4), d = 16777215 & kt(u, 0), c = 0, f = 0 != (16 & d), g = 0, v = 0 != (32 & d),
                            m = 8;
                        h === a && (0 != (1 & d) && (m += 8), 0 != (2 & d) && (m += 4), 0 != (8 & d) && (c = kt(u, m), m += 4), f && (g = kt(u, m), m += 4), v && (m += 4), "video" === e.type && (s = function (t) {
                            if (!t) return !1;
                            var e = t.indexOf("."), r = e < 0 ? t : t.substring(0, e);
                            return "hvc1" === r || "hev1" === r || "dvh1" === r || "dvhe" === r
                        }(e.codec)), It(o, ["trun"]).map((function (a) {
                            var o = a[0], u = 16777215 & kt(a, 0), h = 0 != (1 & u), d = 0, f = 0 != (4 & u),
                                v = 0 != (256 & u), m = 0, p = 0 != (512 & u), y = 0, T = 0 != (1024 & u),
                                E = 0 != (2048 & u), S = 0, L = kt(a, 4), R = 8;
                            h && (d = kt(a, R), R += 4), f && (R += 4);
                            for (var A = d + l, k = 0; k < L; k++) {
                                if (v ? (m = kt(a, R), R += 4) : m = c, p ? (y = kt(a, R), R += 4) : y = g, T && (R += 4), E && (S = 0 === o ? kt(a, R) : bt(a, R), R += 4), e.type === N) for (var b = 0; b < y;) {
                                    var D = kt(i, A);
                                    Mt(s, i[A += 4]) && Ot(i.subarray(A, A + D), s ? 2 : 1, t + S / n, r), A += D, b += D + 4
                                }
                                t += m / n
                            }
                        })))
                    }))
                }))
            })), r
        }

        function Mt(t, e) {
            if (t) {
                var r = e >> 1 & 63;
                return 39 === r || 40 === r
            }
            return 6 == (31 & e)
        }

        function Ot(t, e, r, i) {
            var n = Nt(t), a = 0;
            a += e;
            for (var s = 0, o = 0, l = !1, u = 0; a < n.length;) {
                s = 0;
                do {
                    if (a >= n.length) break;
                    s += u = n[a++]
                } while (255 === u);
                o = 0;
                do {
                    if (a >= n.length) break;
                    o += u = n[a++]
                } while (255 === u);
                var h = n.length - a;
                if (!l && 4 === s && a < n.length) {
                    if (l = !0, 181 === n[a++]) {
                        var d = At(n, a);
                        if (a += 2, 49 === d) {
                            var c = kt(n, a);
                            if (a += 4, 1195456820 === c) {
                                var f = n[a++];
                                if (3 === f) {
                                    var g = n[a++], v = 64 & g, m = v ? 2 + 3 * (31 & g) : 0, p = new Uint8Array(m);
                                    if (v) {
                                        p[0] = g;
                                        for (var y = 1; y < m; y++) p[y] = n[a++]
                                    }
                                    i.push({type: f, payloadType: s, pts: r, bytes: p})
                                }
                            }
                        }
                    }
                } else if (5 === s && o < h) {
                    if (l = !0, o > 16) {
                        for (var T = [], E = 0; E < 16; E++) {
                            var S = n[a++].toString(16);
                            T.push(1 == S.length ? "0" + S : S), 3 !== E && 5 !== E && 7 !== E && 9 !== E || T.push("-")
                        }
                        for (var L = o - 16, R = new Uint8Array(L), A = 0; A < L; A++) R[A] = n[a++];
                        i.push({payloadType: s, pts: r, uuid: T.join(""), userData: pt(R), userDataBytes: R})
                    }
                } else if (o < h) a += o; else if (o > h) break
            }
        }

        function Nt(t) {
            for (var e = t.byteLength, r = [], i = 1; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
            if (0 === r.length) return t;
            var n = e - r.length, a = new Uint8Array(n), s = 0;
            for (i = 0; i < n; s++, i++) s === r[0] && (s++, r.shift()), a[i] = t[s];
            return a
        }

        function Ut(t, e, r) {
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

        var Bt = {}, Gt = function () {
            function t(t, e, r, i, n) {
                void 0 === i && (i = [1]), void 0 === n && (n = null), this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t, this.uri = e, this.keyFormat = r, this.keyFormatVersions = i, this.iv = n, this.encrypted = !!t && "NONE" !== t, this.isCommonEncryption = this.encrypted && "AES-128" !== t
            }

            t.clearKeyUriToKeyIdMap = function () {
                Bt = {}
            };
            var e = t.prototype;
            return e.isSupported = function () {
                if (this.method) {
                    if ("AES-128" === this.method || "NONE" === this.method) return !0;
                    if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
                    switch (this.keyFormat) {
                        case X:
                        case Q:
                        case z:
                        case q:
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
                    case Q:
                        this.pssh = i, i.length >= 22 && (this.keyId = i.subarray(i.length - 22, i.length - 6));
                        break;
                    case z:
                        var n = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                        this.pssh = Ut(n, null, i);
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
                    var f = Bt[this.uri];
                    if (!f) {
                        var g = Object.keys(Bt).length % Number.MAX_SAFE_INTEGER;
                        f = new Uint8Array(16), new DataView(f.buffer, 12, 4).setUint32(0, g), Bt[this.uri] = f
                    }
                    this.keyId = f
                }
                return this
            }, t
        }(), Kt = /\{\$([a-zA-Z0-9-_]+)\}/g;

        function Ht(t) {
            return Kt.test(t)
        }

        function Vt(t, e, r) {
            if (null !== t.variableList || t.hasVariableRefs) for (var i = r.length; i--;) {
                var n = r[i], a = e[n];
                a && (e[n] = Yt(t, a))
            }
        }

        function Yt(t, e) {
            if (null !== t.variableList || t.hasVariableRefs) {
                var r = t.variableList;
                return e.replace(Kt, (function (e) {
                    var i = e.substring(2, e.length - 1), n = null == r ? void 0 : r[i];
                    return void 0 === n ? (t.playlistParsingError || (t.playlistParsingError = new Error('Missing preceding EXT-X-DEFINE tag for Variable Reference: "' + i + '"')), e) : n
                }))
            }
            return e
        }

        function Wt(t, e, r) {
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

        function jt(t, e, r) {
            var i = e.IMPORT;
            if (r && i in r) {
                var n = t.variableList;
                n || (t.variableList = n = {}), n[i] = r[i]
            } else t.playlistParsingError || (t.playlistParsingError = new Error('EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "' + i + '"'))
        }

        function qt() {
            if ("undefined" != typeof self) return self.MediaSource || self.WebKitMediaSource
        }

        var Xt = {
            audio: {
                a3ds: !0,
                "ac-3": !0,
                "ac-4": !0,
                alac: !0,
                alaw: !0,
                dra1: !0,
                "dts+": !0,
                "dts-": !0,
                dtsc: !0,
                dtse: !0,
                dtsh: !0,
                "ec-3": !0,
                enca: !0,
                g719: !0,
                g726: !0,
                m4ae: !0,
                mha1: !0,
                mha2: !0,
                mhm1: !0,
                mhm2: !0,
                mlpa: !0,
                mp4a: !0,
                "raw ": !0,
                Opus: !0,
                opus: !0,
                samr: !0,
                sawb: !0,
                sawp: !0,
                sevc: !0,
                sqcp: !0,
                ssmv: !0,
                twos: !0,
                ulaw: !0
            },
            video: {
                avc1: !0,
                avc2: !0,
                avc3: !0,
                avc4: !0,
                avcp: !0,
                av01: !0,
                drac: !0,
                dva1: !0,
                dvav: !0,
                dvh1: !0,
                dvhe: !0,
                encv: !0,
                hev1: !0,
                hvc1: !0,
                mjp2: !0,
                mp4v: !0,
                mvc1: !0,
                mvc2: !0,
                mvc3: !0,
                mvc4: !0,
                resv: !0,
                rv60: !0,
                s263: !0,
                svc1: !0,
                svc2: !0,
                "vc-1": !0,
                vp08: !0,
                vp09: !0
            },
            text: {stpp: !0, wvtt: !0}
        }, zt = qt();

        function Qt(t, e) {
            var r;
            return null != (r = null == zt ? void 0 : zt.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')) && r
        }

        var $t = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
            Jt = /#EXT-X-MEDIA:(.*)/g, Zt = /^#EXT(?:INF|-X-TARGETDURATION):/m,
            te = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
            ee = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
            re = function () {
                function t() {
                }

                return t.findGroup = function (t, e) {
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.id === e) return i
                    }
                }, t.convertAVC1ToAVCOTI = function (t) {
                    var e = t.split(".");
                    if (e.length > 2) {
                        var r = e.shift() + ".";
                        return r += parseInt(e.shift()).toString(16), r += ("000" + parseInt(e.shift()).toString(16)).slice(-4)
                    }
                    return t
                }, t.resolve = function (t, e) {
                    return T.buildAbsoluteURL(e, t, {alwaysNormalize: !0})
                }, t.isMediaPlaylist = function (t) {
                    return Zt.test(t)
                }, t.parseMasterPlaylist = function (e, r) {
                    var i, n = {
                        contentSteering: null,
                        levels: [],
                        playlistParsingError: null,
                        sessionData: null,
                        sessionKeys: null,
                        startTimeOffset: null,
                        variableList: null,
                        hasVariableRefs: Ht(e)
                    }, a = [];
                    for ($t.lastIndex = 0; null != (i = $t.exec(e));) if (i[1]) {
                        var s, o = new P(i[1]);
                        Vt(n, o, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
                        var l = Yt(n, i[2]), u = {
                            attrs: o,
                            bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                            name: o.NAME,
                            url: t.resolve(l, r)
                        }, h = o.decimalResolution("RESOLUTION");
                        h && (u.width = h.width, u.height = h.height), ae((o.CODECS || "").split(/[ ,]+/).filter((function (t) {
                            return t
                        })), u), u.videoCodec && -1 !== u.videoCodec.indexOf("avc1") && (u.videoCodec = t.convertAVC1ToAVCOTI(u.videoCodec)), null != (s = u.unknownCodecs) && s.length || a.push(u), n.levels.push(u)
                    } else if (i[3]) {
                        var d = i[3], c = i[4];
                        switch (d) {
                            case"SESSION-DATA":
                                var f = new P(c);
                                Vt(n, f, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                                var g = f["DATA-ID"];
                                g && (null === n.sessionData && (n.sessionData = {}), n.sessionData[g] = f);
                                break;
                            case"SESSION-KEY":
                                var v = ie(c, r, n);
                                v.encrypted && v.isSupported() ? (null === n.sessionKeys && (n.sessionKeys = []), n.sessionKeys.push(v)) : w.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + c + '"');
                                break;
                            case"DEFINE":
                                var m = new P(c);
                                Vt(n, m, ["NAME", "VALUE", "QUERYPARAM"]), Wt(n, m, r);
                                break;
                            case"CONTENT-STEERING":
                                var p = new P(c);
                                Vt(n, p, ["SERVER-URI", "PATHWAY-ID"]), n.contentSteering = {
                                    uri: t.resolve(p["SERVER-URI"], r),
                                    pathwayId: p["PATHWAY-ID"] || "."
                                };
                                break;
                            case"START":
                                n.startTimeOffset = ne(c)
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
                    for (Jt.lastIndex = 0; null !== (n = Jt.exec(e));) {
                        var u = new P(n[1]), h = u.TYPE;
                        if (h) {
                            var d = o[h], c = a[h] || [];
                            a[h] = c, Vt(i, u, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                            var f = {
                                attrs: u,
                                bitrate: 0,
                                id: l++,
                                groupId: u["GROUP-ID"] || "",
                                instreamId: u["INSTREAM-ID"],
                                name: u.NAME || u.LANGUAGE || "",
                                type: h,
                                default: u.bool("DEFAULT"),
                                autoselect: u.bool("AUTOSELECT"),
                                forced: u.bool("FORCED"),
                                lang: u.LANGUAGE,
                                url: u.URI ? t.resolve(u.URI, r) : ""
                            };
                            if (null != d && d.length) {
                                var g = t.findGroup(d, f.groupId) || d[0];
                                se(f, g, "audioCodec"), se(f, g, "textCodec")
                            }
                            c.push(f)
                        }
                    }
                    return a
                }, t.parseLevelPlaylist = function (t, e, r, i, n, a) {
                    var s, l, u, h = new H(e), d = h.fragments, c = null, f = 0, g = 0, v = 0, m = 0, p = null,
                        y = new G(i, e), T = -1, S = !1;
                    for (te.lastIndex = 0, h.m3u8 = t, h.hasVariableRefs = Ht(t); null !== (s = te.exec(t));) {
                        S && (S = !1, (y = new G(i, e)).start = v, y.sn = f, y.cc = m, y.level = r, c && (y.initSegment = c, y.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null));
                        var L = s[1];
                        if (L) {
                            y.duration = parseFloat(L);
                            var R = (" " + s[2]).slice(1);
                            y.title = R || null, y.tagList.push(R ? ["INF", L, R] : ["INF", L])
                        } else if (s[3]) {
                            if (E(y.duration)) {
                                y.start = v, u && ue(y, u, h), y.sn = f, y.level = r, y.cc = m, y.urlId = n, d.push(y);
                                var A = (" " + s[3]).slice(1);
                                y.relurl = Yt(h, A), oe(y, p), p = y, v += y.duration, f++, g = 0, S = !0
                            }
                        } else if (s[4]) {
                            var k = (" " + s[4]).slice(1);
                            p ? y.setByteRange(k, p) : y.setByteRange(k)
                        } else if (s[5]) y.rawProgramDateTime = (" " + s[5]).slice(1), y.tagList.push(["PROGRAM-DATE-TIME", y.rawProgramDateTime]), -1 === T && (T = d.length); else {
                            if (!(s = s[0].match(ee))) {
                                w.warn("No matches on slow regex match for level playlist!");
                                continue
                            }
                            for (l = 1; l < s.length && void 0 === s[l]; l++) ;
                            var b = (" " + s[l]).slice(1), D = (" " + s[l + 1]).slice(1),
                                I = s[l + 2] ? (" " + s[l + 2]).slice(1) : "";
                            switch (b) {
                                case"PLAYLIST-TYPE":
                                    h.type = D.toUpperCase();
                                    break;
                                case"MEDIA-SEQUENCE":
                                    f = h.startSN = parseInt(D);
                                    break;
                                case"SKIP":
                                    var C = new P(D);
                                    Vt(h, C, ["RECENTLY-REMOVED-DATERANGES"]);
                                    var _ = C.decimalInteger("SKIPPED-SEGMENTS");
                                    if (E(_)) {
                                        h.skippedSegments = _;
                                        for (var x = _; x--;) d.unshift(null);
                                        f += _
                                    }
                                    var M = C.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                    M && (h.recentlyRemovedDateranges = M.split("\t"));
                                    break;
                                case"TARGETDURATION":
                                    h.targetduration = Math.max(parseInt(D), 1);
                                    break;
                                case"VERSION":
                                    h.version = parseInt(D);
                                    break;
                                case"EXTM3U":
                                    break;
                                case"ENDLIST":
                                    h.live = !1;
                                    break;
                                case"#":
                                    (D || I) && y.tagList.push(I ? [D, I] : [D]);
                                    break;
                                case"DISCONTINUITY":
                                    m++, y.tagList.push(["DIS"]);
                                    break;
                                case"GAP":
                                    y.gap = !0, y.tagList.push([b]);
                                    break;
                                case"BITRATE":
                                    y.tagList.push([b, D]);
                                    break;
                                case"DATERANGE":
                                    var O = new P(D);
                                    Vt(h, O, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), Vt(h, O, O.clientAttrs);
                                    var N = new F(O, h.dateRanges[O.ID]);
                                    N.isValid || h.skippedSegments ? h.dateRanges[N.id] = N : w.warn('Ignoring invalid DATERANGE tag: "' + D + '"'), y.tagList.push(["EXT-X-DATERANGE", D]);
                                    break;
                                case"DEFINE":
                                    var U = new P(D);
                                    Vt(h, U, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in U ? jt(h, U, a) : Wt(h, U, e);
                                    break;
                                case"DISCONTINUITY-SEQUENCE":
                                    m = parseInt(D);
                                    break;
                                case"KEY":
                                    var B = ie(D, e, h);
                                    if (B.isSupported()) {
                                        if ("NONE" === B.method) {
                                            u = void 0;
                                            break
                                        }
                                        u || (u = {}), u[B.keyFormat] && (u = o({}, u)), u[B.keyFormat] = B
                                    } else w.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + D + '"');
                                    break;
                                case"START":
                                    h.startTimeOffset = ne(D);
                                    break;
                                case"MAP":
                                    var V = new P(D);
                                    if (Vt(h, V, ["BYTERANGE", "URI"]), y.duration) {
                                        var Y = new G(i, e);
                                        le(Y, V, r, u), c = Y, y.initSegment = c, c.rawProgramDateTime && !y.rawProgramDateTime && (y.rawProgramDateTime = c.rawProgramDateTime)
                                    } else le(y, V, r, u), c = y, S = !0;
                                    break;
                                case"SERVER-CONTROL":
                                    var W = new P(D);
                                    h.canBlockReload = W.bool("CAN-BLOCK-RELOAD"), h.canSkipUntil = W.optionalFloat("CAN-SKIP-UNTIL", 0), h.canSkipDateRanges = h.canSkipUntil > 0 && W.bool("CAN-SKIP-DATERANGES"), h.partHoldBack = W.optionalFloat("PART-HOLD-BACK", 0), h.holdBack = W.optionalFloat("HOLD-BACK", 0);
                                    break;
                                case"PART-INF":
                                    var j = new P(D);
                                    h.partTarget = j.decimalFloatingPoint("PART-TARGET");
                                    break;
                                case"PART":
                                    var q = h.partList;
                                    q || (q = h.partList = []);
                                    var X = g > 0 ? q[q.length - 1] : void 0, z = g++, Q = new P(D);
                                    Vt(h, Q, ["BYTERANGE", "URI"]);
                                    var $ = new K(Q, y, e, z, X);
                                    q.push($), y.duration += $.duration;
                                    break;
                                case"PRELOAD-HINT":
                                    var J = new P(D);
                                    Vt(h, J, ["URI"]), h.preloadHint = J;
                                    break;
                                case"RENDITION-REPORT":
                                    var Z = new P(D);
                                    Vt(h, Z, ["URI"]), h.renditionReports = h.renditionReports || [], h.renditionReports.push(Z);
                                    break;
                                default:
                                    w.warn("line parsed but not handled: " + s)
                            }
                        }
                    }
                    p && !p.relurl ? (d.pop(), v -= p.duration, h.partList && (h.fragmentHint = p)) : h.partList && (oe(y, p), y.cc = m, h.fragmentHint = y, u && ue(y, u, h));
                    var tt = d.length, et = d[0], rt = d[tt - 1];
                    if ((v += h.skippedSegments * h.targetduration) > 0 && tt && rt) {
                        h.averagetargetduration = v / tt;
                        var it = rt.sn;
                        h.endSN = "initSegment" !== it ? it : 0, h.live || (rt.endList = !0), et && (h.startCC = et.cc)
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

        function ie(t, e, r) {
            var i, n, a = new P(t);
            Vt(r, a, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
            var s = null != (i = a.METHOD) ? i : "", o = a.URI, l = a.hexadecimalInteger("IV"), u = a.KEYFORMATVERSIONS,
                h = null != (n = a.KEYFORMAT) ? n : "identity";
            o && a.IV && !l && w.error("Invalid IV: " + a.IV);
            var d = o ? re.resolve(o, e) : "", c = (u || "1").split("/").map(Number).filter(Number.isFinite);
            return new Gt(s, d, h, c, l)
        }

        function ne(t) {
            var e = new P(t).decimalFloatingPoint("TIME-OFFSET");
            return E(e) ? e : null
        }

        function ae(t, e) {
            ["video", "audio", "text"].forEach((function (r) {
                var i = t.filter((function (t) {
                    return function (t, e) {
                        var r = Xt[e];
                        return !!r && !0 === r[t.slice(0, 4)]
                    }(t, r)
                }));
                if (i.length) {
                    var n = i.filter((function (t) {
                        return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                    }));
                    e[r + "Codec"] = n.length > 0 ? n[0] : i[0], t = t.filter((function (t) {
                        return -1 === i.indexOf(t)
                    }))
                }
            })), e.unknownCodecs = t
        }

        function se(t, e, r) {
            var i = e[r];
            i && (t[r] = i)
        }

        function oe(t, e) {
            t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), E(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
        }

        function le(t, e, r, i) {
            t.relurl = e.URI, e.BYTERANGE && t.setByteRange(e.BYTERANGE), t.level = r, t.sn = "initSegment", i && (t.levelkeys = i), t.initSegment = null
        }

        function ue(t, e, r) {
            t.levelkeys = e;
            var i = r.encryptedFragments;
            i.length && i[i.length - 1].levelkeys === e || !Object.keys(e).some((function (t) {
                return e[t].isCommonEncryption
            })) || i.push(t)
        }

        var he = "manifest", de = "level", ce = "audioTrack", fe = "subtitleTrack", ge = "main", ve = "audio",
            me = "subtitle";

        function pe(t) {
            switch (t.type) {
                case ce:
                    return ve;
                case fe:
                    return me;
                default:
                    return ge
            }
        }

        function ye(t, e) {
            var r = t.url;
            return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
        }

        var Te = function () {
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
                    type: he,
                    url: r,
                    deliveryDirectives: null
                })
            }, e.onLevelLoading = function (t, e) {
                var r = e.id, i = e.level, n = e.url, a = e.deliveryDirectives;
                this.load({id: r, level: i, responseType: "text", type: de, url: n, deliveryDirectives: a})
            }, e.onAudioTrackLoading = function (t, e) {
                var r = e.id, i = e.groupId, n = e.url, a = e.deliveryDirectives;
                this.load({
                    id: r,
                    groupId: i,
                    level: null,
                    responseType: "text",
                    type: ce,
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
                    type: fe,
                    url: n,
                    deliveryDirectives: a
                })
            }, e.load = function (t) {
                var e, r, i, n = this, a = this.hls.config, s = this.getInternalLoader(t);
                if (s) {
                    var l = s.context;
                    if (l && l.url === t.url) return void w.trace("[playlist-loader]: playlist request ongoing");
                    w.log("[playlist-loader]: aborting previous loader for type: " + t.type), s.abort()
                }
                if (r = t.type === he ? a.manifestLoadPolicy.default : o({}, a.playlistLoadPolicy.default, {
                    timeoutRetry: null,
                    errorRetry: null
                }), s = this.createInternalLoader(t), null != (e = t.deliveryDirectives) && e.part && (t.type === de && null !== t.level ? i = this.hls.levels[t.level].details : t.type === ce && null !== t.id ? i = this.hls.audioTracks[t.id].details : t.type === fe && null !== t.id && (i = this.hls.subtitleTracks[t.id].details), i)) {
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
                        0 === s.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), re.isMediaPlaylist(s) ? n.handleTrackOrLevelPlaylist(t, e, r, i || null, a) : n.handleMasterPlaylist(t, e, r, i)) : n.handleManifestParsingError(t, r, new Error("no EXTM3U delimiter"), i || null, e)
                    }, onError: function (t, e, r, i) {
                        n.handleNetworkError(e, r, !1, t, i)
                    }, onTimeout: function (t, e, r) {
                        n.handleNetworkError(e, r, !0, void 0, t)
                    }
                };
                s.load(t, f, g)
            }, e.handleMasterPlaylist = function (t, e, r, i) {
                var n = this.hls, a = t.data, s = ye(t, r), o = re.parseMasterPlaylist(a, s);
                if (o.playlistParsingError) this.handleManifestParsingError(t, r, o.playlistParsingError, i, e); else {
                    var l = o.contentSteering, u = o.levels, h = o.sessionData, d = o.sessionKeys,
                        c = o.startTimeOffset, f = o.variableList;
                    this.variableList = f;
                    var g = re.parseMasterPlaylistMedia(a, s, o), v = g.AUDIO, m = void 0 === v ? [] : v,
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
                        attrs: new P({}),
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
                var a = this.hls, s = r.id, o = r.level, l = r.type, u = ye(t, r), h = E(s) ? s : 0, d = E(o) ? o : h,
                    c = pe(r), f = re.parseLevelPlaylist(t.data, u, d, c, h, this.variableList);
                if (l === he) {
                    var g = {attrs: new P({}), bitrate: 0, details: f, name: "", url: u};
                    a.trigger(S.MANIFEST_LOADED, {
                        levels: [g],
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
                e.parsing.end = performance.now(), r.levelDetails = f, this.handlePlaylistLoaded(f, t, e, r, i, n)
            }, e.handleManifestParsingError = function (t, e, r, i, n) {
                this.hls.trigger(S.ERROR, {
                    type: L.NETWORK_ERROR,
                    details: R.MANIFEST_PARSING_ERROR,
                    fatal: e.type === he,
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
                t.type === de ? s += ": " + t.level + " id: " + t.id : t.type !== ce && t.type !== fe || (s += " id: " + t.id + ' group-id: "' + t.groupId + '"');
                var o = new Error(s);
                w.warn("[playlist-loader]: " + s);
                var l = R.UNKNOWN, u = !1, h = this.getInternalLoader(t);
                switch (t.type) {
                    case he:
                        l = r ? R.MANIFEST_LOAD_TIMEOUT : R.MANIFEST_LOAD_ERROR, u = !0;
                        break;
                    case de:
                        l = r ? R.LEVEL_LOAD_TIMEOUT : R.LEVEL_LOAD_ERROR, u = !1;
                        break;
                    case ce:
                        l = r ? R.AUDIO_TRACK_LOAD_TIMEOUT : R.AUDIO_TRACK_LOAD_ERROR, u = !1;
                        break;
                    case fe:
                        l = r ? R.SUBTITLE_TRACK_LOAD_TIMEOUT : R.SUBTITLE_LOAD_ERROR, u = !1
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
                    c = ye(e, i), f = pe(i), g = "number" == typeof i.level && f === ge ? l : void 0;
                if (t.fragments.length) {
                    t.targetduration || (t.playlistParsingError = new Error("Missing Target Duration"));
                    var v = t.playlistParsingError;
                    if (v) s.trigger(S.ERROR, {
                        type: L.NETWORK_ERROR,
                        details: R.LEVEL_PARSING_ERROR,
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
                        case he:
                        case de:
                            s.trigger(S.LEVEL_LOADED, {
                                details: t,
                                level: g || 0,
                                id: u || 0,
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            });
                            break;
                        case ce:
                            s.trigger(S.AUDIO_TRACK_LOADED, {
                                details: t,
                                id: u || 0,
                                groupId: h || "",
                                stats: r,
                                networkDetails: n,
                                deliveryDirectives: d
                            });
                            break;
                        case fe:
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
                        details: R.LEVEL_EMPTY_ERROR,
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

        function Ee(t, e) {
            var r;
            try {
                r = new Event("addtrack")
            } catch (t) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = t, e.dispatchEvent(r)
        }

        function Se(t, e) {
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

        function Le(t) {
            var e = t.mode;
            if ("disabled" === e && (t.mode = "hidden"), t.cues) for (var r = t.cues.length; r--;) t.removeCue(t.cues[r]);
            "disabled" === e && (t.mode = e)
        }

        function Re(t, e, r, i) {
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

        var Ae = "org.id3", ke = "com.apple.quicktime.HLS", be = "https://aomedia.org/emsg/ID3";

        function De() {
            if ("undefined" != typeof self) return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
        }

        var Ie = function () {
            var t = De();
            try {
                new t(0, Number.POSITIVE_INFINITY, "")
            } catch (t) {
                return Number.MAX_VALUE
            }
            return Number.POSITIVE_INFINITY
        }();

        function we(t, e) {
            return t.getTime() / 1e3 - e
        }

        var Ce = function () {
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
                this.id3Track && (Le(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
            }, e.onManifestLoading = function () {
                this.dateRangeCuesAppended = {}
            }, e.createTrack = function (t) {
                var e = this.getID3Track(t.textTracks);
                return e.mode = "hidden", e
            }, e.getID3Track = function (t) {
                if (this.media) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        if ("metadata" === r.kind && "id3" === r.label) return Ee(r, this.media), r
                    }
                    return this.media.addTextTrack("metadata", "id3")
                }
            }, e.onFragParsingMetadata = function (t, e) {
                if (this.media) {
                    var r = this.hls.config, i = r.enableEmsgMetadataCues, n = r.enableID3MetadataCues;
                    if (i || n) {
                        var a = e.samples;
                        this.id3Track || (this.id3Track = this.createTrack(this.media));
                        for (var s = De(), o = 0; o < a.length; o++) {
                            var l = a[o].type;
                            if ((l !== be || i) && n) {
                                var u = dt(a[o].data);
                                if (u) {
                                    var h = a[o].pts, d = h + a[o].duration;
                                    d > Ie && (d = Ie), d - h <= 0 && (d = h + .25);
                                    for (var c = 0; c < u.length; c++) {
                                        var f = u[c];
                                        if (!ut(f)) {
                                            this.updateId3CueEnds(h, l);
                                            var g = new s(h, d, "");
                                            g.value = f, l && (g.type = l), this.id3Track.addCue(g)
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
                    a.type === e && a.startTime < t && a.endTime === Ie && (a.endTime = t)
                }
            }, e.onBufferFlushing = function (t, e) {
                var r = e.startOffset, i = e.endOffset, n = e.type, a = this.id3Track, s = this.hls;
                if (s) {
                    var o = s.config, l = o.enableEmsgMetadataCues, u = o.enableID3MetadataCues;
                    a && (l || u) && Re(a, r, i, "audio" === n ? function (t) {
                        return t.type === Ae && u
                    } : "video" === n ? function (t) {
                        return t.type === be && l
                    } : function (t) {
                        return t.type === Ae && u || t.type === be && l
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
                    if (0 !== o.length && E(null == d ? void 0 : d.programDateTime)) {
                        this.id3Track || (this.id3Track = this.createTrack(this.media));
                        for (var c = d.programDateTime / 1e3 - d.start, f = De(), g = function () {
                            var t = o[v], e = s[t], i = n[t], a = (null == i ? void 0 : i.cues) || {},
                                l = (null == i ? void 0 : i.durationKnown) || !1, u = we(e.startDate, c), h = Ie,
                                d = e.endDate;
                            if (d) h = we(d, c), l = !0; else if (e.endOnNext && !l) {
                                var g = o.reduce((function (t, r) {
                                    var i = s[r];
                                    return i.class === e.class && i.id !== r && i.startDate > e.startDate && t.push(i), t
                                }), []).sort((function (t, e) {
                                    return t.startDate.getTime() - e.startDate.getTime()
                                }))[0];
                                g && (h = we(g.startDate, c), l = !0)
                            }
                            for (var m, p, y = Object.keys(e.attr), T = 0; T < y.length; T++) {
                                var E = y[T];
                                if ("ID" !== (p = E) && "CLASS" !== p && "START-DATE" !== p && "DURATION" !== p && "END-DATE" !== p && "END-ON-NEXT" !== p) {
                                    var S = a[E];
                                    if (S) l && !i.durationKnown && (S.endTime = h); else {
                                        var L = e.attr[E];
                                        S = new f(u, h, ""), x(E) && (m = L, L = Uint8Array.from(m.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), S.value = {
                                            key: E,
                                            data: L
                                        }, S.type = ke, S.id = t, r.id3Track.addCue(S), a[E] = S
                                    }
                                }
                            }
                            n[t] = {cues: a, dateRange: e, durationKnown: l}
                        }, v = 0; v < o.length; v++) g()
                    }
                }
            }, t
        }(), _e = function () {
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
                e.details === R.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r = this.levelDetails) && r.live && w.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
            }, e.timeupdate = function () {
                var t = this.media, e = this.levelDetails;
                if (t && e) {
                    this.currentTime = t.currentTime;
                    var r = this.computeLatency();
                    if (null !== r) {
                        this._latency = r;
                        var i = this.config, n = i.lowLatencyMode, a = i.maxLiveSyncPlaybackRate;
                        if (n && 1 !== a) {
                            var s = this.targetLatency;
                            if (null !== s) {
                                var o = r - s, l = o < Math.min(this.maxLatency, s + e.targetduration);
                                if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
                                    var u = Math.min(2, Math.max(1, a)),
                                        h = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                    t.playbackRate = Math.min(u, Math.max(1, h))
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
            }, a(t, [{
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
        }(), Pe = ["NONE", "TYPE-0", "TYPE-1", null], xe = "", Fe = "YES", Me = "v2", Oe = function () {
            function t(t, e, r) {
                this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = r
            }

            return t.prototype.addDirectives = function (t) {
                var e = new self.URL(t);
                return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.href
            }, t
        }(), Ne = function () {
            function t(t) {
                this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this._attrs = [t.attrs], this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter((function (t) {
                    return t
                })).join(",").replace(/\.[^.,]+/g, "")
            }

            return t.prototype.addFallback = function (t) {
                this.url.push(t.url), this._attrs.push(t.attrs)
            }, a(t, [{
                key: "maxBitrate", get: function () {
                    return Math.max(this.realBitrate, this.bitrate)
                }
            }, {
                key: "attrs", get: function () {
                    return this._attrs[this._urlId]
                }
            }, {
                key: "pathwayId", get: function () {
                    return this.attrs["PATHWAY-ID"] || "."
                }
            }, {
                key: "uri", get: function () {
                    return this.url[this._urlId] || ""
                }
            }, {
                key: "urlId", get: function () {
                    return this._urlId
                }, set: function (t) {
                    var e = t % this.url.length;
                    this._urlId !== e && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = e)
                }
            }, {
                key: "audioGroupId", get: function () {
                    var t;
                    return null == (t = this.audioGroupIds) ? void 0 : t[this.urlId]
                }
            }, {
                key: "textGroupId", get: function () {
                    var t;
                    return null == (t = this.textGroupIds) ? void 0 : t[this.urlId]
                }
            }]), t
        }();

        function Ue(t, e) {
            var r = e.startPTS;
            if (E(r)) {
                var i, n = 0;
                e.sn > t.sn ? (n = r - t.start, i = t) : (n = t.start - r, i = e), i.duration !== n && (i.duration = n)
            } else e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
        }

        function Be(t, e, r, i, n, a) {
            i - r <= 0 && (w.warn("Fragment should have a positive duration", e), i = r + e.duration, a = n + e.duration);
            var s = r, o = i, l = e.startPTS, u = e.endPTS;
            if (E(l)) {
                var h = Math.abs(l - r);
                E(e.deltaPTS) ? e.deltaPTS = Math.max(h, e.deltaPTS) : e.deltaPTS = h, s = Math.max(r, l), r = Math.min(r, l), n = Math.min(n, e.startDTS), o = Math.min(i, u), i = Math.max(i, u), a = Math.max(a, e.endDTS)
            }
            var d = r - e.start;
            0 !== e.start && (e.start = r), e.duration = i - e.start, e.startPTS = r, e.maxStartPTS = s, e.startDTS = n, e.endPTS = i, e.minEndPTS = o, e.endDTS = a;
            var c, f = e.sn;
            if (!t || f < t.startSN || f > t.endSN) return 0;
            var g = f - t.startSN, v = t.fragments;
            for (v[g] = e, c = g; c > 0; c--) Ue(v[c], v[c - 1]);
            for (c = g; c < v.length - 1; c++) Ue(v[c], v[c + 1]);
            return t.fragmentHint && Ue(v[v.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, d
        }

        function Ge(t, e) {
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
                t.relurl && (c = t.cc - i.cc), E(t.startPTS) && E(t.endPTS) && (i.start = i.startPTS = t.startPTS, i.startDTS = t.startDTS, i.maxStartPTS = t.maxStartPTS, i.endPTS = t.endPTS, i.endDTS = t.endDTS, i.minEndPTS = t.minEndPTS, i.duration = t.endPTS - t.startPTS, i.duration && (s = i), e.PTSKnown = e.alignedSliding = !0), i.elementaryStreams = t.elementaryStreams, i.loader = t.loader, i.stats = t.stats, i.urlId = t.urlId, t.initSegment && (i.initSegment = t.initSegment, r = t.initSegment)
            })), r && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function (t) {
                var e;
                t.initSegment && t.initSegment.relurl !== (null == (e = r) ? void 0 : e.relurl) || (t.initSegment = r)
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
            })), s ? Be(e, s, s.startPTS, s.endPTS, s.startDTS, s.endDTS) : Ke(t, e), g.length && (e.totalduration = e.edge - g[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
            var m = e.advancedDateTime;
            if (e.advanced && m) {
                var p = e.edge;
                e.driftStart || (e.driftStartTime = m, e.driftStart = p), e.driftEndTime = m, e.driftEnd = p
            } else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
        }

        function Ke(t, e) {
            var r = e.startSN + e.skippedSegments - t.startSN, i = t.fragments;
            r < 0 || r >= i.length || He(e, i[r].start)
        }

        function He(t, e) {
            if (e) {
                for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++) r[i].start += e;
                t.fragmentHint && (t.fragmentHint.start += e)
            }
        }

        function Ve(t, e, r) {
            var i;
            return null != t && t.details ? Ye(null == (i = t.details) ? void 0 : i.partList, e, r) : null
        }

        function Ye(t, e, r) {
            if (t) for (var i = t.length; i--;) {
                var n = t[i];
                if (n.index === r && n.fragment.sn === e) return n
            }
            return null
        }

        function We(t) {
            switch (t.details) {
                case R.FRAG_LOAD_TIMEOUT:
                case R.KEY_LOAD_TIMEOUT:
                case R.LEVEL_LOAD_TIMEOUT:
                case R.MANIFEST_LOAD_TIMEOUT:
                    return !0
            }
            return !1
        }

        function je(t, e) {
            var r = We(e);
            return t.default[(r ? "timeout" : "error") + "Retry"]
        }

        function qe(t, e) {
            var r = "linear" === t.backoff ? 1 : Math.pow(2, e);
            return Math.min(r * t.retryDelayMs, t.maxRetryDelayMs)
        }

        function Xe(t) {
            return i(i({}, t), {errorRetry: null, timeoutRetry: null})
        }

        function ze(t, e, r, i) {
            return !!t && e < t.maxNumRetry && (function (t) {
                return 0 === t && !1 === navigator.onLine || !!t && (t < 400 || t > 499)
            }(i) || !!r)
        }

        var Qe = function (t, e) {
            for (var r = 0, i = t.length - 1, n = null, a = null; r <= i;) {
                var s = e(a = t[n = (r + i) / 2 | 0]);
                if (s > 0) r = n + 1; else {
                    if (!(s < 0)) return a;
                    i = n - 1
                }
            }
            return null
        };

        function $e(t, e, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = 0);
            var n = null;
            if (t ? n = e[t.sn - e[0].sn + 1] || null : 0 === r && 0 === e[0].start && (n = e[0]), n && 0 === Je(r, i, n)) return n;
            var a = Qe(e, Je.bind(null, r, i));
            return !a || a === t && n ? n : a
        }

        function Je(t, e, r) {
            if (void 0 === t && (t = 0), void 0 === e && (e = 0), r.start <= t && r.start + r.duration > t) return 0;
            var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
        }

        function Ze(t, e, r) {
            var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return (r.endProgramDateTime || 0) - i > t
        }

        var tr, er = 3e5, rr = 0, ir = 2, nr = 5, ar = 0, sr = 1, or = 2, lr = function () {
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
                this.playlistError = 0
            }, e.stopLoad = function () {
            }, e.getVariantLevelIndex = function (t) {
                return (null == t ? void 0 : t.type) === ge ? t.level : this.hls.loadLevel
            }, e.onManifestLoading = function () {
                this.playlistError = 0, this.penalizedRenditions = {}
            }, e.onLevelUpdated = function () {
                this.playlistError = 0
            }, e.onError = function (t, e) {
                var r, i;
                if (!e.fatal) {
                    var n = this.hls, a = e.context;
                    switch (e.details) {
                        case R.FRAG_LOAD_ERROR:
                        case R.FRAG_LOAD_TIMEOUT:
                        case R.KEY_LOAD_ERROR:
                        case R.KEY_LOAD_TIMEOUT:
                            return void (e.errorAction = this.getFragRetryOrSwitchAction(e));
                        case R.FRAG_PARSING_ERROR:
                            if (null != (r = e.frag) && r.gap) return void (e.errorAction = {action: rr, flags: ar});
                        case R.FRAG_GAP:
                        case R.FRAG_DECRYPT_ERROR:
                            return e.errorAction = this.getFragRetryOrSwitchAction(e), void (e.errorAction.action = ir);
                        case R.LEVEL_EMPTY_ERROR:
                        case R.LEVEL_PARSING_ERROR:
                            var s, o, l = e.parent === ge ? e.level : n.loadLevel;
                            return void (e.details === R.LEVEL_EMPTY_ERROR && null != (s = e.context) && null != (o = s.levelDetails) && o.live ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, l) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, l)));
                        case R.LEVEL_LOAD_ERROR:
                        case R.LEVEL_LOAD_TIMEOUT:
                            return void ("number" == typeof (null == a ? void 0 : a.level) && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, a.level)));
                        case R.AUDIO_TRACK_LOAD_ERROR:
                        case R.AUDIO_TRACK_LOAD_TIMEOUT:
                        case R.SUBTITLE_LOAD_ERROR:
                        case R.SUBTITLE_TRACK_LOAD_TIMEOUT:
                            if (a) {
                                var u = n.levels[n.loadLevel];
                                if (u && (a.type === ce && a.groupId === u.audioGroupId || a.type === fe && a.groupId === u.textGroupId)) return e.errorAction = this.getPlaylistRetryOrSwitchAction(e, n.loadLevel), e.errorAction.action = ir, void (e.errorAction.flags = sr)
                            }
                            return;
                        case R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                            var h = n.levels[n.loadLevel], d = null == h ? void 0 : h.attrs["HDCP-LEVEL"];
                            return void (d && (e.errorAction = {action: ir, flags: or, hdcpLevel: d}));
                        case R.BUFFER_ADD_CODEC_ERROR:
                        case R.REMUX_ALLOC_ERROR:
                            return void (e.errorAction = this.getLevelSwitchAction(e, null != (i = e.level) ? i : n.loadLevel));
                        case R.INTERNAL_EXCEPTION:
                        case R.BUFFER_APPENDING_ERROR:
                        case R.BUFFER_APPEND_ERROR:
                        case R.BUFFER_FULL_ERROR:
                        case R.LEVEL_SWITCH_ERROR:
                        case R.BUFFER_STALLED_ERROR:
                        case R.BUFFER_SEEK_OVER_HOLE:
                        case R.BUFFER_NUDGE_ON_STALL:
                            return void (e.errorAction = {action: rr, flags: ar})
                    }
                    if (e.type === L.KEY_SYSTEM_ERROR) {
                        var c = this.getVariantLevelIndex(e.frag);
                        return e.levelRetry = !1, void (e.errorAction = this.getLevelSwitchAction(e, c))
                    }
                }
            }, e.getPlaylistRetryOrSwitchAction = function (t, e) {
                var r, i = je(this.hls.config.playlistLoadPolicy, t), n = this.playlistError++,
                    a = null == (r = t.response) ? void 0 : r.code;
                if (ze(i, n, We(t), a)) return {action: nr, flags: ar, retryConfig: i, retryCount: n};
                var s = this.getLevelSwitchAction(t, e);
                return i && (s.retryConfig = i, s.retryCount = n), s
            }, e.getFragRetryOrSwitchAction = function (t) {
                var e = this.hls, r = this.getVariantLevelIndex(t.frag), i = e.levels[r], n = e.config,
                    a = n.fragLoadPolicy, s = n.keyLoadPolicy, o = je(t.details.startsWith("key") ? s : a, t),
                    l = e.levels.reduce((function (t, e) {
                        return t + e.fragmentError
                    }), 0);
                if (i) {
                    var u;
                    t.details !== R.FRAG_GAP && i.fragmentError++;
                    var h = null == (u = t.response) ? void 0 : u.code;
                    if (ze(o, l, We(t), h)) return {action: nr, flags: ar, retryConfig: o, retryCount: l}
                }
                var d = this.getLevelSwitchAction(t, r);
                return o && (d.retryConfig = o, d.retryCount = l), d
            }, e.getLevelSwitchAction = function (t, e) {
                var r = this.hls;
                null == e && (e = r.loadLevel);
                var i = this.hls.levels[e];
                if (i && (i.loadError++, r.autoLevelEnabled)) {
                    for (var n, a, s = -1, o = r.levels, l = r.loadLevel, u = r.minAutoLevel, h = r.maxAutoLevel, d = null == (n = t.frag) ? void 0 : n.type, c = null != (a = t.context) ? a : {}, f = c.type, g = c.groupId, v = o.length; v--;) {
                        var m = (v + l) % o.length;
                        if (m !== l && m >= u && m <= h && 0 === o[m].loadError) {
                            var p = o[m];
                            if (t.details === R.FRAG_GAP && t.frag) {
                                var y = o[m].details;
                                if (y) {
                                    var T = $e(t.frag, y.fragments, t.frag.start);
                                    if (null != T && T.gap) continue
                                }
                            } else {
                                if (f === ce && g === p.audioGroupId || f === fe && g === p.textGroupId) continue;
                                if (d === ve && i.audioGroupId === p.audioGroupId || d === me && i.textGroupId === p.textGroupId) continue
                            }
                            s = m;
                            break
                        }
                    }
                    if (s > -1 && r.loadLevel !== s) return t.levelRetry = !0, this.playlistError = 0, {
                        action: ir,
                        flags: ar,
                        nextAutoLevel: s
                    }
                }
                return {action: ir, flags: sr}
            }, e.onErrorOut = function (t, e) {
                var r;
                switch (null == (r = e.errorAction) ? void 0 : r.action) {
                    case rr:
                        break;
                    case ir:
                        this.sendAlternateToPenaltyBox(e), e.errorAction.resolved || e.details === R.FRAG_GAP || (e.fatal = !0)
                }
                e.fatal && this.hls.stopLoad()
            }, e.sendAlternateToPenaltyBox = function (t) {
                var e = this.hls, r = t.errorAction;
                if (r) {
                    var i = r.flags, n = r.hdcpLevel, a = r.nextAutoLevel;
                    switch (i) {
                        case ar:
                            this.switchLevel(t, a);
                            break;
                        case sr:
                            r.resolved || (r.resolved = this.redundantFailover(t));
                            break;
                        case or:
                            n && (e.maxHdcpLevel = Pe[Pe.indexOf(n) - 1], r.resolved = !0), this.warn('Restricting playback to HDCP-LEVEL of "' + e.maxHdcpLevel + '" or lower')
                    }
                    r.resolved || this.switchLevel(t, a)
                }
            }, e.switchLevel = function (t, e) {
                void 0 !== e && t.errorAction && (this.warn("switching to level " + e + " after " + t.details), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
            }, e.redundantFailover = function (t) {
                var e = this, r = this.hls, i = this.penalizedRenditions, n = t.parent === ge ? t.level : r.loadLevel,
                    a = r.levels[n], s = a.url.length, o = t.frag ? t.frag.urlId : a.urlId;
                a.urlId !== o || t.frag && !a.details || this.penalizeRendition(a, t);
                for (var l = function () {
                    var l = (o + u) % s, h = i[l];
                    if (!h || function (t, e, r) {
                        if (performance.now() - t.lastErrorPerfMs > er) return !0;
                        var i = t.details;
                        if (e.details === R.FRAG_GAP && i && e.frag) {
                            var n = e.frag.start, a = $e(null, i.fragments, n);
                            if (a && !a.gap) return !0
                        }
                        if (r && t.errors.length < r.errors.length) {
                            var s = t.errors[t.errors.length - 1];
                            if (i && s.frag && e.frag && Math.abs(s.frag.start - e.frag.start) > 3 * i.targetduration) return !0
                        }
                        return !1
                    }(h, t, i[o])) return e.warn("Switching to Redundant Stream " + (l + 1) + "/" + s + ': "' + a.url[l] + '" after ' + t.details), e.playlistError = 0, r.levels.forEach((function (t) {
                        t.urlId = l
                    })), r.nextLoadLevel = n, {v: !0}
                }, u = 1; u < s; u++) {
                    var h = l();
                    if ("object" == typeof h) return h.v
                }
                return !1
            }, e.penalizeRendition = function (t, e) {
                var r = this.penalizedRenditions, i = r[t.urlId] || {lastErrorPerfMs: 0, errors: [], details: void 0};
                i.lastErrorPerfMs = performance.now(), i.errors.push(e), i.details = t.details, r[t.urlId] = i
            }, t
        }(), ur = function () {
            function t(t, e) {
                this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = w.log.bind(w, e + ":"), this.warn = w.warn.bind(w, e + ":"), this.hls = t
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.clearTimer(), this.hls = this.log = this.warn = null
            }, e.clearTimer = function () {
                clearTimeout(this.timer), this.timer = -1
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
                        return new Oe(l, u >= 0 ? u : void 0, xe)
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
                    if (n.reloaded(r), r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : "MISSED")), r && n.fragments.length > 0 && Ge(r, n), !this.canLoad || !n.live) return;
                    var l, u = void 0, h = void 0;
                    if (n.canBlockReload && n.endSN && n.advanced) {
                        var d = this.hls.config.lowLatencyMode, c = n.lastPartSn, f = n.endSN, g = n.lastPartIndex,
                            v = c === f;
                        -1 !== g ? (u = v ? f + 1 : c, h = v ? d ? 0 : g : g + 1) : u = f + 1;
                        var m = n.age, p = m + n.ageHeader, y = Math.min(p - n.partTarget, 1.5 * n.targetduration);
                        if (y > 0) {
                            if (r && y > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + y + " with playlist age: " + n.age), y = 0; else {
                                var T = Math.floor(y / n.targetduration);
                                u += T, void 0 !== h && (h += Math.round(y % n.targetduration / n.partTarget)), this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + m.toFixed(2) + "s goal: " + y + " skip sn " + T + " to part " + h)
                            }
                            n.tuneInGoal = y
                        }
                        if (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, h), d || !v) return void this.loadPlaylist(l)
                    } else n.canBlockReload && (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, h));
                    var E = this.hls.mainForwardBufferInfo, S = E ? E.end - E.len : 0, L = function (t, e) {
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
                    var R = this.requestScheduled - s;
                    R = Math.max(0, R), this.log("reload live playlist " + t + " in " + Math.round(R) + " ms"), this.timer = self.setTimeout((function () {
                        return i.loadPlaylist(l)
                    }), R)
                } else this.clearTimer()
            }, e.getDeliveryDirectives = function (t, e, r, i) {
                var n = function (t, e) {
                    var r = t.canSkipUntil, i = t.canSkipDateRanges, n = t.endSN;
                    return r && (void 0 !== e ? e - n : 0) < r ? i ? Me : Fe : xe
                }(t, r);
                return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn, i = e.part, n = xe), new Oe(r, i, n)
            }, e.checkRetry = function (t) {
                var e = this, r = t.details, i = We(t), n = t.errorAction, a = n || {}, s = a.action, o = a.retryCount,
                    l = void 0 === o ? 0 : o, u = a.retryConfig,
                    h = !!n && !!u && (s === nr || !n.resolved && s === ir);
                if (h) {
                    var d;
                    if (this.requestScheduled = -1, l >= u.maxNumRetry) return !1;
                    if (i && null != (d = t.context) && d.deliveryDirectives) this.warn("Retrying playlist loading " + (l + 1) + "/" + u.maxNumRetry + ' after "' + r + '" without delivery-directives'), this.loadPlaylist(); else {
                        var c = qe(u, l);
                        this.timer = self.setTimeout((function () {
                            return e.loadPlaylist()
                        }), c), this.warn("Retrying playlist loading " + (l + 1) + "/" + u.maxNumRetry + ' after "' + r + '" in ' + c + "ms")
                    }
                    t.levelRetry = !0, n.resolved = !0
                }
                return h
            }, t
        }(), hr = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, e, "[level-controller]") || this)._levels = [], i._firstLevel = -1, i._startLevel = void 0, i.currentLevel = null, i.currentLevelIndex = -1, i.manualLevelIndex = -1, i.steering = void 0, i.onParsedComplete = void 0, i.steering = r, i._registerListeners(), i
            }

            l(e, t);
            var r = e.prototype;
            return r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(S.FRAG_LOADED, this.onFragLoaded, this), t.on(S.ERROR, this.onError, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(S.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(S.FRAG_LOADED, this.onFragLoaded, this), t.off(S.ERROR, this.onError, this)
            }, r.destroy = function () {
                this._unregisterListeners(), this.steering = null, this.resetLevels(), t.prototype.destroy.call(this)
            }, r.startLoad = function () {
                this._levels.forEach((function (t) {
                    t.loadError = 0, t.fragmentError = 0
                })), t.prototype.startLoad.call(this)
            }, r.resetLevels = function () {
                this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = []
            }, r.onManifestLoading = function (t, e) {
                this.resetLevels()
            }, r.onManifestLoaded = function (t, e) {
                var r, i = [], n = {};
                e.levels.forEach((function (t) {
                    var e, a = t.attrs;
                    -1 !== (null == (e = t.audioCodec) ? void 0 : e.indexOf("mp4a.40.34")) && (tr || (tr = /chrome|firefox/i.test(navigator.userAgent)), tr && (t.audioCodec = void 0));
                    var s = a.AUDIO, o = a.CODECS, l = a["FRAME-RATE"], u = a["PATHWAY-ID"], h = a.RESOLUTION,
                        d = a.SUBTITLES, c = (u || ".") + "-" + t.bitrate + "-" + h + "-" + l + "-" + o;
                    (r = n[c]) ? r.addFallback(t) : (r = new Ne(t), n[c] = r, i.push(r)), dr(r, "audio", s), dr(r, "text", d)
                })), this.filterAndSortMediaOptions(i, e)
            }, r.filterAndSortMediaOptions = function (t, e) {
                var r = this, i = [], n = [], a = !1, s = !1, o = !1, l = t.filter((function (t) {
                    var e = t.audioCodec, r = t.videoCodec, i = t.width, n = t.height, l = t.unknownCodecs;
                    return a || (a = !(!i || !n)), s || (s = !!r), o || (o = !!e), !(null != l && l.length) && (!e || Qt(e, "audio")) && (!r || Qt(r, "video"))
                }));
                if ((a || s) && o && (l = l.filter((function (t) {
                    var e = t.videoCodec, r = t.width, i = t.height;
                    return !!e || !(!r || !i)
                }))), 0 !== l.length) {
                    e.audioTracks && cr(i = e.audioTracks.filter((function (t) {
                        return !t.audioCodec || Qt(t.audioCodec, "audio")
                    }))), e.subtitles && cr(n = e.subtitles);
                    var u = l.slice(0);
                    l.sort((function (t, e) {
                        return t.attrs["HDCP-LEVEL"] !== e.attrs["HDCP-LEVEL"] ? (t.attrs["HDCP-LEVEL"] || "") > (e.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : t.bitrate !== e.bitrate ? t.bitrate - e.bitrate : t.attrs["FRAME-RATE"] !== e.attrs["FRAME-RATE"] ? t.attrs.decimalFloatingPoint("FRAME-RATE") - e.attrs.decimalFloatingPoint("FRAME-RATE") : t.attrs.SCORE !== e.attrs.SCORE ? t.attrs.decimalFloatingPoint("SCORE") - e.attrs.decimalFloatingPoint("SCORE") : a && t.height !== e.height ? t.height - e.height : 0
                    }));
                    var h = u[0];
                    if (this.steering && (l = this.steering.filterParsedLevels(l)).length !== u.length) for (var d = 0; d < u.length; d++) if (u[d].pathwayId === l[0].pathwayId) {
                        h = u[d];
                        break
                    }
                    this._levels = l;
                    for (var c = 0; c < l.length; c++) if (l[c] === h) {
                        this._firstLevel = c, this.log("manifest loaded, " + l.length + " level(s) found, first bitrate: " + h.bitrate);
                        break
                    }
                    var f = o && !s, g = {
                        levels: l,
                        audioTracks: i,
                        subtitleTracks: n,
                        sessionData: e.sessionData,
                        sessionKeys: e.sessionKeys,
                        firstLevel: this._firstLevel,
                        stats: e.stats,
                        audio: o,
                        video: s,
                        altAudio: !f && i.some((function (t) {
                            return !!t.url
                        }))
                    };
                    this.hls.trigger(S.MANIFEST_PARSED, g), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                } else Promise.resolve().then((function () {
                    if (r.hls) {
                        var t = new Error("no level with compatible codecs found in manifest");
                        r.hls.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: e.url,
                            error: t,
                            reason: t.message
                        })
                    }
                }))
            }, r.onError = function (t, e) {
                !e.fatal && e.context && e.context.type === de && e.context.level === this.level && this.checkRetry(e)
            }, r.onFragLoaded = function (t, e) {
                var r = e.frag;
                if (void 0 !== r && r.type === ge) {
                    var i = this._levels[r.level];
                    void 0 !== i && (i.loadError = 0)
                }
            }, r.onLevelLoaded = function (t, e) {
                var r, i, n = e.level, a = e.details, s = this._levels[n];
                if (!s) return this.warn("Invalid level index " + n), void (null != (i = e.deliveryDirectives) && i.skip && (a.deltaUpdateFailed = !0));
                n === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0), this.playlistLoaded(n, e, s.details)) : null != (r = e.deliveryDirectives) && r.skip && (a.deltaUpdateFailed = !0)
            }, r.onAudioTrackSwitched = function (t, e) {
                var r = this.currentLevel;
                if (r) {
                    var i = this.hls.audioTracks[e.id].groupId;
                    if (r.audioGroupIds && r.audioGroupId !== i) {
                        for (var n = -1, a = 0; a < r.audioGroupIds.length; a++) if (r.audioGroupIds[a] === i) {
                            n = a;
                            break
                        }
                        -1 !== n && n !== r.urlId && (r.urlId = n, this.canLoad && this.startLoad())
                    }
                }
            }, r.loadPlaylist = function (e) {
                t.prototype.loadPlaylist.call(this);
                var r = this.currentLevelIndex, i = this.currentLevel;
                if (i && this.shouldLoadPlaylist(i)) {
                    var n = i.urlId, a = i.uri;
                    if (e) try {
                        a = e.addDirectives(a)
                    } catch (t) {
                        this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                    }
                    var s = i.attrs["PATHWAY-ID"];
                    this.log("Loading level index " + r + (void 0 !== (null == e ? void 0 : e.msn) ? " at sn " + e.msn + " part " + e.part : "") + " with" + (s ? " Pathway " + s : "") + " URI " + (n + 1) + "/" + i.url.length + " " + a), this.clearTimer(), this.hls.trigger(S.LEVEL_LOADING, {
                        url: a,
                        level: r,
                        id: n,
                        deliveryDirectives: e || null
                    })
                }
            }, r.removeLevel = function (t, e) {
                var r = this, i = function (t, r) {
                    return r !== e
                }, n = this._levels.filter((function (n, a) {
                    return a !== t || (n.url.length > 1 && void 0 !== e ? (n.url = n.url.filter(i), n.audioGroupIds && (n.audioGroupIds = n.audioGroupIds.filter(i)), n.textGroupIds && (n.textGroupIds = n.textGroupIds.filter(i)), n.urlId = 0, !0) : (r.steering && r.steering.removeLevel(n), !1))
                }));
                this.hls.trigger(S.LEVELS_UPDATED, {levels: n})
            }, r.onLevelsUpdated = function (t, e) {
                var r = e.levels;
                r.forEach((function (t, e) {
                    var r = t.details;
                    null != r && r.fragments && r.fragments.forEach((function (t) {
                        t.level = e
                    }))
                })), this._levels = r
            }, a(e, [{
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
                                details: R.LEVEL_SWITCH_ERROR,
                                level: t,
                                fatal: i,
                                error: r,
                                reason: r.message
                            }), i) return;
                            t = Math.min(t, e.length - 1)
                        }
                        var n = this.currentLevelIndex, a = this.currentLevel, s = a ? a.attrs["PATHWAY-ID"] : void 0,
                            l = e[t], u = l.attrs["PATHWAY-ID"];
                        if (this.currentLevelIndex = t, this.currentLevel = l, n !== t || !l.details || !a || s !== u) {
                            this.log("Switching to level " + t + (u ? " with Pathway " + u : "") + " from level " + n + (s ? " with Pathway " + s : ""));
                            var h = o({}, l, {
                                level: t,
                                maxBitrate: l.maxBitrate,
                                attrs: l.attrs,
                                uri: l.uri,
                                urlId: l.urlId
                            });
                            delete h._attrs, delete h._urlId, this.hls.trigger(S.LEVEL_SWITCHING, h);
                            var d = l.details;
                            if (!d || d.live) {
                                var c = this.switchParams(l.uri, null == a ? void 0 : a.details);
                                this.loadPlaylist(c)
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
                        return void 0 !== t ? t : this._firstLevel
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
        }(ur);

        function dr(t, e, r) {
            r && ("audio" === e ? (t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds[t.url.length - 1] = r) : "text" === e && (t.textGroupIds || (t.textGroupIds = []), t.textGroupIds[t.url.length - 1] = r))
        }

        function cr(t) {
            var e = {};
            t.forEach((function (t) {
                var r = t.groupId || "";
                t.id = e[r] = e[r] || 0, e[r]++
            }))
        }

        var fr = "NOT_LOADED", gr = "APPENDING", vr = "PARTIAL", mr = "OK", pr = function () {
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
                    var a = Tr(i), s = this.fragments[a];
                    if (!(!s || s.buffered && i.gap)) {
                        var o = !i.relurl;
                        Object.keys(r).forEach((function (t) {
                            var a = i.elementaryStreams[t];
                            if (a) {
                                var l = r[t], u = o || !0 === a.partial;
                                s.range[t] = e.getBufferedTimes(i, n, u, l)
                            }
                        })), s.loaded = null, Object.keys(s.range).length ? (s.buffered = !0, s.body.endList && (this.endListFragments[s.body.type] = s), yr(s) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(s.body)
                    }
                }
            }, e.removeParts = function (t, e) {
                var r = this.activePartLists[e];
                r && (this.activePartLists[e] = r.filter((function (e) {
                    return e.fragment.sn >= t
                })))
            }, e.fragBuffered = function (t, e) {
                var r = Tr(t), i = this.fragments[r];
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
                    if (a < d && s > h) n.partial = !0, n.time.push({
                        startPTS: Math.max(a, i.start(u)),
                        endPTS: Math.min(s, i.end(u))
                    }); else if (s <= h) break
                }
                return n
            }, e.getPartialFragment = function (t) {
                var e, r, i, n = null, a = 0, s = this.bufferPadding, o = this.fragments;
                return Object.keys(o).forEach((function (l) {
                    var u = o[l];
                    u && yr(u) && (r = u.body.start - s, i = u.body.end + s, t >= r && t <= i && (e = Math.min(t - r, i - t), a <= e && (n = u.body, a = e)))
                })), n
            }, e.isEndListAppended = function (t) {
                var e = this.endListFragments[t];
                return void 0 !== e && (e.buffered || yr(e))
            }, e.getState = function (t) {
                var e = Tr(t), r = this.fragments[e];
                return r ? r.buffered ? yr(r) ? vr : mr : gr : fr
            }, e.isTimeBuffered = function (t, e, r) {
                for (var i, n, a = 0; a < r.length; a++) {
                    if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, t >= i && e <= n) return !0;
                    if (e <= i) return !1
                }
                return !1
            }, e.onFragLoaded = function (t, e) {
                var r = e.frag, i = e.part;
                if ("initSegment" !== r.sn && !r.bitrateTest) {
                    var n = i ? null : e, a = Tr(r);
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
                var e = Tr(t);
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
                var e = Tr(t);
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

        function yr(t) {
            var e, r, i;
            return t.buffered && (t.body.gap || (null == (e = t.range.video) ? void 0 : e.partial) || (null == (r = t.range.audio) ? void 0 : r.partial) || (null == (i = t.range.audiovideo) ? void 0 : i.partial))
        }

        function Tr(t) {
            return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
        }

        var Er = Math.pow(2, 17), Sr = function () {
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
                if (!n) return Promise.reject(new Ar({
                    type: L.NETWORK_ERROR,
                    details: R.FRAG_LOAD_ERROR,
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
                        }))) return void u(Rr(t));
                        t.gap = !1
                    }
                    var h = r.loader = t.loader = s ? new s(a) : new o(a), d = Lr(t), c = Xe(a.fragLoadPolicy.default),
                        f = {
                            loadPolicy: c,
                            timeout: c.maxLoadTimeMs,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: 0,
                            highWaterMark: "initSegment" === t.sn ? 1 / 0 : Er
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
                            r.resetLoader(t, h), u(new Ar({
                                type: L.NETWORK_ERROR,
                                details: R.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t,
                                response: i({url: n, data: void 0}, e),
                                error: new Error("HTTP Error " + e.code + " " + e.text),
                                networkDetails: s,
                                stats: o
                            }))
                        }, onAbort: function (e, i, n) {
                            r.resetLoader(t, h), u(new Ar({
                                type: L.NETWORK_ERROR,
                                details: R.INTERNAL_ABORTED,
                                fatal: !1,
                                frag: t,
                                error: new Error("Aborted"),
                                networkDetails: n,
                                stats: e
                            }))
                        }, onTimeout: function (e, i, n) {
                            r.resetLoader(t, h), u(new Ar({
                                type: L.NETWORK_ERROR,
                                details: R.FRAG_LOAD_TIMEOUT,
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
                    if (n.loader && n.loader.destroy(), t.gap || e.gap) u(Rr(t, e)); else {
                        var h = n.loader = t.loader = s ? new s(a) : new o(a), d = Lr(t, e),
                            c = Xe(a.fragLoadPolicy.default), f = {
                                loadPolicy: c,
                                timeout: c.maxLoadTimeMs,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: 0,
                                highWaterMark: Er
                            };
                        e.stats = h.stats, h.load(d, f, {
                            onSuccess: function (i, a, s, o) {
                                n.resetLoader(t, h), n.updateStatsFromPart(t, e);
                                var u = {frag: t, part: e, payload: i.data, networkDetails: o};
                                r(u), l(u)
                            }, onError: function (r, a, s, o) {
                                n.resetLoader(t, h), u(new Ar({
                                    type: L.NETWORK_ERROR,
                                    details: R.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    response: i({url: d.url, data: void 0}, r),
                                    error: new Error("HTTP Error " + r.code + " " + r.text),
                                    networkDetails: s,
                                    stats: o
                                }))
                            }, onAbort: function (r, i, a) {
                                t.stats.aborted = e.stats.aborted, n.resetLoader(t, h), u(new Ar({
                                    type: L.NETWORK_ERROR,
                                    details: R.INTERNAL_ABORTED,
                                    fatal: !1,
                                    frag: t,
                                    part: e,
                                    error: new Error("Aborted"),
                                    networkDetails: a,
                                    stats: r
                                }))
                            }, onTimeout: function (r, i, a) {
                                n.resetLoader(t, h), u(new Ar({
                                    type: L.NETWORK_ERROR,
                                    details: R.FRAG_LOAD_TIMEOUT,
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

        function Lr(t, e) {
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
            if (E(n) && E(a)) {
                var s, o = n, l = a;
                if ("initSegment" === t.sn && "AES-128" === (null == (s = t.decryptdata) ? void 0 : s.method)) {
                    var u = a - n;
                    u % 16 && (l = a + (16 - u % 16)), 0 !== n && (i.resetIV = !0, o = n - 16)
                }
                i.rangeStart = o, i.rangeEnd = l
            }
            return i
        }

        function Rr(t, e) {
            var r = new Error("GAP " + (t.gap ? "tag" : "attribute") + " found"),
                i = {type: L.MEDIA_ERROR, details: R.FRAG_GAP, fatal: !1, frag: t, error: r, networkDetails: null};
            return e && (i.part = e), (e || t).stats.aborted = !0, new Ar(i)
        }

        var Ar = function (t) {
            function e(e) {
                var r;
                return (r = t.call(this, e.error.message) || this).data = void 0, r.data = e, r
            }

            return l(e, t), e
        }(f(Error)), kr = function () {
            function t(t) {
                this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t
            }

            var e = t.prototype;
            return e.abort = function (t) {
                for (var e in this.keyUriToKeyInfo) {
                    var r = this.keyUriToKeyInfo[e].loader;
                    if (r) {
                        if (t && t !== r.context.frag.type) return;
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
                return void 0 === e && (e = R.KEY_LOAD_ERROR), new Ar({
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
                    })), "break"
                }, s = 0; s < e.length && "break" !== a(); s++) ;
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
                    return Promise.reject(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, a))
                }
                var s = n.uri;
                if (!s) return Promise.reject(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + s + '"')));
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
                        return Promise.reject(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + n.method + '"')))
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
                                if (!a.decryptdata || l !== r.keyUriToKeyInfo[u]) return o(r.createKeyLoadError(a, R.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), n));
                                l.decryptdata.key = a.decryptdata.key = new Uint8Array(t.data), a.keyLoader = null, l.loader = null, s({
                                    frag: a,
                                    keyInfo: l
                                })
                            }, onError: function (t, n, a, s) {
                                r.resetLoader(n), o(r.createKeyLoadError(e, R.KEY_LOAD_ERROR, new Error("HTTP Error " + t.code + " loading key " + t.text), a, i({
                                    url: l.url,
                                    data: void 0
                                }, t)))
                            }, onTimeout: function (t, i, n) {
                                r.resetLoader(i), o(r.createKeyLoadError(e, R.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), n))
                            }, onAbort: function (t, i, n) {
                                r.resetLoader(i), o(r.createKeyLoadError(e, R.INTERNAL_ABORTED, new Error("key loading aborted"), n))
                            }
                        };
                    a.load(l, h, d)
                }))
            }, e.resetLoader = function (t) {
                var e = t.frag, r = t.keyInfo, i = t.url, n = r.loader;
                e.keyLoader === n && (e.keyLoader = null, r.loader = null), delete this.keyUriToKeyInfo[i], n && n.destroy()
            }, t
        }(), br = function () {
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
        }(), Dr = {
            length: 0, start: function () {
                return 0
            }, end: function () {
                return 0
            }
        }, Ir = function () {
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
                    return w.log("failed to get media.buffered", t), Dr
                }
            }, t
        }(), wr = function (t, e, r, i, n, a) {
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

        function Cr(t, e) {
            for (var r = null, i = 0, n = t.length; i < n; i++) {
                var a = t[i];
                if (a && a.cc === e) {
                    r = a;
                    break
                }
            }
            return r
        }

        function _r(t, e) {
            if (t) {
                var r = t.start + e;
                t.start = t.startPTS = r, t.endPTS = r + t.duration
            }
        }

        function Pr(t, e) {
            for (var r = e.fragments, i = 0, n = r.length; i < n; i++) _r(r[i], t);
            e.fragmentHint && _r(e.fragmentHint, t), e.alignedSliding = !0
        }

        function xr(t, e, r) {
            e && (function (t, e, r) {
                if (function (t, e, r) {
                    return !(!e.details || !(r.endCC > r.startCC || t && t.cc < r.startCC))
                }(t, r, e)) {
                    var i = function (t, e, r) {
                        var i = t.fragments, n = e.fragments;
                        if (n.length && i.length) {
                            var a = Cr(i, n[0].cc);
                            if (a && (!a || a.startPTS)) return a;
                            w.log("No frag in previous level to align on")
                        } else w.log("No fragments to align")
                    }(r.details, e);
                    i && E(i.start) && (w.log("Adjusting PTS using last level due to CC increase within current level " + e.url), Pr(i.start, e))
                }
            }(t, r, e), !r.alignedSliding && e.details && function (t, e) {
                if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                    var r = e.fragments[0].programDateTime, i = t.fragments[0].programDateTime,
                        n = (i - r) / 1e3 + e.fragments[0].start;
                    n && E(n) && (w.log("Adjusting PTS using programDateTime delta " + (i - r) + "ms, sliding:" + n.toFixed(3) + " " + t.url + " "), Pr(n, t))
                }
            }(r, e.details), r.alignedSliding || !e.details || r.skippedSegments || Ke(e.details, r))
        }

        function Fr(t, e) {
            if (t.hasProgramDateTime && e.hasProgramDateTime) {
                var r = t.fragments, i = e.fragments;
                if (r.length && i.length) {
                    var n = i[Math.round(i.length / 2) - 1], a = Cr(r, n.cc) || r[Math.round(r.length / 2) - 1],
                        s = n.programDateTime, o = a.programDateTime;
                    null !== s && null !== o && Pr((o - s) / 1e3 - (a.start - n.start), t)
                }
            }
        }

        var Mr = function () {
                function t(t, e) {
                    this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
                }

                return t.prototype.decrypt = function (t, e) {
                    return this.subtle.decrypt({name: "AES-CBC", iv: this.aesIV}, e, t)
                }, t
            }(), Or = function () {
                function t(t, e) {
                    this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
                }

                return t.prototype.expandKey = function () {
                    return this.subtle.importKey("raw", this.key, {name: "AES-CBC"}, !1, ["encrypt", "decrypt"])
                }, t
            }(), Nr = function () {
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
                        var p = c[f], y = c[p], T = c[y], E = 257 * c[m] ^ 16843008 * m;
                        i[f] = E << 24 | E >>> 8, n[f] = E << 16 | E >>> 16, a[f] = E << 8 | E >>> 24, s[f] = E, E = 16843009 * T ^ 65537 * y ^ 257 * p ^ 16843008 * f, l[m] = E << 24 | E >>> 8, u[m] = E << 16 | E >>> 16, h[m] = E << 8 | E >>> 24, d[m] = E, f ? (f = p ^ c[c[c[T ^ p]]], g ^= c[c[g]]) : f = g = 1
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
                    for (var i, n, a, s, o, l, u, h, d, c, f, g, v, m, p = this.keySize + 6, y = this.invKeySchedule, T = this.invSBox, E = this.invSubMix, S = E[0], L = E[1], R = E[2], A = E[3], k = this.uint8ArrayToUint32Array_(r), b = k[0], D = k[1], I = k[2], w = k[3], C = new Int32Array(t), _ = new Int32Array(C.length), P = this.networkToHostOrderSwap; e < C.length;) {
                        for (d = P(C[e]), c = P(C[e + 1]), f = P(C[e + 2]), g = P(C[e + 3]), o = d ^ y[0], l = g ^ y[1], u = f ^ y[2], h = c ^ y[3], v = 4, m = 1; m < p; m++) i = S[o >>> 24] ^ L[l >> 16 & 255] ^ R[u >> 8 & 255] ^ A[255 & h] ^ y[v], n = S[l >>> 24] ^ L[u >> 16 & 255] ^ R[h >> 8 & 255] ^ A[255 & o] ^ y[v + 1], a = S[u >>> 24] ^ L[h >> 16 & 255] ^ R[o >> 8 & 255] ^ A[255 & l] ^ y[v + 2], s = S[h >>> 24] ^ L[o >> 16 & 255] ^ R[l >> 8 & 255] ^ A[255 & u] ^ y[v + 3], o = i, l = n, u = a, h = s, v += 4;
                        i = T[o >>> 24] << 24 ^ T[l >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & h] ^ y[v], n = T[l >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[h >> 8 & 255] << 8 ^ T[255 & o] ^ y[v + 1], a = T[u >>> 24] << 24 ^ T[h >> 16 & 255] << 16 ^ T[o >> 8 & 255] << 8 ^ T[255 & l] ^ y[v + 2], s = T[h >>> 24] << 24 ^ T[o >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & u] ^ y[v + 3], _[e] = P(i ^ b), _[e + 1] = P(s ^ D), _[e + 2] = P(a ^ I), _[e + 3] = P(n ^ w), b = d, D = c, I = f, w = g, e += 4
                    }
                    return _.buffer
                }, t
            }(), Ur = function () {
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
                    return this.reset(), this.removePKCS7Padding ? (i = (r = a).byteLength, (n = i && new DataView(r.buffer).getUint8(i - 1)) ? rt(r, 0, i - n) : r) : a
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
                    this.logOnce("JS AES decrypt"), a && (t = xt(a, t), this.remainderData = null);
                    var s = this.getValidChunk(t);
                    if (!s.length) return null;
                    i && (r = i);
                    var o = this.softwareDecrypter;
                    o || (o = this.softwareDecrypter = new Nr), o.expandKey(e);
                    var l = n;
                    return this.currentResult = o.decrypt(s.buffer, 0, r), this.currentIV = rt(s, -16).buffer, l || null
                }, e.webCryptoDecrypt = function (t, e, r) {
                    var i = this, n = this.subtle;
                    return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new Or(n, e)), this.fastAesKey.expandKey().then((function (e) {
                        return n ? (i.logOnce("WebCrypto AES decrypt"), new Mr(n, new Uint8Array(r)).decrypt(t.buffer, e)) : Promise.reject(new Error("web crypto not initialized"))
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
                    return r !== t.length && (e = rt(t, 0, r), this.remainderData = rt(t, r)), e
                }, e.logOnce = function (t) {
                    this.logEnabled && (w.log("[decrypter]: " + t), this.logEnabled = !1)
                }, t
            }(), Br = function (t) {
                for (var e = "", r = t.length, i = 0; i < r; i++) e += "[" + t.start(i).toFixed(3) + "-" + t.end(i).toFixed(3) + "]";
                return e
            }, Gr = "STOPPED", Kr = "IDLE", Hr = "KEY_LOADING", Vr = "FRAG_LOADING", Yr = "FRAG_LOADING_WAITING_RETRY",
            Wr = "WAITING_TRACK", jr = "PARSING", qr = "PARSED", Xr = "ENDED", zr = "ERROR", Qr = "WAITING_INIT_PTS",
            $r = "WAITING_LEVEL", Jr = function (t) {
                function e(e, r, i, n, a) {
                    var s;
                    return (s = t.call(this) || this).hls = void 0, s.fragPrevious = null, s.fragCurrent = null, s.fragmentTracker = void 0, s.transmuxer = null, s._state = Gr, s.playlistType = void 0, s.media = null, s.mediaBuffer = null, s.config = void 0, s.bitrateTest = !1, s.lastCurrentTime = 0, s.nextLoadPosition = 0, s.startPosition = 0, s.startTimeOffset = null, s.loadedmetadata = !1, s.retryDate = 0, s.levels = null, s.fragmentLoader = void 0, s.keyLoader = void 0, s.levelLastLoaded = null, s.startFragRequested = !1, s.decrypter = void 0, s.initPTS = [], s.onvseeking = null, s.onvended = null, s.logPrefix = "", s.log = void 0, s.warn = void 0, s.playlistType = a, s.logPrefix = n, s.log = w.log.bind(w, n + ":"), s.warn = w.warn.bind(w, n + ":"), s.hls = e, s.fragmentLoader = new Sr(e.config), s.keyLoader = i, s.fragmentTracker = r, s.config = e.config, s.decrypter = new Ur(e.config), e.on(S.MANIFEST_LOADED, s.onManifestLoaded, function (t) {
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
                    null != t && t.loader && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Gr
                }, r._streamEnded = function (t, e) {
                    if (e.live || t.nextStart || !t.end || !this.media) return !1;
                    var r = e.partList;
                    if (null != r && r.length) {
                        var i = r[r.length - 1];
                        return Ir.isBuffered(this.media, i.start + i.duration / 2)
                    }
                    var n = e.fragments[e.fragments.length - 1].type;
                    return this.fragmentTracker.isEndListAppended(n)
                }, r.getLevelDetails = function () {
                    var t;
                    if (this.levels && null !== this.levelLastLoaded) return null == (t = this.levels[this.levelLastLoaded]) ? void 0 : t.details
                }, r.onMediaAttached = function (t, e) {
                    var r = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
                    var i = this.config;
                    this.levels && i.autoStartLoad && this.state === Gr && this.startLoad(i.startPosition)
                }, r.onMediaDetaching = function () {
                    var t = this.media;
                    null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && this.onvseeking && this.onvended && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                }, r.onMediaSeeking = function () {
                    var t = this.config, e = this.fragCurrent, r = this.media, i = this.mediaBuffer, n = this.state,
                        a = r ? r.currentTime : 0, s = Ir.bufferInfo(i || r, a, t.maxBufferHole);
                    if (this.log("media seeking to " + (E(a) ? a.toFixed(3) : a) + ", state: " + n), this.state === Xr) this.resetLoadingState(); else if (e) {
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
                    this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                }, r.onHandlerDestroyed = function () {
                    this.state = Gr, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
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
                            i.fragContextChanged(t) ? (r === Vr || !i.fragCurrent && r === jr) && (i.fragmentTracker.removeFragment(t), i.state = Kr) : ("payload" in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level), i.hls.trigger(S.FRAG_LOADED, e)), i._handleFragmentLoadComplete(e))
                        }
                    })).catch((function (e) {
                        i.state !== Gr && i.state !== zr && (i.warn(e), i.resetFragmentLoading(t))
                    }))
                }, r.clearTrackerIfNeeded = function (t) {
                    var e, r = this.fragmentTracker;
                    if (r.getState(t) === gr) {
                        var i = t.type, n = this.getFwdBufferInfo(this.mediaBuffer, i),
                            a = Math.max(t.duration, n ? n.len : this.config.maxBufferLength);
                        this.reduceMaxBufferLength(a) && r.removeFragment(t)
                    } else 0 === (null == (e = this.mediaBuffer) ? void 0 : e.buffered.length) ? r.removeAllFragments() : r.hasParts(t.type) && (r.detectPartialFragments({
                        frag: t,
                        part: null,
                        stats: t.stats,
                        id: t.type
                    }), r.getState(t) === vr && r.removeFragment(t))
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
                        if (n && n.byteLength > 0 && a && a.key && a.iv && "AES-128" === a.method) {
                            var s = self.performance.now();
                            return r.decrypter.decrypt(new Uint8Array(n), a.key.buffer, a.iv.buffer).catch((function (e) {
                                throw i.trigger(S.ERROR, {
                                    type: L.MEDIA_ERROR,
                                    details: R.FRAG_DECRYPT_ERROR,
                                    fatal: !1,
                                    error: e,
                                    reason: e.message,
                                    frag: t
                                }), e
                            })).then((function (r) {
                                var n = self.performance.now();
                                return i.trigger(S.FRAG_DECRYPTED, {
                                    frag: t,
                                    payload: r,
                                    stats: {tstart: s, tdecrypt: n}
                                }), e.payload = r, e
                            }))
                        }
                        return e
                    })).then((function (i) {
                        var n = r.fragCurrent, a = r.hls;
                        if (!r.levels) throw new Error("init load aborted, missing levels");
                        var s = t.stats;
                        r.state = Kr, e.fragmentError = 0, t.data = new Uint8Array(i.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), i.frag === n && a.trigger(S.FRAG_BUFFERED, {
                            stats: s,
                            frag: n,
                            part: null,
                            id: t.type
                        }), r.tick()
                    })).catch((function (e) {
                        r.state !== Gr && r.state !== zr && (r.warn(e), r.resetFragmentLoading(t))
                    }))
                }, r.fragContextChanged = function (t) {
                    var e = this.fragCurrent;
                    return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                }, r.fragBufferedComplete = function (t, e) {
                    var r, i, n, a, s = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + (this.playlistType === ge ? "level" : "track") + " " + t.level + " (frag:[" + (null != (r = t.startPTS) ? r : NaN).toFixed(3) + "-" + (null != (i = t.endPTS) ? i : NaN).toFixed(3) + "] > buffer:" + (s ? Br(Ir.getBuffered(s)) : "(detached)") + ")"), this.state = Kr, s && (!this.loadedmetadata && t.type == ge && s.buffered.length && (null == (n = this.fragCurrent) ? void 0 : n.sn) === (null == (a = this.fragPrevious) ? void 0 : a.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
                }, r.seekToStartPos = function () {
                }, r._handleFragmentLoadComplete = function (t) {
                    var e = this.transmuxer;
                    if (e) {
                        var r = t.frag, i = t.part, n = t.partsLoaded, a = !n || 0 === n.length || n.some((function (t) {
                            return !t
                        })), s = new wr(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
                        e.flush(s)
                    }
                }, r._handleFragmentLoadProgress = function (t) {
                }, r._doFragLoad = function (t, e, r, i) {
                    var n, a = this;
                    void 0 === r && (r = null);
                    var s = null == e ? void 0 : e.details;
                    if (!this.levels || !s) throw new Error("frag load aborted, missing level" + (s ? "" : " detail") + "s");
                    var o = null;
                    if (!t.encrypted || null != (n = t.decryptdata) && n.key ? !t.encrypted && s.encryptedFragments.length && this.keyLoader.loadClear(t, s.encryptedFragments) : (this.log("Loading key for " + t.sn + " of [" + s.startSN + "-" + s.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = Hr, this.fragCurrent = t, o = this.keyLoader.load(t).then((function (t) {
                        if (!a.fragContextChanged(t.frag)) return a.hls.trigger(S.KEY_LOADED, t), a.state === Hr && (a.state = Kr), t
                    })), this.hls.trigger(S.KEY_LOADING, {frag: t}), null === this.fragCurrent && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), r = Math.max(t.start, r || 0), this.config.lowLatencyMode && "initSegment" !== t.sn) {
                        var l = s.partList;
                        if (l && i) {
                            r > t.end && s.fragmentHint && (t = s.fragmentHint);
                            var u = this.getNextPart(l, t, r);
                            if (u > -1) {
                                var h, d = l[u];
                                return this.log("Loading part sn: " + t.sn + " p: " + d.index + " cc: " + t.cc + " of playlist [" + s.startSN + "-" + s.endSN + "] parts [0-" + u + "-" + (l.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.nextLoadPosition = d.start + d.duration, this.state = Vr, h = o ? o.then((function (r) {
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
                    this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (s ? "of [" + s.startSN + "-" + s.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), E(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = Vr;
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
                                var h = Ve(r, t.sn, o.index + 1) || Ye(u, t.sn, o.index + 1);
                                if (!h) return a({frag: t, part: s, partsLoaded: l});
                                e(h)
                            })).catch(s)
                        }(e)
                    }))
                }, r.handleFragLoadError = function (t) {
                    if ("data" in t) {
                        var e = t.data;
                        t.data && e.details === R.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(S.ERROR, e)
                    } else this.hls.trigger(S.ERROR, {
                        type: L.OTHER_ERROR,
                        details: R.INTERNAL_EXCEPTION,
                        err: t,
                        error: t,
                        fatal: !0
                    });
                    return null
                }, r._handleTransmuxerFlush = function (t) {
                    var e = this.getCurrentContext(t);
                    if (e && this.state === jr) {
                        var r = e.frag, i = e.part, n = e.level, a = self.performance.now();
                        r.stats.parsing.end = a, i && (i.stats.parsing.end = a), this.updateLevelTiming(r, i, n, t.partial)
                    } else this.fragCurrent || this.state === Gr || this.state === zr || (this.state = Kr)
                }, r.getCurrentContext = function (t) {
                    var e = this.levels, r = this.fragCurrent, i = t.level, n = t.sn, a = t.part;
                    if (null == e || !e[i]) return this.warn("Levels object was unset while buffering fragment " + n + " of level " + i + ". The current chunk will not be buffered."), null;
                    var s = e[i], o = a > -1 ? Ve(s, n, a) : null, l = o ? o.fragment : function (t, e, r) {
                        if (null == t || !t.details) return null;
                        var i = t.details, n = i.fragments[e - i.startSN];
                        return n || ((n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null)
                    }(s, n, r);
                    return l ? (r && r !== l && (l.stats = r.stats), {frag: l, part: o, level: s}) : null
                }, r.bufferFragmentData = function (t, e, r, i, n) {
                    var a;
                    if (t && this.state === jr) {
                        var s = t.data1, o = t.data2, l = s;
                        if (s && o && (l = xt(s, o)), null != (a = l) && a.length) {
                            var u = {type: t.type, frag: e, part: r, chunkMeta: i, parent: e.type, data: l};
                            if (this.hls.trigger(S.BUFFER_APPENDING, u), t.dropped && t.independent && !r) {
                                if (n) return;
                                this.flushBufferGap(e)
                            }
                        }
                    }
                }, r.flushBufferGap = function (t) {
                    var e = this.media;
                    if (e) if (Ir.isBuffered(e, e.currentTime)) {
                        var r = e.currentTime, i = Ir.bufferInfo(e, r, 0), n = t.duration,
                            a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n),
                            s = Math.max(Math.min(t.start - a, i.end - a), r + a);
                        t.start - s > a && this.flushMainBuffer(s, t.start)
                    } else this.flushMainBuffer(0, t.start)
                }, r.getFwdBufferInfo = function (t, e) {
                    var r = this.getLoadPosition();
                    return E(r) ? this.getFwdBufferInfoAtPos(t, r, e) : null
                }, r.getFwdBufferInfoAtPos = function (t, e, r) {
                    var i = this.config.maxBufferHole, n = Ir.bufferInfo(t, e, i);
                    if (0 === n.len && void 0 !== n.nextStart) {
                        var a = this.fragmentTracker.getBufferedFrag(e, r);
                        if (a && n.nextStart < a.end) return Ir.bufferInfo(t, e, Math.max(n.nextStart, i))
                    }
                    return n
                }, r.getMaxBufferLength = function (t) {
                    var e, r = this.config;
                    return e = t ? Math.max(8 * r.maxBufferSize / t, r.maxBufferLength) : r.maxBufferLength, Math.min(e, r.maxMaxBufferLength)
                }, r.reduceMaxBufferLength = function (t) {
                    var e = this.config, r = t || e.maxBufferLength;
                    return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                }, r.getAppendedFrag = function (t, e) {
                    var r = this.fragmentTracker.getAppendedFrag(t, ge);
                    return r && "fragment" in r ? r.fragment : r
                }, r.getNextFragment = function (t, e) {
                    var r = e.fragments, i = r.length;
                    if (!i) return null;
                    var n, a = this.config, s = r[0].start;
                    if (e.live) {
                        var o = a.initialLiveManifestSize;
                        if (i < o) return this.warn("Not enough fragments to start playback (have: " + i + ", need: " + o + ")"), null;
                        e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (n = this.getInitialLiveFragment(e, r), this.startPosition = n ? this.hls.liveSyncPosition || n.start : t)
                    } else t <= s && (n = r[0]);
                    if (!n) {
                        var l = a.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                        n = this.getFragmentAtPosition(t, l, e)
                    }
                    return this.mapToInitFragWhenRequired(n)
                }, r.isLoopLoading = function (t, e) {
                    var r = this.fragmentTracker.getState(t);
                    return (r === mr || r === vr && !!t.gap) && this.nextLoadPosition > e
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
                            if (null === e || !Array.isArray(t) || !t.length || !E(e)) return null;
                            if (e < (t[0].programDateTime || 0)) return null;
                            if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
                            r = r || 0;
                            for (var i = 0; i < t.length; ++i) {
                                var n = t[i];
                                if (Ze(e, r, n)) return n
                            }
                            return null
                        }(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                            var n = r.sn + 1;
                            if (n >= t.startSN && n <= t.endSN) {
                                var a = e[n - t.startSN];
                                r.cc === a.cc && (i = a, this.log("Live playlist, switching playlist, load frag with next SN: " + i.sn))
                            }
                            i || (i = function (t, e) {
                                return Qe(t, (function (t) {
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
                    if (d && l && !this.bitrateTest && (s = s.concat(l), o = l.sn), i = t < e ? $e(a, s, t, t > e - u ? 0 : u) : s[s.length - 1]) {
                        var c = i.sn - r.startSN, f = this.fragmentTracker.getState(i);
                        if ((f === mr || f === vr && i.gap) && (a = i), a && i.sn === a.sn && (!d || h[0].fragment.sn > i.sn) && a && i.level === a.level) {
                            var g = s[c + 1];
                            i = i.sn < o && this.fragmentTracker.getState(g) !== mr ? g : null
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
                }, r.alignPlaylists = function (t, e) {
                    var r = this.levels, i = this.levelLastLoaded, n = this.fragPrevious, a = null !== i ? r[i] : null,
                        s = t.fragments.length;
                    if (!s) return this.warn("No fragments in live playlist"), 0;
                    var o = t.fragments[0].start, l = !e, u = t.alignedSliding && E(o);
                    if (l || !u && !o) {
                        xr(n, a, t);
                        var h = t.fragments[0].start;
                        return this.log("Live playlist sliding: " + h.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (n ? n.sn : "na") + " fragments: " + s), h
                    }
                    return o
                }, r.waitForCdnTuneIn = function (t) {
                    return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                }, r.setStartPosition = function (t, e) {
                    var r = this.startPosition;
                    if (r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
                        var i = null !== this.startTimeOffset, n = i ? this.startTimeOffset : t.startTimeOffset;
                        null !== n && E(n) ? (r = e + n, n < 0 && (r += t.totalduration), r = Math.min(Math.max(e, r), e + t.totalduration), this.log("Start time offset " + n + " found in " + (i ? "multivariant" : "media") + " playlist, adjust startPosition to " + r), this.startPosition = r) : t.live ? r = this.hls.liveSyncPosition || e : this.startPosition = r = 0, this.lastCurrentTime = r
                    }
                    this.nextLoadPosition = r
                }, r.getLoadPosition = function () {
                    var t = this.media, e = 0;
                    return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                }, r.handleFragLoadAborted = function (t, e) {
                    this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
                }, r.resetFragmentLoading = function (t) {
                    this.fragCurrent && (this.fragContextChanged(t) || this.state === Yr) || (this.state = Kr)
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
                        var a = e.details === R.FRAG_GAP;
                        a && this.fragmentTracker.fragBuffered(i, !0);
                        var s = e.errorAction, o = s || {}, l = o.action, u = o.retryCount, h = void 0 === u ? 0 : u,
                            d = o.retryConfig;
                        if (s && l === nr && d) {
                            var c;
                            this.resetStartWhenNotLoaded(null != (c = this.levelLastLoaded) ? c : i.level);
                            var f = qe(d, h);
                            this.warn("Fragment " + i.sn + " of " + t + " " + i.level + " errored with " + e.details + ", retrying loading " + (h + 1) + "/" + d.maxNumRetry + " in " + f + "ms"), s.resolved = !0, this.retryDate = self.performance.now() + f, this.state = Yr
                        } else d && s ? (this.resetFragmentErrors(t), h < d.maxNumRetry ? a || (s.resolved = !0) : w.warn(e.details + " reached or exceeded max retry (" + h + ")")) : (null == s ? void 0 : s.action) === ir ? this.state = $r : this.state = zr;
                        this.tickImmediate()
                    }
                }, r.reduceLengthAndFlushBuffer = function (t) {
                    if (this.state === jr || this.state === qr) {
                        var e = t.parent, r = this.getFwdBufferInfo(this.mediaBuffer, e), i = r && r.len > .5;
                        i && this.reduceMaxBufferLength(r.len);
                        var n = !i;
                        return n && this.warn("Buffer full error while media.currentTime is not buffered, flush " + e + " buffer"), t.frag && (this.fragmentTracker.removeFragment(t.frag), this.nextLoadPosition = t.frag.start), this.resetLoadingState(), n
                    }
                    return !1
                }, r.resetFragmentErrors = function (t) {
                    t === ve && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== Gr && (this.state = Kr)
                }, r.afterBufferFlushed = function (t, e, r) {
                    if (t) {
                        var i = Ir.getBuffered(t);
                        this.fragmentTracker.detectEvictedFragments(e, i, r), this.state === Xr && this.resetLoadingState()
                    }
                }, r.resetLoadingState = function () {
                    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = Kr
                }, r.resetStartWhenNotLoaded = function (t) {
                    if (!this.loadedmetadata) {
                        this.startFragRequested = !1;
                        var e = this.levels ? this.levels[t].details : null;
                        null != e && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
                    }
                }, r.resetWhenMissingContext = function (t) {
                    var e;
                    this.warn("The loading context changed while buffering fragment " + t.sn + " of level " + t.level + ". This chunk will not be buffered."), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(null != (e = this.levelLastLoaded) ? e : t.level), this.resetLoadingState()
                }, r.removeUnbufferedFrags = function (t) {
                    void 0 === t && (t = 0), this.fragmentTracker.removeFragmentsInRange(t, 1 / 0, this.playlistType, !1, !0)
                }, r.updateLevelTiming = function (t, e, r, i) {
                    var n, a = this, s = r.details;
                    if (s) {
                        if (Object.keys(t.elementaryStreams).reduce((function (e, n) {
                            var o = t.elementaryStreams[n];
                            if (o) {
                                var l = o.endPTS - o.startPTS;
                                if (l <= 0) return a.warn("Could not parse fragment " + t.sn + " " + n + " duration reliably (" + l + ")"), e || !1;
                                var u = i ? 0 : Be(s, t, o.startPTS, o.endPTS, o.startDTS, o.endDTS);
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
                        }), !1)) r.fragmentError = 0; else if (null === (null == (n = this.transmuxer) ? void 0 : n.error)) {
                            var o = new Error("Found no media in fragment " + t.sn + " of level " + t.level + " resetting transmuxer to fallback to playlist timing");
                            if (0 === r.fragmentError && (r.fragmentError++, t.gap = !0, this.fragmentTracker.removeFragment(t), this.fragmentTracker.fragBuffered(t, !0)), this.warn(o.message), this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.FRAG_PARSING_ERROR,
                                fatal: !1,
                                error: o,
                                frag: t,
                                reason: "Found no media in msn " + t.sn + ' of level "' + r.url + '"'
                            }), !this.hls) return;
                            this.resetTransmuxer()
                        }
                        this.state = qr, this.hls.trigger(S.FRAG_PARSED, {frag: t, part: e})
                    } else this.warn("level.details undefined")
                }, r.resetTransmuxer = function () {
                    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                }, r.recoverWorkerError = function (t) {
                    var e, r, i;
                    "demuxerWorker" === t.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(null != (e = null != (r = this.levelLastLoaded) ? r : null == (i = this.fragCurrent) ? void 0 : i.level) ? e : 0), this.resetLoadingState())
                }, a(e, [{
                    key: "state", get: function () {
                        return this._state
                    }, set: function (t) {
                        var e = this._state;
                        e !== t && (this._state = t, this.log(e + "->" + t))
                    }
                }]), e
            }(br);

        function Zr() {
            return self.SourceBuffer || self.WebKitSourceBuffer
        }

        function ti(t, e) {
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

        var ei = function () {
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
                this.cachedData && (t = xt(this.cachedData, t), this.cachedData = null);
                var r, i = st(t, 0), n = i ? i.length : 0, a = this._audioTrack, s = this._id3Track,
                    o = i ? function (t) {
                        for (var e = dt(t), r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (ut(i)) return mt(i)
                        }
                    }(i) : void 0, l = t.length;
                for ((null === this.basePTS || 0 === this.frameIndex && E(o)) && (this.basePTS = ri(o, e, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && s.samples.push({
                    pts: this.lastPTS,
                    dts: this.lastPTS,
                    data: i,
                    type: Ae,
                    duration: Number.POSITIVE_INFINITY
                }); n < l;) {
                    if (this.canParse(t, n)) {
                        var u = this.appendFrame(a, t, n);
                        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, r = n += u.length) : n = l
                    } else lt(t, n) ? (i = st(t, n), s.samples.push({
                        pts: this.lastPTS,
                        dts: this.lastPTS,
                        data: i,
                        type: Ae,
                        duration: Number.POSITIVE_INFINITY
                    }), r = n += i.length) : n++;
                    if (n === l && r !== l) {
                        var h = rt(t, r);
                        this.cachedData ? this.cachedData = xt(this.cachedData, h) : this.cachedData = h
                    }
                }
                return {audioTrack: a, videoTrack: ti(), id3Track: s, textTrack: ti()}
            }, e.demuxSampleAes = function (t, e, r) {
                return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
            }, e.flush = function (t) {
                var e = this.cachedData;
                return e && (this.cachedData = null, this.demux(e, 0)), {
                    audioTrack: this._audioTrack,
                    videoTrack: ti(),
                    id3Track: this._id3Track,
                    textTrack: ti()
                }
            }, e.destroy = function () {
            }, t
        }(), ri = function (t, e, r) {
            return E(t) ? 90 * t : 9e4 * e + (r ? 9e4 * r.baseTime / r.timescale : 0)
        };

        function ii(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }

        function ni(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }

        function ai(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }

        function si(t, e) {
            return e + 1 < t.length && ii(t, e)
        }

        function oi(t, e) {
            if (si(t, e)) {
                var r = ni(t, e);
                if (e + r >= t.length) return !1;
                var i = ai(t, e);
                if (i <= r) return !1;
                var n = e + i;
                return n === t.length || si(t, n)
            }
            return !1
        }

        function li(t, e, r, i, n) {
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
                    t.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + d
                    })
                }(e, r, i, n);
                if (!a) return;
                t.config = a.config, t.samplerate = a.samplerate, t.channelCount = a.channelCount, t.codec = a.codec, t.manifestCodec = a.manifestCodec, w.log("parsed codec:" + t.codec + ", rate:" + a.samplerate + ", channels:" + a.channelCount)
            }
        }

        function ui(t) {
            return 9216e4 / t
        }

        function hi(t, e, r, i, n) {
            var a, s = i + n * ui(t.samplerate), o = function (t, e) {
                var r = ni(t, e);
                if (e + r <= t.length) {
                    var i = ai(t, e) - r;
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

        var di = function (t) {
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
                    for (var e = (st(t, 0) || []).length, r = t.length; e < r; e++) if (oi(t, e)) return w.log("ADTS sync word found !"), !0;
                    return !1
                }, r.canParse = function (t, e) {
                    return function (t, e) {
                        return function (t, e) {
                            return e + 5 < t.length
                        }(t, e) && ii(t, e) && ai(t, e) <= t.length - e
                    }(t, e)
                }, r.appendFrame = function (t, e, r) {
                    li(t, this.observer, e, r, t.manifestCodec);
                    var i = hi(t, e, r, this.basePTS, this.frameIndex);
                    if (i && 0 === i.missing) return i
                }, e
            }(ei), ci = /\/emsg[-/]ID3/i, fi = function () {
                function t(t, e) {
                    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
                }

                var e = t.prototype;
                return e.resetTimeStamp = function () {
                }, e.resetInitSegment = function (t, e, r, i) {
                    var n = this.videoTrack = ti("video", 1), a = this.audioTrack = ti("audio", 1),
                        s = this.txtTrack = ti("text", 1);
                    if (this.id3Track = ti("id3", 1), this.timeOffset = 0, null != t && t.byteLength) {
                        var o = Ct(t);
                        if (o.video) {
                            var l = o.video, u = l.id, h = l.timescale, d = l.codec;
                            n.id = u, n.timescale = s.timescale = h, n.codec = d
                        }
                        if (o.audio) {
                            var c = o.audio, f = c.id, g = c.timescale, v = c.codec;
                            a.id = f, a.timescale = g, a.codec = v
                        }
                        s.id = Lt.text, n.sampleDuration = 0, n.duration = a.duration = i
                    }
                }, e.resetContiguity = function () {
                    this.remainderData = null
                }, t.probe = function (t) {
                    return It(t = t.length > 16384 ? t.subarray(0, 16384) : t, ["moof"]).length > 0
                }, e.demux = function (t, e) {
                    this.timeOffset = e;
                    var r = t, i = this.videoTrack, n = this.txtTrack;
                    if (this.config.progressive) {
                        this.remainderData && (r = xt(this.remainderData, t));
                        var a = function (t) {
                            var e = {valid: null, remainder: null}, r = It(t, ["moof"]);
                            if (!r) return e;
                            if (r.length < 2) return e.remainder = t, e;
                            var i = r[r.length - 1];
                            return e.valid = rt(t, 0, i.byteOffset - 8), e.remainder = rt(t, i.byteOffset - 8), e
                        }(r);
                        this.remainderData = a.remainder, i.samples = a.valid || new Uint8Array
                    } else i.samples = r;
                    var s = this.extractID3Track(i, e);
                    return n.samples = Ft(e, i), {
                        videoTrack: i,
                        audioTrack: this.audioTrack,
                        id3Track: s,
                        textTrack: this.txtTrack
                    }
                }, e.flush = function () {
                    var t = this.timeOffset, e = this.videoTrack, r = this.txtTrack;
                    e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
                    var i = this.extractID3Track(e, this.timeOffset);
                    return r.samples = Ft(t, e), {videoTrack: e, audioTrack: ti(), id3Track: i, textTrack: ti()}
                }, e.extractID3Track = function (t, e) {
                    var r = this.id3Track;
                    if (t.samples.length) {
                        var i = It(t.samples, ["emsg"]);
                        i && i.forEach((function (t) {
                            var i = function (t) {
                                var e = t[0], r = "", i = "", n = 0, a = 0, s = 0, o = 0, l = 0, u = 0;
                                if (0 === e) {
                                    for (; "\0" !== Rt(t.subarray(u, u + 1));) r += Rt(t.subarray(u, u + 1)), u += 1;
                                    for (r += Rt(t.subarray(u, u + 1)), u += 1; "\0" !== Rt(t.subarray(u, u + 1));) i += Rt(t.subarray(u, u + 1)), u += 1;
                                    i += Rt(t.subarray(u, u + 1)), u += 1, n = kt(t, 12), a = kt(t, 16), o = kt(t, 20), l = kt(t, 24), u = 28
                                } else if (1 === e) {
                                    n = kt(t, u += 4);
                                    var h = kt(t, u += 4), d = kt(t, u += 4);
                                    for (u += 4, s = Math.pow(2, 32) * h + d, Number.isSafeInteger(s) || (s = Number.MAX_SAFE_INTEGER, w.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = kt(t, u), l = kt(t, u += 4), u += 4; "\0" !== Rt(t.subarray(u, u + 1));) r += Rt(t.subarray(u, u + 1)), u += 1;
                                    for (r += Rt(t.subarray(u, u + 1)), u += 1; "\0" !== Rt(t.subarray(u, u + 1));) i += Rt(t.subarray(u, u + 1)), u += 1;
                                    i += Rt(t.subarray(u, u + 1)), u += 1
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
                            if (ci.test(i.schemeIdUri)) {
                                var n = E(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale,
                                    a = 4294967295 === i.eventDuration ? Number.POSITIVE_INFINITY : i.eventDuration / i.timeScale;
                                a <= .001 && (a = Number.POSITIVE_INFINITY);
                                var s = i.payload;
                                r.samples.push({data: s, len: s.byteLength, dts: n, pts: n, type: be, duration: a})
                            }
                        }))
                    }
                    return r
                }, e.demuxSampleAes = function (t, e, r) {
                    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                }, e.destroy = function () {
                }, t
            }(), gi = null,
            vi = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            mi = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            pi = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], yi = [0, 1, 1, 4];

        function Ti(t, e, r, i, n) {
            if (!(r + 24 > e.length)) {
                var a = Ei(e, r);
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

        function Ei(t, e) {
            var r = t[e + 1] >> 3 & 3, i = t[e + 1] >> 1 & 3, n = t[e + 2] >> 4 & 15, a = t[e + 2] >> 2 & 3;
            if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
                var s = t[e + 2] >> 1 & 1, o = t[e + 3] >> 6,
                    l = 1e3 * vi[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + n - 1],
                    u = mi[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a], h = 3 === o ? 1 : 2, d = pi[r][i], c = yi[i],
                    f = 8 * d * c, g = Math.floor(d * l / u + s) * c;
                if (null === gi) {
                    var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    gi = v ? parseInt(v[1]) : 0
                }
                return !!gi && gi <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
                    sampleRate: u,
                    channelCount: h,
                    frameLength: g,
                    samplesPerFrame: f
                }
            }
        }

        function Si(t, e) {
            return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
        }

        function Li(t, e) {
            return e + 1 < t.length && Si(t, e)
        }

        function Ri(t, e) {
            if (e + 1 < t.length && Si(t, e)) {
                var r = Ei(t, e), i = 4;
                null != r && r.frameLength && (i = r.frameLength);
                var n = e + i;
                return n === t.length || Li(t, n)
            }
            return !1
        }

        var Ai = function () {
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
                var y = u(), T = u(), E = l(1);
                0 === E && d(1), d(1), h() && (i = u(), n = u(), a = u(), s = u());
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
                    height: (2 - E) * (T + 1) * 16 - (E ? 2 : 4) * (a + s),
                    pixelRatio: S
                }
            }, e.readSliceType = function () {
                return this.readUByte(), this.readUEG(), this.readUEG()
            }, t
        }(), ki = function () {
            function t(t, e, r) {
                this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new Ur(e, {removePKCS7Padding: !1})
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
                var a = this, s = Nt(n.data), o = this.getAvcEncryptedData(s);
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
        }(), bi = 188, Di = function () {
            function t(t, e, r) {
                this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = r
            }

            t.probe = function (e) {
                var r = t.syncOffset(e);
                return r > 0 && w.warn("MPEG2-TS detected but first sync word found @ offset " + r), -1 !== r
            }, t.syncOffset = function (t) {
                for (var e = t.length, r = Math.min(940, t.length - bi) + 1, i = 0; i < r;) {
                    for (var n = !1, a = -1, s = 0, o = i; o < e; o += bi) {
                        if (71 !== t[o]) {
                            if (s) return -1;
                            break
                        }
                        if (s++, -1 === a && 0 !== (a = o) && (r = Math.min(a + 18612, t.length - bi) + 1), n || (n = 0 === wi(t, o)), n && s > 1 && (0 === a && s > 2 || o + bi > r)) return a
                    }
                    i++
                }
                return -1
            }, t.createTrack = function (t, e) {
                return {
                    container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                    type: t,
                    id: Lt[t],
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
                this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video"), this._audioTrack = t.createTrack("audio", n), this._id3Track = t.createTrack("id3"), this._txtTrack = t.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = r, this.videoCodec = i, this._duration = n
            }, e.resetTimeStamp = function () {
            }, e.resetContiguity = function () {
                var t = this._audioTrack, e = this._avcTrack, r = this._id3Track;
                t && (t.pesData = null), e && (e.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null
            }, e.demux = function (e, r, i, n) {
                var a;
                void 0 === i && (i = !1), void 0 === n && (n = !1), i || (this.sampleAes = null);
                var s = this._avcTrack, o = this._audioTrack, l = this._id3Track, u = this._txtTrack, h = s.pid,
                    d = s.pesData, c = o.pid, f = l.pid, g = o.pesData, v = l.pesData, m = null, p = this.pmtParsed,
                    y = this._pmtId, T = e.length;
                if (this.remainderData && (T = (e = xt(this.remainderData, e)).length, this.remainderData = null), T < bi && !n) return this.remainderData = e, {
                    audioTrack: o,
                    videoTrack: s,
                    id3Track: l,
                    textTrack: u
                };
                var E = Math.max(0, t.syncOffset(e));
                (T -= (T - E) % bi) < e.byteLength && !n && (this.remainderData = new Uint8Array(e.buffer, T, e.buffer.byteLength - T));
                for (var A = 0, k = E; k < T; k += bi) if (71 === e[k]) {
                    var b = !!(64 & e[k + 1]), D = wi(e, k), I = void 0;
                    if ((48 & e[k + 3]) >> 4 > 1) {
                        if ((I = k + 5 + e[k + 4]) === k + bi) continue
                    } else I = k + 4;
                    switch (D) {
                        case h:
                            b && (d && (a = Pi(d)) && this.parseAVCPES(s, u, a, !1), d = {
                                data: [],
                                size: 0
                            }), d && (d.data.push(e.subarray(I, k + bi)), d.size += k + bi - I);
                            break;
                        case c:
                            if (b) {
                                if (g && (a = Pi(g))) switch (o.segmentCodec) {
                                    case"aac":
                                        this.parseAACPES(o, a);
                                        break;
                                    case"mp3":
                                        this.parseMPEGPES(o, a)
                                }
                                g = {data: [], size: 0}
                            }
                            g && (g.data.push(e.subarray(I, k + bi)), g.size += k + bi - I);
                            break;
                        case f:
                            b && (v && (a = Pi(v)) && this.parseID3PES(l, a), v = {
                                data: [],
                                size: 0
                            }), v && (v.data.push(e.subarray(I, k + bi)), v.size += k + bi - I);
                            break;
                        case 0:
                            b && (I += e[I] + 1), y = this._pmtId = Ci(e, I);
                            break;
                        case y:
                            b && (I += e[I] + 1);
                            var C = _i(e, I, this.typeSupported, i);
                            (h = C.avc) > 0 && (s.pid = h), (c = C.audio) > 0 && (o.pid = c, o.segmentCodec = C.segmentCodec), (f = C.id3) > 0 && (l.pid = f), null === m || p || (w.warn("MPEG-TS PMT found at " + k + " after unknown PID '" + m + "'. Backtracking to sync byte @" + E + " to parse all TS packets."), m = null, k = E - 188), p = this.pmtParsed = !0;
                            break;
                        case 17:
                        case 8191:
                            break;
                        default:
                            m = D
                    }
                } else A++;
                if (A > 0) {
                    var _ = new Error("Found " + A + " TS packet/s that do not start with 0x47");
                    this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.FRAG_PARSING_ERROR,
                        fatal: !1,
                        error: _,
                        reason: _.message
                    })
                }
                s.pesData = d, o.pesData = g, l.pesData = v;
                var P = {audioTrack: o, videoTrack: s, id3Track: l, textTrack: u};
                return n && this.extractRemainingSamples(P), P
            }, e.flush = function () {
                var t, e = this.remainderData;
                return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                    videoTrack: this._avcTrack,
                    audioTrack: this._audioTrack,
                    id3Track: this._id3Track,
                    textTrack: this._txtTrack
                }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
            }, e.extractRemainingSamples = function (t) {
                var e, r = t.audioTrack, i = t.videoTrack, n = t.id3Track, a = t.textTrack, s = i.pesData,
                    o = r.pesData, l = n.pesData;
                if (s && (e = Pi(s)) ? (this.parseAVCPES(i, a, e, !0), i.pesData = null) : i.pesData = s, o && (e = Pi(o))) {
                    switch (r.segmentCodec) {
                        case"aac":
                            this.parseAACPES(r, e);
                            break;
                        case"mp3":
                            this.parseMPEGPES(r, e)
                    }
                    r.pesData = null
                } else null != o && o.size && w.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = o;
                l && (e = Pi(l)) ? (this.parseID3PES(n, e), n.pesData = null) : n.pesData = l
            }, e.demuxSampleAes = function (t, e, r) {
                var i = this.demux(t, r, !0, !this.config.progressive),
                    n = this.sampleAes = new ki(this.observer, this.config, e);
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
            }, e.parseAVCPES = function (t, e, r, i) {
                var n, a = this, s = this.parseAVCNALu(t, r.data), o = this.avcSample, l = !1;
                r.data = null, o && s.length && !t.audFound && (xi(o, t), o = this.avcSample = Ii(!1, r.pts, r.dts, "")), s.forEach((function (i) {
                    var s;
                    switch (i.type) {
                        case 1:
                            var u = !1;
                            n = !0;
                            var h, d = i.data;
                            if (l && d.length > 4) {
                                var c = new Ai(d).readSliceType();
                                2 !== c && 4 !== c && 7 !== c && 9 !== c || (u = !0)
                            }
                            u && null != (h = o) && h.frame && !o.key && (xi(o, t), o = a.avcSample = null), o || (o = a.avcSample = Ii(!0, r.pts, r.dts, "")), o.frame = !0, o.key = u;
                            break;
                        case 5:
                            n = !0, null != (s = o) && s.frame && !o.key && (xi(o, t), o = a.avcSample = null), o || (o = a.avcSample = Ii(!0, r.pts, r.dts, "")), o.key = !0, o.frame = !0;
                            break;
                        case 6:
                            n = !0, Ot(i.data, 1, r.pts, e.samples);
                            break;
                        case 7:
                            if (n = !0, l = !0, !t.sps) {
                                var f = i.data, g = new Ai(f).readSPS();
                                t.width = g.width, t.height = g.height, t.pixelRatio = g.pixelRatio, t.sps = [f], t.duration = a._duration;
                                for (var v = f.subarray(1, 4), m = "avc1.", p = 0; p < 3; p++) {
                                    var y = v[p].toString(16);
                                    y.length < 2 && (y = "0" + y), m += y
                                }
                                t.codec = m
                            }
                            break;
                        case 8:
                            n = !0, t.pps || (t.pps = [i.data]);
                            break;
                        case 9:
                            n = !1, t.audFound = !0, o && xi(o, t), o = a.avcSample = Ii(!1, r.pts, r.dts, "");
                            break;
                        case 12:
                            n = !0;
                            break;
                        default:
                            n = !1, o && (o.debug += "unknown NAL " + i.type + " ")
                    }
                    o && n && o.units.push(i)
                })), i && o && (xi(o, t), this.avcSample = null)
            }, e.getLastNalUnit = function (t) {
                var e, r, i = this.avcSample;
                if (i && 0 !== i.units.length || (i = t[t.length - 1]), null != (e = i) && e.units) {
                    var n = i.units;
                    r = n[n.length - 1]
                }
                return r
            }, e.parseAVCNALu = function (t, e) {
                var r, i, n = e.byteLength, a = t.naluState || 0, s = a, o = [], l = 0, u = -1, h = 0;
                for (-1 === a && (u = 0, h = 31 & e[0], a = 0, l = 1); l < n;) if (r = e[l++], a) if (1 !== a) if (r) if (1 === r) {
                    if (u >= 0) {
                        var d = {data: e.subarray(u, l - a - 1), type: h};
                        o.push(d)
                    } else {
                        var c = this.getLastNalUnit(t.samples);
                        if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (i = l - a - 1) > 0)) {
                            var f = new Uint8Array(c.data.byteLength + i);
                            f.set(c.data, 0), f.set(e.subarray(0, i), c.data.byteLength), c.data = f, c.state = 0
                        }
                    }
                    l < n ? (u = l, h = 31 & e[l], a = 0) : a = -1
                } else a = 0; else a = 3; else a = r ? 0 : 2; else a = r ? 0 : 1;
                if (u >= 0 && a >= 0) {
                    var g = {data: e.subarray(u, n), type: h, state: a};
                    o.push(g)
                }
                if (0 === o.length) {
                    var v = this.getLastNalUnit(t.samples);
                    if (v) {
                        var m = new Uint8Array(v.data.byteLength + e.byteLength);
                        m.set(v.data, 0), m.set(e, v.data.byteLength), v.data = m
                    }
                }
                return t.naluState = a, o
            }, e.parseAACPES = function (t, e) {
                var r, i, n, a = 0, s = this.aacOverFlow, o = e.data;
                if (s) {
                    this.aacOverFlow = null;
                    var l = s.missing, u = s.sample.unit.byteLength;
                    if (-1 === l) {
                        var h = new Uint8Array(u + o.byteLength);
                        h.set(s.sample.unit, 0), h.set(o, u), o = h
                    } else {
                        var d = u - l;
                        s.sample.unit.set(o.subarray(0, l), d), t.samples.push(s.sample), a = s.missing
                    }
                }
                for (r = a, i = o.length; r < i - 1 && !si(o, r); r++) ;
                if (r !== a) {
                    var c, f = r < i - 1;
                    c = f ? "AAC PES did not start with ADTS header,offset:" + r : "No ADTS header found in AAC PES";
                    var g = new Error(c);
                    if (w.warn("parsing error: " + c), this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.FRAG_PARSING_ERROR,
                        fatal: !1,
                        levelRetry: f,
                        error: g,
                        reason: c
                    }), !f) return
                }
                if (li(t, this.observer, o, r, this.audioCodec), void 0 !== e.pts) n = e.pts; else {
                    if (!s) return void w.warn("[tsdemuxer]: AAC PES unknown PTS");
                    var v = ui(t.samplerate);
                    n = s.sample.pts + v
                }
                for (var m, p = 0; r < i;) {
                    if (r += (m = hi(t, o, r, n, p)).length, m.missing) {
                        this.aacOverFlow = m;
                        break
                    }
                    for (p++; r < i - 1 && !si(o, r); r++) ;
                }
            }, e.parseMPEGPES = function (t, e) {
                var r = e.data, i = r.length, n = 0, a = 0, s = e.pts;
                if (void 0 !== s) for (; a < i;) if (Li(r, a)) {
                    var o = Ti(t, r, a, s, n);
                    if (!o) break;
                    a += o.length, n++
                } else a++; else w.warn("[tsdemuxer]: MPEG PES unknown PTS")
            }, e.parseID3PES = function (t, e) {
                if (void 0 !== e.pts) {
                    var r = o({}, e, {type: this._avcTrack ? be : Ae, duration: Number.POSITIVE_INFINITY});
                    t.samples.push(r)
                } else w.warn("[tsdemuxer]: ID3 PES unknown PTS")
            }, t
        }();

        function Ii(t, e, r, i) {
            return {key: t, frame: !1, pts: e, dts: r, units: [], debug: i, length: 0}
        }

        function wi(t, e) {
            return ((31 & t[e + 1]) << 8) + t[e + 2]
        }

        function Ci(t, e) {
            return (31 & t[e + 10]) << 8 | t[e + 11]
        }

        function _i(t, e, r, i) {
            var n = {audio: -1, avc: -1, id3: -1, segmentCodec: "aac"},
                a = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
            for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < a;) {
                var s = wi(t, e);
                switch (t[e]) {
                    case 207:
                        if (!i) {
                            w.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                            break
                        }
                    case 15:
                        -1 === n.audio && (n.audio = s);
                        break;
                    case 21:
                        -1 === n.id3 && (n.id3 = s);
                        break;
                    case 219:
                        if (!i) {
                            w.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                            break
                        }
                    case 27:
                        -1 === n.avc && (n.avc = s);
                        break;
                    case 3:
                    case 4:
                        !0 !== r.mpeg && !0 !== r.mp3 ? w.log("MPEG audio found, not supported in this browser") : -1 === n.audio && (n.audio = s, n.segmentCodec = "mp3");
                        break;
                    case 36:
                        w.warn("Unsupported HEVC stream type found")
                }
                e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
            }
            return n
        }

        function Pi(t) {
            var e, r, i, n, a, s = 0, o = t.data;
            if (!t || 0 === t.size) return null;
            for (; o[0].length < 19 && o.length > 1;) {
                var l = new Uint8Array(o[0].length + o[1].length);
                l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
            }
            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
                var u = e[7];
                192 & u && (n = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? n - (a = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (w.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"), n = a) : a = n);
                var h = (i = e[8]) + 9;
                if (t.size <= h) return null;
                t.size -= h;
                for (var d = new Uint8Array(t.size), c = 0, f = o.length; c < f; c++) {
                    var g = (e = o[c]).byteLength;
                    if (h) {
                        if (h > g) {
                            h -= g;
                            continue
                        }
                        e = e.subarray(h), g -= h, h = 0
                    }
                    d.set(e, s), s += g
                }
                return r && (r -= i + 3), {data: d, pts: n, dts: a, len: r}
            }
            return null
        }

        function xi(t, e) {
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
        }

        var Fi = function (t) {
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
                for (var e = (st(t, 0) || []).length, r = t.length; e < r; e++) if (Ri(t, e)) return w.log("MPEG Audio sync word found !"), !0;
                return !1
            }, r.canParse = function (t, e) {
                return function (t, e) {
                    return Si(t, e) && 4 <= t.length - e
                }(t, e)
            }, r.appendFrame = function (t, e, r) {
                if (null !== this.basePTS) return Ti(t, e, r, this.basePTS, this.frameIndex)
            }, e
        }(ei), Mi = function () {
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
        }(), Oi = Math.pow(2, 32) - 1, Ni = function () {
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
                var i = Math.floor(r / (Oi + 1)), n = Math.floor(r % (Oi + 1));
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
                var i = Math.floor(r / (Oi + 1)), n = Math.floor(r % (Oi + 1)),
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
            }, t.mp4a = function (e) {
                var r = e.samplerate;
                return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
            }, t.mp3 = function (e) {
                var r = e.samplerate;
                return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
            }, t.stsd = function (e) {
                return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
            }, t.tkhd = function (e) {
                var r = e.id, i = e.duration * e.timescale, n = e.width, a = e.height, s = Math.floor(i / (Oi + 1)),
                    o = Math.floor(i % (Oi + 1));
                return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
            }, t.traf = function (e, r) {
                var i = t.sdtp(e), n = e.id, a = Math.floor(r / (Oi + 1)), s = Math.floor(r % (Oi + 1));
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
                var r = t.moov(e), i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
            }, t
        }();

        function Ui(t, e, r, i) {
            void 0 === r && (r = 1), void 0 === i && (i = !1);
            var n = t * e * r;
            return i ? Math.round(n) : n
        }

        function Bi(t, e) {
            return void 0 === e && (e = !1), Ui(t, 1e3, 1 / 9e4, e)
        }

        Ni.types = void 0, Ni.HDLR_TYPES = void 0, Ni.STTS = void 0, Ni.STSC = void 0, Ni.STCO = void 0, Ni.STSZ = void 0, Ni.VMHD = void 0, Ni.SMHD = void 0, Ni.STSD = void 0, Ni.FTYP = void 0, Ni.DINF = void 0;
        var Gi = null, Ki = null, Hi = function () {
            function t(t, e, r, i) {
                if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === Gi) {
                    var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                    Gi = n ? parseInt(n[1]) : 0
                }
                if (null === Ki) {
                    var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                    Ki = a ? parseInt(a[1]) : 0
                }
            }

            var e = t.prototype;
            return e.destroy = function () {
            }, e.resetTimeStamp = function (t) {
                w.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
            }, e.resetNextTimestamp = function () {
                w.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
            }, e.resetInitSegment = function () {
                w.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
            }, e.getVideoStartPts = function (t) {
                var e = !1, r = t.reduce((function (t, r) {
                    var i = r.pts - t;
                    return i < -4294967296 ? (e = !0, Vi(t, r.pts)) : i > 0 ? t : r.pts
                }), t[0].pts);
                return e && w.debug("PTS rollover detected"), r
            }, e.remux = function (t, e, r, i, n, a, s, o) {
                var l, u, h, d, c, f, g = n, v = n, m = t.pid > -1, p = e.pid > -1, y = e.samples.length,
                    T = t.samples.length > 0, E = s && y > 0 || y > 1;
                if ((!m || T) && (!p || E) || this.ISGenerated || s) {
                    this.ISGenerated || (h = this.generateIS(t, e, n, a));
                    var S, L = this.isVideoContiguous, R = -1;
                    if (E && (R = function (t) {
                        for (var e = 0; e < t.length; e++) if (t[e].key) return e;
                        return -1
                    }(e.samples), !L && this.config.forceKeyFrameOnDiscontinuity)) if (f = !0, R > 0) {
                        w.warn("[mp4-remuxer]: Dropped " + R + " out of " + y + " video samples due to a missing keyframe");
                        var A = this.getVideoStartPts(e.samples);
                        e.samples = e.samples.slice(R), e.dropped += R, S = v += (e.samples[0].pts - A) / e.inputTimeScale
                    } else -1 === R && (w.warn("[mp4-remuxer]: No keyframe found out of " + y + " video samples"), f = !1);
                    if (this.ISGenerated) {
                        if (T && E) {
                            var k = this.getVideoStartPts(e.samples),
                                b = (Vi(t.samples[0].pts, k) - k) / e.inputTimeScale;
                            g += Math.max(0, b), v += Math.max(0, -b)
                        }
                        if (T) {
                            if (t.samplerate || (w.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(t, e, n, a)), u = this.remuxAudio(t, g, this.isAudioContiguous, a, p || E || o === ve ? v : void 0), E) {
                                var D = u ? u.endPTS - u.startPTS : 0;
                                e.inputTimeScale || (w.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(t, e, n, a)), l = this.remuxVideo(e, v, L, D)
                            }
                        } else E && (l = this.remuxVideo(e, v, L, 0));
                        l && (l.firstKeyFrame = R, l.independent = -1 !== R, l.firstKeyFramePTS = S)
                    }
                }
                return this.ISGenerated && this._initPTS && this._initDTS && (r.samples.length && (c = Yi(r, n, this._initPTS, this._initDTS)), i.samples.length && (d = Wi(i, n, this._initPTS))), {
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
                if (c && (n = a = 1 / 0), t.config && o.length && (t.timescale = t.samplerate, "mp3" === t.segmentCodec && (u.mpeg ? (f = "audio/mpeg", t.codec = "") : u.mp3 && (t.codec = "mp3")), h.audio = {
                    id: "audio",
                    container: f,
                    codec: t.codec,
                    initSegment: "mp3" === t.segmentCodec && u.mpeg ? new Uint8Array(0) : Ni.initSegment([t]),
                    metadata: {channelCount: t.channelCount}
                }, c && (s = t.inputTimeScale, d && s === d.timescale ? c = !1 : n = a = o[0].pts - Math.round(s * r))), e.sps && e.pps && l.length && (e.timescale = e.inputTimeScale, h.video = {
                    id: "main",
                    container: "video/mp4",
                    codec: e.codec,
                    initSegment: Ni.initSegment([e]),
                    metadata: {width: e.width, height: e.height}
                }, c)) if (s = e.inputTimeScale, d && s === d.timescale) c = !1; else {
                    var g = this.getVideoStartPts(l), v = Math.round(s * r);
                    a = Math.min(a, Vi(l[0].dts, g) - v), n = Math.min(n, g - v)
                }
                if (Object.keys(h).length) return this.ISGenerated = !0, c ? (this._initPTS = {
                    baseTime: n,
                    timescale: s
                }, this._initDTS = {baseTime: a, timescale: s}) : n = s = void 0, {tracks: h, initPTS: n, timescale: s}
            }, e.remuxVideo = function (t, e, r, i) {
                var n, a, s = t.inputTimeScale, l = t.samples, u = [], h = l.length, d = this._initPTS,
                    c = this.nextAvcDts, f = 8, g = this.videoSampleDuration, v = Number.POSITIVE_INFINITY,
                    m = Number.NEGATIVE_INFINITY, p = !1;
                r && null !== c || (c = e * s - (l[0].pts - Vi(l[0].dts, l[0].pts)));
                for (var y = d.baseTime * s / d.timescale, T = 0; T < h; T++) {
                    var E = l[T];
                    E.pts = Vi(E.pts - y, c), E.dts = Vi(E.dts - y, c), E.dts < l[T > 0 ? T - 1 : T].dts && (p = !0)
                }
                p && l.sort((function (t, e) {
                    var r = t.dts - e.dts, i = t.pts - e.pts;
                    return r || i
                })), n = l[0].dts;
                var A = (a = l[l.length - 1].dts) - n, k = A ? Math.round(A / (h - 1)) : g || t.inputTimeScale / 30;
                if (r) {
                    var b = n - c, D = b > k, I = b < -1;
                    if ((D || I) && (D ? w.warn("AVC: " + Bi(b, !0) + " ms (" + b + "dts) hole between fragments detected, filling it") : w.warn("AVC: " + Bi(-b, !0) + " ms (" + b + "dts) overlapping between fragments detected"), !I || c >= l[0].pts)) {
                        n = c;
                        var C = l[0].pts - b;
                        l[0].dts = n, l[0].pts = C, w.log("Video: First PTS/DTS adjusted: " + Bi(C, !0) + "/" + Bi(n, !0) + ", delta: " + Bi(b, !0) + " ms")
                    }
                }
                n = Math.max(0, n);
                for (var _ = 0, P = 0, x = 0; x < h; x++) {
                    for (var F = l[x], M = F.units, O = M.length, N = 0, U = 0; U < O; U++) N += M[U].data.length;
                    P += N, _ += O, F.length = N, F.dts = Math.max(F.dts, n), v = Math.min(F.pts, v), m = Math.max(F.pts, m)
                }
                a = l[h - 1].dts;
                var B, G = P + 4 * _ + 8;
                try {
                    B = new Uint8Array(G)
                } catch (t) {
                    return void this.observer.emit(S.ERROR, S.ERROR, {
                        type: L.MUX_ERROR,
                        details: R.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        error: t,
                        bytes: G,
                        reason: "fail allocating video mdat " + G
                    })
                }
                var K = new DataView(B.buffer);
                K.setUint32(0, G), B.set(Ni.types.mdat, 4);
                for (var H = !1, V = Number.POSITIVE_INFINITY, Y = Number.POSITIVE_INFINITY, W = Number.NEGATIVE_INFINITY, j = Number.NEGATIVE_INFINITY, q = 0; q < h; q++) {
                    for (var X = l[q], z = X.units, Q = 0, $ = 0, J = z.length; $ < J; $++) {
                        var Z = z[$], tt = Z.data, et = Z.data.byteLength;
                        K.setUint32(f, et), f += 4, B.set(tt, f), f += et, Q += 4 + et
                    }
                    var rt = void 0;
                    if (q < h - 1) g = l[q + 1].dts - X.dts, rt = l[q + 1].pts - X.pts; else {
                        var it = this.config, nt = q > 0 ? X.dts - l[q - 1].dts : k;
                        if (rt = q > 0 ? X.pts - l[q - 1].pts : k, it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                            var at = Math.floor(it.maxBufferHole * s), st = (i ? v + i * s : this.nextAudioPts) - X.pts;
                            st > at ? ((g = st - nt) < 0 ? g = nt : H = !0, w.log("[mp4-remuxer]: It is approximately " + st / 90 + " ms to the next segment; using duration " + g / 90 + " ms for the last video frame.")) : g = nt
                        } else g = nt
                    }
                    var ot = Math.round(X.pts - X.dts);
                    V = Math.min(V, g), W = Math.max(W, g), Y = Math.min(Y, rt), j = Math.max(j, rt), u.push(new qi(X.key, g, Q, ot))
                }
                if (u.length) if (Gi) {
                    if (Gi < 70) {
                        var lt = u[0].flags;
                        lt.dependsOn = 2, lt.isNonSync = 0
                    }
                } else if (Ki && j - Y < W - V && k / W < .025 && 0 === u[0].cts) {
                    w.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                    for (var ut = n, ht = 0, dt = u.length; ht < dt; ht++) {
                        var ct = ut + u[ht].duration, ft = ut + u[ht].cts;
                        if (ht < dt - 1) {
                            var gt = ct + u[ht + 1].cts;
                            u[ht].duration = gt - ft
                        } else u[ht].duration = ht ? u[ht - 1].duration : k;
                        u[ht].cts = 0, ut = ct
                    }
                }
                g = H || !g ? k : g, this.nextAvcDts = c = a + g, this.videoSampleDuration = g, this.isVideoContiguous = !0;
                var vt = {
                    data1: Ni.moof(t.sequenceNumber++, n, o({}, t, {samples: u})),
                    data2: B,
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
                return t.samples = [], t.dropped = 0, vt
            }, e.remuxAudio = function (t, e, r, i, n) {
                var a = t.inputTimeScale, s = a / (t.samplerate ? t.samplerate : a),
                    l = "aac" === t.segmentCodec ? 1024 : 1152, u = l * s, h = this._initPTS,
                    d = "mp3" === t.segmentCodec && this.typeSupported.mpeg, c = [], f = void 0 !== n, g = t.samples,
                    v = d ? 0 : 8, m = this.nextAudioPts || -1, p = e * a, y = h.baseTime * a / h.timescale;
                if (this.isAudioContiguous = r = r || g.length && m > 0 && (i && Math.abs(p - m) < 9e3 || Math.abs(Vi(g[0].pts - y, p) - m) < 20 * u), g.forEach((function (t) {
                    t.pts = Vi(t.pts - y, p)
                })), !r || m < 0) {
                    if (g = g.filter((function (t) {
                        return t.pts >= 0
                    })), !g.length) return;
                    m = 0 === n ? 0 : i && !f ? Math.max(0, p) : g[0].pts
                }
                if ("aac" === t.segmentCodec) for (var T = this.config.maxAudioFramesDrift, E = 0, A = m; E < g.length; E++) {
                    var k = g[E], b = k.pts, D = b - A, I = Math.abs(1e3 * D / a);
                    if (D <= -T * u && f) 0 === E && (w.warn("Audio frame @ " + (b / a).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * D / a) + " ms."), this.nextAudioPts = m = A = b); else if (D >= T * u && I < 1e4 && f) {
                        var C = Math.round(D / u);
                        (A = b - C * u) < 0 && (C--, A += u), 0 === E && (this.nextAudioPts = m = A), w.warn("[mp4-remuxer]: Injecting " + C + " audio frame @ " + (A / a).toFixed(3) + "s due to " + Math.round(1e3 * D / a) + " ms gap.");
                        for (var _ = 0; _ < C; _++) {
                            var P = Math.max(A, 0), x = Mi.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                            x || (w.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), x = k.unit.subarray()), g.splice(E, 0, {
                                unit: x,
                                pts: P
                            }), A += u, E++
                        }
                    }
                    k.pts = A, A += u
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
                                details: R.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                error: t,
                                bytes: N,
                                reason: "fail allocating audio mdat " + N
                            })
                        }
                        d || (new DataView(F.buffer).setUint32(0, N), F.set(Ni.types.mdat, 4))
                    }
                    F.set(H, v);
                    var Y = H.byteLength;
                    v += Y, c.push(new qi(!0, l, Y, 0)), O = V
                }
                var W = c.length;
                if (W) {
                    var j = c[c.length - 1];
                    this.nextAudioPts = m = O + s * j.duration;
                    var q = d ? new Uint8Array(0) : Ni.moof(t.sequenceNumber++, M / s, o({}, t, {samples: c}));
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
                    f = Mi.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
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

        function Vi(t, e) {
            var r;
            if (null === e) return t;
            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
            return t
        }

        function Yi(t, e, r, i) {
            var n = t.samples.length;
            if (n) {
                for (var a = t.inputTimeScale, s = 0; s < n; s++) {
                    var o = t.samples[s];
                    o.pts = Vi(o.pts - r.baseTime * a / r.timescale, e * a) / a, o.dts = Vi(o.dts - i.baseTime * a / i.timescale, e * a) / a
                }
                var l = t.samples;
                return t.samples = [], {samples: l}
            }
        }

        function Wi(t, e, r) {
            var i = t.samples.length;
            if (i) {
                for (var n = t.inputTimeScale, a = 0; a < i; a++) {
                    var s = t.samples[a];
                    s.pts = Vi(s.pts - r.baseTime * n / r.timescale, e * n) / n
                }
                t.samples.sort((function (t, e) {
                    return t.pts - e.pts
                }));
                var o = t.samples;
                return t.samples = [], {samples: o}
            }
        }

        var ji, qi = function (t, e, r, i) {
            this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = r, this.cts = i, this.flags = new Xi(t)
        }, Xi = function (t) {
            this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
        }, zi = function () {
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
                    return r && e.isCommonEncryption && It(t, ["moov", "trak"]).forEach((function (t) {
                        var e = It(t, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8), i = It(e, ["enca"]),
                            n = i.length > 0;
                        n || (i = It(e, ["encv"])), i.forEach((function (t) {
                            It(n ? t.subarray(28) : t.subarray(78), ["sinf"]).forEach((function (t) {
                                var e = _t(t);
                                if (e) {
                                    var i = e.subarray(8, 24);
                                    i.some((function (t) {
                                        return 0 !== t
                                    })) || (w.log("[eme] Patching keyId in 'enc" + (n ? "a" : "v") + ">sinf>>tenc' box: " + Tt(i) + " -> " + Tt(r)), e.set(r, 8))
                                }
                            }))
                        }))
                    })), t
                }(t, i)), this.emitInitSegment = !0
            }, e.generateInitSegment = function (t) {
                var e = this.audioCodec, r = this.videoCodec;
                if (null == t || !t.byteLength) return this.initTracks = void 0, void (this.initData = void 0);
                var i = this.initData = Ct(t);
                e || (e = Qi(i.audio, O)), r || (r = Qi(i.video, N));
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
                E(u) || (u = this.lastEndTime = n || 0);
                var d = e.samples;
                if (null == d || !d.length) return h;
                var c = {initPTS: void 0, timescale: 1}, f = this.initData;
                if (null != (s = f) && s.length || (this.generateInitSegment(d), f = this.initData), null == (o = f) || !o.length) return w.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
                this.emitInitSegment && (c.tracks = this.initTracks, this.emitInitSegment = !1);
                var g = function (t, e) {
                    for (var r = 0, i = 0, n = 0, a = It(t, ["moof", "traf"]), s = 0; s < a.length; s++) {
                        var o = a[s], l = It(o, ["tfhd"])[0], u = e[kt(l, 4)];
                        if (u) {
                            var h = u.default, d = kt(l, 0) | (null == h ? void 0 : h.flags),
                                c = null == h ? void 0 : h.duration;
                            8 & d && (c = kt(l, 2 & d ? 12 : 8));
                            for (var f = u.timescale || 9e4, g = It(o, ["trun"]), v = 0; v < g.length; v++) !(r = Pt(g[v])) && c && (r = c * kt(g[v], 4)), u.type === N ? i += r / f : u.type === O && (n += r / f)
                        }
                    }
                    if (0 === i && 0 === n) {
                        for (var m = 0, p = It(t, ["sidx"]), y = 0; y < p.length; y++) {
                            var T = wt(p[y]);
                            null != T && T.references && (m += T.references.reduce((function (t, e) {
                                return t + e.info.duration || 0
                            }), 0))
                        }
                        return m
                    }
                    return i || n
                }(d, f), v = function (t, e) {
                    return It(e, ["moof", "traf"]).reduce((function (e, r) {
                        var i = It(r, ["tfdt"])[0], n = i[0], a = It(r, ["tfhd"]).reduce((function (e, r) {
                            var a = kt(r, 4), s = t[a];
                            if (s) {
                                var o = kt(i, 4);
                                if (1 === n) {
                                    if (o === Et) return w.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), e;
                                    o *= Et + 1, o += kt(i, 8)
                                }
                                var l = o / (s.timescale || 9e4);
                                if (isFinite(l) && (null === e || l < e)) return l
                            }
                            return e
                        }), null);
                        return null !== a && isFinite(a) && (null === e || a < e) ? a : e
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
                var p = t ? m - l.baseTime / l.timescale : u, y = p + g;
                !function (t, e, r) {
                    It(e, ["moof", "traf"]).forEach((function (e) {
                        It(e, ["tfhd"]).forEach((function (i) {
                            var n = kt(i, 4), a = t[n];
                            if (a) {
                                var s = a.timescale || 9e4;
                                It(e, ["tfdt"]).forEach((function (t) {
                                    var e = t[0], i = kt(t, 4);
                                    if (0 === e) i -= r * s, Dt(t, 4, i = Math.max(i, 0)); else {
                                        i *= Math.pow(2, 32), i += kt(t, 8), i -= r * s, i = Math.max(i, 0);
                                        var n = Math.floor(i / (Et + 1)), a = Math.floor(i % (Et + 1));
                                        Dt(t, 4, n), Dt(t, 8, a)
                                    }
                                }))
                            }
                        }))
                    }))
                }(f, d, l.baseTime / l.timescale), g > 0 ? this.lastEndTime = y : (w.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                var T = !!f.audio, S = !!f.video, L = "";
                T && (L += "audio"), S && (L += "video");
                var R = {
                    data1: d,
                    startPTS: p,
                    startDTS: p,
                    endPTS: y,
                    endDTS: y,
                    type: L,
                    hasAudio: T,
                    hasVideo: S,
                    nb: 1,
                    dropped: 0
                };
                return h.audio = "audio" === R.type ? R : void 0, h.video = "audio" !== R.type ? R : void 0, h.initSegment = c, h.id3 = Yi(r, n, l, l), i.samples.length && (h.text = Wi(i, n, l)), h
            }, t
        }();

        function Qi(t, e) {
            var r = null == t ? void 0 : t.codec;
            return r && r.length > 4 ? r : "hvc1" === r || "hev1" === r ? "hvc1.1.6.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || e === N ? "avc1.42e01e" : "mp4a.40.5"
        }

        try {
            ji = self.performance.now.bind(self.performance)
        } catch (t) {
            w.debug("Unable to use Performance API on this environment"), ji = "undefined" != typeof self && self.Date.now
        }
        var $i = [{demux: fi, remux: zi}, {demux: Di, remux: Hi}, {demux: di, remux: Hi}, {demux: Fi, remux: Hi}],
            Ji = function () {
                function t(t, e, r, i, n) {
                    this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = r, this.vendor = i, this.id = n
                }

                var e = t.prototype;
                return e.configure = function (t) {
                    this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
                }, e.push = function (t, e, r, i) {
                    var n = this, a = r.transmuxing;
                    a.executeStart = ji();
                    var s = new Uint8Array(t), o = this.currentTransmuxState, l = this.transmuxConfig;
                    i && (this.currentTransmuxState = i);
                    var u = i || o, h = u.contiguous, d = u.discontinuity, c = u.trackSwitch, f = u.accurateTimeOffset,
                        g = u.timeOffset, v = u.initSegmentChange, m = l.audioCodec, p = l.videoCodec,
                        y = l.defaultInitPts, T = l.duration, E = l.initSegmentData, A = function (t, e) {
                            var r = null;
                            return t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (r = e), r
                        }(s, e);
                    if (A && "AES-128" === A.method) {
                        var k = this.getDecrypter();
                        if (!k.isSync()) return this.decryptionPromise = k.webCryptoDecrypt(s, A.key.buffer, A.iv.buffer).then((function (t) {
                            var e = n.push(t, null, r);
                            return n.decryptionPromise = null, e
                        })), this.decryptionPromise;
                        var b = k.softwareDecrypt(s, A.key.buffer, A.iv.buffer);
                        if (r.part > -1 && (b = k.flush()), !b) return a.executeEnd = ji(), Zi(r);
                        s = new Uint8Array(b)
                    }
                    var D = this.needsProbing(d, c);
                    if (D) {
                        var I = this.configureTransmuxer(s);
                        if (I) return w.warn("[transmuxer] " + I.message), this.observer.emit(S.ERROR, S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.FRAG_PARSING_ERROR,
                            fatal: !1,
                            error: I,
                            reason: I.message
                        }), a.executeEnd = ji(), Zi(r)
                    }
                    (d || c || v || D) && this.resetInitSegment(E, m, p, T, e), (d || v || D) && this.resetInitialTimestamp(y), h || this.resetContiguity();
                    var C = this.transmux(s, A, g, f, r), _ = this.currentTransmuxState;
                    return _.contiguous = !0, _.discontinuity = !1, _.trackSwitch = !1, a.executeEnd = ji(), C
                }, e.flush = function (t) {
                    var e = this, r = t.transmuxing;
                    r.executeStart = ji();
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
                    if (!u || !h) return r.executeEnd = ji(), [Zi(t)];
                    var d = u.flush(o);
                    return tn(d) ? d.then((function (r) {
                        return e.flushRemux(s, r, t), s
                    })) : (this.flushRemux(s, d, t), s)
                }, e.flushRemux = function (t, e, r) {
                    var i = e.audioTrack, n = e.videoTrack, a = e.id3Track, s = e.textTrack,
                        o = this.currentTransmuxState, l = o.accurateTimeOffset, u = o.timeOffset;
                    w.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                    var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
                    t.push({remuxResult: h, chunkMeta: r}), r.transmuxing.executeEnd = ji()
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
                    for (var e, r = this.config, i = this.observer, n = this.typeSupported, a = this.vendor, s = 0, o = $i.length; s < o; s++) if ($i[s].demux.probe(t)) {
                        e = $i[s];
                        break
                    }
                    if (!e) return new Error("Failed to find demuxer by probing fragment data");
                    var l = this.demuxer, u = this.remuxer, h = e.remux, d = e.demux;
                    u && u instanceof h || (this.remuxer = new h(i, r, n, a)), l && l instanceof d || (this.demuxer = new d(i, r, n), this.probe = d.probe)
                }, e.needsProbing = function (t, e) {
                    return !this.demuxer || !this.remuxer || t || e
                }, e.getDecrypter = function () {
                    var t = this.decrypter;
                    return t || (t = this.decrypter = new Ur(this.config)), t
                }, t
            }(), Zi = function (t) {
                return {remuxResult: {}, chunkMeta: t}
            };

        function tn(t) {
            return "then" in t && t.then instanceof Function
        }

        var en = function (t, e, r, i, n) {
            this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = r, this.duration = i, this.defaultInitPts = n || null
        }, rn = function (t, e, r, i, n, a) {
            this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = r, this.trackSwitch = i, this.timeOffset = n, this.initSegmentChange = a
        }, nn = {exports: {}};
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
        }(nn);
        var an = p(nn.exports);

        function sn(t, e) {
            if (!((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment)) return !1;
            var r, i = [], n = e.remuxResult, a = n.audio, s = n.video;
            return a && on(i, a), s && on(i, s), t.postMessage({event: "transmuxComplete", data: e}, i), !0
        }

        function on(t, e) {
            e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
        }

        function ln(t, e, r) {
            e.reduce((function (e, r) {
                return sn(t, r) || e
            }), !1) || t.postMessage({event: "transmuxComplete", data: e[0]}), t.postMessage({event: "flush", data: r})
        }

        void 0 !== e && e && function (t) {
            var e = new an, r = function (e, r) {
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
                        t.transmuxer = new Ji(e, a.typeSupported, s, a.vendor, a.id), I(s.debug, a.id), i(), r("init", null);
                        break;
                    case"configure":
                        t.transmuxer.configure(a.config);
                        break;
                    case"demux":
                        var o = t.transmuxer.push(a.data, a.decryptdata, a.chunkMeta, a.state);
                        tn(o) ? (t.transmuxer.async = !0, o.then((function (e) {
                            sn(t, e)
                        })).catch((function (t) {
                            r(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.FRAG_PARSING_ERROR,
                                chunkMeta: a.chunkMeta,
                                fatal: !1,
                                error: t,
                                err: t,
                                reason: "transmuxer-worker push error"
                            })
                        }))) : (t.transmuxer.async = !1, sn(t, o));
                        break;
                    case"flush":
                        var l = a.chunkMeta, u = t.transmuxer.flush(l);
                        tn(u) || t.transmuxer.async ? (tn(u) || (u = Promise.resolve(u)), u.then((function (e) {
                            ln(t, e, l)
                        })).catch((function (t) {
                            r(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.FRAG_PARSING_ERROR,
                                chunkMeta: a.chunkMeta,
                                fatal: !1,
                                error: t,
                                err: t,
                                reason: "transmuxer-worker flush error"
                            })
                        }))) : ln(t, u, l)
                }
            }))
        }(self);
        var un = qt() || {
            isTypeSupported: function () {
                return !1
            }
        }, hn = function () {
            function e(e, r, i, n) {
                var a = this;
                this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
                var s = e.config;
                this.hls = e, this.id = r, this.useWorker = !!s.enableWorker, this.onTransmuxComplete = i, this.onFlush = n;
                var o = function (t, e) {
                    (e = e || {}).frag = a.frag, e.id = a.id, t === S.ERROR && (a.error = e.error), a.hls.trigger(t, e)
                };
                this.observer = new an, this.observer.on(S.FRAG_DECRYPTED, o), this.observer.on(S.ERROR, o);
                var l, u, h, d, c = {
                    mp4: un.isTypeSupported("video/mp4"),
                    mpeg: un.isTypeSupported("audio/mpeg"),
                    mp3: un.isTypeSupported('audio/mp4; codecs="mp3"')
                }, f = navigator.vendor;
                if (!this.useWorker || "undefined" == typeof Worker || (s.workerPath, 0)) this.transmuxer = new Ji(this.observer, c, s, f, r); else try {
                    s.workerPath ? (w.log("loading Web Worker " + s.workerPath + ' for "' + r + '"'), this.workerContext = (h = s.workerPath, d = new self.URL(h, self.location.href).href, {
                        worker: new self.Worker(d),
                        scriptURL: d
                    })) : (w.log('injecting Web Worker for "' + r + '"'), this.workerContext = (l = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + t.toString() + ")(true);"], {type: "text/javascript"}), u = self.URL.createObjectURL(l), {
                        worker: new self.Worker(u),
                        objectURL: u
                    })), this.onwmsg = function (t) {
                        return a.onWorkerMessage(t)
                    };
                    var g = this.workerContext.worker;
                    g.addEventListener("message", this.onwmsg), g.onerror = function (t) {
                        var e = new Error(t.message + "  (" + t.filename + ":" + t.lineno + ")");
                        s.enableWorker = !1, w.warn('Error in "' + r + '" Web Worker, fallback to inline'), a.hls.trigger(S.ERROR, {
                            type: L.OTHER_ERROR,
                            details: R.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: "demuxerWorker",
                            error: e
                        })
                    }, g.postMessage({cmd: "init", typeSupported: c, vendor: f, id: r, config: JSON.stringify(s)})
                } catch (t) {
                    w.warn('Error setting up "' + r + '" Web Worker, fallback to inline', t), this.resetWorker(), this.error = null, this.transmuxer = new Ji(this.observer, c, s, f, r)
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
                    p = !(m && n.cc === m.cc), y = !(m && l.level === m.level), T = m ? l.sn - m.sn : -1,
                    E = this.part ? l.part - this.part.index : -1,
                    S = 0 === T && l.id > 1 && l.id === (null == m ? void 0 : m.stats.chunkCount),
                    L = !y && (1 === T || 0 === T && (1 === E || S && E <= 0)), R = self.performance.now();
                (y || T || 0 === n.stats.parsing.start) && (n.stats.parsing.start = R), !a || !E && L || (a.stats.parsing.start = R);
                var A = !(m && (null == (h = n.initSegment) ? void 0 : h.url) === (null == (d = m.initSegment) ? void 0 : d.url)),
                    k = new rn(p, L, o, y, g, A);
                if (!L || p || A) {
                    w.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + l.sn + " p: " + l.part + " level: " + l.level + " id: " + l.id + "\n        discontinuity: " + p + "\n        trackSwitch: " + y + "\n        contiguous: " + L + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + g + "\n        initSegmentChange: " + A);
                    var b = new en(r, i, e, s, u);
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
                    tn(D) ? (f.async = !0, D.then((function (t) {
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
                    tn(i) || r.async ? (tn(i) || (i = Promise.resolve(i)), i.then((function (r) {
                        e.handleFlushResult(r, t)
                    })).catch((function (r) {
                        e.transmuxerError(r, t, "transmuxer-interface flush error")
                    }))) : this.handleFlushResult(i, t)
                }
            }, r.transmuxerError = function (t, e, r) {
                this.hls && (this.error = t, this.hls.trigger(S.ERROR, {
                    type: L.MEDIA_ERROR,
                    details: R.FRAG_PARSING_ERROR,
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
        }(), dn = function () {
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
                    if (this.seeking = s, a === t) {
                        if (l || o) this.stalled = null; else if (!(i.paused && !s || i.ended || 0 === i.playbackRate) && Ir.getBuffered(i).length) {
                            var u = Ir.bufferInfo(i, a, 0), h = u.len > 0, d = u.nextStart || 0;
                            if (h || d) {
                                if (s) {
                                    var c = u.len > 2,
                                        f = !d || e && e.start <= a || d - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                                    if (c || f) return;
                                    this.moved = !1
                                }
                                if (!this.moved && null !== this.stalled) {
                                    var g, v = Math.max(d, u.start || 0) - a,
                                        m = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                        p = (null == m || null == (g = m.details) ? void 0 : g.live) ? 2 * m.details.targetduration : 2,
                                        y = this.fragmentTracker.getPartialFragment(a);
                                    if (v > 0 && (v <= p || y)) return void this._trySkipBufferHole(y)
                                }
                                var T = self.performance.now();
                                if (null !== n) {
                                    var E = T - n;
                                    if (s || !(E >= 250) || (this._reportStall(u), this.media)) {
                                        var S = Ir.bufferInfo(i, a, r.maxBufferHole);
                                        this._tryFixBufferStall(S, E)
                                    }
                                } else this.stalled = T
                            }
                        }
                    } else if (this.moved = !0, null !== n) {
                        if (this.stallReported) {
                            var L = self.performance.now() - n;
                            w.warn("playback not stuck anymore @" + a + ", after " + Math.round(L) + "ms"), this.stallReported = !1
                        }
                        this.stalled = null, this.nudgeRetry = 0
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
                        details: R.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        error: i,
                        buffer: t.len
                    })
                }
            }, e._trySkipBufferHole = function (t) {
                var e = this.config, r = this.hls, i = this.media;
                if (null === i) return 0;
                var n = i.currentTime, a = Ir.bufferInfo(i, n, 0), s = n < a.start ? a.start : a.nextStart;
                if (s) {
                    var o = a.len <= e.maxBufferHole, l = a.len > 0 && a.len < 1 && i.readyState < 3, u = s - n;
                    if (u > 0 && (o || l)) {
                        if (u > e.maxBufferHole) {
                            var h = this.fragmentTracker, d = !1;
                            if (0 === n) {
                                var c = h.getAppendedFrag(0, ge);
                                c && s < c.end && (d = !0)
                            }
                            if (!d) {
                                var f = t || h.getAppendedFrag(n, ge);
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
                                details: R.BUFFER_SEEK_OVER_HOLE,
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
                            details: R.BUFFER_NUDGE_ON_STALL,
                            error: s,
                            fatal: !1
                        })
                    } else {
                        var o = new Error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges");
                        w.error(o.message), e.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.BUFFER_STALLED_ERROR,
                            error: o,
                            fatal: !0
                        })
                    }
                }
            }, t
        }(), cn = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e, r, i, "[stream-controller]", ge) || this).audioCodecSwap = !1, n.gapController = null, n.level = -1, n._forceStartLoad = !1, n.altAudio = !1, n.audioOnly = !1, n.fragPlaying = null, n.onvplaying = null, n.onvseeked = null, n.fragLastKbps = 0, n.couldBacktrack = !1, n.backtrackFragment = null, n.audioCodecSwitch = !1, n.videoBuffer = null, n._registerListeners(), n
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
                this._unregisterListeners(), this.onMediaDetaching()
            }, r.startLoad = function (t) {
                if (this.levels) {
                    var e = this.lastCurrentTime, r = this.hls;
                    if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                        var i = r.startLevel;
                        -1 === i && (r.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                    }
                    e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = Kr, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                } else this._forceStartLoad = !0, this.state = Gr
            }, r.stopLoad = function () {
                this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
            }, r.doTick = function () {
                switch (this.state) {
                    case $r:
                        var t, e = this.levels, r = this.level,
                            i = null == e || null == (t = e[r]) ? void 0 : t.details;
                        if (i && (!i.live || this.levelLastLoaded === this.level)) {
                            if (this.waitForCdnTuneIn(i)) break;
                            this.state = Kr;
                            break
                        }
                        if (this.hls.nextLoadLevel !== this.level) {
                            this.state = Kr;
                            break
                        }
                        break;
                    case Yr:
                        var n, a = self.performance.now(), s = this.retryDate;
                        (!s || a >= s || null != (n = this.media) && n.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = Kr)
                }
                this.state === Kr && this.doTickIdle(), this.onTickEnd()
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
                            return this.altAudio && (u.type = "video"), this.hls.trigger(S.BUFFER_EOS, u), void (this.state = Xr)
                        }
                        t.loadLevel !== a && -1 === t.manualLevel && this.log("Adapting to level " + a + " from level " + this.level), this.level = t.nextLoadLevel = a;
                        var h = s.details;
                        if (!h || this.state === $r || h.live && this.levelLastLoaded !== a) return this.level = a, void (this.state = $r);
                        var d = o.len, c = this.getMaxBufferLength(s.maxBitrate);
                        if (!(d >= c)) {
                            this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
                            var f = this.backtrackFragment ? this.backtrackFragment.start : o.end,
                                g = this.getNextFragment(f, h);
                            if (this.couldBacktrack && !this.fragPrevious && g && "initSegment" !== g.sn && this.fragmentTracker.getState(g) !== mr) {
                                var v, m = (null != (v = this.backtrackFragment) ? v : g).sn - h.startSN,
                                    p = h.fragments[m - 1];
                                p && g.cc === p.cc && (g = p, this.fragmentTracker.removeFragment(p))
                            } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
                            if (g && this.isLoopLoading(g, f)) {
                                if (!g.gap) {
                                    var y = this.audioOnly && !this.altAudio ? O : N,
                                        T = (y === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                                    T && this.afterBufferFlushed(T, y, ge)
                                }
                                g = this.getNextFragmentLoopLoading(g, h, o, ge, c)
                            }
                            g && (!g.initSegment || g.initSegment.data || this.bitrateTest || (g = g.initSegment), this.loadFragment(g, s, f))
                        }
                    }
                }
            }, r.loadFragment = function (e, r, i) {
                var n = this.fragmentTracker.getState(e);
                this.fragCurrent = e, n === fr || n === vr ? "initSegment" === e.sn ? this._loadInitSegment(e, r) : this.bitrateTest ? (this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e, r)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : this.clearTrackerIfNeeded(e)
            }, r.getBufferedFrag = function (t) {
                return this.fragmentTracker.getBufferedFrag(t, ge)
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
                                c = Math.max(l.end, h + Math.min(Math.max(d - this.config.maxFragLookUpTolerance, .5 * d), .75 * d));
                            this.flushMainBuffer(c, Number.POSITIVE_INFINITY)
                        }
                    }
                }
            }, r.abortCurrentFrag = function () {
                var t = this.fragCurrent;
                switch (this.fragCurrent = null, this.backtrackFragment = null, t && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.state) {
                    case Hr:
                    case Vr:
                    case Yr:
                    case jr:
                    case qr:
                        this.state = Kr
                }
                this.nextLoadPosition = this.getLoadPosition()
            }, r.flushMainBuffer = function (e, r) {
                t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
            }, r.onMediaAttached = function (e, r) {
                t.prototype.onMediaAttached.call(this, e, r);
                var i = r.media;
                this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new dn(this.config, i, this.fragmentTracker, this.hls)
            }, r.onMediaDetaching = function () {
                var e = this.media;
                e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t.prototype.onMediaDetaching.call(this)
            }, r.onMediaPlaying = function () {
                this.tick()
            }, r.onMediaSeeked = function () {
                var t = this.media, e = t ? t.currentTime : null;
                E(e) && this.log("Media seeked to " + e.toFixed(3));
                var r = this.getMainFwdBufferInfo();
                null !== r && 0 !== r.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (r ? r.len : "empty") + ")")
            }, r.onManifestLoading = function () {
                this.log("Trigger BUFFER_RESET"), this.hls.trigger(S.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.levels = this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = !1
            }, r.onManifestParsed = function (t, e) {
                var r, i, n, a = !1, s = !1;
                e.levels.forEach((function (t) {
                    (r = t.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (a = !0), -1 !== r.indexOf("mp4a.40.5") && (s = !0))
                })), this.audioCodecSwitch = a && s && !("function" == typeof (null == (n = Zr()) || null == (i = n.prototype) ? void 0 : i.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
            }, r.onLevelLoading = function (t, e) {
                var r = this.levels;
                if (r && this.state === Kr) {
                    var i = r[e.level];
                    (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = $r)
                }
            }, r.onLevelLoaded = function (t, e) {
                var r, i = this.levels, n = e.level, a = e.details, s = a.totalduration;
                if (i) {
                    this.log("Level " + n + " loaded [" + a.startSN + "," + a.endSN + "]" + (a.lastPartSn ? "[part-" + a.lastPartSn + "-" + a.lastPartIndex + "]" : "") + ", cc [" + a.startCC + ", " + a.endCC + "] duration:" + s);
                    var o = i[n], l = this.fragCurrent;
                    !l || this.state !== Vr && this.state !== Yr || l.level === e.level && l.urlId === o.urlId || !l.loader || this.abortCurrentFrag();
                    var u = 0;
                    if (a.live || null != (r = o.details) && r.live) {
                        if (a.fragments[0] || (a.deltaUpdateFailed = !0), a.deltaUpdateFailed) return;
                        u = this.alignPlaylists(a, o.details)
                    }
                    if (o.details = a, this.levelLastLoaded = n, this.hls.trigger(S.LEVEL_UPDATED, {
                        details: a,
                        level: n
                    }), this.state === $r) {
                        if (this.waitForCdnTuneIn(a)) return;
                        this.state = Kr
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
                        c = this.transmuxer = this.transmuxer || new hn(this.hls, ge, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                        f = i ? i.index : -1, g = -1 !== f,
                        v = new wr(r.level, r.sn, r.stats.chunkCount, n.byteLength, f, g), m = this.initPTS[r.cc];
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
                if (!r || r.type === ge) {
                    if (this.fragContextChanged(r)) return this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === qr && (this.state = Kr));
                    var n = i ? i.stats : r.stats;
                    this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)), "initSegment" !== r.sn && (this.fragPrevious = r), this.fragBufferedComplete(r, i)
                }
            }, r.onError = function (t, e) {
                var r;
                if (e.fatal) this.state = zr; else switch (e.details) {
                    case R.FRAG_GAP:
                    case R.FRAG_PARSING_ERROR:
                    case R.FRAG_DECRYPT_ERROR:
                    case R.FRAG_LOAD_ERROR:
                    case R.FRAG_LOAD_TIMEOUT:
                    case R.KEY_LOAD_ERROR:
                    case R.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(ge, e);
                        break;
                    case R.LEVEL_LOAD_ERROR:
                    case R.LEVEL_LOAD_TIMEOUT:
                    case R.LEVEL_PARSING_ERROR:
                        e.levelRetry || this.state !== $r || (null == (r = e.context) ? void 0 : r.type) !== de || (this.state = Kr);
                        break;
                    case R.BUFFER_FULL_ERROR:
                        if (!e.parent || "main" !== e.parent) return;
                        this.reduceLengthAndFlushBuffer(e) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                        break;
                    case R.INTERNAL_EXCEPTION:
                        this.recoverWorkerError(e)
                }
            }, r.checkBuffer = function () {
                var t = this.media, e = this.gapController;
                if (t && e && t.readyState) {
                    if (this.loadedmetadata || !Ir.getBuffered(t).length) {
                        var r = this.state !== Kr ? this.fragCurrent : null;
                        e.poll(this.lastCurrentTime, r)
                    }
                    this.lastCurrentTime = t.currentTime
                }
            }, r.onFragLoadEmergencyAborted = function () {
                this.state = Kr, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
            }, r.onBufferFlushed = function (t, e) {
                var r = e.type;
                if (r !== O || this.audioOnly && !this.altAudio) {
                    var i = (r === N ? this.videoBuffer : this.mediaBuffer) || this.media;
                    this.afterBufferFlushed(i, r, ge)
                }
            }, r.onLevelsUpdated = function (t, e) {
                this.levels = e.levels
            }, r.swapAudioCodec = function () {
                this.audioCodecSwap = !this.audioCodecSwap
            }, r.seekToStartPos = function () {
                var t = this.media;
                if (t) {
                    var e = t.currentTime, r = this.startPosition;
                    if (r >= 0 && e < r) {
                        if (t.seeking) return void this.log("could not seek to " + r + ", already seeking at " + e);
                        var i = Ir.getBuffered(t), n = (i.length ? i.start(0) : 0) - r;
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
                        e.fragmentError = 0, r.state = Kr, r.startFragRequested = !1, r.bitrateTest = !1;
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
                        if (this.state = jr, f) {
                            if (null != f && f.tracks) {
                                var m = o.initSegment || o;
                                this._bufferInitSegment(u, f.tracks, m, a), i.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
                                    frag: m,
                                    id: r,
                                    tracks: f.tracks
                                })
                            }
                            var p = f.initPTS, y = f.timescale;
                            E(p) && (this.initPTS[o.cc] = {
                                baseTime: p,
                                timescale: y
                            }, i.trigger(S.INIT_PTS_FOUND, {frag: o, id: r, initPTS: p, timescale: y}))
                        }
                        if (h && g && "initSegment" !== o.sn) {
                            var T = g.fragments[o.sn - 1 - g.startSN], L = o.sn === g.startSN, R = !T || o.cc > T.cc;
                            if (!1 !== n.independent) {
                                var A = h.startPTS, k = h.endPTS, b = h.startDTS, D = h.endDTS;
                                if (l) l.elementaryStreams[h.type] = {
                                    startPTS: A,
                                    endPTS: k,
                                    startDTS: b,
                                    endDTS: D
                                }; else if (h.firstKeyFrame && h.independent && 1 === a.id && !R && (this.couldBacktrack = !0), h.dropped && h.independent) {
                                    var I = this.getMainFwdBufferInfo(),
                                        w = (I ? I.end : this.getLoadPosition()) + this.config.maxBufferHole,
                                        C = h.firstKeyFramePTS ? h.firstKeyFramePTS : A;
                                    if (!L && w < C - this.config.maxBufferHole && !R) return void this.backtrack(o);
                                    R && (o.gap = !0), o.setElementaryStreamInfo(h.type, o.start, k, o.start, D, !0)
                                }
                                o.setElementaryStreamInfo(h.type, A, k, b, D), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(h, o, l, a, L || R)
                            } else {
                                if (!L && !R) return void this.backtrack(o);
                                o.gap = !0
                            }
                        }
                        if (v) {
                            var _ = v.startPTS, P = v.endPTS, x = v.startDTS, F = v.endDTS;
                            l && (l.elementaryStreams[O] = {
                                startPTS: _,
                                endPTS: P,
                                startDTS: x,
                                endDTS: F
                            }), o.setElementaryStreamInfo(O, _, P, x, F), this.bufferFragmentData(v, o, l, a)
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
                if (this.state === jr) {
                    this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
                    var a = e.audio, s = e.video, o = e.audiovideo;
                    if (a) {
                        var l = t.audioCodec, u = navigator.userAgent.toLowerCase();
                        this.audioCodecSwitch && (l && (l = -1 !== l.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== a.metadata.channelCount && -1 === u.indexOf("firefox") && (l = "mp4a.40.5")), -1 !== u.indexOf("android") && "audio/mpeg" !== a.container && (l = "mp4a.40.2", this.log("Android: force audio codec to " + l)), t.audioCodec && t.audioCodec !== l && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + l + '"'), a.levelCodec = l, a.id = "main", this.log("Init audio buffer, container:" + a.container + ", codecs[selected/level/parsed]=[" + (l || "") + "/" + (t.audioCodec || "") + "/" + a.codec + "]")
                    }
                    s && (s.levelCodec = t.videoCodec, s.id = "main", this.log("Init video buffer, container:" + s.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + s.codec + "]")), o && this.log("Init audiovideo buffer, container:" + o.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + o.codec + "]"), this.hls.trigger(S.BUFFER_CODECS, e), Object.keys(e).forEach((function (t) {
                        var a = e[t].initSegment;
                        null != a && a.byteLength && n.hls.trigger(S.BUFFER_APPENDING, {
                            type: t,
                            data: a,
                            frag: r,
                            part: null,
                            chunkMeta: i,
                            parent: r.type
                        })
                    })), this.tick()
                }
            }, r.getMainFwdBufferInfo = function () {
                return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, ge)
            }, r.backtrack = function (t) {
                this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = Kr
            }, r.checkFragmentChanged = function () {
                var t = this.media, e = null;
                if (t && t.readyState > 1 && !1 === t.seeking) {
                    var r = t.currentTime;
                    if (Ir.isBuffered(t, r) ? e = this.getAppendedFrag(r) : Ir.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)), e) {
                        this.backtrackFragment = null;
                        var i = this.fragPlaying, n = e.level;
                        i && e.sn === i.sn && i.level === n && e.urlId === i.urlId || (this.fragPlaying = e, this.hls.trigger(S.FRAG_CHANGED, {frag: e}), i && i.level === n || this.hls.trigger(S.LEVEL_SWITCHED, {level: n}))
                    }
                }
            }, a(e, [{
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
                        if (r && E(e) && E(r.programDateTime)) {
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
        }(Jr), fn = function () {
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
        }(), gn = function () {
            function t(t, e, r, i) {
                void 0 === i && (i = 100), this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new fn(t), this.fast_ = new fn(e), this.defaultTTFB_ = i, this.ttfb_ = new fn(t)
            }

            var e = t.prototype;
            return e.update = function (t, e) {
                var r = this.slow_, i = this.fast_, n = this.ttfb_;
                r.halfLife !== t && (this.slow_ = new fn(t, r.getEstimate(), r.getTotalWeight())), i.halfLife !== e && (this.fast_ = new fn(e, i.getEstimate(), i.getTotalWeight())), n.halfLife !== t && (this.ttfb_ = new fn(t, n.getEstimate(), n.getTotalWeight()))
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
        }(), vn = function () {
            function t(t) {
                this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = -1, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
                var e = t.config;
                this.bwEstimator = new gn(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
            }

            var e = t.prototype;
            return e.registerListeners = function () {
                var t = this.hls;
                t.on(S.FRAG_LOADING, this.onFragLoading, this), t.on(S.FRAG_LOADED, this.onFragLoaded, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this), t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.FRAG_LOADING, this.onFragLoading, this), t.off(S.FRAG_LOADED, this.onFragLoaded, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this), t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this)
            }, e.destroy = function () {
                this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
            }, e.onFragLoading = function (t, e) {
                var r, i = e.frag;
                this.ignoreFragment(i) || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100))
            }, e.onLevelSwitching = function (t, e) {
                this.clearTimer()
            }, e.getTimeToLoadFrag = function (t, e, r, i) {
                return t + r / e + (i ? this.lastLevelLoadSec : 0)
            }, e.onLevelLoaded = function (t, e) {
                var r = this.hls.config, i = e.stats, n = i.total, a = i.bwEstimate;
                E(n) && E(a) && (this.lastLevelLoadSec = 8 * n / a), e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
            }, e._abandonRulesCheck = function () {
                var t = this.fragCurrent, e = this.partCurrent, r = this.hls, i = r.autoLevelEnabled, n = r.media;
                if (t && n) {
                    var a = performance.now(), s = e ? e.stats : t.stats, o = e ? e.duration : t.duration,
                        l = a - s.loading.start;
                    if (s.aborted || s.loaded && s.loaded === s.total || 0 === t.level) return this.clearTimer(), void (this._nextAutoLevel = -1);
                    if (i && !n.paused && n.playbackRate && n.readyState) {
                        var u = r.mainForwardBufferInfo;
                        if (null !== u) {
                            var h = this.bwEstimator.getEstimateTTFB(), d = Math.abs(n.playbackRate);
                            if (!(l <= Math.max(h, o / (2 * d) * 1e3))) {
                                var c = u.len / d;
                                if (!(c >= 2 * o / d)) {
                                    var f = s.loading.first ? s.loading.first - s.loading.start : -1,
                                        g = s.loaded && f > -1, v = this.bwEstimator.getEstimate(), m = r.levels,
                                        p = r.minAutoLevel, y = m[t.level],
                                        T = s.total || Math.max(s.loaded, Math.round(o * y.maxBitrate / 8)), L = l - f;
                                    L < 1 && g && (L = Math.min(l, 8 * s.loaded / v));
                                    var R = g ? 1e3 * s.loaded / L : 0,
                                        A = R ? (T - s.loaded) / R : 8 * T / v + h / 1e3;
                                    if (!(A <= c)) {
                                        var k, b = R ? 8 * R : v, D = Number.POSITIVE_INFINITY;
                                        for (k = t.level - 1; k > p; k--) {
                                            var I = m[k].maxBitrate;
                                            if ((D = this.getTimeToLoadFrag(h / 1e3, b, o * I, !m[k].details)) < c) break
                                        }
                                        D >= A || D > 10 * o || (r.nextLoadLevel = k, g ? this.bwEstimator.sample(l - Math.min(h, f), s.loaded) : this.bwEstimator.sampleTTFB(l), this.clearTimer(), w.warn("[abr] Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly;\n      Time to underbuffer: " + c.toFixed(3) + " s\n      Estimated load time for current fragment: " + A.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + D.toFixed(3) + " s\n      TTFB estimate: " + f + "\n      Current BW estimate: " + (E(v) ? (v / 1024).toFixed(3) : "Unknown") + " Kb/s\n      New BW estimate: " + (this.bwEstimator.getEstimate() / 1024).toFixed(3) + " Kb/s\n      Aborting and switching to level " + k), t.loader && (this.fragCurrent = this.partCurrent = null, t.abortRequests()), r.trigger(S.FRAG_LOAD_EMERGENCY_ABORTED, {
                                            frag: t,
                                            part: e,
                                            stats: s
                                        }))
                                    }
                                }
                            }
                        }
                    }
                }
            }, e.onFragLoaded = function (t, e) {
                var r = e.frag, i = e.part, n = i ? i.stats : r.stats;
                if (r.type === ge && this.bwEstimator.sampleTTFB(n.loading.first - n.loading.start), !this.ignoreFragment(r)) {
                    if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                        var a = i ? i.duration : r.duration, s = this.hls.levels[r.level],
                            o = (s.loaded ? s.loaded.bytes : 0) + n.loaded, l = (s.loaded ? s.loaded.duration : 0) + a;
                        s.loaded = {bytes: o, duration: l}, s.realBitrate = Math.round(8 * o / l)
                    }
                    if (r.bitrateTest) {
                        var u = {stats: n, frag: r, part: i, id: r.type};
                        this.onFragBuffered(S.FRAG_BUFFERED, u), r.bitrateTest = !1
                    }
                }
            }, e.onFragBuffered = function (t, e) {
                var r = e.frag, i = e.part, n = null != i && i.stats.loaded ? i.stats : r.stats;
                if (!n.aborted && !this.ignoreFragment(r)) {
                    var a = n.parsing.end - n.loading.start - Math.min(n.loading.first - n.loading.start, this.bwEstimator.getEstimateTTFB());
                    this.bwEstimator.sample(a, n.loaded), n.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
                }
            }, e.ignoreFragment = function (t) {
                return t.type !== ge || "initSegment" === t.sn
            }, e.clearTimer = function () {
                self.clearInterval(this.timer)
            }, e.getNextABRAutoLevel = function () {
                var t = this.fragCurrent, e = this.partCurrent, r = this.hls, i = r.maxAutoLevel, n = r.config,
                    a = r.minAutoLevel, s = r.media, o = e ? e.duration : t ? t.duration : 0,
                    l = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
                    u = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                    h = r.mainForwardBufferInfo, d = (h ? h.len : 0) / l,
                    c = this.findBestLevel(u, a, i, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                if (c >= 0) return c;
                w.trace("[abr] " + (d ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                var f = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay, g = n.abrBandWidthFactor,
                    v = n.abrBandWidthUpFactor;
                if (!d) {
                    var m = this.bitrateTestDelay;
                    m && (f = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - m, w.trace("[abr] bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * f) + " ms"), g = v = 1)
                }
                return c = this.findBestLevel(u, a, i, d + f, g, v), Math.max(c, 0)
            }, e.findBestLevel = function (t, e, r, i, n, a) {
                for (var s, o = this.fragCurrent, l = this.partCurrent, u = this.lastLoadedFragLevel, h = this.hls.levels, d = h[u], c = !(null == d || null == (s = d.details) || !s.live), f = null == d ? void 0 : d.codecSet, g = l ? l.duration : o ? o.duration : 0, v = this.bwEstimator.getEstimateTTFB() / 1e3, m = e, p = -1, y = r; y >= e; y--) {
                    var T = h[y];
                    if (!T || f && T.codecSet !== f) T && (m = Math.min(y, m), p = Math.max(y, p)); else {
                        -1 !== p && w.trace("[abr] Skipped level(s) " + m + "-" + p + ' with CODECS:"' + h[p].attrs.CODECS + '"; not compatible with "' + d.attrs.CODECS + '"');
                        var S = T.details,
                            L = (l ? null == S ? void 0 : S.partTarget : null == S ? void 0 : S.averagetargetduration) || g,
                            R = void 0;
                        R = y <= u ? n * t : a * t;
                        var A = h[y].maxBitrate, k = this.getTimeToLoadFrag(v, R, A * L, void 0 === S);
                        if (w.trace("[abr] level:" + y + " adjustedbw-bitrate:" + Math.round(R - A) + " avgDuration:" + L.toFixed(1) + " maxFetchDuration:" + i.toFixed(1) + " fetchDuration:" + k.toFixed(1)), R > A && (0 === k || !E(k) || c && !this.bitrateTestDelay || k < i)) return y
                    }
                }
                return -1
            }, a(t, [{
                key: "nextAutoLevel", get: function () {
                    var t = this._nextAutoLevel, e = this.bwEstimator;
                    if (-1 !== t && !e.canEstimate()) return t;
                    var r = this.getNextABRAutoLevel();
                    if (-1 !== t) {
                        var i = this.hls.levels;
                        if (i.length > Math.max(t, r) && i[t].loadError <= i[r].loadError) return t
                    }
                    return -1 !== t && (r = Math.min(t, r)), r
                }, set: function (t) {
                    this._nextAutoLevel = t
                }
            }]), t
        }(), mn = function () {
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
        }(), pn = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e, r, i, "[audio-stream-controller]", ve) || this).videoBuffer = null, n.videoTrackCC = -1, n.waitingVideoCC = -1, n.bufferedTrack = null, n.switchingTrack = null, n.trackId = -1, n.waitingData = null, n.mainDetails = null, n.bufferFlushed = !1, n.cachedTrackLoadedData = null, n._registerListeners(), n
            }

            l(e, t);
            var r = e.prototype;
            return r.onHandlerDestroying = function () {
                this._unregisterListeners(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null
            }, r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(S.ERROR, this.onError, this), t.on(S.BUFFER_RESET, this.onBufferReset, this), t.on(S.BUFFER_CREATED, this.onBufferCreated, this), t.on(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(S.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(S.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(S.ERROR, this.onError, this), t.off(S.BUFFER_RESET, this.onBufferReset, this), t.off(S.BUFFER_CREATED, this.onBufferCreated, this), t.off(S.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r.onInitPtsFound = function (t, e) {
                var r = e.frag, i = e.id, n = e.initPTS, a = e.timescale;
                if ("main" === i) {
                    var s = r.cc;
                    this.initPTS[r.cc] = {
                        baseTime: n,
                        timescale: a
                    }, this.log("InitPTS for cc: " + s + " found from main: " + n), this.videoTrackCC = s, this.state === Qr && this.tick()
                }
            }, r.startLoad = function (t) {
                if (!this.levels) return this.startPosition = t, void (this.state = Gr);
                var e = this.lastCurrentTime;
                this.stopLoad(), this.setInterval(100), e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e, this.state = Kr) : (this.loadedmetadata = !1, this.state = Wr), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
            }, r.doTick = function () {
                switch (this.state) {
                    case Kr:
                        this.doTickIdle();
                        break;
                    case Wr:
                        var e, r = this.levels, i = this.trackId,
                            n = null == r || null == (e = r[i]) ? void 0 : e.details;
                        if (n) {
                            if (this.waitForCdnTuneIn(n)) break;
                            this.state = Qr
                        }
                        break;
                    case Yr:
                        var a, s = performance.now(), o = this.retryDate;
                        (!o || s >= o || null != (a = this.media) && a.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = Kr);
                        break;
                    case Qr:
                        var l = this.waitingData;
                        if (l) {
                            var u = l.frag, h = l.part, d = l.cache, c = l.complete;
                            if (void 0 !== this.initPTS[u.cc]) {
                                this.waitingData = null, this.waitingVideoCC = -1, this.state = Vr;
                                var f = {frag: u, part: h, payload: d.flush(), networkDetails: null};
                                this._handleFragmentLoadProgress(f), c && t.prototype._handleFragmentLoadComplete.call(this, f)
                            } else if (this.videoTrackCC !== this.waitingVideoCC) this.log("Waiting fragment cc (" + u.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment(); else {
                                var g = this.getLoadPosition(),
                                    v = Ir.bufferInfo(this.mediaBuffer, g, this.config.maxBufferHole);
                                Je(v.end, this.config.maxFragLookUpTolerance, u) < 0 && (this.log("Waiting fragment cc (" + u.cc + ") @ " + u.start + " cancelled because another fragment at " + v.end + " is needed"), this.clearWaitingFragment())
                            }
                        } else this.state = Kr
                }
                this.onTickEnd()
            }, r.clearWaitingFragment = function () {
                var t = this.waitingData;
                t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Kr)
            }, r.resetLoadingState = function () {
                this.clearWaitingFragment(), t.prototype.resetLoadingState.call(this)
            }, r.onTickEnd = function () {
                var t = this.media;
                null != t && t.readyState && (this.lastCurrentTime = t.currentTime)
            }, r.doTickIdle = function () {
                var t = this.hls, e = this.levels, r = this.media, i = this.trackId, n = t.config;
                if (null != e && e[i] && (r || !this.startFragRequested && n.startFragPrefetch)) {
                    var a = e[i], s = a.details;
                    if (!s || s.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(s)) this.state = Wr; else {
                        var o = this.mediaBuffer ? this.mediaBuffer : this.media;
                        this.bufferFlushed && o && (this.bufferFlushed = !1, this.afterBufferFlushed(o, O, ve));
                        var l = this.getFwdBufferInfo(o, ve);
                        if (null !== l) {
                            var u = this.bufferedTrack, h = this.switchingTrack;
                            if (!h && this._streamEnded(l, s)) return t.trigger(S.BUFFER_EOS, {type: "audio"}), void (this.state = Xr);
                            var d = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, ge),
                                c = l.len, f = this.getMaxBufferLength(null == d ? void 0 : d.len);
                            if (!(c >= f) || h) {
                                var g = s.fragments[0].start, v = l.end;
                                if (h && r) {
                                    var m = this.getLoadPosition();
                                    u && h.attrs !== u.attrs && (v = m), s.PTSKnown && m < g && (l.end > g || l.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), r.currentTime = g + .05)
                                }
                                var p = this.getNextFragment(v, s), y = !1;
                                if (p && this.isLoopLoading(p, v) && (y = !!p.gap, p = this.getNextFragmentLoopLoading(p, s, l, ge, f)), p) {
                                    var T = d && p.start > d.end + s.targetduration;
                                    if (T || (null == d || !d.len) && l.len) {
                                        var E = this.getAppendedFrag(p.start, ge);
                                        if (null === E) return;
                                        if (y || (y = !!E.gap || !!T && 0 === d.len), T && !y || y && l.nextStart && l.nextStart < E.end) return
                                    }
                                    this.loadFragment(p, a, v)
                                } else this.bufferFlushed = !0
                            }
                        }
                    }
                }
            }, r.getMaxBufferLength = function (e) {
                var r = t.prototype.getMaxBufferLength.call(this);
                return e ? Math.min(Math.max(r, e), this.config.maxMaxBufferLength) : r
            }, r.onMediaDetaching = function () {
                this.videoBuffer = null, t.prototype.onMediaDetaching.call(this)
            }, r.onAudioTracksUpdated = function (t, e) {
                var r = e.audioTracks;
                this.resetTransmuxer(), this.levels = r.map((function (t) {
                    return new Ne(t)
                }))
            }, r.onAudioTrackSwitching = function (t, e) {
                var r = !!e.url;
                this.trackId = e.id;
                var i = this.fragCurrent;
                i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), r ? this.setInterval(100) : this.resetTransmuxer(), r ? (this.switchingTrack = e, this.state = Kr) : (this.switchingTrack = null, this.bufferedTrack = e, this.state = Gr), this.tick()
            }, r.onManifestLoading = function () {
                this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
            }, r.onLevelLoaded = function (t, e) {
                this.mainDetails = e.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(S.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
            }, r.onAudioTrackLoaded = function (t, e) {
                var r;
                if (null != this.mainDetails) {
                    var i = this.levels, n = e.details, a = e.id;
                    if (i) {
                        this.log("Track " + a + " loaded [" + n.startSN + "," + n.endSN + "]" + (n.lastPartSn ? "[part-" + n.lastPartSn + "-" + n.lastPartIndex + "]" : "") + ",duration:" + n.totalduration);
                        var s = i[a], o = 0;
                        if (n.live || null != (r = s.details) && r.live) {
                            var l = this.mainDetails;
                            if (n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed || !l) return;
                            !s.details && n.hasProgramDateTime && l.hasProgramDateTime ? (Fr(n, l), o = n.fragments[0].start) : o = this.alignPlaylists(n, s.details)
                        }
                        s.details = n, this.levelLastLoaded = a, this.startFragRequested || !this.mainDetails && n.live || this.setStartPosition(s.details, o), this.state !== Wr || this.waitForCdnTuneIn(n) || (this.state = Kr), this.tick()
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
                        d || (d = this.transmuxer = new hn(this.hls, ve, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                        var c = this.initPTS[r.cc], f = null == (e = r.initSegment) ? void 0 : e.data;
                        if (void 0 !== c) {
                            var g = i ? i.index : -1, v = -1 !== g,
                                m = new wr(r.level, r.sn, r.stats.chunkCount, n.byteLength, g, v);
                            d.push(n, f, h, "", r, i, u.totalduration, !1, m, c)
                        } else this.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + u.startSN + " ," + u.endSN + "],track " + s), (this.waitingData = this.waitingData || {
                            frag: r,
                            part: i,
                            cache: new mn,
                            complete: !1
                        }).cache.push(new Uint8Array(n)), this.waitingVideoCC = this.videoTrackCC, this.state = Qr
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
                if (r.type === ve) if (this.fragContextChanged(r)) this.warn("Fragment " + r.sn + (n ? " p: " + n.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + (this.switchingTrack ? this.switchingTrack.name : "false")); else {
                    if ("initSegment" !== r.sn) {
                        this.fragPrevious = r;
                        var a = this.switchingTrack;
                        a && (this.bufferedTrack = a, this.switchingTrack = null, this.hls.trigger(S.AUDIO_TRACK_SWITCHED, i({}, a)))
                    }
                    this.fragBufferedComplete(r, n)
                } else if (!this.loadedmetadata && r.type === ge) {
                    var s = this.videoBuffer || this.media;
                    s && Ir.getBuffered(s).length && (this.loadedmetadata = !0)
                }
            }, r.onError = function (e, r) {
                var i;
                if (r.fatal) this.state = zr; else switch (r.details) {
                    case R.FRAG_GAP:
                    case R.FRAG_PARSING_ERROR:
                    case R.FRAG_DECRYPT_ERROR:
                    case R.FRAG_LOAD_ERROR:
                    case R.FRAG_LOAD_TIMEOUT:
                    case R.KEY_LOAD_ERROR:
                    case R.KEY_LOAD_TIMEOUT:
                        this.onFragmentOrKeyLoadError(ve, r);
                        break;
                    case R.AUDIO_TRACK_LOAD_ERROR:
                    case R.AUDIO_TRACK_LOAD_TIMEOUT:
                    case R.LEVEL_PARSING_ERROR:
                        r.levelRetry || this.state !== Wr || (null == (i = r.context) ? void 0 : i.type) !== ce || (this.state = Kr);
                        break;
                    case R.BUFFER_FULL_ERROR:
                        if (!r.parent || "audio" !== r.parent) return;
                        this.reduceLengthAndFlushBuffer(r) && (this.bufferedTrack = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio"));
                        break;
                    case R.INTERNAL_EXCEPTION:
                        this.recoverWorkerError(r)
                }
            }, r.onBufferFlushed = function (t, e) {
                e.type === O && (this.bufferFlushed = !0, this.state === Xr && (this.state = Kr))
            }, r._handleTransmuxComplete = function (t) {
                var e, r = "audio", i = this.hls, n = t.remuxResult, a = t.chunkMeta, s = this.getCurrentContext(a);
                if (s) {
                    var l = s.frag, u = s.part, h = s.level.details, d = n.audio, c = n.text, f = n.id3,
                        g = n.initSegment;
                    if (!this.fragContextChanged(l) && h) {
                        if (this.state = jr, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), null != g && g.tracks) {
                            var v = l.initSegment || l;
                            this._bufferInitSegment(g.tracks, v, a), i.trigger(S.FRAG_PARSING_INIT_SEGMENT, {
                                frag: v,
                                id: r,
                                tracks: g.tracks
                            })
                        }
                        if (d) {
                            var m = d.startPTS, p = d.endPTS, y = d.startDTS, T = d.endDTS;
                            u && (u.elementaryStreams[O] = {
                                startPTS: m,
                                endPTS: p,
                                startDTS: y,
                                endDTS: T
                            }), l.setElementaryStreamInfo(O, m, p, y, T), this.bufferFragmentData(d, l, u, a)
                        }
                        if (null != f && null != (e = f.samples) && e.length) {
                            var E = o({id: r, frag: l, details: h}, f);
                            i.trigger(S.FRAG_PARSING_METADATA, E)
                        }
                        if (c) {
                            var L = o({id: r, frag: l, details: h}, c);
                            i.trigger(S.FRAG_PARSING_USERDATA, L)
                        }
                    } else this.fragmentTracker.removeFragment(l)
                } else this.resetWhenMissingContext(a)
            }, r._bufferInitSegment = function (t, e, r) {
                if (this.state === jr) {
                    t.video && delete t.video;
                    var i = t.audio;
                    if (i) {
                        i.levelCodec = i.codec, i.id = "audio", this.log("Init audio buffer, container:" + i.container + ", codecs[parsed]=[" + i.codec + "]"), this.hls.trigger(S.BUFFER_CODECS, t);
                        var n = i.initSegment;
                        if (null != n && n.byteLength) {
                            var a = {type: "audio", frag: e, part: null, chunkMeta: r, parent: e.type, data: n};
                            this.hls.trigger(S.BUFFER_APPENDING, a)
                        }
                        this.tick()
                    }
                }
            }, r.loadFragment = function (e, r, i) {
                var n, a = this.fragmentTracker.getState(e);
                this.fragCurrent = e, this.switchingTrack || a === fr || a === vr ? "initSegment" === e.sn ? this._loadInitSegment(e, r) : null != (n = r.details) && n.live && !this.initPTS[e.cc] ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = Qr) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : this.clearTrackerIfNeeded(e)
            }, r.completeAudioSwitch = function (e) {
                var r = this.hls, n = this.media, a = this.bufferedTrack, s = null == a ? void 0 : a.attrs, o = e.attrs;
                n && s && (s.CHANNELS !== o.CHANNELS || s.NAME !== o.NAME || s.LANGUAGE !== o.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.bufferedTrack = e, this.switchingTrack = null, r.trigger(S.AUDIO_TRACK_SWITCHED, i({}, e))
            }, e
        }(Jr), yn = function (t) {
            function e(e) {
                var r;
                return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.currentTrack = null, r.selectDefaultTrack = !0, r.registerListeners(), r
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
                this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0
            }, r.onManifestParsed = function (t, e) {
                this.tracks = e.audioTracks || []
            }, r.onAudioTrackLoaded = function (t, e) {
                var r = e.id, i = e.groupId, n = e.details, a = this.tracksInGroup[r];
                if (a && a.groupId === i) {
                    var s = a.details;
                    a.details = e.details, this.log("audio-track " + r + ' "' + a.name + '" lang:' + a.lang + " group:" + i + " loaded [" + n.startSN + "-" + n.endSN + "]"), r === this.trackId && this.playlistLoaded(r, e, s)
                } else this.warn("Track with id:" + r + " and group:" + i + " not found in active group " + a.groupId)
            }, r.onLevelLoading = function (t, e) {
                this.switchLevel(e.level)
            }, r.onLevelSwitching = function (t, e) {
                this.switchLevel(e.level)
            }, r.switchLevel = function (t) {
                var e = this.hls.levels[t];
                if (null != e && e.audioGroupIds) {
                    var r = e.audioGroupIds[e.urlId];
                    if (this.groupId !== r) {
                        this.groupId = r || null;
                        var i = this.tracks.filter((function (t) {
                            return !r || t.groupId === r
                        }));
                        this.selectDefaultTrack && !i.some((function (t) {
                            return t.default
                        })) && (this.selectDefaultTrack = !1), this.tracksInGroup = i;
                        var n = {audioTracks: i};
                        this.log("Updating audio tracks, " + i.length + " track(s) found in group:" + r), this.hls.trigger(S.AUDIO_TRACKS_UPDATED, n), this.selectInitialTrack()
                    } else this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId)
                }
            }, r.onError = function (t, e) {
                !e.fatal && e.context && e.context.type === ce && e.context.id === this.trackId && e.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(e))
            }, r.setAudioTrack = function (t) {
                var e = this.tracksInGroup;
                if (t < 0 || t >= e.length) this.warn("Invalid id passed to audio-track controller"); else {
                    this.clearTimer();
                    var r = this.currentTrack;
                    e[this.trackId];
                    var n = e[t], a = n.groupId, s = n.name;
                    if (this.log("Switching to audio-track " + t + ' "' + s + '" lang:' + n.lang + " group:" + a), this.trackId = t, this.currentTrack = n, this.selectDefaultTrack = !1, this.hls.trigger(S.AUDIO_TRACK_SWITCHING, i({}, n)), !n.details || n.details.live) {
                        var o = this.switchParams(n.url, null == r ? void 0 : r.details);
                        this.loadPlaylist(o)
                    }
                }
            }, r.selectInitialTrack = function () {
                var t = this.tracksInGroup, e = this.findTrackId(this.currentTrack) | this.findTrackId(null);
                if (-1 !== e) this.setAudioTrack(e); else {
                    var r = new Error("No track found for running audio group-ID: " + this.groupId + " track count: " + t.length);
                    this.warn(r.message), this.hls.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.AUDIO_TRACK_LOAD_ERROR,
                        fatal: !0,
                        error: r
                    })
                }
            }, r.findTrackId = function (t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (!this.selectDefaultTrack || i.default) {
                        if (!t || void 0 !== t.attrs["STABLE-RENDITION-ID"] && t.attrs["STABLE-RENDITION-ID"] === i.attrs["STABLE-RENDITION-ID"]) return i.id;
                        if (t.name === i.name && t.lang === i.lang) return i.id
                    }
                }
                return -1
            }, r.loadPlaylist = function (e) {
                t.prototype.loadPlaylist.call(this);
                var r = this.tracksInGroup[this.trackId];
                if (this.shouldLoadPlaylist(r)) {
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
            }, a(e, [{
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
        }(ur);

        function Tn(t, e) {
            if (t.length !== e.length) return !1;
            for (var r = 0; r < t.length; r++) if (!En(t[r].attrs, e[r].attrs)) return !1;
            return !0
        }

        function En(t, e) {
            var r = t["STABLE-RENDITION-ID"];
            return r ? r === e["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some((function (r) {
                return t[r] !== e[r]
            }))
        }

        var Sn = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e, r, i, "[subtitle-stream-controller]", me) || this).levels = [], n.currentTrackId = -1, n.tracksBuffered = [], n.mainDetails = null, n._registerListeners(), n
            }

            l(e, t);
            var r = e.prototype;
            return r.onHandlerDestroying = function () {
                this._unregisterListeners(), this.mainDetails = null
            }, r._registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.LEVEL_LOADED, this.onLevelLoaded, this), t.on(S.ERROR, this.onError, this), t.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r._unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.LEVEL_LOADED, this.onLevelLoaded, this), t.off(S.ERROR, this.onError, this), t.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(S.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(S.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(S.FRAG_BUFFERED, this.onFragBuffered, this)
            }, r.startLoad = function (t) {
                this.stopLoad(), this.state = Kr, this.setInterval(500), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
            }, r.onManifestLoading = function () {
                this.mainDetails = null, this.fragmentTracker.removeAllFragments()
            }, r.onMediaDetaching = function () {
                this.tracksBuffered = [], t.prototype.onMediaDetaching.call(this)
            }, r.onLevelLoaded = function (t, e) {
                this.mainDetails = e.details
            }, r.onSubtitleFragProcessed = function (t, e) {
                var r = e.frag, i = e.success;
                if (this.fragPrevious = r, this.state = Kr, i) {
                    var n = this.tracksBuffered[this.currentTrackId];
                    if (n) {
                        for (var a, s = r.start, o = 0; o < n.length; o++) if (s >= n[o].start && s <= n[o].end) {
                            a = n[o];
                            break
                        }
                        var l = r.start + r.duration;
                        a ? a.end = l : (a = {start: s, end: l}, n.push(a)), this.fragmentTracker.fragBuffered(r)
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
                    })), this.fragmentTracker.removeFragmentsInRange(r, n, me)
                }
            }, r.onFragBuffered = function (t, e) {
                var r;
                this.loadedmetadata || e.frag.type !== ge || null != (r = this.media) && r.buffered.length && (this.loadedmetadata = !0)
            }, r.onError = function (t, e) {
                var r = e.frag;
                (null == r ? void 0 : r.type) === me && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== Gr && (this.state = Kr))
            }, r.onSubtitleTracksUpdated = function (t, e) {
                var r = this, i = e.subtitleTracks;
                Tn(this.levels, i) ? this.levels = i.map((function (t) {
                    return new Ne(t)
                })) : (this.tracksBuffered = [], this.levels = i.map((function (t) {
                    var e = new Ne(t);
                    return r.tracksBuffered[e.id] = [], e
                })), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, me), this.fragPrevious = null, this.mediaBuffer = null)
            }, r.onSubtitleTrackSwitch = function (t, e) {
                if (this.currentTrackId = e.id, this.levels.length && -1 !== this.currentTrackId) {
                    var r = this.levels[this.currentTrackId];
                    null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.setInterval(500)
                } else this.clearInterval()
            }, r.onSubtitleTrackLoaded = function (t, e) {
                var r, i = e.details, n = e.id, a = this.currentTrackId, s = this.levels;
                if (s.length) {
                    var o = s[a];
                    if (!(n >= s.length || n !== a) && o) {
                        this.mediaBuffer = this.mediaBufferTimeRanges;
                        var l = 0;
                        if (i.live || null != (r = o.details) && r.live) {
                            var u = this.mainDetails;
                            if (i.deltaUpdateFailed || !u) return;
                            var h = u.fragments[0];
                            o.details ? 0 === (l = this.alignPlaylists(i, o.details)) && h && He(i, l = h.start) : i.hasProgramDateTime && u.hasProgramDateTime ? (Fr(i, u), l = i.fragments[0].start) : h && He(i, l = h.start)
                        }
                        o.details = i, this.levelLastLoaded = n, this.startFragRequested || !this.mainDetails && i.live || this.setStartPosition(o.details, l), this.tick(), i.live && !this.fragCurrent && this.media && this.state === Kr && ($e(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0))
                    }
                }
            }, r._handleFragmentLoadComplete = function (t) {
                var e = this, r = t.frag, i = t.payload, n = r.decryptdata, a = this.hls;
                if (!this.fragContextChanged(r) && i && i.byteLength > 0 && n && n.key && n.iv && "AES-128" === n.method) {
                    var s = performance.now();
                    this.decrypter.decrypt(new Uint8Array(i), n.key.buffer, n.iv.buffer).catch((function (t) {
                        throw a.trigger(S.ERROR, {
                            type: L.MEDIA_ERROR,
                            details: R.FRAG_DECRYPT_ERROR,
                            fatal: !1,
                            error: t,
                            reason: t.message,
                            frag: r
                        }), t
                    })).then((function (t) {
                        var e = performance.now();
                        a.trigger(S.FRAG_DECRYPTED, {frag: r, payload: t, stats: {tstart: s, tdecrypt: e}})
                    })).catch((function (t) {
                        e.warn(t.name + ": " + t.message), e.state = Kr
                    }))
                }
            }, r.doTick = function () {
                if (this.media) {
                    if (this.state === Kr) {
                        var t = this.currentTrackId, e = this.levels, r = e[t];
                        if (!e.length || !r || !r.details) return;
                        var i = this.config, n = this.getLoadPosition(),
                            a = Ir.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], n, i.maxBufferHole),
                            s = a.end, o = a.len, l = this.getFwdBufferInfo(this.media, ge), u = r.details;
                        if (o > this.getMaxBufferLength(null == l ? void 0 : l.len) + u.levelTargetDuration) return;
                        var h = u.fragments, d = h.length, c = u.edge, f = null, g = this.fragPrevious;
                        if (s < c) {
                            var v = i.maxFragLookUpTolerance, m = s > c - v ? 0 : v;
                            !(f = $e(g, h, Math.max(h[0].start, s), m)) && g && g.start < h[0].start && (f = h[0])
                        } else f = h[d - 1];
                        if (!f) return;
                        if ("initSegment" !== (f = this.mapToInitFragWhenRequired(f)).sn) {
                            var p = h[f.sn - u.startSN - 1];
                            p && p.cc === f.cc && this.fragmentTracker.getState(p) === fr && (f = p)
                        }
                        this.fragmentTracker.getState(f) === fr && this.loadFragment(f, r, s)
                    }
                } else this.state = Kr
            }, r.getMaxBufferLength = function (e) {
                var r = t.prototype.getMaxBufferLength.call(this);
                return e ? Math.max(r, e) : r
            }, r.loadFragment = function (e, r, i) {
                this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e, r) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i))
            }, a(e, [{
                key: "mediaBufferTimeRanges", get: function () {
                    return new Ln(this.tracksBuffered[this.currentTrackId] || [])
                }
            }]), e
        }(Jr), Ln = function (t) {
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
        }, Rn = function (t) {
            function e(e) {
                var r;
                return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.trackChangeListener = function () {
                    return r.onTextTracksChanged()
                }, r.asyncPollTrackChange = function () {
                    return r.pollTrackChange(0)
                }, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r._subtitleDisplay = !0, r.registerListeners(), r
            }

            l(e, t);
            var r = e.prototype;
            return r.destroy = function () {
                this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t.prototype.destroy.call(this)
            }, r.registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.LEVEL_LOADING, this.onLevelLoading, this), t.on(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(S.ERROR, this.onError, this)
            }, r.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.LEVEL_LOADING, this.onLevelLoading, this), t.off(S.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(S.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(S.ERROR, this.onError, this)
            }, r.onMediaAttached = function (t, e) {
                this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
            }, r.pollTrackChange = function (t) {
                self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
            }, r.onMediaDetaching = function () {
                this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), An(this.media.textTracks).forEach((function (t) {
                    Le(t)
                })), this.subtitleTrack = -1, this.media = null)
            }, r.onManifestLoading = function () {
                this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
            }, r.onManifestParsed = function (t, e) {
                this.tracks = e.subtitleTracks
            }, r.onSubtitleTrackLoaded = function (t, e) {
                var r = e.id, i = e.details, n = this.trackId, a = this.tracksInGroup[n];
                if (a) {
                    var s = a.details;
                    a.details = e.details, this.log("subtitle track " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && this.playlistLoaded(r, e, s)
                } else this.warn("Invalid subtitle track id " + r)
            }, r.onLevelLoading = function (t, e) {
                this.switchLevel(e.level)
            }, r.onLevelSwitching = function (t, e) {
                this.switchLevel(e.level)
            }, r.switchLevel = function (t) {
                var e = this.hls.levels[t];
                if (null != e && e.textGroupIds) {
                    var r = e.textGroupIds[e.urlId], i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                    if (this.groupId !== r) {
                        var n = this.tracks.filter((function (t) {
                            return !r || t.groupId === r
                        }));
                        this.tracksInGroup = n;
                        var a = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
                        this.groupId = r || null;
                        var s = {subtitleTracks: n};
                        this.log("Updating subtitle tracks, " + n.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(S.SUBTITLE_TRACKS_UPDATED, s), -1 !== a && this.setSubtitleTrack(a, i)
                    } else this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId, i)
                }
            }, r.findTrackId = function (t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                }
                return -1
            }, r.onError = function (t, e) {
                !e.fatal && e.context && e.context.type === fe && e.context.id === this.trackId && e.context.groupId === this.groupId && this.checkRetry(e)
            }, r.loadPlaylist = function (e) {
                t.prototype.loadPlaylist.call(this);
                var r = this.tracksInGroup[this.trackId];
                if (this.shouldLoadPlaylist(r)) {
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
            }, r.toggleTrackModes = function (t) {
                var e = this, r = this.media, i = this.trackId;
                if (r) {
                    var n = An(r.textTracks), a = n.filter((function (t) {
                        return t.groupId === e.groupId
                    }));
                    if (-1 === t) [].slice.call(n).forEach((function (t) {
                        t.mode = "disabled"
                    })); else {
                        var s = a[i];
                        s && (s.mode = "disabled")
                    }
                    var o = a[t];
                    o && (o.mode = this.subtitleDisplay ? "showing" : "hidden")
                }
            }, r.setSubtitleTrack = function (t, e) {
                var r, i = this.tracksInGroup;
                if (this.media) {
                    if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (-1 === t || null != (r = i[t]) && r.details) || t < -1 || t >= i.length)) {
                        this.clearTimer();
                        var n = i[t];
                        if (this.log("Switching to subtitle-track " + t + (n ? ' "' + n.name + '" lang:' + n.lang + " group:" + n.groupId : "")), this.trackId = t, n) {
                            var a = n.id, s = n.groupId, o = void 0 === s ? "" : s, l = n.name, u = n.type, h = n.url;
                            this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {id: a, groupId: o, name: l, type: u, url: h});
                            var d = this.switchParams(n.url, null == e ? void 0 : e.details);
                            this.loadPlaylist(d)
                        } else this.hls.trigger(S.SUBTITLE_TRACK_SWITCH, {id: t})
                    }
                } else this.queuedDefaultTrack = t
            }, r.onTextTracksChanged = function () {
                if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
                    for (var t = -1, e = An(this.media.textTracks), r = 0; r < e.length; r++) if ("hidden" === e[r].mode) t = r; else if ("showing" === e[r].mode) {
                        t = r;
                        break
                    }
                    this.subtitleTrack !== t && (this.subtitleTrack = t)
                }
            }, a(e, [{
                key: "subtitleDisplay", get: function () {
                    return this._subtitleDisplay
                }, set: function (t) {
                    this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes(this.trackId)
                }
            }, {
                key: "subtitleTracks", get: function () {
                    return this.tracksInGroup
                }
            }, {
                key: "subtitleTrack", get: function () {
                    return this.trackId
                }, set: function (t) {
                    this.selectDefaultTrack = !1;
                    var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                    this.setSubtitleTrack(t, e)
                }
            }]), e
        }(ur);

        function An(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = t[r];
                "subtitles" !== i.kind && "captions" !== i.kind || !i.label || e.push(t[r])
            }
            return e
        }

        var kn = function () {
                function t(t) {
                    this.buffers = void 0, this.queues = {video: [], audio: [], audiovideo: []}, this.buffers = t
                }

                var e = t.prototype;
                return e.append = function (t, e) {
                    var r = this.queues[e];
                    r.push(t), 1 === r.length && this.buffers[e] && this.executeNext(e)
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
                    var e = this.buffers, r = this.queues, i = e[t], n = r[t];
                    if (n.length) {
                        var a = n[0];
                        try {
                            a.execute()
                        } catch (e) {
                            w.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), a.onError(e), null != i && i.updating || (n.shift(), this.executeNext(t))
                        }
                    }
                }, e.shiftAndExecuteNext = function (t) {
                    this.queues[t].shift(), this.executeNext(t)
                }, e.current = function (t) {
                    return this.queues[t][0]
                }, t
            }(), bn = qt(), Dn = /([ha]vc.)(?:\.[^.,]+)+/, In = function () {
                function t(t) {
                    var e = this;
                    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function () {
                        var t = e.media, r = e.mediaSource;
                        w.log("[buffer-controller]: Media source opened"), t && (t.removeEventListener("emptied", e._onMediaEmptied), e.updateMediaElementDuration(), e.hls.trigger(S.MEDIA_ATTACHED, {media: t})), r && r.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
                    }, this._onMediaSourceClose = function () {
                        w.log("[buffer-controller]: Media source closed")
                    }, this._onMediaSourceEnded = function () {
                        w.log("[buffer-controller]: Media source ended")
                    }, this._onMediaEmptied = function () {
                        var t = e.media, r = e._objectUrl;
                        t && t.src !== r && w.error("Media element src was set while attaching MediaSource (" + r + " > " + t.src + ")")
                    }, this.hls = t, this._initSourceBuffer(), this.registerListeners()
                }

                var e = t.prototype;
                return e.hasSourceTypes = function () {
                    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                }, e.destroy = function () {
                    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null
                }, e.registerListeners = function () {
                    var t = this.hls;
                    t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.BUFFER_RESET, this.onBufferReset, this), t.on(S.BUFFER_APPENDING, this.onBufferAppending, this), t.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t.on(S.BUFFER_EOS, this.onBufferEos, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(S.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(S.FRAG_PARSED, this.onFragParsed, this), t.on(S.FRAG_CHANGED, this.onFragChanged, this)
                }, e.unregisterListeners = function () {
                    var t = this.hls;
                    t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.BUFFER_RESET, this.onBufferReset, this), t.off(S.BUFFER_APPENDING, this.onBufferAppending, this), t.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t.off(S.BUFFER_EOS, this.onBufferEos, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(S.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(S.FRAG_PARSED, this.onFragParsed, this), t.off(S.FRAG_CHANGED, this.onFragChanged, this)
                }, e._initSourceBuffer = function () {
                    this.sourceBuffer = {}, this.operationQueue = new kn(this.sourceBuffer), this.listeners = {
                        audio: [],
                        video: [],
                        audiovideo: []
                    }, this.lastMpegAudioChunk = null
                }, e.onManifestLoading = function () {
                    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null
                }, e.onManifestParsed = function (t, e) {
                    var r = 2;
                    (e.audio && !e.video || !e.altAudio) && (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, w.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                }, e.onMediaAttaching = function (t, e) {
                    var r = this.media = e.media;
                    if (r && bn) {
                        var i = this.mediaSource = new bn;
                        i.addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), r.src = self.URL.createObjectURL(i), this._objectUrl = r.src, r.addEventListener("emptied", this._onMediaEmptied)
                    }
                }, e.onMediaDetaching = function () {
                    var t = this.media, e = this.mediaSource, r = this._objectUrl;
                    if (e) {
                        if (w.log("[buffer-controller]: media source detaching"), "open" === e.readyState) try {
                            e.endOfStream()
                        } catch (t) {
                            w.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                        }
                        this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (t.removeEventListener("emptied", this._onMediaEmptied), r && self.URL.revokeObjectURL(r), t.src === r ? (t.removeAttribute("src"), t.load()) : w.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                    }
                    this.hls.trigger(S.MEDIA_DETACHED, void 0)
                }, e.onBufferReset = function () {
                    var t = this;
                    this.getSourceBufferTypes().forEach((function (e) {
                        var r = t.sourceBuffer[e];
                        try {
                            r && (t.removeBufferListeners(e), t.mediaSource && t.mediaSource.removeSourceBuffer(r), t.sourceBuffer[e] = void 0)
                        } catch (t) {
                            w.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
                        }
                    })), this._initSourceBuffer()
                }, e.onBufferCodecs = function (t, e) {
                    var r = this, i = this.getSourceBufferTypes().length;
                    Object.keys(e).forEach((function (t) {
                        if (i) {
                            var n = r.tracks[t];
                            if (n && "function" == typeof n.buffer.changeType) {
                                var a = e[t], s = a.id, o = a.codec, l = a.levelCodec, u = a.container, h = a.metadata,
                                    d = (n.levelCodec || n.codec).replace(Dn, "$1"), c = (l || o).replace(Dn, "$1");
                                if (d !== c) {
                                    var f = u + ";codecs=" + (l || o);
                                    r.appendChangeType(t, f), w.log("[buffer-controller]: switching codec " + d + " to " + c), r.tracks[t] = {
                                        buffer: n.buffer,
                                        codec: o,
                                        container: u,
                                        levelCodec: l,
                                        metadata: h,
                                        id: s
                                    }
                                }
                            }
                        } else r.pendingTracks[t] = e[t]
                    })), i || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                }, e.appendChangeType = function (t, e) {
                    var r = this, i = this.operationQueue, n = {
                        execute: function () {
                            var n = r.sourceBuffer[t];
                            n && (w.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), n.changeType(e)), i.shiftAndExecuteNext(t)
                        }, onStart: function () {
                        }, onComplete: function () {
                        }, onError: function (e) {
                            w.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                        }
                    };
                    i.append(n, t)
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
                                    Math.abs(e) >= .1 && (w.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + p + " (delta: " + e + ") sn: " + l.sn + ")"), t.timestampOffset = p)
                                }
                            }
                            r.appendExecutor(s, o)
                        }, onStart: function () {
                        }, onComplete: function () {
                            var t = self.performance.now();
                            d.executeEnd = d.end = t, 0 === f.first && (f.first = t), g && 0 === g.first && (g.first = t);
                            var e = r.sourceBuffer, i = {};
                            for (var n in e) i[n] = Ir.getBuffered(e[n]);
                            r.appendError = 0, r.hls.trigger(S.BUFFER_APPENDED, {
                                type: o,
                                frag: l,
                                part: u,
                                chunkMeta: h,
                                parent: l.type,
                                timeRanges: i
                            })
                        }, onError: function (t) {
                            w.error("[buffer-controller]: Error encountered while trying to append to the " + o + " SourceBuffer", t);
                            var e = {
                                type: L.MEDIA_ERROR,
                                parent: l.type,
                                details: R.BUFFER_APPEND_ERROR,
                                frag: l,
                                part: u,
                                chunkMeta: h,
                                error: t,
                                err: t,
                                fatal: !1
                            };
                            t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = R.BUFFER_FULL_ERROR : (r.appendError++, e.details = R.BUFFER_APPEND_ERROR, r.appendError > i.config.appendErrorMaxRetry && (w.error("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0)), i.trigger(S.ERROR, e)
                        }
                    };
                    n.append(y, o)
                }, e.onBufferFlushing = function (t, e) {
                    var r = this, i = this.operationQueue, n = function (t) {
                        return {
                            execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset), onStart: function () {
                            }, onComplete: function () {
                                r.hls.trigger(S.BUFFER_FLUSHED, {type: t})
                            }, onError: function (e) {
                                w.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                            }
                        }
                    };
                    e.type ? i.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach((function (t) {
                        i.append(n(t), t)
                    }))
                }, e.onFragParsed = function (t, e) {
                    var r = this, i = e.frag, n = e.part, a = [], s = n ? n.elementaryStreams : i.elementaryStreams;
                    s[U] ? a.push("audiovideo") : (s[O] && a.push("audio"), s[N] && a.push("video")), 0 === a.length && w.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn), this.blockBuffers((function () {
                        var t = self.performance.now();
                        i.stats.buffering.end = t, n && (n.stats.buffering.end = t);
                        var e = n ? n.stats : i.stats;
                        r.hls.trigger(S.FRAG_BUFFERED, {frag: i, part: n, stats: e, id: i.type})
                    }), a)
                }, e.onFragChanged = function (t, e) {
                    this.flushBackBuffer()
                }, e.onBufferEos = function (t, e) {
                    var r = this;
                    this.getSourceBufferTypes().reduce((function (t, i) {
                        var n = r.sourceBuffer[i];
                        return !n || e.type && e.type !== i || (n.ending = !0, n.ended || (n.ended = !0, w.log("[buffer-controller]: " + i + " sourceBuffer now EOS"))), t && !(n && !n.ended)
                    }), !0) && (w.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers((function () {
                        r.getSourceBufferTypes().forEach((function (t) {
                            var e = r.sourceBuffer[t];
                            e && (e.ending = !1)
                        }));
                        var t = r.mediaSource;
                        t && "open" === t.readyState ? (w.log("[buffer-controller]: Calling mediaSource.endOfStream()"), t.endOfStream()) : t && w.info("[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: " + t.readyState)
                    })))
                }, e.onLevelUpdated = function (t, e) {
                    var r = e.details;
                    r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                }, e.flushBackBuffer = function () {
                    var t = this.hls, e = this.details, r = this.media, i = this.sourceBuffer;
                    if (r && null !== e) {
                        var n = this.getSourceBufferTypes();
                        if (n.length) {
                            var a = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
                            if (E(a) && !(a < 0)) {
                                var s = r.currentTime, o = e.levelTargetDuration, l = Math.max(a, o),
                                    u = Math.floor(s / o) * o - l;
                                n.forEach((function (r) {
                                    var n = i[r];
                                    if (n) {
                                        var a = Ir.getBuffered(n);
                                        if (a.length > 0 && u > a.start(0)) {
                                            if (t.trigger(S.BACK_BUFFER_REACHED, {bufferEnd: u}), e.live) t.trigger(S.LIVE_BACK_BUFFER_REACHED, {bufferEnd: u}); else if (n.ended && a.end(a.length - 1) - s < 2 * o) return void w.info("[buffer-controller]: Cannot flush " + r + " back buffer while SourceBuffer is in ended state");
                                            t.trigger(S.BUFFER_FLUSHING, {startOffset: 0, endOffset: u, type: r})
                                        }
                                    }
                                }))
                            }
                        }
                    }
                }, e.updateMediaElementDuration = function () {
                    if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                        var t = this.details, e = this.hls, r = this.media, i = this.mediaSource,
                            n = t.fragments[0].start + t.totalduration, a = r.duration, s = E(i.duration) ? i.duration : 0;
                        t.live && e.config.liveDurationInfinity ? (w.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(t)) : (n > s && n > a || !E(a)) && (w.log("[buffer-controller]: Updating Media Source duration to " + n.toFixed(3)), i.duration = n)
                    }
                }, e.updateSeekableRange = function (t) {
                    var e = this.mediaSource, r = t.fragments;
                    if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                        var i = Math.max(0, r[0].start), n = Math.max(i, i + t.totalduration);
                        e.setLiveSeekableRange(i, n)
                    }
                }, e.checkPendingTracks = function () {
                    var t = this.bufferCodecEventsExpected, e = this.operationQueue, r = this.pendingTracks,
                        i = Object.keys(r).length;
                    if (i && !t || 2 === i) {
                        this.createSourceBuffers(r), this.pendingTracks = {};
                        var n = this.getSourceBufferTypes();
                        if (n.length) this.hls.trigger(S.BUFFER_CREATED, {tracks: this.tracks}), n.forEach((function (t) {
                            e.executeNext(t)
                        })); else {
                            var a = new Error("could not create source buffer for media codec(s)");
                            this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                error: a,
                                reason: a.message
                            })
                        }
                    }
                }, e.createSourceBuffers = function (t) {
                    var e = this.sourceBuffer, r = this.mediaSource;
                    if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                    for (var i in t) if (!e[i]) {
                        var n = t[i];
                        if (!n) throw Error("source buffer exists for track " + i + ", however track does not");
                        var a = n.levelCodec || n.codec, s = n.container + ";codecs=" + a;
                        w.log("[buffer-controller]: creating sourceBuffer(" + s + ")");
                        try {
                            var o = e[i] = r.addSourceBuffer(s), l = i;
                            this.addBufferListener(l, "updatestart", this._onSBUpdateStart), this.addBufferListener(l, "updateend", this._onSBUpdateEnd), this.addBufferListener(l, "error", this._onSBUpdateError), this.tracks[i] = {
                                buffer: o,
                                codec: a,
                                container: n.container,
                                levelCodec: n.levelCodec,
                                metadata: n.metadata,
                                id: n.id
                            }
                        } catch (t) {
                            w.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message), this.hls.trigger(S.ERROR, {
                                type: L.MEDIA_ERROR,
                                details: R.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                error: t,
                                mimeType: s
                            })
                        }
                    }
                }, e._onSBUpdateStart = function (t) {
                    this.operationQueue.current(t).onStart()
                }, e._onSBUpdateEnd = function (t) {
                    var e = this.operationQueue;
                    e.current(t).onComplete(), e.shiftAndExecuteNext(t)
                }, e._onSBUpdateError = function (t, e) {
                    var r = new Error(t + " SourceBuffer error");
                    w.error("[buffer-controller]: " + r, e), this.hls.trigger(S.ERROR, {
                        type: L.MEDIA_ERROR,
                        details: R.BUFFER_APPENDING_ERROR,
                        error: r,
                        fatal: !1
                    });
                    var i = this.operationQueue.current(t);
                    i && i.onError(e)
                }, e.removeExecutor = function (t, e, r) {
                    var i = this.media, n = this.mediaSource, a = this.operationQueue, s = this.sourceBuffer[t];
                    if (!i || !n || !s) return w.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void a.shiftAndExecuteNext(t);
                    var o = E(i.duration) ? i.duration : 1 / 0, l = E(n.duration) ? n.duration : 1 / 0, u = Math.max(0, e),
                        h = Math.min(r, o, l);
                    h > u && !s.ending ? (s.ended = !1, w.log("[buffer-controller]: Removing [" + u + "," + h + "] from the " + t + " SourceBuffer"), s.remove(u, h)) : a.shiftAndExecuteNext(t)
                }, e.appendExecutor = function (t, e) {
                    var r = this.operationQueue, i = this.sourceBuffer[e];
                    if (!i) return w.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), void r.shiftAndExecuteNext(e);
                    i.ended = !1, i.appendBuffer(t)
                }, e.blockBuffers = function (t, e) {
                    var r = this;
                    if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return w.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
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
                }, t
            }(), wn = {
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
            }, Cn = function (t) {
                var e = t;
                return wn.hasOwnProperty(t) && (e = wn[t]), String.fromCharCode(e)
            }, _n = 15, Pn = 100, xn = {17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14},
            Fn = {17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15},
            Mn = {25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14},
            On = {25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15},
            Nn = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
            Un = function () {
                function t() {
                    this.time = null, this.verboseLevel = 0
                }

                return t.prototype.log = function (t, e) {
                    if (this.verboseLevel >= t) {
                        var r = "function" == typeof e ? e() : e;
                        w.log(this.time + " [" + t + "] " + r)
                    }
                }, t
            }(), Bn = function (t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                return e
            }, Gn = function () {
                function t(t, e, r, i, n) {
                    this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = r || !1, this.background = i || "black", this.flash = n || !1
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
            }(), Kn = function () {
                function t(t, e, r, i, n, a) {
                    this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new Gn(e, r, i, n, a)
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
            }(), Hn = function () {
                function t(t) {
                    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                    for (var e = 0; e < Pn; e++) this.chars.push(new Kn);
                    this.logger = t, this.pos = 0, this.currPenState = new Gn
                }

                var e = t.prototype;
                return e.equals = function (t) {
                    for (var e = !0, r = 0; r < Pn; r++) if (!this.chars[r].equals(t.chars[r])) {
                        e = !1;
                        break
                    }
                    return e
                }, e.copy = function (t) {
                    for (var e = 0; e < Pn; e++) this.chars[e].copy(t.chars[e])
                }, e.isEmpty = function () {
                    for (var t = !0, e = 0; e < Pn; e++) if (!this.chars[e].isEmpty()) {
                        t = !1;
                        break
                    }
                    return t
                }, e.setCursor = function (t) {
                    this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Pn && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Pn)
                }, e.moveCursor = function (t) {
                    var e = this.pos + t;
                    if (t > 1) for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                    this.setCursor(e)
                }, e.backSpace = function () {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, e.insertChar = function (t) {
                    var e = this;
                    t >= 144 && this.backSpace();
                    var r = Cn(t);
                    this.pos >= Pn ? this.logger.log(0, (function () {
                        return "Cannot insert " + t.toString(16) + " (" + r + ") at position " + e.pos + ". Skipping it!"
                    })) : (this.chars[this.pos].setChar(r, this.currPenState), this.moveCursor(1))
                }, e.clearFromPos = function (t) {
                    var e;
                    for (e = t; e < Pn; e++) this.chars[e].reset()
                }, e.clear = function () {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, e.clearToEndOfRow = function () {
                    this.clearFromPos(this.pos)
                }, e.getTextString = function () {
                    for (var t = [], e = !0, r = 0; r < Pn; r++) {
                        var i = this.chars[r].uchar;
                        " " !== i && (e = !1), t.push(i)
                    }
                    return e ? "" : t.join("")
                }, e.setPenStyles = function (t) {
                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(), Vn = function () {
                function t(t) {
                    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                    for (var e = 0; e < _n; e++) this.rows.push(new Hn(t));
                    this.logger = t, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
                }

                var e = t.prototype;
                return e.reset = function () {
                    for (var t = 0; t < _n; t++) this.rows[t].clear();
                    this.currRow = 14
                }, e.equals = function (t) {
                    for (var e = !0, r = 0; r < _n; r++) if (!this.rows[r].equals(t.rows[r])) {
                        e = !1;
                        break
                    }
                    return e
                }, e.copy = function (t) {
                    for (var e = 0; e < _n; e++) this.rows[e].copy(t.rows[e])
                }, e.isEmpty = function () {
                    for (var t = !0, e = 0; e < _n; e++) if (!this.rows[e].isEmpty()) {
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
                        for (var r = 0; r < _n; r++) this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows, n = this.lastOutputScreen;
                        if (n) {
                            var a = n.rows[i].cueStartTime, s = this.logger.time;
                            if (a && null !== s && a < s) for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[i + o])
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
                    for (var e = [], r = "", i = -1, n = 0; n < _n; n++) {
                        var a = this.rows[n].getTextString();
                        a && (i = n + 1, t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, e.getTextAndFormat = function () {
                    return this.rows
                }, t
            }(), Yn = function () {
                function t(t, e, r) {
                    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new Vn(r), this.nonDisplayedMemory = new Vn(r), this.lastOutputScreen = new Vn(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
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
            }(), Wn = function () {
                function t(t, e, r) {
                    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                    var i = new Un;
                    this.channels = [null, new Yn(t, e, i), new Yn(t + 1, r, i)], this.cmdHistory = {
                        a: null,
                        b: null
                    }, this.logger = i
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
                        if (this.logger.log(3, "[" + Bn([e[s], e[s + 1]]) + "] -> (" + Bn([i, n]) + ")"), (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) {
                            var o = this.currentChannel;
                            o && o > 0 ? this.channels[o].insertChars(a) : this.logger.log(2, "No channel found yet. TEXT-MODE?")
                        }
                        r || a || this.logger.log(2, "Couldn't parse cleaned data " + Bn([i, n]) + " orig: " + Bn([e[s], e[s + 1]]))
                    }
                }, e.parseCmd = function (t, e) {
                    var r = this.cmdHistory;
                    if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
                    if (qn(t, e, r)) return jn(null, null, r), this.logger.log(3, "Repeated command (" + Bn([t, e]) + ") is dropped"), !0;
                    var i = 20 === t || 21 === t || 23 === t ? 1 : 2, n = this.channels[i];
                    return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), jn(t, e, r), this.currentChannel = i, !0
                }, e.parseMidrow = function (t, e) {
                    var r = 0;
                    if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                        if ((r = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
                        var i = this.channels[r];
                        return !!i && (i.ccMIDROW(e), this.logger.log(3, "MIDROW (" + Bn([t, e]) + ")"), !0)
                    }
                    return !1
                }, e.parsePAC = function (t, e) {
                    var r, i = this.cmdHistory;
                    if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
                    if (qn(t, e, i)) return jn(null, null, i), !0;
                    var n = t <= 23 ? 1 : 2;
                    r = e >= 64 && e <= 95 ? 1 === n ? xn[t] : Mn[t] : 1 === n ? Fn[t] : On[t];
                    var a = this.channels[n];
                    return !!a && (a.setPAC(this.interpretPAC(r, e)), jn(t, e, i), this.currentChannel = n, !0)
                }, e.interpretPAC = function (t, e) {
                    var r, i = {color: null, italics: !1, indent: null, underline: !1, row: t};
                    return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                }, e.parseChars = function (t, e) {
                    var r, i, n = null, a = null;
                    if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), a >= 17 && a <= 19 ? (i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(2, "Special char '" + Cn(i) + "' in channel " + r), n = [i]) : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]), n) {
                        var s = Bn(n);
                        this.logger.log(3, "Char codes =  " + s.join(",")), jn(t, e, this.cmdHistory)
                    }
                    return n
                }, e.parseBackgroundAttributes = function (t, e) {
                    var r;
                    if (!((16 === t || 24 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
                    var i = {};
                    16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = Nn[r], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0));
                    var n = t <= 23 ? 1 : 2;
                    return this.channels[n].setBkgData(i), jn(t, e, this.cmdHistory), !0
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

        function jn(t, e, r) {
            r.a = t, r.b = e
        }

        function qn(t, e, r) {
            return r.a === t && r.b === e
        }

        var Xn = function () {
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
        }(), zn = function () {
            if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
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
                var u = "", h = !1, d = e, c = a, f = s, g = null, v = "", m = !0, p = "auto", y = "start", T = 50,
                    E = "middle", S = 50, L = "middle";
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
                        return T
                    }, set: function (t) {
                        if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                        T = t, this.hasBeenReset = !0
                    }
                })), Object.defineProperty(o, "positionAlign", n({}, l, {
                    get: function () {
                        return E
                    }, set: function (t) {
                        var e = i(t);
                        if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                        E = e, this.hasBeenReset = !0
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
        }(), Qn = function () {
            function t() {
            }

            return t.prototype.decode = function (t, e) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }, t
        }();

        function $n(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0)
            }

            var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
            return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
        }

        var Jn = function () {
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

        function Zn(t, e, r, i) {
            var n = i ? t.split(i) : [t];
            for (var a in n) if ("string" == typeof n[a]) {
                var s = n[a].split(r);
                2 === s.length && e(s[0], s[1])
            }
        }

        var ta = new zn(0, 0, ""), ea = "middle" === ta.align ? "middle" : "center";

        function ra(t, e, r) {
            var i = t;

            function n() {
                var e = $n(t);
                if (null === e) throw new Error("Malformed timestamp: " + i);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function a() {
                t = t.replace(/^\s+/, "")
            }

            if (a(), e.startTime = n(), a(), "--\x3e" !== t.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            t = t.slice(3), a(), e.endTime = n(), a(), function (t, e) {
                var i = new Jn;
                Zn(t, (function (t, e) {
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
                            n = e.split(","), i.integer(t, n[0]), i.percent(t, n[0]) && i.set("snapToLines", !1), i.alt(t, n[0], ["auto"]), 2 === n.length && i.alt("lineAlign", n[1], ["start", ea, "end"]);
                            break;
                        case"position":
                            n = e.split(","), i.percent(t, n[0]), 2 === n.length && i.alt("positionAlign", n[1], ["start", ea, "end", "line-left", "line-right", "auto"]);
                            break;
                        case"size":
                            i.percent(t, e);
                            break;
                        case"align":
                            i.alt(t, e, ["start", ea, "end", "left", "right"])
                    }
                }), /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", "");
                var n = i.get("line", "auto");
                "auto" === n && -1 === ta.line && (n = -1), e.line = n, e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", ea);
                var a = i.get("position", "auto");
                "auto" === a && 50 === ta.position && (a = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = a
            }(t, e)
        }

        function ia(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }

        var na = function () {
            function t() {
                this.state = "INITIAL", this.buffer = "", this.decoder = new Qn, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
            }

            var e = t.prototype;
            return e.parse = function (t) {
                var e = this;

                function r() {
                    var t = e.buffer, r = 0;
                    for (t = ia(t); r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
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
                                /:/.test(i) ? Zn(i, (function (t, e) {
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
                                if (e.cue = new zn(0, 0, ""), e.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                    e.cue.id = i;
                                    continue
                                }
                            case"CUE":
                                if (!e.cue) {
                                    e.state = "BADCUE";
                                    continue
                                }
                                try {
                                    ra(i, e.cue, e.regionList)
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
        }(), aa = /\r\n|\n\r|\n|\r/g, sa = function (t, e, r) {
            return void 0 === r && (r = 0), t.slice(r, r + e.length) === e
        }, oa = function (t) {
            for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
            return (e >>> 0).toString()
        };

        function la(t, e, r) {
            return oa(t.toString()) + oa(e.toString()) + oa(r)
        }

        function ua(t, e, r, i, n, a, s) {
            var o, l, u, h = new na, d = pt(new Uint8Array(t)).trim().replace(aa, "\n").split("\n"), c = [],
                f = e ? (o = e.baseTime, void 0 === (l = e.timescale) && (l = 1), Ui(o, 9e4, 1 / l)) : 0,
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
                var l = t.endTime - t.startTime, h = Vi(9e4 * (t.startTime + s - m), 9e4 * n) / 9e4;
                t.startTime = Math.max(h, 0), t.endTime = Math.max(h + l, 0);
                var d = t.text.trim();
                t.text = decodeURIComponent(encodeURIComponent(d)), t.id || (t.id = la(t.startTime, t.endTime, d)), t.endTime > 0 && c.push(t)
            }, h.onparsingerror = function (t) {
                u = t
            }, h.onflush = function () {
                u ? s(u) : a(c)
            }, d.forEach((function (t) {
                if (p) {
                    if (sa(t, "X-TIMESTAMP-MAP=")) {
                        p = !1, t.slice(16).split(",").forEach((function (t) {
                            sa(t, "LOCAL:") ? g = t.slice(6) : sa(t, "MPEGTS:") && (v = parseInt(t.slice(7)))
                        }));
                        try {
                            m = function (t) {
                                var e = parseInt(t.slice(-3)), r = parseInt(t.slice(-6, -4)),
                                    i = parseInt(t.slice(-9, -7)),
                                    n = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
                                if (!(E(e) && E(r) && E(i) && E(n))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
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

        var ha = "stpp.ttml.im1t", da = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
            ca = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
            fa = {left: "start", center: "center", right: "end", start: "start", end: "end"};

        function ga(t, e, r, i) {
            var n = It(new Uint8Array(t), ["mdat"]);
            if (0 !== n.length) {
                var a, s, l, u, h = n.map((function (t) {
                        return pt(t)
                    })),
                    d = (a = e.baseTime, s = 1, void 0 === (l = e.timescale) && (l = 1), void 0 === u && (u = !1), Ui(a, s, 1 / l, u));
                try {
                    h.forEach((function (t) {
                        return r(function (t, e) {
                            var r = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                            if (!r) throw new Error("Invalid ttml");
                            var i = {frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0},
                                n = Object.keys(i).reduce((function (t, e) {
                                    return t[e] = r.getAttribute("ttp:" + e) || i[e], t
                                }), {}), a = "preserve" !== r.getAttribute("xml:space"),
                                s = ma(va(r, "styling", "style")), l = ma(va(r, "layout", "region")),
                                u = va(r, "body", "[begin]");
                            return [].map.call(u, (function (t) {
                                var r = pa(t, a);
                                if (!r || !t.hasAttribute("begin")) return null;
                                var i = Ea(t.getAttribute("begin"), n), u = Ea(t.getAttribute("dur"), n),
                                    h = Ea(t.getAttribute("end"), n);
                                if (null === i) throw Ta(t);
                                if (null === h) {
                                    if (null === u) throw Ta(t);
                                    h = i + u
                                }
                                var d = new zn(i - e, h - e, r);
                                d.id = la(d.startTime, d.endTime, d.text);
                                var c = function (t, e, r) {
                                    var i = "http://www.w3.org/ns/ttml#styling", n = null,
                                        a = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"],
                                        s = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
                                    return s && r.hasOwnProperty(s) && (n = r[s]), a.reduce((function (r, a) {
                                        var s = ya(e, i, a) || ya(t, i, a) || ya(n, i, a);
                                        return s && (r[a] = s), r
                                    }), {})
                                }(l[t.getAttribute("region")], s[t.getAttribute("style")], s), f = c.textAlign;
                                if (f) {
                                    var g = fa[f];
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

        function va(t, e, r) {
            var i = t.getElementsByTagName(e)[0];
            return i ? [].slice.call(i.querySelectorAll(r)) : []
        }

        function ma(t) {
            return t.reduce((function (t, e) {
                var r = e.getAttribute("xml:id");
                return r && (t[r] = e), t
            }), {})
        }

        function pa(t, e) {
            return [].slice.call(t.childNodes).reduce((function (t, r, i) {
                var n;
                return "br" === r.nodeName && i ? t + "\n" : null != (n = r.childNodes) && n.length ? pa(r, e) : e ? t + r.textContent.trim().replace(/\s+/g, " ") : t + r.textContent
            }), "")
        }

        function ya(t, e, r) {
            return t && t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
        }

        function Ta(t) {
            return new Error("Could not parse ttml timestamp " + t)
        }

        function Ea(t, e) {
            if (!t) return null;
            var r = $n(t);
            return null === r && (da.test(t) ? r = function (t, e) {
                var r = da.exec(t), i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate
            }(t, e) : ca.test(t) && (r = function (t, e) {
                var r = ca.exec(t), i = Number(r[1]);
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

        var Sa = function () {
            function t(t) {
                if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
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
                }, this.config.enableCEA708Captions) {
                    var e = new Xn(this, "textTrack1"), r = new Xn(this, "textTrack2"), i = new Xn(this, "textTrack3"),
                        n = new Xn(this, "textTrack4");
                    this.cea608Parser1 = new Wn(1, e, r), this.cea608Parser2 = new Wn(3, i, n)
                }
                t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(S.MANIFEST_LOADING, this.onManifestLoading, this), t.on(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(S.FRAG_LOADING, this.onFragLoading, this), t.on(S.FRAG_LOADED, this.onFragLoaded, this), t.on(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(S.BUFFER_FLUSHING, this.onBufferFlushing, this)
            }

            var e = t.prototype;
            return e.destroy = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(S.MANIFEST_LOADING, this.onManifestLoading, this), t.off(S.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(S.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(S.FRAG_LOADING, this.onFragLoading, this), t.off(S.FRAG_LOADED, this.onFragLoaded, this), t.off(S.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(S.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(S.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(S.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(S.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
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
            }, e.getExistingTrack = function (t) {
                var e = this.media;
                if (e) for (var r = 0; r < e.textTracks.length; r++) {
                    var i = e.textTracks[r];
                    if (i[t]) return i
                }
                return null
            }, e.createCaptionsTrack = function (t) {
                this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
            }, e.createNativeTrack = function (t) {
                if (!this.captionsTracks[t]) {
                    var e = this.captionsProperties, r = this.captionsTracks, i = this.media, n = e[t], a = n.label,
                        s = n.languageCode, o = this.getExistingTrack(t);
                    if (o) r[t] = o, Le(r[t]), Ee(r[t], i); else {
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
                    Le(t[e]), delete t[e]
                })), this.nonNativeCaptionsTracks = {}
            }, e.onManifestLoading = function () {
                this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0,
                    0: {start: 0, prevCC: -1, new: !0}
                }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
            }, e._cleanTracks = function () {
                var t = this.media;
                if (t) {
                    var e = t.textTracks;
                    if (e) for (var r = 0; r < e.length; r++) Le(e[r])
                }
            }, e.onSubtitleTracksUpdated = function (t, e) {
                var r = this, i = e.subtitleTracks || [], n = i.some((function (t) {
                    return t.textCodec === ha
                }));
                if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
                    if (Tn(this.tracks, i)) return void (this.tracks = i);
                    if (this.textTracks = [], this.tracks = i, this.config.renderTextTracksNatively) {
                        var a = this.media ? this.media.textTracks : null;
                        this.tracks.forEach((function (t, e) {
                            var i;
                            if (a && e < a.length) {
                                for (var n = null, s = 0; s < a.length; s++) if (La(a[s], t)) {
                                    n = a[s];
                                    break
                                }
                                n && (i = n)
                            }
                            if (i) Le(i); else {
                                var o = r._captionsOrSubtitlesFromCharacteristics(t);
                                (i = r.createTextTrack(o, t.name, t.lang)) && (i.mode = "disabled")
                            }
                            i && (i.groupId = t.groupId, r.textTracks.push(i))
                        }))
                    } else if (this.tracks.length) {
                        var s = this.tracks.map((function (t) {
                            return {label: t.name, kind: t.type.toLowerCase(), default: t.default, subtitleTrack: t}
                        }));
                        this.hls.trigger(S.NON_NATIVE_TEXT_TRACKS_FOUND, {tracks: s})
                    }
                }
            }, e._captionsOrSubtitlesFromCharacteristics = function (t) {
                if (t.attrs.CHARACTERISTICS) {
                    var e = /transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),
                        r = /describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);
                    if (e && r) return "captions"
                }
                return "subtitles"
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
                var r = this.cea608Parser1, i = this.cea608Parser2, n = this.lastSn, a = this.lastPartIndex;
                if (this.enabled && r && i && e.frag.type === ge) {
                    var s, o, l = e.frag.sn,
                        u = null != (s = null == e || null == (o = e.part) ? void 0 : o.index) ? s : -1;
                    l === n + 1 || l === n && u === a + 1 || (r.reset(), i.reset()), this.lastSn = l, this.lastPartIndex = u
                }
            }, e.onFragLoaded = function (t, e) {
                var r = e.frag, i = e.payload;
                if (r.type === me) if (i.byteLength) {
                    var n = r.decryptdata, a = "stats" in e;
                    if (null == n || !n.encrypted || a) {
                        var s = this.tracks[r.level], o = this.vttCCs;
                        o[r.cc] || (o[r.cc] = {
                            start: r.start,
                            prevCC: this.prevCC,
                            new: !0
                        }, this.prevCC = r.cc), s && s.textCodec === ha ? this._parseIMSC1(r, i) : this._parseVTTs(e)
                    }
                } else this.hls.trigger(S.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: r,
                    error: new Error("Empty subtitle payload")
                })
            }, e._parseIMSC1 = function (t, e) {
                var r = this, i = this.hls;
                ga(e, this.initPTS[t.cc], (function (e) {
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
                    ua(null != (e = i.initSegment) && e.data ? xt(i.initSegment.data, new Uint8Array(n)) : n, this.initPTS[i.cc], this.vttCCs, i.cc, i.start, (function (t) {
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
                i.textCodec || ga(e, this.initPTS[t.cc], (function () {
                    i.textCodec = ha, r._parseIMSC1(t, e)
                }), (function () {
                    i.textCodec = "wvtt"
                }))
            }, e._appendCues = function (t, e) {
                var r = this.hls;
                if (this.config.renderTextTracksNatively) {
                    var i = this.textTracks[e];
                    if (!i || "disabled" === i.mode) return;
                    t.forEach((function (t) {
                        return Se(i, t)
                    }))
                } else {
                    var n = this.tracks[e];
                    if (!n) return;
                    var a = n.default ? "default" : "subtitles" + e;
                    r.trigger(S.CUES_PARSED, {type: "subtitles", cues: t, track: a})
                }
            }, e.onFragDecrypted = function (t, e) {
                e.frag.type === me && this.onFragLoaded(S.FRAG_LOADED, e)
            }, e.onSubtitleTracksCleared = function () {
                this.tracks = [], this.captionsTracks = {}
            }, e.onFragParsingUserdata = function (t, e) {
                var r = this.cea608Parser1, i = this.cea608Parser2;
                if (this.enabled && r && i) {
                    var n = e.frag, a = e.samples;
                    if (n.type !== ge || "NONE" !== this.closedCaptionsForLevel(n)) for (var s = 0; s < a.length; s++) {
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
                            return Re(o[t], r, i)
                        }))
                    }
                    if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                        var l = this.textTracks;
                        Object.keys(l).forEach((function (t) {
                            return Re(l[t], r, n)
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

        function La(t, e) {
            return !!t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
        }

        var Ra = function () {
            function t(t) {
                this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
            }

            var e = t.prototype;
            return e.setStreamController = function (t) {
                this.streamController = t
            }, e.destroy = function () {
                this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
            }, e.registerListeners = function () {
                var t = this.hls;
                t.on(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(S.MANIFEST_PARSED, this.onManifestParsed, this), t.on(S.BUFFER_CODECS, this.onBufferCodecs, this), t.on(S.MEDIA_DETACHING, this.onMediaDetaching, this)
            }, e.unregisterListener = function () {
                var t = this.hls;
                t.off(S.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(S.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(S.MANIFEST_PARSED, this.onManifestParsed, this), t.off(S.BUFFER_CODECS, this.onBufferCodecs, this), t.off(S.MEDIA_DETACHING, this.onMediaDetaching, this)
            }, e.onFpsDropLevelCapping = function (t, e) {
                var r = this.hls.levels[e.droppedLevel];
                this.isLevelAllowed(r) && this.restrictedLevels.push({
                    bitrate: r.bitrate,
                    height: r.height,
                    width: r.width
                })
            }, e.onMediaAttaching = function (t, e) {
                this.media = e.media instanceof HTMLVideoElement ? e.media : null, this.clientRect = null
            }, e.onManifestParsed = function (t, e) {
                var r = this.hls;
                this.restrictedLevels = [], this.firstLevel = e.firstLevel, r.config.capLevelToPlayerSize && e.video && this.startCapping()
            }, e.onBufferCodecs = function (t, e) {
                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
            }, e.onMediaDetaching = function () {
                this.stopCapping()
            }, e.detectPlayerSize = function () {
                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                    var t = this.hls.levels;
                    if (t.length) {
                        var e = this.hls;
                        e.autoLevelCapping = this.getMaxLevel(t.length - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
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
                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
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
                for (var i, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
                    var o = t[s];
                    if ((o.width >= e || o.height >= r) && (i = o, !(n = t[s + 1]) || i.width !== n.width || i.height !== n.height)) {
                        a = s;
                        break
                    }
                }
                return a
            }, a(t, [{
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
        }(), Aa = function () {
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
        }(), ka = "[eme]", ba = function () {
            function t(e) {
                this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = t.CDMCleanupPromise ? [t.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = w.debug.bind(w, ka), this.log = w.log.bind(w, ka), this.warn = w.warn.bind(w, ka), this.error = w.error.bind(w, ka), this.hls = e, this.config = e.config, this.registerListeners()
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
                if (t === j.WIDEVINE && i) return i;
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
                            s.length ? t(s) : i(e instanceof Da ? e : new Da({
                                type: L.KEY_SYSTEM_ERROR,
                                details: R.KEY_SYSTEM_NO_ACCESS,
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
                    return null === et && "http:" === self.location.protocol && (i = "navigator.requestMediaKeySystemAccess is not available over insecure protocol " + location.protocol), Promise.reject(new Error(i))
                }
                return r(t, e)
            }, e.getMediaKeysPromise = function (t, e, r) {
                var i = this, n = function (t, e, r, i) {
                        var n;
                        switch (t) {
                            case j.FAIRPLAY:
                                n = ["cenc", "sinf"];
                                break;
                            case j.WIDEVINE:
                            case j.PLAYREADY:
                                n = ["cenc"];
                                break;
                            case j.CLEARKEY:
                                n = ["cenc", "keyids"];
                                break;
                            default:
                                throw new Error("Unknown key-system: " + t)
                        }
                        return function (t, e, r, i) {
                            return [{
                                initDataTypes: t,
                                persistentState: i.persistentState || "not-allowed",
                                distinctiveIdentifier: i.distinctiveIdentifier || "not-allowed",
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
                this.log('Creating key-system session "' + r + '" keyId: ' + Tt(e.keyId || []));
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
                return Tt(t.keyId)
            }, e.updateKeySession = function (t, e) {
                var r, i = t.mediaKeysSession;
                return this.log('Updating key-session "' + i.sessionId + '" for keyID ' + Tt((null == (r = t.decryptdata) ? void 0 : r.keyId) || []) + "\n      } (data length: " + (e ? e.byteLength : e) + ")"), i.update(e)
            }, e.selectKeySystemFormat = function (t) {
                var e = Object.keys(t.levelkeys || {});
                return this.keyFormatPromise || (this.log("Selecting key-system from fragment (sn: " + t.sn + " " + t.type + ": " + t.level + ") key formats " + e.join(", ")), this.keyFormatPromise = this.getKeyFormatPromise(e)), this.keyFormatPromise
            }, e.getKeyFormatPromise = function (t) {
                var e = this;
                return new Promise((function (r, i) {
                    var n = tt(e.config), a = t.map($).filter((function (t) {
                        return !!t && -1 !== n.indexOf(t)
                    }));
                    return e.getKeySystemSelectionPromise(a).then((function (t) {
                        var e = t.keySystem, n = Z(e);
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
                this.hls && (this.error(t.message), t instanceof Da ? this.hls.trigger(S.ERROR, t.data) : this.hls.trigger(S.ERROR, {
                    type: L.KEY_SYSTEM_ERROR,
                    details: R.KEY_SYSTEM_NO_KEYS,
                    error: t,
                    fatal: !0
                }))
            }, e.getKeySystemForKeyPromise = function (t) {
                var e = this.getKeyIdString(t), r = this.keyIdToKeySessionPromise[e];
                if (!r) {
                    var i = $(t.keyFormat), n = i ? [i] : tt(this.config);
                    return this.attemptKeySystemAccess(n)
                }
                return r
            }, e.getKeySystemSelectionPromise = function (t) {
                if (t.length || (t = tt(this.config)), 0 === t.length) throw new Da({
                    type: L.KEY_SYSTEM_ERROR,
                    details: R.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
                    fatal: !0
                }, "Missing key-system license configuration options " + JSON.stringify({drmSystems: this.config.drmSystems}));
                return this.attemptKeySystemAccess(t)
            }, e._onMediaEncrypted = function (t) {
                var e = this, r = t.initDataType, i = t.initData;
                if (this.debug('"' + t.type + '" event: init data type: "' + r + '"'), null !== i) {
                    var n, a;
                    if ("sinf" === r && this.config.drmSystems[j.FAIRPLAY]) {
                        var s = Rt(new Uint8Array(i));
                        try {
                            var o = V(JSON.parse(s).sinf), l = _t(new Uint8Array(o));
                            if (!l) return;
                            n = l.subarray(8, 24), a = j.FAIRPLAY
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
                            e.systemId = Tt(new Uint8Array(t, 12, 16));
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
                        0 === u.version && u.systemId === J && u.data && (n = u.data.subarray(8, 24)), a = function (t) {
                            if (t === J) return j.WIDEVINE
                        }(u.systemId)
                    }
                    if (a && n) {
                        for (var h = Tt(n), d = this.keyIdToKeySessionPromise, c = this.mediaKeySessions, f = d[h], g = function () {
                            var t = c[v], a = t.decryptdata;
                            if (a.pssh || !a.keyId) return "continue";
                            var s = Tt(a.keyId);
                            return h === s || -1 !== a.uri.replace(/-/g, "").indexOf(h) ? (f = d[s], delete d[s], a.pssh = new Uint8Array(i), a.keyId = n, f = d[h] = f.then((function () {
                                return e.generateRequestWithPreferredKeySession(t, r, i, "encrypted-event-key-match")
                            })), "break") : void 0
                        }, v = 0; v < c.length; v++) {
                            var m = g();
                            if ("continue" !== m && "break" === m) break
                        }
                        f || (f = d[h] = this.getKeySystemSelectionPromise([a]).then((function (t) {
                            var a, s = t.keySystem, o = t.mediaKeys;
                            e.throwIfDestroyed();
                            var l = new Gt("ISO-23001-7", h, null != (a = Z(s)) ? a : "");
                            return l.pssh = new Uint8Array(i), l.keyId = n, e.attemptSetMediaKeys(s, o).then((function () {
                                e.throwIfDestroyed();
                                var t = e.createMediaKeySessionContext({decryptdata: l, keySystem: s, mediaKeys: o});
                                return e.generateRequestWithPreferredKeySession(t, r, i, "encrypted-event-no-match")
                            }))
                        }))), f.catch((function (t) {
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
                var d = new an;
                t.mediaKeysSession.onmessage = function (e) {
                    var r = t.mediaKeysSession;
                    if (r) {
                        var i = e.messageType, n = e.message;
                        s.log('"' + i + '" message event for session "' + r.sessionId + '" message size: ' + n.byteLength), "license-request" === i || "license-renewal" === i ? s.renewLicense(t, n).catch((function (t) {
                            s.handleError(t), d.emit("error", t)
                        })) : "license-release" === i ? t.keySystem === j.FAIRPLAY && (s.updateKeySession(t, W("acknowledged")), s.removeSession(t)) : s.warn('unhandled media key message type "' + i + '"')
                    } else d.emit("error", new Error("invalid state"))
                }, t.mediaKeysSession.onkeystatuseschange = function (e) {
                    if (t.mediaKeysSession) {
                        s.onKeyStatusChange(t);
                        var r = t.keyStatus;
                        d.emit("keyStatus", r), "expired" === r && (s.warn(t.keySystem + " expired for key " + h), s.renewKeySession(t))
                    } else d.emit("error", new Error("invalid state"))
                };
                var c = new Promise((function (t, e) {
                    d.on("error", e), d.on("keyStatus", (function (r) {
                        r.startsWith("usable") ? t() : "output-restricted" === r ? e(new Da({
                            type: L.KEY_SYSTEM_ERROR,
                            details: R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                            fatal: !1
                        }, "HDCP level output restricted")) : "internal-error" === r ? e(new Da({
                            type: L.KEY_SYSTEM_ERROR,
                            details: R.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                            fatal: !0
                        }, 'key status changed to "' + r + '"')) : "expired" === r ? e(new Error("key expired while generating request")) : s.warn('unhandled key status change "' + r + '"')
                    }))
                }));
                return t.mediaKeysSession.generateRequest(e, r).then((function () {
                    var e;
                    s.log('Request generated for key-session "' + (null == (e = t.mediaKeysSession) ? void 0 : e.sessionId) + '" keyId: ' + h)
                })).catch((function (t) {
                    throw new Da({
                        type: L.KEY_SYSTEM_ERROR,
                        details: R.KEY_SYSTEM_NO_SESSION,
                        error: t,
                        fatal: !1
                    }, "Error generating key-session request: " + t)
                })).then((function () {
                    return c
                })).catch((function (e) {
                    throw d.removeAllListeners(), s.removeSession(t), e
                })).then((function () {
                    return d.removeAllListeners(), t
                }))
            }, e.onKeyStatusChange = function (t) {
                var e = this;
                t.mediaKeysSession.keyStatuses.forEach((function (r, i) {
                    e.log('key status change "' + r + '" for keyStatuses keyId: ' + Tt("buffer" in i ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : new Uint8Array(i)) + " session keyId: " + Tt(new Uint8Array(t.decryptdata.keyId || [])) + " uri: " + t.decryptdata.uri), t.keyStatus = r
                }))
            }, e.fetchServerCertificate = function (t) {
                var e = this.config, r = new (0, e.loader)(e), n = this.getServerCertificateUrl(t);
                return n ? (this.log('Fetching serverCertificate for "' + t + '"'), new Promise((function (a, s) {
                    var o = {responseType: "arraybuffer", url: n}, l = e.certLoadPolicy.default,
                        u = {loadPolicy: l, timeout: l.maxLoadTimeMs, maxRetry: 0, retryDelay: 0, maxRetryDelay: 0},
                        h = {
                            onSuccess: function (t, e, r, i) {
                                a(t.data)
                            }, onError: function (e, r, a, l) {
                                s(new Da({
                                    type: L.KEY_SYSTEM_ERROR,
                                    details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                                    fatal: !0,
                                    networkDetails: a,
                                    response: i({url: o.url, data: void 0}, e)
                                }, '"' + t + '" certificate request failed (' + n + "). Status: " + e.code + " (" + e.text + ")"))
                            }, onTimeout: function (e, r, i) {
                                s(new Da({
                                    type: L.KEY_SYSTEM_ERROR,
                                    details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
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
                        a(new Da({
                            type: L.KEY_SYSTEM_ERROR,
                            details: R.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                            error: t,
                            fatal: !0
                        }, t.message))
                    }))
                }))
            }, e.renewLicense = function (t, e) {
                var r = this;
                return this.requestLicense(t, new Uint8Array(e)).then((function (e) {
                    return r.updateKeySession(t, new Uint8Array(e)).catch((function (t) {
                        throw new Da({
                            type: L.KEY_SYSTEM_ERROR,
                            details: R.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                            error: t,
                            fatal: !0
                        }, t.message)
                    }))
                }))
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
                            if (r._requestLicenseFailureCount++, r._requestLicenseFailureCount > d || o.status >= 400 && o.status < 500) a(new Da({
                                type: L.KEY_SYSTEM_ERROR,
                                details: R.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0,
                                networkDetails: o,
                                response: {url: s, data: void 0, code: o.status, text: o.statusText}
                            }, "License Request XHR failed (" + s + "). Status: " + o.status + " (" + o.statusText + ")")); else {
                                var c = d - r._requestLicenseFailureCount + 1;
                                r.warn("Retrying license request, " + c + " attempts left"), r.requestLicense(t, e).then(n, a)
                            }
                        }
                    }, t.licenseXhr && t.licenseXhr.readyState !== XMLHttpRequest.DONE && t.licenseXhr.abort(), t.licenseXhr = o, r.setupLicenseXHR(o, s, t, e).then((function (t) {
                        var e = t.xhr, r = t.licenseChallenge;
                        e.send(r)
                    }))
                }))
            }, e.onMediaAttached = function (t, e) {
                if (this.config.emeEnabled) {
                    var r = e.media;
                    this.media = r, r.addEventListener("encrypted", this.onMediaEncrypted), r.addEventListener("waitingforkey", this.onWaitingForKey)
                }
            }, e.onMediaDetached = function () {
                var e = this, r = this.media, i = this.mediaKeySessions;
                r && (r.removeEventListener("encrypted", this.onMediaEncrypted), r.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Gt.clearKeyUriToKeyIdMap();
                var n = i.length;
                t.CDMCleanupPromise = Promise.all(i.map((function (t) {
                    return e.removeSession(t)
                })).concat(null == r ? void 0 : r.setMediaKeys(null).catch((function (t) {
                    e.log("Could not clear media keys: " + t + ". media.src: " + (null == r ? void 0 : r.src))
                })))).then((function () {
                    n && (e.log("finished closing key sessions and clearing media keys"), i.length = 0)
                })).catch((function (t) {
                    e.log("Could not close sessions and clear media keys: " + t + ". media.src: " + (null == r ? void 0 : r.src))
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
                    this.log("Remove licenses and keys and close session " + r.sessionId), r.onmessage = null, r.onkeystatuseschange = null, i && i.readyState !== XMLHttpRequest.DONE && i.abort(), t.mediaKeysSession = t.decryptdata = t.licenseXhr = void 0;
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
        ba.CDMCleanupPromise = void 0;
        var Da = function (t) {
            function e(e, r) {
                var i;
                return (i = t.call(this, r) || this).data = void 0, e.error || (e.error = new Error(r)), i.data = e, e.err = e.error, i
            }

            return l(e, t), e
        }(f(Error)), Ia = "m", wa = "a", Ca = "v", _a = "av", Pa = "i", xa = "tt", Fa = function () {
            function t(e) {
                var r = this;
                this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function () {
                    r.initialized && (r.starved = !0), r.buffering = !0
                }, this.onPlaying = function () {
                    r.initialized || (r.initialized = !0), r.buffering = !1
                }, this.applyPlaylistData = function (t) {
                    try {
                        r.apply(t, {ot: Ia, su: !r.initialized})
                    } catch (t) {
                        w.warn("Could not generate manifest CMCD data.", t)
                    }
                }, this.applyFragmentData = function (t) {
                    try {
                        var e = t.frag, i = r.hls.levels[e.level], n = r.getObjectType(e),
                            a = {d: 1e3 * e.duration, ot: n};
                        n !== Ca && n !== wa && n != _a || (a.br = i.bitrate / 1e3, a.tb = r.getTopBandwidth(n) / 1e3, a.bl = r.getBufferLength(n)), r.apply(t, a)
                    } catch (t) {
                        w.warn("Could not generate segment CMCD data.", t)
                    }
                }, this.hls = e;
                var i = this.config = e.config, n = i.cmcd;
                null != n && (i.pLoader = this.createPlaylistLoader(), i.fLoader = this.createFragmentLoader(), this.sid = n.sessionId || t.uuid(), this.cid = n.contentId, this.useHeaders = !0 === n.useHeaders, this.registerListeners())
            }

            var e = t.prototype;
            return e.registerListeners = function () {
                var t = this.hls;
                t.on(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(S.MEDIA_DETACHED, this.onMediaDetached, this), t.on(S.BUFFER_CREATED, this.onBufferCreated, this)
            }, e.unregisterListeners = function () {
                var t = this.hls;
                t.off(S.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(S.MEDIA_DETACHED, this.onMediaDetached, this), t.off(S.BUFFER_CREATED, this.onBufferCreated, this)
            }, e.destroy = function () {
                this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
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
                    sf: "h",
                    sid: this.sid,
                    cid: this.cid,
                    pr: null == (t = this.media) ? void 0 : t.playbackRate,
                    mtp: this.hls.bandwidthEstimate / 1e3
                }
            }, e.apply = function (e, r) {
                void 0 === r && (r = {}), o(r, this.createData());
                var i = r.ot === Pa || r.ot === Ca || r.ot === _a;
                if (this.starved && i && (r.bs = !0, r.su = !0, this.starved = !1), null == r.su && (r.su = this.buffering), this.useHeaders) {
                    var n = t.toHeaders(r);
                    if (!Object.keys(n).length) return;
                    e.headers || (e.headers = {}), o(e.headers, n)
                } else {
                    var a = t.toQuery(r);
                    if (!a) return;
                    e.url = t.appendQueryToUri(e.url, a)
                }
            }, e.getObjectType = function (t) {
                var e = t.type;
                return "subtitle" === e ? xa : "initSegment" === t.sn ? Pa : "audio" === e ? wa : "main" === e ? this.hls.audioTracks.length ? Ca : _a : void 0
            }, e.getTopBandwidth = function (t) {
                var e, r = 0, i = this.hls;
                if (t === wa) e = i.audioTracks; else {
                    var n = i.maxAutoLevel, a = n > -1 ? n + 1 : i.levels.length;
                    e = i.levels.slice(0, a)
                }
                for (var s, o = v(e); !(s = o()).done;) {
                    var l = s.value;
                    l.bitrate > r && (r = l.bitrate)
                }
                return r > 0 ? r : NaN
            }, e.getBufferLength = function (t) {
                var e = this.hls.media, r = t === wa ? this.audioBuffer : this.videoBuffer;
                return r && e ? 1e3 * Ir.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len : NaN
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
                    }, a(t, [{
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
                    }, a(t, [{
                        key: "stats", get: function () {
                            return this.loader.stats
                        }
                    }, {
                        key: "context", get: function () {
                            return this.loader.context
                        }
                    }]), t
                }()
            }, t.uuid = function () {
                var t = URL.createObjectURL(new Blob), e = t.toString();
                return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
            }, t.serialize = function (t) {
                for (var e, r = [], i = function (t) {
                    return !Number.isNaN(t) && null != t && "" !== t && !1 !== t
                }, n = function (t) {
                    return Math.round(t)
                }, a = function (t) {
                    return 100 * n(t / 100)
                }, s = {
                    br: n, d: n, bl: a, dl: a, mtp: a, nor: function (t) {
                        return encodeURIComponent(t)
                    }, rtp: a, tb: n
                }, o = v(Object.keys(t || {}).sort()); !(e = o()).done;) {
                    var l = e.value, u = t[l];
                    if (i(u) && !("v" === l && 1 === u || "pr" == l && 1 === u)) {
                        var h = s[l];
                        h && (u = h(u));
                        var d = typeof u, c = void 0;
                        c = "ot" === l || "sf" === l || "st" === l ? l + "=" + u : "boolean" === d ? l : "number" === d ? l + "=" + u : l + "=" + JSON.stringify(u), r.push(c)
                    }
                }
                return r.join(",")
            }, t.toHeaders = function (e) {
                for (var r = {}, i = ["Object", "Request", "Session", "Status"], n = [{}, {}, {}, {}], a = {
                    br: 0,
                    d: 0,
                    ot: 0,
                    tb: 0,
                    bl: 1,
                    dl: 1,
                    mtp: 1,
                    nor: 1,
                    nrr: 1,
                    su: 1,
                    cid: 2,
                    pr: 2,
                    sf: 2,
                    sid: 2,
                    st: 2,
                    v: 2,
                    bs: 3,
                    rtp: 3
                }, s = 0, o = Object.keys(e); s < o.length; s++) {
                    var l = o[s];
                    n[null != a[l] ? a[l] : 1][l] = e[l]
                }
                for (var u = 0; u < n.length; u++) {
                    var h = t.serialize(n[u]);
                    h && (r["CMCD-" + i[u]] = h)
                }
                return r
            }, t.toQuery = function (e) {
                return "CMCD=" + encodeURIComponent(t.serialize(e))
            }, t.appendQueryToUri = function (t, e) {
                if (!e) return t;
                var r = t.includes("?") ? "&" : "?";
                return "" + t + r + e
            }, t
        }(), Ma = function () {
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
                if (this.started = !0, self.clearTimeout(this.reloadTimer), this.enabled && this.uri) if (this.updated) {
                    var t = Math.max(1e3 * this.timeToLoad - (performance.now() - this.updated), 0);
                    this.scheduleRefresh(this.uri, t)
                } else this.loadSteeringManifest(this.uri)
            }, e.stopLoad = function () {
                this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), self.clearTimeout(this.reloadTimer)
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
                if ((null == r ? void 0 : r.action) === ir && r.flags === sr) {
                    var i = this.pathwayPriority, n = this.pathwayId;
                    this.penalizedPathways[n] || (this.penalizedPathways[n] = performance.now()), !i && this.levels && (i = this.levels.reduce((function (t, e) {
                        return -1 === t.indexOf(e.pathwayId) && t.push(e.pathwayId), t
                    }), [])), i && i.length > 1 && (this.updatePathwayPriority(i), r.resolved = this.pathwayId !== n)
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
                    if (!r[a]) {
                        if (a === this.pathwayId) return;
                        var s = this.hls.nextLoadLevel, o = this.hls.levels[s];
                        if ((e = this.getLevelsForPathway(a)).length > 0) {
                            this.log('Setting Pathway to "' + a + '"'), this.pathwayId = a, this.hls.trigger(S.LEVELS_UPDATED, {levels: e});
                            var l = this.hls.levels[s];
                            o && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== o.attrs["STABLE-VARIANT-ID"] && l.bitrate !== o.bitrate && this.log("Unstable Pathways change from bitrate " + o.bitrate + " to " + l.bitrate), this.hls.nextLoadLevel = s);
                            break
                        }
                    }
                }
            }, e.clonePathways = function (t) {
                var e = this, r = this.levels;
                if (r) {
                    var i = {}, n = {};
                    t.forEach((function (t) {
                        var a = t.ID, s = t["BASE-ID"], l = t["URI-REPLACEMENT"];
                        if (!r.some((function (t) {
                            return t.pathwayId === a
                        }))) {
                            var u = e.getLevelsForPathway(s).map((function (t) {
                                var e = o({}, t);
                                e.details = void 0, e.url = Na(t.uri, t.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l);
                                var r = new P(t.attrs);
                                r["PATHWAY-ID"] = a;
                                var s = r.AUDIO && r.AUDIO + "_clone_" + a,
                                    u = r.SUBTITLES && r.SUBTITLES + "_clone_" + a;
                                s && (i[r.AUDIO] = s, r.AUDIO = s), u && (n[r.SUBTITLES] = u, r.SUBTITLES = u), e.attrs = r;
                                var h = new Ne(e);
                                return dr(h, "audio", s), dr(h, "text", u), h
                            }));
                            r.push.apply(r, u), Oa(e.audioTracks, i, l, a), Oa(e.subtitleTracks, n, l, a)
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
                                r.scheduleRefresh(r.uri || n.url), l && r.clonePathways(l), u && r.updatePathwayPriority(u)
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
                void 0 === e && (e = 1e3 * this.timeToLoad), self.clearTimeout(this.reloadTimer), this.reloadTimer = self.setTimeout((function () {
                    r.loadSteeringManifest(t)
                }), e)
            }, t
        }();

        function Oa(t, e, r, i) {
            t && Object.keys(e).forEach((function (n) {
                var a = t.filter((function (t) {
                    return t.groupId === n
                })).map((function (t) {
                    var a = o({}, t);
                    return a.details = void 0, a.attrs = new P(a.attrs), a.url = a.attrs.URI = Na(t.url, t.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", r), a.groupId = a.attrs["GROUP-ID"] = e[n], a.attrs["PATHWAY-ID"] = i, a
                }));
                t.push.apply(t, a)
            }))
        }

        function Na(t, e, r, i) {
            var n, a = i.HOST, s = i.PARAMS, o = i[r];
            e && (n = null == o ? void 0 : o[e]) && (t = n);
            var l = new self.URL(t);
            return a && !n && (l.host = a), s && Object.keys(s).sort().forEach((function (t) {
                t && l.searchParams.set(t, s[t])
            })), l.href
        }

        var Ua = /^age:\s*[\d.]+\s*$/im, Ba = function () {
            function t(t) {
                this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t && t.xhrSetup || null, this.stats = new M, this.retryDelay = 0
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
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
                if (e) {
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
                var i = this.context.headers, n = r.loadPolicy, a = n.maxTimeToFirstByteMs, s = n.maxLoadTimeMs;
                if (i) for (var o in i) t.setRequestHeader(o, i[o]);
                e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, self.clearTimeout(this.requestTimeout), r.timeout = a && E(a) ? a : s, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.timeout), t.send()
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
                            ze(d, r.retry, !1, a) ? this.retry(d) : (w.error(a + " while loading " + t.url), this.callbacks.onError({
                                code: a,
                                text: e.statusText
                            }, t, e, r))
                        }
                    }
                }
            }, e.loadtimeout = function () {
                var t, e = null == (t = this.config) ? void 0 : t.loadPolicy.timeoutRetry;
                if (ze(e, this.stats.retry, !0)) this.retry(e); else {
                    w.warn("timeout while loading " + this.context.url);
                    var r = this.callbacks;
                    r && (this.abortInternal(), r.onTimeout(this.stats, this.context, this.loader))
                }
            }, e.retry = function (t) {
                var e = this.context, r = this.stats;
                this.retryDelay = qe(t, r.retry), r.retry++, w.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + e.url + ", retrying " + r.retry + "/" + t.maxNumRetry + " in " + this.retryDelay + "ms"), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
            }, e.loadprogress = function (t) {
                var e = this.stats;
                e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
            }, e.getCacheAge = function () {
                var t = null;
                if (this.loader && Ua.test(this.loader.getAllResponseHeaders())) {
                    var e = this.loader.getResponseHeader("age");
                    t = e ? parseFloat(e) : null
                }
                return t
            }, e.getResponseHeader = function (t) {
                return this.loader && new RegExp("^" + t + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null
            }, t
        }(), Ga = /(\d+)-(\d+)\/(\d+)/, Ka = function () {
            function t(t) {
                this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Ha, this.controller = new self.AbortController, this.stats = new M
            }

            var e = t.prototype;
            return e.destroy = function () {
                this.loader = this.callbacks = null, this.abortInternal()
            }, e.abortInternal = function () {
                var t = this.response;
                null != t && t.ok || (this.stats.aborted = !0, this.controller.abort())
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
                this.context = t, this.config = e, this.callbacks = r, this.request = this.fetchSetup(t, a), self.clearTimeout(this.requestTimeout), e.timeout = d && E(d) ? d : c, this.requestTimeout = self.setTimeout((function () {
                    i.abortInternal(), r.onTimeout(n, t, i.response)
                }), e.timeout), self.fetch(this.request).then((function (a) {
                    i.response = i.loader = a;
                    var o = Math.max(self.performance.now(), n.loading.start);
                    if (self.clearTimeout(i.requestTimeout), e.timeout = c, i.requestTimeout = self.setTimeout((function () {
                        i.abortInternal(), r.onTimeout(n, t, i.response)
                    }), c - (o - n.loading.start)), !a.ok) {
                        var u = a.status, h = a.statusText;
                        throw new Va(h || "fetch, bad network response", u, a)
                    }
                    return n.loading.first = o, n.total = function (t) {
                        var e = t.get("Content-Range");
                        if (e) {
                            var r = function (t) {
                                var e = Ga.exec(t);
                                if (e) return parseInt(e[2]) - parseInt(e[1]) + 1
                            }(e);
                            if (E(r)) return r
                        }
                        var i = t.get("Content-Length");
                        if (i) return parseInt(i)
                    }(a.headers) || n.total, s && E(e.highWaterMark) ? i.loadProgressively(a, n, t, e.highWaterMark, s) : l ? a.arrayBuffer() : "json" === t.responseType ? a.json() : a.text()
                })).then((function (a) {
                    var o = i.response;
                    self.clearTimeout(i.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first);
                    var l = a[u];
                    l && (n.loaded = n.total = l);
                    var h = {url: o.url, data: a, code: o.status};
                    s && !E(e.highWaterMark) && s(n, t, a, o), r.onSuccess(h, n, t, o)
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
                var a = new mn, s = t.body.getReader();
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

        function Ha(t, e) {
            return new self.Request(t.url, e)
        }

        var Va = function (t) {
            function e(e, r, i) {
                var n;
                return (n = t.call(this, e) || this).code = void 0, n.details = void 0, n.code = r, n.details = i, n
            }

            return l(e, t), e
        }(f(Error)), Ya = /\s/, Wa = i(i({
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            ignoreDevicePixelRatio: !1,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            backBufferLength: 1 / 0,
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
            loader: Ba,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            licenseResponseCallback: void 0,
            abrController: vn,
            bufferController: In,
            capLevelController: Ra,
            errorController: lr,
            fpsController: Aa,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
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
            requestMediaKeySystemAccessFunc: et,
            testBandwidth: !0,
            progressive: !1,
            lowLatencyMode: !0,
            cmcd: void 0,
            enableDateRangeMetadataCues: !0,
            enableEmsgMetadataCues: !0,
            enableID3MetadataCues: !0,
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
                        for (var c, f = 0; f < n.chars.length; f++) Ya.test(n.chars[f].uchar) && s ? o++ : (l += n.chars[f].uchar, s = !1);
                        n.cueStartTime = e, e === r && (r += 1e-4), o >= 16 ? o-- : o++;
                        var g = ia(l.trim()), v = la(e, r, g);
                        null != t && null != (c = t.cues) && c.getCueById(v) || ((a = new h(e, r, g)).id = v, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(a))
                    }
                    return t && u.length && (u.sort((function (t, e) {
                        return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                    })), u.forEach((function (e) {
                        return Se(t, e)
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
            subtitleStreamController: Sn,
            subtitleTrackController: Rn,
            timelineController: Sa,
            audioStreamController: pn,
            audioTrackController: yn,
            emeController: ba,
            cmcdController: Fa,
            contentSteeringController: Ma
        });

        function ja(t) {
            return t && "object" == typeof t ? Array.isArray(t) ? t.map(ja) : Object.keys(t).reduce((function (e, r) {
                return e[r] = ja(t[r]), e
            }), {}) : t
        }

        function qa(t) {
            var e = t.loader;
            e !== Ka && e !== Ba ? (w.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function () {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                    return new self.ReadableStream({}), !0
                } catch (t) {
                }
                return !1
            }() && (t.loader = Ka, t.progressive = !0, t.enableSoftwareAES = !0, w.log("[config]: Progressive streaming enabled, using FetchLoader"))
        }

        var Xa = function () {
            function t(e) {
                void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new an, this._autoLevelCapping = void 0, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, I(e.debug || !1, "Hls instance");
                var r = this.config = function (t, e) {
                    if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                    if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                    var r = ja(t), n = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
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
                this.userConfig = e, this._autoLevelCapping = -1, r.progressive && qa(r);
                var n = r.abrController, a = r.bufferController, s = r.capLevelController, o = r.errorController,
                    l = r.fpsController, u = new o(this), h = this.abrController = new n(this),
                    d = this.bufferController = new a(this), c = this.capLevelController = new s(this), f = new l(this),
                    g = new Te(this), v = new Ce(this), m = r.contentSteeringController, p = m ? new m(this) : null,
                    y = this.levelController = new hr(this, p), T = new pr(this), E = new kr(this.config),
                    L = this.streamController = new cn(this, T, E);
                c.setStreamController(L), f.setStreamController(L);
                var R = [g, y, L];
                p && R.splice(1, 0, p), this.networkControllers = R;
                var A = [h, d, c, f, v, T];
                this.audioTrackController = this.createController(r.audioTrackController, R);
                var k = r.audioStreamController;
                k && R.push(new k(this, T, E)), this.subtitleTrackController = this.createController(r.subtitleTrackController, R);
                var b = r.subtitleStreamController;
                b && R.push(new b(this, T, E)), this.createController(r.timelineController, A), E.emeController = this.emeController = this.createController(r.emeController, A), this.cmcdController = this.createController(r.cmcdController, A), this.latencyController = this.createController(_e, A), this.coreComponents = A, R.push(u);
                var D = u.onErrorOut;
                "function" == typeof D && this.on(S.ERROR, D, u)
            }

            t.isSupported = function () {
                return function () {
                    var t = qt();
                    if (!t) return !1;
                    var e = Zr(),
                        r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                    return !!r && !!i
                }()
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
                    w.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), this.trigger(S.ERROR, {
                        type: L.OTHER_ERROR,
                        details: R.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: t,
                        error: e
                    })
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
                    i = this.url = T.buildAbsoluteURL(self.location.href, t, {alwaysNormalize: !0});
                w.log("loadSource:" + i), e && r && (r !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)), this.trigger(S.MANIFEST_LOADING, {url: t})
            }, e.startLoad = function (t) {
                void 0 === t && (t = -1), w.log("startLoad(" + t + ")"), this.networkControllers.forEach((function (e) {
                    e.startLoad(t)
                }))
            }, e.stopLoad = function () {
                w.log("stopLoad"), this.networkControllers.forEach((function (t) {
                    t.stopLoad()
                }))
            }, e.swapAudioCodec = function () {
                w.log("swapAudioCodec"), this.streamController.swapAudioCodec()
            }, e.recoverMediaError = function () {
                w.log("recoverMediaError");
                var t = this._media;
                this.detachMedia(), t && this.attachMedia(t)
            }, e.removeLevel = function (t, e) {
                void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
            }, a(t, [{
                key: "levels", get: function () {
                    var t = this.levelController.levels;
                    return t || []
                }
            }, {
                key: "currentLevel", get: function () {
                    return this.streamController.currentLevel
                }, set: function (t) {
                    w.log("set currentLevel:" + t), this.loadLevel = t, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
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
                    return this.levelController.startLevel
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
                    this._autoLevelCapping !== t && (w.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
                }
            }, {
                key: "bandwidthEstimate", get: function () {
                    var t = this.abrController.bwEstimator;
                    return t ? t.getEstimate() : NaN
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
                    Pe.indexOf(t) > -1 && (this._maxHdcpLevel = t)
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
                    if (t = -1 === r && e && e.length ? e.length - 1 : r, i) for (var n = t; n--;) {
                        var a = e[n].attrs["HDCP-LEVEL"];
                        if (a && a <= i) return n
                    }
                    return t
                }
            }, {
                key: "nextAutoLevel", get: function () {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                }, set: function (t) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
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
                    return "1.4.10"
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
                    return R
                }
            }, {
                key: "DefaultConfig", get: function () {
                    return t.defaultConfig ? t.defaultConfig : Wa
                }, set: function (e) {
                    t.defaultConfig = e
                }
            }]), t
        }();
        return Xa.defaultConfig = void 0, Xa
    }, "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (r = "undefined" != typeof globalThis ? globalThis : r || self).Hls = i()
}(!1);