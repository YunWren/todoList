<script setup>
import {ref} from 'vue'

const todos = ref([])
const newtodo = ref('')
const placeholderText = ref('不积跬步 无以至千里')
//添加新list
const addtodo = ()=>{
  if(newtodo.value.trim()==='') return
  todos.value.push({
    id:Date.now(),
    content:newtodo.value.trim(),
    isFin:false
  })
  console.log('添加成功',newtodo);
  newtodo.value=''
}
//删除list
const deltodo = (id)=>{
  todos.value = todos.value.filter(todo =>todo.id!==id)  
  console.log(id);
  
}

const fintodo = (item)=>{
  item.isFin = !item.isFin
}

let check = false;
const clearPlaceholder = ()=>{
  placeholderText.value = ''
}
</script>

<template>
  <div class="todo">
    <H1>ToDoList</H1>
  <div class="todo-container">
    <input v-model="newtodo" :class="{ischeck:check}" @click="clearPlaceholder" :placeholder=placeholderText class="todo-input">
    <button class="add-btn"  @click="addtodo()">添加</button>
  </div>
  <ul class="todo-list">
    <li v-for="todo of todos" :key="todo.id" class="todo-item">
      <input type="checkbox" class="todo-check" @click="fintodo(todo)"/>
      <span :class="{finished:todo.isFin}">{{ todo.content }}</span>
      <button class="todo-del" @click="deltodo(todo.id)">x</button>
    </li>
  </ul>
  <div class="todo-len" >
    <span> 共计 {{ todos.length }} 条 </span>
  </div>
  </div>
</template>

<style scoped>
.todo {
  width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}
.todo-container {
  display: flex;
  margin-bottom: 20px;
}
.todo-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}
.add-btn {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #3aa876;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.add-btn:hover {
  background-color: #2a6e59;
}
.todo-list {
  list-style: none;
  padding: 0 10px;
  margin: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}
.todo-item:last-child {
  border-bottom: none;
}
.todo-check {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 12px;
  cursor: pointer;
  background-image: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo-check:checked {
  background-color: #ccc;
  border-color: #ccc;
  background-image: none;
}
.finished {
  text-decoration: line-through;
  color: #868686;
}
.todo-del {
  margin-left: auto;
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
}
.todo-del:hover {
  color: #e74c3c;
}
.todo-len {
  text-align: right;
  margin-top: 10px;
  color: #666;
}
</style>
