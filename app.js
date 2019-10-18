const rootEl = document.getElementById('root-i');
// log (объекта console)
console.log(rootEl); // HTML Element'ы печатает в виде разметки
// dir (объекта console)
console.dir(rootEl);
const post = {    id: 1,
    content: 'Первый пост в моей соц.сети картинка',
    imageUrl: 'https://placekitten.com/300/300',
    likes: 6,
    dislikes: 1900,
};
const postEl = document.createElement('div');
postEl.className = 'card'; 
const imgEl = document.createElement('img');
imgEl.src = post.imageUrl;
imgEl.className = 'card-img-top';
postEl.appendChild(imgEl);
const postBodyEl = document.createElement('div');
postBodyEl.className = 'card-body';
postEl.appendChild(postBodyEl);
const postContentEl = document.createElement('p');
postContentEl.textContent = post.content;
postBodyEl.appendChild(postContentEl);
const likesEl = document.createElement('button');
likesEl.className = 'btn btn-primary';
likesEl.textContent = '❤ ' + post.likes;
likesEl.onclick = function () {
        post.likes = post.likes + 1;
       likesEl.textContent = '❤ ' + post.likes;    };
postBodyEl.appendChild(likesEl);
const dislikesEl = document.createElement ('button');
dislikesEl.className = 'btn btn-secondary';
dislikesEl.textContent = '👎 ' + post.dislikes;
dislikesEl.onclick = function () {
    post.dislikes = post.dislikes + 1;
    dislikesEl.textContent = '👎 ' + post.dislikes;}
postBodyEl.appendChild(dislikesEl);
rootEl.appendChild(postEl);
const rootVideoEl = document.getElementById('root-v');

const video = {
    id: 2,
    content: 'Второй пост в моей соц.сети видео',
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" ,
    likes: 1488,
    dislikes: 2109,
};
const videoEl = document.createElement('div');
videoEl.className = 'card';
const mpegEl = document.createElement('video'); 
mpegEl.src = video.videoUrl;
mpegEl.controls = true;
mpegEl.className = 'embed-responsive embed-responsive-16by9 card-img-top';
videoEl.appendChild(mpegEl);
const videoBodyEl = document.createElement('div');
videoBodyEl.className = 'card-body';
videoEl.appendChild(videoBodyEl);
const videoContentEl = document.createElement('p');
videoContentEl.textContent = video.content;
videoBodyEl.appendChild(videoContentEl);
const videoLikesEl = document.createElement('button');
videoLikesEl.className = 'btn btn-primary';
videoLikesEl.textContent = '❤ ' + video.likes;
videoLikesEl.onclick = function () {
       video.likes = video.likes + 1;
        videoLikesEl.textContent = '❤ ' + video.likes;
};
videoBodyEl.appendChild(videoLikesEl);
const videoDislikesEl = document.createElement ('button');
videoDislikesEl.className = 'btn btn-secondary';
videoDislikesEl.textContent = '👎 ' + video.dislikes;
videoDislikesEl.onclick = function () {
    video.dislikes = video.dislikes + 1;
    videoDislikesEl.textContent = '👎 ' + video.dislikes;
}
videoBodyEl.appendChild(videoDislikesEl);
rootVideoEl.appendChild(videoEl);

const rootAudioEl = document.getElementById('root-a');
const audio = {
    id: 3,
    content: 'Третий пост в моей соц.сети аудио',
    audioUrl: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
    likes: 999,
    dislikes: 666,
    }
const audioEl = document.createElement('div');
audioEl.className = 'card';
const mp3El = document.createElement('audio');
mp3El.src = audio.audioUrl;
mp3El.className = 'embed-responsive embed-responsive-21by9 card-img-top';
audioEl.appendChild(mp3El);
const audioBodyEl = document.createElement('div');
audioBodyEl.className = 'card-body';
audioEl.appendChild(audioBodyEl);
const audioContentEl = document.createElement('p');
audioContentEl.textContent = audio.content;
audioBodyEl.appendChild(audioContentEl);
const audioLikesEl = document.createElement('button');
audioLikesEl.className = 'btn btn-primary';
audioLikesEl.textContent = '❤ ' + audio.likes;
audioLikesEl.onclick = function () {
    audio.likes = audio.likes + 1;
    audioLikesEl.textContent = '❤ ' + audio.likes;
}
audioBodyEl.appendChild(audioLikesEl);
const audioDislikesEl = document.createElement('button');
audioDislikesEl.className = 'btn btn-secondary';
audioDislikesEl.textContent = '👎 ' + audio.dislikes;
audioDislikesEl.onclick = function () {
    audio.dislikes = audio.dislikes + 1;
    audioDislikesEl.textContent = '👎 ' + audio.dislikes;
}
audioBodyEl.appendChild(audioDislikesEl);
rootAudioEl.appendChild(audioEl);




