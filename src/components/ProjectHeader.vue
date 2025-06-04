 <template>
  <div class="project-header">
    <div class="header-title-section">
      <h1>My Projects <span class="project-count">312</span></h1>
    </div>
    <div class="header-tabs-actions">
      <div class="tabs">
        <button class="tab-button active" @click="handleTabClick('all')">All Projects</button>
        <button class="tab-button" @click="handleTabClick('created')">Project Created <span class="count">100</span></button>
        <button class="tab-button" @click="handleTabClick('recce')">Recce Pending <span class="count">0</span></button>
        <button class="tab-button" @click="handleTabClick('designPending')">Design Pending <span class="count">0</span></button>
        <button class="tab-button" @click="handleTabClick('designFreeze')">Design Freeze <span class="count">0</span></button>
        <button class="tab-button" @click="handleTabClick('scopeApproval')">Scope Approval Awaited <span class="count">4</span></button>
        <button class="tab-button" @click="handleTabClick('partially')">Partially <span class="count">0</span></button>
      </div>
      <button class="add-project-button" @click="handleAddProjectClick">+ Add Project</button>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['requestOpenAddProjectModal', 'filterProjectsByTab']);

const handleAddProjectClick = () => {
  emit('requestOpenAddProjectModal');
  console.log('ProjectHeader: requestOpenAddProjectModal event emitted.');
};

const handleTabClick = (tabKey) => {
  emit('filterProjectsByTab', tabKey);
  console.log(`ProjectHeader: Tab clicked - ${tabKey}`);
  
};
</script>

<style scoped>
.project-header {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px; /* Added for a slightly more modern look */
  box-shadow: 0 2px 4px rgba(0,0,0,0.05); /* Subtle shadow */
}

.header-title-section h1 {
  font-size: 24px;
  font-weight: 600;
  color: #212529;
  display: flex;
  align-items: center;
  margin-top: 0; /* Ensure no extra space at the top */
  margin-bottom: 20px; /* Space before tabs */
}

.project-count {
  background-color: #ffebee;
  color: #dc3545;
  padding: 4px 10px; /* Slightly more padding */
  border-radius: 16px; /* More rounded */
  font-size: 13px; /* Adjusted size */
  margin-left: 12px; /* Adjusted margin */
  font-weight: 600; /* Bolder count */
  line-height: 1; 
}

.header-tabs-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tabs {
  display: flex;
  gap: 8px; /* Slightly increased gap */
  flex-wrap: wrap; /* Allow tabs to wrap on smaller screens */
}

.tab-button {
  background-color: transparent;
  border: 1px solid #dee2e6; /* Softer border color */
  padding: 8px 16px; /* Adjusted padding */
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500; /* Slightly bolder text */
  color: #495057;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease; 
  white-space: nowrap;
}

.tab-button .count {
  background-color: #f1f3f5; 
  color: #495057;
  padding: 3px 7px;
  border-radius: 10px;
  font-size: 11px;
  margin-left: 8px; 
  font-weight: 600;
}

.tab-button.active {
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
}
.tab-button.active .count {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.tab-button:hover:not(.active) {
  background-color: #f8f9fa; 
  border-color: #adb5bd; 
}

.add-project-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.add-project-button:hover {
  background-color: #c82333;
}
</style>