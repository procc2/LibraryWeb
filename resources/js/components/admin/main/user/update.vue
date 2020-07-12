<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.user')" />
        <div class="separator mb-5" />
      </b-colxx>
    </b-row>
    <!--/.row-->

    <b-row>
      <b-colxx xxs="12">
        <b-card
          class="mb-4"
          :title="$t('forms.user.title')"
        >
          <b-form @submit.prevent="saveForm">
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.user.email')"
            >
              <b-form-input
                v-model="user.email"
                :placeholder="$t('forms.user.email')"
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.user.name')"
            >
              <b-form-input
                v-model="user.name"
                :placeholder="$t('forms.user.name')"
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.book.role.title')"
            >
              <b-form-radio-group
                v-model="currentRole"
                stacked
                class="pt-2"
                :options="horizontalFormRadios"
              />
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
  </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                roles: []
            },
            currentRole: "",
            allRoles: [],
            processing: false,
            submitError: null,
            horizontalFormRadios: [
              { text: this.$t('forms.user.role.developer'), value: 1 },
              { text: this.$t('forms.user.role.admin'), value: 2 },
              { text: this.$t('forms.user.role.customer'), value: 3 },
              { text: this.$t('forms.user.role.student'), value: 4 },
              { text: this.$t('forms.user.role.staff'), value: 5 },
      ],
        };
    },
    mounted() {
        let app = this;
        let { id } = app.$route.params;
        if (typeof id !== "undefined") {
            app.id = id;
            axios
                .get("/api/v1/users/" + id)
                .then(resp => {
                    app.user = resp.data;
                    app.currentRole = app.user.roles[0].id;
                })
                .catch(e => {
                    throw e;
                });
        }
        axios
            .get("/api/v1/roles")
            .then(res => {
                app.allRoles = res.data;
            })
            .catch(e => {
                throw e;
            });
    },
    methods: {
        saveForm() {
            event.preventDefault();
            var app = this;
            app.processing = true;
            event.preventDefault();
            
            var { user } = app;
            user.roles = [app.currentRole];
            if (typeof app.$route.params.id !== "undefined") {
                axios
                    .put(
                        "/api/v1/users/" + app.$route.params.id,
                        user
                    )
                    .then(resp => {
                        app.processing = false;
                        app.$router.push({ path: "/user" });
                    })
                    .catch(e => {
                        app.processing = false;
                        app.submitError = true;
                        throw e;
                    });
            } 
        }
    }
};
</script>
