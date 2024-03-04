<!-- components/Dashboard.vue -->

<template>
    <div>
        <h2>Profile</h2>
        <!-- Dashboard content here -->
        <div class="card flex justify-content-center">
        <div class="flex flex-column gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <small id="username-help">Enter your username to reset your password.</small>
        </div>
    </div>
    </div>
</template>

<script setup>
// Script for Dashboard if needed
</script>