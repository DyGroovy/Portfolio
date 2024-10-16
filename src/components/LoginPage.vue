<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'user' && this.password === 'user') {
        localStorage.setItem('auth', 'true');
        this.$router.push('/portfolio/profile'); 
        this.$emit('login-success');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0; /* Remove default margin */
  height: 100vh; /* Full height of the viewport */
  overflow: hidden; /* Prevent scroll bars */
  background-image: url('@/assets/images/kratos.gif'); /* Correct path */
  background-size: cover; /* Cover the entire viewport */
  background-position: center; /* Center the background */
  background-repeat: no-repeat; /* Prevent background repetition */
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; /* Use full height of the body */
  color: white; /* Change text color for visibility */
}

.login-box {
  background-color: rgba(238, 238, 238, 0.9); /* Slight transparency for better visibility */
  border: 2px solid #e9e9e9; 
  border-radius: 15px; 
  padding: 20px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  width: 300px; 
  text-align: center;
  margin-top: 5%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 93%; /* Full width of the parent container */
}

button {
  padding: 10px;
  background-color: #2d1dbd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
  margin: 0 auto;
}

button:hover {
  background-color: #c51b1b;
}

.error {
  color: red;
  margin-top: 15px;
}

h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 60px;
  font-weight: 500;
  color: black;
}
</style>
