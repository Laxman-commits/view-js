<template>
  <div class="project-table-container">
    <table class="project-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>
            Project Name
            <input type="text" placeholder="Search" class="header-search" />
          </th>
          <th>
            Status
            <select class="header-select">
              <option value="">Select</option>
            </select>
          </th>
          <th>
          Customer
            <select class="header-select">
              <option value="">Select</option>
            </select>
          </th>
          <th>
            Sales Order
            <select class="header-select">
              <option value="">Select</option>
            </select>
          </th>
          <th>
            Quotation
            <select class="header-select">
              <option value="">Select</option>
            </select>
          </th>
         
          <th></th> </tr>
      </thead>
      <tbody>
        <tr v-if="projects.length === 0">
          <td :colspan="9" class="no-data">No projects found.</td>
        </tr>
        <tr v-for="(project, index) in projects" :key="project.id">
          <td>{{ index + 1 }}</td>
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>{{ project.clientName }}</td>
          <td>{{ project.businessCategory }}</td>
          <td>{{ project.country }}</td>
         
          <td>
            <button class="action-button">✏️</button>
            <button class="action-button">🗑️</button>
          </td>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProjectTable',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-table-container {
  margin: 20px 20px 20px 20px; 
  overflow-x: auto; 
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.project-table {
  width: 100%;
  border-collapse: collapse;
}

.project-table th,
.project-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0; 
  font-size: 13px;
  color: #495057;
}

.project-table th {
  background-color: #f8f9fa; 
  font-weight: 600;
  font-size: 12px;
  color: #212529;
  white-space: nowrap; 
}

.project-table th:first-child,
.project-table td:first-child {
  text-align: center;
}
.project-table th:last-child,
.project-table td:last-child {
  text-align: center;
}


.project-table tbody tr:last-child td {
  border-bottom: none; 
}

.project-table tbody tr:hover {
  background-color: #f1f3f5;
}

.header-search,
.header-select {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding: 6px 8px;
  font-size: 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-sizing: border-box;
}

.header-select {
  appearance: none; 
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E"); /* Basic SVG arrow */
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 1em;
  padding-right: 25px; 
}


.action-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #6c757d;
}
.action-button:hover {
  color: #343a40;
}

.no-data {
  text-align: center;
  padding: 20px;
  color: #6c757d;
  font-style: italic;
}
</style>