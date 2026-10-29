/* =========================================================
   앨범 수록곡 — ALBUM 섹션의 앨범 순서(01 ~ 16)와 같은 순서입니다.
   · 앨범 제목·발매일·커버는 index.html 에 적힌 것을 그대로 가져옵니다.
   · 여기서는 수록곡 제목(title)과 음원 파일 경로(src)만 적으면 됩니다.
   · 곡을 늘리려면 { title: '...', src: '...' }, 한 줄을 복사해서 추가하세요.
   · 뮤직비디오가 있으면 mv: '유튜브 주소' 를 붙이세요. 곡 목록 오른쪽에 MV 버튼이 생깁니다.
   · 음원 파일은 music 폴더에 올리고, src 이름과 정확히 맞춰주세요 (대소문자 포함).
   ========================================================= */
const ALBUMS = [
  // 01. 선공개 싱글《YOYO》
  {
    tracks: [
      { title: '[YoYo]', src: 'music/album-01-01.mp3', mv: 'https://youtu.be/uDYy2UyO1X4' }
    ]
  },
  // 02. 싱글 1집《Re:Scene》
  {
    tracks: [
      { title: '[YoYo]', src: 'music/album-02-01.mp3', mv: 'https://youtu.be/uDYy2UyO1X4' },
      { title: '[UhUh]', src: 'music/album-02-02.mp3', mv: 'https://youtu.be/zpSejlkSXLA' }
    ]
  },
  // 03. 더 매직스타 OST《Counting Star》
  {
    tracks: [
      { title: '[Counting Star]', src: 'music/album-03-01.mp3' }
    ]
  },
  // 04. 미니 1집《SCENEDROME》
  {
    tracks: [
      { title: '[Lucky You]', src: 'music/album-04-01.mp3' },
      { title: '[LOVE ATTACK]', src: 'music/album-04-02.mp3', mv: 'https://youtu.be/9XttLI0oH0I' },
      { title: '[New World]', src: 'music/album-04-03.mp3' },
      { title: '[Pinball]', src: 'music/album-04-04.mp3', mv: 'https://youtu.be/B8JJ8RNM-60' }
    ]
  },
  // 05. 미니 2집《Glow Up》
  {
    tracks: [
      { title: '[CRASH]', src: 'music/album-05-01.mp3' },
      { title: '[Glow Up]', src: 'music/album-05-02.mp3', mv: 'https://youtu.be/h0xUtrb_JBc' },
      { title: '[Going On]', src: 'music/album-05-03.mp3' },
      { title: '[In my Lotion]', src: 'music/album-05-04.mp3' },
      { title: '[Cotton Candy]', src: 'music/album-05-05.mp3' } 
    ]
  },
  // 06. 남주의 첫날밤을 가져버렸다 OST《밤밤밤》
  {
    tracks: [
      { title: '[밤밤밤]', src: 'music/album-06-01.mp3', mv: 'https://youtu.be/AfiBC_VR2K4' }
    ]
  },
  // 07. 싱글2집《Dearest》
  {
    tracks: [
      { title: '[Deja Vu]', src: 'music/album-07-01.mp3', mv: 'https://youtu.be/ZbO9PBdFRdc' },
      { title: '[Mood]', src: 'music/album-07-02.mp3' }
    ]
  },
  // 08. 첫사랑 엔딩 OST《고백주파수》
  {
    tracks: [
      { title: '[고백주파수]', src: 'music/album-08-01.mp3', mv: 'https://youtu.be/p1asr5bLsl0' }
    ]
  },
  // 09. 선공개 싱글《Heart Drop》
  {
    tracks: [
      { title: '[Heart Drop]', src: 'music/album-09-01.mp3', mv: 'https://youtu.be/ByX8EZq8500' }
    ]
  },
  // 10. 미니 3집《Lip Bomb》
  {
    tracks: [
      { title: '[Heart Drop]', src: 'music/album-10-01.mp3', mv: 'https://youtu.be/ByX8EZq8500' },
      { title: '[Bloom]', src: 'music/album-10-02.mp3', mv: 'https://youtu.be/MC6-82GRK5I' },
      { title: '[Love Echo]', src: 'music/album-10-03.mp3' },
      { title: '[Hello XO]', src: 'music/album-10-04.mp3' },
      { title: '[MVP]', src: 'music/album-10-05.mp3' },
    ]
  },
  // 11. 스페셜즈 OST《Higher》
  {
    tracks: [
      { title: '[Higher]', src: 'music/album-11-01.mp3' }
    ]
  },
  // 12. 디지털싱글《RESCENE X ???》
  {
    tracks: [
      { title: '[Busy Boy]', src: 'music/album-12-01.mp3' }
    ]
  },
  // 13. 디지털 싱글《Runaway》
  {
    tracks: [
      { title: '[Runaway]', src: 'music/album-13-01.mp3', mv: 'https://youtu.be/rsZwrTNklos' }
    ]
  },
  // 14. 스페셜 싱글《Pretty Girl》
  {
    tracks: [
      { title: '[Pretty Girl]', src: 'music/album-14-01.mp3', mv: 'https://youtu.be/qZlu2j2SiBA' }
    ]
  },
  // 15. 미니 4집《PULSE》
  {
    tracks: [
      { title: '[FINEST THING]', src: 'music/album-15-01.mp3' },
      { title: '[WITH]', src: 'music/album-15-02.mp3' },
      { title: '[백화요란(Inside Out)]', src: 'music/album-15-03.mp3' },
      { title: '[MEME]', src: 'music/album-15-04.mp3' },
      { title: '[DRAGON]', src: 'music/album-15-05.mp3' }
    ]
  },
  // 16. NEXT...
  {
    tracks: [
      { title: '[미공개]', src: 'music/album-16-01.mp3' },
      { title: '[미공개]', src: 'music/album-16-02.mp3' }
    ]
  }
];
