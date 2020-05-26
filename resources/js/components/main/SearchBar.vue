<template>
  <!-- <div id="search" class="col-md-4 col-sm-12 col-xs-12">
    <form method="post" name="sform" action="/search" >
        
    
        <input type="submit" name="submit" value="">
        <input onfocus="searchFocus();" onblur="searchBlur();" type="text" name="stext" value="Tìm kiếm ấn phẩm...">
    </form>
</div> -->
<!-- Start Search Popup -->
		<div class="brown--color box-search-content search_active block-bg close__top">
			<form id="search_mini_form" class="minisearch" action="#">
				<div class="field__search">
					<input type="text" v-model="keyWord" placeholder="Search entire store here...">
					<div class="action">
						<router-link
                                :to="{
                                    name: 'grid',
									params : {
										keyWord
									}
                                }"
                            ><i class="zmdi zmdi-search"></i></router-link>
					</div>
				</div>
			</form>
			<div class="close__wrap">
				<span>close</span>
			</div>
		</div>
		<!-- End Search Popup -->
</template>

<script>
export default {
	name : "SearchBar",
	data: function(){
		return {
			keyWord:''
		};
	}
}
</script>

<style>

</style>