(function(d){	const l = d['ar'] = d['ar'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Aquamarine:"",Black:"",Blue:"",Bold:"عريض","Bulleted List":"قائمة نقطية","Choose heading":"اختر عنوان","Dim grey":"","Dropdown toolbar":"","Edit block":"","Editor toolbar":"",Green:"",Grey:"",Heading:"عنوان","Heading 1":"عنوان 1","Heading 2":"عنوان 2","Heading 3":"عنوان 3","Heading 4":"","Heading 5":"","Heading 6":"",Italic:"مائل","Light blue":"","Light green":"","Light grey":"",Next:"","Numbered List":"قائمة رقمية",Orange:"",Paragraph:"فقرة",Previous:"",Purple:"",Red:"",Redo:"إعادة","Rich Text Editor":"معالج نصوص","Rich Text Editor, %0":"معالج نصوص، %0","Show more items":"",Turquoise:"",Undo:"تراجع",White:"",Yellow:""}	);l.getPluralForm=function(n){return n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));