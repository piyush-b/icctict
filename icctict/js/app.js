var App=Ember.Application.create({

LOG_TRANSITIONS:true

    
});
App.Router.map(function(){
    
   this.route('committee',{path:'/committee'});
     this.route('callforpapers',{path:'/callforpapers'});
     this.route('guidlines',{path:'/guidlines'});
    this.route('program',{path:'/program'});
    this.route('registration',{path:'/registration'});
    this.route('contact',{path:'/contact'});
     this.route('sponsor',{path:'/sponsor'});
	 this.route('keynote',{path:'/keynote'});
    
});

if (document.addEventListener !== "undefined") {
  // Not IE
  document.addEventListener('click', checkSelection, false);
} else {
  // IE
  document.attachEvent('onclick', checkSelection);
}

function checkSelection() {
    var sel = {};
    if (window.getSelection) {
        // Mozilla
        sel = window.getSelection();
    } else if (document.selection) {
        // IE
        sel = document.selection.createRange();
    }

    // Mozilla
    if (sel.rangeCount) {
        sel.removeAllRanges();
        return;
    }
   
    // IE
    if (sel.text > '') {
        document.selection.empty();
        return;
    } 

}

