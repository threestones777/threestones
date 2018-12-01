<template>
    <div>
        <h1>interests</h1>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/epub">电子书</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/movie">电影</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/financial">理财</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/game">游戏</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>