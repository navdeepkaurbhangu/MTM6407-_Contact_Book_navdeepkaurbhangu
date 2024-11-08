<template>
    <div>
      <h1>Contact Book</h1>
      <router-link to="/add-contact">
        <button>Add New Contact</button>
      </router-link>
      <ContactList :contacts="sortedContacts" />
    </div>
  </template>
  
  <script>
  import ContactList from '../components/ContactList.vue';
  
  export default {
    name: 'HomeView',
    components: {
      ContactList,
    },
    data() {
      return {
        contacts: [
          { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
          { firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com' },
          { firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com' },
          // Add more contacts here
        ],
      };
    },
    computed: {
      sortedContacts() {
        return this.contacts.sort((a, b) => {
          // Sort contacts alphabetically by last name
          return a.lastName.localeCompare(b.lastName);
        });
      },
    },
  };
  </script>
  