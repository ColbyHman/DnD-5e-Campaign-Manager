<!-- Sidebar.vue -->
<template>
    <div class="sidebar min-h-screen">
        <nav class="h-full flex flex-col">
            <h2>D&D Campaign Manager</h2>
            <ol>
                <li><router-link to="/" class="p-4 text-white mb-2">Home</router-link></li>
                <li><router-link to="/players" class="p-4 text-white mb-2">Players</router-link></li>
                <li><router-link to="/inventory" class="p-4 text-white mb-2">Inventory</router-link></li>
                <li><router-link to="/item-library" class="p-4 text-white mb-2">Item Library</router-link></li>
            </ol>
            <!-- Add more links as needed -->
        </nav>
    </div>
</template>
  
<script>
export default {
// Your component logic here
};
</script>
  
<style scoped>
.sidebar {
    height: 100%;
    width: 12%; /* Adjust the width as needed */
    overflow-y: auto; /* Add vertical scrollbar if needed */
    background-color: #242424;
    h2 {
        text-align: left;
        margin-left:10px;
    }
    a {
        color: white;
    }

    a:hover {
        color: skyblue;
    }
}
</style>
  