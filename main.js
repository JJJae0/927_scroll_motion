/* 
  window.scrollY : 브라우저 스크롤 시  스크롤 되는 거리값 (동적)
  DOM.offset().top : 전체 페이지에 특정 DOM 의 세로 위치값 (정적)
 */

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	console.log('scroll', scroll);
});
