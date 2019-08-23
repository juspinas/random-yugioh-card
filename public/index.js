var cardName
var cardType
var cardImage
var count = 0

$( document ).ready(function() {
    $("#nextButton").click(function( event ) {
        event.preventDefault()
        debugger
        return $.ajax({
            async: "false",
            method: "GET",
            dataType: 'json',
            url: "/yugioh_card",
            data: {},
            success: function (data) {
                cardName = data.name
                cardType = data.type
                cardImage = data.image_url
                nextCard()
            }
        })
    });
});

function nextCard() {
    debugger
    const Name = cardName
    const Type = cardType
    const image_url = cardImage
    $("#name").html(Name)
    $("#type").html(Type)
    $("#image").attr("src", image_url)
    $("#nextButton").html("Next")
    count++
}