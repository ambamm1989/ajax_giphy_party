const $gifSpot = $("#gifSpot");
const $searchBar = $("#sBar");



function giffys(iffys) {
  let numbs = iffys.data.length;
  if (numbs) {
    let randoGifId = Math.floor(Math.random() * numbs);
    let $nGyph = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $nGrif = $("<img>", {
      src: iffys.data[randoGifId].images.original.url,
      class: "wd -40"
    });
    $nGyph.append($nGrif);
    $gifSpot.append($nGyph);
  }
}


$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchBar.val();
  $searchBar.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {    params: {
  q: searchTerm,
      api_key: "tkNPRb0CC2c64gNSKXlgsMPPRLtSL76S"
    }
  });
  giffys(response.data);
});

$("#remove").on("click", function() {
  $gifSpot.empty();
});