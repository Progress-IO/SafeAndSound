$(function() {
  if ($('#infinite-scrolling').size() > 0) {
    return $('#test1 .suspect_list').on('scroll', function() {
      var more_posts_url;
      more_posts_url = $('.pagination .next_page').attr('href');
      if (more_posts_url && $('#test1 .suspect_list').scrollTop() > $('#suspects').height() - 350) {
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
    return $('#test2 .suspect_list').on('scroll', function() {
      var more_posts_url;
      more_posts_url = $('.pagination .next_page').attr('href');
      if (more_posts_url && $('#test2 .suspect_list').scrollTop() > $('#reports').height() - 350) {
       // alert($('#test1 .suspect_list').scrollTop() + " px is more than "+  $('#suspects').height() +"- 350" );
        $('.pagination').html('<div><img src="assets/loading.gif" alt="Loading..." title="Loading..."  </a></div>');
        $.getScript(more_posts_url);
      }
      return;
    });
  }
});

$(function() {
  if ($('#infinite-scrolling-transports').size() > 0) {
    return $('#test3 .suspect_list').on('scroll', function() {
      var more_posts_url;
      more_posts_url = $('.pagination .next_page').attr('href');
      if (more_posts_url && $('#test3 .suspect_list').scrollTop() > $('#transports').height() - 350) {
       // alert($('#test1 .suspect_list').scrollTop() + " px is more than "+  $('#suspects').height() +"- 350" );
        $('.pagination').html('<div><img src="assets/loading.gif" alt="Loading..." title="Loading..."  </a></div>');
        $.getScript(more_posts_url);
      }
      return;
    });
  }
});