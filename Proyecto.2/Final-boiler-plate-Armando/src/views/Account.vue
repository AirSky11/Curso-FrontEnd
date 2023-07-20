<!-- <template>
  <Nav />
  <h1>Name: {{ username }}</h1>
  
  <h1>Website: <a target="_blank" :href="website">{{ website }}</a>
  </h1>

  <h1>Location: {{ location }}</h1>
  
  <h1>Byography: {{ bio }}</h1>
  
  <img :src="avatar_url" v-if="avatar_url" alt="Profile picture" />
  <input @change="fileManager" type="file" />
  <button @click="uploadFile">Upload File</button>

  <Profile @updateProfileEmit="hundleUpdateProfile" />
</template>

<script setup>
  import { supabase } from '../supabase'
  import { ref, watch, onMounted } from 'vue'
  import { useUserStore } from "../stores/user";
  import Nav from '../components/Nav.vue';
  import Profile from "../components/Profile.vue";


  // Avatar section -> variables.

const file = ref();
const fileUrl = ref();


const fileManager = (event) => {
  file.value = event.target.files[0];
};

const hundleUpdateProfile = (updatedProfileData) => {
  username.value = updatedProfileData.full_name;
  website.value = updatedProfileData.website;
  location.value = updatedProfileData.location;
  bio.value = updatedProfileData.bio;
  avatar_url.value = updatedProfileData.avatar_url;
};

const uploadFile = async () => {
  if (!file.value) return;
  
  const { data } = await supabase
        .from('profiles')
        .select("avatar_url")
        .eq("user_id", supabase.auth.user().id);

  const deleteUrl = data[0].avatar_url
  // console.log(deleteUrl);
  const { error: urlDeleteError } = await supabase.storage
    .from("profile-img")
    .remove([deleteUrl]);

  if (urlDeleteError) {
    console.error("Error deleting file:", urlDeleteError);
    return;
  }
  console.log("File succesfully upload.");



  const timestamp = Date.now();
  const filePath = `profiles/${timestamp}-${file.value.name}`;
  const { error: uploadError } = await supabase.storage
    .from("profile-img")
    .upload(filePath, file.value);
  if (uploadError) {
    console.error("Error uploading file:", uploadError);
    return;
  }
  console.log("File succesfully upload.");

  const { data: urlData, error: urlError } = await supabase.storage
    .from("profile-img")
    .getPublicUrl(filePath);
  console.log(urlData);
  if (urlError) {
    console.error("Error getting public URL:", urlError);
    return;
  }

  fileUrl.value = urlData.publicURL;
  console.log(fileUrl.value);

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ avatar_url: fileUrl.value })
    .eq("user_id", supabase.auth.user().id);

  if (updateError) {
    console.error("Error updating profile:", updateError);
    return;
  }
  console.log("Profile successfully updated.");

  await userStore.fetchUser();
};




  const userStore = useUserStore();

  const loading = ref(false);
  const username = ref(null);
  const website = ref(null);
  const avatar_url = ref(null);
  const location = ref(null);
  const bio = ref(null)

  async function getProfile() {
  await userStore.fetchUser();
  username.value = userStore.profile.full_name;
  website.value = userStore.profile.website;
  location.value = userStore.profile.location;
  bio.value = userStore.profile.bio;
  avatar_url.value = userStore.profile.avatar_url;
}

  watch(
  () => userStore.profile,
  (updatedProfileData) => {
    avatar_url.value = updatedProfileData.avatar_url;
  },
  { deep: true }
);

  onMounted(() => {
    getProfile();
  });

</script> -->

<!-- <template>
  <Nav />
  <h1>Name: {{username}}</h1>
  <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture">
</template>
<script setup>
  import { supabase } from '../supabase'
  import { onMounted, ref, toRefs } from 'vue'
  import { useUserStore } from "../stores/user";
  import Nav from '../components/Nav.vue';

  const props = defineProps(['session'])
  const { session } = toRefs(props)

  const userStore = useUserStore();
  const loading = ref(false);
  const username = ref(null);
  const website = ref(null);
  const avatar_url = ref(null);
  onMounted(() => {
    getProfile();
  });
  async function getProfile() {
    await userStore.fetchUser();
    username.value = userStore.profile.username;
    avatar_url.value = userStore.profile.avatar_url;
  }
  async function signOut() {
    try {
      loading.value = true
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }
</script>

import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script> -->

<!-- <template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <label for="username">Name</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>


<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script> -->

<template>
  <Nav />
  <h1>Name: {{ username }}</h1>
  <h1>Website: <a target="_blank" :href="website">{{ website }}</a></h1>
  <h1>Location: {{ location }}</h1>
  <img :src="avatar_url" v-if="avatar_url" alt="Profile picture" />
  <input @change="fileManager" type="file" />
  <button @click="uploadFile">Upload File</button>

  <Profile @updateProfileEmit="hundleUpdateProfile" />

</template>



<script setup>
import { ref, onMounted, toRef, watch } from 'vue'
import Nav from '../components/Nav.vue'
import Profile from '../components/Profile.vue'
import { supabase } from '../supabase'
import { useUserStore } from '../stores/user'

const file = ref();
const fileUrl = ref();

const fileManager = (event) => {
  file.value = event.target.files[0];
};
// const session = ref(null)

const hundleUpdateProfile = (updatedProfileData) => {
  username.value = updatedProfileData.full_name;
  website.value = updatedProfileData.website;
  location.value = updatedProfileData.location;
  avatar_url.value = updatedProfileData.avatar_url;
};


const uploadFile = async () => {
  if (!file.value) return;
  
  const { data } = await supabase
        .from('profiles')
        .select("avatar_url")
        .eq("user_id", supabase.auth.user().id);

  const deleteUrl = data[0].avatar_url
  // console.log(deleteUrl);
  const { error: urlDeleteError } = await supabase.storage
    .from("profile-img")
    .remove([deleteUrl]);

  if (urlDeleteError) {
    console.error("Error deleting file:", urlDeleteError);
    return;
  }
  console.log("File succesfully upload.");

  const timestamp = Date.now();
  const filePath = `profiles/${timestamp}-${file.value.name}`;
  const { error: uploadError } = await supabase.storage
    .from("profile-img")
    .upload(filePath, file.value);
  if (uploadError) {
    console.error("Error uploading file:", uploadError);
    return;
  }
  console.log("File succesfully upload.");

  const { data: urlData, error: urlError } = await supabase.storage
    .from("profile-img")
    .getPublicUrl(filePath);
  console.log(urlData);
  if (urlError) {
    console.error("Error getting public URL:", urlError);
    return;
  }

  fileUrl.value = urlData.publicURL;
  console.log(fileUrl.value);

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ avatar_url: fileUrl.value })
    .eq("user_id", supabase.auth.user().id);

  if (updateError) {
    console.error("Error updating profile:", updateError);
    return;
  }
  console.log("Profile successfully updated.");

  await userStore.fetchUser();
};

const userStore = useUserStore();

const loading = ref(false);
const username = ref(null);
const website = ref(null);
const avatar_url = ref(null);
const location = ref(null);

async function getProfile() {
  await userStore.fetchUser();
  username.value = userStore.profile.full_name;
  website.value = userStore.profile.website;
  location.value = userStore.profile.location;
  avatar_url.value = userStore.profile.avatar_url;
}

watch(
  () => userStore.profile,
  (updatedProfileData) => {
    avatar_url.value = updatedProfileData.avatar_url;
  },
  { deep: true }
);

onMounted(() => {
  getProfile();
});


</script>


<style>
img {
  width: 200px;
  border-radius: 50%;
}
</style>