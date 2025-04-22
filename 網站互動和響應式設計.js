/*目錄*/
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    document.body.classList.toggle('sidebar-open');
  }
  
/*時間軸*/
function toggleDetails(element) {
    element.classList.toggle('active');
  }


