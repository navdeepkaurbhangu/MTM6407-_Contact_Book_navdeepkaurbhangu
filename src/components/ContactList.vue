<template>
    <div>
      <button @click="addNewContact">Add New Contact</button>
      <ul>
        <li v-for="contact in sortedContacts" :key="contact.id">
          <router-link :to="'/contact/' + contact.id">
            {{ contact.lastName }}, {{ contact.firstName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactList',
    data() {
      return {
        contacts: JSON.parse(localStorage.getItem('contacts')) || []
      };
    },
    computed: {
      sortedContacts() {
        return this.contacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
      }
    },
    methods: {
      addNewContact() {
        this.$router.push('/add');
      }
    }
  };
  </script>
  