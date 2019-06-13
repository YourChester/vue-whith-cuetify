<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">
      Add new project
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Add New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputsRules"></v-text-field>
          <v-textarea label="Information" v-model="info" prepend-icon="edit" :rules="inputsRules"></v-textarea>
          <v-menu>
            <v-text-field :rules="inputsRules" slot="activator" label="Due date" prepend-icon="date_range" :value="formattedDate"></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-0 mt-3" @click="submit()">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
export default {
  data: () => ({
    title: '',
    info: '',
    due: '',
    inputsRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ]
  }),
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        console.log(this.title, this.info, this.formattedDate)
      }
    }
  }
}
</script>
