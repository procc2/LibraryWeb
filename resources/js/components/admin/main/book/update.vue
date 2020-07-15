<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.book')" />
        <div class="separator mb-5" />
      </b-colxx>
    </b-row>
    <!--/.row-->

    <b-row v-if="isLoad">
      <b-colxx xxs="12">
        <b-card
          class="mb-4"
          :title="$t('forms.book.title')"
        >
          <b-form @submit.prevent="saveForm">
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.name')"
            >
              <b-form-input
                v-model="book.book_name"
                :placeholder="$t('forms.book.name')"
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.author.title')"
            >
              <v-select
                v-model="book.authors"
                multiple
                :placeholder="$t('forms.book.author.title')"
                label="author_name"
                :options="allAuthors"
                :reduce="author => author.author_id"
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.publisher')"
            >
              <v-select
                v-model="book.publisher_id"
                :placeholder="$t('forms.book.publisher')"
                label="publisher_name"
                :options="publishers"
                :reduce="
                  publisher => publisher.publisher_id
                "
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.remaining_stock.title')"
            >
              <b-input-group
                :append="$t('forms.book.remaining_stock.unit')"
                class="mb-3"
              >
                <b-form-input
                  v-model="book.remaining_stock"
                  type="number"
                  :placeholder="$t('forms.book.remaining_stock.title')"
                />
              </b-input-group>
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.file.title')"
            >
              <vue-dropzone
                id="dropzone"
                ref="myVueDropzone"
                :options="dropzoneOptions"
                @vdropzone-sending="sendingEvent"
                @vdropzone-success="onSuccess"
              >
                />
              </vue-dropzone>
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.special')"
            >
              <b-form-radio-group
                v-model="book.is_special"
                stacked
                class="pt-2"
                :options="horizontalFormRadios"
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.category')"
            >
              <v-select
                v-model="book.categoryIds"
                multiple
                :placeholder="$t('forms.book.category')"
                label="category_name"
                :options="categories"
                :reduce="
                  category => category.category_id
                "
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.summary')"
            >
              <b-input-group
                :prepend="$t('forms.book.summary')"
                class="mb-3"
              >
                <b-form-textarea
                  v-model="book.book_summary"
                  rows="2"
                  max-rows="6"
                  no-resize
                />
              </b-input-group>
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.description')"
            >
              <b-input-group
                :prepend="$t('forms.book.description')"
                class="mb-3"
              >
                <b-form-textarea
                  v-model="book.book_description"
                  rows="2"
                  max-rows="6"
                  no-resize
                />
              </b-input-group>
            </b-form-group>
            <b-button
              type="submit"
              variant="primary"
              class="mt-4"
              :disabled="processing"
              :class="{'btn-multiple-state btn-shadow': true,
                       'show-spinner': processing,
                       'show-success': !processing && submitError===false,
                       'show-fail': !processing && submitError }"
            >
              <span class="spinner d-inline-block">
                <span class="bounce1" />
                <span class="bounce2" />
                <span class="bounce3" />
              </span>
              <span class="icon success">
                <i class="simple-icon-check" />
              </span>
              <span class="icon fail">
                <i class="simple-icon-exclamation" />
              </span>
              <span class="label">{{ $t('forms.create') }}</span>
            </b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
    <template v-else>
      <div class="loading" />
    </template>
  </div>
</template>
<script>
import VueDropzone from 'vue2-dropzone';

import {
    imageUrl,
    ebookUrl
} from "../../../../constants/config";
export default {
    components: {
        'vue-dropzone': VueDropzone,
    },
    data() {
        return {
            isLoad: true,
            book: {
                book_id: "",
                book_name: "",
                book_image: "",
                authors: [],
                author_id: "",
                publisher_id: "",
                remaining_stock: 1,
                is_special: 0,
                categoryIds: [],
                book_summary: "",
                book_description: "",
                images: [],
                ebook: []
            },
            categories: [],
            publishers: [],
            allAuthors: [],
            processing: false,
            submitError: null,
            dropzoneOptions: {
                autoQueue: false,
                url: 'api/files',
                thumbnailHeight: null,
                thumbnailWidth: null,
                maxFilesize: 40,
                acceptedFiles: "image/*,.pdf,.epub,.azw3",
                previewTemplate: this.dropzoneTemplate(),
                dictDefaultMessage: this.$t('forms.book.file.upload-message')
            },
            horizontalFormRadios: [
              { text: this.$t('forms.yes-radio'), value: 1 },
              { text: this.$t('forms.no-radio'), value: 0 },
      ],
        };
    },
    async mounted() {
        let app = this;
        app.isLoad = false;
        let { bookId } = app.$route.params;
        await axios.get("/api/v1/categories").then(res => {
            app.categories = res.data;
        });
        await axios.get("/api/v1/authors").then(res => {
            app.allAuthors = res.data;
        });
        axios.get("/api/v1/publishers").then(res => {
            app.publishers = res.data;
            app.isLoad = true;
        });

        if (bookId == parseInt(bookId, 10)) {
            app.isLoad = false;
            app.book_id = bookId;
            await axios
                .get("/api/v1/books/" + bookId)
                .then(resp => {
                    app.book = resp.data;
                    app.book.images.forEach(image => {
                      var file = { size: 0.3, name: image.name };
                      var url = imageUrl + image.name;
                      app.$refs.myVueDropzone.manuallyAddFile(file, url); 
                    });
                    app.book.ebooks.forEach(ebook => {
                      var file = { size: 0.3, name: ebook.name };
                      var url = ebookUrl + ebook.name;
                      app.$refs.myVueDropzone.manuallyAddFile(file, url);
                    });
                      app.isLoad = true;
                })
                .catch(e => {
                    throw e;
                });
              
        }
                    
        
    },
    methods: {
        async saveForm() {
            var app = this;
            app.processing = true;
            event.preventDefault();
            
            var { book } = app;
            if (
                app.$route.params.bookId ==
                parseInt(app.$route.params.bookId, 10)
            ) {
                await axios
                    .put("/api/v1/books/" + app.$route.params.bookId, book)
                    .then(() => {
                        app.processing = false;
                    })
                    .catch(e => {
                        app.processing = false;
                        app.submitError = true;
                        throw e;
                    });

            } else {
                await axios
                    .post("/api/v1/books", book)
                    .then(resp => {
                      book.book_id = resp.data.book_id;
                    })
                    .catch(e => {
                        app.processing = false;
                        app.submitError = true;
                        throw e;
                    });
                
            }
            if (app.$refs.myVueDropzone.dropzone.getAcceptedFiles().length) {
                await app.$refs.myVueDropzone.dropzone.getAcceptedFiles().forEach(async file => {
                  await app.$refs.myVueDropzone.dropzone.enqueueFile(file);
                });
            } else {
              this.onSuccess();
            }
                  

        },
        dropzoneTemplate() {
            return `<div class="dz-preview dz-file-preview mb-3">
                  <div class="d-flex flex-row "> <div class="p-0 w-30 position-relative">
                      <div class="dz-error-mark"><span><i></i>  </span></div>
                      <div class="dz-success-mark"><span><i></i></span></div>
                      <div class="preview-container">
                        <img data-dz-thumbnail class="img-thumbnail border-0" />
                        <i class="simple-icon-doc preview-icon"></i>
                      </div>
                  </div>
                  <div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
                    <div> <span data-dz-name /> </div>
                    <div class="text-primary text-extra-small" data-dz-size /> </div>
                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                  </div>
                  <a href="#" class="remove" data-dz-remove> <i class="glyph-icon simple-icon-trash"></i> </a>
                </div>
        `;
        },
        sendingEvent (file, xhr, formData) {
        formData.append('bookId', this.book.book_id);
      },
      onSuccess() {
        this.isLoad = true;
        this.$router.push({ path: "/book" });
      }
    }
};
</script>
