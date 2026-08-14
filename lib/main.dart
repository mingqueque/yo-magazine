import 'package:flutter/material.dart';

void main() {
  runApp(const YoMagazineApp());
}

class YoMagazineApp extends StatelessWidget {
  const YoMagazineApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '요매거진',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF111111)),
        scaffoldBackgroundColor: const Color(0xFFF7F7F7),
        appBarTheme: const AppBarTheme(
          centerTitle: false,
          backgroundColor: Colors.white,
          surfaceTintColor: Colors.white,
          foregroundColor: Color(0xFF111111),
        ),
      ),
      home: const MainShell(),
    );
  }
}

class MainShell extends StatefulWidget {
  const MainShell({super.key});

  @override
  State<MainShell> createState() => _MainShellState();
}

class _MainShellState extends State<MainShell> {
  int _currentIndex = 0;

  final _pages = const [
    HomePage(),
    CommunityPage(),
    MyPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(index: _currentIndex, children: _pages),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) => setState(() => _currentIndex = index),
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            selectedIcon: Icon(Icons.home),
            label: '홈',
          ),
          NavigationDestination(
            icon: Icon(Icons.forum_outlined),
            selectedIcon: Icon(Icons.forum),
            label: '커뮤니티',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outline),
            selectedIcon: Icon(Icons.person),
            label: '마이페이지',
          ),
        ],
      ),
    );
  }
}

class Category {
  const Category(this.name, this.description);

  final String name;
  final String description;
}

class Post {
  const Post({
    required this.category,
    required this.title,
    required this.body,
    required this.author,
    required this.time,
    required this.likes,
    required this.comments,
    this.bookmarked = false,
    this.edited = false,
  });

  final String category;
  final String title;
  final String body;
  final String author;
  final String time;
  final int likes;
  final int comments;
  final bool bookmarked;
  final bool edited;
}

const categories = [
  Category('썸/소개팅', '마음이 불확실한 첫 만남과 썸'),
  Category('짝사랑', '혼자 좋아하는 마음과 고백 고민'),
  Category('연애', '연락, 데이트, 서운함, 다툼'),
  Category('재회', '전애인 연락과 재회 가능성'),
  Category('이별', '이별 직전과 이별 후 회복'),
  Category('권태기/장기연애', '오래된 관계와 미래 고민'),
  Category('연애 고민', '분류하기 어려운 진지한 고민'),
  Category('연애 잡담', '가벼운 질문, 밸런스게임, 경험담'),
];

const samplePosts = [
  Post(
    category: '썸/소개팅',
    title: '소개팅 후 연락 텀이 갑자기 길어졌어요',
    body: '처음에는 답장이 빠른 편이었는데 어제부터 반나절씩 늦어져요. 제가 먼저 한 번 더 연락해도 될까요?',
    author: '익명1',
    time: '5분 전',
    likes: 12,
    comments: 8,
  ),
  Post(
    category: '연애',
    title: '애인이 이성 친구랑 단둘이 술 마시는 거',
    body: '가능하다고 보는 편인가요? 저는 괜찮다고 생각했는데 막상 들으니 기분이 이상해요.',
    author: '익명2',
    time: '18분 전',
    likes: 34,
    comments: 21,
    bookmarked: true,
  ),
  Post(
    category: '이별',
    title: '헤어진 지 일주일인데 계속 SNS를 보게 돼요',
    body: '안 봐야 하는 걸 아는데 습관처럼 확인하게 됩니다. 다들 어떻게 끊었나요?',
    author: '익명3',
    time: '42분 전',
    likes: 19,
    comments: 14,
    edited: true,
  ),
  Post(
    category: '권태기/장기연애',
    title: '장기연애 중 결혼 이야기가 부담스러워요',
    body: '좋아하는 마음은 있는데 미래 얘기가 나올 때마다 제가 준비가 안 된 것 같아요.',
    author: '익명4',
    time: '1시간 전',
    likes: 7,
    comments: 5,
  ),
];

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('요매거진'),
        actions: [
          IconButton(
            tooltip: '알림',
            onPressed: () => _push(context, const SettingsPage(initialSection: '알림 설정')),
            icon: const Icon(Icons.notifications_none),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
        children: [
          _BannerCard(
            title: '이번 주 연애 고민',
            subtitle: '같은 상황의 사람들과 이야기를 나눠보세요.',
            action: '인스타그램 이동',
            onTap: () => _push(context, const ExternalLinksPage()),
          ),
          const SizedBox(height: 18),
          _SectionHeader(
            title: '카테고리별 게시판',
            action: '전체',
            onActionTap: () => _push(context, const CategoryListPage()),
          ),
          const SizedBox(height: 8),
          _CategoryGrid(onTap: (category) => _push(context, CategoryFeedPage(category: category))),
          const SizedBox(height: 18),
          const _SectionHeader(title: '인기 고민'),
          const SizedBox(height: 8),
          ...samplePosts
              .map((post) => PostListTile(post: post, onTap: () => _push(context, PostDetailPage(post: post)))),
        ],
      ),
    );
  }
}

class CommunityPage extends StatefulWidget {
  const CommunityPage({super.key});

  @override
  State<CommunityPage> createState() => _CommunityPageState();
}

class _CommunityPageState extends State<CommunityPage> {
  String _sort = '최신순';
  String _selectedCategory = '전체';

  @override
  Widget build(BuildContext context) {
    final filteredPosts = _selectedCategory == '전체'
        ? samplePosts
        : samplePosts.where((post) => post.category == _selectedCategory).toList();

    return Scaffold(
      appBar: AppBar(
        title: const Text('커뮤니티'),
        actions: [
          IconButton(
            tooltip: '검색',
            onPressed: () {},
            icon: const Icon(Icons.search),
          ),
          IconButton(
            tooltip: '글쓰기',
            onPressed: () => _push(context, const WritePostPage()),
            icon: const Icon(Icons.edit_square),
          ),
        ],
      ),
      body: Column(
        children: [
          SizedBox(
            height: 48,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              children: [
                _FilterChip(
                  label: '전체',
                  selected: _selectedCategory == '전체',
                  onTap: () => setState(() => _selectedCategory = '전체'),
                ),
                ...categories.map(
                  (category) => _FilterChip(
                    label: category.name,
                    selected: _selectedCategory == category.name,
                    onTap: () => setState(() => _selectedCategory = category.name),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
            child: Row(
              children: [
                Text(
                  _selectedCategory,
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700),
                ),
                const Spacer(),
                SegmentedButton<String>(
                  segments: const [
                    ButtonSegment(value: '최신순', label: Text('최신순')),
                    ButtonSegment(value: '좋아요순', label: Text('좋아요순')),
                  ],
                  selected: {_sort},
                  showSelectedIcon: false,
                  onSelectionChanged: (value) => setState(() => _sort = value.first),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
              children: [
                if (filteredPosts.isEmpty)
                  const EmptyState(title: '아직 게시글이 없습니다.', subtitle: '첫 고민을 작성해보세요.'),
                ...filteredPosts.map(
                  (post) => PostListTile(post: post, onTap: () => _push(context, PostDetailPage(post: post))),
                ),
              ],
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _push(context, const WritePostPage()),
        child: const Icon(Icons.edit),
      ),
    );
  }
}

class MyPage extends StatelessWidget {
  const MyPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('마이페이지'),
        actions: [
          IconButton(
            tooltip: '설정',
            onPressed: () => _push(context, const SettingsPage()),
            icon: const Icon(Icons.settings_outlined),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: _boxDecoration(),
            child: Row(
              children: [
                const CircleAvatar(radius: 28, child: Text('익')),
                const SizedBox(width: 12),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('익명7', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
                      SizedBox(height: 4),
                      Text('카카오 간편로그인 연결됨', style: TextStyle(color: Colors.black54)),
                    ],
                  ),
                ),
                OutlinedButton(onPressed: () {}, child: const Text('탈퇴')),
              ],
            ),
          ),
          const SizedBox(height: 16),
          _MenuGroup(
            items: [
              MenuItem('내가 작성한 글', Icons.article_outlined, () => _push(context, const MyContentPage(title: '내가 작성한 글'))),
              MenuItem('내가 작성한 댓글', Icons.chat_bubble_outline, () => _push(context, const MyContentPage(title: '내가 작성한 댓글'))),
              MenuItem('북마크한 글', Icons.bookmark_border, () => _push(context, const MyContentPage(title: '북마크한 글'))),
            ],
          ),
          const SizedBox(height: 12),
          _MenuGroup(
            items: [
              MenuItem('신고/차단 관리', Icons.block_outlined, () => _push(context, const BlockManagePage())),
              MenuItem('알림 설정', Icons.notifications_none, () => _push(context, const SettingsPage(initialSection: '알림 설정'))),
              MenuItem('외부 연결', Icons.open_in_new, () => _push(context, const ExternalLinksPage())),
            ],
          ),
          const SizedBox(height: 12),
          _MenuGroup(
            items: [
              MenuItem('이용약관', Icons.description_outlined, () => _push(context, const PolicyPage(title: '이용약관'))),
              MenuItem('개인정보처리방침', Icons.privacy_tip_outlined, () => _push(context, const PolicyPage(title: '개인정보처리방침'))),
            ],
          ),
        ],
      ),
    );
  }
}

class CategoryListPage extends StatelessWidget {
  const CategoryListPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('카테고리')),
      body: ListView.separated(
        itemCount: categories.length,
        separatorBuilder: (_, __) => const Divider(height: 1),
        itemBuilder: (context, index) {
          final category = categories[index];
          return ListTile(
            title: Text(category.name),
            subtitle: Text(category.description),
            trailing: const Icon(Icons.chevron_right),
            onTap: () => _push(context, CategoryFeedPage(category: category)),
          );
        },
      ),
    );
  }
}

class CategoryFeedPage extends StatelessWidget {
  const CategoryFeedPage({required this.category, super.key});

  final Category category;

  @override
  Widget build(BuildContext context) {
    final posts = samplePosts.where((post) => post.category == category.name).toList();

    return Scaffold(
      appBar: AppBar(title: Text(category.name)),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
        children: [
          Text(category.description, style: const TextStyle(color: Colors.black54)),
          const SizedBox(height: 12),
          if (posts.isEmpty) const EmptyState(title: '아직 게시글이 없습니다.', subtitle: '첫 고민을 작성해보세요.'),
          ...posts.map((post) => PostListTile(post: post, onTap: () => _push(context, PostDetailPage(post: post)))),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _push(context, const WritePostPage()),
        child: const Icon(Icons.edit),
      ),
    );
  }
}

class PostDetailPage extends StatelessWidget {
  const PostDetailPage({required this.post, super.key});

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(post.category),
        actions: [
          IconButton(tooltip: '공유', onPressed: () {}, icon: const Icon(Icons.ios_share)),
          PopupMenuButton<String>(
            onSelected: (value) {
              if (value == 'report') _push(context, ReportPage(target: post.title));
              if (value == 'block') _showSnack(context, '${post.author}님을 차단했습니다.');
            },
            itemBuilder: (context) => const [
              PopupMenuItem(value: 'edit', child: Text('수정')),
              PopupMenuItem(value: 'delete', child: Text('삭제')),
              PopupMenuDivider(),
              PopupMenuItem(value: 'report', child: Text('신고')),
              PopupMenuItem(value: 'block', child: Text('작성자 차단')),
            ],
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 88),
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: _boxDecoration(),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Text(post.author, style: const TextStyle(fontWeight: FontWeight.w700)),
                    const SizedBox(width: 8),
                    Text(post.time, style: const TextStyle(color: Colors.black45)),
                    if (post.edited) const Text(' · 수정됨', style: TextStyle(color: Colors.black45)),
                  ],
                ),
                const SizedBox(height: 12),
                Text(post.title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800)),
                const SizedBox(height: 12),
                Text(post.body, style: const TextStyle(fontSize: 16, height: 1.45)),
                const SizedBox(height: 16),
                Row(
                  children: [
                    _ActionButton(icon: Icons.thumb_up_outlined, label: '좋아요 ${post.likes}', onTap: () {}),
                    const SizedBox(width: 8),
                    _ActionButton(
                      icon: post.bookmarked ? Icons.bookmark : Icons.bookmark_border,
                      label: '북마크',
                      onTap: () {},
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 18),
          Text('댓글 ${post.comments}', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
          const SizedBox(height: 8),
          const CommentTile(
            author: '익명8',
            body: '상대가 바쁜 상황인지 먼저 확인해보는 게 좋을 것 같아요.',
            time: '3분 전',
            likes: 2,
          ),
          const CommentTile.deleted(),
          const CommentTile(
            author: '익명9',
            body: '저라면 한 번만 더 자연스럽게 연락해볼 것 같아요.',
            time: '10분 전',
            likes: 5,
            edited: true,
          ),
        ],
      ),
      bottomSheet: SafeArea(
        top: false,
        child: Container(
          color: Colors.white,
          padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
          child: Row(
            children: [
              const Expanded(
                child: TextField(
                  decoration: InputDecoration(
                    hintText: '댓글을 입력하세요',
                    border: OutlineInputBorder(),
                    isDense: true,
                  ),
                ),
              ),
              const SizedBox(width: 8),
              FilledButton(onPressed: () {}, child: const Text('등록')),
            ],
          ),
        ),
      ),
    );
  }
}

class WritePostPage extends StatelessWidget {
  const WritePostPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('글쓰기'),
        actions: [TextButton(onPressed: () => Navigator.pop(context), child: const Text('등록'))],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          DropdownButtonFormField<String>(
            decoration: const InputDecoration(labelText: '카테고리', border: OutlineInputBorder()),
            items: categories.map((category) => DropdownMenuItem(value: category.name, child: Text(category.name))).toList(),
            onChanged: (_) {},
          ),
          const SizedBox(height: 12),
          const TextField(
            decoration: InputDecoration(labelText: '제목', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 12),
          const TextField(
            minLines: 8,
            maxLines: 12,
            decoration: InputDecoration(
              labelText: '내용',
              hintText: '상황을 자세히 적어주세요.',
              border: OutlineInputBorder(),
            ),
          ),
        ],
      ),
    );
  }
}

class ReportPage extends StatefulWidget {
  const ReportPage({required this.target, super.key});

  final String target;

  @override
  State<ReportPage> createState() => _ReportPageState();
}

class _ReportPageState extends State<ReportPage> {
  String? _reason;

  final reasons = const [
    '욕설/비방',
    '개인정보 노출',
    '성적 콘텐츠',
    '도배/광고',
    '외부 연락처 유도',
    '기타',
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('신고하기')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(widget.target, style: const TextStyle(fontWeight: FontWeight.w700)),
          const SizedBox(height: 12),
          ...reasons.map(
            (reason) => RadioListTile<String>(
              value: reason,
              groupValue: _reason,
              onChanged: (value) => setState(() => _reason = value),
              title: Text(reason),
            ),
          ),
          const SizedBox(height: 12),
          FilledButton(
            onPressed: _reason == null ? null : () => Navigator.pop(context),
            child: const Text('신고 접수'),
          ),
        ],
      ),
    );
  }
}

class SettingsPage extends StatelessWidget {
  const SettingsPage({this.initialSection, super.key});

  final String? initialSection;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(initialSection ?? '설정')),
      body: ListView(
        children: [
          SwitchListTile(
            value: true,
            onChanged: (_) {},
            title: const Text('댓글 알림'),
            subtitle: const Text('내 글에 댓글이 달리면 알림을 받습니다.'),
          ),
          SwitchListTile(
            value: false,
            onChanged: (_) {},
            title: const Text('인기글 알림'),
            subtitle: const Text('인기 고민과 공지 알림을 받습니다.'),
          ),
          const Divider(height: 1),
          ListTile(
            leading: const Icon(Icons.block_outlined),
            title: const Text('신고/차단 관련 관리'),
            trailing: const Icon(Icons.chevron_right),
            onTap: () => _push(context, const BlockManagePage()),
          ),
        ],
      ),
    );
  }
}

class BlockManagePage extends StatelessWidget {
  const BlockManagePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('신고/차단 관리')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text('차단한 사용자', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
          const SizedBox(height: 8),
          Container(
            decoration: _boxDecoration(),
            child: ListTile(
              title: const Text('익명12'),
              subtitle: const Text('차단됨'),
              trailing: OutlinedButton(onPressed: () {}, child: const Text('차단 해제')),
            ),
          ),
          const SizedBox(height: 20),
          const Text('최근 신고 내역', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
          const SizedBox(height: 8),
          Container(
            decoration: _boxDecoration(),
            child: const ListTile(
              title: Text('욕설/비방'),
              subtitle: Text('접수 완료 · 운영 검토 중'),
            ),
          ),
        ],
      ),
    );
  }
}

class ExternalLinksPage extends StatelessWidget {
  const ExternalLinksPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('외부 연결')),
      body: ListView(
        children: const [
          ListTile(
            leading: Icon(Icons.camera_alt_outlined),
            title: Text('요매거진 Instagram 이동'),
            trailing: Icon(Icons.open_in_new),
          ),
          ListTile(
            leading: Icon(Icons.shopping_bag_outlined),
            title: Text('마플샵 이동'),
            trailing: Icon(Icons.open_in_new),
          ),
          ListTile(
            leading: Icon(Icons.support_agent),
            title: Text('요매거진 카카오 문의톡 이동'),
            trailing: Icon(Icons.open_in_new),
          ),
        ],
      ),
    );
  }
}

class MyContentPage extends StatelessWidget {
  const MyContentPage({required this.title, super.key});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
        children: samplePosts
            .take(2)
            .map((post) => PostListTile(post: post, onTap: () => _push(context, PostDetailPage(post: post))))
            .toList(),
      ),
    );
  }
}

class PolicyPage extends StatelessWidget {
  const PolicyPage({required this.title, super.key});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Text('정책 문서 영역입니다. 실제 약관 및 개인정보처리방침 문구가 들어갑니다.'),
      ),
    );
  }
}

class PostListTile extends StatelessWidget {
  const PostListTile({required this.post, required this.onTap, super.key});

  final Post post;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      decoration: _boxDecoration(),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Text(post.category, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                  const SizedBox(width: 8),
                  Text(post.time, style: const TextStyle(fontSize: 12, color: Colors.black45)),
                  if (post.edited) const Text(' · 수정됨', style: TextStyle(fontSize: 12, color: Colors.black45)),
                ],
              ),
              const SizedBox(height: 8),
              Text(post.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w800)),
              const SizedBox(height: 4),
              Text(post.body, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.black87, height: 1.35)),
              const SizedBox(height: 10),
              Row(
                children: [
                  Text(post.author, style: const TextStyle(fontSize: 12, color: Colors.black54)),
                  const Spacer(),
                  Icon(Icons.thumb_up_outlined, size: 16, color: Colors.grey.shade700),
                  const SizedBox(width: 3),
                  Text('${post.likes}', style: const TextStyle(fontSize: 12)),
                  const SizedBox(width: 10),
                  Icon(Icons.chat_bubble_outline, size: 16, color: Colors.grey.shade700),
                  const SizedBox(width: 3),
                  Text('${post.comments}', style: const TextStyle(fontSize: 12)),
                  if (post.bookmarked) ...[
                    const SizedBox(width: 10),
                    const Icon(Icons.bookmark, size: 16),
                  ],
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class CommentTile extends StatelessWidget {
  const CommentTile({
    required this.author,
    required this.body,
    required this.time,
    required this.likes,
    this.edited = false,
    super.key,
  }) : deleted = false;

  const CommentTile.deleted({super.key})
      : author = '',
        body = '',
        time = '',
        likes = 0,
        edited = false,
        deleted = true;

  final String author;
  final String body;
  final String time;
  final int likes;
  final bool edited;
  final bool deleted;

  @override
  Widget build(BuildContext context) {
    if (deleted) {
      return Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.all(14),
        decoration: _boxDecoration(),
        child: const Text('삭제된 댓글입니다.', style: TextStyle(color: Colors.black45)),
      );
    }

    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(14),
      decoration: _boxDecoration(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(author, style: const TextStyle(fontWeight: FontWeight.w700)),
              const SizedBox(width: 8),
              Text(time, style: const TextStyle(color: Colors.black45)),
              if (edited) const Text(' · 수정됨', style: TextStyle(color: Colors.black45)),
              const Spacer(),
              PopupMenuButton<String>(
                icon: const Icon(Icons.more_horiz),
                onSelected: (value) {
                  if (value == 'report') _push(context, ReportPage(target: body));
                },
                itemBuilder: (context) => const [
                  PopupMenuItem(value: 'edit', child: Text('수정')),
                  PopupMenuItem(value: 'delete', child: Text('삭제')),
                  PopupMenuDivider(),
                  PopupMenuItem(value: 'report', child: Text('신고')),
                  PopupMenuItem(value: 'block', child: Text('작성자 차단')),
                ],
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(body),
          const SizedBox(height: 10),
          _ActionButton(icon: Icons.thumb_up_outlined, label: '좋아요 $likes', onTap: () {}),
        ],
      ),
    );
  }
}

class _CategoryGrid extends StatelessWidget {
  const _CategoryGrid({required this.onTap});

  final ValueChanged<Category> onTap;

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: categories.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 8,
        crossAxisSpacing: 8,
        childAspectRatio: 2.4,
      ),
      itemBuilder: (context, index) {
        final category = categories[index];
        return InkWell(
          onTap: () => onTap(category),
          borderRadius: BorderRadius.circular(8),
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: _boxDecoration(),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(category.name, style: const TextStyle(fontWeight: FontWeight.w800)),
                const SizedBox(height: 3),
                Text(
                  category.description,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 12, color: Colors.black54),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _BannerCard extends StatelessWidget {
  const _BannerCard({
    required this.title,
    required this.subtitle,
    required this.action,
    required this.onTap,
  });

  final String title;
  final String subtitle;
  final String action;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: _boxDecoration(color: const Color(0xFFEFEFEF)),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
                const SizedBox(height: 6),
                Text(subtitle, style: const TextStyle(color: Colors.black54)),
              ],
            ),
          ),
          OutlinedButton(onPressed: onTap, child: Text(action)),
        ],
      ),
    );
  }
}

class _SectionHeader extends StatelessWidget {
  const _SectionHeader({required this.title, this.action, this.onActionTap});

  final String title;
  final String? action;
  final VoidCallback? onActionTap;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text(title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
        const Spacer(),
        if (action != null) TextButton(onPressed: onActionTap, child: Text(action!)),
      ],
    );
  }
}

class _FilterChip extends StatelessWidget {
  const _FilterChip({required this.label, required this.selected, required this.onTap});

  final String label;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 3, vertical: 6),
      child: ChoiceChip(label: Text(label), selected: selected, onSelected: (_) => onTap()),
    );
  }
}

class _ActionButton extends StatelessWidget {
  const _ActionButton({required this.icon, required this.label, required this.onTap});

  final IconData icon;
  final String label;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      onPressed: onTap,
      icon: Icon(icon, size: 16),
      label: Text(label),
    );
  }
}

class _MenuGroup extends StatelessWidget {
  const _MenuGroup({required this.items});

  final List<MenuItem> items;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: _boxDecoration(),
      child: Column(
        children: [
          for (var i = 0; i < items.length; i++) ...[
            ListTile(
              leading: Icon(items[i].icon),
              title: Text(items[i].title),
              trailing: const Icon(Icons.chevron_right),
              onTap: items[i].onTap,
            ),
            if (i != items.length - 1) const Divider(height: 1, indent: 56),
          ],
        ],
      ),
    );
  }
}

class MenuItem {
  const MenuItem(this.title, this.icon, this.onTap);

  final String title;
  final IconData icon;
  final VoidCallback onTap;
}

class EmptyState extends StatelessWidget {
  const EmptyState({required this.title, required this.subtitle, super.key});

  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
      decoration: _boxDecoration(),
      child: Column(
        children: [
          const Icon(Icons.forum_outlined, size: 36, color: Colors.black38),
          const SizedBox(height: 12),
          Text(title, style: const TextStyle(fontWeight: FontWeight.w700)),
          const SizedBox(height: 4),
          Text(subtitle, style: const TextStyle(color: Colors.black54)),
        ],
      ),
    );
  }
}

BoxDecoration _boxDecoration({Color color = Colors.white}) {
  return BoxDecoration(
    color: color,
    borderRadius: BorderRadius.circular(8),
    border: Border.all(color: const Color(0xFFE5E5E5)),
  );
}

void _push(BuildContext context, Widget page) {
  Navigator.of(context).push(MaterialPageRoute(builder: (_) => page));
}

void _showSnack(BuildContext context, String message) {
  ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
}
