import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Martin Will',
		// In the following fields you can either give a single string,
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Continuous Integration -> Automatic building and testing of code changes',
			'Continuous Deployment -> Automatic deployment of validated code to production'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Gitlab CI/CD',
		// What do you want to learn in this workshop? 
		expectations: [
			'Get an overview over different CI/CD tools',
			'Know the basics about Jenkins',
			'Understand how to integrate CI/CD in a project',
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'Play the Tuba',
			'Go swimming',
			'Play board games'
		]
	}
});
