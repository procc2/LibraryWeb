<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.role')" />
        <div class="separator mb-5" />
      </b-colxx>
    </b-row>
    <!--/.row-->

    <b-row>
      <b-colxx xxs="12">
        <b-card
          class="mb-4"
          :title="$t('forms.role.title')"
        >
          <b-form @submit.prevent="saveForm">
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.role.name')"
            >
              <b-form-input
                v-model="role.name"
                :placeholder="$t('forms.role.name')"
              />
            </b-form-group>
            <b-form-group
              label-cols="2"
              horizontal
              :label="$t('forms.role.slug')"
            >
              <b-form-input
                v-model="role.slug"
                :placeholder="$t('forms.role.slug')"
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
            role: {
                name: "",
                slug: ""
            },
            processing: false,
            submitError: null
        };
    },
    mounted() {
        let app = this;
        let { id } = app.$route.params;
        if (typeof id !== "undefined") {
            app.id = id;
            axios
                .get("/api/v1/roles/" + id)
                .then(resp => {
                    app.role = resp.data;
                })
                .catch(e => {
                    throw e;
                });
        }
    },
    methods: {
        saveForm() {
            var app = this;
            app.processing = true;
            event.preventDefault();
            
            var { role } = app;
            if (typeof app.$route.params.id !== "undefined") {
                axios
                    .put(
                        "/api/v1/roles/" + app.$route.params.id,
                        role
                    )
                    .then(resp => {
                        app.processing = false;
                        app.$router.push({ path: "/role" });
                    })
                    .catch(e => {
                        app.processing = false;
                        app.submitError = true;
                        throw e;
                    });
            } else {
                axios
                    .post("/api/v1/roles", role)
                    .then(resp => {
                        app.processing = false;
                        app.$router.push({ path: "/role" });
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
