<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">
      Accesibility
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">
          Questionnaire
        </b-nav-item>
        <b-nav-item href="#">
          Onderzoek
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">
            Profile
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
    color: #EBF4FA;
}
</style>
