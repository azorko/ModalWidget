Modal Widget

-Instantiation: var modalWidget = new Modal.Widget(modalOpen);

-The below HTML and CSS classes must be present in your HTML file for the modal to be styled correctly:

<body>
	
	<div class="page-wrapper">
		<input class="modal-open" type="button" value="Open Modal">
	</div>
	
	<div class="modal-backdrop"></div>
	
	<div class="modal">
		<span class="modal-close">&times;</span>
	</div>
	
</body>

-Include both modal.css and modal.js files in your file directory

-Includes demo of how to use in index.html file