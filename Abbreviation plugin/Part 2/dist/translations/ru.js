(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 из %1",Aquamarine:"Аквамариновый",Black:"Чёрный",Blue:"Синий",Bold:"Жирный","Bulleted List":"Маркированный список","Choose heading":"Выбор стиля","Dim grey":"Тёмно-серый","Dropdown toolbar":"Выпадающая панель инструментов","Edit block":"Редактировать блок","Editor toolbar":"Панель инструментов редактора",Green:"Зелёный",Grey:"Серый",Heading:"Стиль","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","Insert paragraph after block":"Вставить параграф после блока","Insert paragraph before block":"Вставить параграф перед блоком",Italic:"Курсив","Light blue":"Голубой","Light green":"Салатовый","Light grey":"Светло-серый",Next:"Следующий","Numbered List":"Нумерованный список",Orange:"Оранжевый",Paragraph:"Параграф",Previous:"Предыдущий",Purple:"Фиолетовый",Red:"Красный",Redo:"Повторить","Rich Text Editor":"Редактор","Rich Text Editor, %0":"Редактор, %0","Select all":"Выбрать все","Show more items":"Другие инструменты",Turquoise:"Бирюзовый",Undo:"Отменить",White:"Белый",Yellow:"Жёлтый"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));