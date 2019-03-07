<template>
	<div class="user-adder-wrapper" v-if="this.$store.getters.addUserTriggered">
		<h2 class="title">{{ toggleTitle }}</h2>
		<switcher></switcher>
		<keep-alive>
			<component :is="activatedComponent" :userInformations="dataObject" @passedObject="recieveFormData"></component>   
		</keep-alive>
	</div>
</template>

<script>

	import userForm from "./userForm.vue";
	import tags from "./tags.vue";
	import switcher from "./switcher.vue";

	export default {

		components: {
			userForm: userForm,
			tags: tags,
			switcher: switcher
		},

        data () {
            return {
                activeComponent: this.$store.getters.activeComponent,
                title: 'Add user',
                dataObject: {}
            }
        },

        computed: {
            activatedComponent() {
                return this.$store.getters.activeComponent
            },

            toggleTitle() {
                if (this.$store.getters.activeComponent == 'userForm') {
                	return this.title
                } else {
                	return 'Add tags'
                }
            }
        },

        methods: {
        	recieveFormData: function (data) {
        		this.dataObject = data;
        	}
        }
	}

</script>

<style scoped>

</style>
