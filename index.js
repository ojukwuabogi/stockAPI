

var stockLists = ['aapl', 'JPM', 'GOOGL','AKAM','TWTR',''];



$('#submit').on('click', function(){
    var name = $('#stockName').val();

    $.get('https://api.iextrading.com/1.0/stock/aapl/quote', function(data){
        console.log(data);
    });
})

$(document).on('click', '.stocks', function(){
    var stockName =  $(this).text();
   
    $.get(`https://api.iextrading.com/1.0/stock/${stockName}/quote`, function(data){
        console.log(data);
        $.get(#output).html(data);
        // append the information to html
    });
});

function populateStocks(){

    for(var i = 0; i < stockLists.length; i++ ) {
        $('#stocks').append('<button class="stocks">' + stockLists[i] + '</button>');
    }

}

populateStocks();
