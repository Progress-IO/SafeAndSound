$(function() {
  if ($('#infinite-scrolling-suspects').size() > 0) {
    return $('.suspect_list').on('scroll', function() {
      var more_posts_url;
      var highness =  $('#suspects').height();
      more_posts_url = $('.pagination .next_page').attr('href');
      if (more_posts_url && $('.suspect_list').scrollTop() > $('#suspects').height()*0.6) {
       // alert($('#test1 .suspect_list').scrollTop() + " px is more than "+  $('#suspects').height() +"- 350" );
        $('.pagination').html('<div><img src="assets/loading.gif" alt="Loading..." title="Loading..."  </a></div>');
        $.getScript(more_posts_url);
        
      }
      return;
    });
  }
});

$(function() {
  if ($('#infinite-scrolling-reports').size() > 0) {
    return $('.report_list').on('scroll', function() {
      var more_posts_url;
      more_posts_url = $('.pagination .next_page').attr('href');
      if (more_posts_url && $('.report_list').scrollTop() > $('#reports').height() *0.6) {
       // alert($('#test1 .suspect_list').scrollTop() + " px is more than "+  $('#suspects').height() +"- 350" );
        $('.pagination').html('<div><img src="assets/loading.gif" alt="Loading..." title="Loading..."  </a></div>');
        $.getScript(more_posts_url);
      }
      return;
    });
  }
});

