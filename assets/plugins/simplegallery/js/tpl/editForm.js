!function(){var n=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l.editForm=n({1:function(){return"selected"},3:function(){return" checked"},compiler:[6,">= 2.0.0-beta.1"],main:function(n,l,a,t){var e,r,i="function",s=l.helperMissing,d=this.escapeExpression,o=this.lambda,u='<div id="sgEdit">\r\n    <div class="sgRow">\r\n        <div class="image" style="font-size:0;text-align:center;">\r\n            <img src="'+d((r=null!=(r=l.modxSiteUrl||(null!=n?n.modxSiteUrl:n))?r:s,typeof r===i?r.call(n,{name:"modxSiteUrl",hash:{},data:t}):r))+d(o(null!=(e=null!=n?n.data:n)?e.sg_image:e,n))+'">\r\n        </div>\r\n        <div>\r\n            <table>\r\n                <tr>\r\n                    <td class="rowTitle">ID</td>\r\n                    <td>'+d(o(null!=(e=null!=n?n.data:n)?e.sg_id:e,n))+'</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="rowTitle">'+d(o(null!=(e=null!=n?n.sgLang:n)?e.file:e,n))+"</td>\r\n                    <td>"+d(o(null!=(e=null!=n?n.data:n)?e.sg_image:e,n))+'</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="rowTitle">'+d(o(null!=(e=null!=n?n.sgLang:n)?e.size:e,n))+"</td>\r\n                    <td>"+d(o(null!=(e=null!=(e=null!=n?n.data:n)?e.sg_properties:e)?e.width:e,n))+"x"+d(o(null!=(e=null!=(e=null!=n?n.data:n)?e.sg_properties:e)?e.height:e,n))+", "+d((l.bytesToSize||n&&n.bytesToSize||s).call(n,null!=(e=null!=(e=null!=n?n.data:n)?e.sg_properties:e)?e.size:e,{name:"bytesToSize",hash:{},data:t}))+'</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="rowTitle">'+d(o(null!=(e=null!=n?n.sgLang:n)?e.createdon:e,n))+"</td><td>"+d(o(null!=(e=null!=n?n.data:n)?e.sg_createdon:e,n))+'</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class="sgRow">\r\n        <div>\r\n            <form id="sgForm" class="sgForm"><input type="hidden" name="sg_id" value="'+d(o(null!=(e=null!=n?n.data:n)?e.sg_id:e,n))+'">\r\n                <label>'+d(o(null!=(e=null!=n?n.sgLang:n)?e.title:e,n))+'</label>\r\n                <input name="sg_title" maxlength="255" type="text" value="'+d(o(null!=(e=null!=n?n.data:n)?e.sg_title:e,n))+'">\r\n                <label>'+d(o(null!=(e=null!=n?n.sgLang:n)?e.description:e,n))+'</label>\r\n                <textarea name="sg_description">'+d(o(null!=(e=null!=n?n.data:n)?e.sg_description:e,n))+"</textarea>\r\n                <label>"+d(o(null!=(e=null!=n?n.sgLang:n)?e.add:e,n))+'</label>\r\n                <select name="sg_add">\r\n                    <option ';return e=(l.ifCond||n&&n.ifCond||s).call(n,null!=(e=null!=n?n.data:n)?e.sg_add:e,"",{name:"ifCond",hash:{},fn:this.program(1,t),inverse:this.noop,data:t}),null!=e&&(u+=e),u+='> value="">-</option>\r\n                    <option ',e=(l.ifCond||n&&n.ifCond||s).call(n,null!=(e=null!=n?n.data:n)?e.sg_add:e,"before",{name:"ifCond",hash:{},fn:this.program(1,t),inverse:this.noop,data:t}),null!=e&&(u+=e),u+=' value="before">Фото до</option>\r\n                    <option ',e=(l.ifCond||n&&n.ifCond||s).call(n,null!=(e=null!=n?n.data:n)?e.sg_add:e,"process",{name:"ifCond",hash:{},fn:this.program(1,t),inverse:this.noop,data:t}),null!=e&&(u+=e),u+=' value="process">Фото в процессе</option>\r\n                    <option ',e=(l.ifCond||n&&n.ifCond||s).call(n,null!=(e=null!=n?n.data:n)?e.sg_add:e,"after",{name:"ifCond",hash:{},fn:this.program(1,t),inverse:this.noop,data:t}),null!=e&&(u+=e),u+=' value="after">Фото после</option>\r\n                </select>\r\n                <label>'+d(o(null!=(e=null!=n?n.sgLang:n)?e.show:e,n))+'</label>\r\n                <input type="checkbox" name="sg_isactive" value="1"',e=(l.ifCond||n&&n.ifCond||s).call(n,null!=(e=null!=n?n.data:n)?e.sg_isactive:e,"1",{name:"ifCond",hash:{},fn:this.program(3,t),inverse:this.noop,data:t}),null!=e&&(u+=e),u+">"+d(o(null!=(e=null!=n?n.sgLang:n)?e.yes:e,n))+"\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},useData:!0})}();