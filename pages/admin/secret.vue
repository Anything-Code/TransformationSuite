<template>
  <div class="container">
    <h1>Nur für Admins</h1>
    
    <NuxtLink to="/admin">
      Zurück
    </NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
