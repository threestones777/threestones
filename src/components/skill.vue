<template>
    <div>
        <h1>skill</h1>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/mechanical">机械</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/computer">计算机</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/web">前端</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/project">项目</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>