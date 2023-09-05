<template>
  <div class="contact-box">
    <div class="info-table__cell-2">
      <form>
        <label>Name </label>
        <input type="text" required>
        <br/>
        <label>E-mail </label>
        <input type="email" required>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 20px;
}

label {
  display: inline-block;
  margin: 5px 0 5px;
  font-size: .85rem;
}

input {
  display: block;
  padding: 5px 6px;
  width: 100%;
  box-sizing: border-box;

}


</style>
