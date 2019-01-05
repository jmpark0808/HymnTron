var $loading = document.querySelector('.loading');
var $view = document.querySelector('.view');
var $questions = document.querySelector('.questions');
var $currentQuestion = document.querySelector('.current');
var $error = document.querySelector('.alert-danger');
var $results = document.querySelector('.results');
var $next = document.querySelector('.next');
var answers = ['left', 'right', 'left', 'right', 'right'];

var results = [];

$next.onclick = function () {
  $error.classList.add('hide');
  var currentQuestionNumber = Number($currentQuestion.id.substring(1));
  var inputs = document.querySelectorAll('input[name="q' + currentQuestionNumber + '"]');
  var guess;
  if (inputs[0].checked) {
    guess = 'left';
  } else if (inputs[1].checked) {
    guess = 'right';
  } else {
    return showError();
  }
  results.push(guess);
  stopVideos(currentQuestionNumber);
  $currentQuestion.classList.add('hide');
  $currentQuestion.classList.remove('current');
  if (currentQuestionNumber === 5) return showResults();
  $currentQuestion = document.querySelector('#q' + (currentQuestionNumber + 1));
  $currentQuestion.classList.remove('hide');
  $currentQuestion.classList.add('current');
}

function showError() {
  $error.classList.remove('hide');
}

function showResults() {
  var wrong = [];
  results.forEach(function (guess, index) {
    if (guess !== answers[index]) wrong.push('q' + (index + 1));
  });
  var text;
  if (wrong.length === 0) {
    text = 'You have successfully guessed all the AI generated hymns! I guess I need to tune my neural net.';
  } else {
    text = 'You have incorrectly guessed ' + wrong.join(', ') + '. Finally, we are one step closer to global machine domination!';
  }
  document.querySelector('.results p').innerText = text;
  $questions.classList.add('hide');
  $results.classList.remove('hide');
}

function removeLoading() {
  $view.classList.remove('hide');
  $loading.classList.add('hide');
}

function stopVideos(questionNumber) {
  youtubeVideoPlayers[questionNumber * 2 - 2].stopVideo();
  youtubeVideoPlayers[questionNumber * 2 - 1].stopVideo();
}

var youtubeVideoIds = [
  'ksmoCHWSU_c',
  'g09hs_EYt18',
  'x-kmmMj98PA',
  '4z43PTsqifI',
  '-PFInM9ZU0M',
  '7Ep1LphqCpY',
  'uiKA2RcrC7o',
  '2sqsQQD3WHg',
  'lgpK5BQJLEI',
  'A7WOjXD-SfE'
]
var youtubeVideoPlayers = [];
var videoReadyCount = 0;

function onYouTubeIframeAPIReady() {
  youtubeVideoIds.forEach(function (id, index) {
    var player = new YT.Player('player' + index, {
      frameborder: 0,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1,
      videoId: id,
      height: 150,
      width: 300,
      events: {
        'onReady': function () { videoReadyCount++ },
      }
    });
    youtubeVideoPlayers.push(player);
  });
}

var intervalId = setInterval(function () {
  if (videoReadyCount < 10) return;
  removeLoading();
  clearInterval(intervalId);
}, 1000);
