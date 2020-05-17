<template>
    <div>
        <div
            id="menu-but"
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#menu"
        >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </div>
        <div id="menu" class="sidebar collapse navbar-collapse">
            <h2 class="h2-bar">Danh mục ấn phẩm</h2>
            <ul>
                <li v-for="category in categories" :key="category.category_id">
                    <router-link
                        :to="{
                            name: 'productFilter',
                            params: { categoryId: category.category_id }
                        }"
                        >{{ category.category_name }}</router-link
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // name : "CategorySidebar"
    data: function() {
        return {
            categories: []
        };
    },
    mounted() {
        var app = this;
        axios
            .get("/api/v1/categories")
            .then(function(res) {
                app.categories = res.data;
            })
            .catch(function(e) {
                throw e;
            });
    }
};
</script>

<style></style>
