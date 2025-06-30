<template>
  <div>
  <div class="project-header">
    <div class="header-tabs-actions">
      <!-- Scrollable Tab Row -->
      <div class="tab-row-container">
        <div class="tab-scroll-wrapper" ref="tabScroll">
          <div class="tabs">
            <span v-for="tab in tabs" :key="tab.key">
              <button
                class="tab-button"
                :class="{ active: activeTab === tab.key }"
                @click="handleTabClick(tab.key)"
              >
                {{ tab.label }}
                <span class="count">{{ tab.count }}</span>
              </button>
            </span>
          </div>
        </div>
      </div>

      <button class="add-project-button" @click="handleAddProjectClick">
        + Add Project
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['requestOpenAddProjectModal', 'filterProjectsByTab']);
const activeTab = ref('all');
const tabScroll = ref(null);

const tabs = [
  { key: 'all', label: 'All Projects', count: 1000 },
  { key: 'created', label: 'Project Created', count: 100 },
  { key: 'recce', label: 'Recce Pending', count: 0 },
  { key: 'designPending', label: 'Design Pending', count: 0 },
  { key: 'designFreeze', label: 'Design Freeze', count: 0 },
  { key: 'scopeApproval', label: 'Scope Approval Awaited', count: 4 },
  { key: 'scopeApproval', label: 'Scope Approval Awaited', count: 4 },
  { key: 'scopeApproval', label: 'Scope Approval Awaited', count: 4 },
  { key: 'scopeApproval', label: 'Scope Approval Awaited', count: 4 },
  { key: 'scopeApproval', label: 'Scope Approval Awaited', count: 4 },
  { key: 'extra', label: 'Extra Tab', count: 0 }
];

const handleAddProjectClick = () => {
  emit('requestOpenAddProjectModal');
};

const handleTabClick = (tabKey) => {
  activeTab.value = tabKey;
  emit('filterProjectsByTab', tabKey);
};
</script>

<style scoped>
.project-header {
  background-color: #ffffff;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.header-tabs-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  overflow: hidden;
}

/* ✅ This holds and clips the scrollable section */
.tab-row-container {
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  overflow: hidden;
}

/* ✅ Scrollable div */
.tab-scroll-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  flex-grow: 1;
  min-width: 0;
  scrollbar-width: none;
}

/* ✅ Inline layout inside scroll */
.tabs {
  display: inline-flex;
  gap: 8px;
}

.tabs span {
  border-right: 1px solid rgb(115, 130, 143);
  padding-inline: 13px;
  flex-shrink: 0;
}

/* Buttons */
.tab-button {
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.tab-button:hover {
  background-color: rgb(205, 209, 212);
  border-radius: 10%;
}

.tab-button.active {
  font-weight: bold;
  border-bottom: 2px solid red;
}

/* Count Badge */
.count {
  background-color: rgb(115, 130, 143);
  color: white;
  padding: 3px 6px;
  border-radius: 12px;
  margin-left: 6px;
  font-size: 12px;
}

.add-project-button {
  background-color: #dc3545;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.add-project-button:hover {
  background-color: #c82333;
}
</style>
