<template>
  <div>
    <h1>v-forの使い方を確認する!</h1>
    <pre>
        v-forの使い方はJS等と近い書き方見たいです。
        :keyが少しややこしいかも知れないです。
    </pre>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <p>オブジェクト</p>
    <ul id="v-for-object" class="demo">
      <li v-for="value in object" :key="value">
        {{ value }}
      </li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name) in object" :key="value">
        {{ name }}: {{ value }}
      </li>
    </ul>
    <ul id="v-for-object" class="demo">
      <li v-for="(value, name, index) in object" :key="value">
        {{ index }}.{{ name }}: {{ value }}
      </li>
    </ul>
  </div>
  <div>
    <button @click="addArray()">Pushします</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
  methods: {
    addArray: function () {
      this.items.push({ message: "push me" });
    },
  },
};
</script>

<style scoped>
</style>