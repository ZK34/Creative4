<template>
    <div class="items">
      <div class="product">
        <h1 style="text-align:center;">{{this.$root.$data.reviewItem.name}}</h1>

        <h3 style="text-align:center;">Year: {{this.$root.$data.reviewItem.category}}</h3>

        <div class="image">
          <img :src="'/images/' + this.$root.$data.reviewItem.image">
        </div>

        <h1 style="text-align:center;">Description:</h1>
        <p style="text-align:center;">
          {{this.$root.$data.reviewItem.description}}
        </p>

        <div class="price">
          <h3 style="text-align:center;">Album price:  {{this.$root.$data.reviewItem.price}}</h3>
        </div>

        <div class="newReview">
          <h1 style="text-align:center;">Add a Review</h1>
          <form style="width:100%;" v-on:submit.prevent="addUserReview">
            <input v-model="author" placeholder="Reviewer Name">
            <br>
            <input v-model="title" placeholder="review title">
            <br>
            <textarea v-model="text"></textarea>
            <br>
            <button type="submit">Add Review</button>
          </form>
        </div>
        <br><br>
        <div class="for-reviews" v-for="review in activeReviews" :key="review._id">
          <h1 style="text-align:center;">{{review.title}}</h1>
          <h3 style="margin-left:8px;">By: {{review.author}}</h3>
          <p style="text-align:center;font-size:21px;margin:10px;">{{review.text}}</p>
          <br>
          <p style="margin-left:8px;">{{review.date}}</p>
          <div class="right">
            <button @click="changeReview(review)" class="delete" style="background-color:#ffda62;">Edit</button>
            <button @click="deleteReview(review)" class="delete">Delete this review</button>
          </div>

          <div class="upload" v-if="editItem && editItem._id === review._id">
            <br/>
            <input v-model="editItem.title" style="text-align:center;"/>
            <br/>
            <input v-model="editItem.author" style="text-align:center;">
            <br/>
            <textarea v-model="editItem.text" rows="4" cols="20"></textarea>

            <div class="center">
              <button @click="editReview()" class="edit">Save Changes</button>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'AllReviews',
    props: {
      reviews: Array
    },
    data() {
      return {
        itemId: this.$root.$data.reviewItem.id,
        title: "",
        author: "",
        text: "",
        date: new Date().toLocaleString().split(',')[0],
        reviewList: [],
        editItem: null
      }
    },
    created() {
      this.getReviews();
    },
    computed: {
      activeReviews() {
        return this.reviewList;
      }
    },
    methods: {
        async addUserReview() {
        try {
          let rep = await axios.post('/api/reviews', {
            itemId: this.itemId,
            title: this.title,
            author: this.author,
            text: this.text,
            date: this.date
      });
      this.reviewList.push(rep.data);

      this.text = ''
      this.author = ''
      this.title = ''
    } catch (error) {
      console.log(error);
    }
     },
       async getReviews() {
         try {
          const response = await axios.get("/api/reviews/" + this.itemId);
          console.log(response.data)
          this.reviewList = response.data;
        } catch (error) {
          console.log(error);
        }
     },
      async deleteReview(selectedReview) {
      try {
        await axios.delete("/api/reviews/" + selectedReview._id);

        await this.getReviews()
        this.editItem = null
      } catch (error) {
        console.log(error);
      }
      },
      async editReview() {
        try {
         axios.put('/api/reviews/' + this.editItem._id, {
            itemId: this.editItem.itemId,
            title: this.editItem.title,
            author: this.editItem.author,
            text: this.editItem.text,
            date: new Date().toLocaleString().split(',')[0]
          });

          this.editItem = null

        } catch (error) {
          console.log(error)
        }
      },
      changeReview(item) {
        this.editItem = item;
      },
    }
  }
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
}

.product img {
  border: 2px solid #333;
  height: 350px;
  width: 300px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
  justify-content: center;
}

button {
  height: 40px;
  background: #7DD3D8;
  color: black;
  border: 2px solid #000000;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

input {
   width: 60%;
}

textarea {
  width: 60%;
  height: 200px;
}

.delete {
  height: 25px;
  background: #ffcccb;
  color: black;
  border: 2px solid #000000;
  margin: 8px;
}

.edit {
  height: 25px;
  background: #7DD3D8;
  color: black;
  border: 2px solid #000000;
  margin: 8px;
}

.right {
  display: flex;
  justify-content: flex-end;
}

.center {
  display: flex;
  justify-content: center;
}

.for-reviews {
  background: #D3D3D3;
  border: 2px solid #000000;
  margin: 10px;
}

.upload {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.auto {
  margin-left: auto;
}

</style>
