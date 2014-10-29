// ================================================================================
// DATA
// ================================================================================

'use strict';

// Grab user's github data via the GitHub API
var githubData = getData('https://api.github.com/users/uniqname');

// Global context for Handlebars templates in `src/templates`
var data = {
	githubData: githubData,



	// ------------------------------------------
	// CUSTOMIZE BELOW
	// ------------------------------------------

	theme: {
		mainColor: '#fead4c',
		specialTransition: 'zoom'
	},
	title: 'Web Components and Componentized Architecture',
	subtitle: 'Componets are coming!',
	greetingText: 'I &#10084; Components',
	goodbyeText: 'U &#10084; Components 2?',
	sections: [
		{
			title: 'Code modularization',
			subtitle: 'This is a subtitle',
			slides: [
				{
					title: 'Principles',
					uniqueContent: '
						<ul>
							<li>Single Responsibility Principle (SRP)</li>
							<li>Detail Abstraction</li>
							<li>Reuse</li>
							<li>Composition</li>
							<li>Syndication</li>
						</ul>
					'
				},
				{
					title: 'SRP',
					uniqueContent: '
						<p>Provides module cohesion.</p>
						<pre class="fragment"><code>
						var makeList = function (items) {
							var list = items ? items.slice() : [];

							list.addItem = function (item) { ... };
							list.removeItem = function (itemID) { ... };

							totalNumOfLists++; // Not SRP.

							return list;

						}
						</code></pre>
					'
				},
				{
					title: 'Detail Abstraction',
					uniqueContent: '
						<p>Black Box Development.</p>
						<pre class="fragment"><code>
	var makeList = (function () {

		// These are abstracted implementation details
		var lastID = 0,
			idGen = function () {
				return listID++;
			},

			listMaker = function (items) {
				var list = items ? items.slice() : [];

				list.addItem = function (item) { ... };
				list.removeItem = function (itemID) { ... };
				list.id = idGen();

				return list;
			};

		// Only the listMaker function is exposed.
		return listMaker;
		})();

	}
						</code></pre>
					'
				},
				{
					title: 'Reuse',
					uniqueContent: '
						<p>Object Instantiation / Functinoal Development.</p>
						<pre class="fragment"><code>
	var makeList = function (items) {
		var list = items ? items.slice() : [];
		
		...
		//This function will always generate a new object.
		return list;
	};
						</code></pre>
					'
				},
				{
					title: 'Composition',
					uniqueContent: '
						<p>Additive Complexity</p>
						<pre class="fragment"><code>
	var makeTask = function (item) { ... },

		//makeList is composed of several makeTask calls.
		makeList = function (tasks) { 
			return tasks.map(function (task) {
				return makeTask(task);
			});
		};
						</code></pre>
					'
				},
				{
					title: 'Syndication',
					uniqueContent: '
						<p>Portability / Consumability</p>
						<pre class="fragment"><code>
						var makeTask = function (item) { ... },

							//makeList.js
							module.exports = function (tasks) { 
								return tasks.map(function (task) {
									return makeTask(task);
								});
							};
						</code></pre>
					'
				},
				{
					title: 'Syndication',
					uniqueContent: '
						<p>Portability / Consumability</p>
						
						<p>One could make this consumable by anyone at ICS. Simply include a `package.json` and publish</p>
						<pre class="fragment"><code class="bash">
						~/my-module/$ npm publish
						</code></pre>
					'
				}
			]
		},
		{
			title: 'JS Modules',
			subtitle: '',
			slides: [
				{
					title: 'AMD',
					uniqueContent: '
						<p>Needs a library like requirejs to inject moduels</p>
						<pre class="fragment"><code>
						//moduleA.js

						define(["dependencyA"] , function (depA) {
						    return function () {};
						});
						</code></pre>
						<small class="fragment">(Old and busted)</small>
					'
				},
				{
					title: 'CommonJS',
					uniqueContent: '
						<p>Needs a library like Browserify for Front-end components</p>
						<pre class="fragment"><code>
						//moduleB.js

						var depB = require("dependencyB");

					    module.exports = function () {
					     	return depB();
					    };
						</code></pre>
						<small class="fragment">(Native module syntax in Node)</small>
					'
				},
				{
					title: 'ES6 Modules',
					uniqueContent: '
						<p>Needs a transpiler until browser support improves</p>
						<pre class="fragment"><code>
						//moduleC.js

						import * as depC from "dependencyC";

						var moduleC = function () {
							return depC.method();	
						}

						export function moduleC;
						</code></pre>
						<small class="fragment">(Native browser module syntax)</small>
					'
				}
			]
		},
		{
			title: 'Componentized Architecture',
			subtitle: 'Web Components & web components',
			slides: [
				{
					title: 'Principles of Componentized Architecture',
					uniqueContent: '
						<ul>
							<li class="fragment">Single Responsibility Principle</li>
							<li class="fragment">Detail Abstraction</li>
							<li class="fragment">Reuse</li>
							<li class="fragment">Composition</li>
							<li class="fragment">Syndication</li>
						</ul>
					'
				}
			]
		},
		{
			title: 'Web Components',
			subtitle: 'Big "W", big "C"',
			slides: [
				{
					title: 'Core Technologies',
					uniqueContent: '
						<ul class="part-counterpart">
							<li><span data-fragment-index="1" class="fragment part">Custom Elements</span> <span data-fragment-index="5" class="fragment counterpart">SRP</span></li>
							<li><span data-fragment-index="2" class="fragment" part>Shadow DOM</span> <span data-fragment-index="6" class="fragment counterpart">Detail Abstraction</span></li>
							<li><span data-fragment-index="3" class="fragment part">Templates</span> <span data-fragment-index="7" class="fragment counterpart">Reuse</span></li>
							<li><span data-fragment-index="10" class="fragment part">HTML</span> <span data-fragment-index="8" class="fragment counterpart">Composition</span></li>
							<li><span data-fragment-index="4" class="fragment part">HTML Imports</span> <span data-fragment-index="9" class="fragment counterpart">Syndication</span></li>
						</ul>
					'
				},
				{
					title: 'Can I Haz?!?!',
					uniqueContent: '
						<img src="images/canihaz.jpg" alt="Can I Haz Awesum?" />
					'
				},
				{
					title: 'CanIUse',
					uniqueContent: '
						<p><a href="//caniuse.com/#search=web%20components">caniuse.com/#search=web%20components</a></p>

						<iframe src="//caniuse.com/#search=web%20components" frameborder="0"></iframe>
					'
				},
				{
					title: 'Polyfill',
					uniqueContent: '
						<p><a href="https://github.com/Polymer/webcomponentsjs">WebComponents.js</a></p>

						<img src="images/polymer-logo.svg" alt="Polymer" />
					'
				}
			]
		}
	]
};
