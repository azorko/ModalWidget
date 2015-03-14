(function (rootObj) {
	
	var Carousel = rootObj.Carousel = rootObj.Carousel || {};
	
	var Widget = Carousel.Widget = function (openEl) {
	this.doc = rootObj.document;
  this.openEl = openEl;
  this.setupCarousel();	
}

Widget.prototype.setupCarousel = function() {
	this.body = this.doc.getElementsByTagName("body")[0];
	var modalClose = this.doc.getElementsByClassName("modal-close")[0];
  var modalBackdrop = this.doc.getElementsByClassName("modal-backdrop")[0];
	this.openEl.addEventListener("click", this.openModal.bind(this));
	modalClose.addEventListener("click", this.closeModal.bind(this));
	modalBackdrop.addEventListener("click", this.closeModal.bind(this));
}

Widget.prototype.openModal = function () {
	this.body.classList.add("modal-active");
};

Widget.prototype.closeModal = function () {
	this.body.classList.remove("modal-active");
};

})(this);