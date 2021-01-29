<template>
  <div id="app">
    <el-container style="border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">

          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>МЕНЮ</template>

            <el-menu-item index="1-1">
              <router-link to="/">Таблица</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/profile">Профиль</router-link>
            </el-menu-item>
            <!-- <el-menu-item index="1-3">
              <router-link to="/">Выход</router-link>
            </el-menu-item> -->

          </el-submenu>

          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <router-view/>
      </el-container>

    </el-container>
  </div>
</template>

<style>
  .el-aside {
    color: #333;
    height: 100vh;
  }
</style>
  
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>