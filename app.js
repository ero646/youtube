$(document).ready(function(){


$(function(){
  $('#search-form').submit(function(event){ // when the user clicks submit....
    event.preventDefault(); // prevent the form from submitting
    var searchTerm = $('#query').val(); // take whatever is in the search field and put it in searchTerm
    getRequest(searchTerm); //call the function "getRequest" and pass it the search term
  });
});

function getRequest(searchTerm){
  var userQuery = searchTerm;

  //alert(typeof(userQuery));
  var params = {
    part: 'snippet',
    key: 'AIzaSyAUqswQE4ND2epzoyNKkS9_CX_QxTK6ILs',
    q: userQuery,
    maxResults: 4,
    type: "video"
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    console.log(data);
    //debugger;
    showResults(data.items);
    console.log(data.items);
    
  });
}

function showResults(results){ //shows the results to the user
  var html = ""; // variable to hold the html
  $.each(results, function(index,items){ //for each of the results
//debugger;
    //html += '<p>' + items.snippet.thumbnails.default.url + '</p>'; // create a new paragraph with the title
    html += '<a href=' + "https://www.youtube.com/watch?v=" + items.id.videoId + '>';
    html += '<img src=' + items.snippet.thumbnails.medium.url + '>'; 
    html += '</a>';

    //console.log(items.snippet.thumbnails.default.url);
    console.log(items.id.videoId);
  });
  $('#popular').html(html); // display each of those paragraphs on the page
}
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){


$(function(){
  $('#search-form').submit(function(event){ // when the user clicks submit....
    event.preventDefault(); // prevent the form from submitting
    var searchTerm = $('#query').val(); // take whatever is in the search field and put it in searchTerm
    getRequest(searchTerm); //call the function "getRequest" and pass it the search term
  });
});

function getRequest(searchTerm){
  var userQuery = searchTerm + "trailer";

  //alert(typeof(userQuery));
  var params = {
    part: 'snippet',
    key: 'AIzaSyAUqswQE4ND2epzoyNKkS9_CX_QxTK6ILs',
    q: userQuery,
    maxResults: 4,
    type: "video",
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    console.log(data);
    //debugger;
    showResults(data.items);
    console.log(data.items);
    
  });
}

function showResults(results){ //shows the results to the user
  var html = ""; // variable to hold the html
  $.each(results, function(index,items){ //for each of the results
//debugger;
    //html += '<p>' + items.snippet.thumbnails.default.url + '</p>'; // create a new paragraph with the title
    html += '<a href=' + "https://www.youtube.com/watch?v=" + items.id.videoId + '>';
    html += '<img src=' + items.snippet.thumbnails.medium.url + '>'; 
    html += '</a>';

    //console.log(items.snippet.thumbnails.default.url);
    console.log(items.id.videoId);
  });
  $('#trailers').html(html); // display each of those paragraphs on the page
}
});


////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){


$(function(){
  $('#search-form').submit(function(event){ // when the user clicks submit....
    event.preventDefault(); // prevent the form from submitting
    var searchTerm = $('#query').val(); // take whatever is in the search field and put it in searchTerm
    getRequest(searchTerm); //call the function "getRequest" and pass it the search term
  });
});

function getRequest(searchTerm){
  var userQuery = searchTerm + "review";

  //alert(typeof(userQuery));
  var params = {
    part: 'snippet',
    key: 'AIzaSyAUqswQE4ND2epzoyNKkS9_CX_QxTK6ILs',
    q: userQuery,
    maxResults: 4,
    type: "video",
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    console.log(data);
    //debugger;
    showResults(data.items);
    console.log(data.items);
    
  });
}

function showResults(results){ //shows the results to the user
  var html = ""; // variable to hold the html
  $.each(results, function(index,items){ //for each of the results
//debugger;
    //html += '<p>' + items.snippet.thumbnails.default.url + '</p>'; // create a new paragraph with the title
    html += '<a href=' + "https://www.youtube.com/watch?v=" + items.id.videoId + '>';
    html += '<img src=' + items.snippet.thumbnails.medium.url + '>'; 
    html += '</a>';

    //console.log(items.snippet.thumbnails.default.url);
    console.log(items.id.videoId);
  });
  $('#reviews').html(html); // display each of those paragraphs on the page
}
});