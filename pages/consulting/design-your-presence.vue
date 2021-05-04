<template>
  <div id="app">
    <section class="studySection bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h3><span>30 Min Session:</span>Design your personal digital presence to build your brand and connect with your audience</h3>
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/workshops/persona.svg`"></div>
            </div>
            <div class="col">
              <h5>Regardless of industry or age, most professionals are now using social media to network or connect, but they still crave that personal touch. But few people intuitively know how to share their own unique personality and insights online.</h5>
              <p>It all starts with your online presence. Those finding success are doing so with a specific strategy of how they want to be perceived. Carefully crafting your Linkedin profile and social media interactions will lead to better connections and more relevant opportunities. We’ll teach you to curate your online presence while adding the personal touches that build your executive brand and drive revenue. </p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">
              <h4>What you'll learn:</h4>
              <ol>
                  <li>Craft an authentic business-focused online presence.</li>
                  <li>Understand owned digital publicity and how you can work with an agency for marketing content.</li>
                  <li>Turn social networks to virtual connection channels powered sales tools.</li>
                </ol>
            </div>
            <div class="col">
              <h4>Our materials will help you to:</h4>
              <ol>
                  <li>Shorten relationship-building time by establishing a searchable personal narrative that can be found online.</li>
                  <li>Use your digital presence to prime in-person meetings with information about your accomplishments on credentials.</li>
                  <li>Establish a platform that can be used to establish your authority through evergreen thought leadership content.</li>
                </ol>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Would you like to improve your digital persona? We can help.</span> <a href="https://app.hubspot.com/meetings/garrio/social-leadership" class="button">Schedule a free session</a>
        </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">

            </div>
            <div class="col">
              <h4>Helpful resources</h4>
              <ul>
                <li>Video: <a href="https://www.youtube.com/watch?v=haVL-CAqP4Q&list=PL7MtT0VRyvmKjN9fUraXooFAdqTpI3xbh">The Super Simple Way to Be Heard In Incredible Noisy Times</a></li>
                <li>Video: <a href="https://www.youtube.com/watch?v=NQzfPT-QqMc">Content Transformation with LinkedIn's Dan Roth</a></li>
                <li>Video: <a href="https://youtu.be/HFergI0UOAs">Donald Miller Discussing and element of his Storybrand Framework</a></li>
                <li>Book: <a href="https://www.amazon.com/Platform-Michael-Hyatt-audiobook/dp/B0085B2SPG/">Platform: Get Noticed in a Noisy World</a></li>
                <li>Article: <a href="https://business.linkedin.com/marketing-solutions/content-marketing/an-executives-blueprint-for-linkedin-mastery">An Executive’s Blueprint for LinkedIn Mastery</a></li>
                <li>Podcast, One Percent Edge: <a href="http://theonepercentedge.libsyn.com/52-using-social-media-to-authentically-engage-your-target-customer-with-ryan-holmes?tdest_id=523871">Episode #52</a></li>
              </ul>
            </div>
          </div>
      </div>
    </section>


    <!-- <section class="studySection bg-ltGray s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Need more details about what's discussed or want customization?</span> <nuxt-link class="button" to="#contact">Please Contact Us</nuxt-link>
        </div>
      </div>
    </section> -->

    <section class="studySection s-facilitator bg-darkGray">
      <div class="pageWidth">
          <div class="col3 s-textRow">
            <div class="col double">
              <h4>About the facilitator</h4>
              <p>I’ve witnessed technology changing the ways we nurture business relationships. However, we still need to create meaningful connections to move our on and offline  business relationships forward.</p>
              <p>I believe that technology doesn't have to replace how we interact in person; it should enhance how we connect.</p>
              <p>I've spent over a decade collaborating with business owners, executives, and clients to make social platforms work for them. I focus on connecting the dots between social media, sales activities, advertising trends, revenue goals, and, most importantly, their time. The results are scalable marketing systems designed to help effectively nurture the business relationships that matter without sacrificing time or resources that could be spent on other high-impact activities. </p>
              <p>Rest assured that what you learn will work! It’s the process I use myself.</p>
              <p>Find me on <a href="https://www.linkedin.com/in/garrioharrison/">Linkedin</a>.</p>
            </div>
            <div class="col">
              <h5>Garrio Harrison</h5>
              <div class="responsiveImage" v-lazy:background-image="`/workshops/garrio.png`"></div>
            </div>
          </div>
      </div>
    </section>

  </div>
</template>

<script>

export default {
  components: {
  },
  head () {
    return {
      title: 'Curious: Coaching - Learn to build your audience in 60 min a day',
      meta: [
        // { hid: 'description', name: 'description', content: 'Curious consultants help you identify your next best marketing steps, and develop marketing strategies to find and connect with your customers.' },

        // { hid: 'keywords', name: 'keywords', content: 'product design, branding, marketing, coaching, consulting, design sprint, review, strategy, digital, identity, story, minneapolis, minnesota, twin cities, hightlight center, ux, interface' },

        { hid: 'og:title', name: 'og:title', content: 'Curious: Coaching - Design your personal digital presence to build your brand' },
        { hid: 'og:description', name: 'og:description', content: "" },

         { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/workshops/persona.png' },
         { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', name: 'og:image:width', content: '1168' },
         { hid: 'og:image:height', name: 'og:image:height', content: '1034' },
      ]
    }
  },
}
</script>

<style></style>
