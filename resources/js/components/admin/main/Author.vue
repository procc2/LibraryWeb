<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <b-row>
        <b-colxx xxs="12">
          <h1>{{ $t("menu.data-list") }}</h1>
          <div class="top-right-button-container">
            <b-button
              variant="primary"
              size="lg"
              class="top-right-button"
              @click="$router.push('author/insert')"
            >
              {{ $t("pages.add-new") }}
            </b-button>
            <b-button-group>
              <b-dropdown
                split
                right
                class="check-button"
                variant="primary"
                @click="selectAll(true)"
              >
                <label
                  slot="button-content"
                  class="custom-control custom-checkbox pl-4 mb-0 d-inline-block"
                >
                  <input
                    v-shortkey="{
                      select: ['ctrl', 'a'],
                      undo: ['ctrl', 'd']
                    }"
                    class="custom-control-input"
                    type="checkbox"
                    :checked="isSelectedAll"
                    @shortkey="keymap"
                  >
                  <span
                    :class="{
                      'custom-control-label': true,
                      indeterminate: isAnyItemSelected
                    }"
                  >&nbsp;</span>
                </label>
                <b-dropdown-item>
                  {{ $t("pages.delete") }}
                </b-dropdown-item>
                <b-dropdown-item>
                  {{ $t("pages.another-action") }}
                </b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </div>
          <piaf-breadcrumb />
          <div class="mb-2 mt-2">
            <b-button
              v-b-toggle.displayOptions
              variant="empty"
              class="pt-0 pl-0 d-inline-block d-md-none"
            >
              {{ $t("pages.display-options") }}
              <i class="simple-icon-arrow-down align-middle" />
            </b-button>
            <b-collapse
              id="displayOptions"
              class="d-md-block"
            >
              <div class="d-block d-md-inline-block pt-1">
                <b-dropdown
                  id="ddown1"
                  :text="
                    `${$t('pages.orderby')} ${sort.label}`
                  "
                  variant="outline-dark"
                  class="mr-1 float-md-left btn-group"
                  size="xs"
                >
                  <b-dropdown-item
                    v-for="(order, index) in sortOptions"
                    :key="index"
                    @click="changeOrderBy(order)"
                  >
                    {{ order.label }}
                  </b-dropdown-item>
                </b-dropdown>

                <div
                  class="search-sm d-inline-block float-md-left mr-1 align-top"
                >
                  <b-input
                    v-model="search"
                    :placeholder="$t('menu.search')"
                  />
                </div>
              </div>
              <div class="float-md-right pt-1">
                <span class="text-muted text-small mr-1 mb-2">
                  of {{ authors.length }}</span>
                <b-dropdown
                  id="ddown2"
                  right
                  :text="`${perPage}`"
                  variant="outline-dark"
                  class="d-inline-block"
                  size="xs"
                >
                  <b-dropdown-item
                    v-for="(size, index) in pageSizes"
                    :key="index"
                    @click="changePageSize(size)"
                  >
                    {{ size }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </b-collapse>
          </div>
          <div class="separator mb-5" />
        </b-colxx>
      </b-row>
      <template v-if="isLoad">
        <b-card
          class="mb-4"
          :title="$t('table.bootstrap-custom')"
        >
          <b-table
            ref="custom-table"
            class="vuetable"
            sort-by="title"
            sort-desc.sync="false"
            selectable
            :fields="bootstrapTable.fields"
            :select-mode="bootstrapTable.selectMode"
            :current-page="currentPage"
            :per-page="perPage"
            :items="authors"
            :filter="search"
            selected-variant="primary"
            @row-selected="rowSelected"
          >
            <template v-slot:cell(index)="row">
              {{ row.index + 1 }}
            </template>
            <template v-slot:cell(author_name)="row">
              {{ row.item.author_name }}
            </template>
            <template v-slot:cell(edit)="row">
              <router-link
                :to="{
                  name: 'updateAuthor',
                  params: { id: row.item.author_id }
                }"
              >
                <a>
                  <span>
                    <svg
                      class="glyph stroked brush"
                      style="width: 20px;height: 20px;"
                    >
                      <use
                        xlink:href="#stroked-brush"
                      />
                    </svg>
                  </span>
                </a>
              </router-link>
            </template>
            <template v-slot:cell(delete)="row">
              <a
                href="javascript:void(0)"
                @click="deleteEntry(row.item.author_id)"
              >
                <span>
                  <svg
                    class="glyph stroked cancel"
                    style="width: 20px;height: 20px;"
                  >
                    <use xlink:href="#stroked-cancel" />
                  </svg>
                </span>
              </a>
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            size="sm"
            align="center"
            :total-rows="totalRows"
            :per-page="perPage"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right" />
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left" />
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start" />
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end" />
            </template>
          </b-pagination>

          <b-alert
            v-if="bootstrapTable.selected.length > 0"
            show
            variant="primary"
          >
            Selected Items :<br>
            <pre>{{ bootstrapTable.selected }}</pre>
          </b-alert>
        </b-card>
      </template>
      <template v-else>
        <div class="loading" />
      </template>
    </b-colxx>
  </b-row>
</template>

<script>
export default {
    data() {
        return {
            pageSizes: [4,
8,
12],
            isLoad: true,
            currentPage: 1,
            perPage: 5,
            totalRows: 0,
            selectedItems: [],
            sort: {
                column: "title",
                label: "Product Name"
            },
            sortOptions: [
                {
                    column: "title",
                    label: "Product Name"
                },
                {
                    column: "category",
                    label: "Category"
                },
                {
                    column: "status",
                    label: "Status"
                }
            ],
            bootstrapTable: {
                selected: [],
                selectMode: "multi",
                fields: [
                { key: "index", label: "#" },
                { key: "author_name", label: "Tên tác giả" },
                { key: "edit", label: "Sửa" },
                { key: "delete", label: "Xóa" }
            ],
            },
            authors: [],
            search: ""
        };
    },
    computed: {
        isSelectedAll() {
            return this.selectedItems.length >= this.authors.length;
        },
        isAnyItemSelected() {
            return (
                this.selectedItems.length > 0 &&
                this.selectedItems.length < this.items.length
            );
        }
    },
    watch: {
        search() {
            this.page = 1;
        }
    },
    mounted() {
        this.loadItems();
    },
    methods: {
        loadItems() {
            this.isLoad = false;

            axios
                .get("/api/v1/authors")
                .then(response => {
                    return response.data;
                })
                .then(res => {
                    this.authors = res;
                    this.totalRows = res.length;
                    this.isLoad = true;
                });
        },

        changePageSize(perPage) {
            this.perPage = perPage;
        },
        changeOrderBy(sort) {
            this.sort = sort;
        },
        addNewItem() {
            console.log("adding item : ", this.newItem);
        },
        selectAll(isToggle) {
            if (this.selectedItems.length >= this.items.length) {
                if (isToggle) this.selectedItems = [];
            } else {
                this.selectedItems = this.items.map(x => x.id);
            }
        },
        keymap(event) {
            switch (event.srcKey) {
                case "select":
                    this.selectAll(false);
                    break;
                case "undo":
                    this.selectedItems = [];
                    break;
            }
        },
        rowSelected(items) {
            this.bootstrapTable.selected = items;
        },
        deleteEntry(id) {
            this.$bvModal
                .msgBoxConfirm("Are you sure?")
                .then(res => {
                    if (res = true) {
                        var app = this;
                        axios
                            .delete("/api/v1/authors/" + id)
                            .then(resp => {
                                const index = app.authors.findIndex(
                                    author => author.author_id === id
                                );
                                if (~index) app.authors.splice(index, 1);
                            })
                            .catch(resp => {
                                alert("Could not delete company");
                            });
                    }
                })
                .catch(err => {
                    alert(err);
                });
        }
    }
};
</script>
