$(document).ready(function() {
  var stockList = [
    'AAPL',
    'CSCO',
    'EBAY',
    'GOOGL',
    'GE',
    'JNPR',
   
  ];

  //CREATE BUTTONS
  
  const render = function() {

    // Create a for-loop 
    for( let i = 0; i < stockList.length; i++ ) {

      //Create a var;
      const stockBtn = $('<button>');

            stockBtn.addClass('stockbutton');     
      
      stockBtn.attr('data-proj', stockList[i]);         
      stockBtn.text(stockList[i]);

      
      $('#buttons').append(stockBtn);
    }
  }
  
  render();
  
  const runQuery = function(event) {

    
    event.preventDefault();
  
    t
    const stock = $('#stock-input').val().trim();
  
    // r URL
    const queryURL = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news&range=1m&last=10`;
    
    // Run our AJAX call
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response){
  
      $('#stock-view').text(JSON.stringify(response));    
    })
  
  }
    
  $('#find-stock').on('click', runQuery);
  
    const findStock = function(event) {
      event.preventDefault();
      const stockSymbol = $(this).data('proj');
      
            $('.stockbutton').val('');
        const queryURL = `https://api.iextrading.com/1.0/stock/${stockSymbol}/batch?types=quote,news&range=1m&last=10`;
          $.ajax({
          url: queryURL,
          method: 'GET'
          }).then(function(response){  
          $('#stock-view').text(JSON.stringify(response));    
      })
    }
    $('.stockbutton').on('click', findStock); 


function rudr_favorite(a) {
	pageTitle=document.title;
	pageURL=document.location;
	try {
		
		eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
	}
	catch (e) {
		try {
			
			window.sidebar.addPanel(pageTitle, pageURL, "");
		}
		catch (e) {			
			if (typeof(opera)=="object") {
				a.rel="sidebar";
				a.title=pageTitle;
				a.url=pageURL;
				return true;
			} else {				
				alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
			}
		}
	}
	return false;
}
});