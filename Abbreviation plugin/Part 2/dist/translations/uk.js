(function(d){	const l = d['uk'] = d['uk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 із %1",Aquamarine:"Аквамариновий",Black:"Чорний",Blue:"Синій",Bold:"Жирний","Bulleted List":"Маркерний список","Choose heading":"Оберіть заголовок","Dim grey":"Темно-сірий","Dropdown toolbar":"Випадаюча панель інструментів","Edit block":"Редагувати блок","Editor toolbar":"Панель інструментів редактора",Green:"Зелений",Grey:"Сірий",Heading:"Заголовок","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","Insert paragraph after block":"Додати абзац після блока","Insert paragraph before block":"Додати абзац перед блоком",Italic:"Курсив","Light blue":"Світло-синій","Light green":"Світло-зелений","Light grey":"Світло-сірий",Next:"Наступний","Numbered List":"Нумерований список",Orange:"Помаранчевий",Paragraph:"Параграф",Previous:"Попередній",Purple:"Фіолетовий",Red:"Червоний",Redo:"Повтор","Rich Text Editor":"Розширений текстовий редактор","Rich Text Editor, %0":"Розширений текстовий редактор, %0","Select all":"Вибрати все","Show more items":"Показати більше",Turquoise:"Бірюзовий",Undo:"Відміна",White:"Білий",Yellow:"Жовтий"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));