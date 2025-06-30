<template>
  <div class="sidebar" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <div class="sidebar-top">
      <a href="#" class="menu-item top-items">
        <img class="icon logo-icon-top" src="@/assets/logo.jpg" alt="Logo" />
        <span class="label label-span" v-show="isHovered">
          <img class="icon logo-icon--side" src="@/assets/multark.png" alt="Logo" />
        </span>
      </a>
    </div>

    <nav class="menu">
      <a href="#" class="menu-item">
        <span class="icon">📊</span>
        <span class="label text-head" v-show="isHovered">Project</span>
      </a>
    </nav>

    <div class="sidebar-bottom">
      <a href="#" class="menu-item">
        <span class="icon">❓</span>
        <span class="label" v-show="isHovered">Help</span>
      </a>
      <a href="#" class="menu-item user-avatar-small">M</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      isHovered: false,
      activeItem: 'dashboard',
    };
  },
};
</script>

<style scoped>
/* ==== Layout Core ==== */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333;
  transition: width 0.2s ease;
}

.sidebar:hover {
  width: 220px;
}

.sidebar-top {
  width: 100%;
}

.sidebar-bottom {
  margin-top: auto;
  padding: 20px;
  width: 100%;
}

/* ==== Menu Items ==== */
.menu {
  width: 100%;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 7px;
  color: #6c757d;
  font-size: 15px;
  width: 100%;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}

.menu-item * {
  text-decoration: none !important;
}

.menu-item.active,
.menu-item:hover {
  background-color: #ffebee;
  color: #dc3545;
}

.menu-item .icon {
  font-size: 20px;
}

.menu-item .label {
  white-space: nowrap;
}

/* ==== Logo Section ==== */
.top-items {
  display: flex;
  align-items: baseline;
}

.logo-icon-top {
  width: 40px;
  height: 40px;
}

.logo-icon--side {
  width: 159px;
  position: relative;
  top: -10px;
}

/* ==== Label Styling ==== */
.label-span {
  overflow: hidden;
  height: 60px;
}

.text-head {
  font-weight: 600;
  font-size: larger;
  padding-left: 8%;
  border: none;
}

/* ==== Avatar ==== */
.user-avatar-small {
  background-color: #6f42c1;
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
