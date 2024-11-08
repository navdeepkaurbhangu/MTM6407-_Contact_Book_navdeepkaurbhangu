<template>
  <form @submit.prevent="saveContact">
    <div>
      <label for="firstName">First Name:</label>
      <input v-model="contact.firstName" required />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input v-model="contact.lastName" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input v-model="contact.email" required type="email" />
    </div>
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    initialContact: {
      type: Object,
      default: () => ({ firstName: '', lastName: '', email: '', id: Date.now().toString() })
    }
  },
  data() {
    return {
      contact: { ...this.initialContact }
    };
  },
  methods: {
    saveContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const existingIndex = contacts.findIndex(c => c.id === this.contact.id);
      if (existingIndex >= 0) {
        contacts[existingIndex] = this.contact;
      } else {
        contacts.push(this.contact);
      }
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    }
  }
};
</script>
