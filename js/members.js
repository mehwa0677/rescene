/* =========================================================
   멤버 정보 — 이 파일만 고치면 멤버 상세 페이지 내용이 바뀝니다.
   [대괄호] 부분을 실제 정보로 바꿔주세요.
   ※ 글 안에 작은따옴표(')를 쓰려면 \' 처럼 앞에 역슬래시를 붙이세요.
   ========================================================= */
const MEMBERS = [
  {
    id: 'woni',
    name: 'WONI',
    photo: 'images/profile-01.jpg',
    // 캐릭터 — 사진을 클릭하면 보이는 이미지와 표
    character: {
      photo: 'images/cha-01.jpg',
      name: '조타(Jota)',
      hashtag: '#대왕고양이 #머리위네잎클로버',
      intro: '무표정의 대왕 고양이, 내향적이고 까칠하지만 약간의 허당끼, 무심한 듯 행동하지만 주변을 챙기는 츤츤한 매력'
    },
    line: '리센느리더. 섹시를 추구하는 귀요미, 맞언니',
    realName: '정원이 (Jeong Won-i)',
    birth: '2004년 05월 25일 · 거제',
    mbti: 'ESFP',
    intro: '<strong> 서브보컬 </strong> \n거제가 낳은 딸로 리더를 담당하고 있다. 나락감지센서가 매우 좋은편. 겁없음. 반려견 별이 엄마.',
    catchphrase: '[우이!. 오이쉬에~. 리센느 아세요?. 누구게?. 마! 니 뭐! 살림차리고 싶나?. 밥은 줍니까? 그냥 굶어라. 등등...]'
  },
  {
    id: 'minami',
    name: 'MINAMI',
    photo: 'images/profile-02.jpg',
    // 캐릭터 — 사진을 클릭하면 보이는 이미지와 표
    character: {
      photo: 'images/cha-02.jpg',
      name: '밍(Ming)',
      hashtag: '#아기바다표범 #말랑한하트젤리발바닥',
      intro: '포근한 포옹을 사랑하는 바다 표범, 애교가 많고 사람을 좋아함, 눈에 보이는 것들을 모두 품에 껴안음'
    },
    line: '진짜 갸루는 아님, 팔방미인 오죠사마',
    realName: '이토 미나미 (Ito Minami)',
    birth: '2006년 11월 29일 · 일본 치바현',
    mbti: 'ENFP',
    intro: '<strong> 메인보컬 </strong> \n 리센느에서 셰프담당이며 어린 시절 철저한 예절교육을 받음. 한국사람이라 오해받을 만큼 한국어에 능통. 반려견 무아 엄마.',
    catchphrase: '갸루귀신. 미남이. 오죠사마. 사막여우. 하프물범. 미나미나미. 등등...'
  },
  {
    id: 'liv',
    name: 'LIV',
    photo: 'images/profile-03.jpg',
    // 캐릭터 — 사진을 클릭하면 보이는 이미지와 표
    character: {
      photo: 'images/cha-03.jpg',
      name: '리뿌(Ribbu)',
      hashtag: '#단모종햄스터 #손가락만한해바라기씨',
      intro: '복슬복슬한 걸 좋아하는 햄스터, 무엇이든지 1등을 해내고 마는 노력파, 부끄럼이 많아 짧은 털을 가리기 위한 보송보송한 솜옷을 착용'
    },
    line: '노래 잘하는 개그맨, 메이랑 환장의 짝궁',
    realName: '진경은 (Jin Kyung-eun)',
    birth: '2006년 10월 11일 · 수원',
    mbti: 'ESFP',
    intro: '<strong> 메인보컬 </strong> \n 실력만큼은 다른 대형기획사들로부터 합격통보를 받은 실력파. 개그욕심이 가장 많음.',
    catchphrase: '너도? 아 나도!. 리브 바보 아니다. 안녕하세요..요↗?. 니가 뭔데?. 정수리 옮길 거에요. 등등...'
  },
  {
    id: 'may',
    name: 'MAY',
    photo: 'images/profile-04.jpg',
    // 캐릭터 — 사진을 클릭하면 보이는 이미지와 표
    character: {
      photo: 'images/cha-04.jpg',
      name: '얌(Yam)',
      hashtag: '#미니코끼리 #꼬깔모자쓴탐구가',
      intro: '향기를 탐구하는 마법 코끼리, 성격이 밝고 이성적 사고 추구, 작은 돋보기를 들고 다니며, 무엇이든 세밀히 관찰'
    },
    line: '리브와 환장의 짝궁, 쫑알쫑알 메라디오DJ',
    realName: '이예빈 (Lee Ye-vin)',
    birth: '2008년 08월 19일 · 고양',
    mbti: 'INTP',
    intro: '<strong> 서브보컬 </strong> \n 햇살메이. 가챠와 다꾸를 좋아하고 스티커를 수집하고 다님. 슬라임 고수. 매력터지는 쫑알쫑알 TMI소녀',
    catchphrase: '기회는 그립감이 좋다. 불협도 화음이니까. 과해. 역병처럼 돌아요. 집쭝!. 등등...'
  },
  {
    id: 'zena',
    name: 'ZENA',
    photo: 'images/profile-05.jpg',
    // 캐릭터 — 사진을 클릭하면 보이는 이미지와 표
    character: {
      photo: 'images/cha-05.jpg',
      name: '쩨로밍(Zzeroming)',
      hashtag: '#신비로운다람쥐 #치킨을물고있는공감러',
      intro: '공감 능력이 극대화 된 신비로운 색의 다람쥐, 활발하며 공감 능력이 뛰어남, 꼬리를 살랑이며 빠짐없이 맞장구를 쳐줌'
    },
    line: '하루 한번 세상이 무너지는, 으른이고 싶은, 까엉TV의 DJ',
    realName: '김가영(Kim Ga-yeong',
    birth: '2008년 11월 27일 · 경주',
    mbti: 'INFP',
    intro: '<strong> 리드보컬 </strong> \n 부리부리 신라공주. 호피를 정말 좋아하며 이걸 원이가 질색함. 매일 까엉이의 세상이 무너짐. 언니들의 사랑을 듬뿍 받으며 지내는 중',
    catchphrase: '아뉘이이이!. 씨러!. 그게 뭔데요?. 내는 원래 고윤정 배우님을 싸랑해. 아, 그뤠여?. ㄷㅋㄷㅋ ㄷㄹㄱㄷ ㅅㄱㅂㅅㅇ~♬'
  }
];
