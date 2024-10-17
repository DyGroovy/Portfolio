<template>
  <div id="app">
    <nav v-if="!isLoginPage">
      <ul>
        <li><router-link to="/portfolio/profile">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase">Showcase</router-link></li>
        <li><router-link to="/portfolio/contact">Contact</router-link></li>
        <li><router-link to="/portfolio/creative">Creative</router-link></li>
      </ul>
    </nav>

    <router-view @login-success="handleLogin"></router-view>
    
    <FooterView />
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'App',
  components: {
    FooterView
  },
  data() {
    return {
      isAuthenticated: localStorage.getItem('auth') === 'true'
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    }
  },
  methods: {
    handleLogin() {
      this.isAuthenticated = true; 
      localStorage.setItem('auth', 'true');
    }
  },
  watch: {
    '$route'() {
      this.isAuthenticated = localStorage.getItem('auth') === 'true';
    }
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  padding-top: 60px; 
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  background-color: black; 
  padding: 10px 20px; 
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%; 
  z-index: 1000; 
  display: flex; 
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex; 
  justify-content: space-around;
  margin: 0; 
  flex: 1; 
}

nav ul li {
  display: inline; 
}

nav ul li a {
  color: white; 
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  transition: background-color 0.3s; 
}

nav ul li a:hover {
  background-color: #333; 
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column; 
    align-items: center;
    padding: 10px 0; 
  }
  
  nav ul li {
    width: 100%; 
    text-align: center; 
  }
  
  nav ul li a {
    padding: 12px; 
    font-size: 16px; 
  }
}

@media (max-width: 480px) {
  nav ul li a {
    font-size: 14px; 
    padding: 10px; 
  }

  body {
    padding-top: 70px; 
  }
}
</style>
