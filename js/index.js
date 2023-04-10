var questions = [
  [
    {
      id: 3,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 4,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 1,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 2,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 3,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 4,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 1,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 2,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 3,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 4,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 3,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 4,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 1,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 2,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 3,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 4,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 1,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 2,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
  [
    {
      id: 3,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
    {
      id: 4,
      mark: 100,
      question: {
        from: "وقال الله لا تتخذوا",
        to: "اخر السورة",
        surah: "النحل",
      },
    },
  ],
];
var $formCards = $("#form-cards");
var $questionCards = $("#question-cards");
var delay = 800;
var selectedQuestionForm = null;

// Shuffle function From http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Initial Game
function initGame(cards, cardsContainer) {
  var cards = shuffle(cards);
  cardsContainer.empty();
  for (var i = 0; i < cards.length; i++) {
    cardsContainer.append(
      $(`<div class="card"><span class="hide">${i + 1}</span></div>`)
    );
  }

  if (cardsContainer.attr("id") == "form-cards") {
    hideContainerOnClick();
  } else if (cardsContainer.attr("id") == "question-cards") {
    showContainerOverlayOnClick();
  }
}

initGame(questions, $formCards);

function hideContainerOnClick() {
  // Card flip
  $formCards.on("click", '.card:not(".open")', function () {
    $(this).addClass("open");
    $(this).children().first().toggleClass("hide");
    setTimeout(() => {
      $formCards.parent().addClass("fade-out").toggleClass("hide");
      let index = $(this).children().first().html();
      selectedQuestionForm = questions[index - 1];
      initGame(selectedQuestionForm, $questionCards);
      $questionCards.parent().addClass("fade-in").toggleClass("hide");
    }, 1000);
  });
}

function showContainerOverlayOnClick() {
  // Card flip
  $questionCards.on("click", '.card:not(".open")', function () {
    $(this).addClass("open");
    $(this).children().first().toggleClass("hide");
    setTimeout(() => {
      let index = $(this).children().first().html();
      let question = selectedQuestionForm[index - 1];
      $("#question-cards-overlay").toggleClass("hide");
      $("#question-cards-overlay #question #from").html(
        `"${question["question"]["from"]}"`
      );
      $("#question-cards-overlay #question #to").html(
        `"${question["question"]["to"]}"`
      );
      $("#question-cards-overlay #question #surah").html(
        `${question["question"]["surah"]}`
      );
    }, 1000);
  });
}

$("#question-cards-overlay #overlay-close-btn").on("click", function () {
  $("#question-cards-overlay").toggleClass("hide");
});
