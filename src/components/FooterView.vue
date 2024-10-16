<template>
  <footer>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
};
</script>

<style scoped>
footer {
  background-color: black; /* Background color for the footer */
  color: white; /* Text color */
  text-align: center; /* Center align text */
  padding: 10px 0; /* Vertical padding */
  position: fixed; /* Fix position */
  bottom: 0; /* Align to bottom */
  left: 0; /* Align to left */
  width: 100%; /* Full width */
  z-index: 1000; /* Ensure it stays above other content */
}
</style>
