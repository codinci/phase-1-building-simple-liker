// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.getElementsByClassName('like-glyph');

document.addEventListener('DOMContentLoaded', () => {
  // console.log(likeButtons);
  Array.from(likeButtons).forEach(likeButton => {
    likeButton.addEventListener('click', () => {
      mimicServerCall()
      .then((result) => {
        // console.log(result);
        if(likeButton.textContent === EMPTY_HEART) {
          // console.log('Change heart');
          likeButton.textContent = FULL_HEART;
          likeButton.classList.add('activated-heart');
        } else {
          likeButton.textContent = EMPTY_HEART;
          likeButton.classList.remove('activated-heart');
        }
      }).catch((err) => {
        handleError(err);
      });
    })
  });
})

function handleError(errorMessage) {
  // console.log(errorMessage);
  const errorModal = document.getElementById('modal');
  errorModal.classList.remove('hidden');
  const errorText = document.getElementById('modal-message');
  errorText.innerText = errorMessage;
  if(!errorModal.classList.contains('hidden')) {
    setTimeout(() => {
      errorModal.classList.add('hidden')
    }, 3000);
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
