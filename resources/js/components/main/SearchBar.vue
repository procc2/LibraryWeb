<template>
    <!-- Start Search Popup -->
    <div
        class="brown--color box-search-content search_active block-bg close__top"
    >
        <form id="search_mini_form" class="minisearch" action="#">
            <div class="field__search">
                <input
                    type="text"
                    v-model="keyWord"
                    placeholder="Tìm kiếm toàn bộ sách tại đây..."
                />
                <div class="action">
                    <router-link
                        :to="{
                            name: 'grid',
                            query: {
                                keyWord
                            }
                        }"
                        ><i class="zmdi zmdi-search"></i
                    ></router-link>
                </div>
            </div>
        </form>
        <div class="close__wrap">
            <span>đóng</span>
        </div>
    </div>
    <!-- End Search Popup -->
</template>

<script>
export default {
    name: "SearchBar",
    data: function() {
        return {
            keyWord: ""
        };
    }
};
</script>

<style></style>
