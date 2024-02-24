<script setup lang="ts">

let inventoryList = [
        {name: "Health Potion", quantity: 2,},
        {name: "Diamond", quantity: 5,},
        {name: "Pair of Manacles", quantity: 1,},
        {name: "Experimental Potion #1", quantity: 1,},
        {name: "Experimental Potion #2", quantity: 1,},
        {name: "Experimental Potion #3", quantity: 1,},
        {name: "Super Health Potion", quantity: 2,}
    ]

</script>

<template>
    <h1>Inventory</h1>

    <div class="container">
        <ul>
            <li v-for="item in inventoryList"><p class="name">{{ item.name }}</p> <p class="quantity">{{ item.quantity }}</p></li>
        </ul>
    </div>
</template>

<style>

.container {
    background-color: #ffffff51;
    border: 1px solid #dddddd41;
    height:80%;
    width:100%;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    ul {
        list-style-type: none;
        li {
            background-color: #ababab;
            padding: 6px;
            margin: 4px;
            width:30%;
            justify-content: space-between;
            display: flex;
            .name {
                text-align: left;
            }
            .quantity {
                text-align: right;
                margin-right: 10px;;
            }
        }
        li:hover {
            background-color: #d3d3d3;
        }
    }
}


</style>
