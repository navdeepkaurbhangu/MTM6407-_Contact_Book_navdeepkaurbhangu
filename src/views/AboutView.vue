<template>
    <div class="about-container">
      <div class="about-content">
        <h1>Welcome to the Contact Book App</h1>
        <p>
          This contact book application is designed to help you organize and manage your personal and professional contacts effortlessly.
          Built with the powerful Vue.js framework and Vite, this app provides a smooth, responsive user experience.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>📇 <strong>Easy Contact Management</strong>: Add, edit, and delete contacts quickly and easily.</li>
          <li>🔍 <strong>Search Functionality</strong>: Find contacts by name, email, or phone number.</li>
          <li>📁 <strong>Organized Layout</strong>: View all your contacts in a clean, organized format.</li>
          <li>💾 <strong>Local Storage</strong>: All data is saved locally, ensuring privacy and persistence.</li>
        </ul>
        <h2>Technology Stack</h2>
        <p>
          This app leverages modern technologies for a fast, scalable, and responsive experience:
        </p>
        <ul>
          <li><strong>Vue.js</strong> - For building interactive and reusable UI components.</li>
          <li><strong>Vite</strong> - A development environment that offers fast build times and HMR (Hot Module Replacement).</li>
          <li><strong>Local Storage API</strong> - To persist contact data in your browser securely.</li>
        </ul>
        <p>We hope this app serves as a helpful tool in managing your contact information effectively.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView'
  };
  </script>
  
  <style scoped>
  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-color: #f4f6f8;
    min-height: 80vh;
  }
  
  .about-content {
    max-width: 800px;
    padding: 30px;
    background: #b1c299;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    color: #2c3e50;
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  h2 {
    color: #2c3e50;
    font-size: 1.8em;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    font-size: 1.1em;
    color: #333;
  }
  
  ul li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  
  ul li strong {
    color: #34495e;
  }
  
  ul li::before {
    content: '•';
    color: #3498db;
    font-weight: bold;
    display: inline-block;
    width: 20px;
    margin-right: 10px;
  }
  </style>
  