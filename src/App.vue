<template>
  <div class="app-container">
    <header>
      
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/add-contact" class="nav-link">Add Contact</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 Contact Book App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Container setup for sticky footer */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styling */
header {
  background-color: #629584;
  color: white;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight:bold;
}

nav {
  margin-top: 10px;
}

.nav-link {
  color: rgb(21, 20, 20);
  margin: 0 10px;
  text-decoration: none;
  font-weight:bold;
  font-size: larger;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Main content should expand to fill available space */
main {
  flex-grow: 1;
  padding: 20px;
}

/* Footer styling */
footer {
  background-color: #629584;
  color: #131111;
  text-align: center;
  padding: 10px;
  position: relative;
  font-size: larger;
  font-weight: bold;
  bottom: 0;
  width: 100%;
}
</style>
