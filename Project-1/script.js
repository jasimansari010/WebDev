const reels = [
  {
    ismuted:true,
    username: "its_aarav",
    likeCount: 12450,
    isLiked: false,
    commentCount: 342,
    shareCount: 185,
    isFollowed: false,
    caption: "🍷❌ No Alcohol. No Smoke",
    video: "./Reels/b1.mp4",
    userprofile: "https://i.pravatar.cc/150?img=1",
  },
  {
    ismuted:true,
    username: "ananya._official",
    likeCount: 28976,
    isLiked: true,
    commentCount: 912,
    shareCount: 426,
    isFollowed: true,
    caption: "💃 Chikni Chameli Vibes... Full Energy, Zero Hesitation",
    video: "./Reels/g1.mp4",
    userprofile: "https://i.pravatar.cc/150?img=5",
  },
  {
    ismuted:true,
    username: "rohanx_07",
    likeCount: 56891,
    isLiked: false,
    commentCount: 1435,
    shareCount: 987,
    isFollowed: true,
    caption: "💯 Discipline is must",
    video: "./Reels/b2.mp4",
    userprofile: "https://i.pravatar.cc/150?img=8",
  },
  {
    ismuted:true,
    username: "priya.vibes",
    likeCount: 19870,
    isLiked: true,
    commentCount: 521,
    shareCount: 301,
    isFollowed: false,
    caption: "❤️✨ Mera Lal Suit Karda... Nazar Na Lage.",
    video: "./Reels/g2.mp4",
    userprofile: "https://i.pravatar.cc/150?img=10",
  },
  {
    ismuted:true,
    username: "aditya.codes",
    likeCount: 41230,
    isLiked: false,
    commentCount: 765,
    shareCount: 652,
    isFollowed: true,
    caption: "👑 Aura +9999",
    video: "./Reels/b3.mp4",
    userprofile: "https://i.pravatar.cc/150?img=12",
  },
  {
    ismuted:true,
    username: "sneha_clicks",
    likeCount: 17564,
    isLiked: true,
    commentCount: 438,
    shareCount: 512,
    isFollowed: false,
    caption: "🕺🎶 dance give me fun",
    video: "./Reels/g3.mp4",
    userprofile: "https://i.pravatar.cc/150?img=15",
  },
  {
    ismuted:true,
    username: "karan.fitlife",
    likeCount: 63820,
    isLiked: true,
    commentCount: 1674,
    shareCount: 1204,
    isFollowed: true,
    caption: "Ignore the girls chase the destiny💙",
    video: "./Reels/b4.mp4",
    userprofile: "https://i.pravatar.cc/150?img=18",
  },
  {
    ismuted:true,
    username: "ishita.diaries",
    likeCount: 34781,
    isLiked: false,
    commentCount: 832,
    shareCount: 721,
    isFollowed: false,
    caption: "🥹❤️ Love You, Mera Bachcha... Always & Forever.",
    video: "./Reels/g4.mp4",
    userprofile: "https://i.pravatar.cc/150?img=20",
  },
  {
    ismuted:true,
    username: "rahul.edits",
    likeCount: 89210,
    isLiked: true,
    commentCount: 2198,
    shareCount: 1845,
    isFollowed: true,
    caption: "😏 Baap Se Hoshiyari",
    video: "./Reels/b5.mp4",
    userprofile: "https://i.pravatar.cc/150?img=24",
  },
  {
    ismuted:true,
    username: "kavya._xo",
    likeCount: 26795,
    isLiked: false,
    commentCount: 603,
    shareCount: 390,
    isFollowed: false,
    caption: "🚀💙 Dil kudiyan nhi kude ke nam kar diya",
    video: "./Reels/g5.mp4",
    userprofile: "https://i.pravatar.cc/150?img=28",
  },
];


let allReels = document.querySelector('.all-reels');

function addData() {
  let sum = '';
  reels.forEach((elem,idx)=>{
  sum = sum + `
  <div class="reel">
    <video autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
     <div class="mute" id=${idx}>
        ${elem.ismuted?'<i class="ri-volume-mute-fill"></i':'<i class="ri-volume-up-line"></i'}>
      </div>
    <div class="bottom">
        <div class="user">
            <img src="${elem.userprofile}" alt="">
            <h4>${elem.username}</h4>
            <button id=${idx} class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
        </div>
        <h3>${elem.caption}</h3>
    </div>
    <div class="right">
        <div class="like" id=${idx}>
            <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
            <h6>${elem.likeCount}</h6>
        </div>
        <div class="comment icon">
            <h4 class="comment-icon"><i class="ri-chat-ai-3-line"></i></h4>
            <h6>${elem.commentCount}</h6>
        </div>
        <div class="share icon">
            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
            <h6>${elem.shareCount}</h6>
        </div>
        <div class="menu icon">
            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
        </div>
    </div>
  </div>`
});



allReels.innerHTML = sum;
}

addData();


allReels.addEventListener('click',function(dets){


  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    }else{
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }


  if(dets.target.className == 'follow'){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true;
    }else{
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }


  if(dets.target.className == 'mute'){
    if(!reels[dets.target.id].ismuted){
      reels[dets.target.id].ismuted = true;
    }else{
      reels[dets.target.id].ismuted = false;
    }
    addData();
  }
});



