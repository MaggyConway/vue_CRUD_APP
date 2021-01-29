<template>
    <div id="table"> 
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <template slot-scope="scope">
                <el-button type="text" @click="dialogFormVisible = true">Добавить</el-button>
              </template>
            </el-dropdown-item>
          </el-dropdown-menu>

          <el-dialog style="text-align: left" title="Добавить пользователя" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="Введите имя:" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="on" autofocus></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Отмена</el-button>
              <el-button type="primary" @click="handleAdd(names)">ОК</el-button>
            </span>
          </el-dialog>

        </el-dropdown>
        <span>Маргарита</span>
      </el-header>
      
      <el-main>
        <el-table 
          :data="names.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          width="100%"
          max-height="500px"
          >

          <el-table-column
            type="index"
            width="50">
          </el-table-column>

          <el-table-column label="Name" prop="name" width="120" sortable></el-table-column>

          <el-table-column
              fixed="right" width="700">

              <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
              </template>

              <template slot-scope="scope">
                <el-button
                  icon="el-icon-edit" circle
                  type="info"
                  @click="beforeEdit(scope.$index, names); dialogEditVisible = true">
                </el-button>

                <el-dialog title="Изменить имя" :visible.sync="dialogEditVisible">
                  <el-form :model="formEdit">
                    <el-form-item label="Введите имя:" :label-width="formLabelWidth">
                      <el-input v-model="formEdit.name" autocomplete="on" autofocus></el-input>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogEditVisible = false">Отмена</el-button>
                    <el-button type="primary" @click="handleEdit(names)">OK</el-button>
                  </span>
                </el-dialog>

                <el-button
                  icon="el-icon-delete" circle
                  type="danger"
                  @click="handleDelete(scope.$index, names)">
                </el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-main>
    </div>  
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: ''
        },
        dialogEditVisible: false,
        formEdit: {
          name: ''
        },
        names: [],
        json_parse: [],
        formLabelWidth: '120px',
        search: ''
      }
    },
    methods: {
      beforeEdit(id, table) {
        localStorage["edit-index"] = id;
      },
      handleEdit() {
        this.dialogEditVisible = false;
        this.names[localStorage["edit-index"]].name = this.formEdit.name;
        localStorage["local_names"] = JSON.stringify(this.names);
      },
      handleDelete(index, table) {
        table.splice(index, 1);
        localStorage["local_names"] = JSON.stringify(this.names);
      },
      handleAdd(table) {
        localStorage["new_name"] = this.form.name;
        this.dialogFormVisible = false;
        this.names.push({
          name: localStorage["new_name"]
        });
        localStorage["local_names"] = JSON.stringify(this.names);
        console.log("uploaded data in localStorage...");
      }
    },
    mounted() {
      if (localStorage["local_names"] !== undefined) {
        this.json_parse = JSON.parse(localStorage["local_names"]);
        this.names = this.json_parse;
      }
    },
    beforeDestroy() {
      localStorage["local_names"] = JSON.stringify(this.names);
    }
  }
  
</script>
<style> 
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .v-modal {
    display: none;
  }
  #table {
    width: 100%;
  }
</style>