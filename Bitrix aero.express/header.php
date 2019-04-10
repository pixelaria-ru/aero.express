<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeTemplateLangFile(__FILE__);?>


<!DOCTYPE html>
<html lang="ru">
  <head>
	<?$APPLICATION->ShowHead();?>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="robots" content="none">
	  <link rel="stylesheet" href="<?echo SITE_TEMPLATE_PATH;?>/css/style.css">
    <title><?$APPLICATION->ShowTitle();?> </title>
  </head>
  <body>

<?$APPLICATION->ShowPanel();?>
    <header class="header container flex">
      <div class="header__left-side flex"><a class="logotype flex" href="index.html"><span>Воздушный <br>Экспресс</span></a>
        <div class="telephone"><a href="tel:+78005500242">8 800 550-02-42</a></div>
      </div>
      <div class="header__right-side flex">
        <div class="lang"><span class="active">RU</span><span>EN</span></div>
        <button class="button button--pink">Забронировать номер</button>
        <button class="menu">
          <p>МЕНЮ</p><span></span>
        </button>
      </div>
      <div class="main-menu">

		 <nav class="navigation">
			<?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"top", 
	array(
		"COMPONENT_TEMPLATE" => "top",
		"ROOT_MENU_TYPE" => "top",
		"MENU_CACHE_TYPE" => "N",
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MAX_LEVEL" => "1",
		"CHILD_MENU_TYPE" => "left",
		"USE_EXT" => "N",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "N"
	),
	false
);?>

        </nav>
        <nav class="navigation-bottom">
          <ul class="menu-list flex">
            <li class="list-item active"><a href="about.html">Об отеле</a></li>
            <li class="list-item"><a href="#">Акции</a></li>
            <li class="list-item"><a href="#">Правила</a></li>
            <li class="list-item"><a href="#">Цены</a></li>
            <li class="list-item"><a href="news-category.html">Новости</a></li>
          </ul>
        </nav>
      </div>
    </header>

