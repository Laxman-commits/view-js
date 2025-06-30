<template>
  <div class="top-bar">
    <div class="top-bar-left">
    </div>
    <div class="top-bar-right">
      <button class="icon-button">🔔 <span class="badge">1</span></button>
      <div class="user-info">
        <span class="user-avatar">L</span>
        <span class="user-name">Lucky</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
};
</script>

<style scoped>
.top-bar {
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.top-bar-right {
  display: flex;
  align-items: center;
}

.icon-button {
  background: none;
  border: none;
  font-size: 20px;
  color: #6c757d;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
}

.badge {
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #dc3545;
  color: white;
  /* border-radius: 50%; */
  padding: 2px 5px;
  font-size: 10px;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 35px;
  height: 35px;
  background-color: #6f42c1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
}

.user-name {
  font-weight: 500;
  color: #343a40;
}
</style>