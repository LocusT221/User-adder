<template>
	<div class="user-form-wrapper">
		<form action="submit" @submit.prevent="validateBeforeSubmit">
			<div class="form-group" :class="{'has-error': errors.has('firstName') }">
				<label for="firstName">First name:</label>
				<input name="firstName" type="text" class="form-input" v-model="userData.firstName" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('firstName') }">
				<span v-show="errors.has('firstName')" class="help is-danger">{{ errors.first('firstName') }}</span>
			</div>
			<div class="form-group">
				<label for="lastName">Last name:</label>
				<input name="lastName" type="text" class="form-input" v-model="userData.lastName" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lastName') }">
				<span v-show="errors.has('lastName')" class="help is-danger">{{ errors.first('lastName') }}</span>
			</div>
			<div class="form-group">
				<label for="email">Email:</label>
				<input name="email" type="email" class="form-input" v-model="userData.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }">
				<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
			</div>
			<div class="form-group">
				<label for="username">Username:</label>
				<input name="username" type="text" class="form-input" v-model="userData.username" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('username') }">
				<span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
			</div>
			<div class="form-group">
				<label for="password">Password:</label>
				<input name="password" type="password" class="form-input" v-model="userData.password" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }">
				<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
			</div>
			<button class="submit-btn">Next</button>
		</form>
	</div>
</template>

<script>

	export default {

		data() {
			return {
				userData: {
					firstName:'',
					lastName:'',
					email:'',
					username:'',
					password: '',
					tags: ''
				},
				formSubmitted: false
			}
		},

		methods: {
			validateBeforeSubmit() {
				this.$validator.validateAll().then((result) => {
					if (result) {
						this.$emit('passedObject', this.userData)
						this.$store.commit('formSubmitted', true);
						this.$store.commit('activeComponent', 'tags');
						return;
					} else {
						console.log('write what is wrong');
					}
				});
			}
		}
		
	}

</script>

<style scoped>

	.user-form-wrapper { padding: 40px; }
	form { display: flex; flex-flow: row wrap; position: relative; }
	.form-group {
		display: flex;
		width: 30%;
		padding: 1.666666%;
		flex-direction: column;
	}
	label { font-weight: 700; padding-bottom: 6px; }
	input {
		height: 26px;
		border: 1px solid #e6e0e0;
		padding-left: 5px;
		color: #666666;
	}
	input.is-danger { border: 1px solid #e21e1e; }
	span.is-danger { font-size: 12px; color: #e21e1e; margin-top: 5px; }
	.submit-btn {
		background-color: #5C6BC0;
		position: absolute;
		bottom: 10px;
		right: 10px;
		padding: 12px 16px;
		font-size: 15px;
		color: #fff;
		font-weight: 500;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.15s ease-in-out;
		box-shadow: none;
	}
	.submit-btn:hover { box-shadow: 0px 3px 1px 0px rgba(0,0,0, 0.18); }
	.submit-btn:active, .submit-btn:focus{ box-shadow: none; }

</style>