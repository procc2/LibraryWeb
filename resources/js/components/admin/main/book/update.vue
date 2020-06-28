<template>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div class="row">
            <ol class="breadcrumb">
                <li>
                    <a href="#">
                        <svg class="glyph stroked home">
                            <use xlink:href="#stroked-home" />
                        </svg>
                    </a>
                </li>
                <li class="active"></li>
            </ol>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Thêm ấn phẩm mới</h1>
            </div>
        </div>
        <!--/.row-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Thêm ấn phẩm mới</div>
                    <div class="panel-body">
                        <form
                            v-on:submit="saveForm()"
                            enctype="multipart/form-data"
                            role="form"
                        >
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Tên ấn phẩm</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="book.book_name"
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Tác giả</label>
                                    <v-select
                                        placeholder="Tìm tên tác giả"
                                        label="author_name"
                                        v-model="book.author_id"
                                        :options="authors"
                                        :reduce="author => author.author_id"
                                    />
                                </div>

                                <div class="form-group">
                                    <label>Tên nhà xuất bản</label>
                                    <v-select
                                        placeholder="Tìm nhà xuất bản"
                                        label="publisher_name"
                                        v-model="book.publisher_id"
                                        :options="publishers"
                                        :reduce="
                                            publisher => publisher.publisher_id
                                        "
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Số lượng</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model="book.remaining_stock"
                                        required
                                    />
                                </div>

                                <ImageUpload
                                    ref="imageUpload"
                                    v-bind:image="
                                        book.images[0]
                                            ? '/dist/book/image/' +
                                              book.images[0].name
                                            : null
                                    "
                                />
                                <ebookUpload ref="ebookUpload" />
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Ấn phẩm đặc biệt</label>
                                    <div class="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                v-model="book.is_special"
                                                id="optionsRadios1"
                                                value="1"
                                            />Có
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                v-model="book.is_special"
                                                id="optionsRadios2"
                                                value="0"
                                                checked
                                            />Không
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>Danh mục</label>
                                    <v-select
                                        multiple
                                        placeholder="Lựa chọn danh mục ấn phẩm"
                                        label="category_name"
                                        v-model="book.categoryIds"
                                        :options="categories"
                                        :reduce="
                                            category => category.category_id
                                        "
                                    />
                                    <!-- @input="category => dd(category)"
                       <select v-model="book.category_id" class="form-control">
                    <option value="unselect" selected>Lựa chọn danh mục ấn phẩm</option>
                    <option
                      v-for="(category,index) in categories"
                      :key="index"
                      :value="category.category_id"
                    >{{category.category_name}}</option>
                  </select>-->
                                </div>
                                <div class="form-group">
                                    <label>Thông tin chi tiết ấn phẩm</label>
                                    <textarea
                                        class="form-control"
                                        rows="3"
                                        v-model="book.book_description"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-primary"
                                name="submit"
                            >
                                Thêm mới
                            </button>
                            <button
                                type="reset"
                                class="btn btn-default"
                                name="reset"
                            >
                                Làm mới
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- /.col-->
        </div>
        <!-- /.row -->
    </div>
</template>
<script>
import ImageUpload from "./imageUpload";
import ebookUpload from "./ebookUpload";
export default {
    components: {
        ImageUpload,
        ebookUpload
    },
    mounted() {
        let app = this;
        let bookId = app.$route.params.bookId;

        axios.get("/api/v1/categories").then(function(res) {
            app.categories = res.data;
        });
        axios.get("/api/v1/authors").then(function(res) {
            app.authors = res.data;
        });
        axios.get("/api/v1/publishers").then(function(res) {
            app.publishers = res.data;
        });

        if (bookId == parseInt(bookId, 10)) {
            app.book_id = bookId;
            axios
                .get("/api/v1/books/" + bookId)
                .then(function(resp) {
                    console.log(resp);
                    app.book = resp.data;
                    // app.book.has_old_image = app.book.images ? true :false;
                })
                .catch(function() {
                    alert("Could not load your book");
                });
        }
    },
    data: function() {
        return {
            book: {
                book_name: "",
                book_image: "",
                author_id: "",
                publisher_id: "",
                remaining_stock: 1,
                is_special: 0,
                categoryIds: [],
                book_description: "",
                images: []
            },
            categories: [],
            publishers: [],
            authors: []
        };
    },
    methods: {
        async saveForm() {
            event.preventDefault();
            var app = this;
            var book = app.book;
            if (
                app.$route.params.bookId ==
                parseInt(app.$route.params.bookId, 10)
            ) {
                await axios
                    .put("/api/v1/books/" + app.$route.params.bookId, book)
                    .then(async function(resp) {
                        console.log(resp);
                        if (book.images) {
                            await app.$refs.imageUpload.uploadImage(
                                app.$route.params.bookId
                            );
                            // .then(() => app.$router.push({ path: "/book" }));
                        }

                        // if(book.ebooks.length)
                            await app.$refs.ebookUpload
                                .uploadEbook(app.$route.params.bookId)
                            // .then(res => {
                            //     console.log(res);
                            // });

                        // else app.$router.push({ path: "/book" });
                        console.log("done")
                        app.$router.push({ path: "/book" })
                    })
                    .catch(function(e) {
                        throw e;
                        alert("Could not edit this book");
                    });

            } else{
                await axios
                    .post("/api/v1/books", book)
                    .then(async function(resp) {
                        console.log(resp);
                        if (book.images) {
                            await app.$refs.imageUpload.uploadImage(
                                resp.data.book_id
                            );
                            // .then(() => app.$router.push({ path: "/book" }));
                        }
                        await app.$refs.ebookUpload
                                .uploadEbook(app.$route.params.bookId)

                        app.$router.push({ path: "/book" })
                    })
                    .catch(function(e) {
                        throw e;
                        alert("Could not create new book");
                    });
                
            }
        }
    }
};
</script>
