<template>
  <main>
    <div class="form-wrapper bg-gray rounded-1">
      <h1 class="text-5xl font-bold color-white text-center">Sign up<span class="color-red">.</span></h1>
      <div class="form">
        <div class="form-control" :class="{'invalid-input': name_error}">
          <input v-model="name" type="text" required>
          <label>Name</label>
        </div>
        <p class="mb-3 color-red" v-if="name_error">
          {{ name_error.message }}
        </p>

        <div class="form-control" :class="{'invalid-input': email_error}">
          <input v-model="email" type="email" required>
          <label>Email</label>
        </div>
        <p class="mb-3 color-red" v-if="email_error">
          {{ email_error.message }}
        </p>

        <div class="form-control" :class="{'invalid-input': password_error}">
          <input v-model="password" type="password" required>
          <label>Password</label>
        </div>
        <p class="mb-3 color-red" v-if="password_error">
          {{ password_error.message }}
        </p>
        <button @click="register" class="action-button w-full text-lg">Create account</button>
      </div>
      <p class="mb-3 color-red" v-if="error && error.custom_code !== 4002">
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="color-red mr-1"/>
        {{ error.message }}
      </p>
      <p>Already have account? <router-link to="login">Sign in now</router-link></p>
    </div>
  </main>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      error: null,

      name_error: null,
      email_error: null,
      password_error: null,
    };
  },
  methods: {
    async register() {
      const authStore = useAuthStore();
      this.error = await authStore.register(this.name, this.email, this.password);

      if (this.error) {
        this.name_error = this.error.details.find((detail) => detail.field === 'name');
        this.email_error = this.error.details.find((detail) => detail.field === 'email');
        this.password_error = this.error.details.find((detail) => detail.field === 'password');
      }
      else {
        this.email_error = null;
        this.password_error = null;
      }
    },
  },
};
</script>


<style scoped>

.invalid-input {
  border: 1px solid red;
  border-radius: 4px;
}

.form-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 70px;
  width: 450px;
  transform: translate(-50%, -50%);
}

.form-wrapper .form {
  margin: 25px 0 25px;
}

.form .form-control {
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

.form .form-help :where(label, a) {
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

  .form-wrapper .form {
    margin: 25px 0 40px;
  }
}
</style>
