<template>
  <div id="search" class="col-md-4 col-sm-12 col-xs-12">
    <form method="post" name="sform" action="/search" >
        
    
        <input type="submit" name="submit" value="">
        <input onfocus="searchFocus();" onblur="searchBlur();" type="text" name="stext" value="Tìm kiếm ấn phẩm...">
    </form>
</div>
</template>

<script>
export default {
    name : "SearchBar"
}
</script>

<style>

</style>