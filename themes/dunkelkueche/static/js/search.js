document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('recipe-search');
  if (!input) return;

  var cards = document.querySelectorAll('.recipe-card');
  var noResults = document.querySelector('.no-results');

  input.addEventListener('input', function () {
    var query = this.value.toLowerCase().trim();
    var visible = 0;

    cards.forEach(function (card) {
      var title = card.getAttribute('data-title') || '';
      var tags = card.getAttribute('data-tags') || '';
      var desc = card.getAttribute('data-description') || '';
      var match = !query || title.indexOf(query) !== -1 || tags.indexOf(query) !== -1 || desc.indexOf(query) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  });
});
