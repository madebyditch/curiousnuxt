<template>
        <div id="workshops" class="caseStudyList workshopList" v-bind:class="this.type == 'full' ? 'studiesFull' : 'col3'">
          <nuxt-link to="/consulting/strategies-to-create-sales" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/create-sales.svg`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Resource:</span> Why Most Marketing Strategies Don’t Create Sales and How to Fix it</h4>
              <h5>Type: Download <br />
                Cost: Free
              </h5>
            </div>
          </nuxt-link>

          <nuxt-link to="/consulting/design-your-presence" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/persona_thumb.svg`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Coaching Session:</span> Design your digital leadership presence</h4>
              <h5>Type: 1-on-1 Coaching <br />
                Length: 30 minutes <br />
                Cost: Free
              </h5>
            </div>
          </nuxt-link>



          <nuxt-link to="/consulting/build-your-audience" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/build-audience.svg`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Coaching Session:</span> Build your audience in less than an hour a day!</h4>
              <h5>Type: 1-on-1 Coaching <br />
                Length: 30 minutes <br />
                Cost: Free
              </h5>
            </div>
          </nuxt-link>

          <nuxt-link to="/consulting/manage-relationships" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/network_thumb.svg`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Coaching Session:</span> Manage professional relationships with Sales Navigator</h4>
              <h5>Type: 1-on-1 Coaching <br />
                Length: 30 minutes <br />
                Cost: Free
              </h5>
            </div>
          </nuxt-link>




          <nuxt-link to="/consulting/digital-first" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/digital-first.png`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Workshop:</span>Transform your offerings. Learn to think digital first.</h4>
              <h5> Type: Hands on<br />Length: 1/2 Day<br />Cost: from $1000
              </h5>
            </div>
          </nuxt-link>

          

          <!-- <nuxt-link to="/consulting/transition-branding" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/hurdles.png`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Brand Strategy</span> Branding for business transition</h4>
              <h5>Type: Workshop <br />
                Length: 1/2 Day <br />
              </h5>
            </div>
          </nuxt-link> -->

          <!-- <nuxt-link to="/consulting/opportunity-finder" tag="div" class="caseStudy col">
            <div class="picWrap">
              <div class="pic">
                <div class="responsiveImage" v-lazy:background-image="`/workshops/cop.png`"></div>
                <span class="learnMore">Learn More</span>
              </div>
            </div>
            <div class="studyInfo">
              <h4><span>Product Development</span> Product Opportunity Mapping</h4>
              <h5>Type: Recommendation <br />
                Cost: $5,000
              </h5>
            </div>
          </nuxt-link> -->
        </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'BrandingStudies',
  props: {
    type: String,
  },
});
</script>
