<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<main class="news-category container">
      <div class="initial-screen flex">
        <div class="container flex">
          <h1>ОБ ОТЕЛЕ</h1>
        </div>
      </div>
      <div class="news container">
        <div class="speedbar"><a href="/">Главная / </a><span>Новости</span></div>
      </div>
      <div class="container flex">
        <div class="about-text">
          <div class="right--side"><img src="" alt="">
            <p>«Воздушный экспресс» – сеть комфортных отелей для гостей одного из самых современных аэропортов мира - «Шереметьево». Отели «Воздушный экспресс» расположены непосредственно в терминалах «Аэроэкспресс» и терминале «Е», что создает дополнительное удобство размещения для всех пассажиров «Шереметьево». </p>
            <p>Один отель находится на 5 этаже <a href="index.html">терминала «Аэроэкспресс»</a>, в шаговой доступности к терминалам «D», «F» и «E» и поезду «Аэроэкспресс», главной транспортной железнодорожной артерией, соединяющей аэропорт и центр Москвы. </p>
            <p>Второй отель «Воздушный экспресс» расположен <a href="index.html">в транзитной зоне терминала «E»</a>, за паспортным контролем. Расположение отеля в терминале «Е» является единственным и уникальным в России. Отели позволяют пассажирам всех авиакомпаний отдохнуть перед полетом, не выходя за пределы аэропорта!</p>
          </div>
          <div class="left--side"><img src="" alt="">
            <p>Отели «Воздушный экспресс» предлагают 112 комфортных номеров, включая просторные и комфортабельные номера первого и бизнес- класса, выполненные по индивидуальному дизайну. Также к услугам гостей: бесплатный Wi-Fi, 24-часовое обслуживание в номерах, помощь в регистрации на рейс, информация о рейсах, кафе, ресторанах, банках, магазинах аэропорта и вызов такси.</p>
            <p>Быстрое и качественное обслуживание наших гостей, почасовая оплата проживания, уникальное расположение, безопасность и высокопрофессиональный сервис отелей «Воздушный экспресс» находятся вне конкуренции в зоне аэропорта «Шереметьево». Станьте нашим гостем сегодня!</p>
          </div>
        </div>
      </div>
      <div class="additional-info">
        <div class="container flex">
          <div class="additional-info__left-side"><img src="images/aircraft.jpg" alt=""></div>
          <div class="additional-info__right-side">
            <h2>Работаем для вас</h2>
            <div class="flex wrap">
              <p> <span>2 </span>отеля внутри аэропорта</p>
              <p> <span>112</span>номеров</p>
              <p>От <span>1 </span>минуты пешком от зоны посадки </p>
              <p> <span>70 </span>человек в команде</p>
              <p> <span>10 </span>лет успешной работы</p>
              <p> <span>63 000 </span>гостей в год</p>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <div class="container"></div>
      </div>
    </main>


<div class="news-detail">
	<?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arResult["DETAIL_PICTURE"])):?>
		<img
			class="detail_picture"
			border="0"
			src="<?=$arResult["DETAIL_PICTURE"]["SRC"]?>"
			width="<?=$arResult["DETAIL_PICTURE"]["WIDTH"]?>"
			height="<?=$arResult["DETAIL_PICTURE"]["HEIGHT"]?>"
			alt="<?=$arResult["DETAIL_PICTURE"]["ALT"]?>"
			title="<?=$arResult["DETAIL_PICTURE"]["TITLE"]?>"
			/>
	<?endif?>
	<?if($arParams["DISPLAY_DATE"]!="N" && $arResult["DISPLAY_ACTIVE_FROM"]):?>
		<span class="news-date-time"><?=$arResult["DISPLAY_ACTIVE_FROM"]?></span>
	<?endif;?>
	<?if($arParams["DISPLAY_NAME"]!="N" && $arResult["NAME"]):?>
		<h3><?=$arResult["NAME"]?></h3>
	<?endif;?>
	<?if($arParams["DISPLAY_PREVIEW_TEXT"]!="N" && $arResult["FIELDS"]["PREVIEW_TEXT"]):?>
		<p><?=$arResult["FIELDS"]["PREVIEW_TEXT"];unset($arResult["FIELDS"]["PREVIEW_TEXT"]);?></p>
	<?endif;?>
	<?if($arResult["NAV_RESULT"]):?>
		<?if($arParams["DISPLAY_TOP_PAGER"]):?><?=$arResult["NAV_STRING"]?><br /><?endif;?>
		<?echo $arResult["NAV_TEXT"];?>
		<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?><br /><?=$arResult["NAV_STRING"]?><?endif;?>
	<?elseif(strlen($arResult["DETAIL_TEXT"])>0):?>
		<?echo $arResult["DETAIL_TEXT"];?>
	<?else:?>
		<?echo $arResult["PREVIEW_TEXT"];?>
	<?endif?>
	<div style="clear:both"></div>
	<br />
	<?foreach($arResult["FIELDS"] as $code=>$value):
		if ('PREVIEW_PICTURE' == $code || 'DETAIL_PICTURE' == $code)
		{
			?><?=GetMessage("IBLOCK_FIELD_".$code)?>:&nbsp;<?
			if (!empty($value) && is_array($value))
			{
				?><img border="0" src="<?=$value["SRC"]?>" width="<?=$value["WIDTH"]?>" height="<?=$value["HEIGHT"]?>"><?
			}
		}
		else
		{
			?><?=GetMessage("IBLOCK_FIELD_".$code)?>:&nbsp;<?=$value;?><?
		}
		?><br />
	<?endforeach;
	foreach($arResult["DISPLAY_PROPERTIES"] as $pid=>$arProperty):?>

		<?=$arProperty["NAME"]?>:&nbsp;
		<?if(is_array($arProperty["DISPLAY_VALUE"])):?>
			<?=implode("&nbsp;/&nbsp;", $arProperty["DISPLAY_VALUE"]);?>
		<?else:?>
			<?=$arProperty["DISPLAY_VALUE"];?>
		<?endif?>
		<br />
	<?endforeach;
	if(array_key_exists("USE_SHARE", $arParams) && $arParams["USE_SHARE"] == "Y")
	{
		?>
		<div class="news-detail-share">
			<noindex>
			<?
			$APPLICATION->IncludeComponent("bitrix:main.share", "", array(
					"HANDLERS" => $arParams["SHARE_HANDLERS"],
					"PAGE_URL" => $arResult["~DETAIL_PAGE_URL"],
					"PAGE_TITLE" => $arResult["~NAME"],
					"SHORTEN_URL_LOGIN" => $arParams["SHARE_SHORTEN_URL_LOGIN"],
					"SHORTEN_URL_KEY" => $arParams["SHARE_SHORTEN_URL_KEY"],
					"HIDE" => $arParams["SHARE_HIDE"],
				),
				$component,
				array("HIDE_ICONS" => "Y")
			);
			?>
			</noindex>
		</div>
		<?
	}
	?>
</div>