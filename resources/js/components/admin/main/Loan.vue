<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <b-row>
        <b-colxx xxs="12">
          <h1>{{ $t("menu.data-list") }}</h1>
          <div class="top-right-button-container">
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
                <b-dropdown-item>{{ $t("pages.delete") }}</b-dropdown-item>
                <b-dropdown-item>{{ $t("pages.another-action") }}</b-dropdown-item>
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

                <div class="search-sm d-inline-block float-md-left mr-1 align-top">
                  <b-input
                    v-model="search"
                    :placeholder="$t('menu.search')"
                  />
                </div>
              </div>
              <div class="float-md-right pt-1">
                <span class="text-muted text-small mr-1 mb-2">of {{ loans.length }}</span>
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
            :items="loans"
            :filter="search"
            selected-variant="primary"
            @row-selected="rowSelected"
          >
            <template v-slot:cell(index)="row">
              {{ row.index + 1 }}
            </template>
            <template v-slot:cell(loan_is_active)="row">
              <b-badge
                class="mb-1 badge-pill"
                :variant="status[row.item.loan_is_active].variant"
              >
                {{ status[row.item.loan_is_active].label }}
              </b-badge>
            </template>
            <template v-slot:cell(show_details)="row">
              <b-button
                size="sm"
                class="mr-2"
                @click="row.toggleDetails"
              >
                {{ row.detailsShowing ? "Hide" : "Show" }}
                Details
              </b-button>
            </template>

            <template v-slot:cell(approve)="row">
              <a
                href="javascript:void(0)"
                @click="
                  approve(
                    row.item.id,
                    row.item.loan_is_active,
                    1
                  )
                "
              >
                <span>
                  <svg
                    class="glyph stroked checkmark"
                    style="width: 20px;height: 20px;"
                  >
                    <use xlink:href="#stroked-checkmark" />
                  </svg>
                </span>
              </a>
              <a href="javascript:void(0)">
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
            <template v-slot:cell(return_book)="row">
              <a
                href="javascript:void(0)"
                @click="
                  approve(
                    row.item.id,
                    row.item.loan_is_active,
                    2
                  )
                "
              >
                <span>
                  <svg
                    class="glyphicon glyphicon-download"
                    style="width: 20px;height: 20px;"
                  >
                    <use xlink:href="#stroked-download" />
                  </svg>
                </span>
              </a>
            </template>

            <template v-slot:row-details="row">
              <b-card
                v-for="(detail, index) in row.item.details"
                :key="index"
              >
                <b-row class="mb-2">
                  <b-col
                    sm="3"
                    class="text-sm-right"
                  >
                    <b>Sách:</b>
                  </b-col>
                  <b-col class="text-sm-left">
                    {{
                      detail.book.book_name
                    }}
                  </b-col>
                </b-row>

                <b-row
                  v-if="detail.book.is_special"
                  class="mb-2"
                >
                  <b-col
                    sm="3"
                    class="text-sm-right"
                  >
                    <b>Sản phẩm đặc biệt</b>
                  </b-col>
                </b-row>
              </b-card>
              <b-button
                size="sm"
                @click="row.toggleDetails"
              >
                Hide Details
              </b-button>
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
            Selected Items :
            <br>
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
        label: "Số đơn mượn"
      },
      sortOptions: [
        {
          column: "title",
          label: "Số đơn mượn"
        },
        {
          column: "loan",
          label: "loan"
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
          { key: "user.name", label: "Tên người mượn", sortable: true },
          { key: "loan_date", label: "Ngày mượn", sortable: true },
          { key: "loan_is_active", label: "Trạng thái", sortable: true },
          { key: "approve", label: "Phê duyệt" },
          { key: "return_book", label: "Trả sách" },
          { key: "show_details", label: "Xem thông tin đơn mượn" }
        ]
      },
      status: {
        0: { label: "Pending", variant: "outline-primary" },
        1: { label: "Running", variant: "outline-success" },
        2: { label: "Close", variant: "outline-light" }
      },
      loans: [],
      search: ""
    };
  },
  computed: {
    isSelectedAll() {
      return this.selectedItems.length >= this.loans.length;
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
        .get("/api/v1/loans")
        .then(response => {
          return response.data;
        })
        .then(res => {
          this.loans = res;
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
    approve(loanId, currentStatus, status) {
            var app = this;
            if (currentStatus != 2) axios
                    .put("/api/v1/loans/" + loanId, {
                        status
                    })
                    .then(res => {
                        console.log(res);
                        app.loadItems();
                    })
                    .catch(e => {
                        throw e;
                    });
        },
  }
};
</script>
