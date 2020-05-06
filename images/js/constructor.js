var toInvPhrase = 'В инвентарь ';
var reCount = /^\(X([0-9]+)\)/;

var ingridients = [
			["Шкура пещерного оленя", "mater1", 60, 60],
			["Золото", "mater2", 60, 60],
			["Серебро", "mater3", 60, 60],
			["Лучистое серебро", "mater4", 60, 60],
			["Мифрил", "mater5", 60, 60],
			["Железное дерево", "mater6", 60, 60],
			["Слиток пустынной руды", "mater7", 60, 60],
			["Троекорень", "mater8", 60, 60],
			["Корень змеиного дерева", "mater9", 60, 60],
			["Кора змеиного дерева", "mater10", 60, 60],
			["Кожа Общего Врага", "mater11", 60, 60],
			["Сталь", "mater12", 60, 60],
			["Кристалл тысячи ответов", "mater13", 60, 60],
			["Сгусток эфира", "mater14", 60, 60],
			["Сгусток астрала", "mater15", 60, 60],
			["Глубинный камень", "mater16", 60, 60],
			["Плод змеиного дерева", "mater17", 60, 60],
			["Тысячелетний камень", "mater18", 60, 60],
			["Кристалл времен", "mater19", 60, 60],
			["Эссенция лунного света", "mater20", 60, 60],
			["Эссенция глубины", "mater21", 60, 60],
			["Эссенция чистоты", "mater22", 60, 60],
			["Ралиэль", "mater23", 60, 60],
			["Стихиалия", "mater24", 60, 60],
			["Кристалл голоса предков", "mater25", 60, 60],
			["Кристалл стабильности", "mater26", 60, 60],
			["Камень затаенного солнца", "mater27", 60, 60],
			["Лучистый рубин", "mater28", 60, 60],
			["Лучистый топаз", "mater29", 60, 60],
			["Шепот гор", "mater30", 60, 60],
			["Эссенция праведного гнева", "mater31", 60, 60],

			["Грибочки", "gg_token", 60, 60],
			["Маленькие Грибочки", "gg_small_token", 60, 60],
			["Слиток света", "mater261", 60, 60],
			["Осколок бездны", "mater262", 60, 60],
			["Расскаленная магма", "mater267", 60, 60],
			["Песок просвета", "mater275", 60, 60],
			["Песчаная руда", "mater276", 60, 60],
			["Сущность кольца", "sp_mat3", 40, 25],
			["Сущность браслета", "sp_mat5", 40, 25],
			["Сущность ожерелья", "sp_mat7", 40, 25],
			["Сущность перчаток", "sp_mat9", 40, 25],
			["Сущность пояса", "sp_mat13", 40, 25],
			["Сущность серег", "sp_mat15", 40, 25],
			["Сущность серег", "sp_mat15", 40, 25],

			["Утерянная Сущность Сапог", "sp_mat40", 40, 25],
			["Утерянная Сущность Перчаток", "sp_mat41", 40, 25],
			["Утерянная Сущность Брони", "sp_mat42", 40, 25],
			["Утерянная Сущность Шлема", "sp_mat43", 40, 25],
			["Утерянная Сущность Наручей", "sp_mat44", 40, 25],
			["Утерянная Сущность Пояса", "sp_mat45", 40, 25],
			["Утерянная Сущность Щита", "sp_mat46", 40, 25],
			["Утерянная Сущность Серег", "sp_mat47", 40, 25],
			["Утерянная Сущность Амулета", "sp_mat48", 40, 25],
 
			["Кристальный песок", "mater292", 60, 60],
			["Мерцающий кристалл", "mater293", 60, 60],
			["Слезы лунного мерцания", "mater294", 60, 60],
			["Чешуйчатая шкура", "mater295", 60, 60],
			["Самородок мерцающего металла", "mater296", 60, 60],
			["Изменчивые водоросли", "mater297", 60, 60],
			["Древний мох", "mater298", 60, 60],
			["Черное масло", "mater299", 60, 60],
			["Бурая шкура", "mater300", 60, 60],
			["Кость болотного тролля", "mater301", 60, 60],
 
   ["Обломок Пирамидального Ключа 1", "key_cube_1", 60, 60],
   ["Осколок Пирамидального Ключа 2", "key_cube_2", 60, 60] ,
   ["Пирамидальный ключ", "key_cube_3", 60, 60],
	["Зачаровать Украшение [0]", "enh_1_0", 40, 25],
 ["Зачаровать Оружие [0]", "enh_3_0", 40, 25],
 ["Зачаровать Броню [0]", "enh_4_0", 40, 25],
 ["Зачаровать Перчатки [0]", "enh_5_0", 40, 25],
 ["Зачаровать Шлем [0]", "enh_9_0", 40, 25],
	["Зачаровать Украшение [1]", "enh_1_1", 40, 25],
 ["Зачаровать Оружие [1]", "enh_3_1", 40, 25],
 ["Зачаровать Броню [1]", "enh_4_1", 40, 25],
 ["Зачаровать Перчатки [1]", "enh_5_1", 40, 25],
 ["Зачаровать Шлем [1]", "enh_9_1", 40, 25],
	["Зачаровать Украшение [2]", "enh_1_2", 40, 25],
 ["Зачаровать Оружие [2]", "enh_3_2", 40, 25],
 ["Зачаровать Броню [2]", "enh_4_2", 40, 25],
 ["Зачаровать Перчатки [2]", "enh_5_2", 40, 25],
 ["Зачаровать Шлем [2]", "enh_9_2", 40, 25],
 ["Верхняя Часть Ключа Портала", "key_amul_1", 60, 60],
 ["Правая Часть Ключа Портала", "key_amul_2", 60, 60],
 ["Левая Часть Ключа Портала", "key_amul_3", 60, 60],
 ["Первая часть руны", "key_TR_1", 60, 60],
	["Вторая часть руны", "key_TR_2", 60, 60],
 ["Третья часть руны", "key_TR_3", 60, 60],
 ["Четвёртая часть руны", "key_TR_4", 60, 60],
 ["Пятая часть руны", "key_TR_5", 60, 60],

 ["Кусок старой ржавой кольчуги", "gg3_hishn_kolch", 60, 60],
 ["Обломок доспеха", "gg3_hishn_dosp", 60, 60],
 ["Обломок меча", "gg3_hishn_sword", 60, 60],
 ["Палец латной перчатки", "gg3_hishn_finger", 60, 60],

 ["Зачаровать кольцо: Вытягивание души [1]", "enhp_6_revamp10", 40, 25],
 ["Топливо для Големов", "pot_base_1000_str", 60, 60],
 ["Смазка для Големов", "pot_base_1000_dex", 60, 60],
 ["Ускоритель для Голема", "pot_base_1000_inst", 60, 60]

			];



	ingridients.sort();
	
	var recipes = [

		["spell_ug_undam4c", "Проклятье Умирающей Земли", {"mater25": 1, "mater26": 1}, {}],
		["spell_ug_undam1c", "Проклятье Угасающего Огня", {"mater11": 1, "mater14": 1, "mater17": 1, "mater18": 1, "mater29": 1}, {}],
		["spell_ug_undam2c", "Проклятье Замерзающей Воды", {"mater10": 1, "mater16": 1, "mater18": 1, "mater19": 1, "mater27": 1}, {}],
		["spell_ug_undam3c", "Проклятье Стихающего Ветра", {"mater12": 1, "mater15": 1, "mater17": 1, "mater18": 1, "mater30": 1}, {}],
		["spell_ug_unp10c", "Проклятье Уязвимости", {"mater26": 1, "mater28": 1, "mater24": 1}, {}],
		["spell_ug_unexprc", "Проклятье Легкого Отупения", {"mater28": 1, "mater26": 1, "mater24": 1}, {}],
		["spell_curse", "Черная Метка", {"mater12": 1, "mater28": 1, "mater16": 1, "mater17": 1, "mater18": 1, "mater29": 1}, {}],
		["spell_curseb", "Красная Метка", {"mater4": 1, "mater14": 3, "mater25": 1, "mater27": 1, "mater30": 1, "mater31": 1, "mater24": 1}, {}],

		["enhp_6_revamp10", "Зачаровать кольцо: Вытягивание души [1]", {"mater13": 1, "mater14": 1, "mater15": 1}, {}],
		["enhp_6_revamp10_2", "Зачаровать кольцо: Вытягивание души [2]", {"enhp_6_revamp10": 1, "pot_base_1000_str": 1, "pot_base_1000_dex": 1, "pot_base_1000_inst": 1}, {}],

  ["key_amul_4", "Ключ Портала", {"key_amul_1": 1, "key_amul_2": 1, "key_amul_3": 1}, {}],

		["sp_tacpts_BLK1", "Тактика Защиты: 1", {"mater11": 3}, {}],
		["sp_tacpts_BLK2", "Тактика Защиты: 2", {"mater19": 2}, {}],
		["sp_tacpts_BLK3", "Тактика Защиты: 3", {"mater29": 2}, {}],
		["sp_tacpts_BLK4", "Тактика Защиты: 4", {"mater21": 1}, {}],
		["sp_tacpts_BLK5", "Тактика Защиты: 5", {"mater21": 1, "mater23": 1}, {}],
	
		["sp_tacpts_HIT1", "Тактика Боя: 1", {"mater7": 3}, {}],
		["sp_tacpts_HIT2", "Тактика Боя: 2", {"mater18": 2}, {}],
		["sp_tacpts_HIT3", "Тактика Боя: 3", {"mater30": 2}, {}],
		["sp_tacpts_HIT4", "Тактика Боя: 4", {"mater22": 1}, {}],
		["sp_tacpts_HIT5", "Тактика Боя: 5", {"mater22": 1, "mater23": 1}, {}],
	
		["sp_tacpts_KRT1", "Тактика Крови: 1", {"mater9": 3}, {}],
		["sp_tacpts_KRT2", "Тактика Крови: 2", {"mater16": 2}, {}],
		["sp_tacpts_KRT3", "Тактика Крови: 3", {"mater27": 2}, {}],
		["sp_tacpts_KRT4", "Тактика Крови: 4", {"mater31": 1}, {}],
		["sp_tacpts_KRT5", "Тактика Крови: 5", {"mater31": 1, "mater23": 1}, {}],
	
		["sp_tacpts_CNTR1", "Тактика Ответа: 1", {"mater10": 3}, {}],
		["sp_tacpts_CNTR2", "Тактика Ответа: 2", {"mater17": 2}, {}],
		["sp_tacpts_CNTR3", "Тактика Ответа: 3", {"mater28": 2}, {}],
		["sp_tacpts_CNTR4", "Тактика Ответа: 4", {"mater20": 1}, {}],
		["sp_tacpts_CNTR5", "Тактика Ответа: 5", {"mater20": 1, "mater23": 1}, {}],
	
		["sp_tacpts_PRY1", "Тактика Отражения: 1", {"mater8": 3}, {}],
		["sp_tacpts_PRY2", "Тактика Отражения: 2", {"mater15": 2}, {}],
		["sp_tacpts_PRY3", "Тактика Отражения: 3", {"mater26": 2}, {}],
		["sp_tacpts_PRY4", "Тактика Отражения: 4", {"mater24": 1}, {}],
		["sp_tacpts_PRY5", "Тактика Отражения: 5", {"mater24": 1, "mater23": 1}, {}],

  ["key_cube_3", "Пирамидальный ключ", {"key_cube_1": 1, "key_cube_2": 1}],

  ["gg_token", "Грибочки", {"gg_small_token": 10}],
  ["staff54", "Посох Ослепительного Сияния", {"gg_token": 17}],
  ["staff55", "Посох Темных Обрядов", {"gg_token": 17}],
  ["hammer75", "Молот Лунного Мерцания", {"gg_token": 12}],
  ["naruchi90", "Перчатки Вечной Резни", {"gg_token": 10}],
  ["belt47", "Пояс Коварства", {"gg_token": 10}],
  ["ring136", "Черное Кольцо Перемен", {"gg_token": 10}],
  ["roba12_1", "Грибная Рубаха Силы", {"gg_token": 3}],
  ["roba12_2", "Грибная Рубаха Ловкости", {"gg_token": 3}],
  ["roba12_3", "Грибная Рубаха Интуиции", {"gg_token": 3}],
  ["roba12_4", "Грибная Рубаха Интеллекта", {"gg_token": 3}],
  ["pot_ggmanaregen", "Склянка Восполнения Магии", {"gg_token": 1}],
  ["pot_gghpregen", "Склянка Восполнения Здоровья", {"gg_token": 1}],
 ["gg3_suv_grib1", "Светящийся гриб", {"gg3_hishn_kolch": 2}],
 ["gg3_suv_grib2", "Светящийся гриб", {"gg3_hishn_kolch": 2}],
 ["gg3_suv_grib3", "Светящийся гриб", {"gg3_hishn_kolch": 2}],

 ["gg3_suv_insect_f", "Насекомое в смоле", {"gg3_hishn_dosp": 2}],
 ["gg3_suv_insect_m", "Насекомое в смоле", {"gg3_hishn_sword": 2}],

 ["gg3_suv_civiar", "Шар с непонятным содержимым", {"gg3_hishn_finger": 2}],
 ["gg3_suv_orchid", "Невянущий цветок", {"gg3_hishn_kolch": 2,"gg3_hishn_dosp": 2}],
// ["", "жвалы", {"gg3_hishn_sword": 2,"gg3_hishn_finger": 2}],



  ["key_TR_6", "Отпирающая руна", {"key_TR_1": 1, "key_TR_2": 1, "key_TR_3": 1, "key_TR_4": 1, "key_TR_5": 1}, {}],

  ["armor113", "Броня Неприступного Утеса", {'sp_mat42': 1,'mater301': 1,'mater299': 10,'mater300': 12,'mater293': 8,'mater296': 20,'mater295': 10,'mater297': 10}],
  ["belt52", "Пояс Неприступного Утеса", {'sp_mat45': 1,'mater294': 4,'mater299': 3,'mater300': 4,'mater296': 5,'mater298': 10}],
  ["shield88", "Щит Неприступного Утеса", {'sp_mat46': 1,'mater294': 7,'mater300': 7,'mater296': 11,'mater295': 6,'mater298': 6}],
  ["braslet43", "Браслеты Неуловимой Мощи", {'sp_mat44': 1,'mater296': 9,'mater294': 7,'mater293': 3,'mater295': 8}],
  ["naruchi92", "Перчатки Неуловимой Мощи", {'sp_mat41': 1,'mater301': 1,'mater300': 4,'mater294': 6,'mater295': 13,'mater298': 8}], 
  ["boots33", "Сандалии Неуловимой Мощи", {'sp_mat40': 1,'mater300': 7,'mater299': 3,'mater295': 5,'mater298': 15}],
  ["amulet111", "Амулет Быстрой Расправы", {'sp_mat48': 1,'mater294': 3,'mater299': 7,'mater293': 4,'mater296': 12,'mater298': 12,'mater292': 11}], 
  ["naruchi91", "Перчатки Быстрой Расправы", {'sp_mat41': 1,'mater294': 2,'mater300': 5,'mater295': 6,'mater296': 6,'mater298': 8}],
  ["boots32", "Сапоги Быстрой Расправы", {'sp_mat40': 1,'mater301': 1,'mater299': 4,'mater300': 5,'mater295': 14,'mater296': 8}],  
  ["helmet92", "Шлем Неотвратимого Возмездия", {'sp_mat43': 1,'mater301': 1,'mater294': 6,'mater299': 4,'mater300': 7,'mater296': 13,'mater298': 8}],
  ["naruchi41", "Наручи Неотвратимого Возмездия", {'sp_mat44': 1,'mater300': 5,'mater299': 3,'mater296': 6,'mater298': 7,'mater295': 8}], 
  ["clip100", "Серьги Неотвратимого Возмездия", {'sp_mat47': 1,'mater294': 5,'mater299': 5,'mater293': 5,'mater296': 6,'mater292': 8,'mater297': 9}],  
 
  ["dispell1", "Снять Проклятие", {'mater298': 5,'mater294': 1}],

		["clip90_1", "Серьги Скорпиона [10]", {"sp_mat15": 1, "mater267": 1}, {"Серьги Скорпиона": 1}],
		["clip89_1", "Серьги Злодеяний [10]", {"sp_mat15": 1, "mater267": 1}, {"Серьги Злодеяний": 1}],
		["clip76_1", "Серьги Паука [10]", {"sp_mat15": 1, "mater267": 1}, {"Серьги Паука": 1}],
		["clip81_1", "Серьги Забытых Времен [10]", {"sp_mat15": 1, "mater267": 1}, {"Серьги Забытых Времен": 1}],
		["clip82_du2_1", "Серьги Утреннего Солнца [10]", {"sp_mat15": 1, "mater267": 1}, {"Серьги Утреннего Солнца": 1}],

		["amulet80_1", "Амулет Кровавой Луны [10]", {"sp_mat7": 1, "mater262": 1}, {"Амулет Кровавой Луны": 1}],
		["amulet98_1", "Амулет Скорпиона [10]", {"sp_mat7": 1, "mater262": 1}, {"Амулет Скорпиона": 1}],
		["amulet97_1", "Амулет Злодеяний [10]", {"sp_mat7": 1, "mater262": 1}, {"Амулет Злодеяний": 1}],
		["amulet75_1", "Амулет Паука [10]", {"sp_mat7": 1, "mater262": 1}, {"Амулет Паука": 1}],
		["amulet81_1", "Амулет Забытых Времен [10]", {"sp_mat7": 1, "mater262": 1}, {"Амулет Забытых Времен": 1}],
		["amulet83_du2_1", "Амулет Утреннего Солнца [10]", {"sp_mat7": 1, "mater262": 1}, {"Амулет Утреннего Солнца": 1}],

		["ring116_1", "Кольцо Кровавой Луны [10]", {"sp_mat3": 1, "mater261": 1}, {"Кольцо Кровавой Луны": 1}],
		["ring129_1", "Кольцо Скорпиона [10]", {"sp_mat3": 1, "mater261": 1}, {"Кольцо Скорпиона": 1}],
		["ring128_1", "Кольцо Злодеяний [10]", {"sp_mat3": 1, "mater261": 1}, {"Кольцо Злодеяний": 1}],
		["ring110_1", "Кольцо Паука [10]", {"sp_mat3": 1, "mater261": 1}, {"Кольцо Паука": 1}],
		["ring117_1", "Кольцо Забытых Времен [10]", {"sp_mat3": 1, "mater261": 1}, {"Кольцо Забытых Времен": 1}],
		["ring119_du2_1", "Кольцо Утреннего Солнца [10]", {"sp_mat3": 1, "mater261": 1}, {"Кольцо Утреннего Солнца": 1}],

		["braslet27_1", "Наручи Решимости [10]", {"sp_mat5": 1, "mater275": 1}, {"Наручи Решимости": 1}],
		["braslet24_1", "Браслет Кровавой Луны [10]", {"sp_mat5": 1, "mater275": 1}, {"Браслет Кровавой Луны": 1}],
		["braslet32_1", "Браслет Скорпиона [10]", {"sp_mat5": 1, "mater275": 1}, {"Браслет Скорпиона": 1}],
		["braslet31_1", "Наручи Злодеяний [10]", {"sp_mat5": 1, "mater275": 1}, {"Наручи Злодеяний": 1}],
		["naruchi76_1", "Наручи Паука [10]", {"sp_mat5": 1, "mater275": 1}, {"Наручи Паука": 1}],
		["braslet25_1", "Наручи Забытых Времен [10]", {"sp_mat5": 1, "mater275": 1}, {"Наручи Забытых Времен": 1}],
		["braslet26_du2_1", "Наручи Утреннего Солнца [10]", {"sp_mat5": 1, "mater275": 1}, {"Наручи Утреннего Солнца": 1}],

		["belt39_1", "Пояс Решимости [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Решимости": 1}],
		["belt36_1", "Пояс Кровавой Луны [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Кровавой Луны": 1}],
		["belt44_1", "Пояс Скорпиона [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Скорпиона": 1}],
		["belt43_1", "Пояс Злодеяний [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Злодеяний": 1}],
		["belt35_1", "Пояс Паука [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Паука": 1}],
		["belt37_1", "Пояс Забытых Времен [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Забытых Времен": 1}],
		["belt38_du2_1", "Пояс Утреннего Солнца [10]", {"sp_mat13": 1, "mater276": 1}, {"Пояс Утреннего Солнца": 1}],

	 ["enh_1_1", "Зачаровать Украшение [1]", {"enh_1_0": 3,"key_cube_3": 1}, {}],
		["enh_3_1", "Зачаровать Оружие [1]", {"enh_3_0": 3,"key_cube_3": 1}, {}],
		["enh_4_1", "Зачаровать Броню [1]", {"enh_4_0": 3,"key_cube_3": 1}, {}],
		["enh_5_1", "Зачаровать Перчатки [1]", {"enh_5_0": 3,"key_cube_3": 1}, {}],
		["enh_9_1", "Зачаровать Шлем [1]", {"enh_9_0": 3,"key_cube_3": 1}, {}],
  ["enh_1_2", "Зачаровать Украшение [2]", {"enh_1_1": 3,"key_cube_3": 1}, {}],
		["enh_3_2", "Зачаровать Оружие [2]", {"enh_3_1": 3,"key_cube_3": 1}, {}],
		["enh_4_2", "Зачаровать Броню [2]", {"enh_4_1": 3,"key_cube_3": 1}, {}],
		["enh_5_2", "Зачаровать Перчатки [2]", {"enh_5_1": 3,"key_cube_3": 1}, {}],
		["enh_9_2", "Зачаровать Шлем [2]", {"enh_9_1": 3,"key_cube_3": 1}, {}],
  ["enh_1_3", "Зачаровать Украшение [3]", {"enh_1_2": 3,"key_cube_3": 1,"mater24": 1}, {}],
		["enh_3_3", "Зачаровать Оружие [3]", {"enh_3_2": 3,"key_cube_3": 1,"mater22": 1}, {}],
		["enh_4_3", "Зачаровать Броню [3]", {"enh_4_2": 3,"key_cube_3": 1,"mater21": 1}, {}],
		["enh_5_3", "Зачаровать Перчатки [3]", {"enh_5_2": 3,"key_cube_3": 1,"mater20": 1}, {}],
		["enh_9_3", "Зачаровать Шлем [3]", {"enh_9_2": 3,"key_cube_3": 1,"mater31": 1}, {}],

   ["booklearn_6", "Магическая Защита (прием)", {"mater21": 1}],
   ["booklearn_7", "Усиленные Удары (прием)", {"mater31": 1}],     
   ["booklearn_8", "Жажда Крови (прием)", {"mater28": 3}],         
   ["booklearn_9", "Поступь Смерти (прием)", {"mater22": 1}],
   ["booklearn_10", "Возмездие (прием)", {"mater30": 3}],
   ["booklearn_slot9", "Тайное Знание (том 3)", {"mater25": 3, "mater27": 3,"mater26": 3,"mater28": 3,"mater29": 3,"mater30": 3}],
   ["booklearn_slot10", "Тайное Знание (том 4)", {"mater24": 5,"mater22": 5,"mater21": 5,"mater20": 5,"mater31": 5,"mater23": 5}],

   ["booklearn_spell1", "Пылающий Ужас (заклинание)", {"mater23": 1}],
   ["booklearn_spell2", "Защита Света (заклинание)", {"mater22": 1}],
   ["booklearn_spell3", "Глаз за Глаз (заклинание)", {"mater24": 1}],
   ["booklearn_spell4", "Иней (заклинание)", {"mater21": 1}],
   ["booklearn_spell5", "Серое Мастерство (заклинание)", {"mater27": 3}],
   ["booklearn_spell7", "Каменный Удар (заклинание)", {"mater26": 3}],
 
   ["clip84", "Серьги Гравитации", {"mater30": 3, "mater8": 1}],
   ["amulet87", "Амулет Гравитации", {"mater26": 2, "mater8": 4}],
   ["ring121", "Кольцо Гравитации", {"mater26": 1, "mater8": 5}],

   ["clip82", "Серьги Оледенения", {"mater27": 3, "mater4": 1}],
   ["amulet85", "Амулет Оледенения", {"mater28": 2, "mater4": 4}],
   ["ring119", "Кольцо Оледенения", {"mater28": 1, "mater4": 5}],

   ["clip83", "Серьги Пожирающего Пламени", {"mater27": 3, "mater7": 1}],
   ["amulet86", "Амулет Пожирающего Пламени", {"mater28": 2, "mater7": 4}],
   ["ring120", "Кольцо Пожирающего Пламени", {"mater28": 1, "mater7": 5}],

   ["clip85", "Серьги Цепной Молнии", {"mater30": 3, "mater3": 1}],
   ["amulet88", "Амулет Цепной Молнии", {"mater26": 2, "mater3": 4}],
   ["ring122", "Кольцо Цепной Молнии", {"mater26": 1, "mater3": 5}],

   ["helmet83", "Маска Решимости", {"mater17": 5, "mater1": 6}],
   ["roba51", "Мантия Решимости", {"mater24": 1, "mater1": 8}],
   ["leg15", "Поножи Решимости", {"mater26": 1, "mater1": 5}],
   ["belt39", "Пояс Решимости", {"mater26": 1, "mater1": 4}],
   ["braslet27", "Наручи Решимости", {"mater26": 1, "mater1": 3}],
   ["naruchi84", "Перчатки Решимости", {"mater26": 1, "mater1": 6}],
   ["boots25", "Сапоги Решимости", {"mater26": 1, "mater1": 5}],
   ["staff52", "Посох Решимости", {"mater24": 1, "mater17": 2}],

   ["helmet84", "Шлем Злодеяний", {"mater14": 5, "mater10": 6}],
   ["armor108", "Броня Злодеяний", {"mater21": 1, "mater10": 8}],
   ["leg17", "Поножи Злодеяний", {"mater29": 1, "mater3": 10}],
   ["belt43", "Пояс Злодеяний", {"mater29": 1, "mater10": 4}],
   ["clip89", "Серьги Злодеяний", {"mater29": 2}],
   ["amulet97", "Амулет Злодеяний", {"mater29": 2}],
   ["braslet31", "Наручи Злодеяний", {"mater29": 1, "mater10": 3}],
   ["naruchi85", "Перчатки Злодеяний", {"mater29": 1, "mater10": 3}],
   ["ring128", "Кольцо Злодеяний", {"mater29": 1}],
   ["shield85", "Щит Злодеяний", {"mater29": 1, "mater14": 3}],
   ["boots26", "Ботинки Злодеяний", {"mater29": 1, "mater10": 5}],
   ["knife76", "Кинжал Злодеяний", {"mater29": 1, "mater10": 12}],
   ["sword100", "Меч Злодеяний", {"mater14": 8, "mater10": 9}],

   ["helmet85", "Шлем Скорпиона", {"mater16": 5, "mater3": 6}],
   ["armor109", "Броня Скорпиона", {"mater22": 1, "mater3": 8}],
   ["leg16", "Поножи Скорпиона", {"mater30": 1, "mater3": 5}],
   ["belt44", "Пояс Скорпиона", {"mater30": 1, "mater3": 4}],
   ["clip90", "Серьги Скорпиона", {"mater30": 2}],
   ["amulet98", "Амулет Скорпиона", {"mater30": 2}],
   ["braslet32", "Браслет Скорпиона", {"mater30": 1, "mater3": 3}],
   ["naruchi86", "Перчатки Скорпиона", {"mater30": 1, "mater3": 3}],
   ["ring129", "Кольцо Скорпиона", {"mater30": 1}],
   ["shield86", "Щит Скорпиона", {"mater30": 1, "mater16": 3}],
   ["boots27", "Ботинки Скорпиона", {"mater30": 1, "mater3": 5}],
   ["knife77", "Клинок Скорпиона", {"mater30": 1, "mater3": 12}],
   ["sword105", "Меч Скорпиона", {"mater30": 1, "mater3": 12}],
   ["axe90", "Топор Скорпиона", {"mater16": 9, "mater3": 8}],
   ["hammer74", "Цеп Скорпиона", {"mater30": 2, "mater3": 5}],

   ["helmet81", "Шлем Забытых Времён", {"mater19": 5, "mater6": 6}],
   ["armor107", "Броня Забытых Времён", {"mater31": 1, "mater6": 8}],
   ["leg11", "Поножи Забытых Времён", {"mater25": 1, "mater6": 5}],
   ["belt37", "Пояс Забытых Времён", {"mater25": 1, "mater6": 4}],
   ["clip81", "Серьги Забытых Времён", {"mater25": 2}],
   ["amulet81", "Амулет Забытых Времён", {"mater25": 2}],
   ["braslet25", "Наручи Забытых Времён", {"mater25": 1, "mater6": 3}],
   ["naruchi79", "Перчатки Забытых Времён", {"mater25": 1, "mater6": 3}],
   ["ring117", "Кольцо Забытых Времён", {"mater25": 1}],
   ["shield84", "Щит Забытых Времён", {"mater25": 1, "mater19": 3}],
   ["boots23", "Сапоги Забытых Времён", {"mater25": 1, "mater6": 5}],
   ["knife73", "Кинжал Забытых Времён", {"mater25": 1, "mater6": 12}],
   ["sword104", "Меч Забытых Времён", {"mater25": 1, "mater6": 12}],
   ["axe89", "Топор Забытых Времён", {"mater19": 9, "mater6": 8}],
   ["hammer71", "Молот Забытых Времён", {"mater19": 9, "mater6": 10}],
   ["mace68", "Булава Забытых Времён", {"mater25": 2, "mater6": 5}],

   ["helmet79", "Шлем Паука", {"mater18": 5, "mater12": 6}],
   ["armor105", "Броня Паука", {"mater22": 1, "mater12": 8}],
   ["leg13", "Поножи Паука", {"mater30": 1, "mater11": 5}],
   ["belt35", "Пояс Паука", {"mater30": 1, "mater12": 4}],
   ["clip76", "Серьги Паука", {"mater30": 2}],
   ["amulet75", "Амулет Паука", {"mater30": 2}],
   ["naruchi76", "Наручи Паука", {"mater30": 1, "mater12": 3}],
   ["naruchi78", "Перчатки Паука", {"mater30": 1, "mater12": 3}],
   ["ring110", "Кольцо Паука", {"mater30": 1}],
   ["shield82", "Щит Паука", {"mater30": 1, "mater18": 3}],
   ["boots21", "Сапоги Паука", {"mater30": 1, "mater12": 5}],
   ["knife71", "Кинжал Паука", {"mater30": 1, "mater12": 12}],
   ["sword102", "Меч Паука", {"mater30": 1, "mater12": 12}],
   ["axe87", "Топор Паука", {"mater18": 9, "mater12": 8}],
   ["mace66", "Булава Паука", {"mater30": 2, "mater12": 5}],

   ["helmet80", "Шлем Кровавой Луны", {"mater15": 5, "mater5": 6}],
   ["armor106", "Броня Кровавой Луны", {"mater20": 1, "mater5": 8}],
   ["leg12", "Поножи Кровавой Луны ", {"mater28": 1, "mater5": 5}],
   ["belt36", "Пояс Кровавой Луны", {"mater28": 1, "mater5": 4}],
   ["clip80", "Серьги Кровавой Луны", {"mater28": 2}],
   ["amulet80", "Амулет Кровавой Луны", {"mater28": 2}],
   ["braslet24", "Браслет Кровавой Луны", {"mater28": 1, "mater5": 3}],
   ["naruchi77", "Перчатки Кровавой Луны", {"mater28": 1, "mater5": 3}],
   ["ring116", "Кольцо Кровавой Луны", {"mater28": 1}],
   ["shield83", "Щит Кровавой Луны", {"mater28": 1, "mater15": 3}],
   ["boots22", "Ботинки Кровавой Луны", {"mater28": 1, "mater5": 5}],
   ["knife72", "Кинжал Кровавой Луны", {"mater28": 1, "mater5": 12}],
   ["sword103", "Меч Кровавой Луны", {"mater28": 1, "mater5": 12}],
   ["axe88", "Топор Кровавой Луны", {"mater15": 9, "mater5": 8}],
   ["hammer70", "Молот Кровавой Луны", {"mater15": 9, "mater5": 10}],
   ["mace67", "Булава Кровавой Луны", {"mater28": 2, "mater5": 5}],

   ["helmet82_du2", "Шлем Утреннего Солнца", {"mater16": 5, "mater2": 6}],
   ["armor108_du1", "Броня Утреннего Солнца", {"mater23": 1, "mater2": 8}],
   ["leg14", "Поножи Утреннего Солнца ", {"mater27": 1, "mater2": 5}],
   ["belt38_du2", "Пояс Утреннего Солнца", {"mater27": 1, "mater2": 4}],
   ["clip82_du2", "Серьги Утреннего Солнца", {"mater27": 2}],
   ["amulet83_du2", "Амулет Утреннего Солнца", {"mater27": 2}],
   ["braslet26_du2", "Наручи Утреннего Солнца", {"mater27": 1, "mater2": 3}],
   ["naruchi83_du2", "Перчатки Утреннего Солнца", {"mater27": 1, "mater2": 3}],
   ["ring119_du2", "Кольцо Утреннего Солнца", {"mater27": 1}],
   ["shield85_du2", "Щит Утреннего Солнца", {"mater27": 1, "mater16": 3}],
   ["boots24_du2", "Сапоги Утреннего Солнца", {"mater27": 1, "mater2": 5}],
   ["knife74_du2", "Кинжал Утреннего Солнца", {"mater27": 1, "mater2": 11,"mater16": 1}],
   ["sword105_du2", "Меч Утреннего Солнца", {"mater27": 1, "mater2": 11,"mater16": 1}],
   ["axe90_du2", "Топор Утреннего Солнца", {"mater16": 9, "mater2": 8}],
   ["hammer72_du2", "Молот Утреннего Солнца", {"mater27": 2, "mater2": 5}],
 ["staff53", "Посох Сохранения", {"mater21": 1, "mater29": 3,"mater4": 1}],
 ["axe91", "Топор Сострадания", {"mater31": 1, "mater30": 3,"mater5": 5}],
 ["sword106", "Меч Сомнений", {"mater24": 1, "mater13": 3,"mater12": 5}],

 ["clip91", "Серьги Неуемной Силы", {"mater28": 2}],
 ["ring135", "Кольцо Неуемной Силы", {"mater28": 1}] 


	];

var addedIngr = new Array();
var addedIngrKeys = new Array();
var selectedIngr = new Array();
var foundRecipes = new Array();
var acceptedRecipes = new Array();
var activeIngr;

function controlNumber(){
	if ( event.keyCode < 48 || event.keyCode > 57 ) event.returnValue = false;
}

function add(obj){
	this[this.length] = obj;
	return this;
}

Array.prototype.add = add;

function trim() {
	return this.replace(/^\s+|\s*([\+\,>\s;:])\s*|\s+$/g,"$1");
}

String.prototype.trim = trim;

function showAllRecipes(ingr){
	if ( ingr != "" )
		activeIngr = ingridients[ingr];
	else
		activeIngr = null;
	var showRecipes = new Array();
	for ( var i = 0; i < recipes.length; i++ ){
		var shouldShow = true;
		if ( activeIngr ){
			shouldShow = false;
			for ( var j in recipes[i][2] ){
				if ( j == activeIngr[1] ){
					shouldShow = true;
					break;
				}
			}
		}
		if ( shouldShow )
			showRecipes.add([i, 0]);
	}
	var str = "Найдено рецептов ("+(activeIngr ? "где присутствует <b>"+activeIngr[0]+"</b>" : "<b>всего</b>")+"): <b>"+showRecipes.length+"</b>";
	str += drawRecipes(showRecipes, activeIngr ? 3 : 4);
	showDialogWindow1("Рецепты", str, 400);
}

function ingrChoose(id){
	var img = new Image();
	img = document.getElementById("ingrPic");
	if ( id != "" ){
		var ingr = ingridients[id];
		img.src = imP3 +ingr[1]+ ".gif";
		img.width = ingr[2];
		img.height = ingr[3];
	}
	else
		img.src = initvars.imageBlank;
	document.getElementById("ingrId").innerHTML = id ? ingr[1] : "";
}

function addIngr(){



	var ingrQuant = parseInt(document.getElementById("ingrQuant").value);
	if ( !(ingrQuant > 0) ){
		alert("Количество ингидиента должно быть отличное от нуля число!");
		return;
	}
	var selectControl = document.getElementById("ingrName");
	var i = selectControl.selectedIndex;
	var optionValue = selectControl.options[i].value;
	var optionText = selectControl.options[i].text;
	if ( optionValue == "" ){
		alert("Ингредиент не выбран!");
		return;
	}
	var ingr = ingridients[optionValue];
	addIngrInArray(ingr, ingrQuant);
	drawAddedIngr();
}

function addIngrInArray(ingr, ingrQuant){
	var alreadyAdded = false;
	for ( var i = 0; i < addedIngr.length; i++ ){
		if ( addedIngr[i][0] == ingr[1] ){
			var totalIngrQuant = parseInt(addedIngr[i][2])+ingrQuant;
			addedIngr[i][2] = totalIngrQuant;
			addedIngrKeys[ingr[1]] = totalIngrQuant;
			alreadyAdded = true;
		}
		if ( alreadyAdded == true )
			break;
	}
	if ( !alreadyAdded ){
		addedIngr.add([ingr[1], ingr[0], ingrQuant]);
		addedIngrKeys[ingr[1]] = ingrQuant;
	}
}

function drawAddedIngr(){
	var str = ""
	for ( var i = addedIngr.length-1; i >= 0; i-- ){
		str += "<table width=100% id=constr><tbody>";
		str += "<tr><td width=60 valign=top><img src='"+imP3+addedIngr[i][0]+".gif'></td>";
		str += "<td valign=top><b>"+addedIngr[i][1]+"</b><br>Количество: <b>"+addedIngr[i][2]+" шт.</b></td>";
		str += "<td width=30><input type=button class=b value='-' onClick=\"javascript:removeIngr("+i+");\"></td></tr>";
		str += "</tbody></table>";
	}
	document.getElementById("constrContent").innerHTML = str;
}

function removeIngr(i){
	var ingr = addedIngr[i];
	addedIngr.splice(i, 1);
	addedIngrKeys[ingr[0]] = null;
	drawAddedIngr();
	findRecipes(true);
	acceptedRecipes = new Array();
	drawAcceptedRecipes();
}

function findRecipes(noAlert){
	if ( !noAlert ){
		acceptedRecipes = new Array();
		drawAcceptedRecipes();
	}
	foundRecipes = new Array();
	for ( var i = 0; i < recipes.length; i++ ){
		var composition = recipes[i][2];
		var hasIngr = true;
		var maxTimes = 0;
		for ( var j in composition ){
			if ( composition[j] <= addedIngrKeys[j] ){
				var max = parseInt(addedIngrKeys[j]/composition[j]);
				if ( (maxTimes > max) || maxTimes == 0 )
					maxTimes = max;
			}
			else {
				hasIngr = false;
				break;
			}
		}
		if ( !hasIngr )
			continue;
		foundRecipes.add([i, maxTimes]);
	}
	if ( foundRecipes.length == 0 && !noAlert )
		alert("Не найдено ни одного рецепта!");
	drawAviableRecipes();
}

function drawRecipes(recipesArray, mode){
	var str = "";
	for ( var i = 0; i < recipesArray.length; i++ ){
		var recipe = recipes[recipesArray[i][0]];
		var str1 = "<table width=100% id=constr><tbody>";
		str1 += "<tr><td width=60 valign=top><img src='"+imP3+recipe[0]+".gif'></td>";
		str1 += "<td valign=top><b>"+recipe[1]+"</b><br><b>Состав:</b> ";
		var str2 = "";
		var k = 1;
		for ( var j in recipe[2] ){
			var str3 = getNameForIngr(j);
			if ( mode == 3 && j == activeIngr[1] )
				str3 = "<u>"+str3+"</u>";
			str2 += str3+" (<b>"+recipe[2][j]+"шт.</b>)";
			if ( k != recipe[2].length )
				str2 += ", ";
			k++;
		}
		str1 += str2+"<br>";
		str2 = "";
		var k = 1;
		for ( var j in recipe[3] ){
			if ( k == 1 )
				str2 += "<b>Дополнительно требуется:</b> ";
			str2 += j+" (<b>"+recipe[3][j]+"шт.</b>)";
			str2 += ", ";
			k++;
		}
		str1 += str2+"<br>";
		if ( mode == 1 || mode == 2 ){
			if ( mode == 1 )
				str1 += "Макс. количество:";
			else if ( mode == 2 )
				str1 += "Собранное количество:";
			str1 += " <b>"+recipesArray[i][1]+"шт.</b></td>";
		}
		if ( mode == 1 ){
			str1 += "<td width=60 align=center>Собрать<br>";
			str1 += "<input type=text class=in id="+mode+"recipe"+i+" style='text-align:right;width:25px;' value=0 onKeyPress=\"javascript:controlNumber();\"> шт.<br>";
			str1 += "<input type=button class=b value=go onClick=\"javascript:addRecipe("+i+", parseInt(document.getElementById('"+mode+"recipe"+i+"').value))\"></td>";
		}
		else if ( mode == 2 ){
			str1 += "<td width=30><input type=button class=b value='-' onClick=\"javascript:removeAcceptedRecipe("+i+");\"></td>";
		}
		else if ( mode == 3 || mode == 4 ){
			str1 += "<td width=80 align=center>Добавить ингредиенты для ";
			str1 += "<input type=text class=in id="+mode+"recipe"+i+" style='text-align:right;width:25px;' value=0 onKeyPress=\"javascript:controlNumber();\"> шт.<br>";
			str1 += "<input type=button class=b value=go onClick=\"javascript:addIngridientsForRecipe("+recipesArray[i][0]+", parseInt(document.getElementById('"+mode+"recipe"+i+"').value))\"></td>";
		}
		str1 += "</tr></thead></table>";
		str += str1;
	}
	return str;
}

function addIngridientsForRecipe(recipeId, recipeQuant){
	var recipe = recipes[recipeId];
	if ( !(recipeQuant > 0) ){
		alert("Количество собираемого предмета должнобыть больше нуля!");
		return;
	}
	for ( var i in recipe[2] ){
		for ( var j = 0; j < ingridients.length; j++ ){
			var ingr = ingridients[j];
			if ( ingr[1] == i ){
				addIngrInArray(ingr, recipeQuant*recipe[2][i]);
			}	
		}
	}
	drawAddedIngr();
	hideDialogWindow();
}

function showAnalyzeWindow(){
	var str = "Введите содержимое своего рюкзака (закладка \"<b>Прочее</b>\"):<br>";
	str += "<textarea id='bagContent' style='width:100%; height: 300px;'></textarea><br>";
	str += "<input type=button class=info_button value='Приступить к обработке' ";
	str += "onClick=\"javascript:makeAnalyze(document.getElementById('bagContent').value);\">";
	showDialogWindow1("Анализ содержимого рюкзака", str, 400);
}

function makeAnalyze(content){
	var lines = content.split("\n");
	var foundSmth = false;
	for ( var i = 0; i < lines.length; i++ ){
		var line = lines[i].trim();
		if (line.indexOf(toInvPhrase) == 0)
		{
			line = line.substr(toInvPhrase.length);
		}
		var upperLine = line.toUpperCase();
		for ( var j = 0; j < ingridients.length; j++ ){
			var ingr = ingridients[j];
			var cuc = ingr[0].toUpperCase();
			if ( upperLine.indexOf(cuc) == 0 )
			{
				foundSmth = true;
				var count = 1;
				var trailer = upperLine.substr(cuc.length).trim();
				var m = trailer.match(reCount);
				if (m != null)
				{
					count = parseInt(m[1]);
				}
				addIngrInArray(ingr, count);
				break;
			}
		}
	}
	if ( !foundSmth )
		alert("Ничего не найдено...");
	else
		drawAddedIngr();
	hideDialogWindow();
}

function drawAviableRecipes(){
	document.getElementById("aviableRecipes").innerHTML = drawRecipes(foundRecipes, 1);
}

function drawAcceptedRecipes(){
	document.getElementById("acceptedRecipes").innerHTML = drawRecipes(acceptedRecipes, 2);
}

function removeAcceptedRecipe(i){
	var q = acceptedRecipes[i][1];
	var recipe = recipes[acceptedRecipes[i][0]];
	for ( var j in recipe[2] ){
		addedIngrKeys[j] += recipe[2][j]*q;
	}
	acceptedRecipes.splice(j, 1);
	drawAcceptedRecipes();
	findRecipes(true);
}

function addRecipe(i, q){
	var q1 = foundRecipes[i][1];
	if ( !(q > 0) ){
		alert("Количество получаемых вещей должно быть больше нуля!");
		return;
	}
	else if ( q > q1 ){
		alert("Количество получаемых вещей не может быть больше их максимально возможного количества!");
		return
	}
	var recipe = recipes[foundRecipes[i][0]];
	for ( var j in recipe[2] ){
		addedIngrKeys[j] -= recipe[2][j]*q;
	}
	var alreadyAdded = false;
	for ( var j = 0; j < acceptedRecipes.length; j++ ){
		if ( acceptedRecipes[j][0] == foundRecipes[i][0] ){
			acceptedRecipes[j][1] = parseInt(acceptedRecipes[j][1]) + parseInt(q);
			alreadyAdded = true;
			break;
		}
	}
	if ( !alreadyAdded )
		acceptedRecipes.add([foundRecipes[i][0], q]);
	drawAcceptedRecipes()
	findRecipes(true);
}

function getNameForIngr(ingr){
	for ( var i = 0; i < ingridients.length; i++ ){
		if ( ingridients[i][1] == ingr )
			return ingridients[i][0];
	}
	return "???";
}

function makeSelectBlock(){
	var str = "<table id=constr border=0><thead><tr><td colSpan=4>Добавить в конструктор</td></tr></thead><tbody>";
	str += "<tr><td align=right width=25%>Название:</td>";
	str += "<td colSpan=2><select id='ingrName' onChange=\"javascript:ingrChoose(this.value);\"><option value=''>-----</option>";
	for ( var i = 0; i < ingridients.length; i++ ){
		str += "<option value="+i+">"+ingridients[i][0]+"</option>";
	}
	str += "</select></td>";
	str += "<td width=25% rowSpan=3><img src='"+initvars.imageBlank+"' height=60 width=60 id='ingrPic'></td></tr>";
	str += "<tr><td align=right>ID:</td><td id='ingrId'></td>";
	str += "<td width=25% align=right>Изображение:</td></tr>";
	str += "<tr><td align=right>Количество:</td><td colSpan=2><input type=text class=in maxlength=5 style='width:80px;' id=ingrQuant onKeyPress=\"javascript:controlNumber();\"> шт.</td></tr>";
	str += "<tr><td>&nbsp;</td><td><input type=button class=b value=Добавить onClick=\"javascript:addIngr();\"></td>";
	str += "<td colSpan=2 align=center><input type=button class=b value='Рецепты' onClick=\"javascript:showAllRecipes(document.getElementById('ingrName').value);\"></td></tr>";
	str += "<tr><td colSpan=4 align=center><input type=button class=b value='Анализ содержимого рюкзака' onClick=\"javascript:showAnalyzeWindow();\"></td></tr>";
	str += "<tr><td colSpan=4 align=center><input type=button class=b value='Приступить к поиску рецептов' onClick=\"javascript:findRecipes();\"></td></tr>"; 
	str += "<tr><td colSpan=4 align=center><input type=button class=b value='Очистить конструктор' onClick=\"javascript:makeConstructor();\"></td></tr>";
	str += "<tr><td colSpan=4 align=center>&nbsp;</td></tr>";
	str += "<tr><td colSpan=2 align=right>Количество ингредиентов:</td><td colSpan=2><b>"+ingridients.length+"</b></td></tr>";
	str += "<tr><td colSpan=2 align=right>Количество рецептов:</td><td colSpan=2><b>"+recipes.length+"</b></td></tr>";
	str += "</tbody></table>";
	return str;
}

function makeConstructorItemsBlock(){
	var str = "<table id=constr><thead><tr><td>Добавлено в конструктор</td></tr></thead><tbody><tr><td>";
	str += "<div id=constrContent style='width:100%;height:200px;overflow:auto;'>";
	str += "</div></td></tr></tbody></table>";
	return str;
}

function makeAviableRecipesBlock(){
	var str = "<table id=constr><thead><tr><td>Возможные рецепты</td></tr></thead><tbody><tr><td>";
	str += "<div id=aviableRecipes style='width:100%;height:200px;overflow:auto;'>";
	str += "</div></td></tr></tbody></table>";
	return str;
}

function makeAcceptedRecipesBlock(){
	var str = "<table id=constr><thead><tr><td>Принятые рецепты</td></tr></thead><tbody><tr><td>";
	str += "<div id=acceptedRecipes style='width:100%;height:200px;overflow:auto;'>";
	str += "</div></td></tr></tbody></table>";
	return str;
}

function makeConstructor(){
	addedIngr = new Array();
	addedIngrKeys = new Array();
	selectedIngr = new Array();
	foundRecipes = new Array();
	acceptedRecipes = new Array();

	var str = "<table width='100%'><tbody><tr><td width='50%' valign=top>";
	str += makeSelectBlock();
	str += "</td><td width='50%' valign=top>";
	str += makeConstructorItemsBlock();
	str += "</td></tr><tr><td valign=top>";
	str += makeAviableRecipesBlock();
	str += "</td><td valign=top>";
	str += makeAcceptedRecipesBlock();
	str += "</tbody></table>";
	document.getElementById("constructor").innerHTML = str;
}
function prepareScriptStatus1(w, h, id, closingFunction){
	if ( !document.getElementById(id) ){
		var str = "<table id='"+id+"' class='info_table' style='width:"+w+"px;'>";
		str += "<tr><td class='info_header' id='"+id+"Header'></td></tr>";
		str += "<tr><td class='info_content'><div id='"+id+"Text' style='height:20px;width:100%;overflow:auto;text-align:center;'></div></td></tr>";
		if ( closingFunction != null ){
			str += "<tr><td align='center'>";
			str += "<input type='button' class='info_button' value='Закрыть' onClick=\"javascript:"+closingFunction+"\"></td></tr>";
		}
		str += "</table>";
		document.getElementById('baseDiv').innerHTML += str;
	}
	getCurrentWindowSize();
	document.getElementById(id).style.left = parseInt((winW-w)/2);
	document.getElementById(id).style.top = parseInt((winH-h)/2);
}

function showDialogWindow1(dialogName, dialogText, dialogHeight){
	prepareScriptStatus1(500, 400, "dialogWindowTable", "hideDialogWindow()");
	document.getElementById("dialogWindowTableHeader").innerHTML = dialogName;
	document.getElementById("dialogWindowTableText").style.height = dialogHeight;
	document.getElementById("dialogWindowTableText").innerHTML = dialogText;

	hideElementsIfNeeded("dialogWindowTable");
	document.getElementById("dialogWindowTable").style.display = "block";
}

