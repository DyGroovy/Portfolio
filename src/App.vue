<template>
  <div id="app" :class="{ 'login-page': isLoginPage }">
    <nav v-if="!isLoginPage">
      <div class="logo">Pangilinan, Dylan Ranze Z.</div>
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
  font-family: 'Georgia', serif; 
  color: #333;
  padding-top: 60px; 
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  background-color: #000000; 
  padding: 15px 30px; 
  position: fixed; 
  top: 0; 
  left: 0;
  width: 98%; 
  z-index: 1000; 
  display: flex; 
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.logo {
  font-size: 28px; 
  font-weight: bold;
  color: #ffffff; 
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex; 
  gap: 30px; 
  margin: 0; 
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px; 
  transition: color 0.3s, text-shadow 0.3s; 
  border-radius: 5px; 
}

nav ul li a:hover {
  color: #6e6e6e; 
  text-shadow: 0 0 5px rgba(0, 86, 179, 0.5); 
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
