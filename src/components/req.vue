<template>
    <div id="app">
         <p>
             <input v-model="inputValue" placeholder="Кинь фрукт">
             <button @click="checkAndAdd">Есть ли такой?</button>
             <button @click="request()">Get for phone</button>
         </p>
         <ul>
           <li v-for="(matchedElements, index) in matchedElements">
           <p>{{ matchedElements }} <button @click="removeConfirmer(index)">Удалить</button> <div><button @click="edit(index)">change name</button></div></p>
             </li>
       </ul>
     </div>
</template>


<script>
import Swal from 'sweetalert2/dist/sweetalert2';
export default {
  data(){ return{
    inputValue: '',
    predefinedArray: ['apple', 'banana', 'cherry', 'date'],
    matchedElements: [],
    buttonClick: 0
  }},
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
    request(){
      this.buttonClick += 1
      fetch('https://dummyjson.com/products/')
        .then((response) => {
          return response.json();
          }) 
        .then((data) => {
          this.matchedElements.push(data.products[this.buttonClick].title.toLowerCase());
          this.predefinedArray.push(data.products[this.buttonClick].title.toLowerCase());
          //console.log(this.predefinedArray)
          })
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
  },
}
</script>
