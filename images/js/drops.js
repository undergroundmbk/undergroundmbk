
var maters = {
		gg_token:{
				name: 'Грибочки',
				src: imP3 + 'gg_token.gif',
				recipes:  {'staff54': 17,'staff55': 17,'hammer75': 12,'naruchi90': 10,'ring136': 10,'roba12_1': 3,'roba12_2': 3,'roba12_3': 3,'roba12_4': 3,'pot_ggmanaregen': 1,'pot_gghpregen': 1},
 			descr: 'Масса: 0.1<BR />Долговечность: 0/1<BR /><b>Описание:</b><BR />Очень аппетитный деликатес...<BR />Сделано в Suncity<BR />  Насобирав их в достаточном количестве, можно обменять их у "Грибоеда" на нужные вещи.'
		},
		gg_small_token:{
				name: 'Маленькие Грибочки',
				src: imP3 + 'gg_small_token.gif',
				recipes:  null,
 			descr: 'Масса: 0.1<BR />Долговечность: 0/1<BR />Сделано в Suncity<BR />Если у вас нет репутации в городе Sun City, то для того, что бы вам стали доступны задания, необходимо поговорить с "Мудрый Гусениц" и принести ему 10 "Маленьких Грибочков".'
		},

		mater1:{
				name: 'Шкура пещерного оленя',  cena: 0.1,
				src: imP3 + 'mater1.gif',
				recipes: null
		},
		mater2:{
				name: 'Золото',  cena: 0.1,
				src: imP3 + 'mater2.gif',
				recipes: null
		},
		mater3:{
				name: 'Серебро',  cena: 0.1,
				src: imP3 + 'mater3.gif',
    descr: '&nbsp;&nbsp;&nbsp;Можно найти в тележке на <strong>F8</strong> на 2м этаже "Бездны".',
    recipes: null
		},
		mater4:{
				name: 'Лучистое серебро',  cena: 0.1,
				src: imP3 + 'mater4.gif',
    descr: '&nbsp;&nbsp;&nbsp;Можно найти в тележке на <strong>F8</strong> на 2м этаже "Бездны".',
				recipes: {'spell_curseb': 1}
		},
		mater5:{
				name: 'Мифрил',  cena: 0.1,
				src: imP3 + 'mater5.gif',
    descr: '&nbsp;&nbsp;&nbsp;Можно найти в Выбоинах на 2м этаже "Бездны".',
				recipes: null
		},
		mater6:{
				name: 'Железное дерево',  cena: 0.1,
				src: imP3 + 'mater6.gif',
				recipes: null
		},
		mater7:{
				name: 'Слиток пустынной руды',  cena: 0.1,
				src: imP3 + 'mater7.gif',
				recipes: {'sp_tacpts_HIT1': 3}
		},
		mater8:{
				name: 'Троекорень',  cena: 0.1,
				src: imP3 + 'mater8.gif',
				recipes: {'sp_tacpts_PRY1': 3}
		},
		mater9:{
				name: 'Корень змеиного дерева',  cena: 0.1,
				src: imP3 + 'mater9.gif',
				recipes: {'sp_tacpts_KRT1': 3}
		},
		mater10:{
				name: 'Кора змеиного дерева',  cena: 0.1,
				src: imP3 + 'mater10.gif',
				recipes: {'spell_ug_undam2c': 1,'sp_tacpts_CNTR1': 3}
		},
		mater11:{
				name: 'Кожа общего врага',  cena: 0.1,
				src: imP3 + 'mater11.gif',
				recipes: {'spell_ug_undam1c': 1,'spell_ug_undam1c': 1,'sp_tacpts_BLK1': 3}
		},
		mater12:{
				name: 'Сталь',  cena: 0.1,
				src: imP3 + 'mater12.gif',
    descr: '&nbsp;&nbsp;&nbsp;Можно найти в Выбоинах на 2м этаже "Бездны".',
				recipes: {'spell_ug_undam3c': 1,'spell_curse': 1}
		},
		mater13:{
				name: 'Кристалл тысячи ответов',  cena: 0.3,
				src: imP3 + 'mater13.gif',
				recipes: null
		},
		mater14:{
				name: 'Сгусток эфира',  cena: 0.3,
				src: imP3 + 'mater14.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто падает с Духов и Душ в Лабиринте "ПТП"',
				recipes: {'spell_ug_undam1c': 1,'spell_curseb': 3}
		},
		mater15:{
				name: 'Сгусток астрала',  cena: 0.3,
				src: imP3 + 'mater15.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто падает с Духов и Душ в Лабиринте "ПТП"',
				recipes: {'spell_ug_undam3c': 1,'sp_tacpts_PRY2': 2}
		},
		mater16:{
				name: 'Глубинный камень',  cena: 0.3,
				src: imP3 + 'mater16.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто лежит в сундуке на <strong>D9</strong> на 3м этаже "Бездны".',
				recipes: {'spell_ug_undam2c': 1,'spell_curse': 1,'sp_tacpts_KRT2': 2}
		},
		mater17:{
				name: 'Плод змеиного дерева',  cena: 0.3,
				src: imP3 + 'mater17.gif',
				recipes: {'spell_ug_undam1c': 1,'spell_ug_undam3c': 1,'spell_curse': 1,'sp_tacpts_CNTR2': 2}
		},
		mater18:{
				name: 'Тысячелетний камень',  cena: 0.3,
				src: imP3 + 'mater18.gif',
				recipes: {'spell_ug_undam1c': 1,'spell_ug_undam2c': 1,'spell_ug_undam3c': 1,'spell_curse': 1,'sp_tacpts_HIT2': 2}
		},
		mater19:{
				name: 'Кристалл времен',  cena: 0.3,
				src: imP3 + 'mater19.gif',
				recipes: {'spell_ug_undam2c': 1,'sp_tacpts_BLK2': 2}
		},
		mater25:{
				name: 'Кристалл голоса предков',  cena: 1,
				src: imP3 + 'mater25.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто лежит в сундуке на <strong>С6</strong> на 1м этаже "Пещеры Мглы", часто падает после убийства "Стража Крантона".',
				recipes: {'spell_ug_undam4c': 1,'spell_curseb': 1}
		},                                                                                                                                               
		mater26:{                                                                                                                                        
				name: 'Кристалл стабильности',  cena: 1,
				src: imP3 + 'mater26.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто лежит в сундуке на <strong>К4</strong> на 2м этаже "Пещеры Мглы".',
				recipes: {'pot_base_50_waterproof': 1,'spell_ug_undam4c': 1,'spell_ug_unp10c': 1,'spell_ug_unexprc': 1,'sp_tacpts_PRY3': 2,'booklearn_slot9': 3,'booklearn_spell7': 3}
		},                                                                                                                                               
		mater27:{                                                                                                                                        
				name: 'Камень затаенного солнца',  cena: 1,
				src: imP3 + 'mater27.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто лежит в сундуке на <strong>I8</strong> на 2м этаже "Пещеры Мглы".',
				recipes: {'spell_ug_undam2c': 1,'spell_curseb': 1,'sp_tacpts_KRT3': 2,'booklearn_slot9': 3,'booklearn_spell5': 3}
		},                                                                                                                                               
		mater28:{                                                                                                                                        
				name: 'Лучистый рубин',  cena: 1,
				src: imP3 + 'mater28.gif',
				recipes: {'spell_ug_unp10c': 1,'spell_ug_unexprc': 1,'spell_curse': 1,'sp_tacpts_CNTR3': 2,'booklearn_slot9': 3,'booklearn_8': 3}
		},                                                                                                                                               
		mater29:{                                                                                                                                        
				name: 'Лучистый топаз',  cena: 1,
				src: imP3 + 'mater29.gif',
    descr: '&nbsp;&nbsp;&nbsp;Можно найти в сундуке на <strong>С8</strong> на 1м этаже "Бездны".',
				recipes: {'spell_ug_undam1c': 1,'spell_curse': 1,'sp_tacpts_BLK3': 2,'booklearn_slot9': 3}
		},                                                                                                                                               
		mater30:{                                                                                                                                        
				name: 'Шепот гор',  cena: 1,
				src: imP3 + 'mater30.gif',
    descr: '&nbsp;&nbsp;&nbsp;Часто лежит в сундуке на <strong>В11</strong> на 2м этаже "ПТП".',
				recipes: {'spell_ug_undam3c': 1,'spell_curseb': 1,'sp_tacpts_HIT3': 2,'booklearn_slot9': 3,'booklearn_10': 3}
		},                                                                                                                                               
		mater20:{
				name: 'Эссенция лунного света',  cena: 3,
				src: imP3 + 'mater20.gif',
				recipes: {'sp_tacpts_CNTR4': 1,'sp_tacpts_CNTR5': 1,'enh_5_3': 1,'booklearn_slot10': 5}
		},
		mater21:{
				name: 'Эссенция глубины',  cena: 3,
				src: imP3 + 'mater21.gif',
				recipes: {'sp_tacpts_BLK4': 1,'sp_tacpts_BLK5': 1,'enh_4_3': 1,'booklearn_slot10': 5,'booklearn_6': 1,'booklearn_spell4': 1}
		},
		mater22:{
				name: 'Эссенция чистоты',  cena: 3,
				src: imP3 + 'mater22.gif',
				recipes: {'sp_tacpts_HIT4': 1,'sp_tacpts_HIT5': 1,'enh_3_3': 1,'booklearn_slot10': 5,'booklearn_9': 1,'booklearn_spell2': 1}
		},
 		 mater31:{
				name: 'Эссенция праведного гнева',  cena: 3,
				src: imP3 + 'mater31.gif',
				recipes: {'spell_curseb': 1,'sp_tacpts_KRT4': 1,'sp_tacpts_KRT5': 1,'enh_9_3': 1,'booklearn_slot10': 5,'booklearn_7': 1}
		},
		mater23:{
				name: 'Ралиэль',
				src: imP3 + 'mater23.gif',  cena: 3,
				recipes: {'sp_tacpts_BLK5': 1,'sp_tacpts_HIT5': 1,'sp_tacpts_KRT5': 1,'sp_tacpts_CNTR5': 1,'sp_tacpts_PRY5': 1,'booklearn_slot10': 5,'booklearn_spell1': 1}
		},
		mater24:{
				name: 'Стихиалия',
				src: imP3 + 'mater24.gif',  cena: 3,
				recipes: {'spell_ug_unp10c': 1,'spell_ug_unexprc': 1,'spell_curseb': 1,'sp_tacpts_PRY4': 1,'sp_tacpts_PRY5': 1,'enh_1_3': 1,'booklearn_slot10': 5,'booklearn_spell3': 1}
		},

		mater_shop7:{
				name: 'Сущность ресурса',
				src: imP3 + 'mater_shop7.gif',
				recipes:  null
		},

		sp_mat15:{
				name: 'Сущность сережек',
				src: imP3 + 'sp_mat15.gif',
				recipes: {'clip76_1': 1,'clip80_1': 1,'clip82_du2_1': 1,'clip81_1': 1,'clip89_1': 1,'clip90_1': 1},
 			descr: 'Можно найти в сундуке с топазом на клетке <b>С8</b> - 1й этаж "Бездны".'
		},
		sp_mat7:{
				name: 'Сущность амулета',
				src: imP3 + 'sp_mat7.gif',
				recipes: {'amulet75_1': 1,'amulet80_1': 1,'amulet81_1': 1,'amulet83_du2_1': 1,'amulet97_1': 1,'amulet98_1': 1},
 			descr: 'Можно найти в сундуке с топазом на клетке <b>С8</b> - 1й этаж "Бездны".'
		},
		sp_mat3:{
				name: 'Сущность кольца',
				src: imP3 + 'sp_mat3.gif',
				recipes: {'ring110_1': 1,'ring116_1': 1,'ring117_1': 1,'ring119_du2_1': 1,'ring128_1': 1,'ring129_1': 1},
  		descr: 'Можно найти в сундуке с топазом на клетке <b>С8</b> - 1й этаж "Бездны".'
		},
		sp_mat5:{
				name: 'Сущность браслета',
				src: imP3 + 'sp_mat5.gif',
				recipes: {'braslet24_1': 1,'braslet25_1': 1,'braslet26_du2_1': 1,'braslet27_1': 1,'braslet31_1': 1,'braslet32_1': 1,'naruchi76_1': 1},
 			descr: 'Можно найти в сундуке с топазом на клетке <b>С8</b> - 1й этаж "Бездны".'
		},
		sp_mat13:{
				name: 'Сущность пояса',
				src: imP3 + 'sp_mat13.gif',
				recipes: {'belt35_1': 1,'belt36_1': 1,'belt37_1': 1,'belt38_du2_1': 1,'belt39_1': 1,'belt43_1': 1,'belt44_1': 1},
    descr: 'Можно найти в сундуке с топазом на клетке <b>С8</b> - 1й этаж "Бездны".'
		},
		sp_mat1:{
				name: 'Сущность сапог',
				src: imP3 + 'sp_mat1.gif',
				recipes: null,
    descr: 'Можно найти в сундуке на клетке <b>Е9</b> - 3й этаж "Бездны".'
		},
		sp_mat17:{
				name: 'Сущность щита',
				src: imP3 + 'sp_mat17.gif',
				recipes: null,
    descr: 'Можно найти в Плавильном котле на клетке <b>F6</b> - 2й этаж и в сундуке на клетке <b>Е9</b> - 3й этаж "Бездны". '
		},
		mater267:{
				name: 'Расскаленная магма',  
				src: imP3 + 'mater267.gif',
				recipes: {'clip76_1': 1,'clip80_1': 1,'clip82_du2_1': 1,'clip81_1': 1,'clip89_1': 1,'clip90_1': 1},
    descr: 'Можно купить в рыцарском магазине "Катакомб".'
 		},
		mater261:{
				name: 'Слиток света',  
				src: imP3 + 'mater261.gif',
				recipes: {'ring110_1': 1,'ring116_1': 1,'ring117_1': 1,'ring119_du2_1': 1,'ring128_1': 1,'ring129_1': 1},
    descr: 'Можно купить в рыцарском магазине "Бездны".'
 		},
  mater262:{
				name: 'Осколок бездны',  
				src: imP3 + 'mater262.gif',
				recipes: {'amulet75_1': 1,'amulet80_1': 1,'amulet81_1': 1,'amulet83_du2_1': 1,'amulet97_1': 1,'amulet98_1': 1},
    descr: 'Можно купить в рыцарском магазине "Бездны".'
 		},
  		mater275:{
				name: 'Песок просвета',  
				src: imP3 + 'mater275.gif',
				recipes: {'braslet24_1': 1,'braslet25_1': 1,'braslet26_du2_1': 1,'braslet27_1': 1,'braslet31_1': 1,'braslet32_1': 1,'naruchi76_1': 1},
    descr: 'Можно купить в рыцарском магазине "Пещеры Мглы".'
 		},
		mater276:{
				name: 'Песчаная руда',  
				src: imP3 + 'mater276.gif',
				recipes: {'belt35_1': 1,'belt36_1': 1,'belt37_1': 1,'belt38_du2_1': 1,'belt39_1': 1,'belt43_1': 1,'belt44_1': 1},
    descr: 'Можно купить в рыцарском магазине "Пещеры Мглы".'
 		},
		mater_izumrud:{
				name: 'Мутный изумруд',
				src: imP3 + 'mater_izumrud.gif',
				recipes: null,
    descr: 'Масса: 1<br />Долговечность: 0/1<br />Максимум: 1 ед.<br />Сделано в Emeralds city<br /><font color=brown>Предмет не подлежит ремонту</font><br />  <b>Курс обмена у Бугага:</b><br />1 изумруд = Эликсир Забытых Мастеров (35 минут)<br />1 изумруд = 10 кровавых рубинов<br />1 изумруд = 5 сущностей ресурса<br />1 изумруд = Инсигния Знаний<br />Камни падают на всех этажах. Шанс дропа растет с уровнем сложности этажа.'
 		},
		runetoken:{
				name: 'Инсигния Знаний ',
				src: imP3 + 'runetoken.gif',
				recipes: null,
    descr: 'Масса: 1<br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Может быть использовано на Алтаре Храма Знаний <br />(получите в награду 10 ед. репутации Храма Знаний)<br />Сделано в Emeralds city<br /><font color=brown>Предмет не подлежит ремонту</font>'
 		},
//девел
		mater292:{
				name: 'Кристальный песок',
				src: imP3 + 'mater292.gif',
				recipes: {'amulet111': 11,'clip100': 8},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Заросший пруд", "Берег озера", может упасть с "Болотный Тролль".'
 		},
		mater293:{
				name: 'Мерцающий кристалл',
				src: imP3 + 'mater293.gif',
				recipes: {'armor113': 8,'braslet43': 3,'amulet111': 4,'clip100': 5},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Заросший пруд", "Берег озера", может упасть с "Болотный Тролль".'
 		},
		mater294:{
				name: 'Слезы лунного мерцания',
				src: imP3 + 'mater294.gif',
				recipes: {'belt52': 4,'shield88': 7,'braslet43': 7,'naruchi92': 6,'braslet43': 3,'amulet111': 3,'naruchi91': 2,'helmet92': 6,'clip100': 5},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Заросший пруд", "Костер", "Берег озера".'
 		},
		mater295:{
				name: 'Чешуйчатая шкура',
				src: imP3 + 'mater295.gif',
				recipes: {'armor113': 10,'shield88': 6,'braslet43': 8,'naruchi92': 13,'boots33': 5,'naruchi91': 6,'boots32': 14,'naruchi41': 8},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно выбить с "Голодный Кровосос" "Проклятье Болот".'
 		},
		mater296:{
				name: 'Самородок мерцающего металла',
				src: imP3 + 'mater296.gif',
				recipes: {'armor113': 20,'shield88': 11,'belt52': 5,'braslet43': 9,'amulet111': 12,'naruchi91': 6,'boots32': 8,'helmet92': 13,'naruchi41': 6,'clip100': 6},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Древняя глыба" или "Огромный валун".'
 		},
		mater297:{
				name: 'Изменчивые водоросли',
				src: imP3 + 'mater297.gif',
				recipes: {'armor113': 10,'clip100': 9},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Берег озера", "Заросший пруд", может упасть с "Болотный Тролль".'
 		},
		mater298:{
				name: 'Древний мох',
				src: imP3 + 'mater298.gif',
				recipes: {'belt52': 10,'shield88': 6,'naruchi92': 8,'boots33': 15,'amulet111': 12,'naruchi91': 8,'helmet92': 8,'naruchi41': 7},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Древний пень", "Трухлявый пень" и "Корявый пень".'
 		},
		mater299:{
				name: 'Черное масло',
				src: imP3 + 'mater299.gif',
				recipes: {'armor113': 10,'belt52': 3,'boots33': 3,'amulet111': 7,'boots32': 4,'naruchi41': 5,' clip100': 5},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Костер", "Смердящая яма", "Берег озера", "Глубокая трещина" или выбить с "Мародер Патрульный" и "Мародер Разведчик".'
 		},
		mater300:{
				name: 'Бурая шкура',
				src: imP3 + 'mater300.gif',
				recipes: {'armor113': 12,'belt52': 4,'shield88': 7,'naruchi92': 4,'boots33': 7,'naruchi91': 5,' boots32': 5,' helmet92': 7,' naruchi41': 5},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно найти в "Костер" или выбить с "Мародер Патрульный" и "Мародер Разведчик".'
 		},
		mater301:{
				name: 'Кость болотного тролля',
				src: imP3 + 'mater301.gif',
				recipes: {'armor113': 1,'naruchi92': 1,'boots32': 1,'helmet92': 1},
    descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Можно выбить с "Болотный Тролль".'
 		},
		sp_mat40:{
				name: 'Утерянная Сущность Сапог',
				src: imP3 + 'sp_mat40.gif',
				recipes: {'boots32': 1,'boots33': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat41:{
				name: 'Утерянная Сущность Перчаток',
				src: imP3 + 'sp_mat41.gif',
				recipes: {'naruchi91': 1,'naruchi92': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat42:{
				name: 'Утерянная Сущность Брони',
				src: imP3 + 'sp_mat42.gif',
				recipes: {'armor113': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat43:{
				name: 'Утерянная Сущность Шлема',
				src: imP3 + 'sp_mat43.gif',
				recipes:{'helmet92': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat44:{
				name: 'Утерянная Сущность Наручей',
				src: imP3 + 'sp_mat44.gif',
				recipes: {'naruchi41': 1,'braslet43': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
  sp_mat45:{
				name: 'Утерянная Сущность Пояса',
				src: imP3 + 'sp_mat45.gif',
				recipes: {'belt52': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat46:{
				name: 'Утерянная Сущность Щита',
				src: imP3 + 'sp_mat46.gif',
				recipes: {'shield88': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat47:{
				name: 'Утерянная Сущность Серег',
				src: imP3 + 'sp_mat47.gif',
				recipes: {'clip100': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
		sp_mat48:{
				name: 'Утерянная Сущность Амулета',
				src: imP3 + 'sp_mat48.gif',
				recipes: {'amulet111': 1},
    descr: '<b>Описание:</b><BR /> Свиток немного обгорел и запачкан в золе, но всё ещё очень ценен.<BR />Требуется для сборки вещей  в "Кузнице Низин", в "Туманных низинах". <BR />Может упасть с любого бота или можете найти в костре.'
		},
//абба
  mater_suv_drop:{
				name: 'Образец',
				src: imP3 + 'mater_suv_drop.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1'
		},
  mater_suv_rew:{
				name: 'Идеальные Образцы',
				src: imP3 + 'mater_suv_rew.gif',
				recipes: null,
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Требуется предмет: <B> [Образец]x100 </B> <BR>Долговечность: 0/1'
		},
  shiph_token:{
				name: 'Крыло Шипокрыла Хаоса',
				src: imP3 + 'shiph_token.gif',
				recipes: null,
				descr: 'С низкой вероятностью падает с <B>Шипокрыла Хаоса</B>, <br />за него <B>Шейла</B> даст вам свиток <B>Зачаровать броню: Адаптация</B>.'
		},
  lik_token:{
				name: 'Череп Лика Хаоса',
				src: imP3 + 'lik_token.gif',
				recipes: null,
				descr: 'С низкой вероятностью падает с <B>Лика Хаоса</B>, <br />за него <B>Шейла</B> даст вам свиток <B>Зачаровать шлем: Адаптация</B>.'
		},
  ship_token:{
				name: 'Хвост Шипокрыла',
				src: imP3 + 'ship_token.gif',
				recipes: null,
				descr: 'С низкой вероятностью падает с <B>Шипокрыла</B>, <br />за него <B>Шейла</B> даст вам свиток <B>Зачаровать сапоги: Адаптация</B>.'
		},
  valent_token:{
				name: 'Перья Валентайского Охотника',
				src: imP3 + 'valent_token.gif',
				recipes: null,
				descr: 'С низкой вероятностью падает с <B>Валентайского Охотника</B>, <br />за него <B>Шейла</B> даст вам свиток <B>Зачаровать амулет: Адаптация</B>.'
		},
  fanatik_token:{
				name: 'Пепел Фанатика Хаоса',
				src: imP3 + 'fanatik_token.gif',
				recipes: null,
				descr: 'С низкой вероятностью падает с <B>Фанатика Хаоса</B>, <br />за него <B>Шейла</B> даст вам свиток <B>Зачаровать поножи: Адаптация</B>.'
		},

	 gg3_hishn_kolch:{
				name: 'Кусок старой ржавой кольчуги',
				src: imP3 + 'gg3_hishn_kolch.gif', recipes: null,
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Ржавая сталь, деформировавшиеся звенья. Кто может позариться на такое "добро"?<br />Меняется у "Шизожука" на сувениры.<br /> - Падает с ботов 3го этажа Грибницы, но можно выловить и в "Воронке".'
		},
	 gg3_hishn_dosp:{
				name: 'Обломок доспеха',
				src: imP3 + 'gg3_hishn_dosp.gif',	recipes: null,
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Часть доспеха невразумительной формы. Даже при долгом исследовании нельзя сказать, что это был за доспех.<br />Меняется у "Шизожука" на сувениры.<br /> - Падает с ботов 3го этажа Грибницы, но можно выловить и в "Воронке".'
		},
	 gg3_hishn_sword:{
				name: 'Обломок меча',
				src: imP3 + 'gg3_hishn_sword.gif',  recipes: null,
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Кусок меча с рукоятью. Ржавый до ужаса, просто крошится в руках.<br />Меняется у "Шизожука" на сувениры.<br /> - Падает с ботов 3го этажа Грибницы, но можно выловить и в "Воронке".'
		},
	 gg3_hishn_finger:{
				name: 'Палец латной перчатки',
				src: imP3 + 'gg3_hishn_finger.gif', recipes: null,
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Палец от перчатки. Ржавый, хрупкий, условно металлический. Больше ничего необычного.<br />Меняется у "Шизожука" на сувениры.<br /> - Падает с ботов 3го этажа Грибницы, но можно выловить и в "Воронке".'
		} 

};

var pots ={
		pot_cureHP600_50:{
				name: 'Глоток Легкой Жизни',
				src: imP3 + 'pot_cureHP600_50.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Срок годности: 30 дн. <br /> <strong>Описание:</strong><br />• Целебное зелье восстанавливающее 600 единиц здоровья. <br />Только для первых двух, можно получить в <strong>"Фонтане Легкой жизни"</strong> на первом этаже <strong>Катакомб</strong> в Demons City, В <strong>"Фонтане Легкого Пути"</strong> на втором этаже <strong>Потеряного входа</strong> Emerald City'
			},
		pot_curemana200_30:{
				name: 'Зелье маны',
				src: imP3 + 'pot_curemana200_30.gif',
				descr: 'Масса: 1<br />Долговечность: 0/2<br />Цена: 4 кр.<br />Срок годности: 30 дн. <br />Требуется минимальное: уровень 7<br /> <strong>Описание:</strong><br />• Зелье содержит небольшой запас маны.  <br />Можно найти в сундуке на 1м этаже пещеры <strong>Мглы</strong> Sand City'
			},
		pot_cureHP100_20:{
				name: 'Консервированное Зелье Жизни',
				src: imP3 + 'pot_cureHP100_20.gif',
				descr: 'Масса: 5<br />Долговечность: 0/7<br />Цена: 1 кр. <br />Срок годности: 30 дн. <br /> <strong>Описание:</strong><br />• Целебное зелье восстанавливающее 100 единиц здоровья. <br />  можно взять в <strong>Забытой Экипировке</strong> в <strong>Канализации</strong>, при выходе из пещеры пропадает.'
			},
		pot_base_50_regeneration:{
				name: 'Эликсир Восстановления',
				src: imP3 + 'pot_base_50_regeneration.gif',
				descr: 'Масса: 5 <br />Цена: 10 кр. <br />Долговечность: 0/10 <br />Срок годности: 15 дн. <br />Продолжительность действия магии: 2 ч. 0 мин. <br /><strong>Действует на:</strong> <br />скорость восстановления HP: +300%<br />Иногда выпадает из Берсерка на первом этаже <strong>Катакомб</strong> в Demons City'
			},
		pot_cureHP250_20_gg:{
				name: 'Склянка Живительной Воды',
				src: imP3 + 'pot_cureHP250_20_gg.gif',
				descr: '<br />Масса: 10 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 10 кр. <br />Долговечность: 0/20<br />Срок годности: 60 дн.<br /><strong>Описание:</strong><br />• Полезное снадобье из Грибницы, восстанавливающее 250 единиц здоровья. Насыщенный букет болотных ароматов и яркие тона плесени не оставят вас равнодушными.<br />Может упасть с босов или Набрать в "Чудодейственной луже" на клетке Е2 2го этажа "Грибницы" . '
			},
		pot_ggmanaregen:{
				name: 'Склянка Восполнения Магии',
				src: imP3 + 'pot_ggmanaregen.gif',
				descr: '<br />Масса: 10 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 10 кр.<br />Долговечность: 0/10<br />Срок годности: 30 дн. <br />Продолжительность действия магии: 2 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Восстановление маны (%): +100<br />Можете обменять у "Дух Грибницы" на "Грибочки", может упасть с босов в "Грибнице".'
			},
		pot_gghpregen:{
				name: 'Склянка Восполнения Здоровья',
				src: imP3 + 'pot_gghpregen.gif',
				descr: '<br />Масса: 10 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 10 кр.<br />Долговечность: 0/10<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 2 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Восстановление HP (%): +100<br />Можете обменять у "Дух Грибницы" на "Грибочки", может упасть с босов в "Грибнице".'
			},
		pot_base_200_bot3tn:{
				name: 'Снадобье Великана',
				src: imP3 + 'pot_base_200_bot3.gif',
				descr: '<br />Масса: 1<br />Долговечность: <strong>0/3</strong><br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Сила: +15<br />Можно найти в "костре" в "Туманных низинах".'
			},
		pot_base_200_bot2tn:{
				name: 'Снадобье Змеи',
				src: imP3 + 'pot_base_200_bot2.gif',
				descr: '<br />Масса: 1<br />Долговечность: <strong>0/3</strong><br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Ловкость: +15<br />Можно найти в "костре" в "Туманных низинах".'
			},
		pot_base_200_bot1tn:{
				name: 'Снадобье Предчувствия',
				src: imP3 + 'pot_base_200_bot1.gif',
				descr: '<br />Масса: 1<br />Долговечность: <strong>0/3</strong><br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Интуиция: +15<br />Можно найти в "костре" в "Туманных низинах".'
			},
		pot_base_200_bot4tn:{
				name: 'Снадобье Разума',
				src: imP3 + 'pot_base_200_bot4.gif',
				descr: '<br />Масса: 1<br />Долговечность: <strong>0/3</strong><br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Интеллект: +15<br />Можно найти в "костре" в "Туманных низинах".'
			},
		pot_base_50_fireproof:{
				name: 'Эликсир Пламени',
				src: imP3 + 'pot_base_50_fireproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/10 <br />Срок годности: 30 дн.<br />Продолжительность действия магии: 1 ч. 30 мин. <br /><strong>Требуется минимальное:</strong><br />• уровень: 4 <br /><strong>Действует на:</strong><br />• Защита защита от магии огня: +50 <br />Можете найти в сундуке на первом этаже <strong>Катакомб</strong> в Demons City'
			},
		pot_base_50_earthproof:{
				name: 'Эликсир Песков',
				src: imP3 + 'pot_base_50_earthproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/10 <br />Срок годности: 30 дн.<br />Продолжительность действия магии: 1 ч. 30 мин. <br /><strong>Требуется минимальное:</strong><br />• уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии земли: +50 <br />Можете найти в сундуке на первом этаже <strong>Катакомб</strong> в Demons City'
			},
		pot_base_50_airproof:{
				name: 'Эликсир Ветра',
				src: imP3 + 'pot_base_50_airproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/10 <br />Срок годности: 30 дн.<br />Продолжительность действия магии: 1 ч. 30 мин. <br /><strong>Требуется минимальное:</strong><br />• уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии воздуха: +50 <br /> Можете найти в сундуке на первом этаже <strong>Катакомб</strong> в Demons City'
			},
		pot_base_50_waterproof:{
				name: 'Эликсир Морей',
				src: imP3 + 'pot_base_50_waterproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/10 <br />Срок годности: 30 дн.<br />Продолжительность действия магии: 1 ч. 30 мин. <br /><strong>Требуется минимальное:</strong><br />• уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии воды: +50 <br /> Можете найти в сундуке на первом этаже <strong>Катакомб</strong> в Demons City'
			},
		pot_base_150_fireproof:{
				name: 'Снадобье Зарева',
				src: imP3 + 'pot_base_150_fireproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Срок годности: 20 дн. <br />Продолжительность действия магии: 3 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии огня: +75<br />В Фонтане Зарева на первом этаже <strong>Пещер Мглы</strong> в Sand City'
			},
		pot_base_150_earthproof:{
				name: 'Снадобье Недр',
				src: imP3 + 'pot_base_150_earthproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Срок годности: 20 дн. <br />Продолжительность действия магии: 3 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии земли: +75<br />В Фонтане Недр (требует ключи №1 и №2) на втором этаже <strong>Пещер Мглы</strong> в Sand City'
			},
		pot_base_150_airproof:{
				name: 'Снадобье Урагана',
				src: imP3 + 'pot_base_150_airproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Срок годности: 20 дн. <br />Продолжительность действия магии: 3 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии воздуха: +75<br />В Фонтане Урагана (требует ключ №2) на третьем этаже <strong>Пещер Мглы</strong> в Sand City'
			},
		pot_base_150_waterproof:{
				name: 'Снадобье Океанов',
				src: imP3 + 'pot_base_150_waterproof.gif',
				descr: 'Масса: 5 <br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Срок годности: 20 дн. <br />Продолжительность действия магии: 3 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Защита от магии воды: +75<br />В Фонтане Океанов (требует ключ №1) на первом этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City и в Фонтане Океанов (требует ключи №1 и №2) на втором этаже <strong>Пещер Мглы</strong> в Sand City'
			},
		pot_anti_poison_5:{
				name: 'Антидот [5]',
				src: imP3 + 'pot_anti_poison_5.gif',
				descr: 'Масса: 1<br />Долговечность: 0/5 (0/4, 0/3) <br />Цена: 1 кр. <br />Срок годности: 30 дн.<br /><strong>Наложены заклятия:</strong><br />• Исцеление <br /><strong>Описание:</strong><br />• Исцелит вас от ядов.В Купели на <strong>В8</strong> второго этажа <strong>Катакомб</strong> в Demons City<br />Может выпасть из ботов в <strong>Грибнице</strong> в Sun City<br />- излечивает от ядов, которые можно подцепить в кучах мусора или в "Фонтане Воспоминаний" 1-го этажа "Катакомб"'
			},
		pot_anti_disease_5:{
				name: 'Сыворотка [5]',
				src: imP3 + 'pot_anti_disease_5.gif',
				descr: 'Масса: 1<br />Долговечность: 0/5 (0/4, 0/3) <br />Цена: 1 кр. <br /><strong>Наложены заклятия:</strong><br />• Исцеление <br /><strong>Описание:</strong><br />• Исцелит вас от многих болезней.В Купели третьего этажа <strong>Катакомб</strong> в Demons City<br />Может выпасть из ботов в <strong>Грибнице</strong> в Sun City<br /> - излечивает от болезней, которые можно подцепить в кучах мусора.'
			},
		pot_base_200_bot_pm1:{
				name: 'Эликсир Силы Предков',
				src: imP3 + 'pot_base_200_bot_pm1.gif',
				descr: 'Масса: 1<Br />Цена: кр.<Br />Долговечность: 0/1<Br />Срок годности: 30 дн.<Br />Продолжительность действия магии: 3 ч. 0 мин.<Br /><strong>Требуется минимальное:</strong><Br />• Выносливость: 40<Br /><strong>Действует на:</strong><Br />• Сила: +20<Br /><strong>Описание:</strong><br />• Можно приготовить в лаборатории 4го этажа <strong>Пещеры Мглы</strong> в Sand City. Для приготовления Эликсира нужны следующие реагенты: Снадобье Зарева, Снадобье Океанов, Снадобье Недр, и Сущности Ресурса пять штук.'
			},
		pot_base_200_bot_pm2:{
				name: 'Тайная Настойка Рульфа',
				src: imP3 + 'pot_base_200_bot_pm2.gif',
				descr: 'Масса: 1<Br />Цена: кр.<Br />Долговечность: 0/1<Br />Срок годности: 30 дн.<Br />Продолжительность действия магии: 3 ч. 0 мин.<Br /><strong>Требуется минимальное:</strong><Br />• Выносливость: 45<Br /><strong>Действует на:</strong><Br />• Сила: +25<Br />Сделано в Sandcity<Br /><strong>Описание:</strong><br />• Квестовый предмет. Получаете его взамен на 10 "Эликсиров Силы Предков" у "Рульф Хрумпта". При завершении задания пропадает!'
			},
		pot_base_20_zk_random:{
				name: 'Мутная серая жидкость',
				src: imP3 + 'pot_base_20_zk_random.gif',
				descr: 'Масса: 5  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><Br />Цена: 1 кр.<Br />Долговечность: 0/1<Br />Срок годности: 21 дн.<Br />Продолжительность действия магии: 6 ч. 0 мин.<Br /><strong>Требуется минимальное:</strong><Br />• Уровень: 4<Br />• Выносливость: 5<Br /><strong>Действует на:</strong><Br />• Интуиция или Интеллект или Сила или Ловкость: +11 <Br /><strong>Описание:</strong><Br />"Легче воды"<br />Можно взять в "Котельной" (3й этаж Водостока) в "Подогревателе" - повышаемый параметр - рандом.'
			},
		pot_base_1000_str:{
				name: 'Топливо для Големов',
				src: imP3 + 'pot_base_1000_str.gif',
				descr: 'Цена: 1 кр. <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Масса: 5<br />Долговечность: 0/1<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 6 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Сила: +12  <br /><strong>Описание:</strong><br />• Если поджечь - горит ярким синим пламенем. <br /> Может упасть с ботов на 5м этаже в <strong>Пещере Тысячи Проклятий</strong> в Capital City'
			},
		pot_base_1000_dex:{
				name: 'Смазка для Големов',
				src: imP3 + 'pot_base_1000_dex.gif',
				descr: 'Цена: 1 кр. <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Масса: 5<br />Долговечность: 0/1<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 6 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Ловкость: +12  <br /><strong>Описание:</strong><br />• Маслянистая жидкость с сильным запахом... только отважный человек будет это пить... <br /> Может упасть с ботов на 5м этаже в <strong>Пещере Тысячи Проклятий</strong> в Capital City'
			},
		pot_base_1000_inst:{
				name: 'Ускоритель для Голема',
				src: imP3 + 'pot_base_1000_inst.gif',
				descr: 'Цена: 1 кр. <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Масса: 5<br />Долговечность: 0/1<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 6 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Интуиция: +12  <br /><strong>Описание:</strong><br />• Мутная жидкость с сильным запахом животного жира... кто знает из чего(кого?) ее делали местные умельцы... <br /> Может упасть с ботов на 5м этаже в <strong>Пещере Тысячи Проклятий</strong> в Capital City'
			},
		pot_base_200_bot3:{
				name: 'Снадобье Великана',
				src: imP3 + 'pot_base_200_bot3.gif',
				descr: '<br />Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.(1 ч. 30 мин.)<br /><strong>Действует на:</strong><br />• Сила: +15<br />Можно найти На камнях, в кроватях казарм первого и в фонтанах второго и третьего этажа <strong>Катакомб</strong> в Demons City, В кроватях казарм третьего этажа <strong>Бездны</strong> в Angels City, В <strong>Фонтане Зачарованых Гор</strong> на третьем этаже <strong>Пещер Тысячи Проклятий</strong> в Capital City, в <strong>Фонтане Былых Побед</strong> на третьем этаже <strong>Катакомб</strong> в Demons City.'
			},
		pot_base_200_bot2:{
				name: 'Снадобье Змеи',
				src: imP3 + 'pot_base_200_bot2.gif',
				descr: '<br />Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Ловкость: +15<br />Можно найти На камнях, в кроватях казарм первого и в фонтанах второго и третьего этажа <strong>Катакомб</strong> в Demons City, В кроватях казарм третьего этажа <strong>Бездны</strong> в Angels City, В <strong>Фонтане Зачарованых Гор</strong> на третьем этаже <strong>Пещер Тысячи Проклятий</strong> в Capital City, в <strong>Фонтане Былых Побед</strong> на третьем этаже <strong>Катакомб</strong> в Demons City.'
			},
		pot_base_200_bot1:{
				name: 'Снадобье Предчувствия',
				src: imP3 + 'pot_base_200_bot1.gif',
				descr: '<br />Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.(1 ч. 30 мин.)<br /><strong>Действует на:</strong><br />• Интуиция: +15<br />Можно найти На камнях, в кроватях казарм первого и в фонтанах второго и третьего этажа <strong>Катакомб</strong> в Demons City, В кроватях казарм третьего этажа <strong>Бездны</strong> в Angels City, В <strong>Фонтане Зачарованых Гор</strong> на третьем этаже <strong>Пещер Тысячи Проклятий</strong> в Capital City, в <strong>Фонтане Былых Побед</strong> на третьем этаже <strong>Катакомб</strong> в Demons City.'
			},
		pot_base_200_bot4:{
				name: 'Снадобье Разума',
				src: imP3 + 'pot_base_200_bot4.gif',
				descr: '<br />Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.(1 ч. 30 мин.)<br /><strong>Действует на:</strong><br />• Интеллект: +15<br />Можно найти На камнях, в кроватях казарм первого и в фонтанах второго и третьего этажа <strong>Катакомб</strong> в Demons City, В кроватях казарм третьего этажа <strong>Бездны</strong> в Angels City, В <strong>Фонтане Зачарованых Гор</strong> на третьем этаже <strong>Пещер Тысячи Проклятий</strong> в Capital City, в <strong>Фонтане Былых Побед</strong> на третьем этаже <strong>Катакомб</strong> в Demons City.'
			},
  pot_base_200_allmag2:{
				name: 'Снадобье Отрицания',
				src: imP3 + 'pot_base_200_allmag2.gif',
				descr: 'Масса: 5<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Срок годности: 20 дн. <br />Продолжительность действия магии: 3 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br /><strong>Действует на:</strong><br />• Защита от магии: +75 <br /> Можно найти в <strong>Фонтане Отрицания</strong> третьего этажа <strong>Пещер Тысячи Проклятий</strong> в Capital City, в <strong>Купели Отрицания</strong> в среднем проходе третьего этажа <strong>Пещер Мглы</strong> в Sand City'
			},	  
		pot_base_200_allmag2_p1k:{
				name: 'Зелье Стража Магии',
				src: imP3 + 'pot_base_200_allmag2_p1k.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Срок годности: 14 дн. <br />Продолжительность действия магии: 4 ч. 0 мин. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Защита от магии: +120 <br /> Можно найти в в сундуках на 4м этаже - <strong>Лабиринта</strong> <strong>Пещер Тысячи Проклятий</strong> в Capital City.'
			},	 			
 		 pot_base_200_alldmg2:{
 			   name: 'Снадобье Стойкости',
 			   src: imP3 + 'pot_base_200_alldmg2.gif',
 			   descr: 'Масса: 5<br />Долговечность: 0/1<br />Цена: 1 кр. <br /> Срок годности: 20 дн. <br />Продолжительность действия магии: 3 ч. 0 мин. <br /> <strong>Требуется минимальное:</strong><br />• Уровень: 7<br /><strong>Действует на:</strong><br />• Защита от урона: +75 <br /> Может быть получено в <strong>Фонтане стойкости</strong> на 2м этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City'
 			},
		pot_base_200_alldmg2_p1k:{
  				name: 'Зелье Каменной Стойкости ',
  		    	src: imP3 + 'pot_base_200_alldmg2_p1k.gif',
	 		    descr: 'Масса: 1<br />Долговечность: 0/3<br />Цена: 1 кр. <br /> Срок годности: 14 дн. <br />Продолжительность действия магии: 4 ч. 0 мин. <br /> <strong>Требуется минимальное:</strong><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Защита от урона: +120 <br /> Можно найти в в сундуках на 4м этаже - <strong>Лабиринта</strong> <strong>Пещер Тысячи Проклятий</strong> в Capital City.'
 			},	
		pot_base_100_str:{
				name: 'Снадобье Искаженной Силы',
				src: imP3 + 'pot_base_100_str.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Срок годности: 15 дн.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Сила: +10  <br />• Интуиция или Ловкость: от +1 до +5 <br /><strong>Особенности:</strong><br />• Продолжительность действия магии: 3 ч. 0 мин. <br />Можно получить в <strong>Фонтане Искаженной природы</strong> на  первом этаже <strong>Потеряного Входа</strong> в Emerald City'
			},
		pot_base_100_dex:{
				name: 'Снадобье Искаженной Ловкости',
				src: imP3 + 'pot_base_100_dex.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Срок годности: 15 дн.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Ловкость: +10  <br />• Интуиция или Сила: от +1 до +5 <br /><strong>Особенности:</strong><br />• Продолжительность действия магии: 3 ч. 0 мин. <br />Можно получить в <strong>Фонтане Искаженной природы</strong> на  первом этаже <strong>Потеряного Входа</strong> в Emerald City'
			},
		pot_base_100_inst:{
				name: 'Снадобье Искаженной Интуиции',
				src: imP3 + 'pot_base_100_inst.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Срок годности: 15 дн.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Интуиция: +10  <br />• Ловкость или Сила: от +1 до +5 <br /><strong>Особенности:</strong><br />• Продолжительность действия магии: 3 ч. 0 мин.  <br />Можно получить в <strong>Фонтане Искаженной природы</strong> на  первом этаже <strong>Потеряного Входа</strong> в Emerald City'
			},
		food_l8:{
				name: 'Бутерброд Завтрак Рыцаря',
				src: imP3 + 'food_l8.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 4 кр. <br />Долговечность: 0/4<br />Срок годности: 15 дн. <br />Продолжительность действия магии: 1 ч. 30 мин.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br />• Невозможно использовать хаосникам<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +90<br />Можно найти на "Камнях" в "Катакомбах", в "Канализации" или "Грибнице".'
			},
		food_l71:{
				name: 'Окорочок',
				src: imP3 + 'food_l71.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 3 кр.<br />Долговечность: 0/4<br />Срок годности: 3 дн.  <br />Продолжительность действия магии: 6 ч. 0 мин.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br />• Невозможно использовать хаосникам<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +75<br />Сделано в Suncity<br />Можно найти в "Грибнице".'
 			},
		food_l41:{
				name: 'Хлеб с мясом',
				src: imP3 + 'food_l41.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/4<br />Срок годности: 15 дн.<br />Продолжительность действия магии: 6 ч. 0 мин.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4<br />• Невозможно использовать хаосникам<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +30<br />Сделано в Suncity<br />Можно найти в "Грибнице".'
 			} 


		};
var keys = {
		Key21:{
				name: 'Отворяющая печать №1',
				src: imP3 + 'Key21.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital City<br />Предмет не подлежит ремонту<br />Выпадает из "Маула счастливчика" в <strong>ПТП</strong> на клетке <strong>C8</strong> 3-го этажа ПТП. <br /><strong>Эту печать необходимо иметь в рюкзаке, для прохода в Пещеры Мглы.</strong>',
				recipes: null
		},
		Key22:{
				name: 'Отворяющая печать №2',
				src: imP3 + 'Key22.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Sand City<br />Предмет не подлежит ремонту<br />Можно взять в пещере Мглы на клетке <strong>I11</strong> 3го этажа, предварительно убив Смотрителя Мглы на клетке <strong>J2</strong>  Sand City.',
				recipes: null
		},
		Key23:{
				name: 'Отворяющая печать №3',
				src: imP3 + 'Key23.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Angels City<br />Предмет не подлежит ремонту<br />Можно взять на 3м этаже Бездны в сундуке на клетке <strong>E6</strong> Angels City.',
				recipes: null
		},
		Key24:{
				name: 'Отворяющая печать №4',
				src: imP3 + 'Key24.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Demons City<br />Предмет не подлежит ремонту<br />Можно взять на 4м этаже Катакомб в сундуке на клетке <strong>I2</strong> Demons City.',
				recipes: null
		},

		key_cube_1:{
				name: 'Обломок Пирамидального Ключа',
				src: imP3 + 'key_cube_1.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Demons city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Пирамидальный Ключ</strong> - 1 шт.<br />Берётся в сундуке на клетке <strong>F11</strong> 2-го этажа Катакомб. <br />При наличии в рюкзаке, 2й взять нельзя.',
				recipes: null
		},
		key_cube_2:{
				name: 'Осколок Пирамидального Ключа',
				src: imP3 + 'key_cube_2.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Demons city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Пирамидальный Ключ</strong> - 1 шт.<br />Берётся в сундуке на клетке <strong>K22</strong> 2-го этажа Катакомб.<br />При наличии в рюкзаке, 2й взять нельзя.',
				recipes: null
		},
		key_cube_3:{
				name: 'Пирамидальный Ключ',
				src: imP3 + 'key_cube_3.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Demons city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Зачаровать Украшения [1]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Оружие [1]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Броню [1]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Перчатки [1]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Шлем [1]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Украшения [2]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Оружие [2]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Броню [2]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Перчатки [2]</strong> - 1 шт.<strong style="color:#006600">Зачаровать Шлем [2]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Украшения [3]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Оружие [3]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Броню [3]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Перчатки [3]</strong> - 1 шт. <strong style="color:#006600">Зачаровать Шлем [3]</strong> - 1 шт.<br />При наличии в рюкзаке "Обломка" и "Осколка" собирается в <strong>"Алтаре Единения"</strong>, на клетке <strong>k10</strong> 4-го этажа Катакомб.',
				recipes: null
		},

		key_amul_1:{
				name: 'Верхняя Часть Ключа Портала',
				src: imP3 + 'key_amul_1.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Ключ Портала</strong> - 1 шт.<br />Берётся в "Сундуке Стража" на клетке <strong>D12</strong> 4-го этажа ПТП.<br />При наличии в рюкзаке, 2ю взять нельзя.',
				recipes: null
		},
		key_amul_2:{
				name: 'Правая Часть Ключа Портала',
				src: imP3 + 'key_amul_2.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Ключ Портала</strong> - 1 шт.<br />Берётся в "Сундуке Стража" на клетке <strong>G12</strong> 4-го этажа ПТП.<br />При наличии в рюкзаке, 2ю взять нельзя.',
				recipes: null
		},
		key_amul_3:{
				name: 'Левая Часть Ключа Портала',
				src: imP3 + 'key_amul_3.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Ключ Портала</strong> - 1 шт.<br />Берётся в "Сундуке Стража" на клетке <strong>D9</strong> 4-го этажа ПТП.<br />При наличии в рюкзаке, 2ю взять нельзя.',
				recipes: null
		},
		key_amul_4:{
				name: 'Ключ Портала',
				src: imP3 + 'key_amul_4.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту.<br />Необходимо иметь в рюкзаке, для использования портала на клетке <strong>G2</strong> 1-го этажа ПТП. <br />Собирается на <strong>"Алтаре Осколков"</strong>, клетка <strong>U5</strong>  5-го этажа ПТП.',
				recipes: null
		},
		key_TR_1:{
				name: 'Первая часть руны',
				src: imP3 + 'key_TR_1.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Отпирающая руна</strong> - 1 шт. <br />Берётся в "Сундуке Стража" на клетке <strong>K2</strong> 5-го этажа ПТП.<br /> После выхода пропадает.',
				recipes: null
		},
		key_TR_2:{
				name: 'Вторая часть руны',
				src: imP3 + 'key_TR_2.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Отпирающая руна</strong> - 1 шт. <br />Берётся в "Сундуке Стража" на клетке <strong>M2</strong> 5-го этажа ПТП.<br /> После выхода пропадает.',
				recipes: null
		},
		key_TR_3:{
				name: 'Третья часть руны',
				src: imP3 + 'key_TR_3.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Отпирающая руна</strong> - 1 шт. <br />Берётся в "Сундуке Стража" на клетке <strong>O2</strong> 5-го этажа ПТП.<br /> После выхода пропадает.',
				recipes: null
		},
		key_TR_4:{
				name: 'Четвёртая часть руны',
				src: imP3 + 'key_TR_4.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Отпирающая руна</strong> - 1 шт. <br />Берётся в "Сундуке Стража" на клетке <strong>Q2</strong> 5-го этажа ПТП.<br /> После выхода пропадает.',
				recipes: null
		},
		key_TR_5:{
				name: 'Пятая часть руны',
				src: imP3 + 'key_TR_5.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Входит в состав: <strong style="color:#006600">Отпирающая руна</strong> - 1 шт. <br />Берётся в "Сундуке Стража" на клетке <strong>S2</strong> 5-го этажа ПТП.<br /> После выхода пропадает.',
				recipes: null
		},
		key_TR_6:{
				name: 'Отпирающая руна',
				src: imP3 + 'key_TR_6.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Сделано в Capital city<br />Предмет не подлежит ремонту<br />Собирается на <strong>"Алтаре Осколков"</strong>, клетка <strong>U5</strong> 5-го этажа ПТП. <br />После выхода пропадает.',
				recipes: null
		},
		kk_stone_2_3ch:{
				name: 'Камень Портала Чернокнижника',
				src: imP3 + 'kk_stone_2_3ch.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><Br />Долговечность: 0/1<Br />Максимум 3 шт.<Br />Срок годности: 7 дн.<Br />Сделано в Demons city<Br /><font color=#990000>Предмет не подлежит ремонту</font><Br />Лежит на клетке <strong>J22</strong> 2-го этажа Катакомб',
				recipes: null
		},
		kk_stone_2_3e:{
				name: 'Камень Портала Епископа',
				src: imP3 + 'kk_stone_2_3e.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><Br />Долговечность: 0/1<Br />Максимум 3 шт.<Br />Срок годности: 7 дн.<Br />Сделано в Demons city<Br /><font color=#990000>Предмет не подлежит ремонту</font><Br />Лежит на клетке <strong>J11</strong> 2-го этажа Катакомб',
				recipes: null
		},
		kk_stone_3_4:{
				name: 'Камень Портала Шута',
				src: imP3 + 'kk_stone_3_4.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><Br />Долговечность: 0/1<Br />Максимум 1 шт.<Br />Срок годности: 7 дн.<Br />Сделано в Demons city<Br /><font color=#990000>Предмет не подлежит ремонту</font><Br />Лежит на клетке <strong>O3</strong> 3-го этажа Катакомб',
				recipes: null
		},
		mater_battery:{
				name: 'Линза Портала', city: 2,
				src: imP3 + 'mater_battery.gif',
				descr: 'Масса: 1<Br />Цена 1 кр.<Br /><strong>Требуется предмет:</strong> <font color=red>Кристалл голоса предков, Лучистый топаз</font><Br />Долговечность: 0/1<Br />Максимум: 1 ед.<Br /><font color=#990000>Предмет не подлежит ремонту</font><Br /> Необходима для прохода в "Завал" для выполнения рыцарского задания в Бездне. '
		}
};


	var scrolls = {
		dispell2:{
				name: 'Снять Проклятие',
				src: imP3 + 'dispell1.gif',
				descr: 'Масса: 1<br />Цена: 10 кр. <br />Долговечность: 0/5<br />Вероятность срабатывания: 99%<br />Задержка использования: 5 мин.<br /><strong>"Перебежчик Брут"</strong> на входе в <strong>Туманные Низины</strong> предложит вам обменять <strong>"Древний мох"х5</strong> и <strong>"Слезы лунного мерцания"х1</strong> на этот свиток.',
				recipes: null
		},
		spell_curse:{
				name: 'Черная Метка',
				src: imP3 + 'spell_curse.gif',
				descr: 'Наложены заклятия: проклятье. Продолжительность действия магии: 1440 мин. Вероятность срабатывания: 70 %.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater12': 1,'mater16': 1,'mater17': 1,'mater18': 1,'mater28': 1,'mater29': 1}
		},
		spell_curseb:{
				name: 'Красная Метка',
				src: imP3 + 'spell_curseb.gif',
				descr: 'Наложены заклятия: проклятье. Продолжительность действия магии: 1440 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater4': 1, 'mater14': 3, 'mater25': 1, 'mater27': 1, 'mater30': 1, 'mater31': 1, 'mater24': 1}
		},
		spell_ug_undam4c:{
				name: 'Проклятье Умирающей Земли',
				src: imP3 + 'spell_ug_undam4c.gif',
				descr: 'Масса: 1<br />Цена: 10 кр.<br />Долговечность: 0/5<br /><strong>Действует на:</strong><br />• Мф. мощности магии Земли: -20<br />Продолжительность действия магии: 360 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater25': 1,'mater26': 1}
		},
		spell_ug_undam3c:{
				name: 'Проклятье Стихающего Ветра',
				src: imP3 + 'spell_ug_undam3c.gif',
				descr: 'Масса: 1<br />Цена: 10 кр.<br />Долговечность: 0/5<br /><strong>Действует на:</strong><br />• Мф. мощности магии Воздуха: -20<br />Продолжительность действия магии: 360 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater12': 1,'mater15': 1,'mater17': 1,'mater18': 1,'mater30': 1}
		},
		spell_ug_undam2c:{
				name: 'Проклятье Замерзающей Воды',
				src: imP3 + 'spell_ug_undam2c.gif',
				descr: 'Масса: 1<br />Цена: 10 кр.<br />Долговечность: 0/5<br /><strong>Действует на:</strong><br />• Мф. мощности магии Воды: -20<br />Продолжительность действия магии: 360 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater10': 1,'mater16': 1,'mater18': 1,'mater19': 1,'mater27': 1}
		},
		spell_ug_undam1c:{
				name: 'Проклятье Угасающего Огня',
				src: imP3 + 'spell_ug_undam1c.gif',
				descr: 'Масса: 1<br />Цена: 10 кр.<br />Долговечность: 0/5<br /><strong>Действует на:</strong><br />• Мф. мощности магии Огня: -20 <br />Продолжительность действия магии: 360 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater11': 1,'mater14': 1,'mater17': 1,'mater18': 1,'mater29': 1}
		},
		spell_ug_unexprc:{
				name: 'Проклятье Легкого Отупения',
				src: imP3 + 'spell_ug_unexprc.gif',
				descr: 'Масса: 1<br />Цена: 10 кр.<br />Долговечность: 0/5<br /><strong>Действует на:</strong><br />• Уменьшение расхода маны (%): -10<br />Продолжительность действия магии: 360 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater26': 1,'mater28': 1,'mater24': 1}
		},
		spell_ug_unp10c:{
				name: 'Проклятье Уязвимости',
				src: imP3 + 'spell_ug_unp10c.gif',
				descr: 'Масса: 1<br />Цена: 10 кр.<br />Долговечность: 0/5<br /><strong>Действует на:</strong><br />• Защита от урона: -100<br />Продолжительность действия магии: 360 мин.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: {'mater26': 1,'mater28': 1,'mater24': 1}
		},
		'd_blat-6':{
				name: 'Пропуск Забытых',
				src: imP3 + 'd_blat-6.gif',
				descr: 'Позволяет пройти в подземелье на 6 часов раньше. Вероятность срабатывания: 99 %.<br />Может быть в сундуке, выпасть из Маула в <strong>Пещере Тысячи Проклятий</strong> в Capital City или в кроватях третьего этажа в <strong>Бездне</strong> Angels City',
				recipes: null
		},
		d_blat24:{
				name: 'Клаустрофобия',
				src: imP3 + 'd_blat24.gif',
				descr: 'Время отдыха от подземелья увеличено на 24 часа<br />Может выпасть из Изгнанника Мглы на втором этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: null
		},
		dispell1:{
				name: 'Снять Проклятие',
				src: imP3 + 'dispell1.gif',
				descr: 'Вероятность срабатывания: 99 %<br />Может быть в сундуке на втором этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City',
				recipes: null
		},
		preservation:{
				name: 'Спасение',
				src: imP3 + 'preservation.gif',
				descr: 'Масса: 1 <br />Цена: 1 кр. <br />Вероятность срабатывания: 99% <br />Наложены заклятия: Магия Света <br />На бумаге написан текст: <br />Эта вещь исчезнет...<br />В водостоке у входа на первом этаже <strong>Катакомб</strong> в Demons City',
				recipes: null
		},
		spell_powerHPup3:{
				name: 'Жажда жизни +3',
				src: imP3 + 'spell_powerHPup3.gif',
				descr: 'Масса: 1 <br />Цена: 20 кр. <br />Долговечность: 0/3 <br />Вероятность срабатывания: 50% <br />Продолжительность действия магии: 120 мин. <br />Требуется минимальное: <br />• Уровень: 7<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
  		spell_powerHPdn3:{
				name: 'Иссушение &#150;3',
				src: imP3 + 'spell_powerHPdn3.gif',
				descr: 'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/3 <br />Вероятность срабатывания: 50% <br />Продолжительность действия магии: 120 мин. <br />Требуется минимальное: <br />• Уровень: 7<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
		cureHP60:{
				name: 'Восстановление энергии 60HP',
				src: imP3 + 'cureHP60.gif',
				descr: 'Масса: 1 <br />Цена: 4 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания: 70% <br />Требуется минимальное: <br />• Интеллект: 8 <br />• Уровень: 4 <br />Наложены заклятия: исцеление<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
  invoke_spell_wall:{
				name: 'Кинетический Барьер',
				src: imP3 + 'invoke_spell_wall.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong>[Образец]x10</strong><BR>Долговечность: 0/1<BR>Задержка использования: 3 мин.<BR>• Мгновенное заклинание<BR><FONT color=#880000>Наложено заклятье:</FONT> <strong>Кинетический Барьер</strong> <BR><SMALL><strong>Описание:</strong><BR>Задержка: 10  Весь урон получаемый сокращается в 4 раза, весь урон наносимый сокращается в 2 раза на 3 хода.</SMALL>'
		},
  invoke_spell_shield_fire200:{
				name: 'Барьер: Поглотить Огонь',
				src: imP3 + 'invoke_spell_shield_fire200.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong>[Образец]x10</strong><BR>Долговечность: 0/1<BR>Задержка использования: 3 мин.<BR>• Мгновенное заклинание<BR><FONT color=#880000>Наложено заклятье:</FONT> <strong>Барьер: Поглотить Огонь</strong> <BR><SMALL><strong>Описание:</strong><BR>Задержка: 10  поглощает 200 ед. урона магией огня. Барьеры заменяют друг друга.</SMALL>'
		},
  invoke_spell_shield_water200:{
				name: 'Барьер: Поглотить Воду',
				src: imP3 + 'invoke_spell_shield_water200.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong>[Образец]x10</strong><BR>Долговечность: 0/1<BR>Задержка использования: 3 мин.<BR>• Мгновенное заклинание<BR><FONT color=#880000>Наложено заклятье:</FONT>  <strong>Барьер: Поглотить Воду</strong> <BR><SMALL><strong>Описание:</strong><BR>Задержка: 10  Поглощает 200 единиц урона магии воды. Барьеры заменяют друг друга.</SMALL>'
		},
  invoke_spell_shield_air200:{
				name: 'Барьер: Поглотить Воздух',
				src: imP3 + 'invoke_spell_shield_air200.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong>[Образец]x10</strong><BR>Долговечность: 0/1<BR>Задержка использования: 3 мин.<BR>• Мгновенное заклинание<BR><FONT color=#880000>Наложено заклятье:</FONT>  <strong>Барьер: Поглотить Воздух</strong> <BR><SMALL><strong>Описание:</strong><BR>Задержка: 10  Поглощает 200 единиц урона магии воздуха. Барьеры заменяют друг друга.</SMALL>'
		},
  invoke_spell_shield_earth200:{
				name: 'Барьер: Поглотить Землю',
				src: imP3 + 'invoke_spell_shield_earth200.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong>[Образец]x10</strong><BR>Долговечность: 0/1<BR>Задержка использования: 3 мин.<BR>• Мгновенное заклинание<BR><FONT color=#880000>Наложено заклятье:</FONT>  <strong>Барьер: Поглотить Землю</strong> <BR><SMALL><strong>Описание:</strong><BR>Задержка: 10  Поглощает 200 единиц урона магии земли. Барьеры заменяют друг друга.</SMALL>'
		} 
	};
		


var charki ={
		enhp_6_revamp10:{
				name: 'Зачаровать кольцо: Вытягивание души [1]',
				src: imP3 + 'enhp_6_revamp10.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Вытягивание души</strong> <br />"При получении повреждения забирает у атакующего 10HP.<br />Шанс срабатывания: 2.5% при получении удара" <br />Описание: <br />У зачарованного этим свитком кольца появляется шанс забрать у атакующего 10 единиц здоровья при получении повреждения.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City<br />Рецепт:<br /><strong style="color:#006600">Кристалл тысячи ответов</strong> - 1 шт. <strong style="color:#006600">Сгусток эфира</strong> - 1 шт.<strong style="color:#006600">Сгусток астрала</strong> - 1 шт.',
				recipes: null
		},
		enhp_6_revamp10_2:{
				name: 'Зачаровать кольцо: Вытягивание души [2]',
				src: imP3 + 'enhp_6_revamp10_2.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Вытягивание души</strong> <br />"При получении повреждения забирает у атакующего 10HP.<br />Шанс срабатывания: 5% при получении удара" <br />Описание: <br />У зачарованного этим свитком кольца появляется шанс забрать у атакующего 10 единиц здоровья при получении повреждения.<br />Можно собрать в Мастерской Забытых Мастеров на третьем этаже <strong>Пещеры Тысячи Проклятий</strong> в Capital City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать кольцо: Вытягивание души [1]</strong> - 1 шт. <strong style="color:#006600">Топливо для Големов</strong> - 1 шт.<strong style="color:#006600">Смазка для Големов</strong> - 1 шт.<strong style="color:#006600">Ускоритель для Голема</strong> - 1 шт.',
				recipes: null
		},

		enh_1_0:{
				name: 'Зачаровать Украшение [0]',
				src: imP3 + 'enh_1_0.gif',
				descr: 'Масса: 1 <br />Цена: 5 кр. <br />Долговечность: 0/1 <br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Этот свиток слишком   слаб...<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
		enh_3_0:{
				name: 'Зачаровать оружие [0]',
				src: imP3 + 'enh_3_0.gif',
				descr: 'Масса: 1 <br />Цена: 5 кр. <br />Долговечность: 0/1 <br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Этот свиток слишком   слаб...<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
		enh_4_0:{
				name: 'Зачаровать Броню [0]',
				src: imP3 + 'enh_4_0.gif',
				descr: 'Масса: 1 <br />Цена: 5 кр. <br />Долговечность: 0/1 <br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Этот свиток слишком   слаб...<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
		enh_5_0:{
				name: 'Зачаровать Перчатки [0]',
				src: imP3 + 'enh_5_0.gif',
				descr: 'Масса: 1 <br />Цена: 5 кр. <br />Долговечность: 0/1 <br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Этот свиток слишком   слаб...<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
		enh_9_0:{
				name: 'Зачаровать Шлем [0]',
				src: imP3 + 'enh_9_0.gif',
				descr: 'Масса: 1 <br />Цена: 5 кр. <br />Долговечность: 0/1 <br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Этот свиток слишком   слаб...<br />Можно найти в <strong>Катакомбах</strong> в Demons City',
				recipes: null
		},
  		enh_1_1:{
				name: 'Зачаровать Украшение [1]',
				src: imP3 + 'enh_1_1.gif',
				descr: 'Масса: 1 <br />Цена: 15 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Работает с для кольцами, ожерельями и серьгами.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Украшение [0]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_3_1:{
				name: 'Зачаровать оружие [1]',
				src: imP3 + 'enh_3_1.gif',
				descr: 'Масса: 1 <br />Цена: 15 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для всех видов оружия.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Оружие [0]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_4_1:{
				name: 'Зачаровать Броню [1]',
				src: imP3 + 'enh_4_1.gif',
				descr: 'Масса: 1 <br />Цена: 15 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для всех видов брони и щитов.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Броню [0]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_5_1:{
				name: 'Зачаровать Перчатки [1]',
				src: imP3 + 'enh_5_1.gif',
				descr: 'Масса: 1 <br />Цена: 15 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для перчаток, наручей и поясов.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Перчатки [0]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_9_1:{
				name: 'Зачаровать Шлем [1]',
				src: imP3 + 'enh_9_1.gif',
				descr: 'Масса: 1 <br />Цена: 15 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для шлемов и даже для сапог.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Шлем [0]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_1_2:{
				name: 'Зачаровать Украшение [2]',
				src: imP3 + 'enh_1_2.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Работает с для кольцами, ожерельями и серьгами.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Украшение [1]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_3_2:{
				name: 'Зачаровать оружие [2]',
				src: imP3 + 'enh_3_2.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для всех видов оружия.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Оружие [1]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_4_2:{
				name: 'Зачаровать Броню [2]',
				src: imP3 + 'enh_4_2.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для всех видов брони и щитов.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Броню [1]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_5_2:{
				name: 'Зачаровать Перчатки [2]',
				src: imP3 + 'enh_5_2.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для перчаток, наручей и поясов.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Перчатки [1]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_9_2:{
				name: 'Зачаровать Шлем [2]',
				src: imP3 + 'enh_9_2.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Три - переход количества в качество. Подходит для шлемов и даже для сапог.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Шлем [1]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.',
				recipes: null
		},
		enh_1_3:{
				name: 'Зачаровать Украшение [3]',                                                                                                                                                                                                                                                                                                                                                                                                       
				src: imP3 + 'enh_1_3.gif',
				descr: 'Масса: 1 <br />Цена: 150 кр. <br /><img src="'+imP2+'align50.gif" />Цена: 100 екр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Работает с для кольцами, ожерельями и серьгами.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Украшение [2]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.<strong style="color:#006600">"Стихиалия"</strong> - 1 шт.',
				recipes: null
		},
		enh_3_3:{
				name: 'Зачаровать оружие [3]',
				src: imP3 + 'enh_3_3.gif',
				descr: 'Масса: 1 <br />Цена: 150 кр. <br /><img src="'+imP2+'align50.gif" />Цена: 100 екр.<br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Подходит для всех видов оружия.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Оружие [2]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.<strong style="color:#006600">"Эссенция чистоты"</strong> - 1 шт.',
				recipes: null
		},
		enh_4_3:{
				name: 'Зачаровать Броню [3]',
				src: imP3 + 'enh_4_3.gif',
				descr: 'Масса: 1 <br />Цена: 150 кр. <br /><img src="'+imP2+'align50.gif" />Цена: 100 екр.<br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Подходит для всех видов брони и щитов.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Броню [2]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт. <strong style="color:#006600">"Эссенция глубины"</strong> - 1 шт.',
				recipes:  null
		},
		enh_5_3:{
				name: 'Зачаровать Перчатки [3]',
				src: imP3 + 'enh_5_3.gif',
				descr: 'Масса: 1 <br />Цена: 150 кр. <br /><img src="'+imP2+'align50.gif" />Цена: 100 екр.<br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Подходит для перчаток, наручей и поясов.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Перчатки [2]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.<strong style="color:#006600">"Эссенция лунного света"</strong> - 1 шт.',
				recipes: null
		},
		enh_9_3:{
				name: 'Зачаровать Шлем [3]',
				src: imP3 + 'enh_9_3.gif',
				descr: 'Масса: 1 <br />Цена: 150 кр.<br /><img src="'+imP2+'align50.gif" />Цена: 100 екр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Наложены заклятия: усиление <br />Описание: <br />Подходит для шлемов и даже для сапог.<br />Можно собрать в <strong>Катакомбах</strong> в Demons City<br />Рецепт:<br /><strong style="color:#006600">Зачаровать Шлем [2]</strong> - 3 шт. <strong style="color:#006600">Пирамидальный ключ</strong> - 1 шт.<strong style="color:#006600">"Эссенция Праведного гнева"</strong> - 1 шт.',
				recipes: null
		},

		enhp_3_costr1:{
				name: 'Зачаровать Оружие: Чары слабости 1',
				src: imP3 + 'enhp_3_costr1.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье слабости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>силу</strong> противника.<br /> Отнимает у противника 30 силы на 5 разменов. Шанс срабатывания: 1% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_costr2:{
				name: 'Зачаровать Оружие: Чары слабости 2',
				src: imP3 + 'enhp_3_costr2.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье слабости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>силу</strong> противника.<br /> Отнимает у противника 30 силы на 5 разменов. Шанс срабатывания: 2% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_costr3:{
				name: 'Зачаровать Оружие: Чары слабости 3',
				src: imP3 + 'enhp_3_costr3.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье слабости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>силу</strong> противника. <br />Отнимает у противника 30 силы на 5 разменов. Шанс срабатывания: 3% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},

		enhp_3_codex1:{
				name: 'Зачаровать Оружие: Чары неуклюжести 1',
				src: imP3 + 'enhp_3_codex1.gif',
			 descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье неуклюжести</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>ловкость</strong> противника.<br /> Отнимает у противника 30 ловкости на 5 разменов. Шанс срабатывания: 1% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_codex2bg:{
				name: 'Зачаровать Оружие: Чары неуклюжести 2',
				src: imP3 + 'enhp_3_codex2.gif',
			 descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье неуклюжести</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>ловкость</strong> противника. <br />Отнимает у противника 30 ловкости на 6 часов. Шанс срабатывания: 2% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_codex3:{
				name: 'Зачаровать Оружие: Чары неуклюжести 3',
				src: imP3 + 'enhp_3_codex3.gif',
			 descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье неуклюжести</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>ловкость</strong> противника.<br /> Отнимает у противника 30 ловкости на 5 разменов. Шанс срабатывания: 3% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_coinst1:{
				name: 'Зачаровать Оружие: Чары оцепенения 1',
				src: imP3 + 'enhp_3_coinst1.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье оцепенения</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>интуицию</strong> противника.<br /> Отнимает у противника 30 интуиции на 5 разменов. Шанс срабатывания: 1% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_coinst2:{
				name: 'Зачаровать Оружие: Чары оцепенения 2',
				src: imP3 + 'enhp_3_coinst2.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье оцепенения</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>интуицию</strong> противника.<br /> Отнимает у противника 30 интуиции на 5 разменов. Шанс срабатывания: 2% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_coinst3:{
				name: 'Зачаровать Оружие: Чары оцепенения 3',
				src: imP3 + 'enhp_3_coinst3.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000"> Наложены заклятия: </strong> <strong>Проклятье оцепенения</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>интуицию</strong> противника.<br /> Отнимает у противника 30 интуиции на 5 разменов. Шанс срабатывания: 3% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_copower1:{
				name: 'Зачаровать Оружие: Чары чахлости 1',
				src: imP3 + 'enhp_3_copower1.gif',
	 		descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Проклятье чахлости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>выносливость</strong> противника.<br /> Отнимает у противника 30 выносливости и 50 HP на 5 разменов. Шанс срабатывания: 1% при каждом успешном ударе. <br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_copower2:{
				name: 'Зачаровать Оружие: Чары чахлости 2',
				src: imP3 + 'enhp_3_copower2.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Проклятье чахлости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>выносливость</strong> противника.<br /> Отнимает у противника 30 выносливости и 100 HP на 5 разменов. Шанс срабатывания: 2% при каждом успешном ударе. <br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_copower3:{
				name: 'Зачаровать Оружие: Чары чахлости 3',
				src: imP3 + 'enhp_3_copower3.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Проклятье чахлости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>выносливость</strong> противника.<br /> Отнимает у противника 30 выносливости и 180 HP на 5 разменов. Шанс срабатывания: 3% при каждом успешном ударе. <br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},

		enhp_3_cointel1:{
				name: 'Зачаровать Оружие: Чары тупости 1',
				src: imP3 + 'enhp_3_cointel1.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Проклятье тупости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>интеллект</strong> противника.<br /> Отнимает у противника 30 интеллекта на 5 разменов. Шанс срабатывания: 1% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_cointel2:{
				name: 'Зачаровать Оружие: Чары тупости 2',
				src: imP3 + 'enhp_3_cointel2.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Проклятье тупости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>интеллект</strong> противника.<br /> Отнимает у противника 30 интеллекта на 5 разменов. Шанс срабатывания: 2% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_cointel3:{
				name: 'Зачаровать Оружие: Чары тупости 3',
				src: imP3 + 'enhp_3_cointel3.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br /><strong style="color:#880000">Наложены заклятия:</strong> <strong>Проклятье тупости</strong> <br />Описание: <br />У зачарованного этим свитком оружия появляется шанс временно понизить <strong>интеллект</strong> противника.<br /> Отнимает у противника 30 интеллекта на 5 разменов. Шанс срабатывания: 3% при каждом успешном ударе.<br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		},
		enhp_3_manabuff1:{
				name: 'Зачаровать Оружие: Увеличение Маны 1',
				src: imP3 + 'enhp_3_manabuff1.gif',
				descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Действует на:<ul><li>Уровень маны: +10 (фактически даст +20)</li></ul> Описание: <br />При использовании на посох увеличивает количество маны. <br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		}, 
  		enhp_3_manabuff2:{
				name: 'Зачаровать Оружие: Увеличение Маны 2',
				src: imP3 + 'enhp_3_manabuff2.gif',
	  			descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Действует на:<ul><li>Уровень маны: +20 (фактически даст +40)</li></ul> Описание: <br />При использовании на посох увеличивает количество маны. <br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		}, 
  		enhp_3_manabuff3:{
				name: 'Зачаровать Оружие: Увеличение Маны 3',
				src: imP3 + 'enhp_3_manabuff3.gif',
 			descr: 'Масса: 1  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Вероятность срабатывания:   99%<br />Действует на:<ul><li>Уровень маны: +30 (фактически даст +60)</li></ul> Описание: <br />При использовании на посох увеличивает количество маны.  <br />Может выпасть с "Мастер Грит", "Страж Сокровищ"',
				recipes: null
		}, 
		enhp_5_dampen_all_1:{
				name: 'Зачаровать Пояс Чары Проклятья Древних 1', city: 1,
				src: imP3 + 'enhp_5_dampen_all_1.gif  ',
				descr: 'Цена: 50 кр.  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Требуется предмет:<strong> <font color=red>Эссенция чистоты, [Золото]x3</font></strong><br />Долговечность: 0/1  <br />Срок годности: 30 дн.<br />Наложены заклятия: Проклятье Древних <br />Описание:<br />Зачарованный этим свитком пояс имеет шанс временно понизить характиристики атаковавшего противника. <br />Отнимает у противника 5 выносливости, 5 интеллекта, 5 ловкости, 5 силы и 5 интуиции на 5 разменов<br />Шанс срабатывания: 5% при получении удара в пояс.',
				recipes: null
		},
		enhp_5_defend_all_1:{
				name: 'Зачаровать Пояс: Чары Воли Глубин 1', city: 2,
				src: imP3 + 'enhp_5_defend_all_1.gif',
				descr: 'Цена: 50 кр.  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Требуется предмет:<strong> <font color=red>[Стихиалия] X 1, [Золото] X 3</font></strong><br />Долговечность: 0/1  <br />Срок годности: 30 дн.<br />Наложено заклятье: Воля Бездны<br />Описание:<br />Зачарованный этим свитком пояс имеет шанс поглотить 40% нанесенного вам урона. <br />Шанс срабатывания: 5% при получении удара в пояс.'
			},
		enhp_13_pm_revard:{
				name: 'Зачаровать наручи: Здоровье +12', city: 3,
				src: imP3 + 'enhp_13_pm_revard.gif',
				descr: 'Цена: 50 кр.  <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br /><strong>Требуется предмет:</strong> <strong> <font color=red>Эссенция лунного света, [Слиток пустынной руды]x3</font></strong><br />Долговечность: 0/1 <br /><strong>Действует на:</strong><br /> • Уровень жизни (HP): +12 <br />Описание:<br /> При использовании на наручи, увеличивает уровень здоровья на 12  '
			},
  enhp_19_2:{
				name: 'Зачаровать поножи: Выживание',
				src: imP3 + 'enhp_19_2.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр.<BR>Требуется предмет: <strong> [Идеальные Образцы]x3 </strong> <BR>Долговечность: 0/1 <BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Уровень жизни (HP): +40<BR><SMALL><strong>Описание:</strong><BR>При использовании на поножи увеличивает уровень здоровья на 40.</SMALL>'
		},
  enhp_19_3:{
				name: 'Зачаровать поножи: Защита от магии',
				src: imP3 + 'enhp_19_3.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр.<BR>Требуется предмет: <strong> [Идеальные Образцы]x3 </strong> <BR>Долговечность: 0/1 <BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Защита от магии: +20<BR><SMALL><strong>Описание:</strong><BR>При использовании на поножи увеличивает защиту от магии на 20.</SMALL>'
		},
  enhp_19_1:{
				name: 'Зачаровать поножи: Защита от урона',
				src: imP3 + 'enhp_19_1.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр.<BR>Требуется предмет: <strong> [Идеальные Образцы]x3 </strong> <BR>Долговечность: 0/1 <BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Защита от урона: +20<BR><SMALL><strong>Описание:</strong><BR>При использовании на поножи увеличивает защиту от урона на 20.</SMALL>'
		},
  enhp_9_5:{
				name: 'Зачаровать шлем: Адаптация',
				src: imP3 + 'enhp_9_5.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр.<BR>Долговечность: 0/1<BR>Вероятность срабатывания: 99%<BR><STRONG>Действует на:<BR></STRONG>• Количество увеличений: 2<BR>• Защита от урона: +5<BR><SMALL>При использовании на шлем добавляет 2 выбранных параметра. Параметры нужно выбрать до использования свитка.</SMALL><BR> Обменивается у Шейлы за Череп Лика Хаоса'
		},
  enhp_12_4:{
				name: 'Зачаровать сапоги: Адаптация',
				src: imP3 + 'enhp_12_4.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Долговечность: 0/1<BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Количество увеличений: 2<BR>• Мф. против критического удара (%): +10<BR><SMALL>При использовании на сапоги добавляет 2 выбранных параметра. Параметры нужно выбрать до использования свитка.</SMALL><BR> Обменивается у Шейлы за Хвост Шипокрыла'
		},
   enhp_4_4:{
				name: 'Зачаровать броню: Адаптация',
				src: imP3 + 'enhp_4_4.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Долговечность: 0/1<BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Количество увеличений: 2<BR>• Мф. против увертывания (%): +10<BR><SMALL>При использовании на броню добавляет 2 выбранных параметра. Параметры нужно выбрать до использования свитка.</SMALL><BR> Обменивается у Шейлы за Крыло Шипокрыла Хаоса'
		},
  enhp_2_4:{
				name: 'Зачаровать амулет: Адаптация',
				src: imP3 + 'enhp_2_4.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр.  <BR>Долговечность: 0/1<BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Количество увеличений: 2<BR>• Защита от магии: +5<BR><SMALL>При использовании на амулет добавляет 2 выбранных параметра. Параметры нужно выбрать до использования свитка.</SMALL><BR> Обменивается у Шейлы за Перья Валентайского Охотника'
		},
 enhp_19_4:{
				name: 'Зачаровать поножи: Адаптация',
				src: imP3 + 'enhp_19_4.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Цена: 1 кр.<BR>Долговечность: 0/1<BR>Вероятность срабатывания: 99%<BR><strong>Действует на:</strong><BR>• Количество увеличений: 3<BR><SMALL>При использовании на поножи добавляет 3 выбранных параметра. Параметры нужно выбрать до использования свитка.</SMALL><BR> Обменивается у Шейлы за Пепел Фанатика Хаоса'
		} 
};

var taktiks ={
		sp_tacpts_HIT1:{
				name: 'Тактика Боя: 1',
				src: imP3 + 'sp_tacpts_HIT1.gif',
				descr:  'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 1 бонус удара - <img src="'+imP42+'hit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater7': 3}
		},
		sp_tacpts_HIT2:{
				name: 'Тактика Боя: 2',
				src: imP3 + 'sp_tacpts_HIT2.gif',
				descr: 'Масса: 1 <br />Цена: 20 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 2 бонуса удара - <img src="'+imP42+'hit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater18': 2}
		},
		sp_tacpts_HIT3:{
				name: 'Тактика Боя: 3',
				src: imP3 + 'sp_tacpts_HIT3.gif',
				descr: 'Масса: 1 <br />Цена: 30 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 3 бонуса удара - <img src="'+imP42+'hit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater30': 2}
		},
		sp_tacpts_HIT4:{
				name: 'Тактика Боя: 4',
				src: imP3 + 'sp_tacpts_HIT4.gif',
				descr: 'Масса: 1 <br />Цена: 40 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 4 бонуса удара - <img src="'+imP42+'hit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater22': 1}
		},
		sp_tacpts_HIT5:{
				name: 'Тактика Боя: 5',
				src: imP3 + 'sp_tacpts_HIT5.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 5 бонусов удара - <img src="'+imP42+'hit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater22': 1,'mater23': 1}
		},
		sp_tacpts_BLK1:{
				name: 'Тактика Защиты: 1',
				src: imP3 + 'sp_tacpts_BLK1.gif',
				descr: 'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 1 бонус блока - <img src="'+imP42+'block.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater11': 3}
		},
		sp_tacpts_BLK2:{
				name: 'Тактика Защиты: 2',
				src: imP3 + 'sp_tacpts_BLK2.gif',
				descr: 'Масса: 1 <br />Цена: 20 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 2 бонуса блока - <img src="'+imP42+'block.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater19': 2}
		},
		sp_tacpts_BLK3:{
				name: 'Тактика Защиты: 3',
				src: imP3 + 'sp_tacpts_BLK3.gif',
				descr: 'Масса: 1 <br />Цена: 30 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 3 бонуса блока - <img src="'+imP42+'block.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater29': 2}
		},
		sp_tacpts_BLK4:{
				name: 'Тактика Защиты: 4',
				src: imP3 + 'sp_tacpts_BLK4.gif',
				descr: 'Масса: 1 <br />Цена: 40 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 4 бонуса блока - <img src="'+imP42+'block.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater21': 1}
		},
		sp_tacpts_BLK5:{
				name: 'Тактика Защиты: 5',
				src: imP3 + 'sp_tacpts_BLK5.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 5 бонусов блока - <img src="'+imP42+'block.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater21': 1,'mater23': 1}
		},
		sp_tacpts_KRT1:{
				name: 'Тактика Крови: 1',
				src: imP3 + 'sp_tacpts_KRT1.gif',
				descr: 'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 1 бонус крита - <img src="'+imP42+'krit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater9': 3}
		},
		sp_tacpts_KRT2:{
				name: 'Тактика Крови: 2',
				src: imP3 + 'sp_tacpts_KRT2.gif',
				descr: 'Масса: 1 <br />Цена: 20 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 2 бонуса крита - <img src="'+imP42+'krit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater16': 2}
		},
		sp_tacpts_KRT3:{
				name: 'Тактика Крови: 3',
				src: imP3 + 'sp_tacpts_KRT3.gif',
				descr: 'Масса: 1 <br />Цена: 30 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 3 бонуса крита - <img src="'+imP42+'krit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater27': 2}
		},
		sp_tacpts_KRT4:{
				name: 'Тактика Крови: 4',
				src: imP3 + 'sp_tacpts_KRT4.gif',
				descr: 'Масса: 1 <br />Цена: 40 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 4 бонуса крита - <img src="'+imP42+'krit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater31': 1}
		},
		sp_tacpts_KRT5:{
				name: 'Тактика Крови: 5',
				src: imP3 + 'sp_tacpts_KRT5.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 5 бонусов крита - <img src="'+imP42+'krit.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater31': 1,'mater23': 1}
		},
		sp_tacpts_CNTR1:{
				name: 'Тактика Ответа: 1',
				src: imP3 + 'sp_tacpts_CNTR1.gif',
				descr: 'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 1 бонус уворота - <img src="'+imP42+'counter.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater10': 3}
		},
		sp_tacpts_CNTR2:{
				name: 'Тактика Ответа: 2',
				src: imP3 + 'sp_tacpts_CNTR2.gif',
				descr: 'Масса: 1 <br />Цена: 20 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 2 бонуса уворота - <img src="'+imP42+'counter.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater17': 2}
		},
		sp_tacpts_CNTR3:{
				name: 'Тактика Ответа: 3',
				src: imP3 + 'sp_tacpts_CNTR3.gif',
				descr: 'Масса: 1 <br />Цена: 30 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 3 бонуса уворота - <img src="'+imP42+'counter.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater28': 2}
		},
		sp_tacpts_CNTR4:{
				name: 'Тактика Ответа: 4',
				src: imP3 + 'sp_tacpts_CNTR4.gif',
				descr: 'Масса: 1 <br />Цена: 40 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 4 бонуса уворота - <img src="'+imP42+'counter.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater20': 1}
		},
		sp_tacpts_CNTR5:{
				name: 'Тактика Ответа: 5',
				src: imP3 + 'sp_tacpts_CNTR5.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 5 бонусов уворота - <img src="'+imP42+'counter.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater20': 1,'mater23': 1}
		},
		sp_tacpts_PRY1:{
				name: 'Тактика Отражения: 1',
				src: imP3 + 'sp_tacpts_PRY1.gif',
				descr: 'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 1 бонус парирования - <img src="'+imP42+'parry.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater8': 3}
		},
		sp_tacpts_PRY2:{
				name: 'Тактика Отражения: 2',
				src: imP3 + 'sp_tacpts_PRY2.gif',
				descr: 'Масса: 1 <br />Цена: 20 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 2 бонуса парирования - <img src="'+imP42+'parry.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater15': 2}
		},
		sp_tacpts_PRY3:{
				name: 'Тактика Отражения: 3',
				src: imP3 + 'sp_tacpts_PRY3.gif',
				descr: 'Масса: 1 <br />Цена: 30 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 3 бонуса парирования - <img src="'+imP42+'parry.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater26': 2}
		},
		sp_tacpts_PRY4:{
				name: 'Тактика Отражения: 4',
				src: imP3 + 'sp_tacpts_PRY4.gif',
				descr: 'Масса: 1 <br />Цена: 40 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 4 бонуса парирования - <img src="'+imP42+'parry.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater24': 1}
		},
		sp_tacpts_PRY5:{
				name: 'Тактика Отражения: 5',
				src: imP3 + 'sp_tacpts_PRY5.gif',
				descr: 'Масса: 1 <br />Цена: 50 кр. <br />Долговечность: 0/1 <br /> Задержка использования: 3 мин.<br />&nbsp;• Мгновенное заклинание<br /><strong>Требуется минимальное:</strong><br />&nbsp;• Уровень: 5<br /><font color=#990000>Наложены заклятия:</font> тактика<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Описание:<br />Дает 5 бонусов парирования - <img src="'+imP42+'parry.gif"> <br />Собирается в Лаборатории на первом этаже <strong>Бездны</strong> в Angels City',
				recipes: {'mater24': 1,'mater23': 1}
		}

};

var pochin ={
		spell_repare_1:{
				name: 'Свиток починки 1',
				src: imP3 + 'spell_repare_1.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Свитки выпадают из монстров, используя рецепт свитка (рецеп свитка состоит из случайных ингредиентов и их количества), можно получить возможность починить артефакт в Мастерских Забытых Мастеров <strong>Подземелья Потеряных</strong> в Emerald City',
				recipes: null
		},
		spell_repare_3:{
				name: 'Свиток починки 3',
				src: imP3 + 'spell_repare_3.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Свитки выпадают из монстров, используя рецепт свитка (рецеп свитка состоит из случайных ингредиентов и их количества), можно получить возможность починить артефакт в Мастерской Забытых Мастеров <strong>Подземелья Потеряных</strong> в Emerald City',
				recipes: null
		},
		spell_repare_5:{
				name: 'Свиток починки 5',
				src: imP3 + 'spell_repare_5.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Свитки выпадают из монстров, используя рецепт свитка (рецеп свитка состоит из случайных ингредиентов и их количества), можно получить возможность починить артефакт в Мастерской Забытых Мастеров <strong>Подземелья Потеряных</strong> в Emerald City',
				recipes: null
		},
		spell_repare_7:{
				name: 'Свиток починки 7',
				src: imP3 + 'spell_repare_7.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Свитки выпадают из монстров, используя рецепт свитка (рецеп свитка состоит из случайных ингредиентов и их количества), можно получить возможность починить артефакт в Мастерской Забытых Мастеров <strong>Подземелья Потеряных</strong> в Emerald City',
				recipes: null
		},
		spell_repare_10:{
				name: 'Свиток починки 10',
				src: imP3 + 'spell_repare_10.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Цена: 1 кр. <br />Свитки выпадают из монстров, используя рецепт свитка (рецеп свитка состоит из случайных ингредиентов и их количества), можно получить возможность починить артефакт в Мастерской Забытых Мастеров <strong>Подземелья Потеряных</strong> в Emerald City',
				recipes: null
		}
};

	var rares = {
		ring2008:{
				name: 'Новогоднее Кольцо Мороза', city: 1,
				src: imP3 + 'ring2008.gif',
				descr: 'Масса: 1 <img src="'+d4+'" alt="'+d5+'"/><br />Цена: 94 кр.<br />Долговечность: 0/30<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br />• Выносливость: 10<br />• Невозможно использовать хаосникам<br /><strong>Действует на:</strong><br />• Количество увеличений: 6<br />Максимум: 1 ед.<br /><strong>Наложено заклятье:</strong> <B>Обморожение</B><br />(наносит противнику 10-15 ед урона водой. Шанс срабатывания: 30% при каждом успешном ударе) <br />Это кольцо можно получить у "Отмороженный Бугай" в "Ледяной пещере".',
				recipes: null
		},
		ring2008_1:{
				name: 'Новогоднее Кольцо Мороза', city: 1,
				src: imP3 + 'ring2008.gif',
				descr: 'Масса: 1 <img src="'+d4+'" alt="'+d5+'"/><br />Цена: 57 кр.<br />Долговечность: 0/20<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4<br />• Выносливость: 10<br />• Невозможно использовать хаосникам<br /><strong>Действует на:</strong><br />• Количество увеличений: 3<br />Максимум: 1 ед.<br /><strong>Наложено заклятье:</strong> <B>Водная Стихия</B><br />Это кольцо можно получить у "Отмороженный Бугай" в "Ледяной пещере" в Dreams и Low City.',
				recipes: null
		},
		ring91:{
				name: 'Кольцо Горящего Взгляда (мф)', city: 1,
				src: imP3 + 'ring91.gif',
				descr: 'Масса: 1<br />Долговечность: 0/20<br />Цена: 45 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 15<br />• Выносливость: 10<br />• Уровень: 4<br /><strong>Действует на:</strong><br />•Мф. увертывания: +25 %<br />•<B>Уровень жизни (HP): +10</B> или <B>Интеллект: +1</B> или <B>Интеллект: +2</B><br /><strong>Наложены заклятия:</strong> <b>Ожог</b> <br /><i>Сделано в Capitals city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Возможно найти в сундуке на 2м этаже <strong>Подземелья Тысячи Проклятий</strong> в Capital City',				recipes: null
		},
		ring73:{
				name: 'Кольцо Мороза (мф)', city: 1,
				src: imP3 + 'ring73.gif',
				descr: 'Масса: 1<br />Долговечность: 0/20<br />Цена: 45 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 15<br />• Выносливость: 10<br />• Уровень: 4<br /><strong>Действует на:</strong><br />•Мф. увертывания: +25 %<br />•<B>Уровень жизни (HP): +10</B> или <B>Интеллект: +1</B> или <B>Интеллект: +2</B> <br /><strong>Наложены заклятия:</strong> <b>Обморожение</b><br /><i>Сделано в Capitals city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Возможно найти в сундуке на 2м этаже <strong>Подземелья Тысячи Проклятий</strong> в Capital City',				recipes: null
		},
 
		ring66:{
				name: 'Сияющее кольцо (мф)', city: 1,
				src: imP3 + 'ring66.gif',
				descr: 'Масса: 1<br />Долговечность: 0/20<br />Цена: 45 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 15<br />• Выносливость: 10<br />• Уровень: 4<br /><strong>Действует на:</strong><br />•Мф. увертывания: +25 %<br />•<B>Уровень жизни (HP): +10</B> или <B>Интеллект: +1</B> или <B>Интеллект: +2</B><br /><strong>Наложены заклятия:</strong> <b>Разряд</b> <br /><i>Сделано в Capitals city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Возможно найти в сундуке на 2м этаже <strong>Подземелья Тысячи Проклятий</strong> в Capital City',
    recipes: null
		},
 
		ring71:{
				name: 'Золотое Кольцо Здоровья (мф)', city: 1,
				src: imP3 + 'ring71.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/50<br />Цена: 30 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 20<br />• Выносливость: 20<br />• Уровень: 6<br /><strong>Действует на:</strong><br />• Сила: +2<br />• <B>Уровень жизни (HP): +60</B><br /><strong>Свойства предмета:</strong><br />• Защита от урона: +2<br /><i>Сделано в Capitals city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Редко выпадает из Дарьяны Корт на втором этаже <strong>Подземелья Тысячи Проклятий</strong> в Capital City.',
				recipes: null
		},

		ring80:{
				name: 'Кольцо каменной осады (мф)', city: 1,
				src: imP3 + 'ring80.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/60<br />Цена: 82 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 40<br />• Выносливость: 40<br />• Уровень: 8<br /><strong>Действует на:</strong><br />• <B>Сила: +5</B><br />• Броня корпуса: 1-12 (d12)<br />• Броня головы: 1-12 (d12)<br />• Броня пояса: 1-12 (d12)<br />• Броня ног: 1-12 (d12)<br />• Мф. против увертывания: +10%<br />• Мф. против критического удара: +20%<br />• Уровень жизни (HP): +33<br /><strong>Свойства предмета:</strong><br />• Защита от урона: +15<br /><i>Сделано в Capitals city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Крайне редко выпадает из Древнего Проклятья Глубин, 4 этаж <strong>Подземелья Тысячи Проклятий</strong>.',
				recipes: null
		},
		ring80_1:{
				name: 'Кольцо каменной осады (мф)', city: 1,
				src: imP3 + 'ring80.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/60<br />Цена: 82 кр.<br /><strong>Требуется минимальное:</strong><br />• <B>Сила: 30</B><br />• <B>Выносливость: 30 </B><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Броня корпуса: 1-12 (d12)<br />• Броня головы: 1-12 (d12)<br />• Броня пояса: 1-12 (d12)<br />• Броня ног: 1-12 (d12)<br />• Мф. против увертывания: +10%<br />• Мф. против критического удара: +20%<br />• <B>Уровень жизни (HP): +66</B><br /><strong>Свойства предмета:</strong><br />• Защита от урона: +15<br /><i>Сделано в Capitals city</i><br />Может выпасть из Дарьяны Корт на 2м этаже <strong>Подземелья Тысячи Проклятий</strong>.',
				recipes: null
		},
		ring93:{
				name: 'Кольцо Бликов (мф)', city: 4,
				src: imP3 + 'ring93.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/50<br />Цена: 78 кр.<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 35<br />• Интуиция: 30<br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Ловкость: +2<br />• Уровень жизни (HP): +6<br />• Мф. против критического удара: +20%<br />• <B>Мф. увертывания: +55%</B><br />• Мф. контрудара: +5%<br />• <B>Мф. парирования: +3%</B><br />Часть комплекта: Комплект Бликов [0/6]<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Может быть у Офицера Глубин в <strong>Катакомбах</strong> Demons City. ',
				recipes: null
		},
		ring93_1:{
				name: 'Кольцо Бликов (мф)', city: 4,
				src: imP3 + 'ring93.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/50<br />Цена: 78 кр.<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 25<br />• <B>Интуиция: 15</B><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Ловкость: +2<br />• Уровень жизни (HP): +6<br />• Мф. против критического удара: +20 %<br />• Мф. увертывания: +45 %<br />• Мф. контрудара: +5 %<br />• Мф. парирования: +2 %<br />Часть комплекта: Комплект Бликов [0/6]<br /><i>Сделано в Capital city</i><br />Может выкинуть Страж Крантон на 3м этаже <strong>ПТП</strong> или Страж Дайтон на 1м этаже <strong>Бездны</strong>. ',
				recipes: null
		},
		ring120_si8:{
				name: 'Кольцо Бушующего Пламени', city: 4,
				src: imP3 + 'ring120_si8.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 100 кр. <br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9 <br />• Мастерство владения стихией Огня: 3 <br />• Выносливость:   25 <br />• Сила: 25<br /><strong>Действует на:</strong><br />• Мф. увертывания (%): +50<br /><strong>Наложено заклятье:</strong> <B>Ожог</B><br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Может быть у Чернокнижника в <strong>Катакомбах</strong> Demons City.',
				recipes: null
		},
		ring121_si8:{
				name: 'Кольцо Северного Ветра', city: 4,
				src: imP3 + 'ring121_si8.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 100 кр. <br />Долговечность: 0/50 <br /><strong>Требуется минимальное:</strong><br />• Уровень: 9 <br />• Мастерство владения стихией Воды: 3 <br />• Выносливость:   25 <br />• Сила: 25<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +25 <br />• Мф. против увертывания (%): +25<br /><strong>Наложены заклятия:</strong> <B>Обморожение</B><br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Может быть у Епископа в <strong>Катакомбах</strong> Demons City.',
				recipes: null
		},
		amulet81_1:{
				name: 'Амулет Забытых Времен (мф)', city: 2,
				src: imP3 + 'amulet81.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/50<br />Цена: 240 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 45<br />• Ловкость: 15<br />• Интуиция: 15<br />• Выносливость: 50<br />• Уровень: 9<br /><strong>Действует на:</strong><br />• <b>Сила: +10</b><br />• <b>Уровень жизни (HP): +250</b><br />• Мф. против критического удара: +35%<br />• Мф. против увертывания: +35%<br />• Защита от магии: +40<br />• Броня корпуса: 1-25 (1+d25)<br />• Броня головы: 1-25 (1+d25)<br />• Броня пояса: 1-25 (1+d25)<br />• Броня ног: 1-25 (1+d25)<br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Падает с Кошмара Глубин в <strong>Бездне</strong> в Angels City.',
				recipes: null
		},
		amulet84:{
				name: 'Осколок Стража', city: 1,
				src: imP3 + 'amulet84.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 290 кр.<br />Долговечность: 0/40<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 15<br />• Интуиция: 15<br />• Уровень: 9<br />• Выносливость: 36<br />• Сила: 35<br /><strong>Действует на:</strong><br />• Защита от магии: +80<br />• Защита от урона: +100<br />• Уровень жизни (HP): +120<br />Сделано в Capital city<br /><font color=#990000>Предмет не подлежит ремонту</font><br />Может выпасть с <strong>Каменного стража</strong> в <strong>Пещере Тысячи Проклятий</strong> Capital City.',
				recipes: null
		},
		amulet67:{
				name: 'Амулет здоровья (мф)', city: 3,
				src: imP3 + 'amulet67.gif',
				descr: 'Масса: 1<br />Долговечность: 0/50<br />Цена: 62 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 10<br />• Выносливость: 20<br />• Уровень: 4<br /><strong>Действует на:</strong><br />• <b>Уровень жизни (HP): +150</b><br /><i>Сделано в Sand city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Очень редко можно найти в сундуке первого этажа <strong>Пещер Мглы</strong> в Sand City.',
				recipes: null
		},
 
		mesh1:{
				name: 'Мешок Забытых', city: 3,
				src: imP3 + 'mesh1.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 2000 кр. <br />Долговечность: 0/1 <br />Срок годности: 180 дн.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4<br />• Сила: 15<br /><strong>Действует на:</strong><br />• Увеличивает рюкзак: +250<br /><i>Сделано в Sand city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Иногда выпадает после смерти Рульфа Хрумпта, третий этаж <strong>Пещер Мглы</strong> в Sand City.',
				recipes: null
		},

  		sword103_1:{
				name: 'Меч Кровавой Луны +5 (мф)', city: 2,
				src: imP3 + 'sword103.gif',
				descr: 'Масса: 13 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/50<br />Цена: 220 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 30<br />• Ловкость: 15<br />• Интуиция: 50<br />• Выносливость: 30<br />• Уровень: 9<br /><strong>Действует на:</strong><br />• <B>Интуиция: +5 </B><br /><strong>Свойства предмета:</strong><br />• Урон: 17 - 39<br />• Мф. против увертывания: +50 %<br />• Мф. критического удара: +80 %<br />• Мф. мощности крит. удара: +10 %<br />• Мастерство владения мечами: +2<br /><strong>Особенности:</strong><br />• Колющие атаки: малы<br />• Рубящие атаки: временами<br />• Режущие атаки: малы<br />• Ледяные атаки: редки<br />• Зоны блокирования: +<br /><strong>Описание:</strong><br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font> <br />Иногда выпадает после убийства "Гарл Йонни Салистон" на 3м этаже <strong>Бездны</strong> в Angelscity',
				recipes: null
		},
		sword103:{
				name: 'Меч Кровавой Луны (мф)', city: 3,
				src: imP3 + 'sword103.gif',
				descr: 'Масса: 13 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Долговечность: 0/50<br />Цена: 220 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 30<br />• Ловкость: 15<br />• Интуиция: 50<br />• Выносливость: 30<br />• Уровень: 9<br /><strong>Действует на:</strong><br />• <B>Интеллект: +2 </B><br /><strong>Свойства предмета:</strong><br />• Урон: 12 - 34<br />• Мф. против увертывания: +50 %<br />• Мф. критического удара: +80 %<br />• Мф. мощности крит. удара: +10 %<br />• Мастерство владения мечами: +2<br /><strong>Особенности:</strong><br />• Колющие атаки: малы<br />• Рубящие атаки: временами<br />• Режущие атаки: малы<br />• Ледяные атаки: редки<br />• Зоны блокирования: +<br /><strong>Описание:</strong><br /><i>Сделано в Angels city</i><br /><font color=#990000>Предмет не подлежит ремонту</font> <br />Иногда выпадает после убийства "Гарл Йонни Салистон" на 3м этаже <strong>Бездны</strong> в Angelscity',
				recipes: null
		},
		sword104:{
				name: 'Меч Забытых Времен (мф)', city: 3,
				src: imP3 + 'sword104.gif',
				descr: 'Масса: 17 <br />Долговечность: 0/50<br />Цена: 220 кр.<br /><strong>Требуется минимальное:</strong><br />• Сила: 45<br />• Ловкость: 15<br />• Интуиция: 15<br />• Выносливость: 50<br />• Уровень: 9<br />• Мастерство владения мечами: 5<br /><strong>Действует на:</strong><br />• Сила: +2<br />• <b>Интеллект: +2</b><br />• Мф. против критического удара: +40 %<br /><strong>Свойства предмета:</strong><br />• Мф. против увертывания: +40 %<br />• Мф. мощности рубящего урона: +10 %<br />• Мастерство владения мечами: +2<br />• Минимальное наносимое повреждение: +12<br />• Максимальное наносимое повреждение: +34<br /><strong>Особенности:</strong><br />• Колющие атаки: Малы<br />• Рубящие атаки: Временами<br />• Режущие атаки: Малы<br /><i>Сделано в Sand city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в сундуках восточной части второго этажа <strong>Пещер Мглы</strong> в Sand City.',
				recipes: null
		},

		sword102:{
				name: 'Меч Паука (мф)', city: 3,
				src: imP3 + 'sword102.gif',
				descr: 'Масса: 17 <br />Долговечность: 0/50<br />Цена: 220 кр. <br />Второе оружие<br /><strong>Требуется минимальное:</strong><br />• Сила: 30<br />• Ловкость: 55<br />• Интуиция: 15<br />• Выносливость: 30<br />• Уровень: 9<br />• Мастерство владения мечами: 5<br /><strong>Действует на:</strong><br />• Сила: +1<br />• <b>Интеллект: +2</b><br />• Мф. увертывания: +75 %<br />• Мф. против критического удара: +35 %<br /><strong>Свойства предмета:</strong><br />• Минимальное наносимое повреждение: +12<br />• Максимальное наносимое повреждение: +34<br />• Мф. удара сквозь броню: +20 %<br />• Мастерство владения мечами: +2<br /><strong>Особенности:</strong><br />• Колющие атаки: Малы<br />• Рубящие атаки: Временами<br />• Режущие атаки: Малы<br /><i>Сделано в Sand city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в сундуках восточной части второго этажа <strong>Пещер Мглы</strong> в Sand City.',
				recipes: null
		},
  		sword8:{
				name: 'Рассыпающий Меч Мольбы', city: 4,
				src: imP3 + 'sword8.gif',
				descr: 'Масса: 8 <br />Цена: 0 кр. <br />Долговечность: 0/3<br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br />• Выносливость: 20 <br />• Сила: 20<br /><strong>Свойства предмета:</strong><br />•   Урон: 7 - 18 <br />• Мф. критического удара (%): +50 <br />• Зоны блокирования: +<br /><strong>Описание:</strong><br />• Колющие атаки: Малы <br />• Рубящие атаки: Временами <br />• Дробящие атаки: Редки <br />• Режущие атаки: Малы<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в скелете на первом этаже <strong>Катакомб</strong> в Demons City. При выходе из подземелья рассыпается.',
				recipes: null
  		},
  		sword11:{
				name: 'Рассыпающий Меч Красоты', city: 4,
				src: imP3 + 'sword11.gif',
				descr: 'Масса: 8 <br />Цена: 0 кр. <br />Долговечность: 0/3<br /><strong>Требуется минимальное:</strong><br />•   Уровень: 3 <br />• Выносливость: 15 <br />• Сила: 15<br /><strong>Действует на:</strong><br />• Мф.   увертывания (%): +50<br /><strong>Свойства предмета:</strong><br />• Урон: 5 - 16 <br />• Мф. против   увертывания (%): +50 <br />• Мастерство владения мечами: +2 <br />• Зоны   блокирования: +<br /><strong>Особенности:</strong><br />• Колющие атаки: Малы <br />• Рубящие атаки:   Временами <br />• Дробящие атаки: Редки <br />• Режущие атаки: Малы<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в скелете на первом этаже <strong>Катакомб</strong> в Demons City. При выходе из подземелья рассыпается.',
				recipes: null
  		},
  		armor8:{
				name: 'Раcсыпающаяся броня печали', city: 4,
				src: imP3 + 'armor8.gif',
				descr: 'Масса: 25 <br />Цена: 0 кр. <br />Долговечность: 0/3<br /><strong>Требуется минимальное:</strong><br />• Уровень: 5 <br />• Выносливость: 25 <br />• Сила: 25<br /><strong>Действует на:</strong><br />•   Мф. против критического удара (%): +25 <br />• Мф. против увертывания (%): +20 <br />• Мф. критического удара (%): +25 <br />• Интеллект: +1 <br />• Мастерство   владения мечами: +1 <br />• Мастерство владения дубинами, булавами: +1 <br />•   Мастерство владения ножами, кастетами: +1 <br />• Мастерство владения топорами, секирами: +1 <br />• Уровень жизни (HP): +33 <br />• Сила: +4 <br />• Броня корпуса:   1-18 (d18)<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в скелете на первом этаже <strong>Катакомб</strong> в Demons City. При выходе из подземелья рассыпается.',
				recipes: null
  		},
  		clip8:{
				name: 'Рассыпающиеся Царские Серьги', city: 4,
				src: imP3 + 'clip8.gif',
				descr: 'Масса: 1 <br />Цена: 0 кр. <br />Долговечность: 0/3<br /><strong>Требуется минимальное:</strong><br />• Уровень: 3 <br />• Выносливость: 15 <br />• Сила: 15<br /><strong>Действует на:</strong><br />• Мф.   против критического удара (%): +20 <br />• Мф. против увертывания (%): +20 <br />• Мф. критического удара (%): +20 <br />• Мф. увертывания (%): +20<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Выпадает из Слизи живущей в <strong>Катакомбах</strong> Demons City. При выходе из подземелья рассыпается.',
				recipes: null
  		},
  		clip7:{
				name: 'Рассыпающиеся Серьги Защиты', city: 4,
				src: imP3 + 'clip7.gif',
				descr: 'Масса: 1 <br />Цена: 0 кр. <br />Долговечность: 0/3<br /><strong>Требуется минимальное:</strong><br />•   Уровень: 2 <br />• Выносливость: 8 <br />• Сила: 8<br /><strong>Действует на:</strong><br />• броня   головы: +3 <br />• броня корпуса: +3 <br />• броня пояса: +3 <br />• броня ног: +3<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в <strong>Катакомбах</strong> Demons City. При выходе из подземелья рассыпается.',
				recipes: null
  		},
  		clip1:{
				name: 'Рассыпающиеся Изумрудные Серьги', city: 4,
				src: imP3 + 'clip1.gif',
				descr: 'Масса: 1 <br />Цена: 0 кр. <br />Долговечность: 0/3 <br /><strong>Требуется минимальное:</strong><br />•   Уровень: 4<br />• Выносливость: 15 <br />• Сила: 20 <br /><strong>Действует на:</strong><br />• Уровень   жизни: +12 <br />• Мф. критического удара (%): +50<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в <strong>Катакомбах</strong> Demons City. При выходе из подземелья рассыпается.',
				recipes: null
  		},
		naruchi7:{
				name: 'Рукавицы Железного Дровосека', city: 4,
				src: imP3 + 'naruchi7.gif',
				descr: 'Масса: 4 <br />Цена: 30 кр. <br />Долговечность: 0/20 <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4<br />• Сила: 13 <br />• Ловкость: 15 <br /><strong>Действует на:</strong><br />• Мастерство владения топорами, секирами: +2<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в одном из сундуков в <strong>Катакомбах</strong> Demons City.',
				recipes: null
		},
		naruchi9:{
				name: 'Шипованные Перчатки Великана', city: 4,
				src: imP3 + 'naruchi9.gif',
				descr: 'Масса: 4 <br />Цена: 30 кр. <br />Долговечность: 0/20 <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br />• Сила: 15<br />• Ловкость: 15 <br /><strong>Действует на:</strong><br />• Мастерство владения дубинами, булавами: +2 <br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font><br />Можно найти в одном из сундуков в <strong>Катакомбах</strong> Demons City.',
				recipes: null
		},

		braslet27:{
				name: 'Наручи Ярости', city: 4,
				src: imP3 + 'braslet27.gif',
				descr: 'Масса: 2  <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 140 кр.<br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 40<br />• Мудрость: 50<br />• Уровень: 9<br /><strong>Действует на:</strong><br />• Подавление защиты от магии: +2<br />• Интуиция: +2<br />• Интеллект: +2<br />• Защита от магии: +5<br />• Уровень жизни (HP): +18<br />• Уровень маны: +80',
				recipes: null
		},
		hammer71:{
				name: 'Молот Забытых Времен (мф)', city: 4,
				src: imP3 + 'hammer71.gif',
				descr: 'Масса: 30 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 370 кр.<br />Долговечность: 0/60 <br /><strong>Требуется минимальное:</strong><br />• Ловкость: 15 <br />• Интуиция: 15 <br />• Уровень: 9 <br />• Мастерство владения дубинами, булавами: 5<br />• Выносливость:   50 <br />• Сила: 55 <br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +20 <br />• Сила: +2<br /><strong>Свойства предмета:</strong><br />• <b>Урон: 34 - 52</b> <br />• Мф. против увертывания (%):   +80<br />• Мф. мощности дробящего урона (%): +25 <br />• Мастерство владения   дубинами, булавами: +2<br />• Двуручное оружие <br />• Зоны блокирования: +<br /><strong>Особенности:</strong><br />• Колющие атаки: Ничтожно редки <br />• Дробящие атаки: Часты <br />• Часть комплекта: Комплект Забытых Времен [0/13] <br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font> <br />Падает из <strong>Берсерка</strong> на первом этаже <strong>Катакомб</strong> Demons City.',
				recipes: null
		},
		sword106_kki8:{
				name: 'Кровавый Меч', city: 4,
				src: imP3 + 'sword106_kki8.gif',
				descr: 'Масса: 20 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 280 кр.<br />Долговечность: 0/70 <br /><strong>Требуется минимальное:</strong><br />• Сила: 50<br />• Ловкость: 25<br />• Интуиция: 25<br />• Выносливость: 35<br />• Уровень: 10<br />• Мастерство владения мечами: 5<br /><strong>Действует на:</strong><br />• Мф. парирования (%): +10<br /><strong>Свойства предмета:</strong><br />• Урон: 14 - 38<br />• Мф. против увертывания: +80 %<br />• Мф. удара сквозь броню : +10 %<br />• Мастерство владения мечами: +3<br />• Зоны блокирования: +<br /><strong>Особенности:</strong><br />• Колющие атаки: малы<br />• Рубящие атаки: Регулярны<br />• Режущие атаки: Ничтожно редки<br />• Атаки Тьмой: Ничтожно редки<br /><i>Сделано в Demons city</i><br /><font color=#990000>Предмет не подлежит ремонту</font> <br /> Может упасть с ботов 8+ уровня.',
				recipes: null
  		},
		sword107_ppwl:{
				name: 'Меч Повелителя', city: 4,
				src: imP3 + 'sword107_ppwl.gif',
				descr: 'Масса: 35 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 420 кр. <br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br />• Мастерство владения мечами: 5<br />• Выносливость: 40<br />• Сила: 40<br /><strong>Действует на:</strong><br />• Мф. против увертывания (%): +100<br /><b>• Сила или Ловкость или Интуиция: от +9 до + 12 </b><br /><strong>Свойства предмета:</strong><br />• Урон: 30 - 48<br />• Мастерство владения мечами: +3<br />• Двуручное оружие<br />• Зоны блокирования: +<br />Особенности: <br />• Колющие   атаки: Малы <br />• Рубящие атаки: Регулярны <br />• Атаки Тьмой: Ничтожно редки<br /><i>Сделано в Demons city</i> <br />Иногда выпадает из "Повелителя" в <strong>Катакомбах</strong>Demons City.',
				recipes: null
  		},
 		aamulet2_hs3hg2:{
				name: 'Древний Кулон Королей', city: 4,
				src: imP3 + 'aamulet2_hs3hg2.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 415 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Сила: 50<br />• Ловкость: 20<br />• Интуиция: 20<br />• Выносливость: 35<br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Сила: +4<br />• Интеллект: +4<br />• Защита от магии: +15<br />• Защита от урона: +10<br />• Уровень жизни (HP): +120<br />• Мф. против критического удара: +125%<br />• Мф. против увертывания: +125%<br />• Мастерство владения оружием +2<br /><i>Сделано в Demons city</i><br />Можно найти в <strong>Катакомбах</strong> Demons City<br />Может упасть с ботов 8+ уровня.',
				recipes: null
		},
  		ashield6_7dk29as:{
				name: 'Обсидиановый Щит', city: 4,
				src: imP3 + 'ashield6_7dk29as.gif',
				descr: 'Масса: 20 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 390 кр.<br />Долговечность: 0/100 <br /><strong>Требуется минимальное:</strong><br />•   Уровень: 10<br />• Ловкость: 20<br />• Интуиция: 20<br />• Выносливость: 50<br />• Сила: 75<br /><strong>Действует на:</strong><br />• Мф.   против критического удара (%): +75<br />• Мф. против увертывания (%): +45<br />•   Защита от урона: +10<br />• Уровень жизни (HP): +90<br />• Сила: +4<br />• Броня   головы: 14-52 (13+d39)<br />• Броня корпуса: 14-52 (13+d39)<br />• Броня пояса:   14-52 (13+d39)<br />• Броня ног: 14-52 (13+d39)<br /><strong>Свойства предмета:</strong><br />•   Мф. блока щитом (%): +25<br /><i>Сделано в Demons city</i> <br />Может упасть с ботов 8+ уровня.',
				recipes: null
		},
		armor109_ppwa:{
				name: 'Броня Повелителя', city: 4,
				src: imP3 + 'armor109_ppwa.gif',
				descr: 'Масса: 45 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 525 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Сила: 45<br />• Выносливость: 40<br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Сила: +4<br />• Броня корпуса: +35<br />• Защита от урона: +25<br />• Уровень жизни (HP): +200<br />• <b>Мф. критического удара (%): или Мф. увертывания (%): от +60 до +75 </b><br />• Мф. против критического удара: +100%<br />• Мф. против увертывания: +65%<br />• Мастерство владения оружием: +2<br /><strong>Свойства предмета:</strong><br />• Защита от магии: +25<br /><strong>Особенности:</strong><br />• Защита от дробящего урона: Хорошая<br />• Защита от колющего урона: слабая<br />• Защита от режущего урона: Хорошая<br />• Защита от рубящего урона: Хорошая<br /><i>Сделано в Demons city</i> <br />Иногда выпадает из "Повелителя" в <strong>Катакомбах</strong>Demons City.',
				recipes: null
		},
		aboots2_dk2kd9:{
				name: 'Сапоги Небесного Ветра', city: 4,
				src: imP3 + 'aboots2_dk2kd9.gif',
				descr: 'Масса: 10 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 310 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Сила: 50<br />• Ловкость: 50<br />• Интуиция: 20<br />• Выносливость: 35<br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Ловкость: +6<br />• Интуиция: +2<br />• Защита от магии: +20<br />• Уровень жизни (HP): +54<br />• Броня ног: 14-52 (13+d39)<br />• Мф. увертывания: +70 %<br />• Мф. против критического удара: +70 %<br /><strong>Свойства предмета:</strong><br />• Защита от урона: +15<br /><i>Сделано в Demons city</i> <br />Могут упасть с ботов 8+ уровня.',
				recipes: null
	},
		helmet91:{
				name: 'Шлем Древнего Лича', city: 4,
				src: imP3 + 'helmet91.gif',
				descr: 'Масса: 5<img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 363 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 75<br />• Уровень: 10<br />• Мудрость: 50<br /><strong>Действует на:</strong><br />• Мф. мощности магии стихий: +10<br />• Интеллект: +10<br />• Защита от урона: +50<br />• Уровень жизни (HP): +100<br />• Уровень маны: +160<br />• Броня головы: 10-10 <br /><font color=#990000>Сделано в Demons city</font><br />Может выпасть из ботов 8+ уровня.',
				recipes: null
	},
		roba53:{
				name: 'Балахон Древнего Лича ', city: 4,
				src: imP3 + 'roba53.gif',
				descr: 'Масса: 2<img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 242 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 75<br />• Уровень: 10<br />• Мудрость: 50<br /><strong>Действует на:</strong><br />• Подавление защиты от магии: +5<br />• Мф. мощности магии стихий: +30<br />• Интеллект: +10<br />• Защита от урона: +100<br />• Уровень жизни (HP): +100<br />• Уровень маны: +200<br />• Броня пояса: 6-20 (5+d15) <br /><font color=#990000>Сделано в Demons city</font><br />Может выпасть из ботов 8+ уровня.',
    recipes: null
	},
		belt51:{
				name: 'Пояс Древнего Лича', city: 4,
				src: imP3 + 'belt51.gif',
				descr: 'Масса: 2<img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 242 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 75<br />• Уровень: 10<br />• Мудрость: 50<br /><strong>Действует на:</strong><br />• Интеллект: +5<br />• Уровень маны: +65<br />• Уровень жизни (HP): +50<br />• Защита от урона: +50<br />• Мф. мощности магии стихий: +10<br />• Броня корпуса: 6-20 (5+d15)<br /><font color=#990000>Сделано в Demons city</font><br />Может выпасть из ботов 8+ уровня.',
    recipes: null
	}
};

 var kanaliz ={
 amulet99:{
				name: 'Гайка Силы',
				src: imP3 + 'amulet99.gif',
				descr: 'Масса: 1 <Br />Цена: 90 кр.<Br />Долговечность: 0/30<Br /><strong>Требуется минимальное:</strong><Br />• Уровень: 4<Br />• Сила: 15<Br /><strong>Действует на:</strong><Br />• Мф. против критического удара (%): +27<Br />• Мф. против увертывания (%): +27<Br />• Уровень жизни (HP): +33<Br />• Сила: +3<Br />• Броня головы: 4-6 (3+d3)<Br />• Броня корпуса: 4-6 (3+d3)<Br />• Броня пояса: 4-6 (3+d3)<Br />• Броня ног: 4-6 (3+d3)<Br />Можно получить у <strong>Луки</strong> выполнив его квест.',
				recipes: null
		},
amulet100:{
				name: 'Гайка Мудрости',
				src: imP3 + 'amulet100.gif',
				descr: 'Масса: 1 <Br />Цена: 90 кр.<Br />Долговечность: 0/30<Br /><strong>Требуется минимальное:</strong><Br />• Интеллект: 15<Br />• Уровень: 4<Br /><strong>Действует на:</strong><Br />• Мф. против критического удара (%): +27<Br />• Интеллект: +3<Br />• Уровень жизни (HP): +30<Br />• Уровень маны: +30<Br />• Броня головы: 4-6 (3+d3)<Br />• Броня корпуса: 4-6 (3+d3)<Br />• Броня пояса: 4-6 (3+d3)<Br />• Броня ног: 4-6 (3+d3)<Br />Можно получить у <strong>Луки</strong> выполнив его квест.',
				recipes: null
		},
	 zk_vantuz_1:{
				name: 'Вантуз',
				src: imP3 + 'zk_vantuz_1.gif',
				recipes: null,
				descr: 'Масса: 1 <Br />Долговечность: 0/1<Br />Максимум: 1 ед.<Br /><strong>Описание:</strong><Br />Собственность Мартына.<Br />Взяв его у Луки, с ним можно попасть в "Котельную" и собирать с его помощью "Засоры". <Br />Обменяв у "Печника" получите 3 золотых жетона.'
		},
	 zk_zasor_1:{
				name: 'Засор',
				src: imP3 + 'zk_zasor_1.gif',
				recipes: null,
				descr: 'Масса: 1 <Br />Долговечность: 0/1<Br /><strong>Описание:</strong><Br />Вам кажется что... Оно ЖИВОЕ!<Br />Собираются в "Котельной" с помощью "Вантуза"<Br />Обменяв у "Печника" получите 3 золотых жетона за 33 "Засора".'
		},
	 mater_small_lvl4_reward:{
				name: 'Гайка',
				src: imP3 + 'mater_small_lvl4_reward.gif',
				recipes: null,
				descr: 'Может выпасть из: Паука, Сточного Паука, Канализационного Жука, Сантехника Зомби, Обитателя Подвалов; <Br />можно найти в: Потерянном сундуке, Водостоке на клетке <b>H13</b>, в Водостоке на клетке <b>K10</b> (в северной стене). <Br />1го этажа <strong>Канализации</strong>.'
		},
	 mater_small_lvl5_reward:{
				name: 'Чистая гайка',
				src: imP3 + 'mater_small_lvl5_reward.gif',
				recipes: null,
				descr: 'Может выпасть из: Канализационного Паука, Страшной Крысы <Br />можно найти в Месторождении Мусора.<Br />2го этажа <strong>Канализации</strong>.'
		},
	 mater_small_lvl6_reward:{
				name: 'Гайка с резьбой',
				src: imP3 + 'mater_small_lvl6_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Летучей Бестии, Кровавый Сантехник; <Br />можно найти в Бронзовом Сундучке.<Br />2го этажа <strong>Канализации</strong>.'
		},
	 mater_med_lvl4_reward:{
				name: 'Болт',
				src: imP3 + 'mater_med_lvl4_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Обитателя Подвалов; <Br />можно найти в Заброшенном Сундуке.<Br />1го этажа <strong>Канализации</strong>.'
		},
	 mater_med_lvl5_reward:{
				name: 'Длинный болт',
				src: imP3 + 'mater_med_lvl5_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Безголового Сантехника; <Br />можно найти в Останках Сантехника.<Br />2го этажа <strong>Канализации</strong>.'
		},
	 mater_med_lvl6_reward:{
				name: 'Нужный болт',
				src: imP3 + 'mater_med_lvl6_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Хозяин Канализации, Слесаря - зомби, Местных Жителей; <Br />можно найти в Серебряном Сундучке.<Br />2го этажа <strong>Канализации</strong>'
		},
	 mater_big_lvl4_reward:{
				name: 'Вентиль',
				src: imP3 + 'mater_big_lvl4_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Тунельного Гада и Жуткой Мерзости; <Br />можно найти в Старом Сундуке.<Br />1го этажа <strong>Канализации</strong>.'
		},
	 mater_big_lvl5_reward:{
				name: 'Чистый вентиль',
				src: imP3 + 'mater_big_lvl5_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Старожила; <Br />можно найти в Кованом Сундуке.<Br />2го этажа <strong>Канализации</strong>.'
		},
	 mater_big_lvl6_reward:{
				name: 'Рабочий вентиль',
				src: imP3 + 'mater_big_lvl6_reward.gif',
				recipes: null,
				descr: 'Может выпасть из Главного Прораба; <Br />можно найти в Золотом Сундучке.<Br />2го этажа <strong>Канализации</strong>.'
		},
	 mater247:{
				name: 'Ключииик',
				src: imP3 + 'mater247.gif',
				recipes: null,
				descr: 'Выпадает из <strong>Мартына Водопроводчика</strong> в <strong>Канализации</strong>.<Br /> нужен для завершения задания, или с помощью него можно отгрутить Вентиль от трубопровода за Лукой.'
		},
	 mater_coin_lvl4_reward:{
				name: 'Жетон',
				src: imP3 + 'mater_coin_lvl4_reward.gif',
				recipes: null,
				descr: '<strong>Обмен жетонов для 5-6го уровня:</strong> <Br />1 Жетон за 3 Гайки или 1 Болт, или 3 Жетона за 1 Вентиль<Br /><strong>для 7 уровня:</strong><Br />1 Жетон за  9 Гаек или 3 Болта, или за 1 Вентиль <Br /><strong>для 8го и старше уровня:</strong><Br />1 Жетон за  15 Гаек или 5 Болтов, или 3 Жетона за 5 Вентилей <Br />Нужны для покупки вещей в магазине <strong>Канализации</strong>.'
		},
	 mater_coin_lvl5_reward:{
				name: 'Серебряный жетон',
				src: imP3 + 'mater_coin_lvl5_reward.gif',
				recipes: null,
				descr: '<strong>Обмен жетонов для 5-6го уровня:</strong> <Br />1 Серебряный Жетон за 3 Чистые Гайки  или 1 Длинный Болт, <Br />или 3 Серебряный Жетона за 1 Чистый Вентиль<Br /><strong>для 7 уровня:</strong><Br />1 Серебряный Жетон за  9 Чистых Гаек или 3 Длинных Болта, или за 1 Чистый Вентиль <Br /><strong>для 8го и старше уровня:</strong><Br />1 Серебряный Жетон за 15 Чистых Гайек  или 5 Длинных Болтов, <Br />или 3 Серебряных Жетона за 5 Чистых Вентилей<Br />Нужны для покупки вещей в магазине <strong>Канализации</strong>.'
		},
	 mater_coin_lvl6_reward:{
				name: 'Золотой жетон',
				src: imP3 + 'mater_coin_lvl6_reward.gif',
				recipes: null,
				descr: '<strong>Обмен жетонов для 5-6го уровня:</strong> <Br />1 Золотой Жетон за 3 Гайки с резьбой  или 1 Болт Нужный, <Br />или 3 Золотых Жетона за 1 Вентиль Рабочий<Br /><strong>для 7 уровня:</strong><Br />1 Золотой Жетон за  9 Гаек с резьбой или 3 Нужных Болта, или за 1 Рабочий Вентиль <Br /><strong>для 8го и старше уровня:</strong><Br />1 Золотой Жетон за 15 Гаек с Резьбой  или  5 Болтов  Нужных, <Br />или  3 Золотых Жетона за 5 Вентилей Рабочих<Br />или  3 Золотых Жетона за Вантуз<Br />или  3 Золотых Жетона за 33 Засора<Br />Нужны для покупки вещей в магазине <strong>Канализации</strong>.'
		} 
 };
 var gg ={
	 gg_reward1:{
				name: 'Вечный Гриб',
				src: imP3 + 'gg_reward1.gif',
				recipes: null,
				descr: '<br />Цена: 0,1 кр.<br />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 3/7<br />Вероятность срабатывания: 70%<br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br />• Выносливость: 15<br />Встроено заклятие <img src="'+imP3+'cureHP600.gif" alt="Великое восстановление энергии"/> 2 шт. в сутки <br /><strong>Описание:</strong><br />Он долго служил Мудрому Гусеницу<br />Награда за выполнение рыцарского задания в Грибнице.'
		},
	 staff55:{
				name: 'Посох Темных Обрядов',
				src: imP3 + 'staff55.gif',
				recipes: {'gg_token': 17},
				descr: '<br />Цена: 336 кр.<br />Масса: 5 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 50<br />• Уровень: 8<br />• Мастерство владения магическими посохами: 3<br />• Мудрость: 30<br /><strong>Действует на:</strong><br />• Мф. мощности магии Тьмы: +20<br />• Интеллект: +5<br />• Мастерство владения магией Тьмы: +2<br />• Защита от урона: +50<br />• Уровень жизни (HP): +100<br />• Уровень маны: +100<br /><strong>Свойства предмета:</strong><br />• Урон: 1 - 20<br />• Двуручное оружие<br /><strong>Особенности:</strong><br />• Атаки Тьмой: Всегда'
		},
	 staff54:{
				name: 'Посох Ослепительного Сияния',
				src: imP3 + 'staff54.gif',
				recipes: {'gg_token': 17},
				descr: '<br />Масса: 5 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 50<br />• Уровень: 8<br />• Мастерство владения магическими посохами: 3<br />• Мудрость: 30<br /><strong>Действует на:</strong><br />• Интеллект: +5<br />• Мастерство владения магией Света: +2<br />• Защита от урона: +50<br />• Уровень маны: +100<br />• Уменьшение расхода маны (%): +10<br /><strong>Свойства предмета:</strong><br />• Урон: 1 - 20<br />• Двуручное оружие<br /><strong>Особенности:</strong><br />• Атаки Светом: Всегда<br /><strong>Описание:</strong><br />Слишком совершенный, чтобы колотить им врагов...'
		},
	 hammer75:{
				name: 'Молоток Лунного Мерцания',
				src: imP3 + 'hammer75.gif',
				recipes: {'gg_token': 12},
				descr: '<br />Цена: 220 кр.<br />Масса: 35 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br />• Мастерство владения дубинами, булавами: 5<br />• Выносливость: 50<br />• Сила: 40<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +50<br />• Мф. против увертывания (%): +70<br /><strong>Свойства предмета:</strong><br />• Урон: 20 - 32<br /><strong>Особенности:</strong><br />• Колющие атаки: Ничтожно редки<br />• Дробящие атаки: Часты'
		},
	 belt47:{
				name: 'Пояс Коварства',
				src: imP3 + 'belt47.gif',
				recipes: {'gg_token': 10},
				descr: '<br />Цена: 113 кр.<br />Масса: 4 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 45<br />• Уровень: 8<br />• Выносливость: 15<br />• Сила: 10<br /><strong>Действует на:</strong><br />• Мф. увертывания (%): +50<br />• Мф. контрудара (%): +5<br />• Ловкость: +4<br />• Защита от магии: +20<br />• Броня пояса: 11-40 (10+d30)'
		},
	 naruchi90:{
				name: 'Перчатки Вечной Резни',
				src: imP3 + 'naruchi90.gif',
				recipes: {'gg_token': 10},
				descr: '<br />Цена: 144 кр.<br />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 10<br />• Интуиция: 50<br />• Уровень: 8<br />• Выносливость: 25<br />• Сила: 25<br /><strong>Действует на:</strong><br />• Мф. мощности крит. удара (%): +10<br />• Мф. критического удара (%): +25<br />• Интуиция: +3<br />• Мастерство владения оружием: +3<br /><strong>Описание:</strong><br />Всегда в запекшейся крови.'
		},
	 ring136:{
				name: 'Черное Кольцо Перемен',
				src: imP3 + 'ring136.gif',
				recipes: {'gg_token': 10},
				descr: '<br />Цена: 120 кр.<br />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br />• Выносливость: 15<br />• Сила: 10<br /><strong>Действует на:</strong><br />• Количество увеличений: 7<br />• Защита от магии: +30<br />• Уровень жизни (HP): +50'
		},
	 roba12_1:{
				name: 'Грибная Рубаха Силы',
				src: imP3 + 'roba12_1.gif',
				recipes: {'gg_token': 3},
				descr: '<br />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 29 кр.<br />Долговечность: 0/30<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br />• Выносливость: 25<br />• Сила: 10<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +15<br />• Сила: +2<br />• Броня корпуса: 5-5'
		},
	 roba12_2:{
				name: 'Грибная Рубаха Ловкости',
				src: imP3 + 'roba12_2.gif',
				recipes: {'gg_token': 3},
				descr: '<br />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 27 кр.<br />Долговечность: 0/30<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br />• Выносливость: 25<br />• Сила: 10<br /><strong>Действует на:</strong><br />• Мф. увертывания (%): +15<br />• Ловкость: +2<br />• Броня корпуса: 5-5'
		},
	 roba12_3:{
				name: 'Грибная Рубаха Интуиции',
				src: imP3 + 'roba12_3.gif',
				recipes: {'gg_token': 3},
				descr: '<br />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 29 кр.<br />Долговечность: 0/30<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br />• Выносливость: 25<br />• Сила: 10<br /><strong>Действует на:</strong><br />• Мф. критического удара (%): +15<br />• Интуиция: +2<br />• Броня корпуса: 5-5'
		},
	 roba12_4:{
				name: 'Грибная Рубаха Интеллекта',
				src: imP3 + 'roba12_4.gif',
				recipes: {'gg_token': 3},
				descr: '<br />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 29 кр.<br />Долговечность: 0/30<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br />• Выносливость: 25<br />• Сила: 10<br /><strong>Действует на:</strong><br />• Интеллект: +2<br />• Уровень маны: +15<br />• Броня корпуса: 5-5'
		},
  gg_mag_ring:{
				name: 'Кольцо мха',
				src: imP3 + 'gg_mag_ring.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 144 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9<br />• Выносливость: 25<br /><strong>Действует на:</strong><br />• Мф. мощности магии стихий: +5<br />• Защита от урона: +20<br />• Уровень маны: +100<br /><strong>Описание:</strong><br />Добывается с помощью рыбалки в диалоге с "Хищнецом".'
		},
  gg_mag_ring_2:{
				name: 'Паническое кольцо мха',
				src: imP3 + 'gg_mag_ring.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 144 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9<br />• Выносливость: 25<br /><strong>Действует на:</strong><br />• Мф. мощности магии стихий: +5<br />• Защита от урона: +30<br />• Уровень маны: +120<br />Наложено заклятье: <b>Паника</B> (выкрикивает в бою забавную фразу, когда хозяину наносится урон)<br /><strong>Описание:</strong><br />Для получения апнутого кольца необходимо выбить из "Тот кто живет в яме" "Магическую коробку" и поговорить с "Хищнецом".'
		},
	 gg_war_ring:{
				name: 'Кольцо корней',
				src: imP3 + 'gg_war_ring.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 144 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9<br />• Выносливость: 25<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +30<br />• Мф. критического удара (%): +20<br />• Защита от магии: +20<br />• Уровень жизни (HP): +100<br /><strong>Описание:</strong><br />Добывается с помощью рыбалки в диалоге с "Хищнецом".'
		},
	 gg_war_ring_2:{
				name: 'Паническое кольцо корней',
				src: imP3 + 'gg_war_ring.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 144 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9<br />• Выносливость: 25<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +30<br />• Мф. критического удара (%): +20<br />• Защита от магии: +30<br />• Уровень жизни (HP): +120<br />Наложено заклятье: <b>Паника</B> (выкрикивает в бою забавную фразу, когда хозяину наносится урон)<br /><strong>Описание:</strong><br />Для получения апнутого кольца необходимо выбить из "Тот кто живет в яме" "Магическую коробку" и поговорить с "Хищнецом".'
		},
	 gg_neut_ring:{
				name: 'Кольцо травы',
				src: imP3 + 'gg_neut_ring.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 144 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9<br />• Выносливость: 25<br /><strong>Действует на:</strong><br />• Защита от магии: +10<br />• Защита от урона: +10<br />• Уровень жизни (HP): +150<br /><strong>Описание:</strong><br />Добывается с помощью рыбалки в диалоге с "Хищнецом".'
		},
	 gg_neut_ring2:{
				name: 'Паническое кольцо травы',
				src: imP3 + 'gg_neut_ring.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 144 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 9<br />• Выносливость: 25<br /><strong>Действует на:</strong><br />• Защита от магии: +15<br />• Защита от урона: +15<br />• Уровень жизни (HP): +170<br />Наложено заклятье: <B>Паника</B> (выкрикивает в бою забавную фразу, когда хозяину наносится урон)<br /><strong>Описание:</strong><br />Для получения апнутого кольца необходимо выбить из "Тот кто живет в яме" "Магическую коробку" и поговорить с "Хищнецом".'
		},
	 gg3_magic_box:{
				name: 'Магическая коробка',
				src: imP3 + 'gg3_magic_box.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Вокруг этой коробки ощущается присутствие довольно сильной магии. Но открыть вы её не можете, как не старались.<br />При наличии этой коробки и кольца, "Хищнец" апнет вам кольцо.'
		},
	 gg3_suv_grib1:{
				name: 'Светящийся гриб',
				src: imP3 + 'gg3_suv_grib1.gif', recipes: {'gg3_hishn_kolch': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Гриб синего цвета, при его свете можно даже читать. Ухаживать осторожно, поливать как придется.<br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн. '
		},
	 gg3_suv_grib2:{
				name: 'Светящийся гриб',
				src: imP3 + 'gg3_suv_grib2.gif', recipes: {'gg3_hishn_kolch': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Гриб синего цвета, при его свете можно даже читать. Ухаживать осторожно, поливать как придется.<br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн. '
		},
	 gg3_suv_grib3:{
				name: 'Светящийся гриб',
				src: imP3 + 'gg3_suv_grib3.gif', recipes: {'gg3_hishn_kolch': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Гриб синего цвета, при его свете можно даже читать. Ухаживать осторожно, поливать как придется.<br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн. '
		},
	 gg3_suv_insect_f:{
				name: 'Насекомое в смоле',
				src: imP3 + 'gg3_suv_insect_f.gif', recipes: {'gg3_hishn_dosp': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Цветная смола, в которой, когда-то, давным-давно, застряло насекомое.<br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн.<br /><strong>Требуется:<img src="'+imP3+'gg3_hishn_dosp.gif" alt="Обломок доспеха"/> х2</strong>'
		},
	 gg3_suv_insect_m:{
				name: 'Насекомое в смоле',
				src: imP3 + 'gg3_suv_insect_m.gif',  recipes: {'gg3_hishn_sword': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br /><br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн. '
		},
	 gg3_suv_civiar:{
				name: 'Шар с непонятным содержимым',
				src: imP3 + 'gg3_suv_civiar.gif', recipes: {'gg3_hishn_finger': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Упругий прозрачный шар, внутри которого что-то переливается всеми цветами радуги.<br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн. '
		},
	 gg3_suv_orchid:{
				name: 'Невянущий цветок',
				src: imP3 + 'gg3_suv_orchid.gif', recipes: {'gg3_hishn_kolch': 2,'gg3_hishn_dosp': 2},
				descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br /><br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн. '
		},
  gg3_suv_horn1:{
   	name: 'жвалы',
   	src: imP3 + 'gg3_suv_horn1.gif', recipes: {'gg3_hishn_sword': 2,'gg3_hishn_finger': 2},
    descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br /><br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн.'
  },
  gg3_suv_horn2:{
   	name: 'жвалы',
   	src: imP3 + 'gg3_suv_horn2.gif', recipes: {'gg3_hishn_sword': 2,'gg3_hishn_finger': 2},
    descr: 'Масса: 0.1 <br />Долговечность: 0/1<br /><strong>Описание:</strong><br /><br /> - просто сувенир, можно дарить через гос.маг. долговечность подарка 180 дн.'
  },
  gg3_hishn_bone:{
				name: 'Кость',
				src: imP3 + 'gg3_hishn_bone.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />При всем вашем знании анатомии вас успокаивает мысль, что это кость не человеческая.<br />Выужена с Воронки, зачем нужна - хз ))'
		},  

  gg3_mak_grib:{
				name: 'Кусочек гриба',
				src: imP3 + 'gg3_mak_grib.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Кусочек гриба, крепкий как деревяшка.<br />  - квестовый предмет, описание квестов <A href="http://www.darkclan.ru/cgi/lib.pl?p=mushrooms" TARGET="_blank"><U>читаем тут</U></A>.'
		}, 
	 gg3_mak_bottle:{
				name: 'Бутылка с плохопахнущей жидкостью',
				src: imP3 + 'gg3_mak_bottle.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br />Срок годности: 0.006 дн.(10 минут)<br /><strong>Описание:</strong><br />Бутылка с жидкостью, которую вы набрали в колодце.<br /> - квестовый предмет, описание квестов <A href="http://www.darkclan.ru/cgi/lib.pl?p=mushrooms" TARGET="_blank"><U>читаем тут</U></A>'
		},
	 gg3_mak_shtuk:{
				name: 'Непонятная штуковина',
				src: imP3 + 'gg3_mak_shtuk.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /> - квестовый предмет, описание квестов <A href="http://www.darkclan.ru/cgi/lib.pl?p=mushrooms" TARGET="_blank"><U>читаем тут</U></A>'
		},
	 invoke_gg3_mak_ferom:{
				name: 'Клейкое вещество',
				src: imP3 + 'invoke_gg3_mak_ferom.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br />Наложено заклятье: Запах насекомого<br /> - квестовый предмет, описание квестов <A href="http://www.darkclan.ru/cgi/lib.pl?p=mushrooms" TARGET="_blank"><U>читаем тут</U></A>'
		},
	 gg3_shiz_crystal:{
				name: 'Черный кристалл',
				src: imP3 + 'gg3_shiz_crystal.gif',
				descr: 'Масса: 0.1 <img src="'+d4+'" alt="'+d5+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Ранее принадлежал глубинному гусеницу.<br />На выходе исчезает, с ним можно пройти мимо рогоносца.<br /> - квестовый предмет, описание квестов <A href="http://www.darkclan.ru/cgi/lib.pl?p=mushrooms" TARGET="_blank"><U>читаем тут</U></A>'
		},
	 belt44_2:{
				name: 'Пояс Скорпиона (мф)',
				src: imP3 + 'belt44.gif',
				descr: 'Масса: 1 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 140 кр.<br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 15<br />• Интуиция: 45<br />• Уровень: 9<br />• Выносливость: 45<br />• Сила: 35<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +55<br />• <b>Защита от магии: +25</b><br />• Защита от урона: +25<br />• Уровень жизни (HP): +30<br />• Броня пояса: 19-63 (18+d45)<br />• Часть комплекта: Комплект Скорпиона [0/12]<br /><i>Сделано в Suncity</i><br /><font color=#990000>Предмет не подлежит ремонту</font>'
		},
	 leg15_2:{
				name: 'Штаны Решимости (мф)',
				src: imP3 + 'leg15.gif',
				descr: 'Масса: 5 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 150 кр.<br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 40<br />• Уровень: 9<br />• Мудрость: 50<br /><strong>Действует на:</strong><br />• Подавление защиты от магии: +2<br />• Мф. мощности магии стихий: +3<br />• <b>Уровень жизни (HP): +30</b><br />• <b>Уровень маны: +100</b><br />• Броня пояса: 5-16 (4+d12)<br />• Броня ног: 5-16 (4+d12)<br /><strong>Свойства предмета:</strong><br />• Защита от урона: 10<br /><i>Сделано в Suncity</i><br /><font color=#990000>Предмет не подлежит ремонту</font>'
		},
	 armor108_2:{
				name: 'Броня Злодеяний (мф)',
				src: imP3 + 'armor108.gif',
				descr: 'Масса: 40 <img style="'+d6+'" src="'+d2+'" alt="'+d7+'"/><br />Цена: 380 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 50<br />• Интуиция: 40<br />• Уровень: 9<br />• Выносливость: 30<br />• Сила: 25<br /><strong>Действует на:</strong><br />• Сила: +2<br />• Интуиция: +3<br />• <b>Ловкость: +11</b><br />• Мф. критического удара (%): +50<br />• Мф. против критического удара (%): +55<br />• Мф. увертывания (%): +60<br />• Уровень жизни (HP): +54<br />• Защита от магии: +65<br />• Броня корпуса: 12-44 (11+d33)<br /><strong>Свойства предмета:</strong><br />• Защита от урона: 75<br />• Часть комплекта: Комплект Злодеяний [12]<br /><i>Сделано в Suncity</i><br /><font color=#990000>Предмет не подлежит ремонту</font>'
		}


};
var tn ={
  armor113:{
				name: 'Броня Неприступного Утеса',
				src: imP3 + 'armor113.gif',
				recipes: {'sp_mat42': 1,'mater301': 1,'mater299': 10,'mater300': 12,'mater293': 8,'mater296': 20,'mater295': 10,'mater297': 10},
				descr: '<BR />Масса: 60 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 537 кр.<BR />Долговечность: 0/100<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 10<BR />• Интуиция: 10<BR />• Уровень: 10<BR />• Выносливость: 70<BR />• Сила: 50<BR /><strong>Действует на:</strong><BR />• Мф. против критического удара (%): +150<BR />• Мф. против увертывания (%): +100<BR />• Мастерство владения оружием: +1<BR />• Защита от магии: +50<BR />• Защита от урона: +100<BR />• Уровень жизни (HP): +200<BR />• Броня корпуса: 34-99 (33+d66)<BR />• Часть комплекта: Комплект Неприступного Утеса [3] <BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. против увертывания (%): +40<BR />• Уровень жизни (HP): +100'
		},
  belt52:{
				name: 'Пояс Неприступного Утеса',
				src: imP3 + 'belt52.gif',
				recipes: {'sp_mat45': 1,'mater294': 4,'mater299': 3,'mater300': 4,'mater296': 5,'mater298': 10},
				descr: '<BR />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 200 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 10<BR />• Интуиция: 10<BR />• Уровень: 10<BR />• Выносливость: 70<BR />• Сила: 50<BR /><strong>Действует на:</strong><BR />• Мф. против критического удара (%): +20<BR />• Мф. против увертывания (%): +20<BR />• Защита от урона: +25<BR />• Уровень жизни (HP): +100<BR />• Сила: +5<BR />• Броня пояса: 21-80 (20+d60)<BR />• Часть комплекта: Комплект Неприступного Утеса [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. против увертывания (%): +40<BR />• Уровень жизни (HP): +100'
		},
  shield88:{
				name: 'Щит Неприступного Утеса',
				src: imP3 + 'shield88.gif',
				recipes: {'sp_mat46': 1,'mater294': 7,'mater300': 7,'mater296': 11,'mater295': 6,'mater298': 6},
				descr: '<BR />Масса: 20 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 265 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 10<BR />• Интуиция: 10<BR />• Уровень: 10<BR />• Выносливость: 70<BR />• Сила: 50<BR /><strong>Действует на:</strong><BR />• Мф. против критического удара (%): +70<BR />• Защита от урона: +25<BR />• Уровень жизни (HP): +50<BR />• Броня головы: 13-48 (12+d36)<BR />• Броня корпуса: 13-48 (12+d36)<BR />• Броня пояса: 13-48 (12+d36)<BR />• Броня ног: 13-48 (12+d36)<BR /><strong>Свойства предмета:</strong><BR />• Мф. блока щитом (%): 25<BR />• Часть комплекта: Комплект Неприступного Утеса [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. против увертывания (%): +40<BR />• Уровень жизни (HP): +100'
		},
  braslet43:{
				name: 'Браслеты Неуловимой Мощи',
				src: imP3 + 'braslet43.gif',
				recipes: {'sp_mat44': 1,'mater296': 9,'mater294': 7,'mater293': 3,'mater295': 8},
				descr: '<BR />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 200 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Интеллект: 60<BR />• Уровень: 10<BR />• Мудрость: 60<BR /><strong>Действует на:</strong><BR />• Подавление защиты от магии: +2<BR />• Мф. мощности магии стихий: +7<BR />• Интеллект: +5<BR />• Уровень жизни (HP): +70<BR />• Уровень маны: +70<BR />• Часть комплекта: Комплект Неуловимой Мощи [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. мощности магии стихий: +5<BR />• Уровень жизни (HP): +50'
		},
  naruchi92:{
				name: 'Перчатки Неуловимой Мощи',
				src: imP3 + 'naruchi92.gif',
				recipes: {'sp_mat41': 1,'mater301': 1,'mater300': 4,'mater294': 6,'mater295': 13,'mater298': 8},
				descr: '<BR />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 226 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Интеллект: 60<BR />• Уровень: 10<BR />• Мудрость: 60<BR /><strong>Действует на:</strong><BR />• Подавление защиты от магии: +3<BR />• Мф. мощности магии стихий: +12<BR />• Интеллект: +6<BR />• Мастерство владения магическими посохами: +2<BR />• Уровень жизни (HP): +30<BR />• Уровень маны: +30<BR />• Часть комплекта: Комплект Неуловимой Мощи [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. мощности магии стихий: +5<BR />• Уровень жизни (HP): +50'
		},
  boots33:{
				name: 'Сандалии Неуловимой Мощи',
				src: imP3 + 'boots33.gif',
				recipes: {'sp_mat40': 1,'mater300': 7,'mater299': 3,'mater295': 5,'mater298': 15},
				descr: '<BR />Масса: 5 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 211 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Интеллект: 60<BR />• Уровень: 10<BR />• Мудрость: 60<BR /><strong>Действует на:</strong><BR />• Мф. мощности магии стихий: +10<BR />• Интеллект: +6<BR />• Защита от урона: +25<BR />• Уровень жизни (HP): +50<BR />• Уровень маны: +55<BR />• Броня ног: 6-20 (5+d15)<BR />• Часть комплекта: Комплект Неуловимой Мощи [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. мощности магии стихий: +5<BR />• Уровень жизни (HP): +50'
		},
  amulet111:{
				name: 'Амулет Быстрой Расправы',
				src: imP3 + 'amulet111.gif',
				recipes: {'sp_mat48': 1,'mater294': 3,'mater299': 7,'mater293': 4,'mater296': 12,'mater298': 12,'mater292': 11},
				descr: '<BR />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 335 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 10<BR />• Интуиция: 60<BR />• Уровень: 10<BR />• Выносливость: 40<BR />• Сила: 40<BR /><strong>Действует на:</strong><BR />• Мф. мощности крит. удара (%): +20<BR />• Мф. против увертывания (%): +50<BR />• Мф. критического удара (%): +100<BR />• Интуиция: +7<BR />• Мастерство владения оружием: +1<BR />• Защита от магии: +20<BR />• Защита от урона: +50<BR />• Уровень жизни (HP): +50<BR />• Часть комплекта: Комплект Быстрой Расправы [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. критического удара (%): +50<BR />• Мф. мощности крит. удара (%): +10'
		},
  naruchi91:{
				name: 'Перчатки Быстрой Расправы',
				src: imP3 + 'naruchi91.gif',
				recipes: {'sp_mat41': 1,'mater294': 2,'mater300': 5,'mater295': 6,'mater296': 6,'mater298': 8},
				descr: '<BR />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 182 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 10<BR />• Интуиция: 60<BR />• Уровень: 10<BR />• Выносливость: 40<BR />• Сила: 40<BR /><strong>Действует на:</strong><BR />• Мф. мощности крит. удара (%): +10<BR />• Мф. против увертывания (%): +30<BR />• Мф. критического удара (%): +40<BR />• Интуиция: +5<BR />• Мастерство владения оружием: +3<BR />• Часть комплекта: Комплект Быстрой Расправы [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. критического удара (%): +50<BR />• Мф. мощности крит. удара (%): +10'
		},
  boots32:{
				name: 'Сапоги Быстрой Расправы',
				src: imP3 + 'boots32.gif',
				recipes: {'sp_mat40': 1,'mater301': 1,'mater299': 4,'mater300': 5,'mater295': 14,'mater296': 8},
				descr: '<BR />Масса: 10 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 211 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 10<BR />• Интуиция: 60<BR />• Уровень: 10<BR />• Выносливость: 40<BR />• Сила: 40<BR /><strong>Действует на:</strong><BR />• Мф. против увертывания (%): +50<BR />• Мф. критического удара (%): +80<BR />• Интуиция: +6<BR />• Защита от магии: +35<BR />• Уровень жизни (HP): +35<BR />• Броня ног: 11-40 (10+d30)<BR />• Часть комплекта: Комплект Быстрой Расправы [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. критического удара (%): +50<BR />• Мф. мощности крит. удара (%): +10'
		},
  helmet92:{
				name: 'Шлем Неотвратимого Возмездия',
				src: imP3 + 'helmet92.gif',
				recipes: {'sp_mat43': 1,'mater301': 1,'mater294': 6,'mater299': 4,'mater300': 7,'mater296': 13,'mater298': 8},
				descr: '<BR />Масса: 15 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 295 кр.<BR />Долговечность: 0/60<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 60<BR />• Интуиция: 10<BR />• Уровень: 10<BR />• Выносливость: 40<BR />• Сила: 40<BR /><strong>Действует на:</strong><BR />• Мф. парирования (%): +5<BR />• Мф. увертывания (%): +150<BR />• Мф. мощности урона: +6<BR />• Ловкость: +6<BR />• Мастерство владения оружием: +2<BR />• Защита от магии: +25<BR />• Защита от урона: +25<BR />• Броня головы: 11-40 (10+d30)<BR />• Часть комплекта: Комплект Неотвратимого Возмездия [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. мощности урона: +5<BR />• Мф. увертывания (%): +50'
		},
  naruchi41:{
				name: 'Наручи Неотвратимого Возмездия',
				src: imP3 + 'naruchi41.gif',
				recipes: {'sp_mat44': 1,'mater300': 5,'mater299': 3,'mater296': 6,'mater298': 7,'mater295': 8},
				descr: '<BR />Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 199 кр.<BR />Долговечность: 0/50<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 60<BR />• Интуиция: 10<BR />• Уровень: 10<BR />• Выносливость: 40<BR />• Сила: 40<BR /><strong>Действует на:</strong><BR />• Мф. против увертывания (%): +60<BR />• Мф. увертывания (%): +110<BR />• Мф. контрудара (%): +5<BR />• Мф. мощности урона: +10<BR />• Ловкость: +3<BR />• Мастерство владения оружием: +1<BR />• Часть комплекта: Комплект Неотвратимого Возмездия [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. мощности урона: +5<BR />• Мф. увертывания (%): +50'
		},
  clip100:{
				name: 'Серьги Неотвратимого Возмездия',
				src: imP3 + 'clip100.gif',
				recipes: {'sp_mat47': 1,'mater294': 5,'mater299': 5,'mater293': 5,'mater296': 6,'mater292': 8,'mater297': 9},
				descr: '<BR />Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Цена: 281 кр.<BR />Долговечность: 0/60<BR /><strong>Требуется минимальное:</strong><BR />• Ловкость: 60<BR />• Интуиция: 10<BR />• Уровень: 10<BR />• Выносливость: 40<BR />• Сила: 40<BR /><strong>Действует на:</strong><BR />• Мф. против увертывания (%): +80<BR />• Мф. парирования (%): +5<BR />• Мф. увертывания (%): +130<BR />• Мф. контрудара (%): +15<BR />• Мф. мощности урона: +5<BR />• Ловкость: +4<BR />• Защита от магии: +35<BR />• Часть комплекта: Комплект Неотвратимого Возмездия [3]<BR /><strong>Бонус комплекта:</strong><BR /><font color=green>• 3:</font> • Мф. мощности урона: +5<BR />• Мф. увертывания (%): +50'
		}
};
var stb ={
		token23soldier:{
				name: 'Жетон «Рядовой армии Общего Врага»',
				src: imP3 + 'token23soldier.gif',
				descr: '<BR />Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Долговечность: 0/1<BR />Сделано в Логово Общего Врага<BR />Обмениваются у "Сержанта".',
    recipes: null
		},
		token23command:{
				name: 'Жетон «Командир армии Общего Врага»',
				src: imP3 + 'token23command.gif',
				descr: '<BR />Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR />Долговечность: 0/1<BR />Сделано в Логово Общего Врага<BR />Обмениваются у "Сержанта".',
    recipes: null
		},
		food_23f:{
				name: 'Сухой Паек',
				src: imP3 + 'food_23f.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 1 кр. <br />Долговечность: 0/1 <br />Срок годности: 3 дн. <br />Продолжительность<br />действия магии: 6 ч. 0 мин. <br /><strong>Действует на:</strong><br />• Восстановление HP (%): +25 <br />• Восстановление маны (%): +25<br />Можно обменять у "Сержанта" в "Сторожевой Башне" за 1 жетон командира и 10 жетонов рядовых.',
    recipes: null
		},
		ring23f:{
				name: 'Героическое кольцо',
				src: imP3 + 'ring23f.gif',
				descr: 'Масса: 1 <img src="'+d4+'" alt="'+d5+'"/><br />Цена: 62 кр. <br />Долговечность: 0/50 <br /><strong>Требуется минимальное:</strong><br />• Уровень: 4 <br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +100 <br />Максимум: 1 ед. <br />Сделано в Abandoned Plain<br />Можно обменять у "Сержанта" в "Сторожевой Башне" за 3 жетона командиров и 20 жетонов рядовых. ',
    recipes: null
		},
		cloak23f1:{
				name: 'Героический плащ',
				src: imP3 + 'cloak23f1.gif',
				descr: 'Масса: 1 <img src="'+d4+'" alt="'+d5+'"/><br />Цена: 100 кр. <br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +6<br />Максимум: 1 ед.<br />Сделано в Abandoned Plain<br />Можно обменять у "Сержанта" в "Сторожевой Башне" за 5 жетонов командиров и 30 жетонов рядовых. ',
    recipes: null
		},
	 cloak23f2:{
				name: 'Очень героический плащ',
				src: imP3 + 'cloak23f2.gif',
				descr: 'Масса: 1 <img src="'+d4+'" alt="'+d5+'"/><br />Цена: 300 кр.<br />Долговечность: 0/100<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Ловкость: +1<br />• Интуиция: +1<br />• Интеллект: +1<br />• Уровень жизни (HP): +6<br />• Сила: +1<br />Максимум: 1 ед. <br />Сделано в Abandoned Plain<br />Можно обменять у "Сержанта" в "Сторожевой Башне" за 10 жетонов командиров и 45 жетонов рядовых. ',
    recipes: null
		}
};
var izl ={
  braslet33:{
				name: 'Наручи Адаптации [9]',
				src: imP3 + 'braslet33.gif',
				recipes: null,
				descr: 'Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x5 </strong> <BR>Долговечность: 0/40 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 9<BR><strong>Действует на:</strong><BR>• Количество увеличений: 11<BR>• Уровень жизни (HP): +125'
		},
  braslet33_1:{
				name: 'Наручи Адаптации [10]',
				src: imP3 + 'braslet33_1.gif',
				recipes: null,
				descr: 'Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x10 </strong> <BR>Долговечность: 0/40 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 10 <BR><strong>Действует на:</strong><BR>• Количество увеличений: 13<BR>• Уровень жизни (HP): +150'
		}, 
  amulet107_1:{
				name: 'ПАЗ: Прочность [8]',
				src: imP3 + 'amulet107_1.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x4 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 8<BR><strong>Действует на:</strong><BR>• Защита от урона: +175<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet106_1:{
				name: 'ПАЗ: Бронепласт [8]',
				src: imP3 + 'amulet106_1.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x4 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 8<BR><strong>Действует на:</strong><BR>• Броня головы: 28-82 (27+d55)<BR>• Броня корпуса: 28-82 (27+d55)<BR>• Броня пояса: 28-82 (27+d55)<BR>• Броня ног: 28-82 (27+d55)<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet105_1:{
				name: 'ПАЗ: Антимагия [8]',
				src: imP3 + 'amulet105_1.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x4 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 8<BR><strong>Действует на:</strong><BR>• Защита от магии: +175<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet104_1:{
				name: 'ПАЗ: Структура [8]',
				src: imP3 + 'amulet104_1.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x4 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 8<BR><strong>Действует на:</strong><BR>• Мф. против критического удара (%): +350<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet107_2:{
				name: 'ПАЗ: Прочность [9]',
				src: imP3 + 'amulet107_2.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x5 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 9<BR><strong>Действует на:</strong><BR>• Защита от урона: +215<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
   amulet106_2:{
				name: 'ПАЗ: Бронепласт [9]',
				src: imP3 + 'amulet106_2.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x5 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 9<BR><strong>Действует на:</strong><BR>• Броня головы: 36-105 (35+d70)<BR>• Броня корпуса: 36-105 (35+d70)<BR>• Броня пояса: 36-105 (35+d70)<BR>• Броня ног: 36-105 (35+d70)<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet105_2:{
				name: 'ПАЗ: Антимагия [9]',
				src: imP3 + 'amulet105_2.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x5 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 9<BR><strong>Действует на:</strong><BR>• Защита от магии: +215<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet104_2:{
				name: 'ПАЗ: Структура [9]',
				src: imP3 + 'amulet104_2.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x5 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 9<BR><strong>Действует на:</strong><BR>• Мф. против критического удара (%): +430<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet107_3:{
				name: 'ПАЗ: Прочность [10]',
				src: imP3 + 'amulet107_3.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x10 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 10 <BR><strong>Действует на:</strong><BR>• Защита от урона: +260<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet106_3:{
				name: 'ПАЗ: Бронепласт [10]',
				src: imP3 + 'amulet106_3.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x10 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 10 <BR><strong>Действует на:</strong><BR>• Броня головы: 43-127 (42+d85)<BR>• Броня корпуса: 43-127 (42+d85)<BR>• Броня пояса: 43-127 (42+d85)<BR>• Броня ног: 43-127 (42+d85)<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet105_3:{
				name: 'ПАЗ: Антимагия [10]',
				src: imP3 + 'amulet105_3.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x10 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 10 <BR><strong>Действует на:</strong><BR>• Защита от магии: +260<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		},
  amulet104_3:{
				name: 'ПАЗ: Структура [10]',
				src: imP3 + 'amulet104_3.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/> <BR>Цена: 1 кр. <BR>Требуется предмет: <strong> [Идеальные Образцы]x10 </strong> <BR>Долговечность: 0/50 <BR><strong>Требуется минимальное:</strong><BR>• Уровень: 10 <BR><strong>Действует на:</strong><BR>• Мф. против критического удара (%): +520<BR><strong>Описание:</strong><BR>Персональный Амулет Защиты'
		} 
};
var gl ={
	 pot_base_1000_gl_absolute:{
				name: 'Амброзия Скучающих Владык',
				src: imP3 + 'pot_base_1000_gl_absolute.gif',
				descr: 'Масса: 5 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><img src="'+d4+'" alt="'+d5+'"/><br />Цена: 1 кр.<br />Долговечность: 0/1<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 2 ч.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +250<br />• Мф. против увертывания (%): +250<br />• Защита от магии: +250<br />• Защита от урона: +250<br />• Уровень жизни (HP): +250<br /><strong>Максимум: 1 ед.</strong><br />С низкой вероятностью падает с ботов.'
		}, 

		pot_base_1000_gl_str:{
				name: 'Древняя настойка Свирепости',
				src: imP3 + 'pot_base_1000_gl_str.gif',
				descr: 'Масса: 5<br />Цена: 1 кр.<br />Долговечность: 0/3<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 3 ч.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +50<br />• Сила: +20<br /><br />можно найти в мусоре или выбить с ботов (может быть с привязкой).'
			},
		pot_base_1000_gl_inst:{
				name: 'Древняя настойка Неукротимости',
				src: imP3 + 'pot_base_1000_gl_inst.gif',
				descr: 'Масса: 5<br />Цена: 1 кр.<br />Долговечность: 0/3<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 3 ч.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. критического удара (%): +50<br />• Интуиция: +20<br />можно найти в мусоре или выбить с ботов (может быть с привязкой).'
			}, 
		pot_base_1000_gl_dex:{
				name: 'Древняя настойка Грации',
				src: imP3 + 'pot_base_1000_gl_dex.gif',
				descr: 'Масса: 5<br />Цена: 1 кр.<br />Долговечность: 0/3<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 3 ч.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. увёртывания (%): +50<br />• Ловкость: +20<br />можно найти в мусоре или выбить с ботов (может быть с привязкой).'
			},
		pot_base_1000_gl_int:{
				name: 'Древняя настойка Просветления',
				src: imP3 + 'pot_base_1000_gl_int.gif',
				descr: 'Масса: 5<br />Цена: 1 кр.<br />Долговечность: 0/3<br />Срок годности: 21 дн.<br />Продолжительность действия магии: 3 ч.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. мощности магии стихий: +5<br />• Интеллект: +20<br />можно найти в мусоре или выбить с ботов (может быть с привязкой).'
			},
	 pot_base_1000_gl_warm:{
				name: 'Древняя настойка Безразличия',
				src: imP3 + 'pot_base_1000_gl_warm.gif',
				descr: 'Цена: 1 кр.<br />Масса: 5<br />Долговечность: 0/3<br />Срок годности: 21 дн.<br />Длительность: 180 мин.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Защита от урона: +70 <br />• Защита от колющего урона: +100<br />• Защита от рубящего урона: +100<br />• Защита от дробящего урона: +100<br />• Защита от режущего урона: +100<br />можно найти в мусоре или выбить с ботов (может быть с привязкой).'
		},
	 pot_base_1000_gl_marm:{
				name: 'Древняя настойка Антимагии',
				src: imP3 + 'pot_base_1000_gl_marm.gif',
				descr: 'Цена: 1 кр.<br />Масса: 5<br />Долговечность: 0/3<br />Срок годности: 21 дн.<br />Длительность: 180 мин.<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Защита от магии: +70 <br />• Защита от магии огня: +100<br />• Защита от магии воды: +100<br />• Защита от магии воздуха: +100<br />• Защита от магии земли: +100<br />можно найти в мусоре или выбить с ботов (может быть с привязкой).'
		},
		pot_base_200_bot3:{
				name: 'Снадобье Великана',
				src: imP3 + 'pot_base_200_bot3.gif',
				descr: 'Масса: 1  <br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Сила: +15<br />Падает с ботов.'
			},
		pot_base_200_bot2:{
				name: 'Снадобье Змеи',
				src: imP3 + 'pot_base_200_bot2.gif',
				descr: 'Масса: 1  <br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Ловкость: +15<br />Падает с ботов.'
			},
		pot_base_200_bot1:{
				name: 'Снадобье Предчувствия',
				src: imP3 + 'pot_base_200_bot1.gif',
				descr: 'Масса: 1  <br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Интуиция: +15<br />Падает с ботов.'
			},
		pot_base_200_bot4:{
				name: 'Снадобье Разума',
				src: imP3 + 'pot_base_200_bot4.gif',
				descr: 'Масса: 1  <br />Долговечность: 0/1<br />Цена: 1 кр./Цена: кр.<br />Срок годности: 30 дн.<br />Продолжительность действия магии: 3 ч. 0 мин.<br /><strong>Действует на:</strong><br />• Интеллект: +15<br />Падает с ботов.'
			},
		pot_anti_disease_5_1:{
				name: 'Сыворотка [5]',
				src: imP3 + 'pot_anti_disease_5.gif',
				descr: 'Масса: 1<br />Долговечность: 0/5 (0/4, 0/3) <br />Цена: 1 кр. <br /><strong>Наложены заклятия:</strong><br />• Исцеление <br /><strong>Описание:</strong><br />• Исцелит вас от многих болезней. <br /> - может упасть с ботов'
			},
		food_l8_2:{
				name: 'Бутерброд -Завтрак Рыцаря- толстый',
				src: imP3 + 'food_l8.gif',
				descr: 'Масса: 1 <br />Цена: 4 кр. <br />Долговечность: 0/4<br />Срок годности: 15 дн. <br />Продолжительность действия магии: 3 ч. <br /><strong>Требуется минимальное:</strong><br />• Уровень: 8<br />• Невозможно использовать хаосникам<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +180<br /> .'
			},

  gl_token:{
				name: 'Золотой прун',
				src: imP3 + 'gl_token.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1<BR>Валюта ГЛ. Можно выбить с любого бота, получить за выполнение заданий, требуется для оплаты различных услуг по квестам.'
		},
  gl_golem:{
				name: 'Запчасти от Голема',
				src: imP3 + 'gl_golem.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1<BR> Квестовый предмет. Падает с Молодых Големов, нужны Фермеру Ивану.'
		},
  gl_meat:{
				name: 'Мясо Букашки',
				src: imP3 + 'gl_meat.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1<BR>Квестовый предмет, берется у Фермера Ивана, для Каркаша.'
		},
  pot_gl_smazka:{
				name: 'Тюбик со смазкой',
				src: imP3 + 'pot_gl_smazka.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Цена: 4 кр.<BR>Долговечность: 0/1<BR>Срок годности: 30 дн.<BR>Продолжительность действия магии: 20 мин.<BR><strong>Описание:</strong><BR>Предназначена ТОЛЬКО для смазки механизмов.Внутрь НЕ принимать!!!<BR>Квестовый предмет, берется у Гаечного Ключа для смазки Сердца Горы.'
		},
  food_gl_samogon:{
				name: 'Настойка на жучьей требухе',
				src: imP3 + 'food_gl_samogon.gif',
				recipes: null,
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Цена: 1.5 кр.<BR>Долговечность: 0/1<BR>Срок годности: 30 дн.<BR>Продолжительность действия магии: 1 ч. 0 мин.<BR><strong>Требуется минимальное:</strong><BR>• Уровень: 8<BR>• Выносливость: 25<BR><strong>Действует на:</strong><BR>• Мф. мощности магии стихий: +10<BR>• Мф. мощности урона: +10<BR>• Интуиция: -3<BR>• Интеллект: -3<BR>Берется у Фермера Ивана + может упасть с ботов.'
		},
   gl_matkahead:{
				name: 'Голова Жучьей Матки',
				src: imP3 + 'gl_matkahead.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1<BR><strong>Описание:</strong><BR>Гаечный Ключ будет безмерно счастлив, увидев эту голову!<BR>Квестовый предмет, падает после смерти Жучьей Матки, надо отнести Гаечному Ключу.'
		},
   gl_zomb_kusok:{
				name: 'Часть глубинного зомби',
				src: imP3 + 'gl_zomb_kusok.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1<BR><strong>Описание:</strong><BR> Падет с глубинного зомби, иногда с мародеров.<BR>Требуется по заданию от Начальника Внешней Охраны.За 15 кусков - 15ед. репутации.<BR> - Можно сдавать до репутации в 10000'
		},
   gl_gusa_meat:{
				name: 'Сочный оковалок',
				src: imP3 + 'gl_gusa_meat.gif',
				recipes: null,
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><BR>Долговечность: 0/1<BR><strong>Описание:</strong><BR>Сочный оковалок "Ранее принадлежал глубинному гусеницу"<BR> Падет с глубинного гусеница.<BR>Требуется по заданию от Мясника. За 30 кусков - 45ед. репутации.<BR> - Можно сдавать до репутации в 10000'
		},

	 gl_mara_docs:{
				name: 'Поддельный аусвайс',
				src: imP3 + 'gl_mara_docs.gif',
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Искусно сделанный Брутом приказ о вашем зачислении в мародерские патрульные отряды.<br />Непонятная дата, неразборчивая подпись.<br />Необходим для выполнения задания: "Раздобыть документ о приеме на службу. 0/1"<br />для изготовления необходима "бумага 200" и 25 кр, а так же комплект Мародера, иначе Брут не будет говорить об этом.'
		},
	 gl_mara_ley_history:{
				name: 'Прошлое Лейтенанта',
				src: imP3 + 'gl_mara_ley_history.gif',
				descr: '<br />Масса: 0.1 <br />Долговечность: 0/1 <br /><strong>Описание:</strong><br />Документы, утверждающие право человека по имени Крой де Асс на владение фамильным замком отца.'
		},
	 gl_seymos:{
				name: 'Печать Сеймоса',
				src: imP3 + 'gl_seymos.gif',
				descr: 'Масса: 0.1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Задание от Эмисара, берется у Сеймоса.'
		},
	 rune_super_500:{
				name: 'Антикус Пентако',
				src: imP3 + 'rune_super_500.gif',
				descr: 'Масса: 1 <br />Цена: 25 кр.<br />Долговечность: 0/1<br /><strong>Требуется минимальное:</strong><br />• Уровень: 7<br /><strong>Действует на:</strong><br />• Уровень жизни (HP): +100<br /><strong>Описание:</strong><br />Этой руной можно улучшить предмет<br />Эмисар дает в награду за выполнение задания на Печать Сеймоса.'
		},
	 gl_stonekey_green:{
				name: 'Зеленый Ключ-камень',
				src: imP3 + 'gl_stonekey_green.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br /> - 1. Получить можно у "Часового", купив за 4 Золотых или украсть или бесплатно имея 2 вещи комплекта Мародера<br /> - 2. у "Охранника", купив за 5 Золотых. При выходе исчезает.'
		},
	 gl_stonekey_yellow:{
				name: 'Желтый Ключ-камень',
				src: imP3 + 'gl_stonekey_yellow.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Получить можно у "Начальник Внешней Охраны", при наличии 2 вещей комплекта Мародера и имея репутацию Лагеря Мародеров. При выходе исчезает.'
		},
	 gl_stonekey_red:{
				name: 'Красный Ключ-камень',
				src: imP3 + 'gl_stonekey_red.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />При выходе исчезает. Берется у Лейтенанта при репутации в 8000.'
		},
	 gl_stonekey_blue:{
				name: 'Синий Ключ-камень',
				src: imP3 + 'gl_stonekey_blue.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Долговечность: 0/1<br />Эмисар дает в награду за выполнение задания на Печать Сеймоса, не пропадает.'
		},
	 ko_sign:{
				name: 'Знак Кровавого Ордена',
				src: imP3 + 'ko_sign.gif',
				descr: 'Масса: 0.1<br />Долговечность: 0/1<br />Эмисар дает в награду за выполнение задания на Печать Сеймоса, не пропадает.<br />Позволяет пройти за решетку (у входа на 1м этаже) и перенестись сразу в клетку <b>V11</b>.'
		},
	 gl_mara_hood:{
				name: 'Шлем Мародера',
				src: imP3 + 'gl_mara_hood.gif',
				descr: 'Масса: 2 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 3 кр.<br />Долговечность: 0/50<br /><strong>Действует на:</strong><br />•Мф. увертывания (%): +25<br />•Мастерство владения ножами, кастетами: +1<br />• Часть комплекта: Маскировочный комплект Мародера [0/2]<br /><font color=#990000>Предмет не подлежит ремонту</font><br />Комплект необходим для прохода в "город" на 2м этаже, падает с Мародеров иногда с зомби.'
		},
  gl_mara_cloak:{
				name: 'Маскировочный плащ Мародера',
				src: imP3 + 'gl_mara_cloak.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 20 кр.<br />Долговечность: 0/50<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +25<br />• Мф. увертывания (%): +50<br />• Сила: -5<br />• Часть комплекта: Маскировочный комплект Мародера [0/2]<br /><font color=#990000>Предмет не подлежит ремонту</font><br />Комплект необходим для прохода в "город" на 2м этаже, падает с Мародеров иногда с зомби.'
		},
  gl_mara_leycloak:{
				name: 'Плащ Лейтенанта Мародеров',
				src: imP3 + 'gl_mara_leycloak.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 40 кр.<br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. против критического удара (%): +15<br />• Мф. увертывания (%): +15<br />• Уровень жизни (HP): +10 <br />Лежит в сундуке за Лейтенантом.'
		},
	 sword56:{
				name: 'Сабля -Ласточка-',
				src: imP3 + 'sword56.gif',
				descr: 'Масса: 13<br />Цена: 20 кр.<br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Ловкость: 16<br />• Уровень: 5<br />• Мастерство владения мечами: 3<br />• Выносливость: 16<br />• Сила: 16<br /><strong>Действует на:</strong><br />• Мф. парирования (%): +3<br /><strong>Свойства предмета:</strong><br />• Урон: 8 - 24<br />• Мф. против увертывания (%): 25<br />• Мф. критического удара (%): 25<br />• Зоны блокирования: +<br /><strong>Особенности:</strong><br />• Колющие атаки: Редки<br />• Рубящие атаки: Временами<br />• Режущие атаки: Малы<br /><strong>Описание:</strong><br />Личное оружие Лейтенанта Мародеров<br />Есть шанс украсть ее у Лейтенанта'
		}, 
	 gl_werewolf:{
				name: 'Шкура Рвуна',
				src: imP3 + 'gl_werewolf.gif',
				descr: 'Масса: 1 <img style="'+d1+'" src="'+d2+'" alt="'+d3+'"/><br />Цена: 49 кр.<br />Долговечность: 0/50<br /><strong>Требуется минимальное:</strong><br />• Уровень: 10<br /><strong>Действует на:</strong><br />• Мф. мощности крит. удара (%): +3<br />• Мф. мощности урона (%): +3<br /><strong>Описание:</strong> <br />Все, что осталось от страшного оборотня.<br /><font color=#990000>Предмет не подлежит ремонту.</font>'
		},

	 invoke_plain_gl_dogcall:{
				name: 'Призвать Тоннельную Гончую',
				src: imP3 + 'invoke_plain_gl_dogcall.gif',
				descr: 'Долговечность: 0/1<br />• Мгновенное заклинание<br /><strong>Наложено заклятье:</strong> Вызвать Гончую<br />Может упасть с Мародер Потрошитель. "Этот прием используется только в бою".'
		},
	 invoke_gl_sosiska:{
				name: 'Мясная Радость',
				src: imP3 + 'invoke_gl_sosiska.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />• Мгновенное заклинание<br />Наложено заклятье: <strong>Подкормить</strong> (Сытая собака (прием) - Животное с удовольствием съело ваше угощение. Сытое и довольное, оно атакует намного слабее.) <br /><strong>Описание:</strong><br />Сочная, жирная. Используется для тренировки Тоннельных Гончих.<br />Сделано в Мясная лавка<br />  - используется из кармана, на Тонельную Гончую или Рвуна.'
		},
	 cure3:{
				name: 'Лечение тяжелых травм',
				src: imP3 + 'cure3.gif',
				descr: 'Масса: 1<br />Цена: 4 кр. <br />Долговечность: 0/2<br />Вероятность срабатывания: 50%<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 12<br />• Уровень: 6<br /> - Букашка может дать в обмен на Чугунную Уточку'
		}, 
	 note:{
				name: 'Записки комментатора',
				src: imP3 + 'note.gif',
				descr: 'Масса: 1<br />Цена: 2 кр. <br />Долговечность: 0/10<br />Вероятность срабатывания: 99%<br /><strong>Требуется минимальное:</strong><br />• Интеллект: 5<br />• Уровень: 6<br /> - Букашка может дать в обмен на Чугунную Уточку'
		},
		'd_blat-6_1':{
				name: 'Пропуск Забытых',
				src: imP3 + 'd_blat-6.gif',
				descr: 'Позволяет пройти в подземелье на 6 часов раньше. Вероятность срабатывания: 99 %.<br />Можно выбить из ботов, вяжется',
				recipes: null
		},
	 invoke_tactics5:{
				name: 'Различные тактики',
				src: imP3 + 'invoke_tactics5.gif',
				descr: 'Масса: 1<br />Долговечность: 0/1<br />Можно выбить из ботов различные тактики 1-3, могут вязатся.'
		},
   gl_knife_01:{
				name: 'Таящий могущество кинжал',
				src: imP3 + 'gl_knife_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_sword_01:{
				name: 'Таящий могущество меч',
				src: imP3 + 'gl_sword_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_2h_sword_01:{
				name: 'Таящий могущество двуручный меч',
				src: imP3 + 'gl_2h_sword_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_topor_01:{
				name: 'Таящий могущество здоровый топор',
				src: imP3 + 'gl_topor_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_bulava_01:{
				name: 'Таящая могущество булава',
				src: imP3 + 'gl_bulava_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_molot_01:{
				name: 'Таящий могущество молот',
				src: imP3 + 'gl_molot_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_shield_01:{
				name: 'Таящий могущество тяжелый щит',
				src: imP3 + 'gl_shield_01.gif',
				recipes: null,
				descr: 'Масса:<br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_staff_01:{
				name: 'Таящий могущество древний посох',
				src: imP3 + 'gl_staff_01.gif',
				recipes: null,
				descr: 'Масса:5 <br />Долговечность: 0/<br /><strong>Требуется минимальное:</strong><br />• Уровень: 15<br /><strong>Описание:</strong><br />Хотя он и предстал перед вами во всем своем великолепии, вы по-прежнему не можете использовать его. Сложно даже представить, сколько сил таит этот предмет, побывавший в Древней Битве.<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_clearing_01:{
				name: 'Чугунная Уточка',
				src: imP3 + 'gl_clearing_01.gif',
				recipes: null,
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>С небольшой вероятностью можно получить у Каркаша при очистке предмета.<BR>Если отдадите ее "Букашке", то получите "Записки коментатора" или свиток лечения тяжелых травм<br />А еще можно подарить через гос. маг. как сувенир.'
		},
  gl_clearing_02:{
				name: 'Чугунная Вилка',
				src: imP3 + 'gl_clearing_02.gif',
				recipes: null,
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_clearing_03:{
				name: 'Кривая Ложка',
				src: imP3 + 'gl_clearing_03.gif',
				recipes: null,
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_clearing_04:{
				name: 'Гаечный Ключ',
				src: imP3 + 'gl_clearing_04.gif',
				recipes: null,
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_clearing_05:{
				name: 'Чугунная Гантеля 2 кг.',
				src: imP3 + 'gl_clearing_05.gif',
				recipes: null,
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
  gl_clearing_06:{
				name: 'Подшипник Идеальный',
				src: imP3 + 'gl_clearing_06.gif',
				recipes: null,
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>С небольшой вероятностью можно получить у Каркаша при очистке предмета.<br />Можно подарить через гос.маг. как сувенир.'
		},
	 gl_clearing_07:{
				name: 'Ржавый гвоздь',
				src: imP3 + 'gl_clearing_07.gif',
				descr: 'Масса: 0.1<br />Долговечность: 0/1<br />С небольшой вероятностью можно получить у Каркаша при очистке предмета.'
		},
   gl_mara_treasures:{
				name: 'Украденные сокровища',
				src: imP3 + 'gl_mara_treasures.gif',
				descr: 'Масса: 0.1 <BR>Долговечность: 0/1<BR>Квестовый предмет. Пропадают при выходе.'
		},
	 suven28:{
				name: 'Путевка на два года',
				src: imP3 + 'suven28.gif',
				descr: 'Масса: 1<br />Цена: 15 кр.<br />Долговечность: 0/1<br /><strong>Описание:</strong><br />Загадочная бумажка с надписью «Полный пансион. Увлекательная программа. Спешите! Количество мест ограничено!»<br />Можно подарить или сдать в гос'
		},

	 cards_apr1:{
				name: 'Открытка -От тещи-',
				src: imP3 + 'cards_apr1.gif',
				descr: 'Масса: 1 <br />Цена: 10 кр. <br />Долговечность: 0/1<br />Срок годности: 30 дн.  <br /><strong>Описание:</strong><br />Для неискренних поздравлений и предупреждения о скором визите<br /> появилась в рюкзаке откуда не ясно ))'
		},
	 suven23_7_5:{
				name: 'Подтяжки',
				src: imP3 + 'suven23_7_5.gif',
				descr: 'Масса: 1<BR> Цена: 5 кр.  <BR>Долговечность: 0/1'
		}


 
};
var items = { "Ингредиенты": maters,"Ключи": keys,"Эликсиры":pots, "Свитки":scrolls,  "Свитки тактик": taktiks,"Свитки зачарования": charki,"Свитки починки": pochin,"Уникальные Вещи":rares,  "из Канализации":kanaliz, "из Грибницы":gg, "из Излома Хаоса":izl, "из Сторожевой Башни":stb,"из Туманных низин":tn, "из <strong>Горы Легиона</strong>": gl};
