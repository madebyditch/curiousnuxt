<template>
  <div id="marketingStudies" class="caseStudyList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">

    <nuxt-link v-if="$nuxt.$route.path != '/case-studies/marketing-white-crane'" to="/case-studies/marketing-white-crane" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/whitecrane/1.jpg`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>White Crane</span> Lead Generation + Sales Integration Strategy</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link>

    <nuxt-link v-if="$nuxt.$route.path != '/case-studies/marketing-alomere'" to="/case-studies/marketing-alomere" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/alomereMarketing/1.jpg`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>Alomere Health</span>Digital Marketing Strategy</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link>
    <nuxt-link v-if="$nuxt.$route.path != '/case-studies/marketing-alomere-covid'" to="/case-studies/marketing-alomere-covid" tag="div" class="caseStudy col">
      <div class="picWrap">
        <div class="pic">
          <div class="responsiveImage" v-lazy:background-image="`/images/casestudies/alomereMarketing/3880Percent_1100x700.png`"></div>
        </div>
      </div>
      <div class="studyInfo">
        <h4><span>Alomere Health</span>Public Health Messaging</h4>
        <button>View Case Study</button>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MarketingStudies',
  props: {
    type: String,
  },
  
});
</script>
