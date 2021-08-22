<template>
<div>
   <Nuxt />
</div>
</template>

<script>
export default {
head: {
  script: [
    {
      src:'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
      body:true
    },
    {
      src:'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
      body:true
    },
    {
      src:'js/headroom.min.js',
      body:true
    },
    {
      src:'js/jQuery.headroom.min.js',
      body:true
    },
    {
      src:'js/template.js',
      body:true
    },
    {
      src:'js/html5shiv.js',
    },
    {
      src:'js/respond.min.js',
    },
  ],

 }
}
</script>

<style scoped>

</style>


