<template>
  <div class="add-contact-container">
    <div class="contact-form-card">
      <h2>Add New Contact</h2>
      <form @submit.prevent="addContact">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="firstName" required />
        </div>
        
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="lastName" required />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" v-model="phone" />
        </div>
        
        <button type="submit" class="submit-button">Add Contact</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddContact',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    addContact() {
      const newContact = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
      };

      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));

      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.add-contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.contact-form-card {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #eafadc;
  text-align: center;
}

.contact-form-card h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: white;
  background-color: #6A9AB0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #005fa3;
}
</style>
