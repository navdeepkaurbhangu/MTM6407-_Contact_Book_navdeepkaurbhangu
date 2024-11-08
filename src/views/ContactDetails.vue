<template>
  <div v-if="contact">
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <router-link to="/">Back to Contact List</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: null,
    };
  },
  mounted() {
    this.loadContact();
  },
  methods: {
    loadContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const contactId = parseInt(this.$route.params.id);
      this.contact = contacts.find(contact => contact.id === contactId);
    },
  },
  watch: {
    '$route.params.id': 'loadContact', // Reload contact if the route changes
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
