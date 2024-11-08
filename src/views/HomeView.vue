<template>
  <div class="home-container">
    <h2>Your Contacts</h2>
    <div v-if="contacts.length" class="contacts-list">
      <div v-for="(contact, index) in contacts" :key="index" class="contact-card">
        <div class="contact-details">
          <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
          <p><strong>Email:</strong> {{ contact.email }}</p>
          <p><strong>Phone:</strong> {{ contact.phone }}</p>
        </div>
        <div class="contact-actions">
          <button @click="editContact(index)" class="edit-button">Edit</button>
          <button @click="deleteContact(index)" class="delete-button">Delete</button>
        </div>
      </div>
    </div>
    <p v-else>No contacts available. Add a contact to get started!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: []
    };
  },
  created() {
    this.loadContacts();
  },
  methods: {
    loadContacts() {
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (storedContacts) {
        this.contacts = storedContacts;
      }
    },
    deleteContact(index) {
      this.contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    },
    editContact(index) {
      // Navigate to an edit page or open an edit form for the contact
      this.$router.push({ name: 'EditContact', params: { index } });
    }
  }
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.contacts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.contact-card {
  background-color: #F7EFE5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-details h3 {
  margin: 0;
  color: #007acc;
}

.contact-details p {
  color: #555;
  margin: 5px 0;
}

.contact-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.edit-button,
.delete-button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.edit-button {
  background-color: #6A9C89;
  color: white;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #005fa3;
}

.delete-button {
  background-color: #e74c3c;
  color: white;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>
