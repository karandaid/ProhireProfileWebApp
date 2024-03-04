<script setup>
const Dashboard = resolveComponent('Dashboard')
const Profile = resolveComponent('Profile')
const Proposals = resolveComponent('Proposals')
const Team = resolveComponent('Team')
const Messages = resolveComponent('Messages')
const Calendar = resolveComponent('Calendar')
const Resources = resolveComponent('Resources')
const FAQ = resolveComponent('FAQ')
const Analytics = resolveComponent('Analytics')
const Theme = resolveComponent('Theme')
const JobBoard = resolveComponent('JobBoard')
const Store = resolveComponent('Store')
const Settings = resolveComponent('Settings')

const activeComponent = useState(() => 'Dashboard')
const menuOptions = ref([
  { label: 'Dashboard', icon: 'pi pi-fw pi-home', component: Dashboard },
  { label: 'Profile', icon: 'pi pi-fw pi-user', component: Profile },
  { label: 'Proposals', icon: 'pi pi-fw pi-file', component: Proposals },
  { label: 'Team', icon: 'pi pi-fw pi-users', component: Team },
  { label: 'Messages', icon: 'pi pi-fw pi-comments', badge: '3', component: Messages },
  { label: 'Calendar', icon: 'pi pi-fw pi-calendar', component: Calendar },
  { label: 'Resources', icon: 'pi pi-fw pi-book', component: Resources },
  { label: 'FAQ', icon: 'pi pi-fw pi-question-circle', component: FAQ },
  { label: 'Analytics', icon: 'pi pi-fw pi-chart-bar', component: Analytics },
  { label: 'Theme', icon: 'pi pi-fw pi-palette', component: Theme },
  { label: 'Job Board', icon: 'pi pi-fw pi-briefcase', component: JobBoard },
  { label: 'Store', icon: 'pi pi-fw pi-shopping-cart', component: Store },
  { label: 'Settings', icon: 'pi pi-fw pi-cog', component: Settings }
])

// Determine the component to display based on the selected option
const currentComponent = computed(() => {
    const item = menuOptions.value.find(i => i.label === activeComponent.value?.label);
    return item ? item.component : null;
});
</script>

<template>
  <div class="layout">
    <!-- Sidebar -->
    <div class="sidebar surface-overlay shadow-2 p-3">
      <div class="font-bold mb-3">Menu</div>
      <div class="card">
        <Listbox v-model="activeComponent" :options="menuOptions" optionLabel="label" listStyle="">
          <template #option="slotProps">
            <div class="menu-item flex align-items-center p-2 cursor-pointer">
              <i :class="slotProps.option.icon" style="font-size: 1.25rem; margin-right: 0.5rem"></i>
              <span>{{ slotProps.option.label }}</span>
              <span v-if="slotProps.option.badge" class="ml-auto p-badge">{{ slotProps.option.badge }}</span>
            </div>
          </template>
        </Listbox>
      </div>
    </div>

    <!-- Main content -->
    <div class="main-content flex-grow-1">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  background-color: #ffffff;
  width: 250px;
}

.menu-item {
  cursor: pointer;
  border-radius: var(--border-radius);
}

.menu-item:hover {
  background-color: var(--surface-b);
}

.p-divider {
  border-top: 1px solid var(--surface-d);
}

.main-content {
  flex: 1;
  background: #fff;
  padding: 1rem;
}
</style>