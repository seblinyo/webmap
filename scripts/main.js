// ======== On screen load howToModal
$(window).load(function(){        
    $('#welcomeModal').modal('show');
  }); 
  // ======== END: On screen load howToModal

// ======= Lightbox toggle
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
// ========