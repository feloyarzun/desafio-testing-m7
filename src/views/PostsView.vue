<template>
  <div class="posts">
    <h1>Vista de Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostsViewVue',
  data() {
    return {
      posts: []
    }
  }
}
</script>
