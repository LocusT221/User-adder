<template>
	<div class="user-list-wrapper">
		<ul class="user-list">
			<li v-for="user in userData" class="user">
				<p class="users-name">User's name: <span>{{ user.firstName }} {{ user.lastName }}</span></p>
				<p class="users-mail">Email: <a href="#">{{ user.email }}</a></p>
				<p class="users-username">Username: {{ user.username }}</p>
				<p class="users-password">Password: {{ user.password }}</p>
				<p class="users-tags">Tags: {{ user.tags }}</p>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	
	computed: {
		userData () {
			return this.$store.getters.userArr;
		}
	}

}

</script>

<style scoped>

	.user-list { margin: 10px 0px 20px; }
	.user-list .user { padding: 10px;}
	.user-list .user:nth-of-type(odd) { background-color: #5c6bc073; }
	.user-list .user p { margin-bottom: 5px; }

</style>
