<template>
	<div class="tags-wrapper">
		<vue-tags-input v-model="tag" :tags="tags" @tags-changed="newTags => { tags = newTags }" />
		<button class="save-tags-btn" @click="addTags">Save</button>
	</div>
</template>

<script>
	
	import Vue from 'vue';
	import VueTagsInput from '@johmun/vue-tags-input';

	export default {

		props: {
			userInformations: {
				type: Object
			}
		},

		components: {
			VueTagsInput
		},

		data () {
			return {
				tag: '',
				tags: []
			}
		},

		methods: {
			addTags: function () {
				this.userInformations.tags = [];
				this.tags.forEach( element => {
					this.userInformations.tags.push(element.text);
				});
				Vue.set(this.userInformations);
				this.$store.commit('activeComponent', 'userForm');
				this.$store.commit('userData', this.userInformations);
				this.$store.commit('addUserTriggered', false);
				this.$store.commit('formSubmitted', true);
				

			}
		}
	}

</script>

<style>
	.box-wrapper { position: relative; }
	.tags-wrapper { 
		margin-top: 40px; 
		max-width: 400px;
		margin: 40px auto 80px;
		border: 1px solid #e6e0e0;
	}
	.tags-wrapper .ti-input { border: transparent; }
	.save-tags-btn {
		background-color: #5C6BC0;
		position: absolute;
		bottom: 40px;
		right: 50px;
		padding: 12px 16px;
		font-size: 15px;
		color: #fff;
		font-weight: 500;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.15s ease-in-out;
		box-shadow: none;
	}
</style>
