<script setup>
import {ref,onMounted,watch, computed} from 'vue'
//总todo
const todos = ref(JSON.parse(localStorage.getItem('todos')) || [])
//新todo
const newtodo = ref('')
//提示词
const placeholderText = ref('')
//背景图片
const backgroundimage = ref('')
//背景半透明
const hasBackground = ref(false);

const today = ref('');

const quotes = [
  '不积跬步 无以至千里',
  '今日事 今日毕',
  '请关注yunge喵',
  '想多了全是问题 做多了全是答案',
  '不弃微末 久久为功',
  '知命不惧 日日自新',
  '凡心所向 素履以往 生如逆旅 一苇以航',
  '大道至简 静水流深',
  '慢慢来 也是一种快',
  '千里之行 始于足下',
  '没有白走的路 每一步都算数',
]

onMounted(()=>{
  const randomIndex = Math.floor(Math.random()*quotes.length)
  //随机并且取整
  placeholderText.value = quotes[randomIndex]
    // 检查 localStorage 中是否有保存的背景图
    const savedBackground = localStorage.getItem('backgroundImage');
  if (savedBackground) {
    // 如果有，设置页面的背景图
    hasBackground.value = true; // 页面加载时检测到有背景
    document.body.style.backgroundImage = `url(${savedBackground})`;
    document.body.style.backgroundSize = 'cover'; // 可选
    document.body.style.backgroundPosition = 'center'; // 可选
  }
  //日期
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  today.value = `${year}-${month}-${day}`;
})
//背景图片上传
const fileInput = ref(null)

const triggerUpload = () => {
  fileInput.value && fileInput.value.click()
}
const clearUpload = ()=>{
  document.body.style.backgroundImage = ''
  localStorage.setItem('backgroundImage', '');
  hasBackground.value = false;
}
const uploadBackground = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      // 通过 FileReader 读取文件并转换成 Data URL
      const imageUrl = e.target.result;

      // 设置为背景图
      document.body.style.backgroundImage = `url(${imageUrl})`;
      document.body.style.backgroundSize = 'cover'; // 可选，确保背景图覆盖整个页面
      document.body.style.backgroundPosition = 'center'; // 可选，确保背景图居中
      hasBackground.value = true; // 上传成功后，标记有背景
      // 将背景图片的 URL 存储到 localStorage 中
      localStorage.setItem('backgroundImage', imageUrl);
    };

    reader.readAsDataURL(file);
  }
};
const finishAll = () => {
  todos.value.forEach(todo => {
    todo.isFin = true
  })
}

// 清除已完成事项
const clearFinished = () => {
  todos.value = todos.value.filter(todo => !todo.isFin)
}

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

//完成沉底
const sortedTodos = computed(()=>{
  return todos.value.slice().sort((a,b)=>{
    return Number(a.isFin) - Number(b.isFin)
  })
})

const fintodo = (item)=>{
  item.isFin = !item.isFin
}

let check = false;
const clearPlaceholder = ()=>{
  placeholderText.value = ''
}

watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos))
}, { deep: true })

</script>

<template>
  <!-- github -->
  <a
  class="github-link"
  href="https://github.com/YunWren/todoList"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.6.1-.6.1-.6 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8.7 2.2 1.1.3.6 1 .5 1.2.4.1-.4.4-.7.7-1-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.2.9-.3 1.8-.5 2.7-.5s1.8.2 2.7.5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.4.2 2.5.1 2.8.7.9 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.2 5.7.4.3.7.8.7 1.6v2.4c0 .3.2.7.8.6 4.4-1.5 7.6-5.6 7.6-10.7C23.4 5.6 18.3.5 12 .5z"
    />
  </svg>
</a>
<div class="upload-container">
  <span @click="triggerUpload" class="upload-span">上传背景</span>
  <span @click="clearUpload" class="upload-span">恢复默认</span>
  <input type="file" ref="fileInput" @change="uploadBackground" accept="image/*" style="display: none;" />
</div>

  <div class="todo" :class="{ 'transparent': hasBackground }">
    <H1>ToDoList</H1>
  <div class="todo-container">
    <input v-model="newtodo" @keyup.enter="addtodo" @click="clearPlaceholder" :placeholder=placeholderText class="todo-input">
    <button class="add-btn"  @click="addtodo()">添加</button>
  </div>
  <ul class="todo-list">
  <transition-group name="list" tag="ul">
    <li v-for="todo of sortedTodos" :key="todo.id" class="todo-item">
      <input type="checkbox" class="todo-check" :class="{finished: todo.isFin}" @click="fintodo(todo)" />
      <span :class="{finished: todo.isFin}">{{ todo.content }}</span>
      <button class="todo-del" @click="deltodo(todo.id)">
        <img class="todo-x" src="../public/x.png">
      </button>
    </li>
  </transition-group>
</ul>
  <div class="todo-ops">
  <button class="ops-btn" @click="finishAll">全部完成</button>
  <button class="ops-btn" @click="clearFinished">清除已完成</button>
  </div>
  <div class="todo-foot">
    <div class="todo-Date">
    <span>{{ today }}</span>
  </div>
  <div class="todo-len" >
    <span> 共计   {{ todos.length }}   条 </span>
  </div>
  </div>
  </div>
</template>

<style scoped>

</style>
