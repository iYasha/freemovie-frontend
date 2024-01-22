<template>
  <main>
    <div class="form-wrapper bg-gray rounded-1">
      <h1 class="text-5xl font-bold color-white text-center">Sign in<span class="color-red">.</span></h1>
      <form action="#">
        <div class="form-control">
          <input type="text" required>
          <label>Email</label>
        </div>
        <div class="form-control">
          <input type="password" required>
          <label>Password</label>
        </div>
        <button @click="console.log('watch trailer')" class="action-button w-full text-lg">Sign In</button>
      </form>
      <p>New to FreeMovie? <router-link to="register">Sign up now</router-link></p>
    </div>
  </main>
</template>

<style scoped>

.form-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 70px;
  width: 450px;
  transform: translate(-50%, -50%);
}

.form-wrapper form {
  margin: 25px 0 25px;
}

form .form-control {
  height: 50px;
  position: relative;
  margin-bottom: 16px;
}

.form-control input {
  height: 100%;
  width: 100%;
  background: #333;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  padding: 0 20px;
}

.form-control input:is(:focus, :valid) {
  background: #444;
  padding: 16px 20px 0;
}

.form-control label {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  color: #8c8c8c;
  transition: all 0.1s ease;
}

.form-control input:is(:focus, :valid) ~ label {
  font-size: 0.75rem;
  transform: translateY(-130%);
}


.form-wrapper a {
  text-decoration: none;
}

.form-wrapper a:hover {
  text-decoration: underline;
}

.form-wrapper :where(label, p, small, a) {
  color: #b3b3b3;
}

form .form-help :where(label, a) {
  font-size: 0.9rem;
}

.form-wrapper p a {
  color: #fff;
}


@media (max-width: 740px) {
  nav, .form-wrapper {
    padding: 20px;
  }

  nav a img {
    width: 140px;
  }

  .form-wrapper {
    width: 100%;
    top: 43%;
  }

  .form-wrapper form {
    margin: 25px 0 40px;
  }
}
</style>

<script>

export default {};
</script>