<template>
	<div class="switcher-wrapper" :class="toggleActiveComponent">
		<div class="form-circle">
			<p>1</p>
		</div>
		<div class="middle-line"></div>
		<div class="tags-circle">
			<p>2</p>
		</div>
	</div>
</template>

<script>

	export default {

		data () {
			return {

			}
		}, 
		
		computed: {
			toggleActiveComponent() {
				return {
					'formActive': this.$store.getters.activeComponent == 'userForm',
					'tagsActive': this.$store.getters.activeComponent == 'tags'
				}
			}
		}
	}

</script>

<style scoped>
	p { font-weight: 700; font-size: 14px; }
	.switcher-wrapper {
		width: 400px;
		padding-top: 50px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: space-between
	}
	.switcher-wrapper.formActive .form-circle, .switcher-wrapper.tagsActive .tags-circle {
		border: 2px solid #5C6BC0;
		box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.22);
	}
	.middle-line {
		height: 3px;
		background-color: #e8e3e3;
		width: 100%;
	}
	.form-circle, .tags-circle { 
		height: 34px; 
		width: 34px; 
		border-radius: 50%;
		border: 2px solid #867f7f;
		color: #867f7f;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1 0 auto;
		overflow: hidden;
	}
</style>
