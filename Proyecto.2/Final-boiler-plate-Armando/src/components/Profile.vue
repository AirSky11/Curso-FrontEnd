<!-- <template>
    <div>
      <Nav />
      <h1>Name: {{ username }}</h1>
      <div class="user-profile">
        <div class="avatar">
          <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture">
          <input type="file" accept="image/*" @change="uploadAvatar" />
        </div>
        <div class="user-info">
          <label for="full-name">Nombre completo:</label>
          <input v-model="fullName" id="full-name" type="text">
          <label for="nickname">Apodo:</label>
          <input v-model="nickname" id="nickname" type="text">
          <label for="email">Email:</label>
          <input v-model="email" id="email" type="text">
          <label for="phone-number">Número de teléfono:</label>
          <input v-model="phoneNumber" id="phone-number" type="tel">
          <label for="country">País:</label>
          <input v-model="country" id="country" type="text">
        </div>
        <button @click="updateProfile">Guardar cambios</button>
      </div>
    </div>
  </template>
  <script setup>
    import { ref,  } from 'vue';
    import { useUserStore } from "../stores/user";
    import Nav from '../components/Nav.vue';
    const userStore = useUserStore();
    const { username, avatar_url } = userStore;
    const fullName = ref('');
    const nickname = ref('');
    const email = ref('');
    const phoneNumber = ref('');
    const country = ref('');
    const avatarUrl = ref('https://example.com/avatar.jpg'); // Reemplaza con la URL real del avatar del usuario
    // Función para cargar el avatar
    function uploadAvatar(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // Actualizar el avatar con la imagen cargada
        avatarUrl.value = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  </script> -->
  
  <template>
    
    <div class="container">
    <div class="row">
      <button @click="editToggleProfile">Edit Profile</button>
      <form v-if="inputUpdate" class="col-2" action="">
        
        <!-- <label for="">Full name</label>
        <input
          v-model="profile.full_name"
          placeholder="Full name"
          type="text"
        /> -->

        <label for="">Website</label>
        <input v-model="profile.website" placeholder="Website" type="text" />

        <label for="">Location</label>
        <input v-model="profile.location" placeholder="Location" type="text" />

        <button type="button" @click="updateProfile">Actualizar perfil</button>

      </form>
    </div>
  </div>
  </template>
  
  <script setup>
  import { supabase } from '../supabase'
  import { onMounted, ref, reactive, computed } from 'vue'
  import { useUserStore } from "../stores/user";

  const userStore = useUserStore();

  const emit = defineEmits(["updateProfileEmit"])

const props = defineProps({
  profile: {
    type: Object,
  },
  inputUpdate: {
    type: Boolean,
  },

});

const inputUpdate = ref(false);

const editToggleProfile = () => {
  inputUpdate.value = !inputUpdate.value;
};

const profile = computed(() => (userStore.profile ? userStore.profile : {}));

const updateProfile = async () => {
  const updatedProfileData = {
    full_name: profile.value.full_name,
    location: profile.value.location,
    website: profile.value.website,
  };
  console.log(updatedProfileData);
  const { data, error } = await supabase
    .from("profiles")
    .update(updatedProfileData)
    .eq("user_id", supabase.auth.user().id);
    editToggleProfile()
  if (error) {
    console.error(error);
  } else {
    console.log("Perfil actualizado correctamente");
    emit('updateProfileEmit', updatedProfileData)

  }

};

onMounted(async () => {
  await userStore.fetchUser();
});
</script>



  

 <style></style>