<template>
  <div class="sidebar">
    <div class="logo">L</div>
    <nav class="menu">
      <ul>
        <li class="menu-item active"><a href="#">📊</a></li> <li class="menu-item"><a href="#">📈</a></li> <li class="menu-item"><a href="#">🔍</a></li> <li class="menu-item"><a href="#">🗂️</a></li> <li class="menu-item"><a href="#">📄</a></li> <li class="menu-item"><a href="#">📦</a></li> <li class="menu-item"><a href="#">👥</a></li> <li class="menu-item"><a href="#">⚙️</a></li> </ul>
    </nav>
    <div class="sidebar-bottom">
      <a href="#" class="menu-item">❓</a> <a href="#" class="menu-item user-avatar-small">L</a> </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
};
</script>

<style scoped>
.sidebar {
  width: 70px;
  background-color: #ffffff; 
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-right: 1px solid #e0e0e0;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #dc3545; 
  margin-bottom: 30px;
}

.menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
}

.menu-item {
  margin-bottom: 25px;
}

.menu-item a {
  color: #6c757d; /* Grey icons */
  text-decoration: none;
  font-size: 24px; /* Icon size */
  display: block;
  padding: 8px 0;
}

.menu-item.active a,
.menu-item a:hover {
  color: #dc3545; /* Red for active/hover */
}

.menu-item.active {
   background-color: #ffebee; /* Light red background for active item */
   border-left: 3px solid #dc3545;
}
.menu-item.active a {
   margin-left: -3px; /* Adjust for border */
}


.sidebar-bottom {
  margin-top: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-avatar-small {
  background-color: #6f42c1; /* Purple avatar */
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  margin-top: 15px;
}
</style>