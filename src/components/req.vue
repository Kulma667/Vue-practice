<template>
    <div id="app">
      <!-- <h2>
        <p>{{ geter }}</p>
      </h2> -->
         <p>
             <input v-model="inputValue" placeholder="Кинь фрукт">
             <button @click="checkAndAdd">Есть ли такой?</button>
             <button @click="create()">Получить пароль</button>
         </p>
         <ul>
           <li v-for="(matchedElements, index) in matchedElements">
           <p>{{ matchedElements }} <button @click="removeConfirmer(index)">Удалить</button> <div><button @click="input(index)">change name</button></div></p>
             </li>
       </ul>
     </div>
</template>


<script>
import Swal from 'sweetalert2/dist/sweetalert2';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  computed:mapGetters(['geter']),
  data(){ return{
    inputValue: '',
    predefinedArray: ['apple', 'banana', 'cherry', 'date', 'qwrety'],
    matchedElements: [],  
    buttonClick: 0,
  }},
  async mounted()
  {
    await this.$store.dispatch('getreq')
  },
  // created(){
  //     this.buttonClick += 1
  //     fetch('https://dummyjson.com/products/')
  //       .then((response) => {
  //         return response.json();
  //         }) 
  //       .then((data) => {
  //         this.matchedElements.push(data.products[this.buttonClick].title.toLowerCase());
  //         this.predefinedArray.push(data.products[this.buttonClick].title.toLowerCase());
  //         //console.log(this.predefinedArray)
  //         })
  //         fetch('http://127.0.0.1:8000/api/Users')
  //       .then((response) => {
  //         return response.json();
  //         }) 
  //       .then((data) => {
  //         this.matchedElements.push(data[this.buttonClick].Name.toLowerCase());
  //         this.predefinedArray.push(data[this.buttonClick].Name.toLowerCase());
  //         //console.log(this.predefinedArray)
  //         })

  //   },
  methods: {
    clearMatchedElements() {
      this.matchedElements = [];
    },
    checkAndAdd() {
      const input = this.inputValue.toLowerCase();
      if (this.predefinedArray.includes(input)) {
        this.matchedElements.push(input);
        console.log(input)
        
      } else {
        alert('Input does not match any predefined element.');

      }
    },
    removeElement(index) {
      this.matchedElements.splice(index, 1);
      this.predefinedArray.splice(index, 1);
    },
    edit(index)
    {
      const input = this.inputValue.toLowerCase();
        this.matchedElements[index] = input
        this.predefinedArray[index] = input
    },
    removeConfirmer(index)
    {
      Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    ),
    this.removeElement(index) 
  }
})
    },
    create(){
      this.buttonClick += 1
      fetch('http://127.0.0.1:8000/api/Users')
        .then((response) => {
          return response.json();
          }) 
        .then((data) => {
          this.matchedElements.push(data[this.buttonClick].Password.toLowerCase());
          this.predefinedArray.push(data[this.buttonClick].Password.toLowerCase());
          //console.log(this.predefinedArray)
          })
    },
    // reverseArray() {
    //   this.matchedElements = this.matchedElements.reverse();
    // },
    async input(index)
    {
    const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
    'aria-label': 'Type your message here'
   },
  showCancelButton: true
})
  if(text)
  {
    Swal.fire('u changed text')
    axios
      .get("http://127.0.0.1:8000/api/ChangePass?act=ChangePassword&id=" + String(index+2)+"&password="+String(text))
      .then(function (response) {
        console.log(response);
      });
    this.matchedElements[index] = text;
    this.predefinedArray[index] = text;
  }    
}
},
    async login()
    {
      const { value: text } = await Swal.fire({
      input: 'textarea',
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Login and Password',
      inputAttributes: {
      'aria-label': 'Login and Password'
   },
  showCancelButton: false
})
    }
}
</script>
