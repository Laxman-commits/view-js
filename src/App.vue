<template>
  <div id="app-container">
    <AppSidebar />
    <div class="main-content">
      <AppTopBar />
      <ProjectHeader @request-open-add-project-modal="openModal" />
      <ProjectTable :projects="projects" />
    </div>
    <CreateProjectFormModal v-if="isModalVisible" @close="closeModal" @submit-project="addNewProject" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppSidebar from './components/AppSidebar.vue';
import AppTopBar from './components/AppTopBar.vue';
import ProjectHeader from './components/ProjectHeader.vue';
import ProjectTable from './components/ProjectTable.vue';

import CreateProjectFormModal from './components/CreateProjectModal.vue'; 
const isModalVisible = ref(false);

const projects = ref([
  {
    id: '001',
    sNo: 1, 
    jobId: 'JOB001', 
    name: 'Lucky',
    clientName: 'Building Construction',
    businessCategory: 'Online',
    country: 'India',
    state: 'Maharashtra',
    city: 'Airoli',
  },
  {
    id: '002',
    sNo: 2,
    jobId: 'JOB002',
    name: 'Riya',
    clientName: 'Ronit Gupta',
    businessCategory: 'Online',
    country: 'India',
    state: 'Kerala',
    city: 'asdfg', 
  },
  {
    id: 'RDASH31288',
    sNo: 3,
    jobId: 'RDASH31288', 
    name: 'jogeshwar',
    clientName: 'Motorola',
    businessCategory: 'Online',
    country: 'India',
    state: 'Maharashtra',
    city: 'Thane',
  }
]);

const openModal = () => {
  isModalVisible.value = true;
  console.log('App.vue: Modal should open.');
};

const closeModal = () => {
  isModalVisible.value = false;
  console.log('App.vue: Modal should close.');
};

const addNewProject = (newProjectData) => {
  console.log('App.vue: New project data received:', newProjectData);
  const newId = `PROJ${Date.now()}`; 
  const newSNo = projects.value.length + 1;
  projects.value.push({
    id: newId,
    sNo: newSNo,
    jobId: newProjectData.jobId || `JOB${newSNo}`,
    name: newProjectData.name,
    clientName: newProjectData.clientName,
    businessCategory: newProjectData.businessCategory,
    country: newProjectData.country,
    state: newProjectData.state,
    city: newProjectData.city, 
  });
  closeModal(); 
};

</script>

<style>
#app-container {
  display: flex;
  font-family: 'Inter', Arial, sans-serif;
  /* Using Inter font as a common modern choice */
  background-color: #f8f9fa;
  min-height: 100vh;
}

.main-content {
  margin-left: 62px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

body,
h1,
h2,
h3,
p,
ul,
li,
table,
th,
td {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
</style> 
