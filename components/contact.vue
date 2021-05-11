<template>
    <section id="contact">
      <div class="pageWidth col2">
        <div class="col">
          <h3>Advisor, partner, coach, or maker... Curious can help</h3>
          <p>We understand the complexities of growing and innovating a business. The good news is that you don’t have to go it alone. We’d love to help! But before we can do that, we need to know a bit more about you and your challenges.</p>
          <p><strong>Please fill out this quick form and we’ll get back to you as soon as possible.</strong></p>
          <p class="address"><a href="https://www.google.com/maps/place/Curious/@44.9989033,-93.2525572,17z/data=!3m1!4b1!4m5!3m4!1s0x52b32db8b34daef9:0xe12fd7d2771f2dc2!8m2!3d44.9988995!4d-93.2503632">807 Broadway Street NE, Suite 140<br />Minneapolis, MN 55413</a></p>
        </div>
        <div class="col form">
          <div class="success" v-if="messageSuccess">
            <h4>Thanks for saying hi!</h4>
            <h5>We'll get back to you as soon as we can. While you wait, perhaps you'd like to learn about the <nuxt-link to="/#people">team</nuxt-link> reading your email.</h5>
            <div class="buttonWrap">
              <button @click="clearThanks()">Another Message</button>
            </div>
          </div>
          <div v-else>
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" v-model="senderName" placeholder="My name is" required>
            <label for="email">Your Email Address</label>
            <input type="email" id="email" name="email" v-model="senderEmail" placeholder="My email address is" required>
            <label for="company">Your Company</label>
            <input type="text" id="company" name="company" v-model="senderCompany" placeholder="I represent (organization)">
            <label for="discount">How much of a discount?</label>
            <input type="text" id="discount" name="discount" v-model="eatSpam" class="hp">
            <div class="selectList">
              <label for="subject">Subject</label>
              <select id="subject" name="subject" v-model="contactSubject" >
                <option value="" disabled selected>What's this about? (choose one)</option>
                <option value="1">Branding help</option>
                <option value="2">Marketing help</option>
                <option value="3">Product help</option>
                <option value="4">Schedule a Design Sprint</option>
                <option value="5">Just saying hello</option>
              </select>
            </div>
            <label for="message">Your Message</label>
            <textarea id="message" name="message" v-model="contactMessage" cols="30" rows="10" placeholder="My message is" required></textarea>
            {{messageErrors}}
            <div class="buttonWrap">
            <button @click="processContact()">Send Message</button>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'contact',
  data () {
    return {
      senderName:'',
      senderEmail:'',
      senderCompany:'',
      contactSubject:'',
      contactMessage:'',
      eatSpam:'',
      messageSuccess: false,
      messageErrors: '',
    }
  },
  created () {
  },
  destroyed () {
  },
  methods: {
    processContact() {
      var that = this;
      if(this.eatSpam === ''){
        if(this.senderName != '' && this.senderEmail != '' && this.contactMessage != ''){
          switch(this.contactSubject){
            case "1":
              var newSubject = "Curious Website - I need branding help"
              var type = 1
              break;
            case "2":
              var newSubject = "Curious Website - I need marketing help";
              var type = 2
              break;
            case "3":
              var newSubject = "Curious Website - I need product help";
              var type = 3
              break;
            case "4":
              var newSubject = "Curious Website - I'd like to schedule a Design Sprint";
              var type = 3
              break;
            default:
              var newSubject = "Curious Website - General Inquiry";
              var type = 0
              break;
          }
          
          let params = {
            senderName: that.senderName,
            senderEmail: that.senderEmail,
            message: `${that.contactMessage} \n \n Sent by: ${that.senderName} (${that.senderEmail}), from ${that.senderCompany}`,
            subject: newSubject,
            messageType: type
          }

          axios.post('https://discovercurious.com/.netlify/functions/send-emails', JSON.stringify(params))
          .then((response) => {
            that.messageSuccess = true;
            console.log('SUCCEEDED: lambda sent: \n', response.data);            
          })
          .catch((error) => {
            console.log('FAILED: lambda failed', error);
          });
        }else{
          this.messageErrors = 'Name, Email & Message cannot be blank'
        }
      }
    },
    clearThanks(){
      this.contactMessage = '';
      this.contactSubject = '';
      this.messageSuccess = false;
    },
  },
  computed: {

  }
});
</script>
