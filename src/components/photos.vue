<template>
    <div>
        <h1>photos</h1>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/plant">植物</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/animal">动物</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/travel">旅行</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
