<template>
    <div class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>Create Project</h2>
        <form @submit.prevent="handleCreateProject">
          <div class="basic-details">
            <h4>Basic Details</h4>
  
            <div class="form-group">
              <label for="projectName">Project Name <span class="required">*</span></label>
              <input type="text" id="projectName" v-model="projectData.name" required placeholder="Enter text" />
            </div>
  
            <div class="form-group">
              <label for="selectClient">Select Client <span class="required">*</span></label>
              <select id="selectClient" v-model="projectData.clientId" required>
                <option disabled value="">Select client</option>
                <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="businessCategory">Business Category</label>
              <select id="businessCategory" v-model="projectData.businessCategory">
                <option disabled value="">Business Category</option>
                <option v-for="category in businessCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="addressLine1">Project Address Line 1 <span class="required">*</span></label>
              <input type="text" id="addressLine1" v-model="projectData.addressLine1" required placeholder="Enter text" />
            </div>
  
            <div class="form-group">
              <label for="addressLine2">Project Address Line 2</label>
              <input type="text" id="addressLine2" v-model="projectData.addressLine2" placeholder="Enter text" />
            </div>
  
            <div class="form-row">
              <div class="form-group half-width">
                <label for="country">Country <span class="required">*</span></label>
                <select id="country" v-model="projectData.country" @change="handleCountryChange" required>
                  <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
                </select>
              </div>
              <div class="form-group half-width">
                <label for="state">State</label>
                <select id="state" v-model="projectData.state">
                  <option disabled value="">Select State</option>
                  <option v-for="state in availableStates" :key="state.code" :value="state.code">{{ state.name }}</option>
                </select>
              </div>
            </div>
          </div>
  
          <div class="modal-actions">
            <button type="submit" class="btn-create">Create</button>
            <button type="button" class="btn-cancel" @click="closeModal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, watch } from 'vue';
  
  const emit = defineEmits(['close', 'create-project']);
  
  const projectData = reactive({
    name: '',
    clientId: '',
    businessCategory: '',
    addressLine1: '',
    addressLine2: '',
    country: 'IN',
    state: ''
  });
  
  const clients = ref([
    { id: 'client1', name: 'BATMAN' },
    { id: 'client2', name: 'SUPERMAN' }
  ]);
  
  const businessCategories = ref([
    { id: 'tech', name: 'Technology' },
    { id: 'finance', name: 'Finance' },
    { id: 'health', name: 'Healthcare' }
  ]);
  
  const countries = ref([
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' }
  ]);
  
  const states = reactive({
    IN: [
      { code: 'MH', name: 'Maharashtra' },
      { code: 'DL', name: 'Delhi' },
      { code: 'KA', name: 'Karnataka' }
    ],
    US: [
      { code: 'CA', name: 'California' },
      { code: 'NY', name: 'New York' }
    ]
  });
  
  const availableStates = ref([]);
  
  const updateStatesForCountry = (countryCode) => {
    availableStates.value = states[countryCode] || [];
    if (!availableStates.value.find(s => s.code === projectData.state)) {
      projectData.state = '';
    }
  };
  
  watch(() => projectData.country, (newCountry) => {
    updateStatesForCountry(newCountry);
  }, { immediate: true });
  
  const handleCreateProject = () => {
    if (!projectData.name || !projectData.clientId || !projectData.addressLine1) {
      alert('Please fill in all required fields.');
      return;
    }
    emit('create-project', { ...projectData });
  };
  
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    padding: 20px;
    overflow-y: auto;
  }
  
  .modal-content {
    background-color: white;
    padding: 25px 30px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .modal-content h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.8em;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }
  
  .basic-details h4 {
    font-size: 1.1em;
    color: #555;
    margin-top: 0;
    margin-bottom: 15px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 0.9em;
    color: #444;
  }
  
  .form-group input[type="text"],
  .form-group select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;
  }
  
  .form-group input[type="text"]:focus,
  .form-group select:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  
  .required {
    color: red;
  }
  
  .form-row {
    display: flex;
    gap: 20px;
  }
  
  .half-width {
    flex: 1;
  }
  
  .modal-actions {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .btn-create,
  .btn-cancel {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
  }
  
  .btn-create {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-create:hover {
    background-color: #c82333;
  }
  
  .btn-cancel {
    background-color: #f8f9fa;
    color: #333;
    border: 1px solid #ddd;
  }
  
  .btn-cancel:hover {
    background-color: #e2e6ea;
  }
  </style>
  