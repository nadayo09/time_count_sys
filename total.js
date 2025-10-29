// total.js — 모든 애니 시청 시간 합산 스크립트

function updateGlobalTotal(){
  const keys = Object.keys(localStorage).filter(k => k.startsWith('anime_'));
  let total = 0;
  for(const k of keys){
    total += parseInt(localStorage.getItem(k) || '0');
  }
  localStorage.setItem('total_time', total);

  const totalTimeEl = document.getElementById('totalTime');
  const hEl = document.getElementById('totalHours');
  const mEl = document.getElementById('totalMins');
  if(totalTimeEl){
    totalTimeEl.textContent = total;
    if(hEl && mEl){
      hEl.textContent = Math.floor(total/60);
      mEl.textContent = total % 60;
    }
  }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', updateGlobalTotal);
