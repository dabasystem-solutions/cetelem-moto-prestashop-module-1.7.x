<script type="text/javascript">
var server_url_cetelem='{$server_url_cetelem|escape:'html':'UTF-8'}';
var center_code='{$center_code|escape:'html':'UTF-8'}';
var calc_type='{$calc_type|escape:'html':'UTF-8'}';
var text_color_cetelem='{$text_color_cetelem|escape:'html':'UTF-8'}';
var font_size_cetelem='{$font_size_cetelem|escape:'html':'UTF-8'}';
var cetelem_amount_block='{$cetelem_amount_block|escape:'html':'UTF-8'}';
{if isset($productPriceC)}
	var productPriceC='{$productPriceC|escape:'html':'UTF-8'}';
{/if}
{if isset($cetelemCombPrices) && !empty($cetelemCombPrices)}
 	var cetelemCombPrices=[];
	{foreach from=$cetelemCombPrices item='cprice'}
	cetelemCombPrices.push({$cprice});
	{/foreach}
{else}
	var cetelemCombPrices=false;
{/if}
{if isset($months_cetelem_display) && !empty($months_cetelem_display)}
	var cetelem_months={$months_cetelem_display};
{else}
	var cetelem_months=false;
{/if}
</script>