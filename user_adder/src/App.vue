<template>
	<div class="master-wrapper">
		<div id="app">
			<div class="box-wrapper">
				<button class="add-user-btn" @click="addUser">Add user</button>
				<user-list></user-list>
				<user-adder></user-adder>
			</div>
		</div>
	</div>
</template>

<script>

import userList from "./components/userList.vue";
import userAdder from "./components/userAdder.vue";

export default {

	components: {
		userList: userList,
		userAdder: userAdder
	},

	data () {
		return {
			addUserTriggered: null
		}
	},

	methods: {
		addUser () {
			this.addUserTriggered = true,
			this.$store.commit('addUserTriggered')
		}
	}

}

</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, button, sup, tt, var,
b, u, i, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Roboto' !important;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
	outline: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	margin-top: 50px;
}
ol, ul {
	list-style: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.box-wrapper {
	max-width: 800px;
	margin: 0 auto;
	border-radius: 3px;
	border: 1px solid #e6e0e0;
}
.box-wrapper .title {
	text-align: center;
	border-bottom: 1px solid #e6e0e0;
	font-weight: 700;
	padding: 12px 0px;
	background-color: #f2f2f2;
}

.add-user-btn {
	background-color: #5C6BC0;
	padding: 12px 16px;
	margin: 10px;
	font-size: 15px;
	color: #fff;
	font-weight: 500;
	border-radius: 3px;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	box-shadow: none;
	}
.add-user-btn:hover { box-shadow: 0px 3px 1px 0px rgba(0,0,0, 0.18); }
.add-user-btn:active, .add-user-btn:focus{ box-shadow: none; }

</style>
