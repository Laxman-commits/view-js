import { createRouter, createWebHistory } from 'vue-router';

import AllProjects from '@/views/AllProjects.vue';
import ProjectCreated from '@/views/ProjectCreated.vue';

const routes = [
  { path: '/projects/all', component: AllProjects },
  { path: '/projects/created', component: ProjectCreated },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
