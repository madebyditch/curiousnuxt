<template>
  <div id="app">
    <section class="studySection bg-ltGray s-noBorder">
      <div class="pageWidth">
          <h3><span>Resource:</span>Why Most Marketing Strategies Don’t Create Sales and How to Fix it</h3>
          <div class="col2 s-textRow">
            <div class="col">
              <div class="responsiveImage" v-lazy:background-image="`/workshops/create-sales.svg`"></div>
            </div>
            <div class="col">
              <h5>As a rule, when your potential customers come across your company they should understand what you offer and the problem you help them solve — within five seconds.</h5>
              <p>If it takes them longer than five seconds, you’re losing sales.</p>
              <p>At Curious we work with businesses to help clarify their message and implement marketing strategies targeting their ideal customer. This guide outlines the six areas to consider when putting together your marketing strategy.</p>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection bg-gold s-cta">
      <div class="pageWidth">
        <div class="ctaText">
          <span>Get your free marketing stratey guide.</span> <a href="https://share.hsforms.com/180tDvXPuQ3ezIcEGc29iwA2bew1" target="_blank" class="button">I'm interested.</a>
        </div>
      </div>
    </section>

    <section class="studySection bg-white">
      <div class="pageWidth">
          <div class="col2 s-textRow" >
            <div class="col">
              <h4>What you'll learn:</h4>
              <ol>
                  <li>The parts of your marketing strategy that are necessary to produce qualified leads.</li>
                  <li>What’s needed to make your potential customers curious about your business and the value you bring.</li>
                  <li>The part of your sales funnel needed to turn your marketing qualified leads into sales conversations.</li>
                </ol>
            </div>
            <div class="col">
              <h4>This guide will help you to:</h4>
              <ol>
                  <li>Have a focused conversation with your team about your marketing strategy.</li>
                  <li>Understand where you might need to focus your resources to improve results.</li>
                  <li>Identify the marketing activities that might be costing you time and money but not necessarily leading to new business.</li>
                </ol>
            </div>
          </div>
      </div>
    </section>

    <section class="studySection s-facilitator bg-darkGray">
      <div class="pageWidth">
          <div class="col3 s-textRow">
            <div class="col double">
              <h4>About the author</h4>
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

        { hid: 'og:title', name: 'og:title', content: 'Curious: Resource - Why Most Marketing Strategies Don’t Create Sales and How to Fix it' },
        { hid: 'og:description', name: 'og:description', content: "" },

         { hid: 'og:image', name: 'og:image', content: 'https://discovercurious.com/workshops/create-sales.png' },
         { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
         { hid: 'og:image:width', name: 'og:image:width', content: '1168' },
         { hid: 'og:image:height', name: 'og:image:height', content: '1034' },
      ]
    }
  },
}
</script>

<style></style>
