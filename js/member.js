/* =========================================================
   멤버 상세 페이지 — 주소의 ?id= 값으로 멤버를 찾아 화면을 채웁니다.
   (내용 수정은 js/members.js 에서 하세요)
   ========================================================= */
(function () {
  const id = new URLSearchParams(location.search).get('id');
  let index = MEMBERS.findIndex((m) => m.id === id);
  if (index < 0) index = 0;                       // 잘못된 주소면 첫 멤버
  const m = MEMBERS[index];
  const total = MEMBERS.length;
  const pad = (n) => String(n).padStart(2, '0');
  const set = (sel, text) => { const el = document.querySelector(sel); if (el) el.textContent = text; };
  // HTML 태그(<strong>, <em>, <br> 등)를 그대로 적용해서 넣기
  const setHTML = (sel, html) => { const el = document.querySelector(sel); if (el) el.innerHTML = html; };

  document.title = `${m.name} — RESCENE`;

  const img = document.querySelector('#memberPhoto');
  img.src = m.photo;
  img.alt = `${m.name} 사진`;
  document.querySelector('#memberPhotoBox').dataset.label = `${m.name} · 4:5`;

  set('#memberCount', `MEMBER ${pad(index + 1)} / ${pad(total)}`);
  set('#memberName', m.name);
  setHTML('#memberLine', m.line);
  setHTML('#pRealName', m.realName);
  setHTML('#pBirth', m.birth);
  setHTML('#pMbti', m.mbti);
  setHTML('#pIntro', m.intro);
  setHTML('#pCatchphrase', m.catchphrase);

  // 캐릭터 — 사진을 클릭하면 캐릭터 이미지 · 표로 바뀌고, 다시 클릭하면 원래대로
  const c = m.character || {};
  const box = document.querySelector('#memberPhotoBox');
  const charImg = document.querySelector('#charPhoto');
  const profileTable = document.querySelector('#profileTable');
  const charTable = document.querySelector('#charTable');
  const hint = document.querySelector('#photoHint');
  charImg.alt = `${m.name} 캐릭터`;
  const missing = () => { charImg.remove(); box.classList.add('char-missing'); };   // 이미지가 없으면 플레이스홀더 표시
  charImg.addEventListener('error', missing);
  if (c.photo) charImg.src = c.photo; else missing();
  setHTML('#cName', c.name || '');
  setHTML('#cHashtag', c.hashtag || '');
  setHTML('#cIntro', c.intro || '');

  function setChar(on) {
    box.classList.toggle('is-char', on);
    box.setAttribute('aria-pressed', String(on));
    box.setAttribute('aria-label', on ? '프로필 사진 보기' : '캐릭터 보기');
    box.dataset.label = on ? `${m.name} · CHARACTER` : `${m.name} · 4:5`;
    hint.textContent = on ? 'CLICK · PROFILE' : 'CLICK · CHARACTER';
    profileTable.hidden = on;
    charTable.hidden = !on;
    // 큰 이름 · 한 줄 설명도 캐릭터 것으로 (members.js 의 character.title / character.line, 비워두면 멤버 것 유지)
    set('#memberName', on ? (c.title || m.name) : m.name);
    setHTML('#memberLine', on ? (c.line || m.line) : m.line);
  }
  box.addEventListener('click', () => setChar(!box.classList.contains('is-char')));

  // 썸네일 — 프로필 사진 + members.js 의 gallery. 누르면 큰 사진이 그 사진으로 바뀜
  // (캐릭터를 보고 있을 때 누르면 사진으로 돌아옴. 큰 사진 클릭 = 캐릭터 전환은 그대로)
  const thumbsEl = document.querySelector('#memberThumbs');
  const shots = [m.photo, ...(Array.isArray(m.gallery) ? m.gallery : [])].filter(Boolean);
  if (thumbsEl && shots.length > 1) {
    let current = 0;
    const thumbs = shots.map((src, i) => {
      const t = document.createElement('button');
      t.type = 'button';
      t.className = 'member-thumb';
      t.setAttribute('aria-label', `${m.name} 사진 ${i + 1} / ${shots.length}`);
      t.setAttribute('aria-pressed', String(i === 0));
      const ti = document.createElement('img');
      ti.src = src; ti.alt = ''; ti.loading = 'lazy'; ti.decoding = 'async';
      ti.addEventListener('error', () => {                          // 파일이 없으면 그 칸만 숨김
        t.hidden = true;
        if (thumbs.filter((x) => !x.hidden).length < 2) thumbsEl.hidden = true;   // 남은 게 프로필 1장뿐이면 줄 전체 숨김
      });
      t.appendChild(ti);
      t.addEventListener('click', () => show(i));
      thumbsEl.appendChild(t);
      return t;
    });
    thumbsEl.hidden = false;

    function show(i) {
      if (box.classList.contains('is-char')) setChar(false);
      if (i === current) return;
      current = i;
      thumbs.forEach((t, k) => t.setAttribute('aria-pressed', String(k === i)));
      thumbs[i].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
      img.classList.add('is-swapping');                              // 살짝 흐려졌다가 새 사진으로
      const next = new Image();
      next.onload = next.onerror = () => {
        img.src = shots[i];
        img.alt = `${m.name} 사진 ${i + 1}`;
        requestAnimationFrame(() => img.classList.remove('is-swapping'));
      };
      next.src = shots[i];
    }
  }

  // 이전 · 다음 멤버
  const prev = MEMBERS[(index - 1 + total) % total];
  const next = MEMBERS[(index + 1) % total];
  const prevLink = document.querySelector('#prevMember');
  const nextLink = document.querySelector('#nextMember');
  prevLink.href = `member.html?id=${prev.id}`;
  nextLink.href = `member.html?id=${next.id}`;
  set('#prevName', prev.name);
  set('#nextName', next.name);

  // 키보드 ← → 로 이동
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowLeft') location.href = prevLink.href;
    if (e.key === 'ArrowRight') location.href = nextLink.href;
  });
})();
