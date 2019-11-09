<template>
  <div class="hello">
    <van-image
      width="100"
      height="100"
      :src="require('@/assets/img/logo.png')"
    />
    <van-cell-group>
      <van-field label="类型" v-model="formData.type" />
      <van-field label="标题" v-model="formData.title" />
      <van-field label="内容" v-model="formData.description" />
      <van-field label="链接" v-model="formData.url" />
    </van-cell-group>
    <van-button type="default" @click="add">提交</van-button>
    <van-button type="default" @click="deleteNews">删除</van-button>
    <van-button type="default" @click="update">更新</van-button>
    <van-button type="default" @click="queryAll">查询所有</van-button>
    <van-button type="default" @click="query">查询当前ID</van-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      formData: {
        type: '',
        title: '',
        description: '',
        url: ''
      }
    }
  },
  methods: {
    async add() {
      const res = await this.$api.add(this.formData)
      console.log(res)
      this.formData.type = ''
      this.formData.title = ''
      this.formData.description = ''
      this.formData.url = ''
    },
    async update() {
      const res = await this.$api.update(this.formData)
      console.log(res)
    },
    async deleteNews() {
      const res = await this.$api.deleteNews({ id: 2 })
      console.log(res)
    },
    async queryAll() {
      const { data } = await this.$api.queryAll()
      this.formData = data[0]
    },
    async query() {
      const res = await this.$api.query({ id: 2 })
      console.log(res)
    }
  }
}
</script>
