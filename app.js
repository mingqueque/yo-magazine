const categories = [
  '썸/소개팅',
  '짝사랑',
  '연애중',
  '재회',
  '이별/권태기/장기연애',
  '연애 잡담',
  '결혼 고민'
];

const icons = {
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>',
  comment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-8.8 8.4 8.9 8.9 0 0 1-3.8-.9L3 20l1.3-4.3a8.2 8.2 0 0 1-.9-3.8A8.4 8.4 0 0 1 12 3.5a8.5 8.5 0 0 1 9 8Z"></path></svg>',
  more: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>'
};

const currentUser = {
  id: 'user_me',
  email: 'yo.user@kakao.com',
  provider: '카카오'
};

const posts = [
  {
    id: 'post_1',
    userId: 'user_me',
    category: '썸/소개팅',
    title: '과팅에서 만난 사람이 스토리는 보는데 답장을 안 해요',
    body: '처음엔 새벽까지 카톡했는데 어제부터 답장이 6시간씩 늦어요. 근데 제 스토리는 바로 봐서 더 신경 쓰입니다. 그냥 관심이 식은 걸까요?',
    time: '5분 전',
    hoursAgo: 0.1,
    order: 10,
    likes: 28,
    liked: false,
    commentTotal: 17,
    modified: false,
    comments: [
      { id: 'comment_1', userId: 'user_c', body: '저라면 밥 먹었냐고 가볍게 한 번만 더 보내고, 또 애매하면 접을 것 같아요.', time: '10분 전', order: 1, likes: 5, liked: true, status: 'normal', modified: true },
      { id: 'comment_2', userId: 'user_d', body: '', time: '7분 전', order: 2, likes: 0, liked: false, status: 'deleted', modified: false },
      { id: 'comment_3', userId: 'editor', body: '답장 속도보다 대화가 이어지는 방식도 함께 살펴보세요. 불안하다면 한 번은 솔직하게 물어봐도 괜찮아요.', time: '5분 전', order: 3, likes: 11, liked: false, status: 'normal', modified: false, editor: true },
      { id: 'comment_4', userId: 'user_c', body: '시험기간이면 진짜 답장 느려질 수 있어요. 그래도 스토리는 올리는데 답장만 안 하면 한 번 물어볼 듯.', time: '3분 전', order: 4, likes: 2, liked: true, status: 'normal', modified: false }
    ]
  },
  {
    id: 'post_2',
    userId: 'user_b',
    category: '짝사랑',
    title: '같은 과 선배가 자꾸 챙겨주는데 착각인지 모르겠어요',
    body: '수업 끝나고 같이 밥 먹자고 하고 과제도 먼저 도와주는데, 원래 후배들한테 다 친절한 사람이라 헷갈려요. 고백은 너무 빠르겠죠?',
    time: '18분 전',
    hoursAgo: 0.3,
    order: 9,
    likes: 41,
    liked: true,
    commentTotal: 26,
    modified: true,
    comments: [
      { id: 'comment_5', userId: 'user_me', body: '둘이서만 따로 만나자는 제안이 반복되는지 조금 더 지켜봐도 좋을 것 같아요.', time: '14분 전', order: 1, likes: 4, liked: false, status: 'normal', modified: false }
    ]
  },
  {
    id: 'post_3',
    userId: 'user_c',
    category: '연애중',
    title: '애인이 시험기간마다 연락이 거의 끊겨요',
    body: '공부하는 건 이해하는데 하루에 잘 자 한 마디도 없는 날이 많아요. 제가 너무 연락에 집착하는 건지, 최소한의 표현은 필요한 건지 모르겠어요.',
    time: '42분 전',
    hoursAgo: 0.7,
    order: 8,
    likes: 33,
    liked: false,
    commentTotal: 22,
    modified: false,
    comments: [
      { id: 'comment_6', userId: 'user_me', body: '시험 시작 전에 서로 가능한 연락 횟수를 먼저 맞춰두면 덜 불안했어요.', time: '30분 전', order: 1, likes: 7, liked: false, status: 'normal', modified: true },
      { id: 'comment_7', userId: 'user_hidden', body: '', time: '24분 전', order: 2, likes: 0, liked: false, status: 'hidden', modified: false }
    ]
  },
  {
    id: 'post_4',
    userId: 'user_d',
    category: '이별/권태기/장기연애',
    title: '헤어진 뒤에 맞팔 유지하는 거 다들 가능해요?',
    body: '헤어진 지 2주 됐는데 서로 언팔은 안 했어요. 새 글 올라올 때마다 마음이 흔들려서 차단까지 해야 하나 고민 중입니다.',
    time: '1시간 전',
    hoursAgo: 1,
    order: 7,
    likes: 19,
    liked: false,
    commentTotal: 14,
    modified: false,
    comments: []
  },
  {
    id: 'post_5',
    userId: 'user_e',
    category: '재회',
    title: '전애인이 생일 축하한다고 연락 왔어요',
    body: '좋게 헤어진 건 아니었는데 생일이 되자마자 장문 카톡이 왔어요. 그냥 예의인지 다시 얘기해보고 싶은 건지 감이 안 옵니다.',
    time: '2시간 전',
    hoursAgo: 2,
    order: 6,
    likes: 24,
    liked: true,
    commentTotal: 31,
    modified: false,
    comments: []
  },
  {
    id: 'post_6',
    userId: 'editor',
    editor: true,
    category: '연애 잡담',
    title: '연애 고민을 나누기 전에 기억하면 좋은 한 가지',
    body: '상대의 마음을 단정하기보다 내가 느끼는 감정과 원하는 관계를 먼저 살펴보세요. 조언은 선택지이고 결정은 언제나 여러분의 몫입니다.',
    time: '3시간 전',
    hoursAgo: 3,
    order: 5,
    likes: 58,
    liked: false,
    commentTotal: 12,
    modified: false,
    comments: []
  },
  {
    id: 'post_7',
    userId: 'user_f',
    category: '결혼 고민',
    title: '어린 나이에 결혼 얘기 꺼내면 너무 부담일까요',
    body: '아직 취업 준비도 남았는데 서로 미래 얘기를 자주 하게 돼요. 좋아하는 마음이랑 현실적인 준비는 다른 문제 같아서 고민입니다.',
    time: '어제',
    hoursAgo: 26,
    order: 4,
    likes: 37,
    liked: false,
    commentTotal: 18,
    modified: false,
    comments: []
  },
  {
    id: 'post_8',
    userId: 'user_me',
    category: '연애 잡담',
    title: '연락할 때 ㅋㅋ만 오는 거 관심 없는 신호인가요',
    body: '질문하면 답은 하는데 대화가 계속 제가 끌고 가는 느낌이에요. 친구들은 그냥 접으라는데 아직 미련이 남아요.',
    time: '어제',
    hoursAgo: 30,
    order: 3,
    likes: 52,
    liked: false,
    commentTotal: 40,
    modified: false,
    comments: []
  },
  {
    id: 'post_9',
    userId: 'user_g',
    category: '썸/소개팅',
    title: '복학했는데 개강 첫날부터 관심 가는 사람이 생겼어요',
    body: '복학생 선배에게 동아리 같이 들자는 제안을 자연스럽게 하고 싶은데 어떤 말로 시작하면 좋을까요?',
    time: '2일 전',
    hoursAgo: 50,
    order: 2,
    likes: 16,
    liked: false,
    commentTotal: 7,
    modified: false,
    comments: []
  },
  {
    id: 'post_10',
    userId: 'user_h',
    category: '연애중',
    title: '장거리 연애에서 약속이 자꾸 미뤄져요',
    body: '한 달에 한 번은 만나기로 했는데 최근 두 번이나 일정이 바뀌었어요. 사정은 이해하지만 계속 제가 기다리는 기분입니다.',
    time: '4일 전',
    hoursAgo: 92,
    order: 1,
    likes: 12,
    liked: false,
    commentTotal: 6,
    modified: false,
    comments: []
  }
  ,
  {
    id: 'post_11',
    userId: 'user_i',
    hidden: true,
    category: '연애 잡담',
    title: '관리자가 숨김 처리한 글',
    body: '운영 정책에 따라 숨김 처리된 게시글입니다. 목록에는 노출되지 않지만, 내가 남긴 댓글 목록에서는 삭제된 글로 표시됩니다.',
    time: '5시간 전',
    hoursAgo: 5,
    order: 0,
    likes: 0,
    liked: false,
    commentTotal: 1,
    modified: false,
    comments: [
      { id: 'comment_8', userId: 'user_me', body: '이 글에 남겼던 제 댓글입니다.', time: '4시간 전', order: 1, likes: 0, liked: false, status: 'normal', modified: false }
    ]
  }
];

const magazines = [
  {
    image: 'assets/magazine-thumb-1.jpg',
    title: '요매거진 대나무숲 사연을 모집합니다',
    summary: '아무에게도 말하지 못했던 연애 이야기를 익명으로 들려주세요.',
    body: '친구에게도 꺼내기 어려웠던 연애 고민이 있나요?\n\n요매거진 대나무숲은 이름 없이 마음을 나누는 공간입니다. 보내주신 이야기는 개인정보를 제거한 뒤, 다른 사람의 경험과 조언을 만날 수 있는 콘텐츠로 소개합니다.'
  },
  {
    image: 'assets/magazine-thumb-2.jpg',
    title: '만 원으로 여자친구 행복하게 할 수 있다면 여기로 갈게요',
    summary: '큰돈 없이도 오래 기억되는 서울 데이트 코스를 모았습니다.',
    body: '좋은 데이트가 꼭 비쌀 필요는 없습니다.\n\n천천히 걸을 수 있는 길, 취향을 나눌 수 있는 작은 가게, 둘만의 사진을 남기기 좋은 장소를 한 코스로 엮었습니다.'
  },
  {
    image: 'assets/magazine-thumb-3.jpg',
    title: '왜 다들 연애하면 이케아에 가는지 비로소 알 것 같았다',
    summary: '가구보다 서로의 생활을 더 많이 보게 되는 데이트 이야기.',
    body: '쇼룸을 걷다 보면 생각보다 많은 대화가 시작됩니다.\n\n좋아하는 색, 쉬는 방식, 함께 살고 싶은 집까지. 이케아 데이트에서 발견한 관계의 작은 단서를 기록했습니다.'
  },
  {
    image: 'assets/magazine-thumb-4.jpg',
    title: '수제 맥주 실컷 맛보러 동대문구 맥주 축제 갈 사람 없나',
    summary: '선선한 저녁, 가볍게 건네기 좋은 데이트 제안.',
    body: '부담스럽지 않게 약속을 잡고 싶다면 축제만큼 좋은 핑계도 없습니다.\n\n함께 맛볼 맥주와 근처 산책 코스, 대화가 끊기지 않는 작은 팁을 소개합니다.'
  }
];

const notifications = [
  { postId: 'post_1', type: '댓글', time: '3분 전', body: '“저라면 한 번만 더 가볍게 물어볼 것 같아요.”', addedCount: 1 },
  { postId: 'post_1', type: '좋아요', time: '18분 전', body: '내 글에 좋아요 4개가 새로 달렸어요.', addedCount: 4 },
  { postId: 'post_8', type: '좋아요', time: '52분 전', body: '내 글에 좋아요 7개가 새로 달렸어요.', addedCount: 7 },
  { postId: 'post_8', type: '댓글', time: '어제', body: '“대화가 한쪽만 노력하는 느낌이면 잠깐 쉬어가도 괜찮아요.”', addedCount: 1 }
];

const withdrawalReasons = [
  '원하는 콘텐츠가 부족해요',
  '커뮤니티가 활발하지 않아요',
  '서비스 이용이 불편해요',
  '다른 이용자와의 경험이 좋지 않았어요',
  '자주 사용하지 않아요',
  '개인정보가 걱정돼요'
];

const infoContent = {
  'community-rules': {
    title: '커뮤니티 이용규칙',
    body: '커뮤니티 이용규칙은 현재 준비 중입니다.\n\n서로를 존중하고, 개인정보·욕설·광고성 내용을 게시하지 않는 기본 원칙을 적용합니다.'
  },
  terms: {
    title: '서비스 이용약관',
    body: '서비스 이용약관은 현재 준비 중입니다.'
  },
  privacy: {
    title: '개인정보 처리방침',
    body: '개인정보 처리방침은 현재 준비 중입니다.\n\n탈퇴 회원의 기존 작성 콘텐츠는 최종 개인정보 처리방침에 따라 처리됩니다.'
  }
};

const titles = {
  home: 'Yo!',
  community: '커뮤니티',
  detail: '',
  write: '글쓰기',
  search: '검색',
  mypage: '마이페이지',
  account: '계정 정보',
  notifications: '알림센터',
  'my-posts': '내가 작성한 글',
  'my-comments': '내가 작성한 댓글',
  likes: '좋아요한 글',
  magazines: '요매거진',
  'magazine-detail': '',
  info: '',
  withdraw: '회원 탈퇴',
  'withdraw-complete': '탈퇴 완료'
};

const state = {
  loggedIn: false,
  userStatus: 'normal',
  stack: ['home'],
  currentScreen: 'home',
  currentPostId: 'post_1',
  currentMagazineIndex: 0,
  selectedCategory: '전체',
  communityLimit: 4,
  communityLoading: false,
  recentLoveIds: [],
  recentLoveShown: new Set(),
  hasUnreadNotification: true,
  blockedUsers: new Set(),
  pendingMemberAction: null,
  reportTarget: null,
  blockTarget: null,
  searchQuery: '',
  toastTimer: null
};

const rootScreens = new Set(['home', 'community', 'mypage']);

// [요즘 연애] 노출 기준: 최근 3일(72시간) 이내 게시글, 한 번에 노출하는 개수
const RECENT_LOVE_WINDOW_HOURS = 72;
const RECENT_LOVE_COUNT = 5;

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getPost(postId) {
  return posts.find(post => post.id === postId);
}

function visiblePosts() {
  return posts.filter(post => !post.deleted && !post.hidden && !state.blockedUsers.has(post.userId));
}

function commentCount(post) {
  return post.commentTotal ?? post.comments.length;
}

function authorLabel(entity) {
  return entity.editor ? '에디터 ✓' : '익명';
}

function postMarkup(post, options = {}) {
  const compact = Boolean(options.compact);
  const prefix = options.prefix || 'PostCard';
  const index = posts.indexOf(post) + 1;
  const uiName = `${prefix}_${index}`;
  return `
    <article class="post-card${compact ? ' compact' : ''}" data-post-id="${post.id}" data-ui="${uiName}">
      <div class="post-top">
        <span class="post-category">${escapeHTML(post.category)}</span>
        <span class="post-time">${escapeHTML(post.time)}</span>
      </div>
      <div class="post-title">${escapeHTML(post.title)}</div>
      <div class="post-body">${escapeHTML(post.body)}</div>
      <div class="thread-actions">
        <button class="thread-action${post.liked ? ' liked' : ''}" type="button" data-like-id="${post.id}" aria-label="좋아요">${icons.heart}<span>${post.likes}</span></button>
        <button class="thread-action" type="button" data-comment-id="${post.id}" aria-label="댓글 ${commentCount(post)}개">${icons.comment}<span>${commentCount(post)}</span></button>
      </div>
    </article>`;
}

function renderPostList(target, list, options = {}) {
  const node = document.querySelector(`[data-post-list="${target}"]`);
  if (!node) return;
  const prefixMap = {
    home: 'HomePostCard',
    community: 'CommunityPostCard',
    search: 'SearchResultCard',
    'my-posts': 'MyPostCard',
    likes: 'LikedPostCard'
  };
  node.innerHTML = list.length
    ? list.map(post => postMarkup(post, { compact: options.compact, prefix: prefixMap[target] })).join('')
    : `<div class="empty-state" data-ui="${prefixMap[target]}_emptyState">${escapeHTML(options.emptyText || '표시할 글이 없습니다.')}</div>`;
}

// 노출 대상: 삭제, 숨김, 차단 작성자 글을 제외한 최근 3일 이내 게시글
function recentLovePool() {
  return visiblePosts().filter(post => (post.hoursAgo ?? 0) <= RECENT_LOVE_WINDOW_HOURS);
}

function shuffled(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

// 앱에 새로 진입할 때마다 노출 대상을 다시 선정한다.
// 이전에 노출받지 않은 게시글을 먼저 채우고, 모두 소진되면 노출 이력을 비우고 다시 랜덤 노출한다.
function selectRecentLove() {
  const pool = recentLovePool();
  const unseen = pool.filter(post => !state.recentLoveShown.has(post.id));
  const picked = shuffled(unseen).slice(0, RECENT_LOVE_COUNT);
  if (picked.length < RECENT_LOVE_COUNT) {
    state.recentLoveShown.clear();
    const pickedIds = new Set(picked.map(post => post.id));
    shuffled(pool)
      .filter(post => !pickedIds.has(post.id))
      .slice(0, RECENT_LOVE_COUNT - picked.length)
      .forEach(post => picked.push(post));
  }
  // 상세 진입 여부와 관계없이 노출된 시점을 기준으로 이력에 포함한다.
  picked.forEach(post => state.recentLoveShown.add(post.id));
  state.recentLoveIds = picked.map(post => post.id);
}

function renderHome() {
  const byId = new Map(visiblePosts().map(post => [post.id, post]));
  const list = state.recentLoveIds.map(id => byId.get(id)).filter(Boolean);
  renderPostList('home', list, { compact: true, emptyText: '최근 3일 안에 올라온 고민이 없습니다.' });
}

function renderCategories() {
  const container = document.getElementById('community-chips');
  const all = ['전체', ...categories];
  container.innerHTML = all.map((category, index) => `
    <button class="chip${state.selectedCategory === category ? ' active' : ''}" type="button" data-chip="${escapeHTML(category)}" data-ui="CommunityCategoryChip_${index + 1}">${escapeHTML(category)}</button>
  `).join('');
  document.getElementById('write-category').innerHTML = categories.map(category => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join('');
}

// 론칭 버전 정렬은 최신순만 제공한다.
function getCommunityPosts() {
  const filtered = visiblePosts().filter(post => state.selectedCategory === '전체' || post.category === state.selectedCategory);
  return filtered.sort((a, b) => b.order - a.order);
}

function renderCommunity() {
  renderCategories();
  const list = getCommunityPosts();
  renderPostList('community', list.slice(0, state.communityLimit), { emptyText: '이 카테고리에는 아직 글이 없습니다.' });
  const sentinel = document.querySelector('[data-community-sentinel]');
  if (state.communityLoading) sentinel.textContent = '게시글을 불러오는 중';
  else if (state.communityLimit < list.length) sentinel.textContent = '아래로 내려 더 보기';
  else sentinel.textContent = list.length ? '모든 게시글을 확인했어요.' : '';
}

function loadMoreCommunity() {
  const list = getCommunityPosts();
  if (state.communityLoading || state.communityLimit >= list.length || state.currentScreen !== 'community') return;
  state.communityLoading = true;
  renderCommunity();
  window.setTimeout(() => {
    state.communityLimit += 4;
    state.communityLoading = false;
    renderCommunity();
  }, 450);
}

function renderMagazineRail() {
  document.querySelector('[data-magazine-rail]').innerHTML = magazines.map((magazine, index) => `
    <button class="magazine-card" type="button" data-magazine="${index}" aria-label="${escapeHTML(magazine.title)}" data-ui="HomeMagazineCard_${index + 1}">
      <img src="${magazine.image}" alt="">
    </button>
  `).join('');
}

function renderMagazineList() {
  document.getElementById('magazine-list').innerHTML = magazines.map((magazine, index) => `
    <button class="magazine-list-card" type="button" data-magazine="${index}" data-ui="MagazineListCard_${index + 1}">
      <img src="${magazine.image}" alt="">
      <span class="magazine-list-copy"><strong>${escapeHTML(magazine.title)}</strong><span>${escapeHTML(magazine.summary)}</span></span>
    </button>
  `).join('');
}

function renderMagazineDetail() {
  const magazine = magazines[state.currentMagazineIndex] || magazines[0];
  document.getElementById('magazine-detail-image').src = magazine.image;
  document.getElementById('magazine-detail-image').alt = magazine.title;
  document.getElementById('magazine-detail-title').textContent = magazine.title;
  document.getElementById('magazine-detail-body').textContent = magazine.body;
}

function normalCommentNumberMap(post) {
  const map = new Map();
  let next = 1;
  post.comments.forEach(comment => {
    if (comment.editor || map.has(comment.userId)) return;
    map.set(comment.userId, next);
    next += 1;
  });
  return map;
}

function renderComments(post) {
  const container = document.getElementById('detail-comments');
  const numbers = normalCommentNumberMap(post);
  if (!post.comments.length) {
    container.innerHTML = '<div class="empty-state" data-ui="PostCommentList_emptyState">첫 댓글을 남겨보세요.</div>';
    return;
  }
  container.innerHTML = [...post.comments].sort((a, b) => a.order - b.order).map((comment, index) => {
    const blocked = state.blockedUsers.has(comment.userId);
    const status = blocked ? 'blocked' : comment.status;
    const messages = {
      deleted: '삭제된 댓글입니다.',
      hidden: '숨김 처리된 댓글입니다.',
      blocked: '차단한 유저입니다.'
    };
    const isException = status !== 'normal';
    const isOwnComment = state.loggedIn && comment.userId === currentUser.id;
    const author = comment.editor ? '에디터 ✓' : `익명${numbers.get(comment.userId)}`;
    const uiName = `PostCommentCard_${index + 1}`;
    return `
      <article class="comment-card${isException ? ' exception' : ''}" data-comment-card="${comment.id}" data-ui="${uiName}">
        <div class="meta"><strong>${escapeHTML(author)}</strong><span>${escapeHTML(comment.time)}</span>${comment.modified ? '<span class="edited">수정됨</span>' : ''}</div>
        <div class="post-body">${escapeHTML(isException ? messages[status] : comment.body)}</div>
        ${isException ? '' : `
          <div class="comment-actions">
            <button class="thread-action${comment.liked ? ' liked' : ''}" type="button" data-comment-like="${comment.id}" aria-label="댓글 좋아요">${icons.heart}<span>${comment.likes}</span></button>
            ${isOwnComment ? '' : `<div class="comment-menu-wrap">
              <button class="comment-more" type="button" data-comment-menu="${comment.id}" aria-label="댓글 더보기" aria-expanded="false">${icons.more}</button>
              <div class="inline-menu" data-inline-menu="${comment.id}" hidden>
                <button type="button" data-comment-report="${comment.id}">신고하기</button>
                <button type="button" data-comment-block="${comment.id}">작성자 차단하기</button>
              </div>
            </div>`}
          </div>`}
      </article>`;
  }).join('');
}

function renderDetail() {
  const post = getPost(state.currentPostId) || visiblePosts()[0] || posts[0];
  state.currentPostId = post.id;
  document.querySelector('[data-screen="detail"]').dataset.currentPostId = post.id;
  document.getElementById('detail-category').textContent = post.category;
  document.getElementById('detail-author').textContent = authorLabel(post);
  document.getElementById('detail-time').textContent = post.time;
  document.getElementById('detail-edited').hidden = !post.modified;
  document.getElementById('detail-title').textContent = post.title;
  document.getElementById('detail-body').textContent = post.body;
  const likeButton = document.getElementById('detail-like');
  likeButton.classList.toggle('liked', post.liked);
  likeButton.innerHTML = `${icons.heart}<span>${post.likes}</span>`;
  document.getElementById('detail-comment-count').innerHTML = `${icons.comment}<span>${commentCount(post)}</span>`;
  document.querySelector('.topbar-more').hidden = state.loggedIn && post.userId === currentUser.id;
  renderComments(post);
  updateCommentComposer();
}

function searchMatches(post, query) {
  const text = `${post.title} ${post.body}`.toLocaleLowerCase('ko');
  const normalized = query.trim().toLocaleLowerCase('ko');
  if (!normalized) return false;
  if (text.includes(normalized)) return true;
  return normalized.split(/\s+/).filter(Boolean).some(token => {
    if (text.includes(token)) return true;
    return token.length >= 2 && text.includes(token.slice(0, 2));
  });
}

function renderSearch() {
  const query = state.searchQuery.trim();
  const results = query
    ? visiblePosts().filter(post => searchMatches(post, query)).sort((a, b) => b.order - a.order)
    : [];
  const summary = document.getElementById('search-summary');
  summary.textContent = query ? `게시글 ${results.length}개 · 최신순` : '검색어를 입력해 주세요.';
  renderPostList('search', results, { emptyText: query ? '검색 결과가 없습니다.' : '제목과 글에서 고민을 찾아보세요.' });
}

function renderMyPosts() {
  const list = visiblePosts().filter(post => post.userId === currentUser.id).sort((a, b) => b.order - a.order);
  renderPostList('my-posts', list, { emptyText: '작성한 글이 없습니다.' });
}

function renderLikedPosts() {
  const list = visiblePosts().filter(post => post.liked).sort((a, b) => (b.likedOrder || b.order) - (a.likedOrder || a.order));
  renderPostList('likes', list, { emptyText: '좋아요한 글이 없습니다.' });
}

// 원글이 삭제되거나 숨김 처리된 경우에도 아이템은 남기고 제목 자리만 대체한다.
function renderMyComments() {
  const items = [];
  posts
    .filter(post => !state.blockedUsers.has(post.userId))
    .forEach(post => {
      post.comments.forEach(comment => {
        if (comment.userId === currentUser.id && comment.status === 'normal') items.push({ post, comment });
      });
    });
  items.sort((a, b) => b.comment.order - a.comment.order);
  document.getElementById('my-comment-list').innerHTML = items.length ? items.map((item, index) => {
    const unavailable = item.post.deleted || item.post.hidden;
    const uiName = `MyCommentCard_${index + 1}`;
    const head = `
      <span class="meta"><strong>${escapeHTML(item.post.category)}</strong><span>${escapeHTML(item.post.time)}</span>${item.comment.modified ? '<span class="edited">수정됨</span>' : ''}</span>
      <span class="my-comment-title${unavailable ? ' unavailable' : ''}">${escapeHTML(unavailable ? '삭제된 글입니다.' : item.post.title)}</span>
      <span class="post-body">${escapeHTML(item.comment.body)}</span>`;
    return unavailable
      ? `<div class="my-comment-card is-unavailable" data-ui="${uiName}">${head}</div>`
      : `<button class="my-comment-card" type="button" data-post-id="${item.post.id}" data-ui="${uiName}">${head}</button>`;
  }).join('') : '<div class="empty-state" data-ui="MyCommentList_emptyState">작성한 댓글이 없습니다.</div>';
}

function renderNotifications() {
  const container = document.querySelector('[data-notification-list]');
  container.innerHTML = notifications.length ? notifications.map((notice, index) => {
    const post = getPost(notice.postId);
    if (!post) return '';
    return `
      <button class="notice-card" type="button" data-post-id="${post.id}" data-ui="NotificationCard_${index + 1}">
        <span class="notice-top"><span class="notice-type">${escapeHTML(notice.type)}</span><span>${escapeHTML(post.category)}</span><span class="notice-time">${escapeHTML(notice.time)}</span></span>
        <span class="notice-title">${escapeHTML(post.title)}</span>
        <span class="notice-body">${escapeHTML(notice.body)}</span>
      </button>`;
  }).join('') : '<div class="empty-state" data-ui="NotificationList_emptyState">새 알림이 없습니다.</div>';
}

function renderWithdrawReasons() {
  document.getElementById('withdraw-reasons').innerHTML = withdrawalReasons.map((reason, index) => `
    <label class="reason-option" data-ui="WithdrawalReasonOption_${index + 1}"><input type="checkbox" name="withdraw-reason" value="${escapeHTML(reason)}"><span>${escapeHTML(reason)}</span></label>
  `).join('');
}

function renderAccount() {
  document.getElementById('mypage-provider').textContent = `${currentUser.provider}로 로그인`;
  document.getElementById('account-provider').textContent = currentUser.provider;
}

function updateNotificationDot() {
  const dot = document.querySelector('.notification-dot');
  if (dot) dot.hidden = !state.hasUnreadNotification;
}

function renderAllLists() {
  renderHome();
  renderCommunity();
  renderSearch();
  renderMyPosts();
  renderLikedPosts();
  renderMyComments();
  renderNotifications();
  renderAccount();
  updateNotificationDot();
}

function show(screenName, push = true) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.toggle('active', screen.dataset.screen === screenName));
  state.currentScreen = screenName;
  if (push && state.stack[state.stack.length - 1] !== screenName) state.stack.push(screenName);

  if (screenName === 'detail') renderDetail();
  if (screenName === 'community') renderCommunity();
  if (screenName === 'search') renderSearch();
  if (screenName === 'my-posts') renderMyPosts();
  if (screenName === 'my-comments') renderMyComments();
  if (screenName === 'likes') renderLikedPosts();
  if (screenName === 'notifications') {
    state.hasUnreadNotification = false;
    updateNotificationDot();
    renderNotifications();
  }
  if (screenName === 'magazines') renderMagazineList();
  if (screenName === 'magazine-detail') renderMagazineDetail();

  const topbar = document.querySelector('.topbar');
  const isRoot = rootScreens.has(screenName);
  topbar.classList.toggle('subpage', !isRoot);
  topbar.classList.toggle('detail-mode', screenName === 'detail');
  document.querySelector('.topbar-title').textContent = titles[screenName] || 'Yo!';
  document.querySelector('.topbar-search').hidden = !isRoot;
  document.querySelector('.topbar-notification').hidden = !isRoot;
  document.querySelector('.tabs').hidden = !isRoot;
  document.querySelectorAll('[data-tab]').forEach(tab => tab.classList.toggle('active', tab.dataset.tab === screenName));

  if (screenName === 'search') window.setTimeout(() => document.getElementById('search-input').focus(), 0);
}

function openPost(postId, push = true) {
  const post = getPost(postId);
  if (!post || post.deleted || post.hidden || state.blockedUsers.has(post.userId)) return;
  if (state.currentPostId !== postId) {
    document.getElementById('comment-input').value = '';
    updateCommentComposer();
  }
  state.currentPostId = postId;
  show('detail', push);
}

function openMagazine(index) {
  state.currentMagazineIndex = Number(index) || 0;
  show('magazine-detail');
}

function goBack() {
  if (!document.getElementById('modal-layer').hidden) {
    closeModal();
    return;
  }
  if (state.stack.length > 1) state.stack.pop();
  show(state.stack[state.stack.length - 1] || 'home', false);
}

function toast(message) {
  const node = document.getElementById('toast');
  window.clearTimeout(state.toastTimer);
  node.textContent = message;
  node.hidden = false;
  state.toastTimer = window.setTimeout(() => { node.hidden = true; }, 2200);
}

function openModal(markup) {
  const layer = document.getElementById('modal-layer');
  document.getElementById('modal-panel').innerHTML = markup;
  layer.hidden = false;
  window.setTimeout(() => document.querySelector('#modal-panel button, #modal-panel input')?.focus(), 0);
}

function closeModal() {
  document.getElementById('modal-layer').hidden = true;
  document.getElementById('modal-panel').innerHTML = '';
  state.reportTarget = null;
  state.blockTarget = null;
}

function modalHead(title, description = '') {
  return `
    <div class="modal-head">
      <div class="modal-head-copy"><h2 id="modal-title">${escapeHTML(title)}</h2>${description ? `<p>${escapeHTML(description)}</p>` : ''}</div>
      <button class="modal-close" type="button" data-action="close-modal" aria-label="닫기">×</button>
    </div>`;
}

function openLoginGate() {
  const appleButton = `
    <button class="provider-button apple" type="button" data-login-provider="Apple">
      <strong>Apple로 계속하기</strong><span>iOS</span>
    </button>`;
  openModal(`
    ${modalHead('로그인이 필요한 기능입니다.', '로그인 후 지금 보던 화면으로 돌아올게요.')}
    <div class="provider-list">
      <button class="provider-button kakao" type="button" data-login-provider="카카오"><strong>카카오로 계속하기</strong><span>이메일 필수</span></button>
      ${appleButton}
    </div>`);
}

function openStatusModal(title, description, confirmText = '확인') {
  openModal(`
    ${modalHead(title, description)}
    <button class="primary-button" type="button" data-action="close-modal">${escapeHTML(confirmText)}</button>`);
}

// 정지 안내는 앱 진입 시와 사용 중 서버 호출 시점에 노출하고, 확인 시 앱을 종료한다.
function openSuspendedModal() {
  openModal(`
    ${modalHead('서비스 이용 정지', '운영 정책 위반으로 서비스 이용이 정지되었습니다. 자세한 내용은 고객센터로 문의해 주세요.')}
    <button class="primary-button" type="button" data-action="exit-app" data-ui="SuspendedModal_confirmButton">확인</button>`);
}

function exitApp() {
  closeModal();
  document.getElementById('exit-layer').hidden = false;
}

function requireMember(action) {
  if (state.userStatus === 'suspended') {
    openSuspendedModal();
    return;
  }
  if (state.userStatus === 'withdrawn') {
    openStatusModal('탈퇴한 계정입니다.', '기존 로그인 정보로 회원 기능을 이용할 수 없습니다. 비회원으로 콘텐츠를 둘러볼 수 있어요.');
    return;
  }
  if (!state.loggedIn) {
    state.pendingMemberAction = action;
    openLoginGate();
    return;
  }
  performMemberAction(action);
}

function performMemberAction(action) {
  if (!action) return;
  if (action.type === 'open') show(action.screen);
  if (action.type === 'like-post') togglePostLike(action.postId);
  if (action.type === 'like-comment') toggleCommentLike(action.commentId);
  if (action.type === 'report') openReportDialog(action.target);
  if (action.type === 'block') openBlockDialog(action.target);
  if (action.type === 'submit-comment') {
    toast('작성 중인 댓글을 복원했어요. 내용을 확인하고 등록해 주세요.');
    window.setTimeout(() => document.getElementById('comment-input').focus(), 0);
  }
}

function completeLogin(provider) {
  state.loggedIn = true;
  currentUser.provider = provider;
  closeModal();
  const pending = state.pendingMemberAction;
  state.pendingMemberAction = null;
  toast(`${provider} 로그인이 완료되었습니다.`);
  renderAccount();
  if (state.currentScreen === 'detail') renderDetail();
  performMemberAction(pending);
}

function togglePostLike(postId) {
  const post = getPost(postId);
  if (!post) return;
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  if (post.liked) post.likedOrder = Date.now();
  renderAllLists();
  if (state.currentScreen === 'detail' && state.currentPostId === postId) renderDetail();
}

function findComment(commentId) {
  for (const post of posts) {
    const comment = post.comments.find(item => item.id === commentId);
    if (comment) return { post, comment };
  }
  return null;
}

function toggleCommentLike(commentId) {
  const found = findComment(commentId);
  if (!found) return;
  found.comment.liked = !found.comment.liked;
  found.comment.likes += found.comment.liked ? 1 : -1;
  renderComments(found.post);
}

function openPostMenu() {
  const post = getPost(state.currentPostId);
  if (!post) return;
  openModal(`
    ${modalHead('게시글 더보기')}
    <div class="action-list">
      <button class="action-button" type="button" data-action="report-post">신고하기 <span>›</span></button>
      <button class="action-button danger" type="button" data-action="block-post">작성자 차단하기 <span>›</span></button>
    </div>`);
}

function openReportDialog(target) {
  state.reportTarget = target;
  // 원문 기준 신고 사유. 필수, 단수 선택, 자유 입력 없음.
  const reasons = ['욕설·비방·혐오 표현', '성적·선정적인 내용', '광고·홍보·도배', '개인정보 노출 또는 사칭', '폭력·위협·불법적인 내용'];
  openModal(`
    ${modalHead('신고 사유를 선택해 주세요.', '운영진이 내용을 확인한 후 운영 정책에 따라 조치합니다.')}
    <div class="report-options">
      ${reasons.map((reason, index) => `<label class="report-option" data-ui="ReportModal_reasonOption_${index + 1}"><input type="radio" name="report-reason" value="${escapeHTML(reason)}"><span>${escapeHTML(reason)}</span></label>`).join('')}
    </div>
    <p class="modal-warning">허위 신고 시 불이익을 받을 수 있습니다.</p>
    <div class="modal-actions"><button class="cancel" type="button" data-action="close-modal">취소</button><button class="confirm" id="report-confirm" type="button" data-action="confirm-report" disabled>신고하기</button></div>`);
}

function openBlockDialog(target) {
  state.blockTarget = target;
  openModal(`
    ${modalHead('작성자를 차단할까요?', '이 작성자의 게시글 내용은 보이지 않고, 댓글은 차단 상태로 표시됩니다.')}
    <div class="modal-actions"><button class="cancel" type="button" data-action="close-modal">취소</button><button class="confirm danger" type="button" data-action="confirm-block">차단하기</button></div>`);
}

function confirmReport() {
  const selected = document.querySelector('input[name="report-reason"]:checked');
  if (!selected || !state.reportTarget) return;
  closeModal();
  toast('신고가 접수되었습니다.');
}

function confirmBlock() {
  const target = state.blockTarget;
  if (!target?.userId) return;
  state.blockedUsers.add(target.userId);
  const blockedPostIsOpen = target.type === 'post' && getPost(state.currentPostId)?.userId === target.userId;
  closeModal();
  renderAllLists();
  if (blockedPostIsOpen) {
    if (state.stack[state.stack.length - 1] === 'detail') state.stack.pop();
    show(state.stack[state.stack.length - 1] || 'community', false);
  } else if (state.currentScreen === 'detail') {
    renderDetail();
  }
  toast('작성자를 차단했습니다.');
}

function enforceLimit(input, max, message) {
  if (input.value.length <= max) return;
  input.value = input.value.slice(0, max);
  toast(message);
}

function updateWriteForm() {
  const title = document.getElementById('write-title');
  const body = document.getElementById('write-body');
  enforceLimit(title, 40, '제목은 공백 포함 최대 40자까지 입력할 수 있어요.');
  enforceLimit(body, 2000, '글은 공백 포함 최대 2000자까지 입력할 수 있어요.');
  document.getElementById('write-title-counter').textContent = `${title.value.length}/40`;
  document.getElementById('write-body-counter').textContent = `${body.value.length}/2000`;
  document.getElementById('write-submit').disabled = title.value.length < 1 || body.value.length < 1;
}

function submitPost() {
  const category = document.getElementById('write-category').value;
  const title = document.getElementById('write-title').value;
  const body = document.getElementById('write-body').value;
  if (!title.length || !body.length) return;
  const newPost = {
    id: `post_${Date.now()}`,
    userId: currentUser.id,
    category,
    title,
    body,
    time: '방금 전',
    hoursAgo: 0,
    order: Math.max(...posts.map(post => post.order)) + 1,
    likes: 0,
    liked: false,
    commentTotal: 0,
    modified: false,
    comments: []
  };
  posts.push(newPost);
  document.getElementById('write-form').reset();
  document.getElementById('write-category').value = categories[0];
  updateWriteForm();
  state.selectedCategory = '전체';
  state.communityLimit = 4;
  state.stack = ['community'];
  renderAllLists();
  show('community', false);
  toast('고민이 등록되었습니다.');
}

function updateCommentComposer() {
  const input = document.getElementById('comment-input');
  enforceLimit(input, 500, '댓글은 공백 포함 최대 500자까지 입력할 수 있어요.');
  document.getElementById('comment-counter').textContent = `${input.value.length}/500`;
  document.getElementById('comment-submit').disabled = input.value.trim().length < 1;
}

function submitComment() {
  const input = document.getElementById('comment-input');
  if (!input.value.trim().length) return;
  if (!state.loggedIn) {
    requireMember({ type: 'submit-comment' });
    return;
  }
  const post = getPost(state.currentPostId);
  if (!post) return;
  const highestOrder = post.comments.length ? Math.max(...post.comments.map(comment => comment.order)) : 0;
  post.comments.push({
    id: `comment_${Date.now()}`,
    userId: currentUser.id,
    body: input.value,
    time: '방금 전',
    order: highestOrder + 1,
    likes: 0,
    liked: false,
    status: 'normal',
    modified: false
  });
  post.commentTotal = commentCount(post) + 1;
  input.value = '';
  updateCommentComposer();
  renderAllLists();
  renderDetail();
  document.getElementById('detail-comments').lastElementChild?.scrollIntoView({ block: 'nearest' });
  toast('댓글이 등록되었습니다.');
}

// 앱 공유는 마이페이지의 요니버스 앱 공유하기 메뉴에서만 제공한다.
async function shareApp() {
  const shareData = {
    title: '요니버스',
    text: '익명으로 연애 고민을 나누는 요니버스',
    url: window.location.href
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }
  toast('OS 공유 옵션을 여는 자리입니다.');
}

// 연결 주소가 아직 공유되지 않은 외부 이동 메뉴
const externalLinks = {
  instagram: '요매거진 Instagram',
  marpple: '마플샵',
  kakao: '요니버스 카카오 문의톡'
};

function openExternal(key) {
  const label = externalLinks[key];
  if (!label) return;
  toast(`${label} 연결 주소는 아직 준비 중이에요.`);
}

function showInfo(infoKey) {
  const content = infoContent[infoKey];
  if (!content) return;
  document.getElementById('info-title').textContent = content.title;
  document.getElementById('info-body').textContent = content.body;
  titles.info = content.title;
  show('info');
}

function logout() {
  state.loggedIn = false;
  state.pendingMemberAction = null;
  state.stack = ['home'];
  show('home', false);
  toast('로그아웃되었습니다.');
}

function updateWithdrawForm() {
  const note = document.getElementById('withdraw-note');
  enforceLimit(note, 500, '자유 입력은 공백 포함 최대 500자까지 입력할 수 있어요.');
  document.getElementById('withdraw-note-counter').textContent = `${note.value.length}/500`;
  const reasonChecked = Boolean(document.querySelector('input[name="withdraw-reason"]:checked'));
  const consentChecked = document.getElementById('withdraw-consent').checked;
  document.getElementById('withdraw-submit').disabled = !reasonChecked || !consentChecked;
}

function completeWithdrawal() {
  const reasonChecked = Boolean(document.querySelector('input[name="withdraw-reason"]:checked'));
  const consentChecked = document.getElementById('withdraw-consent').checked;
  if (!reasonChecked || !consentChecked) return;
  state.loggedIn = false;
  state.userStatus = 'withdrawn';
  state.pendingMemberAction = null;
  state.stack = ['withdraw-complete'];
  show('withdraw-complete', false);
}

function browseAsGuest() {
  state.stack = ['home'];
  show('home', false);
}

function closeInlineMenus(exceptId = '') {
  document.querySelectorAll('[data-inline-menu]').forEach(menu => {
    if (menu.dataset.inlineMenu !== exceptId) menu.hidden = true;
  });
  document.querySelectorAll('[data-comment-menu]').forEach(button => {
    if (button.dataset.commentMenu !== exceptId) button.setAttribute('aria-expanded', 'false');
  });
}

function initializeObserver() {
  const sentinel = document.querySelector('[data-community-sentinel]');
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) loadMoreCommunity();
  }, { root: document.querySelector('[data-screen="community"]'), rootMargin: '120px' });
  observer.observe(sentinel);
}

document.addEventListener('click', event => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  const tab = event.target.closest('[data-tab]');
  const memberTab = event.target.closest('[data-member-tab]');
  const memberOpen = event.target.closest('[data-member-open]');
  const open = event.target.closest('[data-open]');
  const postNode = event.target.closest('[data-post-id]');
  const postLike = event.target.closest('[data-like-id]');
  const commentButton = event.target.closest('[data-comment-id]');
  const categoryChip = event.target.closest('[data-chip]');
  const magazineButton = event.target.closest('[data-magazine]');
  const commentLike = event.target.closest('[data-comment-like]');
  const commentMenu = event.target.closest('[data-comment-menu]');
  const commentReport = event.target.closest('[data-comment-report]');
  const commentBlock = event.target.closest('[data-comment-block]');
  const infoButton = event.target.closest('[data-info]');
  const externalButton = event.target.closest('[data-external]');
  const loginProvider = event.target.closest('[data-login-provider]');

  if (loginProvider) {
    completeLogin(loginProvider.dataset.loginProvider);
    return;
  }

  if (commentMenu) {
    event.stopPropagation();
    const id = commentMenu.dataset.commentMenu;
    const menu = document.querySelector(`[data-inline-menu="${id}"]`);
    const willOpen = menu.hidden;
    closeInlineMenus(id);
    menu.hidden = !willOpen;
    commentMenu.setAttribute('aria-expanded', String(willOpen));
    return;
  }

  if (commentReport || commentBlock) {
    event.stopPropagation();
    const id = commentReport?.dataset.commentReport || commentBlock?.dataset.commentBlock;
    const found = findComment(id);
    if (!found) return;
    closeInlineMenus();
    const target = { type: 'comment', postId: found.post.id, commentId: id, userId: found.comment.userId };
    requireMember({ type: commentReport ? 'report' : 'block', target });
    return;
  }

  if (commentLike) {
    event.stopPropagation();
    requireMember({ type: 'like-comment', commentId: commentLike.dataset.commentLike });
    return;
  }

  if (postLike) {
    event.stopPropagation();
    requireMember({ type: 'like-post', postId: postLike.dataset.likeId });
    return;
  }

  if (commentButton) {
    event.stopPropagation();
    openPost(commentButton.dataset.commentId);
    window.setTimeout(() => document.getElementById('comment-input').focus(), 0);
    return;
  }

  if (magazineButton) {
    openMagazine(magazineButton.dataset.magazine);
    return;
  }

  if (categoryChip) {
    state.selectedCategory = categoryChip.dataset.chip;
    state.communityLimit = 4;
    renderCommunity();
    return;
  }

  if (memberTab) {
    requireMember({ type: 'open', screen: memberTab.dataset.memberTab });
    return;
  }

  if (memberOpen) {
    requireMember({ type: 'open', screen: memberOpen.dataset.memberOpen });
    return;
  }

  if (tab) {
    state.stack = [tab.dataset.tab];
    show(tab.dataset.tab, false);
    return;
  }

  if (open) {
    show(open.dataset.open);
    return;
  }

  if (externalButton) {
    openExternal(externalButton.dataset.external);
    return;
  }

  if (infoButton) {
    showInfo(infoButton.dataset.info);
    return;
  }

  if (postNode) {
    openPost(postNode.dataset.postId);
    return;
  }

  if (action === 'back') goBack();
  else if (action === 'close-modal') closeModal();
  else if (action === 'open-search') show('search');
  else if (action === 'open-notifications') requireMember({ type: 'open', screen: 'notifications' });
  else if (action === 'open-community') {
    state.stack = ['community'];
    show('community', false);
  }
  else if (action === 'open-post-menu') openPostMenu();
  else if (action === 'like-current') requireMember({ type: 'like-post', postId: state.currentPostId });
  else if (action === 'focus-comment') document.getElementById('comment-input').focus();
  else if (action === 'submit-comment') submitComment();
  else if (action === 'share-app') shareApp();
  else if (action === 'clear-search') {
    state.searchQuery = '';
    document.getElementById('search-input').value = '';
    renderSearch();
    document.getElementById('search-input').focus();
  }
  else if (action === 'report-post') {
    const post = getPost(state.currentPostId);
    closeModal();
    requireMember({ type: 'report', target: { type: 'post', postId: post.id, userId: post.userId } });
  }
  else if (action === 'block-post') {
    const post = getPost(state.currentPostId);
    closeModal();
    requireMember({ type: 'block', target: { type: 'post', postId: post.id, userId: post.userId } });
  }
  else if (action === 'confirm-report') confirmReport();
  else if (action === 'confirm-block') confirmBlock();
  else if (action === 'open-os-settings') openStatusModal('알림 설정', '휴대폰 설정 > 앱 설정 > 알림 권한을 통해 설정해 주세요.');
  else if (action === 'logout') logout();
  else if (action === 'browse-as-guest') browseAsGuest();
  else if (action === 'exit-app') exitApp();
  else closeInlineMenus();
});

document.addEventListener('change', event => {
  if (event.target.matches('input[name="report-reason"]')) {
    document.getElementById('report-confirm').disabled = false;
  }
});

document.getElementById('write-form').addEventListener('submit', event => {
  event.preventDefault();
  submitPost();
});
document.getElementById('write-title').addEventListener('input', updateWriteForm);
document.getElementById('write-body').addEventListener('input', updateWriteForm);
document.getElementById('comment-input').addEventListener('input', updateCommentComposer);
document.getElementById('comment-input').addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    submitComment();
  }
});
document.getElementById('search-input').addEventListener('input', event => {
  state.searchQuery = event.target.value;
  renderSearch();
});
document.getElementById('withdraw-form').addEventListener('submit', event => {
  event.preventDefault();
  completeWithdrawal();
});
document.getElementById('withdraw-note').addEventListener('input', updateWithdrawForm);
document.getElementById('withdraw-form').addEventListener('change', updateWithdrawForm);

const hero = document.querySelector('.hero');
hero.addEventListener('scroll', () => {
  const index = Math.round(hero.scrollLeft / hero.clientWidth) + 1;
  document.querySelector('.hero-pagination').textContent = `${Math.min(Math.max(index, 1), 4)}/4`;
}, { passive: true });

function initialize() {
  const now = new Date();
  document.getElementById('status-time').textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  selectRecentLove();
  renderCategories();
  renderMagazineRail();
  renderMagazineList();
  renderWithdrawReasons();
  renderAllLists();
  updateWriteForm();
  updateWithdrawForm();
  updateCommentComposer();
  initializeObserver();
  show('home', false);
}

initialize();
