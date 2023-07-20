<!-- COMPONENTE BOILERPLATE -->
 
  <template>

  <div class="container">
    <h3 class="header-title">Log In to ToDo App</h3>

    <form @submit.prevent="signIn" class="form-sign-in">
      <div class="form">
      <div class="form-input">
          <label class="input-field-label">E-mail</label>
          <input 
            type="email"
            class="input=field"
            placeholder="example@gmial.com"
            id="email"
            v-model="email"
            required
            />
      </div>
      <div class="form-input">
        <label class="input-field-label">Password</label>
        <input 
        type="password"
        class="input-field"
        placeholder="**********"
        id="password"
        v-model="password"
        required
        />
      </div>

        <button class="button" type="submit">Sign In</button>
      </div>
    </form>
    
    <p>Don't have an account? <PersonalRouter :route="route" :buttonText="buttonText" class="sign-up-link"/></p>
  </div>

</template>


<script setup>
import PersonalRouter from "./PersonalRouter.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { ref, reactive } from "vue"

// Route Variables
const route = "/auth/signup";
const buttonText = "Sign Up";

// Variables para conectarme al form (login)
const email = ref("")
const password = ref("")

// Router to push user once SignedUp to Home
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // Escribir comentario, tarea para casa
    await useUserStore().signIn(email.value, password.value);
    // Redirects user to the homeView
    redirect.push({ path: "/" });
    
  } catch (error) {
    alert(error)
  }
};
</script>

<style></style>

