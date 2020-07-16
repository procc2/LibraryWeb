<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.data-list')" />
        <div class="separator mb-5" />
      </b-colxx>
    </b-row>
    <!--/.row-->

    <b-row>
      <b-colxx xxs="12">
        <b-card
          class="mb-4"
          :title="$route.params.user ? $route.params.user.name : $t('menu.permission')"
        >
          <b-form @submit.prevent="updatePermission">
            <b-form-group
              v-for="(permission,
                      index) in permissons"
              :key="index"
              label-cols="2"
              horizontal
              :label="permission.name"
            >
              <b-form-checkbox
                v-model="checkedPermissions"
                type="checkbox"
                :value="permission.id"
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
              <span class="label">{{ $t('forms.edit') }}</span>
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
            permissons: [],
            checkedPermissions: [],
            processing: false,
            submitError: null
        };
    },
    mounted() {
        var app = this;
        if (app.$route.params.user) app.checkedPermissions = app.$route.params.user.permissions.map(permission => {
                return permission.id;
            });
        axios
            .get("/api/v1/permissions")
            .then(res => {
                app.permissons = res.data;
            })
            .catch(e => {
                throw e;
            });
    },
    methods: {
        updatePermission() {
            var app = this;
            app.processing = true;
            event.preventDefault();

            var data = {
                'userId': app.$route.params.user.user_id,
                'permissions': app.checkedPermissions
            };
            axios.post("/api/v1/permissions", data)
            .then(() => {
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
};
</script>

<style></style>
