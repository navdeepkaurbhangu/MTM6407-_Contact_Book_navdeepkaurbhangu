<template>
    <form @submit.prevent="editContact">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" required />
      <button type="submit">Save Changes</button>
    </form>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
  
      onMounted(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const contact = contacts.find(c => c.id === parseInt(route.params.id));
        firstName.value = contact.firstName;
        lastName.value = contact.lastName;
        email.value = contact.email;
      });
  
      const editContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const updatedContacts = contacts.map(c =>
          c.id === parseInt(route.params.id)
            ? { ...c, firstName: firstName.value, lastName: lastName.value, email: email.value }
            : c
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        router.push(`/contact/${route.params.id}`);
      };
  
      return { firstName, lastName, email, editContact };
    },
  };
  </script>
  