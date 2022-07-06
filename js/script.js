const container = document.getElementById('container');

// Milestone 1 


const post = [
    {
        id: 1,
        name: 'Gabriele Chiarello',
        profilePic: 'https://unsplash.it/300/300?image=13',
        date: '08/12/2022',
        text: 'No filter needed',
        pic: 'https://unsplash.it/300/300?image=110',
        likes: '243'
    },

    {
        id: 2,
        name: 'Valentino Rossi',
        profilePic: 'https://unsplash.it/300/300?image=50',
        date: '06/11/2022',
        text: 'A pic from my shooting',
        pic: 'https://unsplash.it/300/300?image=80',
        likes: '500'
    },

    {
        id: 1,
        name: 'Sandro Tonali',
        profilePic: 'https://unsplash.it/300/300?image=68',
        date: '05/22/2022',
        text: 'In my sparetime I love making photos',
        pic: 'https://unsplash.it/300/300?image=65',
        likes: '128'
    }
]

console.table(post)

//Milestone 2

//Ciclo for per prendere tutti gli oggetti dell'array
for(let i = 0; i < post.length; i++){
    let current = post[i];

    container.innerHTML +=  `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src= "${current.profilePic}" alt="${current.name}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${current.name}</div>
          <div class="post-meta__time">${current.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${current.text}
    </div>
    <div class="post__image">
      <img src="${current.pic}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${current.id}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${current.likes}</b> persone</div>
      </div>
    </div>
  </div>`

}

//Milestone 3